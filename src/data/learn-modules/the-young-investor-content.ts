export const hero = {
  eyebrow: "Self-Directed IRA Learning Module",
  title: ["You're Young.", "You're Early.", "That's A Serious Advantage."],
  goldLine: 2,
  description:
    "Maybe you're 22 and just started your first real job. Maybe you're 27, earning more than you did a few years ago. Or maybe you're 32 and beginning to think seriously about retirement. A Roth IRA can be a way to save and invest for the future — and with the right self-directed arrangement, your account may be able to hold certain investments beyond the stocks and funds you've always heard about.",
  whoItsFor:
    "For adults roughly 18 to 35 — college students, recent graduates, and early-career professionals with modest retirement savings who wonder whether they have enough money to start.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const directAnswer = {
  eyebrow: "The Short Answer",
  heading: ["Your Age Might Be", "Your Biggest Investment Advantage."],
  goldLine: 1,
  paragraphs: [
    "A young adult with eligible compensation may be able to contribute to a Roth IRA, subject to income and other limits. A self-directed Roth IRA follows Roth IRA rules but may permit certain alternative investments that conventional brokerage providers do not offer. Small balances, investment risks, fees, and liquidity should all be considered.",
    "A 23-year-old with $1,000 may have something financially valuable that a 53-year-old investor cannot purchase: time. Starting young does not guarantee financial success, and alternative investments do not automatically outperform ordinary investments — but understanding the mathematics of starting early, and the broader investment menu a self-directed Roth IRA may eventually offer, can change how you think about the money you're saving today.",
  ],
  featured: "I understand why starting early matters. I can begin with realistic amounts, learn how retirement investing works, and explore broader opportunities when they genuinely fit.",
};

export const headStartComparison = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The Head Start"],
  intro:
    "Imagine two people who save exactly the same amount — $100 a month for ten years, and not another dollar after that. The only difference is when they start. Adjust the hypothetical growth rate below; both investors always share the same assumption.",
  monthlyContribution: 100,
  contributionYears: 10,
  scenarios: [
    { key: "early", label: "Starts At 22", startAge: 22, contributionEndAge: 32, finalAge: 62 },
    { key: "later", label: "Starts At 32", startAge: 32, contributionEndAge: 42, finalAge: 62 },
  ],
  rateOptions: [0, 4, 6],
  defaultRate: 6,
  disclaimer:
    "This illustration assumes no fees, taxes, inflation adjustment, withdrawals, or investment losses, and is not a projected retirement outcome or a forecast of what self-directed Roth IRA investments will earn. Growth may be negative, uneven, delayed, or interrupted by losses. Real investing involves fees, inflation, changing market conditions, and potentially taxes.",
  takeaway: "The same $12,000. The same hypothetical growth rate. A different amount of time. You cannot go back and start investing ten years earlier, but you can learn about your choices today.",
};

export const averyStory = {
  eyebrow: "Meet Avery",
  heading: ["24 Years Old.", "Just Beginning To Invest."],
  stories: [
    {
      label: "Illustrative Investor",
      headline: "Avery doesn't have it all figured out at 24 — and doesn't need to.",
      scenario:
        "Avery is 24, works as a marketing assistant earning $46,000 a year, and owns no business. Avery has $1,200 in retirement savings and is considering a $100 monthly contribution. Avery likes real estate and has always been curious about investing in small businesses, but has never purchased an investment property, made a private loan, or evaluated a private company.",
      realization: "\"Most private investments seem designed for people with far more money than I have.\"",
      risk: "Then Avery learns that a self-directed Roth IRA may eventually hold qualifying alternative assets — but that doesn't mean Avery should immediately invest the entire $1,200 in a private deal. Avery first needs to think about emergencies, existing employer retirement benefits, account expenses, and investment risks. Learning about an opportunity and being ready to invest in it are two different things. Avery is a fictional illustration, not personalized investment advice.",
    },
  ],
};

export const investmentMenuComparison = {
  eyebrow: "One Account, Two Investment Menus",
  heading: ["What Makes A Self-Directed", "Roth IRA Different?"],
  leftLabel: "Conventional Roth IRA",
  rightLabel: "Self-Directed Roth IRA",
  rows: [
    {
      left: "Common investment choices include stocks, exchange-traded funds, mutual funds, bonds, and other investments supported by the provider.",
      right: "Potential additional choices include investment real estate, certain private loans, eligible interests in private companies, certain private investment funds, and other assets supported by the custodian.",
    },
    {
      left: "Can be a practical, low-cost way for many young people to begin investing.",
      right: "May provide access to alternative assets that ordinary brokerage providers generally do not offer, though not every self-directed custodian supports every investment.",
    },
    {
      left: "Follows the same Roth IRA tax rules as any other Roth IRA.",
      right: "Follows the same Roth IRA tax rules too — the self-directed structure changes potential investment access, not the underlying tax treatment.",
    },
  ],
  footnote:
    "A self-directed Roth IRA does not automatically provide better tax treatment or better investment returns than a conventional Roth IRA. It may provide different investment choices, which can also involve higher fees, less liquidity, and greater complexity.",
};

