export const hero = {
  eyebrow: "The Roth IRA Rental House",
  title: ["What If Your Roth IRA", "Could Own a Rental House?"],
  goldLine: 1,
  description:
    "Picture a rental house in an established neighborhood. Someone lives there. They pay rent every month. The property has expenses, and its value may change over time. Now imagine the house doesn't belong to you personally — it belongs to your Roth IRA. An appropriate Self-Directed Roth IRA may be able to purchase qualifying rental real estate, collect rent, pay property expenses, and receive proceeds from a future sale. But the money belongs to the Roth IRA, not your personal checking account — and the Roth IRA's tax advantages don't mean you can use the house personally or withdraw every dollar tax-free whenever you want.",
  whoItsFor:
    "For existing Roth IRA owners, people considering opening a Roth IRA, investors interested in real estate but unfamiliar with IRA ownership, and anyone curious about qualified tax-free Roth distributions in the future.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const revelationComparisonTable = {
  eyebrow: "The Most Important Revelation",
  heading: ["You Could Direct the Investment", "Without Personally Owning the House."],
  leftLabel: "Personally Owned Rental House",
  rightLabel: "Roth IRA-Owned Rental House",
  rows: [
    { left: "Personal ownership.", right: "Retirement-account ownership." },
    { left: "Personal investment income.", right: "Rent paid to the appropriate IRA arrangement." },
    { left: "Personal expenses.", right: "Property expenses paid through the IRA." },
    { left: "Applicable personal tax consequences.", right: "Roth IRA tax and distribution rules." },
  ],
  footnote: "Neither arrangement guarantees a profitable investment. The important distinction is ownership and tax treatment, not whether one universally performs better. The same type of property can exist inside two very different legal and financial ownership arrangements.",
};

export const mayaStory = {
  eyebrow: "Meet the Investor",
  heading: ["Maya Has $285,000 in a Roth IRA.", "She Has Never Owned a Rental Property Through It."],
  stories: [
    {
      label: "Illustrative Existing Roth IRA Owner",
      headline: "Maya has spent years building retirement savings. She's never considered her Roth IRA as a possible real estate investor.",
      scenario:
        "Maya is 43 in 2026, an operations director with no business ownership and limited real estate experience. She has an existing Roth IRA with a hypothetical balance of $285,000. For this example, assume Maya first established and funded her Roth IRA for tax year 2018, so the ordinary five-tax-year qualification period has already been satisfied by 2026 — but she is only 43, so she has not reached age 59½, a distinction that becomes essential later. Assume she makes an eligible trustee-to-trustee transfer to an appropriate Self-Directed Roth IRA custodian supporting qualifying direct real estate investments. The account remains a Roth IRA; no taxable conversion from pretax retirement funds is assumed, and no new contribution is required.",
      realization: "She starts imagining a house — not one she would personally live in or rent to family members, but a genuine investment property for an unrelated tenant.",
      risk: "Maya is a fictional illustration, not a verified Roth Academy customer. The $285,000 is an existing account balance, not a suggested or guaranteed amount anyone should have saved.",
    },
  ],
};

export const juniperHouseProfile = {
  eyebrow: "Meet Juniper House",
  heading: ["A $180,000 House. One Tenant.", "A Completely Different Kind of IRA Investment."],
  intro:
    "Juniper House sits on a residential street with three bedrooms, a modest backyard, a driveway, and a layout that could appeal to an ordinary long-term renter. Before closing, the proposed transaction would require appropriate property due diligence, title review, custodial coordination, and prohibited-transaction analysis — for this fictional example, assume those conditions are appropriately satisfied. The property is purchased without borrowed money, isolating the basic Roth IRA rental-property concept from the additional complexity of financing.",
  figures: [
    { label: "Property Name", value: "Juniper House (Fictional)" },
    { label: "Property Type", value: "Single-Family Rental House" },
    { label: "Illustrative Purchase Price", value: "$180,000" },
    { label: "Financing", value: "None" },
    { label: "Tenant", value: "Unrelated Third Party" },
    { label: "Management", value: "Independent Professional Property Manager" },
  ],
  disclaimer: "The property is fictional. It is not an actual listing or investment available through Roth Academy. Personal use by Maya is not modeled at any point in this lesson.",
};

export const actualPurchaseCost = {
  eyebrow: "The Actual Purchase Cost",
  heading: ["The House Costs $180,000.", "The IRA Spends $200,000 Getting It Ready."],
  intro:
    "Buying a rental house involves more than paying the seller — there may be closing expenses and immediate improvements before the property is ready. The improvements are assumed to be paid to unrelated professional contractors through an appropriate IRA arrangement; Maya does not personally perform the work, and she may not deduct the improvements or property depreciation on her personal tax return merely because her IRA owns the house.",
  figures: [
    { label: "Property Purchase Price", value: "$180,000" },
    { label: "Closing & Acquisition Expenses", value: "$5,000" },
    { label: "Professional Improvements", value: "$15,000" },
    { label: "Total Initial Cash Expenditure", value: "$200,000" },
    { label: "Starting Roth IRA Cash", value: "$285,000" },
    { label: "Remaining IRA Cash", value: "$85,000" },
  ],
  disclaimer: "A house's advertised purchase price is not necessarily the full amount the IRA needs to acquire and prepare it.",
};

