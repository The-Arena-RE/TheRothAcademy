export const hero = {
  eyebrow: "Monthly Payments From Land Sales",
  title: ["What If Selling One Piece Of Land", "Could Create Five Years Of Payments To Your Retirement Plan?"],
  goldLine: 1,
  description:
    "Imagine your Self-Directed 401(k) owns a vacant lot and a buyer wants it — but instead of paying the entire price in cash, the buyer proposes a down payment and monthly installments. Under an appropriately structured transaction, the retirement plan may potentially sell the property and hold a secured note for the remaining balance. No payment is guaranteed. But the investment possibility is worth understanding.",
  whoItsFor: "For anyone who assumed selling retirement-owned real estate only meant one lump-sum check at closing.",
  primaryCta: { label: "Start My Self-Directed 401(k)", href: "/apply" },
};

export const twoWaysToSell = {
  eyebrow: "The Two Ways To Sell",
  heading: ["You Can Receive The Entire Price At Closing.", "Or You May Be Able To Accept Payments Over Time."],
  leftLabel: "All-Cash Sale",
  rightLabel: "Seller-Financed Sale",
  rows: [
    { left: "Sale price: $24,000.", right: "Sale price: $24,000." },
    { left: "Payment timing: At closing.", right: "Down payment: $4,000. Financed balance: $20,000." },
    { left: "Future scheduled note payments: None.", right: "Repayment term: 60 months." },
    { left: "Main attraction: Immediate liquidity, subject to closing and expenses.", right: "Main attraction: Potential principal and interest payments over time." },
  ],
  footnote:
    "The seller-financed transaction is not automatically better. A cash sale provides money sooner; a financed sale depends on future collections. The interest payments may increase the nominal total collected, but the seller also faces time, inflation, default risk, servicing expenses, and potential collection costs. A bigger total of scheduled payments doesn't automatically mean a better investment.",
};

export const alexStory = {
  eyebrow: "Meet Alex",
  heading: ["Alex Bought A Lot As An Investment.", "The Buyer Wants To Pay Monthly."],
  stories: [
    {
      label: "Illustrative Example",
      headline: "Alex Bought A Lot As An Investment. The Buyer Wants To Pay Monthly.",
      scenario:
        "Alex is 38 and operates a legitimate independent business that qualifies for the contemplated Self-Directed 401(k). For this hypothetical example, the plan purchases a vacant lot from an unrelated seller for $12,000. After holding the property for a period, Alex identifies an unrelated buyer who wants to purchase the land for $24,000 — but the buyer doesn't have the entire amount at closing. Instead, the buyer proposes $4,000 down, with the remaining $20,000 paid over five years at 10% annual interest.",
      realization:
        "Alex has a new question: could the retirement plan sell the property and receive these payments over time? The buyer is genuinely unrelated to Alex and is not otherwise a disqualified person, and the transaction must not indirectly benefit Alex or Alex's related business.",
      risk:
        "Alex, the buyer, the property, and the prices are all fictional. Assume the seller-financed transaction is permitted under applicable plan documents, federal and state lending laws, real estate law, and the actual transaction circumstances. The 10% rate is fictional — not a current market quote or a recommendation.",
    },
  ],
};

export const sellerFinancingMeaning = {
  eyebrow: "What Does Seller Financing Actually Mean?",
  heading: ["The Buyer Gets The Land.", "The Retirement Plan Holds The Payment Obligation."],
  paragraphs: [
    "In a typical secured seller-financed land sale, the seller transfers ownership of the property to the buyer at closing. The buyer signs a legally enforceable promise to pay the remaining purchase price, and a properly documented security instrument may give the seller rights involving the property if the buyer fails to perform.",
    "When the seller is a Self-Directed 401(k), the retirement plan must hold the relevant financial rights through its authorized legal structure. The plan becomes the party entitled to receive the payments; the buyer becomes responsible for the debt. The legal structure varies by jurisdiction — a contract for deed or installment land contract can operate differently from a deed delivered at closing with a separate note and recorded lien, and those structures can create different legal and consumer-protection issues.",
  ],
  featured: "After a typical secured seller-financed closing, the retirement plan may own the note rather than the land itself.",
};

