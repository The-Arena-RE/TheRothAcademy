export const hero = {
  eyebrow: "The $30,000 Private Loan",
  title: ["What If Your IRA Could Be the Lender", "Instead of the Borrower?"],
  goldLine: 1,
  description:
    "You've probably borrowed money before — a mortgage, a car loan, maybe a business loan. Someone provides money, someone else agrees to repay it, and the lender may earn interest. But have you ever considered that your retirement account could potentially be the lender? An appropriate Self-Directed IRA may be able to lend money to certain qualifying, unrelated borrowers. The IRA could own a legally documented loan, and the interest actually collected would belong to the retirement account. But the borrower might pay late, might fail to repay the principal, and collateral doesn't guarantee that the IRA will recover its money.",
  whoItsFor:
    "For people curious about private lending, existing IRA owners who understand interest-bearing accounts but not private loans, and anyone who has never considered that a retirement account might become a lender.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const borrowerVsLender = {
  eyebrow: "The Revelation",
  heading: ["You Don't Have to Own the Property", "to Potentially Earn Money From a Real Estate-Backed Investment."],
  leftLabel: "The Borrower",
  rightLabel: "The IRA Lender",
  rows: [
    { left: "Owns the property.", right: "Owns the promissory note." },
    { left: "Has the obligation to repay the loan.", right: "May hold a valid security interest under the legal documents." },
    { left: "Bears the operating responsibilities associated with its property.", right: "Has contractual rights to repayment, and bears the risk that the borrower will fail to pay." },
  ],
  footnote: "Owning a mortgage or deed of trust is not the same as owning the real estate. A retirement account may potentially participate in real estate financing without becoming the property's owner.",
};

export const emilyStory = {
  eyebrow: "Meet the Investor",
  heading: ["Emily Has $120,000 in Her IRA.", "She's Never Considered Making a Private Loan."],
  stories: [
    {
      label: "Illustrative First-Time Private Lender",
      headline: "Emily knows how loans work from the borrower's side — car payments, mortgage statements. She's never imagined lending retirement money.",
      scenario:
        "Emily is 46, an operations manager with no business ownership, whose investment experience is primarily conventional retirement funds. She has $120,000 in a traditional IRA. For this illustration, assume Emily has made an eligible trustee-to-trustee transfer into an appropriate traditional Self-Directed IRA arrangement whose custodian supports the proposed promissory note and related collateral documents. No Roth conversion occurs; the account remains a traditional IRA.",
      realization: "\"Could her IRA make a $30,000 loan? How would the monthly payments work? And what happens if the borrower stops paying?\"",
      risk: "Emily is a fictional illustration, not a verified Roth Academy customer. Those are exactly the questions this lesson explores.",
    },
  ],
};

export const harborYardBorrower = {
  eyebrow: "Meet the Borrower",
  heading: ["An Independent Business Needs $30,000", "to Purchase Commercial Land."],
  intro:
    "Private loans can involve very different laws depending on the borrower, property, loan purpose, lender activity, and state. Loans secured by a consumer's home can raise substantial federal and state mortgage-lending, licensing, disclosure, and servicing requirements, so this introductory lesson uses a fictional business borrower purchasing non-owner-occupied commercial-use real estate instead — a more clearly defined educational scenario, though it does not eliminate all lending laws.",
  figures: [
    { label: "Fictional Borrower", value: "Harbor Yard LLC" },
    { label: "Business", value: "Equipment Storage & Supply" },
    { label: "Proposed Purchase", value: "Non-Owner-Occupied Commercial Lot" },
    { label: "Hypothetical Purchase Price", value: "$50,000" },
    { label: "Borrower's Contribution", value: "$20,000" },
    { label: "Requested Loan", value: "$30,000" },
  ],
  disclaimer: "Harbor Yard LLC has no prohibited relationship to Emily or her IRA under this example's assumptions — its owners are unrelated to her, she owns or controls no part of the company, and she receives no personal payment, commission, employment, or other special benefit from the transaction. Her IRA would not become a partner in Harbor Yard LLC; it would simply be the lender under the approved arrangement.",
};

