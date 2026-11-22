export const hero = {
  eyebrow: "Self-Directed 401(k) Learning Module",
  title: [
    "Sixty-Four Storage Doors.",
    "What If Your Retirement Plan",
    "Owned The Investment Behind Them?",
  ],
  goldLine: 2,
  description:
    "A qualifying Self-Directed 401(k) may be able to invest in certain self-storage properties or related investment entities. The arrangement may produce income, lose money, or require significant repair expenses — and its tax treatment can differ from an ordinary residential rental.",
  whoItsFor:
    "For business owners and real estate investors with eligible retirement capital who have never considered a self-storage facility as a retirement-plan investment.",
  primaryCta: { label: "Start My Self-Directed 401(k)" },
};

export const storageVsResidential = {
  eyebrow: "Why Self-Storage Is Interesting",
  heading: ["A Small Door Can Represent", "A Real Monthly Relationship."],
  goldLine: 1,
  paragraphs: [
    "People rent storage units because they're moving, downsizing, renovating, or simply need room for business inventory or seasonal equipment. Multiply that relationship across dozens of units, and the facility can have many paying customers at once.",
    "But a self-storage unit is not a small apartment. A residential rental gives someone a place to live under a residential lease. A self-storage unit provides space for permitted property storage under a storage rental agreement — and the operation can involve electronic gate access, security systems, online billing, unit inspections, and delinquency management that ordinary residential rentals don't require.",
  ],
  featured: "A self-storage facility is real estate. But operating it may also involve a substantial business activity.",
  note: "Do not assume the same income-tax treatment automatically applies to residential rentals and self-storage operations. The applicable arrangement requires separate review.",
};

export const averyStory = {
  eyebrow: "Meet Avery",
  heading: ["A Business Owner Who Had", "Never Considered This Category"],
  stories: [
    {
      label: "Illustrative Investor",
      headline: "Avery had rental homes, land, and private lending on the radar. Not storage.",
      scenario:
        "Avery is 48, operates an independent consulting business with no employees requiring plan coverage, and has accumulated $950,000 of eligible retirement capital in a properly structured Self-Directed 401(k) through years of contributions, rollovers, and investment results. Rental homes seemed interesting. Vacant land seemed interesting. Then Avery noticed a smaller, 64-unit self-storage facility with an established security gate and customer base, owned by an unrelated seller.",
      realization: "\"Could my Self-Directed 401(k) potentially invest in a property like this?\"",
      risk: "Potentially — but the plan's investment authority, legal ownership arrangement, operating activities, related-party restrictions, and possible unrelated business taxable income must all be evaluated first. Avery and the figures above are fictional illustrations, not personalized investment advice.",
    },
  ],
};

export const fullPotentialRent = {
  eyebrow: "The Fictional Facility",
  heading: ["What Does Sixty-Four Units", "Collect At Full Rent?"],
  intro:
    "Four buildings. Sixteen units each. Sixty-four total — forty standard units and twenty-four large units, at fictional, non-market rental rates.",
  figures: [
    { label: "Standard Units (40 @ $120/mo)", value: "$4,800 / month" },
    { label: "Large Units (24 @ $180/mo)", value: "$4,320 / month" },
    { label: "Combined Monthly Scheduled Rent", value: "$9,120" },
    { label: "Full Annual Scheduled Rent", value: "$109,440" },
  ],
  disclaimer:
    "This is the maximum scheduled annual rent if every unit is rented and every payment arrives — not investment profit, not guaranteed income, and not money the plan can distribute to the account holder. Actual collections depend on occupancy and payment performance. Unit sizes and rates are fictional, not local market quotes.",
};

export const acquisition = {
  eyebrow: "Buying The Mini-Warehouse",
  heading: ["The Facility Costs $800,000.", "What Else Does The Plan Need?"],
  intro:
    "Avery's plan holds $950,000 of eligible capital. The fictional purchase assumes an unrelated seller, no financing, and an unrelated professional manager and improvement crew.",
  figures: [
    { label: "Property Purchase Price", value: "$800,000" },
    { label: "Closing, Title & Due Diligence", value: "$15,000" },
    { label: "Initial Improvements", value: "$45,000" },
    { label: "Cash Designated For Future Needs", value: "$30,000" },
    { label: "Total Initial Capital Allocation", value: "$890,000" },
    { label: "Starting Plan Cash", value: "$950,000" },
  ],
  disclaimer:
    "The $30,000 reserve is not an expense merely because it has been set aside — do not subtract it twice. This example does not establish whether the facility's particular activities will generate unrelated business taxable income; that requires separate review.",
};

