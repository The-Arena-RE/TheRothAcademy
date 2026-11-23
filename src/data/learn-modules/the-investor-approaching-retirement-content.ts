export const hero = {
  eyebrow: "The Investor Approaching Retirement",
  title: ["Your IRA May Be Worth $600,000.", "But Will It Have Cash When You Need It?"],
  goldLine: 1,
  description:
    "You've spent years saving for retirement. But have you considered what your IRA could actually own? An appropriately structured Self-Directed IRA may invest in certain qualifying rental properties, private loans, and private investment interests. Some of these investments may produce income. But an expected payment is not the same as cash in the account, and a valuable investment isn't necessarily one you can sell immediately.",
  whoItsFor:
    "For investors approximately 55 to 75, people planning to retire within the next ten years, and anyone exploring income-producing alternative investments inside a Self-Directed IRA.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const bigShift = {
  eyebrow: "The Big Shift",
  heading: ["When You're 30, Time Matters.", "When You're Retiring, Timing Matters Too."],
  leftLabel: "The Accumulation Years",
  rightLabel: "The Retirement Years",
  rows: [
    { left: "Main question: what could my investments become over time?", right: "Main question: when will cash actually be available?" },
    { left: "A long, conceptual investment horizon of twenty or thirty years", right: "A twelve-month calendar of scheduled needs and irregular receipts" },
    { left: "Growth is the central question", right: "Timing, liquidity, and risk become equally important" },
  ],
  footnote: "Investment value tells you what assets may be worth. Available cash tells you what the account can use or distribute without first selling something.",
};

export const threeWaysIncome = {
  eyebrow: "Three Ways an IRA Investment Might Produce Cash",
  heading: ["Not Every Income-Producing Investment", "Pays the Same Way."],
  steps: [
    { number: "01", title: "IRA-Owned Rental Real Estate", description: "A tenant may pay rent, and if the property generates net cash after legitimate expenses, that money remains within the IRA. But tenants can leave, repairs can be expensive, and a rental house does not automatically produce positive cash flow." },
    { number: "02", title: "Private Lending", description: "An appropriate IRA may make certain private loans to eligible unrelated borrowers, with terms calling for monthly, quarterly, or at-maturity payments. But the borrower might pay late, stop paying entirely, and even a secured loan may result in partial or total loss." },
    { number: "03", title: "Private Investment Funds", description: "A fund may distribute cash according to its governing documents and performance. But distributions can change, stop, or come from sources other than current investment profits, and the fund may also restrict withdrawals." },
  ],
  note: "An investment's stated payment schedule is a useful piece of information. Its actual cash flow can be very different.",
};

