export const hero = {
  eyebrow: "BEYOND A SINGLE INVESTMENT",
  title: ["What If Your Retirement Account", "Could Open the Door to an Entire", "World of Investments?"],
  goldLine: 2,
  description:
    "Real estate. Private lending. Public markets. Precious metals. Private businesses. Discover how an appropriate Self-Directed IRA might bring different qualifying investments into one broader retirement strategy.",
  whoItsFor:
    "For IRA owners who assume a Self-Directed IRA means picking just one alternative asset, and want to understand how several qualifying investments can coexist — and behave very differently — inside one account.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const bigRevelation = {
  eyebrow: "THE BIG REVELATION",
  heading: ["A Self-Directed IRA Isn't", "Necessarily a One-Investment Account."],
  goldLine: 1,
  paragraphs: [
    "Some people discover Self-Directed IRAs because they're interested in buying a rental house. Others want to make private loans, or explore precious metals or private companies. But qualifying investments don't necessarily have to be considered one at a time — an appropriate account arrangement may support several different assets, each held for a different reason. One may produce rent. Another may generate interest. Another may be held for possible long-term growth. And some money may remain available as cash.",
    "A Self-Directed IRA doesn't guarantee that every asset is eligible or that one custodian supports all categories. The actual investment and custodial arrangements must still comply with applicable rules.",
  ],
  featured: "Self-Direction Can Expand the Range of Permitted Choices. It Doesn't Remove the Rules That Govern Those Choices.",
};

export const noraStory = {
  eyebrow: "MEET NORA",
  heading: ["Nora Has $400,000 in a Traditional IRA.", "She Wants to Understand More Than One Possibility."],
  stories: [
    {
      label: "THE INVESTOR",
      headline: "An Operations Director, 45, Looking Past a Single Investment Category",
      scenario:
        "Nora has heard about rental houses, private loans, stock funds, gold, and privately owned companies — but has always considered those investments separately. She has $400,000 in a traditional IRA and, for this illustration, an appropriate IRA custodial arrangement supporting all the modeled asset holdings, with any necessary brokerage and metal custody arrangements legally and operationally supported. The investments are acquired with available IRA cash, with no financing used.",
      realization:
        "What if her account included real estate, a private loan, conventional securities, a small private business investment, and enough available cash to handle legitimate expenses? She wants to understand the possibilities — but also the risks.",
      risk:
        "Illustrative hypothetical example. All transaction counterparties are assumed unrelated and legally permissible, and the assets are assumed properly titled, held, and administered. These are fictional conditions, not promises about any particular custodian.",
    },
  ],
};

export const sixAllocationsOverview = {
  eyebrow: "THE SIX ALLOCATIONS",
  heading: ["One $400,000 IRA.", "Six Different Allocations."],
  intro:
    "This is not a recommended portfolio. The percentages were selected to create a clear educational illustration — not based on Nora's actual risk tolerance, retirement income needs, or financial circumstances.",
  figures: [
    { label: "Rental Property", value: "$140,000 (35%)" },
    { label: "Private Loan", value: "$60,000 (15%)" },
    { label: "Publicly Traded Investment Funds", value: "$100,000 (25%)" },
    { label: "Qualifying Precious Metals", value: "$20,000 (5%)" },
    { label: "Private Company Shares", value: "$40,000 (10%)" },
    { label: "Available Cash Reserve", value: "$40,000 (10%)" },
  ],
  disclaimer:
    "The five investments total $360,000. Available cash totals $40,000. Five investment paths, one cash reserve — a much bigger picture of what a retirement account might hold.",
};

