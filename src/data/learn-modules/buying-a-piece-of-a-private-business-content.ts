export const hero = {
  eyebrow: "BUYING A PIECE OF A PRIVATE BUSINESS",
  title: ["What If Your IRA Could Own", "10% of a Business You", "Didn't Start?"],
  goldLine: 2,
  description:
    "A real operating company. Employees. Customers. Revenue. Discover how a retirement account might own a qualifying minority interest in an established private business.",
  whoItsFor:
    "For IRA owners curious about private equity, company ownership, valuations, dilution, and what a minority interest actually entitles an investor to.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const businessVsInvestor = {
  eyebrow: "THE BIG REVELATION",
  heading: ["You Don't Have to Start a Business", "to Potentially Own Part of One."],
  goldLine: 1,
  paragraphs: [
    "When most people imagine business ownership, they picture starting a company — finding customers, hiring employees, buying equipment, and building something from nothing. But ownership can take another form: an existing company may sell part of itself to an outside investor in exchange for money the business can use.",
    "An appropriate Self-Directed IRA may be able to acquire certain qualifying interests. The company keeps operating, the employees keep working, and the owners and managers keep making decisions according to the agreement — while the IRA participates purely as an investor.",
    "Being an investor in a company is different from being the person who operates it.",
  ],
  featured: "The IRA Could Own a Financial Interest in an Operating Business Without Becoming Its Manager.",
};

export const ameliaStory = {
  eyebrow: "MEET AMELIA",
  heading: ["Amelia Has $450,000 in Her IRA.", "She's Never Invested in a Private Company."],
  stories: [
    {
      label: "THE INVESTOR",
      headline: "A Technology Project Manager, 47, Exploring Minority Ownership for the First Time",
      scenario:
        "Amelia has invested in conventional retirement funds for years and understands that publicly traded companies can have shareholders — but she has never considered owning part of a private business. She has $450,000 in a traditional IRA and, for this illustration, an appropriate Self-Directed IRA arrangement whose custodian supports qualifying private LLC membership interests. No Roth conversion occurs.",
      realization:
        "What would $100,000 buy? Would her IRA receive part of the company's sales? Could she help manage the business? What if the company grew — and what if it failed? Those are the questions this module explores.",
      risk:
        "Illustrative hypothetical example. The company and its owners are assumed to have no prohibited relationship with Amelia, and the fictional offering is assumed to satisfy applicable securities eligibility requirements for this illustration only.",
    },
  ],
};

export const bluecrestProfile = {
  eyebrow: "MEET BLUECREST FACILITY SERVICES",
  heading: ["An Established Business Wants", "$100,000 to Expand."],
  intro:
    "A fictional commercial facilities maintenance company used to illustrate how minority private-business ownership might work inside a Self-Directed IRA.",
  figures: [
    { label: "Company", value: "Bluecrest Facility Services LLC" },
    { label: "Business", value: "Commercial Facilities Maintenance & Equipment Services" },
    { label: "Operating History", value: "8 Years" },
    { label: "Employees", value: "22" },
    { label: "Federal Tax Classification", value: "LLC Taxed as a Partnership" },
    { label: "Reason for Raising Capital", value: "Equipment, Working Capital & Expansion" },
  ],
  disclaimer:
    "Bluecrest Facility Services LLC is entirely fictional. No actual company is being offered for investment, and the figures are hypothetical educational illustrations.",
};

export const preMoneyValuation = {
  eyebrow: "THE $900,000 COMPANY VALUATION",
  heading: ["What If the Business Is Valued at", "$900,000 Before New Money Comes In?"],
  intro:
    "The pre-money valuation describes the agreed value of the company's equity immediately before new investment arrives. Once Amelia's IRA contributes $100,000 for newly issued ownership units, the post-money value becomes $1,000,000.",
  figures: [
    { label: "Pre-Money Equity Valuation", value: "$900,000" },
    { label: "New IRA Investment", value: "$100,000" },
    { label: "Post-Money Equity Valuation", value: "$1,000,000" },
    { label: "IRA Ownership Interest", value: "10%" },
  ],
  disclaimer:
    "A negotiated valuation is not a guaranteed realizable value — it is not an appraisal confirming what the company could be sold for. Business liabilities, assets, financial history, customer concentration, and contractual rights all affect actual value.",
};

export const newCapitalVsSecondaryPurchase = {
  eyebrow: "WHERE DOES THE $100,000 GO?",
  heading: ["Is the IRA Paying the Existing Owner,", "or Funding the Company?"],
  leftLabel: "New Investment Into the Company",
  rightLabel: "Purchase of an Existing Owner's Interest",
  rows: [
    { left: "The company issues new ownership interests.", right: "The investor buys an interest from someone who already owns it." },
    { left: "Investment proceeds go to the business.", right: "The purchase price generally goes to the selling owner." },
    { left: "The business may use the money for legitimate company purposes.", right: "The company may not receive any new capital at all." },
  ],
  footnote:
    "Amelia's IRA subscribes for newly issued membership units — the fictional $100,000 goes to Bluecrest Facility Services LLC to support its expansion, not to an existing owner as a purchase price. Both primary issuances and secondary transfers require appropriate legal, tax, securities, and prohibited-transaction analysis.",
};