export const documentsThree = {
  eyebrow: "Three Important Documents",
  heading: ["What Actually Makes The Arrangement", "Legally Enforceable?"],
  items: [
    { number: "01", title: "Purchase Agreement", description: "Describes the sale and agreed financing terms." },
    { number: "02", title: "Promissory Note", description: "Documents the buyer's obligation to repay the financed amount according to the agreed terms." },
    { number: "03", title: "Security Instrument", description: "A mortgage, deed of trust, or other appropriate instrument may secure the payment obligation with an interest in the property, according to the law of the applicable state." },
  ],
  note: "The hypothetical example assumes title is properly transferred to the unrelated buyer at closing, with a separately documented, appropriately perfected security interest retained for the retirement plan. This is an educational description, not a universal closing template.",
};

export const paymentTimeline = {
  eyebrow: "The 60-Payment Timeline",
  heading: ["$20,000 Financed. Sixty Payments.", "What Actually Happens To The Money?"],
  intro:
    "The retirement plan receives the $4,000 down payment at closing. The buyer owes the remaining $20,000 over sixty monthly payments at a 10% annual nominal rate — a scheduled installment of about $424.94. But not every dollar of that $424.94 is interest: some pays interest, some reduces what the buyer still owes, and the balance changes over time. \"Fully amortizing\" means the regular payments are designed to repay the loan balance and interest over the agreed period, leaving nothing owed at the end if all payments are made as required.",
  summary: [
    { label: "The Original Sale", value: "$24,000" },
    { label: "Down Payment Received", value: "$4,000" },
    { label: "Financed Balance", value: "$20,000" },
  ],
  checkpoints: [
    { key: "p1", label: "Payment 1", payment: "$424.94", interest: "$166.67", principal: "$258.27", remaining: "$19,741.73", note: "The first payment is $424.94. Of that amount, approximately $166.67 covers interest for the month; the remaining $258.27 reduces the amount owed. The buyer paid $424.94 — the loan balance fell by $258.27." },
    { key: "p12", label: "Payment 12", payment: "$424.94", interest: "$141.98", principal: "$282.96", remaining: "$16,754.65", note: "After twelve scheduled monthly payments, the loan balance has declined. The interest portion of the payment is smaller than it was at the beginning — as the balance declines, less of each regular payment is interest and more goes toward principal." },
    { key: "p24", label: "Payment 24", payment: "$424.94", interest: "$112.35", principal: "$312.59", remaining: "$13,169.47", note: "Two years into the schedule, the buyer has reduced the original $20,000 loan balance. The repayment relationship is gradually shifting — more of the fixed payment is reducing principal." },
    { key: "p36", label: "Payment 36", payment: "$424.94", interest: "$79.62", principal: "$345.32", remaining: "$9,208.87", note: "Three years into the hypothetical note, the remaining principal balance has fallen below $10,000. The buyer still must continue making payments, and the retirement plan has not been guaranteed future collections merely because earlier payments were made." },
    { key: "p48", label: "Payment 48", payment: "$424.94", interest: "$43.46", principal: "$381.48", remaining: "$4,833.54", note: "Four years into the schedule, most of the original financed balance has been repaid, and the interest portion of the installment is now much smaller." },
    { key: "p60", label: "Payment 60", payment: "$424.99", interest: "$3.51", principal: "$421.48", remaining: "$0.00", note: "Under the fictional schedule, the buyer has now made every required payment. The final payment is adjusted slightly to account for monthly rounding, and the debt balance reaches zero. Sixty payments were scheduled — if all sixty are actually collected, the note can be fully repaid." },
  ],
  totals: [
    { label: "Total Installment Payments Collected", value: "$25,496.45" },
    { label: "Total Principal Repaid", value: "$20,000" },
    { label: "Total Contractual Interest Collected", value: "$5,496.45" },
    { label: "Total Gross Cash Received (Incl. Down Payment)", value: "$29,496.45" },
  ],
  totalsNote: "The sale price was $24,000. The scheduled interest brings the total possible collections higher, but only if the buyer pays according to the note. These totals assume complete performance.",
  scenarios: [
    {
      key: "onTime",
      label: "Every Payment Arrives",
      description: "Imagine the buyer makes every scheduled payment. The retirement plan receives the down payment, then the monthly installments arrive, and the unpaid principal balance gradually falls. After the final adjusted payment, the balance reaches zero.",
      figures: [
        { label: "Down Payment Received", value: "$4,000" },
        { label: "Total Principal Repayments", value: "$20,000" },
        { label: "Total Interest Collected", value: "$5,496.45" },
        { label: "Total Gross Cash Collected", value: "$29,496.45" },
      ],
      statement: "A payment schedule shows what is owed. A complete payment history shows what was actually collected.",
    },
    {
      key: "missed",
      label: "Payment Thirteen Doesn't Arrive",
      description: "Imagine the buyer makes twelve payments, then payment thirteen becomes due and nothing arrives. The retirement plan still holds a payment obligation, but now there is a problem — the buyer may have lost income, may be disputing something, or may simply refuse to pay. The retirement plan cannot assume future installments will be collected.",
      figures: [
        { label: "Installments Collected (12 Months)", value: "$5,099.28" },
        { label: "Principal Repaid Through Month 12", value: "$3,245.35" },
        { label: "Interest Collected Through Month 12", value: "$1,853.93" },
        { label: "Remaining Principal At Default", value: "$16,754.65" },
      ],
      statement: "The next payment can be scheduled without ever arriving.",
    },
    {
      key: "payoff",
      label: "The Buyer Pays Off Early",
      description: "Now imagine the buyer makes the first twelve payments, then decides to pay off the remaining balance immediately. In this fictional example, the note permits early payoff without a penalty — but the retirement plan won't collect the remaining scheduled future interest, because the debt is paid off early.",
      figures: [
        { label: "Down Payment + First 12 Installments", value: "$9,099.28" },
        { label: "Immediate Principal Payoff", value: "$16,754.65" },
        { label: "Total Cash Collected", value: "$25,853.93" },
        { label: "Interest Collected (vs. $5,496.45 If Full Term)", value: "$1,853.93" },
      ],
      statement: "An early payoff may return the principal sooner. It also means the retirement plan won't collect the future interest that would have accrued over the remaining term.",
    },
  ],
  conclusion: "The buyer makes the payment. The retirement plan owns the financial benefit — but only for what is actually collected.",
};

