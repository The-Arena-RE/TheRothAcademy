export const learnHero = {
  eyebrow: "The Knowledge Library",
  title: ["The More You", "Know. The", "Further You See."],
  goldLine: 2,
  description:
    "What if your retirement account could invest in something you've actually dreamed of owning? A rental property. A piece of land. A private business. An investment that pays interest. Discover extraordinary investment possibilities through simple explanations, fascinating real-world-style examples, and lessons created for people just like you. Whether you're starting small or investing millions, there's something worth discovering.",
};

export const learnCollections = [
  {
    eyebrow: "The Entrepreneur's Collection",
    heading: "You Built Something of Your Own. Discover What Else You Could Build.",
    description:
      "Imagine investing in vacant land, rental houses, private loans, commercial properties, or private businesses through a qualifying self-directed 401(k). Whether you're a contractor, freelancer, truck driver, real estate professional, business owner, or sophisticated entrepreneur, discover investment possibilities you may never have considered.",
    ctaLabel: "Explore the 401(k) Library",
    href: "/learn/self-directed-401k",
    image: "/pathways/401k.webp",
  },
  {
    eyebrow: "The Individual Investor's Collection",
    heading: "Extraordinary Investments Aren't Just for Wall Street.",
    description:
      "Imagine owning investment land, collecting rental income, receiving interest from private loans, or investing in privately held companies through a qualifying self-directed IRA. Whether you're a teacher, nurse, construction worker, young investor, experienced landlord, or multimillionaire, discover opportunities beyond the investments traditionally offered by brokerage accounts. You don't need to own a business to establish an IRA.",
    ctaLabel: "Explore the IRA Library",
    href: "/learn/self-directed-ira",
    image: "/pathways/ira.webp",
  },
];

export const learnFinalSection = {
  heading: ["The Next Thing You Learn Might", "Change What You Consider Possible."],
  description:
    "Maybe it's a small piece of land. Maybe it's a rental property producing income for an investment account. Maybe it's the ability to participate in a private investment opportunity that you've never considered. Whether you're just getting started or already managing substantial investments, there's always something new to discover. Find your opportunity. Explore the possibilities. Start learning.",
};

export const learnSupportBanner = {
  heading: "Knowledge Is The Starting Point.",
  description: "Bring an individual question to the team for the appropriate professional scope.",
  cta: "Talk through my situation",
};

export type LearnLevel = "foundations" | "advanced";

export const learnLevels: { key: LearnLevel; tabLabel: string; badge: string }[] = [
  { key: "foundations", tabLabel: "The foundations", badge: "Foundations" },
  { key: "advanced", tabLabel: "Think further", badge: "Advanced" },
];

export type LearnChapter = { heading: string; paragraph: string };

export type LearnLesson = {
  video?: { youtubeId: string; title: string; caption: string };
  chapters: LearnChapter[];
  checklist: string[];
  relatedServiceSlugs: string[];
};

export type LearnGuide = {
  number: string;
  slug: string;
  level: LearnLevel;
  kicker: string;
  title: string;
  description: string;
  minutes: number;
  body: string[];
  lesson?: LearnLesson;
  // Shown in the curated /learn index. Guides without this flag still have
  // a live page (generateStaticParams covers all of them) but are reserved
  // for the Tax Academy client experience rather than the sales-facing
  // library.
  featured?: boolean;
};

