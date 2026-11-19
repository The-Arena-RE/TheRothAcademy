export const prohibitedTransactions401kHero = {
  eyebrow: "Prohibited Transactions With A Self-Directed 401(k)",
  title: ["Invest Beyond The Ordinary.", "Know The Lines You Cannot Cross."],
  goldLine: 1,
  description:
    "A properly structured self-directed 401(k) may make a broader world of investments possible. But investment flexibility comes with important rules about who your retirement plan can transact with and how its assets must be used.",
  whoItsFor: "For eligible business owners exploring real estate, private lending, and other self-directed investments who want to understand the legal boundaries.",
};

export const prohibitedTransactions401kRevelation = {
  eyebrow: "The Revelation",
  heading: ["The Investment Isn't Always", "The Problem. The Transaction Can Be."],
  goldLine: 1,
  paragraphs: [
    "A qualifying self-directed 401(k) may be permitted to acquire certain real estate, private loans, business interests, and other investments. But a transaction involving the wrong party, improper personal benefit, or an impermissible conflict of interest can create a prohibited transaction.",
    "Scenario A: A retirement plan considers purchasing an eligible investment property from an unrelated seller — potentially permissible, subject to the plan and applicable requirements. Scenario B: the same retirement plan considers purchasing property personally owned by its participant — that direct sale generally creates a prohibited-transaction issue unless a specific exemption applies.",
  ],
  featured: "Same asset class. Different parties. A completely different legal analysis.",
  note: "The same type of investment may require a very different legal analysis depending on who owns it, who sells it, who uses it, and who receives the economic benefit.",
};

export const prohibitedTransactions401kGallery = {
  eyebrow: "What Is A Prohibited Transaction?",
  heading: ["Six Categories Federal", "Law Restricts"],
  intro: "Internal Revenue Code Section 4975 identifies several categories of direct or indirect prohibited transactions involving retirement plans and disqualified persons. Certain statutory, regulatory, or administrative exemptions may apply under specific conditions.",
  items: [
    { label: "01", headline: "Sale, Exchange, Or Lease", copy: "Certain property sales, exchanges, or leases between a retirement plan and a disqualified person are prohibited — for example, a plan attempting to buy a participant's personally owned rental property." },
    { label: "02", headline: "Lending Or Extension Of Credit", copy: "Certain loans, guarantees, or extensions of credit between the plan and a disqualified person are prohibited unless an applicable exemption applies — for example, a participant personally guaranteeing the plan's investment debt." },
    { label: "03", headline: "Goods, Services, Or Facilities", copy: "Certain transactions involving goods, services, or facilities between the plan and a disqualified person are restricted — for example, a participant personally providing extensive construction services to plan-owned real estate." },
    { label: "04", headline: "Personal Benefit From Plan Assets", copy: "Plan income or assets generally cannot be transferred to or used for the benefit of a disqualified person outside applicable legal allowances — for example, using plan-owned property for a personal vacation." },
    { label: "05", headline: "Fiduciary Self-Dealing", copy: "A fiduciary generally cannot deal with retirement-plan assets in their own interest or for their own account." },
    { label: "06", headline: "Improper Personal Compensation", copy: "A fiduciary generally cannot personally receive consideration from a party dealing with the plan in connection with a plan transaction in violation of the applicable rules." },
  ],
};

export const prohibitedTransactions401kStories = {
  eyebrow: "Picture What That Could Look Like",
  heading: ["Two Investment Stories"],
  stories: [
    {
      label: "The Property Acquisition",
      headline: "Imagine Your 401(k) Purchasing A Beautiful Investment Property.",
      scenario:
        "An eligible business owner identifies a rental property, and the seller appears unrelated to the participant. The plan's governing documents permit the intended investment, and the transaction is evaluated for prohibited relationships and other applicable requirements. If permitted, the retirement plan acquires the property through an appropriate ownership arrangement — rental income belongs to the plan, and legitimate property expenses are paid through appropriate plan arrangements. Now imagine the participant wants to stay in that property for a personal vacation — that use raises a serious prohibited-transaction concern.",
      realization: "An investment property held by your 401(k) is not your personal vacation home.",
      risk: "Hypothetical educational illustration. Not an investment approval, actual customer transaction, or individualized legal determination.",
    },
    {
      label: "The Loan With A Hidden Relationship",
      headline: "Imagine Your 401(k) Becoming A Private Lender.",
      scenario:
        "A retirement plan evaluates a secured private loan to a borrower who owns an unrelated investment property. The proposed loan appears commercially attractive. But before the plan commits capital, the participant discovers that the borrower is connected to an entity in which the participant has an ownership or financial interest — a relationship that may materially change the prohibited-transaction analysis.",
      realization: "A loan isn't automatically permitted just because it has collateral and a fair interest rate.",
      risk: "A transaction with an unrelated third-party borrower may be permissible; a transaction with a disqualified person is subject to applicable prohibitions and exemptions. An apparently unrelated intermediary does not necessarily eliminate an indirect conflict.",
    },
  ],
};

