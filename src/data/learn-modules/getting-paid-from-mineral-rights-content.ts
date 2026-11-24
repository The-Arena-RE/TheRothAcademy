export const hero = {
  eyebrow: "GETTING PAID FROM MINERAL RIGHTS",
  title: ["What If Your IRA Could Receive", "Royalty Payments From Oil and Gas", "Produced Beneath the Ground?"],
  goldLine: 2,
  description:
    "Discover the fascinating world of mineral rights, oil and gas royalties, and how a retirement account might participate without personally drilling a well.",
  whoItsFor:
    "For IRA owners curious about mineral and royalty ownership, royalty decimals, production income, and why a check can shrink or stop even when the asset is still owned.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const surfaceVsMineralOwnership = {
  eyebrow: "THE FIRST BIG REVELATION",
  heading: ["You Can Own Rights Beneath the Land", "Without Owning the Land Above Them."],
  goldLine: 1,
  paragraphs: [
    "Imagine an eighty-acre property. Someone owns the pasture, maintains the fences, and uses the land. But a previous owner may have sold or reserved certain mineral rights — the surface and the minerals can belong to different people. Purchasing the surface doesn't automatically establish ownership of the minerals, and owning certain mineral rights doesn't necessarily mean owning the surface.",
    "Mineral rights are legal interests associated with specified minerals beneath land. A mineral interest may include rights to lease, receive royalties, or participate in development — but the exact rights depend on the legal documents and applicable law, and two interests that look similar on paper can provide very different rights.",
  ],
  featured: "Surface Ownership and Mineral Ownership Can Be Two Different Legal Interests.",
};

export const jamesStory = {
  eyebrow: "MEET JAMES",
  heading: ["James Has $320,000 in His IRA.", "He's Never Owned an Oil Well."],
  stories: [
    {
      label: "THE INVESTOR",
      headline: "A Regional Sales Director, 52, Exploring Mineral Ownership for the First Time",
      scenario:
        "James has driven through oil-producing areas for years — pumpjacks, tank batteries, pipelines, drilling rigs — without ever understanding who receives the money. He assumed you had to own an oil company. He has $320,000 of available cash in a traditional IRA and, for this illustration, an appropriate Self-Directed IRA arrangement whose custodian supports the exact type of mineral interest being considered. The investment is purchased with IRA cash, no financing is used, and no Roth conversion occurs.",
      realization:
        "Could an IRA own a mineral or royalty interest without operating the wells? How is the royalty percentage calculated? What if production declines — and how does the money actually reach the retirement account?",
      risk:
        "Illustrative hypothetical example. The transaction has no prohibited relationship involving James or another disqualified person.",
    },
  ],
};

export const fiveInterestTypes = {
  eyebrow: "THE FIVE DIFFERENT INTERESTS",
  heading: ["Mineral, Royalty, and Working", "Interests Are Not the Same."],
  steps: [
    { number: "01", title: "Mineral Interest", description: "An ownership interest in specified minerals, potentially accompanied by certain leasing and other rights. The precise rights depend on the deed, lease, state law, and any severance or reservation." },
    { number: "02", title: "Lease Royalty Interest", description: "A right to receive a defined portion of qualifying production proceeds under the applicable lease. The amount and deductions depend on the agreement and law." },
    { number: "03", title: "Nonparticipating Royalty Interest", description: "A royalty right that generally does not carry the same leasing or executive rights as a full mineral ownership interest. The governing instrument determines the specifics." },
    { number: "04", title: "Overriding Royalty Interest", description: "A royalty-type interest commonly carved from a leasehold interest, whose duration may be tied to the underlying lease." },
    { number: "05", title: "Working Interest", description: "An operating interest associated with the development and production of oil or gas, which may involve responsibility for drilling, operating, and other costs." },
  ],
  note: "Receiving a passive royalty is not the same as being responsible for operating an oil well — and the IRS distinguishes qualifying mineral royalties from working interests that bear development and operating cost obligations.",
};

export const cedarBasinProfile = {
  eyebrow: "MEET CEDAR BASIN MINERALS",
  heading: ["Ten Net Mineral Acres. One Producing Unit.", "A Small Share of Production."],
  intro:
    "A fictional mineral investment used to illustrate how royalty ownership might work inside a Self-Directed IRA.",
  figures: [
    { label: "Property Name", value: "Cedar Basin Minerals" },
    { label: "Location", value: "Fictional Oil-Producing Area of Texas" },
    { label: "Underlying Surface Tract", value: "80 Gross Acres" },
    { label: "Mineral Interest Acquired", value: "10 Net Mineral Acres" },
    { label: "Purchase Price", value: "$140,000" },
    { label: "Total Initial Expenditure", value: "$145,000" },
  ],
  disclaimer:
    "Cedar Basin Minerals is entirely fictional. The purchase price is not a market quote, and no actual producing well or mineral investment is available through this lesson.",
};

export const netMineralAcresAndUnit = {
  eyebrow: "GROSS ACRES VS. NET MINERAL ACRES",
  heading: ["What If Production Comes", "From a 640-Acre Unit?"],
  intro:
    "Mineral ownership can be divided into fractions — someone may own all the minerals under a tract, another only half, a third one-eighth. Oil and gas production can also be pooled across a much larger unit than any single owner's tract.",
  figures: [
    { label: "Producing Unit Size", value: "640 Acres (Fictional Pooled Unit)" },
    { label: "IRA Net Mineral Acres", value: "10" },
    { label: "Existing Lease Royalty Rate", value: "20%" },
    { label: "IRA's Share of Unit Acreage (10 ÷ 640)", value: "1.5625%" },
  ],
  disclaimer:
    "Net mineral acreage reflects a legal ownership fraction, not a separately fenced section of land — the mineral rights are undivided across the tract, and other owners hold the remaining interests.",
};