export const ownershipSlice = {
  eyebrow: "THE OWNERSHIP SLICE",
  heading: ["A Company Is a Whole Business.", "An Ownership Interest Is a Defined Piece of It."],
  intro:
    "Four chapters, one fictional company. Keep an eye on what changes — and what doesn't — as the IRA's $100,000 investment moves through a full business lifecycle.",
  decisions: [
    {
      key: "the-investment",
      label: "The Investment",
      status: "review" as const,
      statusLabel: "Capital In, Ownership Out",
      action: "The IRA Contributes $100,000 and Receives a 10% Ownership Interest.",
      explanation:
        "Amelia's retirement account invests $100,000 in newly issued ownership units. The money goes to the company — Bluecrest Facility Services LLC now has additional capital for equipment, working capital, and expansion. The IRA receives a minority ownership interest under the agreement; the existing owners retain the majority at 90%. The investment does not make Amelia a company employee, give her management authority, or guarantee any distribution.",
      takeaway: "The IRA Owns the Investment Interest. The Business Owns and Operates Its Assets.",
    },
    {
      key: "the-business",
      label: "The Business",
      status: "review" as const,
      statusLabel: "Revenue In, Cash Retained",
      action: "The Company Earns $2,400,000 in Revenue. The IRA Receives $0.",
      explanation:
        "Bluecrest generates $2,400,000 of annual revenue and pays $2,120,000 of operating expenses — wages, facilities, equipment, insurance, vehicles, and ordinary overhead — for an illustrative operating profit of $280,000. Amelia's IRA does not automatically receive 10% of the revenue, and it does not automatically receive $28,000 because of the reported profit. In this fictional year, the company retains all available cash for working capital and future needs, and declares no distribution.",
      takeaway: "A Company Can Generate Millions in Revenue While Its Investors Receive No Cash.",
    },
    {
      key: "the-new-investor",
      label: "The New Investor",
      status: "review" as const,
      statusLabel: "Diluted From 10% to 8.33%",
      action: "A New Investor Contributes $250,000. The IRA's Ownership Falls to Approximately 8.33%.",
      explanation:
        "Bluecrest raises additional capital at a new pre-money valuation of $1,250,000. A new investor contributes $250,000, bringing the post-money valuation to $1,500,000 and the new investor's share to about 16.67%. Amelia's IRA makes no additional investment, so its 10% interest is diluted to approximately 8.33% — but at the new financing price, that interest implies a value of about $125,000, up from its original $100,000 cost.",
      takeaway: "A Smaller Ownership Percentage Doesn't Automatically Mean a Smaller Dollar Value — But Paper Value Isn't Cash.",
    },
    {
      key: "the-exit",
      label: "The Exit",
      status: "review" as const,
      statusLabel: "Three Possible Results",
      action: "The Company Is Sold. What the IRA Actually Receives Depends on the Final Terms.",
      explanation:
        "Eventually, Bluecrest may be acquired. The buyer's total purchase price is not necessarily the amount distributed to members — debt, transaction expenses, taxes, and other obligations are paid first, and only the residual net equity pool is divided among the company's ordinary equity holders. Amelia's IRA holds one-twelfth of that pool after dilution, with no earlier cash distributions and no additional funding along the way.",
      takeaway: "The IRA Could Gain, Break Even, or Lose Money — the Ownership Percentage Alone Doesn't Decide the Outcome.",
    },
  ],
  note:
    "Three separate sale outcomes for this same 8.33% interest appear further below — a favorable result, a breakeven result, and a disappointing one.",
};

export const tenPercentDoesNotMeanControl = {
  eyebrow: "WHAT DOES OWNING 10% REALLY MEAN?",
  heading: ["Ten Percent Ownership Doesn't", "Automatically Mean Ten Percent Control."],
  goldLine: 1,
  paragraphs: [
    "Imagine someone owns 10% of a company. Does that mean they can make 10% of the daily decisions? Not necessarily. Can they hire employees, decide when money is distributed, or sell their interest whenever they want? Not automatically — actual rights depend on the governing documents, and may include defined economic participation, limited voting or consent rights, information rights, transfer restrictions, and rights relating to a company sale.",
    "In this module's example, Amelia's IRA receives ordinary minority membership units. The existing owners continue managing the business, and the IRA has no day-to-day management authority — its economic rights follow the fictional equal-class ownership assumptions.",
  ],
  featured: "A Percentage of Ownership Is Not a Complete Description of the Investor's Rights.",
};

export const ubitTaxSurprise = {
  eyebrow: "THE MOST IMPORTANT TAX SURPRISE",
  heading: ["What If the IRA Receives No Money", "but Still Has a Tax Obligation?"],
  goldLine: 1,
  paragraphs: [
    "Most people think of an IRA as a retirement account with favorable tax treatment. But a private business operated through an LLC taxed as a partnership may produce income treated as unrelated business taxable income — even when the IRA is only a minority investor, and even when the company distributes no cash at all.",
    "Partnerships generally pass certain tax items through to their partners. An IRA investing in a partnership that operates an unrelated trade or business may have to consider its allocated share of taxable income, whether or not that income was distributed — and the tax calculation is not simply the investor's percentage multiplied by the company's accounting profit. Form 990-T may be required when applicable filing requirements are met, and the IRA may need sufficient cash on hand to satisfy any tax obligation.",
  ],
  featured: "A Business Can Keep Its Cash While the IRA May Still Owe Tax on Certain Allocated Income.",
};

