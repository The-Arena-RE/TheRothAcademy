export const hero = {
  eyebrow: "Self-Directed IRA Learning Module",
  title: ["A Regular Job.", "A Retirement Account.", "A Bigger World Of Investing."],
  goldLine: 2,
  description:
    "You go to work. You earn a paycheck. You save for retirement. But what if your retirement account could potentially invest in more than the stocks, mutual funds, and traditional investments you've always been shown? Depending on the account and applicable rules, a self-directed IRA may allow you to explore opportunities in real estate, private lending, and certain private investments — and you don't need to become a business owner to discover the possibilities.",
  whoItsFor:
    "For everyday employees who already have, or are beginning to explore, a traditional IRA, Roth IRA, or workplace retirement plan, and assumed that alternative investing was only for business owners or the wealthy.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const directAnswer = {
  eyebrow: "The Short Answer",
  heading: ["You Don't Need A Business", "To Explore A Self-Directed IRA."],
  goldLine: 1,
  paragraphs: [
    "Yes, you can generally establish a self-directed IRA without owning a business. The account remains subject to IRA rules, and an appropriate custodian must support the investments you want to make. A self-directed IRA is an individual retirement account held by a custodian that permits certain investments beyond the choices offered by many conventional IRA providers.",
    "A regular employee can explore a self-directed IRA without operating a business. Depending on the investment, custodian, and applicable rules, an IRA may hold assets such as real estate, private loans, and certain private company interests. The IRA owns the investments, receives their proceeds, and remains subject to retirement-account restrictions.",
  ],
  featured: "I understand how an IRA could potentially own investments I never knew retirement accounts could hold, and I can evaluate whether this makes sense for me.",
};

export const misconceptions = {
  eyebrow: "Breaking The Biggest Misconception",
  heading: ["Who Said You Needed A Business", "To Invest Differently?"],
  intro:
    "Some retirement arrangements are designed specifically for people with self-employment income. A self-directed IRA is different — it's an individual retirement account, and you generally do not need to own a business to establish one.",
  steps: [
    { number: "01", title: "Do I Need To Own A Business?", description: "No. A self-directed IRA does not require you to operate a business." },
    { number: "02", title: "Do I Need To Be A Professional Real Estate Investor?", description: "No. You can learn about alternative investments without already owning rental properties or managing investment deals." },
    { number: "03", title: "Does Self-Directed Mean I Can Buy Anything?", description: "No. The IRS places restrictions on IRA investments and transactions, and custodians may limit which assets they support." },
  ],
  note: "Your employment status does not automatically limit you to a conventional investment menu. Your IRA provider, the investment itself, and the law determine what may be available.",
};

export const threeInvestmentDoors = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["Three Different Ways Your IRA", "Could Potentially Invest"],
  intro:
    "A self-directed IRA does not create a new source of money. It may expand the types of investments that your existing retirement savings can hold. Let's look at three completely different possibilities — each a fictional illustration, not an available investment offer.",
  scenarios: [
    {
      key: "own-something",
      label: "Own Something",
      status: "The IRA owns real estate directly",
      description:
        "Imagine an IRA purchases vacant land for $18,000. Over its ownership period, the IRA pays $2,000 in total illustrative holding and acquisition expenses. The property is eventually sold for $23,000, with $1,000 in selling expenses. The property belongs to the IRA, the IRA pays its investment expenses, and the proceeds from a sale return to the IRA — the account holder cannot use the land personally or treat its sale proceeds as personal spending money.",
      figures: [
        { label: "What The IRA Would Own", value: "Vacant land" },
        { label: "Purchase Amount", value: "$18,000" },
        { label: "Terms Or Expenses", value: "$2,000 holding & acquisition costs" },
        { label: "Return If Sold As Planned", value: "$22,000 net sale proceeds" },
        { label: "Illustrative Gain", value: "+$2,000" },
        { label: "Illustrative Downside", value: "-$5,000 if sold for $16,000" },
      ],
      statement: "An IRA may hold an investment property, but any gains or losses belong to the retirement account.",
    },
    {
      key: "lend-money",
      label: "Lend Money",
      status: "The IRA owns a loan, not the property",
      description:
        "Imagine an IRA lends $12,000 to an unrelated borrower under a properly documented, permitted transaction, with a fictional 8% annual simple interest rate over a 12-month term. If the borrower pays according to the agreement, the principal and interest belong to the IRA. But borrowers can default, and the account could lose some or all of its investment.",
      figures: [
        { label: "What The IRA Would Own", value: "A loan receivable" },
        { label: "Purchase Amount", value: "$12,000" },
        { label: "Terms Or Expenses", value: "8% annual interest, 12-month term" },
        { label: "Return If Paid As Planned", value: "$12,960 principal + interest" },
        { label: "Illustrative Gain", value: "+$960 gross interest" },
        { label: "Illustrative Downside", value: "-$5,000 if only $7,000 is recovered" },
      ],
      statement: "Your IRA may lend to eligible parties, but repayment is never guaranteed.",
    },
    {
      key: "invest-alongside-others",
      label: "Invest Alongside Others",
      status: "The IRA owns a fund interest, not the whole deal",
      description:
        "Imagine a large investment that would be too expensive for one person to purchase alone. A self-directed IRA may be able to purchase an eligible interest in a private investment fund or other entity — for example, indirect exposure to an apartment property, commercial building, or private company. The IRA owns the investment interest, not the entire underlying property or business.",
      figures: [
        { label: "What The IRA Would Own", value: "An investment interest in a fund" },
        { label: "Purchase Amount", value: "$25,000" },
        { label: "Terms Or Expenses", value: "5-year hypothetical holding period" },
        { label: "Return If Paid As Planned", value: "$28,000 total proceeds" },
        { label: "Illustrative Gain", value: "+$3,000" },
        { label: "Illustrative Downside", value: "Could lose some or all of the $25,000" },
      ],
      statement: "Your IRA may participate in larger investments through eligible interests, even when it cannot buy the entire asset.",
    },
  ],
  tableColumns: [
    { label: "Purchase Amount", index: 1 },
    { label: "Illustrative Gain", index: 4 },
    { label: "Illustrative Downside", index: 5 },
  ],
  comparisonNote:
    "These are fictional educational illustrations, not available investment offers, market returns, or guarantees. All numerical results are hypothetical and exclude other possible account fees or applicable taxes.",
  conclusion: "Different investments. Different risks. One important principle: every investment still needs careful evaluation.",
};

