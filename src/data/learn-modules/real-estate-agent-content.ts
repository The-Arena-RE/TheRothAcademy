export const hero = {
  eyebrow: "The Real Estate Agent",
  title: ["You've Helped Other People Buy Real Estate.", "What Could Your Retirement Plan Own?"],
  goldLine: 1,
  description:
    "You've walked through hundreds of properties, studied neighborhoods, and negotiated contracts. But have you ever considered that a qualifying Self-Directed 401(k) might be able to own investment property? If you operate an eligible real estate business, you may be able to establish a retirement plan that offers investments beyond the conventional stock-market menu.",
  whoItsFor: "You already understand the world of property. Now discover what a Self-Directed 401(k) might make possible.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const sellingVsOwning = {
  eyebrow: "The Difference Between Selling And Owning",
  heading: ["You Can Sell A $500,000 Property", "Without Owning A Dollar Of It."],
  intro:
    "A commission is compensation for a transaction. Ownership is participation in an investment's future. Ownership can also produce losses — a property may decline in value, remain vacant, require repairs, or become difficult to sell.",
  items: [
    {
      number: "01",
      title: "Selling Real Estate",
      description: "Help a client purchase or sell property. Earn compensation according to negotiated agreements. The client owns the asset.",
    },
    {
      number: "02",
      title: "Retirement-Plan Investing",
      description: "A qualifying Self-Directed 401(k) may purchase permitted investment property. The retirement plan owns the asset. Investment income and expenses belong to the plan.",
    },
  ],
  note: "The exciting possibility is not that selling real estate is suddenly less valuable. It's that qualifying real estate professionals may have another investment structure worth understanding.",
};

export const averyStory = {
  eyebrow: "Meet Avery",
  heading: ["Avery Has Closed Hundreds Of Transactions.", "But Never Thought About Retirement This Way."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Avery Has Closed Hundreds Of Transactions. But Never Thought About Retirement This Way.",
      scenario:
        "Avery is 39 and has worked in residential real estate for fourteen years. Avery knows several neighborhoods extremely well and understands how to examine comparable sales and recognize unfavorable pricing. Most of Avery's income comes from real estate commissions — some years excellent, others slower — with business expenses including brokerage fees, marketing, technology, insurance, and continuing education. Retirement investing has remained mostly disconnected from that professional expertise.",
      realization:
        "Then Avery discovers that a qualifying independent real estate business may be able to establish a Self-Directed 401(k) that permits certain alternative investments. Suddenly Avery is looking at familiar properties differently — not “How much commission could I earn if this property sells?” but “What would it mean for a qualifying retirement plan to own an investment like this?”",
      risk:
        "Avery is fictional. The scenario assumes a legitimate self-employed real estate business with qualifying compensation and no employees who must be covered by the owner-only plan. Actual eligibility must be verified.",
    },
  ],
};

export const commissionExample = {
  eyebrow: "What A Commission Actually Represents",
  heading: ["A Closing Can Produce A Commission.", "That Commission Isn't The Same As An Investment."],
  intro:
    "Avery participates in the sale of a $400,000 property. For this fictional transaction, assume the applicable negotiated brokerage compensation is 2.5% of the sale price, and under Avery's hypothetical agreement, the brokerage retains 30% and Avery receives 70%.",
  figures: [
    { label: "Property sale price", value: "$400,000" },
    { label: "Illustrative negotiated brokerage compensation (2.5%)", value: "$10,000" },
    { label: "Brokerage portion (30%)", value: "$3,000" },
    { label: "Avery's portion (70%), before expenses & taxes", value: "$7,000" },
  ],
  disclaimer:
    "The 2.5% figure is fictional and must not be described as a standard, required, recommended, customary, or typical commission. Real estate commissions are negotiable, not set by law, and depend on the applicable agreements. You can help close a large real estate transaction and earn a commission, but the long-term investment belongs to whoever owns the property.",
};

