export const hero = {
  eyebrow: "The Online Entrepreneur",
  title: ["You Built A Business On A Screen.", "What Could Your Retirement Own Beyond It?"],
  goldLine: 1,
  description:
    "You found a product, built a store, attracted customers, and created a business that can sell to people you've never met. If you operate a qualifying online business, you may be able to establish a Self-Directed 401(k) with investment possibilities beyond conventional retirement accounts — including certain real estate investments, private loans, and qualifying private businesses.",
  whoItsFor: "Your business lives online. Your retirement investment possibilities may extend into an entirely different world.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const businessComponents = {
  eyebrow: "The Business You Can't Physically Walk Into",
  heading: ["You Don't Need A Storefront On Main Street", "To Own A Real Business."],
  intro:
    "A legitimate business doesn't necessarily need a physical retail location. None of that automatically prevents the activity from being a genuine business — and when an online business produces qualifying compensation, it may support the establishment of a retirement plan.",
  items: [
    { number: "01", title: "The Website", description: "Customers discover the products." },
    { number: "02", title: "The Marketplace", description: "Customers may purchase through an outside platform." },
    { number: "03", title: "The Supplier", description: "Products may be manufactured or sourced by another business." },
    { number: "04", title: "The Fulfillment Provider", description: "Orders may be shipped by an outside service." },
    { number: "05", title: "The Business Owner", description: "The entrepreneur directs the operation and bears its financial risks." },
  ],
  note: "A business doesn't become less real just because the customers arrive through a screen. A website alone does not create retirement-plan eligibility — the actual business activity, qualifying earnings, ownership, worker relationships, and applicable plan requirements matter.",
};

export const taylorStory = {
  eyebrow: "Meet Taylor",
  heading: ["Taylor Built An Online Brand From Scratch.", "Now There's A Different Kind Of Ownership To Explore."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Taylor Built An Online Brand From Scratch. Now There's A Different Kind Of Ownership To Explore.",
      scenario:
        "Taylor is 37 and began selling home organization products online six years ago. Today the business sells through its own storefront and a third-party marketplace, fulfilled through an unrelated logistics provider. Advertising costs can rise, suppliers can miss deliveries, customers return products, and a platform can change the rules at any time. Most of Taylor's financial attention has remained focused on the next product launch, the next order, and the next advertising campaign.",
      realization:
        "Then Taylor learns that qualifying business ownership may also permit establishing a Self-Directed 401(k) that can invest in qualifying assets that have nothing to do with home organization products. For the first time, Taylor considers a different question — not “What else could my online store sell?” but “What else could my retirement plan own?”",
      risk:
        "Taylor is fictional. The illustration assumes a genuine operating business. Actual eligibility and permitted contributions depend on the business's tax structure, worker relationships, qualifying compensation, and other relevant facts.",
    },
  ],
};

export const businessSnapshot = {
  eyebrow: "The Annual Snapshot",
  heading: ["A $310,000 Year Doesn't Mean", "$310,000 Available For Retirement."],
  figures: [
    { label: "Online sales revenue", value: "$310,000" },
    { label: "Cost of merchandise", value: "$146,000" },
    { label: "Shipping and fulfillment", value: "$46,000" },
    { label: "Marketplace and payment fees", value: "$28,000" },
    { label: "Advertising", value: "$39,000" },
    { label: "Software, insurance & other operating expenses", value: "$17,000" },
    { label: "Business profit before taxes & contributions", value: "$34,000" },
  ],
  disclaimer:
    "$310,000 minus $146,000 minus $46,000 minus $28,000 minus $39,000 minus $17,000 equals $34,000. Taylor's $310,000 in sales is not the amount available for retirement contributions, and the $34,000 business profit is also not automatically Taylor's permissible 401(k) contribution — special retirement-plan compensation and contribution rules must be applied.",
};