export const entityTypesAndK1 = {
  eyebrow: "WHY LEGAL STRUCTURE MATTERS",
  heading: ["LLC, C Corporation, or S Corporation —", "Why Does It Change the Tax Story?"],
  goldLine: 1,
  paragraphs: [
    "An LLC taxed as a partnership can allocate unrelated business taxable income to an IRA member if it operates an active business. A C corporation generally pays corporate income tax on its own profits, and dividends paid to an IRA holding qualifying stock are generally excluded from unrelated business taxable income under the ordinary investment-income exclusion — but corporate-level taxation can reduce available profits, and distributions still aren't guaranteed. Ordinary traditional and Roth IRAs generally are not eligible S corporation shareholders, apart from a narrow historical exception involving certain bank or depository-institution stock.",
    "Bluecrest Facility Services LLC is treated as a partnership for federal tax purposes — its potential UBIT issue is a deliberate part of this module's education. Partnership-taxed entities may also provide Schedule K-1 information to their owners, reporting allocated tax items. A K-1 is not a check — it isn't a bank deposit, and it doesn't automatically mean cash was distributed.",
  ],
  featured: "Tax Information and Money Actually Paid to an Investor Are Not the Same Thing.",
};

export const dilutionProtection = {
  eyebrow: "WHAT IF THE COMPANY RAISES MORE MONEY?",
  heading: ["Can an Investor Protect Against", "Dilution?"],
  goldLine: 1,
  paragraphs: [
    "Some private investment agreements give investors rights to participate in future financing rounds — certain preemptive or participation rights. But having the right to purchase additional units is not the same as being required to purchase them, and doing so requires additional capital the IRA may not have available.",
    "In this module's example, Amelia's IRA does not make an additional investment, so its economic ownership falls from 10% to approximately 8.33%. The right to participate in future financing is determined by the investment documents, not automatically by owning the original interest — and IRA contribution and transaction rules remain relevant to any additional funding.",
  ],
};

export const businessRisksAndCustomerConcentration = {
  eyebrow: "WHAT A PRIVATE COMPANY MUST KEEP DOING",
  heading: ["The Business Must Keep Serving", "Customers, Paying Expenses, and Competing."],
  goldLine: 1,
  paragraphs: [
    "An operating company may be exciting because it represents a real business, but operating companies face real challenges. Customers can leave, expenses can increase, employees can depart, equipment can fail, and competitors can lower prices. The fact that a company has operated for years doesn't guarantee future success.",
    "Customer concentration can make this especially acute. Bluecrest reports $2,400,000 of annual revenue, but suppose one customer represents 40% of it — that's $960,000. If that customer leaves, the company may need to replace substantial business activity; some expenses may remain while others fall. This concentration figure is a separate stress illustration, not part of the primary year-one figures or exit outcomes, and revenue should never be mistaken for profit.",
  ],
  featured: "The Quality and Stability of a Company's Revenue Can Matter More Than How Impressive the Total Sales Number Sounds.",
};

export const investorIsNotOperator = {
  eyebrow: "THE BUSINESS OWNER IS NOT THE INVESTOR",
  heading: ["Amelia's IRA Isn't Automatically Allowed", "to Work for the Company."],
  goldLine: 1,
  paragraphs: [
    "A person who starts a company may work there, receive wages, make decisions, and own the business. But an IRA owning a private business interest does not automatically give the account owner those same rights — the investment must comply with prohibited-transaction rules, and personal employment, compensation, management services, and other involvement can create serious problems depending on the relationships and activities.",
    "In this module's arrangement, Amelia does not work for Bluecrest Facility Services LLC, does not receive wages from it, does not personally guarantee its obligations, and does not receive any special personal benefit. Not every voting decision or ordinary investment oversight action is automatically prohibited, but the nature of the activity and the relationships involved can affect the legal analysis.",
  ],
  featured: "The IRA May Be Able to Own a Passive Investment Interest Without Its Owner Personally Working in the Business.",
};

export const relatedPartyTrap = {
  eyebrow: "THE RELATED-PARTY TRAP",
  heading: ["Your IRA Can't Simply Buy a Piece", "of Your Own Business."],
  goldLine: 1,
  paragraphs: [
    "An investor might learn about private business ownership and immediately think: what if I have my IRA invest in my own company? That's where serious prohibited-transaction concerns arise. An IRA generally cannot be used for transactions involving prohibited personal benefits or disqualified persons, and using an LLC or corporation does not automatically eliminate those restrictions — purchasing an interest from the owner personally, investing in the owner's controlled business, or funding a disqualified spouse or family member's company are all common concerns.",
    "Knowing the business owner doesn't automatically make an investment permissible or prohibited either. Friendship alone does not necessarily make someone a disqualified person, but other facts may create problems — a side payment, a prohibited personal benefit, a disqualified person owning or controlling the business, or an indirect arrangement designed to avoid the rules. Bluecrest Facility Services LLC is assumed to be completely unrelated to Amelia, with no prohibited personal benefits.",
  ],
  featured: "Private Business Investment Flexibility Does Not Eliminate IRA Self-Dealing Restrictions.",
};

