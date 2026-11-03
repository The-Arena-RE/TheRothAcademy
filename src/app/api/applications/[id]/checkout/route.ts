import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";
import { createCheckoutSession, getStripeSecretKey, StripeError } from "@/lib/stripe";
import { PLANS, type PlanId } from "@/data/apply-content";

// Fires once the Stripe Checkout Session is created, moving the opportunity
// to the "Payment Pending" stage so an abandoned checkout (customer leaves
// Stripe's page without paying) is still visible in GHL, not just invisible
// in "Application Complete."
const N8N_APPLY_WEBHOOK = "https://n8n.coreautomations.org/webhook/apply-lead-ghl";

// A one-time safety net emailed the moment checkout starts, in case the
// customer closes Stripe's page before paying and never finds their way
// back -- same pattern as the DocuSign signing-link email.
const N8N_CHECKOUT_LINK_EMAIL_WEBHOOK = "https://n8n.coreautomations.org/webhook/checkout-link-email";

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
      `SELECT plan, status, payment_status, lead_first_name, lead_last_name, lead_email, lead_phone,
              stripe_checkout_session_id
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const planId = row.plan as PlanId;
  const leadEmail = row.lead_email as string;

  if (row.status !== "complete") {
    return NextResponse.json({ error: "Application is not complete yet" }, { status: 409 });
  }
  if (row.payment_status === "paid") {
    // Never create a second charge for an application that's already paid.
    return NextResponse.json({ error: "This application has already been paid" }, { status: 409 });
  }

  const secretKey = await getStripeSecretKey();
  if (!secretKey) {
    return NextResponse.json({ error: "Payments are not configured yet" }, { status: 503 });
  }

  const plan = PLANS[planId];
  const origin = new URL(request.url).origin;

  try {
    const session = await createCheckoutSession(secretKey, {
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: plan.price * 100,
            product_data: {
              name: `${plan.name} - Setup Fee`,
            },
          },
          quantity: 1,
        },
      ],
      customer_email: leadEmail,
      metadata: {
        applicationId: id,
        plan: planId,
      },
      success_url: `${origin}/apply/payment-success?session_id={CHECKOUT_SESSION_ID}&id=${id}&token=${token}`,
      cancel_url: `${origin}/apply/payment-cancelled?id=${id}&token=${token}`,
    });

    await db
      .prepare(`UPDATE applications SET stripe_checkout_session_id = ?1, updated_at = datetime('now') WHERE id = ?2`)
      .bind(session.id as string, id)
      .run();

    try {
      await fetch(N8N_APPLY_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: planId,
          stage: "payment_pending",
          customer_details: {
            firstName: row.lead_first_name,
            lastName: row.lead_last_name,
            email: row.lead_email,
            phone: row.lead_phone,
          },
        }),
      });
    } catch (err) {
      // D1 already has the checkout session id regardless; a failed
      // notification just means GHL doesn't show this stage transition.
      console.error("Failed to notify GHL of payment-pending stage", err);
    }

    // Awaited, not fire-and-forget -- an unawaited fetch can be cut off
    // mid-request on Cloudflare Workers as soon as the response below is
    // returned and the execution context tears down.
    try {
      await fetch(N8N_CHECKOUT_LINK_EMAIL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId: id,
          plan: planId,
          lead: { firstName: row.lead_first_name, lastName: row.lead_last_name, email: row.lead_email },
          resumeLink: `${origin}/apply/resume?id=${id}&token=${token}`,
        }),
      });
    } catch (err) {
      console.error("Failed to send checkout-link email", err);
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Failed to create Stripe checkout session", err);
    const message = err instanceof StripeError ? err.message : "Could not start checkout";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
