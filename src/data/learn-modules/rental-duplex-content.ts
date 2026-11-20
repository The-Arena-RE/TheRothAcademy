export const hero = {
  eyebrow: "Two Tenants, One Property",
  title: ["Two Front Doors. Two Potential Rent Checks.", "Could Your Retirement Plan Own The Whole Building?"],
  goldLine: 1,
  description:
    "Imagine a duplex in a quiet residential neighborhood — one home rents for $1,600 a month, the other for $1,400. A qualifying Self-Directed 401(k) might be able to own the entire property, not the account holder personally. Rent could potentially flow into the plan, property expenses would be paid under the plan's ownership arrangement, and the investment would remain subject to the rules governing retirement-plan assets.",
  whoItsFor: "For anyone who imagines retirement money only invested in stocks, bonds, and mutual funds.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const whatIsADuplex = {
  eyebrow: "What Is A Duplex?",
  heading: ["One Building.", "Two Separate Homes."],
  paragraphs: [
    "A duplex is a residential property containing two separate dwelling units. Each unit may have its own entrance, kitchen, bathroom, and living space, and different households can rent the two units. Depending on the property's legal arrangement, one owner may own both units as a single investment — creating two tenants, two leases, and two monthly rental obligations, while the owner still has one overall property to maintain.",
    "Some properties advertised as duplexes may have different legal ownership, zoning, parcel, or building arrangements. The fictional example assumes the duplex is legally recognized as a two-unit residential property and may be rented according to applicable law — not every single-family house divided into two spaces automatically becomes a lawful duplex.",
  ],
  featured: "Two living spaces can create two possible rental payments, while the property remains one investment.",
};

export const cameronStory = {
  eyebrow: "Meet Cameron",
  heading: ["Cameron Has Retirement Savings.", "But Never Considered Owning Two Rental Homes Through One Plan."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Cameron Has Retirement Savings. But Never Considered Owning Two Rental Homes Through One Plan.",
      scenario:
        "Cameron is 43 and operates an independent professional services business with legitimate qualifying compensation and no employees who must be covered under the contemplated owner-only plan. Cameron has established an appropriately structured Self-Directed 401(k) containing $260,000 in eligible retirement assets, accumulated through lawful contributions and permitted rollovers over time — not a single year's contribution.",
      realization:
        "Cameron learns that a properly structured Self-Directed 401(k) may permit qualifying rental real estate investments, and a duplex becomes particularly interesting: two units, two potential tenants, one building. \"Could my retirement plan own the duplex, collect the rent, and hold it as a long-term investment?\"",
      risk:
        "Cameron is fictional. The property, income, investment capital, and business facts are hypothetical. Actual eligibility and investment permissibility require review.",
    },
  ],
};

export const propertyPurchase = {
  eyebrow: "The Property Purchase",
  heading: ["The Duplex Costs $220,000.", "But The Retirement Plan Needs More Than $220,000."],
  intro:
    "Imagine Cameron's Self-Directed 401(k) identifies a duplex offered by an unrelated seller for $220,000. The investment may be possible, but the plan must consider the entire capital commitment — not just the purchase price.",
  figures: [
    { label: "Property Purchase", value: "$220,000" },
    { label: "Closing & Title Expenses", value: "$6,000" },
    { label: "Initial Property Improvements", value: "$14,000" },
    { label: "Designated Cash Reserve", value: "$10,000" },
    { label: "Total Initial Capital Allocation", value: "$250,000" },
    { label: "Starting Plan Cash", value: "$260,000" },
  ],
  disclaimer:
    "The plan spends $240,000 on the purchase, closing, and initial improvements ($220,000 + $6,000 + $14,000). The $10,000 reserve remains cash belonging to the plan — it is not an expense merely because it has been designated as a reserve. After the $240,000 in actual spending, $20,000 in cash remains: $10,000 designated as a property reserve, and $10,000 uncommitted under this simplified illustration. Buying the building is only the first financial decision — the retirement plan also needs enough money to own it responsibly.",
};

