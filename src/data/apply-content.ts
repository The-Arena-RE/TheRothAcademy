export type PlanId = "401k" | "ira";

export const PLANS: Record<
  PlanId,
  { name: string; shortName: string; blurb: string; price: number; href: string }
> = {
  "401k": {
    name: "Self-Directed Solo 401(k)",
    shortName: "Solo 401(k)",
    blurb: "For eligible business owners and self-employed individuals.",
    price: 1450,
    href: "/services/self-directed-401k",
  },
  ira: {
    name: "Self-Directed IRA with Checkbook LLC",
    shortName: "Self-Directed IRA",
    blurb: "For individuals who want greater control over eligible retirement investments through an IRA-owned LLC.",
    price: 1450,
    href: "/services/self-directed-ira",
  },
};

export const ANNUAL_MAINTENANCE = 225;

export type UpgradeId = "priority_processing" | "rollover_concierge";

export const UPGRADES: Record<UpgradeId, { name: string; price: number; description: string }> = {
  priority_processing: {
    name: "Priority Processing",
    price: 295,
    description: "Move your completed application to the front of the internal processing queue.",
  },
  rollover_concierge: {
    name: "White-Glove Rollover Concierge",
    price: 495,
    description:
      "A dedicated specialist assists with eligible retirement-account transfers and rollovers, including paperwork, coordination, and follow-up.",
  },
};

export const UPGRADE_BUNDLE_DISCOUNT = 95;

// Client confirmed these upgrades are offered as separate add-on services
// and intentionally don't need to appear on the signed order form PDF.
export const UPGRADES_ENABLED = true;

export function calculateUpgradeTotal(selected: UpgradeId[]): number {
  const subtotal = selected.reduce((sum, id) => sum + UPGRADES[id].price, 0);
  const bothSelected = selected.includes("priority_processing") && selected.includes("rollover_concierge");
  return bothSelected ? subtotal - UPGRADE_BUNDLE_DISCOUNT : subtotal;
}

export type EligibilityOption = { value: string; label: string };

export type EligibilityQuestion = {
  id: string;
  question: string;
  helper?: string;
  options: EligibilityOption[];
  /** Answers that halt the automated signup and show the outcome screen. */
  stopValues: string[];
  /** Explanation shown on the outcome screen, keyed by the stopping answer value. */
  stopMessage: (answer: string) => string;
};

export const ELIGIBILITY_QUESTIONS: Record<PlanId, EligibilityQuestion[]> = {
  "401k": [
    {
      id: "has_business",
      question: "Do you operate a business or perform self-employed work?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: ["no", "not_sure"],
      stopMessage: (answer) =>
        answer === "no"
          ? "A Solo 401(k) is built for business owners and self-employed individuals. Since you don't currently operate a business, this product isn't a fit, but a Self-Directed IRA may be."
          : "Our automated system can't determine Solo 401(k) eligibility without knowing whether you operate a business or self-employed work. Let's get you a straight answer from a specialist instead.",
    },
    {
      id: "has_employees",
      question: "Does your business have employees other than you or your spouse?",
      helper: "Part-time employees may still count, and contractor status depends on your actual working relationship.",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: ["yes", "not_sure"],
      stopMessage: () =>
        "Having employees doesn't necessarily prevent you from establishing any 401(k), but this simplified online product is built for owner-only businesses, so it may not be appropriate here. A specialist can review your specific situation.",
    },
    {
      id: "other_businesses",
      question: "Do you or your spouse own any other active businesses?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: ["yes", "not_sure"],
      stopMessage: () =>
        "Ownership in related businesses can affect retirement plan eligibility under controlled-group rules. This doesn't necessarily mean you're ineligible. It just means this needs a closer look before we can process an automated signup.",
    },
    {
      id: "existing_plan",
      question: "Does the business establishing this plan already sponsor a 401(k) or another employer retirement plan?",
      helper: "This refers to a plan sponsored by this business, not an unrelated employer's retirement plan.",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: ["yes", "not_sure"],
      stopMessage: () =>
        "If your business already sponsors a retirement plan, additional rules may apply before a new plan can be established. We'll need a specialist to review this before moving forward.",
    },
    {
      id: "business_income",
      question: "Does your business have or expect income from its operations?",
      helper: "A legitimate new business isn't disqualified just because it hasn't turned a profit yet.",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "newly_started", label: "My business is newly started" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: [],
      stopMessage: () => "",
    },
  ],
  ira: [
    {
      id: "account_type",
      question: "What type of IRA would you like to establish?",
      options: [
        { value: "traditional", label: "Traditional IRA" },
        { value: "roth", label: "Roth IRA" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: [],
      stopMessage: () => "",
    },
    {
      id: "funding_method",
      question: "How will you fund your IRA?",
      options: [
        { value: "transfer", label: "Transfer an existing IRA" },
        { value: "rollover", label: "Rollover money from another retirement plan" },
        { value: "contribution", label: "Make an eligible contribution" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: [],
      stopMessage: () => "",
    },
    {
      id: "inherited_funds",
      question: "Are any of these funds coming from an inherited retirement account?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: ["yes", "not_sure"],
      stopMessage: () =>
        "Inherited retirement accounts follow different, more complex rules than a standard transfer or rollover. We'll need a specialist to confirm how this applies to your situation before you proceed.",
    },
    {
      id: "already_received",
      question: "Have you already received any retirement funds personally that you intend to use?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ],
      stopValues: ["yes", "not_sure"],
      stopMessage: () =>
        "Funds you've already received personally can create rollover timing complications. We'll need a specialist to review this before we can process your setup automatically.",
    },
  ],
};