export const loanAgreementTerms = {
  eyebrow: "The $30,000 Loan Agreement",
  heading: ["What Would a $30,000 Private Loan", "Actually Look Like?"],
  intro:
    "The loan is fictional. No actual loan is available through this module. Principal is the amount originally lent. Interest is what the borrower agrees to pay for using the money. Interest-only payments cover scheduled interest without reducing the original principal, and a balloon payment is the large final payment due at maturity. For this simplified example, interest is calculated on the unchanged $30,000 principal, with no compounding, origination charges, or principal reductions during the term: $30,000 × 10% = $3,000 of annual interest, or $250 a month, for total scheduled cash payments of $33,000 (interest plus the return of principal — not a $33,000 profit).",
  figures: [
    { label: "Loan Principal", value: "$30,000" },
    { label: "Annual Interest Rate (Fixed)", value: "10%" },
    { label: "Loan Term", value: "12 Months" },
    { label: "Scheduled Monthly Interest Payment", value: "$250" },
    { label: "Principal Due at Maturity (Month 12)", value: "$30,000" },
    { label: "Total Scheduled Cash Payments", value: "$33,000" },
    { label: "Collateral", value: "Borrower's Commercial-Use Lot" },
    { label: "Proposed Lien Position", value: "First Priority (Assumed)" },
  ],
  disclaimer: "A $250 monthly interest payment doesn't mean the borrower is paying down the original $30,000 — that principal is a separate obligation due at the end of month 12. If every payment arrives, the gross interest gain would be $3,000 before fees, taxes, and other relevant costs.",
};

export const balloonPaymentRevelation = {
  eyebrow: "The Balloon Payment Revelation",
  heading: ["Small Monthly Payments Can Hide", "a Very Large Final Obligation."],
  goldLine: 1,
  paragraphs: [
    "A $250 monthly payment may sound manageable, but this is an interest-only loan — the borrower isn't gradually paying off the $30,000 principal. At the end of the twelve-month term, the full principal remains due, so the borrower must find a way to repay $30,000 at maturity: available business cash, selling an asset, obtaining permitted refinancing, or another legitimate source of funds. None of those outcomes is guaranteed. A balloon payment is a contractual structure with particular repayment risk, not something inherently improper.",
  ],
  featured: "A borrower who can afford the monthly interest may still be unable to repay the principal at maturity. The largest repayment risk may appear at the very end of the loan.",
};

export const promiseToPaymentLedger = {
  eyebrow: "The Promise-to-Payment Ledger",
  heading: ["A Loan Agreement Shows What Is Owed.", "Let's See What Actually Arrives."],
  intro:
    "All three scenarios share the same loan: $30,000 principal, 10% fixed annual rate, $250 scheduled monthly interest, a 12-month term, $120,000 of starting traditional IRA cash, and $90,000 of cash remaining immediately after the $30,000 is funded. The promised schedule never changes — only what actually arrives does.",
  scenarios: [
    {
      key: "on-schedule",
      label: "Every Payment Arrives",
      status: "The borrower pays exactly as agreed",
      description:
        "Harbor Yard LLC makes every scheduled payment: $250 each month for months 1 through 11, and at month 12 a final payment of $250 of current interest plus the $30,000 principal — $30,250 total. The two ledger pathways align perfectly throughout. This is a successful gross repayment illustration excluding applicable account expenses, loan servicing costs, taxes, and other financial activity — not a guarantee of investment performance.",
      figures: [
        { label: "Interest Actually Collected", value: "$3,000" },
        { label: "Principal Received", value: "$30,000" },
        { label: "Illustrative Ending IRA Cash", value: "$123,000" },
        { label: "Gross Investment Gain", value: "$3,000" },
      ],
      statement: "When every payment arrives, the IRA receives its principal back plus the agreed interest, before applicable costs.",
    },
    {
      key: "late-then-caught-up",
      label: "Payments Arrive Late",
      status: "The borrower falls behind but eventually catches up",
      description:
        "The borrower makes the first six monthly interest payments ($1,500 collected), then financial problems develop and the five payments scheduled for months 7 through 11 ($1,250 scheduled but unpaid) do not arrive on time. At month 12, assume the borrower obtains sufficient funds to pay all missed interest, the current month's interest, and the original principal — a $31,500 receipt. The final gross financial result matches the first scenario, but for several months the IRA did not receive the expected interest, which could matter if the account needed available cash.",
      figures: [
        { label: "Interest Actually Collected", value: "$3,000" },
        { label: "Principal Received", value: "$30,000" },
        { label: "Illustrative Ending IRA Cash", value: "$123,000" },
        { label: "Gross Investment Gain", value: "$3,000" },
      ],
      statement: "The same total payment can arrive on a very different schedule.",
    },
    {
      key: "default",
      label: "Borrower Defaults",
      status: "The borrower stops paying and never repays the $30,000",
      description:
        "The borrower makes six scheduled interest payments ($1,500 collected), then the payments stop, and at month 12 the original principal is not repaid. Assume lawful enforcement of the properly documented mortgage or deed of trust takes until month 16, when the collateral sells for a gross $25,000; after $8,000 of legal, enforcement, and sale expenses, the IRA nets $17,000. At month 12, before any recovery, available IRA cash is only $91,500 ($90,000 + $1,500) — the defaulted loan's current value is still uncertain at that point. Do not treat the month 16 recovery as having occurred at month 12.",
      figures: [
        { label: "Interest Actually Collected (Before Default)", value: "$1,500" },
        { label: "Net Collateral Recovery (Month 16)", value: "$17,000" },
        { label: "Illustrative Ending IRA Cash (After Final Recovery)", value: "$108,500" },
        { label: "Net Investment Loss", value: "$11,500" },
      ],
      statement: "Collateral can reduce certain risks. It cannot guarantee that the IRA gets its money back.",
    },
  ],
  tableColumns: [
    { label: "Interest Actually Collected", index: 0 },
    { label: "Illustrative Ending IRA Cash", index: 2 },
  ],
  comparisonNote: "The loan documents describe an obligation. Only actual payments and recoveries determine the money returned to the IRA. Do not count unpaid interest as cash received, and do not assume pledged collateral automatically belongs to the IRA.",
  conclusion: "One stated interest rate. Three completely different financial experiences.",
};