export const twoRentsNotDoubleProfit = {
  eyebrow: "Two Rents Do Not Mean Double Profit",
  heading: ["The Property Could Collect $3,000 A Month.", "That Doesn't Mean The Plan Earns $3,000."],
  intro:
    "If both units are occupied and both tenants pay the full amount every month, the leases could produce $36,000 a year under the stated full-payment assumptions. But the property also has expenses — taxes, insurance, maintenance, management, utilities, and other operating costs.",
  figures: [
    { label: "Unit A Monthly Rent", value: "$1,600" },
    { label: "Unit B Monthly Rent", value: "$1,400" },
    { label: "Combined Monthly Rent", value: "$3,000" },
    { label: "Annual Scheduled Rent (× 12)", value: "$36,000" },
  ],
  disclaimer: "$36,000 of scheduled rent is not $36,000 of investment profit.",
};

export const twoDoorsOneDeed = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["What Happens When One Tenant Leaves", "But The Building's Bills Keep Coming?"],
  intro:
    "Imagine your retirement plan owns this duplex. Both units share the same property's expenses. Now imagine a tenant moves out — the rent from that unit stops, but the building still needs insurance, the property taxes still exist, and the other costs don't simply disappear. Explore four possible years.",
  modelNote:
    "Annual recurring expenses (excluding management): $4,800 property taxes + $1,800 insurance + $2,400 routine maintenance + $1,200 owner-paid utilities + $600 administrative allowance = $10,800. The property management fee is 8% of rent actually collected — never applied to rent that isn't collected. A separate $2,400 annual reserve allocation is cash set aside for future major expenses, not an additional operating expense.",
  scenarios: [
    {
      key: "both-pay",
      label: "Both Units Pay All Year",
      description:
        "Imagine the duplex has two paying tenants for the entire year. Unit A pays $1,600 every month, Unit B pays $1,400 every month, and no tenant misses a payment. Under these simplified assumptions, the property collects $36,000 — but the owner still has expenses.",
      figures: [
        { label: "Annual Rent Collected", value: "$36,000" },
        { label: "Management Fee (8%)", value: "$2,880" },
        { label: "Total Operating Expenses", value: "$13,680" },
        { label: "Operating Cash Surplus", value: "$22,320" },
        { label: "After Reserve Allocation", value: "$19,920" },
      ],
      statement: "Even when both tenants pay every month, the property's collected rent and its available operating cash are two different numbers.",
    },
    {
      key: "unitA-vacant",
      label: "Unit A Is Vacant For Three Months",
      description:
        "Now imagine the tenant in Unit A moves out, and it takes three months to find and begin collecting rent from another tenant. During those three months, the retirement plan receives no rent from Unit A — but Unit B continues paying $1,400 per month.",
      figures: [
        { label: "Annual Rent Collected", value: "$31,200" },
        { label: "Management Fee (8%)", value: "$2,496" },
        { label: "Total Operating Expenses", value: "$13,296" },
        { label: "Operating Cash Surplus", value: "$17,904" },
        { label: "After Reserve Allocation", value: "$15,504" },
      ],
      statement: "One unit stopped paying rent. The other unit kept the property producing some income, but the annual result still declined.",
    },
    {
      key: "unitB-vacant",
      label: "Unit B Is Vacant For Three Months",
      description:
        "This time, the tenant in Unit B leaves. Unit A continues producing rent, but the plan loses three months of Unit B's scheduled payments.",
      figures: [
        { label: "Annual Rent Collected", value: "$31,800" },
        { label: "Management Fee (8%)", value: "$2,544" },
        { label: "Total Operating Expenses", value: "$13,344" },
        { label: "Operating Cash Surplus", value: "$18,456" },
        { label: "After Reserve Allocation", value: "$16,056" },
      ],
      statement: "Because the two units have different rents, losing either tenant changes the property's annual result differently.",
    },
    {
      key: "both-vacant",
      label: "Both Units Are Vacant For Three Months",
      description:
        "Now imagine both tenants leave. For three months, the entire duplex produces no rental income — the retirement plan still owns the building, and property taxes, insurance, and other recurring expenses continue.",
      figures: [
        { label: "Annual Rent Collected", value: "$27,000" },
        { label: "Management Fee (8%)", value: "$2,160" },
        { label: "Total Operating Expenses", value: "$12,960" },
        { label: "Operating Cash Surplus", value: "$14,040" },
        { label: "After Reserve Allocation", value: "$11,640" },
      ],
      statement: "Two rental units may create two possible sources of rent. But when both are vacant, one building can have no rent at all.",
    },
  ],
  assumptionsNote:
    "Every scenario assumes rent is collected on time for occupied months, three-month vacancies are consecutive, the property management fee is 8% of collected rent, other modeled recurring expenses remain unchanged, there is no mortgage, and there are no unplanned major repairs.",
  comparisonNote: "Two tenants can change how a property's rent is collected. But neither tenant eliminates the costs and risks of owning the building.",
};