export const additionalCapitalAndCompanyCash = {
  eyebrow: "WHAT ELSE COULD THE IRA OWE?",
  heading: ["The First $100,000 Might Not Be the", "Last Money the Business Wants."],
  goldLine: 1,
  paragraphs: [
    "Private companies sometimes raise additional capital — some issue new ownership units, some borrow money, and some request additional capital from existing investors under the governing agreements. A new capital round may be optional, or an agreement may include an enforceable additional funding commitment; the consequences of declining depend on the documents. In this module, Amelia's IRA does not contribute to the second financing round and is not assumed to have any capital-call obligation.",
    "Owning part of a company also doesn't mean owning part of every dollar in its bank account. A company may have cash, but it may also owe wages, supplier bills, taxes, and loan payments — the cash in the business account is not automatically available to its equity owners. A business bank balance isn't the same as cash an IRA investor can personally or immediately claim.",
  ],
};

export const ownershipClassesAndPriorities = {
  eyebrow: "OWNERSHIP CLASSES AND PAYMENT PRIORITIES",
  heading: ["Not Every Owner Is Necessarily", "Entitled to the Same Financial Rights."],
  goldLine: 1,
  paragraphs: [
    "Some businesses have one simple class of ownership interests; others issue different classes with different rights. One investor might have a preferred payment priority while another has ordinary units, and the legal documents may define who is paid first, how distributions are calculated, who has voting rights, and what happens if the company is sold.",
    "Bluecrest Facility Services LLC uses equal-class economic ownership rights in this module's simplified examples — no preferred liquidation priority or special investor return is modeled, and all company debts, transaction expenses, and relevant obligations are assumed satisfied before the illustrative exit proceeds are allocated.",
  ],
  featured: "The Ownership Agreement Matters as Much as the Ownership Percentage.",
};

export const illiquidityAndNoSellButton = {
  eyebrow: "THE COMPANY THAT NEVER SELLS",
  heading: ["Private Business Ownership Doesn't", "Usually Come With a Sell Button."],
  goldLine: 1,
  paragraphs: [
    "A private company may keep operating for many years without paying distributions, selling to another business, or repurchasing investors' units — and there may be no readily available market where the IRA can sell its interest. That's a major difference from many publicly traded stocks. The ownership agreement may restrict transfers, other investors may have rights of first refusal, the company may need to approve a buyer, and securities laws may limit resale.",
    "To sell a private interest, an investor may need to find an eligible buyer willing to accept transfer approval requirements, restricted-securities rules, and a price that may differ substantially from the company's last reported valuation. An IRA owner's desire to withdraw retirement money does not guarantee that a private business investment can be sold quickly.",
  ],
  featured: "A Business Can Be Valuable Without Giving Its Minority Owners an Easy Way to Get Their Money Back.",
};

export const threeExitOutcomes = {
  eyebrow: "THE COMPANY SALE",
  heading: ["What If Someone Eventually Buys", "the Entire Company?"],
  intro:
    "Three independent alternatives, each built on the same diluted 8.33% (one-twelfth) ownership interest, $100,000 original cost, and no interim distributions.",
  scenarios: [
    {
      key: "successful",
      label: "Successful Sale",
      status: "Favorable Exit",
      description:
        "The company is acquired with $2,400,000 of net equity proceeds available to all modeled members after company-level obligations. Amelia's IRA holds one-twelfth of that pool.",
      figures: [
        { label: "Net Company Equity Proceeds", value: "$2,400,000" },
        { label: "IRA Ownership After Dilution", value: "8.33%" },
        { label: "Cash Received by IRA", value: "$200,000" },
        { label: "Gross Investment Gain / Loss", value: "+$100,000" },
        { label: "Ending IRA Cash", value: "$550,000" },
      ],
      statement: "The IRA Could Benefit if the Business Is Sold Successfully, but Proceeds Depend on the Actual Sale Terms.",
    },
    {
      key: "modest",
      label: "Modest Sale",
      status: "Original Investment Recovered",
      description:
        "The company sells for a net equity pool of $1,200,000 — enough for the IRA's one-twelfth share to return almost exactly the original $100,000 investment.",
      figures: [
        { label: "Net Company Equity Proceeds", value: "$1,200,000" },
        { label: "IRA Ownership After Dilution", value: "8.33%" },
        { label: "Cash Received by IRA", value: "$100,000" },
        { label: "Gross Investment Gain / Loss", value: "$0" },
        { label: "Ending IRA Cash", value: "$450,000" },
      ],
      statement: "Getting the Original Investment Back Is Not the Same as Earning a Meaningful Return.",
    },
    {
      key: "disappointing",
      label: "Disappointing Sale",
      status: "Substantial Loss",
      description:
        "The company struggles and sells for a net equity pool of only $300,000. A worse outcome is possible — the company could fail completely, and equity owners could recover nothing.",
      figures: [
        { label: "Net Company Equity Proceeds", value: "$300,000" },
        { label: "IRA Ownership After Dilution", value: "8.33%" },
        { label: "Cash Received by IRA", value: "$25,000" },
        { label: "Gross Investment Gain / Loss", value: "-$75,000" },
        { label: "Ending IRA Cash", value: "$375,000" },
      ],
      statement: "A Business Can Have Customers, Employees, and Years of History While Its Investors Still Lose Most of Their Money.",
    },
  ],
  tableColumns: [
    { label: "Cash Received by IRA", index: 2 },
    { label: "Ending IRA Cash", index: 4 },
  ],
  comparisonNote:
    "These three outcomes are separate alternatives, not successive possibilities for the same company. The ownership interest is one-twelfth in all three, and no IRA-level taxes or separate custodial fees are modeled. The company's historical operating results do not guarantee any particular sale price.",
  conclusion: "The Same $100,000 Investment Could Have Very Different Results Depending on the Business and Its Eventual Sale.",
};