export const royaltyDecimalCalc = {
  eyebrow: "THE ROYALTY PERCENTAGE REVELATION",
  heading: ["A 20% Lease Royalty Doesn't Mean", "the IRA Receives 20% of the Unit's Sales."],
  intro:
    "The lease says twenty percent — that sounds enormous. But James's IRA owns only a fraction of the mineral interests in a much larger unit, so its actual share of eligible production proceeds is far smaller.",
  figures: [
    { label: "Step One: IRA Share of Unit Acreage (10 ÷ 640)", value: "1.5625%" },
    { label: "Step Two: Multiply by Lease Royalty Rate", value: "× 20%" },
    { label: "Final Royalty Decimal", value: "0.003125" },
    { label: "Equivalent Percentage", value: "0.3125%" },
  ],
  disclaimer:
    "This is a teaching calculation. The actual payable decimal must be verified against title records, leases, unit documents, and any applicable adjustments — this formula does not work without modification for every property.",
};

export const royaltyJourney = {
  eyebrow: "THE ROYALTY JOURNEY",
  heading: ["Follow One Royalty Payment From", "the Producing Formation to the IRA."],
  intro:
    "The journey shows the difference between physical production and the legal right to receive a payment — the IRA does not own the entire well, and James is not the drilling operator.",
  decisions: [
    {
      key: "legal-interest",
      label: "The Legal Interest",
      status: "review" as const,
      statusLabel: "A Documented Ownership Right",
      action: "The IRA Owns an Interest in the Minerals, Not the Surface Pasture.",
      explanation:
        "The surface owner may use the land for ordinary permitted purposes. The mineral estate may be owned by different parties, the operator has particular rights under the applicable lease and regulatory arrangements, and the IRA owns a qualifying interest in the mineral estate. Those legal arrangements are why the IRA might be entitled to royalty payments at all.",
      takeaway: "The Royalty Starts With a Legally Established Ownership Interest, Not With the Physical Appearance of the Land.",
    },
    {
      key: "production",
      label: "The Production",
      status: "review" as const,
      statusLabel: "An Independent Operator's Responsibility",
      action: "An Independent Operator Produces Oil and Gas. The IRA Doesn't Operate the Well.",
      explanation:
        "An independent company operates the well, handling responsibilities assigned under its legal and regulatory arrangements — drilling, production operations, equipment, and associated costs. James's IRA holds a mineral interest entitled to a passive lease royalty; it is not the working-interest operator and does not assume development or operating cost obligations.",
      takeaway: "The Operator Produces the Resources. The IRA's Payment Rights Depend on Its Mineral Ownership and Lease.",
    },
    {
      key: "sale",
      label: "The Sale",
      status: "review" as const,
      statusLabel: "From Production to Proceeds",
      action: "Unit Sales of $900,000 Multiplied by the 0.003125 Royalty Decimal Equal a Gross Royalty of $2,812.50.",
      explanation:
        "Oil and gas have commercial value because buyers purchase them, and the amount generated depends on production volume, actual sales prices, product type, quality adjustments, and the governing contractual valuation method. In this simplified example, the entire fictional producing unit generates $900,000 of eligible gross sales proceeds for one production month — multiplied by the IRA's 0.003125 royalty decimal, that's a gross royalty of $2,812.50, before any deductions.",
      takeaway: "Even a Tiny Ownership Percentage Can Represent a Real Dollar Amount When Qualifying Production Generates Sales.",
    },
    {
      key: "payment",
      label: "The Payment",
      status: "review" as const,
      statusLabel: "After Deductions and Taxes",
      action: "After a Fictional 15% Combined Deduction, the IRA's Net Payable Amount Is $2,390.62.",
      explanation:
        "A royalty statement may include taxes, adjustments, or contractually permitted deductions. In this illustration, combined authorized deductions and taxes equal 15% of the $2,812.50 gross royalty — about $421.88 — leaving $2,390.62 payable. That net amount, not the gross royalty, is what actually moves into the appropriate Self-Directed IRA arrangement.",
      takeaway: "The Important Number Is Not Just the Gross Royalty. It's What the IRA Is Legally Entitled to Receive and Actually Collects.",
    },
  ],
  note: "The 15% combined adjustment is a fictional assumption, not a universal severance tax rate — actual charges vary by jurisdiction, lease, production type, and payment arrangement.",
};

export const royaltyStatementAndTiming = {
  eyebrow: "THE ROYALTY CHECK STUB",
  heading: ["What Does an Oil and Gas Royalty", "Statement Actually Tell You?"],
  goldLine: 1,
  paragraphs: [
    "A royalty statement may identify the production month, payment month, royalty decimal, gross royalty, authorized deductions, and net payment. The production month and the actual payment month may differ — production must be reported, sales accounted for, and ownership shares calculated before a payor sends money, and some payments may be held in suspense while title or other issues are resolved.",
    "Oil and gas royalty payments don't necessarily arrive the moment production occurs. Imagine production happens in February — the associated payment may not arrive until a later month, and the exact timing depends on state law and the governing agreements. A royalty statement is a financial explanation of a payment, not proof that production or income will continue.",
  ],
  featured: "Royalty Income Associated With Production Is Not Available IRA Cash Until It Is Actually Received.",
};

