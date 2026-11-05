-- Client asked for a second kind of discount code: a reusable promo link
-- with a staff-chosen price, no 24h expiry, usable by any number of people,
-- that staff can take down manually whenever they want -- on top of (not
-- replacing) the existing single-use 24h codes.
--
-- `unlimited`: when true, checkout never marks the code redeemed (so it
-- stays valid for every applicant who uses it) and admin-generated expiry
-- is set far in the future rather than 24h out.
-- `disabled_at`: staff-controlled kill switch, independent of expiry/use --
-- set it to take a code down; NULL means still live.
ALTER TABLE discount_codes ADD COLUMN unlimited INTEGER NOT NULL DEFAULT 0;
ALTER TABLE discount_codes ADD COLUMN disabled_at TEXT;
