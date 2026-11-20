export const hero = {
  eyebrow: "The Farmer And Rancher",
  title: ["You've Spent Your Life Working The Land.", "What If Your Retirement Plan Could Own Land Of Its Own?"],
  goldLine: 1,
  description:
    "You know the difference between good pasture and poor soil. You understand the cost of equipment, fences, livestock, and a difficult growing season. If you operate a qualifying farming or ranching business, you may be able to establish a Self-Directed 401(k) with investment possibilities beyond a conventional retirement account — including qualifying farmland, real estate, certain private loans, and other permitted investments.",
  whoItsFor: "You already understand what land can make possible. Now discover what a Self-Directed 401(k) might make possible for your retirement.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const workingVsOwning = {
  eyebrow: "The Land You Work Versus The Land You Own As An Investment",
  heading: ["Working A Farm And Owning An Investment", "Are Two Different Things."],
  intro:
    "Buying seed, maintaining equipment, managing cattle, repairing fences, paying workers — those activities belong to the agricultural operation. A separate property acquired by a qualifying Self-Directed 401(k) might be held for investment purposes and leased to a genuinely unrelated agricultural operator.",
  items: [
    {
      number: "01",
      title: "Your Agricultural Business",
      description: "Tractors, farm equipment, livestock, agricultural buildings, and working employees — the operation you run every day.",
    },
    {
      number: "02",
      title: "Potential Self-Directed 401(k) Investment",
      description: "A separate parcel of agricultural land, with no personal equipment or livestock, potentially leased to an independent tenant.",
    },
  ],
  note: "Owning a retirement-plan investment doesn't automatically give your personal business permission to use it. Personal work, leasing arrangements, shared facilities, and transactions with related parties can create prohibited-transaction concerns.",
};

export const samStory = {
  eyebrow: "Meet Sam",
  heading: ["Sam Has Spent 25 Years Working Cattle.", "Retirement Investing Has Mostly Been Something Else."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Sam Has Spent 25 Years Working Cattle. Retirement Investing Has Mostly Been Something Else.",
      scenario:
        "Sam is 52 and operates a small cattle ranch — selling livestock and managing pasture, with fences to maintain, equipment to repair, and cattle to feed. Some years are profitable, others difficult; weather, feed prices, and cattle markets all matter. Sam knows what productive pasture looks like, the importance of reliable water, and how access and land condition affect agricultural operations. But retirement investing has mostly meant conventional accounts.",
      realization:
        "Then Sam discovers that a qualifying agricultural business may be able to establish a Self-Directed 401(k) that permits certain alternative investments, including some types of agricultural property. Suddenly Sam is asking a question that never came up while repairing fences: “Could my retirement plan own land separately from the ranch I already operate?”",
      risk:
        "Sam is fictional. The scenario assumes a legitimate business with qualifying compensation and an employee situation appropriate for the contemplated retirement plan. Actual eligibility requires review.",
    },
  ],
};

