export const hero = {
  eyebrow: "The Experienced Landlord",
  title: ["You Already Own Rental Properties.", "What If Your IRA Could Own Real Estate Too?"],
  goldLine: 1,
  description:
    "You know what it takes to own rental property. You understand tenants, repairs, property taxes, insurance, and the importance of buying at the right price. But have you ever considered that your retirement account might be able to own investment real estate too? A Self-Directed IRA may allow qualifying rental properties, vacant land, and certain other real estate investments through a custodian that supports them. The possibilities can be fascinating. But the rules are different from buying another property personally.",
  whoItsFor:
    "For experienced residential landlords, owners of multiple rental properties, and real estate investors considering whether a Self-Directed IRA can expand their portfolio.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const twoPropertyDeeds = {
  eyebrow: "The Two Property Deeds",
  heading: ["Two Properties Can Look Identical.", "Their Ownership Rules Can Be Completely Different."],
  leftLabel: "Personally Owned Rental",
  rightLabel: "IRA-Owned Rental",
  rows: [
    { left: "Legal owner: the investor or the investor's personal real estate entity", right: "Legal owner: the applicable IRA custodial arrangement or other properly established IRA-owned structure" },
    { left: "Rental income belongs to the personal owner or entity", right: "Rental income belongs to the IRA" },
    { left: "Expenses handled through that property's personal ownership arrangement", right: "Expenses handled using the IRA's funds through the appropriate arrangement" },
    { left: "Personal tax treatment depends on the investor's ownership, business, and tax situation", right: "Tax treatment governed by applicable IRA rules, with potential specialized tax consequences" },
  ],
  footnote: "The properties may perform similar economic functions. But they do not belong to the same legal owner.",
};

