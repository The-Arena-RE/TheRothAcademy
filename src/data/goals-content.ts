export const goalsHero = {
  eyebrow: "The World Beyond Conventional Retirement Investing",
  title: ["What If Your Retirement", "Could Own More?"],
  goldLine: 1,
  description:
    "A rental property. A piece of land. A private business investment. A loan that earns interest for your retirement account. Most people associate retirement investing with stocks, bonds, and mutual funds. But depending on the plan structure, provider, and applicable law, self-directed IRAs and 401(k)s may hold an extraordinary range of alternative investments.",
  whoItsFor: "The opportunities you've spent your life learning about might also be opportunities your retirement account can explore.",
  primaryCta: { label: "Explore the Possibilities", href: "#gallery" },
  secondaryCta: { label: "Find My Retirement Plan", href: "/plans" },
};

export const elephantInTheRoom = {
  eyebrow: "The Elephant In The Room",
  heading: ["The Stock Market Is Not", "The Entire Investment Universe."],
  goldLine: 1,
  paragraphs: [
    "Walk into a conventional brokerage firm, and you'll generally be introduced to investments the institution makes available through its platform: stocks, bonds, funds, and other conventional financial products. Many of those investments are valuable, and traditional markets can play an important role in retirement investing.",
    "But a financial institution's available investment menu is not necessarily the same thing as the full range of investments permitted under retirement law. Real estate exists. Privately negotiated loans exist. Privately held businesses exist. And certain retirement arrangements may invest in them.",
  ],
  featured: "The question is not whether these opportunities exist. The question is whether your retirement arrangement allows you to pursue them, and whether they are appropriate for you.",
  note: "Your investment choices shouldn't be defined solely by a brokerage menu.",
};

export const explorerNav = {
  eyebrow: "What Interests You Most?",
  heading: ["Every Investor", "Approaches Opportunities Differently."],
  intro:
    "Some understand property. Others understand lending, businesses, or traditional financial markets. Jump to the possibilities that interest you and discover which retirement structures may support them.",
};

export type InvestmentPossibility = {
  id: string;
  number: string;
  label: string;
  image?: string;
  description: string;
  example: string;
  riskNote: string;
  link401k?: { label: string; href: string };
  linkIra?: { label: string; href: string };
};