export const opportunityLens = {
  eyebrow: "Look Beyond The Headline Rate",
  heading: ["The Interest Rate Isn't", "The Entire Investment."],
  intro:
    "Imagine a young investor discovers a proposed private loan: the borrower wants $3,000 for one year, with a proposed 9% annual simple interest rate and principal repaid at the end of the year.",
  figures: [
    { label: "Proposed Loan Principal", value: "$3,000" },
    { label: "Hypothetical Annual Interest Rate", value: "9%" },
    { label: "Gross Interest If Paid As Agreed", value: "$270" },
    { label: "Hypothetical Attributable Expenses", value: "$180" },
    { label: "Remainder Before Other Costs & Taxes", value: "$90" },
    { label: "Principal Potentially At Risk", value: "Up to $3,000" },
  ],
  disclaimer:
    "These are hypothetical expenses, not Roth Academy's or any custodian's actual fees. If the borrower does not repay, the IRA might lose some or all of its $3,000 principal, and any legal expenses or recovery costs could make the outcome worse. A deal can look exciting until you account for costs, risk, and the possibility of not getting your money back.",
};

export const feeReality = {
  eyebrow: "Small Accounts Deserve Big Attention To Fees",
  heading: ["The Exact Same Fee Affects", "A Smaller Account Much More."],
  intro:
    "Assume the same illustrative $250 annual account-related expense applies to two different hypothetical account balances — an invented educational assumption, not a published price or Roth Academy fee.",
  figures: [
    { label: "Account A Balance", value: "$2,500" },
    { label: "Account A Hypothetical Annual Expense", value: "$250" },
    { label: "Account A Expense As % Of Balance", value: "10%" },
    { label: "Account B Balance", value: "$25,000" },
    { label: "Account B Hypothetical Annual Expense", value: "$250" },
    { label: "Account B Expense As % Of Balance", value: "1%" },
  ],
  disclaimer:
    "That doesn't mean you should avoid exploring self-directed retirement investing. It means you should understand the costs and make sure the investment flexibility is worth them. A bigger investment menu only creates value when the choices and costs make sense together.",
};

export const rothAdvantage = {
  eyebrow: "Why Do Young Investors Get So Interested In Roth IRAs?",
  heading: ["Contribute. Invest.", "Qualified Withdrawal."],
  goldLine: 1,
  paragraphs: [
    "With a Roth IRA, eligible contributions are generally made with after-tax money — you do not receive a tax deduction for making a Roth IRA contribution. If the distribution rules are satisfied, qualified withdrawals can be free from federal income tax. That can be valuable if investments grow over time. However, a self-directed Roth IRA does not eliminate all potential taxes: certain alternative investments may generate unrelated business taxable income, and applicable tax rules can require the IRA to pay tax.",
    "The self-directed structure changes potential investment access. It does not create a different set of Roth IRA tax rules.",
  ],
  note: "The exciting part is not a promise of tax-free wealth. It's the possibility of combining a long investment horizon with Roth IRA rules that can make qualified withdrawals tax-free.",
};

export const twoRothClocks = {
  eyebrow: "Two Important Time Rules",
  heading: ["The Two Clocks Every Young", "Roth Investor Should Know"],
  steps: [
    { number: "01", title: "Age 59½", description: "Reaching age 59½ is one important requirement for the common form of qualified Roth IRA distribution." },
    { number: "02", title: "The Five-Tax-Year Requirement", description: "The general Roth IRA qualified-distribution rule also requires that the applicable five-tax-year period has been satisfied, generally beginning with the first tax year for which a contribution was made to a Roth IRA established for the owner." },
  ],
  note: "Regular Roth IRA contributions are generally treated as coming out first and can generally be withdrawn without federal income tax or early-distribution penalties. But conversions, rollovers, and investment earnings can have different rules, and if your IRA owns land, a private loan, or an illiquid investment, the cash might not be readily available even when a distribution could otherwise be permitted. Tax rules and access to cash are not the same thing.",
};