export const fencelineIntro = {
  eyebrow: "The Fenceline",
  heading: ["Two Pastures Can Share A Fence.", "That Doesn't Mean They Can Share An Owner's Business."],
  intro:
    "Imagine looking across a beautiful stretch of ranchland. On one side is Sam's existing cattle operation. On the other is a separate property that Sam's Self-Directed 401(k) is considering as a potential investment. The properties may look almost identical, but the ownership rules are completely different. Select a scenario to see why.",
  parcelA: { label: "Parcel A", owner: "Sam's Operating Ranch", description: "Existing pasture, Sam's cattle, farm equipment, a ranch access road, water infrastructure, fencing, and agricultural buildings." },
  parcelB: { label: "Parcel B", owner: "Sam's Self-Directed 401(k) (Potential)", description: "A separate agricultural property with clearly defined boundaries, a separate agricultural investment use, and no automatic integration with Sam's operating ranch." },
  scenarios: [
    {
      key: "lease",
      label: "Lease It To An Unrelated Farmer",
      outcome: "Potentially Permissible, Subject To Review",
      outcomeTone: "ok" as const,
      explanation:
        "Imagine the Self-Directed 401(k) purchases a qualifying agricultural property from an unrelated seller, then enters into an appropriately structured lease with a genuinely unrelated farmer. The tenant pays rent according to the lease, and the rent belongs to the retirement plan. Such an investment may be possible, but the lease terms, services, financing, taxes, and other circumstances require review.",
    },
    {
      key: "graze",
      label: "Let My Own Cattle Graze There",
      outcome: "Generally Prohibited Related-Party Use",
      outcomeTone: "bad" as const,
      explanation:
        "Sam's cattle belong to Sam's personal agricultural business. The retirement-plan-owned pasture is a separate investment. Allowing Sam's business to use retirement-plan land can create a prohibited transaction involving the plan owner or a related business. The fact that Sam owns both the agricultural business and controls the retirement plan does not make the transaction permissible. Your retirement plan cannot simply become extra pasture for your own cattle operation.",
    },
    {
      key: "child",
      label: "Lease It To My Adult Child",
      outcome: "Generally Prohibited Family Transaction",
      outcomeTone: "bad" as const,
      explanation:
        "Certain family relationships are specifically covered by the retirement-plan prohibited-transaction rules. A plan owner's child is generally a disqualified person. Leasing retirement-plan property to an adult child generally raises prohibited-transaction problems. Charging fair-market rent does not automatically make the lease permissible. Not every relative is treated identically — actual relationships and applicable law must be considered.",
    },
    {
      key: "share",
      label: "Share Equipment Or Water With My Farm",
      outcome: "Related-Party Transaction Review Required",
      outcomeTone: "warn" as const,
      explanation:
        "Agricultural properties often share practical infrastructure — wells, water lines, access roads, fencing, equipment. But retirement-plan property cannot simply provide goods, services, facilities, or economic benefits to the owner's operating business through prohibited arrangements. A shared well, equipment arrangement, access easement, or utility agreement involving the owner or related business can create serious legal issues. A shared fence doesn't erase the financial and legal boundary.",
    },
    {
      key: "sell",
      label: "Sell My Own Land To The Plan",
      outcome: "Generally Prohibited Direct Sale",
      outcomeTone: "bad" as const,
      explanation:
        "A direct sale or exchange of property between a retirement plan and a disqualified person is generally prohibited. Sam cannot simply sell personally owned ranchland to Sam's own Self-Directed 401(k) as though the plan were an unrelated buyer. Even a professionally appraised, fair-market-value sale does not automatically cure the prohibited transaction.",
    },
  ],
  summaryRows: [
    { arrangement: "Lease qualifying property to an unrelated agricultural operator", outcome: "Potentially permissible, subject to review" },
    { arrangement: "Allow owner's cattle to graze on retirement property", outcome: "Generally prohibited related-party use" },
    { arrangement: "Lease retirement property to owner's child", outcome: "Generally prohibited related-party transaction" },
    { arrangement: "Share water, services, or equipment with owner's farm", outcome: "Serious related-party concerns requiring review" },
    { arrangement: "Sell personally owned land to the retirement plan", outcome: "Generally prohibited direct sale" },
  ],
  conclusion: "Your retirement plan can potentially own agricultural land. That doesn't mean your personal farming operation can use it.",
};

export const eightyAcres = {
  eyebrow: "What Could Farmland Earn As An Investment?",
  heading: ["Eighty Acres. One Unrelated Tenant.", "What Might The Numbers Look Like?"],
  intro:
    "Assume a properly established Self-Directed 401(k) already contains sufficient eligible capital and considers purchasing 80 acres of qualifying agricultural property from an unrelated seller, with a separate, unrelated agricultural operator interested in leasing the property.",
  figures: [
    { label: "Land acreage", value: "80 acres" },
    { label: "Illustrative purchase price ($3,000/acre)", value: "$240,000" },
    { label: "Annual gross rent (80 acres × $175)", value: "$14,000" },
    { label: "Illustrative annual operating surplus", value: "$8,500" },
  ],
  disclaimer:
    "$14,000 minus $5,500 in illustrative annual expenses (property taxes, insurance, land maintenance, and administrative costs) equals $8,500 before any additional applicable taxes, acquisition costs, unexpected capital expenditures, or financing costs. The $175-per-acre rent and the $240,000 purchase price are fictional and are not claims about prevailing agricultural rental rates or land prices in any state. The financial result is not guaranteed, nor is it a forecast.",
};