export const robertStory = {
  eyebrow: "Meet Robert",
  heading: ["He's Owned Rental Property for Fifteen Years.", "But His Retirement Account Has Never Owned a House."],
  stories: [
    {
      label: "Illustrative Experienced Landlord",
      headline: "Robert understands rental property. His traditional IRA, however, has always held conventional investments.",
      scenario:
        "Robert is 52, an operations manager with fifteen years of rental experience. He personally owns two residential rentals — one held through an LLC — and has $255,000 in a traditional IRA. Rental One has an estimated value of $270,000 with a $140,000 mortgage, for illustrative gross equity of $130,000. Rental Two has an estimated value of $215,000 with a $120,000 loan balance, for illustrative gross equity of $95,000. For this hypothetical example, assume Robert can arrange an eligible trustee-to-trustee transfer of IRA cash to an appropriate Self-Directed IRA custodian that supports qualifying real estate investments. The account remains a traditional IRA, with no Roth conversion assumed.",
      realization: "\"Could I put one of my existing rentals into my IRA?\"",
      risk: "That question reveals the single most important difference between personal property investing and IRA property investing. Robert is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const cannotTransfer = {
  eyebrow: "The Question That Changes Everything",
  heading: ["Can You Transfer a Rental House You Already Own", "Into Your IRA?"],
  goldLine: 1,
  paragraphs: [
    "Generally, no. You cannot sell or transfer personally owned rental property to your own IRA as a way to move that property into the account. IRA prohibited-transaction rules restrict sales and exchanges between an IRA and disqualified persons, including the account owner. Selling your personally owned rental property to your own IRA is not made permissible simply because the price reflects fair market value. The same concern applies if the personally owned property is held through an entity and the transaction is effectively an impermissible related-party arrangement — changing the paperwork or using an LLC does not automatically eliminate the restriction.",
    "An IRA may still be able to acquire a different eligible investment property from an unrelated seller. That is the next possibility Robert will explore.",
  ],
  featured: "The opportunity is not transferring your existing rentals into the IRA. It is exploring qualifying new investments that the IRA may independently acquire.",
};

export const newDuplexInvestment = {
  eyebrow: "A New Property, A Different Owner",
  heading: ["What If Robert's IRA Bought", "Its Own Rental Property?"],
  intro:
    "Robert cannot simply move his existing rentals into his IRA. But suppose he identifies a separate duplex offered by an unrelated third-party seller, with no prohibited relationship to Robert, where the IRA's custodian supports the investment and the IRA has enough available money to acquire it. Assume an all-cash purchase with no financing. All figures are hypothetical; this is not an actual available duplex.",
  figures: [
    { label: "Starting Traditional IRA", value: "$255,000" },
    { label: "Duplex Purchase Price", value: "$166,000" },
    { label: "Acquisition & Closing Expenses", value: "$7,000" },
    { label: "Initial Improvements (Independent Contractors)", value: "$12,000" },
    { label: "Total Initial IRA Cash Expenditure", value: "$185,000" },
    { label: "Remaining IRA Cash", value: "$70,000" },
  ],
  disclaimer: "Same real estate experience. A different investment owner. The duplex is an IRA investment — Robert's two existing rentals remain personally owned, and the original properties do not become part of the IRA portfolio.",
};

export const twoPortfolios = {
  eyebrow: "The Two Portfolios, Side by Side",
  heading: ["One Investor.", "Two Separate Property Portfolios."],
  intro:
    "The $185,000 initial cash expenditure is not automatically the duplex's market value — it is the amount the IRA spent in this hypothetical acquisition. The $70,000 is cash remaining within the IRA, not personal cash available to Robert.",
  figures: [
    { label: "Personal Portfolio — Combined Property Value", value: "$485,000" },
    { label: "Personal Portfolio — Combined Debt", value: "$260,000" },
    { label: "Personal Portfolio — Illustrative Gross Equity", value: "$225,000" },
    { label: "IRA Portfolio — Duplex Total Initial Cash Spent", value: "$185,000" },
    { label: "IRA Portfolio — Remaining Cash", value: "$70,000" },
    { label: "IRA Portfolio — No Borrowing Assumed", value: "All-Cash" },
  ],
  disclaimer: "Your personal investments and your IRA investments can both involve real estate without becoming one interchangeable pool of money or property.",
};

export const decisionStudio = {
  eyebrow: "The Property Decision Studio",
  heading: ["Eight Real Estate Decisions.", "Which Ones Change Inside an IRA?"],
  intro: "Explore real situations an experienced landlord might consider. This is educational, not an automated legal-compliance determination.",
  decisions: [
    {
      key: "sell-existing",
      label: "Sell My Existing Rental to My IRA",
      status: "prohibited" as const,
      statusLabel: "Prohibited",
      action: "Robert wants his IRA to buy a house that he already owns personally.",
      explanation: "Selling personally owned property to one's own IRA is a prohibited transaction. A fair price does not automatically make the transaction permissible.",
      takeaway: "You cannot simply move existing personal rental assets into your IRA through a sale or exchange.",
    },
    {
      key: "buy-unrelated",
      label: "Have My IRA Buy an Unrelated Seller's Rental",
      status: "permissible" as const,
      statusLabel: "Potentially Permissible",
      action: "Robert's IRA purchases a separate rental property from an unrelated third-party seller.",
      explanation: "The investment may be possible when the account and transaction satisfy applicable legal and custodial requirements. Independent ownership, proper funding, accurate title, and other relevant restrictions matter.",
      takeaway: "An IRA may acquire a qualifying new investment, but a proposed transaction must be reviewed.",
    },
    {
      key: "rent-to-daughter",
      label: "Rent the IRA Duplex to My Daughter",
      status: "prohibited" as const,
      statusLabel: "Prohibited",
      action: "Robert wants his adult daughter to rent one unit in the IRA-owned duplex.",
      explanation: "A lineal descendant is a disqualified person under the applicable IRA rules. A rental arrangement between the IRA and a disqualified person can constitute a prohibited transaction. Charging ordinary market rent does not automatically make it permissible.",
      takeaway: "An IRA-owned rental property cannot be treated as a convenient housing arrangement for disqualified family members.",
    },
    {
      key: "own-management-company",
      label: "Use My Own Property Management Company",
      status: "review" as const,
      statusLabel: "Stop for Legal Review",
      action: "Robert wants an LLC he owns to manage the IRA's duplex and collect management fees.",
      explanation: "A related management company, personal compensation, and services involving IRA assets can create prohibited-transaction issues. The relationship and the proposed services must be evaluated before proceeding. Forming or using an LLC does not automatically solve the problem.",
      takeaway: "The service provider's relationship to the IRA owner matters.",
    },
    {
      key: "independent-manager",
      label: "Hire an Independent Property Manager",
      status: "permissible" as const,
      statusLabel: "Potentially Permissible",
      action: "The IRA engages an unrelated third-party property management company under a legitimate agreement.",
      explanation: "An appropriate independent arrangement may be available. The agreement, fees, account structure, and financial handling must comply with applicable rules.",
      takeaway: "Professional management may help an IRA-owned property operate without improper personal services.",
    },
    {
      key: "renovate-for-free",
      label: "Personally Renovate the Duplex for Free",
      status: "review" as const,
      statusLabel: "Stop for Legal Review",
      action: "Robert wants to paint, replace flooring, or perform other work on the IRA-owned duplex himself, without charging a fee.",
      explanation: "Providing personal services to an IRA-owned asset can raise prohibited-transaction issues. Working for free does not automatically make a service arrangement permissible.",
      takeaway: "The distinction between permitted investment direction and prohibited personal services matters.",
    },
    {
      key: "co-invest",
      label: "Buy a Property With Both Personal and IRA Money",
      status: "review" as const,
      statusLabel: "Complex — Requires Specialized Review",
      action: "Robert wants to co-invest alongside his IRA in a new property.",
      explanation: "Co-investment structures can involve prohibited-transaction, fiduciary, contribution, allocation, and conflict-of-interest concerns. The specific transaction, ownership percentages, relationships, future expenses, and ongoing decisions must be evaluated before any funds are committed.",
      takeaway: "Combining personal money and IRA capital creates legal complexity and is not an ordinary shortcut.",
    },
    {
      key: "personal-guarantee",
      label: "Personally Guarantee a Loan for the IRA",
      status: "review" as const,
      statusLabel: "Do Not Proceed Without Legal Review",
      action: "Robert wants to personally guarantee a loan so his IRA can purchase a more expensive property.",
      explanation: "Personal guarantees can create prohibited extensions of credit or other prohibited-transaction concerns. Debt-financed property can also create unrelated business income tax consequences.",
      takeaway: "An IRA does not necessarily have access to the same financing choices as a personally owned rental business.",
    },
  ],
  note: "The real estate skills may be familiar. The IRA rules are not. The reason to learn these distinctions is not to make investing feel complicated — it's to understand why an IRA-owned property has to remain separate from personal real estate activity.",
};

export const twoFinancialPathways = {
  eyebrow: "The Money Never Becomes One Checking Account",
  heading: ["Same Rental Business Concept.", "Different Money."],
  goldLine: 1,
  paragraphs: [
    "When Robert's personally owned rental receives rent, the income belongs to the relevant personal owner or entity. When his IRA-owned duplex receives rent, the income belongs to the IRA. The same distinction applies to legitimate investment expenses — personal rental expenses belong to the personal ownership arrangement, and the IRA-owned duplex's expenses must be handled through the appropriate IRA arrangement. Robert cannot simply treat all three properties as one financial operation.",
    "Ordinary permitted IRA contributions, trustee transfers, and distributions have their own rules. They are not the same as casually shifting money between a personal rental business and an IRA. If the IRA needs money for property expenses, the account holder cannot assume that unlimited personal contributions or informal reimbursements are available.",
  ],
  featured: "The property may operate like a rental. But its financial ownership remains inside the IRA.",
};

export const repairLiquidity = {
  eyebrow: "The Repair That Changes the Plan",
  heading: ["What Happens When the IRA-Owned Duplex", "Needs a $26,000 Repair?"],
  intro:
    "An experienced landlord knows how quickly a major repair can change an investment. But the issue is particularly important inside an IRA — the account must have a compliant way to pay its expenses. The owner cannot assume that personal rental income or personal checking-account funds can be used to solve the problem informally.",
  figures: [
    { label: "IRA Cash Remaining After Initial Acquisition", value: "$70,000" },
    { label: "Major Repair (Independent Contractor)", value: "$26,000" },
    { label: "IRA Cash Remaining After the Repair", value: "$44,000" },
  ],
  disclaimer: "This calculation ignores rental income and all other property expenses during the period. It is not a full investment return or cash-flow projection. Keeping money available for unexpected expenses can be just as important as finding an attractive property.",
};

export const experienceNotExemption = {
  eyebrow: "Your Experience Can Create an Advantage, But Not an Exemption",
  heading: ["Fifteen Years as a Landlord Can Teach You a Lot.", "It Doesn't Rewrite IRA Law."],
  leftLabel: "What Experience Can Help You Evaluate",
  rightLabel: "What Experience Cannot Override",
  rows: [
    { left: "Property value and condition", right: "Ownership law and prohibited transactions" },
    { left: "Operating risk and market conditions", right: "Custodial requirements" },
    { left: "Tenant selection and neighborhood differences", right: "Applicable IRA tax rules" },
    { left: "Investment assumptions and vacancy risk", right: "Liquidity constraints" },
  ],
  footnote: "Your real estate knowledge may help you evaluate a deal. The IRA structure determines what you can legally do with it.",
};

export const leverageAndTax = {
  eyebrow: "Leverage and Taxes Work Differently Inside an IRA",
  heading: ["You've Used Mortgages Before.", "An IRA Changes the Financing and Tax Conversation."],
  goldLine: 1,
  paragraphs: [
    "In your personal real estate business, you may be accustomed to borrowing money, guaranteeing a mortgage, or refinancing property. A Self-Directed IRA does not necessarily have the same financing flexibility — personal guarantees and transactions involving disqualified persons can create prohibited-transaction problems, and debt-financed IRA property can also create unrelated debt-financed income and associated tax obligations affecting both operating income and gains from the property's sale.",
    "Personally owned rental real estate can create taxable income, deductible expenses, and depreciation deductions under the applicable tax rules, depending on the ownership structure. A traditional IRA generally follows tax-deferred retirement-account rules, and a Roth IRA follows Roth-specific rules — but that does not mean all IRA investments escape every tax. Certain business activities and debt-financed investments can generate unrelated business taxable income within an IRA, and an individual should not assume that depreciation or a rental loss inside the IRA can be deducted on their personal tax return as though they personally owned the property.",
  ],
  note: "Borrowing may allow an IRA to acquire more property, but it can also create significant legal and tax complexity. The same type of property can produce very different tax consequences depending on who legally owns it and how it is financed or operated.",
};

export const flippingAndFunds = {
  eyebrow: "Real Estate Investing Doesn't Always Mean Owning Another House Yourself",
  heading: ["Beyond Direct Ownership.", "Beyond Flipping, Too."],
  intro:
    "Some experienced landlords also buy, renovate, and sell properties repeatedly, and may wonder whether an IRA can do the same thing. Certain IRA real estate investments may be permitted, but frequent business-like transactions can raise unrelated business income tax questions — property held primarily for sale to customers in the ordinary course of a business may receive different tax treatment from ordinary investment property, and using an IRA-owned LLC does not remove prohibited-transaction rules.",
  steps: [
    { number: "01", title: "Private Real Estate Funds", description: "A Self-Directed IRA may be eligible to invest in certain private real estate funds, providing exposure to properties managed by other parties. Investors must evaluate manager quality, fees, investor eligibility, liquidity restrictions, leverage, and potential losses." },
    { number: "02", title: "Private Real Estate Lending", description: "An IRA may be able to make qualifying loans to unrelated borrowers. The IRA owns a debt instrument and any properly established collateral rights, not automatically the property securing the loan. Borrower default remains a significant risk." },
    { number: "03", title: "Small Multifamily Investments", description: "Some investment entities may allow participation in multifamily real estate without requiring the IRA to buy the entire building. The investment structure and eligibility rules determine what the account actually owns." },
  ],
  note: "There are multiple ways to participate in real estate. Direct ownership is only one possible structure, and an investment property is not automatically the same as operating an active property-dealing business.",
};

export const illiquidityQuestion = {
  eyebrow: "The Problem With an Illiquid IRA",
  heading: ["A Valuable Property Isn't Always", "Cash You Can Use."],
  goldLine: 1,
  paragraphs: [
    "A property may have an estimated market value of $220,000. But that does not mean the IRA has $220,000 of available cash. The property may take months to sell, a buyer may demand concessions, the market value may decline, and a private investment may have restrictions that make selling difficult. Experienced landlords know that property valuations can change — a tax assessment is not always market value, a broker's opinion is not always an appraisal, and an appraisal is not a guarantee that a buyer will pay the stated amount.",
    "Alternative IRA assets may be harder to value than publicly traded securities. Custodians may require current valuation information for account administration and tax reporting, and investors should understand who provides valuations, what assumptions are used, and whether the figures are independently supported.",
  ],
  featured: "Asset value and available cash are not the same thing. Real estate can be a meaningful retirement investment, but its liquidity limitations must be understood before they become urgent.",
};

export const rmdAndRothDistinction = {
  eyebrow: "An Investor Approaching Retirement Should Plan Ahead",
  heading: ["Eventually, Required Minimum Distributions", "May Meet an Illiquid Property."],
  goldLine: 1,
  paragraphs: [
    "Traditional IRAs are generally subject to required minimum distributions beginning at an applicable age that depends on the account owner's birth year — current law includes age 73 and age 75 for different birth cohorts. A traditional IRA holding illiquid real estate may need careful distribution and liquidity planning, since the account may have significant value in real estate but not enough cash to satisfy a distribution when needed. An in-kind distribution of IRA property may be possible in some circumstances, but it involves valuation, custodial procedures, legal transfer issues, and potentially significant taxes — it is not a simple way to avoid distribution rules.",
    "A Roth IRA generally does not require lifetime minimum distributions from its original owner, though different distribution and beneficiary rules may apply after death.",
  ],
  note: "Confirm the applicable RMD requirements before taking action — they depend on account type, birth year, beneficiary circumstances, and current law.",
};

export const landlordChecklist = {
  eyebrow: "The Landlord's IRA Property Checklist",
  heading: ["Before Your IRA Buys a Property,", "Review More Than the Rent."],
  steps: [
    { number: "01", title: "Ownership", description: "Who is the seller? Who will legally own the investment? Are there any prohibited relationships?" },
    { number: "02", title: "Investment Eligibility", description: "Does the IRA custodian support the property? Does the proposed transaction comply with applicable rules?" },
    { number: "03", title: "Property Economics", description: "What is the purchase price? What are the expected operating costs? What repairs might be needed?" },
    { number: "04", title: "Liquidity", description: "How much cash will remain in the IRA? What happens if significant expenses appear?" },
    { number: "05", title: "Management", description: "Who will collect rent? Who will arrange repairs? Are the service providers appropriately independent?" },
    { number: "06", title: "Tax Considerations", description: "Does the structure involve financing? Could unrelated business income tax apply?" },
    { number: "07", title: "Investor Responsibilities", description: "What must the account holder avoid doing personally?" },
    { number: "08", title: "Exit Strategy", description: "How difficult might the property be to sell? How will future retirement distributions be handled?" },
  ],
  note: "A landlord already understands property due diligence. Investing through an IRA adds a separate layer of legal and account due diligence.",
};

export const fiveMistakes = {
  eyebrow: "Five Mistakes to Avoid",
  heading: ["Five Mistakes Even Experienced", "Landlords Can Make."],
  steps: [
    { number: "01", title: "Trying to Sell an Existing Rental to the IRA", description: "Personally owned property cannot simply be sold or exchanged to one's own IRA." },
    { number: "02", title: "Mixing Rental Cash", description: "IRA property income and expenses must not be casually mixed with personal rental finances." },
    { number: "03", title: "Using Family or Related Businesses Without Review", description: "Certain family relationships, ownership interests, service arrangements, and transactions can create prohibited-transaction issues." },
    { number: "04", title: "Assuming Personal Labor Is Automatically Allowed", description: "The account holder should not assume they may personally renovate or provide services to IRA-owned property." },
    { number: "05", title: "Treating All IRA Real Estate Gains as Tax-Free", description: "Traditional and Roth IRA rules differ. Debt-financed income, certain business activities, distributions, and other facts can create tax consequences." },
  ],
  note: "Experience in real estate is valuable. Respecting the separate IRA rules is essential.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You Already Understand Real Estate.", "Discover What Your IRA Might Be Able to Own."],
  goldLine: 1,
  paragraphs: [
    "You've spent years learning how rental properties work. You understand tenants, repairs, and that a property's value can rise, fall, or remain stagnant. Now you've discovered something different — an appropriate Self-Directed IRA may be able to hold qualifying investment real estate. That doesn't mean you can transfer your existing rentals into the account, doesn't eliminate prohibited-transaction rules, and doesn't make real estate risk disappear.",
    "But it may allow you to explore additional investment possibilities through a retirement account.",
  ],
  featured: "Your real estate experience doesn't have to stop at the edge of your personal portfolio.",
};

export const faqItems = [
  { question: "Can an experienced landlord use a Self-Directed IRA to buy real estate?", answer: "Potentially, yes. A Self-Directed IRA may hold qualifying investment real estate through an appropriate custodian, provided the acquisition and ongoing transactions comply with applicable rules." },
  { question: "Can I sell my personally owned rental property to my IRA?", answer: "Generally, no. Selling property to your own IRA is an example of a prohibited transaction. A fair-market-value price does not automatically make the sale permissible." },
  { question: "Can I transfer a rental property's deed into my IRA?", answer: "You cannot simply retitle personally owned property into your IRA to bypass prohibited-transaction and IRA funding rules. A proposed property transfer requires qualified review and should not be assumed permissible." },
  { question: "Can my IRA buy property from an LLC I own?", answer: "Transactions involving an entity owned or controlled by the IRA owner can create prohibited-transaction issues. Using an LLC does not automatically avoid the rules. Specific ownership relationships and proposed transactions must be reviewed." },
  { question: "Can I own rentals personally and also have IRA-owned rentals?", answer: "Potentially, yes. However, the properties and financial transactions must remain legally separate, and all applicable IRA restrictions must be followed." },
  { question: "Can my IRA purchase a duplex?", answer: "Potentially. An IRA may acquire qualifying residential investment real estate through an appropriate custodian, subject to investment and prohibited-transaction rules." },
  { question: "Can my IRA rent property to my adult child?", answer: "A child is a lineal descendant and a disqualified person for IRA prohibited-transaction purposes. A lease between an IRA and a disqualified person can be prohibited, even at market rent." },
  { question: "Can I manage IRA-owned rental property myself?", answer: "Management activities can involve personal services, compensation, and prohibited-transaction questions. Do not assume that ordinary personal landlord practices are permissible for IRA property. Specific activities and structures require qualified review." },
  { question: "Can my personal property management company work for my IRA?", answer: "This can create related-party and prohibited-service concerns, depending on the ownership, compensation, and other circumstances. The arrangement should not proceed without qualified review." },
  { question: "Can I renovate IRA-owned property personally if I work for free?", answer: "Working without pay does not automatically eliminate prohibited-transaction concerns. Personal services and improvements should receive qualified legal review before any work is performed." },
  { question: "Can my IRA and I buy a property together?", answer: "Co-investment can create complex prohibited-transaction and conflict-of-interest questions. It is not automatically permissible simply because ownership percentages are documented. Specialized review is necessary before entering the transaction." },
  { question: "Can my IRA borrow money to purchase a rental?", answer: "Certain structures may permit financing, but prohibited-transaction rules, personal guarantee restrictions, custodial requirements, and possible unrelated debt-financed income tax must be considered." },
  { question: "Can I personally guarantee a mortgage for an IRA-owned property?", answer: "A personal guarantee can create serious prohibited-transaction concerns. Do not assume the arrangement is permissible. Qualified legal review is necessary before proceeding." },
  { question: "Does IRA-owned rental property qualify for personal depreciation deductions?", answer: "The owner generally cannot treat IRA-owned property as personally owned rental property for federal income tax purposes. Specialized IRA-level tax issues may apply, including deductions in connection with taxable unrelated business income when permitted." },
  { question: "Are rents inside a Self-Directed IRA always tax-free?", answer: "No. Traditional and Roth IRA rules differ, and certain investments or financing structures can create tax obligations within the IRA." },
  { question: "Can an IRA flip houses repeatedly?", answer: "Certain property investments may be permitted, but frequent, business-like real estate sales can raise unrelated business income and prohibited-transaction concerns. The specific facts and operations matter." },
  { question: "Can I use an IRA-owned rental property as a vacation home?", answer: "Using IRA property for prohibited personal benefit is not permitted. An IRA-owned rental should not be treated as personally available vacation property." },
  { question: "How does an IRA-owned rental pay property taxes and repairs?", answer: "Legitimate investment expenses are paid through the appropriate IRA arrangement using IRA funds. Personal payment and reimbursement practices should not be assumed permissible." },
  { question: "How are IRA-owned rental properties valued?", answer: "Custodians may require valuation information for account reporting and administration. Private real estate can be difficult to value, and independent professional valuation may be appropriate." },
  { question: "What happens if I reach the required distribution age while my IRA owns an illiquid property?", answer: "Applicable required minimum distribution rules may create a need for cash or another legally permissible distribution arrangement. Property valuation, in-kind distributions, and taxes can create complexities. Advance planning is important." },
  { question: "Does an IRA custodian determine whether a rental property is a good investment?", answer: "Do not assume so. A legitimate Self-Directed IRA custodian may administer the account without evaluating the property's financial quality, market value, or investment risk." },
  { question: "Is a Self-Directed IRA better for landlords than a regular IRA?", answer: "Not automatically. Broader investment access can create additional opportunities, but it can also involve higher fees, illiquidity, greater complexity, concentrated risk, and legal restrictions." },
];

export const references = [
  { title: "IRS: IRA Investment Rules", description: "Supports the basic discussion of IRA investments and custodian limitations.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions involving personal property sales, disqualified persons, borrowing, and personal benefit.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Supports general prohibited-transaction concepts involving sales, services, lending, and self-dealing.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS Publication 590-B", description: "Supports discussion of IRA distributions, prohibited-transaction consequences, and required minimum distributions.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598: Unrelated Business Income", description: "Provides background on unrelated business income and debt-financed property.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Unrelated Business Income From Debt-Financed Property", description: "Supports the concept that certain debt-financed assets can generate unexpected tax obligations.", href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514" },
  { title: "IRS: Required Minimum Distributions", description: "Supports the discussion of distribution requirements and relevant account distinctions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" },
  { title: "IRS: Rollovers of Retirement Plan and IRA Distributions", description: "Provides background on eligible transfers and rollovers.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of illiquidity, valuation difficulty, investment fraud, and custodian limitations.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["You've Spent Years Building a Real Estate Portfolio.", "Discover the Possibilities of Another Kind of Ownership."],
  description:
    "You understand rental property, and you know that property investing requires capital, judgment, and responsibility. A Self-Directed IRA may allow you to apply relevant real estate knowledge to qualifying investments held within a retirement account. Your personal properties remain your personal properties. Your IRA investments belong to the IRA.",
  signature: "Robert and all investment examples in this module are entirely fictional educational illustrations.",
};