export const controlRoom = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The 64-Door Control Room"],
  intro:
    "Looking at a storage building doesn't tell you how much money it collects. Some doors are rented. Some are empty. Some customers are late. And even when payments arrive, the property still has operating expenses. Select a scenario to see what's actually happening behind the doors.",
  scenarios: [
    {
      key: "every-door-pays",
      label: "Every Door Pays",
      status: "64 of 64 units paying",
      description:
        "Imagine a year in which every storage unit is rented and every required rental payment arrives. The facility collects its full scheduled rent — but the business still has expenses.",
      figures: [
        { label: "Units Paying", value: "64 of 64" },
        { label: "Annual Rent Collected", value: "$109,440" },
        { label: "Management Fee (8%)", value: "$8,755.20" },
        { label: "Total Recurring Expenses", value: "$42,355.20" },
        { label: "Operating Cash Before Reserve", value: "$67,084.80" },
      ],
      statement: "Every rented unit can contribute to revenue. But full rental collections do not eliminate operating expenses.",
    },
    {
      key: "base-year",
      label: "The Base Year",
      status: "52 of 64 units paying",
      description:
        "A more restrained year: 34 standard units and 18 large units have paying customers. The remaining 12 units sit vacant throughout this simplified year.",
      figures: [
        { label: "Units Paying", value: "52 of 64 (81.25%)" },
        { label: "Annual Rent Collected", value: "$87,840" },
        { label: "Management Fee (8%)", value: "$7,027.20" },
        { label: "Total Recurring Expenses", value: "$40,627.20" },
        { label: "Operating Cash Before Reserve", value: "$47,212.80" },
      ],
      statement: "The facility can have a majority of its doors rented and still collect substantially less than its full potential rent.",
    },
    {
      key: "missed-payments",
      label: "Five Missed Payments",
      status: "52 of 64 occupied, 5 unpaid this month",
      description:
        "Same base-year occupancy, but during one modeled month, three standard-unit customers and two large-unit customers fail to pay. None of those missed payments is recovered within the modeled year.",
      figures: [
        { label: "Units Paying", value: "47 of 64 paid in full" },
        { label: "Annual Rent Collected", value: "$87,120" },
        { label: "Management Fee (8%)", value: "$6,969.60" },
        { label: "Total Recurring Expenses", value: "$40,569.60" },
        { label: "Operating Cash Before Reserve", value: "$46,550.40" },
      ],
      statement: "A rented door and a paid rental agreement are not always the same thing.",
    },
    {
      key: "more-vacant",
      label: "Ten More Go Vacant",
      status: "10 units vacant for 3 months",
      description:
        "Starting from the base year, six standard units and four large units lose three consecutive months of rent as customers move out and new ones don't arrive immediately. Insurance, security maintenance, and property taxes continue regardless.",
      figures: [
        { label: "Units Affected", value: "10 units, 3 months vacant" },
        { label: "Annual Rent Collected", value: "$83,520" },
        { label: "Management Fee (8%)", value: "$6,681.60" },
        { label: "Total Recurring Expenses", value: "$40,281.60" },
        { label: "Operating Cash Before Reserve", value: "$43,238.40" },
      ],
      statement: "Storage customers can come and go. A property with many units still faces real vacancy risk.",
    },
  ],
  comparisonNote:
    "All four scenarios assume fixed advertised rates, no financing, no late fees or merchandise revenue, management fees equal to 8% of rent actually collected, and no additional taxes included in the cash figures. These are fictional illustrations, not market forecasts.",
  conclusion: "Many doors create many possible payments. But vacancies, missed collections, and operating expenses determine what remains.",
};

