export const hero = {
  eyebrow: "The Airbnb Investment",
  title: ["What If Your IRA Could Own", "a Vacation Rental?"],
  goldLine: 1,
  description:
    "Imagine a charming vacation rental. A guest books three nights. Another books a long weekend. A family reserves a week during the summer. Each reservation may generate revenue. But have you ever considered that an appropriate Self-Directed IRA may be able to own qualifying real estate used for short-term rentals? Don't confuse a beautiful property listing with a profitable investment — a $200 nightly price doesn't mean the house earns $200 every night. Cleaning, professional management, booking fees, insurance, property taxes, and vacancies can change the result, and short-term rentals can introduce legal and tax questions that ordinary residential rentals may not.",
  whoItsFor:
    "For people curious about vacation rentals, investors familiar with Airbnb and similar booking platforms, existing IRA owners, and anyone who doesn't realize certain IRA arrangements may support real estate investments.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const twoRoles = {
  eyebrow: "The Revelation",
  heading: ["The Property Could Be an Investment.", "The Guests Don't Make It Your Personal Vacation Home."],
  leftLabel: "The IRA",
  rightLabel: "The Individual",
  rows: [
    { left: "Owns the qualifying investment property.", right: "Directs permitted investment decisions." },
    { left: "Receives investment proceeds under the approved arrangement.", right: "Does not personally own the property." },
    { left: "Pays legitimate investment expenses.", right: "Does not personally collect booking revenue." },
    { left: "Bears the financial risks.", right: "Cannot use the property for prohibited personal purposes." },
  ],
  footnote: "The retirement account may be the real estate investor. That does not make the vacation rental personally available to the account owner.",
};

export const elenaStory = {
  eyebrow: "Meet the Investor",
  heading: ["Elena Has $350,000 in Her IRA.", "She Has Never Owned a Short-Term Rental Through It."],
  stories: [
    {
      label: "Illustrative First-Time Short-Term Rental Investor",
      headline: "Elena has used vacation rental platforms as a guest. She's never considered short-term rental real estate as an investment owned through a retirement account.",
      scenario:
        "Elena is 41, a marketing director with no business ownership, limited real estate experience, and no vacation rental experience. She has $350,000 in a traditional IRA. For this illustration, assume Elena completes an eligible trustee-to-trustee transfer to an appropriate traditional Self-Directed IRA arrangement whose custodian supports the proposed real estate investment. The account remains a traditional IRA; no Roth conversion is assumed.",
      realization: "What if her IRA owned a property that guests could book? What could the nightly revenue look like? What expenses would the property have? And could that kind of rental activity create special tax problems?",
      risk: "Elena is a fictional illustration, not a verified Roth Academy customer. Those are exactly the questions this lesson answers.",
    },
  ],
};

export const bluebirdBungalowProfile = {
  eyebrow: "Meet Bluebird Bungalow",
  heading: ["One Beautiful Property. A $200 Nightly Price.", "Three Very Different Outcomes."],
  intro:
    "For the financial exercise only, assume the property's short-term rental use is permitted under applicable laws and private restrictions, and that necessary permits, registration, and safety requirements have been appropriately addressed — fictional assumptions that would each require independent verification in a real transaction. Bluebird Bungalow is not an actual property, no particular city has approved it, the $200 rate is hypothetical, and it is not listed for reservation.",
  figures: [
    { label: "Property Name", value: "Bluebird Bungalow (Fictional)" },
    { label: "Property Type", value: "Two-Bedroom Detached House" },
    { label: "Illustrative Purchase Price", value: "$220,000" },
    { label: "Financing", value: "None" },
    { label: "Guests", value: "Unrelated Third Parties" },
    { label: "Management", value: "Independent Professional Operator" },
  ],
  disclaimer: "Personal use by Elena is not modeled at any point in this lesson. No financial result is guaranteed.",
};

export const actualAcquisitionCost = {
  eyebrow: "The Property's Actual Acquisition Cost",
  heading: ["The House Costs $220,000.", "Getting It Ready Requires More."],
  intro:
    "A short-term rental involves more than owning a house — guests may expect a furnished property with comfortable beds, kitchen equipment, linens, internet, and furniture, plus a property that is legally permitted and operationally ready to receive reservations. Those requirements can make the initial investment more expensive than the house's purchase price. The $250,000 figure below is an illustrative cash expenditure, not a verified market cost, and all ownership, furnishing, and compliance expenses require qualified review.",
  figures: [
    { label: "Purchase Price", value: "$220,000" },
    { label: "Closing & Acquisition Expenses", value: "$6,000" },
    { label: "Furniture, Furnishings & Initial Equipment", value: "$22,000" },
    { label: "Initial Setup & Compliance Expenses", value: "$2,000" },
    { label: "Total Initial Cash Expenditure", value: "$250,000" },
    { label: "Remaining IRA Cash", value: "$100,000" },
  ],
  disclaimer: "A property's purchase price isn't the same as the amount required to make it ready for guests. And before getting to the booking calendar: 365 nights at $200 is a theoretical $73,000 of full-calendar room charges — the arithmetic result of multiplying 365 by $200, not a revenue forecast, since it assumes every night is booked with no cancellations or downtime.",
};

