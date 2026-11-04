import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";
import { getDocuSignConnectSecret, verifyDocuSignSignature } from "@/lib/docusign-webhook";

// DocuSign Connect calls this once an envelope reaches "completed" --
// Step 8 (automatic fulfillment) can't safely start until both the payment
// AND every required signature are confirmed, per spec: "Do not mark the
// plan established merely because the service order form was paid and
// signed" and "fulfillment does not begin before the form is fully executed."
const N8N_DOCUSIGN_COMPLETE_WEBHOOK = "https://n8n.coreautomations.org/webhook/docusign-complete-ghl";

// Caps how long we'll wait on this notification before giving up -- a hung
// n8n workflow (e.g. an SMTP step stuck on a blocked outbound port) must
// never be able to stall DocuSign Connect's webhook response indefinitely.
async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// DocuSign Connect's JSON payload shape varies by configuration (Classic vs
// newer Connect, "aggregate" vs a custom template). This reads the handful
// of field paths actually seen in practice rather than assuming one exact
// shape -- if DocuSign changes format again, the logged raw body makes it
// easy to add another path here.
function extractEnvelopeInfo(payload: unknown): { envelopeId: string | null; status: string | null } {
  const p = payload as Record<string, unknown>;
  const data = (p?.data as Record<string, unknown>) ?? {};
  const envelopeSummary = (data?.envelopeSummary as Record<string, unknown>) ?? {};

  const envelopeId =
    (data?.envelopeId as string) ?? (p?.envelopeId as string) ?? (envelopeSummary?.envelopeId as string) ?? null;

  const status =
    (envelopeSummary?.status as string) ??
    (data?.status as string) ??
    (p?.status as string) ??
    (typeof p?.event === "string" && (p.event as string).includes("completed") ? "completed" : null);

  return { envelopeId, status };
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-docusign-signature-1");

  const secret = await getDocuSignConnectSecret();
  if (!secret) {
    return NextResponse.json({ error: "Signature completion tracking is not configured yet" }, { status: 503 });
  }

  const valid = await verifyDocuSignSignature(rawBody, signature, secret);
  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const payload = JSON.parse(rawBody);
  const { envelopeId, status } = extractEnvelopeInfo(payload);

  if (!envelopeId) {
    console.error("DocuSign Connect event missing envelopeId", rawBody);
    return NextResponse.json({ received: true });
  }

  if (status?.toLowerCase() !== "completed") {
    // Other envelope/recipient events (sent, delivered, declined, voided)
    // aren't acted on yet -- only "completed" moves the pipeline forward.
    return NextResponse.json({ received: true });
  }

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const row = await db
    .prepare(
      `SELECT id, docusign_status, plan, lead_first_name, lead_last_name, lead_email
         FROM applications WHERE docusign_envelope_id = ?1`
    )
    .bind(envelopeId)
    .first<{
      id: string;
      docusign_status: string;
      plan: string;
      lead_first_name: string;
      lead_last_name: string;
      lead_email: string;
    }>();

  if (!row) {
    console.error("DocuSign Connect event for unknown envelope", envelopeId);
    return NextResponse.json({ received: true });
  }

  // DocuSign may redeliver the same event; only act on it once.
  if (row.docusign_status === "completed") {
    return NextResponse.json({ received: true, alreadyProcessed: true });
  }

  await db
    .prepare(`UPDATE applications SET docusign_status = 'completed', updated_at = datetime('now') WHERE id = ?1`)
    .bind(row.id)
    .run();

  try {
    await fetchWithTimeout(N8N_DOCUSIGN_COMPLETE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicationId: row.id,
        plan: row.plan,
        envelopeId,
        lead: { firstName: row.lead_first_name, lastName: row.lead_last_name, email: row.lead_email },
      }),
    });
  } catch (err) {
    // D1 already reflects completion regardless; a failed notification just
    // means GHL doesn't hear about it until the next manual check.
    console.error("Failed to notify GHL of signature completion", err);
  }

  return NextResponse.json({ received: true });
}