export const secondDashboardIntro = {
  eyebrow: "The Second Dashboard",
  heading: ["Your Store Has A Dashboard.", "What If Your Retirement Plan Had A Completely Different Investment World?"],
  intro:
    "As an online entrepreneur, you already understand dashboards — you use them to manage orders, inventory, marketing, and customer payments. But a retirement plan is not simply another dashboard for the same business. It is a separate financial structure. Select a decision to see where it belongs.",
  envA: { label: "My Online Business", description: "Products, inventory, customer orders, advertising, operating funds, and business equipment." },
  envB: { label: "My Self-Directed 401(k)", description: "Real estate, private lending, private company ownership, and other qualifying investments." },
  decisions: [
    {
      key: "inventory",
      label: "Buy $20,000 Of Inventory For My Store",
      category: "business" as const,
      outcome: "Operating Business Asset",
      explanation: "Your online store needs inventory to sell products. Buying merchandise for that store is an ordinary business decision. But your Self-Directed 401(k) generally cannot simply purchase inventory for your personal business or finance its operations through a prohibited transaction. Your store sells the products. Your retirement plan is not its inventory account.",
    },
    {
      key: "ads",
      label: "Spend $5,000 On Ads For My Brand",
      category: "business" as const,
      outcome: "Operating Business Expense",
      explanation: "Advertising may help your store attract customers, but paying to promote your own company is a business expense. Your retirement plan generally cannot be used as an unrestricted source of advertising funds for your personal business. More advertising may grow your company — it is not automatically a permissible retirement investment.",
    },
    {
      key: "loan-self",
      label: "Loan $30,000 From My 401(k) To My Own LLC",
      category: "prohibited" as const,
      outcome: "Generally Prohibited Related-Party Lending",
      explanation: "A retirement plan generally cannot lend money directly to the owner's own company through a prohibited related-party transaction. Even if the owner promises to repay the money with interest, the arrangement can violate retirement-plan rules. This is different from any qualifying participant loan available under a plan's specific loan provisions and applicable law. Your retirement plan cannot simply become your business's private bank.",
    },
    {
      key: "real-estate",
      label: "Purchase Qualifying Real Estate From An Unrelated Seller",
      category: "retirement" as const,
      outcome: "Potential Retirement-Plan Investment",
      explanation: "Some Self-Directed 401(k) plans permit qualifying real estate investments. If properly structured, the plan may be able to own property purchased from an unrelated seller. The retirement plan would receive any investment income and bear the costs and risks. The owner could not treat the property as a personal residence, vacation property, or asset for the online store. Subject to plan provisions, funding availability, transaction restrictions, and applicable law.",
    },
    {
      key: "loan-unrelated",
      label: "Make A $35,000 Private Loan To An Unrelated Business",
      category: "retirement" as const,
      outcome: "Potential Retirement-Plan Investment, With Lending Risk",
      explanation: "Some Self-Directed 401(k) plans may make properly structured private loans to unrelated borrowers. If permitted, the plan could receive contractual principal and interest payments. But the borrower could default, collateral might be difficult to recover, and the retirement plan could lose some or all of the investment. The borrower must be evaluated as an investment, not simply as someone who needs money.",
    },
    {
      key: "equity",
      label: "Invest In An Unrelated Private Company",
      category: "retirement" as const,
      outcome: "Potential Investment, With Legal And Tax Review Required",
      explanation: "Certain Self-Directed 401(k) plans may permit qualifying private business investments, including an ownership interest in a company unrelated to the plan owner. But the ownership structure matters — some private investments may generate unrelated business taxable income, and private equity carries significant risks, including limited liquidity, uncertain valuation, dilution, and potential total loss.",
    },
    {
      key: "public",
      label: "Own Shares Of An Unrelated Public Company",
      category: "retirement" as const,
      outcome: "Potential Conventional Retirement Investment",
      explanation: "A Self-Directed 401(k) doesn't have to invest exclusively in alternative assets. Depending on the plan and available arrangements, investments in conventional securities may also be possible. Self-directed investing is about permitted choices, not an obligation to abandon traditional investments.",
    },
  ],
  revelation: {
    business: { label: "The Online Business", items: ["Inventory", "Advertising", "Customer payments", "Business operating expenses"] },
    retirement: { label: "Potential Retirement Investments", items: ["Qualifying investment real estate", "Certain private loans", "Permitted private company interests", "Conventional investments allowed under the plan"] },
    prohibited: { label: "Related-Party Transactions", items: ["Loans to the owner's company", "Personal use of retirement assets", "Purchases or services that improperly benefit the owner's business", "Other arrangements requiring prohibited-transaction review"] },
  },
  conclusion: "You built the store. But the retirement plan must invest for its own permitted retirement purposes.",
};