export const productionDeclineIntro = {
  eyebrow: "THE PRODUCTION DECLINE",
  heading: ["What If the Well Produces Less", "Oil and Gas Over Time?"],
  goldLine: 1,
  paragraphs: [
    "A well's production can change. Some wells produce strongly early in their lives, then decline — a well may require maintenance, be temporarily shut in, or commodity prices may change, and production might eventually stop. That means royalty payments may not remain constant, and a payment received during a strong production period is not necessarily representative of future payments.",
  ],
  featured: "A Royalty Check Can Shrink Even When the IRA Still Owns the Same Mineral Interest.",
};

export const threeRoyaltyRealities = {
  eyebrow: "THE FIRST-YEAR ROYALTY STORY",
  heading: ["Three Royalty Income", "Realities."],
  intro:
    "The same mineral interest, the same lease — but three independent fictional outcomes for the year following James's $145,000 purchase.",
  scenarios: [
    {
      key: "base-production",
      label: "Base Production Year",
      status: "Declining but Steady Production",
      description:
        "Unit sales start at $900,000 a month and decline across the year — $900,000 in months 1–3, $700,000 in months 4–6, $500,000 in months 7–9, and $300,000 in months 10–12 — producing $22,500 of gross royalties for the full year, all assumed received within the modeled twelve months.",
      figures: [
        { label: "Gross Royalties", value: "$22,500" },
        { label: "Modeled Royalty Adjustments", value: "$3,375" },
        { label: "Net Royalty Cash Received", value: "$19,125" },
        { label: "Additional Owner Expenses", value: "$1,125" },
        { label: "Net IRA Cash Movement", value: "+$18,000" },
        { label: "Available IRA Cash After Year", value: "$193,000" },
      ],
      statement: "The IRA Received $19,125 in Royalty Cash. After Additional Modeled Expenses, $18,000 Remained.",
    },
    {
      key: "lower-sales",
      label: "Lower-Sales Year",
      status: "Prices Fall, Volumes Unchanged",
      description:
        "Assume eligible unit sales proceeds for the full year are half the base case — representing lower prices under otherwise unchanged volumes, solely for illustration. The mineral ownership never changes; only the economics do.",
      figures: [
        { label: "Gross Royalties", value: "$11,250" },
        { label: "Modeled Royalty Adjustments", value: "$1,687.50" },
        { label: "Net Royalty Cash Received", value: "$9,562.50" },
        { label: "Additional Owner Expenses", value: "$1,125" },
        { label: "Net IRA Cash Movement", value: "+$8,437.50" },
        { label: "Available IRA Cash After Year", value: "$183,437.50" },
      ],
      statement: "The Mineral Ownership Stayed the Same. The Money Received Changed Because the Economics Changed.",
    },
    {
      key: "no-production",
      label: "No-Production Year",
      status: "Well Shut In or Uneconomic",
      description:
        "Assume no qualifying production occurs during the modeled year, and the lease provides no payment actually received during that period. The IRA still owns the mineral interest, but ownership expenses continue regardless.",
      figures: [
        { label: "Gross Royalties", value: "$0" },
        { label: "Modeled Royalty Adjustments", value: "$0" },
        { label: "Net Royalty Cash Received", value: "$0" },
        { label: "Additional Owner Expenses", value: "$1,125" },
        { label: "Net IRA Cash Movement", value: "-$1,125" },
        { label: "Available IRA Cash After Year", value: "$173,875" },
      ],
      statement: "The IRA Can Still Own the Minerals While Receiving No Royalty Income.",
    },
  ],
  tableColumns: [
    { label: "Net IRA Cash Movement", index: 4 },
    { label: "Available IRA Cash After Year", index: 5 },
  ],
  comparisonNote:
    "All three scenarios are independent and use the same $145,000 initial acquisition and $175,000 starting available IRA cash after acquisition. They assume no separate personal distributions, and they do not establish the mineral asset's current value or forecast future production.",
  conclusion: "Royalties Can Arrive, Shrink, or Stop. The Legal Ownership Interest May Continue.",
};

export const totalIraPositionAfterYearOne = {
  eyebrow: "THE TOTAL IRA POSITION",
  heading: ["What Does the Account Look Like", "After the Base-Case Year?"],
  intro:
    "Royalty cash and the mineral asset itself are two separate things on the IRA's books.",
  figures: [
    { label: "Available IRA Cash (Base-Case Year)", value: "$193,000" },
    { label: "Mineral Interest", value: "Owned — Current Fair Market Value Unknown" },
  ],
  disclaimer:
    "The mineral asset's current value is not automatically equal to its original purchase price — it may be worth more, it may be worth less, and it may be difficult to sell.",
};

export const newWellsAndLeaseBonus = {
  eyebrow: "NEW WELLS AND LEASE BONUSES",
  heading: ["Could Additional Production or a New", "Lease Create More Royalty Income?"],
  goldLine: 1,
  paragraphs: [
    "A mineral interest may be associated with a unit that has one or more wells, and additional wells may create additional production. But that does not mean every mineral owner automatically receives payments from every new well drilled nearby — the legal ownership, lease terms, unit arrangements, depths, formations, and allocation rules all matter. A drilling permit is not a guarantee a well will be drilled, and a producing well is not a guaranteed profitable one.",
    "In certain circumstances, a mineral owner may also negotiate a new lease involving a signing bonus and future royalty rights — but not every mineral owner holds executive leasing rights, and some interests are already leased. Cedar Basin Minerals is already leased and associated with existing production, so the main financial illustration assumes no new lease bonus is received. Lease bonuses, delay rentals, royalties, and operating income can have different legal and tax characteristics.",
  ],
};