export const bookingCalendarIllusion = {
  eyebrow: "The Booking Calendar Illusion",
  heading: ["The Same $200 Nightly Rate Can Lead to", "Very Different Financial Results."],
  intro:
    "The same property and the same $200 nightly rate are used in all three scenarios. Shared assumptions: 365 total calendar nights, an average completed stay of three nights, a 15.5% platform host fee, 12% independent property management, $85 of cleaning and turnover expense per completed stay, and $13,500 of annual fixed operating expenses. No discounts, cancellations, refunds, or uncollected charges are modeled within the three scenarios, and guest-paid occupancy taxes are excluded from the room-charge figures below.",
  scenarios: [
    {
      key: "strong",
      label: "Strong Booking Year",
      status: "Guests book 240 nights",
      description:
        "240 booked nights at an average three-night stay length produce 80 completed stays, about 65.8% occupancy, and $48,000 of gross room charges. Platform fees of $7,440 (15.5%), independent management of $5,760 (12%), $6,800 of guest-turnover expense (80 stays × $85), and $13,500 of fixed annual expenses total $33,500 of modeled expenses — leaving $14,500 of net annual cash. A $48,000 booking year isn't automatically a $48,000 profit.",
      figures: [
        { label: "Booked Nights (Occupancy)", value: "240 Nights (~65.8%)" },
        { label: "Completed Stays", value: "80" },
        { label: "Gross Room Charges", value: "$48,000" },
        { label: "Total Modeled Expenses", value: "$33,500" },
        { label: "Net Annual Cash Movement", value: "$14,500" },
        { label: "Ending Available IRA Cash", value: "$114,500" },
      ],
      statement: "The IRA still owns the property. Its current market value is not calculated in this experience, and cash personally received by Elena from the property is $0.",
    },
    {
      key: "middle",
      label: "Middle Booking Year",
      status: "Guests book 180 nights",
      description:
        "180 booked nights produce 60 completed stays, about 49.3% occupancy, and $36,000 of gross room charges. Platform fees of $5,580, management of $4,320, $5,100 of turnover expense (60 × $85), and the same $13,500 of fixed expenses total $28,500 — leaving $7,500 of net annual cash. The nightly price didn't change; the house didn't change; the number of paid nights changed everything.",
      figures: [
        { label: "Booked Nights (Occupancy)", value: "180 Nights (~49.3%)" },
        { label: "Completed Stays", value: "60" },
        { label: "Gross Room Charges", value: "$36,000" },
        { label: "Total Modeled Expenses", value: "$28,500" },
        { label: "Net Annual Cash Movement", value: "$7,500" },
        { label: "Ending Available IRA Cash", value: "$107,500" },
      ],
      statement: "The property remains an IRA investment. Its current value is unknown.",
    },
    {
      key: "slow",
      label: "Slow Booking Year",
      status: "Guests only book 90 nights",
      description:
        "90 booked nights produce 30 completed stays, about 24.7% occupancy, and $18,000 of gross room charges. Platform fees of $2,790, management of $2,160, $2,550 of turnover expense (30 × $85), and the same $13,500 of fixed expenses total $21,000 — exceeding gross room charges and producing negative $3,000 of net annual cash. A vacation rental can have paying guests and still lose money.",
      figures: [
        { label: "Booked Nights (Occupancy)", value: "90 Nights (~24.7%)" },
        { label: "Completed Stays", value: "30" },
        { label: "Gross Room Charges", value: "$18,000" },
        { label: "Total Modeled Expenses", value: "$21,000" },
        { label: "Net Annual Cash Movement", value: "-$3,000" },
        { label: "Ending Available IRA Cash", value: "$97,000" },
      ],
      statement: "The guests actually stayed, but fixed and variable operating expenses exceeded modeled revenue — the investment experienced negative operating cash flow.",
    },
  ],
  tableColumns: [
    { label: "Net Annual Cash Movement", index: 4 },
    { label: "Ending Available IRA Cash", index: 5 },
  ],
  comparisonNote: "All figures are hypothetical and do not represent actual historical results, expected future performance, or verified occupancy benchmarks. No property appreciation or financing is modeled, and potential IRA-level income taxes and custodial charges are excluded.",
  conclusion: "The nightly rate didn't tell you the investment result. The booking calendar and expenses did.",
};