export const collateralAndForeclosureReality = {
  eyebrow: "The Collateral Reveal",
  heading: ["The Loan Is Secured by Land.", "Why Could the IRA Still Lose Money?"],
  intro:
    "$30,000 divided by the assumed $50,000 property value is 60% — the loan-to-value ratio. A 60% initial loan-to-value ratio does not guarantee that the lender can recover 60%, 100%, or any other amount: property value can decline, the property may be difficult to sell, the lien may be defective or junior to another valid claim, taxes may have priority, and legal action can be expensive. A default does not automatically transfer the collateral into the lender's name — enforcement can involve notices, professionals, competing claims, and a possible property sale, applying proceeds according to legal priority and expenses.",
  figures: [
    { label: "Assumed Property Value at Acquisition", value: "$50,000" },
    { label: "IRA Loan Principal", value: "$30,000" },
    { label: "Initial Loan-to-Value Ratio", value: "60%" },
    { label: "Later Gross Collateral Sale Price (Month 16)", value: "$25,000" },
    { label: "Enforcement & Sale Expenses", value: "$8,000" },
    { label: "Net Recovery", value: "$17,000" },
  ],
  disclaimer: "Collateral can provide a path to possible recovery. The amount recovered may still be far less than the unpaid loan — $17,000 net recovery against a $30,000 unpaid principal in this fictional default scenario.",
};

export const lienPriorityAndBorrowerQuality = {
  eyebrow: "What Actually Matters Beyond the Rate",
  heading: ["Having Collateral Isn't the Same as a Valid Claim.", "And the Borrower Matters More Than the Rate."],
  goldLine: 1,
  paragraphs: [
    "A loan agreement saying the borrower is providing land as collateral is not, by itself, enough to establish every necessary legal protection. A properly secured real estate loan may require a mortgage or deed of trust and appropriate recording under state law — title, priority, ownership, and legal description all matter. A first position claim is intended to have priority over certain other secured creditors, though actual priority depends on the relevant law, recording, and competing interests; a junior lien sits behind another creditor's interest and may recover little or nothing if higher-priority claims consume the sale proceeds. A title search can help identify competing liens and restrictions before they become a surprise.",
    "A loan can also offer an attractive interest rate, but the borrower still has to make the payments. An investor should want to understand how the borrower earns money, whether it has existing debt, what the loan is for, whether it has realistic repayment resources, and — especially in an interest-only balloon loan — whether repayment depends on refinancing or selling property at maturity. Harbor Yard LLC plans to use the land for business purposes, but it still must repay $30,000 at maturity; if it cannot obtain the necessary funds, it could default even if the monthly interest payments were affordable.",
  ],
  note: "The strongest-looking note can become a weak investment when the borrower cannot repay it. The property may be worth something, but legal priority affects how much the lender can actually recover.",
};