export const planOwnsNote = {
  eyebrow: "What Does The Retirement Plan Actually Own After Closing?",
  heading: ["The Buyer Owns The Land.", "The Retirement Plan Holds The Note."],
  paragraphs: [
    "Before the sale, the retirement plan owns the property. After the hypothetical secured seller-financed closing, the retirement plan has sold the property to the unrelated buyer — the buyer now holds title, subject to the properly established security interest, and the retirement plan holds the promissory note and associated security rights.",
    "That is a fundamentally different investment. The property might originally have been a piece of real estate; now the plan's primary asset arising from the financed sale is a contractual right to receive payments. The actual rights depend on the completed transaction and recorded instruments — beneficial ownership, legal title, and lien rights are not the same thing.",
  ],
  featured: "The property becomes the buyer's asset. The payment obligation becomes the retirement plan's asset.",
};

export const paymentTwoParts = {
  eyebrow: "Every Payment Has Two Parts",
  heading: ["$424.94 Arrives.", "But It Isn't All Profit."],
  intro:
    "One of the most common misunderstandings about seller financing is treating every monthly installment as investment profit. Using payment one as the example:",
  figures: [
    { label: "Scheduled Payment", value: "$424.94" },
    { label: "Interest Portion", value: "$166.67" },
    { label: "Principal Repayment", value: "$258.27" },
    { label: "Remaining Balance After Payment", value: "$19,741.73" },
  ],
  disclaimer:
    "The $258.27 reduces the buyer's outstanding debt. The $166.67 represents interest earned under the loan's terms for that month. Both amounts are received by the retirement plan when collected, but they have different financial meanings. Principal repayments, interest, sale consideration, and investment gains may have different accounting and tax treatment — this illustration does not calculate taxable income.",
};

