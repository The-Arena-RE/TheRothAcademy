import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";
import { createCheckoutSession, getStripeSecretKey, StripeError } from "@/lib/stripe";
import { PLANS, UPGRADES, UPGRADE_BUNDLE_DISCOUNT, UPGRADES_ENABLED, type PlanId, type UpgradeId } from "@/data/apply-content";

// Fires once the Stripe Checkout Session is created, moving the opportunity
// to the "Payment Pending" stage so an abandoned checkout (customer leaves
// Stripe's page without paying) is still visible in GHL, not just invisible
// in "Application Complete."
const N8N_APPLY_WEBHOOK = "https://n8n.coreautomations.org/webhook/apply-lead-ghl";

// A one-time safety net emailed the moment checkout starts, in case the
// customer closes Stripe's page before paying and never finds their way
// back -- same pattern as the DocuSign signing-link email.
const N8N_CHECKOUT_LINK_EMAIL_WEBHOOK = "https://n8n.coreautomations.org/webhook/checkout-link-email";

// Caps how long we'll wait on a side-effect webhook before giving up --
// a hung n8n workflow (e.g. an SMTP step stuck on a blocked outbound port)
// must never be able to stall the actual checkout response. Awaited calls
// still need a hard ceiling, not just a try/catch around a fetch that could
// hang forever.
async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const token = body?.token;
  if (!token) return NextResponse.json({ error: "Missing resume token" }, { status: 400 });

  // Only honor upgrades the client sent if they're both real upgrade IDs and
  // currently enabled server-side -- this is the actual amount we'll charge,
  // so it can't just trust whatever the client claims was selected.
  const requestedUpgrades: UpgradeId[] = UPGRADES_ENABLED && Array.isArray(body?.selectedUpgrades)
    ? (body.selectedUpgrades as unknown[]).filter((u): u is UpgradeId => typeof u === "string" && u in UPGRADES)
    : [];

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const row = await db
    .prepare(
      `SELECT plan, status, payment_status, lead_first_name, lead_last_name, lead_email, lead_phone,
              stripe_checkout_session_id, discount_code
         FROM applications WHERE id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Re-validated here, not trusted from when the application was created --
  // an application can sit unpaid for days, well past the code's 24h window,
  // and the code could since have been redeemed by whoever else it was
  // shared with.
  let discountCents = 0;
  if (row.discount_code) {
    const discountRow = await db
      .prepare(
        `SELECT amount_cents FROM discount_codes
          WHERE code = ?1 AND disabled_at IS NULL AND (unlimited = 1 OR redeemed_at IS NULL) AND expires_at > datetime('now')`
      )
      .bind(row.discount_code)
      .first<{ amount_cents: number }>();
    if (discountRow) discountCents = discountRow.amount_cents;
  }

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

  const upgradeLineItems = requestedUpgrades.map((upgradeId) => ({
    price_data: {
      currency: "usd",
      unit_amount: UPGRADES[upgradeId].price * 100,
      product_data: {
        name: `${UPGRADES[upgradeId].name} (Add-on)`,
      },
    },
    quantity: 1,
  }));

  if (requestedUpgrades.includes("priority_processing") && requestedUpgrades.includes("rollover_concierge")) {
    // Stripe line items can't have a negative unit_amount, so the bundle
    // discount is applied by reducing one upgrade's own price instead of
    // adding a separate negative item.
    const rolloverItem = upgradeLineItems[requestedUpgrades.indexOf("rollover_concierge")];
    rolloverItem.price_data.unit_amount -= UPGRADE_BUNDLE_DISCOUNT * 100;
  }

  const setupFeeCents = Math.max(0, plan.price * 100 - discountCents);

  try {
    const session = await createCheckoutSession(secretKey, {
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: setupFeeCents,
            product_data: {
              name: `${plan.name} - Setup Fee`,
            },
          },
          quantity: 1,
        },
        ...upgradeLineItems,
      ],
      customer_email: leadEmail,
      metadata: {
        applicationId: id,
        plan: planId,
        upgrades: requestedUpgrades.join(","),
        discountCode: discountCents > 0 ? (row.discount_code as string) : "",
      },
      success_url: `${origin}/apply/payment-success?session_id={CHECKOUT_SESSION_ID}&id=${id}&token=${token}`,
      cancel_url: `${origin}/apply/payment-cancelled?id=${id}&token=${token}`,
    });

    await db
      .prepare(
        `UPDATE applications SET stripe_checkout_session_id = ?1, selected_upgrades = ?2, updated_at = datetime('now') WHERE id = ?3`
      )
      .bind(session.id as string, requestedUpgrades.length ? JSON.stringify(requestedUpgrades) : null, id)
      .run();

    try {
      await fetchWithTimeout(N8N_APPLY_WEBHOOK, {
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

    // Awaited (not fire-and-forget, for the Cloudflare Workers reason noted
    // on fetchWithTimeout above) but capped with a timeout -- this is a
    // safety-net email, not something that should ever be able to block
    // the actual checkout redirect.
    try {
      await fetchWithTimeout(N8N_CHECKOUT_LINK_EMAIL_WEBHOOK, {
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