export const futureSaleNotGuaranteed = {
  eyebrow: "WHY OWNERSHIP DOESN'T GUARANTEE A BUYOUT",
  heading: ["What If Nobody Ever Buys the", "Business — or Prices It?"],
  goldLine: 1,
  paragraphs: [
    "A business may operate for decades without being sold — the owners may want to keep running it, potential buyers may offer too little, or financial performance may simply weaken. An IRA holding a minority interest cannot assume there will eventually be a buyer at a profitable price; continued ownership, occasional distributions, no distributions, a negotiated minority sale, or business failure are all possible outcomes.",
    "Private companies also don't have a market price that updates throughout the trading day the way public companies do. A company's value may be estimated from financial performance, assets, debts, comparable businesses, and expected future results — but a later buyer may pay substantially less than an earlier financing round implied, and that financing round may involve special rights that differ from the IRA's ownership class. The fictional $1.25 million pre-money valuation used in the second round does not guarantee Amelia's IRA could sell its interest for $125,000.",
  ],
  featured: "An Estimated Private Company Value Is Not the Same as Cash an Investor Can Actually Receive.",
};

export const minorityControlAndSale = {
  eyebrow: "CONTROL AND LIQUIDITY",
  heading: ["Owning 10% Doesn't Automatically Mean", "Having a Seat at Every Decision."],
  goldLine: 1,
  paragraphs: [
    "Some owners run the business; others are passive investors. The governing agreements determine who can hire senior managers, take on debt, issue new ownership units, declare distributions, or sell the company. In this module, existing Bluecrest owners manage the company while Amelia's IRA holds an ordinary minority economic interest with no control over operations.",
    "A minority interest can also be harder to sell than its simple percentage suggests. A potential buyer may prefer owning the whole company, or enough of it to control decisions — limited voting rights, limited distributions, transfer restrictions, and limited information access can all affect what an unrelated buyer is willing to pay. Ten percent of an estimated company value does not necessarily equal the market price of a minority interest.",
  ],
};

export const managementCompensationAndDebt = {
  eyebrow: "WHAT MINORITY INVESTORS SHOULD WATCH",
  heading: ["Revenue Can Be Spent Long Before", "Anything Reaches Minority Investors."],
  goldLine: 1,
  paragraphs: [
    "Private companies pay their employees and managers, which can include owner-managers who provide legitimate services. But minority investors should understand whether compensation arrangements and related-party transactions are reasonable and properly disclosed — unusually large compensation or related-party payments may reduce the profit or cash available for distributions. Legitimate compensation for real services is not automatically improper; the issue is transparency and economic reasonableness.",
    "Investors also own equity, while lenders have different rights. If a business is sold, its proceeds typically pay transaction expenses, secured lenders, other creditors, and taxes before any residual amount reaches ordinary equity owners. This module's exit scenarios already represent the final net equity pool after those obligations — the same debts and expenses are not subtracted twice.",
  ],
};

export const securitiesAndAccreditedInvestor = {
  eyebrow: "THE PRIVATE SECURITIES QUESTION",
  heading: ["Can Anyone With $100,000 Invest", "in a Private Company?"],
  goldLine: 1,
  paragraphs: [
    "Not necessarily. Some private company ownership interests are securities, and a securities offering generally must be registered or qualify for an available exemption. Different exemptions have different requirements — some permit sales only to accredited investors, while others allow certain nonaccredited investors subject to specific conditions. Being self-directed doesn't automatically make every private company investment legally available; the company must be able to offer it legally, and the investor must satisfy the applicable requirements.",
    "Accredited investor status is often defined by income, net worth, or certain professional qualifications, and the actual standard depends on the investor and the offering. Having a Self-Directed IRA does not automatically make someone accredited, and having $100,000 available does not establish accredited status either — not every offering requires every purchaser to be accredited, but certain offerings require the issuer to take reasonable steps to verify it.",
  ],
  featured: "An Investment May Be Possible Inside a Self-Directed IRA While Still Being Restricted Under Securities Laws.",
};

export const investmentDocuments = {
  eyebrow: "PRIVATE COMPANY INVESTMENT DOCUMENTS",
  heading: ["What Exactly Does the IRA Own?", "The Documents Must Answer That."],
  steps: [
    { number: "01", title: "Operating Agreement", description: "Defines how the LLC is governed and what the members' rights and obligations may be." },
    { number: "02", title: "Subscription Agreement", description: "Describes the acquisition of the ownership interest under the applicable transaction." },
    { number: "03", title: "Capitalization Table", description: "Shows the ownership structure and relevant classes of equity." },
    { number: "04", title: "Financial Statements", description: "Provide information about revenue, costs, assets, liabilities, and operations." },
    { number: "05", title: "Investment Disclosures", description: "May identify risks, ownership restrictions, projections, and important legal terms." },
    { number: "06", title: "Tax Classification Information", description: "Explains how the company is treated for federal tax purposes." },
  ],
  note: "Not every private transaction has identical document requirements — the applicable securities exemption, entity type, jurisdiction, and transaction structure all matter. The business story may be exciting; the legal documents determine what the IRA actually receives.",
};

