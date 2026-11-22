export const hero = {
  eyebrow: "Self-Directed 401(k) Learning Module",
  title: ["You Have $100,000.", "What Could Your Self-Directed", "401(k) Actually Own?"],
  goldLine: 2,
  description:
    "Imagine having $100,000 available in a qualifying retirement plan. You might invest it in conventional stocks and funds. But what if you wanted to explore something different? A small rental house. Several private loans to unrelated businesses. Or an eligible investment interest in a private company that owns commercial real estate. Those are three very different ways of investing — and a qualifying Self-Directed 401(k) may potentially permit investments like these, depending on the plan and applicable law.",
  whoItsFor:
    "For business owners and self-employed professionals with a meaningful retirement balance who have never compared direct ownership, private lending, and pooled private investments side by side.",
  primaryCta: { label: "Start My Self-Directed 401(k)" },
};

export const directAnswer = {
  eyebrow: "The Short Answer",
  heading: ["The Investment Type Determines", "What The Plan Owns.", "The Balance Alone Doesn't."],
  goldLine: 1,
  paragraphs: [
    "A qualifying Self-Directed 401(k) may permit investments in certain real estate, loans to unrelated third parties, and eligible private investment interests. With $100,000 of available plan assets, a person might explore direct rental property ownership, a portfolio of permitted private loans, or participation in a private real estate fund, depending on the plan, investment terms, and legal requirements.",
    "These investments create different legal rights, cash flows, expenses, tax considerations, liquidity risks, and potential losses. No return, loan repayment, rental income, or fund distribution is guaranteed.",
  ],
  featured: "A $100,000 retirement balance may be able to own an entire small property, several private debt investments, or a qualifying interest in a larger private real estate business. But those choices create very different rights and risks.",
};

export const eligibilityVsBalance = {
  eyebrow: "An Important Distinction",
  heading: ["Having $100,000 Available Is Not", "The Same Thing As Plan Eligibility."],
  goldLine: 1,
  paragraphs: [
    "A Solo 401(k), also called a one-participant 401(k), is generally designed for a qualifying business owner without employees who must be covered under the plan, other than an eligible spouse in appropriate circumstances. No universal $100,000 minimum applies to the term Solo 401(k) — eligibility depends on the business and applicable plan requirements, while individual providers may have their own terms. A $100,000 balance also doesn't automatically qualify a retirement plan for a private securities offering; plan eligibility and investor accreditation are separate legal questions.",
  ],
  featured: "I always thought $100,000 was simply an account balance. I never realized a qualifying retirement plan might use it to own real estate, make multiple private loans, or invest in a privately owned property portfolio.",
};

export const cameronStory = {
  eyebrow: "Meet Cameron",
  heading: ["$100,000 In Retirement Savings.", "Three Types Of Ownership Never Compared."],
  stories: [
    {
      label: "Illustrative Investor",
      headline: "Cameron understood ordinary investments, but \"real estate investing\" can describe very different things.",
      scenario:
        "Cameron is 46, operates an independent professional services business generating legitimate qualifying compensation, and has established an appropriately structured Self-Directed 401(k) with $100,000 of eligible retirement assets accumulated through lawful contributions, eligible rollovers, and prior investment results. Cameron is interested in real estate, but buying a house, lending to somebody else, and investing through a private real estate company create completely different legal relationships.",
      realization: "\"Could my retirement plan use $100,000 to explore more than one type of real estate-related investment?\"",
      risk: "Potentially. The actual plan documents, investor eligibility requirements, prohibited-transaction rules, legal structure, tax treatment, and financial circumstances determine which investments are permitted and available. Cameron is a fictional illustration, not personalized investment advice.",
    },
  ],
};