export const opportunityAtlas = {
  eyebrow: "THE OPPORTUNITY ATLAS",
  heading: ["Explore What the IRA Owns."],
  intro:
    "Six allocations, six very different financial realities. Select each one to see what the IRA actually owns, what it might produce, and what can go wrong.",
  decisions: [
    {
      key: "rental-property",
      label: "Rental Property",
      status: "review" as const,
      statusLabel: "$140,000 — 35% of the Account",
      action: "The IRA Could Own a Rental House.",
      explanation:
        "The appropriate IRA arrangement holds the qualifying investment property — Nora does not own it personally. An unrelated tenant rents the home, and legitimate rental income belongs to the IRA. The property may produce rent, require repairs, experience vacancy, rise or fall in value, and be difficult to sell quickly. Nora cannot assume she may personally use the house, rent it to disqualified persons, or treat the property as her own.",
      takeaway: "A Rental House May Create Income Opportunities, but Owning Real Estate Also Creates Expenses and Responsibilities.",
    },
    {
      key: "private-loan",
      label: "Private Loan",
      status: "review" as const,
      statusLabel: "$60,000 — 15% of the Account",
      action: "The IRA Could Become the Lender to an Unrelated Borrower.",
      explanation:
        "The fictional loan carries 9% fixed annual simple interest over a 24-month term, with monthly interest-only payments of $450 and principal due at maturity. The contractual rate is hypothetical, not a current market rate or a promise that a borrower can repay. Key risks include borrower default, delayed payments, collateral value changes, enforcement costs, and a lack of liquidity.",
      takeaway: "A Private Note May Create Scheduled Interest Payments, but Scheduled Payments Aren't Guaranteed Payments.",
    },
    {
      key: "public-markets",
      label: "Public Markets",
      status: "review" as const,
      statusLabel: "$100,000 — 25% of the Account",
      action: "A Self-Directed IRA Doesn't Have to Abandon Conventional Investments.",
      explanation:
        "This allocation holds a combination of qualifying publicly traded stock and bond funds through an appropriate supported brokerage arrangement. Self-direction does not necessarily mean replacing every familiar investment with an alternative asset — market prices may change, some funds pay distributions, and publicly traded funds may generally offer more observable pricing and potentially greater liquidity than many private investments. Risks include market declines, interest rate changes, bond credit risk, inflation, and volatility.",
      takeaway: "Conventional Funds and Qualifying Alternative Investments May Potentially Coexist Within a Supported Retirement Strategy.",
    },
    {
      key: "precious-metals",
      label: "Precious Metals",
      status: "review" as const,
      statusLabel: "$20,000 — 5% of the Account",
      action: "The IRA Could Hold Certain Qualifying Precious Metals.",
      explanation:
        "Federal IRA law generally restricts investments in collectibles, though certain coins and sufficiently refined bullion may qualify for exceptions — held under the required trustee custody arrangement. Nora cannot personally store this bullion at home. Precious metals may change in market value but generally do not produce rent or interest merely by being held, and storage, transaction, and custodial costs may apply.",
      takeaway: "Qualifying Precious Metals May Offer a Different Form of Investment Exposure, but Their Prices Can Fall and Custody Rules Matter.",
    },
    {
      key: "private-business",
      label: "Private Business",
      status: "review" as const,
      statusLabel: "$40,000 — 10% of the Account",
      action: "The IRA Might Own Shares in an Unrelated Private Company.",
      explanation:
        "This is a legally permissible minority investment in an unrelated privately held C corporation. Nora does not personally operate the company, and no improper benefits or prohibited relationships are involved. The IRA owns shares — it does not directly own the company's equipment, real estate, employees, or bank accounts. The company may grow, distribute cash, never distribute cash, be difficult to value, or fail.",
      takeaway: "A Private Company Investment Can Create Ownership Possibilities Without Guaranteeing Income, Control, or an Eventual Profitable Sale.",
    },
    {
      key: "cash-reserve",
      label: "Cash Reserve",
      status: "review" as const,
      statusLabel: "$40,000 — 10% of the Account",
      action: "The Sixth Allocation Isn't Another Investment. It's Money Kept Available.",
      explanation:
        "This is cash held within the appropriate retirement-account arrangement — available for property repairs, real estate taxes, insurance, legitimate professional and custodial expenses, investment opportunities, possible tax obligations, and future required distributions. Keeping money in cash isn't automatically the best investment decision; it has opportunity costs, and inflation can reduce its purchasing power. But an account with substantial illiquid investments may need available funds.",
      takeaway: "An IRA Can Own Valuable Assets and Still Need Available Cash.",
    },
  ],
  note: "Do not treat these figures as a recommended portfolio. They were selected purely to create a clear educational illustration, not as a suggestion for any actual individual's allocation.",
};