export const investmentPossibilities: InvestmentPossibility[] = [
  {
    id: "real-estate",
    number: "01",
    label: "Real Estate",
    image: "/investments/real-estate.jpg",
    description:
      "Imagine purchasing a rental property through a qualifying retirement account. The property generates rental income that flows back into the account, and the account pays the property's expenses. An investment property is no longer merely something an investor might purchase personally. It may also be something a retirement account can own.",
    example:
      "For example, a plan might purchase a rental property with plan funds, with rental income and expenses flowing back through the account.",
    riskNote:
      "Retirement-owned real estate is not for personal use by the account owner or other disqualified persons. Investment income, expenses, financing, and prohibited transactions must be handled appropriately.",
    link401k: { label: "401(k) Real Estate Investing", href: "/services/self-directed-401k/real-estate" },
    linkIra: { label: "IRA Real Estate Investing", href: "/services/self-directed-ira/real-estate" },
  },
  {
    id: "land",
    number: "02",
    label: "Land And Acreage",
    description:
      "An undeveloped parcel. An investment lot. A piece of acreage in a growing market. For an experienced land investor, opportunities may exist where other people see nothing more than an empty field. A qualifying self-directed retirement arrangement may purchase and hold land as an investment, and depending on the structure and applicable rules, the account may later sell the property or pursue another permissible strategy.",
    example: "The land belongs to the retirement arrangement, not to the investor personally.",
    riskNote:
      "The account owner may not personally use, occupy, or improve retirement-owned land outside permitted arrangements.",
    link401k: { label: "401(k) Land Investing", href: "/services/self-directed-401k/land" },
    linkIra: { label: "IRA Real Estate Investing", href: "/services/self-directed-ira/real-estate" },
  },
  {
    id: "private-lending",
    number: "03",
    label: "Private Lending",
    image: "/investments/private-lending.jpg",
    description:
      "Most people think about borrowing money. But what about providing it? An appropriately structured retirement account may make a qualifying private loan to an eligible unrelated borrower. The account provides capital under a documented lending arrangement, the borrower makes payments under the note, and interest received belongs to the retirement account.",
    example: "Instead of borrowing the money, your retirement account may be the party providing it.",
    riskNote:
      "Private loans can default, collateral can lose value, and lending to disqualified persons may constitute a prohibited transaction. A retirement account making a third-party investment loan is different from a participant borrowing personally from a 401(k).",
    link401k: { label: "401(k) Private Lending", href: "/services/self-directed-401k/private-lending" },
    linkIra: { label: "IRA Private Lending", href: "/services/self-directed-ira/private-lending" },
  },
  {
    id: "private-business",
    number: "04",
    label: "Private Businesses And Equity",
    description:
      "Across America, privately held companies operate in industries ranging from manufacturing and technology to transportation and professional services. What many do not realize is that certain privately held business interests may be eligible investments for appropriately structured retirement accounts, providing exposure to companies and opportunities outside public stock exchanges.",
    example: "The investment world does not end where the stock exchange closes.",
    riskNote:
      "Closely held business investments can create substantial prohibited-transaction, valuation, liquidity, fiduciary, and unrelated business income tax issues. Employment, ownership, compensation, and related-party relationships can be particularly important.",
    link401k: { label: "401(k) Private Business Investments", href: "/services/self-directed-401k/private-business-investments" },
    linkIra: { label: "IRA Private Equity", href: "/services/self-directed-ira/private-equity" },
  },
  {
    id: "precious-metals",
    number: "05",
    label: "Precious Metals",
    image: "/investments/precious-metals.jpg",
    description:
      "Gold and certain other precious metals have a long history as investment assets. Under specific legal requirements, retirement arrangements may invest in certain qualifying coins or bullion. For investors interested in diversification beyond conventional securities, permitted precious-metal investments may offer another asset category to explore.",
    example: "A different kind of asset. A different kind of possibility.",
    riskNote:
      "Not every coin or metal qualifies. The rules governing collectibles, bullion, and physical possession are strict, especially for IRAs. IRA-owned bullion generally cannot be stored at home.",
    link401k: { label: "401(k) Precious Metals", href: "/services/self-directed-401k/precious-metals" },
    linkIra: { label: "IRA Precious Metals", href: "/services/self-directed-ira/precious-metals" },
  },
  {
    id: "digital-assets",
    number: "06",
    label: "Digital Assets",
    image: "/investments/digital-assets.jpg",
    description:
      "Digital assets have introduced new financial technologies and investment markets. Certain retirement arrangements may permit exposure to qualifying digital assets, depending on the plan, provider, custody structure, and applicable rules. For investors who understand the technology and its risks, this may represent another potential category of retirement investing.",
    example: "New technology. New investment questions. Innovation does not eliminate the need for discipline.",
    riskNote:
      "Digital assets can be highly volatile, difficult to value, vulnerable to fraud or theft, and subject to evolving legal and regulatory requirements. Retirement-account tax treatment does not remove these risks.",
    link401k: { label: "401(k) Digital Assets", href: "/services/self-directed-401k/cryptocurrency" },
    linkIra: { label: "IRA Digital Assets", href: "/services/self-directed-ira/cryptocurrency" },
  },
  {
    id: "tax-liens",
    number: "07",
    label: "Tax Liens",
    description:
      "In some jurisdictions, delinquent property-tax obligations may lead to the sale of tax lien certificates or related interests. Certain qualifying retirement accounts may be able to acquire eligible tax lien investments through an appropriate structure. For investors who understand local laws, redemption requirements, property valuation, and collection risks, this can be another category worth studying.",
    example: "An entire investment category many people have never explored.",
    riskNote:
      "Tax lien procedures and investor rights vary substantially by jurisdiction. A tax lien certificate is not necessarily ownership of the underlying property. Returns, redemption, priority, and enforcement are not guaranteed.",
    linkIra: { label: "IRA Tax Lien Investing", href: "/services/self-directed-ira/tax-liens" },
    link401k: { label: "Explore The 401(k) Flagship", href: "/services/self-directed-401k" },
  },
  {
    id: "stocks-bonds",
    number: "08",
    label: "Stocks & Bonds",
    image: "/investments/stocks-bonds.jpg",
    description:
      "Self-direction is not a rejection of traditional investing. Stocks, bonds, funds, and other conventional investments may remain appropriate components of retirement portfolios when supported by the plan and provider. Investors may choose to combine familiar assets with permissible alternative investments, subject to their individual circumstances.",
    example: "The objective is not to replace every investment you already understand. It is to explore a broader universe of possibilities.",
    riskNote: "Diversification does not guarantee protection against losses.",
    link401k: { label: "401(k) Traditional Investments", href: "/services/self-directed-401k/stocks-bonds" },
    linkIra: { label: "Explore The IRA Flagship", href: "/services/self-directed-ira" },
  },
];