export const investmentObservatory = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The $100,000 Investment Observatory"],
  intro:
    "One hundred thousand dollars can mean different things in different investments — a house, a portfolio of loans, or a private fund interest. Each world starts with the same $100,000; none is a recommended combined portfolio, and a gain from one world never carries into another.",
  scenarios: [
    {
      key: "the-direct-owner",
      label: "The Direct Owner",
      status: "A residential rental property",
      description:
        "The plan purchases a fictional $79,000 rental house entirely with plan cash — an actual building, a real tenant, rent payments, and real property expenses. Value could be created through rental cash flow and an eventual favorable sale, and value could be lost through vacancies, unexpected repairs, or a weak resale market. Key legal consideration: the retirement plan may potentially own rental real estate, but being a landlord involves more than collecting rent.",
      figures: [
        { label: "What The Plan Might Own", value: "Direct rental real estate" },
        { label: "Amount Committed", value: "$79,000" },
        { label: "Additional Modeled Spending", value: "$13,000" },
        { label: "Cash Remaining", value: "$8,000" },
      ],
      statement: "A retirement plan may potentially own rental real estate, but being a landlord involves more than collecting rent.",
    },
    {
      key: "the-private-lender",
      label: "The Private Lender",
      status: "Four separate debt instruments",
      description:
        "Instead of purchasing a house, the plan makes four separate loans to unrelated businesses, each with its own principal, rate, and maturity. The plan doesn't own any business or collateral property directly — it holds contractual debt rights. Value could be created through collected interest and principal, and value could be lost if one or more borrowers default. Key legal consideration: a portfolio of private notes creates several repayment claims, but every borrower introduces a separate possibility of default.",
      figures: [
        { label: "What The Plan Might Own", value: "Four unrelated debt instruments" },
        { label: "Amount Committed", value: "$80,000" },
        { label: "Additional Modeled Spending", value: "$4,000" },
        { label: "Cash Remaining", value: "$16,000" },
      ],
      statement: "A portfolio of private notes creates several repayment claims, but every borrower introduces a separate possibility of default.",
    },
    {
      key: "the-private-fund-investor",
      label: "The Private Fund Investor",
      status: "An interest in a separate investment entity",
      description:
        "Instead of direct ownership or lending, the plan purchases a fictional $75,000 interest in a private real estate fund that holds three commercial properties. The plan doesn't directly own the buildings — it owns a legally defined investment interest in the fund entity. Value could be created through fund distributions and an eventual liquidation, and value could be lost if the fund's properties decline or the sponsor's decisions disappoint. Key legal consideration: owning an interest in a private real estate fund is different from directly owning the buildings held by that fund.",
      figures: [
        { label: "What The Plan Might Own", value: "A private fund investment interest" },
        { label: "Amount Committed", value: "$75,000" },
        { label: "Additional Modeled Spending", value: "$2,000" },
        { label: "Cash Remaining", value: "$23,000" },
      ],
      statement: "Owning an interest in a private real estate fund is different from directly owning the buildings held by that fund.",
    },
  ],
  tableColumns: [
    { label: "Amount Committed", index: 1 },
    { label: "Additional Spending", index: 2 },
    { label: "Cash Remaining", index: 3 },
  ],
  comparisonNote:
    "Three separate fictional approaches to a $100,000 starting balance. The table is not a recommendation to pursue any particular strategy — these are independent alternatives, not a combined portfolio. Costs are hypothetical and exclude general retirement-plan administrative fees and other applicable charges.",
  conclusion: "The investment type determines what the retirement plan owns. The account balance alone doesn't.",
};

export const rentalPurchaseCosts = {
  eyebrow: "World One: The Rental House",
  heading: ["The House Costs $79,000.", "The Plan Needs More Than $79,000."],
  intro:
    "Imagine a fictional two-bedroom rental home called Willow Cottage, in a fictional smaller-market community, purchased entirely with plan cash from an unrelated seller — no acquisition loan, no personal use, professional third-party management assumed. The property needs initial work before a tenant moves in, plus closing and due diligence expenses, and Cameron wants the plan to retain cash for future property obligations.",
  figures: [
    { label: "Purchase Price", value: "$79,000" },
    { label: "Closing, Title & Acquisition Review", value: "$5,000" },
    { label: "Initial Improvements & Rental Preparation", value: "$8,000" },
    { label: "Total Cash Spent Initially", value: "$92,000" },
    { label: "Starting Plan Cash", value: "$100,000" },
    { label: "Cash Retained", value: "$8,000" },
  ],
  disclaimer:
    "The plan spends $92,000 preparing the investment and retains $8,000 to help cover future expenses. The $8,000 is still plan cash — it is not automatically an expense. The home's actual fair market value is not assumed to equal the amount spent acquiring and preparing it.",
};

export const rentalOperatingBreakdown = {
  eyebrow: "The Second Signature Experience",
  heading: ["The House That Pays Its Own Bills"],
  intro:
    "Willow Cottage is rented for $1,200 per month. If every scheduled payment were collected for twelve months, gross rent could total $14,400 — but that full-occupancy figure is not what the base scenario assumes. The previous tenant moves out, the manager needs time to find a new unrelated tenant, and the property receives rent during eleven of the twelve months. An unrelated professional property manager charges a fictional 9% of actual collected rent, and the property has its own ongoing taxes, insurance, and routine maintenance.",
  figures: [
    { label: "Scheduled Full-Occupancy Rent (12 Months)", value: "$14,400" },
    { label: "Rent Collected (11 Paid Months)", value: "$13,200" },
    { label: "Property Management Fee (9%)", value: "$1,188" },
    { label: "Property Taxes", value: "$2,200" },
    { label: "Insurance", value: "$1,400" },
    { label: "Routine Repairs & Maintenance", value: "$1,250" },
    { label: "Owner-Paid Utilities & Miscellaneous", value: "$350" },
    { label: "Total Operating Expenses", value: "$6,388" },
    { label: "Operating Cash Remaining", value: "$6,812" },
    { label: "Total Plan Cash After The Year ($8,000 Reserve + Operating Cash)", value: "$14,812" },
  ],
  disclaimer:
    "Rent collected is not the same thing as money left after operating expenses. Under this fictional base-year scenario, Willow Cottage generates $6,812 of operating cash after its modeled property expenses. The plan still owns the rental house — $14,812 is its illustrative cash balance after the operating year, not its total asset value, a return-on-investment percentage, or an assumption of property appreciation.",
};