export const sixAllocationsAtAGlance = {
  eyebrow: "SIX ALLOCATIONS, SIX FINANCIAL REALITIES",
  heading: ["Six Allocations Don't Mean Six Ways", "to Earn the Same Kind of Money."],
  steps: [
    { number: "01", title: "Rental House", description: "Produces rent after expenses. Property value can rise or fall. A sale can take time to complete." },
    { number: "02", title: "Private Loan", description: "Produces interest and principal repayment when paid. Collectibility and value can change. Often difficult to transfer." },
    { number: "03", title: "Publicly Traded Funds", description: "May pay distributions. Observable market prices fluctuate. Generally more readily traded, subject to conditions." },
    { number: "04", title: "Precious Metals", description: "Usually produces no income merely from holding. Market price can rise or fall. Sale, custody, and spreads matter." },
    { number: "05", title: "Private Company Shares", description: "May pay dividends or sale proceeds, if any. Private valuation can rise or fall. Often highly illiquid." },
    { number: "06", title: "Cash Reserve", description: "Return depends on custody terms. Purchasing power changes with inflation. Generally available within the IRA." },
  ],
  note: "Different assets can create different financial opportunities, but their differences also make them harder to compare using one simple number.",
};

export const diversificationAndConcentration = {
  eyebrow: "WHAT DOES DIVERSIFICATION ACTUALLY MEAN?",
  heading: ["Different Investments Can Spread Risk.", "They Cannot Make Risk Disappear."],
  goldLine: 1,
  paragraphs: [
    "Diversification means spreading investments among different assets rather than relying entirely on one. If one investment performs poorly, another might behave differently — but that isn't guaranteed. A rental property and a private loan may both be affected by a weak local economy; a private business and stock funds may both struggle during a recession. Diversification can help manage certain concentration risks, but it does not guarantee a positive investment result.",
    "The rental property is only one investment, but it represents 35% of the fictional starting account. If its fair market value fell by 50% — from $140,000 to $70,000 — that $70,000 decline alone would equal 17.5% of the entire $400,000 starting IRA. Owning five investment categories does not mean the account has eliminated concentration; one large investment can still dominate the financial outcome of a portfolio containing several assets.",
  ],
  featured: "Having Different Investments Can Reduce Dependence on One Outcome, but It Doesn't Guarantee Protection Against Loss.",
};

export const sharedRiskMap = {
  eyebrow: "WHEN DIFFERENT INVESTMENTS SHARE THE SAME RISK",
  heading: ["Two Investments Can Look Different", "While Depending on the Same Economy."],
  goldLine: 1,
  paragraphs: [
    "The rental property and the private loan are legally different — one is property ownership, the other is a loan — but both may be affected by falling property values, a weak local economy, or problems involving real estate borrowers and tenants. Public stock funds and private business shares may both be exposed to economic slowdowns and changing business profits. Metals and public markets can both change in value because of interest rates, currency conditions, and investor expectations. Even the cash reserve, generally the most accessible allocation, is still subject to inflation and the terms of the custody arrangement.",
  ],
  featured: "Diversification Is About Understanding Shared Risks, Not Just Counting Investments.",
};

export const theMoneyTrail = {
  eyebrow: "THE MONEY TRAIL AND THE STRESS TEST",
  heading: ["Which Investments Actually Put Cash", "Into the IRA — and What If Several", "Have a Bad Year at Once?"],
  intro:
    "Two independent alternatives for the same starting $400,000 allocation and $40,000 cash reserve — not successive years. The stress year does not follow the successful year; it starts fresh from the same original allocation.",
  scenarios: [
    {
      key: "base-year",
      label: "Base Year",
      status: "Everything Performs as Scheduled",
      description:
        "The tenant pays as scheduled, the borrower makes all twelve interest payments, the public funds rise 6% in market value, and the precious metals rise 10% in quoted value. The private company continues operating but declares no distribution. Only the rental net cash and loan interest are actual cash added to the reserve — the market and metals gains are unrealized increases in value, not cash.",
      figures: [
        { label: "Rental Property Net Cash", value: "+$9,000" },
        { label: "Private Loan Interest Received", value: "+$5,400" },
        { label: "Public Funds Value Change (Unrealized)", value: "+$6,000" },
        { label: "Precious Metals Value Change (Unrealized)", value: "+$2,000" },
        { label: "Private Company Cash Received", value: "$0" },
        { label: "New Cash Added to Reserve", value: "$14,400" },
        { label: "Ending Available IRA Cash", value: "$54,400" },
      ],
      statement: "The Investments May Be Worth Much More Than the Cash Available to the IRA.",
    },
    {
      key: "stress-year",
      label: "Stress Year",
      status: "Several Investments Struggle at Once",
      description:
        "The rental house sits vacant the entire year while ordinary carrying costs and additional vacancy expenses continue. The borrower makes six interest payments, then misses the next six, with the $60,000 principal still outstanding and its collectibility uncertain. Public funds fall 20% and precious metals fall 10% in unrealized value. The private company again distributes nothing, and its fair market value remains uncertain.",
      figures: [
        { label: "Rental Property Net Cash", value: "-$15,000" },
        { label: "Private Loan Interest Received", value: "+$2,700" },
        { label: "Public Funds Value Change (Unrealized)", value: "-$20,000" },
        { label: "Precious Metals Value Change (Unrealized)", value: "-$2,000" },
        { label: "Private Company Cash Received", value: "$0" },
        { label: "New Cash Added to Reserve", value: "-$12,300" },
        { label: "Ending Available IRA Cash", value: "$27,700" },
      ],
      statement: "The Account Still Owns Five Investments. Its Available Cash Has Fallen to $27,700.",
    },
  ],
  tableColumns: [
    { label: "New Cash Added to Reserve", index: 5 },
    { label: "Ending Available IRA Cash", index: 6 },
  ],
  comparisonNote:
    "These are independent alternatives using the same original $400,000 allocation and $40,000 starting cash reserve. Do not count unrealized value changes as cash added to the reserve — a $6,000 or $20,000 market move is a change in estimated value, never a deposit. Neither scenario establishes the current fair market value of the rental property or the private company interest.",
  conclusion: "Different Assets Can Produce Cash, Change in Value, or Both — and Several Can Struggle Together in a Difficult Year.",
};

