export const hero = {
  eyebrow: "Self-Directed 401(k) Learning Module",
  title: ["You Have $25,000.", "What If Your Retirement Plan", "Could Own More Than Stocks?"],
  goldLine: 2,
  description:
    "Imagine having $25,000 available in a qualifying retirement plan — enough to explore some possibilities, though not enough to buy every kind of investment. What if your retirement plan could purchase a small piece of land? Or make a properly structured loan secured by real estate? Or own two different eligible investments while keeping some cash available? A qualifying Self-Directed 401(k) may potentially permit investments like these, subject to its documents and applicable law.",
  whoItsFor:
    "For self-employed professionals and small-business owners who have accumulated more than a very small retirement balance but don't consider themselves wealthy.",
  primaryCta: { label: "Start My Self-Directed 401(k)" },
};

export const directAnswer = {
  eyebrow: "The Short Answer",
  heading: ["One Balance.", "Three Different Investment Futures."],
  goldLine: 1,
  paragraphs: [
    "Certain properly structured Self-Directed 401(k) plans may permit investments in real estate and loans to unrelated third parties. With $25,000 of available plan cash, an eligible investor might consider a small property purchase, a properly documented private loan, or more than one permitted investment.",
    "The plan's governing documents, prohibited-transaction rules, investment costs, borrower risk, collateral, liquidity, tax treatment, and valuation requirements all matter. No investment return or repayment is guaranteed.",
  ],
  featured: "Twenty-five thousand dollars doesn't buy every investment. But it may create more flexibility than most people realize.",
};

export const eligibilityVsCapital = {
  eyebrow: "An Important Distinction",
  heading: ["Having $25,000 Available Is Not", "The Same Thing As Plan Eligibility."],
  goldLine: 1,
  paragraphs: [
    "A Solo 401(k), also called a one-participant 401(k), is generally designed for a qualifying business owner without employees who must be covered under the plan, other than an eligible spouse in appropriate circumstances. There is no universal $25,000 account minimum associated with the term \"Solo 401(k).\" Eligibility depends on the business and the applicable retirement-plan rules, while individual providers may impose their own separate terms.",
  ],
  featured: "It's not just about how much money is in my retirement plan. It's about what the plan may be permitted to own and what those investments could actually accomplish.",
};

export const morganStory = {
  eyebrow: "Meet Morgan",
  heading: ["$25,000 Isn't A Fortune.", "It's Enough To Ask Different Questions."],
  stories: [
    {
      label: "Illustrative Investor",
      headline: "Morgan understood stocks, funds, and maybe bonds. Then came a different kind of question.",
      scenario:
        "Morgan is 39, operates an independent consulting business generating legitimate qualifying compensation, and has already established an appropriately structured Self-Directed 401(k) with $25,000 of available cash accumulated through lawful funding and previous investment activity. Morgan is curious about other possibilities beyond ordinary retirement investments.",
      realization: "\"What if I wanted my retirement plan to own a real property investment or make a private loan?\"",
      risk: "Certain qualifying plans may permit those investments, provided the particular transaction complies with the plan documents, prohibited-transaction restrictions, tax rules, applicable property and lending laws, and other requirements. Morgan is a fictional illustration, not personalized investment advice.",
    },
  ],
};