export const rentalYearComparison = {
  eyebrow: "The Third Signature Experience",
  heading: ["The $11,000 Roof Surprise"],
  intro:
    "Imagine Willow Cottage has a difficult year instead: the property only collects eight months of rent, the manager still earns its percentage of collected rent, taxes and insurance continue, routine maintenance is necessary, utility costs run higher during the vacancy — and then a roof inspection reveals that substantial replacement work is needed, adding an unexpected $11,000 repair. A rental house can produce rent and still consume more cash than it brings in.",
  scenarios: [
    {
      key: "base-year",
      label: "Base Year",
      status: "11 months of rent, no major repairs",
      description: "The property rents normally for eleven of twelve months, with only ordinary operating expenses.",
      figures: [
        { label: "Months With Collected Rent", value: "11" },
        { label: "Rent Collected", value: "$13,200" },
        { label: "Total Operating Expenses", value: "$6,388" },
        { label: "Operating Cash Result", value: "+$6,812" },
        { label: "Starting Reserve", value: "$8,000" },
        { label: "Ending Plan Cash", value: "$14,812" },
      ],
      statement: "Under this fictional base-year scenario, Willow Cottage generates $6,812 of operating cash after its modeled property expenses.",
    },
    {
      key: "difficult-year",
      label: "Difficult Year",
      status: "8 months of rent, plus an $11,000 roof repair",
      description: "The property rents for only eight months, utility and vacancy-related costs run higher, and an unexpected $11,000 roof repair becomes necessary.",
      figures: [
        { label: "Months With Collected Rent", value: "8" },
        { label: "Rent Collected", value: "$9,600" },
        { label: "Total Operating Expenses (Including $11,000 Roof Repair)", value: "$17,314" },
        { label: "Operating Cash Result", value: "-$7,714" },
        { label: "Starting Reserve", value: "$8,000" },
        { label: "Ending Plan Cash", value: "$286" },
      ],
      statement: "The same rental property can finish a difficult year with only $286 of its original $8,000 cash reserve remaining.",
    },
  ],
  tableColumns: [
    { label: "Rent Collected", index: 1 },
    { label: "Total Operating Expenses", index: 2 },
    { label: "Operating Cash Result", index: 3 },
    { label: "Ending Plan Cash", index: 5 },
  ],
  comparisonNote:
    "Two mutually exclusive fictional operating-year scenarios for the same unleveraged rental property. The property remains owned by the retirement plan in both scenarios. Figures do not include a property sale, depreciation, general plan administration costs, or changes in property market value. Operating cash is not the same as total investment return.",
  conclusion: "Owning a rental house can create cash flow. It can also create unexpected financial obligations.",
};

export const rentalPersonalUseAndManagement = {
  eyebrow: "Who The House Belongs To — And Who Runs It",
  heading: ["The Plan Owns The House.", "Cameron Can't Simply Use It Personally."],
  goldLine: 1,
  paragraphs: [
    "Imagine Cameron wants to spend a weekend at Willow Cottage, let a family member stay there, or personally use the property between tenants. That can raise prohibited-transaction concerns — the fact that Cameron directs the retirement-plan investments does not make the house personal property. A plan-owned rental property is an investment asset, not a personal home.",
    "And when the tenant calls because the plumbing needs repair, an unrelated professional manager coordinates the work and the plan's authorized investment arrangement pays the expense. Cameron should not assume personal labor, personal funds, or related-party services can be used casually — real estate ownership through a retirement plan requires a clear separation between investment oversight and personal use or services.",
  ],
};

export const fourNotePortfolio = {
  eyebrow: "World Two: The Four-Note Portfolio",
  heading: ["Four Businesses Borrow Money.", "Four Different Repayment Agreements."],
  intro:
    "Rather than purchasing a rental property, imagine the plan considers four separate private loans to four unrelated businesses, each documented with its own repayment agreement, maturity, and hypothetical interest rate. All four borrowers are assumed unrelated to Cameron and other disqualified persons, and the loans must comply with applicable lending, securities, usury, documentation, licensing, and retirement-plan rules. These are hypothetical investment terms, not loan offers or recommended rates.",
  figures: [
    { label: "Note A — Principal (6-Month Term, 9% Simple Interest)", value: "$20,000" },
    { label: "Note A — Scheduled Maturity Payment", value: "$20,900" },
    { label: "Note B — Principal (9-Month Term, 10% Simple Interest)", value: "$25,000" },
    { label: "Note B — Scheduled Maturity Payment", value: "$26,875" },
    { label: "Note C — Principal (12-Month Term, 11% Simple Interest)", value: "$20,000" },
    { label: "Note C — Scheduled Maturity Payment", value: "$22,200" },
    { label: "Note D — Principal (12-Month Term, 12% Simple Interest)", value: "$15,000" },
    { label: "Note D — Scheduled Maturity Payment", value: "$16,800" },
    { label: "Total Principal Advanced", value: "$80,000" },
    { label: "Initial Review & Documentation Costs (4 × $1,000)", value: "$4,000" },
    { label: "Cash Retained", value: "$16,000" },
  ],
  disclaimer:
    "The plan advances $80,000 across four unrelated loans, spends $4,000 on modeled transaction expenses, and retains $16,000 in cash. The $80,000 remains represented by debt assets, subject to appropriate valuation — it is not automatically an investment loss. A higher promised interest rate, like Note D's 12%, doesn't guarantee that the borrower will repay; the credit risk, repayment terms, security, borrower finances, and legal enforceability matter more than the nominal rate. None of these scheduled maturity payments is guaranteed — the actual cash arrives only if each borrower makes the payment.",
};

