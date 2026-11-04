import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";
import { getStripeWebhookSecret, verifyStripeSignature } from "@/lib/stripe";
import { UPGRADES, type UpgradeId } from "@/data/apply-content";

// The one source of truth for "did this application actually get paid."
// Stripe calls this directly -- the browser redirect to /apply/payment-success
// is just a UX nicety and is never trusted to mark anything as paid itself,
// per the spec's "use reliable payment status verification rather than
// trusting a website success page alone" requirement.
const N8N_PAYMENT_WEBHOOK = "https://n8n.coreautomations.org/webhook/payment-complete-ghl";

// Same reasoning as the other routes' fetchWithTimeout: a hung n8n workflow
// must never be able to stall the response to Stripe (which retries on
// timeout, redelivering an event this handler has already fully applied).
async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");

  const webhookSecret = await getStripeWebhookSecret();
  if (!webhookSecret) {
    return NextResponse.json({ error: "Payments are not configured yet" }, { status: 503 });
  }

  const valid = await verifyStripeSignature(rawBody, signature, webhookSecret);
  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(rawBody) as {
    type: string;
    data: { object: Record<string, unknown> };
  };

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object;
  const applicationId = (session.metadata as Record<string, string> | undefined)?.applicationId;
  if (!applicationId) return NextResponse.json({ error: "Missing applicationId in metadata" }, { status: 400 });

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const row = await db
    .prepare(
      `SELECT payment_status, plan, lead_first_name, lead_last_name, lead_email, lead_phone, selected_upgrades FROM applications WHERE id = ?1`
    )
    .bind(applicationId)
    .first<{
      payment_status: string;
      plan: string;
      lead_first_name: string;
      lead_last_name: string;
      lead_email: string;
      lead_phone: string;
      selected_upgrades: string | null;
    }>();

  if (!row) return NextResponse.json({ error: "Application not found" }, { status: 404 });

  // Stripe may redeliver the same event; only act on it once.
  if (row.payment_status === "paid") {
    return NextResponse.json({ received: true, alreadyProcessed: true });
  }

  const paidAt = new Date().toISOString();
  const stripeCheckoutSessionId = (session.id as string) ?? null;
  const stripePaymentIntentId = (session.payment_intent as string) ?? null;
  const amountPaidCents = (session.amount_total as number) ?? null;

  await db
    .prepare(
      `UPDATE applications
          SET payment_status = 'paid',
              stripe_checkout_session_id = ?1,
              stripe_payment_intent_id = ?2,
              amount_paid_cents = ?3,
              paid_at = datetime('now'),
              updated_at = datetime('now')
        WHERE id = ?4`
    )
    .bind(stripeCheckoutSessionId, stripePaymentIntentId, amountPaidCents, applicationId)
    .run();

  const upgradeIds: UpgradeId[] = row.selected_upgrades ? JSON.parse(row.selected_upgrades) : [];
  const upgradeNames = upgradeIds.map((id) => UPGRADES[id].name);

  try {
    await fetchWithTimeout(N8N_PAYMENT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicationId,
        plan: row.plan,
        lead: {
          firstName: row.lead_first_name,
          lastName: row.lead_last_name,
          email: row.lead_email,
          phone: row.lead_phone,
        },
        amountPaidCents,
        stripeCheckoutSessionId,
        stripePaymentIntentId,
        paidAt,
        upgrades: upgradeIds,
        upgradeNames,
      }),
    });
  } catch (err) {
    // D1 already reflects the paid status regardless; a failed notification
    // just means GHL doesn't hear about it until the next manual check.
    console.error("Failed to notify GHL of payment completion", err);
  }

  return NextResponse.json({ received: true });
}