export const vacancyScenarios = {
  eyebrow: "What Happens Without A Tenant?",
  heading: ["Even Unoccupied Land", "Can Still Cost Money."],
  items: [
    { number: "A", title: "Tenant Pays As Agreed", description: "Gross rent $14,000, illustrative operating expenses $5,500, operating surplus $8,500." },
    { number: "B", title: "No Paying Tenant For The Year", description: "Gross rent $0, illustrative continuing operating expenses $5,500, operating loss $5,500." },
  ],
  note: "Even when nobody rents the land, property ownership can still cost money. The property may also lose value or become difficult to sell. A lease can be broken, a tenant can default, and land may need improvements the owner did not anticipate. Land may be valuable, but the value of an investment depends on what it costs, what it earns, and what risks you take to own it.",
};

export const leaseTypes = {
  eyebrow: "A Farm Lease Is Not Always Just A Farm Lease",
  heading: ["Cash Rent, Crop Shares, And Farming Operations", "Can Produce Very Different Financial Results."],
  intro: "Farmers understand that agricultural income can be arranged in different ways. Those arrangements are not automatically treated the same under tax rules, and when retirement-plan assets are involved, the distinctions become especially important.",
  items: [
    { number: "01", title: "Fixed Cash Rent", description: "An unrelated tenant agrees to pay a specified amount for the use of agricultural land. Certain rents may be excluded from unrelated business taxable income, but the actual terms, activities, debt, and services must be evaluated. A fixed cash-rent arrangement does not automatically guarantee payment." },
    { number: "02", title: "Crop-Share Arrangements", description: "Some agreements provide compensation connected to crop production or other agricultural output. The legal and tax treatment can depend on the agreement, participation, and how income is calculated. Do not assume every crop-share arrangement qualifies as excluded real estate rent." },
    { number: "03", title: "Active Farming Operations", description: "Directly operating an agricultural business through a retirement-plan investment can raise different tax and legal considerations from simply holding land as a passive investment. Activities, services, income type, and the investment structure matter." },
  ],
  note: "Two fields can look identical from the road while their ownership arrangements produce very different tax consequences.",
};

export const landBeneathLand = {
  eyebrow: "What About Water, Mineral Rights, And Access?",
  heading: ["The Most Important Part Of A Land Investment", "Isn't Always Visible Above The Ground."],
  intro: "Two properties may contain the same number of acres, but one may have reliable water access, valuable mineral interests, or legal road access that the other lacks. Agricultural investments can involve much more than the surface of the property.",
  items: [
    { number: "01", title: "The Surface", description: "Soil quality, terrain, drainage, agricultural productivity, and existing land use can affect value." },
    { number: "02", title: "Water", description: "Water rights, wells, surface water, permits, and usage restrictions vary by location and legal structure." },
    { number: "03", title: "Access", description: "Legal access, recorded easements, road conditions, and maintenance obligations matter." },
    { number: "04", title: "Mineral Interests", description: "Mineral rights may have been severed from the surface estate. Purchasing farmland does not automatically include every subsurface interest." },
    { number: "05", title: "Restrictions", description: "Deed restrictions, conservation easements, land-use rules, leases, and other obligations may affect the investment." },
  ],
  note: "Buying acreage doesn't automatically mean buying every right, resource, or opportunity associated with it. This illustration is conceptual — it does not establish ownership of water, minerals, access, or other rights. Those matters require document examination and applicable local legal review.",
};

export const separateBusiness = {
  eyebrow: "The Farm Business And The Retirement Plan Must Stay Separate",
  heading: ["Your Farming Operation Has Its Own Assets.", "Your Retirement Plan Must Have Its Own Investment Purpose."],
  goldLine: 1,
  paragraphs: [
    "A farm might own tractors, livestock, feed, tools, and equipment. It may employ workers, lease pasture, or purchase fertilizer or seed. Those are operating activities. A Self-Directed 401(k) is not simply another account for the same farm — its assets must be held and used according to applicable retirement-plan rules.",
    "That means the owner cannot simply move money, equipment, land, or livestock between the retirement plan and the agricultural business.",
  ],
  featured: "One business. One separate retirement investment structure. Different rules.",
};