export const loanVsEquity = {
  eyebrow: "A Loan Is Not an Ownership Stake",
  heading: ["Lending $30,000 Doesn't Mean", "Owning Part of the Company."],
  leftLabel: "Private Loan",
  rightLabel: "Private Equity Investment",
  rows: [
    { left: "The IRA provides capital under a loan agreement.", right: "The IRA purchases a qualifying ownership interest." },
    { left: "The borrower owes principal and applicable interest.", right: "Investment value and distributions depend on the ownership terms and business performance." },
    { left: "The IRA generally does not automatically acquire an ownership percentage.", right: "Principal repayment is not necessarily promised." },
  ],
  footnote: "A lender may have a repayment claim. An equity owner has a different kind of investment interest. If the company becomes more valuable, the lender does not automatically share in that increase merely because it made the loan.",
};

export const whoReceivesPayments = {
  eyebrow: "Who Receives the Payments?",
  heading: ["The Borrower Pays the IRA,", "Not Emily Personally."],
  goldLine: 1,
  paragraphs: [
    "The loan is owned by the Self-Directed IRA arrangement, so the legitimate payments belong to the IRA — the interest does not automatically become Emily's personal income, and the repayment of principal returns capital to the retirement account. The account owner should not simply direct payments to a personal checking account or mix the loan proceeds with personal funds. A permitted IRA distribution is a separate retirement-account transaction with its own tax consequences depending on account type and circumstances.",
  ],
  note: "The retirement account is the investor. The retirement account receives the investment proceeds.",
};

export const loanYouCannotMake = {
  eyebrow: "The Loan You Cannot Make",
  heading: ["Your IRA Cannot Simply Lend You $30,000."],
  goldLine: 1,
  paragraphs: [
    "An IRA may be able to make certain qualifying investments in loans, but that doesn't mean the account owner can personally borrow from the IRA. The IRS states that loans from an IRA to its owner are not permitted, and lending money between an IRA and a disqualified person can constitute a prohibited transaction, with consequences that can include loss of the IRA's favorable tax status. Do not assume your IRA may lend money to you personally, to your spouse, to your child or other disqualified family member, to a business you own or control, or through another person merely to avoid the prohibited relationship — and do not assume you may receive personal compensation because the IRA funded the loan.",
    "Not every person known to the IRA owner is automatically disqualified, but a loan involving an acquaintance, friend, family business, service provider, or other related entity requires review of the actual relationships and benefits. An apparently unrelated borrower can still create prohibited-transaction issues through indirect arrangements.",
  ],
  featured: "The IRA lending to a qualifying unrelated borrower is different from the IRA owner taking a loan from their own IRA. Do not look for a workaround.",
};

export const lendingRealitiesMisc = {
  eyebrow: "Three More Things to Understand",
  heading: ["A Familiar Borrower, a Homeowner, and a High Rate", "Each Raise Their Own Questions."],
  goldLine: 1,
  paragraphs: [
    "If a friend suggests your IRA could be the lender for their business opportunity, friendship alone does not necessarily make someone a disqualified person — but you still need to understand the borrower, the loan's economics, the relationships among the parties, and whether the transaction creates improper personal benefits, such as an indirect benefit if the borrower is expected to transfer funds to a disqualified person. A familiar borrower isn't automatically prohibited, and an unfamiliar borrower isn't automatically permissible.",
    "A loan to an unrelated business for a genuine commercial purpose is not necessarily regulated the same way as a loan to an individual purchasing or refinancing a personal residence — consumer home loans may involve federal mortgage disclosure requirements, state lending laws, originator licensing, servicing requirements, and other obligations. Some federal rules exempt qualifying business-purpose lending, but other requirements may still apply, and simply placing an LLC's name on the documents does not automatically determine the loan's regulatory treatment.",
    "Private lenders may also be attracted to higher interest rates, but loan pricing is subject to applicable laws — some states limit certain rates or fees, and an interest rate permissible in one setting may not be permissible in another. The fictional 10% rate in this lesson is included solely for simple educational arithmetic; it is not a determination that 10% would be lawful everywhere, nor an advertised Roth Academy product or market-based expected return.",
  ],
  note: "An attractive stated rate means little unless the loan is legally permissible and the borrower can actually repay.",
};

