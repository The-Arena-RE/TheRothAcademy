export const hero = {
  eyebrow: "The Doctor With A Side Business",
  title: ["You've Built A Career In Medicine.", "What Could Your Side Business Make Possible For Retirement?"],
  goldLine: 1,
  description:
    "Maybe you work for a hospital during the week. Maybe you consult independently, teach, write, or provide professional services through a business of your own. If your independent business qualifies, you may be able to establish a Self-Directed 401(k) with investment choices beyond a conventional retirement account — including certain real estate investments, private loans, and qualifying private businesses.",
  whoItsFor: "Your medical expertise opened professional doors. Your independent business may open a financial one.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const twoPlans = {
  eyebrow: "The Retirement Plan You Already Have May Not Be The Only One",
  heading: ["You Have A Retirement Plan At Work.", "That Doesn't Automatically Close The Door."],
  intro:
    "Many physicians participate in employer-sponsored retirement plans. But if you also operate a separate qualifying business, you may be able to establish another retirement plan through that business.",
  items: [
    { number: "01", title: "Your Medical Career", description: "Hospital or medical-group employment, a workplace retirement plan, W-2 compensation, and employer benefits." },
    { number: "02", title: "Your Independent Business", description: "Qualifying consulting, education, expert witness, or professional services business, with potential one-participant Self-Directed 401(k) eligibility and alternative investment flexibility." },
  ],
  note: "Your medical employer's retirement plan and your independent business's retirement plan may be two different arrangements. But not every contribution limit starts over — the physician's personal elective salary-deferral limit generally applies across relevant 401(k) and 403(b) plans. The opportunity isn't pretending the limits disappear. It's understanding the different retirement-planning choices a qualifying business may provide.",
};

export const shahStory = {
  eyebrow: "Meet Dr. Shah",
  heading: ["Dr. Shah Has A Hospital Career, A Consulting Business,", "And A Retirement Question She Never Asked."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Dr. Shah Has A Hospital Career, A Consulting Business, And A Retirement Question She Never Asked.",
      scenario:
        "Dr. Priya Shah is 42 and works as a physician for a regional hospital, which provides access to a 403(b) plan. Outside her hospital employment, she operates an independent medical education consulting business — developing material for unrelated professional publishers and providing properly contracted consulting services. She does not use patient information for these projects, has no employees in the consulting business, and her arrangements are not designed to reward patient referrals or purchases of medical products.",
      realization:
        "Then she discovers that the business may qualify to sponsor a separate Self-Directed 401(k) that may permit investments outside conventional brokerage products. For the first time, she begins asking: “Could this independent business give me access to retirement investments I can't easily purchase through my hospital's retirement menu?”",
      risk:
        "Dr. Shah is fictional. Her employment, business, compensation, and investment circumstances are illustrative. The example does not establish that every physician consultant qualifies for a one-participant plan.",
    },
  ],
};

export const businessSnapshot = {
  eyebrow: "The Annual Snapshot",
  heading: ["A $66,000 Profit Isn't Automatically", "A $66,000 Retirement Contribution."],
  figures: [
    { label: "Annual consulting revenue", value: "$84,000" },
    { label: "Ordinary business expenses", value: "$18,000" },
    { label: "Business profit before taxes & contributions", value: "$66,000" },
  ],
  disclaimer:
    "$84,000 minus $18,000 equals $66,000. The $66,000 in business profit is not automatically Dr. Shah's permitted Self-Directed 401(k) contribution — actual compensation and contribution calculations depend on the business structure, applicable self-employment adjustments, other retirement-plan contributions, and statutory limits.",
};

export const contributionDistinction = {
  eyebrow: "The Contribution Distinction",
  heading: ["You Can Have Two Retirement Plans.", "You Don't Automatically Have Two Employee Contribution Limits."],
  items: [
    {
      number: "01",
      title: "Personal Employee Deferrals",
      description: "Generally subject to a shared individual annual limit across relevant plans. For tax year 2026, the regular elective deferral limit for a person under age 50 is $24,500. If Dr. Shah already made $24,500 of applicable deferrals to her hospital's 403(b), her remaining ordinary employee deferral room for the consulting business's 401(k) is generally $0.",
    },
    {
      number: "02",
      title: "Employer Contributions From The Side Business",
      description: "May be possible under additional compensation, plan, and related-employer rules — even after the personal deferral limit is used elsewhere. That possibility requires individual calculation and deserves a separate evaluation.",
    },
  ],
  note: "A physician may have used the regular employee contribution limit at work while still having a separate business retirement-planning question worth exploring.",
};

