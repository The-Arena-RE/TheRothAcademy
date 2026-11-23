export const hero = {
  eyebrow: "Self-Directed IRA Learning Module",
  title: ["Your Career Is In Healthcare.", "Your Retirement Investments", "Could Be In Real Estate."],
  goldLine: 2,
  description:
    "You work long shifts. You care for patients. You build a career that takes dedication, skill, and years of experience. But have you ever considered that an IRA might be able to own an investment property? A Self-Directed IRA may allow you to invest in qualifying real estate, including rental properties, through a custodian that supports those investments — and you don't have to become a full-time landlord to begin exploring the possibilities.",
  whoItsFor:
    "For registered nurses, therapists, technicians, paramedics, and other healthcare professionals who assumed a demanding shift schedule ruled out rental real estate investing.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const directAnswer = {
  eyebrow: "The Short Answer",
  heading: ["A Demanding Schedule Doesn't Rule Out", "Rental Real Estate."],
  goldLine: 1,
  paragraphs: [
    "Healthcare professionals may be able to invest in qualifying rental real estate through a Self-Directed IRA. The IRA owns the property, receives the rental income, and pays legitimate property expenses. Investment restrictions, account eligibility, property costs, and financial risks still apply.",
    "You don't have to become a full-time landlord to begin exploring the possibilities — a Self-Directed IRA may allow you to invest in qualifying real estate, including rental properties, through a custodian that supports those investments.",
  ],
  featured: "I understand how an IRA could potentially own rental real estate, how the financial numbers work, what a property manager does, and why the money and property must remain separate from my personal finances.",
};

export const mariaStory = {
  eyebrow: "Meet Maria",
  heading: ["A Nurse.", "Not A Real Estate Investor."],
  stories: [
    {
      label: "Illustrative Investor",
      headline: "Maria understands hard work and responsibility — but she's never been particularly interested in watching stock market prices.",
      scenario:
        "Maria is 39, a registered nurse with fifteen years in healthcare, working three twelve-hour shifts a week with occasional overtime. She owns no business and has no investment-property experience. Maria has $220,000 in a pre-tax retirement account from a former hospital employer. For this fictional example, assume she is eligible for a direct rollover of the entire balance into a traditional Self-Directed IRA, with any applicable plan restrictions satisfied. The money remains in a retirement account — it is not paid to Maria personally.",
      realization: "\"Could an appropriately structured IRA actually own a rental property?\"",
      risk: "She doesn't need to buy it in her personal name, become a real estate agent, or necessarily handle every maintenance call herself — though that doesn't make the investment effortless. Maria is a fictional illustration, not personalized investment advice.",
    },
  ],
};

export const propertyAcquisition = {
  eyebrow: "The First Signature Experience",
  heading: ["Imagine Your IRA", "Owning This House."],
  intro:
    "Maria's traditional Self-Directed IRA begins with $220,000. She investigates a potential investment house listed for $155,000. After considering the acquisition costs and the work necessary to prepare it for rental use, the hypothetical investment requires $170,000 in cash.",
  figures: [
    { label: "Starting IRA Cash Balance", value: "$220,000" },
    { label: "Hypothetical Property Purchase Price", value: "$155,000" },
    { label: "Closing & Acquisition Expenses", value: "$5,000" },
    { label: "Initial Repairs & Rental Preparation", value: "$10,000" },
    { label: "Total Cash Committed", value: "$170,000" },
    { label: "Remaining IRA Cash", value: "$50,000" },
  ],
  disclaimer:
    "This is an all-cash purchase with no borrowing. The property, price, and figures are fictional and do not establish the property's fair market value. The hypothetical owner is Maria's Self-Directed IRA — Maria owns the retirement account, not the house personally.",
};

