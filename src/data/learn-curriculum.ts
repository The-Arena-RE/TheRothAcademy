export type CurriculumCategoryKey = "people" | "examples" | "balances" | "turning-points";

export type CurriculumModule = {
  slug: string;
  title: string;
  description: string;
  category: CurriculumCategoryKey;
};

export const curriculumCategories: { key: CurriculumCategoryKey; label: string; description: string }[] = [
  { key: "people", label: "People Like Me", description: "Lessons organized by occupation and lifestyle." },
  { key: "examples", label: "Real Investment Examples", description: "Specific, fully reconciled investment scenarios." },
  { key: "balances", label: "Investing By Account Balance", description: "What different account sizes might pursue." },
  { key: "turning-points", label: "Important Turning Points", description: "Key decisions and rollover moments." },
];

export const curriculum401k: CurriculumModule[] = [
  { slug: "12000-vacant-lot", title: "Can a Self-Directed 401(k) Buy Vacant Land? $12K Example", description: "Could your Self-Directed 401(k) buy a $12,000 vacant lot? Explore a realistic land investment example, ownership rules, costs, risks, and possible outcomes.", category: "examples" },
  { slug: "agricultural-land-investing", title: "Agricultural Land Investing With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) own farmland leased to an independent farmer? Explore a fully reconciled 84-acre example, cash rent vs. crop share, and the risks.", category: "examples" },
  { slug: "apartment-syndication-investing", title: "Apartment Syndication Investing With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) own an interest in an apartment syndication? Explore a fully reconciled real estate partnership example, fees, and risks.", category: "examples" },
  { slug: "blue-collar-investor", title: "Self-Directed 401(k) For Contractors", description: "Own an electrical, plumbing, or contracting business? Explore Self-Directed 401(k) investment possibilities, eligibility, and crucial property rules.", category: "people" },
  { slug: "buying-existing-mortgage-notes", title: "Mortgage Note Investing With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) buy an existing mortgage note? Explore a fully reconciled mortgage note investment example, discount risk, and default outcomes.", category: "examples" },
  { slug: "distressed-mortgage-note-investing", title: "Distressed Mortgage Note Investing With a Self-Directed 401(k)", description: "Discover how a Self-Directed 401(k) may purchase distressed mortgage notes. Explore discounted debt, borrower rights, payoffs, foreclosure risks, and recovery scenarios.", category: "examples" },
  { slug: "doctor-side-business", title: "Self-Directed 401(k) For Doctors With Side Businesses", description: "Physician with consulting or other side-business income? Explore Self-Directed 401(k) eligibility, alternative investments, and important contribution rules.", category: "people" },
  { slug: "farmer-rancher", title: "Self-Directed 401(k) For Farmers & Ranchers", description: "Own a farm or ranch? Discover Self-Directed 401(k) investment possibilities, including farmland, rental income, eligibility, and important legal restrictions.", category: "people" },
  { slug: "fix-and-flip-private-lending", title: "Private Real Estate Loans With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) finance a house flip as the lender? Explore a fully reconciled private lending example, collateral risk, and default outcomes.", category: "examples" },
  { slug: "husband-wife-business", title: "Solo 401(k) For Husband & Wife Business Owners", description: "Can a husband and wife share a Solo 401(k)? Learn how working spouses may contribute, maintain separate retirement benefits, and explore alternative investments.", category: "people" },
  { slug: "independent-contractor-1099", title: "Self-Directed 401(k) For Independent Contractors", description: "1099 income doesn't come with an employer retirement plan. See how a qualifying independent contractor may be able to establish a Self-Directed 401(k).", category: "people" },
  { slug: "investing-with-100000", title: "Investing $100,000 With a Self-Directed 401(k)", description: "Explore three ways a Self-Directed 401(k) may invest $100,000: rental property, private loans, or private real estate funds. Understand costs, cash flow, and risks.", category: "balances" },
  { slug: "investing-with-2000000", title: "The $2 Million Solo 401(k): Private Market Investing", description: "Discover how a Self-Directed 401(k) may invest in private real estate funds, secured business loans, and private company equity. Explore ownership, fees, and risks.", category: "balances" },
  { slug: "investing-with-25000", title: "Investing $25,000 With a Self-Directed 401(k)", description: "Explore how a Self-Directed 401(k) may invest $25,000 in land, secured private loans, or multiple assets. See realistic costs, cash flows, and risks.", category: "balances" },
  { slug: "investing-with-5000", title: "Investing With $5,000 in a Self-Directed 401(k)", description: "Explore what a Self-Directed 401(k) may invest in with $5,000, including small land parcels, private loans, real estate shares, costs, and risks.", category: "balances" },
  { slug: "investing-with-500000", title: "$500,000 Self-Directed 401(k): Property vs. Private Funds", description: "Explore how a Self-Directed 401(k) may invest $500,000 in rental properties or private real estate funds. Compare ownership, income, fees, leverage, and risks.", category: "balances" },
  { slug: "mobile-home-park-investing", title: "Mobile Home Park Investing With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) own the land beneath 32 manufactured homes without owning the homes themselves? Explore a fully reconciled example.", category: "examples" },
  { slug: "oil-gas-mineral-royalty-investing", title: "Oil & Gas Mineral And Royalty Investing With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) own a mineral or royalty interest in oil and gas production? Explore a fully reconciled acreage, royalty, and price example.", category: "examples" },
  { slug: "old-401k-new-business", title: "Old 401(k) to Self-Directed 401(k) After Starting a Business", description: "Starting a business with an old 401(k)? Explore Solo 401(k) eligibility, direct rollovers, pre-tax and Roth accounts, and new investment possibilities.", category: "turning-points" },
  { slug: "online-entrepreneur-ecommerce", title: "Self-Directed 401(k) For E-Commerce Owners", description: "Own a Shopify, Amazon, or other online store? Discover Self-Directed 401(k) eligibility, alternative investment possibilities, and essential rules.", category: "people" },
  { slug: "owner-operator-truck-drivers", title: "Self-Directed 401(k) For Truck Drivers", description: "Own a trucking business? Discover Self-Directed 401(k) opportunities for owner-operators, including real estate, private lending, eligibility, and key restrictions.", category: "people" },
  { slug: "real-estate-agent", title: "Self-Directed 401(k) For Real Estate Agents", description: "Real estate agent or broker? Learn how a Self-Directed 401(k) may allow qualifying property investments, who can qualify, and which transactions are restricted.", category: "people" },
  { slug: "rental-duplex-investment", title: "Can A Self-Directed 401(k) Own A Rental Duplex?", description: "Could your Self-Directed 401(k) own a rental duplex with two tenants? Explore a fully reconciled rental-property example, vacancy risk, and repair costs.", category: "examples" },
  { slug: "self-storage-mini-warehouse-investing", title: "Self-Storage & Mini-Warehouse Investing With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) own an interest in a 64-unit self-storage facility? Explore a fully reconciled example, operating costs, and the UBTI tax distinction.", category: "examples" },
  { slug: "seller-financing-land-monthly-payments", title: "Seller Financing Inside A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) sell land and receive monthly payments? Explore a fully reconciled seller-financing example, note risks, and tax questions.", category: "examples" },
  { slug: "shopping-center-commercial-real-estate", title: "Owning A Shopping Center Storefront With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) own one commercial storefront in a shopping center without owning the tenant's business? Explore a fully reconciled example.", category: "examples" },
  { slug: "startup-investing-before-ipo", title: "Startup Investing Before IPO With A Self-Directed 401(k)", description: "Could your Self-Directed 401(k) invest in a startup before it goes public? Explore a fully reconciled SAFE, runway, and customer-economics example.", category: "examples" },
  { slug: "wealthy-entrepreneur-private-markets", title: "Self-Directed 401(k) Private Market Investing", description: "Explore private company equity, private lending, and real estate fund opportunities through a Self-Directed 401(k), including eligibility, risks, and legal restrictions.", category: "people" },
  { slug: "weekend-entrepreneur-side-business", title: "Self-Directed 401(k) for Side Businesses", description: "Have a job and a side business? Discover when a Self-Directed 401(k) may be available, how contribution limits work, and what investments it might hold.", category: "people" },
];

