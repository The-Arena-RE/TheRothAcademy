export const hero = {
  eyebrow: "The Small Business Owner",
  title: ["You Built Your Own Business.", "What If Your IRA Could Own a Piece of Another?"],
  goldLine: 1,
  description:
    "You understand what it takes to build a business — customers, employees, equipment, inventory, expenses, competition, and the decisions that determine whether a company succeeds. But have you ever considered that your retirement account might be able to invest in a private business you don't personally operate? A Self-Directed IRA may allow certain qualifying investments in privately held companies. You don't have to become its CEO, manage its employees, or abandon the company you've already built.",
  whoItsFor:
    "For small business owners, entrepreneurs, and independent professionals who have accumulated retirement savings and are curious about investing beyond their own company.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const operatorVsInvestor = {
  eyebrow: "Operator Versus Investor",
  heading: ["You Know What It Means to Own a Business.", "But Ownership Doesn't Always Mean Running One."],
  leftLabel: "The Operator",
  rightLabel: "The Investor",
  rows: [
    { left: "Owns and personally operates the company", right: "Holds a financial interest through the IRA" },
    { left: "Directs employees and serves customers", right: "Does not manage daily operations or employees" },
    { left: "Makes every business decision", right: "Does not automatically control the business" },
    { left: "Draws a salary or owner compensation", right: "Does not automatically receive a salary" },
    { left: "Bears full personal responsibility for the company", right: "May benefit if the investment increases in value, or lose some or all invested capital" },
  ],
  footnote: "You can understand how businesses create value without personally operating every company in which you invest.",
};

export const concentrationRisk = {
  eyebrow: "The Entrepreneur's Biggest Financial Blind Spot",
  heading: ["What If Your Business and Your Retirement Savings", "Depend on the Same Thing?"],
  goldLine: 1,
  paragraphs: [
    "Many business owners make substantial personal and financial commitments to their companies. Their working income comes from the business. A meaningful portion of their personal wealth may also be tied to it, and their future financial plans may depend on the company's continuing success. That can create concentration — if the business experiences serious difficulties, the owner might face reduced income and a decline in business value at the same time.",
    "Owning an interest in a different private business does not automatically provide adequate diversification. Private investments can be illiquid and volatile, and two businesses may face similar risks. The lesson is not that every entrepreneur needs private equity — it's that business owners should understand how concentrated their financial lives may already be.",
  ],
  featured: "Should every part of my financial future depend on the same business? Building a successful business and building a retirement investment strategy are connected goals, but they do not have to involve exactly the same assets.",
};

