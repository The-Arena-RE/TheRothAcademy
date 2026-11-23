export const hero = {
  eyebrow: "The Real Estate Professional",
  title: ["You Know How to Sell Real Estate.", "What If Your IRA Could Own It?"],
  goldLine: 1,
  description:
    "You know neighborhoods. You know how to study comparable sales. You know that the right property at the right price can create an interesting opportunity. And you've probably helped other people purchase investments throughout your career. But what about your own retirement savings? A Self-Directed IRA may be able to own qualifying investment real estate, including certain residential properties, vacant land, and commercial real estate. The important question is whether a particular investment is financially attractive, legally permitted, and appropriate for your retirement.",
  whoItsFor:
    "For residential and commercial real estate agents, brokers, and licensed professionals exploring whether their market knowledge translates into IRA investment opportunities.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const marketIntelligenceLayer = {
  eyebrow: "The Market Intelligence Layer",
  heading: ["You Already Look at Property", "Differently."],
  intro:
    "Most people see a house. A real estate professional may see the asking price, the neighborhood, comparable sales, property condition, days on market, zoning, and possible buyer demand. That knowledge can help someone investigate a property. But an attractive listing isn't necessarily a good investment — and an agent's professional responsibilities don't disappear when the prospective buyer is an IRA.",
  steps: [
    { number: "01", title: "Location", description: "Neighborhood context, nearby property types, road access, and broad market characteristics — without inventing actual market statistics." },
    { number: "02", title: "Price", description: "The hypothetical asking price, which is only the starting point of the analysis." },
    { number: "03", title: "Property Condition", description: "Possible repairs, deferred maintenance, and inspection considerations that affect true cost." },
    { number: "04", title: "Investment Economics", description: "The purchase price is only one component of the investment's total cost." },
  ],
  note: "Recognizing a property opportunity is useful. Understanding the complete investment is what matters.",
};

