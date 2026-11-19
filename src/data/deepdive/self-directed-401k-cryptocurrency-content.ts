export const crypto401kHero = {
  eyebrow: "Cryptocurrency & Digital Assets With A Self-Directed 401(k)",
  title: ["New Technology.", "New Investment Questions."],
  goldLine: 1,
  description:
    "Digital assets have introduced new financial technologies and investment markets. Certain retirement arrangements may permit exposure to qualifying digital assets, depending on the plan, provider, custody structure, and applicable rules.",
  whoItsFor: "For eligible business owners who understand the technology and its risks, and want to explore digital assets within a retirement plan.",
};

export const crypto401kRevelation = {
  eyebrow: "The Revelation",
  heading: ["Innovation Does Not", "Eliminate The Need For Discipline"],
  goldLine: 1,
  paragraphs: [
    "For investors who understand the technology and its risks, digital assets may represent another potential category of retirement investing. Availability depends heavily on the plan, the provider, the custody arrangement, and applicable law.",
    "Digital assets can be highly volatile, difficult to value, vulnerable to fraud or theft, and subject to evolving legal and regulatory requirements. Retirement-account tax treatment does not remove these risks.",
  ],
  featured: "Discipline matters just as much here as it does with any other investment category.",
  note: "Not every self-directed plan supports digital-asset investments, and provider policies on custody and security vary significantly.",
};

export const crypto401kGallery = {
  eyebrow: "What To Understand First",
  heading: ["Before Exploring", "Digital Assets"],
  intro: "Digital-asset investing introduces considerations that don't apply the same way to real estate, lending, or traditional securities.",
  items: [
    {
      label: "01",
      headline: "Provider & Custody Policies",
      copy: "Not every self-directed 401(k) provider supports digital-asset investments. Where they do, the custody arrangement — who actually holds the private keys — varies and matters enormously.",
    },
    {
      label: "02",
      headline: "Security & Fraud Risk",
      copy: "Digital assets are frequent targets for theft and fraud. A compromised wallet or exchange account can mean a complete, irreversible loss of the plan's investment.",
    },
    {
      label: "03",
      headline: "Valuation & Volatility",
      copy: "Prices can move sharply and quickly. Retirement-plan reporting requires appropriate valuation of plan assets, which can be genuinely difficult for some digital-asset holdings.",
    },
    {
      label: "04",
      headline: "Evolving Regulation",
      copy: "The legal and regulatory framework around digital assets continues to develop. What's permitted or how it's treated can change, and applicable guidance should be reviewed before any transaction.",
    },
  ],
  columns: 2 as const,
};

export const crypto401kComparison = {
  eyebrow: "A Different Kind Of Custody Question",
  heading: ["Provider-Held Custody Vs.", "Personal Control"],
  leftLabel: "Worth Confirming With A Provider",
  rightLabel: "A Common Misunderstanding",
  rows: [
    { left: "The plan's investment remains an asset of the retirement plan, not the participant personally", right: "Assuming checkbook control removes custody and prohibited-transaction requirements" },
    { left: "Custody and security arrangements are evaluated as part of choosing a provider", right: "Treating a personal wallet the participant controls as automatically acceptable plan custody" },
    { left: "Valuation and reporting obligations apply to digital-asset holdings like any other plan asset", right: "Assuming volatile or illiquid holdings need no special valuation attention" },
  ],
  footnote:
    "Digital-asset custody questions should be evaluated with the same seriousness as any other plan-asset custody arrangement — and ideally reviewed with the plan's provider before any transaction.",
};

export const crypto401kFaq = {
  eyebrow: "Frequently Asked Questions",
  heading: ["Digital Asset Questions", "Worth Understanding"],
  items: [
    {
      question: "Can a self-directed 401(k) invest in cryptocurrency?",
      answer: "Some self-directed arrangements permit certain digital-asset investments, depending on provider policies, custody arrangements, and applicable requirements. Not every plan or provider supports this.",
    },
    {
      question: "Is investing in digital assets through a 401(k) safer than personally?",
      answer: "Not inherently. Digital assets involve substantial volatility, security, fraud, valuation, and regulatory risks regardless of the account type holding them.",
    },
    {
      question: "Who holds custody of a plan's digital-asset investment?",
      answer: "This depends entirely on the provider and plan arrangement. Custody and security details should be confirmed directly with the provider before any transaction.",
    },
    {
      question: "Does retirement-account tax treatment reduce digital-asset risk?",
      answer: "No. Tax treatment does not remove volatility, security, fraud, or valuation risk associated with the underlying asset.",
    },
    {
      question: "How are digital assets valued for plan reporting purposes?",
      answer: "Plan assets, including digital assets, must be appropriately valued for applicable retirement-plan accounting and reporting purposes, which can be genuinely difficult for some holdings.",
    },
    {
      question: "How do I get started?",
      answer: "Begin by determining whether your business is eligible for an appropriate self-directed 401(k), and confirm with a prospective provider whether digital-asset investments are actually supported.",
    },
  ],
  sourceLink: {
    label: "IRS: Retirement Plan Investments FAQs",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
};

export const crypto401kReferences = [
  {
    title: "IRS: Retirement Plan Investments FAQs",
    description: "Explains general limitations on retirement-plan investments and prohibited transactions.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Retirement Topics — Plan Assets",
    description: "Explains investment responsibilities and valuation principles for retirement-plan assets.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-plan-assets",
  },
  {
    title: "IRS: Valuation of Plan Assets at Fair Market Value",
    description: "Explains the importance of properly valuing retirement-plan assets, including volatile or illiquid holdings.",
    href: "https://www.irs.gov/retirement-plans/valuation-of-plan-assets-at-fair-market-value",
  },
  {
    title: "SEC Investor.gov: Investment Professional Background Check",
    description: "A general tool for researching investment professionals and providers.",
    href: "https://www.investor.gov/investment-professional-background-check",
  },
];