export const documentsAndNoteValue = {
  eyebrow: "The Documents and What the Note Is Really Worth",
  heading: ["A Loan Agreement Matters Because", "the Financial Rights Have to Be Clear."],
  goldLine: 1,
  paragraphs: [
    "A serious private loan should not depend on a casual promise or a text message. A promissory note generally establishes the borrower's obligation to repay — the actual lender and borrower, the amount funded, the interest rate, the payment schedule, the maturity date, permitted fees, events of default, and more. A mortgage or deed of trust may separately establish a security interest in real estate, with recording and other legal requirements affecting enforceability and priority depending on the jurisdiction. Some promissory notes are securities, subject to applicable registration, exemption, disclosure, and licensing rules; other bilateral commercial loans may be treated differently, and the classification requires legal analysis.",
    "Private loans are also not always easy to value. A statement might identify the original principal balance, but that doesn't mean the borrower can repay it. An investor should distinguish the contractual amount owed, the note's current estimated recoverable value, and the cash actually held by the IRA — after default, the expected recovery may be materially lower than the unpaid balance, and a private loan may also be difficult to sell to another investor.",
  ],
  note: "The financial idea may be simple. The legal documents must properly establish what everyone has agreed to — and an IOU can represent a legal claim without being worth its full face amount in the market.",
};

export const unsecuredAndRefinancingRisk = {
  eyebrow: "Two More Risk Factors",
  heading: ["No Collateral. Or a Plan to Refinance.", "Both Deserve a Closer Look."],
  goldLine: 1,
  paragraphs: [
    "Not every private loan is secured. Some rely primarily on the borrower's contractual promise and financial ability to repay, which can create additional recovery risk since a lender may have fewer practical ways to recover money after default. But secured and unsecured describe legal credit support — they do not automatically tell you whether a loan is a good investment; a poorly documented secured loan can be risky too, and an unsecured loan to a financially strong borrower may carry less risk than a secured loan to a distressed one.",
    "An interest-only loan with a balloon payment may also depend on a borrower's plan to refinance — obtaining a new loan to repay the existing one. But future financing is uncertain: interest rates can change, property values can decline, a lender may refuse the new application, the borrower's financial condition may deteriorate, and refinancing may simply take longer than expected.",
  ],
  note: "A plan to refinance is not the same as having the money available to repay.",
};

export const servicingAndTax = {
  eyebrow: "Servicing Costs and Tax Treatment",
  heading: ["Someone Has to Track the Loan.", "And the Interest's Tax Treatment Is a Separate Question."],
  goldLine: 1,
  paragraphs: [
    "A private loan may require ongoing administration — payment processing, recordkeeping, interest calculations, tracking principal, monitoring maturity, providing required notices, and coordinating qualified professionals after default. A professional third-party loan servicer may be appropriate, and the account owner should not assume they may personally receive servicing fees or provide prohibited compensated services involving the IRA investment. A $3,000 gross interest amount may be reduced by fees and other costs — do not automatically call that the net profit after all expenses.",
    "If an appropriate traditional Self-Directed IRA makes a qualifying private loan, interest actually received generally belongs to the IRA, and ordinary investment interest is generally excluded from unrelated business taxable income under the applicable rules, subject to relevant exceptions. The account's own tax treatment still matters: a traditional IRA generally follows tax-deferred rules with pretax distributions generally taxable, while a Roth IRA's qualified distributions may be free from federal income tax when requirements are satisfied. Not every loan, lending business, or financing arrangement receives identical tax treatment, and personal loan losses are not automatically deductible on the IRA owner's individual tax return.",
  ],
  note: "Interest is only one side of the investment — the cost of managing and enforcing the loan matters too, and the IRA receives the investment payments while personal distribution taxes remain a separate question.",
};