export const capitalAtlas = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The $25,000 Capital Atlas"],
  intro:
    "Imagine your retirement plan has $25,000 available. You can't spend it three times — but you can compare three different possible approaches. Each path starts with the same $25,000; none of them is a recommended combined portfolio, and a gain from one path never carries into another.",
  scenarios: [
    {
      key: "the-landowner",
      label: "The Landowner",
      status: "Direct land ownership",
      description:
        "The plan purchases a fictional $16,500 vacant parcel entirely with plan cash, with no financing and no mortgage. Value could be created through an eventual favorable sale, and value could be lost if the lot is difficult to sell or needs unexpected costs. There are no tenants and no monthly income — the plan may hold the property for years before any resolution. Key legal consideration: the retirement plan could potentially own an entire parcel of land without financing it through a mortgage, but the plan still needs valid title, legal access, and an eventual buyer.",
      figures: [
        { label: "What The Plan Might Own", value: "A deeded vacant parcel" },
        { label: "Amount Committed", value: "$16,500" },
        { label: "Additional Modeled Spending", value: "$2,700" },
        { label: "Cash Remaining", value: "$5,800" },
      ],
      statement: "The retirement plan could potentially own an entire parcel of land without financing it through a mortgage.",
    },
    {
      key: "the-private-lender",
      label: "The Private Lender",
      status: "A secured promissory note",
      description:
        "Instead of purchasing land, the plan lends $18,000 to an unrelated business, secured by a deed of trust on separate real estate. The plan doesn't own the collateral property — it owns the debt and the corresponding lender rights. Value could be created through monthly interest and the final principal repayment, and value could be lost entirely if the borrower defaults despite the collateral. Key legal consideration: a secured private loan is a financial claim against a borrower, backed by specified collateral rights — not ownership of the land itself.",
      figures: [
        { label: "What The Plan Might Own", value: "A secured promissory note" },
        { label: "Amount Committed", value: "$18,000" },
        { label: "Additional Modeled Spending", value: "$1,200" },
        { label: "Cash Remaining", value: "$5,800" },
      ],
      statement: "A secured private loan is a financial claim against a borrower, backed by specified collateral rights.",
    },
    {
      key: "the-two-asset-investor",
      label: "The Two-Asset Investor",
      status: "One parcel and one separate loan",
      description:
        "Instead of committing most of the balance to one investment, the plan purchases a smaller $9,000 vacant parcel and separately makes an $8,000 private loan to an unrelated borrower. The investments have different legal rights, but both involve real estate in some way — and both can be affected by the same weak regional market at the same time. Key legal consideration: a qualifying retirement plan may potentially hold more than one permitted investment, but splitting capital does not eliminate risk and does not automatically create diversification.",
      figures: [
        { label: "What The Plan Might Own", value: "A vacant parcel and a separate loan" },
        { label: "Amount Committed", value: "$17,000" },
        { label: "Additional Modeled Spending", value: "$2,400" },
        { label: "Cash Remaining", value: "$5,600" },
      ],
      statement: "A qualifying retirement plan may potentially hold more than one permitted investment, but splitting capital does not eliminate risk.",
    },
  ],
  tableColumns: [
    { label: "Amount Committed", index: 1 },
    { label: "Additional Spending", index: 2 },
    { label: "Cash Remaining", index: 3 },
  ],
  comparisonNote:
    "Three separate fictional approaches to a $25,000 starting balance. The table is not a recommendation to pursue any particular strategy — these are independent alternatives, not a combined portfolio. Costs are hypothetical and exclude general retirement-plan administrative fees, unmodeled investment expenses, and other applicable charges.",
  conclusion: "The same retirement balance can create entirely different legal rights, expenses, cash flows, and financial risks.",
};

export const propertyBoundaryReveal = {
  eyebrow: "The Second Signature Experience",
  heading: ["The Property Boundary Reveal"],
  intro:
    "Imagine a fictional 0.34-acre vacant parcel called Meadowline Crossing, offered for $16,500 in an established Texas subdivision — no buildings, no rental income, no outstanding loans, and purchased entirely with plan cash from an unrelated seller. The lot looks beautiful, but looking at the land isn't enough. Select each layer to see what the retirement plan actually needs to understand before buying.",
  layers: [
    {
      key: "ownership",
      label: "Ownership",
      title: "Does The Seller Actually Own It?",
      body: "Before purchasing the parcel, the retirement plan needs to understand the property's legal ownership and any relevant liens or title problems. The seller's advertisement is not proof of title.",
      statement: "The plan needs a valid real estate interest, not just a picture of a parcel on a map.",
      note: "This fictional example assumes appropriate title review has already been completed.",
    },
    {
      key: "access",
      label: "Access",
      title: "Can Someone Legally Reach The Property?",
      body: "A parcel may appear close to a road, but proximity doesn't automatically prove legal access. The property's recorded rights, public road status, easements, and other details may matter.",
      statement: "A property that looks accessible on a map may still have an access problem.",
      note: "The fictional Meadowline parcel is assumed to have lawful access — not all inexpensive land does.",
    },
    {
      key: "restrictions",
      label: "Restrictions",
      title: "What Can Someone Actually Do With This Land?",
      body: "Imagine the buyer eventually wants to use the property. There may be zoning rules, subdivision restrictions, setbacks, environmental limitations, floodplain requirements, or other legal restrictions.",
      statement: "Owning land doesn't automatically mean you can build anything you want on it.",
      note: "No building permit, utility availability, or particular future use is guaranteed for this fictional parcel.",
    },
    {
      key: "utilities-and-conditions",
      label: "Utilities & Conditions",
      title: "What Might Make The Property More Expensive To Own Or Sell?",
      body: "A parcel may require a survey, utility investigation, drainage evaluation, environmental review, brush clearing, or other work. A retirement-plan investment may also have ongoing costs such as property taxes.",
      statement: "The purchase price is only one part of the property's economics.",
      note: "The plan participant should not assume they can personally perform improvements to plan-owned land — related-party services and personal labor may raise prohibited-transaction concerns.",
    },
    {
      key: "marketability",
      label: "Marketability",
      title: "Who Might Eventually Want To Buy It?",
      body: "Imagine the plan later wants to sell the lot. It needs a buyer, and the local market matters. Buyers may be interested in the parcel, or they may be difficult to find — a cheap purchase price doesn't automatically create a future market.",
      statement: "The most important future transaction may be the one where the retirement plan tries to sell the property.",
      note: "An inexpensive parcel can be a valuable investment or a serious problem — the legal and physical details matter.",
    },
  ],
  dossier: {
    heading: "Meadowline Crossing At A Glance",
    figures: [
      { label: "Property", value: "Fictional 0.34-acre vacant parcel" },
      { label: "Purchase Price", value: "$16,500" },
      { label: "Review Required", value: "Full ownership and cost review" },
    ],
  },
  conclusion: "An inexpensive parcel can be a valuable investment or a serious problem. The legal and physical details matter.",
};

