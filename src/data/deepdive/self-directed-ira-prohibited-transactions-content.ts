export const prohibitedIraHero = {
  eyebrow: "Self-Directed IRA Rules And Prohibited Transactions",
  title: ["Extraordinary Investment Freedom.", "Rules Worth Understanding."],
  goldLine: 1,
  description:
    "Your IRA may own real estate, make qualifying loans, and invest beyond conventional markets. But retirement assets must remain separate from personal assets, and certain transactions with related parties are prohibited.",
  whoItsFor: "This page provides general education, not a legal opinion on any particular investment or transaction.",
};

export const prohibitedIraRevelation = {
  eyebrow: "The Revelation",
  heading: ["Self-Directed Doesn't", "Mean Unrestricted"],
  goldLine: 1,
  paragraphs: [
    "A conventional brokerage IRA may limit investors to the securities and products its provider makes available. An appropriately established self-directed IRA may support a broader range of investments. But the account remains an IRA — it is still subject to federal retirement-account rules.",
    "The ability to direct an investment does not mean the owner can personally use the investment or transact freely with related parties. That distinction is fundamental.",
  ],
  featured: "You Direct The Investment. The IRA Owns The Asset.",
  note: "An IRA owner's authority to direct eligible investments does not by itself constitute a prohibited transaction. The concern is whether a particular transaction violates the applicable statutory prohibitions.",
};

export const prohibitedIraCategories = {
  eyebrow: "What Is A Prohibited Transaction?",
  heading: ["The Law Focuses On Certain", "Transactions And Relationships"],
  intro: "Internal Revenue Code Section 4975 identifies categories of prohibited transactions involving retirement-plan assets and disqualified persons. The restrictions cover direct and indirect conduct.",
  items: [
    { label: "01", headline: "Sales & Exchanges", copy: "Certain purchases, sales, exchanges, or leases between an IRA and a disqualified person are prohibited." },
    { label: "02", headline: "Loans & Credit", copy: "Certain loans or extensions of credit between an IRA and a disqualified person are prohibited." },
    { label: "03", headline: "Goods & Services", copy: "Certain arrangements for goods, services, or facilities involving disqualified persons may be prohibited, subject to applicable exemptions." },
    { label: "04", headline: "Use Of IRA Assets", copy: "IRA income or assets cannot be improperly transferred to or used for the benefit of a disqualified person." },
    { label: "05", headline: "Fiduciary Self-Dealing", copy: "A fiduciary cannot improperly use plan assets or income for their own interest or account." },
    { label: "06", headline: "Personal Compensation", copy: "Certain fiduciaries cannot personally receive consideration from parties dealing with the IRA in connection with transactions involving its assets." },
  ],
};

export const prohibitedIraDisqualified = {
  eyebrow: "Who Is A Disqualified Person?",
  heading: ["The Relationship Between The Parties", "Can Change Everything"],
  goldLine: 1,
  tone: "panel" as const,
  paragraphs: [
    "Federal law identifies certain people and entities as disqualified persons for purposes of retirement-plan prohibited transactions. The definition includes more than immediate family relationships — it can also involve fiduciaries, service providers, and entities connected through ownership or control.",
    "Common examples include the IRA owner, the owner's spouse, parents and grandparents, children and grandchildren, spouses of lineal descendants, certain fiduciaries and service providers, and certain related entities.",
  ],
  featured: "A Sibling, Cousin, Aunt, Uncle, Or Niece Is Not Automatically Included Solely Because Of That Relationship.",
  note: "A transaction involving such a person can still create problems because of fiduciary relationships, indirect personal benefits, common ownership, or other statutory categories. Use the actual statutory framework, not a simplistic family tree.",
};

export const prohibitedIraScenarios = {
  eyebrow: "Real-World Boundaries",
  heading: ["What The Rules Look Like", "In Practice"],
  intro: "The IRA can potentially own the rental property. That doesn't make it your vacation home.",
  items: [
    { label: "01", headline: "Personal Use Of IRA Property", copy: "The IRA owner cannot personally stay in an IRA-owned rental property, and cannot arrange for a disqualified family member to use it — that personal benefit may constitute a prohibited transaction." },
    { label: "02", headline: "Selling Your Own Property To Your IRA", copy: "A sale between the IRA and its owner generally constitutes a prohibited transaction, even if the stated purchase price is fair." },
    { label: "03", headline: "Borrowing From Your Own IRA", copy: "The owner cannot simply borrow money from their own IRA, and the IRA generally cannot lend to a disqualified person." },
    { label: "04", headline: "Personal Compensation From An IRA-Owned Business", copy: "An IRA owner receiving salary or compensation through an IRA-owned business can create prohibited self-dealing." },
  ],
};