export const houseWithTwoFinancialWorlds = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The House With Two Financial Worlds"],
  intro:
    "Follow the money. Where does every dollar actually go? The same house and the same two financial pathways — the Roth IRA investment, and Maya's personal finances — run through all four events. The investment's cash flow is never shown going directly to Maya personally.",
  decisions: [
    {
      key: "purchase",
      label: "The Purchase",
      status: "review" as const,
      statusLabel: "Roth IRA-Owned Investment Property",
      action: "The Roth IRA buys the house.",
      explanation: "Starting Roth IRA cash of $285,000 funds the $200,000 purchase and preparation expenditure, leaving $85,000 remaining inside the IRA. The property does not become Maya's personal residence or a personally owned rental — it is an investment held through her retirement account. Maya may direct permitted investment decisions, but she must respect the account's ownership and prohibited-transaction rules.",
      takeaway: "Property owner: the appropriate Self-Directed Roth IRA arrangement. Personally owned by Maya: no. Personal cash received by Maya: $0.",
    },
    {
      key: "rent",
      label: "The Rent",
      status: "review" as const,
      statusLabel: "Investment Income",
      action: "The tenant pays $1,750. Who gets the money?",
      explanation: "Twelve monthly payments of $1,750 produce $21,000 of annual gross rent. Annual operating expenses — property taxes ($3,600), insurance ($1,800), independent property management ($2,100), routine maintenance ($1,800), and other ordinary expenses ($600) — total $9,900, leaving $11,100 of net rental cash for the year (an annual average of $925 a month, not a promise every month matches). Adding that to the $85,000 remaining after acquisition brings ending available IRA cash to $96,100. The tenant pays for the use of the house; the IRA receives the investment income.",
      takeaway: "Rent received by IRA: $1,750 a month ($21,000 a year). Personal rent received by Maya: $0. Collecting $21,000 in rent doesn't mean the investment earned $21,000 — expenses bring the net down to $11,100.",
    },
    {
      key: "repair",
      label: "The Repair",
      status: "prohibited" as const,
      statusLabel: "Investment Expense",
      action: "The house needs an $18,000 roof. Who pays?",
      explanation: "As an alternative stress illustration occurring within the same initial twelve-month period, assume an unexpected roof replacement costs $18,000 — in addition to the routine maintenance already included above. The appropriate Roth IRA arrangement pays this legitimate property expense using IRA funds; Maya should not assume she can personally pay the contractor, perform the work herself, or create an informal reimbursement arrangement, as that may create prohibited-transaction or other tax issues. Against the $11,100 of annual net rental cash, the $18,000 roof produces a negative $6,900 net cash movement for the stressed year, bringing IRA cash from $85,000 down to $78,100. This stress scenario is separate from, and excluded from, the later five-year base-case rental projection.",
      takeaway: "The IRA owns the house. The IRA also bears the investment's expenses — a major repair can turn an otherwise positive rental year into a negative cash-flow year.",
    },
    {
      key: "sale",
      label: "The Sale",
      status: "review" as const,
      statusLabel: "Investment Proceeds",
      action: "Five years later, what if the Roth IRA sells the house?",
      explanation: "For this favorable hypothetical, assume five years of identical $11,100 annual net rental cash (no roof repair, no borrowed money, no distributions taken) — a cumulative $55,500. The house then sells for $245,000; after $15,000 of selling expenses, net sale proceeds of $230,000 return to the Roth IRA, a sale-related cash gain of $30,000 over the $200,000 initial expenditure. Combined with the $55,500 of cumulative rental cash, the total illustrative investment gain is $85,500, bringing the Roth IRA from its $285,000 starting balance to an illustrative ending value of $370,500 ($85,000 remaining after acquisition + $55,500 rental cash + $230,000 sale proceeds).",
      takeaway: "Roth IRA sale proceeds: $230,000. Personal cash from this investment: $0. The Roth IRA may benefit from the sale — that doesn't mean the account owner personally receives the proceeds.",
    },
  ],
  note: "Essential interface rule: when a personal-cash amount is displayed, it reads \"Personal Cash Received From This IRA Investment: $0\" — not Maya's entire personal checking balance, only cash personally received from this investment.",
};