export const followTheRent = {
  eyebrow: "If The IRA Owns The House, Where Does The Rent Go?",
  heading: ["Follow The Rent"],
  steps: [
    { number: "01", title: "Tenant Pays Rent", description: "Suppose the house is rented to an unrelated tenant for $1,500 per month under a legitimate rental agreement." },
    { number: "02", title: "Rent Enters The IRA", description: "The rent belongs to the IRA — it does not become Maria's personal paycheck. The property belongs to the IRA, and its income must be received through the appropriate IRA arrangement." },
    { number: "03", title: "The IRA Pays Expenses Or Retains Cash", description: "Legitimate property expenses are paid from IRA funds. Maria cannot simply withdraw the rent and spend it without following IRA distribution rules." },
  ],
  note: "A property can generate rent without producing a profit. Taxes, insurance, management fees, maintenance, vacancies, and unexpected repairs can absorb much of the rental income.",
};

export const rentalPropertyMonitor = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The Rental Property", "Financial Monitor"],
  intro:
    "The rent is $1,500 a month. But how much does the IRA actually keep? Shared assumptions: no mortgage, no appreciation assumption, and no additional account-level fees or taxes included.",
  scenarios: [
    {
      key: "fully-rented",
      label: "Fully Rented",
      status: "All twelve months collected",
      description:
        "The house is rented every month of the year at $1,500, producing $18,000 of gross rent before ordinary operating expenses.",
      figures: [
        { label: "Rent Collected", value: "$18,000" },
        { label: "Property Taxes", value: "$3,400" },
        { label: "Insurance & Management", value: "$3,600" },
        { label: "Maintenance & Utilities", value: "$2,400" },
        { label: "Unexpected Repair", value: "$0" },
        { label: "Operating Cash Remaining", value: "+$8,600" },
        { label: "Cash After $1,200 Reserve", value: "$7,400" },
      ],
      statement: "The property could generate cash — $8,600 after ordinary expenses, or $7,400 after setting aside a reserve for future replacements.",
    },
    {
      key: "one-month-vacant",
      label: "One Month Vacant",
      status: "Eleven of twelve months collected",
      description:
        "One month without a tenant reduces collected rent to $16,500, and property management fees shrink slightly since they're based on rent actually collected.",
      figures: [
        { label: "Rent Collected", value: "$16,500" },
        { label: "Property Taxes", value: "$3,400" },
        { label: "Insurance & Management", value: "$3,450" },
        { label: "Maintenance & Utilities", value: "$2,400" },
        { label: "Unexpected Repair", value: "$0" },
        { label: "Operating Cash Remaining", value: "+$7,250" },
        { label: "Cash After $1,200 Reserve", value: "$6,050" },
      ],
      statement: "A single vacant month reduces the result, but the property still produces positive operating cash under this illustration.",
    },
    {
      key: "three-months-vacant-repair",
      label: "Three Months Vacant + Major Repair",
      status: "Nine of twelve months collected, plus a large repair",
      description:
        "Three vacant months reduce collected rent to $13,500, and an unexpected $14,000 major repair pushes total expenses well above the rent collected.",
      figures: [
        { label: "Rent Collected", value: "$13,500" },
        { label: "Property Taxes", value: "$3,400" },
        { label: "Insurance & Management", value: "$3,150" },
        { label: "Maintenance & Utilities", value: "$2,400" },
        { label: "Unexpected Repair", value: "$14,000" },
        { label: "Operating Cash Remaining", value: "-$9,450" },
        { label: "Cash After $1,200 Reserve", value: "No reserve assumed" },
      ],
      statement: "The IRA must have sufficient available funds to cover this cash shortfall and any other obligations — this is why the retained $50,000 of cash can matter.",
    },
  ],
  tableColumns: [
    { label: "Rent Collected", index: 0 },
    { label: "Operating Cash Remaining", index: 5 },
    { label: "Cash After Reserve", index: 6 },
  ],
  comparisonNote:
    "These are hypothetical educational illustrations, not an investment forecast. Gross rent is not profit — the property could generate cash, or it could require the IRA to spend significantly more than it receives.",
  conclusion: "The investor needs to understand both possibilities before assuming rental real estate is simple or guaranteed.",
};

