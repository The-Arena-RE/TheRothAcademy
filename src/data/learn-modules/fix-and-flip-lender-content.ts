export const hero = {
  eyebrow: "The Fix-And-Flip Lender",
  title: ["What If Your Retirement Plan Could Finance A House Flip", "Without Flipping The House?"],
  goldLine: 1,
  description:
    "An investor finds an outdated house, wants to buy it, renovate it, and sell it — and needs financing. A qualifying Self-Directed 401(k) may be able to make certain private loans to unrelated real estate investors. The retirement plan could potentially hold the loan while the borrower is responsible for the renovation and repayment, and if the borrower performs as agreed, the plan may collect contractual interest.",
  whoItsFor: "For anyone who assumed real estate investing meant buying, renovating, or renting the property yourself.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const twoPerspectives = {
  eyebrow: "Two People See The Same Property Differently",
  heading: ["The Flipper Sees A Renovation.", "The Lender Sees A Promise To Repay."],
  leftLabel: "The House Flipper",
  rightLabel: "The Self-Directed 401(k) Lender",
  rows: [
    { left: "Goal: Buy, improve, and sell the house.", right: "Goal: Collect principal and contractual interest." },
    { left: "Owns: The property, subject to any lender's security rights.", right: "Owns: The loan obligation and applicable security rights." },
    { left: "Responsible for: The renovation and project expenses.", right: "Responsible for: Evaluating and holding the investment under the retirement-plan rules." },
    { left: "Potential result: Profit or loss from the project.", right: "Potential result: Interest collected, principal recovered, delayed repayment, or investment loss." },
  ],
  footnote:
    "The flipper makes money if the project works. The lender is owed money under the loan, whether the flip is profitable or not, but payment is not guaranteed. A lender doesn't automatically receive ownership of the house or a share of the borrower's profits — equity ownership and debt investing are different.",
};

export const morganAlexStory = {
  eyebrow: "Meet Morgan And Alex",
  heading: ["Morgan Has Retirement Savings.", "Alex Has A House To Renovate."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Morgan Has Retirement Savings. Alex Has A House To Renovate.",
      scenario:
        "Morgan is 45 and operates a qualifying independent consulting business with legitimate compensation and no employees who must be covered under the contemplated owner-only plan. Morgan has established a properly structured Self-Directed 401(k) with eligible investment capital available, and becomes interested in private lending. Meanwhile, Alex operates an unrelated residential property investment business, finds a dated house needing substantial renovation, and considers borrowing money from a private lender.",
      realization:
        "Morgan and Alex are genuinely unrelated — no ownership or other disqualified relationship that would make the contemplated loan a prohibited transaction. \"Could Morgan's Self-Directed 401(k) finance Alex's real estate project?\" Certain qualified retirement plans may invest in third-party loans, but the investment must satisfy the plan's terms, prohibited-transaction rules, exclusive-benefit requirements, valuation obligations, applicable lending law, and other relevant conditions.",
      risk: "Both people and the property are fictional. All amounts, loan terms, and financial outcomes are educational illustrations.",
    },
  ],
};

export const houseFlipEconomics = {
  eyebrow: "The House Flip Economics",
  heading: ["Alex Finds A House For $120,000.", "The Whole Project Will Cost More."],
  intro:
    "Alex estimates the improvement budget, plus closing, carrying, and eventual selling expenses. The full project is larger than the purchase price.",
  figures: [
    { label: "Property Purchase", value: "$120,000" },
    { label: "Planned Renovation", value: "$40,000" },
    { label: "Other Acquisition & Selling Costs", value: "$20,000" },
    { label: "Total Project Costs (Before Interest)", value: "$180,000" },
    { label: "Retirement-Plan Loan", value: "$130,000" },
    { label: "Borrower's Initial Capital", value: "$50,000" },
  ],
  disclaimer:
    "The $120,000 house is really a projected $180,000 project before the cost of borrowing money. The example assumes the $130,000 loan is fully disbursed at inception for simple interest calculations — real renovation loans may use controlled accounts, staged advances, inspection requirements, and other safeguards. This illustration does not recommend releasing the entire amount upfront.",
};