export const rentNotPersonalIncome = {
  eyebrow: "The Property That Never Sends a Personal Paycheck",
  heading: ["The Rental House May Produce Cash.", "But That Doesn't Make It Personal Income."],
  goldLine: 1,
  paragraphs: [
    "Checking the property manager's statement and seeing that the tenant paid rent, expenses were paid, and the investment generated positive net cash can feel exciting — but the money belongs to the Roth IRA. Maya cannot treat the $11,100 of annual net rental cash as an ordinary personal paycheck; taking money out of a Roth IRA is a separate distribution event, with different rules.",
    "It is not accurate to say that no money can ever be withdrawn from a Roth IRA before age 59½. Roth IRA distribution rules have an ordering system, and regular contributions generally can be withdrawn without tax, while conversions and earnings have different rules. The point is that rent from an IRA-owned property does not automatically become unrestricted personal income.",
  ],
  featured: "An investment can generate cash inside a Roth IRA without making that cash immediately available to spend personally on a tax-free basis.",
};

export const managementAndPersonalUseBoundary = {
  eyebrow: "Two Important Boundaries",
  heading: ["Can Maya Manage the House Herself?", "And Can She Ever Use It Personally?"],
  goldLine: 1,
  paragraphs: [
    "A property owner may be accustomed to finding tenants, arranging repairs, and handling maintenance personally, but an IRA-owned property is subject to rules restricting certain services, transactions, and personal benefits. For Juniper House, an unrelated professional property manager handles the rental, tenant payments route through the approved IRA arrangement, and unrelated contractors perform paid maintenance — Maya does not personally receive management compensation, perform renovation labor, or use personal funds to cover modeled property expenses. Some investment-direction and oversight activities may be permissible; personal services, compensation arrangements, and transactions benefiting disqualified persons can create legal problems, and qualified review is appropriate before proposing owner-provided labor.",
    "Suppose Juniper House is vacant for a month and Maya thinks about staying there for a weekend, letting her adult child use the home, or allowing her parents to move in temporarily. These ideas raise serious prohibited-transaction concerns — an IRA-owned property cannot be used to provide prohibited personal benefits to the IRA owner or other disqualified persons, including certain prohibited occupancy, leasing, and personal-use arrangements. The prohibited-transaction rules do not disappear because the property belongs to a Roth IRA rather than a traditional IRA. Disqualified-person rules cover specific relationships, including a spouse, ancestors, lineal descendants, and spouses of lineal descendants — not universally every relative or acquaintance, though other indirect-benefit rules may still apply.",
  ],
  note: "Directing an investment is different from personally performing services for an IRA-owned asset. The property exists to benefit the retirement account under the law, not to provide the owner with personal use of the house.",
};

export const cannotSellOwnHouseToIRA = {
  eyebrow: "What If Maya Already Owns a House?",
  heading: ["You Can't Simply Sell Your Personally Owned", "Rental to Your Roth IRA."],
  goldLine: 1,
  paragraphs: [
    "Imagine Maya already owns a rental property personally — could she sell it to her Roth IRA? Generally, a sale or exchange between an IRA and its owner is a prohibited transaction. Selling the property for fair market value does not automatically make that arrangement permissible, and placing the property inside an LLC does not automatically solve the problem. The fictional Juniper House is purchased from an unrelated seller through an appropriate IRA arrangement — a different legal transaction from purchasing Maya's existing property from herself.",
  ],
  featured: "Buying a qualifying property from an unrelated seller is a different legal transaction from selling your own property to your IRA.",
};

export const rothQualificationPath = {
  eyebrow: "What Makes a Roth IRA Different",
  heading: ["The House Is Real Estate.", "The Roth IRA Determines the Tax Framework."],
  intro:
    "A Roth IRA is a retirement account with specific tax rules. Regular contributions are generally made with already-taxed money, the account can hold eligible investments, and qualified Roth IRA distributions can be free from federal income tax — one of Roth saving's most distinctive features. But it's essential to understand what \"qualified\" means: generally, a distribution must occur after the applicable five-tax-year period beginning with the owner's first Roth contribution year, and a qualifying circumstance must also be satisfied, such as reaching age 59½ (other statutory circumstances include qualifying disability, death, and a limited first-home exception).",
  figures: [
    { label: "Condition One", value: "The Applicable Five-Tax-Year Period" },
    { label: "Maya's Five-Year Status (First Funded 2018)", value: "Satisfied by 2026" },
    { label: "Condition Two", value: "A Qualifying Distribution Circumstance" },
    { label: "Maya's Age in This Example", value: "43 (Not Yet 59½)" },
  ],
  disclaimer: "If Maya's IRA sells the rental house, that transaction does not automatically mean she can immediately withdraw all resulting earnings personally as a qualified Roth IRA distribution. Nonqualified withdrawals are not all taxed identically — regular contributions generally come out first under IRS distribution-ordering rules, and conversions, rollovers, and earnings have separate rules. A property sale inside a Roth IRA and a qualified tax-free personal withdrawal are not the same thing.",
};