export const threeImportantNumbers = {
  eyebrow: "THREE NUMBERS THAT AREN'T THE SAME",
  heading: ["Investment Cost. Investment Value.", "Available Cash."],
  goldLine: 1,
  paragraphs: [
    "Investment cost is the amount originally spent to purchase an asset. Investment value is an appropriate estimate or observable market value of what it's currently worth. Available cash is money actually held and available within the IRA. The rental house originally cost $140,000 — that doesn't establish its current value. The private note has $60,000 of principal outstanding — that doesn't guarantee the IRA will collect it. The public funds have an observable market value, but that value isn't cash until appropriately sold and settled. And the private company shares may have no ready market price at all.",
  ],
  featured: "A Retirement Account Can Be Asset-Rich and Cash-Poor.",
};

export const liquidityRepairScenario = {
  eyebrow: "THE LIQUIDITY REVEAL",
  heading: ["What If the IRA Needs $25,000", "for an Unexpected Property Repair?"],
  intro:
    "Nora's rental property unexpectedly requires professional roof work — a separate extraordinary expense, not included in the ordinary property expense budget. These calculations apply the same $25,000 repair after each independent year's modeled cash activity; they are not successive events in one continuous year.",
  figures: [
    { label: "Available Cash After Base Year (Before Repair)", value: "$54,400" },
    { label: "Available Cash After Stress Year (Before Repair)", value: "$27,700" },
    { label: "Additional Roof Repair Cost", value: "$25,000" },
    { label: "Cash Remaining After Base Year", value: "$29,400" },
    { label: "Cash Remaining After Stress Year", value: "$2,700" },
  ],
  disclaimer:
    "The IRA could own several substantial investments, but the ability to pay a property expense depends on actual available cash — keeping cash available can be important when an IRA owns investments that require unexpected spending.",
};

export const liquidityComparisonByAsset = {
  eyebrow: "WHICH INVESTMENTS CAN BE SOLD QUICKLY?",
  heading: ["Not Every Asset Can Turn Into", "Cash at the Same Speed."],
  steps: [
    { number: "01", title: "Cash", description: "Already available within the account, subject to restrictions." },
    { number: "02", title: "Publicly Traded Funds", description: "Often more readily sold during normal market conditions." },
    { number: "03", title: "Qualifying Precious Metals", description: "Sale procedures, custody, and market spreads matter." },
    { number: "04", title: "Private Loan", description: "May be difficult to assign or sell." },
    { number: "05", title: "Rental House", description: "A sale can involve marketing, contracts, title, and closing." },
    { number: "06", title: "Private Company Shares", description: "Often restricted and highly illiquid." },
  ],
  note: "Do not assign fixed numbers of days to any of these. Real liquidity depends on market conditions, contracts, custody requirements, and the specific investment — an investment's value matters, but so does whether the account can actually turn it into money when needed.",
};