export const leaseControlsRoyalty = {
  eyebrow: "THE DOCUMENTS BEHIND THE ROYALTY",
  heading: ["A Mineral Deed Tells One Story.", "The Oil and Gas Lease Tells Another."],
  goldLine: 1,
  paragraphs: [
    "A mineral owner may have legal title to certain rights, but the oil and gas lease defines how those rights are developed and how royalties are calculated — covered formations and depths, the royalty fraction, lease term, shut-in provisions, pooling authority, valuation method, and post-production cost deductions. A mineral deed, existing lease, unit document, and division order may each provide necessary information, but none should be assumed to answer every question alone.",
    "Payors use division orders to identify royalty owners and their payment interests — owner information, property identification, and the fractional or decimal interest. The royalty owner should verify that calculation against the actual legal documents; a payor can make mistakes, an investor can misunderstand a fraction, and a seller may misstate ownership.",
  ],
  featured: "A Royalty Decimal Is Small Enough to Overlook and Important Enough to Change the Entire Investment.",
};

export const titleProblemAndSellerChecks = {
  eyebrow: "DUE DILIGENCE BEFORE PURCHASE",
  heading: ["What If the Seller Doesn't Actually Own", "the Mineral Rights Being Offered?"],
  goldLine: 1,
  paragraphs: [
    "Mineral rights can be divided, inherited, reserved, assigned, and transferred across generations, and the records can become complicated. A person may believe they own a larger interest than the title supports, another owner may have reserved rights decades earlier, or the seller may have no valid right to convey the interest being advertised. A seller's royalty check does not automatically prove that all the rights being advertised are valid or transferable.",
    "A seller may also show historical royalty statements — useful, but not proof that payments will continue. The well may be declining, prices may have been higher, or the seller may own additional interests not included in the proposed sale. Yesterday's royalty check is not a promise about tomorrow's check.",
  ],
  featured: "A Mineral Investment Begins With Title. Without the Promised Rights, the Projected Royalty Payments May Be Meaningless.",
};

export const priceAndPostProductionCosts = {
  eyebrow: "VALUE AND DEDUCTIONS",
  heading: ["Why Did the Check Get Smaller", "if the Well Produced the Same Amount?"],
  goldLine: 1,
  paragraphs: [
    "A royalty payment can change because production changes, but it can also change because the value of the production changes — oil and gas are commodities, their prices move, and sales contracts and quality adjustments affect realized value. A well producing the same physical quantity may generate different sales proceeds in different periods, with no fixed percentage relationship to any published benchmark price.",
    "Certain royalty arrangements may also allow specified post-production deductions — gathering, processing, transportation, or other expenses, depending on the contract and applicable law. A royalty interest may be free from drilling and operating expenses while still being affected by these post-production charges and severance taxes; not every deduction on a statement is automatically lawful, and the actual rights and state law control.",
  ],
};

export const workingInterestExplainer = {
  eyebrow: "WHAT IS A WORKING INTEREST?",
  heading: ["Owning a Royalty Is Different From", "Paying to Drill and Operate a Well."],
  goldLine: 1,
  paragraphs: [
    "Some oil and gas investments involve working interests, which provide economic participation but may also include responsibility for drilling, completing wells, producing hydrocarbons, field operations, equipment, repairs, and other costs — obligations that can be substantial. The IRS generally excludes qualifying mineral royalties from unrelated business taxable income, but an interest that bears development or operating cost obligations may not qualify for that exclusion.",
    "James's IRA is modeled as acquiring a passive mineral interest entitled to royalties under an existing lease. It does not participate as the working-interest operator.",
  ],
  featured: "A Royalty Interest Can Be a Very Different Investment From an Operating Interest in the Well.",
};

export const ubitTaxTreatment = {
  eyebrow: "ARE MINERAL ROYALTIES TAXED DIFFERENTLY?",
  heading: ["Qualifying Mineral Royalties Are Generally", "Excluded From UBTI — But Not Every Arrangement Is."],
  goldLine: 1,
  paragraphs: [
    "Under federal unrelated business taxable income rules, qualifying mineral royalties are generally excluded from UBTI — relevant to a properly structured passive royalty interest. But other arrangements can produce different results: a working interest bearing operating costs, debt financing used to acquire the asset, an IRA invested in an operating partnership, or certain production-payment structures can each raise separate tax questions requiring their own analysis.",
    "A retirement account is also not the same as an investment owned directly by an individual. James cannot automatically treat IRA-owned mineral property as his personal asset for tax deduction purposes — oil and gas tax discussions often mention depletion and drilling-cost deductions, but those personal benefits don't automatically pass through from an IRA-owned investment.",
  ],
  featured: "The Difference Between Owning a Passive Royalty and Bearing Operating Costs Can Materially Affect the IRA's Tax Treatment.",
};

export const rentFlowToIRA = {
  eyebrow: "WHO RECEIVES THE MONEY?",
  heading: ["The Royalty Payment Belongs to", "the IRA, Not James Personally."],
  goldLine: 1,
  paragraphs: [
    "If the mineral interest belongs to the Self-Directed IRA, the legitimate royalties belong to the retirement account, and the payor's ownership and payment records must reflect that correct legal arrangement. James shouldn't simply have royalty checks sent to his personal checking account, nor personally pay investment obligations and assume the account can later reimburse him without consequence.",
  ],
  featured: "The IRA Owns the Interest. The IRA Receives the Investment's Royalty Payments.",
};