export const twoWorlds = {
  eyebrow: "Your Online Business Is One Asset",
  heading: ["You May Own An Online Brand.", "That Doesn't Mean Every Investment Has To Depend On Online Shopping."],
  items: [
    { number: "01", title: "The Digital Business", description: "Customer demand, advertising, inventory, and platform dependence — the risks that shape your day-to-day operation." },
    { number: "02", title: "The Separate Retirement Portfolio", description: "Property ownership, private lending, business equity, and investment liquidity and risk — a different set of considerations entirely." },
  ],
  note: "Your business is how you earn money. Your retirement investments may be how some eligible retirement capital is put to work under a different set of rules. Alternative investments are not automatically more diversified, less volatile, or safer than conventional securities.",
};

export const platformRisk = {
  eyebrow: "The Online Business That Lost Its Traffic",
  heading: ["What Happens When The Platform", "Changes The Rules?"],
  items: [
    { number: "01", title: "Growth", description: "The fictional online store is receiving customer orders. The business has customers, products, and revenue." },
    { number: "02", title: "Disruption", description: "Advertising becomes more expensive and orders decline. Operating conditions can change quickly." },
    { number: "03", title: "Separate Investment Planning", description: "A retirement portfolio that is legally separate from the operating business has its own risks and may respond differently to economic events." },
  ],
  note: "A successful business can create wealth. It can also expose an entrepreneur to concentrated risk.",
};

export const loanExample = {
  eyebrow: "The Unrelated Online Business Loan",
  heading: ["You Understand Inventory.", "What If Your Retirement Plan Considered Lending To A Business That Needs It?"],
  intro:
    "Assume Taylor's Self-Directed 401(k) already has sufficient eligible investment capital and considers a $35,000 one-year loan to an unrelated e-commerce company, with an 11% annual simple interest rate paid at maturity.",
  figures: [
    { label: "Hypothetical loan principal", value: "$35,000" },
    { label: "Illustrative contractual annual simple interest (11%)", value: "$3,850" },
    { label: "Total principal and interest if fully repaid", value: "$38,850" },
  ],
  disclaimer:
    "$35,000 × 11% = $3,850 in potential contractual interest before expenses, defaults, and any applicable tax effects — not a guaranteed investment return. If the borrower cannot pay, the retirement plan could face collection costs, lengthy recovery efforts, reduced payments, or loss of principal, and any collateral may be worth less than expected. The borrower must be genuinely unrelated to Taylor. Understanding how an online business operates may help you evaluate a borrower. It doesn't eliminate lending risk.",
};

export const taxTreatment = {
  eyebrow: "Private Business Investing Has A Tax Side Too",
  heading: ["Owning Part Of A Private Company Can Be Exciting.", "The Tax Treatment Isn't Always Simple."],
  intro:
    "A retirement plan that invests through certain partnerships or limited liability companies operating active businesses may generate unrelated business taxable income, creating tax obligations for the plan even when the investment is otherwise permitted.",
  items: [
    { number: "01", title: "Public Company Shares", description: "Commonly available through conventional investment arrangements, subject to the plan's permitted choices." },
    { number: "02", title: "Unrelated Private Corporate Shares", description: "May be permissible, but liquidity, valuation, documentation, relationships, and investment risks require evaluation." },
    { number: "03", title: "Ownership Through A Pass-Through Operating Business", description: "May create additional unrelated business taxable income and reporting issues." },
  ],
  note: "A retirement account doesn't automatically make every private business investment free from current tax.",
};

export const threeDistinctions = {
  eyebrow: "A Big Sales Number Isn't A Retirement Contribution",
  heading: ["Your Store Might Sell $500,000 A Year.", "That Doesn't Mean You Can Contribute $500,000 To A 401(k)."],
  intro: "Revenue is important, but the amount customers spend is not the amount the owner personally earns. Retirement contributions follow their own rules.",
  items: [
    { number: "01", title: "Business Revenue", description: "What customers pay the business." },
    { number: "02", title: "Business Profit", description: "What remains after applicable business expenses, before additional taxes and owner retirement contributions." },
    { number: "03", title: "Qualifying Retirement-Plan Compensation", description: "The amount determined under the retirement-plan rules for calculating permissible contributions." },
  ],
  note: "For a qualifying sole proprietor, retirement-plan compensation requires special calculations based on adjusted net earnings from self-employment. For an S corporation owner, qualifying W-2 compensation generally matters — shareholder distributions alone are not eligible retirement-plan compensation.",
  linkLabel: "Explore Self-Directed 401(k) Contribution Rules",
  linkHref: "/services/self-directed-401k/contributions",
};