export const closingTableIntro = {
  eyebrow: "The Closing Table",
  heading: ["Same Property. Different Buyer.", "Completely Different Financial Story."],
  intro:
    "Imagine a property listed for $240,000. The photograph doesn't change. The address doesn't change. But the identity of the buyer changes what the transaction means. Select a buyer identity to see how ownership, income, and restrictions change.",
  propertyPrice: 240000,
  modes: [
    {
      key: "client",
      label: "My Client",
      owner: "Client",
      explanation:
        "Avery represents a client purchasing the property. The client becomes the owner at closing. Avery may receive professional compensation under the applicable brokerage agreements and law. The property does not belong to Avery. If the client later receives rent or sells the property for a profit, those financial results belong to the client, subject to their own obligations.",
      purchaseFunds: "Client and any permitted lender to the closing transaction.",
      income: "Client, not agent.",
      expenses: "Client.",
      commission: "Handled under the applicable negotiated agreements.",
      takeaway: "Helping someone buy an investment doesn't make you the investor.",
      note: "Actual compensation is not guaranteed merely because a transaction closes. It depends on applicable agreements, licensing rules, and other legal requirements.",
    },
    {
      key: "personal",
      label: "Me Personally",
      owner: "Avery Personally",
      explanation:
        "Now imagine Avery purchases the same property using personal money and any permitted personal financing. The property belongs to Avery personally. Avery receives any rental income personally and is responsible for the associated expenses, debts, taxes, and risks. This is different from a client transaction, and it's also different from retirement-plan ownership.",
      purchaseFunds: "Avery's personal funds and any financing.",
      income: "Avery personally.",
      expenses: "Avery personally.",
      commission: "Depends on brokerage arrangements, required disclosures, and licensing law. A license does not automatically entitle an agent to a commission on their own purchase.",
      takeaway: "Personally buying an investment makes you the owner, with the potential rewards and responsibilities that come with it.",
      note: "Any real estate agent compensation connected to Avery's personal purchase depends on the brokerage arrangements, required disclosures, licensing law, and other relevant requirements.",
    },
    {
      key: "plan",
      label: "My Self-Directed 401(k)",
      owner: "Self-Directed 401(k)",
      explanation:
        "Now imagine Avery operates a qualifying business and has established a properly structured Self-Directed 401(k) with sufficient eligible investment capital. If permitted under the plan and applicable law, the plan might purchase the $240,000 property from an unrelated seller. The retirement plan would own the property. Avery could not treat the property as a personal residence, vacation home, or unrestricted business asset, and should not assume that acting as the agent or receiving a commission in the retirement plan's transaction is permissible — those arrangements can create prohibited-transaction and conflict-of-interest concerns.",
      purchaseFunds: "Self-Directed 401(k).",
      income: "Self-Directed 401(k).",
      expenses: "Self-Directed 401(k).",
      commission: "Do not assume permitted.",
      takeaway: "The retirement plan owns the investment. You don't personally own the property's rent, proceeds, or equity.",
      note: "This mode assumes the seller is unrelated to Avery, the plan has sufficient eligible funds, the plan's governing documents permit the investment, the transaction has been reviewed for prohibited transactions, and independent, unrelated professionals handle required services. These assumptions illustrate a possible investment concept — they do not guarantee that any particular transaction qualifies.",
    },
  ],
  comparisonRows: [
    { question: "Who owns the property?", client: "Client", personal: "Agent personally", plan: "Self-Directed 401(k)" },
    { question: "Who receives property income?", client: "Client", personal: "Agent personally", plan: "Retirement plan" },
    { question: "Who bears investment expenses?", client: "Client", personal: "Agent personally", plan: "Retirement plan" },
    { question: "Can the agent assume a personal commission is permitted?", client: "Only under valid agreements and rules", personal: "Depends on brokerage and legal rules", plan: "No, serious conflict review required" },
    { question: "Can the agent personally use the property?", client: "Only with owner's permission", personal: "Subject to ordinary ownership rules", plan: "Generally prohibited for disqualified persons" },
  ],
  finalStatement: "The property can be identical. The ownership, income, risks, and legal rules are not.",
};