export const roofSurpriseIntro = {
  eyebrow: "The Roof Surprise",
  heading: ["The Duplex Has Two Front Doors.", "Unfortunately, It Only Has One Roof."],
  paragraphs: [
    "Imagine both tenants are paying rent and the property appears to be performing well. Then a serious building problem appears — a roof inspection identifies extensive damage, and additional structural repairs may be required. For this educational scenario, assume an unexpected major roofing and structural remediation project costs $28,000. The amount is fictional, not a contractor quote or industry average.",
    "The property needs major work, and the retirement plan owns the building — which means the retirement plan bears the financial responsibility for the investment's legitimate expenses. One major repair can change the entire year's financial result.",
  ],
  featured: "The property can have two sources of rent and still experience a year where major expenses exceed the money it collects.",
};

export const roofSurpriseComparison = {
  eyebrow: "One Major Repair Can Change The Entire Year's Financial Result",
  heading: ["$28,000 Hypothetical Roof And Structural Repair.", "Two Different Starting Points."],
  leftLabel: "Scenario A: Both Units Paid All Year",
  rightLabel: "Scenario B: Unit B Vacant 3 Months",
  rows: [
    { left: "Annual rent collected: $36,000.", right: "Annual rent collected: $31,800." },
    { left: "Modeled recurring expenses: $13,680.", right: "Modeled recurring expenses: $13,344." },
    { left: "Operating cash surplus before the repair: $22,320.", right: "Operating cash surplus before the repair: $18,456." },
    { left: "Unexpected repair cash outlay: $28,000.", right: "Unexpected repair cash outlay: $28,000." },
    { left: "Illustrative annual cash deficit: −$5,680.", right: "Illustrative annual cash deficit: −$9,544." },
  ],
  footnote:
    "This is a simplified cash-flow result, not an official accounting or taxable loss — the major repair may be treated as a capital improvement for tax or accounting purposes, requiring separate determination. The $2,400 annual future-repair reserve allocation is not an additional expense on top of the $28,000 repair cost; cash previously reserved may help fund the actual repair, but setting money aside does not itself create or eliminate an expense. The plan initially designated only $10,000 as a property reserve and had $10,000 in other uncommitted cash — a $28,000 repair would exceed both amounts combined by $8,000, assuming no other cash movements. The investor cannot simply pay the missing amount from a personal account and assume the retirement plan can reimburse the expense without legal consequences; the plan needs an appropriate, lawful funding arrangement. A rental property's greatest financial problem may arrive long before the year's rent has been collected.",
};

export const whoReceivesMoney = {
  eyebrow: "The Money Belongs To The Retirement Plan",
  heading: ["Who Collects The Rent? Who Pays The Bills?", "Who Owns The Duplex?"],
  items: [
    { number: "01", title: "Unrelated Tenant A & Tenant B", description: "Each pays rent under a separate lease." },
    { number: "02", title: "Authorized Property Collection Or Management Arrangement", description: "Processes rent and legitimate property expenses under the plan's legal structure." },
    { number: "03", title: "Self-Directed 401(k)", description: "Receives and accounts for the funds — not the account holder's personal checking account." },
  ],
  note: "The renters pay the owner. In this example, the owner is the retirement plan. The exact trustee, bank, title, property management, and payment arrangements depend on the plan's governing documents and applicable law.",
};