export const twoPocketsInteraction = {
  eyebrow: "The Most Important Visual In This Lesson",
  heading: ["Two Different Pockets"],
  intro:
    "Your IRA owns the investment — not you personally. Imagine the $960 in hypothetical interest from the private-loan example above arrives. Where does it actually go?",
  pathways: [
    {
      key: "back-into-ira",
      title: "Back Into My IRA",
      example: "$960 in hypothetical interest from the private-loan example",
      explanation: "Correct. The investment belongs to the IRA, so the proceeds belong to the IRA.",
      checkpoint: "Where Investment Income Actually Goes",
      note: "Permitted distributions are governed by the applicable IRA rules, and this illustration does not address every possible tax situation.",
    },
    {
      key: "personal-checking",
      title: "Into My Personal Checking Account",
      example: "$960 in hypothetical interest from the private-loan example",
      explanation: "Not directly. IRA investment income generally stays in the IRA. Taking money out personally involves IRA distribution rules and can create taxes or penalties.",
      checkpoint: "Not Automatically Yours To Spend",
      note: "Permitted distributions are governed by the applicable IRA rules, and this illustration does not address every possible tax situation.",
    },
  ],
  takeaway: "Your IRA isn't just an account you look at on a statement. It can be the legal investment holder in a qualifying transaction. You direct the investment decisions, but the money and assets belong to your IRA.",
};

export const jordanStory = {
  eyebrow: "Meet Jordan",
  heading: ["An Ordinary Employee.", "A Different Investment Question."],
  stories: [
    {
      label: "Illustrative Investor",
      headline: "Jordan assumed alternative investing required owning a business. Then Jordan asked a different question.",
      scenario:
        "Jordan is 38, works as a payroll coordinator for an employer, and has never owned a business. Jordan's existing traditional IRA contains $34,000, invested primarily in conventional mutual funds.",
      realization: "\"I understand stocks and mutual funds. But if I wanted my IRA to hold a different kind of investment, would I need to start a business first?\"",
      risk: "No. Jordan could investigate whether transferring eligible IRA assets to an appropriate self-directed IRA custodian would allow access to a suitable investment, while still needing to evaluate investment eligibility, custodian requirements, costs, risks, and prohibited-transaction rules. There is no requirement to start a company merely to establish the IRA. Jordan is a fictional illustration, not personalized investment advice.",
    },
  ],
};

