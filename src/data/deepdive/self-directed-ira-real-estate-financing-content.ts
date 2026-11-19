export const financingIraHero = {
  eyebrow: "Real Estate Financing With A Self-Directed IRA",
  title: ["Your IRA Could Buy", "Real Estate With Financing."],
  goldLine: 1,
  description:
    "Certain self-directed IRA real estate investments may be acquired using eligible third-party financing. Imagine retirement capital participating in a qualifying rental property or commercial investment through an appropriately structured account.",
  whoItsFor: "IRA real estate financing requires careful legal, custodial, lending, and tax analysis. Borrowing can create additional investment risk and unrelated debt-financed income tax.",
};

export const financingIraRevelation = {
  eyebrow: "The Moment Of Discovery",
  heading: ["Your IRA Doesn't Necessarily Have To", "Buy Every Property Entirely With Cash"],
  goldLine: 1,
  paragraphs: [
    "A self-directed IRA may be able to purchase qualifying real estate. Some investors acquire property using retirement funds without financing. Others may explore whether a permitted lending arrangement is available — in certain circumstances, third-party borrowing can help finance an IRA-owned property purchase.",
    "But this is not an ordinary personal mortgage. The retirement-account ownership structure matters. The source and terms of the loan matter. And the arrangement must comply with the applicable retirement-account rules.",
  ],
  featured: "The Property May Be The Same. The Financing Rules Are Different.",
  note: "Financing may allow an investor to consider a property with a purchase price greater than the IRA's available cash, but it also creates debt obligations, financing costs, tax exposure, and loss risk.",
};

export const financingIraStructures = {
  eyebrow: "Three Real Estate Investment Structures",
  heading: ["Three Ways A Retirement-Account", "Property Investment Might Be Structured"],
  items: [
    { label: "01", headline: "Direct All-Cash IRA Ownership", copy: "The self-directed IRA acquires a qualifying property using available retirement assets without acquisition financing." },
    { label: "02", headline: "Direct IRA Ownership With Financing", copy: "The IRA acquires a qualifying property with an appropriate financing arrangement. Debt-financed income tax may apply." },
    { label: "03", headline: "IRA-Owned LLC With Financing", copy: "An appropriately structured IRA may hold an LLC interest, and the LLC may acquire property using its own eligible financing arrangement." },
  ],
};

export const financingIraStory = {
  eyebrow: "Picture What That Could Look Like",
  heading: ["Imagine Your Retirement Account Acquiring", "An Investment Property With A Mortgage"],
  stories: [
    {
      label: "The Financed Acquisition",
      headline: "Imagine Your Retirement Account Acquiring An Investment Property With A Mortgage.",
      scenario:
        "An investor discovers a compelling residential rental property, understands the neighborhood, and evaluates rental demand, property condition, operating expenses, and investment risk. The property's full purchase price exceeds the IRA's available cash, so the investor begins researching whether an appropriate financing arrangement could be possible. They learn that certain IRA real estate investments may involve nonrecourse financing. The investor explores whether an eligible third-party lender will offer financing under terms compatible with the IRA, and the proposed arrangement is reviewed for prohibited-transaction, lending, tax, and custodial issues. If all relevant conditions are met, the IRA arrangement acquires the property using permitted retirement-account funds and authorized loan proceeds. Loan payments must be made according to the agreement, and the investment's income or gains may create unrelated debt-financed income tax.",
      realization: "A retirement account. An investment property. A different financing possibility.",
      risk: "This scenario is hypothetical and educational. It is not a real transaction, mortgage offer, guaranteed loan approval, tax projection, or investment recommendation.",
    },
  ],
};

export const financingIraNonrecourse = {
  eyebrow: "What Is Nonrecourse Financing?",
  heading: ["A Mortgage Structured Around", "The Investment, Not A Personal Promise"],
  goldLine: 1,
  tone: "panel" as const,
  paragraphs: [
    "Nonrecourse financing generally limits the lender's contractual recovery to specified collateral and permitted remedies rather than making the borrower or another person personally liable for the entire debt. In an IRA real estate context, this distinction is particularly important — a personal guarantee by the IRA owner can create prohibited-transaction concerns.",
    "Nonrecourse is not a universal assurance of legal compliance, and it does not mean the lender has no way to recover its money. The loan may be secured by the investment property, and if the borrower defaults, the lender may be able to enforce its security interest and foreclose.",
  ],
  featured: "The Loan Must Not Become An Improper Personal Obligation.",
  note: "No personal guarantee does not mean no investment risk. Internal Revenue Code Section 4975 prohibits certain direct and indirect extensions of credit involving retirement accounts and disqualified persons.",
};