export const defaultDomino = {
  eyebrow: "The Fourth Signature Experience",
  heading: ["The Default Domino"],
  intro:
    "If every borrower performs, the portfolio collects $6,775 of interest, and after the $4,000 of initial transaction expenses the plan ends with more cash than it started with. But imagine instead that three borrowers repay everything while the fourth experiences serious financial problems — the retirement plan cannot collect the scheduled amount, and the borrower eventually pays only a fraction of what was owed. Three successful loans do not automatically offset the loss from one unsuccessful loan.",
  scenarios: [
    {
      key: "full-repayment",
      label: "Full Repayment",
      status: "All four borrowers pay in full",
      description: "All four notes are assumed fully collected by month twelve, with no additional servicing, collection, or enforcement expenses.",
      figures: [
        { label: "Total Principal Advanced", value: "$80,000" },
        { label: "Total Loan Receipts (Principal + Interest)", value: "$86,775" },
        { label: "Cash Retained", value: "$16,000" },
        { label: "Ending Plan Cash", value: "$102,775" },
        { label: "Simplified Change", value: "+$2,775" },
      ],
      statement: "If every borrower pays in full, the portfolio collects $6,775 of interest. After the $4,000 of initial transaction expenses, the plan ends with $2,775 more cash than it started with.",
    },
    {
      key: "one-default",
      label: "One Default",
      status: "Loans A, B, and C pay in full — Loan D defaults",
      description: "Loan D pays no contractual interest and eventually produces a net recovery of only $4,000 after all applicable collection and enforcement costs — an assumed lawful collection or settlement process, not automatic ownership of borrower property.",
      figures: [
        { label: "Total Principal Advanced", value: "$80,000" },
        { label: "Total Loan Receipts (A + B + C Paid, D Recovers $4,000)", value: "$73,975" },
        { label: "Cash Retained", value: "$16,000" },
        { label: "Ending Plan Cash", value: "$89,975" },
        { label: "Simplified Change", value: "-$10,025" },
      ],
      statement: "Even though three borrowers repay their loans, the default on the fourth leaves the retirement plan with $10,025 less cash than it started with.",
    },
  ],
  tableColumns: [
    { label: "Total Loan Receipts", index: 1 },
    { label: "Ending Plan Cash", index: 3 },
    { label: "Simplified Change", index: 4 },
  ],
  comparisonNote:
    "Two mutually exclusive fictional outcomes involving four loans to unrelated business borrowers. The rates and maturities are hypothetical. The default scenario assumes Loan D pays no interest and produces a $4,000 net recovery, while all other loans are paid in full. Loan eligibility, legal documentation, licensing, investment valuation, tax treatment, and appropriate collection procedures require review.",
  conclusion: "Several private loans may create different repayment opportunities, but the portfolio can still lose substantial money.",
};

export const loanDiversificationAndCollateral = {
  eyebrow: "Diversification, Collateral, And Who The Borrower Isn't",
  heading: ["Four Loans Are Not Automatically", "Diversified Or Secured."],
  goldLine: 1,
  paragraphs: [
    "Imagine all four borrowers operate in the same local market and depend on similar economic conditions — a recession, a property market decline, or a financing shortage could affect several of them at once. Even though the loans are legally separate, the risks may be related: four borrowers can create four separate obligations without creating four completely independent sources of risk.",
    "Some private loans are unsecured; others have specific collateral such as real estate, business equipment, or other legally transferable security interests. But the lender must understand what is actually pledged, its value, existing claims, the legal documentation, and the available enforcement remedies — a secured loan and an unsecured loan have different legal rights, but neither guarantees payment. And a third-party investment loan to an unrelated business is not the same thing as a participant borrowing from their own 401(k); those are distinct legal arrangements with different rules.",
  ],
};

export const ownershipElevator = {
  eyebrow: "The Fifth Signature Experience",
  heading: ["The Ownership Elevator"],
  leftLabel: "Direct Rental Property",
  rightLabel: "Private Fund Interest",
  rows: [
    { left: "The plan owns a deed to one specific property", right: "The plan owns a security or legal interest in a separate fund entity" },
    { left: "The plan is directly responsible for taxes, insurance, repairs, and management", right: "A fund manager or sponsor handles property-level decisions and expenses" },
    { left: "Concentrated in a single property", right: "Potential exposure to several properties pooled with other investors" },
    { left: "Rent flows directly to the plan, net of expenses", right: "Distributions depend on the fund's governing documents and decisions — never guaranteed" },
    { left: "The plan decides when to sell", right: "The sponsor generally controls property sales and the investor's exit timing" },
  ],
  footnote:
    "You can invest in real estate without directly owning every building. An investment in a real estate company isn't the same thing as holding a deed to one of its buildings — the plan doesn't automatically control the fund's property management or have the right to force a building sale. Actual governance and voting rights depend on the fund's documents. This is a conceptual comparison, not a recommendation that one structure is superior.",
};