export const dueDiligenceAndFraudWarning = {
  eyebrow: "BEFORE YOU INVEST",
  heading: ["A Beautiful Presentation Doesn't Prove", "a Company Is Legitimate."],
  goldLine: 1,
  paragraphs: [
    "An investor should want to understand the operating business, not just the owner's story or projected growth: where revenue comes from, whether customers are recurring, how much the company owes, whether it generates real cash, and what happens if a key employee or major customer leaves. A business owner may provide unaudited financial statements, and a legitimate IRA custodian does not necessarily verify them.",
    "Private investment opportunities can be marketed with impressive language — strong projected growth, exclusive access, limited availability, high projected returns — but those claims do not prove legitimacy. Be cautious of guaranteed high returns, pressure to invest immediately, refusal to share meaningful financial information, and claims that a custodian has approved an investment's quality. The SEC warns that self-directed IRA investors may face heightened risks involving fraud, insufficient information, illiquidity, and custodians that do not evaluate the investments they administer.",
  ],
  featured: "The Fact That a Company Can Be Held Inside a Self-Directed IRA Does Not Establish That It Is a Good or Legitimate Investment.",
};

export const establishedVsStartup = {
  eyebrow: "ESTABLISHED BUSINESS, NOT A STARTUP",
  heading: ["This Is an Established Business.", "Not Just an Idea for One."],
  goldLine: 1,
  paragraphs: [
    "Private business investments can involve companies at very different stages. Some are brand-new; others, like Bluecrest, have operated for years with existing revenue, customer contracts, historical financial statements, current management, and known operating expenses. That creates different questions from an early-stage startup — unproven products, limited or no revenue, future financing needs, and high failure risk.",
    "But an established business can still fail, and a startup can sometimes succeed. Neither category guarantees a favorable investment result — an operating business simply provides more financial history to investigate.",
  ],
};

export const researchSheet = {
  eyebrow: "THE PRIVATE COMPANY INVESTOR'S RESEARCH SHEET",
  heading: ["Twenty Questions Before Your IRA", "Buys Part of a Private Business."],
  steps: [
    { number: "01", title: "What Does the Business Actually Do?", description: "Explain the company's products or services in one sentence." },
    { number: "02", title: "How Long Has It Operated?", description: "Verify the company's history." },
    { number: "03", title: "Who Owns the Company?", description: "Understand the current ownership and any related parties." },
    { number: "04", title: "Who Runs It?", description: "Identify the managers and their experience." },
    { number: "05", title: "Why Is It Raising Money?", description: "Understand the use of the investment proceeds." },
    { number: "06", title: "Company or Selling Owner?", description: "Distinguish newly issued equity from an existing owner's sale." },
    { number: "07", title: "How Is the Company Valued?", description: "Understand the evidence supporting the price." },
    { number: "08", title: "What Percentage Will the IRA Own?", description: "Confirm the ownership calculation after the investment." },
    { number: "09", title: "What Rights Come With It?", description: "Understand voting, information, distribution, and transfer rights." },
    { number: "10", title: "What Are Its Actual Sales?", description: "Examine reliable revenue information." },
    { number: "11", title: "Is the Company Profitable?", description: "Understand its expenses and business economics." },
    { number: "12", title: "Does It Generate Available Cash?", description: "Look beyond accounting profit." },
    { number: "13", title: "How Much Does It Owe?", description: "Examine loans, taxes, and other liabilities." },
    { number: "14", title: "How Concentrated Are Its Customers?", description: "Determine whether a few customers dominate revenue." },
    { number: "15", title: "How Do Managers Get Paid?", description: "Review salaries, related-party payments, and conflicts." },
    { number: "16", title: "Could Ownership Be Diluted?", description: "Review future financing and equity issuance rights." },
    { number: "17", title: "Is There an Expected Exit?", description: "Understand the plan without treating it as guaranteed." },
    { number: "18", title: "Can the IRA Sell Its Interest?", description: "Review restrictions, approvals, and liquidity." },
    { number: "19", title: "What Is Its Tax Classification?", description: "Understand the implications for IRA ownership and possible UBIT." },
    { number: "20", title: "Is the Transaction Legally Permissible?", description: "Confirm custodial eligibility, securities compliance, and prohibited-person restrictions." },
  ],
  note: "The most important information about a private business investment is not the ownership percentage. It's the company, the rights, the price, and the risks behind that percentage.",
};

export const fiveMisconceptions = {
  eyebrow: "FIVE MISCONCEPTIONS",
  heading: ["Five Things a 10% Ownership", "Interest Doesn't Automatically Give You."],
  steps: [
    { number: "01", title: "Ten Percent of Revenue", description: "Owning 10% doesn't mean receiving 10% of gross sales." },
    { number: "02", title: "Ten Percent of Management Control", description: "Economic ownership doesn't automatically translate into daily management authority." },
    { number: "03", title: "Guaranteed Distributions", description: "A profitable company may retain its cash." },
    { number: "04", title: "Protection From Dilution", description: "New equity issuances can reduce existing ownership percentages." },
    { number: "05", title: "A Guaranteed Exit", description: "An investor may be unable to sell the interest for years, or ever at an attractive price." },
  ],
  note: "Owning part of a company creates investment rights and risks. It does not automatically create a paycheck, control, or a guaranteed sale.",
};