export const sofiaStory = {
  eyebrow: "Meet Sofia",
  heading: ["She Runs Her Own Company.", "Her IRA Has Never Invested in Another One."],
  stories: [
    {
      label: "Illustrative Small Business Owner",
      headline: "Sofia knows business — payroll, customers, equipment, rent, marketing, and cash flow. For years, her retirement savings have remained in conventional investments.",
      scenario:
        "Sofia is 44, a small business owner who has run an independent salon business for fourteen years and works actively in it. She has $150,000 in a traditional IRA, primarily invested in conventional securities. For this example, assume she makes an eligible trustee-to-trustee transfer to a traditional Self-Directed IRA custodian that supports qualifying private corporate securities. The account remains a traditional IRA, with no Roth conversion assumed.",
      realization: "Not because she wants her IRA to buy her salon. Not because she wants to use retirement savings to cover payroll. But because she understands that another independent company might offer an investment opportunity worth examining.",
      risk: "Sofia discovers a fictional specialty equipment manufacturer, unrelated to her salon, raising capital through a legally compliant private securities offering. For this illustration, assume Sofia and her IRA meet all applicable investor qualification requirements and the custodian permits the investment. Sofia is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const secondEnterprise = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["Imagine Your IRA Buying 4%", "of an Independent Private Company."],
  intro:
    "The company has employees, customers, operating expenses, and an independent management team. Sofia is not part of management and does not receive compensation from the company. Assume the company issues new common shares directly to the IRA under the appropriate custodial arrangement — the $40,000 goes into the company as new investment capital, not a payment to Sofia personally, a sale of her existing business, or a loan to her salon.",
  figures: [
    { label: "Sofia's Starting Traditional IRA", value: "$150,000" },
    { label: "Proposed IRA Investment", value: "$40,000" },
    { label: "Company Value Before Investment", value: "$960,000" },
    { label: "Company Value After Investment", value: "$1,000,000" },
    { label: "Illustrative Ownership Interest Acquired", value: "4%" },
    { label: "IRA Cash Remaining", value: "$110,000" },
  ],
  disclaimer: "$40,000 divided by $1,000,000 equals 4%. The other existing shareholders collectively own 96%. Real private investment agreements can contain provisions that materially change the rights of shareholders — this is a simplified illustration assuming no unusual share classes or preference rights.",
};

export const whatOwningGetsYou = {
  eyebrow: "What Does Owning 4% Actually Get You?",
  heading: ["A Small Piece of a Business Can Be Interesting.", "But What Do You Really Own?"],
  steps: [
    { number: "01", title: "Company Revenue", description: "The total money the business brings in from its customers before expenses. A shareholder does not automatically receive their ownership percentage of revenue." },
    { number: "02", title: "Company Profit", description: "The amount remaining under an applicable profit calculation after relevant expenses. A profitable company does not automatically distribute all profits to shareholders." },
    { number: "03", title: "Shareholder Proceeds", description: "Money a shareholder may actually receive through dividends, permitted distributions, a share sale, or another transaction, subject to the legal rights and applicable terms." },
  ],
  note: "Owning part of a company means owning a defined investment interest. It does not guarantee that cash arrives every month.",
};

export const threePossibleFutures = {
  eyebrow: "The Three Possible Futures",
  heading: ["What If the Company Succeeds?", "What If Your Ownership Gets Smaller?", "What If It Fails?"],
  intro:
    "All three scenarios share the same starting IRA investment: a $40,000 investment for 4% ownership, with $110,000 of separate IRA cash remaining unchanged throughout. No dividends, additional contributions, or other investments are assumed.",
  scenarios: [
    {
      key: "company-sells",
      label: "Company Sells",
      status: "Five years later, the company is acquired",
      description:
        "Assume $2,000,000 is the total amount available for distribution to common shareholders after all company debt, transaction expenses, and senior claims are satisfied. No ownership dilution occurs — Sofia's IRA retains its 4% shareholding. Private companies may never be sold, and shareholders may not be entitled to proportional sale proceeds if different share classes or liquidation preferences apply.",
      figures: [
        { label: "Net Equity Proceeds to Common Shareholders", value: "$2,000,000" },
        { label: "IRA Ownership at Sale", value: "4%" },
        { label: "Illustrative Proceeds to the IRA", value: "$80,000" },
        { label: "Illustrative Investment Gain", value: "$40,000" },
        { label: "Illustrative Ending IRA Value", value: "$190,000" },
        { label: "Illustrative Increase", value: "+$40,000" },
      ],
      statement: "The company did not guarantee this sale. Shareholders could just as easily have received far less if different rights or claims applied.",
    },
    {
      key: "dilution",
      label: "New Investors Dilute Ownership",
      status: "A later financing reduces Sofia's ownership percentage",
      description:
        "You still own the shares you purchased, but those shares now represent a smaller piece of the entire company. Assume a later financing causes newly issued shares to represent 20% of all shares immediately after that financing. Sofia's IRA does not purchase additional shares, so its 4% ownership becomes 4% multiplied by 80%, or 3.2%. To isolate the ownership change, assume the same eventual $2,000,000 company sale.",
      figures: [
        { label: "New Illustrative IRA Ownership", value: "3.2%" },
        { label: "IRA Ownership at Sale", value: "3.2%" },
        { label: "Illustrative IRA Proceeds", value: "$64,000" },
        { label: "Illustrative Investment Gain", value: "$24,000" },
        { label: "Illustrative Ending IRA Value", value: "$174,000" },
        { label: "Illustrative Increase", value: "+$24,000" },
      ],
      statement: "The investment was still profitable under this scenario, but dilution reduced the share of proceeds compared with the first illustration. Dilution does not always produce a loss, and a smaller ownership percentage does not necessarily mean a lower absolute investment value.",
    },
    {
      key: "fails",
      label: "The Company Fails",
      status: "Customers leave, costs rise, and the business becomes insolvent",
      description:
        "Private businesses can fail. Customers may leave, costs may increase, competition may become stronger, management may make poor decisions, and the business may exhaust available cash. Assume the fictional company closes and common shareholders receive nothing after obligations are resolved.",
      figures: [
        { label: "Original IRA Investment", value: "$40,000" },
        { label: "Recovery", value: "$0" },
        { label: "Illustrative Investment Loss", value: "$40,000" },
        { label: "Remaining IRA Cash (Unchanged)", value: "$110,000" },
        { label: "Illustrative Ending IRA Value", value: "$110,000" },
        { label: "Illustrative Decrease", value: "-$40,000" },
      ],
      statement: "This does not include additional expenses or other possible investment changes. A private company may fail or become worthless, causing an investor to lose the entire amount invested.",
    },
  ],
  tableColumns: [
    { label: "Illustrative Proceeds to the IRA", index: 2 },
    { label: "Illustrative Ending IRA Value", index: 4 },
  ],
  comparisonNote: "These are fictional illustrations, not actual investments, predictions, or probabilities. No investment recommendation should be implied, and the favorable outcome is not presented as the expected result.",
  conclusion: "Owning part of a business can create opportunity. It can also create a total loss. A private investment can be profitable, take years to produce any return, be diluted, or fail entirely — and even a company that appears successful may not provide a way for minority shareholders to sell their shares.",
};

export const ownBusinessDifferent = {
  eyebrow: "Your Own Company Is a Different Story",
  heading: ["Can Your IRA Invest in the Business", "You Already Own?"],
  goldLine: 1,
  paragraphs: [
    "If an IRA can invest in certain private companies, you might wonder: \"Why not have my IRA invest in my own business?\" That is a very different situation. Transactions involving an IRA owner, their own company, related people, or entities they control can raise serious prohibited-transaction concerns. IRA rules restrict certain sales, loans, services, and transactions that improperly benefit disqualified persons. An IRA cannot simply become another source of capital for an owner's personal business without considering those restrictions.",
    "Do not assume that investing through an LLC automatically solves the issue, that investing a smaller amount avoids prohibited-transaction rules, that paying fair market value is sufficient, or that routing money through another entity removes the prohibited relationship. The example in this module concerns an independent company with no prohibited relationship to the investor — this introductory lesson does not present investing in one's own company as a straightforward, generally available IRA strategy.",
  ],
  featured: "Your IRA may be able to invest in qualifying private businesses. That does not mean it can be used to finance your own business or create improper personal benefits.",
};

export const salaryProblem = {
  eyebrow: "The Salary Problem",
  heading: ["If Your IRA Owns Shares,", "Can You Personally Get Paid by That Company?"],
  goldLine: 1,
  paragraphs: [
    "Business owners are accustomed to being paid for their work — wages, business distributions, or management compensation. But an IRA-owned private investment introduces additional restrictions. Suppose your IRA acquires shares in a private company. If you then begin providing services to that company and receiving compensation, the arrangement may raise prohibited-transaction concerns depending on the facts. The same can be true if the investment creates indirect benefits for your own business or other disqualified persons. The right question isn't simply whether the payment is called a salary, consulting fee, commission, or distribution — it's whether the arrangement violates the applicable retirement-account rules.",
    "In this module's example, Sofia does not work for the invested company, manage its employees, receive consulting compensation or a referral fee, supply goods or services from her salon, personally guarantee company financing, or receive any special personal benefit from the IRA investment. These are important illustrative assumptions, not a legal determination that all other transaction requirements have been satisfied.",
  ],
  note: "An IRA investment is intended to benefit the retirement account under the rules, not create an improper second paycheck for its owner.",
};

export const entityTypes = {
  eyebrow: "Not Every Private Company Is the Same Investment",
  heading: ["An LLC, a C Corporation, and an S Corporation", "Can Create Very Different IRA Questions."],
  steps: [
    { number: "01", title: "C Corporation", description: "A corporation taxed under the regular corporate tax system. Certain privately held C corporation shares may be held through an appropriate IRA if the investment, offering, and transaction satisfy applicable rules. Sofia's fictional investment example involves a C corporation." },
    { number: "02", title: "LLC Taxed as a Partnership", description: "When an IRA owns an interest in an entity taxed as a partnership that operates an active business, the IRA may be allocated unrelated business taxable income — creating taxes and filing obligations within the IRA even if the business does not distribute cash." },
    { number: "03", title: "S Corporation", description: "An S corporation must have eligible shareholders under federal tax law. IRAs generally cannot be S corporation shareholders, subject to narrow historical statutory exceptions — this is not an ordinary investment opportunity." },
  ],
  note: "Before asking whether a business looks profitable, understand what legal entity your IRA would actually be investing in.",
};

export const taxAdvantageNotUnlimited = {
  eyebrow: "The Tax Advantage Is Not Unlimited",
  heading: ["A Retirement Account Doesn't Make", "Every Private Investment Tax-Free."],
  goldLine: 1,
  paragraphs: [
    "Traditional and Roth IRAs have different tax rules. In a traditional IRA, eligible investment growth is generally tax-deferred, while distributions of pretax amounts are generally taxable. In a Roth IRA, qualified distributions can be tax-free when the applicable requirements are met. But certain alternative investments can create taxes within the IRA itself — ownership in a partnership conducting an operating business can produce unrelated business taxable income, and certain debt-financed investments can also create specialized tax consequences.",
    "Sofia's example involves a traditional IRA purchasing qualifying common shares in a C corporation. The numerical illustrations do not calculate any possible IRA-level taxes, account fees, or distribution taxes, and not all private-company sale proceeds receive identical tax treatment.",
  ],
  note: "The account's tax benefits matter. So does the legal and tax structure of the investment it owns.",
};

export const investmentYouCantSell = {
  eyebrow: "The Investment You Can't Sell",
  heading: ["What If Your Business Investment Is Valuable on Paper", "but Nobody Will Buy Your Shares?"],
  goldLine: 1,
  paragraphs: [
    "Publicly traded stocks often have an established market where eligible investors can buy and sell shares. A privately held company may have no active market for its shares. Even if its business grows, the IRA may have difficulty finding someone willing and legally permitted to purchase its investment interest. Private shareholders may face restrictions on selling or transferring shares, the company may not declare dividends, an anticipated sale may never occur, and the investment may remain tied up for years.",
  ],
  note: "A private investment can have an estimated value without providing available cash. This distinction can become especially important when an IRA needs liquidity for expenses or retirement distributions.",
};

export const lookBeyondThePitch = {
  eyebrow: "The Offering That Sounds Too Good",
  heading: ["Entrepreneurs Understand a Good Pitch.", "Investors Still Need Evidence."],
  intro:
    "A private business may present an exciting opportunity, with growing demand, an impressive product, or rapid projected expansion. But a compelling presentation is not proof that an investment is sound. Being a successful business owner does not automatically mean someone qualifies for every private offering.",
  steps: [
    { number: "01", title: "What Is the Company Actually Selling?", description: "Understand the product or service and the source of customer demand." },
    { number: "02", title: "What Do the Financial Statements Show?", description: "Revenue isn't profit. Profit isn't always cash. Review expenses, liabilities, cash flow, and financing needs." },
    { number: "03", title: "What Rights Does the IRA Receive?", description: "Determine the exact shares or interests being purchased, voting rights, dilution provisions, and any preferences granted to other investors." },
    { number: "04", title: "How Might the IRA Eventually Receive Money?", description: "Consider dividends, distributions, a share sale, acquisition, or another potential liquidity event. None should be assumed." },
    { number: "05", title: "What Happens If the Company Fails?", description: "Understand the possibility of losing the entire invested amount." },
  ],
  note: "Business experience can help an entrepreneur recognize opportunities. It cannot replace independent verification of the investment's financial condition and legal rights.",
};

export const warningSigns = {
  eyebrow: "Five Private Investment Warning Signs",
  heading: ["Before Your IRA Buys Shares,", "Look Beyond the Founder."],
  steps: [
    { number: "01", title: "Guaranteed Returns", description: "Private-company equity does not guarantee an investment return. Claims of risk-free private equity profits deserve skepticism." },
    { number: "02", title: "Unclear Ownership Rights", description: "The investment documents should explain what the IRA actually receives. A percentage mentioned in a sales presentation may not fully describe the legal rights." },
    { number: "03", title: "Pressure to Invest Immediately", description: "An investor should have a meaningful opportunity to examine the transaction and supporting information. High-pressure selling is a warning sign." },
    { number: "04", title: "No Clear Financial Information", description: "The absence of useful financial information can make it difficult to evaluate the investment, even though private offerings may have different disclosure obligations." },
    { number: "05", title: "Conflicts With Your Own Business or Personal Interests", description: "A proposed investment involving personal compensation, related companies, special benefits, or disqualified persons requires careful legal review." },
  ],
  note: "The more exciting a private investment sounds, the more important it is to understand the evidence behind it.",
};

export const whatIRAOwns = {
  eyebrow: "What Does Your IRA Actually Own?",
  heading: ["You Own Your Business Personally.", "Your IRA Owns Its Own Investments."],
  leftLabel: "Personal Business Ownership",
  rightLabel: "IRA Investment Ownership",
  rows: [
    { left: "Sofia's personally held salon business interests", right: "Shares legally held through the IRA's custodial arrangement" },
    { left: "Part of Sofia's personal financial life", right: "Part of Sofia's retirement-account investments" },
    { left: "Proceeds belong to Sofia personally", right: "Proceeds belong to the IRA, not Sofia personally" },
  ],
  footnote: "Sofia cannot simply transfer the investment's profits to her personal checking account without following IRA distribution rules, and she cannot treat the shares as personally owned assets merely because she directs the IRA's investment decisions. Directing an IRA investment is different from personally owning or operating the investment.",
};

export const oldAccountOptions = {
  eyebrow: "What If You Already Have Retirement Savings?",
  heading: ["You May Already Have Retirement Assets", "That Could Explore More Investment Choices."],
  steps: [
    { number: "01", title: "Existing IRA", description: "An eligible trustee-to-trustee IRA transfer may allow retirement assets to move to an appropriate custodian supporting a broader investment menu. The traditional or Roth tax rules remain applicable." },
    { number: "02", title: "Former Employer Retirement Plan", description: "Certain eligible retirement-plan distributions may be rolled into an IRA. The specific plan and distribution must qualify." },
    { number: "03", title: "Current Business Retirement Plan", description: "A business owner cannot automatically move funds from an active retirement plan into an IRA merely because a different investment is desired. Applicable law and plan distribution rules control availability." },
  ],
  note: "Moving eligible pretax retirement assets to a traditional IRA can generally preserve tax-deferred treatment. Moving pretax funds into a Roth IRA may create taxable conversion income — self-direction does not change that.",
};

export const entrepreneurChecklist = {
  eyebrow: "The Entrepreneur's Private Investment Checklist",
  heading: ["Before Your IRA Becomes an Investor,", "Examine the Business Like an Owner."],
  steps: [
    { number: "01", title: "Business Model & Financial Condition", description: "How does the company earn revenue, who are its customers, is it profitable, how much cash and debt does it carry?" },
    { number: "02", title: "Management", description: "Who runs the company, what experience do they have, and what incentives influence their decisions?" },
    { number: "03", title: "Ownership Rights & Eligibility", description: "What shares or interests will the IRA receive, can that percentage change, is the offering legally conducted, and does the IRA custodian support the investment?" },
    { number: "04", title: "Liquidity", description: "Can the IRA sell the investment? Are there transfer restrictions, and what happens if no buyer appears?" },
    { number: "05", title: "Taxes & Overall Fit", description: "Could the entity structure or its activities generate taxes inside the IRA, and does the investment make sense alongside existing business exposure and other retirement assets?" },
  ],
  note: "A good investment decision begins with understanding the company, the ownership terms, and the consequences if expectations aren't met.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You've Built One Business.", "Discover the Possibility of Investing in Another."],
  goldLine: 1,
  paragraphs: [
    "You understand what it takes to build a company — the importance of customers, expenses, management, and financial decisions. You've seen how businesses create value, and probably seen how quickly they can encounter difficulties. Now imagine exploring investments beyond the company you operate. A Self-Directed IRA may be able to hold qualifying interests in unrelated private businesses.",
    "That does not guarantee a successful investment. It does not allow you to use retirement funds for prohibited personal benefits. And it does not mean every private company is legally eligible or financially appropriate. But it may introduce an investment possibility you haven't considered before.",
  ],
  featured: "Your entrepreneurial experience can help you understand businesses. Your retirement account may be able to participate in qualifying investments beyond your own.",
};

export const faqItems = [
  { question: "Can a small business owner have a Self-Directed IRA?", answer: "Yes. Owning a business does not prevent someone from establishing a Self-Directed IRA. The account remains subject to applicable IRA rules and the custodian's permitted investment options." },
  { question: "Can my Self-Directed IRA invest in another private business?", answer: "Potentially. A Self-Directed IRA may be able to purchase qualifying interests in an unrelated private company, subject to investment, securities, custodian, and prohibited-transaction rules." },
  { question: "Can my IRA invest in my own company?", answer: "Transactions involving the IRA owner's own company can create serious prohibited-transaction and personal-benefit concerns. Such investments should not be treated as routinely permissible. Qualified legal analysis is necessary before considering any proposed arrangement." },
  { question: "Can my IRA lend money to my business?", answer: "Using an IRA to lend money to a company owned or controlled by the account holder can involve prohibited transactions. Do not assume it is permitted." },
  { question: "Can I sell my company shares to my IRA?", answer: "A sale or exchange between an IRA and its owner or another disqualified person can be prohibited. Selling personally owned company shares to one's own IRA should not be treated as a permissible investment strategy." },
  { question: "Can an IRA own part of a private C corporation?", answer: "Potentially. A Self-Directed IRA may hold certain eligible private C corporation shares if the custodian permits them and the transaction satisfies applicable law." },
  { question: "Can an IRA invest in an LLC?", answer: "Potentially, but the LLC's ownership, tax classification, business activities, and relationships matter. A partnership-taxed LLC carrying on an operating business can generate unrelated business taxable income for the IRA." },
  { question: "Can a Self-Directed IRA own S corporation stock?", answer: "Generally, IRAs are not eligible S corporation shareholders, subject to narrow historical statutory exceptions. Do not assume an ordinary IRA may purchase S corporation shares without affecting the corporation's tax status." },
  { question: "Can I work for a company my IRA invests in?", answer: "Employment, consulting, management, and compensation arrangements can raise prohibited-transaction concerns depending on the ownership and facts. Do not assume personal services or compensation are permissible merely because the company is separately incorporated." },
  { question: "Can my IRA invest in my spouse's business?", answer: "A spouse is a disqualified person under the applicable IRA rules. Transactions involving a spouse's business can create significant prohibited-transaction concerns and must not be assumed permissible." },
  { question: "Can my IRA invest in a business owned by a friend?", answer: "A friendship alone does not necessarily make someone a disqualified person, but the ownership, financial relationships, services, and potential personal benefits still require review." },
  { question: "What does owning 4% of a private company mean?", answer: "It generally means owning a specified portion of the company's equity under the applicable share structure. It does not automatically mean receiving 4% of revenue, profits, or cash distributions." },
  { question: "Can my ownership percentage get smaller?", answer: "Yes. New share issuance, conversion rights, options, and other financing arrangements can reduce an existing shareholder's ownership percentage. The exact impact depends on the company's capitalization and investment agreements." },
  { question: "How does my IRA make money from private company shares?", answer: "Possible sources of proceeds include dividends, an eventual share sale, an acquisition, or another permitted liquidity event. None is guaranteed, and some investments may never generate cash proceeds." },
  { question: "Can my IRA lose its entire private company investment?", answer: "Yes. A private company may fail or become worthless, causing an investor to lose the entire amount invested." },
  { question: "Can I withdraw profits from an IRA private equity investment?", answer: "Investment proceeds generally belong to the IRA. Personal distributions must comply with applicable retirement-account rules and may create tax consequences." },
  { question: "Are private company investments in a Roth IRA always tax-free?", answer: "No. Roth IRAs can provide qualified tax-free distributions, but certain investments may generate taxes within the IRA. The entity structure, activities, financing, and applicable tax rules matter." },
  { question: "Does the SEC approve private investments?", answer: "The fact that an offering claims a securities-law exemption or files Form D does not mean the SEC has approved the investment or endorsed its merits. Investors must conduct appropriate due diligence." },
  { question: "Do I have to be an accredited investor?", answer: "Some private offerings are limited to accredited investors. Others may permit eligible non-accredited investors under particular requirements. The specific offering rules determine eligibility." },
  { question: "Does my IRA custodian evaluate whether a private investment is legitimate?", answer: "Not necessarily. Self-directed custodians generally do not evaluate the investment's merits or verify all information supplied by promoters." },
  { question: "Is a Self-Directed IRA better than a Solo 401(k) for business owners?", answer: "Not automatically. These arrangements have different eligibility requirements, contribution rules, administrative responsibilities, and investment structures. The appropriate choice depends on the business and individual circumstances." },
];

export const references = [
  { title: "IRS: IRA Investment Rules", description: "Supports the discussion of qualifying private-business investments and custodian limitations.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions on investments in an owner's own business, related parties, and improper personal benefits.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investment FAQs", description: "Provides additional background on prohibited transactions involving disqualified persons and compensation.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS Publication 590-B", description: "Supports discussion of IRA distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598: Unrelated Business Income", description: "Supports the discussion of partnership-taxed LLCs and debt-financed investments generating UBTI.", href: "https://www.irs.gov/publications/p598" },
  { title: "SEC: Accredited Investors", description: "Supports the discussion of private offering investor eligibility.", href: "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/accredited-investors" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of custodial limitations, illiquidity, and valuation uncertainty.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["You've Built One Business With Discipline.", "Build Your Investment Knowledge With the Same Discipline."],
  description:
    "You understand what it takes to build a company. A Self-Directed IRA may offer access to certain qualifying private-business investments, subject to its custodian and applicable law. Explore the opportunities, understand the structure, and evaluate the risks.",
  signature: "Sofia and all investment examples in this module are entirely fictional educational illustrations.",
};