export const evidenceDiscipline = {
  eyebrow: "Medical Expertise Is Not An Investment Approval",
  heading: ["You're Trained To Evaluate Evidence.", "Your Investments Deserve The Same Discipline."],
  goldLine: 1,
  paragraphs: [
    "Physicians make complex decisions by examining information — looking at the evidence, considering what might go wrong, recognizing uncertainty. Investment opportunities deserve a similar level of critical thinking. An attractive real estate property can still be overpriced. A promising healthcare company can still fail. A private loan can still default. And a perfectly legitimate business opportunity may be unsuitable or impermissible inside a retirement plan.",
    "The goal isn't to make investing sound like medicine. It's to apply the same respect for evidence, risk, and careful judgment.",
  ],
  featured: "A good investment story is not the same thing as a sound investment decision.",
};

export const grandRoundsIntro = {
  eyebrow: "Investment Grand Rounds",
  heading: ["Your Retirement Plan Could Consider More Than Stocks.", "But Not Every Investment Belongs In It."],
  intro:
    "Imagine Dr. Shah has established a qualifying Self-Directed 401(k) with sufficient eligible investment capital. Several potential investments become available — some unrelated to healthcare, others involving medical businesses or professional relationships. Each requires a different analysis. Select a case to explore it.",
  cases: [
    {
      key: "office",
      title: "The Professional Office Building",
      question: "Could The Retirement Plan Own An Office Building?",
      amount: "$180,000",
      scenario: "Dr. Shah's Self-Directed 401(k) considers purchasing a small professional office property for $180,000, rented to an unrelated accounting firm. The tenant has no ownership or prohibited financial relationship with Dr. Shah, and her medical employer and consulting business would not use the property.",
      examine: "Property value, tenant financial condition, lease terms, maintenance costs, insurance, property taxes, vacancy risk, legal ownership, plan provisions, and financing and tax treatment.",
      outcome: "Potentially Permissible, Subject To Review",
      outcomeTone: "ok" as const,
      conclusion: "Potentially permissible investment real estate, subject to the plan's terms and transaction review. The retirement plan, not Dr. Shah personally, would receive any rental income and bear the ownership expenses.",
    },
    {
      key: "ownloan",
      title: "The Loan To Her Own Consulting Business",
      question: "Could The Retirement Plan Finance Her Consulting Business?",
      amount: "$50,000",
      scenario: "Dr. Shah wants her Self-Directed 401(k) to lend $50,000 to her own medical education consulting company to fund business expansion. She knows the business, understands the customers, and plans to charge a commercial interest rate.",
      examine: "A direct loan between a retirement plan and the owner's own company generally creates prohibited-transaction problems. Charging interest or promising repayment does not automatically make the arrangement permissible.",
      outcome: "Generally Prohibited Related-Party Lending",
      outcomeTone: "bad" as const,
      conclusion: "Knowing your own business better than anyone else doesn't make it an unrelated retirement investment. This is not the same as a qualifying participant loan offered under specific plan provisions and applicable law.",
    },
    {
      key: "imaging",
      title: "The Private Imaging Center",
      question: "Could The Retirement Plan Invest In A Medical Business That Receives Patient Referrals?",
      amount: "$75,000",
      scenario: "A private imaging center offers Dr. Shah's retirement plan the opportunity to invest $75,000. Dr. Shah may refer patients for services provided by the center.",
      examine: "Certain physician financial relationships with medical businesses can create concerns under the federal physician self-referral law (Stark Law), the Anti-Kickback Statute, ownership and compensation arrangements, and applicable exceptions and safe harbors. Holding an investment through a retirement plan does not automatically eliminate these concerns.",
      outcome: "Specialized Healthcare Legal Review Required",
      outcomeTone: "warn" as const,
      conclusion: "An investment connected to your professional influence deserves more scrutiny, not less. Do not assume the arrangement is permissible, and do not assume it is automatically prohibited either — the actual relationships, services, ownership, intent, and applicable exceptions matter.",
    },
    {
      key: "privateloan",
      title: "The Unrelated Private Real Estate Loan",
      question: "Could The Retirement Plan Become A Private Lender?",
      amount: "$35,000",
      scenario: "Dr. Shah's Self-Directed 401(k) considers making a $35,000 secured loan to an unrelated real estate investor, not connected to Dr. Shah, her family, consulting business, or medical employer through a disqualified relationship. The loan would have properly documented terms.",
      examine: "Borrower financial strength, collateral value, lien priority, loan documentation, repayment ability, default risk, collection expenses, applicable lending laws, and plan provisions.",
      outcome: "Potentially Permissible, With Credit Risk",
      outcomeTone: "ok" as const,
      conclusion: "A contractual payment is not the same thing as a guaranteed payment. If the borrower repays as agreed, the retirement plan may receive principal and interest — but default, inadequate collateral, and recovery costs remain real possibilities.",
    },
  ],
  summaryRows: [
    { arrangement: "Unrelated professional office property", outcome: "Potential real estate investment, subject to review" },
    { arrangement: "Loan to the physician's own consulting business", outcome: "Generally prohibited related-party lending" },
    { arrangement: "Imaging center connected to potential referrals", outcome: "Requires specialized healthcare and retirement-plan review" },
    { arrangement: "Loan to an unrelated real estate investor", outcome: "Potential private lending investment, subject to risks and rules" },
  ],
  conclusion: "The opportunity isn't owning anything you recognize. It's understanding which investments your retirement plan may lawfully hold.",
};