export const propertyManagementAndLabor = {
  eyebrow: "Who Handles The Property While You're Working?",
  heading: ["Professional Management Can Reduce Work.", "It Can't Remove Investment Risk."],
  goldLine: 1,
  paragraphs: [
    "Imagine Maria is working an overnight hospital shift when a tenant reports that the air conditioner has stopped working — the property still needs attention. This is why many investors consider hiring a professional property manager, who may coordinate tenant communication, collect rent, and arrange repairs under a management agreement with an appropriately qualified, unrelated manager. Professional management can reduce direct work, but it cannot remove investment risk or all investor responsibility — the manager can make mistakes, contractors can be expensive, tenants can stop paying, and the IRA may still experience losses.",
    "Suppose Maria is handy and could paint, replace fixtures, or have family members handle the work personally. IRA-owned property is not the same as property Maria owns directly — providing personal services to IRA-owned investments or involving certain family members can create prohibited-transaction risks. Doing the work for free does not solve the problem. The safest principle: have appropriate independent professionals perform the property's work, with legitimate expenses paid through the IRA arrangement.",
  ],
  note: "Even if you know how to fix it, that doesn't mean you should.",
};

export const valueVsProfitAndDebt = {
  eyebrow: "Rental Income Is Only One Part Of The Story",
  heading: ["Property Value Versus", "Investment Profit."],
  intro:
    "An IRA-owned rental house may receive rent while it is held, and its market value may also change. Imagine the property purchased for $155,000 later becomes worth $180,000 — a hypothetical increase in stated value, but not automatically a realized investment profit.",
  figures: [
    { label: "Original Purchase Price", value: "$155,000" },
    { label: "Hypothetical Estimated Value", value: "$180,000" },
    { label: "Hypothetical Value Increase", value: "$25,000" },
    { label: "Cash Still Retained In The IRA", value: "$50,000" },
  ],
  disclaimer:
    "The owner must consider acquisition costs, improvements, operating results, and selling expenses before any sale proceeds are realized — a property's estimated market value is not necessarily what a buyer will pay. Certain structures may allow IRA real estate investments involving debt, but borrowing introduces additional restrictions and can generate unrelated debt-financed income, creating tax obligations inside an IRA. Maria's example uses an all-cash purchase to keep the illustration focused on rental economics.",
};

export const alternativeRealEstateExposure = {
  eyebrow: "You Don't Have To Own An Entire House",
  heading: ["Different Ways To Explore", "Real Estate Investing"],
  steps: [
    { number: "01", title: "Direct Rental Ownership", description: "The IRA may hold an eligible residential rental property — direct exposure to a particular property and its rental operations, but the IRA bears the property's expenses, vacancy risk, and potentially concentrated exposure." },
    { number: "02", title: "Private Real Estate Funds", description: "The IRA may purchase an eligible interest in a real estate investment fund — participation in a portfolio or project without directly owning an entire rental house, subject to fund expenses, liquidity restrictions, and reliance on a manager." },
    { number: "03", title: "Real Estate-Related Private Lending", description: "The IRA may be able to lend money through a qualifying private loan secured by real estate — a contractual interest payment arrangement rather than direct ownership, subject to default risk and collateral valuation." },
  ],
  note: "Real estate exposure can take different forms. Your schedule, investment knowledge, available capital, and tolerance for risk all matter.",
};

export const oldHospitalAccount = {
  eyebrow: "Your Old Hospital Retirement Account Might Be Worth A Closer Look",
  heading: ["Three Situations", "Worth Understanding"],
  steps: [
    { number: "01", title: "\"I Have An IRA Already.\"", description: "An eligible IRA-to-IRA trustee transfer may allow assets to move to a custodian that supports a broader investment menu. The existing traditional or Roth tax treatment does not automatically change." },
    { number: "02", title: "\"I Have Retirement Money With A Former Hospital Employer.\"", description: "Some former employer plan balances may be eligible for rollover. The plan administrator must confirm the applicable options, and the receiving custodian must support the transaction." },
    { number: "03", title: "\"My Retirement Savings Are Still In My Current Employer's Plan.\"", description: "Working for an employer does not automatically give someone the right to move current plan assets into an IRA. The plan's distribution rules and applicable law determine availability." },
  ],
  note: "A direct rollover of eligible pre-tax plan assets to a traditional IRA can generally preserve tax-deferred treatment. Moving eligible pre-tax assets into a Roth IRA instead can create taxable conversion income.",
};