export const turnoverComparison = {
  eyebrow: "A Booked Night Is Not a Completed Stay",
  heading: ["Why the Number of Guest Turnovers Matters."],
  leftLabel: "Two Three-Night Stays",
  rightLabel: "Six One-Night Stays",
  rows: [
    { left: "Six booked nights, two completed stays.", right: "Six booked nights, six completed stays." },
    { left: "Gross room charges: $1,200.", right: "Gross room charges: $1,200." },
    { left: "Assumed turnover expense: 2 × $85 = $170.", right: "Assumed turnover expense: 6 × $85 = $510." },
  ],
  footnote: "Two properties can rent for the same number of nights and collect the same room charges while having very different turnover costs — $340 more in modeled turnover expense for the second property. This illustration compares turnover expenses only; it is not a complete profit calculation.",
};

export const fixedExpensesAndPlatformFee = {
  eyebrow: "Where Does the Money Really Go?",
  heading: ["The House Still Costs Money", "When Nobody Is Staying There."],
  intro:
    "Some expenses increase as bookings increase — platform fees, professional management, and cleaning and turnovers. Others continue even when the property is empty — property taxes, insurance, utilities and internet, repairs and maintenance, licenses and compliance, and furnishing and equipment replacement. These fixed-expense amounts are only educational examples, not cost quotations or typical industry averages; some properties may also face HOA charges, pest control, landscaping, or other costs not modeled here.",
  figures: [
    { label: "Property Taxes (Annual)", value: "$3,400" },
    { label: "Insurance (Annual)", value: "$2,400" },
    { label: "Utilities & Internet (Annual)", value: "$3,600" },
    { label: "Routine Repairs & Maintenance (Annual)", value: "$2,000" },
    { label: "Permits, Inspection & Compliance (Annual)", value: "$700" },
    { label: "Furnishing & Equipment Replacement (Annual)", value: "$1,400" },
    { label: "Total Annual Fixed Operating Expenditure", value: "$13,500" },
    { label: "Illustrative Platform Fee (3-Night, $600 Reservation)", value: "$93 (15.5%)" },
  ],
  disclaimer: "The guest's booking price isn't necessarily the amount the IRA receives — a $600 three-night reservation nets $507 after the modeled 15.5% platform fee alone, before independent management, cleaning, and other property expenses. The modeled 15.5% reflects Airbnb's publicly described common single-fee arrangement in 2026, subject to change and exceptions; actual fees must be verified for the specific listing.",
};

export const managerAndTaxSurprise = {
  eyebrow: "The Professional Manager and the Tax Surprise",
  heading: ["Someone Has to Handle the Guests.", "And the IRS Looks at What the Operation Actually Does."],
  goldLine: 1,
  paragraphs: [
    "Short-term rental properties can involve frequent operational tasks — guest questions, reservation changes, access coordination, cleaning arrangements, and maintenance. An IRA owner should not assume they can personally act as the unpaid or compensated vacation rental operator; personal services, disqualified-person transactions, and improper personal benefits can create prohibited-transaction concerns. Our fictional independent manager receives 12% of room charges, a modeling assumption, not a verified typical fee. Using a genuinely independent management arrangement can help separate the owner's permitted investment direction from day-to-day hospitality operations, but it does not automatically resolve every tax issue — services provided by an unrelated property manager can still be relevant when determining whether the overall activity is treated as rental income or a hospitality-style business for IRA-level tax purposes.",
    "Ordinary rent from real property is generally excluded from unrelated business taxable income under applicable federal rules, but that tax treatment can change when an activity involves certain services to guests. The IRS distinguishes ordinary real property rentals — providing the space, ordinary utilities, routine maintenance, services customarily associated with renting the property — from hospitality-type services such as meals, in-stay housekeeping or maid service, and substantial concierge-style guest assistance. Short rental duration alone does not automatically determine whether income is excluded from unrelated business taxable income, and calling an operation a rental does not automatically make the income exempt — the actual services, property, contract, and business activity must be reviewed. Cleaning the property between unrelated guest reservations is not necessarily the same as providing maid service to guests during their occupancy, but turnover cleaning does not automatically eliminate the risk either; the complete facts matter.",
  ],
  featured: "The IRS looks at what the operation actually does, not just what you call it.",
};