export const landPurchaseCosts = {
  eyebrow: "The Land Purchase Costs",
  heading: ["The Lot Costs $16,500.", "The Entire Investment Costs More."],
  intro:
    "The plan decides to buy the fictional parcel. The purchase price is $16,500, but the plan also incurs transaction expenses and anticipates two years of property holding expenses before any sale.",
  figures: [
    { label: "Land Purchase Price", value: "$16,500" },
    { label: "Title, Survey, Closing & Acquisition Review", value: "$1,500" },
    { label: "Two Years Of Property Taxes & Holding Expenses", value: "$1,200" },
    { label: "Total Cash Spent Over The Holding Period", value: "$19,200" },
    { label: "Starting Plan Cash", value: "$25,000" },
    { label: "Cash Remaining", value: "$5,800" },
  ],
  disclaimer:
    "The plan spends $19,200 over the assumed holding period and retains $5,800 in cash. The $1,200 is a budgeted and ultimately incurred two-year holding cost reflected in the completed-sale scenarios — it is not paid all at once at closing, and it is not counted twice.",
};

export const landExitTheater = {
  eyebrow: "The Third Signature Experience",
  heading: ["The Land Exit Theater"],
  intro:
    "The retirement plan holds Meadowline Crossing for two years — no tenants, no rent payments, no development project — and eventually tries to sell. These two outcomes are mutually exclusive alternatives; the purchase price was identical, but the final financial outcome depends on the market, the buyer, and the expenses.",
  scenarios: [
    {
      key: "favorable-sale",
      label: "Favorable Sale",
      status: "An unrelated buyer pays $29,000",
      description: "An unrelated buyer agrees to purchase the property for $29,000 after the two-year holding period. The sale has expenses, and the retirement plan receives the net proceeds.",
      figures: [
        { label: "Sale Price", value: "$29,000" },
        { label: "Selling Expenses (6% + Closing)", value: "$2,500" },
        { label: "Net Sale Proceeds", value: "$26,500" },
        { label: "Previously Retained Plan Cash", value: "$5,800" },
        { label: "Ending Plan Cash", value: "$32,300" },
        { label: "Simplified Change", value: "+$7,300" },
      ],
      statement: "If the fictional parcel sells for $29,000 after two years, the plan could finish with $32,300 under these assumptions.",
    },
    {
      key: "unfavorable-sale",
      label: "Unfavorable Sale",
      status: "An unrelated buyer pays only $13,000",
      description: "Buyer demand is weaker and the property spends longer on the market. An unrelated buyer eventually offers $13,000, and the plan chooses to complete the fictional sale. The same acquisition and holding expenses were already incurred.",
      figures: [
        { label: "Sale Price", value: "$13,000" },
        { label: "Selling Expenses (6% + Closing)", value: "$1,540" },
        { label: "Net Sale Proceeds", value: "$11,460" },
        { label: "Previously Retained Plan Cash", value: "$5,800" },
        { label: "Ending Plan Cash", value: "$17,260" },
        { label: "Simplified Change", value: "-$7,740" },
      ],
      statement: "The property still sells. But the plan ends with substantially less money than it started with.",
    },
  ],
  tableColumns: [
    { label: "Sale Price", index: 0 },
    { label: "Net Sale Proceeds", index: 2 },
    { label: "Ending Plan Cash", index: 4 },
    { label: "Simplified Change", index: 5 },
  ],
  comparisonNote:
    "Two mutually exclusive fictional land investment outcomes after an assumed two-year holding period. The sale prices, costs, and buyer demand are invented. The figures do not represent an annualized return, forecast, tax calculation, or currently available property investment.",
  conclusion: "Buying a complete parcel can be exciting. But the plan's final result depends on what someone eventually pays for it and what it costs to own and sell.",
};

export const landNeverSells = {
  eyebrow: "What If The Land Never Sells?",
  heading: ["The Property Doesn't Sell.", "The Plan Still Owns It."],
  goldLine: 1,
  paragraphs: [
    "Imagine Morgan lists the property, but no buyer agrees to an acceptable purchase price. The plan still owns the land — the property may have value, but the plan hasn't received sale proceeds, and taxes and other holding expenses may continue. Market value and available cash are different things: an unsold parcel's estimated value isn't a realized investment return, and the plan must continue to address appropriate valuation and expense obligations.",
  ],
  featured: "A property can remain an asset even when it produces no cash and has no immediate buyer.",
};