export const deniseStory = {
  eyebrow: "Meet Denise",
  heading: ["She's Almost Retired.", "Her Investment Questions Are Changing."],
  stories: [
    {
      label: "Illustrative Investor Approaching Retirement",
      headline: "Denise is considering retirement in approximately one year. She is interested in real estate and private lending, but recognizes that retirement introduces a new challenge.",
      scenario:
        "Denise is 64 in 2026, an office operations manager with primarily conventional retirement investments and no business ownership. She has $600,000 in a traditional IRA. For this fictional example, assume Denise has already arranged an eligible trustee-to-trustee transfer into a traditional Self-Directed IRA with a custodian supporting the selected assets. The account remains traditional, with no Roth conversion assumed, and no investment is being offered for purchase.",
      realization: "\"What happens if rental income stops? What if a borrower misses a payment? What if a private fund delays its distribution?\"",
      risk: "Denise wants to explore the possibilities without assuming every investment payment will arrive on schedule. Denise is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const the600kIRA = {
  eyebrow: "The Fictional $600,000 IRA",
  heading: ["Imagine a Retirement Account", "With Four Different Types of Assets."],
  intro:
    "The property, loan, and fund amounts below are hypothetical initial investment or acquisition amounts, not independently verified current fair market values. The account's reported value can change with actual market conditions, repayment performance, valuations, expenses, and other factors.",
  figures: [
    { label: "IRA-Owned Rental Property (Acquisition Cost)", value: "$220,000" },
    { label: "Assumed Monthly Net Operating Cash", value: "$900" },
    { label: "Private Loan Principal (8% Annual, Quarterly)", value: "$100,000" },
    { label: "Each Scheduled Quarterly Interest Payment", value: "$2,000" },
    { label: "Private Investment Fund", value: "$130,000" },
    { label: "Available IRA Cash", value: "$150,000" },
  ],
  disclaimer: "Total illustrative starting IRA position: $220,000 + $100,000 + $130,000 + $150,000 = $600,000. An IRA can hold several kinds of assets, but those assets don't necessarily have the same liquidity or payment schedule.",
};

export const withdrawalPlan = {
  eyebrow: "The Retirement Withdrawal Plan",
  heading: ["Denise Wants to Withdraw $3,000 a Month.", "What Happens Next?"],
  intro:
    "This is an illustrative assumption, not a recommended withdrawal strategy. The calculation does not include Denise's other potential resources, such as Social Security, a pension, employment income, taxable savings, or other investments.",
  figures: [
    { label: "Planned Monthly Gross IRA Distribution", value: "$3,000" },
    { label: "Planned Annual Gross IRA Distributions", value: "$36,000" },
    { label: "Percentage of Starting $600,000 IRA", value: "6%" },
  ],
  disclaimer: "Do not characterize 6% as safe, sustainable, or appropriate for retirement. A $3,000 gross distribution from a traditional IRA is not necessarily $3,000 of spendable personal income — distributions of pretax amounts are generally taxable, and applicable withholding and taxes affect the amount available for personal spending.",
};

export const retirementPaycheckTest = {
  eyebrow: "The Retirement Paycheck Test",
  heading: ["The Money Has to Arrive", "Before It Can Be Distributed."],
  intro:
    "All three scenarios use the same starting IRA assets and the same $3,000 monthly gross distribution plan. The differences arise from actual cash receipts and expenses — select a scenario to see how the same planned withdrawals affect available cash over twelve months.",
  portfolioSummary: [
    { label: "Beginning IRA Cash", value: "$150,000" },
    { label: "Rental Property", value: "$220,000" },
    { label: "Private Loan", value: "$100,000" },
    { label: "Private Fund", value: "$130,000" },
  ],
  monthlyDistribution: "$3,000",
  scenarios: [
    {
      key: "arrive",
      label: "Payments Arrive",
      status: "Every scheduled payment arrives on time",
      months: [
        { month: "January", investmentCash: 900, distribution: 3000, endingCash: 147900 },
        { month: "February", investmentCash: 900, distribution: 3000, endingCash: 145800 },
        { month: "March", investmentCash: 2900, distribution: 3000, endingCash: 145700 },
        { month: "April", investmentCash: 900, distribution: 3000, endingCash: 143600 },
        { month: "May", investmentCash: 900, distribution: 3000, endingCash: 141500 },
        { month: "June", investmentCash: 4400, distribution: 3000, endingCash: 142900 },
        { month: "July", investmentCash: 900, distribution: 3000, endingCash: 140800 },
        { month: "August", investmentCash: 900, distribution: 3000, endingCash: 138700 },
        { month: "September", investmentCash: 2900, distribution: 3000, endingCash: 138600 },
        { month: "October", investmentCash: 900, distribution: 3000, endingCash: 136500 },
        { month: "November", investmentCash: 900, distribution: 3000, endingCash: 134400 },
        { month: "December", investmentCash: 4400, distribution: 3000, endingCash: 135800 },
      ],
      totals: { netInvestmentCash: 21800, grossDistributions: 36000, endingCash: 135800 },
      explanation: "All scheduled investment payments arrived in this scenario. Yet the IRA still distributed more money than the investments generated in cash during the year — the difference came from the beginning cash balance. That is not automatically a problem, but the investor must understand the distinction: income alone did not cover the planned withdrawals.",
    },
    {
      key: "vacancy",
      label: "Rental Vacancy & Repairs",
      status: "The tenant leaves and a major repair follows",
      months: [
        { month: "January", investmentCash: 900, distribution: 3000, endingCash: 147900 },
        { month: "February", investmentCash: 900, distribution: 3000, endingCash: 145800 },
        { month: "March", investmentCash: 2900, distribution: 3000, endingCash: 145700 },
        { month: "April", investmentCash: 900, distribution: 3000, endingCash: 143600 },
        { month: "May", investmentCash: 900, distribution: 3000, endingCash: 141500 },
        { month: "June", investmentCash: 4400, distribution: 3000, endingCash: 142900 },
        { month: "July", investmentCash: -1000, distribution: 3000, endingCash: 138900 },
        { month: "August", investmentCash: -13000, distribution: 3000, endingCash: 122900 },
        { month: "September", investmentCash: 1000, distribution: 3000, endingCash: 120900 },
        { month: "October", investmentCash: 900, distribution: 3000, endingCash: 118800 },
        { month: "November", investmentCash: 900, distribution: 3000, endingCash: 116700 },
        { month: "December", investmentCash: 4400, distribution: 3000, endingCash: 118100 },
      ],
      totals: { netInvestmentCash: 4100, grossDistributions: 36000, endingCash: 118100 },
      explanation: "The house remains vacant for July through September with no rent collected, and an unexpected $12,000 repair arrives in August. The property might still have a substantial market value, but it did not produce positive operating cash during this year — the IRA had to pay its expenses while the planned personal distributions continued.",
    },
    {
      key: "disrupted",
      label: "Multiple Income Disruptions",
      status: "The loan and the fund stop paying too",
      months: [
        { month: "January", investmentCash: 900, distribution: 3000, endingCash: 147900 },
        { month: "February", investmentCash: 900, distribution: 3000, endingCash: 145800 },
        { month: "March", investmentCash: 2900, distribution: 3000, endingCash: 145700 },
        { month: "April", investmentCash: 900, distribution: 3000, endingCash: 143600 },
        { month: "May", investmentCash: 900, distribution: 3000, endingCash: 141500 },
        { month: "June", investmentCash: 2900, distribution: 3000, endingCash: 141400 },
        { month: "July", investmentCash: -1000, distribution: 3000, endingCash: 137400 },
        { month: "August", investmentCash: -13000, distribution: 3000, endingCash: 121400 },
        { month: "September", investmentCash: -1000, distribution: 3000, endingCash: 117400 },
        { month: "October", investmentCash: 900, distribution: 3000, endingCash: 115300 },
        { month: "November", investmentCash: 900, distribution: 3000, endingCash: 113200 },
        { month: "December", investmentCash: 900, distribution: 3000, endingCash: 111100 },
      ],
      totals: { netInvestmentCash: -2900, grossDistributions: 36000, endingCash: 111100 },
      explanation: "The rental problems continue, the borrower misses the September and December interest payments, and the private fund suspends both planned distributions. The IRA still holds the rental property, the fund interest, and legal rights under the private loan — but those assets did not provide the cash originally assumed, and some may also have declined substantially in value.",
    },
  ],
  disclaimer: "This is a hypothetical cash-flow illustration. It does not predict investment performance, determine a sustainable retirement withdrawal amount, or calculate taxes. It excludes loan principal repayment, appreciation, additional account fees, and personal income taxes on distributions.",
};

export const threeFinancialClocks = {
  eyebrow: "Three Different Kinds of Money",
  heading: ["A Payment Promise, IRA Cash, and Personal Spending Money", "Are Three Different Things."],
  steps: [
    { number: "01", title: "Money Expected From an Investment", description: "A private loan may schedule an interest payment, a rental property may be expected to collect rent, or a private fund may anticipate a distribution. These are not necessarily cash receipts." },
    { number: "02", title: "Money Actually Received by the IRA", description: "If the payment arrives, the IRA receives the funds. The cash belongs to the retirement account — the investor has not received the money personally." },
    { number: "03", title: "Money Distributed to the Individual", description: "When the account holder takes a permitted IRA distribution, money leaves the retirement account. Applicable taxes and distribution rules determine the personal financial consequences." },
  ],
  note: "Money promised isn't money received. Money received by an IRA isn't automatically money you can spend tax-free.",
};

export const threeIncomeRisks = {
  eyebrow: "Why the Payment Might Not Arrive",
  heading: ["The Rate, the Value, and the Distribution", "Can All Be Misleading."],
  steps: [
    { number: "01", title: "The Rate Isn't the Risk", description: "An 11% private loan may look more attractive than a 6% loan, but the interest rate is only one part of the investment. Who owes the money, what collateral exists, and what happens after default all matter more than the stated rate." },
    { number: "02", title: "Value Isn't Income", description: "An IRA-owned property with an estimated value of $220,000 may be vacant, still requiring insurance, property taxes, and repairs. The property may have value without currently producing positive cash flow." },
    { number: "03", title: "A Fund Can Pause Payouts", description: "A manager may suspend or reduce private fund distributions depending on the fund's agreements and circumstances. A fund can continue owning investments while its investors receive little or no current cash." },
  ],
  note: "The rate tells you what the agreement calls for. The borrower's performance determines what is actually collected — and an asset can be valuable without being liquid or income-producing.",
};

export const liquiditySpectrum = {
  eyebrow: "The Liquidity Question",
  heading: ["How Quickly Could Your IRA", "Turn an Investment Into Cash?"],
  intro: "An investor's financial wealth and available cash are not the same thing. Different investments within the same category can have very different liquidity characteristics.",
  steps: [
    { number: "01", title: "Cash", description: "Generally immediately available within the IRA, subject to account procedures." },
    { number: "02", title: "Publicly Traded Securities", description: "Often more readily marketable, but prices can change and trading restrictions may apply." },
    { number: "03", title: "Private Loans", description: "Cash depends on contractual payments, maturity, refinancing, sale possibilities, or recovery." },
    { number: "04", title: "Private Fund Interests", description: "Transfers and redemptions may be restricted or unavailable." },
    { number: "05", title: "Direct Real Estate", description: "A sale can take time and involve substantial costs." },
  ],
  note: "When retirement is approaching, ask not only what an asset may be worth, but how and when that value can actually become available cash.",
};

export const rmdReality = {
  eyebrow: "The Required Minimum Distribution Reality",
  heading: ["Eventually, Some IRA Owners", "Must Start Taking Money Out."],
  goldLine: 1,
  paragraphs: [
    "Traditional IRAs are generally subject to required minimum distributions, often called RMDs — a minimum amount the owner must distribute for a particular year under federal tax rules. The required starting age depends on the person's birth year: under current federal law, the relevant ages include 73 and 75 for different birth cohorts, with 75 generally applying to people born in 1960 or later. The calculation generally uses the IRA's prior December 31 account balance divided by an applicable IRS life-expectancy factor.",
    "An IRA may have significant value in real estate, private loans, or funds, but those assets may not produce enough cash to satisfy an RMD when needed. In-kind distributions of eligible property may be possible in some arrangements, but they involve valuation, custodial procedures, legal transfer issues, and potentially significant taxes — they are not a simple way to avoid distribution rules. Original owners of Roth IRAs generally are not required to take lifetime RMDs from those accounts, though beneficiaries may face separate distribution requirements after the owner's death.",
  ],
  note: "RMD rules depend on account type, birth year, beneficiary circumstances, and current law. Confirm the applicable requirements before taking action.",
};

export const traditionalVsRothRetirement = {
  eyebrow: "Traditional Versus Roth in Retirement",
  heading: ["The Same Investment Can Sit Inside Accounts", "With Different Tax Rules."],
  leftLabel: "Traditional Self-Directed IRA",
  rightLabel: "Self-Directed Roth IRA",
  rows: [
    { left: "Distributions of pretax amounts are generally taxable", right: "Qualified distributions can be free from federal income tax when requirements are met" },
    { left: "Applicable RMD rules ordinarily apply", right: "Original owners generally do not have lifetime RMDs" },
    { left: "May hold certain qualifying alternative assets if the custodian supports them", right: "May also hold qualifying alternative investments through an appropriate custodian" },
  ],
  footnote: "A Self-Directed IRA is not a new tax category — self-direction describes the investment choices supported by the account, while traditional and Roth tax rules remain different. Moving pretax retirement funds into a Roth IRA can create taxable conversion income.",
};

export const costsAndTaxes = {
  eyebrow: "The Cost of Getting Income, and the Tax That Can Surprise Retirement Investors",
  heading: ["Income Is Only Valuable", "After You Understand What It Costs to Produce."],
  goldLine: 1,
  paragraphs: [
    "An investment may advertise an attractive payment rate, but the stated rate may not reflect all associated expenses. A rental property generating $18,000 in annual rent is not automatically producing $18,000 of available cash — IRA custodial fees, property taxes, insurance, property management, repairs, loan servicing, legal documentation, and private fund management fees can all reduce what the account actually keeps.",
    "Many investors associate IRAs with favorable retirement tax treatment, but certain investments can create taxes inside the retirement account. For example, an IRA holding interests in some businesses taxed as partnerships may receive allocations of unrelated business taxable income, and debt-financed investment property may generate unrelated debt-financed income under applicable rules — creating reporting and tax obligations even before the individual takes a personal distribution.",
  ],
  note: "Evaluate what the investment might actually deliver after costs, not just the amount used in its marketing. Do not assume all rental income, loan interest, or fund distributions are automatically tax-free, even inside a Roth IRA.",
};

export const fiveQuestionsBeforeRelying = {
  eyebrow: "The Danger of Depending on One Income Source",
  heading: ["Before You Count on the Payment,", "Ask These Five Questions."],
  intro: "Imagine a retirement account that depends primarily on one private loan, one rental property, or one private fund. The problem is not only that the investment's value might decline — it is also that anticipated cash may stop arriving, forcing the investor to reconsider distributions or sell investments at an unfavorable time.",
  steps: [
    { number: "01", title: "Where Does the Payment Come From?", description: "Is the money generated by tenants, operating businesses, borrowers, or another source? Can that source realistically continue?" },
    { number: "02", title: "What Happens If the Payment Stops?", description: "Is there a legal right to payment? What remedies exist, and how much could recovery cost?" },
    { number: "03", title: "How Much Available Cash Does the IRA Have?", description: "Would the IRA be able to pay expenses and make intended distributions during a temporary disruption?" },
    { number: "04", title: "Could the Investment Be Sold?", description: "Is there a market? Are transfers restricted? How long might a sale take?" },
    { number: "05", title: "Does This Investment Fit the Retirement Plan?", description: "Consider other income sources, expected spending, taxes, retirement age, investment concentration, liquidity, and risk tolerance." },
  ],
  note: "An income-producing investment deserves more than a promising payment schedule. It deserves a serious examination of what happens when the schedule changes.",
};

export const consistentIncomeMyth = {
  eyebrow: "The Investment That Looks Safe",
  heading: ["\"Consistent Income\" Is Not", "the Same as Guaranteed Income."],
  goldLine: 1,
  paragraphs: [
    "Investors approaching retirement may be particularly attracted to opportunities advertised as stable or consistent. Some promoters emphasize predictable distributions, high interest rates, or attractive projected rental cash flow — but a presentation can look sophisticated while leaving out material risks. Private investments may involve limited financial disclosure, uncertain valuations, difficulty selling, high expenses, unregistered or fraudulent offerings, loss of principal, and dependence on a single manager or borrower.",
    "A legitimate Self-Directed IRA custodian does not necessarily investigate whether an investment is financially sound or free from fraud. A prudent investor should ask what supports the payment, what happens if cash is insufficient, whether distributions can be suspended, and whether payments come from operating income, financing proceeds, or a return of investor capital.",
  ],
  note: "A professional-looking investment presentation is not proof that the underlying investment is safe.",
};

export const decisionFramework = {
  eyebrow: "The Retirement Investor's Decision Framework",
  heading: ["A Better Way to Evaluate", "Income-Producing Investments."],
  steps: [
    { number: "01", title: "Understand the Asset", description: "What does the IRA own?" },
    { number: "02", title: "Understand the Payment", description: "Who pays, why, and when?" },
    { number: "03", title: "Understand the Downside", description: "What happens if the investment performs poorly?" },
    { number: "04", title: "Understand the Costs", description: "What expenses and taxes may reduce the result?" },
    { number: "05", title: "Understand Liquidity", description: "Can money become available when needed?" },
    { number: "06", title: "Understand Ownership Restrictions", description: "Are the investment and ongoing transactions allowed under IRA rules?" },
    { number: "07", title: "Understand the Bigger Picture", description: "Does the investment fit with retirement needs and other assets?" },
  ],
  note: "A Self-Directed IRA may make broader investment choices available. But the existence of an opportunity does not mean it belongs in every retirement account.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You've Spent Decades Building Retirement Savings.", "Now Discover What Those Savings Might Be Able to Own."],
  goldLine: 1,
  paragraphs: [
    "A Self-Directed IRA may open access to qualifying income-producing investments beyond conventional brokerage choices — investment real estate, private lending, and certain private investment funds. Those opportunities can be fascinating. But retirement investing requires asking more than how much an asset might earn. You need to understand when cash may arrive, what happens if payments stop, how expenses and taxes affect results, and how easily the account can access money when it is needed.",
    "Retirement expenses don't always follow the plan, and receiving income doesn't automatically mean your retirement savings will last — a sustainable retirement plan considers changes in investment value, rising expenses, inflation, investment losses, and a longer-than-expected retirement. You don't have to abandon conventional investments to explore other possibilities, and you don't have to assume that every investment marketed as income-producing is appropriate for retirement.",
  ],
  featured: "The goal is to understand your choices before depending on them.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA produce income?", answer: "Potentially. A Self-Directed IRA may hold qualifying investments that produce rent, interest, or other cash distributions. None of those payments is automatically guaranteed." },
  { question: "What types of income-producing investments can a Self-Directed IRA hold?", answer: "Depending on the custodian and applicable restrictions, possibilities may include qualifying investment real estate, private loans, and certain private investment interests." },
  { question: "Can my IRA receive rental income?", answer: "Yes, an appropriately structured IRA may receive rent from qualifying IRA-owned real estate. The income belongs to the IRA, and legitimate property expenses must be handled through the appropriate account arrangement." },
  { question: "Can my Self-Directed IRA make private loans?", answer: "Certain private loans may be permitted, subject to borrower relationships, investment restrictions, documentation, and custodial requirements. Default and principal loss remain possible." },
  { question: "Are private-loan interest payments guaranteed?", answer: "No. Contractual interest terms do not eliminate the risk that a borrower will pay late, default, or fail to repay principal." },
  { question: "Can private investment funds stop distributions?", answer: "Yes. Depending on the investment's agreements and circumstances, distributions may be reduced, delayed, suspended, or never made." },
  { question: "Can I withdraw rental income from my IRA whenever I want?", answer: "IRA income belongs to the account. Personal distributions are subject to the applicable retirement-account rules and potential taxes." },
  { question: "Is $3,000 withdrawn from a traditional IRA the same as $3,000 of spendable income?", answer: "Not necessarily. Distributions of pretax traditional IRA amounts are generally taxable, so after-tax spending money may be less than the gross distribution." },
  { question: "What is the difference between an IRA's value and its available cash?", answer: "The account's value reflects its assets under applicable valuation methods. Available cash is money actually held in liquid form within the account. A valuable property or private investment may not be readily convertible into cash." },
  { question: "What happens if an IRA-owned rental property becomes vacant?", answer: "The IRA may stop receiving rent while continuing to face property expenses. Vacancies can create negative property cash flow." },
  { question: "What happens when a private loan inside an IRA defaults?", answer: "Payments may stop, and the IRA can lose interest and principal. Recovery may depend on loan documents, collateral, borrower finances, and enforcement costs." },
  { question: "Can a Self-Directed IRA investment lose all its value?", answer: "Yes. Alternative investments can suffer partial or total losses. IRA status does not protect against ordinary investment risk or fraud." },
  { question: "Does a traditional Self-Directed IRA have required minimum distributions?", answer: "Generally, yes. Traditional IRA owners are subject to applicable RMD rules beginning at the legally required age, with the calculation depending on the relevant account balance and life-expectancy factor." },
  { question: "At what age do required minimum distributions begin?", answer: "Under current law, the relevant age depends on the owner's birth year. Age 73 applies to certain cohorts, and age 75 generally applies to people born in 1960 or later." },
  { question: "Does a Roth IRA require lifetime minimum distributions?", answer: "Original Roth IRA owners generally do not have lifetime RMDs. Beneficiaries may have separate requirements after the owner's death." },
  { question: "Can an IRA satisfy an RMD by distributing property rather than cash?", answer: "Certain in-kind distributions may be possible, subject to custodian procedures, proper valuation, legal requirements, and applicable taxes. They should not be viewed as a simple workaround for inadequate liquidity." },
  { question: "Can an IRA with private investments be difficult to value?", answer: "Yes. Real estate, private loans, and private fund interests may lack readily available market prices. Independent valuation may be appropriate." },
  { question: "Is income from a Self-Directed Roth IRA always tax-free?", answer: "No. Qualified Roth IRA distributions can be free from federal income tax, but certain investments may generate taxes within the IRA." },
  { question: "Can an IRA own debt-financed income property?", answer: "Certain arrangements may permit financing, but prohibited-transaction rules, custodial requirements, and unrelated debt-financed income tax consequences may apply." },
  { question: "Does a Self-Directed IRA custodian evaluate investment safety?", answer: "Do not assume so. A legitimate Self-Directed IRA custodian may administer permitted assets without reviewing the financial quality, valuation, or legitimacy of the underlying investment." },
  { question: "Is a Self-Directed IRA better for someone near retirement?", answer: "Not automatically. Broader investment access can be useful for some investors, but alternative investments often involve higher expenses, illiquidity, complex tax rules, and greater risk." },
  { question: "Does an income-producing IRA guarantee that retirement savings will last?", answer: "No. Receiving periodic income does not guarantee investment preservation, long-term sustainability, or the ability to meet future expenses." },
];

