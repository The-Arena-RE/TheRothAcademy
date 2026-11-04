-- Staff-generated discount codes/links (e.g. handed out at an event, or
-- sent to a specific lead). Each is single-use and expires 24h after
-- creation; redeemed_at/redeemed_by_application_id are set once an
-- application actually checks out with it, so a code can't be reused by a
-- second applicant after someone else already redeemed it.
CREATE TABLE discount_codes (
  code TEXT PRIMARY KEY,
  amount_cents INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT NOT NULL,
  redeemed_at TEXT,
  redeemed_by_application_id TEXT
);

-- Which code (if any) this application was started with -- captured once,
-- at creation, from the ?discount= link the lead clicked. Re-validated
-- against discount_codes at checkout time rather than trusted as-is, since
-- an application can sit unpaid well past the code's 24h window.
ALTER TABLE applications ADD COLUMN discount_code TEXT;