export const curriculumIra: CurriculumModule[] = [
  { slug: "a-small-piece-of-a-big-apartment-deal", title: "Apartment Syndications in a Self-Directed IRA", description: "Discover how a Self-Directed IRA may invest in apartment syndications and private multifamily funds. Learn ownership, distributions, fees, debt, and risks.", category: "examples" },
  { slug: "beyond-a-single-investment", title: "Can a Self-Directed IRA Hold Multiple Investments?", description: "Discover how an appropriate Self-Directed IRA may hold several qualifying investments at once — real estate, private loans, public markets, precious metals, and private businesses.", category: "turning-points" },
  { slug: "buying-a-piece-of-a-private-business", title: "Can a Self-Directed IRA Own Part of a Private Business?", description: "Discover how a Self-Directed IRA may own part of a private business. Learn ownership, valuations, dilution, distributions, UBIT, and investment risks.", category: "examples" },
  { slug: "buying-tax-lien-certificates", title: "Tax Lien Certificates in a Self-Directed IRA", description: "Learn how a Self-Directed IRA may buy tax lien certificates, how Florida interest and redemption rules work, and what risks investors need to understand.", category: "examples" },
  { slug: "getting-paid-from-mineral-rights", title: "Mineral Rights and Oil Royalties in a Self-Directed IRA", description: "Discover how a Self-Directed IRA may own mineral rights and receive oil and gas royalties. Learn ownership, royalty calculations, taxes, production risks, and more.", category: "examples" },
  { slug: "investing-alongside-other-investors", title: "Real Estate Crowdfunding With a Self-Directed IRA", description: "Discover how a Self-Directed IRA may invest through real estate crowdfunding platforms. Learn ownership, fees, investor eligibility, distributions, taxes, and risks.", category: "examples" },
  { slug: "investing-with-25000", title: "Investing $25,000 With a Self-Directed IRA", description: "Explore three $25,000 Self-Directed IRA investment scenarios: land, private loans, and real estate equity. Learn fees, income, liquidity, taxes, and risks.", category: "balances" },
  { slug: "owning-farmland-without-farming", title: "Can a Self-Directed IRA Own Farmland?", description: "Discover how a Self-Directed IRA may own farmland leased to a farmer. Explore cash rent, land costs, agricultural rules, taxes, and investment risks.", category: "examples" },
  { slug: "starting-with-5000", title: "Can You Start a Self-Directed IRA With $5,000?", description: "Explore what a $5,000 Self-Directed IRA might access, including smaller investments, private notes, minimums, fees, risks, and future contributions.", category: "balances" },
  { slug: "the-100000-self-directed-ira", title: "What Can a $100,000 Self-Directed IRA Invest In?", description: "Explore how a $100,000 Self-Directed IRA might own rental property, private notes, and company shares. Learn cash flow, repayments, taxes, and risks.", category: "balances" },
  { slug: "the-15000-land-investment", title: "The $15,000 Land Investment | Self-Directed IRA", description: "Explore how a Self-Directed IRA may purchase qualifying vacant land, the real costs behind a low asking price, three possible outcomes, and the ownership rules that apply.", category: "examples" },
  { slug: "the-2-million-ira", title: "What Can a $2 Million Self-Directed IRA Invest In?", description: "Explore what a $2 million Self-Directed IRA might own, including commercial property and private loans. Understand income, RMDs, liquidity, and inheritance.", category: "balances" },
  { slug: "the-30000-private-loan", title: "$30,000 Private Loan With a Self-Directed IRA", description: "See how a Self-Directed IRA may make a $30,000 private loan, collect interest, and face late payments or default. Explore the rules and risks.", category: "examples" },
  { slug: "the-500000-self-directed-ira", title: "What Can a $500,000 Self-Directed IRA Invest In?", description: "Explore how a $500,000 Self-Directed IRA might purchase commercial real estate with cash or financing. Learn income, debt, taxes, and risk.", category: "balances" },
  { slug: "the-airbnb-investment", title: "Can a Self-Directed IRA Own an Airbnb?", description: "Explore how a Self-Directed IRA may own short-term rental property. See booking income, occupancy costs, Airbnb fees, IRA tax rules, and risks.", category: "examples" },
  { slug: "the-blue-collar-worker", title: "Self-Directed IRA for Skilled Tradespeople", description: "Can electricians, mechanics, and other tradespeople invest their IRA in private loans, real estate, and precious metals? Explore the rules and the risks.", category: "people" },
  { slug: "the-commercial-warehouse-investor", title: "Commercial Warehouse Investing With a Self-Directed IRA", description: "Discover how a Self-Directed IRA may own a commercial warehouse, collect rent, and handle triple-net leases, tenant defaults, vacancies, repairs, and taxes.", category: "examples" },
  { slug: "the-everyday-investor", title: "Self-Directed IRA Without a Business: Beginner Guide", description: "You don't need a business to explore a self-directed IRA. Discover simple examples of real estate, private loans, the rules, and the risks.", category: "people" },
  { slug: "the-experienced-landlord", title: "Self-Directed IRA Real Estate for Landlords", description: "Already own rentals? Learn how a Self-Directed IRA may invest in real estate, why you can't sell your own property to it, and the rules and risks.", category: "people" },
  { slug: "the-forgotten-old-401k", title: "Forgotten Old 401(k)? Find It and Explore IRA Rollover Options", description: "Have an old 401(k) from a former employer? Learn how to find it, compare rollover options, avoid withdrawal tax mistakes, and explore Self-Directed IRA investments.", category: "turning-points" },
  { slug: "the-healthcare-professional", title: "Self-Directed IRA Real Estate for Nurses", description: "Can nurses invest in rental real estate through an IRA? Explore property income, expenses, management, rollover rules, and important investment risks.", category: "people" },
  { slug: "the-investor-approaching-retirement", title: "Income-Producing Self-Directed IRA Investments", description: "Explore income-producing Self-Directed IRA investments before retirement. Learn about rental income, private lending, cash flow, RMDs, and risks.", category: "people" },
  { slug: "the-multimillionaire", title: "Self-Directed IRA for High-Net-Worth Investors", description: "Explore Self-Directed IRA opportunities for high-net-worth investors, including private real estate, lending, business interests, tax rules, and risks.", category: "people" },
  { slug: "the-real-estate-agent", title: "Self-Directed IRA for Real Estate Agents", description: "Can real estate agents invest in property through a Self-Directed IRA? Explore a real estate example, commission restrictions, taxes, and risks.", category: "people" },
  { slug: "the-roth-ira-rental-house", title: "Can a Roth IRA Own a Rental Property?", description: "Discover how a Self-Directed Roth IRA may buy a rental house, collect rent, handle expenses, and benefit from a sale. Learn the tax rules and risks.", category: "examples" },
  { slug: "the-small-business-owner", title: "Self-Directed IRA for Small Business Owners", description: "Can your IRA invest in a private company? Learn opportunities for business owners, ownership examples, self-dealing rules, dilution, and investment risks.", category: "people" },
  { slug: "the-startup-investment", title: "Can a Self-Directed IRA Invest in Startups?", description: "Discover how a Self-Directed IRA may invest in startup shares. Explore funding rounds, cash runway, SAFEs, dilution, taxes, and total-loss risks.", category: "examples" },
  { slug: "the-tax-deed-auction", title: "Tax Deed Auctions With a Self-Directed IRA", description: "Discover how a Self-Directed IRA may buy real estate at tax deed auctions. Learn Florida auction rules, title risks, total costs, and investment outcomes.", category: "examples" },
  { slug: "the-teacher", title: "Self-Directed IRA for Teachers: Beyond the 403(b)", description: "Discover Self-Directed IRA opportunities for teachers, including real estate and private lending. Learn how pensions and 403(b)s differ, plus the risks.", category: "people" },
  { slug: "the-young-investor", title: "Self-Directed Roth IRA for Young Investors", description: "Discover how young investors can start small with a self-directed Roth IRA, explore investment possibilities, and understand the tax rules and risks.", category: "people" },
];