export const fundInvestmentAmount = {
  eyebrow: "World Three: The Private Real Estate Fund",
  heading: ["A Fictional $75,000 Minimum.", "Can The Retirement Plan Participate?"],
  intro:
    "Imagine a fictional private investment entity called the Harborstone Industrial Income Fund — holding a small warehouse, a flex-industrial building, and a logistics property — conducting a lawful private securities offering with a fictional $75,000 investment minimum. The fund does not exist; no actual securities offering is being made, and no returns or distributions are promised. The retirement plan has $100,000, which may be sufficient to meet the stated dollar minimum, but the amount alone doesn't establish legal eligibility — the offering must permit the particular retirement-plan purchaser, and the purchaser must satisfy applicable investor qualification rules. For this educational example, assume the plan is otherwise legally eligible for the hypothetical offering.",
  figures: [
    { label: "Fund Interest", value: "$75,000" },
    { label: "Initial Independent Legal & Investment Review", value: "$2,000" },
    { label: "Total Initial Cash Spent", value: "$77,000" },
    { label: "Starting Plan Cash", value: "$100,000" },
    { label: "Cash Remaining", value: "$23,000" },
  ],
  disclaimer:
    "The plan purchases a $75,000 private investment interest, spends $2,000 on review, and retains $23,000 in cash under the fictional assumptions. Do not imply the plan qualifies for the offering merely because it has $100,000 — investor eligibility, accredited investor status if required, securities laws, and actual plan authority must be confirmed independently.",
};

export const fundDebtAndIncome = {
  eyebrow: "How The Fund Actually Makes (Or Loses) Money",
  heading: ["The Buildings May Collect Rent.", "The Fund May Also Owe Money On Them."],
  goldLine: 1,
  paragraphs: [
    "Imagine the fund acquires its properties using investor capital and some borrowed money. Loans may help finance the properties, but they also create interest payments, maturity dates, lender covenants, refinancing risk, and the possibility of foreclosure if obligations aren't met — a private real estate fund can own valuable properties while also owing money on them. If a retirement plan invests through a partnership-taxed private real estate entity, debt-financed income and unrelated business taxable income issues may arise; certain qualified retirement plans can qualify for specialized real-property debt-financing exceptions under Internal Revenue Code Section 514(c)(9), but the exceptions contain conditions and limitations and do not automatically apply to every fund.",
    "Tenants lease space in the buildings and the properties collect rent, but the fund or its property-owning entities may have expenses of their own — property management, maintenance, insurance, taxes, financing costs, professional services, reserves, and sponsor or fund management fees. Rent collected by the buildings doesn't automatically become a distribution to every fund investor: the investor's cash distributions are separate from the fund's gross property revenues, the fund may retain cash for expenses or future investments, and distributions aren't guaranteed. A fund manager may also have relationships with other businesses or service providers that create conflicts of interest — the actual legal documents and disclosures determine who controls the money and whose interests may conflict.",
  ],
};

export const distributionMirage = {
  eyebrow: "The Sixth Signature Experience",
  heading: ["The Distribution Mirage"],
  intro:
    "Imagine the fund distributes $1,500 to Cameron's retirement plan. That might feel like investment profit — but a fund distribution can have different economic and tax characteristics. The money may come from operating cash, a property sale, financing proceeds, a return of invested capital, or another source permitted under the governing documents. A payment from a private investment fund isn't automatically the same thing as profit earned.",
  figures: [
    { label: "Possible Source: Operating Cash", value: "From rent collected, net of expenses" },
    { label: "Possible Source: Property Sale Proceeds", value: "From a completed sale of fund assets" },
    { label: "Possible Source: Return Of Capital", value: "A return of money the investor originally contributed" },
    { label: "Possible Source: Other Permitted Sources", value: "Financing proceeds or other amounts under the fund documents" },
    { label: "Assumed Distribution Per Quarter", value: "$1,500" },
    { label: "Total Distributions Over Four Quarters", value: "$6,000" },
  ],
  disclaimer:
    "These are assumed payments, not a promised distribution schedule, and not every source listed is available or lawful under every fund arrangement. The plan receives $6,000 of cash distributions during the fictional first year — do not refer to this as guaranteed profit or an annualized investment yield. The source and tax characterization of any real payment must be evaluated on its own facts.",
};