export const threeEndings = {
  eyebrow: "Three Endings, One House",
  heading: ["What If the House Sells for $245,000?", "What If It Only Sells for $155,000?", "What If It Isn't Sold at All?"],
  intro:
    "All three outcomes share the same $200,000 initial acquisition and preparation expenditure and the same five-year cumulative net rental cash of $55,500 (identical annual net rental cash of $11,100, with no additional roof repair). Only the resale result changes.",
  scenarios: [
    {
      key: "favorable",
      label: "Sells for $245,000",
      status: "An unrelated buyer eventually pays $245,000",
      description:
        "Net sale proceeds after $15,000 of selling expenses return $230,000 to the Roth IRA — a sale-related cash gain of $30,000 over the $200,000 initial expenditure. Combined with $55,500 of cumulative rental cash, the total illustrative investment gain is $85,500.",
      figures: [
        { label: "Five-Year Net Rental Cash", value: "$55,500" },
        { label: "Net Property Sale Proceeds", value: "$230,000" },
        { label: "Illustrative Overall Investment Gain", value: "$85,500" },
        { label: "Illustrative Ending Roth IRA Value", value: "$370,500" },
      ],
      statement: "These are simplifying assumptions, not likely or guaranteed operating results, and the scenario excludes IRA administration fees, IRA-level taxes, inflation, and other unmodeled costs.",
    },
    {
      key: "unfavorable",
      label: "Sells for $155,000",
      status: "The market is weaker than expected",
      description:
        "Net sale proceeds after $12,000 of selling expenses return only $143,000 to the Roth IRA — a sale-related cash loss of $57,000 against the $200,000 initial expenditure. The tenant paid rent for five years and the property generated positive net rental cash throughout, but the eventual sale price was substantially lower, and the entire investment still produced a small overall loss after the modeled cash flows.",
      figures: [
        { label: "Five-Year Net Rental Cash", value: "$55,500" },
        { label: "Net Property Sale Proceeds", value: "$143,000" },
        { label: "Illustrative Overall Investment Loss", value: "$1,500" },
        { label: "Illustrative Ending Roth IRA Value", value: "$283,500" },
      ],
      statement: "Rental income can help an investment's economics, but it cannot guarantee that a property sale will be profitable.",
    },
    {
      key: "unsold",
      label: "Property Not Sold",
      status: "The IRA retains ownership of Juniper House",
      description:
        "The IRA still owns Juniper House, may continue collecting rent and paying expenses, and the property might have substantial market value — but an estimate of value is not the same as available cash. A property cannot necessarily be sold quickly at an acceptable price, and no completed-sale gain or loss is calculated because no sale has occurred.",
      figures: [
        { label: "Five-Year Net Rental Cash", value: "Depends on Actual Rental Performance" },
        { label: "Net Property Sale Proceeds", value: "No Sale Completed" },
        { label: "Illustrative Overall Investment Gain/Loss", value: "Not Calculated" },
        { label: "Illustrative Ending Roth IRA Cash", value: "$85,000 Plus Uncertain Ongoing Rental Cash" },
      ],
      statement: "A rental house can be valuable without being liquid.",
    },
  ],
  tableColumns: [
    { label: "Net Property Sale Proceeds", index: 1 },
    { label: "Illustrative Ending Roth IRA Value", index: 3 },
  ],
  comparisonNote: "The first two outcomes assume identical five-year net rental receipts and different sale prices. The third does not invent a completed-sale result. The $18,000 extraordinary roof repair shown earlier is a separate stress example, excluded from these three outcomes.",
  conclusion: "The property may create opportunities through rent and a future sale. But neither income nor appreciation is guaranteed.",
};

export const whyFascinating = {
  eyebrow: "Why the Roth IRA Possibility Is Fascinating",
  heading: ["What If a Rental Property's Results", "Stayed Inside an Account Built for Qualified Tax-Free Distributions?"],
  goldLine: 1,
  paragraphs: [
    "An investment property producing rent over several years, with the IRA collecting rental income, paying property expenses, and keeping the available cash inside the retirement account, is interesting on its own. If a later sale produces a positive financial result, those proceeds also belong to the IRA. An appropriately structured Roth IRA can provide favorable federal retirement tax treatment for qualifying investment activity and later qualified distributions — but that does not mean every investment will be profitable, or that every rental arrangement avoids all taxes. Debt-financed property, active business activities, certain services, and other specialized circumstances can create IRA-level tax issues; this module's example uses a cash purchase and ordinary residential rental activity to avoid introducing debt-financing assumptions into the main financial illustration.",
  ],
  featured: "The possibility is not simply owning a house. It's owning a qualifying investment within a retirement-account structure that has its own valuable tax rules.",
};