export const operatingCosts = {
  eyebrow: "The Facility's Operating Costs",
  heading: ["Keeping Sixty-Four Units", "Open Costs Real Money."],
  intro:
    "A mini-warehouse may look simpler than an apartment building — no kitchens, no bathrooms, no living rooms in every unit. But the property still has substantial fixed expenses before any management fee.",
  figures: [
    { label: "Property Taxes", value: "$13,000" },
    { label: "Facility Insurance", value: "$5,200" },
    { label: "Security, Gate & Access Maintenance", value: "$4,800" },
    { label: "Electricity & Common-Area Utilities", value: "$3,600" },
    { label: "Routine Facility Maintenance", value: "$4,200" },
    { label: "Administrative & Marketing", value: "$2,800" },
    { label: "Total Fixed Recurring Expenses", value: "$33,600" },
  ],
  disclaimer:
    "The independent, unrelated professional operator fee (8% of collected rent) is in addition to this fixed total. Do not call the cash remaining after expenses guaranteed profit — professional management does not by itself resolve tax or UBTI questions, and the applicable annual reserve allocation is a separate decision, not a second expense.",
};

export const gateGoesDark = {
  eyebrow: "The Second Signature Experience",
  heading: ["The Gate Goes Dark"],
  intro:
    "The storage units are still there. But what happens when the one system that lets customers access them fails? Unlike a roof replacement, this is a distinctive self-storage operating risk: the electronic access gate and security infrastructure.",
  figures: [
    { label: "Base-Year Operating Cash Before Reserve", value: "$47,212.80" },
    { label: "Unexpected Gate & Security System Expense", value: "$19,000" },
    { label: "Operating Cash After The Expense", value: "$28,212.80" },
    { label: "After Optional $6,000 Reserve Allocation", value: "$22,212.80" },
  ],
  disclaimer:
    "The $19,000 is an actual fictional expenditure; the $6,000 is a separate allocation of available cash for future needs — do not add them to the original $33,600 expense model without identifying the $19,000 as an exceptional, additional cost, and do not double-count any amount spent from the $30,000 reserve designated at acquisition. The storage units may be simple. The business still depends on systems that can fail.",
};

export const ownershipStructures = {
  eyebrow: "Who Actually Owns The Facility?",
  heading: ["Three Different Ways To Invest", "In The Same Storage Business"],
  intro:
    "The investment belongs to the retirement plan — its financial records and legal ownership must reflect that. Avery cannot deposit the facility's collections into a personal checking account. Beyond that, a self-storage investment can take different legal forms, and the tax consequences can differ.",
  steps: [
    {
      number: "Concept One",
      title: "Direct Real Estate Ownership",
      description:
        "A properly structured retirement-plan investment owns the storage property directly and may engage an unrelated operator. The precise tax classification of the resulting income still depends on the actual activities and services provided.",
    },
    {
      number: "Concept Two",
      title: "Investment In A Storage Operating Business",
      description:
        "The plan might acquire a qualifying interest in a business that operates storage facilities. The entity structure and ongoing business activity can create additional tax and prohibited-transaction questions.",
    },
    {
      number: "Concept Three",
      title: "Private Storage Investment Entity",
      description:
        "The plan might invest in a permitted private partnership or company that holds self-storage investments — owning the investment interest, not necessarily the underlying facility directly. Private offering eligibility, entity-level taxes, and valuation rules may apply.",
    },
  ],
  note: "Investing in a storage building and investing in the business that operates it are not always the same financial or legal transaction. An LLC or corporate structure does not automatically avoid retirement-plan taxes or eliminate every legal concern, and not all three approaches are universally permissible for every plan.",
};

export const taxDistinction = {
  eyebrow: "The Most Important Self-Storage Tax Distinction",
  heading: ["Storage Payments May Not Be Treated", "Like Ordinary Rental-House Payments."],
  goldLine: 1,
  paragraphs: [
    "A retirement plan may own real estate and receive certain qualifying rents under favorable tax rules. But self-storage can be different. The IRS distinguishes ordinary rents from real property from income generated through activities that include services or other business operations — and its published unrelated business income guidance specifically identifies storage-unit revenue among examples that may fall outside the ordinary real-property rental exclusion.",
    "That means the tax result requires more than simply asking whether the business owns land and buildings. The services provided to customers and the actual operating arrangement matter.",
  ],
  featured: "The income from a self-storage operation should not automatically be treated as ordinary passive real estate rent for retirement-plan tax purposes.",
  note: "Do not claim that all self-storage revenue always creates unrelated business taxable income, or that every facility automatically qualifies for the rental exclusion. Hiring a third-party manager does not necessarily convert an operating business into passive rental income, and an LLC, corporation, or partnership does not automatically resolve the tax issue. The actual facts and entity classification must be analyzed by a qualified professional.",
};