export const whatLenderReceives = {
  eyebrow: "What Does The Lender Receive?",
  heading: ["The Borrower Wants The House.", "The Retirement Plan Wants An Enforceable Loan."],
  intro:
    "Morgan's retirement plan isn't purchasing the house. Instead, it is considering lending $130,000 to Alex under the following fictional terms.",
  figures: [
    { label: "Principal", value: "$130,000" },
    { label: "Annual Nominal Interest Rate", value: "12%" },
    { label: "Term", value: "9 Months" },
    { label: "Interest Payments", value: "Monthly" },
    { label: "Principal Repayment", value: "At Maturity" },
    { label: "Prepayment Penalty", value: "None" },
  ],
  disclaimer:
    "Alex owns the project. The retirement plan owns a contractual right to repayment. The loan's legal borrower, guarantors, collateral, and documents must be correctly identified in an actual transaction — this is not a universal lending template.",
};

export const lendersSideFlip = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["Follow A $130,000 Loan", "Through An Entire House Flip."],
  intro:
    "Imagine your Self-Directed 401(k) has loaned $130,000 to an unrelated investor. The borrower buys the house, renovates it, attempts to sell it, and is responsible for repaying the loan. The retirement plan doesn't own the house — it holds the debt obligation and appropriate security rights. Select an ending to see what the plan actually receives.",
  summary: [
    { label: "Loan Principal", value: "$130,000" },
    { label: "Monthly Interest ($130,000 × 1%)", value: "$1,300" },
    { label: "Scheduled Term", value: "9 Months" },
  ],
  outcomes: [
    {
      key: "payoff9",
      label: "The House Sells. Loan Paid At 9 Months.",
      description:
        "The fictional house sells in month nine. The borrower has made all nine scheduled monthly interest payments, and the $130,000 principal is repaid at maturity. The retirement plan receives the principal it loaned and the contractual interest paid over the nine-month term — it does not automatically receive a share of the borrower's remaining property-sale profit.",
      figures: [
        { label: "Interest Collected (9 × $1,300)", value: "$11,700" },
        { label: "Principal Repaid", value: "$130,000" },
        { label: "Total Cash Received", value: "$141,700" },
        { label: "Result vs. $130,000 Advanced", value: "+$11,700" },
      ],
      statement: "The house flip belongs to the borrower. The interest belongs to the lender when it is collected.",
    },
    {
      key: "payoff5",
      label: "Paid Off Early, After 5 Months.",
      description:
        "The borrower completes the project early, the property sells, and the borrower repays the loan immediately after five monthly interest payments. The retirement plan receives the principal sooner — potentially useful because the money is no longer tied up in this note — but the loan produces less total contractual interest than it would have over nine months.",
      figures: [
        { label: "Interest Collected (5 × $1,300)", value: "$6,500" },
        { label: "Principal Repaid", value: "$130,000" },
        { label: "Total Cash Received", value: "$136,500" },
        { label: "Result vs. $130,000 Advanced", value: "+$6,500" },
      ],
      statement: "Early repayment returns the principal sooner but reduces the total interest earned under this fictional note.",
    },
    {
      key: "default",
      label: "The Borrower Defaults.",
      description:
        "Alex makes four scheduled interest payments, then the project encounters serious problems — renovation costs rise, the contractor leaves, the property isn't ready for sale, and Alex runs out of money. The next payment is missed. The retirement plan still holds the debt obligation but doesn't have its principal back, and collecting what is owed may become difficult. Assume the loan defaults and, after lawful enforcement, the collateral produces gross proceeds of $120,000 with $9,000 in enforcement and disposition expenses — under first-priority, no-other-claims assumptions, $111,000 is available to the plan.",
      figures: [
        { label: "Interest Collected (4 × $1,300)", value: "$5,200" },
        { label: "Gross Collateral Recovery", value: "$120,000" },
        { label: "Enforcement & Disposition Expenses", value: "$9,000" },
        { label: "Net Collateral Recovery", value: "$111,000" },
        { label: "Total Cash Received", value: "$116,200" },
        { label: "Result vs. $130,000 Advanced", value: "−$13,800" },
      ],
      statement: "A secured loan can still lose money when the collateral and recoveries are insufficient.",
    },
  ],
  comparisonNote:
    "These are simplified nominal cash results that exclude additional omitted plan expenses, taxes, delays, and transaction-specific consequences. The default recovery includes a hypothetical legal process that may take significant additional time, and this scenario does not forecast default likelihood. Default does not automatically transfer the house to the retirement plan, and foreclosure is never immediate or guaranteed — enforcement varies by state and can be affected by notice requirements, borrower cure rights, bankruptcy, other liens, and required procedures.",
  conclusion: "The loan agreement tells you what should be paid. The borrower's performance and actual recovery determine what the retirement plan receives.",
};