export const fundOutcomes = {
  eyebrow: "Two Possible Fund Futures",
  heading: ["The Fund Eventually Liquidates.", "What Comes Back To The Plan?"],
  intro:
    "Imagine the fictional fund has operated for two years and then completes sales of its remaining investments, concluding the investor's position under its governing agreements. These are two mutually exclusive completed-investment outcomes, not a continuation of one another — actual private funds may operate far longer than two years, and the fund may never complete the assumed exit.",
  scenarios: [
    {
      key: "favorable",
      label: "Favorable Outcome",
      status: "Distributions plus a strong liquidation",
      description: "The fund makes four quarterly distributions during the first year and later completes a lawful liquidation, assumed net of all fund-level expenses, liabilities, and fees allocated to this interest, with no additional sponsor fee deducted in this simplified illustration.",
      figures: [
        { label: "Distributions Received", value: "$6,000" },
        { label: "Final Liquidation Proceeds", value: "$84,000" },
        { label: "Total Fund Receipts", value: "$90,000" },
        { label: "Retained Cash", value: "$23,000" },
        { label: "Ending Plan Cash", value: "$113,000" },
        { label: "Simplified Change", value: "+$13,000" },
      ],
      statement: "If the fictional fund makes the four distributions and later pays $84,000 in final liquidation proceeds, the retirement plan could finish with $113,000 in cash under the assumed completed-investment scenario.",
    },
    {
      key: "unfavorable",
      label: "Unfavorable Outcome",
      status: "No distributions, a weak liquidation",
      description: "The commercial property market weakens, a tenant leaves, operating costs increase, the properties become harder to sell, and debt obligations reduce what remains for equity investors. The fund eventually completes a lawful liquidation, but proceeds are far lower than expected.",
      figures: [
        { label: "Distributions Received", value: "$0" },
        { label: "Final Liquidation Proceeds", value: "$45,000" },
        { label: "Total Fund Receipts", value: "$45,000" },
        { label: "Retained Cash", value: "$23,000" },
        { label: "Ending Plan Cash", value: "$68,000" },
        { label: "Simplified Change", value: "-$32,000" },
      ],
      statement: "A private real estate fund can hold real buildings and still produce a substantial loss for its investors.",
    },
  ],
  tableColumns: [
    { label: "Total Fund Receipts", index: 2 },
    { label: "Ending Plan Cash", index: 4 },
    { label: "Simplified Change", index: 5 },
  ],
  comparisonNote:
    "Two mutually exclusive fictional private fund outcomes over a simplified two-year completed-investment period. The example assumes the plan is legally eligible for the offering. All figures are hypothetical. Fund-level expenses are assumed reflected in the payments received. Distributions, liquidity, liquidation, tax treatment, and investment results are not guaranteed.",
  conclusion: "A private fund may give the plan exposure to larger properties, but it can also expose the plan to sponsor decisions, debt, fees, illiquidity, and substantial losses.",
};

export const exitDoorThatIsntOpen = {
  eyebrow: "The Eighth Signature Experience",
  heading: ["The Exit Door That Isn't Open"],
  intro:
    "Imagine the retirement plan wants its money back from the fund — maybe the participant is approaching retirement, maybe the plan needs cash for an authorized purpose. But the private fund interest isn't listed on a public stock exchange, the investment documents may restrict transfers, the fund may not offer ordinary redemptions, other buyers may not be available, and the sponsor may not be required to sell the buildings when one investor wants to exit. A private investment can be valuable on paper while being difficult or impossible to convert into cash.",
  figures: [
    { label: "Legal Ownership", value: "The retirement plan holds an interest" },
    { label: "Market Price", value: "May be uncertain" },
    { label: "Transfer Rights", value: "May be restricted" },
    { label: "Redemption Rights", value: "Depend on governing documents" },
    { label: "Available Buyers", value: "Not guaranteed" },
    { label: "Exit Timing", value: "Uncertain" },
  ],
  disclaimer:
    "No fixed redemption date or standard term length should be assumed — not every fund operates the same way, and the fictional two-year liquidation scenario is not a typical private fund outcome. Some private investment arrangements also involve commitments to provide capital over time: depending on the governing agreement, an investor may be required to contribute additional money when properly called, and failure to meet that obligation can have significant consequences. The primary Harborstone illustration assumes the entire $75,000 is funded at the beginning with no additional capital calls — not every private fund requires one.",
};

export const fundEligibilityAndDocuments = {
  eyebrow: "Who Can Invest, And What The Documents Say",
  heading: ["The Property Photographs Show The", "Opportunity. The Documents Define", "The Investment."],
  goldLine: 1,
  paragraphs: [
    "Private funds raise capital under securities laws. Some offerings are limited to accredited investors; others may have additional eligibility requirements. The retirement plan is a separate legal investment arrangement under the relevant rules — the participant's personal financial situation doesn't automatically prove the plan qualifies for every offering, and the plan's $100,000 balance doesn't automatically establish investor eligibility.",
    "Beautiful warehouse photographs and a promising market story aren't the investment — the investment is defined by the governing documents: offering disclosures, the subscription agreement, the operating or partnership agreement, fund fees, management authority, distribution rights, transfer restrictions, capital commitments, reporting obligations, and risk disclosures. The investment is defined by the governing documents, not the photographs in a presentation.",
  ],
};

export const taxTreatmentDifferences = {
  eyebrow: "Tax Treatment Can Be Very Different",
  heading: ["The House, The Loans, And The Fund", "May Raise Different Tax Questions."],
  goldLine: 1,
  paragraphs: [
    "Direct rental real estate may produce rental income, and certain qualifying rents from real property are generally excluded from unrelated business taxable income, though exceptions can apply depending on services, business activities, and financing. Third-party private loans may produce interest, and certain ordinary investment interest income is generally excluded from UBTI, but a plan's actual lending activity and related-party circumstances may change the result. A private real estate fund may operate through a partnership, corporation, or other legal entity whose borrowing and activities may create pass-through tax considerations — a qualified retirement plan may be eligible for certain specialized exceptions concerning real property debt financing, subject to statutory conditions.",
  ],
  featured: "Two investments can both be connected to real estate while producing very different tax considerations inside a retirement plan.",
  note: "Do not assume every rental property's income is automatically tax-free, that a portfolio of private notes automatically avoids UBTI, or that every partnership investment is taxable — and traditional and Roth plan tax treatment are not automatically equivalent.",
};

