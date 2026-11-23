export const hero = {
  eyebrow: "The Multimillionaire",
  title: ["You've Built Millions.", "Has Your IRA Explored Everything It Could Own?"],
  goldLine: 1,
  description:
    "You've spent years building financial assets. Perhaps you own a successful business, investment properties, or a substantial portfolio of stocks, bonds, or other financial investments. But what if your retirement account could potentially invest in qualifying assets beyond the conventional brokerage menu? A Self-Directed IRA may expand the investment choices available. That doesn't make every investment suitable, and it doesn't guarantee that a private investment will outperform a public one.",
  whoItsFor:
    "For high-net-worth individuals, business owners who have accumulated personal wealth, and investors working with financial advisers or attorneys who are curious about private-market IRA investments.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const investmentUniverse = {
  eyebrow: "The Investments You Know and the Ones You May Not Have Explored",
  heading: ["Your Financial World May Be Bigger", "Than Your Retirement Account's Investment Menu."],
  leftLabel: "Conventional Retirement Investment Menu",
  rightLabel: "Potential Self-Directed IRA Investment Menu",
  rows: [
    { left: "Publicly traded stocks", right: "Qualifying direct real estate" },
    { left: "Exchange-traded funds", right: "Certain private real estate funds" },
    { left: "Mutual funds", right: "Permitted private loans" },
    { left: "Bonds and other conventional instruments", right: "Eligible private business investments and permitted precious metals" },
  ],
  footnote: "Self-directed does not automatically mean superior. A broader investment menu is an opportunity to evaluate more choices, not a reason to abandon investments that already serve you well.",
};