export const traditionalVsRoth = {
  eyebrow: "Two Familiar IRA Types",
  heading: ["A Potentially Bigger Investment Menu."],
  leftLabel: "Traditional Self-Directed IRA",
  rightLabel: "Roth Self-Directed IRA",
  rows: [
    {
      left: "Eligible contributions may provide a current tax deduction, subject to applicable rules.",
      right: "Contributions are not tax deductible.",
    },
    {
      left: "Investments generally grow on a tax-deferred basis, and withdrawals of pretax amounts are generally taxable.",
      right: "If the requirements are satisfied, qualified distributions can be tax-free.",
    },
    {
      left: "The investment menu depends on the custodian and applicable rules, the same as any self-directed account.",
      right: "A self-directed Roth IRA may hold certain qualifying alternative assets through a custodian that supports them.",
    },
  ],
  footnote:
    "Both account types remain subject to investment restrictions, contribution and distribution rules, and potentially applicable unrelated business income taxes. Not every transaction within a Roth IRA is automatically tax-free, and not every investment is permissible.",
};

export const fiveThings = {
  eyebrow: "Five Things Smart Investors Understand",
  heading: ["The Opportunities Are Interesting.", "The Rules Matter Just As Much."],
  steps: [
    { number: "01", title: "Your IRA Is Not Your Personal Wallet", description: "Investment proceeds generally belong to the IRA. Taking money out personally is subject to IRA distribution rules and may create taxes or penalties." },
    { number: "02", title: "You Cannot Use IRA Investments For Personal Benefit", description: "An IRA generally cannot buy a vacation property for you or certain family members to use. Transactions with certain related people, including prohibited sales and loans, can produce serious consequences." },
    { number: "03", title: "The Investment Can Lose Money", description: "Private loans can default. Property values can decline. Private companies can fail. A greater range of choices does not mean better returns or lower risk." },
    { number: "04", title: "The Custodian Is Not Your Investment Detective", description: "A self-directed IRA custodian generally does not evaluate whether a private investment is financially sound or free from fraud. You must understand who is receiving the money, the terms, the risks, and the available information." },
    { number: "05", title: "Taxes And Fees Can Still Apply", description: "Custodian charges, transaction fees, investment expenses, and potential unrelated business income taxes can change an investment's economics. Some investments are difficult to sell and value." },
  ],
  note: "A self-directed IRA expands the questions you can ask. It does not remove the responsibility to ask them.",
};

export const whatThisMeansForYou = {
  eyebrow: "What Does This Mean For Someone Like You?",
  heading: ["Your Starting Point May Be", "Simpler Than You Think."],
  steps: [
    { number: "01", title: "\"I Already Have An IRA.\"", description: "You may be able to transfer eligible assets between IRA custodians, subject to applicable rules and the custodians' capabilities." },
    { number: "02", title: "\"I Have A Regular Job But Haven't Opened An IRA.\"", description: "Owning a business is not required. Contributions are subject to eligibility requirements, compensation rules, annual limits, and potentially income-related restrictions." },
    { number: "03", title: "\"I Have A 401(k) Through Work.\"", description: "A workplace plan is different from an IRA. Whether money can be moved depends on the plan's distribution provisions and applicable rollover rules." },
    { number: "04", title: "\"I Want To Invest But Don't Have A Large Account.\"", description: "Not every alternative investment requires the same amount of money, but many have substantial minimums, transaction costs, or other barriers. Your account size and risk tolerance still matter." },
  ],
  note: "The question is not whether you own a company. The better question is whether a qualifying alternative investment could make sense for your retirement goals, experience, and financial circumstances.",
};

export const evaluationFramework = {
  eyebrow: "Before Investing, Ask Five Questions",
  heading: ["A Simple Investment", "Evaluation Framework."],
  steps: [
    { number: "01", title: "What Exactly Would My IRA Own?", description: "A property, loan, investment interest, or something else?" },
    { number: "02", title: "Who Controls The Investment And Receives The Money?", description: "Understand the owner, the custodian's role, and where funds must flow." },
    { number: "03", title: "How Could This Make Money, And How Could It Lose Money?", description: "Require an understandable answer to both questions." },
    { number: "04", title: "Could I Get The Money Back When I Need It?", description: "Consider liquidity, lockup periods, valuations, and potential retirement distributions." },
    { number: "05", title: "What Rules And Expenses Apply?", description: "Review custodian restrictions, prohibited transactions, investment fees, and relevant tax considerations." },
  ],
  note: "If you cannot explain an investment in simple terms, you may need more information before committing retirement savings. The best opportunity is not necessarily the most exciting deal — it is one you understand well enough to evaluate.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You Don't Have To Change Careers", "To Explore A Different Investment Future."],
  goldLine: 1,
  paragraphs: [
    "You can keep your job. You can continue earning your paycheck. You can continue learning about traditional investments. And you may discover that your retirement savings have additional investment possibilities worth considering.",
    "A self-directed IRA is not a shortcut to becoming wealthy. It is an opportunity to explore a broader range of qualifying investments, with the responsibility to understand each one.",
  ],
  featured: "The most important investment decision begins with knowing your choices.",
};