export const closingReflection = {
  eyebrow: "THE FINAL OWNERSHIP REVEAL",
  heading: ["A Real Business. Real Employees.", "Real Customers. What If Your IRA Owned Part of It?"],
  goldLine: 1,
  paragraphs: [
    "Think about the private companies operating around you — commercial service businesses, manufacturers, distributors, equipment businesses, each with real customers and employees. Some may offer qualifying ownership interests to eligible outside investors, and an appropriate Self-Directed IRA may be able to participate in certain investments.",
    "You might not need to start the company, operate it, or own the entire business. But you do need to understand the ownership percentage, the financial rights, the company valuation, the possibility of dilution, the tax treatment, the restrictions, and the risk of losing money.",
  ],
  featured: "You Don't Have to Build the Business to Imagine Your IRA Owning a Piece of It.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA invest in a private business?", answer: "Potentially, yes. An appropriate Self-Directed IRA may purchase certain qualifying private company ownership interests if the custodian supports the asset and the transaction complies with securities, tax, and prohibited-transaction rules." },
  { question: "Can a Roth IRA buy part of an LLC?", answer: "Potentially. A properly structured Self-Directed Roth IRA may hold certain qualifying LLC membership interests. The LLC's tax classification, operating activity, and legal relationships matter." },
  { question: "Can an IRA own 10% of a company?", answer: "Potentially, if the ownership arrangement is legally permissible. The exact rights depend on the company's governing documents and the investment transaction." },
  { question: "Does owning 10% mean receiving 10% of company revenue?", answer: "No. Revenue belongs to the company. The investor's economic rights depend on the ownership agreements and actual distributions." },
  { question: "Does owning 10% mean controlling 10% of company decisions?", answer: "Not necessarily. Voting rights and management authority depend on the governing documents." },
  { question: "Can an IRA own shares in a private C corporation?", answer: "Potentially. An appropriate IRA may hold certain eligible private corporate shares, subject to applicable securities, custodial, and prohibited-transaction requirements." },
  { question: "Can an IRA own S corporation stock?", answer: "Ordinary traditional and Roth IRAs generally are not eligible S corporation shareholders, apart from a narrow historical exception involving certain bank or depository institution stock." },
  { question: "Can my IRA invest in an LLC taxed as a partnership?", answer: "Potentially. But investing in an active operating business through a partnership-taxed LLC can create unrelated business taxable income." },
  { question: "Can the IRA owe UBIT without receiving cash?", answer: "Potentially, yes. Allocated taxable income from certain partnership activities may create obligations even when cash is not distributed." },
  { question: "What is Form 990-T?", answer: "Form 990-T is used to report certain unrelated business income and related tax obligations when filing requirements apply." },
  { question: "What is a Schedule K-1?", answer: "A Schedule K-1 reports certain tax items allocated to an owner of a partnership-taxed entity. It is not the same as a cash distribution." },
  { question: "Does a private company's profit automatically become my IRA's profit?", answer: "Not in the sense of immediately available cash. Business profit, equity value, distributions, and tax allocations are distinct concepts." },
  { question: "Does my IRA get paid every time the company makes a sale?", answer: "No. Company sales generate business revenue, not automatic investor distributions." },
  { question: "Can a business be profitable and never distribute money?", answer: "Yes. A company may retain profits or cash for operations, growth, debt, reserves, or other purposes under its governing arrangements." },
  { question: "What is pre-money valuation?", answer: "The agreed equity value of a company before a new investment is added." },
  { question: "What is post-money valuation?", answer: "The implied equity value immediately after the new financing, based on the applicable transaction terms." },
  { question: "If the company is worth $900,000 and my IRA invests $100,000, does it own 10%?", answer: "Under a simple new-equity issuance with a $900,000 pre-money valuation and $100,000 investment, the post-money valuation would be $1 million and the new investor could acquire 10%. Actual ownership depends on all equity classes, terms, and outstanding rights." },
  { question: "What is dilution?", answer: "Dilution occurs when additional ownership interests are issued and existing owners represent a smaller percentage of the total." },
  { question: "Does dilution automatically mean I lost money?", answer: "No. A smaller ownership percentage may be associated with a higher or lower dollar value depending on the financing terms, company value, and rights involved." },
  { question: "Can my IRA invest more to prevent dilution?", answer: "Possibly, if the governing documents permit it and the additional IRA investment is legally permissible and financially available." },
  { question: "Can I work for a business owned partly by my IRA?", answer: "Such arrangements can raise prohibited-transaction concerns. The actual role, compensation, ownership, control, and other relationships require qualified legal review." },
  { question: "Can I personally receive a salary from a company my IRA invests in?", answer: "Do not assume so. Personal compensation involving IRA assets and disqualified-person relationships can create serious prohibited-transaction issues." },
  { question: "Can my IRA invest in my own company?", answer: "Investing in a company owned or controlled by the IRA owner can raise serious prohibited-transaction concerns. An LLC structure does not automatically remove them." },
  { question: "Can my IRA buy shares from my spouse?", answer: "Transactions between an IRA and a disqualified spouse can constitute prohibited transactions." },
  { question: "Can my IRA invest in a friend's company?", answer: "Potentially, but the actual relationships, ownership, indirect benefits, and transaction must be evaluated. Friendship alone does not automatically determine eligibility." },
  { question: "Can anyone buy private company ownership interests?", answer: "No. Some offerings have securities eligibility restrictions, including accredited-investor or other requirements." },
  { question: "Does having a Self-Directed IRA automatically make me accredited?", answer: "No. The relevant investor must satisfy applicable securities offering requirements." },
  { question: "Can a private company investment lose all its value?", answer: "Yes. Business failure, financial distress, dilution, liabilities, and other problems can lead to substantial or complete investment losses." },
  { question: "Can I sell my private company interest whenever I want?", answer: "Not necessarily. Private ownership interests may be restricted, difficult to value, and highly illiquid." },
  { question: "Does a private company have a daily stock price?", answer: "Generally not. Private companies may require valuation estimates using financial and market evidence." },
  { question: "Does an increase in company valuation mean the IRA received cash?", answer: "No. An increase in estimated value is not the same as an actual cash distribution or completed sale." },
  { question: "What happens if the company is bought by another business?", answer: "The investor's financial rights depend on the transaction, the company's obligations, and the governing documents. A sale may produce a gain, loss, or no proceeds for some equity holders." },
  { question: "Does a company buyout guarantee that investors profit?", answer: "No. Debt, expenses, senior rights, valuation changes, and other obligations can reduce or eliminate equity proceeds." },
  { question: "Who receives the money when the IRA sells its company interest?", answer: "Legitimate investment proceeds belong to the appropriate IRA custodial arrangement. Personal distributions follow separate rules." },
  { question: "Does a Self-Directed IRA custodian investigate the business?", answer: "Not necessarily. A legitimate custodian may not verify the company's finances, valuation, investment quality, or legitimacy." },
  { question: "Is investing in an established business safer than investing in a startup?", answer: "Not automatically. An established company may have financial history to review, but it can still fail or produce poor investment results." },
  { question: "Is private business ownership better than investing in stocks?", answer: "Not automatically. Private equity and publicly traded securities have different risks, liquidity, disclosures, governance, costs, and possible outcomes." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports general IRA investment flexibility and the ability of custodians to restrict supported assets.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Supports investment restrictions and prohibited-transaction principles.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Supports the discussion of self-dealing, disqualified persons, personal services, and improper benefits.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 590-A", description: "Provides IRA transfer, contribution, and account information.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Supports distribution, prohibited-transaction, and unrelated business income considerations.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598", description: "Provides detailed guidance regarding unrelated business taxable income, partnership operating activity, and ordinary investment income exclusions.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Instructions for Form 990-T", description: "Explains filing requirements and reporting for unrelated business income, including partnership allocations whether or not distributed.", href: "https://www.irs.gov/instructions/i990t" },
  { title: "IRS: Partner's Instructions for Schedule K-1, Form 1065", description: "Provides information about partnership tax reporting.", href: "https://www.irs.gov/instructions/i1065sk1" },
  { title: "IRS: S Corporations", description: "Provides general requirements regarding S corporations and eligible shareholders.", href: "https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations" },
  { title: "Federal Regulation: S Corporation Shareholder Eligibility", description: "Provides detailed federal rules, including the general ineligibility of ordinary IRAs as S corporation shareholders and the narrow historical exception.", href: "https://www.ecfr.gov/current/title-26/section-1.1361-1" },
  { title: "SEC Investor.gov: Private Placements Under Regulation D", description: "Supports private investment restrictions, illiquidity, possible total loss, limited information, and fraud considerations.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/private-placements-under-regulation-d-updated-investor-bulletin" },
  { title: "SEC: Rule 506(b) Private Placements", description: "Explains relevant offering restrictions and investor requirements.", href: "https://www.sec.gov/resources-small-businesses/exempt-offerings/private-placements-rule-506b" },
  { title: "SEC: Rule 506(c) General Solicitation", description: "Explains accredited-investor requirements and reasonable verification for applicable private offerings.", href: "https://www.sec.gov/resources-small-businesses/exempt-offerings/general-solicitation-rule-506c" },
  { title: "SEC: Assessing Accredited Investors Under Regulation D", description: "Explains the differing investor qualification and verification obligations.", href: "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/assessing-accredited-investors-under-regulation-d" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Explains custodial limitations, investment fraud, lack of information, valuation uncertainty, fees, and illiquidity.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "IRS: Form 5498 Asset Information Reporting Codes", description: "Provides relevant reporting categories for nonpublicly traded partnership and LLC interests.", href: "https://www.irs.gov/retirement-plans/form-5498-asset-information-reporting-codes-and-common-errors" },
];

export const finalConversion = {
  heading: ["A Real Business. Real Employees.", "What If Your IRA Owned a Piece of It?"],
  description:
    "Think about the private companies operating around you — established businesses with real customers and employees. Discover what a retirement account might be able to own.",
  signature: "Educational Illustration — Not Investment, Legal, Or Tax Advice",
};