export const investmentLens = {
  eyebrow: "The Market Knowledge Advantage",
  heading: ["You've Studied The Market For Years.", "That Knowledge May Help You Ask Better Investment Questions."],
  intro:
    "A great listing agent isn't automatically a great investor. A property can look attractive and still become a terrible investment. The advantage is not knowing the future — it's knowing which questions deserve answers.",
  items: [
    { number: "01", title: "Market Value", description: "“What are comparable properties actually selling for?” Listing prices are opinions. Comparable transactions can provide additional evidence of market value." },
    { number: "02", title: "Demand", description: "“Who would actually rent or buy this property?” An attractive building doesn't automatically mean tenants or buyers are ready to pay the expected price." },
    { number: "03", title: "Expenses", description: "“What will this property cost to own?” Taxes, insurance, maintenance, vacancies, and management can affect the investment's economics." },
    { number: "04", title: "Legal Restrictions", description: "“Can the retirement plan properly own this property?” Plan provisions, ownership arrangements, prohibited transactions, financing, and other rules matter." },
    { number: "05", title: "Exit Possibilities", description: "“What happens if the plan needs to sell?” Real estate can take time to sell, and a buyer may not be willing to pay the desired price." },
  ],
  note: "Your market knowledge doesn't eliminate investment risk. It may help you recognize where that risk is hiding.",
};

export const commissionConflict = {
  eyebrow: "The Commission Conflict",
  heading: ["Could You Earn A Commission When Your Own", "Retirement Plan Buys The Property?"],
  intro:
    "Because retirement-plan transactions are not ordinary personal purchases, a plan fiduciary generally cannot use plan transactions to obtain improper personal compensation or other benefits. Your real estate license doesn't automatically allow you to collect a commission from a transaction involving your retirement plan.",
  items: [
    { number: "01", title: "Avery Wants A Personal Commission On The Plan's Purchase", description: "This arrangement raises serious fiduciary self-dealing and prohibited-transaction concerns. Do not assume the commission is permitted." },
    { number: "02", title: "Avery's Brokerage Would Receive Compensation", description: "An affiliated brokerage or compensation arrangement may create additional related-party concerns. The transaction and all compensation relationships require review." },
    { number: "03", title: "Avery Proposes Representing The Plan Without Charging A Commission", description: "Waiving compensation does not automatically resolve all potential service, fiduciary, agency, or prohibited-transaction issues. The actual role and arrangement still require review." },
    { number: "04", title: "The Plan Uses Genuinely Independent, Unrelated Professionals", description: "Independent services may help address certain conflicts, but the transaction must still comply with the plan's terms and applicable law." },
  ],
  note: "You can understand the market without turning your retirement plan into another source of personal commissions.",
};

export const sellToPlan = {
  eyebrow: "Can You Sell Your Own Property To Your Retirement Plan?",
  heading: ["You Own A Rental Property.", "Can You Just Transfer It Into Your Self-Directed 401(k)?"],
  goldLine: 1,
  paragraphs: [
    "Imagine Avery already personally owns a rental house and decides the house would make a great retirement investment. The idea sounds simple: “Why not have my Self-Directed 401(k) purchase it from me?”",
    "But sales or exchanges of property between a retirement plan and a disqualified person are generally prohibited. The owner cannot simply sell personally owned real estate to their own retirement plan, and calling the transaction fair-market value does not automatically make it permissible. Specific exemptions and technical rules exist, but a direct owner-to-plan property sale should not be assumed permitted.",
  ],
  featured: "A retirement plan is not a way to move your existing personal real estate into a tax-advantaged account through an ordinary sale.",
};