export const hospitalityServiceSpectrum = {
  eyebrow: "The Hospitality Service Spectrum",
  heading: ["Renting a Space and Providing Guest Services", "Can Be Different Activities."],
  steps: [
    { number: "01", title: "A Furnished House", description: "The property is rented to guests, the main arrangement is the use of the space, and ordinary property services are provided." },
    { number: "02", title: "Guest Turnovers", description: "The property is cleaned and prepared between reservations, and the operator coordinates access and readiness — the facts require review in context." },
    { number: "03", title: "Extensive Guest Services", description: "The operation provides in-stay housekeeping, meals, concierge-style assistance, or other significant services to occupants, which can raise a different tax analysis." },
  ],
  note: "These categories are illustrative, not an official IRS classification system — no category is automatically exempt or automatically taxable solely from its appearance. The type and extent of guest services can change the tax questions surrounding a Self-Directed IRA-owned short-term rental.",
};

export const ubitAndLocalRegulation = {
  eyebrow: "Unrelated Business Income Tax and Local Rules",
  heading: ["A Retirement Account Can Owe Tax", "Before You Withdraw Anything — If the Rules Allow It."],
  goldLine: 1,
  paragraphs: [
    "Many investors associate IRAs with favorable tax treatment, but certain business activities can create taxes inside the retirement account itself — commonly discussed under the unrelated business income tax rules, with the taxable amount described as unrelated business taxable income. A short-term rental involving substantial guest services may require analysis under these rules, debt-financed real estate can create tax obligations under separate rules, and Form 990-T may be relevant. A Roth IRA is not automatically exempt from all unrelated business income tax issues — a qualified, tax-free Roth distribution does not eliminate every potential tax on investment activity inside the account.",
    "Beyond taxes, local rules determine whether short-term rental activity is even permitted at all. Some jurisdictions require registration, a license, or a permit; others restrict rental periods, limit the number or location of short-term rentals, or are subject to private association restrictions. The fact that a booking platform allows someone to create a listing does not prove the underlying property use is lawful. And some jurisdictions impose lodging, occupancy, hotel, or tourism taxes on short-term stays — in some arrangements a platform collects and remits certain taxes, but the operator may be responsible for others; the fact that a platform handles one tax does not guarantee it handles every applicable tax. For the three booking scenarios above, guest-paid occupancy taxes are excluded from the $200 nightly room-charge calculation and are assumed addressed separately.",
  ],
  note: "If the property cannot legally operate as a short-term rental, the projected booking revenue may not be available. Money collected to satisfy a tax obligation should not be confused with money the investment earns.",
};

export const cancellationsSeasonalityAndRepairStress = {
  eyebrow: "Cancellations, Seasonality, and an Unexpected Repair",
  heading: ["A Reservation Isn't Always Money the Property Keeps.", "And One Bad Expense Can Erase a Strong Year."],
  intro:
    "Guests may cancel, reservations may be shortened, refunds may apply, and the operator may need to block nights for maintenance — a confirmed reservation is not necessarily the same as a completed, paid stay, and our three scenarios count only booked nights assumed to be completed and fully paid. A vacation-oriented rental may also experience significant seasonal demand swings; our three scenarios use a constant $200 rate to keep the arithmetic simple, but real-world average nightly rates may fluctuate significantly across twelve months. As a separate stress illustration using the Strong Booking Year, assume Bluebird Bungalow experiences a costly, unexpected $18,000 repair (beyond the $2,000 of routine repairs already included in fixed expenses) during that year.",
  figures: [
    { label: "Strong-Year Net Annual Cash (Before Repair)", value: "$14,500" },
    { label: "Unexpected Repair Expense", value: "$18,000" },
    { label: "Revised Annual Cash Movement", value: "-$3,500" },
    { label: "Ending Available IRA Cash", value: "$96,500" },
  ],
  disclaimer: "This is an alternative stress example, not added to the primary three scenarios, and it does not model additional lost bookings the repair's downtime could cause — in reality the result could be worse. Even a busy booking year can become financially disappointing when unexpected property expenses arise. Booking platforms may offer certain host protections, but those should not substitute for evaluating appropriate property and liability insurance, since ordinary homeowner coverage may not adequately cover short-term rental activity.",
};