export const cashReserveTradeoffs = {
  eyebrow: "THE CASH RESERVE ISN'T FREE",
  heading: ["What Is the Cost of", "Keeping Money Uninvested?"],
  goldLine: 1,
  paragraphs: [
    "Cash can provide flexibility, but it also has tradeoffs. Money held as cash may not earn the same return as other investments, and inflation can reduce its purchasing power — the actual return, if any, depends on the custodial cash arrangement. This lesson does not recommend holding ten percent of every IRA in cash; the fictional reserve amount is not a universal financial rule. An appropriate cash allocation depends on the account's holdings, obligations, expected liquidity needs, and the investor's circumstances.",
  ],
};

export const moreInvestmentsMoreWork = {
  eyebrow: "MORE POSSIBILITIES, MORE RESPONSIBILITIES",
  heading: ["More Investment Options Can Also", "Create More Administrative Work."],
  goldLine: 1,
  paragraphs: [
    "Each investment may require its own information — a rental house needs property records, a private loan needs payment tracking, public securities have brokerage statements, precious metals require custody and valuation information, and private company investments may require financial reports and ownership records. All of it must be appropriately administered within the retirement-account arrangement, including maintaining accurate records, tracking legitimate income, preserving available cash, obtaining fair market values, and reviewing tax reporting requirements.",
  ],
  featured: "More Investment Flexibility Can Come With More Complexity, and Complexity Should Be Understood Before It Becomes a Problem.",
};

export const valuationChallenge = {
  eyebrow: "HOW MUCH IS THE ENTIRE IRA WORTH?",
  heading: ["Some Assets Are Easy to Price.", "Private Investments Are Not."],
  goldLine: 1,
  paragraphs: [
    "Public securities may have observable market quotations, and cash balances are generally straightforward to identify. But what is a rental house worth today? What is a private loan worth if the borrower has missed payments? What is a private company's stock worth without a recent independent valuation? The IRS identifies several categories that can require special Form 5498 asset information reporting — including nonpublicly traded corporate stock, certain debt obligations, LLC interests, real estate, partnership interests, and other assets without readily available fair market values.",
    "Original purchase price is not automatically current fair market value, and sponsor estimates may not be independently verified.",
  ],
  featured: "The More Private Assets an IRA Owns, the More Important Accurate Valuation Can Become.",
};

export const taxRulesDontDisappear = {
  eyebrow: "DIFFERENT INVESTMENTS, DIFFERENT TAX QUESTIONS",
  heading: ["Not Every Alternative Asset Produces", "Identical Federal Tax Treatment."],
  goldLine: 1,
  paragraphs: [
    "Ordinary qualifying rent from real property is generally excluded from unrelated business taxable income, subject to exceptions — the same general exclusion applies to ordinary qualifying investment interest from a private loan. Ordinary dividends and certain investment gains from public securities generally receive the usual IRA treatment, subject to applicable investment-level tax rules. Precious metals require verifying legal eligibility and custody arrangements separately. Private business interests may create unrelated business taxable income if structured as an operating partnership, while certain corporate securities have different treatment, and acquisition indebtedness can create unrelated debt-financed income under applicable rules.",
    "In this fictional example, the rental house is purchased without financing, the private company is a C corporation, and the note is an investment loan to an unrelated borrower — no UBIT liability is modeled. That does not establish that no tax could ever arise from a similar real arrangement; specific legal and tax details still require review.",
  ],
  featured: "Multiple Investment Categories Can Create Multiple Tax Questions, Even Inside a Single Retirement Account.",
};

export const prohibitedTransactionRule = {
  eyebrow: "MORE INVESTMENTS, SAME RULES",
  heading: ["More Investments Don't Mean More", "Personal Access to IRA Assets."],
  goldLine: 1,
  paragraphs: [
    "An IRA is not an ordinary personal investment account, and the same legal restrictions continue to apply no matter how many different investments it holds. Nora cannot assume she can stay in the rental house or let disqualified family members use it. The account cannot simply lend money to Nora personally. She cannot personally possess bullion that must be held under an approved custody arrangement. The account cannot automatically acquire stock in a company Nora owns or controls. And the cash reserve belongs to the IRA — it isn't a personal emergency fund.",
  ],
  featured: "A Self-Directed IRA Can Expand Investment Possibilities Without Turning Retirement Money Into Personal Spending Money.",
};