export const officeBuildingExample = {
  eyebrow: "The Office Building Investment Example",
  heading: ["A Medical Career Can Teach You About Professional Buildings.", "A Retirement Investment Still Has To Stand On Its Own Numbers."],
  intro:
    "Imagine Dr. Shah's qualifying Self-Directed 401(k) purchases the professional office building from Investment Grand Rounds from an unrelated seller, with enough eligible funds to make the purchase without borrowing, leased to an unrelated accounting firm.",
  figures: [
    { label: "Illustrative property purchase price", value: "$180,000" },
    { label: "Total initial capital allocation (incl. $18,000 reserve)", value: "$210,000" },
    { label: "Potential annual gross rent ($2,100/mo × 12)", value: "$25,200" },
    { label: "Illustrative annual operating surplus", value: "$15,600" },
  ],
  disclaimer:
    "$2,100 × 12 = $25,200. $25,200 minus $9,600 in illustrative annual operating expenses equals $15,600. The expected acquisition and improvement spending totals $192,000; the additional $18,000 reserve is not an incurred expense. This is a simplified hypothetical result, not a guaranteed return — it excludes unexpected capital repairs, possible additional taxes, and disposition costs, and assumes the tenant pays rent throughout the year.",
};

export const rentScenarios = {
  eyebrow: "What Happens Without A Tenant?",
  heading: ["A Property Can Have Attractive Numbers", "And Still Carry Substantial Risk."],
  items: [
    { number: "A", title: "The Tenant Pays All Year", description: "Illustrative annual operating surplus: $15,600." },
    { number: "B", title: "The Property Produces No Rent All Year", description: "Illustrative annual operating loss: $9,600, assuming listed operating expenses continue." },
  ],
  note: "Retirement ownership doesn't change the underlying risk. Real estate can decline in value, a tenant can stop paying, a property can become vacant, and selling an investment property may take time.",
};

export const notYourTenant = {
  eyebrow: "Your Medical Practice Is Not Your Retirement Plan's Tenant By Default",
  heading: ["Could Your Retirement Plan Buy A Medical Office", "And Rent It To Your Own Practice?"],
  goldLine: 1,
  paragraphs: [
    "Imagine a doctor owns a qualifying Self-Directed 401(k) and also owns a medical practice that needs office space. The retirement plan considers buying a building and leasing it to that practice. The arrangement might seem logical — the physician understands the business, the building would have a tenant, and the rent could be based on an appraisal.",
    "But transactions between a retirement plan and a business connected to the plan owner can violate prohibited-transaction rules. Charging fair-market rent does not automatically make a related-party lease permissible, and medical office arrangements may also raise additional professional and healthcare legal considerations. Not every lease involving medical tenants is prohibited — an unrelated tenant may present different issues from the physician's own medical practice.",
  ],
  featured: "The retirement plan generally cannot become the landlord of your own practice through a prohibited related-party arrangement.",
};

