import { NextResponse } from "next/server";
import { getDb, decryptSSN, getSsnEncryptionKey } from "@/lib/applications-db";

// n8n builds the DocuSign envelope from the application data we send here
// and returns an embedded signing URL for the Client -- DocuSign emails the
// second signer (Co-Trustee / Manager) automatically if one is on the
// application.
const N8N_DOCUSIGN_WEBHOOK: Record<"401k" | "ira", string> = {
  "401k": "https://n8n.coreautomations.org/webhook/docusign-send-401k",
  ira: "https://n8n.coreautomations.org/webhook/docusign-send-ira",
};

// Embedded signing views are single-use and short-lived -- if the Client
// closes the tab before finishing, the envelope itself is still open on
// DocuSign's side. This re-requests a fresh view for that same envelope
// instead of refusing outright, since embedded signers never get an email
// fallback link the way Co-Trustee/Manager recipients do.
const N8N_DOCUSIGN_RESUME_WEBHOOK = "https://n8n.coreautomations.org/webhook/docusign-resume-signing";

// A one-time safety net emailed the moment the envelope is first created --
// if the Client closes the embedded signing tab and has no link in hand
// (e.g. didn't bookmark it, didn't hit Back), this is the only way back in,
// since embedded signing itself never emails them.
const N8N_SIGNING_LINK_EMAIL_WEBHOOK = "https://n8n.coreautomations.org/webhook/docusign-signing-link-email";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const token = body?.token;
  if (!token) return NextResponse.json({ error: "Missing resume token" }, { status: 400 });

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const row = await db
    .prepare(
      `SELECT plan, payment_status, docusign_envelope_id, docusign_status,
              lead_first_name, lead_last_name, lead_email, lead_phone,
              personal_info, spouse_info, business_info, eligibility_answers, ssn_encrypted, ssn_iv
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (row.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment has not been completed yet" }, { status: 409 });
  }

  const origin = new URL(request.url).origin;
  const returnUrl = `${origin}/apply/signing-complete?id=${id}&token=${token}`;
  const resumeLink = `${origin}/apply/resume?id=${id}&token=${token}`;
  const lead = {
    firstName: row.lead_first_name,
    lastName: row.lead_last_name,
    email: row.lead_email,
    phone: row.lead_phone,
  };

  if (row.docusign_status === "completed") {
    return NextResponse.json(
      { error: "This application has already been fully signed", alreadySent: true },
      { status: 409 }
    );
  }

  // An envelope is already out -- don't build a new one, just hand back a
  // fresh view of the one that's already there (e.g. the customer closed
  // the signing tab before finishing).
  if (row.docusign_status === "sent") {
    if (!row.docusign_envelope_id) {
      return NextResponse.json({ error: "Could not resume the signing process" }, { status: 502 });
    }
    try {
      const res = await fetch(N8N_DOCUSIGN_RESUME_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationId: id, envelopeId: row.docusign_envelope_id, returnUrl, lead }),
      });
      const data = (await res.json().catch(() => ({}))) as { signingUrl?: string };
      if (!res.ok || !data.signingUrl) throw new Error("n8n did not return a resumed signing URL");
      return NextResponse.json({ url: data.signingUrl });
    } catch (err) {
      console.error("Failed to resume application for signature", err);
      return NextResponse.json({ error: "Could not resume the signing process" }, { status: 502 });
    }
  }

  const webhookUrl = N8N_DOCUSIGN_WEBHOOK[row.plan as "401k" | "ira"];
  if (!webhookUrl) {
    return NextResponse.json({ error: "Electronic signing for this plan isn't available yet" }, { status: 503 });
  }

  const personalInfo = row.personal_info ? JSON.parse(row.personal_info as string) : {};
  const spouseInfo = row.spouse_info ? JSON.parse(row.spouse_info as string) : {};
  const businessInfo = row.business_info ? JSON.parse(row.business_info as string) : {};
  const eligibilityAnswers = row.eligibility_answers ? JSON.parse(row.eligibility_answers as string) : {};

  if (row.ssn_encrypted && row.ssn_iv) {
    const secret = await getSsnEncryptionKey();
    if (!secret) return NextResponse.json({ error: "Signing is not configured yet" }, { status: 503 });
    // Only decrypted here, at the one moment it's needed to populate the
    // signed PDF -- never logged, returned, or stored unencrypted.
    try {
      personalInfo.ssn = await decryptSSN(row.ssn_encrypted as string, row.ssn_iv as string, secret);
    } catch (err) {
      // AES-GCM throws if the key doesn't match what encrypted this value
      // (e.g. SSN_ENCRYPTION_KEY was rotated since) -- that SSN is not
      // recoverable, so fail clearly instead of crashing the route.
      console.error("Failed to decrypt SSN for application", id, err);
      return NextResponse.json({ error: "Could not prepare the signing request" }, { status: 500 });
    }
  }

  let signingUrl: string;
  let envelopeId: string;
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ applicationId: id, returnUrl, lead, personalInfo, spouseInfo, businessInfo, eligibilityAnswers }),
    });
    const data = (await res.json().catch(() => ({}))) as { signingUrl?: string; envelopeId?: string };
    if (!res.ok || !data.signingUrl || !data.envelopeId) {
      throw new Error("n8n did not return a signing URL");
    }
    signingUrl = data.signingUrl;
    envelopeId = data.envelopeId;
  } catch (err) {
    console.error("Failed to send application for signature", err);
    return NextResponse.json({ error: "Could not start the signing process" }, { status: 502 });
  }

  await db
    .prepare(
      `UPDATE applications SET docusign_envelope_id = ?1, docusign_status = 'sent', updated_at = datetime('now') WHERE id = ?2`
    )
    .bind(envelopeId, id)
    .run();

  // Awaited, not fire-and-forget -- on Cloudflare Workers, an unawaited
  // fetch can get cut off mid-request as soon as the response below is
  // returned and the execution context tears down. A failed send here
  // still doesn't block the signing URL response; it's just caught and
  // logged rather than left to race the response.
  try {
    await fetch(N8N_SIGNING_LINK_EMAIL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ applicationId: id, plan: row.plan, lead, resumeLink }),
    });
  } catch (err) {
    console.error("Failed to send signing-link email", err);
  }

  return NextResponse.json({ url: signingUrl });
}