export const suspensePayments = {
  eyebrow: "WHAT IF PAYMENTS ARE HELD IN SUSPENSE?",
  heading: ["The Well Produces Oil. Why Isn't", "the IRA Receiving Its Royalties?"],
  goldLine: 1,
  paragraphs: [
    "A payor may suspend royalty payments over questions about title, conflicting ownership claims, missing or incorrect documentation, unresolved inheritance records, or other legally recognized reasons — the exact rules depend on the jurisdiction and agreement. A suspended amount is not cash the IRA has received, and resolving the issue may require appropriate professional assistance.",
  ],
};

export const valuationQuestion = {
  eyebrow: "WHAT MAKES A MINERAL INTEREST VALUABLE?",
  heading: ["What Makes a Mineral Interest", "Worth $140,000?"],
  goldLine: 1,
  paragraphs: [
    "Mineral interests can be difficult to value — title, mineral acreage, lease royalty rate, existing production, historical royalties, decline expectations, commodity prices, well condition, operator quality, geological uncertainty, and remaining economic life can all factor in. The investment's value is not automatically equal to the next twelve months of royalties multiplied by a simple number, and different buyers may reach different valuations.",
    "The proposed $140,000 purchase price for Cedar Basin Minerals is an invented educational assumption, with no independent appraisal provided — it should not be described as a bargain or as fair market value.",
  ],
};

export const resaleAndOutcomesIntro = {
  eyebrow: "WHAT IF THE IRA SELLS THE MINERAL INTEREST?",
  heading: ["The IRA May Receive Royalties", "and Later Sell the Ownership Interest."],
  goldLine: 1,
  paragraphs: [
    "A mineral or royalty investment may generate cash while held, and the interest may also be sold — but selling can be difficult. A mineral interest is not publicly traded merely because it has produced regular royalty payments; the buyer must understand what rights are being conveyed, production may be declining, the market may be thin, and the sale process can involve title review and transaction expenses.",
  ],
  featured: "Royalties and Resale Proceeds Are Two Separate Potential Sources of Investment Cash, and Neither Is Guaranteed.",
};

export const threeOwnershipOutcomes = {
  eyebrow: "THE FAVORABLE AND UNFAVORABLE SALE",
  heading: ["Three Possible Endings for the", "Same Mineral Interest."],
  intro:
    "Each scenario starts from the same $145,000 purchase and the same base-case first year of $18,000 net royalty cash.",
  scenarios: [
    {
      key: "favorable-sale",
      label: "Favorable Sale",
      status: "Royalties Plus a Strong Resale",
      description:
        "The mineral interest is sold for $165,000 after $6,000 of selling expenses — net proceeds of $159,000 — on top of the base-case first year of royalty income.",
      figures: [
        { label: "Initial Investment Expenditure", value: "$145,000" },
        { label: "First-Year Net Cash Movement", value: "+$18,000" },
        { label: "Net Sale Proceeds", value: "$159,000" },
        { label: "Overall Realized Cash Gain / Loss", value: "+$32,000" },
        { label: "Ending Available IRA Cash", value: "$352,000" },
      ],
      statement: "The Investment Could Potentially Benefit From Royalties and a Later Sale, but the Result Depends on the Actual Receipts and Transaction Costs.",
    },
    {
      key: "unfavorable-sale",
      label: "Unfavorable Sale",
      status: "Royalties, Then a Weak Resale",
      description:
        "The same base-case first year is followed by a sale for only $85,000 after $5,000 of selling expenses — net proceeds of $80,000, well below the original $145,000 investment.",
      figures: [
        { label: "Initial Investment Expenditure", value: "$145,000" },
        { label: "First-Year Net Cash Movement", value: "+$18,000" },
        { label: "Net Sale Proceeds", value: "$80,000" },
        { label: "Overall Realized Cash Gain / Loss", value: "-$47,000" },
        { label: "Ending Available IRA Cash", value: "$273,000" },
      ],
      statement: "Receiving Royalty Checks Doesn't Guarantee the Mineral Investment Will Make Money.",
    },
    {
      key: "remains-owned",
      label: "Interest Remains Owned",
      status: "No Completed Sale",
      description:
        "The IRA keeps the mineral interest rather than selling it. Buyers may be cautious, the well may be declining, or ownership records may be complicated — a valuation estimate is not the same as a buyer willing to pay it.",
      figures: [
        { label: "Initial Investment Expenditure", value: "$145,000" },
        { label: "First-Year Net Cash Movement", value: "+$18,000 (Base Case)" },
        { label: "Net Sale Proceeds", value: "No Completed Sale" },
        { label: "Overall Realized Cash Gain / Loss", value: "Not Calculated" },
        { label: "Ending Available IRA Cash", value: "$193,000 Plus Mineral Asset" },
      ],
      statement: "A Mineral Interest Can Remain Owned by the IRA Even When It Produces Little Income and Has Limited Resale Demand.",
    },
  ],
  tableColumns: [
    { label: "Overall Realized Cash Gain / Loss", index: 3 },
    { label: "Ending Available IRA Cash", index: 4 },
  ],
  comparisonNote:
    "These scenarios are independent alternatives. The two sale examples use the same first-year base royalty receipts; the unsold scenario does not claim a completed-sale gain, and no asset fair market value has been established. The figures exclude possible IRA-level taxes and other unmodeled expenses.",
  conclusion: "The Mineral Interest Might Produce Cash, Gain Value, Lose Value, or Become Difficult to Sell.",
};