export const loanTermsAndAcquisition = {
  eyebrow: "Strategy Two: The Private Lender",
  heading: ["The Borrower Agrees To 12%", "Annual Interest. What Does That", "Actually Mean?"],
  intro:
    "Instead of purchasing land, imagine the plan lends money to a fictional unrelated business — Red Oak Property Group — for a legitimate business-purpose investment involving unrelated vacant land. This is not a personal residential mortgage. A business-purpose loan may be treated differently from a consumer-purpose loan under certain federal rules, but that doesn't eliminate applicable state lending, usury, licensing, securities, servicing, collection, or retirement-plan requirements.",
  figures: [
    { label: "Loan Principal", value: "$18,000" },
    { label: "Annual Simple Interest Rate", value: "12%" },
    { label: "Term", value: "12 months, interest-only, principal at maturity" },
    { label: "Security", value: "Assumed first-priority deed of trust on unrelated real estate" },
    { label: "Title, Legal, Recording & Loan Review Costs", value: "$1,200" },
    { label: "Cash Remaining", value: "$5,800" },
  ],
  disclaimer:
    "The plan commits $18,000 to the loan, spends $1,200 on transaction expenses, and retains $5,800 in cash. The $18,000 becomes a debt asset of the retirement plan — it isn't automatically an expense or a loss. The 12% rate is hypothetical, not a market quote, a recommended rate, or a guarantee of repayment.",
};

export const collateralMirror = {
  eyebrow: "The Fourth Signature Experience",
  heading: ["The Collateral Mirror"],
  intro:
    "The loan is secured by land estimated to be worth $30,000. Does that mean the $18,000 loan is automatically safe? The borrower remains the property owner; the retirement plan holds the secured lender rights established by the transaction — a deed of trust securing a loan is not the same thing as a deed conveying ownership of the land.",
  figures: [
    { label: "Property Owner", value: "The unrelated borrower" },
    { label: "Note Holder", value: "The qualifying retirement-plan investment" },
    { label: "Estimated Collateral Value", value: "$30,000" },
    { label: "Loan Principal", value: "$18,000" },
    { label: "Illustrative Loan-To-Value", value: "60%" },
  ],
  disclaimer:
    "A lower loan-to-value ratio can indicate more theoretical collateral coverage, but it does not guarantee repayment or recovery. The $30,000 estimate is fictional, not a verified appraisal — it doesn't account for foreclosure expenses, doesn't establish that title is clear, doesn't guarantee a sale price, doesn't prove the plan will be the first party paid, and doesn't mean the retirement plan already owns the land. Never treat the apparent difference between collateral value and loan balance as guaranteed lender profit.",
};

export const loanPaymentCorridor = {
  eyebrow: "The Fifth Signature Experience",
  heading: ["The Twelve-Payment Corridor"],
  intro:
    "The loan has a 12% annual simple interest rate on an $18,000 principal — $2,160 of contractual interest over twelve months if the principal stays unchanged. The borrower agrees to pay that interest monthly. Each $180 payment is interest only; it does not reduce the $18,000 principal in this particular agreement. After eleven monthly interest payments, the borrower can still owe the entire $18,000 original principal — the regular payments are small compared with the final principal payment, and if the borrower can't make that balloon payment, the loan can become a problem.",
  figures: [
    { label: "Monthly Interest Payment (Months 1–11)", value: "$180" },
    { label: "Principal Still Owed Throughout Months 1–11", value: "$18,000 (unchanged)" },
    { label: "Total Interest, Months 1 Through 11", value: "$1,980" },
    { label: "Month 12 Final Interest", value: "$180" },
    { label: "Month 12 Principal Due", value: "$18,000" },
    { label: "Month 12 Final Scheduled Payment (Balloon)", value: "$18,180" },
    { label: "Total Scheduled Payments Across 12 Months", value: "$20,160" },
  ],
  disclaimer:
    "These are scheduled contractual amounts, not money already collected — a promise is not the same as cash already received. This fictional loan is interest-only: the principal does not decline during the first eleven months, and no future payment should be treated as already received until the borrower actually pays it.",
};