export const planOwnsAssetsAndRelatedParty = {
  eyebrow: "Who Owns It, And Where The Boundaries Are",
  heading: ["The Investment Belongs To The Plan.", "Not To Cameron Personally."],
  steps: [
    {
      number: "Boundary One",
      title: "Related-Party Transactions",
      description:
        "If the tenant, borrower, seller, or fund manager is related to Cameron, prohibited-transaction rules can apply — selling property to the plan, renting plan property, borrowing money from the plan, or providing goods or services can all raise concerns. An investment doesn't become lawful simply because it is held through a retirement plan or a separate company.",
    },
    {
      number: "Boundary Two",
      title: "Personal Labor On Plan Property",
      description:
        "Cameron knows how to paint, replace fixtures, or repair plumbing — but personally furnishing services or property to a retirement-plan investment may raise prohibited-transaction concerns, even though Cameron owns the business sponsoring the plan.",
    },
    {
      number: "Boundary Three",
      title: "Personally Servicing The Loans",
      description:
        "Owning several notes doesn't automatically authorize every lending or collection activity — payments, borrower notices, modifications, collections, and collateral enforcement may involve licensing and regulatory compliance separate from the plan's ability to hold the debt investments.",
    },
  ],
  note: "The investment belongs to the plan — if the plan buys the rental house, makes the four loans, or purchases a private fund interest, the house, the notes, and the fund interest belong to the plan, and any proceeds belong to the plan. Cameron cannot simply redirect rent, loan payments, or fund distributions into a personal account.",
};

export const liquidityAndValuation = {
  eyebrow: "Value On Paper Versus Cash Today",
  heading: ["The House, The Loans, And The Fund", "Can All Have Value Without Being", "Easily Sold."],
  goldLine: 1,
  paragraphs: [
    "Imagine Cameron looks at the retirement plan after six months. The rental house still exists, the private loans are outstanding, and the fund still holds commercial property investments — but not all of those assets can immediately become cash. The rental house needs a buyer, the loans depend on repayment or resale, and the fund interest may be restricted. The value of an asset and its availability as cash are two different things, and a large retirement-plan asset balance doesn't automatically mean a large cash balance.",
    "Qualified retirement plans must also appropriately value their assets. A $79,000 house, an $80,000 loan portfolio, and a $75,000 fund subscription aren't automatically worth those amounts forever — the rental house's market value can rise or fall, a borrower can fall behind on a note, and a private fund's properties can decline. The amount an investment originally cost isn't necessarily what it is worth today, and fair-market-value reporting may require professional assistance for certain assets.",
  ],
};

export const capitalRealityBoard = {
  eyebrow: "The Ninth Signature Experience",
  heading: ["The Capital Reality Board"],
  intro:
    "All three paths begin with $100,000 of available plan cash. Here's how differently that same starting balance ended up across all three worlds — not to rank them, but to show how different the legal and financial realities became.",
  figures: [
    { label: "Direct Rental House — Initial Spending / Cash Retained", value: "$92,000 spent / $8,000 retained" },
    { label: "Direct Rental House — Base Year / Difficult Year Ending Cash", value: "$14,812 / $286 (house still owned, unsold)" },
    { label: "Four-Note Portfolio — Initial Spending / Cash Retained", value: "$84,000 spent / $16,000 retained" },
    { label: "Four-Note Portfolio — Full Repayment / One-Default Ending Cash", value: "$102,775 / $89,975 (all loans resolved)" },
    { label: "Private Fund — Initial Spending / Cash Retained", value: "$77,000 spent / $23,000 retained" },
    { label: "Private Fund — Favorable / Unfavorable Ending Cash", value: "$113,000 / $68,000 (fund interest liquidated)" },
  ],
  disclaimer:
    "A rental property's operating cash cannot be compared directly with the total cash from completed loan or fund investments while the property itself remains unsold — the rental figures reflect one operating year with the house still owned, while the note and fund figures reflect fully completed and resolved investments. Do not rank the three strategies based on these cash amounts, imply the rental property underperformed because it still has a large noncash asset, treat different holding periods as equivalent, or calculate a universal annual return from these scenarios. The highest hypothetical return isn't automatically the best choice — one requires direct property ownership and operating expenses, another involves borrower default risk, and another may have limited control and liquidity.",
};

export const closingReflection = {
  eyebrow: "Why This Comparison Is So Interesting",
  heading: ["One Hundred Thousand Dollars Can", "Create Different Kinds Of", "Investment Control."],
  goldLine: 1,
  paragraphs: [
    "The first world has an actual rental house. The second has four contractual debt claims. The third has an investment interest in a private company that holds commercial properties. The same amount of money enters each world, but the plan's legal rights change, the way money is received changes, the expenses change, the risks change, and the investor's ability to influence the outcome changes.",
    "A qualifying Self-Directed 401(k) may provide the flexibility to consider investment structures far beyond conventional brokerage securities, but each structure must be understood on its own terms — not because every investment is available, not because returns are guaranteed, and not because self-direction removes legal restrictions.",
  ],
  featured: "Your retirement plan may have the flexibility to consider more than securities traded on a conventional brokerage screen.",
};