export const investmentPossibilitiesFootnote =
  "Investment availability depends on the account, provider, and applicable rules, and asset availability and risks vary with the arrangement. The academy does not recommend or custody investments. All hypothetical examples are illustrations, not customer success stories or return projections.";

export const experienceMatters = {
  eyebrow: "The Big Realization",
  heading: ["You've Spent Years Learning How The World Works.", "What Could That Knowledge Mean For Your Retirement?"],
  goldLine: 1,
  paragraphs: [
    "Think about the experience you've accumulated. Perhaps you've purchased and sold properties. Maybe you've spent your career analyzing businesses. Perhaps you understand lending better than most people understand stocks.",
    "Those experiences may help you evaluate opportunities beyond conventional retirement investments. That doesn't mean every opportunity is appropriate, and expertise in an industry does not eliminate retirement-plan rules, investment losses, or the need for independent judgment. But it raises an interesting possibility.",
  ],
  featured: "Knowledge is valuable. The freedom to evaluate more opportunities can be valuable too.",
};

export const fiveRules = {
  eyebrow: "The Five Rules That Make These Possibilities Real",
  heading: ["Extraordinary Possibilities.", "Real Rules."],
  intro:
    "A self-directed retirement account is still a retirement account. The freedom to consider more investments does not remove the rules designed to govern retirement assets.",
  items: [
    {
      number: "01",
      title: "Retirement Assets Are Not Personal Assets",
      description: "The account owns its investments. An investor cannot simply treat retirement-owned property as their personal property.",
    },
    {
      number: "02",
      title: "Related-Party Transactions Require Special Care",
      description: "Transactions involving disqualified persons can trigger serious consequences under federal law, affecting purchases, sales, loans, services, leases, and personal benefits.",
    },
    {
      number: "03",
      title: "Some Investments Have Additional Tax Consequences",
      description: "Unrelated business income tax and debt-financed income rules may apply in certain situations. Different retirement-plan structures can have materially different treatment.",
    },
    {
      number: "04",
      title: "Investments Must Be Evaluated",
      description: "Private assets can be illiquid, difficult to price, susceptible to fraud, or capable of producing substantial losses.",
    },
    {
      number: "05",
      title: "The Retirement Structure Matters",
      description: "A 401(k) and an IRA have different eligibility, administration, fiduciary, trust, and custodial requirements. Legal permissibility does not establish that every provider or account supports it.",
    },
  ],
  note: "Self-direction is not about avoiding rules. It is about understanding what is possible within them.",
  links: [
    { label: "401(k) Prohibited Transactions", href: "/services/self-directed-401k/prohibited-transactions" },
    { label: "IRA Prohibited Transactions", href: "/services/self-directed-ira/prohibited-transactions" },
    { label: "IRA Unrelated Business Income", href: "/services/self-directed-ira/unrelated-business-income" },
  ],
};

export const chooseVehicle = {
  eyebrow: "Choose Your Retirement Vehicle",
  heading: ["The Investment Possibility Is Only The Beginning.", "The Right Retirement Plan Makes The Difference."],
  intro:
    "The possibilities you have explored may be available through different types of retirement arrangements. But choosing the appropriate plan depends on more than the investment itself: your business ownership, eligibility, current retirement savings, desired plan features, tax circumstances, and administrative responsibilities all matter.",
  cards: [
    {
      number: "01",
      label: "SELF-DIRECTED 401(K)",
      tagline: "For qualifying business owners.",
      description:
        "You built a business. Now explore a retirement plan designed around qualifying business ownership and employer-sponsored retirement features: potential employee and employer contribution provisions, permitted alternative investments, and optional participant loans where supported by law and the plan.",
      primaryLabel: "Start My Self-Directed 401(k)",
      secondaryLabel: "Explore The 401(k)",
      href: "/services/self-directed-401k",
    },
    {
      number: "02",
      label: "SELF-DIRECTED IRA",
      tagline: "For individual retirement investors.",
      description:
        "You don't need to own a business to explore a broader investment universe. An appropriately established self-directed IRA may allow you to pursue qualifying alternative investments through an eligible custodial or trust arrangement.",
      primaryLabel: "Start My Self-Directed IRA",
      secondaryLabel: "Explore The IRA",
      href: "/services/self-directed-ira",
    },
  ],
  supportingLabel: "Not Sure Which Plan Fits?",
  supportingHref: "/plans",
};