export const financingIraComparison = {
  eyebrow: "Two Investment Structures, Different Economics",
  heading: ["Cash Vs.", "Financing"],
  leftLabel: "All-Cash IRA Purchase",
  rightLabel: "Financed IRA Purchase",
  rows: [
    { left: "No acquisition mortgage debt or interest expense.", right: "Loan obligations, interest, and loan fees may apply." },
    { left: "No acquisition-debt UDFI from the unleveraged purchase.", right: "UDFI may apply to debt-financed income." },
    { left: "All purchase capital comes from available IRA funds.", right: "Combines eligible IRA capital and borrowed funds." },
    { left: "Exposed to property market and operating risks.", right: "Exposed to property risks plus leverage and default risks." },
    { left: "No mortgage foreclosure risk from acquisition borrowing.", right: "Lender may have foreclosure remedies." },
  ],
  footnote: "Neither structure is universally superior. Borrowing can magnify the economic effects of changing property values, in either direction.",
};

export const financingIraTax = {
  eyebrow: "The Most Important Tax Revelation",
  heading: ["Financing Can Change The Tax", "Treatment Of IRA Real Estate Income"],
  intro: "One of the principal attractions of retirement accounts is their tax-favored treatment. But when an IRA holds debt-financed investment property, Section 514 may cause a portion of the relevant income to be included in unrelated business taxable income.",
  items: [
    { label: "01", headline: "UDFI", copy: "Unrelated Debt-Financed Income — income attributable to certain debt-financed investments under the applicable federal tax rules." },
    { label: "02", headline: "UBTI", copy: "Unrelated Business Taxable Income — income subject to the special unrelated business income tax rules after applying statutory calculations and exclusions." },
    { label: "03", headline: "UBIT", copy: "Unrelated Business Income Tax — the tax that may be imposed on applicable unrelated business taxable income." },
  ],
};

export const financingIraFaq = {
  eyebrow: "Frequently Asked Questions",
  heading: ["Real Estate Financing Questions", "Worth Understanding"],
  items: [
    {
      question: "Can a self-directed IRA buy real estate with a mortgage?",
      answer: "Certain self-directed IRA real estate transactions may use eligible third-party financing when the arrangement complies with applicable custodial, prohibited-transaction, lending, and tax rules.",
    },
    {
      question: "What is a nonrecourse loan?",
      answer: "A nonrecourse loan generally limits the lender's recovery to specified collateral and permitted remedies, rather than making the borrower or another individual personally liable for the entire obligation.",
    },
    {
      question: "Can I personally guarantee my IRA's mortgage?",
      answer: "Personal guarantees connected to an IRA investment can create prohibited transactions. Peek v. Commissioner illustrates this danger.",
    },
    {
      question: "Is a nonrecourse mortgage tax-free inside an IRA?",
      answer: "No. Nonrecourse borrowing can still produce unrelated debt-financed income under Section 514.",
    },
    {
      question: "Is all rental income inside an IRA taxable?",
      answer: "No. Ordinary qualifying real property rents are generally excluded from UBTI, subject to applicable exceptions. Debt-financed arrangements and certain other activities can create taxable income.",
    },
    {
      question: "When does an IRA generally have to file Form 990-T?",
      answer: "Under current IRS guidance, an IRA generally must file when it has $1,000 or more in gross unrelated business income, subject to applicable rules.",
    },
    {
      question: "Does an IRA-owned LLC eliminate UDFI?",
      answer: "No. An IRA-owned LLC does not automatically eliminate unrelated debt-financed income exposure.",
    },
    {
      question: "Can the IRA lose the property if the mortgage defaults?",
      answer: "Yes. A lender may have foreclosure or other permitted collateral remedies under the loan and applicable law.",
    },
  ],
  sourceLink: {
    label: "IRS: Publication 598",
    href: "https://www.irs.gov/publications/p598",
  },
};

export const financingIraReferences = [
  {
    title: "IRS: Publication 598",
    description: "Explains unrelated business taxable income and debt-financed property rules.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "IRS: Unrelated Business Income From Debt-Financed Property",
    description: "Official explanation of the Section 514 debt-financed property rules.",
    href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514",
  },
  {
    title: "IRS: Instructions For Form 990-T",
    description: "Official filing guidance for unrelated business taxable income.",
    href: "https://www.irs.gov/instructions/i990t",
  },
  {
    title: "IRS: Retirement Topics — Prohibited Transactions",
    description: "Explains prohibited extensions of credit and personal guarantees involving IRA investments.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
];