export const personalUseAndHostingBoundary = {
  eyebrow: "The Personal-Use and Hosting Boundary",
  heading: ["The Vacation Rental May Be Beautiful.", "That Doesn't Make It Your Vacation Home."],
  goldLine: 1,
  paragraphs: [
    "Suppose Elena sees an empty weekend on the calendar — could she stay there, bring friends, or let her parents or child visit? IRA-owned property cannot be used to provide prohibited personal benefits to the account owner or other disqualified persons, and paying a supposed market rate does not automatically eliminate a prohibited transaction when a disqualified person is using the property. Do not assume the IRA owner may spend a free weekend in the property, block nights for personal use, receive personal discounts, or pay personal expenses using the property's operating funds. Disqualified-person rules concern legally defined relationships — not every family member, friend, or unrelated guest is automatically disqualified, but the specific relationships and benefits matter.",
    "Operating a short-term rental can also involve extensive personal activity: cleaning, changing linens, checking in guests, providing supplies, arranging repairs, and communicating with guests. An IRA owner should not assume they may personally provide all of these services for an IRA-owned property — personal labor, compensation, and other dealings involving a disqualified person can raise prohibited-transaction concerns, and working for free does not automatically make the arrangement permissible. For Bluebird Bungalow, an independent professional manager handles reservations, unrelated workers provide paid cleaning and turnovers, and Elena does not receive a management fee, personally perform housekeeping, or stay at the property. The manager's independence helps address certain ownership and service concerns, but the services provided to guests may still matter for unrelated business income tax classification — these are two different legal questions.",
  ],
  note: "An IRA-owned vacation rental is an investment property, not a personal getaway. The investor's personal involvement and the operation's tax treatment must each be evaluated separately.",
};

export const hostIdentityAndFinancing = {
  eyebrow: "Who Is the Host — and Who's Lending?",
  heading: ["The Booking Account Must Match the Real Owner.", "And Financing Changes the Tax Picture."],
  goldLine: 1,
  paragraphs: [
    "A vacation rental platform may have requirements regarding host identity, legal ownership, authorized managers, payment accounts, tax reporting, licenses, and local registration. An IRA-owned property should not be placed into an ordinary personal payout arrangement without appropriate legal, custodial, and platform review — do not assume every short-term rental platform supports every Self-Directed IRA ownership structure directly, that a personally created host account can receive investment proceeds that legally belong to the IRA, or that an IRA LLC automatically resolves every hosting, licensing, or prohibited-transaction issue.",
    "Some real estate investors use mortgages, but an IRA cannot simply borrow under the same arrangements used for personally owned real estate — personal guarantees and prohibited extensions of credit can create serious legal concerns. Certain arrangements may use specialized nonrecourse financing, but debt-financed property may generate unrelated debt-financed income under applicable federal law, creating IRA-level tax obligations. Bluebird Bungalow is purchased with cash and no financing is included in the three booking scenarios, keeping the primary financial lesson focused on reservations, expenses, and IRA ownership.",
  ],
  note: "The investment needs an operating arrangement that respects both the property's legal ownership and the platform's actual requirements. Borrowing may create additional purchasing power, but it also introduces new financial, legal, and tax risks.",
};

export const traditionalVsRoth = {
  eyebrow: "Traditional Versus Roth IRA",
  heading: ["The Property May Be the Same.", "The Retirement-Account Tax Rules May Be Different."],
  leftLabel: "Traditional Self-Directed IRA",
  rightLabel: "Self-Directed Roth IRA",
  rows: [
    { left: "May own qualifying investment real estate under the correct arrangement; investment receipts generally belong to the IRA.", right: "May also be able to hold qualifying investment real estate." },
    { left: "Distributions of pretax traditional IRA amounts are generally taxable.", right: "Qualified Roth IRA distributions can be free from federal income tax when applicable requirements are satisfied." },
    { left: "Certain investments and operating activities may also create IRA-level taxes.", right: "Roth status does not automatically eliminate unrelated business income tax concerns, and personal-use and prohibited-transaction rules still apply." },
  ],
  footnote: "Self-direction describes the broader investment menu. Traditional and Roth describe different retirement-account tax arrangements. Changing an IRA's investment choices is not the same as changing its tax category.",
};