export const operatorAndVerification = {
  eyebrow: "THE OPERATOR MATTERS",
  heading: ["A Mineral Owner May Not Operate", "the Well, but the Operator Still Matters."],
  goldLine: 1,
  paragraphs: [
    "The operator's financial strength and operating practices can affect the investment environment — poor production performance, financial distress, operational interruptions, regulatory violations, payment administration issues, and bankruptcy are all possible problems. The royalty owner should not assume that a large operator name guarantees future payments; the operator is not the same as the royalty owner.",
    "Investors don't have to take a seller's word for every production number. State oil and gas regulators may provide public information about wells, operators, permits, and reported production — for the fictional Texas example, the Railroad Commission of Texas maintains online research tools. A drilling permit is not a guarantee a well will be drilled, a drilled well is not automatically a producing well, and reported production does not automatically establish the royalty owner's payment amount.",
  ],
};

export const noProductionAndRegulatoryRisk = {
  eyebrow: "UNDEVELOPED MINERALS AND REGULATORY RISK",
  heading: ["What If the Minerals Have", "Never Produced a Dollar?"],
  goldLine: 1,
  paragraphs: [
    "Not every mineral interest is associated with active production — an owner may hold rights beneath land where no well has ever been drilled. The interest might become valuable if future development occurs, but development may never happen, resources may not be commercially recoverable, and an unproducing mineral interest may generate no royalty income indefinitely. Cedar Basin Minerals assumes an existing producing interest; an undeveloped mineral investment involves different and often greater uncertainties.",
    "Oil and gas activities also operate under federal, state, and sometimes local legal requirements covering drilling permits, well construction, waste handling, environmental protection, site restoration, and plugging obligations. A passive royalty owner and a working-interest operator may face very different obligations — the particular interest, agreements, and applicable law control.",
  ],
};

export const fraudWarning = {
  eyebrow: "FRAUD AND PROMOTER RISK",
  heading: ["Not Every Oil and Gas Investment", "Offer Is What It Appears to Be."],
  goldLine: 1,
  paragraphs: [
    "Oil and gas investments can involve complicated technical information — geology, production records, ownership fractions, projected reserves — and that complexity can make misleading claims harder to recognize. Be cautious of guaranteed royalty payments, claims that a well cannot stop producing, extraordinary advertised returns, pressure to invest immediately, unsupported reserve estimates, and claims that an IRA custodian has verified an investment's quality.",
  ],
  featured: "The More Complicated an Investment Appears, the More Important Independent Verification Becomes.",
};

export const relatedPartyProblem = {
  eyebrow: "THE RELATED-PARTY PROBLEM",
  heading: ["Your IRA Can't Simply Buy Mineral", "Rights You Already Own Personally."],
  goldLine: 1,
  paragraphs: [
    "If James personally owns mineral rights, he may wonder whether he can sell them to his Self-Directed IRA — that generally raises a prohibited-transaction problem. IRA rules restrict certain transactions between the account and disqualified persons, including a spouse or other related individuals, and using the IRA's mineral asset as personal loan collateral or arranging indirect transactions raises the same concerns. Not every acquaintance or distant relative is automatically a disqualified person, but the actual relationships and transaction terms matter.",
  ],
};

export const securitiesQuestion = {
  eyebrow: "ARE MINERAL RIGHTS SECURITIES?",
  heading: ["Are Mineral Rights and Oil and Gas", "Investment Funds the Same Thing?"],
  goldLine: 1,
  paragraphs: [
    "No. A directly conveyed mineral or royalty interest may involve property rights under applicable state law, while a private investment in an oil and gas partnership, managed drilling program, or similar fund may involve securities. Some transactions combine property and investment-contract characteristics, and the legal classification depends on the actual rights and arrangements — not every oil and gas investment is a simple mineral deed, and not every direct mineral conveyance is automatically outside securities law without legal review.",
  ],
  featured: "The Document and Legal Rights Determine What the IRA Is Buying, Not Merely the Words Oil and Gas Investment.",
};

export const researchSheet = {
  eyebrow: "THE MINERAL INVESTOR'S RESEARCH SHEET",
  heading: ["Before Your IRA Buys Mineral Rights,", "Investigate What's Actually Being Sold."],
  steps: [
    { number: "01", title: "Who Legally Owns the Interest?", description: "Verify the seller's title." },
    { number: "02", title: "What Is Being Conveyed?", description: "Determine whether it is a mineral, royalty, overriding royalty, or working interest." },
    { number: "03", title: "How Many Net Mineral Acres?", description: "Verify the ownership fraction." },
    { number: "04", title: "Which Depths and Formations?", description: "Understand whether the rights are restricted." },
    { number: "05", title: "Are There Existing Leases?", description: "Review all recorded and relevant agreements." },
    { number: "06", title: "Is the Interest Already Producing?", description: "Determine whether actual revenue exists." },
    { number: "07", title: "Which Wells and Units Apply?", description: "Identify the correct production relationships." },
    { number: "08", title: "Who Operates the Wells?", description: "Investigate the operator." },
    { number: "09", title: "What Is the Production History?", description: "Review available regulator information and payor records." },
    { number: "10", title: "How Might Production Change?", description: "Understand decline and shut-in risk." },
    { number: "11", title: "What Royalty Decimal Applies?", description: "Verify the actual fractional payment entitlement." },
    { number: "12", title: "What Amounts Have Been Paid?", description: "Examine authentic statements." },
    { number: "13", title: "What Deductions Are Permitted?", description: "Review lease language and applicable law." },
    { number: "14", title: "What Taxes or Fees Apply?", description: "Separate payment deductions from other ownership costs." },
    { number: "15", title: "How Was the Price Determined?", description: "Evaluate the valuation and assumptions." },
    { number: "16", title: "Does the Custodian Support It?", description: "Verify the exact asset type and administration requirements." },
    { number: "17", title: "Are Disqualified Persons Involved?", description: "Review the seller, operator, manager, and other relationships." },
    { number: "18", title: "Does It Carry Operating Expenses?", description: "Determine whether it's truly passive or a working interest." },
    { number: "19", title: "Could It Create UBIT or UDFI?", description: "Have the structure reviewed." },
    { number: "20", title: "Are the Instruments Transferable?", description: "Confirm necessary approvals and restrictions." },
    { number: "21", title: "What If Prices Fall?", description: "Analyze reduced sales proceeds." },
    { number: "22", title: "What If Production Stops?", description: "Review the potential absence of royalty cash." },
    { number: "23", title: "What If the Decimal Is Wrong?", description: "Understand title and payment correction procedures." },
    { number: "24", title: "Could the Interest Be Hard to Sell?", description: "Evaluate liquidity." },
    { number: "25", title: "Could It Lose Most of Its Value?", description: "Assess the entire downside, not only the projected income." },
  ],
  note: "The most important mineral investment information may be invisible from the surface: title, production, contractual rights, and financial obligations.",
};