export const whyNotBuyPersonally = {
  eyebrow: "Why Not Just Buy the House Personally?",
  heading: ["The House May Look the Same.", "The Ownership and Tax Rules Are Different."],
  leftLabel: "Personally Owned Rental",
  rightLabel: "Roth IRA-Owned Rental",
  rows: [
    { left: "Rental income and expenses are considered under the individual's applicable personal tax rules.", right: "The IRA owns the investment, receives rent, and handles legitimate property expenses." },
    { left: "The owner may have access to certain deductions and depreciation rules when eligible.", right: "The individual cannot personally claim property depreciation or deductions for expenses paid by the IRA." },
    { left: "The owner may personally use the property, subject to other applicable laws and financing restrictions.", right: "The individual cannot claim personal use merely because they direct the account; tax treatment follows the Roth IRA and any applicable special investment tax rules." },
  ],
  footnote: "Do not assume a Roth IRA-owned house is universally better than a personally owned rental. The appropriate ownership arrangement depends on the person's financial situation, investment goals, tax considerations, liquidity needs, and legal restrictions.",
};

export const mortgageAndDebtFinancedTax = {
  eyebrow: "Financing and the Tax That People Forget",
  heading: ["Borrowing, Debt-Financed Income,", "and the Depreciation Question."],
  goldLine: 1,
  paragraphs: [
    "Some specialized IRA real estate arrangements may use financing, but an IRA owner cannot assume they may simply sign an ordinary personal mortgage and guarantee the debt — personal guarantees and other extensions of credit involving disqualified persons can create prohibited-transaction problems. Certain structures may use nonrecourse financing, where the lender's recovery rights are limited, but the details matter, and borrowing introduces additional investment and tax risk: IRA-owned debt-financed real estate may generate unrelated debt-financed income, creating taxes within an IRA — including a Roth IRA — under applicable rules, affecting both rental income and gains on a later sale. Juniper House is purchased without financing specifically to keep the primary educational story focused on ownership, rental income, and Roth IRA treatment.",
    "Many people associate Roth IRAs with tax-free retirement income, which can be true for qualified distributions, but that is not the entire tax story. Certain investments can create taxes within the IRA itself — including certain debt-financed property arrangements, some active business activities, and certain partnership investments that produce unrelated business taxable income. Ordinary rent from qualifying real property is generally excluded from unrelated business taxable income under applicable rules, but financing, substantial services to occupants, certain lease structures, and other facts can change the analysis. Juniper House is modeled as an all-cash, ordinary long-term residential rental, not a hotel-like operation providing substantial guest services.",
    "People who personally own rental property may hear about depreciation and deductible expenses, but an IRA-owned property is not the same as a personally owned rental — the IRA owner should not assume that personally claiming depreciation or deductions for the IRA's property expenses is permitted. If an IRA owes tax under special rules, applicable deductions and calculations may be relevant at the IRA level, requiring separate analysis.",
  ],
  note: "A tax benefit that may apply to personally owned real estate doesn't automatically apply to the individual who directs an IRA-owned property.",
};

export const propertyObligationsAndTenantRisk = {
  eyebrow: "Ongoing Obligations and Tenant Risk",
  heading: ["The House Belongs to the IRA.", "So Do Its Obligations — and Its Vacancy Risk."],
  goldLine: 1,
  paragraphs: [
    "Juniper House is still real estate: property taxes may be owed, insurance must be maintained, maintenance may be needed, local requirements may apply, and the property could face special assessments or unexpected expenses. The IRA needs enough financial capacity to handle legitimate investment obligations — a low cash balance can become a problem when a major repair arises. The owner should not assume they can personally pay property expenses and later receive reimbursement from the IRA, nor that every personal payment can be treated as an IRA contribution; the correct arrangement needs to be determined before money changes hands.",
    "Rental income can also look attractive on a financial projection, but tenants may leave, pay late, or fail to pay, and a property may sit vacant while expenses continue. Two months of uncollected rent at $1,750 a month reduces gross rent by $3,500 before considering any additional vacancy-related expenses — and actual expenses may not decrease proportionately, since taxes and insurance may continue even when no rent is collected.",
  ],
  note: "A rental investment needs available cash for its obligations, even when the property is held inside a retirement account.",
};

export const resaleAndPersonalUseLater = {
  eyebrow: "Two Questions About the Future",
  heading: ["What If the House Becomes More Valuable?", "And Can Maya Ever Move In?"],
  goldLine: 1,
  paragraphs: [
    "Real estate values can change — a neighborhood may become more desirable, a property may become more attractive after improvements, and an unrelated buyer may eventually offer more than the IRA originally paid. If the IRA completes a qualifying sale, the net proceeds belong to the retirement account, but appreciation is not guaranteed, closing costs can consume part of the result, and a home may be difficult to sell quickly. Even when the investment has a favorable tax outcome within the IRA, a later personal withdrawal must be analyzed separately under the Roth IRA distribution rules.",
    "Maya cannot simply decide to use the IRA-owned property personally while it remains an investment asset of the account — personal use by the IRA owner can violate prohibited-transaction rules. There may be circumstances in which property can be distributed in kind from an IRA (distributing the property itself rather than first selling it for cash), but that is a separate transaction involving valuation, legal transfer requirements, custodial procedures, and tax consequences — not an automatic way to avoid prohibited-transaction restrictions, and not a plan to purchase a rental house primarily as a future personal residence to move into whenever convenient.",
  ],
  note: "A property may create value through a sale, but the cash remains within the Roth IRA until a permitted distribution occurs. Investment property does not become personal property simply because the account holder wants to use it.",
};