export const flipperVsLenderEconomics = {
  eyebrow: "What Happened To The House Flipper's Profit?",
  heading: ["The Borrower Could Make A Profit.", "That Profit Isn't Automatically The Lender's."],
  intro:
    "Now imagine the house sells for $245,000 after nine months, and the borrower has also paid the retirement plan $11,700 in contractual interest. But a renovated house might also sell for less than hoped — imagine instead it sells for only $195,000.",
  figures: [
    { label: "Sale Price (Expected Scenario)", value: "$245,000" },
    { label: "Borrower's Project Cash Surplus (Expected)", value: "$53,300" },
    { label: "Sale Price (Lower Scenario)", value: "$195,000" },
    { label: "Borrower's Project Cash Surplus (Lower)", value: "$3,300" },
    { label: "Lender Interest Collected (Either Scenario)", value: "$11,700" },
    { label: "Lender Principal Repaid (Either Scenario)", value: "$130,000" },
  ],
  disclaimer:
    "Borrower surplus = sale price − $180,000 project costs − $11,700 loan interest. This is the borrower's simplified project result, not the retirement plan's profit — the plan is entitled to the agreed interest and principal repayment, not automatically the borrower's remaining business profit. A smaller sale price can eliminate most of the borrower's projected profit, even if the lender is still owed the same contractual repayment; a borrower with insufficient available cash may be unable to satisfy the debt in full, which is why repayment sources and collateral matter.",
};

export const securedMeaning = {
  eyebrow: "What Does \"Secured\" Really Mean?",
  heading: ["A Secured Loan Doesn't Mean", "Someone Promises You'll Get Every Dollar Back."],
  paragraphs: [
    "Some private real estate loans are supported by a properly documented lien against property. That may give the lender important rights — but several details matter: was the security properly documented, recorded, or perfected as required? What position does the lender hold? Are there other liens, unpaid property taxes, or questions about whether the collateral is worth enough and the security can actually be enforced?",
    "Collateral rights are generally layered: the real estate itself sits at the bottom, property taxes and other possible superior claims sit above it, then the retirement plan's secured loan — assumed a first recorded mortgage or deed-of-trust position in this fictional example, subject to any legally superior claims — and finally any other possible interests. Tax liens, mechanics liens, judgments, mortgages, and other claims can have priority determined by specific facts and law, and a title search or title insurance doesn't eliminate every risk.",
  ],
  featured: "A lien is a legal right. It isn't a guarantee the property will sell for enough money to satisfy the debt.",
};

export const loanToCostValue = {
  eyebrow: "Loan-To-Cost And Loan-To-Value",
  heading: ["How Much Is Being Loaned Compared", "With What The Project May Actually Be Worth?"],
  intro:
    "Private lenders often compare the amount of money being loaned with the size or value of the project. The 53.1% figure below uses an unverified future estimate, not a current as-is appraisal — and the property originally costs $120,000, which is less than the full $130,000 loan, so initial security coverage deserves particular scrutiny before renovations are completed.",
  figures: [
    { label: "Loan Amount", value: "$130,000" },
    { label: "Total Project Costs (Before Interest)", value: "$180,000" },
    { label: "Loan-To-Cost ($130,000 ÷ $180,000)", value: "≈ 72.2%" },
    { label: "Hypothetical Completed Resale Value", value: "$245,000" },
    { label: "Loan-To-Expected-Resale-Value ($130,000 ÷ $245,000)", value: "≈ 53.1%" },
  ],
  disclaimer: "A lender has to understand what the property is worth now, not just what somebody hopes it will be worth after renovation. Neither percentage proves the loan is safe.",
};

export const renovationRisk = {
  eyebrow: "Why Lenders Care About The Renovation Budget",
  heading: ["The Loan Is Made Today.", "The Improvements May Not Exist Yet."],
  intro:
    "Imagine the contractor discovers hidden damage mid-project and the renovation budget increases. Alex now needs additional money to finish the house and asks the retirement plan for another loan advance. The request raises serious questions: does the original agreement permit additional advances? Does the plan have available funds? Will the collateral support more debt?",
  items: [
    { number: "01", title: "Original Renovation Budget", description: "$40,000, as originally planned." },
    { number: "02", title: "New Unexpected Repair", description: "$18,000 in previously undiscovered damage." },
    { number: "03", title: "Revised Renovation Budget", description: "$58,000 — not automatically added to the existing loan balance unless a separately documented amendment is introduced." },
  ],
  note: "A borrower running out of money doesn't automatically mean lending more is the right answer. The retirement plan is not obligated to rescue the project.",
};