export const prohibitedIraCases = {
  eyebrow: "The Most Important Court Decisions",
  heading: ["Real Legal Authority,", "Explained Plainly"],
  items: [
    { label: "01", headline: "Peek v. Commissioner, 140 T.C. 216 (2013)", copy: "Personal guarantees connected with an IRA-owned business can constitute prohibited extensions of credit. The Tax Court examined the actual transaction, not just the existence of a separate company." },
    { label: "02", headline: "Ellis v. Commissioner, 787 F.3d 1213 (8th Cir. 2015)", copy: "Receiving compensation through an IRA-owned business can create prohibited self-dealing. The IRA owner directed investment into an LLC and subsequently received salary while managing the business." },
    { label: "03", headline: "McNulty v. Commissioner, 157 T.C. No. 10 (2021)", copy: "Personal custody of assets acquired through an IRA-owned entity can create taxable distribution consequences — the Tax Court found personal possession of coins purchased through an IRA-owned LLC resulted in taxable distributions." },
  ],
};

export const prohibitedIraFaq = {
  eyebrow: "Frequently Asked Questions",
  heading: ["Prohibited Transaction Questions", "Worth Understanding"],
  items: [
    {
      question: "What is a prohibited transaction in a self-directed IRA?",
      answer: "A prohibited transaction generally involves certain direct or indirect transactions between an IRA and a disqualified person, including improper sales, loans, services, use of plan assets, or fiduciary self-dealing under Internal Revenue Code Section 4975.",
    },
    {
      question: "Is the IRA owner a disqualified person?",
      answer: "An IRA owner who exercises authority over IRA assets generally functions as a fiduciary for these purposes and is subject to applicable prohibited-transaction restrictions.",
    },
    {
      question: "Can I live in a house my IRA owns?",
      answer: "No. Personal occupancy of an IRA-owned investment home can constitute an improper personal benefit and a prohibited transaction.",
    },
    {
      question: "Can my brother rent a property owned by my IRA?",
      answer: "A sibling is not automatically included solely because of that relationship in Section 4975's specific family definition. However, other fiduciary, ownership, indirect-benefit, and transaction facts can still create prohibited-transaction concerns.",
    },
    {
      question: "Does an LLC protect my IRA from prohibited transactions?",
      answer: "No. An LLC does not automatically eliminate the direct and indirect prohibited-transaction rules.",
    },
    {
      question: "What happens if I engage in a prohibited IRA transaction?",
      answer: "A prohibited transaction involving the IRA owner or beneficiary can cause the affected IRA to cease qualifying as an IRA as of the first day of the relevant tax year, resulting in a deemed distribution and potential tax consequences.",
    },
    {
      question: "Does a prohibited transaction affect all my IRAs?",
      answer: "The IRS explains that separate IRAs are generally treated as separate accounts. The loss-of-status rule generally applies to the account involved rather than automatically to every separate IRA owned by the individual.",
    },
    {
      question: "Can a prohibited transaction be corrected?",
      answer: "Some prohibited-transaction excise-tax rules provide correction mechanisms and limited exemptions. Correction does not automatically reverse every consequence, particularly an IRA's statutory loss of status. Obtain qualified legal and tax advice immediately.",
    },
  ],
  sourceLink: {
    label: "IRS: Retirement Topics — Prohibited Transactions",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
};

export const prohibitedIraReferences = [
  {
    title: "IRS: Retirement Topics — Prohibited Transactions",
    description: "Primary source for the prohibited-transaction rules governing IRAs.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS: Publication 590-A",
    description: "Covers IRA contribution rules and prohibited-transaction considerations.",
    href: "https://www.irs.gov/publications/p590a",
  },
  {
    title: "IRS: Publication 590-B",
    description: "Covers IRA distributions, prohibited transactions, and tax consequences.",
    href: "https://www.irs.gov/publications/p590b",
  },
  {
    title: "IRS: Retirement Plan Investment FAQs",
    description: "Explains investment restrictions relevant to retirement plans and IRAs.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "McNulty v. Commissioner, 157 T.C. No. 10 (2021)",
    description: "U.S. Tax Court decision on personal possession of assets acquired through an IRA-owned LLC.",
    href: "https://citelaw.org/law/case/andrew-mcnulty-and-donna-mcnulty-petitioners-6a13342c76a5b491c2533a6a",
  },
];