export const rmdAndValuation = {
  eyebrow: "Two More Roth IRA Features That Matter Over Time",
  heading: ["No Lifetime Required Distributions.", "But the House Still Isn't Cash."],
  goldLine: 1,
  paragraphs: [
    "Traditional IRAs are generally subject to required minimum distributions beginning at the legally applicable age. Original owners of Roth IRAs generally are not required to take minimum distributions from their own Roth IRAs during their lifetimes, though beneficiaries may face separate rules after the owner's death. This difference can matter when an IRA owns illiquid property — but not being required to take lifetime distributions doesn't eliminate financial needs or investment risks; the property may still require cash, the account owner may eventually want to withdraw funds, and property values can decline.",
    "Unlike a publicly traded stock, a privately held house does not have a continuously quoted market price. A property valuation may involve comparable sales, independent appraisals, property condition, local market conditions, lease and occupancy information, and other relevant evidence — a reported value is not a guarantee of the price the IRA could receive from an actual sale. The IRS requires IRA custodians to report certain information about assets that lack readily available market values, and real estate is specifically identified as a relevant asset category in Form 5498 reporting guidance.",
  ],
  note: "Roth IRA distribution rules can provide flexibility, but they do not turn an illiquid investment into available cash. Owning a house with an estimated value is different from having the same amount available in cash.",
};

export const fiveNeverAssumeRules = {
  eyebrow: "The Most Important Personal-Use Rules",
  heading: ["Five Things You Should Never Assume", "You Can Do With an IRA-Owned Rental."],
  steps: [
    { number: "01", title: "Live in the Property", description: "Do not assume the owner may personally occupy it while it is IRA-owned." },
    { number: "02", title: "Let a Disqualified Family Member Use It", description: "Certain family and related-party arrangements may constitute prohibited transactions." },
    { number: "03", title: "Sell Personally Owned Property to the IRA", description: "Sales between an IRA and its owner are generally prohibited." },
    { number: "04", title: "Personally Finance or Guarantee the Investment", description: "Personal guarantees and disqualified-person extensions of credit can create prohibited transactions." },
    { number: "05", title: "Personally Perform Services or Collect Fees", description: "Owner-provided labor, management compensation, and other services may create prohibited-transaction issues depending on the circumstances." },
  ],
  note: "These issues are presented seriously without implying that every form of investment oversight is prohibited — the specific legal relationship and activity determine the analysis. The IRA's investment must be kept separate from the account owner's prohibited personal uses and benefits.",
};

export const rothConversionMisunderstanding = {
  eyebrow: "A Common Misunderstanding",
  heading: ["Having a Traditional IRA Doesn't Automatically", "Mean You Have Roth IRA Money."],
  goldLine: 1,
  paragraphs: [
    "Some visitors may have substantial retirement savings in traditional IRAs or former employer retirement plans and wonder whether those funds can be used to purchase a rental property through a Self-Directed Roth IRA. The account's existing tax status matters: eligible transfers between Roth IRAs may preserve Roth IRA status, but moving eligible pretax retirement funds into a Roth IRA may be a taxable conversion, and the conversion rules and possible taxes must be examined. The account does not become Roth merely because it is self-directed. Maya already has a Roth IRA, and her fictional investment does not involve converting pretax funds, which simplifies this lesson.",
  ],
  featured: "Self-directed describes investment flexibility. Roth describes a specific retirement-account tax structure.",
};