export const healthcareConflict = {
  eyebrow: "The Healthcare Investment Conflict",
  heading: ["Sometimes The Biggest Investment Risk", "Isn't On The Balance Sheet."],
  goldLine: 1,
  paragraphs: [
    "A physician's professional position creates responsibilities that ordinary investors may not have. Physicians may influence which services patients receive, which specialists they visit, which products are ordered, and which facilities are used. Certain investments and compensation arrangements involving those decisions can create legal concerns under the federal Anti-Kickback Statute or physician self-referral law.",
    "These laws do not prohibit every physician investment — they apply according to specific legal requirements. But investing through a Self-Directed 401(k) does not automatically make healthcare-related conflicts disappear, and an arrangement that satisfies a Stark Law exception does not automatically satisfy the Anti-Kickback Statute.",
  ],
  featured: "Your patients deserve independent medical judgment. Your retirement investments must also meet the rules governing their ownership and use.",
};

export const threeQuestions = {
  eyebrow: "Three Questions Every Physician Investor Should Consider",
  heading: ["Before Any Healthcare-Adjacent Investment,", "Ask These First."],
  items: [
    { number: "01", title: "Do I Have A Financial Relationship With The Business?", description: "Ownership and compensation arrangements can matter." },
    { number: "02", title: "Could My Medical Decisions Or Referrals Benefit That Business?", description: "Certain healthcare laws restrict relationships that create improper referral incentives." },
    { number: "03", title: "Is The Retirement-Plan Transaction Independently Permissible?", description: "Retirement-plan rules remain a separate legal consideration." },
  ],
};

export const otherInvestments = {
  eyebrow: "The Other Investment Possibilities",
  heading: ["You Don't Have To Invest In Healthcare", "Just Because You Work In Healthcare."],
  intro: "A qualifying Self-Directed 401(k) may permit investments in other industries. Exploring unrelated assets may help the investor consider financial risks outside their medical career — that doesn't guarantee diversification or better returns, but it expands the conversation.",
  items: [
    { number: "01", title: "Real Estate", description: "Certain plans may permit qualifying residential or commercial property investments. Potential rental income and sale proceeds belong to the retirement plan, which also bears the costs, risks, and applicable tax obligations." },
    { number: "02", title: "Private Lending", description: "Some plans may make qualifying private loans to unrelated borrowers. The plan may receive principal and interest if the borrower performs. Default, inadequate collateral, and loss of principal remain real possibilities." },
    { number: "03", title: "Private Equity", description: "Certain plans may invest in qualifying privately held companies or funds — access to businesses outside public markets, along with difficult valuations, long holding periods, dilution, and potential total loss." },
    { number: "04", title: "Traditional Securities", description: "A Self-Directed 401(k) may also hold permitted conventional investments. The ability to consider alternative investments doesn't require using them exclusively." },
  ],
  note: "A broader investment menu creates additional possibilities. It also creates more decisions and responsibilities.",
};

export const whoQualifies = {
  eyebrow: "Who Actually Qualifies?",
  heading: ["Having An MD Doesn't Make You Eligible.", "Having A Qualifying Business Might."],
  intro: "A physician's professional title does not independently create eligibility for a one-participant Self-Directed 401(k). The relevant facts involve the business.",
  items: [
    { number: "01", title: "Hospital Physician With Independent Consulting", description: "Operates a genuine independent consulting business with qualifying earnings and no eligible employees. A one-participant Self-Directed 401(k) may be worth exploring, subject to all applicable rules." },
    { number: "02", title: "Physician Earning Additional W-2 Wages", description: "Performs additional shifts as an employee of another medical employer without operating a separate qualifying business. Additional W-2 employment alone does not automatically create eligibility." },
    { number: "03", title: "Physician Owning A Medical Practice With Employees", description: "Employs nurses, administrative staff, or other workers. The business may be able to sponsor a retirement plan, but an owner-only plan generally cannot disregard employees who must be covered." },
    { number: "04", title: "Physician Owning Several Related Medical Entities", description: "Owns or controls multiple professional service businesses. Controlled-group and affiliated-service-group rules may require related businesses and their employees to be considered together." },
  ],
  note: "The retirement plan must fit the actual business arrangement, not just the way the physician describes the side business.",
};