export const loanOutcomes = {
  eyebrow: "Two Possible Lending Futures",
  heading: ["The Note Promises Payment.", "Does The Borrower Actually Pay?"],
  intro:
    "A private loan can provide contractual payment rights, but those rights are only financially valuable to the extent they can actually be collected. These are two mutually exclusive fictional outcomes for the same $18,000 loan.",
  figures: [
    { label: "Full Repayment — Interest Collected", value: "$2,160" },
    { label: "Full Repayment — Principal Returned", value: "$18,000" },
    { label: "Full Repayment — Ending Plan Cash", value: "$25,960" },
    { label: "Full Repayment — Simplified Change", value: "+$960" },
    { label: "Default — Interest Collected (4 Payments)", value: "$720" },
    { label: "Default — Net Recovery After Enforcement", value: "$12,000" },
    { label: "Default — Ending Plan Cash", value: "$18,520" },
    { label: "Default — Simplified Change", value: "-$6,480" },
  ],
  disclaimer:
    "Full repayment assumes no additional servicing, tax, or legal expenses beyond the initial $1,200. In the default scenario, the first four interest payments arrive, then the unrelated business experiences financial difficulty and payments stop — under lawful collection and settlement arrangements, the plan eventually recovers $12,000, net of all enforcement and collection expenses. The $12,000 recovery does not imply the plan simply takes the property; the hypothetical $30,000 collateral value is not a promise that the plan can recover that amount. Even with real estate collateral and four successful interest payments, a private loan can produce a substantial loss.",
};

export const lenderOwnershipAndPriority = {
  eyebrow: "What The Private Lender Actually Owns",
  heading: ["The Plan Owns Debt.", "It Doesn't Automatically Own", "The Borrower's Land."],
  goldLine: 1,
  paragraphs: [
    "The loan is secured by real estate, but the land remains owned by the borrower. The retirement plan holds the contractual lending rights and corresponding security interest — if the borrower defaults, legal enforcement may be possible, but the loan cannot simply be transformed into immediate ownership of the collateral. Collateral helps secure a loan; it doesn't make the note holder the property's automatic owner, and the effect of a security instrument depends on the documents, lien priority, applicable law, and required enforcement procedures.",
    "Lien priority also matters: if the borrower has pledged property as collateral but there is already another lien, unpaid taxes, or a different superior claim, the priority of those claims can affect what the plan recovers after default — a loan that appears secured by valuable property may have substantially less practical protection than expected. And collateral alone isn't enough: a loan secured by valuable property can still default if the borrower cannot make the required payments, so the borrower's legitimate business, financial resources, existing debt, and income sources all matter.",
  ],
  featured: "The value of collateral matters, but so does the order in which legally entitled parties may be paid.",
};

export const twoAssetBreakdown = {
  eyebrow: "The Sixth Signature Experience",
  heading: ["The Two-Asset Strategy"],
  intro:
    "Instead of purchasing one $16,500 parcel or making one $18,000 loan, imagine the plan considers two smaller investments: a different vacant lot called Brookfield Court, and a separate private loan to an unrelated borrower. The borrower does not own the plan's lot, and the lot is not pledged as collateral for the loan — these are two legally separate investments.",
  figures: [
    { label: "Brookfield Court Land Purchase", value: "$9,000" },
    { label: "Land Title, Closing & Review", value: "$1,000" },
    { label: "One-Year Land Holding Costs", value: "$500" },
    { label: "Total Land-Related Spending", value: "$10,500" },
    { label: "Private Loan Principal (10% Annual Simple Interest)", value: "$8,000" },
    { label: "Loan Documentation & Review", value: "$900" },
    { label: "Total Loan-Related Spending", value: "$8,900" },
    { label: "Starting Plan Cash", value: "$25,000" },
    { label: "Cash Remaining", value: "$5,600" },
  ],
  disclaimer:
    "After the two investments and their modeled costs, the plan still has $5,600 in available cash. The plan must have proper ownership, records, and legal arrangements for each asset separately — two investments do not automatically mean sufficient diversification.",
};