export const longTermVsShortTerm = {
  eyebrow: "A Different Operating Model",
  heading: ["Same House.", "Very Different Operating Questions."],
  leftLabel: "Long-Term Residential Rental",
  rightLabel: "Short-Term Rental",
  rows: [
    { left: "A tenant signs a longer lease with monthly rent and less frequent turnover.", right: "Frequent guest reservations with variable nightly rates and seasonal occupancy." },
    { left: "A generally more predictable contractual payment schedule, though payment is never guaranteed.", right: "Frequent cleaning, booking platform fees, hospitality services, and cancellations." },
    { left: "Different, generally more familiar local regulations.", right: "Different licensing requirements and lodging taxes, with greater day-to-day operating activity." },
  ],
  footnote: "A short-term stay does not automatically create unrelated business taxable income, and a long-term lease does not automatically eliminate every tax concern — the specific facts, financing, services, and legal arrangement determine the analysis. If the IRA eventually sells the property, sale proceeds belong to the IRA, but the financial result depends on the sale price, acquisition and furnishing costs, operating cash flow, selling expenses, and possible tax obligations; if the property was operated in a way that creates an unrelated trade or business, the disposition's tax treatment may require additional analysis.",
};

export const reserveQuestion = {
  eyebrow: "The Reserve Question",
  heading: ["What Happens When Bookings Slow Down", "but the Bills Keep Arriving?"],
  goldLine: 1,
  paragraphs: [
    "Short-term rental investing can involve unpredictable income — some months busy, others slow, with repairs arising unexpectedly, permits requiring renewal, and insurance increasing. The account must be able to handle legitimate obligations using a lawful funding arrangement. Elena begins with $350,000; after the IRA spends $250,000 acquiring and preparing the property, $100,000 remains in IRA cash, and the three booking scenarios above show how annual operations can increase or decrease that balance. This is not a recommendation that every investor maintain the same amount or percentage in cash — the appropriate level depends on the property, expenses, other assets, and personal financial circumstances.",
  ],
  featured: "A short-term rental may be a tangible asset, but it still needs available cash to operate.",
};

export const fiveMisconceptions = {
  eyebrow: "The Five Most Important Misconceptions",
  heading: ["Five Things a Beautiful Booking Calendar", "Doesn't Tell You."],
  steps: [
    { number: "01", title: "A $200 Rate Means $73,000 a Year", description: "The property would have to rent every single night at that rate, with no cancellations or downtime, to produce $73,000 in room charges." },
    { number: "02", title: "Gross Booking Revenue Is Profit", description: "Platform fees, management, turnovers, and fixed expenses reduce the result." },
    { number: "03", title: "A Rental House Is Automatically Exempt From IRA Tax", description: "The property's operating activities, services, and financing can change the tax analysis." },
    { number: "04", title: "The IRA Owner Can Personally Host Guests", description: "Owner-provided services, compensation, and other transactions may create prohibited-transaction concerns." },
    { number: "05", title: "A Property Listed on Airbnb Is Automatically Legal", description: "Local law, permits, private restrictions, and platform requirements must be verified." },
  ],
  note: "The most valuable investment information often isn't visible on the reservation calendar.",
};