export const exitStrategy = {
  eyebrow: "The Exit Strategy",
  heading: ["How Is The Borrower Supposed To Repay", "$130,000 At The End?"],
  paragraphs: [
    "The note requires interest-only payments during its term, meaning the borrower isn't gradually reducing the principal through monthly installments — the full $130,000 remains due at maturity. The expected source may be the sale of the renovated property, but what if the property doesn't sell? The borrower might need another lawful financing source, might have to lower the asking price, or could default.",
    "A short-term real estate loan can create timing pressure: permits, contractors, weather, appraisals, buyer financing, and market conditions can all delay the exit. The loan's maturity date does not automatically change because the project is behind schedule — a loan can become due before the real estate project produces the money expected to repay it. Extensions, modifications, late charges, defaults, and enforcement all depend on the actual agreement and law.",
  ],
  featured: "A good-looking renovation is not the same thing as a reliable plan for paying off the loan.",
};

export const relatedPartyLending = {
  eyebrow: "Your Retirement Plan Is Not A Bank For Your Own Business",
  heading: ["Can Your Self-Directed 401(k) Loan Money", "To Your Own House-Flipping Company?"],
  intro:
    "That arrangement generally raises prohibited-transaction concerns — the retirement plan cannot simply become a source of financing for its owner or a related business. Charging commercial interest or offering valuable collateral doesn't automatically resolve the problem.",
  items: [
    { number: "01", title: "Loan To A Genuinely Unrelated Borrower", description: "Potentially permissible, subject to the actual facts and applicable requirements." },
    { number: "02", title: "Direct Loan To The Owner's Own Company", description: "Generally prohibited related-party lending concerns." },
    { number: "03", title: "Loan Routed Through Another Person To Benefit The Owner", description: "May constitute an indirect prohibited transaction." },
    { number: "04", title: "Qualified Participant Loan", description: "A different arrangement governed by its own statutory rules — not the same as a third-party investment loan." },
  ],
  note: "The opportunity is lending to an appropriate independent borrower, not using retirement money to finance your own projects.",
};

export const verifyingPrivateLoan = {
  eyebrow: "What Does It Mean To Verify A Private Loan?",
  heading: ["A Promising Borrower Isn't Enough.", "The Investment Needs Evidence."],
  intro:
    "Private real estate investors often hear about opportunities through personal relationships — friends, former coworkers, business partners, relatives. But retirement-plan prohibited-transaction rules require more than casual assumptions. Not every friend is automatically a disqualified person, and not every distant relative is classified identically — but a person can be an outside third party and still be a disqualified person because of a separate legal relationship with the plan. A private loan is only as understandable as the facts behind the borrower, collateral, and repayment obligation.",
  items: [
    { number: "01", title: "The Borrower", description: "Who owes the money?" },
    { number: "02", title: "The Property", description: "What serves as collateral?" },
    { number: "03", title: "The Value", description: "What supports the current valuation?" },
    { number: "04", title: "The Budget", description: "What work and expenses remain?" },
    { number: "05", title: "The Loan Documents", description: "What rights does the lender actually have?" },
    { number: "06", title: "The Exit", description: "Where will repayment funds come from?" },
  ],
  note: "Private lending also involves legal and regulatory questions beyond the interest rate — where the property is located, whether the loan is genuinely for business purposes, state lending laws, potential licensing requirements, and whether the arrangement could involve securities law. A business-purpose exemption under one law does not automatically eliminate every other lending, licensing, or disclosure obligation.",
};

export const planReceivesPayment = {
  eyebrow: "What Does The Retirement Plan Actually Receive?",
  heading: ["The Payment Belongs To The Plan.", "It Doesn't Become Your Personal Spending Money."],
  items: [
    { number: "01", title: "Unrelated Borrower", description: "Makes a payment under the loan documents." },
    { number: "02", title: "Authorized Servicing Or Payment Arrangement", description: "Receives and records the payment under the plan's legal structure." },
    { number: "03", title: "Self-Directed 401(k)", description: "Owns and accounts for the collected funds — any personal distribution is a separate matter subject to applicable rules." },
  ],
  note: "The borrower pays the lender. In this illustration, the lender is the retirement plan. The exact trust, custodian, trustee, banking, and servicing structure depends on the plan and applicable legal arrangements.",
};