export const consultingIncome = {
  eyebrow: "What About Paid Medical Consulting?",
  heading: ["Consulting Income Can Be A Business.", "But Every Check Isn't Automatically Self-Employment Income."],
  intro: "Physicians may receive money from different sources — hospital employment, independent consulting, professional speaking, teaching, expert witness services, research, and business ownership. The correct tax treatment depends on the actual relationship and circumstances.",
  items: [
    { number: "01", title: "Employee Compensation", description: "Wages from employment." },
    { number: "02", title: "Independent Business Earnings", description: "Potential qualifying self-employment income, subject to applicable rules." },
    { number: "03", title: "Investment Income", description: "Generally a different category from compensation for services." },
  ],
  note: "Receiving a Form 1099 does not, by itself, establish a qualifying business. The title on the payment doesn't determine the retirement-plan result — the actual business activity matters.",
};

export const relatedBusinesses = {
  eyebrow: "Why Related Medical Businesses Deserve Special Attention",
  heading: ["One Physician. Three Companies.", "That Doesn't Automatically Mean Three Unrelated Businesses."],
  goldLine: 1,
  paragraphs: [
    "Some physicians operate more than one entity — a medical practice, a professional corporation, a consulting company, a management business, a real estate company. These structures may be legitimate and useful for different purposes. But retirement-plan rules sometimes require related employers to be analyzed together.",
    "Controlled-group and affiliated-service-group rules can affect employee coverage, contribution limits, and the appropriate plan structure — particularly relevant to service businesses with interconnected ownership and operations.",
  ],
  featured: "Separate company names don't automatically mean separate retirement-plan employers.",
};

export const rolloverExample = {
  eyebrow: "What About Old Retirement Savings?",
  heading: ["Your Medical Career May Have Created Retirement Savings", "Before Your Side Business Ever Existed."],
  intro:
    "Dr. Shah has a hypothetical $160,000 in a former employer's retirement account and establishes a qualifying Self-Directed 401(k) through her consulting business. If the former plan permits an eligible distribution and the new plan accepts that type of rollover, some or all eligible funds may potentially be transferred.",
  figures: [
    { label: "Hypothetical former employer plan balance", value: "$160,000" },
    { label: "Eligible rollover distribution required", value: "Yes" },
    { label: "Receiving Self-Directed 401(k) must accept the rollover type", value: "Confirm with plan" },
  ],
  disclaimer:
    "Current employer plans may restrict distributions, and different retirement account types may have different rollover rules. Not every 403(b), 401(k), IRA, or deferred compensation arrangement can be rolled into a Self-Directed 401(k). This is a separate funding consideration from new contributions generated through a consulting business.",
};

export const taxQuestion = {
  eyebrow: "Private Business Investments Have Another Tax Question",
  heading: ["An Investment Can Be Permitted", "And Still Create Additional Taxes."],
  intro:
    "A qualifying Self-Directed 401(k) may be able to invest in certain private arrangements, but investment structure affects tax treatment. Investments in certain partnerships or LLCs operating active businesses may generate unrelated business taxable income, even though the investment remains inside the plan.",
  items: [
    { number: "01", title: "Corporate Stock", description: "Tax treatment depends on the actual stock, company, relationships, and circumstances." },
    { number: "02", title: "Partnership Or Pass-Through Business", description: "Certain operating income may create unrelated business taxable income." },
    { number: "03", title: "Investment Real Estate", description: "Ownership, income type, debt, and applicable qualified-plan exceptions can affect the result." },
  ],
  note: "Self-directed retirement investing is not a universal exemption from every tax.",
};

export const patientsNotOpportunities = {
  eyebrow: "Your Patients Are Not Investment Opportunities",
  heading: ["A Financial Opportunity Should Never Depend On", "Improperly Influencing Patient Care."],
  goldLine: 1,
  paragraphs: [
    "A physician's investment decisions can intersect with professional duties. A business may want access to the physician's expertise — that can be legitimate. But if an arrangement is designed to reward prescriptions, referrals, or healthcare business generated through the physician's professional influence, additional laws may apply. A retirement plan does not automatically solve these concerns.",
    "For example, investing in a business to which the physician refers patients may require analysis under healthcare fraud-and-abuse laws. The actual investment and referral arrangements matter.",
  ],
  featured: "A retirement investment should never become a reason to compromise medical judgment.",
};