export const personalUseAndFamily = {
  eyebrow: "Can You Live In One Side Of The Duplex?",
  heading: ["Your Retirement Plan May Own Two Rental Homes.", "It Generally Cannot Provide One As Your Personal Home."],
  paragraphs: [
    "Imagine Unit A has a paying unrelated tenant and Unit B is vacant. Cameron thinks: \"I could live in Unit B and let the retirement plan collect rent from Unit A.\" That arrangement generally creates prohibited-transaction concerns — the property belongs to the retirement plan, and it cannot simply be used to provide housing for the plan owner or other disqualified persons. Charging oneself market rent does not automatically resolve those restrictions.",
    "The same concern extends to family. Suppose Cameron's adult child asks to rent Unit B at the same rent as any other tenant — that still generally creates a prohibited transaction, because a child of the plan owner is generally a disqualified person. Fair rent doesn't automatically make a prohibited family transaction permissible. Not every relative is treated identically, however; actual family relationships, ownership interests, fiduciary roles, and other applicable circumstances matter.",
  ],
  featured: "Owning a duplex through your retirement plan does not mean you may live in one side of it.",
};

export const managementOversight = {
  eyebrow: "Can You Personally Manage Or Repair The Duplex?",
  heading: ["You Know How To Fix A Faucet.", "That Doesn't Automatically Mean You Can Work On The Property."],
  intro:
    "A rental property requires management and maintenance — arranging repairs, responding to tenants, leasing, inspections, paying vendors, keeping records. But personally furnishing services to retirement-plan property can create prohibited-transaction concerns. The plan owner's professional abilities do not automatically create an exemption, and performing labor without compensation does not automatically resolve the problem.",
  items: [
    { number: "01", title: "Property Investment Oversight", description: "The authorized retirement-plan representative evaluates an investment and makes permitted decisions under the plan." },
    { number: "02", title: "Property Operations & Services", description: "A property manager, licensed contractor, or other appropriately engaged unrelated service provider handles operating work — for this lesson, assume an unrelated manager charges 8% of rent actually collected." },
  ],
  note: "Directing an investment is not necessarily the same thing as personally providing services to that investment. A property manager may reduce the owner's day-to-day operating burden, but the service still costs money and doesn't eliminate investment risk.",
};

export const leasesAndDeposits = {
  eyebrow: "Two Tenants Mean Two Leases",
  heading: ["One Property Can Have Two Completely", "Different Tenant Experiences."],
  items: [
    { number: "01", title: "Unit A: Lease Active", description: "Rent paid on time, no current turnover — a tenant who has lived there for years." },
    { number: "02", title: "Unit B: Turnover", description: "Lease ends, the unit needs cleaning and repair, and a new tenant must be found and a new lease begun." },
    { number: "03", title: "Security Deposits", description: "Not automatically ordinary rental income — the money may have to be held, accounted for, returned, or applied according to applicable law, and handled consistently with the plan's legal ownership." },
  ],
  note: "One duplex can contain two completely different rental stories. Money collected is not always money earned. Lease terms, security deposits, habitability obligations, and landlord-tenant rules depend on applicable federal, state, and local law.",
};

export const fairHousing = {
  eyebrow: "Tenant Screening And Fair Housing",
  heading: ["Owning Rental Property Through A Retirement Plan", "Doesn't Eliminate Landlord Responsibilities."],
  paragraphs: [
    "A duplex is still residential rental housing. The owner and its properly authorized representatives must follow applicable housing laws — fair housing requirements, tenant screening rules, lease requirements, security deposit obligations, habitability standards, repair responsibilities, required notices, and local registration or licensing requirements.",
    "The Fair Housing Act prohibits housing discrimination based on protected characteristics, subject to the law's scope and applicable exceptions, and state and local laws may provide additional protections.",
  ],
  featured: "Retirement-plan ownership changes who owns the investment. It does not make ordinary housing laws disappear.",
};

