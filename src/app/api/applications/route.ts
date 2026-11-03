import { NextResponse } from "next/server";
import { getDb } from "@/lib/applications-db";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const plan = body?.plan;
  const lead = body?.lead;

  if ((plan !== "401k" && plan !== "ira") || !lead?.firstName || !lead?.lastName || !lead?.email || !lead?.phone) {
    return NextResponse.json({ error: "Missing or invalid required fields" }, { status: 400 });
  }

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  // Someone who already has an application for this email + plan -- in
  // progress, paid but not yet signed, or even fully signed -- shouldn't
  // get a second one by coming back through plan selection again. This
  // covers paid applications too: /apply/resume already shows the right
  // screen for every status (resume signing, fully-signed confirmation,
  // etc.), so there's never a reason to let a second one be created, and
  // doing so for an already-paid application would risk a real duplicate
  // charge if they went all the way through checkout again.
  const existing = await db
    .prepare(
      `SELECT id, resume_token FROM applications
        WHERE lead_email = ?1 AND plan = ?2
        ORDER BY updated_at DESC LIMIT 1`
    )
    .bind(lead.email, plan)
    .first<{ id: string; resume_token: string }>();

  if (existing) {
    return NextResponse.json({ id: existing.id, resumeToken: existing.resume_token, existing: true });
  }

  const id = crypto.randomUUID();
  const resumeToken = crypto.randomUUID();

  await db
    .prepare(
      `INSERT INTO applications (id, resume_token, plan, lead_first_name, lead_last_name, lead_email, lead_phone, eligibility_answers)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      id,
      resumeToken,
      plan,
      lead.firstName,
      lead.lastName,
      lead.email,
      lead.phone,
      body?.eligibilityAnswers ? JSON.stringify(body.eligibilityAnswers) : null
    )
    .run();

  return NextResponse.json({ id, resumeToken });
}