export const fiveRealEstateQuestions = {
  eyebrow: "Before Your IRA Buys A Property",
  heading: ["Five Real Estate Questions", "Worth Asking"],
  steps: [
    { number: "01", title: "What Is The Property Really Worth?", description: "The asking price is not proof of market value. Review comparable sales, condition, location, title, and other relevant property information." },
    { number: "02", title: "Can The IRA Afford The Expenses?", description: "Consider property taxes, insurance, maintenance, management fees, vacancies, and emergency repairs." },
    { number: "03", title: "Who Will Manage The Property?", description: "Understand the manager's responsibilities, qualifications, compensation, and relationship to the IRA owner." },
    { number: "04", title: "What Happens If The Property Can't Be Sold?", description: "Real estate can be illiquid. The IRA may have difficulty obtaining cash quickly when needed." },
    { number: "05", title: "Does This Property Fit The Overall Retirement Account?", description: "A single house may represent a large percentage of an IRA's assets. Consider concentration, liquidity, retirement timing, and the possibility of losses." },
  ],
  note: "A beautiful property isn't automatically a good investment. A good investment decision requires understanding the numbers, responsibilities, and risks.",
};

export const importantRules = {
  eyebrow: "The House Can Belong To Your IRA",
  heading: ["That Doesn't Mean You Can", "Treat It Like Your Own."],
  steps: [
    { number: "01", title: "No Prohibited Personal Use", description: "The account holder cannot use IRA-owned real estate for prohibited personal benefit. It is not a personal vacation home or a place the owner can casually occupy." },
    { number: "02", title: "Watch Transactions With Disqualified Persons", description: "Certain sales, loans, leases, and other arrangements involving the IRA owner and disqualified persons are prohibited. Do not assume renting to a family member is acceptable." },
    { number: "03", title: "Keep The IRA's Money Separate", description: "Property income and expenses must be handled through the appropriate IRA arrangement. Taking rent personally or paying expenses personally without proper consideration can create serious problems." },
    { number: "04", title: "Don't Assume Personal Labor Is Allowed", description: "The account holder should not assume they can personally provide maintenance, repairs, or compensated services to IRA-owned property." },
    { number: "05", title: "An IRA Isn't Insurance Against Bad Investments", description: "A legitimate IRA custodian does not guarantee investment performance. Private investments can be difficult to value, hard to sell, and vulnerable to fraud." },
  ],
  note: "A Self-Directed IRA offers different possibilities, not an exemption from financial reality or retirement-account law.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["Your Work Is In The Hospital.", "Your Future Doesn't Have To Be Limited To It."],
  goldLine: 1,
  paragraphs: [
    "You've spent years building a career. You understand discipline and the importance of making informed decisions. And you may have spent years building retirement savings without realizing that qualifying real estate could be among the investments worth exploring.",
    "A rental house. A private real estate fund. A qualifying real estate loan. None is guaranteed to succeed, none is automatically appropriate for you, and no retirement investment should depend on assumptions you haven't examined. But you may have more choices than you realized.",
  ],
  featured: "Your career can stay in healthcare. Your investment possibilities can extend beyond it.",
};