export const cashReserveMatters = {
  eyebrow: "Why A Cash Reserve Matters",
  heading: ["The Rent Might Arrive Next Month.", "The Repair Bill Could Arrive Tomorrow."],
  paragraphs: [
    "Recall the duplex's original purchase: the fictional Self-Directed 401(k) began with $260,000, spent $240,000 on the property, closing, and initial improvements, and designated $10,000 of the remaining $20,000 as a property reserve. Why? Because real estate expenses do not always arrive at convenient times — insurance premiums may be due before the rent arrives, property taxes may be billed in large installments, a water heater can fail, a tenant can move out unexpectedly, and a major building repair can require substantial cash.",
    "The retirement plan owner cannot assume that personal funds can be advanced to cover a shortfall and later reimbursed — improper loans, payments, or transfers involving the owner and plan can create prohibited-transaction concerns. The investment must have an appropriate lawful funding arrangement.",
  ],
  featured: "A positive annual rental projection doesn't guarantee the plan has enough cash when a bill comes due.",
};

export const additionalConsiderations = {
  eyebrow: "A Few More Things That Change The Investment",
  heading: ["Financing, Taxes, And Valuation", "All Shape The Real Result."],
  items: [
    {
      number: "01",
      title: "What If The Duplex Has A Mortgage?",
      description: "This example uses an all-cash purchase. Financing can introduce interest expense, lender restrictions, and additional retirement-plan legal considerations. Certain qualified plans may qualify for special real-property financing treatment under Internal Revenue Code Section 514(c)(9), subject to detailed requirements.",
    },
    {
      number: "02",
      title: "What About Taxes On The Rent?",
      description: "Certain rents from real property may be excluded when calculating unrelated business taxable income, but substantial services to occupants, business operations, controlled entities, or acquisition financing can change the result. Positive cash flow is not automatically the same as taxable income.",
    },
    {
      number: "03",
      title: "The Duplex Needs Valuation",
      description: "The $220,000 purchase price is not automatically the property's value forever. Neighborhood conditions, rental demand, property condition, and market conditions can all matter — a qualified plan must appropriately value its assets for applicable accounting and reporting purposes.",
    },
  ],
  note: "What a retirement plan paid for real estate and what the property is worth today are not always the same number.",
};

export const sellingTheDuplex = {
  eyebrow: "What If The Retirement Plan Sells The Duplex?",
  heading: ["The Property Could Eventually Be Sold.", "The Proceeds Would Still Belong To The Retirement Plan."],
  paragraphs: [
    "Imagine Cameron's retirement plan owns the duplex for several years. The property may produce rent, it may also require repairs, and its market value may change. Eventually, the retirement plan may decide to sell it to an unrelated buyer through a permitted transaction — and if the sale is completed properly, the net proceeds belong to the retirement plan. They do not automatically become Cameron's unrestricted personal cash.",
    "The actual tax treatment of the property sale depends on the investment's circumstances and applicable law — not every property sale inside a Self-Directed 401(k) is universally tax-free.",
  ],
  featured: "The retirement plan may own the property, receive the rent, and eventually receive the sale proceeds. The plan remains the financial owner throughout its investment.",
};

export const closingReflection = {
  eyebrow: "The Bigger Investment Realization",
  heading: ["A Duplex Isn't Just Two Apartments.", "It Can Be A Completely Different Way To Think About Retirement Ownership."],
  paragraphs: [
    "Many people imagine retirement investments as numbers moving on a screen — shares, funds, account balances, market prices. Then they learn that certain Self-Directed 401(k) plans may be able to own actual residential real estate: two front doors, two rental agreements, two potential rent payments, one shared roof, one property. Real tenants, real expenses, real investment risk.",
    "The important discovery is not that a duplex guarantees financial independence — it doesn't. The important discovery is that a qualifying retirement plan may have the ability to own a real, income-producing residential property.",
  ],
  featured: "Your retirement investments may not have to exist entirely on a stock-market screen. Some may be assets you can see, understand, and evaluate in the real world.",
};