export const ubtiAndFinancing = {
  eyebrow: "What Is Unrelated Business Taxable Income?",
  heading: ["Can A Retirement Plan Owe Tax", "On Money That Stays Inside The Plan?"],
  goldLine: 1,
  paragraphs: [
    "Potentially, yes. Certain tax-exempt retirement plans can owe current tax on qualifying unrelated business taxable income, often abbreviated UBTI, when the plan earns particular kinds of business income not covered by an applicable exclusion. A self-storage operating business may raise these questions depending on the facts. Keeping income inside a retirement plan does not automatically mean every type of business income avoids current tax — and the facility's operating cash figures above are not, by themselves, a UBTI calculation.",
    "Financing adds a separate question. The fictional example above uses an all-cash purchase to keep the story simple, but commercial real estate transactions often use financing. Certain qualified plans may benefit from special treatment involving qualifying real-property acquisition financing under Internal Revenue Code Section 514(c)(9) — but those rules have detailed requirements and exceptions, and a financing exception for real property does not automatically resolve an active operating business's unrelated business income classification.",
  ],
  note: "Do not calculate a fictional tax bill without a complete tax model, promise the business will owe no UBTI, or treat the $6,000 reserve allocation as an automatic tax deduction.",
};

export const personalBenefitBoundaries = {
  eyebrow: "Personal-Use And Related-Party Boundaries",
  heading: ["The Plan Owns The Facility.", "It Isn't Your Personal Mini-Warehouse."],
  steps: [
    {
      number: "Boundary One",
      title: "Storing Your Own Belongings",
      description:
        "Avery's boat needs a storage space. Using a unit owned by the retirement plan for personal belongings can create prohibited-transaction concerns — retirement-plan assets cannot simply be used for the personal benefit of the plan owner or certain related persons.",
    },
    {
      number: "Boundary Two",
      title: "Renting Units To Your Own Business",
      description:
        "If Avery's separate retail business wants to rent ten units from the plan's storage investment, even a fair-market rental rate does not automatically resolve the related-party concern — indirect personal benefits and fiduciary conflicts matter.",
    },
    {
      number: "Boundary Three",
      title: "Personally Managing Or Repairing The Facility",
      description:
        "Business experience does not automatically permit Avery to serve as the facility's employee, manager, contractor, or repair technician — even unpaid. Directing a permitted investment is not the same as personally operating its business.",
    },
  ],
  note: "The exact classification of disqualified persons, indirect benefits, and permitted services depends on the circumstances. Not every ordinary administrative action by the plan owner is categorically prohibited, but owners should not perform unrestricted labor or extend personal use without legal review. The recommended structure engages a professional operator unrelated to Avery and any relevant disqualified persons — though that alone does not resolve every tax or prohibited-transaction issue.",
};

export const customerAndLegalRisk = {
  eyebrow: "Customers, Liens, And What The Facility Doesn't Own",
  heading: ["A Gate And A Lock Don't Make", "The Business Risk-Free."],
  goldLine: 1,
  paragraphs: [
    "Security cameras, individual locks, lighting, and alarm systems may help manage risk, but equipment can fail, theft can occur, and customers can claim their property was lost or damaged. When a customer stops paying, the facility cannot simply assume ownership of what's inside the unit — many states have laws governing self-storage liens, required notices, waiting periods, and lawful enforcement procedures, with additional protections for certain military servicemembers. Texas Property Code Chapter 59 is one official example of how a state governs these liens and notices, but it is not a universal rule for every jurisdiction.",
    "And even once the facility owns the building, it generally does not own what customers store inside it. Furniture, equipment, and photographs stored by customers remain their property, subject to applicable law and the rental agreement — the investment is in the facility and its lawful business arrangements, not an unrestricted claim to customers' belongings.",
  ],
  note: "Do not give universal deadlines for storage auctions, imply lien enforcement applies identically in every state, or portray auction proceeds as guaranteed business revenue.",
};

export const operationsAndMarket = {
  eyebrow: "Location, Competition, And Additional Revenue",
  heading: ["Nobody Lives In The Units.", "The Property Still Needs A Market."],
  goldLine: 1,
  paragraphs: [
    "Self-storage customers still care about convenience, access, visibility, and price — the property's location can affect customer demand and rental pricing just as it would for any commercial real estate. And having units available doesn't guarantee customers will pay the price you want: if a new competitor opens nearby with lower introductory rates and modern security systems, the existing facility may face pressure to change its prices or improve its service.",
    "Some facilities also offer boxes, locks, packing materials, insurance-related products, or climate-controlled units beyond basic storage-space rental. Those activities can create additional revenue, but also additional expenses, contractual responsibilities, and tax considerations — the fictional 64-unit financial model used throughout this module includes only basic, standard storage rent, with no merchandise, service, or climate-control revenue or expense added.",
  ],
  note: "Revenue from storage space and revenue from services or merchandise may not be treated the same way for tax purposes. Do not assume all facility revenue automatically qualifies as excluded real-property rent.",
};