export const whoReceivesMoney = {
  eyebrow: "Who Actually Receives The Money?",
  heading: ["The Monthly Payments Belong To The Retirement Plan,", "Not Your Personal Bank Account."],
  items: [
    { number: "01", title: "Unrelated Buyer", description: "Makes the required monthly payment." },
    { number: "02", title: "Authorized Payment Or Servicing Arrangement", description: "Records and processes the payment under the plan's legal structure." },
    { number: "03", title: "Self-Directed 401(k)", description: "Receives and accounts for the funds as a plan asset — not the account holder's personal spending money." },
  ],
  note: "A third-party loan servicer may be appropriate to handle payments, statements, records, and delinquency notices — but hiring a servicer does not automatically resolve every lending, licensing, tax, or retirement-plan requirement. Do not mix note payments with personal or business funds, or spend them outside the applicable retirement-plan distribution rules.",
};

export const noteOwnershipCost = {
  eyebrow: "What Does It Cost To Own The Note?",
  heading: ["Receiving Payments Can Have Expenses Too."],
  intro:
    "Seller financing may sound simple — a buyer pays monthly, the retirement plan collects. But a properly documented note can involve ongoing responsibilities: loan servicing, recordkeeping, payment tracking, tax monitoring, required notices, legal advice, collection efforts, and lien release procedures after payoff.",
  figures: [
    { label: "Scheduled Monthly Payment", value: "$424.94" },
    { label: "Illustrative Monthly Servicing Expense", value: "$15.00" },
    { label: "Servicing Expense Over 60 Months", value: "$900" },
  ],
  disclaimer:
    "The $15 monthly amount is fictional — not a real quote or market average. Actual servicing fees, minimums, setup charges, and default-related expenses may differ. Scheduled collections are not the same thing as money remaining after the costs of managing the investment.",
};

export const fullEconomics = {
  eyebrow: "The Full Investment Economics",
  heading: ["What Could This Entire Fictional Land Transaction", "Look Like If Every Payment Arrived?"],
  intro:
    "This simplified cash-flow illustration connects the original land purchase, the seller-financed sale, and five years of scheduled collections — assuming complete buyer performance. It does not predict real investment returns.",
  figures: [
    { label: "Land Purchased", value: "$12,000" },
    { label: "Land Sold (Contract Price)", value: "$24,000" },
    { label: "Total Assumed Cash Expenses", value: "$14,800" },
    { label: "Total Gross Cash Collected", value: "$29,496.45" },
    { label: "Illustrative Nominal Cumulative Cash Surplus", value: "$14,696.45" },
  ],
  disclaimer:
    "Total assumed cash expenses of $14,800 include the $12,000 land purchase, $800 acquisition and title expenses, $400 pre-sale carrying expenses, $700 seller closing and note-documentation costs, and $900 of five-year servicing expenses. The $14,696.45 surplus is not a guaranteed profit, official taxable gain, annualized return, or present-value calculation — it assumes every scheduled payment is collected, with no unexpected costs, defaults, or additional taxes beyond the stated assumptions. A larger total collected over time isn't automatically worth more than cash received today; the time value of money, inflation, and collection risk all matter.",
};