export const alexanderStory = {
  eyebrow: "Meet Alexander",
  heading: ["He's Built an $8 Million Financial Life.", "But Has He Examined What Connects His Investments?"],
  stories: [
    {
      label: "Illustrative High-Net-Worth Investor",
      headline: "Alexander's financial life looks diversified at first glance. But he begins noticing something interesting about what his investments actually depend on.",
      scenario:
        "Alexander is 54, a business owner who built a regional logistics and distribution company. His fictional net financial position: a privately owned distribution business ($2,000,000), a commercial warehouse with net equity of $1,500,000, conventional investments outside the IRA ($2,000,000), personal cash ($1,000,000), and a traditional IRA ($1,500,000) — a total illustrative net financial position of $8,000,000. These figures are fictional estimates and exclude other possible assets, liabilities, taxes, transaction costs, and valuation changes.",
      realization: "His business serves the logistics industry. His warehouse earns income from a commercial tenant connected to distribution activity. And a private investment opportunity he is considering involves lending to businesses that also depend on freight and distribution demand.",
      risk: "Different legal assets. Different investments. But potentially some of the same underlying economic risks. Alexander is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const privateMarketOpportunity = {
  eyebrow: "The Private Market Opportunity",
  heading: ["Imagine Your IRA Participating in an Investment", "Outside the Public Stock Market."],
  intro:
    "Alexander learns about a fictional private credit fund that makes loans to eligible, unrelated logistics and distribution companies. The proposed investment is not a loan to Alexander's own business or his warehouse, and there are no assumed prohibited relationships. For this fictional example, the investment is permitted by the custodian, the offering is legally available, and applicable investor eligibility requirements are satisfied.",
  figures: [
    { label: "Private Credit Fund Investment", value: "$250,000" },
    { label: "Other IRA Investments", value: "$1,050,000" },
    { label: "IRA Cash", value: "$200,000" },
    { label: "Total IRA Value After Allocation", value: "$1,500,000" },
  ],
  disclaimer: "The IRA would own an investment interest in the fund — it would not necessarily own the fund's loans directly, and it would not automatically hold direct liens against the borrowers' equipment or other collateral. A private fund can create investment exposure to businesses you don't own or manage directly, and that exposure still carries financial and legal risks.",
};

export const threeQuestions = {
  eyebrow: "The Three Questions Behind Every Investment",
  heading: ["What Do I Own?", "What Makes It Valuable?", "What Could Make It Lose Value?"],
  steps: [
    { number: "01", title: "What Do I Own?", description: "The legal investment — shares in a company, ownership equity in a commercial property, or an interest in a private lending fund." },
    { number: "02", title: "What Makes It Valuable?", description: "The economic activity supporting the investment — customer demand, tenant rent, borrower repayment, investment performance, or the ability to sell at an acceptable price." },
    { number: "03", title: "What Could Make It Lose Value?", description: "The conditions that could negatively affect the investment — an industry downturn, tenant or borrower default, declining property values, higher expenses, or illiquidity." },
  ],
  note: "An investor may own several different legal assets. But those assets can depend on overlapping economic conditions. Understanding what each investment owns is the beginning — understanding what it depends on can reveal another layer of risk.",
};

export const exposureReveal = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["Three Different Investments.", "One Economic Shock."],
  intro:
    "Explore the same fictional $8 million portfolio from three angles. The relationships are not identical and are not legally the same investment — but one economic downturn could affect more of the portfolio than it first appears.",
  assets: [
    { key: "business", label: "Privately Owned Distribution Business", value: "$2,000,000", exposed: true },
    { key: "warehouse", label: "Commercial Warehouse (Net Equity)", value: "$1,500,000", exposed: true },
    { key: "conventional", label: "Conventional Investments Outside the IRA", value: "$2,000,000" },
    { key: "cash", label: "Personal Cash", value: "$1,000,000" },
    { key: "ira-fund", label: "IRA — Private Credit Fund", value: "$250,000", exposed: true, sublabel: "Part of the $1,500,000 traditional IRA" },
    { key: "ira-other", label: "IRA — Other Investments & Cash", value: "$1,250,000", sublabel: "Part of the $1,500,000 traditional IRA" },
  ],
  sharedRiskNote: "Alexander's privately owned distribution business, his personally owned commercial warehouse, and his IRA's private credit fund investment are not legally the same investment. But his business may be affected by changing freight demand, the warehouse may be affected by conditions involving industrial tenants, and the private credit fund may be affected by borrowers exposed to related economic conditions. Three different assets don't necessarily mean three independent sources of risk.",
  downturn: [
    { label: "Privately Owned Business", before: "$2,000,000", after: "$1,400,000", loss: "$600,000" },
    { label: "Commercial Warehouse Equity", before: "$1,500,000", after: "$1,200,000", loss: "$300,000" },
    { label: "IRA Private Credit Fund", before: "$250,000", after: "$187,500", loss: "$62,500" },
  ],
  unaffectedTotal: "$4,250,000",
  startingTotal: "$8,000,000",
  endingTotal: "$7,037,500",
  totalDecline: "-$962,500 (~12.03%)",
  disclaimer: "Hypothetical educational scenario. Not an investment forecast, correlation study, portfolio recommendation, or prediction of loss. The decline in net equity value for the warehouse is not necessarily the same as a decline in the property's gross market value. A portfolio can look diversified until you understand what drives its value.",
};

export const whyMattersWealthy = {
  eyebrow: "Why This Matters to a Multimillionaire",
  heading: ["More Capital Doesn't Automatically Mean", "More Financial Independence."],
  goldLine: 1,
  paragraphs: [
    "A multimillionaire may own a substantial business, several properties, and a diversified-looking collection of investments. But financial independence depends on more than the number of assets — it also depends on the risks those assets share. An entrepreneur's income and business value may rise and fall together, a commercial property may depend on tenants exposed to the same industry, and an IRA investment may introduce another connection to those economic forces.",
    "This doesn't mean an investor should avoid businesses, real estate, or private lending. It means the investments deserve thoughtful evaluation — look beyond the asset's name and understand the economic activity that supports its value.",
  ],
  featured: "A portfolio can look diversified until you understand what drives its value.",
};

export const threeOpportunities = {
  eyebrow: "The Private Investment Opportunities Worth Discovering",
  heading: ["What Might a Self-Directed IRA Explore", "Beyond a Conventional Investment Menu?"],
  steps: [
    { number: "01", title: "Private Real Estate Funds", description: "A qualifying Self-Directed IRA may be eligible to acquire an interest in a fund that invests in commercial real estate, obtaining exposure to properties larger than it could purchase independently. Manager quality, debt and leverage, fund expenses, and liquidity restrictions all matter." },
    { number: "02", title: "Private Lending", description: "Certain Self-Directed IRAs may make qualifying private loans directly or invest in eligible lending funds. The value of a private loan depends on more than its stated interest rate — borrower finances, collateral rights, and default provisions matter." },
    { number: "03", title: "Private Business Investments", description: "A qualifying Self-Directed IRA may be able to hold certain private-company ownership interests. The investment may benefit if the company performs well, or experience losses, dilution, illiquidity, or complete failure." },
  ],
  note: "A private-company investment can be fascinating without being appropriate or successful.",
};

export const eligibilityVsAppropriate = {
  eyebrow: "The Private Markets Are Not a VIP Club Where the Rules Disappear",
  heading: ["Being Eligible to Consider an Investment", "Is Not the Same as Knowing Whether It Belongs."],
  goldLine: 1,
  paragraphs: [
    "Some private investment offerings are available only to investors who satisfy particular legal requirements, one common category being an accredited investor. Under the general SEC individual net-worth standard, a person may qualify with net worth greater than $1 million, individually or jointly with a spouse or spousal equivalent, excluding the primary residence under the applicable rules. But meeting an individual net-worth test does not automatically mean every investment is available — some offerings have stricter eligibility requirements, and the actual legal purchaser may be a retirement account or another entity whose eligibility must be determined under the rules relevant to that offering.",
    "A legal eligibility test does not evaluate whether a particular investment makes financial sense for that person. A wealthy investor might qualify to purchase a private fund interest that still charges high fees, has assets that are difficult to sell, is managed poorly, loses value, and creates additional tax or liquidity complications inside an IRA.",
  ],
  note: "Qualification answers who may be allowed to participate. Due diligence addresses whether the opportunity deserves consideration.",
};

export const familyInvestmentCompany = {
  eyebrow: "Your IRA Doesn't Become a Family Investment Company",
  heading: ["Your Family's Wealth and Your IRA's Assets", "Must Remain Legally Distinct."],
  goldLine: 1,
  paragraphs: [
    "High-net-worth households may use trusts, LLCs, family partnerships, and other ownership arrangements. The existence of these structures does not automatically permit an IRA to participate in transactions involving them. An IRA cannot simply purchase assets from its owner or another disqualified person, and transactions involving certain family members, related companies, personal services, compensation, and improper personal benefits can be prohibited. Using an LLC, family partnership, or trust does not automatically eliminate those restrictions.",
    "A wealthy individual should not assume their IRA may buy a personally owned building, lend money to a company they control, rent IRA-owned property to a disqualified family member, personally guarantee an IRA loan, receive personal fees from an IRA transaction, or supply compensated services to an IRA-owned investment.",
  ],
  note: "The more interconnected a family's investments and businesses become, the more important it is to examine prohibited relationships before an IRA transaction occurs.",
};

export const sizeValuationCustodian = {
  eyebrow: "A Six-Figure Investment Can Still Lose Every Dollar",
  heading: ["Larger Amounts Deserve Greater Diligence,", "Not Greater Assumptions."],
  goldLine: 1,
  paragraphs: [
    "A multimillionaire may be comfortable discussing investments involving hundreds of thousands of dollars. That familiarity can make large amounts feel ordinary, but an investment's size does not make it financially sound. Suppose the IRA invests $250,000 in a private credit fund with attractive presentation materials and experienced managers. The fund can still experience borrower defaults, losses, liquidity restrictions, fraud, or operational problems — the IRA may recover less than it invested, or in severe circumstances, the investment could become worthless.",
    "Private assets can be difficult to value. A custodian may report a value supplied by an investment manager or outside valuation provider, but the reported figure does not automatically represent the amount the IRA could receive from an immediate sale — transfer restrictions, the lack of an active market, and restricted redemptions can all stand between a reported value and actual cash.",
    "A Self-Directed IRA requires an appropriate trustee or custodian, but investors should not assume the custodian verifies the business quality or financial strength of every private investment. The SEC has warned that self-directed custodians generally do not evaluate the quality or legitimacy of investments and their promoters.",
  ],
  note: "A larger investment deserves greater diligence, not greater assumptions. A legitimate custodian administers an account — it should not be mistaken for a guarantee of investment quality.",
};

export const taxLeverageCosts = {
  eyebrow: "The Tax Structure, the Leverage, and the Hidden Costs",
  heading: ["A Private Investment Inside an IRA Isn't", "Automatically Free From Every Cost or Tax."],
  goldLine: 1,
  paragraphs: [
    "Traditional and Roth IRAs have favorable retirement tax rules, but some alternative investments can generate tax obligations within the account itself. Certain business activities held through partnerships can produce unrelated business taxable income, and debt-financed real estate or other financed assets can also raise unrelated debt-financed income questions. The investment's legal structure can matter as much as the asset itself.",
    "High-net-worth investors may already understand how commercial real estate is financed, and borrowing can increase purchasing power — but it can also amplify losses. Certain specialized financing arrangements may be possible inside an IRA, but prohibited-transaction rules restrict dealings involving the owner and other disqualified persons, and an owner cannot simply assume they may personally guarantee a loan for their IRA.",
    "Private investments may also have multiple layers of expenses: custodial administration, transaction processing, investment management, fund operating expenses, legal and organizational costs, valuation, and asset servicing. The largest-looking investment opportunity is not necessarily the best after costs and risk.",
  ],
  note: "Being able to fund a larger transaction doesn't make its financing structure automatically permissible or financially attractive.",
};

export const diversificationAndExit = {
  eyebrow: "Why More Assets Can Still Mean Concentrated Risk",
  heading: ["Diversification Is About", "What Can Go Wrong Together."],
  goldLine: 1,
  paragraphs: [
    "Investors often think of diversification as owning different asset names — stocks, buildings, private funds, businesses, loans. But different investments can depend on the same customers, industries, interest rates, or economic conditions. Diversification can reduce certain risks, but it cannot eliminate investment loss — what matters isn't only how many investments you own, it's what those investments depend on.",
    "A commercial property may take months to sell, a closely held business may require a specialized buyer, and a private fund may restrict transfers. For a wealthy investor, this matters because financial obligations — taxes, business commitments, property expenses, family responsibilities, retirement distributions — do not always arrive when investments become liquid. A person can have significant net worth and still experience liquidity pressure.",
  ],
  featured: "Wealth and liquidity are connected, but they are not the same thing.",
};

export const beneficiaryAndRMD = {
  eyebrow: "Family Wealth Doesn't Remove Beneficiary Questions",
  heading: ["What Happens to the IRA", "When the Owner Dies?"],
  goldLine: 1,
  paragraphs: [
    "High-net-worth individuals often consider how assets will be managed and transferred to the next generation. An IRA has its own beneficiary and distribution rules, which are not automatically identical to the ownership and inheritance rules applying to a personal business, real estate holding company, or revocable trust. A private fund or property inside an IRA may be difficult to liquidate when a beneficiary needs to comply with applicable distribution rules.",
  ],
  note: "Putting investments inside an IRA does not automatically avoid estate tax, inheritance issues, or beneficiary distribution requirements. A sophisticated investment deserves a plan for what happens when the original account holder is no longer directing it.",
};

export const existingLargeIRA = {
  eyebrow: "What If You Have an Existing Large IRA?",
  heading: ["You May Already Have Retirement Assets", "That Could Explore a Different Investment Menu."],
  steps: [
    { number: "01", title: "Existing Traditional IRA", description: "An eligible trustee-to-trustee transfer may allow assets or cash to move between appropriate traditional IRA custodians without treating the transfer as a personal taxable distribution." },
    { number: "02", title: "Existing Roth IRA", description: "An appropriate Roth IRA transfer may preserve Roth IRA status, subject to applicable rules." },
    { number: "03", title: "Former Employer Retirement Plan", description: "An eligible distribution from a former employer plan may be rolled into an IRA, once distribution eligibility is verified. A business owner cannot assume current workplace retirement assets are immediately available for rollover." },
  ],
  note: "Moving pretax retirement assets into a Roth IRA generally can create taxable conversion income. The question isn't simply how much retirement money you have — it's which account holds it, what investments the receiving custodian supports, and whether the particular transaction is permitted.",
};

export const dueDiligenceFramework = {
  eyebrow: "The Multimillionaire's Due-Diligence Framework",
  heading: ["Before Your IRA Commits Six Figures,", "Investigate the Investment Like the Entire Amount Matters."],
  steps: [
    { number: "01", title: "Ownership & Control", description: "What exactly will the IRA own, and who controls the investment — who makes decisions, spends money, or sells assets?" },
    { number: "02", title: "Economic Support & Risk", description: "What economic activity supports its value, and what are the major risks — business failure, default, leverage, fraud?" },
    { number: "03", title: "Cost & Tax Structure", description: "How much does the investment cost, and could the entity type or financing arrangement generate taxes within the IRA?" },
    { number: "04", title: "Relationships & Liquidity", description: "Are any parties related to the IRA owner, family, or businesses, and how could the IRA get its money back — a sale, maturity, distribution, or redemption?" },
    { number: "05", title: "The Bigger Picture", description: "What other investments depend on the same economic conditions, and does the potential benefit justify the risks, fees, complexity, and loss of liquidity?" },
  ],
  note: "The goal is not to find a private investment that sounds impressive. It's to understand what the investment actually adds to your financial picture.",
};

export const fiveMistakes = {
  eyebrow: "Five Mistakes a Wealthy Investor Can Still Make",
  heading: ["Significant Wealth Doesn't Make an Investor", "Immune to Expensive Mistakes."],
  steps: [
    { number: "01", title: "Confusing Access With Quality", description: "An exclusive offering is not automatically a good offering." },
    { number: "02", title: "Assuming a Custodian Vetted the Deal", description: "A legitimate account arrangement does not guarantee investment legitimacy or performance." },
    { number: "03", title: "Overlooking Related-Party Relationships", description: "Family businesses, personal companies, trusts, and other structures can create prohibited-transaction concerns." },
    { number: "04", title: "Treating a Private Valuation as Available Cash", description: "Reported asset values may not be readily realizable." },
    { number: "05", title: "Owning Several Investments Exposed to the Same Downturn", description: "Different asset categories may share underlying economic risks." },
  ],
  note: "The best reason to explore a broader investment menu is to understand more possibilities, not to assume that being wealthy makes every possibility appropriate.",
};

export const whatCanCannotPromise = {
  eyebrow: "What a Self-Directed IRA Can and Cannot Promise",
  heading: ["Broader Investment Access Is Powerful.", "Guaranteed Results Aren't Part of It."],
  leftLabel: "What May Be Possible",
  rightLabel: "What Is Not Promised",
  rows: [
    { left: "Exploring qualifying private-market investments", right: "Guaranteed investment approval or access to every private offering" },
    { left: "Holding certain eligible private loans and real estate", right: "Guaranteed income or superior investment performance" },
    { left: "Owning eligible private-company interests", right: "Special exemptions from prohibited-transaction rules for wealthy owners" },
    { left: "Accessing investment categories beyond some conventional IRA providers", right: "Complete protection against losses, elimination of all taxes, or immediate liquidity from private assets" },
  ],
  footnote: "A Self-Directed IRA may broaden what you can explore. The quality of the outcome still depends on the actual investments and the rules.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You've Built Significant Wealth.", "Discover the Investment Possibilities You May Have Overlooked."],
  goldLine: 1,
  paragraphs: [
    "You've spent years building financial assets, and you know that owning a business can create opportunity and risk, and that real estate can be valuable without being immediately liquid. But you may never have considered how a Self-Directed IRA could potentially participate in qualifying private-market investments. Not every investment will be appropriate, not every offering will be available, and no amount of wealth eliminates investment risk or retirement-account restrictions.",
    "But understanding additional possibilities may be valuable. The opportunity isn't simply to own more — it's to understand more about what your retirement account may be able to own.",
  ],
  featured: "Significant wealth may provide financial opportunities. A Self-Directed IRA may provide additional qualifying investment choices. Understanding the actual risks and legal structure is what makes that knowledge valuable.",
};