export const contributionLimits = {
  eyebrow: "2026 IRA Contribution Rules",
  heading: ["You Can Start Small.", "The IRS Still Sets Limits."],
  intro:
    "You do not need to contribute the annual maximum to begin. A young person might start with a manageable amount, then reassess as earnings, expenses, and life circumstances change.",
  figures: [
    { label: "2026 Combined IRA Limit (Under 50)", value: "$7,500" },
    { label: "Roth Phaseout Begins, Single Filers", value: "$153,000 MAGI" },
    { label: "Direct Roth Contributions Unavailable, Single", value: "$168,000+ MAGI" },
    { label: "Roth Phaseout Begins, Married Filing Jointly", value: "$242,000 MAGI" },
    { label: "Direct Roth Contributions Unavailable, MFJ", value: "$252,000+ MAGI" },
    { label: "Illustrative $100/Month For 12 Months", value: "$1,200 total" },
  ],
  disclaimer:
    "These are 2026 figures, not permanent amounts, and the $7,500 limit applies across traditional and Roth IRAs combined, not separately to each account. A person's allowable contribution also depends on applicable compensation, filing status, and other rules. The $1,200 figure is a simple savings illustration, not a projected investment return.",
};

export const readinessQuestions = {
  eyebrow: "A Better Question Than \"How Much Money Do I Need?\"",
  heading: ["The Four Readiness Questions"],
  steps: [
    { number: "01", title: "Could I Afford To Leave This Money Invested?", description: "Private investments can be difficult to sell. An opportunity that requires money for several years may be inappropriate if you expect to need that money for another purpose." },
    { number: "02", title: "Do I Understand How The Investment Makes Money?", description: "If a loan pays interest, where does that interest come from? If a property is expected to appreciate, what evidence supports the proposed price? What ownership rights are actually being purchased?" },
    { number: "03", title: "Am I Comfortable With The Possibility Of Losing It?", description: "Young investors may have more years before retirement, but that does not eliminate financial risk. Being young is not a reason to invest recklessly." },
    { number: "04", title: "Does This Improve My Overall Financial Plan?", description: "Consider emergency savings, high-interest debt, employer retirement benefits, diversification, costs, and personal financial obligations." },
  ],
  note: "The best first investment is not necessarily the most unusual one. Sometimes the most intelligent decision is to build savings, learn the market, and wait until you understand an opportunity. That is still progress.",
};

export const fiveMistakes = {
  eyebrow: "You Have Time To Learn. Make It Count.",
  heading: ["Five Mistakes A Young", "Investor Can Avoid"],
  steps: [
    { number: "01", title: "Thinking You Need To Be Rich To Start", description: "You do not need a large fortune merely to investigate retirement investing. But specific alternative assets may have substantial minimum investments and costs." },
    { number: "02", title: "Confusing An Exciting Idea With A Good Investment", description: "A fascinating real estate deal or startup does not automatically make financial sense. Understand valuations, expenses, liquidity, documentation, and the possibility of loss." },
    { number: "03", title: "Assuming The IRA Owns Whatever You Want It To Own", description: "An IRA cannot legally engage in every type of transaction. The IRS prohibits certain investments and dealings with the account owner and other disqualified persons." },
    { number: "04", title: "Putting All Retirement Savings Into One Speculative Deal", description: "Concentrating an account in a single illiquid investment can create significant risk. Diversification and liquidity deserve attention." },
    { number: "05", title: "Believing You Can Personally Use IRA-Owned Assets", description: "An IRA-owned rental house is not a personal vacation home. IRA investments and their income cannot be used to provide prohibited personal benefits." },
  ],
  note: "Use these as a confident, disciplined checklist — not a reason to be afraid to start.",
};

export const lifeMilestones = {
  eyebrow: "At 25, You Don't Need Every Answer",
  heading: ["The Investor You Could Become"],
  steps: [
    { number: "AGE 25", title: "Discover", description: "Learn what an IRA is, how retirement investing works, and which choices are worth exploring." },
    { number: "AGE 30", title: "Evaluate", description: "Understand the economics of possible investments, including fees, cash flow, and downside risk." },
    { number: "AGE 40", title: "Decide", description: "Continue using the investment approach that fits your goals, experience, finances, and risk tolerance." },
    { number: "AGE 50", title: "Reassess", description: "Review your portfolio, liquidity needs, financial circumstances, and retirement timeline." },
    { number: "RETIREMENT", title: "Understand Your Options", description: "Evaluate distributions, taxes, investment liquidity, and the future of your savings under applicable rules." },
  ],
  note: "Your financial life, income, and interests will change. But learning early can help you make better decisions as those changes happen. A self-directed Roth IRA may be one of the tools worth exploring along the way — it does not need to be the only tool.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["Your Future Doesn't Begin", "When You're Wealthy."],
  goldLine: 1,
  paragraphs: [
    "It begins when you start learning how money, investments, and time work together. Discover what's possible. Understand the responsibilities. And make informed decisions about the future you want to build.",
  ],
  featured: "You can't buy back your twenties. But you can decide what you learn and build today.",
};