export const learnGuides: LearnGuide[] = [
  {
    number: "00",
    slug: "ira-vs-401k",
    level: "foundations",
    featured: true,
    kicker: "Choosing a plan",
    title: "Which plan fits: 401(k) or IRA?",
    description:
      "The two paths lead to different accounts, different eligibility, and different features. Start by matching the plan to how you earn.",
    minutes: 5,
    body: [
      "A self-directed 401(k) and a self-directed IRA both let you invest in real estate, private lending, and other assets beyond a typical brokerage menu: the difference is less about what you can invest in, and more about how you qualify and how the account is set up.",
      "A self-directed 401(k) is a business-sponsored plan, built for owner-only businesses, sole proprietors, partnerships, and corporations with no full-time employees other than an owner or spouse. It generally allows higher contribution limits than an IRA and can include a built-in loan provision, when the plan document allows it.",
      "A self-directed IRA is an individual account, open to anyone with earned income or existing retirement funds to roll over, no business ownership required. It's available as Traditional, Roth, or SEP, and held with a qualified custodian.",
      "If you're not sure which fits, compare the two side by side, or tell the team about your situation and we'll help you choose.",
    ],
    lesson: {
      chapters: [
        {
          heading: "What they have in common",
          paragraph:
            "A self-directed 401(k) and a self-directed IRA both let you invest in real estate, private lending, and other assets beyond a typical brokerage menu: the difference is less about what you can invest in, and more about how you qualify and how the account is set up.",
        },
        {
          heading: "The self-directed 401(k) path",
          paragraph:
            "A self-directed 401(k) is a business-sponsored plan, built for owner-only businesses, sole proprietors, partnerships, and corporations with no full-time employees other than an owner or spouse. It generally allows higher contribution limits than an IRA and can include a built-in loan provision, when the plan document allows it.",
        },
        {
          heading: "The self-directed IRA path",
          paragraph:
            "A self-directed IRA is an individual account, open to anyone with earned income or existing retirement funds to roll over, no business ownership required. It's available as Traditional, Roth, or SEP, and held with a qualified custodian.",
        },
        {
          heading: "How to decide",
          paragraph:
            "If you're not sure which fits, compare the two side by side, or tell the team about your situation and we'll help you choose.",
        },
      ],
      checklist: [
        "Confirm whether you have a business with no full-time employees other than an owner or spouse",
        "Note your earned income and any retirement funds available to roll over",
        "Compare 401(k) vs. IRA contribution limits for your situation",
        "Decide whether a built-in loan provision matters to you",
      ],
      relatedServiceSlugs: ["self-directed-401k", "self-directed-ira"],
    },
  },
  {
    number: "01",
    slug: "getting-started",
    level: "foundations",
    featured: true,
    kicker: "Getting started",
    title: "Your plan, from paperwork to practice",
    description:
      "Your plan documents describe the arrangement. Your daily records show how it is actually operated. Start by organizing both.",
    minutes: 6,
    body: [
      "A retirement plan exists in two places at once: on paper, in the documents that establish it, and in practice, in the transactions and records that show how it actually runs day to day. Most questions that come up later trace back to a gap between the two.",
      "Start by locating your plan's governing documents (the adoption agreement, plan document, or trust agreement, depending on your structure) and confirm they match how the plan is actually being operated. If a document describes a feature you aren't using, or an activity isn't reflected in any document, that gap is worth resolving before it compounds.",
      "From there, build the habit of keeping a running record: contributions, distributions, loans, and any investment transactions, each dated and described. A plan that can produce a clear answer to 'what happened, and when' is a plan that is easier to administer, review, and eventually hand off.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Know the people",
          paragraph:
            "Identify the sponsoring business, trustee, and participants from the executed documents. Each has a different role. Keep contact details current and use the correct plan information when opening accounts.",
        },
        {
          heading: "Know the documents",
          paragraph:
            "Locate the executed plan package and any later amendments. A draft is different from a signed document. An old version may help explain history, while current instructions should come from the applicable documents.",
        },
        {
          heading: "Create a working record",
          paragraph:
            "Keep account-opening records, funding confirmations, and transaction documents in separate folders. The person performing a task should record when it was completed and what supports that conclusion.",
        },
      ],
      checklist: [
        "Locate the signed plan package",
        "Confirm the plan name and responsible people",
        "Separate drafts and current documents",
        "Choose the next unfinished setup task",
      ],
      relatedServiceSlugs: ["self-directed-401k", "self-directed-ira", "existing-plan-support"],
    },
  },
  {
    number: "02",
    slug: "opening-accounts",
    level: "foundations",
    featured: true,
    kicker: "Bank & brokerage accounts",
    title: "Prepare to open a plan account",
    description:
      "Financial institutions have their own application processes. A complete preparation packet helps you ask the right questions before sending an application.",
    minutes: 5,
    body: [
      "Opening an account for a retirement plan is not the same as opening a personal account. The institution will want to see the plan's governing documents, an EIN specific to the plan (where applicable), and clarity on who has signing authority and under what conditions.",
      "Before you apply anywhere, put together a single packet: the plan document, trust agreement, identification for anyone with authority, and a short written summary of what the account will be used for. Institutions vary in what they ask for and how they interpret self-directed activity, so having your facts organized up front avoids repeat requests mid-process.",
      "It's also worth asking each institution directly how it handles the kinds of transactions you expect to make: a straightforward brokerage account has very different questions than one that will hold private lending notes or real estate. Ask before you apply, not after you're denied.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Start with the institution",
          paragraph:
            "Ask what type of account it supports, the documents required, the available features, and any institution-specific restrictions. Confirm current instructions directly with the institution.",
        },
        {
          heading: "Match the records",
          paragraph:
            "Use the correct plan and trust information from the executed documents. Resolve mismatched names or identifiers before proceeding. Do not guess an account title from a marketing name.",
        },
        {
          heading: "Keep the confirmation",
          paragraph:
            "Save submitted materials and the confirmation of the account opening. Record who has authority to operate the account and how ongoing statements will be retained.",
        },
      ],
      checklist: [
        "Confirm current institution requirements",
        "Gather executed documents",
        "Check names and identifiers",
        "Save the application and confirmation",
      ],
      relatedServiceSlugs: ["self-directed-401k", "self-directed-ira", "existing-plan-support"],
    },
  },
  {
    number: "03",
    slug: "contributions",
    level: "foundations",
    featured: true,
    kicker: "Contributions",
    title: "Organize your contribution records",
    description:
      "A contribution is money added under the rules of the plan. Correct records start with identifying the participant, year, contribution type, and source information.",
    minutes: 7,
    body: [
      "A contribution record answers four questions: who it's for, what year it applies to, what type it is (employee deferral, employer match, profit sharing, and so on), and where the money came from. Missing any one of these makes the record hard to use later, whether for a tax filing, an audit, or simply confirming a balance.",
      "It helps to record contributions as they happen rather than reconstructing them at year-end. A simple running log (participant, date, amount, type, year applied) is enough to keep things straight, and it becomes the backbone of your annual records packet.",
      "If a contribution needs to be corrected or recharacterized, document the reason and the correction the same way you'd document the original entry. A clean paper trail is what turns a routine correction into a non-event, instead of a question mark six years from now.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Classify the contribution",
          paragraph:
            "Employee and employer contributions have different rules. Designated Roth contributions and pretax contributions also require appropriate tracking. The label used on a transfer does not determine eligibility.",
        },
        {
          heading: "Gather the right inputs",
          paragraph:
            "Business structure, compensation, other retirement plans, and applicable plan terms may affect the calculation. Use current-year guidance and qualified help for the actual amount and deadlines.",
        },
        {
          heading: "Document the completed action",
          paragraph:
            "Retain elections where required, calculations, deposit confirmations, and records of how amounts were classified. Keep a proposed calculation separate from a completed deposit.",
        },
      ],
      checklist: [
        "Identify the contribution year and type",
        "Gather compensation and other-plan information",
        "Confirm the calculation and relevant deadlines",
        "Retain election and deposit records",
      ],
      relatedServiceSlugs: ["contribution-planning", "rollover-planning"],
    },
  },
  {
    number: "04",
    slug: "rollovers",
    level: "foundations",
    featured: true,
    kicker: "Rollovers",
    title: "Prepare for a rollover",
    description:
      "A rollover involves retirement assets moving between arrangements. It needs different records and checks from a new contribution.",
    minutes: 6,
    body: [
      "A rollover moves existing retirement funds from one arrangement into another: a former employer's plan into an IRA, for instance, or one IRA into a newly self-directed one. Because the funds already carry tax treatment from their source, the paperwork trail matters more than it does for a fresh contribution.",
      "Before initiating a rollover, confirm the receiving account is open and able to accept the transfer, and get a clear statement from the sending institution of how the funds will be sent (direct trustee-to-trustee transfer versus a distribution check made payable to you). The difference affects timing and, in some cases, tax withholding.",
      "Keep the confirmation paperwork from both sides (the distribution notice from the old plan and the deposit confirmation from the new one) together with the date each occurred. That pairing is what shows a rollover was completed correctly if the question ever comes up.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Identify the source and destination",
          paragraph:
            "Record the exact account types and institutions involved. Eligibility depends on the distribution and receiving arrangement. Do not assume that every account balance is eligible to move.",
        },
        {
          heading: "Confirm the method",
          paragraph:
            "Direct and indirect movements create different responsibilities. Obtain current instructions before initiating the movement, especially when funds may be paid to you personally.",
        },
        {
          heading: "Keep the full record",
          paragraph:
            "Retain instructions, confirmations, statements, and applicable tax reporting. Ask the relevant professional to resolve any mismatch between the paperwork and the transaction.",
        },
      ],
      checklist: [
        "Identify source and destination account types",
        "Confirm eligibility and transfer instructions",
        "Record the actual dates and amounts",
        "Keep confirmations and reporting documents",
      ],
      relatedServiceSlugs: ["self-directed-ira", "contribution-planning", "rollover-planning"],
    },
  },
  {
    number: "05",
    slug: "participant-loans",
    level: "foundations",
    kicker: "Participant loans",
    title: "Participant loans: prepare and maintain",
    description:
      "A participant loan is a loan to a participant under the plan. It is different from the plan making an investment loan to an unrelated borrower.",
    minutes: 7,
    body: [
      "A participant loan lets someone borrow against their own plan balance, repaying it back into the same account over time under terms the plan document allows. It's a distinct feature from the plan lending money to a third party as an investment; the two are governed differently and shouldn't be confused.",
      "Before taking a participant loan, confirm the plan document actually includes a loan provision, and what it specifies: maximum amount, repayment term, interest rate, and repayment frequency. Not every self-directed plan includes this feature by default.",
      "Once a loan is issued, the repayment schedule needs to be followed and documented like any other plan record: payment date, amount, and running balance. A loan that falls behind on its documented schedule can create consequences for the plan, so maintaining the paperwork is not optional.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Check the actual plan",
          paragraph:
            "Confirm whether participant loans are permitted and what terms apply. The amount available is a calculation based on the applicable rules and facts, not simply the account balance.",
        },
        {
          heading: "Formalize the arrangement",
          paragraph:
            "Complete the required documents and establish a repayment schedule before treating a transfer as an authorized loan. Existing loans may affect the analysis.",
        },
        {
          heading: "Track repayments",
          paragraph:
            "Keep the schedule, evidence of payments, and records of changes. If a payment is missed or circumstances change, request help promptly rather than waiting for year end.",
        },
      ],
      checklist: [
        "Confirm plan permission",
        "Gather existing loan and account information",
        "Complete the required loan documents",
        "Track every repayment",
      ],
      relatedServiceSlugs: ["participant-loans"],
    },
  },
  {
    number: "06",
    slug: "distributions",
    level: "foundations",
    kicker: "Distributions",
    title: "Prepare a distribution request",
    description:
      "A distribution request should describe the proposed payment and provide the records needed to evaluate and process it.",
    minutes: 6,
    body: [
      "A distribution is money leaving the plan, to the participant, a beneficiary, or in some cases directly to a third party. Before requesting one, be clear on the type: a routine distribution, a required minimum distribution, a hardship distribution, or a rollover out to another account each has different rules attached.",
      "A complete request typically includes the participant's identifying information, the amount and reason for the distribution, and how it should be paid (check, wire, or transfer to another custodian). Having this ready in writing, rather than requested verbally, keeps the record clear from the start.",
      "After the distribution is processed, file the confirmation alongside the original request. That pairing (what was asked for, and what actually happened) is the same pattern that makes every other plan record easy to review later.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Confirm the permitted event",
          paragraph:
            "Eligibility for a payment depends on the plan, payment type, and participant circumstances. A request form alone does not establish that the payment is permitted.",
        },
        {
          heading: "Separate the accounts",
          paragraph:
            "Pretax, Roth, and other after-tax records may affect tax treatment. Preserve records of contributions, prior movements, and any basis rather than assuming all balances have the same treatment.",
        },
        {
          heading: "Assign reporting responsibilities",
          paragraph:
            "Clarify who calculates withholding, processes payment, prepares reporting, delivers participant copies, and files required forms. These may be separate tasks.",
        },
      ],
      checklist: [
        "Identify the payment purpose",
        "Gather account-type records",
        "Confirm eligibility and tax questions",
        "Assign payment and reporting responsibilities",
      ],
      relatedServiceSlugs: ["distributions-rmds", "reporting-notices"],
    },
  },
  {
    number: "07",
    slug: "annual-records",
    level: "foundations",
    kicker: "Annual requirements",
    title: "Build your annual records packet",
    description:
      "A year-end packet brings the year into one place. It helps the people responsible for your plan see what happened and what still needs attention.",
    minutes: 8,
    body: [
      "Most of the work of annual plan administration is really just organization: gathering everything that happened over the year into one place so it can be reviewed, reported, and filed correctly. A packet built as the year goes, rather than assembled from memory in January, is far less work.",
      "A useful packet includes a contribution summary, a distribution summary, any loan activity, a current asset list with values as of year-end, and copies of any plan amendments or changes made during the year. If your plan held property or a private investment, include whatever documentation supports its year-end value.",
      "Once assembled, the packet becomes the reference point for whoever prepares required filings or reviews the plan going forward, including you, next year, trying to remember what happened this year.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Reconcile activity",
          paragraph:
            "Gather contributions, rollovers, loans, distributions, and investment activity. Check that the records agree with the relevant account statements and transaction documents.",
        },
        {
          heading: "Gather values",
          paragraph:
            "Identify what valuations or supporting records are needed for the assets held. Record the relevant date and source of each value. A balance shown today may differ from a required year-end value.",
        },
        {
          heading: "Confirm the applicable filings",
          paragraph:
            "Filing requirements depend on the plan and circumstances. Confirm what applies, who prepares each filing, who submits it, and how submission will be evidenced. Service renewal is a separate administrative matter.",
        },
      ],
      checklist: [
        "Collect year-end account and asset records",
        "Reconcile contributions and distributions",
        "Check participant loan payments",
        "Confirm filing responsibilities",
        "Retain evidence of completed work",
      ],
      relatedServiceSlugs: ["self-directed-401k", "self-directed-ira", "existing-plan-support"],
    },
  },
  {
    number: "08",
    slug: "plan-changes",
    level: "foundations",
    kicker: "Forms & plan changes",
    title: "Make a plan change with a clear record",
    description:
      "Changes to a business, trustee, participant, or plan feature may require different documents. Start by describing what is changing rather than selecting a form by its name alone.",
    minutes: 5,
    body: [
      "Plans change: a business is restructured, a trustee is replaced, a new participant joins, or a feature like a loan provision is added. Each of these is a different kind of change, and each may call for different paperwork, which is why it helps to describe the change in plain language before reaching for a specific form.",
      "Write down what is actually changing, who is involved, and when it should take effect. That description is what lets the appropriate professional identify exactly which amendment, form, or filing applies, rather than guessing from a form's title alone.",
      "Keep the record of the change (the description, the resulting document, and its effective date) with your other plan records. A plan's history of changes is often as useful as its current state when questions come up later.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Describe the change",
          paragraph:
            "State the current information, proposed information, reason, and desired effective date. Include the relevant business or personal change without sending unnecessary sensitive data.",
        },
        {
          heading: "Identify the proper work",
          paragraph:
            "An administrative update, sponsor change, amendment, and participant change are not interchangeable. The team should identify the appropriate process and scope from the facts.",
        },
        {
          heading: "Keep the completed version",
          paragraph:
            "Save the executed document and record which earlier information it replaces. Confirm whether any financial institution or other party also needs an update.",
        },
      ],
      checklist: [
        "Describe the current and proposed information",
        "Identify the required process",
        "Complete signatures where needed",
        "File the completed version and follow-up records",
      ],
      relatedServiceSlugs: ["self-directed-401k", "self-directed-ira", "existing-plan-support"],
    },
  },
  {
    number: "09",
    slug: "real-estate",
    level: "advanced",
    featured: true,
    kicker: "Real estate",
    title: "Before a retirement plan buys property",
    description:
      "Property brings contracts, expenses, ownership details, and ongoing records together. Preparing those facts early helps the appropriate professionals evaluate the proposed transaction.",
    minutes: 9,
    body: [
      "Real estate is one of the most requested (and most involved) assets a self-directed plan can hold. Before pursuing a specific property, it helps to separate the general education (how property ownership inside a retirement plan works) from the specific deal (this property, these terms, this timeline).",
      "General preparation includes understanding how the plan will hold title, how ongoing expenses (taxes, insurance, maintenance) will be paid from plan funds rather than personally, and how any income the property generates flows back into the plan. These are structural questions that apply regardless of which property you're considering.",
      "When an actual property enters the picture, gather the purchase contract, any financing terms, and a clear description of who is involved in the transaction. That packet is what allows the appropriate professional to review the specific deal. The facts of one property don't transfer from a general guide; they require their own look.",
    ],
    lesson: {
      video: {
        youtubeId: "HJUG9z3Qcxs",
        title: "Tim Berry on self-directed IRAs and real estate",
        caption: "Tim Berry discusses IRAs in this video. Review your actual plan and account terms separately.",
      },
      chapters: [
        {
          heading: "Map the entire transaction",
          paragraph:
            "Identify the buyer, seller, related parties, proposed use, financing, and people providing services. The relationship between parties and the intended use deserve attention before a commitment is made.",
        },
        {
          heading: "Prepare the cash and documents",
          paragraph:
            "Gather the proposed contract, projected costs, funding information, and account details. Ask how title, signatures, expenses, and records should be handled for the actual arrangement.",
        },
        {
          heading: "Plan ongoing administration",
          paragraph:
            "Ownership continues after closing. Prepare for income, expenses, valuation records, and eventual sale or distribution. Obtain advice about transaction restrictions and potential taxes where relevant.",
        },
      ],
      checklist: [
        "List parties and relationships",
        "Describe use and financing",
        "Gather the contract and proposed cash flows",
        "Identify professional review needs",
        "Plan ongoing records",
      ],
      relatedServiceSlugs: ["preferred-llcs", "real-estate-transactions", "ubit-planning"],
    },
  },
  {
    number: "10",
    slug: "private-lending",
    level: "advanced",
    featured: true,
    kicker: "Private lending",
    title: "Prepare a private lending transaction",
    description:
      "Private lending requires a clear understanding of the borrower, terms, security, documents, and payment process. Education does not replace review of a specific deal.",
    minutes: 8,
    body: [
      "Private lending lets a plan act as the lender, putting capital to work through a promissory note rather than a traditional investment. It's a flexible option, but each loan is its own transaction with its own terms, so understanding the mechanics in general is only the first step.",
      "For any specific loan, be ready to document the borrower, the loan amount and term, the interest rate, any security or collateral involved, and how and when payments will be made back to the plan. A promissory note and, where applicable, a lien or security agreement are the documents that make the arrangement enforceable.",
      "Because every borrower and every deal is different, treat each private lending transaction as its own review, even if you've done several before. The terms that made a previous loan sound don't automatically apply to the next one.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Identify the parties and terms",
          paragraph:
            "Describe the borrower and relevant relationships, the amount, purpose, payment schedule, interest terms, and proposed collateral. Avoid relying on a verbal description alone.",
        },
        {
          heading: "Review documentation and responsibilities",
          paragraph:
            "Have the appropriate professionals assess the proposed documents and transaction. Identify who handles signatures, security instruments, recording, and ongoing servicing.",
        },
        {
          heading: "Prepare for the life of the loan",
          paragraph:
            "Track payments, balances, correspondence, and collateral information. Decide how missed payments and changes will be addressed before they arise.",
        },
      ],
      checklist: [
        "Identify borrower and relationships",
        "Collect proposed terms and collateral records",
        "Arrange professional document review",
        "Assign servicing responsibility",
        "Set up payment records",
      ],
      relatedServiceSlugs: ["private-lending", "shared-equity-financing"],
    },
  },
  {
    number: "11",
    slug: "roth-strategies",
    level: "advanced",
    kicker: "Roth strategies",
    title: "Separate the Roth questions",
    description:
      "Roth is a tax designation, not a single transaction. A useful conversation begins by identifying the account, the source of funds, and the action being considered.",
    minutes: 8,
    body: [
      "\"Roth\" describes a tax treatment, not one specific move: a Roth contribution, a Roth conversion, and a Roth account holding existing assets are three different situations with different rules and different consequences. Conversations get clearer once these are separated.",
      "Start by identifying which of these applies to you: are you contributing new money directly to a Roth account, converting existing pre-tax funds into a Roth account, or asking about an account that is already Roth-designated? Each answer points toward a different set of questions.",
      "From there, the source of the funds and your current tax situation are what determine whether a specific Roth strategy makes sense. This is exactly the kind of individual-facts question that benefits from a real conversation rather than a general rule of thumb.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Name the action",
          paragraph:
            "A contribution, conversion, rollover, and distribution may raise different questions. Confirm which features your actual arrangement supports before considering a specific action.",
        },
        {
          heading: "Organize the tax records",
          paragraph:
            "Keep pretax, designated Roth, and other after-tax information distinct. Records of basis and earlier transactions may matter. Do not infer tax treatment solely from a transfer amount.",
        },
        {
          heading: "Build a professional question list",
          paragraph:
            "Ask about eligibility, tax treatment, reporting, timing, and the interaction with your broader circumstances. Obtain a defined analysis before proceeding with a material transaction.",
        },
      ],
      checklist: [
        "Identify the action and account",
        "Confirm available plan features",
        "Gather tax and basis records",
        "Prepare questions for your tax professional",
      ],
      relatedServiceSlugs: ["contribution-planning", "roth-conversion-planning"],
    },
  },
  {
    number: "12",
    slug: "ubit",
    level: "advanced",
    kicker: "UBIT & transaction restrictions",
    title: "Recognize when an investment needs tax review",
    description:
      "Holding an investment through a retirement arrangement does not remove every possible tax question. The asset, activity, financing, and structure matter.",
    minutes: 8,
    body: [
      "Retirement accounts are generally tax-advantaged, but that advantage isn't unlimited. Certain kinds of income (commonly, income from an actively run trade or business, or income tied to debt-financed property) can trigger a tax at the plan level, separate from the participant's personal return.",
      "The questions that tend to raise this issue include: does the investment involve borrowed money (debt financing) inside the plan, and does the activity look more like operating a business than passively holding an asset? Neither answer is obvious from the asset type alone. A rental property financed with a mortgage inside the plan raises different questions than one purchased outright.",
      "If your investment involves financing, an operating business, or a structure you haven't used before, treat the tax question as its own review rather than an assumption. It's better addressed before the transaction than after.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Describe the underlying activity",
          paragraph:
            "Gather information about what generates the income, how the activity is conducted, and the entities involved. An investment label alone may not explain the underlying tax facts.",
        },
        {
          heading: "Include financing and ownership details",
          paragraph:
            "Provide the proposed debt terms and ownership structure to the reviewing professional. Different arrangements and investments may receive different treatment.",
        },
        {
          heading: "Obtain the required analysis",
          paragraph:
            "Ask whether reporting or tax obligations arise and who will handle them. Treat a general lesson as preparation for that conversation, not as an individual conclusion.",
        },
      ],
      checklist: [
        "Describe the underlying activity",
        "Collect entity and financing details",
        "Identify potential filing questions",
        "Obtain the appropriate review",
      ],
      relatedServiceSlugs: ["preferred-llcs", "real-estate-transactions", "ubit-planning"],
    },
  },
  {
    number: "13",
    slug: "retirement-income",
    level: "advanced",
    kicker: "Distribution planning",
    title: "Organize a retirement income conversation",
    description:
      "Retirement income planning connects the timing of payments with account rules, personal needs, taxes, and records. Begin with an organized picture of the facts.",
    minutes: 7,
    body: [
      "Turning retirement savings into retirement income involves more than deciding to start taking distributions. Timing, account type, required minimums, and your broader tax picture all interact, which is why this conversation benefits from a full picture rather than a single account viewed in isolation.",
      "Before that conversation, gather a simple inventory: every retirement account you hold, its type, its approximate balance, and any required distribution rules that apply to it because of your age. Add your other income sources so the full picture (not just the retirement accounts) is visible.",
      "With that organized, the appropriate professional can help sequence withdrawals in a way that fits your actual needs and rules, rather than defaulting to whichever account is easiest to access first.",
    ],
    lesson: {
      chapters: [
        {
          heading: "List the accounts and needs",
          paragraph:
            "Gather account types, balances, ownership details, and the income needs you want to discuss. Include relevant personal circumstances and existing payment schedules.",
        },
        {
          heading: "Identify time-sensitive questions",
          paragraph:
            "Ask which obligations apply and how dates are determined. Do not use an old slide or a general age reference as a substitute for current individualized guidance.",
        },
        {
          heading: "Create a written follow-through plan",
          paragraph:
            "Separate proposed actions from confirmed instructions. Record who processes each payment and handles reporting so the plan becomes a practical sequence of tasks.",
        },
      ],
      checklist: [
        "Gather account and income information",
        "List timing questions",
        "Review the proposed approach",
        "Assign processing and reporting tasks",
      ],
      relatedServiceSlugs: ["distributions-rmds", "reporting-notices"],
    },
  },
  {
    number: "14",
    slug: "succession",
    level: "advanced",
    kicker: "Beneficiaries & succession",
    title: "Make important plan information findable",
    description:
      "The right people should know which records exist and where to find them. Administrative preparation supports a broader estate planning conversation.",
    minutes: 7,
    body: [
      "A retirement plan is only useful to the people who inherit it if they can find it and understand it. That starts with something simple but often overlooked: keeping beneficiary designations current, and making sure someone else knows those designations exist.",
      "Build a short reference document: each account, its custodian or administrator, current beneficiaries, and where the governing documents are kept. This isn't a substitute for an estate plan, but it's the administrative layer that makes an estate plan actually executable when the time comes.",
      "Revisit this document after any major life change (marriage, divorce, a new account, a death in the family) since beneficiary designations don't update themselves, and an outdated one can override even a carefully written will.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Locate the current records",
          paragraph:
            "Find beneficiary designations, successor information, and the relevant plan documents. Record dates and identify any gaps or changes in circumstances.",
        },
        {
          heading: "Coordinate with the wider plan",
          paragraph:
            "Retirement plan records and estate documents may interact. Ask the appropriate professional to review proposed changes rather than assuming one document automatically updates another.",
        },
        {
          heading: "Create a document location guide",
          paragraph:
            "List the documents, responsible contacts, and secure storage locations. Share access deliberately with the right people and keep the guide current.",
        },
      ],
      checklist: [
        "Locate designations and successor records",
        "Identify changes in circumstances",
        "Coordinate professional review",
        "Create a document location guide",
      ],
      relatedServiceSlugs: ["charitable-remainder-trusts", "estate-inheritance-planning", "grat-planning"],
    },
  },
  {
    number: "15",
    slug: "asset-protection",
    level: "advanced",
    kicker: "Asset protection",
    title: "Prepare for an asset protection review",
    description:
      "Asset protection depends on the facts, jurisdiction, timing, and documents. Useful preparation means organizing the picture before asking for a conclusion.",
    minutes: 8,
    body: [
      "Asset protection planning is highly fact-specific: what works depends on which state's laws apply, what's already in place, and when a given step is taken relative to any claim or risk. There's no single structure that applies the same way to everyone, which is why preparation matters more than a quick answer.",
      "Before a review, put together a clear inventory: what assets you're asking about, how they're currently owned or titled, and what existing entities, trusts, or insurance already provide some protection. Note your state of residence and where the assets themselves are located, since both affect which rules apply.",
      "Bring this picture to the appropriate professional rather than a specific structure you've heard about elsewhere. The right approach follows from your facts, not the other way around.",
    ],
    lesson: {
      chapters: [
        {
          heading: "Map ownership and obligations",
          paragraph:
            "List relevant assets, owners, entities, and existing obligations. Give the reviewing attorney accurate facts rather than only the desired outcome.",
        },
        {
          heading: "Explain the timing",
          paragraph:
            "Pending disputes, existing claims, and earlier transfers may affect the analysis. Discuss them with counsel before making changes.",
        },
        {
          heading: "Define the engagement",
          paragraph:
            "Ask for a clear scope covering the questions, jurisdictions, documents, and follow-up work involved. Education is a starting point for that engagement.",
        },
      ],
      checklist: [
        "List ownership and entities",
        "Gather existing documents",
        "Identify relevant obligations and timing",
        "Prepare questions for counsel",
      ],
      relatedServiceSlugs: ["charitable-remainder-trusts", "estate-inheritance-planning", "powers-of-appointment"],
    },
  },
  {
    number: "16",
    slug: "advanced-planning",
    level: "advanced",
    kicker: "Advanced case studies",
    title: "Evaluate an advanced planning idea",
    description:
      "Advanced ideas are most useful when their assumptions are visible. Work backward from the proposed result to the facts and steps required.",
    minutes: 9,
    body: [
      "Advanced planning ideas (a particular trust structure, an entity layer, a financing technique) often arrive secondhand: from a presentation, an article, or someone else's experience. The idea itself is a starting point for questions, not a plan you can adopt as-is.",
      "A useful way to evaluate one is to work backward: what result is the idea supposed to produce, and what facts and conditions does it assume are true for you? Many advanced strategies depend on specific circumstances (a particular asset type, a certain account balance, a specific state's laws) that may or may not match your situation.",
      "Bring the idea, along with your actual facts, to the appropriate professional for review. Their job is to determine whether the idea fits, what work it would take to implement, and who should handle it, decisions that belong in a written engagement, not a hallway conversation.",
    ],
    lesson: {
      chapters: [
        {
          heading: "State the actual objective",
          paragraph:
            "Describe the problem you want to solve and the constraints that matter. A strategy name is not an objective. Different goals may call for different approaches.",
        },
        {
          heading: "Identify assumptions and tradeoffs",
          paragraph:
            "List the account types, entities, parties, timing, and resources involved. Ask what could make the approach unsuitable and what obligations continue afterward.",
        },
        {
          heading: "Obtain a scoped analysis",
          paragraph:
            "Charitable arrangements, Roth strategies, and other complex structures require individual review. Define the analysis and implementation work separately so the next step is clear.",
        },
      ],
      checklist: [
        "Write the objective",
        "List key assumptions",
        "Identify costs and ongoing obligations",
        "Request a defined professional analysis",
      ],
      relatedServiceSlugs: ["contribution-planning", "roth-conversion-planning", "preferred-llcs"],
    },
  },
];