export const researchSheet = {
  eyebrow: "The Vacation Rental Investor's Research Sheet",
  heading: ["Before Your IRA Buys a Short-Term Rental,", "Ask These Questions."],
  steps: [
    { number: "01", title: "Ownership & Legality", description: "Does the custodian support the investment, and what local permits, zoning rules, occupancy limits, and private restrictions apply?" },
    { number: "02", title: "Listing, Guests & Operator", description: "Can the platform support the correct legal ownership and payout arrangement, are guests unrelated parties, and what services will an independent manager provide?" },
    { number: "03", title: "Guest Services & Demand", description: "Could the activity be treated as a hospitality-type business for tax purposes, what evidence supports occupancy and rate assumptions, and how many guest turnovers are expected?" },
    { number: "04", title: "Fees & Taxes", description: "Consider booking platform fees, management costs, occupancy taxes, unrelated business income tax, and any financing-related tax issues." },
    { number: "05", title: "Insurance & Downside", description: "Does the policy cover the intended rental activity and liability risks, and can the IRA continue paying expenses during an extended downturn or guest damage?" },
    { number: "06", title: "Changing Rules & Exit Plan", description: "Could the property still be used lawfully and economically if short-term rental rules change, and could it be sold or operated another permitted way?" },
  ],
  note: "A beautiful rental listing may attract guests. A serious investment evaluation must look far beyond the photographs and nightly price.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["A Beautiful Vacation Rental.", "A Financial Story You Can Finally Understand."],
  goldLine: 1,
  paragraphs: [
    "Vacation rentals can be exciting — a beautiful property, new guests, different seasons, and the possibility of collecting revenue from short stays. But the investment deserves more than an attractive booking calendar. It requires a real understanding of occupancy, expenses, guest turnover, local laws, property management, tax treatment, and the boundaries between retirement-account assets and personal finances.",
    "An appropriate Self-Directed IRA may be able to own qualifying real estate used for short-term rentals, opening another investment possibility beyond the conventional brokerage menu. But the outcome isn't guaranteed, and the structure matters.",
  ],
  featured: "The opportunity isn't simply charging guests for a place to stay. It's discovering what your retirement account might be able to own, and understanding the investment before committing your savings.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA own an Airbnb?", answer: "Potentially. An appropriate Self-Directed IRA may own qualifying real estate used for short-term rental activity when the legal ownership, custodian, local regulations, operating arrangements, and applicable tax rules are properly addressed. Airbnb is a booking platform, not a separate type of IRA investment." },
  { question: "Can a Roth IRA own a short-term rental?", answer: "Potentially. A properly structured Self-Directed Roth IRA may own qualifying rental real estate. Roth IRA rules, prohibited transactions, and possible IRA-level taxes still apply." },
  { question: "Can an IRA buy a furnished vacation home?", answer: "Potentially, if the custodial and legal arrangements support the real estate, furnishings, and intended use. The property must remain an appropriate investment, not a personal vacation residence." },
  { question: "Can an IRA collect Airbnb rental income?", answer: "An appropriate IRA arrangement may receive legitimate investment proceeds from qualifying short-term rental activity. The receipts must be handled through the correct legal and financial structure." },
  { question: "Can Airbnb payouts go into my personal checking account?", answer: "Do not assume so. If the property belongs to an IRA, investment receipts belong to the IRA arrangement and should not be treated as personal income." },
  { question: "Can I personally stay in my IRA-owned vacation rental?", answer: "Personal use can constitute a prohibited transaction. The account owner should not treat an IRA-owned vacation rental as a place for personal trips." },
  { question: "Can my spouse or children stay in the property?", answer: "Use by certain disqualified family members can create prohibited-transaction problems. Specific relationships and transactions must be reviewed." },
  { question: "Can I pay the regular nightly rate and use my IRA-owned property?", answer: "Paying a purported market rate does not automatically make a transaction involving a disqualified person permissible." },
  { question: "Can I personally clean or manage the rental?", answer: "Do not assume so. Owner-provided services, compensation, and other activities involving IRA-owned property can raise prohibited-transaction concerns." },
  { question: "Can an unrelated property manager operate the rental?", answer: "Potentially. An appropriate independent management arrangement may be used, subject to the legal, custodial, tax, and operational details." },
  { question: "Does outsourcing management eliminate unrelated business income tax?", answer: "Not necessarily. Services performed for guests through an independent operator may still affect the tax classification of the underlying activity." },
  { question: "Is all Airbnb income subject to unrelated business income tax?", answer: "No universal rule applies. The actual rental arrangement, services provided, financing, and other circumstances matter. Short-term rental activity should be evaluated under the relevant IRS rules." },
  { question: "Is all Airbnb income exempt from unrelated business income tax?", answer: "No. Hospitality-style services and other circumstances may prevent the ordinary real property rental exclusion from applying." },
  { question: "Does the IRS consider cleaning between stays the same as hotel maid service?", answer: "Not necessarily. Cleaning between reservations and providing maid service to guests during their stay are different factual arrangements. The precise activities and overall operation require review." },
  { question: "Does renting for fewer than seven days automatically create UBIT?", answer: "Not automatically. Rules about short-term rentals in other parts of the tax code should not be treated as a universal UBIT classification test. The relevant IRA-level tax analysis depends on the actual activity and applicable law." },
  { question: "Can a Self-Directed IRA operate a hotel?", answer: "Hotel-like operations can raise substantially different tax, business, custodial, and prohibited-transaction concerns. Do not assume an ordinary real estate investment exemption applies." },
  { question: "Does a $200 nightly price mean $73,000 of annual revenue?", answer: "No. That would require all 365 nights to be booked and paid at $200 in an ordinary year. Actual occupancy, rates, cancellations, and other circumstances determine revenue." },
  { question: "What is occupancy?", answer: "Occupancy generally describes the proportion of available rental nights that are actually booked or occupied under the particular measurement." },
  { question: "Do more bookings always mean more profit?", answer: "No. Bookings create revenue but can also create platform fees, cleaning, management, and other expenses." },
  { question: "Why does the number of guest stays matter?", answer: "More guest turnovers can increase cleaning, laundry, supply, and operational costs, even when the total number of booked nights is unchanged." },
  { question: "Does Airbnb charge hosts a fee?", answer: "Yes. Platform fees apply according to the current terms. Airbnb described a common 15.5% host fee arrangement in 2026, with exceptions. Actual fees should be confirmed for the specific listing and location." },
  { question: "Can a vacation rental lose money despite receiving bookings?", answer: "Yes. Operating expenses, low occupancy, repairs, fees, and other costs can exceed the booking revenue." },
  { question: "What happens if guests cancel?", answer: "The financial effect depends on the applicable reservation, refund, and platform policies. A reservation is not always the same as completed, retained revenue." },
  { question: "Does a short-term rental need a permit?", answer: "Possibly. Local licensing, registration, zoning, and other requirements vary significantly." },
  { question: "Can an HOA prohibit short-term rentals?", answer: "Depending on its valid governing documents and applicable law, a homeowners association or similar private arrangement may restrict short-term rentals." },
  { question: "Does Airbnb automatically pay all lodging taxes?", answer: "No. Platforms may collect and remit certain taxes in some locations, but the operator must verify every applicable obligation." },
  { question: "Does regular homeowners insurance cover an Airbnb investment?", answer: "Do not assume so. Short-term rental activity can require different or additional property and liability coverage." },
  { question: "Can an IRA-owned property use a mortgage?", answer: "Certain specialized arrangements may permit financing, but personal guarantees, prohibited transactions, and unrelated debt-financed income tax concerns require careful review." },
  { question: "Can I sell my personally owned Airbnb property to my IRA?", answer: "Sales between an IRA and its owner generally are prohibited transactions. Using an LLC does not automatically eliminate the problem." },
  { question: "Does a Self-Directed IRA custodian guarantee that the vacation rental is a good investment?", answer: "No. A legitimate custodian does not necessarily evaluate rental demand, local permits, operating expenses, valuation, or profitability." },
  { question: "Is a vacation rental better than a long-term rental?", answer: "Not automatically. The two models differ in income timing, turnover, expenses, management, taxes, regulations, and operating risk." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the general ability of IRAs to hold qualifying real estate and the ability of custodians to limit the investments they support.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports the discussion of personal use, disqualified persons, personal benefits, and transactions involving IRA-owned property.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Provides additional information about prohibited transactions and dealings with disqualified persons.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Exclusion of Rent From Real Property From UBTI", description: "Supports the distinction between qualifying real property rental income and arrangements involving certain services to occupants — especially important for this module.", href: "https://www.irs.gov/charities-non-profits/exclusion-of-rent-from-real-property-from-unrelated-business-taxable-income" },
  { title: "IRS Publication 598", description: "Provides detailed information concerning unrelated business income, rents from real property, services rendered to occupants, and debt-financed income.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Unrelated Business Income From Debt-Financed Property", description: "Supports the discussion of financed real estate and possible IRA-level tax treatment.", href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514" },
  { title: "IRS: Form 990-T Instructions", description: "Provides relevant tax filing and reporting guidance for unrelated business income.", href: "https://www.irs.gov/instructions/i990t" },
  { title: "IRS Publication 590-A", description: "Provides IRA funding, transfer, and other retirement-account information.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Supports IRA distribution rules and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "Airbnb: Learn About Hosting Regulations", description: "Provides information about researching local regulations, permits, and taxes.", href: "https://www.airbnb.com/resources/hosting-homes/a/learn-about-hosting-regulations-7" },
  { title: "Airbnb: Local Laws and Taxes", description: "Explains that hosts may need to comply with local licensing, registration, zoning, and tax requirements.", href: "https://www.airbnb.com/help/article/3029" },
  { title: "Airbnb: How Much Does Airbnb Charge Hosts?", description: "Provides the platform's publicly described host service fee structure.", href: "https://www.airbnb.com/resources/hosting-homes/a/how-much-does-airbnb-charge-hosts-288" },
  { title: "Airbnb: How Hosting Payouts Work", description: "Explains the relationship between reservation charges, platform fees, other charges, and payouts.", href: "https://www.airbnb.com/resources/hosting-homes/a/how-youll-get-paid-for-hosting-20" },
  { title: "Airbnb: Guest Taxes", description: "Provides information about tax collection and remittance arrangements.", href: "https://www.airbnb.com/help/article/1570" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of self-directed IRA custodian limitations, valuation, illiquid investments, fees, and fraud risk.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["A Beautiful Vacation Rental.", "A Fascinating IRA Investment Possibility."],
  description:
    "An appropriate Self-Directed IRA may be able to own qualifying real estate used for short-term rentals, collecting booking revenue and paying legitimate expenses through the account. But a nightly rate isn't a revenue forecast, guest services can change the tax picture, and the property can never become a personal getaway.",
  signature: "Elena and the fictional Bluebird Bungalow in this module are entirely fictional educational illustrations.",
};