export const separateExamples = {
  eyebrow: "What That Separation Looks Like",
  heading: ["Four Examples.", "One Consistent Rule."],
  items: [
    { number: "01", title: "“My Plan Buys A Tractor For My Farming Business.”", description: "That generally raises prohibited-transaction concerns because retirement-plan assets would be used to benefit the owner's business." },
    { number: "02", title: "“My Plan Buys Farmland My Cattle Operation Uses.”", description: "That generally raises prohibited-transaction concerns involving related-party use or leasing." },
    { number: "03", title: "“My Plan Makes A Loan Directly To My Farming Company.”", description: "Lending between a retirement plan and the owner or related business is generally prohibited unless a specific applicable exemption is satisfied." },
    { number: "04", title: "“My Plan Considers A Qualifying Investment With An Unrelated Party.”", description: "That may be possible, but the investment must still satisfy the plan's provisions, applicable tax rules, and other legal restrictions." },
  ],
  note: "Your business may help create the retirement-plan opportunity. It does not turn retirement assets into an extension of the farm.",
};

export const incomeCategories = {
  eyebrow: "Does Farm Income Qualify For Retirement Contributions?",
  heading: ["Farming Profit May Support Contributions.", "Simply Owning Land Is Different."],
  intro:
    "Farm business profit and passive land rent are not automatically the same kind of income. If a Self-Directed 401(k) owns farmland and receives rent, that rent belongs to the retirement plan — it does not become the owner's personal earned income merely because the owner directs the plan's investments.",
  items: [
    { number: "01", title: "Active Agricultural Business", description: "Potential qualifying business earnings, subject to applicable calculations." },
    { number: "02", title: "Personally Owned Rental Land", description: "Rental income that may receive different tax treatment from active farming income." },
    { number: "03", title: "Retirement-Plan-Owned Land", description: "Investment income belonging to the retirement plan, not the owner personally." },
  ],
  note: "An eligible one-participant 401(k) may allow contributions in both the participant's worker capacity and the business's employer capacity. The permitted amount depends on eligible compensation, business structure, other relevant contributions, and applicable limits.",
  linkLabel: "Explore Self-Directed 401(k) Contribution Rules",
  linkHref: "/services/self-directed-401k/contributions",
};

export const employeeProfiles = {
  eyebrow: "What If The Farm Has Employees?",
  heading: ["A Family Farm Isn't Automatically", "An Owner-Only Retirement Plan."],
  intro: "Agricultural businesses can operate in many different ways. Those differences matter when determining whether a one-participant 401(k) is appropriate.",
  items: [
    { number: "01", title: "Independent Farmer", description: "Operates a legitimate farming business, has qualifying compensation, and has no employees who must be covered. A one-participant Self-Directed 401(k) may be worth exploring." },
    { number: "02", title: "Husband-And-Wife Ranch", description: "Spouses operate a qualifying business together with no other employees who must be covered. Certain owner-and-spouse arrangements may qualify for a one-participant 401(k), depending on the actual business and plan structure." },
    { number: "03", title: "Family Farm With Employees", description: "The farm employs workers throughout the year. The business may be able to sponsor a retirement plan, but an owner-only plan cannot simply ignore employees who must be covered." },
    { number: "04", title: "Multiple Related Agricultural Businesses", description: "The family operates a cattle company, land company, and equipment business. Businesses under common ownership or related arrangements may have to be considered together under retirement-plan rules." },
  ],
  note: "The family history of a farm is important. But retirement-plan eligibility depends on how the business actually operates.",
};