export const buyerDefaults = {
  eyebrow: "What If The Buyer Defaults?",
  heading: ["Monthly Payments Are Only Valuable", "When The Buyer Actually Makes Them."],
  intro:
    "Imagine the buyer has been paying for a year, then the payments stop. The retirement plan may still have legal rights under the note and security documents, but enforcing those rights can take time and cost money — the plan may recover some, all, or none of what is owed.",
  items: [
    { number: "01", title: "What Does The Note Say?", description: "The payment terms and default provisions matter." },
    { number: "02", title: "What Security Was Properly Established?", description: "A properly recorded and enforceable security interest can affect recovery rights." },
    { number: "03", title: "What Is The Property Worth Now?", description: "Collateral value may be less than the amount owed." },
    { number: "04", title: "What Will Enforcement Cost?", description: "Legal, servicing, property, and collection expenses may reduce recovery." },
    { number: "05", title: "How Long Will Resolution Take?", description: "Money tied up in a defaulted note may remain unavailable for an extended period." },
  ],
  note: "A deed of trust or mortgage may provide security. It does not guarantee repayment. The retirement plan cannot simply repossess the land immediately or assume it is entitled to retain all prior payments and automatically take the property — borrower rights, notice requirements, cure periods, foreclosure procedures, and bankruptcy protections vary by state and situation. The value of a secured note depends on more than the interest rate; it depends on whether the payment obligation can actually be collected.",
};

export const buyerMatters = {
  eyebrow: "The Buyer Matters As Much As The Land",
  heading: ["A Beautiful Payment Schedule Cannot Fix", "A Borrower Who Cannot Pay."],
  leftLabel: "Buyer A",
  rightLabel: "Buyer B",
  rows: [
    { left: "Has verified financial information appropriate to the proposed transaction.", right: "Has not provided sufficient information." },
    { left: "Can support the proposed payment.", right: "Has limited ability to support the payment." },
    { left: "Understands the purchase and repayment obligations.", right: "Has unresolved repayment questions." },
  ],
  footnote:
    "The note's interest rate tells you what the buyer promises to pay. It doesn't tell you whether the buyer can actually pay. The hypothetical investment buyer and transaction must be evaluated according to the laws governing that specific credit arrangement, including consumer protection, fair lending, and privacy law — never through protected personal characteristics.",
};

export const sellerFinancingLaw = {
  eyebrow: "The Seller-Financing Law Question",
  heading: ["Selling Land On Payments", "Can Create Lending Responsibilities."],
  intro:
    "A seller-financed transaction is not simply an ordinary cash sale with a few extra payments — it involves an extension of credit. Depending on the buyer, property, use, transaction structure, frequency of transactions, and jurisdiction, different laws may apply, including consumer credit requirements, state licensing, interest-rate restrictions, disclosures, and foreclosure procedures.",
  items: [
    { number: "01", title: "The Property", description: "What is being sold?" },
    { number: "02", title: "The Buyer", description: "Who is borrowing?" },
    { number: "03", title: "The Purpose", description: "Why is the buyer purchasing the land?" },
    { number: "04", title: "The Financing", description: "What does the repayment agreement require?" },
    { number: "05", title: "The Jurisdiction", description: "Which laws govern the transaction?" },
  ],
  note: "The ability to offer financing is not unlimited simply because you own the land. Federal mortgage loan-originator rules involving dwelling-secured credit do not automatically apply identically to every vacant land transaction, but vacant land financing is not universally exempt from lending and consumer-protection law either — the actual facts control.",
};