export const closingReflection = {
  eyebrow: "The Future Beyond The Hospital",
  heading: ["Your Career Generates Income.", "Your Retirement Investments Have A Different Job."],
  goldLine: 1,
  paragraphs: [
    "A qualifying Self-Directed 401(k) may hold assets intended to support retirement. Those assets may generate income, gain value, decline, or fail entirely — they belong to the retirement plan and are not an unrestricted source of personal money, and the plan's investments must satisfy applicable laws and governing documents.",
    "A Self-Directed 401(k) does not guarantee fewer shifts, more control over your schedule, or the ability to pursue different interests. It cannot eliminate investment risk, and it doesn't automatically create tax-free wealth. But a qualifying independent business may provide another retirement-planning opportunity — the possibility of investing in certain real estate, private loans, or private companies may expand the choices available to an eligible business owner.",
  ],
  featured: "You've spent years developing the ability to make careful decisions. Discover whether your retirement plan can offer a broader set of investment choices.",
};

export const faqItems = [
  { question: "Can a doctor with a side business open a Self-Directed 401(k)?", answer: "Potentially, yes. A physician who operates a genuine qualifying independent business may be able to establish a one-participant Self-Directed 401(k). Eligibility depends on qualifying compensation, employees, related businesses, and applicable retirement-plan requirements." },
  { question: "Can I have a hospital 403(b) and a Self-Directed 401(k)?", answer: "Yes, that may be possible if you also operate a separate qualifying business. However, the regular employee elective deferral limit generally applies across your relevant 401(k) and 403(b) plans rather than restarting in each account." },
  { question: "Can a physician contribute to two retirement plans?", answer: "Potentially. But the contribution rules depend on the plan types, compensation, employers, related-business arrangements, and applicable limits. Having two plans does not automatically double the personal elective deferral limit." },
  { question: "Can my consulting business make an employer contribution if I already max out my hospital 403(b)?", answer: "Potentially, yes. A qualifying separate business may be able to make an employer contribution under applicable rules even when the physician has used the ordinary personal employee elective deferral limit. The actual amount requires individual calculation and related-employer analysis." },
  { question: "Does expert witness income qualify for a Solo 401(k)?", answer: "It may qualify when earned through a genuine self-employed trade or business. The actual activity, compensation, business status, and plan requirements matter. Receiving a 1099 form alone is not sufficient proof." },
  { question: "Can medical writing or speaking income qualify for a Self-Directed 401(k)?", answer: "Potentially. Legitimate independent professional services may produce qualifying business earnings, but employment income, royalties, investment income, and business compensation may be treated differently depending on the facts." },
  { question: "Do I need an LLC to open a Self-Directed 401(k)?", answer: "Not necessarily. A qualifying sole proprietor may be able to establish a one-participant 401(k) without forming an LLC. The actual business and tax structure matter." },
  { question: "Can I have a Self-Directed 401(k) if I only earn W-2 wages as a physician?", answer: "A physician who only receives W-2 wages and does not operate a separate qualifying business generally cannot establish an owner-only 401(k) based solely on those employee wages. The actual business circumstances determine eligibility." },
  { question: "Can a physician who owns a medical practice with employees use a Solo 401(k)?", answer: "A medical practice with employees may be able to sponsor a retirement plan with self-directed features, but an owner-only plan cannot simply exclude employees who must be covered under applicable rules." },
  { question: "Do multiple medical businesses affect Self-Directed 401(k) eligibility?", answer: "They can. Controlled-group and affiliated-service-group rules may require related businesses and their employees to be considered together for retirement-plan purposes." },
  { question: "Can my Self-Directed 401(k) purchase a medical office building?", answer: "Some Self-Directed 401(k) plans may permit qualifying commercial property investments, including medical office buildings. The tenant relationships, prohibited-transaction restrictions, ownership, financing, plan provisions, and applicable healthcare laws must be evaluated." },
  { question: "Can my Self-Directed 401(k) buy a building and lease it to my own medical practice?", answer: "Leasing retirement-plan property to the owner's related medical business generally raises prohibited-transaction concerns. Charging fair-market rent does not automatically make the arrangement permissible." },
  { question: "Can my Self-Directed 401(k) invest in an imaging center?", answer: "Certain private healthcare investments may be possible, but investments involving physicians, patient referrals, and healthcare services can require review under retirement-plan rules, the Stark Law, the Anti-Kickback Statute, and applicable state laws. No universal answer applies." },
  { question: "Can a physician use a Self-Directed 401(k) to invest in a medical device startup?", answer: "Some plans may permit qualifying private company investments. However, ownership relationships, compensation arrangements, product use, referrals, valuation, tax treatment, and potential conflicts of interest must be reviewed." },
  { question: "Can my retirement plan lend money to my own medical practice?", answer: "A direct loan from the retirement plan to the physician's own medical business generally raises prohibited related-party lending issues. A qualifying participant loan, where available, is governed by different rules." },
  { question: "Can my Self-Directed 401(k) own real estate outside healthcare?", answer: "Potentially, yes. Some plans may permit qualifying residential, commercial, or other investment property unrelated to the physician's medical career." },
  { question: "Can my retirement plan make private real estate loans?", answer: "Certain properly structured private loans to unrelated borrowers may be permissible. The borrower, collateral, repayment terms, applicable laws, plan provisions, and risks must be evaluated." },
  { question: "Are private company investments in a Self-Directed 401(k) always tax-free?", answer: "No. Certain investments, including some interests in active businesses operated through partnerships or pass-through entities, may generate unrelated business taxable income." },
  { question: "Can I roll an old 401(k) into a Self-Directed 401(k)?", answer: "An eligible distribution from a former employer's retirement plan may be rolled into a qualifying Self-Directed 401(k) if the receiving plan accepts that type of rollover. The applicable source-account and tax rules must be considered." },
  { question: "Can I roll an old 403(b) into a Self-Directed 401(k)?", answer: "Certain eligible 403(b) distributions may be rolled into a qualified plan that accepts them. Distribution eligibility, the type of funds, and receiving-plan provisions determine whether the transaction is possible." },
  { question: "Is a Self-Directed 401(k) better than a hospital 403(b)?", answer: "Not automatically. Each arrangement has different characteristics, investment choices, costs, limitations, and responsibilities. A Self-Directed 401(k) may provide additional flexibility for qualifying business owners, but alternative investments can involve greater complexity and risk." },
];