export const twoAssetOutcomes = {
  eyebrow: "The Seventh Signature Experience",
  heading: ["The Same Storm"],
  intro:
    "Many people hear that spreading money across investments can reduce risk — that can be true in appropriate circumstances. But investing in two different assets doesn't automatically mean they are independent of each other. One property and one private loan, both connected to the same regional real estate market: a weaker market could affect the property's resale price and weaken the borrower's repayment prospects at the same time.",
  scenarios: [
    {
      key: "favorable-result",
      label: "Favorable Result",
      status: "Land sells, borrower repays",
      description: "The Brookfield lot sells to an unrelated buyer for $15,000, and the private loan borrower repays in full, including one year of 10% simple interest.",
      figures: [
        { label: "Land Sale Price", value: "$15,000" },
        { label: "Net Land Sale Proceeds (After 6% + Closing)", value: "$13,600" },
        { label: "Loan Repayment (Principal + 10% Interest)", value: "$8,800" },
        { label: "Cash Previously Retained", value: "$5,600" },
        { label: "Ending Plan Cash", value: "$28,000" },
        { label: "Simplified Change", value: "+$3,000" },
      ],
      statement: "Under this favorable fictional outcome, the plan's two investments together increase its cash from $25,000 to $28,000.",
    },
    {
      key: "unfavorable-result",
      label: "Unfavorable Result — The Same Storm",
      status: "Land sells for less, borrower defaults",
      description: "The local real estate market weakens. The parcel is harder to sell and only fetches $8,000, while at the same time the unrelated borrower experiences financial difficulties and the loan defaults, with only a $3,000 net recovery.",
      figures: [
        { label: "Land Sale Price", value: "$8,000" },
        { label: "Net Land Sale Proceeds (After 6% + Closing)", value: "$7,000" },
        { label: "Net Loan Recovery (Interest Collected: $0)", value: "$3,000" },
        { label: "Cash Previously Retained", value: "$5,600" },
        { label: "Ending Plan Cash", value: "$15,600" },
        { label: "Simplified Change", value: "-$9,400" },
      ],
      statement: "Owning two investments doesn't prevent both from losing money.",
    },
  ],
  tableColumns: [
    { label: "Land Sale Price", index: 0 },
    { label: "Loan Result", index: 2 },
    { label: "Ending Plan Cash", index: 4 },
    { label: "Simplified Change", index: 5 },
  ],
  comparisonNote:
    "Two mutually exclusive fictional completed-investment outcomes. The land and the loan are separate assets, not legally linked — they can simply be affected by the same regional conditions. The unfavorable scenario assumes no interest collected and a $3,000 net loan recovery. All examples exclude unmodeled expenses, taxes, and general plan administration costs.",
  conclusion: "Splitting capital is not the same thing as eliminating risk.",
};

export const allStrategiesCompared = {
  eyebrow: "All Three Strategies Compared",
  heading: ["Same $25,000 Starting Balance.", "Very Different Outcomes."],
  intro:
    "You've now explored three approaches: one property, one secured private loan, and two smaller investments. Each began with the same amount — the investment structure, actual cash flows, costs, and future events determine the result, not the amount invested.",
  figures: [
    { label: "Direct Land — Favorable Ending Cash", value: "$32,300 (+$7,300)" },
    { label: "Direct Land — Unfavorable Ending Cash", value: "$17,260 (-$7,740)" },
    { label: "Secured Private Loan — Favorable Ending Cash", value: "$25,960 (+$960)" },
    { label: "Secured Private Loan — Unfavorable Ending Cash", value: "$18,520 (-$6,480)" },
    { label: "Two-Asset Strategy — Favorable Ending Cash", value: "$28,000 (+$3,000)" },
    { label: "Two-Asset Strategy — Unfavorable Ending Cash", value: "$15,600 (-$9,400)" },
  ],
  disclaimer:
    "These are independent fictional scenarios — the rows do not represent comparable real-world probabilities, the results are not risk-adjusted, and the holding periods and cash-flow timing differ (two years for land, one year for the loan). Do not rank these as objectively superior based solely on their nominal cash differences, and do not present the favorable outcomes as expected returns. The land example shows a larger possible gain, but a larger hypothetical gain doesn't automatically make an investment safer, more suitable, or more likely to succeed — the risks, expenses, liquidity, and legal rights all differ too.",
};

export const cashReserveChamber = {
  eyebrow: "The Eighth Signature Experience",
  heading: ["The Cash Reserve Chamber"],
  intro:
    "Each strategy leaves some money available — the land investment and the private loan each retain $5,800, and the two-asset strategy retains $5,600. That money remains part of the retirement plan; it isn't lost, and it isn't automatically earning an investment return, but it may provide flexibility if an unexpected expense arises. Imagine the land strategy's retained $5,800, and then an additional legal, survey, or property-related expense of $3,000 becomes necessary.",
  figures: [
    { label: "Cash Reserve Before Expense", value: "$5,800" },
    { label: "Additional Unexpected Expense", value: "$3,000" },
    { label: "Cash Reserve After Expense", value: "$2,800" },
    { label: "Original Favorable Land Ending Cash", value: "$32,300" },
    { label: "Less Additional Expense", value: "-$3,000" },
    { label: "Revised Ending Cash", value: "$29,300" },
    { label: "Revised Nominal Increase From $25,000", value: "$4,300" },
  ],
  disclaimer:
    "An unexpected $3,000 expense reduces a $7,300 illustrated gain to $4,300. This is an additional what-if scenario, not part of the original land comparison — the expense is not applied to every investment path, and it is not counted twice. Holding cash has its own tradeoffs, including inflation and opportunity costs, and there is no universal reserve percentage appropriate for every plan or investment.",
};