export const diligenceOperationsEmployees = {
  eyebrow: "Due Diligence, Operations, And Employees",
  heading: ["Sixty-Four Doors Can Hide", "One Very Expensive Problem."],
  goldLine: 1,
  paragraphs: [
    "A profitable-looking rent statement doesn't prove the property is free from defects. Roofing, drainage, pavement, electrical systems, zoning, environmental conditions, and title issues all deserve appropriate inspection and legal review before an investor relies on the numbers above. Day to day, an unrelated professional operator typically handles the software tracking unit availability, customer accounts, monthly charges, and past-due balances — but the operating and ownership arrangements must match the retirement-plan investment structure.",
    "One more question deserves attention: does owning a storage business change Avery's Solo 401(k) eligibility? A one-participant 401(k) generally covers a qualifying business owner (and spouse) under the sponsoring employer — employees of a separate storage business do not automatically become employees of that sponsor, but common-control and affiliated-service-group rules can matter and require appropriate review.",
  ],
  note: "Do not implement an actual customer management system, invent professional inspection findings, or claim that any employee hired by a plan-owned entity automatically invalidates (or can never affect) Solo 401(k) status.",
};

export const valuationAndExit = {
  eyebrow: "Valuation, Appreciation, And Eventually Selling",
  heading: ["Collecting Rent Isn't The Same", "As Automatically Gaining Value."],
  goldLine: 1,
  paragraphs: [
    "A facility collecting reliable rent may be attractive to buyers, but valuation also depends on location, competition, building condition, interest rates, market conditions, and the legal and tax characteristics of the operation. The retirement plan must appropriately value its investment assets under applicable rules — the original $800,000 purchase price does not remain the correct fair market value forever.",
    "The facility could eventually be sold, but what the plan actually receives depends on the ownership structure, buyer, sale price, expenses, liabilities, and applicable taxes. An operating-business interest and a directly owned real estate asset may have different tax treatment when sold, and when the plan owns the investment, the proceeds belong to the plan — not to Avery personally, absent the applicable distribution rules.",
  ],
  note: "Do not assume automatic appreciation, portray all sale proceeds as tax-exempt, or assume the investment is liquid on demand.",
};

export const closingReflection = {
  eyebrow: "The Bigger Investment Realization",
  heading: ["A Small Storage Facility Can Reveal", "A Much Bigger Possibility."],
  goldLine: 1,
  paragraphs: [
    "Four buildings. Sixty-four storage units. Different sizes, different customers, monthly obligations, operating expenses, technology systems, and a business that may require professional management. Most people think of storage facilities as places where other people keep their belongings. Behind the roll-up doors can be a real estate asset and an operating business with measurable financial performance.",
    "Certain qualifying Self-Directed 401(k) plans may be able to participate in investments involving assets like this. The actual structure must be evaluated, the risks are real, and the tax rules may be more complicated than residential rental real estate — but the investment category itself may surprise someone who has only ever invested in conventional retirement products.",
  ],
  featured: "Your retirement investments may not have to be limited to the companies you see on a brokerage screen. Certain plans may be able to invest in commercial properties and businesses you can see in the real world.",
};

