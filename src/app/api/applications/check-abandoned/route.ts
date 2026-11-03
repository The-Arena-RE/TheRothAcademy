import { NextResponse } from "next/server";
import { getDb, getAbandonedCheckSecret } from "@/lib/applications-db";

// Called on a schedule (via n8n Cron -> this endpoint, not directly reachable
// by the public) to find applications stalled too long -- at any of three
// stages, not just the pre-payment wizard -- and notify GHL so it can send
// the actual reminder email. We own the "who's stalled" logic here so it's
// testable; n8n's job is just delivering the email.
//
// The same resumeLink works for all three stages: /apply/resume already
// renders the right screen for whichever one applies (continue filling out
// the wizard, continue to secure payment, or continue to signing), so no
// stage-specific copy or routing is needed here.
const N8N_ABANDONED_WEBHOOK = "https://n8n.coreautomations.org/webhook/abandoned-reminder-ghl";
const FIRST_REMINDER_DELAY_HOURS = 24;
const SECOND_REMINDER_DELAY_HOURS = 72; // measured from when the first reminder was sent
const MAX_REMINDERS = 2;

type AbandonedRow = {
  id: string;
  resume_token: string;
  plan: string;
  lead_first_name: string;
  lead_email: string;
  reminder_count: number;
};

export async function POST(request: Request) {
  const secret = await getAbandonedCheckSecret();
  const authHeader = request.headers.get("authorization");
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const rows = await db
    .prepare(
      `SELECT id, resume_token, plan, lead_first_name, lead_email, reminder_count
         FROM applications
        WHERE (
          status = 'in_progress'
          OR (status = 'complete' AND payment_status != 'paid')
          OR (payment_status = 'paid' AND docusign_status != 'completed')
        )
          AND reminder_count < ?1
          AND (
            (reminder_count = 0 AND updated_at <= datetime('now', ?2))
            OR (reminder_count = 1 AND last_reminder_at <= datetime('now', ?3))
          )`
    )
    .bind(MAX_REMINDERS, `-${FIRST_REMINDER_DELAY_HOURS} hours`, `-${SECOND_REMINDER_DELAY_HOURS} hours`)
    .all<AbandonedRow>();

  const origin = new URL(request.url).origin;
  let remindersSent = 0;

  for (const row of rows.results ?? []) {
    const reminderNumber = row.reminder_count + 1;
    const resumeLink = `${origin}/apply/resume?id=${row.id}&token=${row.resume_token}`;

    try {
      const res = await fetch(N8N_ABANDONED_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId: row.id,
          plan: row.plan,
          lead: { firstName: row.lead_first_name, email: row.lead_email },
          resumeLink,
          reminderNumber,
        }),
      });
      if (!res.ok) throw new Error(`n8n webhook responded ${res.status}`);
    } catch (err) {
      // Leave reminder_count untouched so this application is retried on
      // the next scheduled run instead of silently skipped.
      console.error("Failed to send abandoned-application reminder", row.id, err);
      continue;
    }

    await db
      .prepare(`UPDATE applications SET reminder_count = ?1, last_reminder_at = datetime('now') WHERE id = ?2`)
      .bind(reminderNumber, row.id)
      .run();
    remindersSent++;
  }

  return NextResponse.json({ checked: rows.results?.length ?? 0, remindersSent });
}