export const faqItems = [
  { question: "Can a multimillionaire establish a Self-Directed IRA?", answer: "Yes. Substantial wealth does not prevent someone from establishing a Self-Directed IRA. Applicable IRA rules, custodian requirements, and funding eligibility still apply." },
  { question: "Is a Self-Directed IRA different for high-net-worth individuals?", answer: "The same underlying IRA laws apply. A wealthy investor may have different financial circumstances and access to some private offerings, but substantial assets do not create exemptions from IRA restrictions." },
  { question: "Can a Self-Directed IRA invest in private equity?", answer: "Potentially. Certain qualifying private-company or private-fund interests may be available, subject to custodial support, securities laws, investor qualifications, and prohibited-transaction rules." },
  { question: "Can a Self-Directed IRA invest in private credit funds?", answer: "Potentially. A suitable IRA may hold eligible interests in private lending or credit funds, subject to applicable legal, tax, and custodial requirements." },
  { question: "Does being a multimillionaire automatically make me an accredited investor?", answer: "Not necessarily. The SEC applies specific eligibility criteria. Under the general individual net-worth test, primary residence value is excluded, and other rules apply. Income and certain professional qualifications can provide alternative routes." },
  { question: "Can I use my accredited investor status for any IRA investment?", answer: "No. An individual's status does not automatically establish eligibility for every offering or determine whether the IRA is a permitted purchaser. The offering, purchaser structure, custodian, and applicable rules must be evaluated." },
  { question: "What is the difference between an accredited investor and a qualified purchaser?", answer: "They are separate legal concepts used in different investment contexts. Qualified purchaser status can involve higher investment-related thresholds and different rules. Meeting one standard does not automatically satisfy every other offering requirement." },
  { question: "Can my IRA invest in a family-owned company?", answer: "Transactions involving an IRA owner, family members, controlled companies, or other disqualified persons can raise serious prohibited-transaction concerns. Do not assume a family-owned business investment is permissible." },
  { question: "Can my IRA buy commercial property from an LLC I own?", answer: "Selling personally controlled or related property to one's own IRA can constitute a prohibited transaction. Using an LLC does not automatically change that result." },
  { question: "Can I personally guarantee an IRA investment loan?", answer: "A personal guarantee can create prohibited extension-of-credit concerns. Do not assume such an arrangement is permissible." },
  { question: "Can my IRA invest alongside a family investment partnership?", answer: "Co-investment and related-party structures can create complex prohibited-transaction, allocation, and tax questions. A proposed structure requires qualified analysis before funds are committed." },
  { question: "Can my IRA invest in a private business that uses my company's services?", answer: "This may create conflicts or prohibited-transaction concerns depending on the relationships and personal benefits involved. A separately named company is not automatically independent." },
  { question: "Are all private investments more profitable than public investments?", answer: "No. Private investments can experience substantial losses, higher expenses, limited disclosures, uncertain valuations, and long holding periods." },
  { question: "Does my IRA custodian verify whether a private investment is legitimate?", answer: "Not necessarily. Self-directed custodians generally do not evaluate the investment's merits or verify all information supplied by promoters." },
  { question: "Can a Self-Directed IRA invest in private real estate funds?", answer: "Potentially. Eligible interests may be supported by a custodian, subject to investor eligibility, transaction restrictions, tax rules, and other requirements." },
  { question: "Can the IRA lose its entire investment in a private fund?", answer: "Yes. Private investments can suffer substantial or total losses." },
  { question: "Why does private investment valuation matter?", answer: "A reported value may not equal the amount that could be realized through an actual sale. Private assets can lack observable market prices and readily available buyers." },
  { question: "Can a Self-Directed IRA be subject to unrelated business income tax?", answer: "Yes. Certain partnership business activities and debt-financed arrangements can create unrelated business taxable income and related reporting or tax obligations within an IRA." },
  { question: "Can I move my existing traditional IRA to a Self-Directed IRA?", answer: "An eligible trustee-to-trustee transfer may allow assets or cash to move to an appropriate custodian. The account's traditional tax status generally remains the same." },
  { question: "Can I move pre-tax retirement money into a Self-Directed Roth IRA without paying tax?", answer: "Moving eligible pretax funds into a Roth IRA generally can create taxable conversion income. Self-direction does not eliminate the conversion rules." },
  { question: "Can a Self-Directed IRA be part of an estate plan?", answer: "An IRA can be considered within a broader estate plan, but it has its own beneficiary and distribution rules. It should not be treated as legally identical to personal property or a family trust." },
  { question: "Does owning multiple asset categories guarantee diversification?", answer: "No. Different assets can share economic risks, and diversification does not guarantee protection against loss." },
  { question: "Is a Self-Directed IRA better for a multimillionaire than a conventional IRA?", answer: "Not automatically. Broader investment access may be valuable for some investors, while conventional accounts may offer advantages involving liquidity, transparency, simplicity, and cost." },
];