export const contractForDeed = {
  eyebrow: "The Contract For Deed Distinction",
  heading: ["Not Every Land Payment Contract Gives", "The Buyer The Same Ownership Rights."],
  leftLabel: "Deed And Secured Note",
  rightLabel: "Contract For Deed",
  rows: [
    { left: "Buyer receives legal title at closing, subject to security.", right: "Legal title may remain with the seller until specified conditions are satisfied." },
    { left: "Seller retains a secured payment obligation.", right: "Buyer's contractual and equitable rights depend on the documents and law." },
  ],
  footnote:
    "Seller financing describes a financial arrangement. It doesn't tell you exactly how the land and the buyer's rights are legally handled. Some contract-for-deed arrangements have historically exposed buyers to serious risks, especially when the buyer makes substantial payments without receiving legal title. No document type is universally required or legally preferable in every jurisdiction.",
};

export const financeToYourself = {
  eyebrow: "Could The Retirement Plan Finance A Sale To Yourself?",
  heading: ["Your Retirement Plan Cannot Simply", "Become Your Personal Land Seller."],
  intro:
    "Transactions involving sales, exchanges, lending, or extensions of credit between a retirement plan and its owner or other disqualified persons are generally prohibited. A fair price does not automatically fix the problem — neither does a commercial interest rate.",
  items: [
    { number: "01", title: "Selling To The Plan Owner Personally", description: "Generally prohibited related-party transaction." },
    { number: "02", title: "Seller Financing To The Owner's Spouse", description: "Generally prohibited related-party transaction." },
    { number: "03", title: "Financing The Owner's Personal Business", description: "Generally raises prohibited-transaction concerns." },
    { number: "04", title: "Selling To A Genuinely Unrelated Buyer", description: "May be considered, subject to the plan, lending, real estate, and other applicable rules." },
  ],
  note: "The retirement plan may finance an unrelated buyer in a permitted transaction. It cannot simply use the sale to benefit its own owner.",
  linkLabel: "Learn About Prohibited Transactions",
  linkHref: "/services/self-directed-401k/prohibited-transactions",
};

export const noteTracking = {
  eyebrow: "The Note Is An Investment That Needs To Be Tracked",
  heading: ["A Promissory Note Isn't Just Paper.", "It's A Retirement-Plan Asset."],
  intro:
    "After the sale, the retirement plan may own a note with a substantial unpaid balance. That obligation has financial value, but the value is not necessarily equal to the number printed on the note — a performing loan may be worth more than one that has been delinquent for months.",
  items: [
    { number: "01", title: "Original Principal", description: "$20,000 under the fictional example." },
    { number: "02", title: "Amount Repaid", description: "Changes as payments are collected." },
    { number: "03", title: "Remaining Balance", description: "Changes over time." },
    { number: "04", title: "Collection Status", description: "Performing, delinquent, or resolved." },
    { number: "05", title: "Investment Valuation", description: "Requires appropriate facts and records — not simply the remaining contractual principal." },
  ],
  note: "What the borrower owes and what the note is worth are not always the same number. Qualified plans holding private loans must appropriately account for and value their assets under the applicable requirements.",
};

export const taxesOnSaleInterest = {
  eyebrow: "What About Taxes On The Sale And Interest?",
  heading: ["The Retirement Plan May Receive Interest.", "That Doesn't Mean The Transaction Is Automatically Tax-Free."],
  intro:
    "Interest income from certain ordinary investment arrangements is generally excluded when calculating unrelated business taxable income, but the rules contain exceptions — and the underlying sale of land can introduce separate questions.",
  items: [
    { number: "01", title: "Investment Land Sale", description: "May receive different treatment from an active land-dealing business, subject to applicable rules." },
    { number: "02", title: "Interest On A Permitted Note", description: "Ordinary investment interest is generally excluded from unrelated business taxable income, subject to exceptions and the actual structure." },
    { number: "03", title: "Regular Land Sales Activity", description: "Could create unrelated business taxable income questions if the activity constitutes an unrelated trade or business involving property held primarily for sale to customers." },
  ],
  note: "The way a retirement plan invests, sells, and receives payments can affect tax treatment. Do not assume a specific number of sales proves or disproves dealer status, or that an investor can operate a high-volume land financing business inside a retirement plan without additional tax consequences.",
};

