import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";

// Reuses the exact same n8n webhook/email as the normal signing-link safety
// net in send-for-signature -- this just covers the case where that route's
// own webhook call to n8n failed or timed out on our end (even if DocuSign
// itself actually succeeded), so the customer still ends up with an email
// containing a working link back in, instead of nothing at all.
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
      `SELECT plan, payment_status, lead_first_name, lead_email FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Only makes sense once payment is actually in -- this is purely a "here's
  // your link" resend, not a trigger for anything DocuSign-side.
  if (row.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment has not been completed yet" }, { status: 409 });
  }

  const origin = new URL(request.url).origin;
  const resumeLink = `${origin}/apply/resume?id=${id}&token=${token}`;

  try {
    const res = await fetch(N8N_SIGNING_LINK_EMAIL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicationId: id,
        plan: row.plan,
        lead: { firstName: row.lead_first_name, email: row.lead_email },
        resumeLink,
      }),
    });
    if (!res.ok) throw new Error(`n8n webhook responded ${res.status}`);
  } catch (err) {
    console.error("Failed to send signing-link fallback email", err);
    return NextResponse.json({ error: "Could not send the email" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