export const prohibitedTransactions401kComparison = {
  eyebrow: "The Real Estate Rules",
  heading: ["When The Plan Owns The Property,", "Personal Use Becomes Critical"],
  leftLabel: "Potentially Permissible",
  rightLabel: "Generally Prohibited Or Requires Caution",
  rows: [
    { left: "Plan acquires qualifying property from an unrelated seller", right: "Plan purchases property from the participant" },
    { left: "Plan leases a rental property to an unrelated tenant", right: "Plan leases property to a disqualified family member" },
    { left: "Plan pays legitimate expenses of plan-owned property", right: "Participant vacations at plan-owned property, or pays a personal expense from the plan account" },
    { left: "Plan hires a qualifying unrelated contractor", right: "Participant personally performs construction or extensive services on plan-owned property" },
    { left: "Plan sells property to an unrelated buyer", right: "Plan sells property directly to the participant" },
  ],
  footnote:
    "Market-rate terms do not automatically make a disqualified-party transaction permissible. Fair market rent, an independent appraisal, or later reimbursement does not cure an otherwise prohibited transaction.",
};

export const prohibitedTransactions401kFigures = {
  eyebrow: "What Happens If One Occurs",
  heading: ["The Excise Tax", "Consequences"],
  intro: "Federal law imposes excise taxes on certain disqualified persons who participate in prohibited transactions. The consequences depend on the actual transaction, the parties, the amount involved, and correction.",
  figures: [
    { label: "Initial excise tax", value: "15% of the amount involved, per year in the taxable period" },
    { label: "Additional excise tax if not corrected", value: "100% of the amount involved" },
    { label: "Who generally pays", value: "Participating disqualified persons" },
    { label: "Does the plan itself automatically pay?", value: "No" },
  ],
  disclaimer:
    "Educational illustration only, not a calculation of any actual liability. Every violation does not lead to the same tax amount, the 100% tax does not apply immediately in every case, and repayment does not automatically eliminate liability. The exact correction and consequences depend on the specific facts.",
};

export const prohibitedTransactions401kFaq = {
  eyebrow: "Frequently Asked Questions",
  heading: ["Prohibited Transaction Questions", "Worth Understanding"],
  items: [
    {
      question: "Who is a disqualified person?",
      answer: "Federal law uses this term to identify certain individuals and entities with defined relationships to the plan — fiduciaries, service providers, the sponsoring employer, certain significant owners, certain family members (spouse, ancestors, lineal descendants, and their spouses), and certain related entities.",
    },
    {
      question: "Are my siblings or cousins automatically disqualified persons?",
      answer: "Not automatically under the narrow family definition in IRC Section 4975(e)(6), which covers spouse, ancestors, lineal descendants, and spouses of lineal descendants. An individual outside that definition can still be a disqualified person for another statutory reason — indirect ownership, entity relationships, or service-provider status.",
    },
    {
      question: "Can my plan buy property I personally own?",
      answer: "Generally no. A direct sale between the plan and the participant generally creates a prohibited-transaction issue unless a specific exemption applies, regardless of whether the price is fair market value.",
    },
    {
      question: "Can I personally use real estate or land owned by my 401(k)?",
      answer: "Generally no. Personal use by the participant or other disqualified persons — vacationing, hunting, camping, grazing personal livestock — raises a prohibited-transaction concern even on otherwise appropriately acquired property.",
    },
    {
      question: "Does an LLC or checkbook control remove these restrictions?",
      answer: "No. A separate company does not automatically make an otherwise prohibited transaction permissible, and the ability to sign a check is not permission to use retirement assets personally.",
    },
    {
      question: "Can I perform work or get paid for managing a plan-owned investment?",
      answer: "This requires careful review. A participant or fiduciary who personally receives compensation, commissions, or other benefits connected to plan assets may create prohibited-transaction concerns, though certain necessary-service exemptions can apply under specific conditions.",
    },
    {
      question: "Are there any exceptions to these rules?",
      answer: "Yes — federal law provides exemptions for certain transactions when the relevant requirements are satisfied, such as qualifying participant loans and certain necessary-service arrangements. An exemption must actually apply; it can't be assumed merely because a transaction seems fair.",
    },
    {
      question: "How do I avoid a prohibited transaction?",
      answer: "Understand who the disqualified persons are relative to your plan, evaluate every transaction's parties and economic benefit before proceeding, and have anything uncertain reviewed by a qualified professional before you act.",
    },
  ],
  sourceLink: {
    label: "IRS: Retirement Topics — Prohibited Transactions",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
};

export const prohibitedTransactions401kReferences = [
  {
    title: "United States Code: 26 U.S.C. Section 4975",
    description: "The primary statutory source defining prohibited transactions and disqualified persons.",
    href: "https://uscode.house.gov/view.xhtml?req=(title:26%20section:4975%20edition:prelim)",
  },
  {
    title: "IRS: Retirement Topics — Prohibited Transactions",
    description: "Explains restricted dealings involving disqualified persons and plan assets.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS: Retirement Topics — Tax on Prohibited Transactions",
    description: "Explains the initial and additional excise tax consequences of a prohibited transaction.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-tax-on-prohibited-transactions",
  },
  {
    title: "IRS: Instructions for Form 5330",
    description: "The form used to report and pay excise taxes related to prohibited transactions.",
    href: "https://www.irs.gov/instructions/i5330",
  },
  {
    title: "IRS: Rollovers as Business Start-Ups Compliance Project",
    description: "Explains specialized ROBS structures, distinct from ordinary self-directed 401(k) investments.",
    href: "https://www.irs.gov/retirement-plans/rollovers-as-business-start-ups-compliance-project",
  },
];