export const noteValuationAndTaxes = {
  eyebrow: "A Private Note Isn't Always Worth Its Face Value",
  heading: ["The Borrower Owes $130,000.", "Does That Mean The Note Is Worth $130,000?"],
  paragraphs: [
    "Not necessarily. A performing loan and a seriously delinquent loan may have very different fair market values — borrower financial condition, payment history, collateral value, lien priority, time remaining, and probability of collection all matter. Qualified retirement plans must appropriately value plan assets, and the IRS specifically identifies third-party loans as investments requiring fair-market-value consideration. Repeatedly reporting full principal for a note that has become uncollectible can raise valuation concerns.",
    "Interest inside a retirement plan doesn't automatically follow the same rules as personal lending income, either. A qualified retirement plan generally receives special tax treatment, and certain ordinary investment interest may be excluded from unrelated business taxable income — but the rules contain exceptions, and repeated lending activities, related organizations, and certain financing arrangements can raise additional questions. The note's stated 12% contractual rate is not an after-tax return.",
  ],
  featured: "A promise to repay $130,000 isn't automatically an asset worth $130,000 today.",
};

export const loanVsRental = {
  eyebrow: "Why A Private Loan Isn't The Same As A Rental Property",
  heading: ["Both Can Involve Real Estate.", "They Don't Create The Same Ownership Rights."],
  leftLabel: "Own The Property",
  rightLabel: "Own The Loan",
  rows: [
    { left: "The retirement plan owns the property through the appropriate structure.", right: "The borrower owns the property, subject to the lender's security rights." },
    { left: "It may receive qualifying rental income.", right: "The retirement plan holds a contractual payment obligation and may receive interest and principal." },
    { left: "It bears property ownership expenses and risks.", right: "The plan faces borrower, collateral, and collection risks instead." },
  ],
  footnote: "Owning the building and lending against the building are two different ways a retirement plan may potentially participate in real estate. Neither arrangement is universally safer or more profitable.",
};

export const beyondHouseFlip = {
  eyebrow: "The Investment Doesn't Have To Be A House Flip",
  heading: ["The Bigger Discovery Is Private Lending,", "Not Just House Renovations."],
  intro:
    "This module uses a house flip because the project is easy to visualize. But certain Self-Directed 401(k) plans may permit other qualifying private lending arrangements as well — different borrowers, different collateral, or different business purposes. Every arrangement has its own legal and financial risks.",
  items: [
    { number: "01", title: "Residential Renovation Loan", description: "A borrower renovates and resells a house." },
    { number: "02", title: "Land Investment Loan", description: "A borrower seeks appropriate financing for an unrelated land investment." },
    { number: "03", title: "Business Loan", description: "An unrelated operating company seeks capital under a lawful, properly structured arrangement." },
  ],
  note: "The house flip is one example. The broader possibility is that a qualifying retirement plan may be able to own certain private debt investments.",
  linkLabel: "Explore Private Lending",
  linkHref: "/services/self-directed-401k/private-lending",
};

export const closingReflection = {
  eyebrow: "The Real Opportunity",
  heading: ["You Might Not Have To Buy The House", "To Explore A Real Estate Investment."],
  paragraphs: [
    "Many people believe real estate investing means one thing: buy a property, renovate it, rent it, or sell it. But financing is another part of the real estate market — someone owns the property, someone provides capital, and the loan documents establish financial rights and obligations.",
    "A qualifying Self-Directed 401(k) may be able to participate as a lender in certain independent real estate transactions. The borrower may earn a profit from the project, the lender may collect contractual interest, or the project may fail and leave both parties with losses. The concept opens an entirely different way to think about retirement investing.",
  ],
  featured: "Your retirement plan might not need to own the house. It might be able to own the loan.",
};