export const planOwnsInvestments = {
  eyebrow: "Who Owns The Investments",
  heading: ["Your Retirement Plan Owns The", "Land Or Loan. You Don't Personally", "Own Them."],
  goldLine: 1,
  paragraphs: [
    "Imagine Morgan's Self-Directed 401(k) purchases land — the legal ownership must be established through the appropriate authorized retirement-plan arrangement. If the plan makes a private loan, the debt belongs to the plan, and any payments or sale proceeds belong to the plan. The participant cannot simply take them personally.",
  ],
  featured: "Self-direction can provide investment decision-making authority, but the assets remain retirement-plan property.",
  note: "Contributions, distributions, transfers, and expenses must comply with applicable rules — money cannot move informally between personal and plan accounts.",
};

export const relatedPartyAndPersonalService = {
  eyebrow: "Related-Party And Personal-Service Boundaries",
  heading: ["Self-Direction Gives You Choices.", "It Doesn't Remove These Boundaries."],
  steps: [
    {
      number: "Boundary One",
      title: "Family-Owned Property Or Family Borrowers",
      description:
        "Imagine Morgan's parent owns a vacant parcel, Morgan's spouse wants to borrow money, or a business controlled by Morgan needs financing. Those transactions can create prohibited-transaction concerns — a retirement plan cannot simply become a way to move personal or family transactions into a tax-advantaged account.",
    },
    {
      number: "Boundary Two",
      title: "Personally Improving Plan-Owned Land",
      description:
        "Imagine the plan owns the vacant parcel and Morgan wants to clear brush, build a fence, bring equipment, or perform other improvements personally. That can raise prohibited-transaction and service concerns when a disqualified person personally provides labor, property, or other benefits to the plan.",
    },
    {
      number: "Boundary Three",
      title: "Personally Servicing The Loan",
      description:
        "The plan may make a qualifying investment loan, but servicing it can involve payment processing, legal notices, borrower communications, modifications, collections, and collateral enforcement — the legal ability to hold a private loan and the legal authority to perform all servicing activities are separate questions.",
    },
  ],
  note: "Not every ordinary administrative action is necessarily prohibited — the actual services, role, compensation, and circumstances require review.",
};

export const taxValuationAndLiquidity = {
  eyebrow: "Financing, Tax, Valuation, And Liquidity",
  heading: ["Four Questions Every Strategy", "Eventually Raises."],
  goldLine: 1,
  paragraphs: [
    "If the $25,000 balance isn't enough for a desired property, retirement-plan borrowing raises additional legal and tax questions — related-party guarantees or extensions of credit may create prohibited-transaction issues, and debt-financed investment activities can affect unrelated business taxable income treatment. (The three main scenarios in this module use plan cash and no borrowing.) The tax treatment also depends on the actual investment activity: certain ordinary investment gains and interest may be treated differently from income generated through an actively conducted unrelated trade or business, and frequent real estate sales or dealer-type activity may require additional analysis — the retirement plan's tax treatment depends on the actual investment activities and structure, not just the label \"self-directed.\"",
    "Fair market value still matters after the purchase: two years after buying Meadowline Crossing for $16,500, its market value could be different, and if the loan borrower stops paying, the unpaid $18,000 principal may not reflect what the investment is actually worth if the probability of collection has declined — qualified retirement plans must appropriately value their assets. And liquidity is never guaranteed: land may be difficult to sell, a private note may not have a ready buyer, and a borrower may not repay early merely because the investor wants cash. The retirement plan could hold an asset with real value but limited available cash — owning an investment isn't the same as being able to turn it into cash whenever you want.",
  ],
};

export const closingReflection = {
  eyebrow: "Why This Starting Point Is So Interesting",
  heading: ["Twenty-Five Thousand Dollars Can Be", "More Than A Number On A Statement."],
  goldLine: 1,
  paragraphs: [
    "With a qualifying plan, $25,000 might potentially be used to purchase a small parcel of land, make a properly structured secured loan to an unrelated business, or hold more than one permitted investment. The money could create legal ownership of real estate, contractual payment rights, or a combination of investment assets and cash. Self-direction may let an eligible retirement-plan participant direct investments into permitted alternatives, but it doesn't make the property buyer appear, doesn't make a borrower repay, doesn't prevent unexpected costs, and doesn't make an investment increase in value.",
    "The outcomes might be favorable. They might be disappointing. And they might involve substantial losses. But the range of potential ownership structures is fascinating — self-direction can expand permitted investment choices, but it cannot guarantee what those investments will earn.",
  ],
  featured: "Your retirement account may have investment possibilities extending beyond the investments normally presented on a conventional brokerage screen.",
};