export const whyRothAcademyGoals = {
  eyebrow: "Why Explore These Possibilities With Roth Academy?",
  heading: ["Extraordinary Possibilities", "Deserve Experienced Guidance."],
  goldLine: 1,
  paragraphs: [
    "Understanding that a retirement account may own an unconventional investment is only the beginning. The more important questions involve selecting the appropriate structure, understanding its limitations, and recognizing what retirement law permits.",
    "At Roth Academy, we believe investors deserve the opportunity to learn about their options before deciding how to proceed. Our approach draws upon specialized retirement-plan experience, including attorney Tim Berry's professional work dating to 1997.",
  ],
  featured: "We want people to discover remarkable possibilities while respecting the retirement-plan framework that makes them available.",
  ctaLabel: "Learn About Roth Academy",
  ctaHref: "/about",
};

export const goalsFaqItems = [
  {
    question: "What can a self-directed retirement account invest in?",
    answer:
      "Depending on the account structure, provider, and applicable law, qualifying self-directed retirement arrangements may hold real estate, private loans, certain private business interests, qualifying precious metals, traditional securities, and other permitted assets. Not every account supports every investment.",
  },
  {
    question: "Can my IRA own a rental property?",
    answer:
      "Yes, certain self-directed IRAs can hold qualifying rental real estate. The account must own and administer the investment appropriately. Personal use and prohibited transactions can create serious tax consequences.",
  },
  {
    question: "Can a Self-Directed 401(k) own vacant land?",
    answer: "An appropriately structured retirement plan may be permitted to invest in vacant land, subject to the plan's investment terms, applicable law, and fiduciary requirements.",
  },
  {
    question: "Can my retirement account lend money?",
    answer:
      "Certain retirement arrangements may make qualifying loans to eligible borrowers. Lending to disqualified persons can be prohibited, and a private investment loan is not the same as an account owner borrowing personally from an IRA.",
  },
  {
    question: "Can I buy a business with my IRA or 401(k)?",
    answer:
      "Certain private business interests may be eligible investments. Ownership, services, compensation, related parties, taxes, and prohibited-transaction restrictions can make these arrangements complex.",
  },
  {
    question: "Can I invest in cryptocurrency through a retirement account?",
    answer:
      "Some self-directed arrangements permit certain crypto-asset investments, depending on provider policies and applicable requirements. Digital assets involve substantial volatility, security, fraud, valuation, and regulatory risks.",
  },
  {
    question: "Can my retirement account purchase gold?",
    answer: "Certain qualifying coins and bullion may be permissible. Special rules govern collectibles and the custody of IRA precious metals.",
  },
  {
    question: "Can I use retirement-owned real estate personally?",
    answer:
      "Generally, personal use of IRA-owned property by the account owner or other disqualified persons is prohibited. Similar restrictions may apply to qualified-plan investments, and particular arrangements require careful review.",
  },
  {
    question: "Do I pay taxes on income earned by retirement investments?",
    answer:
      "Retirement arrangements can provide tax benefits, but their treatment depends on the type of account, transaction, distribution, and applicable law. Certain investments may generate unrelated business taxable income or other tax consequences.",
  },
  {
    question: "Are alternative retirement investments riskier than stocks?",
    answer:
      "Risk varies by investment. Private assets may introduce liquidity limitations, valuation difficulties, fraud exposure, concentration risk, and other risks that differ from publicly traded securities. No investment category is universally safe.",
  },
  {
    question: "What is the difference between a self-directed IRA and a self-directed 401(k)?",
    answer: "The accounts differ in eligibility, contribution provisions, trustee and custodial structures, permitted plan features, and administration. Both may provide access to qualifying alternative investments.",
  },
  {
    question: "How do I get started?",
    answer:
      "Begin by reviewing the differences between the retirement arrangements, considering your eligibility and investment interests, and selecting the setup pathway that fits your circumstances.",
  },
];

export const goalsFinalConversion = {
  heading: ["The Investment World Is Bigger", "Than You Imagined."],
  description:
    "The question is no longer whether retirement accounts can hold investments beyond a conventional brokerage menu. The question is which opportunities are appropriate for your circumstances and which retirement plan may allow you to pursue them. You may have more choices than you ever realized.",
  signature: "Imagine What's Possible. Then Discover Your Path.",
};
