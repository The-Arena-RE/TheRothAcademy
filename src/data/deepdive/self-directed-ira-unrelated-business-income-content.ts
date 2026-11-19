export const ubtiIraHero = {
  eyebrow: "Unrelated Business Income Tax And Self-Directed IRAs",
  title: ["Your IRA Could Own More Than Stocks.", "Some Investments Bring Different Tax Rules."],
  goldLine: 1,
  description:
    "A properly structured self-directed IRA may hold qualifying alternative investments beyond a conventional brokerage menu. But certain business activities and debt-financed investments can generate taxable income inside the retirement account.",
  whoItsFor: "This page provides general education. Specific investments and tax outcomes depend on the applicable facts, ownership structure, financing, and federal tax rules.",
};

export const ubtiIraRevelation = {
  eyebrow: "The Moment Of Discovery",
  heading: ["Tax-Advantaged Doesn't Mean Every", "Investment Is Exempt From Every Tax"],
  goldLine: 1,
  paragraphs: [
    "A Traditional IRA generally provides tax-deferred treatment for eligible investment earnings. A Roth IRA can provide tax-free qualified distributions. Those are important retirement-account characteristics. But federal law also contains a separate set of rules for certain business income earned within tax-favored arrangements, commonly called unrelated business income tax.",
    "The rules may affect an IRA that holds an operating business interest or certain investments acquired using borrowed money.",
  ],
  featured: "The IRA's Tax Advantages Remain Important. The Investment Structure Still Matters.",
  note: "The existence of UBTI does not automatically mean an investment is prohibited or that the IRA loses its tax-favored status. A tax obligation and a prohibited transaction are different legal issues.",
};

export const ubtiIraTerms = {
  eyebrow: "Three Terms Every Investor Should Know",
  heading: ["UBTI. UBIT. UDFI.", "Different Meanings."],
  items: [
    { label: "01", headline: "UBTI", copy: "Unrelated Business Taxable Income — the taxable income determined under the applicable federal rules for certain unrelated business activities and other income included by statute." },
    { label: "02", headline: "UBIT", copy: "Unrelated Business Income Tax — the federal tax imposed on taxable unrelated business income, which may be owed by the IRA arrangement under applicable law." },
    { label: "03", headline: "UDFI", copy: "Unrelated Debt-Financed Income — income attributable to certain debt-financed property under Internal Revenue Code Section 514. It can be included in the calculation of UBTI." },
  ],
};

export const ubtiIraIncomeTable = {
  eyebrow: "The Investment Income Distinction",
  heading: ["Not All Investment Income", "Is Treated The Same Way"],
  leftLabel: "Generally Excluded From UBTI",
  rightLabel: "May Create UBTI Or UDFI",
  rows: [
    { left: "Ordinary interest, subject to exceptions.", right: "Operating trade or business income." },
    { left: "Dividends, subject to exceptions.", right: "Certain debt-financed investment income." },
    { left: "Qualifying real property rent, unless special rules apply.", right: "Certain partnership business allocations." },
    { left: "Certain capital gains, unless an exception applies.", right: "Debt-financed property gains at sale, subject to a lookback period." },
  ],
  footnote: "This is a conceptual overview. Do not label every dividend, capital gain, or rental payment universally tax-free — the exact investment activity and legal structure determine treatment.",
};

export const ubtiIraStory = {
  eyebrow: "Picture What That Could Look Like",
  heading: ["Imagine Your IRA Owning A Rental Property.", "Now Consider How It Was Purchased."],
  stories: [
    {
      label: "Cash Vs. Debt-Financed Purchase",
      headline: "Imagine Your IRA Owning A Rental Property. Now Consider How It Was Purchased.",
      scenario:
        "An investor discovers a beautiful rental property, evaluates the neighborhood, estimates rental income, and reviews expected expenses. They explore whether an appropriately structured self-directed IRA could acquire the property, and discover that financing can affect the tax treatment. In one hypothetical arrangement, the IRA purchases the qualifying real property without acquisition debt — ordinary qualifying rent from real property is generally excluded from UBTI, subject to applicable exceptions. In a separate hypothetical arrangement, the IRA acquires the same type of property using qualifying investment financing — under Section 514, a portion of the income attributable to debt-financed property may be included in UBTI.",
      realization: "Same kind of property. Different financing. Potentially different tax treatment.",
      risk: "The scenarios are hypothetical. They do not represent actual investments, guaranteed deductions, tax calculations, or investment recommendations.",
    },
  ],
};