export const sellingOrBuyingNote = {
  eyebrow: "Selling Land Or Buying A Note?",
  heading: ["There May Be More Than One Way For A Retirement Plan", "To Own A Payment Obligation."],
  intro:
    "This lesson begins with land the retirement plan already owns, sold to an unrelated buyer under a qualifying financing arrangement. But that isn't the only possible note-related investment — some plans may also be able to acquire qualifying third-party notes or make properly structured private loans to unrelated borrowers. The concepts look similar, but the transaction structures and requirements are not identical.",
  items: [
    { number: "01", title: "Sell Retirement-Owned Land With Financing", description: "The plan sells property it owns and holds the buyer's note." },
    { number: "02", title: "Purchase An Existing Third-Party Note", description: "The plan considers buying an existing payment obligation, subject to lawful assignment, valuation, documentation, security, and other requirements." },
    { number: "03", title: "Make A Direct Private Loan", description: "The plan considers lending to an unrelated borrower under appropriate terms and restrictions." },
  ],
  note: "The retirement plan may potentially own a financial claim backed by real estate, even when it no longer owns the land itself.",
  linkLabel: "Explore Private Lending",
  linkHref: "/services/self-directed-401k/private-lending",
};

export const closingReflection = {
  eyebrow: "The Real Opportunity",
  heading: ["A Vacant Lot Could Become", "More Than A One-Time Sale."],
  paragraphs: [
    "Imagine someone who has always thought about selling real estate in one way: find a buyer, agree on a price, close the transaction, receive the proceeds. Now they've discovered something different — a qualifying Self-Directed 401(k) may potentially sell an investment property and hold a lawful, secured promise to pay the remaining purchase price.",
    "The land becomes somebody else's property. The note becomes the retirement plan's asset. Payments may arrive over time, principal is gradually repaid, interest may be earned, and the account may consider other permitted investments with the funds it actually receives. But each future payment remains uncertain until collected.",
  ],
  featured: "A sale can end your ownership of the land without necessarily ending the retirement plan's financial interest in the transaction.",
};

export const faqItems = [
  {
    question: "Can a Self-Directed 401(k) sell land with owner financing?",
    answer: "Certain Self-Directed 401(k) plans may be able to sell qualifying real estate to an unrelated buyer under a lawful seller-financing arrangement. The transaction must satisfy the plan's terms, prohibited-transaction rules, applicable lending laws, and real estate requirements.",
  },
  {
    question: "Can a Solo 401(k) receive monthly payments from a land sale?",
    answer: "Potentially, yes. If the plan lawfully sells property and holds the buyer's payment obligation, it may receive principal and interest under the note. Future payments are not guaranteed.",
  },
  {
    question: "Is the entire monthly payment interest income?",
    answer: "No. Under an amortizing note, a monthly payment generally includes principal repayment and interest. The proportions change as the balance declines.",
  },
  {
    question: "What happens if the buyer stops paying?",
    answer: "The note and security documents determine contractual rights, subject to applicable laws. Recovery may involve notices, negotiations, servicing, legal proceedings, or foreclosure. The retirement plan may incur costs or suffer a loss.",
  },
  {
    question: "Can the retirement plan simply take the property back if the buyer defaults?",
    answer: "Not automatically. Enforcement rights and procedures depend on the note, security documents, jurisdiction, and applicable borrower protections. The plan cannot assume immediate repossession.",
  },
  {
    question: "Can a Self-Directed 401(k) seller-finance property to its owner?",
    answer: "A sale or extension of credit between a retirement plan and its owner generally raises prohibited-transaction concerns. Fair-market terms do not automatically make such transactions permissible.",
  },
  {
    question: "What is a contract for deed?",
    answer: "A contract for deed is a type of property financing arrangement in which legal title may remain with the seller until specified payment obligations are satisfied. Its legal consequences and buyer protections can differ significantly from a deed delivered at closing with a secured note.",
  },
  {
    question: "Is interest on a retirement-owned note always tax-free?",
    answer: "Not universally. Ordinary investment interest is generally excluded from unrelated business taxable income, but exceptions and other tax considerations can apply depending on the structure and activities.",
  },
  {
    question: "Is collecting $29,496.45 over five years better than receiving $24,000 in cash today?",
    answer: "Not necessarily. Future payments involve time, repayment uncertainty, servicing costs, inflation, opportunity cost, and potential collection expenses. The larger nominal total does not establish a superior risk-adjusted investment.",
  },
  {
    question: "Does every seller-financed land sale require a mortgage loan originator license?",
    answer: "There is no universal answer. Requirements depend on the transaction's facts, property, buyer, loan purpose, frequency of activity, federal and state laws, and available exclusions. Vacant land is not a universal exemption from financing regulations.",
  },
];