export const faqItems = [
  { question: "Can a 20-year-old open a self-directed Roth IRA?", answer: "Yes, age 20 does not prevent someone from establishing a Roth IRA. Direct contributions depend on applicable compensation, income, and other eligibility rules. The investment options available depend on the custodian." },
  { question: "Can I open a self-directed Roth IRA with $500?", answer: "There is no single universal minimum balance for every self-directed Roth IRA arrangement. Providers, custodians, and individual investments may impose minimums and fees. A small account may not be economical for certain alternative investments." },
  { question: "Is a self-directed Roth IRA better than a regular Roth IRA?", answer: "Not automatically. Both follow applicable Roth IRA rules. A self-directed Roth IRA may offer broader investment choices but can involve more complexity, higher expenses, and greater investment risks." },
  { question: "Can my Roth IRA invest in real estate while I'm young?", answer: "Potentially. An appropriate self-directed custodian must support the investment, and the transaction must comply with IRA rules. The property belongs to the IRA and cannot be used for prohibited personal benefits." },
  { question: "Can I have a self-directed Roth IRA if I work a regular job?", answer: "Yes. Owning a business is not a general requirement to establish a self-directed Roth IRA. Contribution eligibility and investment restrictions still apply." },
  { question: "How much can I contribute to a Roth IRA in 2026?", answer: "For someone younger than 50, the general 2026 combined traditional and Roth IRA contribution limit is $7,500, subject to compensation, income, and other eligibility requirements." },
  { question: "Can I withdraw money from my Roth IRA before age 59½?", answer: "Regular Roth IRA contributions can generally be withdrawn without federal income tax or early-withdrawal penalties under the applicable ordering rules. Conversions, rollovers, and investment earnings may be treated differently. Illiquid IRA investments may not be readily convertible into cash." },
  { question: "Are Roth IRA profits always tax-free?", answer: "No. Roth IRAs have favorable tax rules, and qualified distributions can be tax-free. But some IRA investments can generate taxes within the account, and nonqualified distributions may have tax consequences." },
  { question: "Is 30 too late to start a Roth IRA?", answer: "No. Age 30 does not prevent a person from beginning to save for retirement through an eligible Roth IRA. The appropriate strategy depends on their circumstances, not on a universal starting age." },
  { question: "Can I invest in a startup using my Roth IRA?", answer: "A self-directed Roth IRA may be able to invest in certain eligible private company interests. Investor eligibility requirements, prohibited transactions, valuation, concentration, and other risks must be evaluated. Some investments may also create unrelated business income tax issues." },
  { question: "Should I invest my entire Roth IRA in one private investment?", answer: "Doing so can expose the account to significant concentration and liquidity risks. A single private investment can fail, lose value, or become difficult to sell. Diversification and financial circumstances deserve careful consideration." },
  { question: "Is starting a self-directed Roth IRA expensive?", answer: "Costs vary by custodian, account arrangement, investment, and transaction. For a small balance, evaluate all relevant fees as a percentage of the money invested. Do not assume broader investment access makes the account economically appropriate." },
];

export const references = [
  { title: "IRS: IRA Contribution Limits for 2026", description: "Supports the current-year contribution and Roth IRA income threshold figures.", href: "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" },
  { title: "IRS Publication 590-A", description: "Supports contribution eligibility, income restrictions, and applicable IRA investment rules.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Supports Roth IRA distribution treatment, ordering rules, qualified distributions, and five-year requirements.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions involving IRA owners, disqualified persons, personal benefit, and prohibited transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports the explanation of alternative-investment risks, illiquidity, valuation concerns, fraud, and fees.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "IRS Publication 598", description: "Provides background on unrelated business income taxation, which can apply to certain investments held by otherwise tax-exempt retirement arrangements.", href: "https://www.irs.gov/publications/p598" },
];

export const finalConversion = {
  heading: ["You Can't Buy Back Your Twenties.", "But You Can Decide What You Build Today."],
  description:
    "Your first investment doesn't have to be extraordinary. Your first retirement account doesn't have to hold a fortune. You have time to discover your options, develop your knowledge, and make decisions that fit your financial future. Explore what a self-directed IRA may make possible.",
  signature: "Avery and all investment examples in this module are entirely fictional educational illustrations.",
};