export const faqItems = [
  { question: "Can nurses invest in real estate through a Self-Directed IRA?", answer: "Potentially, yes. A Self-Directed IRA may hold qualifying investment real estate through a custodian that permits those assets. The property and transaction must comply with applicable IRA rules." },
  { question: "Can healthcare professionals use an IRA to buy a rental house?", answer: "Potentially. The IRA can be the owner of an eligible investment property through an appropriate arrangement. Purchase funds, rental income, and legitimate property expenses must be handled according to the account's rules." },
  { question: "Do I need to own a business to have a Self-Directed IRA?", answer: "No. Owning a business is not a general requirement for establishing a Self-Directed IRA." },
  { question: "Can I use money from an old hospital 401(k) to buy rental real estate through an IRA?", answer: "If the retirement funds are eligible for rollover, a direct rollover into a suitable IRA may be available. The receiving custodian must support the property investment, and all applicable rules must be followed." },
  { question: "Can a nonprofit hospital employee roll over a 403(b)?", answer: "Some eligible 403(b) distributions can be rolled into an IRA. The availability of a distribution depends on the law and the particular plan's provisions." },
  { question: "Where does the rent from an IRA-owned property go?", answer: "Rent belongs to the IRA, not the account holder personally. It must be received and managed through the appropriate IRA arrangement." },
  { question: "Can a Self-Directed IRA pay property taxes and insurance?", answer: "Legitimate expenses of an IRA-owned property are generally paid using IRA funds through the appropriate account arrangement." },
  { question: "Can I personally repair my IRA rental house?", answer: "Do not assume you can. Personal services, related-party work, and compensation arrangements can create prohibited-transaction problems. Have qualified professionals evaluate any proposed arrangement before work is performed." },
  { question: "Can I rent my IRA property to a family member?", answer: "Renting property to certain disqualified family members can constitute a prohibited transaction. Do not proceed without qualified legal review." },
  { question: "Can I stay at my IRA-owned rental property between hospital shifts?", answer: "Using IRA-owned real estate for prohibited personal benefit is not allowed. The property should not be treated as personal lodging." },
  { question: "Can my Self-Directed IRA borrow money to buy real estate?", answer: "Certain arrangements may permit financing, subject to significant legal and custodial restrictions. Debt-financed IRA real estate can also create unrelated debt-financed income tax consequences." },
  { question: "Is rental income in a Self-Directed Roth IRA always tax-free?", answer: "No. Roth IRAs can provide qualified tax-free distributions, but certain investments and financing structures may create taxes within the account." },
  { question: "What happens if my IRA rental house loses money?", answer: "Investment losses reduce the value of the IRA's assets or available cash. The IRA is not protected from ordinary investment losses simply because it has retirement-account status." },
  { question: "Does the IRA custodian guarantee that a property is a good investment?", answer: "No. A legitimate self-directed custodian does not necessarily assess the investment's financial merits, condition, market value, or freedom from fraud." },
  { question: "Is a Self-Directed IRA rental house passive income?", answer: "Professional management can reduce day-to-day involvement, but rental real estate still requires oversight, financial decisions, expenses, and risk management. \"Passive\" should not be interpreted as guaranteed or effortless income." },
  { question: "Can I invest in real estate without buying an entire property?", answer: "Potentially. Certain qualifying private real estate funds, investment entities, or private real estate loans may offer different forms of real estate exposure, subject to eligibility and IRA restrictions." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the explanation that IRA law generally permits investment real estate while custodians may restrict available assets.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions on prohibited personal use, certain related-party dealings, and improper transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 590-B", description: "Provides important information on IRA distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS: Rollovers of Retirement Plan and IRA Distributions", description: "Supports eligible rollover and trustee-transfer concepts.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "IRS Publication 571", description: "Provides information on 403(b) arrangements.", href: "https://www.irs.gov/publications/p571" },
  { title: "IRS Publication 598", description: "Provides background on unrelated business income and debt-financed income rules.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Form 990-T Instructions", description: "Provides filing guidance when unrelated business income tax reporting applies.", href: "https://www.irs.gov/instructions/i990t" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports the discussion of alternative investment risks, lack of liquidity, valuation uncertainty, custodian limitations, and fraud.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["You've Built A Career Caring For Others.", "Discover More Possibilities For Your Own Future."],
  description:
    "You don't have to become a full-time landlord. You don't have to abandon your healthcare career. A Self-Directed IRA may provide access to qualifying real estate investments that are worth learning about. Explore the possibilities, understand the numbers, and respect the risks.",
  signature: "Maria and all investment examples in this module are entirely fictional educational illustrations.",
};