export const references = [
  { title: "IRS: Retirement Plan and IRA Required Minimum Distributions FAQs", description: "Supports the general RMD requirements, account distinctions, and timing rules.", href: "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" },
  { title: "IRS Publication 590-B", description: "Supports IRA distributions, RMD calculations, and Roth IRA withdrawal rules.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS: RMD Comparison Chart", description: "Provides a comparison of distribution requirements across IRAs and workplace retirement plans.", href: "https://www.irs.gov/retirement-plans/rmd-comparison-chart-iras-vs-defined-contribution-plans" },
  { title: "IRS: IRA Investment Rules", description: "Supports the discussion of qualifying alternative IRA investment categories and custodian limitations.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Provides information about prohibited personal benefits and disqualified persons.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 598", description: "Provides information on unrelated business income and debt-financed investment issues.", href: "https://www.irs.gov/publications/p598" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of investment fraud, custodial limitations, illiquid assets, uncertain valuations, and fees.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "SEC Investor Bulletin: Private Placements Under Regulation D", description: "Supports warnings about private offerings, resale limitations, limited disclosures, and the possibility of total loss.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/private-placements-under-regulation-d-updated-investor-bulletin" },
  { title: "SEC Investor.gov: Private Equity Funds", description: "Provides information on fund liquidity restrictions, fees, and long holding periods.", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/private-investment-funds/private-equity" },
];

export const finalConversion = {
  heading: ["You Worked Decades to Build Your Retirement.", "Discover What Your IRA Could Own and What That Really Means."],
  description:
    "A Self-Directed IRA may provide access to income-producing real estate, private loans, and certain private investment opportunities. Discover the opportunities. Understand the cash flow. Evaluate the risks.",
  signature: "Denise and all investment examples in this module are entirely fictional educational illustrations.",
};