export const custodianLimitations = {
  eyebrow: "CAN ONE CUSTODIAN HOLD EVERYTHING?",
  heading: ["What If the Custodian Doesn't Support", "One of the Investments?"],
  goldLine: 1,
  paragraphs: [
    "Not every IRA custodian offers the same investment options. Some specialize in traditional brokerage securities, others support certain alternative assets, and some may support real estate but not particular private offerings or have separate requirements for metal storage. The legal ability of an IRA to hold a particular asset does not mean every custodian is required to administer it. Some investors may hold multiple IRA accounts with different custodians — those accounts must still be tracked and administered under the applicable rules, and combining assets into one account is not always advantageous.",
  ],
  featured: "The Investment Possibilities Depend Partly on What the Actual Custodian Is Willing and Able to Support.",
};

export const longTermPlanAndRMDs = {
  eyebrow: "PLANNING AHEAD",
  heading: ["What Happens as Retirement Gets Closer,", "and Can the Mix Be Adjusted Later?"],
  goldLine: 1,
  paragraphs: [
    "A retirement investment strategy may change over time — someone with decades before retirement may approach risk and liquidity differently from someone expecting to begin withdrawals soon. Traditional IRA owners are generally subject to required minimum distributions once they reach the applicable statutory age — current rules use age seventy-three for certain birth cohorts and age seventy-five for later cohorts, with different rules for beneficiaries. Original Roth IRA owners generally do not have lifetime required minimum distributions. Nora is forty-five, and this module is not a retirement withdrawal planning service — no specific RMD is calculated for her.",
    "If one investment increases substantially in value, it may eventually represent a larger share of the account than originally intended, and some investors consider adjusting their allocation — sometimes called rebalancing. But rebalancing a portfolio containing private assets can be difficult: a rental house cannot necessarily be sold in small pieces, a private company interest may have transfer restrictions, a loan may remain outstanding until maturity, and transaction costs may be significant.",
  ],
};

export const moreIsntBetter = {
  eyebrow: "MORE ISN'T AUTOMATICALLY BETTER",
  heading: ["What Do You Want the Investments to Do,", "and What Happens if They Don't?"],
  goldLine: 1,
  paragraphs: [
    "An investor might become excited by the idea of holding every possible alternative asset — a rental house, a loan, a business, metals, a real estate fund, mineral interests, and more. But every additional investment requires legal review, documentation, financial understanding, potential fees, and the ability to absorb losses. There is no requirement that an IRA hold alternative assets, no requirement to own several categories, and no universal ideal number of investments — the relevant question is whether the investments fit the individual's goals, risk tolerance, financial circumstances, and retirement needs.",
    "Every investment deserves two questions: what financial outcome is the investor hoping it might create — rental income, interest, long-term growth, price appreciation, participation in a business — and what happens if it doesn't produce that outcome? A tenant might leave, a borrower might default, a stock fund might decline, a metal might lose value, a private company might fail.",
  ],
  featured: "The Most Useful Investment Question Isn't Only What Could Go Right. It's What the Account Can Withstand if Something Goes Wrong.",
};

export const fiveMisconceptions = {
  eyebrow: "FIVE MISCONCEPTIONS",
  heading: ["Five Things a Multi-Investment", "IRA Doesn't Automatically Guarantee."],
  steps: [
    { number: "01", title: "More Assets Mean More Safety", description: "Different assets can share risks and decline together." },
    { number: "02", title: "Every Asset Produces Cash", description: "Some investments change in value without making distributions." },
    { number: "03", title: "The Account Balance Is All Available Money", description: "Private assets may be illiquid or difficult to value." },
    { number: "04", title: "One Custodian Can Always Hold Everything", description: "Investment options depend on custodial support and legal requirements." },
    { number: "05", title: "Self-Direction Removes Investment Restrictions", description: "Prohibited transactions, collectibles rules, tax obligations, and other limitations continue to apply." },
  ],
  note: "Greater Investment Choice Is a Possibility. Better Financial Results Are Not Guaranteed.",
};