export const references = [
  { title: "IRS: IRA Investment Rules", description: "Supports alternative investment eligibility and custodian restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Supports prohibited transactions involving disqualified persons and retirement assets.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Provides important information about prohibited personal benefits, sales, loans, and related-party transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 590-B", description: "Provides information about distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598", description: "Provides information about unrelated business income and debt-financed investment issues.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: IRA Required Minimum Distributions", description: "Supports the discussion of retirement distributions and beneficiary considerations.", href: "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" },
  { title: "SEC: Accredited Investors", description: "Provides information about investor eligibility criteria.", href: "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/accredited-investors" },
  { title: "SEC: Accredited Investor Net-Worth Standard", description: "Explains how the individual net-worth test is calculated.", href: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/accredited-investor-net-worth-standard" },
  { title: "SEC Investor Bulletin: Private Placements Under Regulation D", description: "Explains private offerings, investor eligibility, limited disclosure, and resale restrictions.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/private-placements-under-regulation-d-updated-investor-bulletin" },
  { title: "SEC Investor.gov: Private Equity Funds", description: "Supports discussion of private fund fees, holding periods, and liquidity limitations.", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/private-investment-funds/private-equity" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports the discussion of self-directed custodian limitations, valuation uncertainty, fees, illiquidity, and fraud.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "SEC Investor.gov: Asset Allocation and Diversification", description: "Provides accessible information about asset allocation, diversification, and investment risk.", href: "https://www.investor.gov/introduction-investing/getting-started/asset-allocation" },
];

export const finalConversion = {
  heading: ["You've Created Significant Wealth.", "Discover a Broader World of Retirement Investing."],
  description:
    "A Self-Directed IRA may provide access to certain qualifying private-market investments — real estate, private lending, and private businesses. Explore the opportunities. Understand the ownership. Evaluate the risks.",
  signature: "Alexander and all investment examples in this module are entirely fictional educational illustrations.",
};