export const researchSheet = {
  eyebrow: "The Rental Property Research Sheet",
  heading: ["Before Your Roth IRA Buys a House,", "Understand the Investment."],
  steps: [
    { number: "01", title: "Property Value & Condition", description: "What evidence supports the purchase price, are comparable sales available, what repairs are necessary, and has an appropriate inspection occurred?" },
    { number: "02", title: "Title & Ownership", description: "Does the seller have the legal right to convey the property, and are liens, restrictions, or easements relevant?" },
    { number: "03", title: "Rental Demand & Expenses", description: "Are suitable tenants likely, what evidence supports the proposed rent, and what taxes, insurance, management, and maintenance obligations may apply?" },
    { number: "04", title: "Available IRA Cash & Liquidity", description: "Can the account afford the purchase and ongoing expenses, what happens if major repairs arise, and how difficult might the property be to sell?" },
    { number: "05", title: "Relationships & Tax Treatment", description: "Are the tenants and service providers independent under the relevant rules, are there prohibited personal benefits, is the property financed, and could the activity create IRA-level taxes?" },
    { number: "06", title: "Roth Distribution Rules & Downside", description: "Does the owner understand that rental receipts and personal distributions are different events, and what happens if the property remains vacant, requires expensive repairs, or declines in value?" },
  ],
  note: "A great-looking rental house may be worth exploring. A strong investment decision requires understanding what it actually costs, earns, and risks.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["A Rental House Today.", "A Different Way to Think About Your Roth IRA's Future."],
  goldLine: 1,
  paragraphs: [
    "Most people know what a rental house is — the property, the tenant, the rent, the expenses, and the possibility of a future sale. But many have never imagined that a retirement account might be the investor. An appropriate Self-Directed Roth IRA may be able to purchase qualifying rental real estate: a tangible investment property that collects rent, pays legitimate expenses, and receives the proceeds from a sale. Real estate investors already know a house can collect rent, that repairs are possible, and that values change — but many have never connected those ideas to a Roth IRA. The investment property may exist within a retirement arrangement that follows a different legal and tax structure from personal ownership, which creates both possibilities and restrictions.",
    "The possibilities are fascinating, but the financial results are never guaranteed, and the ownership rules are essential. The house belongs to the IRA. The money belongs to the IRA. And later personal withdrawals follow the applicable Roth IRA distribution rules.",
  ],
  featured: "The opportunity isn't simply buying a rental house. It's discovering what a Roth IRA may be able to own.",
};