export const faqItems = [
  {
    question: "Can a Self-Directed 401(k) invest $100,000 in alternative assets?",
    answer: "Certain qualifying plans may permit alternative investments involving real estate, private loans, and eligible securities, subject to the plan documents and applicable law.",
  },
  {
    question: "Does having $100,000 automatically make me eligible for a Solo 401(k)?",
    answer: "No. A qualifying business and the applicable plan requirements must be evaluated separately.",
  },
  {
    question: "Can my Solo 401(k) buy a rental house without a mortgage?",
    answer: "Potentially, if it has sufficient eligible plan cash and the transaction is otherwise permitted through the appropriate legal ownership arrangement.",
  },
  {
    question: "Does rent collected equal investment profit?",
    answer: "No. Property taxes, insurance, management, vacancies, repairs, and other costs can reduce or eliminate operating cash.",
  },
  {
    question: "Can the rental house lose money even when tenants pay rent?",
    answer: "Yes. Operating costs and unexpected repairs can exceed rent collected.",
  },
  {
    question: "Does having four private loans guarantee diversification?",
    answer: "No. The borrowers may face similar economic risks, and one or more loans may default.",
  },
  {
    question: "Can the plan lose money even if three of four borrowers repay?",
    answer: "Yes. The fictional portfolio loses $10,025 because the fourth loan's poor recovery outweighs the net gains from the successful loans.",
  },
  {
    question: "Does investing in a fund mean the plan owns the buildings directly?",
    answer: "Not automatically. It generally owns a security or legal interest in the fund entity.",
  },
  {
    question: "Is a $1,500 fund distribution necessarily investment profit?",
    answer: "No. The economic and tax characterization of distributions depends on their source and governing terms, and can include a return of capital.",
  },
  {
    question: "Can I withdraw from a private fund whenever I want?",
    answer: "Not necessarily. Transfers and redemptions may be restricted, and an available buyer or liquidity event is not guaranteed.",
  },
  {
    question: "Does my $100,000 Solo 401(k) automatically qualify as an accredited investor?",
    answer: "No. Accredited investor status depends on the applicable legal category and actual facts.",
  },
  {
    question: "Is the highest hypothetical return necessarily the best strategy?",
    answer: "No. The scenarios have different risks, holding periods, legal rights, costs, and liquidity.",
  },
  {
    question: "Does Roth Academy provide the rental house, loans, or fund investments?",
    answer: "No. All opportunities in this module are fictional educational examples. Roth Academy helps eligible customers explore establishing qualifying Self-Directed 401(k) plans and understand potential investment categories.",
  },
];

export const references = [
  {
    title: "IRS: One-Participant 401(k) Plans",
    description: "Essential for business eligibility and owner-only plan requirements.",
    href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans",
  },
  {
    title: "IRS: Retirement-Plan Investment FAQs",
    description: "Essential for plan investment authority and applicable restrictions.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Third-Party Loans From Plans",
    description: "Essential private lending reference — third-party loans, prohibited transactions, and loan valuation.",
    href: "https://www.irs.gov/retirement-plans/issue-snapshot-third-party-loans-from-plans",
  },
  {
    title: "IRS: Prohibited Transactions",
    description: "Essential related-party legal reference — property ownership, lending, services, and personal benefits.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS: Valuation of Plan Assets at Fair Market Value",
    description: "Essential valuation reference — real estate, private notes, and private fund interests.",
    href: "https://www.irs.gov/retirement-plans/valuation-of-plan-assets-at-fair-market-value",
  },
  {
    title: "IRS: Publication 598",
    description: "Essential tax reference — rents, interest, UBTI, debt-financed property, and the qualified-plan real estate financing exception.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "SEC: Private Funds",
    description: "Essential private fund legal reference — pooled capital, fund structures, and securities offerings.",
    href: "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/private-funds",
  },
  {
    title: "SEC: Accredited Investors",
    description: "Legal purchaser qualification for private offerings.",
    href: "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/accredited-investors",
  },
  {
    title: "Investor.gov: Private Equity Funds",
    description: "Essential private investment risk reference — illiquidity, fees, and private fund ownership structures.",
    href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/private-investment-funds/private-equity",
  },
  {
    title: "Investor.gov: Fund Distributions",
    description: "Essential distribution reference — the distinction between fund distributions, return of capital, and investment performance.",
    href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/fund-distributions-investor-bulletin",
  },
];

export const finalConversion = {
  heading: ["The Balance Is The Same.", "What You Own Can Be Completely Different."],
  description:
    "Imagine owning an entire rental house through a qualifying retirement plan, making several private loans to unrelated businesses, or purchasing an eligible interest in a private real estate fund. A house can produce rent, but it can also need an expensive roof. A private loan can pay interest, but the borrower can default. A private fund can own valuable commercial buildings, but it can also lose money, use debt, charge fees, and restrict investors from withdrawing their capital. Still, the possibilities are fascinating.",
  signature: "Explore whether a Self-Directed 401(k) fits your business, eligible retirement assets, and interest in qualifying real estate, private lending, and private market investments.",
};