export const faqItems = [
  {
    question: "Can a Self-Directed 401(k) buy a duplex?",
    answer: "Certain Self-Directed 401(k) plans may permit qualifying residential investment real estate, including a duplex. The plan must properly own the property, comply with its governing documents, and avoid prohibited transactions.",
  },
  {
    question: "Can I personally live in one side of a duplex owned by my Self-Directed 401(k)?",
    answer: "Personal occupancy by the plan owner generally raises prohibited-transaction concerns. The plan cannot simply provide housing for its owner.",
  },
  {
    question: "Can my adult child rent one of the units?",
    answer: "A plan owner's children are generally disqualified persons. Leasing plan property to an adult child generally raises prohibited-transaction problems, even if market rent is charged.",
  },
  {
    question: "Where does rental income go?",
    answer: "Rental income belongs to the Self-Directed 401(k) and must be received and accounted for under its authorized financial arrangements. It does not automatically belong to the account holder personally.",
  },
  {
    question: "Can I personally renovate a duplex owned by my 401(k)?",
    answer: "Personally furnishing construction or maintenance services to retirement-plan property can raise prohibited-transaction concerns. Professional skills and unpaid labor do not automatically make the activity permissible.",
  },
  {
    question: "Does a duplex produce guaranteed income because it has two units?",
    answer: "No. Either unit can become vacant, tenants can default, expenses can increase, and the property can lose value.",
  },
  {
    question: "What happens if both units are vacant?",
    answer: "The property may produce no rental income during the vacancy while taxes, insurance, and other expenses continue.",
  },
  {
    question: "Is rental income inside a Self-Directed 401(k) always tax-free?",
    answer: "No. Certain rents from real property may be excluded from unrelated business taxable income, but services, business activities, ownership relationships, financing, and other exceptions can affect the actual treatment.",
  },
  {
    question: "What if the duplex needs a new roof?",
    answer: "Major repairs can substantially affect investment economics. The retirement plan must have an appropriate lawful way to pay legitimate expenses and cannot simply rely on unrestricted personal funding from its owner.",
  },
  {
    question: "Does a Self-Directed 401(k) rental property guarantee retirement security?",
    answer: "No. Real estate investments can experience vacancies, expensive repairs, declining values, illiquidity, and substantial losses. Broader investment flexibility does not guarantee financial success.",
  },
];

export const references = [
  {
    title: "IRS: Retirement Plan Investments FAQs",
    description: "Relevant for plan investment authority, limitations, prohibited transactions, and retirement-plan asset ownership.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Retirement Topics — Prohibited Transactions",
    description: "Relevant for personal occupancy, related-party leases, sales, services, and improper use of plan assets.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS Publication 598",
    description: "Relevant for unrelated business taxable income, rental real estate, services, financing, and applicable exceptions.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "IRS: Exclusion Of Rent From Real Property From UBTI",
    description: "Relevant to the general rental-income exclusion and its limitations.",
    href: "https://www.irs.gov/charities-non-profits/exclusion-of-rent-from-real-property-from-unrelated-business-taxable-income",
  },
  {
    title: "IRS: Unrelated Income From Debt-Financed Property",
    description: "Relevant to the general financing-tax framework, with qualified-plan exceptions requiring separate consideration.",
    href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514",
  },
  {
    title: "IRS: Valuation Of Plan Assets At Fair Market Value",
    description: "Relevant to qualified-plan real estate valuation and reporting.",
    href: "https://www.irs.gov/retirement-plans/valuation-of-plan-assets-at-fair-market-value",
  },
  {
    title: "IRS: Form 5500-EZ",
    description: "Relevant to applicable one-participant plan annual reporting.",
    href: "https://www.irs.gov/forms-pubs/about-form-5500-ez",
  },
  {
    title: "HUD: Fair Housing Act Overview",
    description: "Relevant to federal housing discrimination requirements for residential rental properties.",
    href: "https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview",
  },
];

export const finalConversion = {
  heading: ["What If Your Retirement Plan Could Own", "Two Rental Homes Under One Roof?"],
  description:
    "Imagine a retirement plan that can potentially own actual real estate — not just a fund invested in property, not just stock in a real estate company. An actual duplex. Two possible tenants, rental income paid under separate leases, expenses managed through the plan, and ownership that remains inside the retirement structure. But the risks are real: tenants can leave, rent can go unpaid, repairs can be expensive, and a building can decline in value. The opportunity isn't guaranteed income — it's a different kind of permitted investment ownership.",
  signature: "You may have spent years investing for retirement without ever considering that your retirement plan could potentially own a duplex. Now you know the possibility exists.",
};