export const ubtiIraDebtFinancing = {
  eyebrow: "The Leveraged Property Revelation",
  heading: ["Borrowed Money Can Change The", "Tax Treatment Of An IRA Investment"],
  goldLine: 1,
  tone: "panel" as const,
  paragraphs: [
    "An IRA may explore certain permissible financing arrangements, subject to applicable rules. But the use of acquisition debt can trigger unrelated debt-financed income provisions — under Section 514, a portion of the income attributable to certain debt-financed assets may be included in taxable unrelated business income.",
    "A loan being nonrecourse does not automatically eliminate UDFI. The nonrecourse nature of financing and the unrelated debt-financed income provisions address different legal questions. Certain debt-financed property rules can also apply to gain realized when an investment is sold, using a lookback period for acquisition indebtedness during the 12 months before disposition.",
  ],
  featured: "The Question Isn't Only What The IRA Owns. It's Also How The Investment Is Financed.",
  note: "Paying off a loan immediately before a sale does not necessarily eliminate every debt-financed income consideration.",
};

export const ubtiIraBusinessInvestments = {
  eyebrow: "Private Equity, Partnerships & Entity Structure",
  heading: ["Your IRA Could Own A Business Interest.", "The Business Activity Matters."],
  intro: "An ownership interest in an active trade or business can create specialized tax issues, even when the IRA investor does not personally manage the business.",
  items: [
    { label: "01", headline: "Partnership K-1 Allocations", copy: "When an IRA invests through a partnership, the applicable allocation may need to be considered in the IRA's UBTI calculation — a cash distribution is not necessarily required for a tax obligation to arise." },
    { label: "02", headline: "LLCs & Federal Tax Classification", copy: "An LLC's federal tax treatment depends on ownership, elections, and applicable classifications. Forming an LLC does not by itself eliminate UBIT." },
    { label: "03", headline: "C Corporation Investments", copy: "Dividends received by an IRA from a C corporation are generally excluded from UBTI under the applicable passive income rules, subject to exceptions — unlike business income allocated by a partnership." },
  ],
};

export const ubtiIraFaq = {
  eyebrow: "Frequently Asked Questions",
  heading: ["UBTI Questions", "Worth Understanding"],
  items: [
    {
      question: "What is unrelated business income tax (UBIT)?",
      answer: "UBIT is the federal tax that may be imposed on an IRA's unrelated business taxable income (UBTI) — income from certain business activities or debt-financed investments that can be taxable even within a tax-favored retirement account.",
    },
    {
      question: "Does UBTI mean my investment is prohibited?",
      answer: "No. A tax obligation and a prohibited transaction are different legal issues. The existence of UBTI does not automatically mean an investment is prohibited or that the IRA loses its tax-favored status.",
    },
    {
      question: "Is ordinary rental income taxable inside an IRA?",
      answer: "Generally, no. Internal Revenue Code Section 512(b)(3) generally excludes qualifying rent from real property from UBTI, but acquisition debt, substantial services to tenants, or net-profit-based rent can change that treatment.",
    },
    {
      question: "Does financing a property purchase always create UBTI?",
      answer: "Financing can cause a portion of the income attributable to the debt-financed property to be included in UBTI under Section 514 — it does not mean the full rental income automatically becomes taxable.",
    },
    {
      question: "Can an IRA owe UBTI from a private equity investment?",
      answer: "Potentially. An IRA that invests in a partnership conducting an operating business may be allocated business income included in UBTI, even without a cash distribution and without the IRA owner personally managing the business.",
    },
    {
      question: "Does forming an LLC eliminate UBIT?",
      answer: "No. An LLC is a legal entity formed under state law; its federal tax treatment depends on ownership, elections, and classification. Forming an LLC does not by itself eliminate the applicable UBIT rules.",
    },
    {
      question: "Does a Roth IRA avoid UBTI?",
      answer: "No. UBTI and UBIT rules apply regardless of whether the account is Traditional or Roth. Roth tax advantages address qualified distributions, not specialized business-income tax rules.",
    },
    {
      question: "When does an IRA need to file Form 990-T?",
      answer: "Under current IRS guidance, an IRA generally must file when it has $1,000 or more in gross unrelated business income, subject to applicable rules.",
    },
  ],
  sourceLink: {
    label: "IRS: Publication 598",
    href: "https://www.irs.gov/publications/p598",
  },
};

export const ubtiIraReferences = [
  {
    title: "IRS: Publication 598",
    description: "Primary source for unrelated business taxable income rules and exclusions.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "IRS: Unrelated Business Income From Debt-Financed Property",
    description: "Official explanation of the Section 514 debt-financed property rules.",
    href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514",
  },
  {
    title: "IRS: Instructions For Form 990-T",
    description: "Official filing guidance for unrelated business taxable income, including applicable IRA trusts.",
    href: "https://www.irs.gov/instructions/i990t",
  },
  {
    title: "IRS: Retirement Plan Investment FAQs",
    description: "General retirement-account investment restrictions relevant to business and debt-financed investments.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
];