export const investmentOpportunities = {
  eyebrow: "The Investment Opportunities",
  heading: ["Real Estate Might Be The Starting Point.", "It Doesn't Have To Be The Entire Portfolio."],
  intro: "A real estate professional may naturally gravitate toward investment properties. But a properly structured Self-Directed 401(k) can potentially offer other investment choices.",
  items: [
    {
      number: "01",
      title: "Rental Property",
      description: "A qualifying Self-Directed 401(k) could own a rental property purchased from an unrelated seller. Rent and eventual sale proceeds belong to the plan, but vacancies, major repairs, insurance, property taxes, and financing can create risk. An agent's familiarity with local sales prices does not eliminate those risks.",
    },
    {
      number: "02",
      title: "Private Real Estate Lending",
      description: "Certain plans may permit properly documented private loans to unrelated borrowers secured by qualifying collateral. If the borrower performs, the plan may receive principal and interest. But the borrower could default, collateral could decline in value, and collecting the money could be difficult or expensive.",
    },
    {
      number: "03",
      title: "Private Real Estate Investments",
      description: "Some plans may permit qualifying interests in private real estate partnerships or investment funds — a way to participate in larger projects without directly owning the entire building. These investments can involve long holding periods, limited liquidity, difficult valuations, and substantial risk.",
    },
  ],
  note: "Knowing real estate may shape your investment interests. A Self-Directed 401(k) may provide additional choices, subject to the rules and the risks.",
};

export const notEveryDeal = {
  eyebrow: "Not Every Good Deal Is Your Deal",
  heading: ["Finding A Great Property Doesn't Mean", "You're Entitled To Buy It."],
  goldLine: 1,
  paragraphs: [
    "Real estate agents often know about opportunities because of their professional relationships. A seller may share confidential information, a buyer may explain their financial situation, or an agent may learn about a property before it is widely marketed. But professional access carries responsibilities — the duties owed to clients, the terms of representation agreements, state licensing rules, confidentiality requirements, and applicable professional standards still matter.",
    "Imagine Avery represents a seller willing to accept a price substantially below what Avery believes the property might be worth, and Avery becomes interested in having a Self-Directed 401(k) purchase it. Does Avery owe duties to the seller? Are there required disclosures? Is there a conflict of interest? Does the retirement-plan transaction involve a disqualified person or fiduciary self-dealing? The fact that the property appears attractive does not resolve those questions.",
  ],
  featured: "Knowing about an opportunity and being legally free to invest in it are not always the same thing.",
};

export const financialOpportunity = {
  eyebrow: "The Financial Opportunity",
  heading: ["A Real Estate Agent Can Earn Commissions For Decades.", "Retirement Investing Is A Different Financial Relationship."],
  paragraphs: [
    "A real estate agent may spend an entire career earning compensation from transactions — each closing depends on buyers, sellers, market conditions, and completed work. Owning an investment is different: a qualifying retirement plan may hold assets that could produce income or appreciate over time, but the retirement plan also bears the associated expenses and potential losses, and those assets remain inside the retirement structure until accessed through permitted retirement-plan distributions.",
  ],
  featured: "Commissions compensate you for your professional work. Retirement investments give eligible capital a different financial role.",
};

export const whoQualifies = {
  eyebrow: "Do Real Estate Agents Actually Qualify?",
  heading: ["Your Real Estate License Doesn't Determine Eligibility.", "Your Business Does."],
  intro:
    "Many licensed real estate agents are treated as self-employed for federal tax purposes. Under IRS rules, qualifying licensed agents may be classified as statutory nonemployees when their compensation is substantially tied to sales or other output and their written contracts provide the required federal tax treatment. But not every licensed real estate professional has the same circumstances.",
  items: [
    { number: "01", title: "Independent Commission-Based Agent", description: "Operates a legitimate self-employed real estate business, has qualifying earnings, and has no eligible employees. A one-participant Self-Directed 401(k) may be worth exploring." },
    { number: "02", title: "Agent Receiving W-2 Wages", description: "Works as an employee and does not operate a separate qualifying business. A real estate license by itself does not establish eligibility to sponsor a one-participant 401(k)." },
    { number: "03", title: "Broker With Employees", description: "Owns a real estate brokerage and employs staff. The brokerage may be able to sponsor a retirement plan, but eligible employees cannot simply be ignored." },
    { number: "04", title: "Agent With An S Corporation", description: "Owns a business taxed as an S corporation. Qualifying W-2 compensation generally matters for contributions — shareholder distributions alone are not retirement-plan compensation." },
  ],
  note: "The license tells people you work in real estate. Your actual business determines whether an owner-only retirement plan may fit.",
};

