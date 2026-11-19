export const serviceIraAssetHrefOverrides: Record<string, string> = {
  "Precious Metals": "/services/self-directed-ira/precious-metals",
  "Digital Assets": "/services/self-directed-ira/cryptocurrency",
};

export const serviceIraHero = {
  eyebrow: "For Individual Investors",
  title: ["Give Your Retirement Money", "More Possibilities."],
  goldLine: 1,
  description:
    "A self-directed IRA puts your retirement savings to work in the assets you already understand (real estate, private lending, and more) inside an account built for individual investors.",
  whoItsFor:
    "Built for individuals with an existing IRA, a former employer's 401(k), or new contributions to direct toward a wider range of assets.",
  summary: {
    tag: "The Foundation",
    title: "IRA",
    subtitle: "Individual Retirement Account",
    checklist: [
      "Review the account and intended investments",
      "Identify the appropriate provider arrangement",
      "Define setup and coordination responsibilities",
    ],
    note: "Terms and eligibility confirmed during review.",
  },
};

export const serviceIraFoundation = {
  eyebrow: "Who It Fits",
  heading: ["Built For", "Individual Investors."],
  steps: [
    {
      number: "01",
      title: "Individual Investors",
      description: "Anyone with earned income or existing retirement funds to roll over, no business ownership required.",
    },
    {
      number: "02",
      title: "Existing Account Holders",
      description: "Investors moving funds from an old 401(k) or an existing IRA into a self-directed account.",
    },
    {
      number: "03",
      title: "Hands-On Investors",
      description: "Anyone ready to move beyond a fixed menu of mutual funds and stocks.",
    },
  ],
};

export const serviceIraPricing = {
  eyebrow: "What You Get",
  heading: ["Package", "Inclusions."],
  intro: "Everything needed to establish and maintain your self-directed IRA.",
  included: [
    "Account setup coordination with a qualified custodian",
    "Guidance choosing Traditional, Roth, or SEP",
    "Rollover and transfer guidance",
    "Team support through setup and your first transaction",
  ],
  price: "$1,500",
  note: "The whole package. Setup and ongoing account support, no separate fees.",
};

export const serviceIraOverview = {
  eyebrow: "The Benefits",
  heading: ["What Is A", "Self-Directed IRA?"],
  paragraphs: [
    "A self-directed IRA is an individual retirement account administered under the same IRS rules as any traditional or Roth IRA, held with a custodian that allows a broader range of assets than a typical brokerage IRA.",
    "Instead of a fixed menu of mutual funds and stocks, the account can hold real estate, private lending, precious metals, and other alternative investments, alongside traditional ones.",
  ],
  image: "/services/ira/overview.webp",
  features: [
    "Available as Traditional, Roth, or SEP IRA",
    "No business ownership required to open one",
    "Checkbook-level control available through certain account structures",
    "Roll over funds from an old 401(k) or existing IRA",
    "Annual contributions on top of any rollover",
  ],
};

export const serviceIraProcess = {
  eyebrow: "The Setup Journey",
  heading: ["Get The Start", "Right."],
  intro: "The proposal confirms the work included in your setup. These are the questions the process is built around.",
  steps: [
    {
      number: "01",
      title: "Your Starting Point",
      description: "Review current IRAs and other retirement accounts, the assets you want to explore, and the questions behind the move.",
    },
    {
      number: "02",
      title: "Provider & Structure",
      description: "Identify the custodian, account features, and any separately scoped entity work the proposed arrangement requires.",
    },
    {
      number: "03",
      title: "Funding & Documents",
      description: "Coordinate the required paperwork and review the proposed transfer or rollover steps with the relevant providers.",
    },
    {
      number: "04",
      title: "Ready For The Responsibilities",
      description: "Know who handles records, reporting, custody, and transaction review before putting an idea into motion.",
    },
  ],
};

export const serviceIraScenario = {
  eyebrow: "A Starting Scenario",
  heading: ["You See An Opportunity.", "Start With The Account."],
  paragraphs: [
    "You have retirement savings and want to explore a private investment. Before money moves, the team gathers the account history, proposed investment, parties, and provider requirements.",
    "The result is an agreed setup or review scope with clear responsibilities. A complex transaction may need a separately engaged attorney.",
  ],
  note: "Illustrative situation, not a client result or investment recommendation.",
  prepTitle: "Bring The Basics.",
  prepItems: [
    "Current retirement account types",
    "The proposed investment or goal",
    "Relevant parties and relationships",
    "Timing and any existing commitments",
  ],
  ctaLabel: "Start a conversation",
};

export const serviceIraFaq = {
  eyebrow: "Before Your Next Move",
  heading: ["IRA Questions.", "Answered."],
  items: [
    {
      question: "Who can open a self-directed IRA?",
      answer:
        "Generally, any individual with earned income or existing retirement funds to roll over can open a self-directed IRA. No business ownership is required.",
    },
    {
      question: "How much can I contribute?",
      answer:
        "Annual IRA contribution limits are set by the IRS and apply across all your IRAs combined, regardless of how many accounts you hold. Your exact limit depends on your age and income.",
    },
    {
      question: "Can I take a loan from my IRA?",
      answer:
        "No. Unlike a 401(k), IRAs do not permit loans. Early withdrawals may trigger taxes and penalties outside of specific exceptions.",
    },
    {
      question: "Can I roll over an old 401(k) or IRA?",
      answer:
        "In most cases, yes. Funds from a former employer's plan or an existing IRA can typically be rolled into a self-directed IRA without triggering taxes or penalties, when done correctly.",
    },
    {
      question: "What is checkbook control?",
      answer:
        "Some self-directed IRA structures, like an IRA-owned LLC, let you write checks or wire funds directly for an investment without routing each transaction through a custodian.",
    },
    {
      question: "May I hold IRA metals personally?",
      answer:
        "No. IRA-owned precious metals must be held by the custodian or an approved depository. Taking personal possession is treated as a distribution and can disqualify the account. The team reviews storage requirements before a metals purchase.",
    },
    {
      question: "Does Roth Academy hold my assets?",
      answer:
        "No. Roth Academy is not a custodian. A qualified trustee or custodian holds the account's assets; the team coordinates the setup, paperwork, and provider relationship around that arrangement.",
    },
  ],
  sourceLink: {
    label: "Read the SEC's investor information on self-directed IRAs",
    href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14",
  },
};

export const serviceIraCrossLink = {
  label: "Explore the other starting point",
  title: "Self-Directed 401(k)",
  href: "/services/self-directed-401k",
};
