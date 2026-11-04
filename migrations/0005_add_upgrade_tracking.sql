-- Selected upgrade add-ons (Priority Processing, Rollover Concierge), as a
-- JSON array of upgrade IDs, e.g. '["priority_processing"]'. NULL/empty if
-- none selected. Needed so staff know what a customer actually paid for --
-- the review screen shows a price, but without this there'd be no record
-- of which upgrades that price included.
ALTER TABLE applications ADD COLUMN selected_upgrades TEXT;