export const employeeProfiles = {
  eyebrow: "What If Your Business Runs Without Employees?",
  heading: ["You Can Run An Online Store Without A Warehouse", "Full Of Employees. But Eligibility Still Depends On The Facts."],
  intro: "A one-participant 401(k), commonly called a Solo 401(k), generally covers a qualifying business owner with no employees other than an eligible spouse. But the actual employee situation matters.",
  items: [
    { number: "01", title: "Solo Store Owner", description: "Operates a legitimate online business, has qualifying earnings, and has no employees who must be covered. A one-participant Self-Directed 401(k) may be worth exploring." },
    { number: "02", title: "Owner Using An Independent Fulfillment Company", description: "Operates an online business with a separate, unrelated fulfillment provider and no direct employees. Using an independent outside service does not automatically prevent owner-only plan eligibility." },
    { number: "03", title: "Online Brand With Employees", description: "Owns an established e-commerce business employing customer service and warehouse staff. The business may be able to sponsor a retirement plan, but an owner-only plan generally cannot simply disregard employees who must be covered." },
    { number: "04", title: "Owner Of Several Online Stores", description: "Controls multiple companies or online brands using employees, contractors, or shared service arrangements. Related-business, controlled-group, affiliated-service, and worker-classification rules may affect retirement-plan eligibility." },
  ],
  note: "You don't need a massive company to explore a retirement plan. You need a business that satisfies the plan's requirements.",
};

export const marketplaceDistinction = {
  eyebrow: "Does An Online Marketplace Account Make You Self-Employed?",
  heading: ["Selling Online Doesn't Automatically Mean You Own", "A Qualifying Retirement-Plan Business."],
  items: [
    { number: "01", title: "Occasional Personal Sales", description: "Someone sells a few used household items. Receiving marketplace payments does not automatically establish a qualifying trade or business." },
    { number: "02", title: "Operating An Online Retail Business", description: "An entrepreneur regularly sources products, markets them, sells them to customers, and operates with a business purpose. A genuine business may generate qualifying self-employment earnings, subject to applicable rules." },
  ],
  note: "Receiving a Form 1099-K is a reporting matter. It does not automatically determine whether the income constitutes qualifying retirement-plan compensation. The business is what matters, not simply the app or marketplace where the customer pays you.",
};

export const rolloverExample = {
  eyebrow: "What About Old Retirement Savings?",
  heading: ["You Built A Business Online.", "But Some Of Your Retirement Money May Have Come From An Earlier Career."],
  intro:
    "Before starting the online store, Taylor worked for a company offering a traditional 401(k) and now has a hypothetical $78,000 remaining in that former employer's account. If an eligible distribution is available and the receiving Self-Directed 401(k) accepts that type of rollover, the funds may potentially be transferred.",
  figures: [
    { label: "Hypothetical former employer plan balance", value: "$78,000" },
    { label: "Eligible rollover distribution required", value: "Yes" },
    { label: "Receiving Self-Directed 401(k) must accept the rollover type", value: "Confirm with plan" },
  ],
  disclaimer:
    "Not every retirement account qualifies for rollover. Current-employer plans may restrict distributions, and different categories of retirement funds may require different tax treatment. This is separate from contributing new money earned through the online business, and a rollover is not an automatic way to fund the entrepreneur's personal business.",
};

export const neverConfuse = {
  eyebrow: "The Two Businesses You Should Never Confuse",
  heading: ["Your Online Store Can Sell Products.", "Your Retirement Plan Can't Simply Become Its Investor, Lender, Or Customer."],
  intro: "The Self-Directed 401(k) is not an unrestricted extension of your operating company. Transactions between a retirement plan and certain related people or businesses are restricted.",
  items: [
    { number: "01", title: "Your Retirement Plan Lends Money To Your Online Store", description: "Generally raises prohibited related-party lending concerns." },
    { number: "02", title: "Your Retirement Plan Purchases Inventory From Your Own Company", description: "Generally raises prohibited sale, exchange, or self-dealing concerns." },
    { number: "03", title: "Your Plan Acquires An Interest In Your Own Privately Held Operating Company", description: "Can create serious prohibited-transaction and valuation issues. Do not assume it is permissible." },
    { number: "04", title: "You Use Retirement-Plan Property To Operate Your Own Fulfillment Business", description: "May improperly benefit the owner or a related company." },
    { number: "05", title: "Your Retirement Plan Considers A Genuinely Unrelated Investment", description: "May be possible, subject to the plan's terms, applicable investment restrictions, tax treatment, and the actual facts." },
  ],
  note: "You can build your store and direct permitted retirement investments. But you cannot simply combine the two financial systems. A qualifying participant loan, if available under the plan and permitted by law, is governed by its own requirements and should not be confused with a direct investment loan to the owner's operating company.",
};