export const investCategories = {
  eyebrow: "Your Retirement Plan Doesn't Have To Invest In Agriculture",
  heading: ["You've Already Invested Your Life In Agriculture.", "Your Retirement Portfolio Doesn't Have To Depend Entirely On It."],
  intro: "A Self-Directed 401(k) may provide an opportunity to explore qualifying investments outside the agricultural business.",
  items: [
    { number: "01", title: "Agricultural Land", description: "A qualifying Self-Directed 401(k) may be able to invest in agricultural land held for a separate investment purpose. Costs, tenant arrangements, legal rights, taxes, and market risk matter." },
    { number: "02", title: "Private Lending", description: "Certain properly structured private loans to unrelated borrowers may be permitted. If the borrower performs, the plan may receive interest. If the borrower defaults, the plan may lose principal." },
    { number: "03", title: "Residential Or Commercial Property", description: "Some plans permit qualifying rental or commercial real estate far from the farm. Income, expenses, financing, tax treatment, and market conditions vary." },
    { number: "04", title: "Private Businesses", description: "Certain qualifying private business interests may be permitted, involving limited liquidity, complex agreements, tax issues, and substantial risk. Investing in the owner's own agricultural business can create serious prohibited-transaction concerns." },
  ],
  note: "Your experience may be in agriculture. Your permitted retirement investments don't necessarily have to be. A portfolio concentrated in farmland and similar assets may still have substantial correlated risks.",
};

export const mineralRights = {
  eyebrow: "What About Oil, Gas, And Mineral Rights?",
  heading: ["Sometimes The Value Of Land", "Extends Beneath The Surface."],
  intro:
    "Farmers and ranchers in certain regions understand that surface ownership and mineral ownership are not always the same thing. Some Self-Directed 401(k) plans may permit qualifying investments in certain mineral or royalty interests, but such investments involve specialized legal, financial, and tax considerations.",
  items: [
    { number: "01", title: "Surface Estate", description: "Who owns the land at the surface?" },
    { number: "02", title: "Mineral Estate", description: "Who owns the underlying mineral interests? Rights may have been severed from the surface." },
    { number: "03", title: "Royalty Interest", description: "What payment rights, if any, are actually held? Royalties depend on actual production and applicable agreements." },
  ],
  note: "Owning the surface doesn't automatically mean owning everything beneath it.",
};

export const rolloverExample = {
  eyebrow: "What About Retirement Savings From Another Career?",
  heading: ["Some Farmers Start With A Ranch.", "Others Come To Agriculture After Building A Career Elsewhere."],
  intro:
    "Before operating the ranch full-time, Sam worked for a company that sponsored a 401(k) and now has a hypothetical $120,000 remaining in that former employer's plan. If an eligible distribution is available and the receiving Self-Directed 401(k) permits the rollover, some or all of the eligible funds may potentially be transferred.",
  figures: [
    { label: "Hypothetical former employer plan balance", value: "$120,000" },
    { label: "Eligible rollover distribution required", value: "Yes" },
    { label: "Receiving Self-Directed 401(k) must accept the rollover type", value: "Confirm with plan" },
  ],
  disclaimer:
    "Not every old account or every balance is eligible for rollover. Current workplace plans can have distribution restrictions, and different types of retirement funds may require different tax treatment. This is separate from determining current-year retirement contributions from the ranching business.",
};

export const risks = {
  eyebrow: "The Risks Of Agricultural Investments",
  heading: ["Beautiful Land Can Still Be", "A Difficult Investment."],
  intro: "A farmer or rancher may recognize some of these problems more readily than an inexperienced investor. But no amount of experience eliminates all risk.",
  items: [
    { number: "01", title: "Water", description: "Does the property have lawful, reliable access to the water needed for its intended use?" },
    { number: "02", title: "Soil", description: "What is the agricultural productivity of the land?" },
    { number: "03", title: "Access", description: "Is legal access secure and practical?" },
    { number: "04", title: "Tenant Demand", description: "Who would actually pay to use the property?" },
    { number: "05", title: "Ownership Rights", description: "What surface, mineral, water, and other interests are included?" },
    { number: "06", title: "Carrying Costs", description: "What expenses continue when the property produces no income?" },
  ],
  note: "The right question isn't only what the land could become. It's what owning the land would actually require.",
};