export const contributions = {
  eyebrow: "What About Contributions?",
  heading: ["A Big Commission Year Could Create Opportunities.", "But Revenue Isn't The Contribution Limit."],
  intro: "A commission-based business can have tremendous variation from year to year. That doesn't automatically eliminate retirement-plan options — but gross commissions are not automatically retirement-plan compensation.",
  items: [
    { number: "01", title: "Gross Brokerage Compensation", description: "Money generated from transactions." },
    { number: "02", title: "Agent's Business Income", description: "Applicable brokerage allocations and business expenses matter." },
    { number: "03", title: "Eligible Plan Compensation", description: "Determined under the relevant retirement-plan and tax rules." },
    { number: "04", title: "Permitted Contributions", description: "Limited by plan provisions and applicable law." },
  ],
  note: "For a self-employed sole proprietor, the IRS requires special retirement contribution calculations using adjusted net earnings from self-employment. For S corporation owners, qualifying W-2 compensation generally determines the available contribution basis rather than shareholder distributions.",
  linkLabel: "Explore Self-Directed 401(k) Contribution Rules",
  linkHref: "/services/self-directed-401k/contributions",
};

export const rolloverExample = {
  eyebrow: "What About Old Retirement Savings?",
  heading: ["Maybe You Sold Real Estate Today.", "But You Have Retirement Savings From A Different Career."],
  intro:
    "Before entering real estate, Avery worked for a company that offered a traditional 401(k) and now has a hypothetical $95,000 balance remaining in that former employer's plan. Depending on the old plan's distribution rules and the receiving Self-Directed 401(k)'s provisions, eligible retirement funds may potentially be rolled into the new plan.",
  figures: [
    { label: "Hypothetical former employer plan balance", value: "$95,000" },
    { label: "Eligible rollover distribution required", value: "Yes" },
    { label: "Receiving Self-Directed 401(k) must accept the rollover type", value: "Confirm with plan" },
  ],
  disclaimer:
    "A current employer's 401(k) may have distribution restrictions. Not every retirement account can be rolled into every plan, and different tax categories of money may require separate treatment. This is not automatic and is separate from making new annual retirement contributions.",
};

export const rulesForAgents = {
  eyebrow: "The Rules That Matter Most To Agents",
  heading: ["You Can Know The Market Inside And Out.", "Retirement-Plan Rules Still Apply."],
  intro:
    "Real estate agents work around property transactions every day — they know sellers and buyers, may own property personally, and may have relationships with brokerages, investors, contractors, and business partners. When retirement-plan money becomes involved, those relationships must be examined carefully.",
  items: [
    { number: "01", title: "Personal Use", description: "A property owned by your Self-Directed 401(k) generally cannot become your personal vacation home or residence." },
    { number: "02", title: "Personal Commission", description: "Receiving personal compensation from a transaction involving your own retirement plan may create serious prohibited-transaction concerns." },
    { number: "03", title: "Selling Your Own Property To The Plan", description: "A direct sale between you and your retirement plan is generally prohibited." },
    { number: "04", title: "Related Parties", description: "Transactions involving certain relatives, businesses, or other disqualified persons may violate retirement-plan rules." },
    { number: "05", title: "Personal Business Use", description: "Retirement-plan property cannot simply be used as an office, storage facility, or investment asset for your own real estate business." },
  ],
  note: "The right investment isn't simply the one you know how to find. It's one the retirement plan can lawfully own.",
};