export const faqItems = [
  { question: "Can I open a self-directed IRA without owning a business?", answer: "Yes. Owning a business is not a general requirement for establishing a self-directed IRA. A self-directed IRA is an IRA held by a custodian that permits a broader range of investments than many ordinary IRA providers." },
  { question: "Can a regular employee have a self-directed IRA?", answer: "Yes. Employees may establish IRAs, subject to the applicable rules. Their employment status does not require them to own a separate business to investigate self-directed IRA options." },
  { question: "Is a self-directed IRA a special type of IRA created by the IRS?", answer: "Not exactly. \"Self-directed\" generally describes the investment flexibility offered through the IRA's custodial arrangement. Traditional and Roth tax rules still apply, as relevant." },
  { question: "What can a self-directed IRA invest in?", answer: "Depending on the investment and custodian, possibilities may include certain real estate, private loans, private company interests, and other alternative assets. The law imposes restrictions, and custodians may decline to support particular investments." },
  { question: "Can my IRA buy a rental property?", answer: "Potentially, yes. A custodian must support the transaction, and the investment must follow applicable IRA rules. The property cannot be used to provide prohibited personal benefits, and investment income and expenses must be handled appropriately." },
  { question: "Can I spend the profits my self-directed IRA earns?", answer: "Investment profits generally belong to the IRA. Taking money out personally requires following applicable IRA distribution rules, and withdrawals may result in taxes or penalties." },
  { question: "Can my self-directed Roth IRA earn tax-free profits?", answer: "A Roth IRA may permit qualified tax-free distributions, but the applicable conditions must be satisfied. Certain investments may also create taxes within the IRA, such as unrelated business income tax. Do not assume every investment gain is automatically free from all taxes." },
  { question: "Do I have to stop investing in stocks if I open a self-directed IRA?", answer: "Not necessarily. The investments available through a particular self-directed IRA depend on its custodian and account structure. Some arrangements permit conventional investments alongside alternatives, while others have different limitations." },
  { question: "Can I invest my IRA in a company owned by a family member?", answer: "Transactions involving certain family members and other disqualified persons can violate prohibited-transaction rules. The specific relationships and transaction structure must be evaluated before investing." },
  { question: "Is a self-directed IRA safer than a regular IRA?", answer: "Not inherently. A self-directed IRA may allow riskier, harder-to-value, and less liquid assets. Investment losses, fraud, and high fees are important concerns." },
  { question: "Do I need a large amount of money to begin?", answer: "There is no single investment balance required for every self-directed IRA arrangement. However, custodian fees, asset costs, transaction minimums, and liquidity needs can make smaller investments impractical." },
  { question: "Does the IRA custodian approve whether an investment is a good deal?", answer: "Do not assume so. Custodians generally administer the account and hold assets, rather than investigate every investment's financial quality or legitimacy." },
  { question: "Can I invest in property that I already own personally?", answer: "Selling personally owned property to your own IRA generally constitutes a prohibited transaction. A proposed transaction should be reviewed with qualified professionals before any money changes hands." },
  { question: "What is the biggest advantage of a self-directed IRA?", answer: "For investors who understand alternative assets, one potential advantage is access to qualifying investments that their existing IRA provider may not offer. Whether that flexibility is beneficial depends on the particular investment, costs, risks, and retirement objectives." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the discussion of investment restrictions and the fact that custodians can impose additional limits on investments.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports the explanations about personal use, borrowing, related-party transactions, and other restrictions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Traditional and Roth IRAs", description: "Supports the high-level traditional-versus-Roth comparison.", href: "https://www.irs.gov/retirement-plans/traditional-and-roth-iras" },
  { title: "IRS Publication 590-A", description: "Reference for IRA contributions and certain investment restrictions.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Reference for IRA distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "SEC Investor.gov: Self-Directed IRA Fraud Risks", description: "Supports discussion of due diligence, liquidity, valuation, custodian limitations, fraud risk, and fees.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "IRS Publication 598: Unrelated Business Income", description: "Reference when discussing circumstances in which tax can arise inside a retirement arrangement.", href: "https://www.irs.gov/publications/p598" },
];

export const finalConversion = {
  heading: ["You Don't Have To Change Your Career.", "Explore A Different Investment Future."],
  description:
    "A self-directed IRA is not a shortcut to becoming wealthy. It is an opportunity to explore a broader range of qualifying investments, with the responsibility to understand each one. Explore establishing a self-directed IRA with Roth Academy.",
  signature: "Jordan and all investment examples in this module are entirely fictional educational illustrations.",
};