export const warningSigns = {
  eyebrow: "Five Warning Signs",
  heading: ["Before Your IRA Lends $30,000,", "Look Beyond the Interest Rate."],
  steps: [
    { number: "01", title: "Guaranteed Return Language", description: "A private loan is not automatically risk-free. High promised interest combined with claims of safety can be a fraud warning sign." },
    { number: "02", title: "Unverified Collateral", description: "A borrower might claim that valuable property secures the loan. The investor still needs to verify ownership, value, lien rights, and priority." },
    { number: "03", title: "Unclear Repayment Plan", description: "If the borrower cannot explain how they intend to repay the principal, the maturity date may create significant risk." },
    { number: "04", title: "Related-Party Benefits", description: "A proposed loan may create prohibited-transaction concerns if it involves disqualified persons or improper personal benefits." },
    { number: "05", title: "Missing or Inadequate Documents", description: "A note, security instrument, title review, and appropriate legal compliance may be essential to establishing the intended rights." },
  ],
  note: "A compelling interest rate is not a substitute for investigating the borrower, collateral, and legal documents.",
};

export const investmentReviewSheet = {
  eyebrow: "The Private Lender's Investment Review Sheet",
  heading: ["Twelve Questions Before Your IRA", "Becomes the Lender."],
  steps: [
    { number: "01", title: "Who Is Borrowing & Why?", description: "Confirm the legal borrower and relevant owners, and understand the actual intended use of the proceeds." },
    { number: "02", title: "Can They Repay?", description: "Review credible evidence of cash flow and existing obligations, and understand the plan for the maturity payment." },
    { number: "03", title: "What Are the Real Terms?", description: "Verify the applicable interest-rate limits, maturity, payment schedule, fees, defaults, and remedies." },
    { number: "04", title: "Is the Collateral Valid?", description: "Verify the property, valuation, ownership, and condition, and confirm the security interest's documentation, recording, and priority." },
    { number: "05", title: "What If They Default?", description: "Understand enforcement procedures, costs, and potential recovery limitations, and review any prohibited relationships among the parties." },
    { number: "06", title: "Does This Fit the IRA?", description: "Confirm custodian approval and proper document handling, and consider liquidity, concentration, fees, time horizon, and possible total loss." },
  ],
  note: "A private lender's most important decision often happens before the money is funded.",
};

