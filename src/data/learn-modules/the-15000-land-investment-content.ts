export const hero = {
  eyebrow: "The $15,000 Land Investment",
  title: ["What If Your IRA Could Own", "This $15,000 Piece of Land?"],
  goldLine: 1,
  description:
    "Imagine finding an empty residential lot for $15,000. A small piece of land. A road in front. Houses nearby. No tenants, no building to maintain — just real estate. Now imagine learning that an appropriate Self-Directed IRA may be able to purchase qualifying vacant land. But a low asking price doesn't guarantee a bargain. The land's legal rights, potential uses, expenses, and eventual buyer demand matter enormously.",
  whoItsFor:
    "For people with relatively modest retirement balances, first-time alternative investment explorers, and anyone curious about vacant land as a tangible IRA investment.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const jordanStory = {
  eyebrow: "Meet the Investor",
  heading: ["Jordan Has $47,000 in an IRA.", "Could a $15,000 Lot Be Worth Exploring?"],
  stories: [
    {
      label: "Illustrative First-Time Land Investor",
      headline: "Jordan has never owned investment real estate — no rental properties, no real estate company, just retirement savings and curiosity.",
      scenario:
        "Jordan is 37, a salaried employee with no business ownership and no land investment experience. Jordan has $47,000 in a traditional IRA. For this example, assume Jordan completes an eligible trustee-to-trustee transfer to a traditional Self-Directed IRA custodian that supports qualifying real estate. No taxable Roth conversion is assumed; the account remains a traditional IRA.",
      realization: "\"Could my IRA own a property like that?\"",
      risk: "Potentially, yes. But the answer to that question is only the beginning — the more important question is whether the property is worth buying. Jordan is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const lotProfile = {
  eyebrow: "The Lot That Looks Simple",
  heading: ["At First Glance,", "It's Just an Empty Piece of Ground."],
  intro:
    "A vacant lot can look deceptively simple. You might imagine a future buyer building a home, or another investor eventually paying more. Those are possibilities, not facts. Before an IRA purchases the property, the investor needs to understand what is actually being acquired.",
  figures: [
    { label: "Property Name", value: "Horizon Lot A (Fictional)" },
    { label: "Illustrative Lot Size", value: "Approximately 0.22 Acres" },
    { label: "Asking Price", value: "$15,000" },
    { label: "Current Use", value: "Vacant" },
    { label: "Seller", value: "Unrelated Third Party" },
    { label: "Financing", value: "None Assumed" },
  ],
  disclaimer: "No actual parcel number, deed, survey, flood determination, or utility confirmation exists for this example. The visible road, nearby houses, and parcel shape do not establish legal access, actual boundaries, zoning, buildability, utility availability, flood risk, wetlands status, title condition, or market value. All of those require verification.",
};

export const parcelXRay = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The Parcel X-Ray"],
  intro:
    "The land looks simple. Let's see what the investment really contains. This is an educational illustration, not an automated property-verification service — select any layer to explore what an ordinary listing photograph cannot show you.",
  decisions: [
    {
      key: "boundaries",
      label: "Property Boundaries",
      status: "review" as const,
      statusLabel: "Needs Verification",
      action: "Are you buying the piece of ground you think you're buying?",
      explanation: "From above, the property looks like a neat rectangle. But aerial imagery isn't a legal survey. The actual property boundaries might differ from a digital map overlay — a fence might not sit on the property line, a neighboring driveway could cross part of the parcel, or an easement might affect where a structure can be placed.",
      takeaway: "A parcel outline on a map can help you locate land. It does not prove the property's legal boundaries.",
    },
    {
      key: "access",
      label: "Legal Access",
      status: "review" as const,
      statusLabel: "Needs Verification",
      action: "You can see a road. But do you have the legal right to use it?",
      explanation: "A property can appear to touch a road without having the legal access someone expects. A nearby path might cross privately owned property, a road may not be publicly maintained, or an apparent driveway might not have a recorded right of use. A property without legally sufficient access can be difficult to develop, finance, or sell.",
      takeaway: "Being able to reach land physically isn't the same as having the legal right to use the route.",
    },
    {
      key: "permitted-use",
      label: "Permitted Uses",
      status: "review" as const,
      statusLabel: "Needs Verification",
      action: "Could someone actually build on this lot?",
      explanation: "A vacant lot near houses might look like a future homesite, but nearby homes do not prove that another residence can be constructed on the parcel. Zoning, minimum lot sizes, setbacks, building permits, subdivision requirements, septic systems, and other applicable restrictions may control what is legally allowed.",
      takeaway: "An attractive homesite is only a real investment possibility if its legal and physical characteristics support the intended use.",
    },
    {
      key: "flooding",
      label: "Flooding and Wetlands",
      status: "prohibited" as const,
      statusLabel: "Potential Risk",
      action: "What does the ground look like after heavy rain?",
      explanation: "Land that looks dry in an aerial photograph may experience flooding, drainage problems, or seasonal wet conditions. Some parcels are within areas shown on FEMA flood hazard maps; others may be affected by drainage conditions not fully captured by available mapping. Wetlands can create additional environmental and development-restriction questions.",
      takeaway: "A dry-looking lot isn't automatically a low-risk or buildable lot.",
    },
    {
      key: "utilities",
      label: "Utilities and Infrastructure",
      status: "review" as const,
      statusLabel: "Connection Must Be Verified",
      action: "A power pole nearby doesn't mean the lot has power.",
      explanation: "Nearby electrical lines or a water meter down the street can look encouraging, but nearby infrastructure does not prove that a particular lot can connect to those services. Utility availability depends on the provider, existing capacity, legal rights, and connection requirements — and connecting services can create meaningful expenses.",
      takeaway: "Infrastructure nearby is a clue worth investigating, not proof that the land is ready to use.",
    },
    {
      key: "title",
      label: "Title, Taxes & Ongoing Obligations",
      status: "review" as const,
      statusLabel: "Professional Review May Be Necessary",
      action: "The land may be empty. The financial obligations aren't.",
      explanation: "Vacant land may not have tenants or a building, but it can still have ongoing expenses and legal issues — property taxes, association charges, maintenance, recorded restrictions, liens, and easements. An investor should understand what obligations come with the land, not simply what the seller wants for it.",
      takeaway: "The absence of a building doesn't mean the absence of expenses, obligations, or legal risk.",
    },
  ],
  note: "The lot didn't change. What you know about it did. Some answers might make the investment more appealing. Others might reveal expenses or restrictions that make it unsuitable — or extremely difficult to sell.",
};

export const xrayReveal = {
  eyebrow: "The X-Ray Reveal",
  heading: ["The Difference Between a Cheap Lot", "and an Interesting Investment Is What the Investigation Reveals."],
  goldLine: 1,
  paragraphs: [
    "At the beginning, the property looked simple — a small vacant lot, a street, nearby homes, a $15,000 asking price. Then we looked closer: boundaries, access, permitted use, flooding, utilities, title, taxes. The land itself never changed. But the questions became much more important.",
  ],
  featured: "A low asking price can sometimes be a warning sign. A seller may have a legitimate reason to offer a small parcel cheaply, or the price may reflect difficult access, restrictive zoning, missing utilities, drainage issues, or very few interested buyers. The asking price tells you what the seller wants — it does not tell you what the property is worth or whether anyone else will want it.",
};

export const realCostOfLot = {
  eyebrow: "The Real Cost of the $15,000 Lot",
  heading: ["The Asking Price Is $15,000.", "The Investment Doesn't Stop There."],
  intro:
    "All expenses are fictional educational assumptions, not real quotations or typical market rates. Unlike an occupied rental property, vacant land often produces no regular income — the investor may own it for years without receiving cash while property taxes and other expenses continue. For this hypothetical example, assume Jordan's IRA owns the property for two years.",
  figures: [
    { label: "Parcel Purchase Price", value: "$15,000" },
    { label: "Closing, Title & Acquisition Expenses", value: "$1,200" },
    { label: "Independent Survey Expense", value: "$650" },
    { label: "Other Due Diligence Expenses", value: "$350" },
    { label: "Two Years of Property Taxes", value: "$700" },
    { label: "Two Years of Maintenance", value: "$400" },
    { label: "Total Cash Spent Through Two Years", value: "$18,300" },
    { label: "Remaining IRA Cash", value: "$28,700" },
  ],
  disclaimer: "Jordan's starting IRA cash was $47,000. Buying land for $15,000 does not mean the investment costs exactly $15,000. The remaining money stays in the IRA — it does not become Jordan's personal spending money.",
};

export const threeEndings = {
  eyebrow: "The Three Possible Endings",
  heading: ["What If the Lot Sells for More?", "What If It Sells for Less?", "What If It Doesn't Sell?"],
  intro:
    "All three outcomes share the same acquisition and holding assumptions: $18,300 of total cash spent through two years, leaving $28,700 of remaining IRA cash. The comparison does not imply that any particular outcome is likely.",
  scenarios: [
    {
      key: "favorable",
      label: "Sells for $25,000",
      status: "A buyer eventually pays $25,000",
      description:
        "Net sale proceeds after $1,300 of selling expenses (title and closing costs, marketing, and other disposition expenses) return $23,700 to the IRA. The hypothetical lot sold for $10,000 more than its purchase price, but the investment gain was only $5,400 after the assumed expenses — this is the most important numerical revelation in the module.",
      figures: [
        { label: "Sale Price", value: "$25,000" },
        { label: "Net Sale Proceeds", value: "$23,700" },
        { label: "Illustrative Investment Gain", value: "$5,400" },
        { label: "Illustrative Ending IRA Value", value: "$52,400" },
      ],
      statement: "This is a simplified two-year result, not an annualized performance forecast, and it does not establish that a $15,000 vacant lot would likely sell for $25,000.",
    },
    {
      key: "unfavorable",
      label: "Sells for $17,000",
      status: "A buyer only offers $17,000",
      description:
        "Net sale proceeds after the same $1,300 of selling expenses return $15,700 to the IRA. The property sold for $2,000 more than its purchase price, but the investment still lost money after the assumed expenses — a powerful financial lesson that should not be mistaken for a celebration just because the sale price exceeded the purchase price.",
      figures: [
        { label: "Sale Price", value: "$17,000" },
        { label: "Net Sale Proceeds", value: "$15,700" },
        { label: "Illustrative Investment Loss", value: "$2,600" },
        { label: "Illustrative Ending IRA Value", value: "$44,400" },
      ],
      statement: "A higher selling price than the purchase price isn't automatically profit once acquisition, holding, and selling expenses are considered.",
    },
    {
      key: "unsold",
      label: "No Buyer After Two Years",
      status: "The land has not sold",
      description:
        "Two years pass. Jordan's IRA has paid the acquisition and holding expenses, but the land has not sold — there is no completed sale and no sale proceeds. The IRA still owns the property, and its current fair market value is unknown. An investment doesn't have to become worthless to create a problem; it can simply become difficult to sell.",
      figures: [
        { label: "Sale Price", value: "No Sale Completed" },
        { label: "Net Sale Proceeds", value: "$0" },
        { label: "Illustrative Investment Gain/Loss", value: "Not Calculated" },
        { label: "Illustrative Ending IRA Cash", value: "$28,700" },
      ],
      statement: "The property remains an asset, but the investment may be difficult to turn into cash. Property taxes and maintenance may continue, a buyer may not appear when expected, and the asking price may need to change.",
    },
  ],
  tableColumns: [
    { label: "Net Sale Proceeds", index: 1 },
    { label: "Illustrative Ending IRA Value", index: 3 },
  ],
  comparisonNote: "No sale no completed sale scenario calculates a realized gain or loss — the initial purchase expenditure is not treated as proof of present market value.",
  conclusion: "A higher selling price isn't automatically profit. And no sale means the investment isn't finished.",
};

export const whyLandDesirable = {
  eyebrow: "Why Would Someone Pay More for Vacant Land?",
  heading: ["What Could Make a Small Piece", "of Land More Desirable?"],
  steps: [
    { number: "01", title: "Location", description: "The surrounding area may become more desirable to buyers. But increased neighborhood activity does not guarantee higher property value." },
    { number: "02", title: "Usability", description: "Land with legally sufficient access, appropriate permitted uses, and feasible development characteristics may appeal to a wider range of buyers. Those conditions must be verified." },
    { number: "03", title: "Buyer Demand", description: "A builder, neighboring owner, homeowner, or investor may have a particular reason to purchase a parcel. But no buyer is guaranteed to exist." },
    { number: "04", title: "Market Changes", description: "Real estate prices can change. They may rise, fall, or remain stagnant for years." },
  ],
  note: "The potential investment opportunity comes from what buyers may eventually value, not from the mere fact that the land is inexpensive.",
};

export const ownershipAndPersonalUse = {
  eyebrow: "Who Actually Owns the Land?",
  heading: ["If Your IRA Buys the Lot,", "It Isn't Your Personal Property."],
  goldLine: 1,
  paragraphs: [
    "A Self-Directed IRA may be able to acquire qualifying vacant land through an appropriate custodial arrangement, but the property belongs to the IRA, not to the account owner personally. The IRA provides the purchase funds, legitimate property expenses are paid through the appropriate IRA arrangement, and if the property is sold, the sale proceeds belong to the IRA. Jordan cannot simply take cash from a property sale and deposit it into a personal checking account without following applicable IRA distribution rules.",
    "It may be tempting to use a scenic parcel for camping, parking an RV, or a future vacation cabin — but IRA-owned property cannot be used to provide prohibited personal benefits. The owner should not assume they may personally occupy, vacation on, or store personal belongings on IRA-owned land, and the same restrictions can affect certain family members and other disqualified persons.",
    "And if Jordan already owned a vacant lot personally, the IRA could not simply buy it from them. A sale or exchange between an IRA and its owner is generally a prohibited transaction — selling the parcel for a fair price does not automatically make the transaction permissible, and putting the property inside a personal LLC does not solve the problem. A separate qualifying property purchased from an unrelated seller is a different situation from selling personally owned land into your own IRA.",
  ],
  featured: "You direct qualifying investment decisions. The IRA is the investment owner.",
};

export const taxTreatment = {
  eyebrow: "The Tax Treatment",
  heading: ["What Happens to the Gain", "If the IRA Sells the Land?"],
  goldLine: 1,
  paragraphs: [
    "If Jordan's traditional Self-Directed IRA sells qualifying vacant land at a gain, the proceeds belong to the IRA. Under ordinary traditional IRA rules, investment earnings are generally not included in the account owner's current individual income merely because the IRA realizes a gain, but distributions of pretax traditional IRA amounts are generally taxable. Do not assume every land sale inside an IRA is automatically tax-free — repeated real estate dealing or certain business-like activities can raise unrelated business income tax questions, and debt-financed transactions can introduce additional considerations.",
    "An appropriate Self-Directed Roth IRA may also be able to purchase qualifying land, with qualified Roth distributions potentially free from federal income tax when applicable requirements are satisfied. But a Roth IRA does not eliminate every possible IRA-level tax or prohibited-transaction concern.",
  ],
  note: "The land investment and the IRA's tax category are separate parts of the financial picture.",
};

export const inspectionSheet = {
  eyebrow: "The Land Investor's Inspection Sheet",
  heading: ["Before Your IRA Buys the Lot,", "Ask These Questions."],
  steps: [
    { number: "01", title: "Ownership, Title & Boundaries", description: "Who owns the property, and does the seller have authority to convey it? Is a survey available, and are easements, encroachments, liens, or title defects relevant?" },
    { number: "02", title: "Access & Permitted Use", description: "Does the lot have legally sufficient access, and is it public or private? What do applicable laws and recorded restrictions allow, and is the intended use actually feasible?" },
    { number: "03", title: "Environmental Conditions", description: "What do official flood hazard sources show, and are there local drainage concerns? Are there potential wetlands, and could environmental restrictions affect use or liability?" },
    { number: "04", title: "Utilities & Financial Obligations", description: "Which utility providers serve the area, and can this parcel connect? What property taxes, association charges, or ongoing expenses might arise?" },
    { number: "05", title: "Market Value, Resale & IRA Compliance", description: "What actual comparable vacant-land sales support the asking price? How difficult might resale be, and does the custodian support direct land ownership without disqualified relationships?" },
  ],
  note: "A small lot may be easy to understand visually. A smart investment decision requires understanding much more than its appearance.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["It Was Just an Empty Lot.", "Until You Discovered What It Could Mean."],
  goldLine: 1,
  paragraphs: [
    "Every property has a story. Sometimes that story includes a compelling investment possibility. Sometimes it includes expenses, restrictions, or risks that are not obvious at first glance. A Self-Directed IRA may be able to own qualifying vacant land — it might be a small parcel in an established neighborhood, or another type of eligible property. And if the investment eventually succeeds, the IRA may benefit. But the outcome is never guaranteed.",
    "The important discovery is not that every inexpensive lot is a bargain. It's that retirement investing can sometimes extend beyond the conventional investment menu.",
  ],
  featured: "A small piece of land may represent a much bigger world of investment possibilities.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA buy vacant land?", answer: "Potentially, yes. IRA law does not generally prohibit investment real estate, including qualifying vacant land. The custodian must support the investment, and the acquisition must comply with applicable rules." },
  { question: "Can an IRA buy a lot for only $15,000?", answer: "Potentially. The purchase price alone does not determine eligibility. The property, investment expenses, account structure, custodial requirements, and legal restrictions matter." },
  { question: "Does the IRA need to own a business to buy land?", answer: "No. A Self-Directed IRA does not generally require its owner to operate a business." },
  { question: "Can a traditional IRA buy land?", answer: "An appropriately structured traditional Self-Directed IRA may purchase qualifying investment land, subject to the custodian and applicable restrictions." },
  { question: "Can a Roth IRA buy land?", answer: "An appropriately structured Self-Directed Roth IRA may also hold qualifying land. Roth IRA contribution and distribution rules continue to apply." },
  { question: "Can I buy an IRA-owned lot and build my future home on it?", answer: "IRA-owned land cannot be used to provide prohibited personal benefits. Buying property inside an IRA for intended personal residential use can violate IRA rules." },
  { question: "Can I camp or park my RV on land my IRA owns?", answer: "Do not assume so. Personal recreational use or storage of personal property on IRA-owned land can create prohibited personal-benefit concerns." },
  { question: "Can I sell my personally owned vacant lot to my IRA?", answer: "Generally, no. Sales or exchanges between an IRA and its owner are prohibited transactions." },
  { question: "Can my IRA buy land from a family member?", answer: "Transactions with certain disqualified family members, including a spouse, ancestors, lineal descendants, and spouses of lineal descendants, can be prohibited. The specific relationship and transaction must be evaluated." },
  { question: "Can I personally clear brush or improve IRA-owned land?", answer: "Do not assume so. Personal services and improvements involving IRA assets can create prohibited-transaction issues, even if no compensation is received." },
  { question: "Who pays the property taxes on IRA-owned land?", answer: "Legitimate property taxes and investment expenses should be handled through the appropriate IRA arrangement using IRA funds." },
  { question: "Does road frontage guarantee legal access?", answer: "No. Physical road frontage or a visible route does not always establish legally sufficient access. Relevant deeds, plats, easements, and other records should be reviewed." },
  { question: "If there are houses nearby, can I build on the vacant lot?", answer: "Not necessarily. The parcel's legal status, zoning, setbacks, development requirements, utility availability, and other factors may affect whether construction is permitted." },
  { question: "Can a lot outside a FEMA high-risk flood zone still flood?", answer: "Yes. Flooding can occur outside mapped high-risk areas. FEMA flood hazard maps are useful research tools but do not guarantee that a property will remain free of flooding." },
  { question: "Does a wetlands map prove that a lot is buildable?", answer: "No. Wetlands maps are screening resources and do not establish final development permissions or the presence or absence of regulated wetlands under every applicable law." },
  { question: "What happens if the IRA sells land for a profit?", answer: "The net sale proceeds generally belong to the IRA. Traditional and Roth IRA tax rules apply, and certain investment activities or structures may create additional tax considerations." },
  { question: "Is a vacant-land sale inside an IRA always tax-free?", answer: "No. Tax treatment depends on the account type, transaction structure, and investment activities. Certain business-like transactions can raise unrelated business income tax issues." },
  { question: "What happens if the IRA cannot sell the land?", answer: "The IRA may continue holding an illiquid investment while paying property-related expenses. Its current value may be difficult to determine, and liquidity needs may become challenging." },
  { question: "Does the custodian guarantee that the land is a good investment?", answer: "No. A legitimate Self-Directed IRA custodian does not necessarily determine a property's market value, buildability, title quality, or investment merit." },
  { question: "Is buying a $15,000 lot better than investing in stocks?", answer: "Not automatically. Land and conventional investments have different risks, costs, liquidity characteristics, and possible outcomes. The appropriate choice depends on the investor's circumstances." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the explanation that IRA law does not generally prohibit real estate investments.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions on selling personally owned property to an IRA, personal use, and dealings with disqualified persons.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Provides further explanations of prohibited sales, exchanges, services, and improper personal benefits.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS Publication 590-B", description: "Provides information on IRA distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "FEMA Flood Map Service Center", description: "Official public access to FEMA flood hazard mapping products. The maps are useful research resources, not guarantees against all flooding.", href: "https://msc.fema.gov/" },
  { title: "U.S. Fish and Wildlife Service: National Wetlands Inventory", description: "Provides mapped wetlands screening information. Does not establish regulatory jurisdiction or replace site-specific determinations.", href: "https://www.fws.gov/program/national-wetlands-inventory" },
  { title: "U.S. Environmental Protection Agency: All Appropriate Inquiries", description: "Explains environmental due diligence and potential contamination-related liability considerations.", href: "https://www.epa.gov/brownfields/brownfields-all-appropriate-inquiries" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of illiquid assets, valuation uncertainty, custodial limitations, fees, and fraud.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["An Empty Lot. A $15,000 Price Tag.", "A Whole New World of Investment Possibilities."],
  description:
    "You don't need to own an entire apartment complex to begin exploring real estate investments, and you don't have to operate a business. An appropriate Self-Directed IRA may be able to own qualifying vacant land — but the opportunity deserves serious investigation. Understand the property, the costs, and the ownership rules.",
  signature: "Jordan and the fictional Horizon Lot A in this module are entirely fictional educational illustrations.",
};