export const elenaStory = {
  eyebrow: "Meet Elena",
  heading: ["She's Helped Clients Buy Hundreds of Homes.", "Now She's Asking a Different Question."],
  stories: [
    {
      label: "Illustrative Real Estate Agent",
      headline: "Elena spends much of her week looking at properties. For years, her retirement savings have been invested through conventional accounts.",
      scenario:
        "Elena is 41, a licensed residential real estate agent with twelve years in residential sales. She does not own a brokerage, and her personal investment experience is limited. She has $170,000 of eligible pre-tax retirement savings moved through a permitted direct rollover into a traditional Self-Directed IRA. For this hypothetical scenario, assume the receiving custodian supports qualifying residential real estate, the transaction involves an unrelated seller and independent professionals, and Elena does not represent the seller or buyer, earn a commission, or have any client relationship or other prohibited interest in the transaction.",
      realization: "\"What if my retirement account could participate in a property investment instead of me buying the house personally?\"",
      risk: "But first, the property has to make financial sense. Elena is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const listingDossier = {
  eyebrow: "The Listing Dossier",
  heading: ["A $90,000 House.", "Three Comparable Sales.", "One Investment Question."],
  intro:
    "A modest, vacant single-family residential property, needing significant interior improvements, is offered by an unrelated third-party seller for an all-cash purchase. No part of this illustration is a real listing or investment offer.",
  figures: [
    { label: "Asking Price", value: "$90,000" },
    { label: "Comparable A — Similar Type, Recently Improved", value: "$151,000" },
    { label: "Comparable B — Similar Size, More Improvements", value: "$162,000" },
    { label: "Comparable C — Similar Area, Superior Condition", value: "$173,000" },
  ],
  disclaimer:
    "The three sales are illustrative references only — not actual market data, appraisals, or proof that the subject property could sell for a particular amount. Differences in condition, square footage, location, timing, features, title, and demand can materially affect value. At first glance, the gap between the asking price and the comparable sales looks interesting. But that difference is not profit. Let's examine the entire investment.",
};

export const financialReality = {
  eyebrow: "The Financial Reality",
  heading: ["The Purchase Price Is $90,000.", "The Investment Costs More Than That."],
  intro:
    "This fictional example reveals the financial details omitted from the initial listing. No commission, referral fee, or other personal compensation is paid to Elena, and all property improvements are performed by independent unrelated contractors.",
  figures: [
    { label: "Purchase Price", value: "$90,000" },
    { label: "Closing & Acquisition Expenses", value: "$5,000" },
    { label: "Renovation Expenses", value: "$22,000" },
    { label: "Holding Expenses", value: "$7,000" },
    { label: "Total Cash Spent Before Sale", value: "$124,000" },
    { label: "Selling Expenses", value: "$10,000" },
  ],
  disclaimer:
    "Total cash expenditure including sale costs: $134,000. This is a simplified investment-cost calculation. It does not predict the property's market value or investment return, and it excludes additional account-level fees and applicable taxes.",
};

export const favorableVsUnfavorable = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["What If the Property Sells for $160,000?", "What If It Doesn't?"],
  intro:
    "Use the same property and expense assumptions for both outcomes. Only the hypothetical sale price changes, isolating the impact of the exit price.",
  scenarios: [
    {
      key: "favorable",
      label: "Sale at $160,000",
      status: "Favorable Sale",
      description:
        "Starting IRA cash balance: $170,000. Cash spent before sale: $124,000, leaving $46,000 remaining in the IRA. Sale proceeds of $160,000 less $10,000 of selling expenses return $150,000 to the IRA.",
      figures: [
        { label: "Total Cash Expenditures", value: "$134,000" },
        { label: "Illustrative Investment Gain", value: "$26,000" },
        { label: "Net Proceeds Returned to IRA", value: "$150,000" },
        { label: "Illustrative Ending IRA Value", value: "$196,000" },
        { label: "Starting IRA Value", value: "$170,000" },
        { label: "Illustrative Increase", value: "+$26,000" },
      ],
      statement: "This assumes the entire example is completed as described, with no additional expenses, taxes, investment changes, or distributions. This is not a projected return.",
    },
    {
      key: "unfavorable",
      label: "Sale at $118,000",
      status: "Unfavorable Sale",
      description:
        "All other expenses remain unchanged. Sale proceeds of $118,000 less $10,000 of selling expenses return $108,000 to the IRA, added to the $46,000 remaining IRA cash.",
      figures: [
        { label: "Total Cash Expenditures", value: "$134,000" },
        { label: "Illustrative Investment Loss", value: "$16,000" },
        { label: "Net Proceeds Returned to IRA", value: "$108,000" },
        { label: "Illustrative Ending IRA Value", value: "$154,000" },
        { label: "Starting IRA Value", value: "$170,000" },
        { label: "Illustrative Decrease", value: "-$16,000" },
      ],
      statement: "If additional defects, delays, market declines, or costs occur, the financial result could be worse.",
    },
  ],
  tableColumns: [
    { label: "Net Proceeds Returned to IRA", index: 2 },
    { label: "Illustrative Ending IRA Value", index: 3 },
  ],
  comparisonNote: "A good purchase price doesn't guarantee a good investment. The property may be worth more after improvements — or less than expected.",
  conclusion: "The most important skill isn't predicting the perfect outcome. It's understanding what could happen if the assumptions are wrong.",
};

export const commissionRestriction = {
  eyebrow: "The Biggest Distinction for Real Estate Agents",
  heading: ["Your IRA Can Potentially Own the Property.", "That Doesn't Mean You Can Earn the Commission."],
  goldLine: 1,
  paragraphs: [
    "A real estate agent ordinarily earns commissions or other permitted compensation through professional real estate services. But IRA-owned transactions are different. If an IRA owner receives personal compensation connected to a transaction involving their own IRA assets, prohibited-transaction rules may apply. For example, an agent using their IRA to purchase a client's listing while earning a personal commission from the transaction presents a serious prohibited-transaction concern. Commission rebates, referral fees, compensation to related businesses, and other arrangements also require careful review.",
    "In Elena's scenario, the property is purchased from an unrelated third-party seller, Elena is not representing the seller or acting as a compensated buyer's agent, independent professionals perform the work, and no personal commission or referral fee is paid to Elena. These assumptions do not, by themselves, guarantee that a particular real transaction is compliant — the actual proposed structure must still be reviewed.",
  ],
  featured: "The objective of an IRA investment is to benefit the retirement account under the applicable rules, not to create improper personal compensation for the account holder.",
};

export const clientDutyVsInvestment = {
  eyebrow: "Your Client's Listing Is Not Automatically Your Investment Opportunity",
  heading: ["You Know the Listing.", "But Who Are You Working For?"],
  steps: [
    { number: "01", title: "Representing the Client", description: "A seller hires you to list a property. You learn about their goals, financial situation, negotiating position, or other confidential information. The agent has professional obligations to the client." },
    { number: "02", title: "Exploring an IRA Investment", description: "You notice the property might be attractive as an investment. The IRA owner's personal financial interests may create additional conflicts and restrictions. These two interests cannot simply be blended together." },
  ],
  note: "For REALTORS®, the 2026 National Association of REALTORS® Code of Ethics includes requirements involving present or contemplated interests in property. Article 4 addresses written disclosure of interests to parties before agreements are signed, and Article 5 addresses professional services concerning property in which a REALTOR® has an interest. State licensing duties may impose additional requirements. Knowing about a property because you're an agent does not automatically give your IRA the right to purchase it, or give you the right to profit personally from the transaction.",
};

export const marketKnowledgeLimits = {
  eyebrow: "The Difference Between Market Knowledge and Inside Advantage",
  heading: ["Your Market Knowledge Is Valuable.", "Your Client Relationships Require Responsibility."],
  leftLabel: "What You May Understand",
  rightLabel: "What You Must Still Evaluate",
  rows: [
    { left: "Local property types", right: "Independent valuation" },
    { left: "Neighborhood differences", right: "The actual purchase terms" },
    { left: "Comparable sales", right: "The legal rights being acquired" },
    { left: "Typical property conditions", right: "Property condition verification" },
    { left: "How long homes remain on the market", right: "Contractual obligations" },
    { left: "Which improvements may matter to buyers", right: "Client confidentiality and conflicts of interest" },
    { left: "How property demand can change", right: "IRA prohibited-transaction rules" },
  ],
  footnote: "Experience can help identify questions worth investigating. It cannot replace legal compliance, due diligence, or fair treatment of clients.",
};

export const renovationTrap = {
  eyebrow: "The Renovation Trap",
  heading: ["You Know Contractors. Maybe You Can Even Do the Work.", "Your IRA Changes the Rules."],
  goldLine: 1,
  paragraphs: [
    "Real estate agents often have extensive contractor relationships, and some agents also renovate personal properties. That does not mean the same arrangements are permissible for IRA-owned assets. An IRA-owned property must remain separate from the account holder's personal financial interests. An agent should not assume they can personally renovate the property, receive compensation for managing the project, or route work through a related business. Providing services, receiving compensation, or entering into transactions involving disqualified persons can create prohibited-transaction problems. Even working without pay does not automatically resolve the legal concerns.",
    "In Elena's hypothetical example, all renovation work is performed by independent, unrelated professionals. The IRA pays appropriate property expenses, and Elena does not personally perform renovation labor or receive a management fee.",
  ],
  note: "The ability to improve a property does not automatically mean you can personally perform those improvements for your IRA.",
};

export const activeDealingTax = {
  eyebrow: "One Investment Is Different From Operating a Real Estate Business",
  heading: ["Buying And Reselling Property Repeatedly", "Raises Additional Questions."],
  goldLine: 1,
  paragraphs: [
    "Some real estate professionals may be interested in buying, improving, and reselling properties repeatedly inside a Self-Directed IRA. But repeated or business-like real estate transactions can raise additional questions. Certain IRA investments can generate unrelated business taxable income. Under applicable tax rules, the treatment of real estate sales may depend on whether property is held for investment or primarily for sale to customers in the ordinary course of a trade or business. The distinction is fact-specific — do not assume that every IRA real estate sale is automatically tax-free, or that one isolated transaction is guaranteed a particular tax treatment.",
  ],
  note: "Buying property through an IRA may be possible. Running an active property resale business inside an IRA requires a more careful legal and tax analysis.",
};

export const biggerThanOneHouse = {
  eyebrow: "Beyond a Single Property",
  heading: ["Your IRA's Real Estate Possibilities", "Don't Have to Stop at Residential Property."],
  steps: [
    { number: "01", title: "Direct Real Estate Ownership", description: "A Self-Directed IRA may be able to hold qualifying investment property, such as certain residential properties, vacant land, or commercial real estate, complying with investment restrictions, ownership rules, and expense obligations." },
    { number: "02", title: "Private Real Estate Lending", description: "An IRA may be able to make certain private loans secured by real estate, holding a loan receivable and any properly documented collateral rights. It does not automatically own the underlying real estate, and default and inadequate collateral can produce significant losses." },
    { number: "03", title: "Private Real Estate Investment Funds", description: "An IRA may be able to purchase eligible interests in private real estate funds, offering exposure to larger projects. Private funds can involve substantial fees, liquidity restrictions, valuation uncertainty, and reliance on managers." },
  ],
  note: "Your experience in real estate may make these opportunities interesting. The financial structure and the specific investment still determine whether they make sense.",
};

export const marketNotAlwaysRight = {
  eyebrow: "The Market Isn't Always Right",
  heading: ["Just Because Three Comps Support a Price", "Doesn't Mean a Buyer Will Pay It."],
  steps: [
    { number: "01", title: "Property Condition", description: "Undiscovered structural, mechanical, environmental, or other defects can change the financial outcome." },
    { number: "02", title: "Market Timing", description: "Buyer demand, financing conditions, and local supply can affect the property's value." },
    { number: "03", title: "Legal and Title Issues", description: "Liens, easements, restrictions, zoning, permitting, or title defects can create unexpected costs." },
    { number: "04", title: "Renovation Execution", description: "Projects can run over budget or exceed the planned schedule." },
    { number: "05", title: "Selling Costs", description: "Brokerage compensation, concessions, title expenses, and other sale-related costs can reduce proceeds." },
  ],
  note: "A comparable sale is evidence worth studying, not a guarantee of your property's selling price.",
};

export const oldRetirementAccounts = {
  eyebrow: "Can a Real Estate Agent Use an Old 401(k)?",
  heading: ["Your Retirement Savings May Already Be", "in an Account Worth Reviewing."],
  steps: [
    { number: "01", title: "Former Employer 401(k)", description: "Some eligible distributions may be rolled into a Self-Directed IRA. The employer's plan and the applicable distribution rules determine eligibility." },
    { number: "02", title: "Current Employer Plan", description: "An active employee cannot assume the plan permits an immediate rollover. The plan administrator must confirm the options." },
    { number: "03", title: "Existing IRA", description: "An eligible IRA-to-IRA transfer may allow assets to move to a custodian that supports additional investments, with traditional and Roth tax treatment remaining subject to the applicable rules." },
  ],
  note: "An eligible direct rollover of pre-tax retirement savings to a traditional IRA generally preserves tax-deferred treatment. Moving eligible pre-tax funds into a Roth IRA may create taxable conversion income.",
};

export const fiveQuestions = {
  eyebrow: "Before You Write the Offer",
  heading: ["Understand the Investment."],
  steps: [
    { number: "01", title: "What Would My IRA Actually Own?", description: "Would the account own the property directly, a debt instrument, or an interest in an entity?" },
    { number: "02", title: "Does the Transaction Involve My Clients or Business?", description: "A real estate professional must consider both IRA prohibited-transaction rules and applicable agency or licensing duties." },
    { number: "03", title: "What Is the Entire Investment Cost?", description: "Include purchase price, closing expenses, repairs, holding costs, selling expenses, and other relevant fees." },
    { number: "04", title: "What Happens if My Valuation Is Wrong?", description: "Evaluate an unfavorable sale price, unexpected repairs, or a longer holding period." },
    { number: "05", title: "Can the IRA Afford It Without a Liquidity Crisis?", description: "Property expenses continue even when the investor has difficulty selling or generating income." },
  ],
  note: "A promising listing becomes a serious investment consideration only after the numbers, legal structure, and downside risks have been examined.",
};

export const fiveRules = {
  eyebrow: "Five IRA Rules Real Estate Agents Must Understand",
  heading: ["Professional Experience Doesn't Override", "Retirement Account Rules."],
  steps: [
    { number: "01", title: "No Prohibited Personal Benefit", description: "An IRA-owned property cannot be used to provide prohibited personal benefits." },
    { number: "02", title: "No Improper Commission or Compensation", description: "An agent should not assume they can receive a commission, referral fee, rebate, or other personal compensation in a transaction involving their own IRA." },
    { number: "03", title: "No Prohibited Related-Party Transactions", description: "Certain transactions involving the IRA owner, family members, businesses, or other disqualified persons are restricted." },
    { number: "04", title: "No Automatic Right to Perform Services", description: "The IRA owner should not assume they can provide personally compensated property management, construction, brokerage, or other services to IRA-owned investments." },
    { number: "05", title: "No Guarantee of Investment or Tax Results", description: "Real estate values can decline, expenses can rise, and certain transactions can create taxes within the IRA." },
  ],
  note: "A prohibited transaction involving an IRA owner can have severe consequences, potentially including loss of the affected account's IRA status and deemed distribution of its assets under the applicable rules.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You've Helped Other People Build Real Estate Portfolios.", "Discover What Your IRA Might Be Able to Own."],
  goldLine: 1,
  paragraphs: [
    "You know how to read a market. You know how to investigate property. You understand that real estate can represent opportunity, risk, and responsibility. And you may have retirement savings that could potentially participate in qualifying real estate investments. A Self-Directed IRA may provide access to a different investment menu.",
    "It doesn't guarantee a better deal. It doesn't eliminate professional obligations. And it doesn't allow you to earn improper personal compensation from your retirement account. But it may open a world of investment possibilities you haven't explored.",
  ],
  featured: "Real estate knowledge may help someone recognize opportunities, but responsible IRA investing requires financial discipline, independent judgment, and strict separation of personal interests.",
};

