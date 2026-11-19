export const service401kHero = {
  eyebrow: "For Business Owners",
  title: ["Build Your Retirement", "Around Your Business."],
  goldLine: 1,
  description:
    "A self-directed 401(k) is built for owners who want their retirement plan to work as hard as they do, with room for the assets you already understand.",
  whoItsFor:
    "Built primarily for owner-only businesses, sole proprietors, partnerships, and corporations with no full-time employees other than an owner or spouse.",
  summary: {
    tag: "The Foundation",
    title: "401(k)",
    subtitle: "Business-Sponsored Retirement Plan",
    checklist: [
      "Review business and participant eligibility",
      "Define the plan document package",
      "Prepare for accounts, funding, and records",
    ],
    note: "Terms and eligibility confirmed during review.",
  },
};

export const service401kFoundation = {
  eyebrow: "Who It Fits",
  heading: ["Built For", "Business Owners."],
  steps: [
    {
      number: "01",
      title: "Owner-Only Businesses",
      description: "Sole proprietors, partnerships, and corporations with no full-time employees other than an owner or spouse.",
    },
    {
      number: "02",
      title: "Ready To Contribute More",
      description: "Owners who want higher contribution limits than a traditional IRA allows.",
    },
    {
      number: "03",
      title: "Hands-On Investors",
      description: "Anyone who wants checkbook-level control over their plan's investments.",
    },
  ],
};

export const service401kPricing = {
  eyebrow: "What You Get",
  heading: ["Package", "Inclusions."],
  intro: "Everything needed to establish and maintain your self-directed 401(k).",
  included: [
    "Plan document package built for your business",
    "Account setup coordination with your chosen provider",
    "Rollover and contribution guidance",
    "Team support through setup and your first transaction",
  ],
  price: "$1,500",
  note: "The whole package. Setup and ongoing plan support, no separate fees.",
};

export const service401kOverview = {
  eyebrow: "The Benefits",
  heading: ["What Is A", "Self-Directed 401(k)?"],
  paragraphs: [
    "A self-directed 401(k) is a qualified retirement plan designed for your business, administered under the same IRS rules that govern any 401(k), with a plan document that opens the door to a wider range of assets.",
    "Instead of choosing from a fixed list of mutual funds, the plan can hold real estate, private lending, and other alternative investments alongside traditional ones, all inside one tax-advantaged structure.",
  ],
  image: "/services/401k/overview.webp",
  features: [
    "Higher contribution limits than a traditional IRA",
    "Checkbook-level control over plan investments",
    "A built-in loan provision, when the plan document allows it",
    "Both Roth and traditional contribution options",
    "Coverage for a spouse actively employed by the business",
  ],
};

export const service401kProcess = {
  eyebrow: "The Setup Journey",
  heading: ["Get The Start", "Right."],
  intro: "The proposal confirms the work included in your setup. These are the questions the process is built around.",
  steps: [
    {
      number: "01",
      title: "Business & Eligibility",
      description: "Review your business, ownership, participants, other employers or plans, and what the arrangement needs to support.",
    },
    {
      number: "02",
      title: "The Plan Documents",
      description: "Define the plan document package and the features appropriate to the reviewed circumstances.",
    },
    {
      number: "03",
      title: "Accounts & Funding",
      description: "Prepare the information for the account providers and coordinate the proposed contribution or rollover questions.",
    },
    {
      number: "04",
      title: "The Work After Setup",
      description: "Know the records, administration, and transaction responsibilities that come with using your plan.",
    },
  ],
};

export const service401kScenario = {
  eyebrow: "A Starting Scenario",
  heading: ["Your First Rental.", "Built On The Right Plan."],
  paragraphs: [
    "You own a business and want to explore purchasing a rental property through a retirement plan. The team starts with business and participant eligibility, then the proposed investment and financing.",
    "The plan setup and property transaction are distinct pieces of work. The proposal makes clear what is included and what needs a separate professional review.",
  ],
  note: "Illustrative situation, not a client result or investment recommendation.",
  prepTitle: "Bring The Basics.",
  prepItems: [
    "Business and ownership information",
    "Employees and intended participants",
    "Existing retirement arrangements",
    "The investment idea and timing",
  ],
  ctaLabel: "Start a conversation",
};

export const service401kFaq = {
  eyebrow: "Before Your Next Move",
  heading: ["401(k) Questions.", "Answered."],
  items: [
    {
      question: "Who can open a self-directed 401(k)?",
      answer:
        "Generally, owner-only businesses, sole proprietors, partnerships, and corporations with no full-time common-law employees other than an owner or spouse. The team reviews your specific structure before recommending a plan.",
    },
    {
      question: "How much can I contribute?",
      answer:
        "Contributions combine an employee deferral and an employer profit-sharing portion, up to the annual limit set by the IRS for that plan year. Your exact limit depends on your compensation and business structure.",
    },
    {
      question: "Can I take a loan from my plan?",
      answer:
        "Many self-directed 401(k) plan documents include a loan provision, letting you borrow against your own balance within IRS limits. Availability depends on how your specific plan is written.",
    },
    {
      question: "Can I roll over an old 401(k) or IRA?",
      answer:
        "In most cases, yes. Funds from a prior employer plan or an existing IRA can typically be rolled into a new self-directed 401(k) without triggering taxes or penalties, when done correctly.",
    },
    {
      question: "What is checkbook control?",
      answer:
        "Checkbook control means the plan can write checks or wire funds directly for an investment, without waiting on a custodian to process each transaction: useful for time-sensitive opportunities like real estate.",
    },
    {
      question: "Does checkbook control remove the rules?",
      answer:
        "No. Checkbook control changes how a transaction is processed, not the rules that apply to it. Prohibited transactions, disqualified persons, and plan responsibilities still apply; the team reviews a proposed transaction before it moves forward.",
    },
  ],
  sourceLink: {
    label: "Read the IRS overview of one-participant 401(k) plans",
    href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans",
  },
};

export const service401kCrossLink = {
  label: "Explore the other starting point",
  title: "Self-Directed IRA",
  href: "/services/self-directed-ira",
};

// Overrides a couple of the shared assetClasses hrefs (see home-content.ts)
// to point at the dedicated 401(k) deep-dive pages where one exists, rather
// than the generic /goals anchor every other service page still uses.
export const service401kAssetHrefOverrides: Record<string, string> = {
  "Real Estate": "/services/self-directed-401k/real-estate",
  "Private Lending": "/services/self-directed-401k/private-lending",
  "Precious Metals": "/services/self-directed-401k/precious-metals",
};