export const faqItems = [
  {
    question: "Can I invest $25,000 in a Self-Directed 401(k)?",
    answer: "A qualifying Self-Directed 401(k) may permit investments using $25,000 of available plan capital, subject to plan documents, applicable law, investment eligibility, transaction costs, and other requirements.",
  },
  {
    question: "Is $25,000 enough to start a Solo 401(k)?",
    answer: "There is no universal $25,000 account minimum associated with the term Solo 401(k). Eligibility depends on the business, plan requirements, and applicable retirement-plan rules, while individual providers may impose their own terms.",
  },
  {
    question: "Can a Self-Directed 401(k) buy land for $16,500?",
    answer: "Potentially, if an appropriate real estate investment is legally available, the plan permits it, and the transaction complies with applicable rules.",
  },
  {
    question: "Does buying vacant land guarantee appreciation?",
    answer: "No. Land values can rise or fall, and a parcel may be difficult to sell.",
  },
  {
    question: "Can my Solo 401(k) make an $18,000 loan?",
    answer: "Certain qualifying plans may make properly structured loans to unrelated third parties when the plan and applicable laws permit the transaction.",
  },
  {
    question: "Does a secured private loan mean the lender owns the property?",
    answer: "No. The borrower generally continues owning the property unless legal title changes through an appropriate transaction or process.",
  },
  {
    question: "What is a balloon payment?",
    answer: "A larger payment due at a specified time, often including remaining principal.",
  },
  {
    question: "Does real estate collateral guarantee repayment?",
    answer: "No. Collateral may be difficult to sell, legally defective, overvalued, or insufficient after claims and enforcement costs.",
  },
  {
    question: "What is loan-to-value?",
    answer: "A ratio comparing loan principal with an assumed collateral value.",
  },
  {
    question: "Does owning two investments guarantee diversification?",
    answer: "No. Two investments may be affected by the same market conditions or underlying risks.",
  },
  {
    question: "Can both land and private lending lose money at the same time?",
    answer: "Yes.",
  },
  {
    question: "Can my retirement plan lend money to my own company?",
    answer: "That can raise serious prohibited-transaction concerns because of the participant's relationship to the business.",
  },
  {
    question: "Can a $25,000 investment lose its entire value?",
    answer: "Depending on the investment and circumstances, a retirement plan can lose some or all of the capital committed to an investment.",
  },
  {
    question: "Does Roth Academy sell the land or private loans shown here?",
    answer: "No. All three investment strategies use fictional educational examples. Roth Academy helps eligible customers explore establishing qualifying Self-Directed 401(k) plans and understand potential investment categories.",
  },
];

export const references = [
  {
    title: "IRS: One-Participant 401(k) Plans",
    description: "Essential eligibility reference — the qualifying business, owner-only retirement-plan rules, contributions, and applicable reporting.",
    href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans",
  },
  {
    title: "IRS: Retirement-Plan Investment FAQs",
    description: "Essential investment authority reference — plan investments, prohibited transactions, and legal restrictions.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Third-Party Loans From Plans",
    description: "Essential private lending reference — qualified plans investing in third-party loans and loan valuation.",
    href: "https://www.irs.gov/retirement-plans/issue-snapshot-third-party-loans-from-plans",
  },
  {
    title: "IRS: Prohibited Transactions",
    description: "Essential related-party reference — property purchases, loans, personal benefits, and prohibited services.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS: Valuation of Plan Assets at Fair Market Value",
    description: "Essential valuation reference — valuing land, private loans, and other qualified-plan assets.",
    href: "https://www.irs.gov/retirement-plans/valuation-of-plan-assets-at-fair-market-value",
  },
  {
    title: "IRS: Publication 598",
    description: "Essential tax reference — UBTI, investment interest, debt-financed property, and real property financing exceptions.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "CFPB: Regulation Z Section 1026.3",
    description: "Business-purpose credit exemptions and determining the actual loan purpose.",
    href: "https://www.consumerfinance.gov/rules-policy/regulations/1026/3/",
  },
  {
    title: "Texas Property Code Chapter 51",
    description: "Texas foreclosure and real property security enforcement requirements.",
    href: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.51.htm",
  },
  {
    title: "Investor.gov: Asset Allocation and Diversification",
    description: "Concentration and the benefits and limitations of diversification.",
    href: "https://www.investor.gov/introduction-investing/getting-started/asset-allocation",
  },
  {
    title: "Investor.gov: Liquidity",
    description: "The difficulty of converting investments into cash.",
    href: "https://www.investor.gov/introduction-investing/investing-basics/glossary/liquidity-or-marketability",
  },
];

export const finalConversion = {
  heading: ["The Balance Is The Same.", "The Possibilities Are Different."],
  description:
    "Imagine having $25,000 — a small land investment, a private loan secured by real estate, two separate investments, or other qualifying opportunities. A properly structured Self-Directed 401(k) may potentially permit eligible investments beyond conventional stocks and funds. The possibilities are real investment categories, but the results are uncertain — land prices can fall, borrowers can default, legal expenses can increase, and private investments can be difficult to sell.",
  signature: "Explore whether a Self-Directed 401(k) fits your business, eligible retirement assets, and interest in qualifying real estate and private lending investments.",
};