export const closingReflection = {
  eyebrow: "THE OPPORTUNITY ATLAS, FINAL REVEAL",
  heading: ["One Retirement Account. An Extraordinary", "Range of Possibilities."],
  goldLine: 1,
  paragraphs: [
    "A rental house. A private note. Public investment funds. Qualifying precious metals. Shares in an unrelated private business. And cash kept available for legitimate account needs. Those are very different investments, but under appropriate circumstances, they may all be considered within a broader retirement investment strategy — the account might receive rent, receive interest, hold assets whose market values change, participate in a private business, and retain the cash needed to handle expenses.",
    "But there are no guarantees. A tenant can leave. A borrower can default. Markets can decline. Private companies can fail. Custodians may restrict assets. And multiple investments can create more complexity.",
  ],
  featured: "The Fascinating Part Is Discovering That a Self-Directed IRA May Offer Far More Than One Investment Category. The Valuable Understanding Is Knowing How Different Assets Behave and What Risks They Bring Into the Account.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA own more than one investment?", answer: "Potentially, yes. An appropriate Self-Directed IRA may hold multiple qualifying investments when supported by the custodian and permitted by applicable rules." },
  { question: "Can a Self-Directed IRA hold both stocks and real estate?", answer: "Potentially. The IRA may hold qualifying real estate and publicly traded securities if the relevant custodial and account arrangements support them." },
  { question: "Can my IRA own a rental house and make private loans?", answer: "Potentially, provided the actual investments and counterparties satisfy applicable legal requirements." },
  { question: "Can a Self-Directed IRA hold mutual funds or ETFs?", answer: "Potentially. Conventional investment funds may be available through supported brokerage or custodial arrangements." },
  { question: "Can my IRA own qualifying precious metals and other investments?", answer: "Potentially. The metals must satisfy relevant eligibility and custody rules." },
  { question: "Can I personally store IRA-owned gold at home?", answer: "Do not assume so. The IRS has specific custody and physical-possession requirements for qualifying bullion." },
  { question: "Can my IRA invest in private businesses?", answer: "Potentially, subject to the company's legal structure, offering eligibility, custody support, and prohibited-transaction rules." },
  { question: "Does the IRA need a separate account for every asset?", answer: "Not necessarily. But custodians differ in supported investments, and some investors may use multiple IRA arrangements." },
  { question: "Is having several investments automatically safer?", answer: "No. Diversification can help manage certain risks, but it does not eliminate investment loss." },
  { question: "Can different types of investments lose value at the same time?", answer: "Yes. Different assets can share economic and financial risks." },
  { question: "Does a rental property produce guaranteed monthly income?", answer: "No. Vacancies, maintenance, tenant defaults, and other conditions can affect income." },
  { question: "Does a private loan guarantee interest payments?", answer: "No. Borrowers can miss payments or default." },
  { question: "Does a stock fund increasing in value mean the IRA received cash?", answer: "Not necessarily. Unsold holdings may have unrealized gains or losses." },
  { question: "Do precious metals pay interest?", answer: "Physical bullion generally does not pay interest merely because it is owned." },
  { question: "Do private company shares guarantee dividends?", answer: "No. A private company may distribute nothing and may lose value." },
  { question: "What is the difference between investment value and available cash?", answer: "Investment value is what an asset may currently be worth. Available cash is money held in the account that can be used for lawful account needs." },
  { question: "Can an IRA have a high asset value but little cash?", answer: "Yes. Private properties, loans, and other illiquid holdings can create a cash-poor account." },
  { question: "Why would an IRA keep a cash reserve?", answer: "To help cover legitimate expenses and maintain liquidity, subject to the investor's financial circumstances." },
  { question: "Does every IRA need to hold ten percent in cash?", answer: "No. There is no universal cash allocation percentage." },
  { question: "Can the IRA owner personally pay for a rental property repair?", answer: "Do not assume so. Personal payment or services involving IRA-owned property can raise prohibited-transaction issues." },
  { question: "Can an IRA sell publicly traded funds more easily than private real estate?", answer: "Often, but actual liquidity depends on market conditions, trading restrictions, settlement, and custodial arrangements." },
  { question: "Are private business shares difficult to sell?", answer: "They can be highly illiquid and subject to legal and contractual restrictions." },
  { question: "Does a private loan's principal count as available cash?", answer: "No. Outstanding principal owed under a note is not cash actually received." },
  { question: "Does a custodian guarantee alternative investment values?", answer: "No. Custodians may rely on outside information and do not necessarily independently verify investment valuations." },
  { question: "What is asset allocation?", answer: "The way an investor divides money among different assets or asset categories." },
  { question: "What is diversification?", answer: "Spreading investments across holdings or categories to manage certain risks." },
  { question: "Can an IRA diversify across both conventional and alternative investments?", answer: "Potentially, when the assets and custodial arrangements are eligible and supported." },
  { question: "Can multiple investments create multiple UBIT issues?", answer: "Potentially. Different partnership, debt-financed, and operating arrangements may require separate tax analysis." },
  { question: "Does every investment inside an IRA avoid income taxes?", answer: "No. Certain investments can create IRA-level tax obligations under applicable rules." },
  { question: "Can an IRA investment in real estate create UDFI?", answer: "Potentially, when acquisition indebtedness and other applicable conditions are present." },
  { question: "Are traditional and Roth IRA rules always identical?", answer: "No. They share many investment and prohibited-transaction restrictions, but contributions, distributions, required minimum distributions, and tax treatment can differ." },
  { question: "Do traditional IRA owners eventually have required minimum distributions?", answer: "Generally, yes, once the applicable statutory age is reached, subject to the governing rules." },
  { question: "Do original Roth IRA owners have lifetime required minimum distributions?", answer: "Generally, no. Beneficiary rules can differ." },
  { question: "Why can illiquid investments complicate retirement distributions?", answer: "An account may need to make required payments or cover obligations while holding assets that cannot be easily converted to cash." },
  { question: "What if one investment becomes a much larger percentage of the account?", answer: "The investor may need to evaluate whether the allocation remains appropriate. Adjusting private investments can be difficult." },
  { question: "Can having more investments increase fees?", answer: "Yes. Different assets can involve transaction, legal, custody, storage, management, and other expenses." },
  { question: "Does a Self-Directed IRA automatically make the account owner an expert investor?", answer: "No. The account provides investment flexibility, not a guarantee of knowledge or financial success." },
  { question: "Is the fictional $400,000 allocation a recommended portfolio?", answer: "No. It is a hypothetical teaching example selected to illustrate different investment characteristics." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Explains IRA investment flexibility, restricted assets, custodian limitations, and physical possession rules for certain bullion.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Explains important investment and prohibited-transaction restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Provides information about disqualified persons, personal benefits, and prohibited retirement-account transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 590-A", description: "Explains IRA contributions, transfers, and certain investment restrictions.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Provides information on IRA distributions, prohibited transactions, and other applicable rules.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS: Investments in Collectibles", description: "Explains collectibles restrictions and exceptions for certain precious metals and coins.", href: "https://www.irs.gov/retirement-plans/investments-in-collectibles-in-individually-directed-qualified-plan-accounts" },
  { title: "IRS: Form 5498 Asset Information Reporting Codes", description: "Identifies reporting categories for certain real estate, private notes, closely held securities, LLC interests, and assets without readily available fair market values.", href: "https://www.irs.gov/retirement-plans/form-5498-asset-information-reporting-codes-and-common-errors" },
  { title: "IRS Publication 598", description: "Provides information concerning unrelated business taxable income, ordinary investment income exclusions, and debt-financed assets.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Unrelated Business Income From Debt-Financed Property", description: "Explains how acquisition indebtedness can affect federal tax treatment.", href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514" },
  { title: "IRS: Form 990-T Instructions", description: "Provides information on reporting certain unrelated business income.", href: "https://www.irs.gov/instructions/i990t" },
  { title: "IRS: Required Minimum Distribution FAQs", description: "Provides information on traditional IRA required distributions, Roth IRA distinctions, and distribution calculations.", href: "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" },
  { title: "SEC Investor.gov: Asset Allocation and Diversification", description: "Explains diversification, asset allocation, investment time horizons, risk tolerance, and rebalancing.", href: "https://www.investor.gov/introduction-investing/getting-started/asset-allocation" },
  { title: "SEC Investor.gov: Beginners' Guide to Asset Allocation, Diversification, and Rebalancing", description: "Provides additional educational information about asset categories and portfolio diversification.", href: "https://www.investor.gov/additional-resources/general-resources/publications-research/info-sheets/beginners-guide-asset" },
  { title: "SEC Investor.gov: Self-Directed IRAs and the Risk of Fraud", description: "Explains alternative investment fraud, illiquidity, valuation uncertainty, and custodial limitations.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["Why Limit Your Imagination to One", "Investment When Your IRA Has a World of Options?"],
  description:
    "Discover what's possible. Understand what matters. Explore beyond a single investment with a clearer understanding of income, liquidity, diversification, and legal restrictions.",
  signature: "Educational Illustration — Not Investment, Legal, Or Tax Advice",
};