export const retirementTransition = {
  eyebrow: "What Happens When The Farmer Wants To Retire?",
  heading: ["You've Spent Years Building A Farming Business.", "Your Retirement Investments May Be A Different Part Of Your Financial Future."],
  goldLine: 1,
  paragraphs: [
    "Agricultural businesses often carry a personal meaning that goes beyond money. A farm may have been in the family for generations. A Self-Directed 401(k) does not solve every farm succession or retirement problem, does not guarantee a financially comfortable retirement, and does not automatically make land easier to sell.",
    "But for a qualifying business owner, the ability to establish a separate retirement plan with permitted investment flexibility may be an important option — one that allows the owner to consider investments that are legally distinct from the operating agricultural business. Those investments remain subject to plan rules, tax treatment, risks, and eventual distribution requirements.",
  ],
  featured: "The farm may be your life's work. Your retirement plan can be a separate part of your financial planning.",
};

export const faqItems = [
  { question: "Can a farmer open a Self-Directed 401(k)?", answer: "A qualifying self-employed farmer may be eligible to establish a one-participant Self-Directed 401(k). Eligibility depends on legitimate business activity, qualifying compensation, employee coverage, related businesses, and applicable retirement-plan requirements." },
  { question: "Can a rancher establish a Solo 401(k)?", answer: "Potentially, yes. A rancher who operates a qualifying business without employees who must be covered may be eligible for a one-participant 401(k), commonly called a Solo 401(k). A self-directed version may provide broader investment choices if permitted by its governing documents." },
  { question: "Can a Self-Directed 401(k) purchase farmland?", answer: "Some Self-Directed 401(k) plans may permit qualifying farmland investments. The plan's documents, ownership arrangements, prohibited-transaction restrictions, tax consequences, and other requirements must be considered." },
  { question: "Can my Solo 401(k) buy pasture for my own cattle?", answer: "Using retirement-plan property for your own cattle operation generally raises prohibited-transaction concerns involving the plan owner or a related business. Do not assume that the plan can buy acreage for the personal farming business to use." },
  { question: "Can my retirement plan lease farmland to an unrelated farmer?", answer: "An appropriately structured lease to a genuinely unrelated tenant may be permissible. The specific parties, lease terms, services, financing, taxes, and plan provisions require review." },
  { question: "Can my Self-Directed 401(k) lease land to my son or daughter?", answer: "A plan owner's children are generally disqualified persons. Leasing retirement-plan property to an adult child generally raises prohibited-transaction problems. Charging market rent does not automatically make the arrangement permissible." },
  { question: "Can I sell farmland I personally own to my Self-Directed 401(k)?", answer: "A direct sale or exchange of property between the retirement plan and its owner, who is a disqualified person, is generally prohibited. Fair-market pricing alone does not automatically make the transaction permissible." },
  { question: "Can I personally farm land owned by my retirement plan?", answer: "Personally operating, cultivating, or furnishing services to retirement-plan-owned farmland can create prohibited-transaction problems. The owner should not assume that unpaid labor or professional agricultural experience makes the arrangement permissible." },
  { question: "Can my Self-Directed 401(k) buy tractors or cattle?", answer: "Some types of agricultural or equipment-related investments may theoretically be considered under an appropriately structured plan, but the plan cannot simply purchase equipment or livestock for the owner's personal farming business. Transactions, services, custody, management, valuation, and tax treatment require careful review." },
  { question: "Can my retirement plan buy a farm and rent it back to my business?", answer: "Leasing retirement-plan property to a related farming business generally raises prohibited-transaction concerns. Paying fair-market rent does not automatically resolve the issue." },
  { question: "Is farmland rent inside a Self-Directed 401(k) always tax-free?", answer: "No. Certain qualifying rents from real property may be excluded from unrelated business taxable income, but the actual arrangement matters. Crop-share terms, substantial services, business operations, financing, and other facts can change the result." },
  { question: "Is rental income from my personally owned farmland eligible compensation for a Solo 401(k)?", answer: "Not automatically. Ordinary fixed cash rent received without material participation is generally treated differently from active farming earnings for self-employment tax purposes. The specific arrangement and applicable compensation rules must be reviewed." },
  { question: "Can a farmer with employees open a Self-Directed 401(k)?", answer: "A farming business with employees may be able to establish a retirement plan with self-directed investment features. However, an owner-only plan cannot simply exclude employees who must be covered under applicable rules." },
  { question: "Can a husband and wife who run a farm together establish a Solo 401(k)?", answer: "Certain qualifying owner-and-spouse business arrangements may use a one-participant 401(k). Eligibility depends on the actual business ownership, compensation, employee situation, and plan structure." },
  { question: "Can a family farm with several related businesses qualify?", answer: "Possibly, but businesses under common ownership or certain related arrangements may need to be analyzed together. Employee coverage and contribution rules may be affected by those relationships." },
  { question: "How much can a farmer contribute to a Self-Directed 401(k)?", answer: "The permitted contribution depends on qualifying compensation, business tax structure, employee and employer contribution rules, other relevant retirement-plan contributions, plan provisions, and applicable limits. Gross farm revenue is not automatically the contribution amount." },
  { question: "Can a Self-Directed 401(k) own mineral or royalty interests?", answer: "Some plans may permit qualifying mineral or royalty investments, but the actual interests, ownership rights, transaction structure, tax treatment, valuation, and investment risks require review." },
  { question: "Can my retirement plan invest outside agriculture?", answer: "Potentially, yes. Depending on its terms and applicable law, a Self-Directed 401(k) may invest in certain real estate, private loans, private businesses, and other permissible assets outside the agricultural industry." },
  { question: "Can I roll an old employer's 401(k) into a Self-Directed 401(k)?", answer: "An eligible distribution from a former employer's retirement plan may be rolled into a qualifying Self-Directed 401(k) if the receiving plan accepts the applicable type of rollover. The specific funds and tax treatment must be reviewed." },
  { question: "Are Self-Directed 401(k) agricultural investments guaranteed to earn money?", answer: "No. Agricultural investments may lose value, produce little or no income, become difficult to sell, or require substantial additional expenses. Expanded investment flexibility does not guarantee improved performance." },
];