export const futureOutlook = {
  eyebrow: "What Does The Future Look Like?",
  heading: ["You Already Understand Real Estate.", "Imagine Understanding A Different Way To Invest For Retirement."],
  goldLine: 1,
  paragraphs: [
    "Real estate professionals spend their careers helping people make major financial decisions. They see how property ownership works, understand negotiations, and recognize the importance of market conditions. A Self-Directed 401(k) may provide an eligible business owner with a retirement investment structure that permits certain assets outside the conventional brokerage menu.",
    "That doesn't mean every agent should invest in real estate, that property prices always rise, or that retirement investing becomes easy simply because you're licensed. But understanding the opportunity can change the way you think about retirement.",
  ],
  featured: "You've helped other people find opportunities for years. It's worth discovering which investment opportunities your own retirement plan might be permitted to pursue.",
};

export const faqItems = [
  { question: "Can a real estate agent open a Self-Directed 401(k)?", answer: "A qualifying self-employed real estate agent may be eligible to establish a one-participant Self-Directed 401(k). Eligibility depends on the actual business activity, qualifying compensation, employees, related businesses, and plan requirements." },
  { question: "Can a REALTOR have a Solo 401(k)?", answer: "Potentially, yes. A real estate professional who operates a qualifying business may be eligible for a one-participant 401(k). Membership in a professional trade association or possession of a real estate license alone does not establish eligibility." },
  { question: "Are real estate agents considered self-employed for retirement-plan purposes?", answer: "Many licensed real estate agents are treated as self-employed for federal tax purposes when they meet the IRS requirements for statutory nonemployees. Those conditions include compensation tied substantially to sales or other output and an appropriate written contract. Retirement-plan eligibility still depends on additional facts." },
  { question: "Do real estate agents need an LLC for a Solo 401(k)?", answer: "Not necessarily. A qualifying sole proprietor may establish a one-participant 401(k) without an LLC. The actual business and compensation structure matter." },
  { question: "Can a Self-Directed 401(k) buy actual real estate?", answer: "Some Self-Directed 401(k) plans permit qualifying investments in real property. The plan's terms, ownership arrangements, prohibited-transaction restrictions, and other requirements must be followed." },
  { question: "Can I collect a real estate commission when my Self-Directed 401(k) buys property?", answer: "Do not assume that is permissible. A real estate professional receiving personal compensation connected to a transaction involving their own retirement plan can create prohibited-transaction and fiduciary self-dealing concerns. Specific arrangements require legal and tax review." },
  { question: "Can my brokerage earn a commission when my retirement plan buys property?", answer: "Compensation involving the plan owner's brokerage or related business may raise prohibited-transaction and other conflict-of-interest issues. The brokerage relationships, ownership, compensation, and specific facts require review before any transaction." },
  { question: "Can I represent my retirement plan in a property purchase without charging a commission?", answer: "Waiving compensation does not automatically resolve every fiduciary, service, prohibited-transaction, or real estate licensing issue. The permitted role depends on the actual facts and applicable law." },
  { question: "Can I sell personally owned rental property to my Solo 401(k)?", answer: "A sale of personally owned property to a retirement plan controlled by a disqualified person is generally a prohibited transaction. Fair-market pricing alone does not automatically make the transaction permissible." },
  { question: "Can my Self-Directed 401(k) buy property from one of my clients?", answer: "The answer depends on the parties, relationships, representation agreements, conflicts of interest, disclosure duties, state licensing law, and retirement-plan restrictions. The agent should not assume that a client-related purchase is permissible merely because the seller is not a family member." },
  { question: "Can I personally manage property owned by my Self-Directed 401(k)?", answer: "Property management involves a range of activities, and personally providing services to retirement-owned property may create prohibited-transaction concerns. Routine investment-direction responsibilities are not the same thing as furnishing operating or management services. The arrangement requires careful review." },
  { question: "Can I live in a property owned by my Self-Directed 401(k)?", answer: "Retirement-plan property generally cannot be used as a personal residence or vacation property by the plan owner or other disqualified persons." },
  { question: "Can my Self-Directed 401(k) invest in commercial property?", answer: "Some plans may permit qualifying commercial real estate investments. The structure, financing, unrelated business tax consequences, ownership, and prohibited-transaction restrictions must be evaluated." },
  { question: "Can my Self-Directed 401(k) make private real estate loans?", answer: "Certain private loans to unrelated borrowers may be permitted under an appropriately structured Self-Directed 401(k). Borrower relationships, documents, collateral, defaults, and plan restrictions matter." },
  { question: "Can a real estate broker with employees establish a Self-Directed 401(k)?", answer: "A brokerage with employees may be able to sponsor a retirement plan with self-directed features. However, a one-participant plan cannot simply exclude employees who must be covered under applicable requirements." },
  { question: "How much can a real estate agent contribute to a Solo 401(k)?", answer: "The permitted amount depends on qualifying compensation, the business tax structure, plan provisions, other relevant retirement-plan contributions, and applicable annual limits. Gross commissions are not automatically the contribution amount." },
  { question: "Can I roll an old employer's 401(k) into a Self-Directed 401(k)?", answer: "Eligible retirement-plan funds may be rolled into a Self-Directed 401(k) if the source distribution qualifies and the receiving plan permits that type of rollover." },
  { question: "Is a Self-Directed 401(k) better than a regular 401(k) for real estate agents?", answer: "Not necessarily. A Self-Directed 401(k) may offer additional investment flexibility, but also may involve higher costs, more complicated investments, liquidity risks, valuation challenges, and additional responsibilities. Suitability depends on the individual and the plan." },
];