export const faqItems = [
  {
    question: "Can a Self-Directed 401(k) invest in self-storage facilities?",
    answer:
      "Certain properly structured Self-Directed 401(k) plans may permit qualifying commercial real estate and private business investments, potentially including self-storage properties or related investment interests. The legal structure, plan documents, prohibited transactions, and tax treatment must be evaluated.",
  },
  {
    question: "Is self-storage rental income the same as residential rental income?",
    answer:
      "Not necessarily. The IRS distinguishes certain rental income from activities involving additional business operations or services. The specific tax treatment of a self-storage arrangement requires review.",
  },
  {
    question: "Can self-storage income create unrelated business taxable income?",
    answer:
      "Potentially. Storage-related business income may raise UBTI questions depending on the actual activities, services, ownership structure, and applicable law.",
  },
  {
    question: "Does hiring a property manager eliminate UBTI?",
    answer:
      "Not automatically. Professional management may change operational responsibilities, but it does not by itself resolve the legal classification of business income.",
  },
  {
    question: "Can an LLC eliminate the tax problems of self-storage investing?",
    answer:
      "Not automatically. LLC tax classification and the actual activities of the business matter. A legal entity does not automatically make operating income tax-exempt.",
  },
  {
    question: "Can I store my personal belongings in a facility owned by my retirement plan?",
    answer: "Personal use of retirement-plan investment property by the owner generally raises prohibited-transaction concerns.",
  },
  {
    question: "Can my own business rent storage units from my retirement-plan investment?",
    answer:
      "Related-party leasing or indirect benefits to the owner's separate business can raise prohibited-transaction concerns. Fair-market rent does not automatically resolve the issue.",
  },
  {
    question: "Can I personally manage a retirement-owned self-storage facility?",
    answer:
      "Personally furnishing operating services to a retirement-plan investment can create prohibited-transaction issues. The permissible role depends on the legal structure and actual activities.",
  },
  {
    question: "Does every occupied storage unit generate rent?",
    answer: "No. An occupied unit may have a delinquent customer. Occupancy and actual cash collections are different.",
  },
  {
    question: "Can a storage facility lose money even with most units rented?",
    answer: "Yes. Taxes, insurance, major repairs, management fees, security systems, and other costs can exceed collected revenue.",
  },
  {
    question: "Can storage-business employees affect Solo 401(k) eligibility?",
    answer:
      "The relevant employer relationships, common control, affiliated service group rules, and plan eligibility requirements matter. Workers employed by a separate investment business do not automatically become employees of the plan's sponsoring employer.",
  },
  {
    question: "Does Roth Academy sell self-storage investments?",
    answer:
      "No. This module is an educational illustration of a possible investment category. Roth Academy's purpose is to explain qualifying retirement-plan opportunities and help eligible customers explore plan establishment.",
  },
];

export const references = [
  {
    title: "IRS: One-Participant 401(k) Plans",
    description: "The underlying plan concept, eligibility, and the distinction between owner-only and employee-covered plans.",
    href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans",
  },
  {
    title: "IRS: Retirement-Plan Investment FAQs",
    description: "Plan investment authority and prohibited-transaction principles.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Prohibited Transactions",
    description: "Personal use, related-party leasing, services, loans, and improper benefits.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS: Exclusion of Rent From Real Property From UBTI",
    description:
      "Essential source for this module — the distinction between ordinary rents from real property and storage-unit or service-related revenue that may fall outside the usual rental exclusion.",
    href: "https://www.irs.gov/charities-non-profits/exclusion-of-rent-from-real-property-from-unrelated-business-taxable-income",
  },
  {
    title: "IRS: Publication 598",
    description: "Unrelated business taxable income, business activities, rental income, debt financing, and exceptions.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "IRS: Form 990-T Instructions",
    description: "Applicable unrelated business income reporting requirements.",
    href: "https://www.irs.gov/instructions/i990t",
  },
  {
    title: "IRS: Property Financing and Unrelated Business Income",
    description: "Debt-financed income concepts and applicable exceptions under IRC Section 514.",
    href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514",
  },
  {
    title: "IRS: Retirement-Plan Asset Valuation",
    description: "Annual valuation and proper reporting of plan assets.",
    href: "https://www.irs.gov/retirement-plans/valuation-of-plan-assets-at-fair-market-value",
  },
  {
    title: "Texas Property Code Chapter 59",
    description:
      "An official example of state self-storage laws governing rental agreements, liens, enforcement, and notices — not a universal rule for every state.",
    href: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.59.htm",
  },
];

export const finalConversion = {
  heading: ["Sixty-Four Doors.", "One Investment Opportunity To Understand."],
  description:
    "A qualifying Self-Directed 401(k) may be able to invest in certain self-storage properties or investment entities. The ownership structure must be appropriate, related-party transactions must be avoided, and the tax treatment of storage operations requires serious attention — but your retirement savings may have investment possibilities beyond stocks, bonds, and mutual funds.",
  signature: "Explore whether a Self-Directed 401(k) fits your business, eligible retirement assets, and interest in qualifying real estate and private business investments.",
};