export const fiveMisconceptions = {
  eyebrow: "FIVE MINERAL ROYALTY MISCONCEPTIONS",
  heading: ["Five Things a Royalty Check", "Doesn't Automatically Prove."],
  steps: [
    { number: "01", title: "The Surface Owner Owns the Minerals", description: "Surface and mineral ownership may be separated." },
    { number: "02", title: "A 20% Lease Royalty Means 20% of Revenue", description: "The actual fractional interest must be calculated." },
    { number: "03", title: "Last Month's Check Will Arrive Every Month", description: "Production, prices, and payment arrangements can change." },
    { number: "04", title: "Every Mineral Interest Has the Same Tax Treatment", description: "Passive royalties, working interests, debt-financed assets, and partnership investments can be treated differently." },
    { number: "05", title: "A Producing Interest Will Always Be Easy to Sell", description: "Mineral interests can be illiquid and difficult to value." },
  ],
  note: "An impressive royalty statement can spark interest, but the investment must be evaluated beyond the amount of one payment.",
};

export const closingReflection = {
  eyebrow: "THE FINAL REVEAL",
  heading: ["The Land Above May Look Ordinary.", "The Rights Beneath It Could Be Extraordinary."],
  goldLine: 1,
  paragraphs: [
    "A mineral owner may have the right to receive certain payments from oil or natural gas production without owning the surface, operating the well, or owning an energy company. An appropriate Self-Directed IRA may be able to acquire certain qualifying mineral or royalty interests — if the rights produce payable royalties, the retirement account may receive the money.",
    "But the risks deserve serious attention: production can decline, prices can fall, payments can stop, title can be complicated, operating interests can carry liabilities, and certain transactions can create unexpected tax consequences.",
  ],
  featured: "The Exciting Opportunity Is Discovering That Your Retirement Account May Be Able to Own Rights Beneath the Ground. The Important Understanding Is Knowing Exactly Which Rights It Owns and How Uncertain the Payments Can Be.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA buy mineral rights?", answer: "Potentially. An appropriate Self-Directed IRA may be able to acquire qualifying mineral interests if the custodian supports the asset and the transaction complies with applicable law." },
  { question: "Can a Roth IRA receive oil and gas royalties?", answer: "Potentially. A Self-Directed Roth IRA may hold certain qualifying royalty-producing interests, subject to the actual investment's legal and tax requirements." },
  { question: "Does the IRA have to own the surface land?", answer: "Not necessarily. Surface and mineral ownership may be legally separated." },
  { question: "What is a mineral interest?", answer: "A legal ownership interest in specified minerals, with rights determined by the title instruments, leases, and applicable law." },
  { question: "What is a royalty interest?", answer: "A right to receive a defined payment or share associated with qualifying production under the applicable legal arrangement." },
  { question: "What is a working interest?", answer: "An interest associated with oil and gas development and operations that may involve financial responsibility for development and operating costs." },
  { question: "Is a passive royalty the same as an oil and gas working interest?", answer: "No. The rights, obligations, operating costs, and possible tax treatment can be materially different." },
  { question: "What are net mineral acres?", answer: "A way of expressing fractional mineral ownership in acreage terms." },
  { question: "What is a royalty decimal?", answer: "The fractional interest used to calculate an owner's share of eligible production proceeds under the applicable arrangements." },
  { question: "Does a 20% lease royalty mean I receive 20% of all production revenue?", answer: "Not necessarily. The final share depends on the ownership fraction, unit participation, lease terms, and other applicable factors." },
  { question: "Can the IRA receive royalties from a well not physically located on its tract?", answer: "Potentially, depending on the applicable legal ownership, pooling, and unit arrangements." },
  { question: "Does having mineral rights guarantee production?", answer: "No. Minerals may never be commercially produced." },
  { question: "Can royalty payments decline?", answer: "Yes. Production, commodity prices, operating conditions, and other factors can reduce royalty payments." },
  { question: "Can royalty payments stop completely?", answer: "Yes. Production may stop, and no payable royalties may arise during certain periods." },
  { question: "Can a well be shut in?", answer: "Yes. Wells may be temporarily shut in under applicable circumstances. Whether a shut-in payment is due depends on the lease and other relevant rules." },
  { question: "What is an oil and gas division order?", answer: "A document used in royalty payment administration that may identify an owner's interest and payment information. Its legal effect varies by jurisdiction." },
  { question: "How do I know the ownership decimal is correct?", answer: "The figure should be verified against the mineral title, lease, unit documents, and relevant ownership records." },
  { question: "Can royalty payments be delayed?", answer: "Yes. Reporting, accounting, title questions, and other circumstances can delay payments." },
  { question: "What does a royalty statement show?", answer: "A royalty statement may identify production, sales values, ownership shares, deductions, and net payments." },
  { question: "Why are amounts deducted from royalty checks?", answer: "Applicable taxes and contractually permitted charges may affect the amount payable. The actual deductions depend on the rights and law." },
  { question: "Can a royalty owner be charged drilling expenses?", answer: "A true passive royalty interest generally differs from a working interest that carries development and operating expenses. The actual agreements must be reviewed." },
  { question: "Are oil and gas royalties excluded from UBIT?", answer: "Qualifying mineral royalties are generally excluded from unrelated business taxable income, subject to applicable exceptions and the actual investment structure." },
  { question: "Can an IRA working interest create UBIT?", answer: "Potentially. A working interest bearing development or operating cost obligations may receive different treatment from a passive royalty." },
  { question: "Can debt-financed mineral investments create UDFI?", answer: "Potentially. The financing and ownership structure must be reviewed under applicable debt-financed income rules." },
  { question: "Can I personally claim depletion deductions for mineral rights owned by my IRA?", answer: "Do not assume so. IRA ownership and personal ownership have different tax treatment." },
  { question: "Can the IRA buy mineral rights from me personally?", answer: "A sale between an IRA and its owner generally creates a prohibited-transaction concern." },
  { question: "Can my IRA buy mineral interests from my spouse?", answer: "Transactions with a disqualified spouse can constitute prohibited transactions." },
  { question: "Can an IRA buy mineral interests from an unrelated seller?", answer: "Potentially, subject to correct ownership, custodial support, and other legal requirements." },
  { question: "Can my IRA buy an overriding royalty interest?", answer: "Potentially, depending on the interest, its legal classification, custodian support, and transaction structure." },
  { question: "What is a nonparticipating royalty interest?", answer: "A royalty right that generally lacks the same leasing or executive rights as a full mineral interest, subject to the actual governing documents and state law." },
  { question: "What if the seller has a history of royalty payments?", answer: "Historical payments may help evaluate the investment, but they do not guarantee future production or income." },
  { question: "Can an IRA-owned royalty interest lose value?", answer: "Yes. Mineral and royalty interests can decline substantially in value." },
  { question: "Can the IRA sell the mineral interest later?", answer: "Potentially, subject to valid title, transfer rules, market conditions, and applicable investment restrictions." },
  { question: "Are mineral rights easy to sell?", answer: "Not necessarily. Mineral interests can be highly illiquid and difficult to value." },
  { question: "Does the IRA receive royalty checks into my personal bank account?", answer: "No. Legitimate investment proceeds belong to the proper IRA ownership arrangement." },
  { question: "Does a custodian verify mineral reserves or royalty projections?", answer: "Not necessarily. Custodial acceptance should not be treated as independent confirmation of the investment's value or legitimacy." },
  { question: "Are private oil and gas investment funds the same as directly owned minerals?", answer: "No. The legal ownership, securities rules, financial obligations, and tax treatment may differ." },
  { question: "Can an oil and gas investment lose all its value?", answer: "Yes. Certain mineral, royalty, working-interest, and private energy investments can result in substantial or complete losses." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Explains IRA investment rules and custodian-specific restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Provides information about prohibited transactions and retirement-plan investments.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Explains restrictions involving disqualified persons and improper use of IRA assets.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 590-A", description: "Provides general information concerning IRA contributions, transfers, and prohibited transactions.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Explains IRA distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598", description: "Provides particularly important information concerning mineral royalties, working interests, and unrelated business taxable income.", href: "https://www.irs.gov/publications/p598" },
  { title: "Internal Revenue Code Section 512", description: "Provides the general unrelated business taxable income framework, including the royalty exclusion.", href: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section512" },
  { title: "IRS: Form 990-T Instructions", description: "Provides reporting information for unrelated business income where applicable.", href: "https://www.irs.gov/instructions/i990t" },
  { title: "Texas Railroad Commission: Royalties FAQ", description: "Explains royalty payment issues, division orders, production information, and limitations on the Commission's authority over private royalty disputes.", href: "https://www.rrc.texas.gov/about-us/faqs/royalties-faq/" },
  { title: "Texas Railroad Commission: Online Research Queries", description: "Provides public oil and gas production, well, operator, and drilling permit research tools.", href: "https://www.rrc.texas.gov/resource-center/research/research-queries/" },
  { title: "Texas Railroad Commission: Production Data", description: "Provides access to production reports and other relevant information.", href: "https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/production-data/" },
  { title: "Bureau of Land Management: Split Estate", description: "Explains the distinction between surface rights and mineral rights in relevant land ownership circumstances.", href: "https://www.blm.gov/programs/energy-and-minerals/oil-and-gas/leasing/split-estate" },
  { title: "Bureau of Land Management: About Oil and Gas", description: "Provides background on federal mineral leasing and production.", href: "https://www.blm.gov/programs/energy-and-minerals/oil-and-gas/about" },
  { title: "SEC Investor Alert: Private Oil and Gas Offerings", description: "Provides significant warnings about private oil and gas securities offerings, geological uncertainty, investment promoters, illiquidity, and fraud risks.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-45" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Explains custodial limitations, alternative asset valuation, fraud concerns, and illiquid investments.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["You May Never Own an Oil Company.", "Your IRA Might Still Own the Rights Beneath the Ground."],
  description:
    "Discover what your retirement account might be able to own. Understand how royalty payments work, and why the invisible legal rights can matter just as much as the resources underground.",
  signature: "Educational Illustration — Not Investment, Legal, Or Tax Advice",
};