export const faqItems = [
  { question: "Can a real estate agent have a Self-Directed IRA?", answer: "Yes. Being a licensed real estate professional does not prevent someone from establishing a Self-Directed IRA. IRA ownership and investment restrictions still apply." },
  { question: "Can a real estate agent buy investment property through an IRA?", answer: "Potentially. A Self-Directed IRA may hold qualifying investment real estate through a custodian that supports it, provided the transaction complies with applicable rules." },
  { question: "Can I earn a commission when my IRA buys real estate?", answer: "Do not assume so. Receiving personal commissions or other compensation connected to a transaction involving your own IRA can create a prohibited transaction. Any proposed arrangement requires qualified review before proceeding." },
  { question: "Can my IRA buy one of my own listings?", answer: "This raises serious questions involving agency duties, conflicts of interest, disclosures, compensation, and possible prohibited transactions. It should not be treated as automatically permissible." },
  { question: "Can my IRA buy property from a current client?", answer: "A transaction involving a client's property may raise professional and IRA compliance concerns. The exact circumstances require legal review, and existing duties to the client cannot be ignored." },
  { question: "Can a Self-Directed IRA buy and improve a property for resale?", answer: "Certain property investments may be permitted, but the investment, owner activities, professional compensation, contractors, and potential tax consequences require careful analysis." },
  { question: "Can I personally renovate property owned by my IRA?", answer: "Do not assume so. Personal services and arrangements involving disqualified persons can create prohibited-transaction risks." },
  { question: "Can my brokerage manage my IRA's investment property?", answer: "This may create related-party, compensation, and prohibited-transaction concerns depending on the ownership and service relationships. Qualified legal review is necessary." },
  { question: "Can a Self-Directed IRA invest in commercial real estate?", answer: "Potentially. Qualifying commercial property investments may be available through an appropriate custodian, subject to applicable law and investment restrictions." },
  { question: "Can an IRA make private loans secured by real estate?", answer: "Certain appropriately structured loans may be permitted. Borrower relationships, collateral, prohibited transactions, and default risks must be considered." },
  { question: "Can a Self-Directed IRA own real estate without using a mortgage?", answer: "Potentially. An IRA may purchase qualifying property using available IRA cash. The investment must comply with the applicable account and transaction rules." },
  { question: "Do real estate agents have to disclose an interest in a property purchased through an IRA?", answer: "Disclosure requirements depend on applicable state law, professional relationships, and association membership. REALTORS® should review the current NAR Code of Ethics, including Article 4. IRA ownership does not automatically eliminate disclosure concerns." },
  { question: "Does a Self-Directed IRA avoid taxes on every property sale?", answer: "No. Tax treatment depends on the IRA type, transaction, and applicable rules. Certain real estate activities, including business-like property sales or debt-financed arrangements, can raise unrelated business income tax issues." },
  { question: "Can I roll an old 401(k) into a Self-Directed IRA?", answer: "Certain eligible distributions from former employer plans can generally be rolled into IRAs. The specific plan and distribution must qualify." },
  { question: "Can I withdraw money from the IRA after selling a property?", answer: "IRA distributions must comply with applicable retirement-account rules. Personal withdrawals can create taxes or penalties, depending on the circumstances." },
  { question: "Does a Self-Directed IRA custodian evaluate whether a property is a good investment?", answer: "Do not assume so. A legitimate custodian may administer the account without independently evaluating the property's quality, market value, liquidity, or potential for fraud." },
  { question: "Is a Self-Directed IRA better for real estate agents than an ordinary IRA?", answer: "Not automatically. A Self-Directed IRA may provide broader investment choices, but it can also involve more fees, complexity, liquidity restrictions, and legal risks." },
];

export const references = [
  { title: "IRS: IRA Investment Rules", description: "Supports the discussion of qualifying real estate investments and custodian limitations.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions on commissions, compensation, and related-party transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investment FAQs", description: "Provides additional background on prohibited transactions involving disqualified persons and personal services.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS Publication 590-B", description: "Provides information about distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598: Unrelated Business Income", description: "Supports the discussion of business-like real estate resale activity and UBIT.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Rollovers of Retirement Plan and IRA Distributions", description: "Supports explanations of eligible rollover distributions and trustee-to-trustee transfers.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussions of custodial limitations, illiquidity, and valuation uncertainty.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "NAR: 2026 Code of Ethics and Standards of Practice", description: "Supports disclosure obligations for REALTORS® with a present or contemplated interest in property.", href: "https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice" },
];

export const finalConversion = {
  heading: ["You Understand the Real Estate Market.", "Discover Whether Your IRA Can Participate in It."],
  description:
    "You've spent years learning how property transactions work. You know that opportunities can appear in unexpected places. A Self-Directed IRA may expand your investment possibilities. Discover the opportunities. Understand the economics. Respect your professional responsibilities.",
  signature: "Elena and all investment examples in this module are entirely fictional educational illustrations.",
};