export const references = [
  { title: "IRS: One-Participant 401(k) Plans", description: "Eligibility, employee and employer contributions, and shared individual elective deferral limits.", href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans" },
  { title: "IRS: 401(k) And Profit-Sharing Contribution Limits", description: "Annual contribution limits and multiple-plan coordination.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" },
  { title: "IRS: Self-Employed Contribution Calculations", description: "Business profit versus qualifying retirement-plan compensation.", href: "https://www.irs.gov/retirement-plans/self-employed-individuals-calculating-your-own-retirement-plan-contribution-and-deduction" },
  { title: "IRS: Prohibited Transactions", description: "Related-party property transfers, leasing, lending, and services.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Publication 598", description: "Unrelated business taxable income and partnership or pass-through income.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Publication 560", description: "Small-business retirement-plan requirements.", href: "https://www.irs.gov/publications/p560" },
  { title: "IRS: Retirement-Plan Rollovers", description: "Rollover eligibility and receiving-plan requirements.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "CMS: Physician Self-Referral (Stark Law)", description: "Federal physician self-referral regulations and exceptions.", href: "https://www.cms.gov/medicare/regulations-guidance/physician-self-referral" },
  { title: "OIG: Fraud & Abuse Laws", description: "The Anti-Kickback Statute and related healthcare fraud-and-abuse laws.", href: "https://oig.hhs.gov/compliance/physician-education/fraud-abuse-laws/" },
  { title: "26 U.S.C. § 414", description: "Controlled-group and affiliated-service-group employer aggregation rules.", href: "https://uscode.house.gov/us/usc/119-124/t26/s414/" },
];

export const finalConversion = {
  heading: ["Your Medical Expertise Opened Professional Doors.", "Explore What Your Side Business Might Open For Retirement."],
  description:
    "If your independent business qualifies, a Self-Directed 401(k) may give you access to retirement investment possibilities outside your existing employer's retirement menu — certain real estate investments, private loans, qualifying private business interests, and other permitted assets. Your employee contribution limits still apply, your business must meet the retirement-plan requirements, your retirement investments must remain separate from your personal medical practice, and healthcare-specific laws can create additional investment considerations. But understanding the opportunity is worth exploring.",
  signature: "You've invested years in becoming an expert. Now discover whether your independent business could help you establish a different kind of retirement investment plan.",
};