export const faqItems = [
  {
    question: "Can a Self-Directed 401(k) make private real estate loans?",
    answer: "Certain qualified Self-Directed 401(k) plans may make loans to appropriate third-party borrowers, subject to plan provisions, prohibited-transaction rules, valuation requirements, and applicable lending laws.",
  },
  {
    question: "Does the Self-Directed 401(k) own the house when it makes the loan?",
    answer: "Not ordinarily. In the fictional loan example, the borrower owns the property, subject to properly established security rights, while the retirement plan owns the debt obligation.",
  },
  {
    question: "Does the retirement plan receive the house-flipping profit?",
    answer: "Not automatically. A lender is entitled to the payments required by the loan agreement. The borrower's property-flipping profit is a separate financial result.",
  },
  {
    question: "Is a 12% private lending rate guaranteed?",
    answer: "No. The 12% rate in the example is fictional contractual interest. Borrowers may default or pay early, and the actual investment result can differ substantially from the stated rate.",
  },
  {
    question: "Can the plan automatically take the house if the borrower defaults?",
    answer: "No. Enforcement or foreclosure requires compliance with applicable law and the actual security documents. A default does not automatically transfer title to the lender.",
  },
  {
    question: "Can my retirement plan lend to my own property-flipping LLC?",
    answer: "A direct loan from a retirement plan to its owner's own company generally raises prohibited related-party lending concerns.",
  },
  {
    question: "What is a balloon payment?",
    answer: "A balloon payment is a comparatively large amount due at a specified time, often representing unpaid principal. In the fictional example, the $130,000 principal is due at the end of nine months.",
  },
  {
    question: "What is after-repair value?",
    answer: "After-repair value is an estimate of what a property might be worth after contemplated improvements. It is not a guaranteed future sale price, and it is not necessarily equivalent to an independent professional appraisal.",
  },
  {
    question: "Does a retirement plan have to value a private note?",
    answer: "Qualified plans have asset valuation requirements. Third-party loans must be appropriately valued rather than assuming the outstanding principal always equals fair market value.",
  },
  {
    question: "Is a secured private loan as safe as a bank certificate of deposit?",
    answer: "No. A private note is not automatically bank-insured, liquid, or protected against borrower default. Collateral and loan documents do not guarantee repayment.",
  },
];

export const references = [
  {
    title: "IRS: Issue Snapshot — Third-Party Loans From Plans",
    description: "Essential source supporting the general possibility of third-party loans, subject to prohibited transactions, plan requirements, and asset valuation.",
    href: "https://www.irs.gov/retirement-plans/issue-snapshot-third-party-loans-from-plans",
  },
  {
    title: "IRS: Retirement Plan Investments FAQs",
    description: "Relevant to investment authority, restrictions, and prohibited transactions.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Retirement Topics — Prohibited Transactions",
    description: "Relevant to loans involving owners, related companies, and disqualified persons.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS: Valuation Of Plan Assets At Fair Market Value",
    description: "Relevant to valuing private notes and other plan investments.",
    href: "https://www.irs.gov/retirement-plans/valuation-of-plan-assets-at-fair-market-value",
  },
  {
    title: "IRS Publication 598",
    description: "Relevant to unrelated business taxable income and ordinary investment interest.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "IRS: Retirement Plans FAQs Regarding Loans",
    description: "Relevant to distinguishing qualified participant loans from third-party investment loans.",
    href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-loans",
  },
  {
    title: "CFPB: Regulation Z Exemptions",
    description: "Relevant to business-purpose and organizational credit distinctions.",
    href: "https://www.consumerfinance.gov/rules-policy/regulations/1026/3/",
  },
  {
    title: "SEC Investor.gov: Promissory Notes",
    description: "Relevant to promissory note fraud, investment risks, and securities-law concerns.",
    href: "https://www.investor.gov/protect-your-investments/fraud/types-fraud/promissory-notes",
  },
];

export const finalConversion = {
  heading: ["What If Your Retirement Plan Could Be The Lender", "Behind The Next Real Estate Project?"],
  description:
    "Imagine an investor finding an older house, wanting to buy it, renovate it, and sell it — but needing financing. A qualifying Self-Directed 401(k) may potentially provide a properly structured loan to an unrelated borrower. The retirement plan would hold the debt, the borrower would be responsible for the project, and if payments are made as agreed, the plan may receive contractual interest and principal. It's not guaranteed — the borrower can default, collateral can lose value, enforcement can be expensive, and retirement-plan restrictions must be followed. But the investment possibility is fascinating.",
  signature: "A Self-Directed 401(k) may offer a world of investment opportunities beyond stocks, funds, and direct property ownership.",
};