export const references = [
  { title: "IRS: Licensed Real Estate Agents", description: "Real estate professionals treated as self-employed for federal tax purposes.", href: "https://www.irs.gov/businesses/small-businesses-self-employed/licensed-real-estate-agents-real-estate-tax-tips" },
  { title: "IRS: Statutory Nonemployees", description: "Relevant federal tax classification requirements.", href: "https://www.irs.gov/businesses/small-businesses-self-employed/statutory-nonemployees" },
  { title: "IRS: One-Participant 401(k) Plans", description: "Owner-only plan eligibility and contribution concepts.", href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans" },
  { title: "IRS: Self-Employed Contribution Calculations", description: "The distinction between gross business income and allowable retirement contributions.", href: "https://www.irs.gov/retirement-plans/self-employed-individuals-calculating-your-own-retirement-plan-contribution-and-deduction" },
  { title: "IRS: Retirement-Plan Investment FAQs", description: "Investment and prohibited-transaction discussions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Restrictions involving disqualified persons, self-dealing, and related-party transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Tax On Prohibited Transactions", description: "Potential tax consequences of prohibited transactions involving qualified retirement plans.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-tax-on-prohibited-transactions" },
  { title: "IRS: Retirement-Plan Rollovers", description: "Rollover eligibility and receiving-plan requirements.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "IRS: Publication 560", description: "Retirement-plan information for small businesses.", href: "https://www.irs.gov/publications/p560" },
  { title: "U.S. Department of Labor: Fiduciary Responsibilities", description: "Fiduciary responsibilities and conflicts of interest.", href: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities" },
  { title: "National Association of REALTORS: Written Buyer Agreements", description: "Negotiated brokerage compensation and professional agreement requirements.", href: "https://www.nar.realtor/the-facts/consumer-guide-to-written-buyer-agreements" },
  { title: "National Association of REALTORS: Listing Agreements", description: "Listing relationships, compensation, and agent duties.", href: "https://www.nar.realtor/the-facts/consumer-guide-to-listing-agreements" },
];

export const finalConversion = {
  heading: ["You've Built A Career Helping People Buy Property.", "Explore What Your Retirement Plan Could Own."],
  description:
    "If you operate a qualifying business, a Self-Directed 401(k) may give you the opportunity to explore investments beyond the typical stock-market menu — certain real estate investments, private lending, qualifying private business opportunities, and other permitted investments. You still have to satisfy the retirement-plan rules, you can't treat the plan as your personal brokerage account, and no investment outcome is guaranteed. But understanding the possibilities is an important first step.",
  signature: "You've spent your career helping other people navigate ownership. Now discover whether a Self-Directed 401(k) could be part of your retirement strategy.",
};