export const biggerOpportunity = {
  eyebrow: "The Bigger Opportunity",
  heading: ["Your Store Could Reach Customers Around The World.", "Your Retirement Plan Might Explore Investments Beyond The Digital World."],
  goldLine: 1,
  paragraphs: [
    "Online entrepreneurship can create opportunities that were difficult to imagine a generation ago — building a brand without owning a shopping center, selling products without personally shipping every order, reaching customers without traveling to every city. But building a business and building a retirement portfolio are different activities.",
    "A Self-Directed 401(k) may give a qualifying entrepreneur another set of investment choices — real estate, private lending, qualifying private equity, traditional securities, and other investments permitted under the plan and law. None is guaranteed to produce a profit, and some may require substantial expertise, management, and due diligence. But understanding the choices may change the way an entrepreneur thinks about the future.",
  ],
  featured: "You built something that didn't exist before. Now discover whether your business can help you establish a retirement plan with investment possibilities you haven't explored.",
};

export const faqItems = [
  { question: "Can an online business owner open a Self-Directed 401(k)?", answer: "A qualifying online business owner may be eligible to establish a one-participant Self-Directed 401(k). Eligibility depends on legitimate business activity, qualifying compensation, employees, related businesses, and applicable retirement-plan requirements." },
  { question: "Can a Shopify store owner have a Solo 401(k)?", answer: "Potentially, yes. A Shopify store owner who operates a qualifying business may be eligible for a one-participant 401(k). Simply having a Shopify website does not establish eligibility." },
  { question: "Can an Amazon seller establish a Self-Directed 401(k)?", answer: "A qualifying Amazon marketplace seller may be eligible if the person operates a legitimate business and satisfies applicable retirement-plan requirements. Using a third-party marketplace does not automatically prevent eligibility." },
  { question: "Can an Etsy seller open a Solo 401(k)?", answer: "Possibly. An Etsy seller operating a legitimate business with qualifying compensation may qualify. Occasional sales or hobby activity do not automatically establish retirement-plan eligibility." },
  { question: "Can a dropshipping entrepreneur open a Self-Directed 401(k)?", answer: "A qualifying dropshipping business owner may be eligible. The fact that suppliers ship products directly to customers does not, by itself, determine retirement-plan eligibility. Business earnings, employees, and actual operations matter." },
  { question: "Do I need an LLC to establish a Self-Directed 401(k) for my online store?", answer: "Not necessarily. A qualifying sole proprietor may be able to establish a one-participant 401(k) without forming an LLC. The actual business structure affects the applicable compensation and contribution rules." },
  { question: "Can I use my Self-Directed 401(k) to buy inventory for my online business?", answer: "Retirement-plan assets generally cannot simply be used to purchase inventory for the owner's operating company through prohibited arrangements. The plan must remain separate from the business." },
  { question: "Can my Self-Directed 401(k) lend money to my own e-commerce company?", answer: "A direct loan from a retirement plan to the owner's own company generally raises prohibited-transaction concerns. This is different from any qualifying participant loan made under specific plan provisions and applicable law." },
  { question: "Can my retirement plan invest in an unrelated online business?", answer: "Certain Self-Directed 401(k) plans may permit qualifying private business investments. The ownership structure, relationships, liquidity, valuation, and potential unrelated business taxable income require review." },
  { question: "Can my Self-Directed 401(k) invest in a private limited liability company?", answer: "Some private LLC investments may be permissible. However, LLC tax classification, operating activities, ownership relationships, prohibited transactions, and possible unrelated business taxable income can create additional issues." },
  { question: "Are private business profits inside a Self-Directed 401(k) always tax-free?", answer: "No. Certain investments in active businesses, including some partnership or LLC structures, may generate unrelated business taxable income. Tax treatment depends on the actual structure and activities." },
  { question: "Can my Self-Directed 401(k) purchase rental property?", answer: "Some plans may permit qualifying real estate investments. The property must be owned and operated under applicable plan and legal requirements. Personal use, prohibited transactions, financing, and other restrictions matter." },
  { question: "Can my online store and retirement plan share the same business bank account?", answer: "No. Retirement-plan assets must be properly held and accounted for under the retirement plan's legal structure and applicable rules. They cannot simply be combined with ordinary operating business funds." },
  { question: "Can a business using a fulfillment company have a Solo 401(k)?", answer: "Potentially, yes. Using an unrelated third-party fulfillment provider does not automatically create an employee relationship that prevents owner-only plan eligibility. The actual relationship, leased-worker rules, and business circumstances must be reviewed." },
  { question: "Can an e-commerce company with employees have a Self-Directed 401(k)?", answer: "A company with employees may be able to sponsor a retirement plan with self-directed investment features. However, an owner-only plan generally cannot disregard employees who must be covered under applicable rules." },
  { question: "Can I own several online stores and still have a Solo 401(k)?", answer: "Possibly. But businesses under common ownership may be subject to controlled-group or related-business rules. Employee coverage and contribution rules may need to consider multiple entities together." },
  { question: "How much can an online business owner contribute to a Self-Directed 401(k)?", answer: "The amount depends on qualifying compensation, business tax structure, employee and employer contribution rules, other retirement-plan contributions, plan provisions, and annual limits. Gross online sales are not automatically retirement-plan compensation." },
  { question: "Can I contribute based on my S corporation distributions?", answer: "Generally, no. S corporation shareholder distributions do not constitute retirement-plan compensation. Qualifying W-2 wages are generally relevant for the owner's 401(k) contribution calculations." },
  { question: "Does receiving Form 1099-K mean I qualify for a Solo 401(k)?", answer: "No. Form 1099-K reports certain payments. It does not independently determine whether the activity is a qualifying trade or business or whether the person has eligible retirement-plan compensation." },
  { question: "Can I roll an old employer's 401(k) into my Self-Directed 401(k)?", answer: "An eligible distribution from a former employer's retirement plan may be rolled into a qualifying Self-Directed 401(k) if the receiving plan accepts that type of rollover. Source-account rules and tax treatment matter." },
  { question: "Does a Self-Directed 401(k) have to invest in online businesses?", answer: "No. Depending on its terms and applicable law, a Self-Directed 401(k) may permit certain real estate, private loans, conventional securities, and other investments unrelated to the owner's online business." },
];