export const references = [
  { title: "IRS: One-Participant 401(k) Plans", description: "Owner-only eligibility, employees, and contribution concepts.", href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans" },
  { title: "IRS: Publication 225, Farmer's Tax Guide", description: "Agricultural business income, farming operations, rents, crop shares, and self-employment tax distinctions.", href: "https://www.irs.gov/publications/p225" },
  { title: "IRS: Publication 560", description: "Small-business retirement-plan contributions and eligibility.", href: "https://www.irs.gov/publications/p560" },
  { title: "IRS: Self-Employed Contribution Calculations", description: "Special calculations for qualifying self-employment earnings.", href: "https://www.irs.gov/retirement-plans/self-employed-individuals-calculating-your-own-retirement-plan-contribution-and-deduction" },
  { title: "IRS: Retirement-Plan Investment FAQs", description: "Investment restrictions and prohibited-transaction concepts.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Related-party property transfers, leasing, lending, services, and personal benefits.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Publication 598", description: "Unrelated business taxable income, real property rents, and exceptions.", href: "https://www.irs.gov/publications/p598" },
  { title: "IRS: Form 4835", description: "Farm rental income based on crops or livestock where the landowner does not materially participate.", href: "https://www.irs.gov/forms-pubs/about-form-4835" },
  { title: "IRS: Retirement-Plan Rollovers", description: "Eligible rollover and receiving-plan requirements.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" },
  { title: "USDA: Web Soil Survey", description: "Authoritative soil information relevant to agricultural land evaluation.", href: "https://www.nrcs.usda.gov/resources/data-and-reports/web-soil-survey" },
];

export const finalConversion = {
  heading: ["You've Spent Your Life Understanding Land.", "Explore What Your Retirement Plan Might Be Able To Own."],
  description:
    "If you operate a qualifying business, a Self-Directed 401(k) may give you access to retirement investment possibilities outside the conventional investment menu — certain agricultural land investments, rental properties, private lending, qualifying private business interests, and other permitted assets. You still have to follow the rules, your retirement plan cannot simply become another account for your farming operation, and investment income is not guaranteed. But understanding the possibilities may change the way you think about retirement investing.",
  signature: "You've spent years learning how to work the land. Now discover whether a Self-Directed 401(k) could help you explore a different kind of ownership.",
};