export const references = [
  {
    title: "IRS: Retirement Plan Investments FAQs",
    description: "Supports general retirement-plan investment and prohibited-transaction concepts.",
    href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs",
  },
  {
    title: "IRS: Issue Snapshot — Third-Party Loans From Plans",
    description: "Especially important for private note ownership, loan-related plan requirements, valuation, and investment restrictions.",
    href: "https://www.irs.gov/retirement-plans/issue-snapshot-third-party-loans-from-plans",
  },
  {
    title: "IRS: Retirement Topics — Prohibited Transactions",
    description: "Supports related-party financing and self-dealing restrictions.",
    href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions",
  },
  {
    title: "IRS Publication 598",
    description: "Relevant to interest income, real estate sales, dealer-property distinctions, and unrelated business taxable income.",
    href: "https://www.irs.gov/publications/p598",
  },
  {
    title: "IRS: One-Participant 401(k) Plans",
    description: "Supports eligibility and owner-only plan concepts.",
    href: "https://www.irs.gov/retirement-plans/one-participant-401k-plans",
  },
  {
    title: "CFPB: Regulation Z, Section 1026.36",
    description: "Relevant to certain dwelling-secured credit and seller-financing loan-originator rules.",
    href: "https://www.consumerfinance.gov/rules-policy/regulations/1026/36/",
  },
  {
    title: "CFPB: Contract For Deed Lending Report",
    description: "Relevant to differences between contract-for-deed structures and conventional mortgage-backed seller financing, including buyer risks.",
    href: "https://www.consumerfinance.gov/data-research/research-reports/report-on-contract-for-deed-lending/",
  },
  {
    title: "CFPB: Regulation Z Definitions",
    description: "Relevant to regulatory definitions affecting consumer credit, dwellings, and loan transactions.",
    href: "https://www.consumerfinance.gov/rules-policy/regulations/1026/2/",
  },
  {
    title: "IRS: Form 5500-EZ",
    description: "Relevant to reporting obligations for qualifying one-participant plans.",
    href: "https://www.irs.gov/forms-pubs/about-form-5500-ez",
  },
];

export const finalConversion = {
  heading: ["What If Your Retirement Plan Could Own", "More Than Land? What If It Could Own The Note?"],
  description:
    "A vacant lot may be an investment. A private loan may also be an investment. And under an appropriately structured transaction, a Self-Directed 401(k) may potentially sell qualifying land to an unrelated buyer and hold the payment obligation — a down payment, a financed balance, scheduled monthly installments, principal, interest, a note supported by appropriate security. It's a completely different way to think about retirement investing. But the risks are real: buyers can default, notes can lose value, financing laws apply, and the retirement plan must keep its assets separate from the owner's personal finances. The financial future is never guaranteed, but the investment possibility is worth exploring.",
  signature: "Your retirement plan may be able to own actual land. It may also be able to hold certain secured payment obligations arising from a permitted sale.",
};