export const faqItems = [
  { question: "Can a Roth IRA own rental property?", answer: "Potentially, yes. An appropriate Self-Directed Roth IRA may purchase qualifying investment real estate if the custodian supports the asset and the transaction complies with applicable IRA rules." },
  { question: "Can a Roth IRA buy a house?", answer: "Potentially. The property must be purchased and held through a permissible investment arrangement rather than being treated as the IRA owner's personal residence." },
  { question: "Can my Roth IRA collect rent?", answer: "Yes, a properly structured Roth IRA-owned rental property may receive rental income. The rent belongs to the IRA, not directly to the account owner." },
  { question: "Does rent from a Roth IRA-owned property go into my checking account?", answer: "No. Investment income generally must be handled through the appropriate IRA arrangement. Personal distributions are separate transactions." },
  { question: "Can I personally withdraw the rent each month?", answer: "IRA withdrawals are governed by Roth IRA distribution rules. The fact that the money originated as rent does not automatically make it a qualified tax-free personal withdrawal." },
  { question: "Are Roth IRA rental property profits tax-free?", answer: "Qualified Roth IRA distributions can be free from federal income tax, and ordinary qualifying investment activity generally benefits from the IRA's tax structure. However, some activities and debt-financed investments may create taxes inside the IRA. Do not assume every real estate transaction is automatically tax-free." },
  { question: "What is the five-year rule for Roth IRAs?", answer: "Qualified Roth IRA distributions generally require the applicable five-tax-year period and a qualifying circumstance, such as reaching age 59½. Separate rules can apply to withdrawals involving conversions and rollovers." },
  { question: "Can I withdraw my Roth IRA contributions before age 59½?", answer: "Regular Roth IRA contributions generally may be withdrawn without tax under the applicable distribution-ordering rules. Conversions and earnings have different requirements." },
  { question: "Does selling the rental house make the proceeds a qualified Roth IRA distribution?", answer: "No. A sale inside the IRA is an investment transaction. A later personal withdrawal must be evaluated separately under the applicable Roth IRA distribution rules." },
  { question: "Can I live in a house owned by my Roth IRA?", answer: "Personal use by the IRA owner can constitute a prohibited transaction. An IRA-owned investment property should not be treated as a personal residence or vacation home." },
  { question: "Can my child live in my IRA-owned rental?", answer: "Renting or providing use to a disqualified family member, including a lineal descendant, can create a prohibited transaction." },
  { question: "Can my spouse rent the Roth IRA property?", answer: "Transactions involving a spouse can create prohibited-transaction concerns. Do not assume they are permissible." },
  { question: "Can I rent my Roth IRA property to an unrelated tenant?", answer: "Potentially, yes. The lease, tenant relationship, property management, account arrangement, and applicable laws must comply with the relevant rules." },
  { question: "Can I manage the rental myself?", answer: "Some investment direction and oversight may be permissible, but personal services, compensation, and other activities can create prohibited-transaction concerns. The proposed management arrangement should be reviewed." },
  { question: "Can I personally perform repairs on the house?", answer: "Do not assume so. Personal labor or improvements involving IRA-owned property can raise prohibited-transaction issues. Using independent professionals through an appropriate arrangement can help maintain the intended separation." },
  { question: "Who pays property taxes and insurance?", answer: "Legitimate property expenses should generally be handled through the appropriate IRA investment arrangement using IRA funds." },
  { question: "Can I pay a repair bill personally and reimburse myself later?", answer: "Do not assume so. Personal expense payments and reimbursements can create legal and tax problems. The correct transaction arrangement should be established before payment." },
  { question: "Can I sell my personally owned rental house to my Roth IRA?", answer: "Generally, a sale between an IRA and its owner is a prohibited transaction." },
  { question: "Can my Roth IRA buy a rental house using a mortgage?", answer: "Some specialized arrangements may permit financing, but personal guarantees, prohibited transactions, lender requirements, and unrelated debt-financed income tax rules require careful analysis." },
  { question: "What is unrelated debt-financed income?", answer: "It is income that may become taxable within certain tax-exempt arrangements when qualifying investment property is acquired or held using debt under applicable rules." },
  { question: "Does a Roth IRA owner get depreciation deductions on the IRA-owned house?", answer: "The individual generally cannot personally claim depreciation on property owned by their IRA. Any tax calculations relevant to the IRA are separate." },
  { question: "What happens if the tenant stops paying?", answer: "The IRA may lose expected rental income while property expenses continue. The investor may face vacancy, legal, collection, and maintenance costs." },
  { question: "Can the property lose value?", answer: "Yes. Real estate values can decline, and the property may become difficult to sell." },
  { question: "Is rental income guaranteed?", answer: "No. Rent depends on actual tenant payments, occupancy, property condition, and other circumstances." },
  { question: "Can my Roth IRA own more than one rental property?", answer: "Potentially. An appropriate custodian may support multiple qualifying real estate investments. Each transaction must comply with the relevant rules and financial requirements." },
  { question: "Does the Roth IRA need cash for repairs?", answer: "The account or appropriate investment arrangement needs a lawful method for paying legitimate property expenses. Unexpected costs can create difficulties if sufficient liquid funds are unavailable." },
  { question: "Can an IRA-owned house be difficult to value?", answer: "Yes. Real estate generally lacks continuous public market prices and may require appropriate valuation information for reporting and other purposes." },
  { question: "Does a Roth IRA owner have required minimum distributions?", answer: "Original owners of Roth IRAs generally are not required to take lifetime required minimum distributions. Beneficiaries may face separate rules after the owner's death." },
  { question: "Can I move money from a traditional IRA into a Self-Directed Roth IRA?", answer: "An eligible conversion may be possible, but moving pretax retirement money into a Roth IRA generally can create taxable conversion income. The account's tax status must be handled correctly." },
  { question: "Is a Self-Directed Roth IRA better than owning a rental personally?", answer: "Not automatically. Ownership restrictions, taxes, liquidity, expenses, investment objectives, and personal circumstances can make one arrangement more appropriate than another." },
  { question: "Does the IRA custodian guarantee the property is a good investment?", answer: "No. A legitimate Self-Directed IRA custodian does not necessarily evaluate the property's investment quality, valuation, profitability, or risks." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the general availability of IRA real estate investments and the ability of individual custodians to limit their supported investments.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions involving personal use, disqualified persons, transactions with an IRA owner, and improper personal benefits.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Provides additional guidance about prohibited transactions and related-party restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS Publication 590-A", description: "Provides IRA contribution, Roth conversion, and other relevant account information.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Supports Roth IRA qualified distribution requirements, five-year rules, distribution-ordering rules, and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS: Required Minimum Distribution FAQs", description: "Confirms that original Roth IRA owners generally do not have lifetime required minimum distributions, while beneficiaries may have separate obligations.", href: "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" },
  { title: "IRS: Exclusion of Rent From Real Property From UBTI", description: "Explains the general treatment of rents from real property and circumstances that can change their treatment.", href: "https://www.irs.gov/charities-non-profits/exclusion-of-rent-from-real-property-from-unrelated-business-taxable-income" },
  { title: "IRS: Unrelated Business Income From Debt-Financed Property", description: "Provides information about debt-financed property and the associated unrelated-business-income rules.", href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514" },
  { title: "IRS Publication 598", description: "Provides broader information on unrelated business income and relevant tax exceptions.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Form 5498 Asset Information Reporting Codes", description: "Identifies real estate and other nonmarketable assets for relevant IRA reporting.", href: "https://www.irs.gov/retirement-plans/form-5498-asset-information-reporting-codes-and-common-errors" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of custodial limitations, private investment risk, valuation uncertainty, illiquidity, and fraud.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["A Rental House Today.", "A Different Way to Think About Your Roth IRA's Future."],
  description:
    "An appropriate Self-Directed Roth IRA may be able to purchase qualifying rental real estate, collect rent, pay legitimate expenses, and receive proceeds from a sale. But the house belongs to the IRA, the money belongs to the IRA, and later personal withdrawals follow the applicable Roth IRA distribution rules.",
  signature: "Maya and the fictional Juniper House in this module are entirely fictional educational illustrations.",
};