export const references = [
  { title: "IRS: One-Participant 401(k) Plans", description: "Owner-only plan eligibility, employee coverage, and contribution limits.", href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans" },
  { title: "IRS: Retirement Plans For Self-Employed People", description: "Retirement-plan options available to qualifying self-employed business owners.", href: "https://www.irs.gov/retirement-plans/retirement-plans-for-self-employed-people" },
  { title: "IRS: Self-Employed Contribution Calculations", description: "The distinction between business revenue, profit, and eligible retirement-plan compensation.", href: "https://www.irs.gov/retirement-plans/self-employed-individuals-calculating-your-own-retirement-plan-contribution-and-deduction" },
  { title: "IRS: S Corporation Retirement Contributions", description: "Qualifying W-2 compensation and shareholder distributions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-faqs-regarding-contributions-s-corporation" },
  { title: "IRS: Retirement-Plan Investment FAQs", description: "Investment restrictions and prohibited transactions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Business financing, lending, related-party purchases, services, and self-dealing.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Publication 598", description: "Unrelated business taxable income, private operating businesses, and partnership income.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Retirement-Plan Rollovers", description: "Rollover eligibility and receiving-plan requirements.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "IRS: Gig Economy Tax Center", description: "Online selling, digital platforms, business activity, and tax reporting.", href: "https://www.irs.gov/businesses/gig-economy-tax-center" },
  { title: "IRS: Publication 560", description: "Small-business retirement-plan requirements.", href: "https://www.irs.gov/publications/p560" },
];

export const finalConversion = {
  heading: ["You Built An Online Business.", "Explore What It Could Make Possible For Your Retirement."],
  description:
    "If your business qualifies, a Self-Directed 401(k) may give you access to retirement investment possibilities beyond the conventional stock-market menu — certain real estate investments, private loans, qualifying private companies, and other permitted assets. Your retirement plan must remain separate from your online business, contributions depend on qualifying compensation and applicable rules, and no investment outcome is guaranteed. But discovering the possibilities is an important first step.",
  signature: "You already proved you can build a business in the digital world. Now explore what a Self-Directed 401(k) might allow you to own beyond it.",
};