export type DiscoveryCategoryKey = "starting-out" | "self-employed" | "real-estate" | "income" | "substantial-capital" | "extraordinary";

export type DiscoveryModuleRef = { collection: "401k" | "ira"; slug: string };

export const discoveryCategories: {
  key: DiscoveryCategoryKey;
  title: string;
  description: string;
  modules: DiscoveryModuleRef[];
}[] = [
  {
    key: "starting-out",
    title: "I'm Just Getting Started",
    description: "For young investors, everyday workers, and people exploring investments with smaller account balances.",
    modules: [
      { collection: "ira", slug: "starting-with-5000" },
      { collection: "ira", slug: "investing-with-25000" },
      { collection: "ira", slug: "the-young-investor" },
      { collection: "ira", slug: "the-everyday-investor" },
      { collection: "401k", slug: "investing-with-5000" },
      { collection: "401k", slug: "investing-with-25000" },
    ],
  },
  {
    key: "self-employed",
    title: "I Work for Myself",
    description: "For contractors, freelancers, truck drivers, business owners, real estate agents, and entrepreneurs.",
    modules: [
      { collection: "401k", slug: "blue-collar-investor" },
      { collection: "401k", slug: "independent-contractor-1099" },
      { collection: "401k", slug: "owner-operator-truck-drivers" },
      { collection: "401k", slug: "real-estate-agent" },
      { collection: "401k", slug: "online-entrepreneur-ecommerce" },
      { collection: "401k", slug: "weekend-entrepreneur-side-business" },
      { collection: "ira", slug: "the-real-estate-agent" },
      { collection: "ira", slug: "the-small-business-owner" },
    ],
  },
  {
    key: "real-estate",
    title: "I Love Real Estate",
    description: "For people interested in vacant land, rental houses, private mortgages, apartment buildings, farmland, and commercial real estate.",
    modules: [
      { collection: "401k", slug: "12000-vacant-lot" },
      { collection: "401k", slug: "agricultural-land-investing" },
      { collection: "401k", slug: "rental-duplex-investment" },
      { collection: "401k", slug: "shopping-center-commercial-real-estate" },
      { collection: "ira", slug: "the-15000-land-investment" },
      { collection: "ira", slug: "owning-farmland-without-farming" },
      { collection: "ira", slug: "the-airbnb-investment" },
      { collection: "ira", slug: "the-commercial-warehouse-investor" },
      { collection: "ira", slug: "a-small-piece-of-a-big-apartment-deal" },
    ],
  },
  {
    key: "income",
    title: "I Want My Investments to Produce Income",
    description: "Featuring rental properties, private lending, seller-financed notes, interest payments, and other qualifying income-producing investments.",
    modules: [
      { collection: "401k", slug: "fix-and-flip-private-lending" },
      { collection: "401k", slug: "seller-financing-land-monthly-payments" },
      { collection: "401k", slug: "buying-existing-mortgage-notes" },
      { collection: "ira", slug: "the-30000-private-loan" },
      { collection: "ira", slug: "the-investor-approaching-retirement" },
      { collection: "ira", slug: "getting-paid-from-mineral-rights" },
    ],
  },
  {
    key: "substantial-capital",
    title: "I Have Substantial Capital",
    description: "For established investors, high-income professionals, entrepreneurs, and sophisticated private investors.",
    modules: [
      { collection: "401k", slug: "investing-with-2000000" },
      { collection: "401k", slug: "investing-with-500000" },
      { collection: "401k", slug: "wealthy-entrepreneur-private-markets" },
      { collection: "ira", slug: "the-2-million-ira" },
      { collection: "ira", slug: "the-500000-self-directed-ira" },
      { collection: "ira", slug: "the-multimillionaire" },
    ],
  },
  {
    key: "extraordinary",
    title: "Show Me Something Extraordinary",
    description: "For visitors who just want to discover fascinating opportunities they never knew existed.",
    modules: [
      { collection: "401k", slug: "mobile-home-park-investing" },
      { collection: "401k", slug: "oil-gas-mineral-royalty-investing" },
      { collection: "401k", slug: "startup-investing-before-ipo" },
      { collection: "401k", slug: "self-storage-mini-warehouse-investing" },
      { collection: "ira", slug: "the-tax-deed-auction" },
      { collection: "ira", slug: "buying-tax-lien-certificates" },
      { collection: "ira", slug: "the-startup-investment" },
    ],
  },
];