export const iraStructureDiversificationAndBeyond = {
  eyebrow: "A Few Last Things Worth Knowing",
  heading: ["The IRA Has to Be the Lender of Record.", "And a $30,000 Loan Isn't the Whole Account."],
  goldLine: 1,
  paragraphs: [
    "An appropriate Self-Directed IRA custodian must support the proposed investment, the loan documents must identify the legal lender correctly, and the IRA's investment funds must be disbursed through an appropriate arrangement, with payments returning to the correct account. A person should not personally fund a loan and later assume it can simply be transferred to their IRA — such transactions can create contribution, ownership, and prohibited-transaction concerns, and the correct structure must be considered before the loan is made.",
    "Emily begins with a fictional $120,000 traditional IRA, and the proposed $30,000 loan uses 25% of the starting account, leaving $90,000 available under the simplified assumptions. That is still a significant exposure to one borrower — the fictional allocation is not a recommendation to invest a quarter of retirement savings in any private loan, and diversification may reduce certain concentration risks without eliminating losses.",
    "Qualifying private loans can also involve different borrowers and purposes beyond real estate. Some are secured by business assets, equipment, or other collateral, and some are unsecured, each with its own legal, tax, securities, and lending requirements. This lesson used one commercial real estate-backed loan because it makes the repayment and collateral concepts easy to visualize — real estate collateral is only one possible arrangement within the broader private lending category.",
  ],
  note: "A single private loan may be only one investment, but its failure can still materially affect the retirement account.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["You Thought Retirement Investing Meant Owning Assets.", "What If Your IRA Could Also Be the Lender?"],
  goldLine: 1,
  paragraphs: [
    "Most people have spent part of their lives borrowing money — paying interest on cars, homes, businesses, and other purchases. But many have never considered what it means to be the lender. An appropriate Self-Directed IRA may be able to make qualifying loans to unrelated borrowers, introducing a different kind of investment opportunity based on a documented repayment obligation rather than direct ownership of property or a business.",
    "The same stated 10% rate produced three very different results in this lesson: a $3,000 gross gain when every payment arrived, the same $3,000 gross gain on a delayed schedule when the borrower caught up, and an $11,500 net loss when the borrower defaulted and collateral enforcement recovered only part of the principal. The rate is a promise. The return is an outcome.",
  ],
  featured: "The real opportunity begins when you understand exactly what your retirement account would own and what could happen if the borrower doesn't pay.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA lend money?", answer: "Potentially, yes. Some Self-Directed IRA custodians permit qualifying private loans to unrelated borrowers, subject to legal, custodial, and prohibited-transaction requirements." },
  { question: "Can a Roth IRA make private loans?", answer: "Potentially. An appropriate Self-Directed Roth IRA may hold qualifying promissory notes or other permitted lending investments. Roth IRA tax rules and prohibited-transaction restrictions still apply." },
  { question: "Can my IRA lend $30,000 to a business?", answer: "Potentially, if the borrower, loan purpose, terms, custodial arrangement, and transaction comply with applicable law. The dollar amount alone does not establish eligibility." },
  { question: "Can my IRA lend money to me personally?", answer: "No. IRA owners generally cannot borrow from their own IRAs. The IRS identifies such borrowing as a prohibited transaction." },
  { question: "Can my IRA lend money to my spouse or child?", answer: "Lending between an IRA and a disqualified person, including certain family members, can be prohibited. The specific relationship must be reviewed." },
  { question: "Can my IRA lend money to an LLC I own?", answer: "A loan to an entity owned or controlled by the IRA owner can create serious prohibited-transaction concerns. Forming an LLC does not automatically eliminate those restrictions." },
  { question: "Can my IRA lend money to a friend?", answer: "Potentially, but the actual relationships and transaction must be evaluated. Friendship alone is not necessarily a prohibited relationship, while indirect personal benefits can still create problems." },
  { question: "Can a Self-Directed IRA lend money to an unrelated business?", answer: "Potentially. Appropriate third-party business loans may be supported by some custodians, subject to applicable lending, securities, tax, and IRA rules." },
  { question: "Does the IRA own the property securing the loan?", answer: "Not automatically. A secured lender may hold a legal claim against the collateral rather than direct ownership of the property." },
  { question: "What is a promissory note?", answer: "A promissory note is a legal document describing an obligation to repay money under specified terms." },
  { question: "What is loan principal?", answer: "Principal is the amount originally lent. In the fictional example, the principal is $30,000." },
  { question: "What does a 10% annual interest rate mean?", answer: "Under the simplified fixed-interest example, 10% of $30,000 is $3,000 per year. Actual interest calculations and payments depend on the loan terms and whether the borrower pays." },
  { question: "Does a 10% interest rate guarantee a 10% return?", answer: "No. The borrower may default, payments may be delayed, and expenses or losses can reduce or eliminate the investment return." },
  { question: "What is an interest-only loan?", answer: "A loan in which scheduled periodic payments cover interest rather than reducing principal during the specified period." },
  { question: "What is a balloon payment?", answer: "A large amount due at maturity, often including the remaining principal balance." },
  { question: "Why is a balloon payment risky?", answer: "The borrower may be able to afford monthly interest but lack the cash to repay the principal at maturity." },
  { question: "What happens if a borrower pays late?", answer: "The consequences depend on the loan agreement and applicable law. Late payments can reduce available cash and may trigger default provisions or other expenses." },
  { question: "What happens if the borrower defaults?", answer: "The lender may have contractual and legal remedies, but collection can take time, cost money, and result in partial or total loss." },
  { question: "Is a loan secured by land guaranteed?", answer: "No. Collateral value can decline, legal claims may complicate recovery, and enforcement costs can consume sale proceeds." },
  { question: "What does first lien position mean?", answer: "It generally refers to an intended priority security interest over certain other claims. Actual priority depends on the law, documents, recording, and competing interests." },
  { question: "Can my IRA foreclose on collateral after default?", answer: "Certain secured IRA loan arrangements may provide legally enforceable remedies, subject to state law, custodial requirements, and other restrictions. Foreclosure is not automatic." },
  { question: "Can the IRA automatically take ownership of collateral when the borrower defaults?", answer: "No. Legal ownership and enforcement depend on the applicable documents and procedures. Default does not automatically transfer title." },
  { question: "Can a promissory note lose its value?", answer: "Yes. A note may become difficult to collect or sell, especially after borrower default. Its face amount may substantially exceed the cash ultimately recovered." },
  { question: "Are all private promissory notes securities?", answer: "No universal classification applies. Some notes are securities under applicable law, while other lending arrangements may be treated differently. The transaction requires legal review." },
  { question: "Do business-purpose loans have the same rules as homeowner mortgages?", answer: "Not necessarily. The loan's purpose, borrower, collateral, lender activity, and jurisdiction affect which consumer-protection, disclosure, licensing, and lending requirements apply." },
  { question: "Can I personally collect loan servicing fees from my IRA investment?", answer: "Do not assume so. Personal compensation and services involving IRA assets can raise prohibited-transaction concerns." },
  { question: "Where do private-loan interest payments go?", answer: "Payments belong to the IRA through the appropriate custodial arrangement when the IRA legally owns the loan." },
  { question: "Is interest from a private loan automatically tax-free?", answer: "No. Traditional and Roth IRA rules differ. Ordinary investment interest may receive favorable IRA-level treatment, but account distributions, special tax rules, and the specific arrangement matter." },
  { question: "Does an IRA custodian guarantee that a private loan is legitimate?", answer: "No. A legitimate Self-Directed IRA custodian does not necessarily evaluate the borrower, collateral, documents, investment quality, or fraud risk." },
  { question: "Is private lending better than investing in stocks?", answer: "Not automatically. Private loans, public securities, and other investments have different liquidity, costs, risks, and potential outcomes." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the general discussion of IRA investment flexibility and custodian restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports prohibited-transaction restrictions involving borrowing, lending, disqualified persons, and improper personal benefits.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Retirement Plan Investment FAQs", description: "Provides additional information about prohibited transactions and investment restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Retirement Plans FAQs Regarding Loans", description: "Confirms that IRA owners cannot take participant loans from IRAs, and explains why this differs from certain employer retirement plan loan provisions.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-loans" },
  { title: "IRS Publication 590-A", description: "Provides IRA contribution, funding, and account information.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Supports the discussion of distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "IRS Publication 598", description: "Provides information about unrelated business income, the general exclusion for ordinary investment interest, and applicable exceptions.", href: "https://www.irs.gov/publications/p598" },
  { title: "SEC Investor.gov: Promissory Notes", description: "Provides warnings about promissory note fraud, high-yield claims, registration, and investment risks.", href: "https://www.investor.gov/protect-your-investments/fraud/types-fraud/promissory-notes" },
  { title: "SEC Investor.gov: Promissory Notes Glossary", description: "Provides a beginner-friendly explanation of promissory notes as debt instruments.", href: "https://www.investor.gov/introduction-investing/investing-basics/glossary/promissory-notes" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports the discussion of self-directed custodial limitations, promissory notes, fraud, valuation, and illiquid assets.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
  { title: "CFPB Regulation Z, Section 1026.3", description: "Provides the federal regulation addressing specified exempt transactions, including certain business-purpose lending arrangements. Its exemptions do not establish that every business-purpose loan is exempt from every federal or state lending requirement.", href: "https://www.consumerfinance.gov/rules-policy/regulations/1026/3/" },
  { title: "CFPB Regulation X, Section 1024.5", description: "Provides relevant coverage and exemption provisions for certain mortgage-related transactions.", href: "https://www.consumerfinance.gov/rules-policy/regulations/1024/5/" },
];

export const finalConversion = {
  heading: ["You Thought Retirement Investing Meant Owning Assets.", "What If Your IRA Could Also Be the Lender?"],
  description:
    "An appropriate Self-Directed IRA may be able to make qualifying loans to unrelated borrowers, introducing a different kind of investment opportunity. But a stated interest rate is not a guaranteed return, collateral isn't a guarantee against loss, and the legal structure matters.",
  signature: "Emily and the fictional Harbor Yard LLC in this module are entirely fictional educational illustrations.",
};
