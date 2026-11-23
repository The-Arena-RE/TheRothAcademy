export const hero = {
  eyebrow: "The Tax Deed Auction",
  title: ["What If Your IRA Could Buy Real Estate", "at a Tax Deed Auction?"],
  goldLine: 1,
  description:
    "Imagine discovering a house scheduled for a public tax deed auction. It's a real property, in a real neighborhood, with an opening bid that catches your attention. Now imagine discovering that an appropriate Self-Directed IRA may be able to purchase qualifying real estate through an auction like this. But auctions can be deceptive. A low opening bid isn't the same as a low purchase price. Winning doesn't guarantee clear title. And the property may need substantially more money after the sale.",
  whoItsFor:
    "For curious real estate investors, existing IRA owners exploring alternative assets, and anyone who has heard of tax deeds but isn't sure how they differ from buying a house the ordinary way.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const certificateVsDeed = {
  eyebrow: "Tax Lien or Tax Deed?",
  heading: ["Last Time, the Investment Was a Certificate.", "This Time, It May Be the Property."],
  leftLabel: "Tax Lien Certificate",
  rightLabel: "Tax Deed",
  rows: [
    { left: "The investor holds a tax lien-related financial interest.", right: "The successful purchaser may acquire real estate through the statutory sale and deed process." },
    { left: "The property generally remains owned by the existing owner.", right: "Ownership, title, surviving interests, and possession require separate evaluation." },
    { left: "Redemption may produce applicable interest.", right: "Receiving a tax deed is not the same as a conventional purchase with ordinary warranties and readily insurable title." },
  ],
  footnote: "A tax lien certificate is an investment tied to unpaid taxes. A tax deed auction can involve purchasing the real estate itself.",
};

export const michaelStory = {
  eyebrow: "Meet the Investor",
  heading: ["Michael Has $120,000 in an IRA.", "He's Never Bought Property at an Auction."],
  stories: [
    {
      label: "Illustrative First-Time Auction Investor",
      headline: "Michael has never attended a property auction. His retirement savings have mostly been invested through conventional accounts.",
      scenario:
        "Michael is 45, a sales manager with no business ownership, limited real estate experience, and no auction experience. He has $120,000 in a traditional IRA. For this illustration, assume Michael establishes an appropriate Self-Directed IRA arrangement through an eligible transfer, the receiving custodian supports qualifying real estate acquired through public auction, and the IRA's proposed purchaser identity, funds, registration, and payment arrangements have been approved for the specific transaction before any bidding occurs. No personal purchase followed by an informal IRA transfer is contemplated.",
      realization: "He finds a fictional auction listing that looks interesting — a small residential house with an $18,000 opening bid.",
      risk: "Michael knows the asking price alone can't tell the entire story. He starts investigating. Michael is a fictional illustration, not a verified Roth Academy customer.",
    },
  ],
};

export const cypressHouseProfile = {
  eyebrow: "The Fictional Property",
  heading: ["A Small House. An $18,000 Opening Bid.", "A Lot of Questions."],
  intro:
    "At first glance, $18,000 seems interesting — a whole house, a public auction, an opening bid that may be much lower than the prices of nearby houses. But the opening bid is not an appraisal, not a guaranteed purchase price, and it doesn't tell you what the investment will cost after the auction. Florida law imposes special statutory opening-bid requirements for certain homestead-assessed property; Cypress House is assumed to be classified as nonhomestead on the latest tax roll, so this fictional $18,000 opening bid does not illustrate that homestead-specific formula. All details below are hypothetical — no real property is being advertised.",
  figures: [
    { label: "Property Name", value: "Cypress House (Fictional)" },
    { label: "Property Type", value: "Single-Family House" },
    { label: "Assessment Classification", value: "Nonhomestead" },
    { label: "Opening Bid", value: "$18,000" },
    { label: "Current Occupancy", value: "Unknown" },
    { label: "Title Condition", value: "Requires Professional Review" },
  ],
  disclaimer: "Current occupancy, interior condition, legal access, and utilities all require verification. No ordinary negotiated seller warranty is assumed, and no financing is assumed — Michael's Self-Directed IRA arrangement is the proposed purchaser.",
};

export const auctionRoom = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The Auction Room"],
  intro:
    "Before you bid, look beyond the auction screen. The same house stays in view — only the perspective changes. This is an educational illustration, not a live bidding simulator.",
  decisions: [
    {
      key: "property",
      label: "The Property",
      status: "review" as const,
      statusLabel: "Needs Verification",
      action: "What can you actually learn from the property?",
      explanation: "A beautiful photograph can create excitement, but tax deed property requires more than an attractive exterior. An investor should understand the parcel's legal description and actual boundaries, whether the property has legally sufficient road access, its physical condition, whether anyone currently occupies it, utility availability, local restrictions, flood and environmental concerns, and whether the property can legally be used as intended. The auction listing may not answer these questions.",
      takeaway: "A listing photograph tells you what the property looks like. It does not tell you what you may legally or financially be acquiring.",
    },
    {
      key: "auction-file",
      label: "The Auction File",
      status: "review" as const,
      statusLabel: "Time-Sensitive",
      action: "What does the auction actually require?",
      explanation: "In Florida, a tax deed sale is governed by statutory procedures. The auction generally begins at an opening bid calculated under applicable law, and the highest bidder may become the successful purchaser, subject to required payment and the statutory process — but the successful bidder must act quickly. Under Florida Statutes Section 197.542, the high bidder must generally post a nonrefundable deposit equal to the greater of 5% of the winning bid or $200, applied toward the final purchase price. Full payment of the winning bid, documentary stamp tax, and recording fees is generally required within 24 hours, excluding weekends and legal holidays, though a county's specific cutoff and payment methods must be verified. Failure to pay can cause the sale to be canceled and readvertised.",
      takeaway: "The auction can move quickly. The investment research and IRA funding arrangements must happen before the bid.",
    },
    {
      key: "investment-reality",
      label: "The Investment Reality",
      status: "review" as const,
      statusLabel: "Requires Careful Review",
      action: "Winning the auction doesn't make the problems disappear.",
      explanation: "Suppose Michael's IRA is the successful bidder — that can be exciting, but several important questions remain. What title will the deed convey? Are there surviving liens or easements? Does anyone occupy the property? Will a title company insure the ownership? Are repairs necessary? What expenses will the IRA need to pay? How difficult will the property be to resell? None of these categories — title, surviving interests, possession, condition, and total investment cost — should be treated as automatically cleared.",
      takeaway: "Winning the property is an event. Understanding the investment is a responsibility.",
    },
  ],
  note: "The property didn't change as you moved between perspectives. What you understood about it did.",
};

export const auctionBegins = {
  eyebrow: "The Auction Begins",
  heading: ["What If the Bidding Starts at $18,000", "and Doesn't Stop There?"],
  steps: [
    { number: "$18,000", title: "Opening Bid", description: "The fictional auction opens at the statutory calculated amount." },
    { number: "$24,000", title: "Another Bidder", description: "A competing bidder enters the fictional sequence." },
    { number: "$31,000", title: "Another Bidder", description: "The fictional bidding continues to climb." },
    { number: "$39,000", title: "Another Bidder", description: "Still more competing interest in the fictional sequence." },
    { number: "$48,000", title: "Final Winning Bid", description: "The fictional auction ends $30,000 above the original opening bid." },
  ],
  note: "An opening bid is not a promise that the property can be purchased at that amount. These numbers are completely fictional and do not represent a real auction or typical bidding pattern — the difference between the opening bid and the final bid is not a profit or investment return; it is simply the result of competitive bidding.",
};

export const winningBidBreakdown = {
  eyebrow: "The Winning Bid",
  heading: ["Michael's IRA Wins at $48,000.", "What Happens Now?"],
  intro:
    "Under the Florida statutory formula, the required deposit is the greater of 5% of the winning bid or $200. Five percent of $48,000 is $2,400, which exceeds $200, so the hypothetical deposit is $2,400. That deposit is part of the $48,000 purchase price — not an additional cost. For this simplified example, assume $1,400 of documentary stamp, recording, and other acquisition-related statutory or administrative expenses, an illustrative allowance rather than an actual county quote.",
  figures: [
    { label: "Winning Bid", value: "$48,000" },
    { label: "Required Deposit (5% of Winning Bid)", value: "$2,400" },
    { label: "Remaining Winning-Bid Balance", value: "$45,600" },
    { label: "Additional Acquisition Charges", value: "$1,400" },
    { label: "Total Initial Cash Expenditure", value: "$49,400" },
    { label: "IRA Cash Remaining After Purchase", value: "$70,600" },
  ],
  disclaimer: "Michael's traditional IRA started with $120,000. This calculation assumes the sale is completed, the required payment is accepted, and the tax deed is issued under the applicable procedures. It does not imply immediate possession, clear title, or guaranteed resale eligibility.",
};

export const deedAndTitleRealities = {
  eyebrow: "What the IRA Actually Receives",
  heading: ["A Tax Deed Is Real Property Ownership,", "but the Legal Details Matter."],
  goldLine: 1,
  paragraphs: [
    "After the required payment and statutory steps are completed, the clerk may issue and record a tax deed. The deed conveys the ownership interest provided by the applicable law, but a tax deed purchase is not identical to an ordinary real estate closing with standard seller representations. A tax deed is a legal instrument — it should not be confused with a title insurance policy, and it should not be portrayed as a guarantee of title free from every defect or competing claim.",
    "Tax deed sales can affect many existing property rights, but not every interest necessarily disappears. Florida law specifically addresses certain governmental liens, easements, and recorded restrictions that can survive a tax deed, and federal interests or errors in the underlying tax proceedings can also create title concerns. An investor must not assume that every lien, easement, restriction, or competing legal claim is automatically removed.",
  ],
  featured: "The deed may convey a valuable ownership interest without clearing every possible legal problem.",
};

export const insuranceAndPossession = {
  eyebrow: "Insurability and Possession",
  heading: ["A Tax Deed Doesn't Automatically Make", "the Property Easy to Resell — or Easy to Enter."],
  goldLine: 1,
  paragraphs: [
    "A future buyer may want title insurance, and a mortgage lender may require it, but a tax deed can create underwriting concerns that differ from an ordinary purchase. A title company may require additional documentation, time, or legal work, and depending on the circumstances, a quiet title proceeding under Florida Statutes Section 65.081 or another appropriate curative process may be considered — though no single solution is guaranteed to resolve every title defect.",
    "A tax deed auction property may also be occupied. The former owner might still be living there, or a tenant may claim a right to possession. Florida Statutes Section 197.562 addresses possession rights for tax deed grantees, providing a process involving the circuit court and a writ of assistance when possession is refused — this is not permission to change locks, force entry, remove belongings, or otherwise take matters into one's own hands.",
  ],
  note: "The ability to acquire a property doesn't automatically guarantee the ability to resell, finance, or immediately possess it without additional work.",
};

export const conditionMystery = {
  eyebrow: "The Property Condition Mystery",
  heading: ["What If the House Looks Better Outside", "Than It Does Inside?"],
  goldLine: 1,
  paragraphs: [
    "An auction property may look attractive from the street, but a bidder may not have the same opportunity to inspect it as they would in a conventional transaction. The interior could contain roof damage, water intrusion, electrical issues, plumbing problems, structural defects, unpermitted improvements, environmental concerns, or other expenses that are not visible in an exterior photograph. Investors must respect private property rights and applicable inspection rules — if interior access is unavailable, that uncertainty should be treated as investment risk, not assumed away.",
  ],
  featured: "A low auction price can become expensive when the property's condition is uncertain.",
};

export const realCostOfPurchase = {
  eyebrow: "The Real Cost of the Purchase",
  heading: ["The Winning Bid Was $48,000.", "The Total Investment Can Be Much Higher."],
  intro:
    "All expenses below are fictional educational assumptions, not real quotations. Assume independent, unrelated, appropriately qualified contractors perform all repairs through a legally compliant arrangement — Michael does not personally perform renovation labor.",
  figures: [
    { label: "Winning Auction Bid", value: "$48,000" },
    { label: "Acquisition Charges", value: "$1,400" },
    { label: "Title and Legal Work", value: "$3,000" },
    { label: "Independent Professional Repairs", value: "$18,000" },
    { label: "Holding Expenses", value: "$5,000" },
    { label: "Total Cash Spent Before Resale", value: "$75,400" },
  ],
  disclaimer: "Starting IRA cash was $120,000. After $75,400 of total cash spent before resale, IRA cash remaining is $44,600. The IRA still owns the property, and its current market value is not established merely by the expenditures.",
};

export const threeOutcomes = {
  eyebrow: "Two Very Different Endings — and a Third",
  heading: ["What If the House Sells for $92,000?", "What If It Only Sells for $62,000?", "What If It Doesn't Sell at All?"],
  intro:
    "All three outcomes share the same auction winning bid ($48,000), acquisition charges ($1,400), title and legal work ($3,000), repairs ($18,000), and holding expenses ($5,000) — a total full-cycle expenditure, including $6,500 of assumed selling expenses, of $81,900. Only the hypothetical resale result changes.",
  scenarios: [
    {
      key: "favorable",
      label: "Sells for $92,000",
      status: "A buyer eventually pays $92,000",
      description:
        "Net cash proceeds after $6,500 of selling expenses return $85,500 to the IRA. The house sold for $44,000 more than the winning auction bid, but the illustrative gain was only $10,100 after the modeled costs — this is the most important numerical revelation in the module, and it should not be called a typical return.",
      figures: [
        { label: "Sale Price", value: "$92,000" },
        { label: "Net Resale Proceeds", value: "$85,500" },
        { label: "Illustrative Investment Gain", value: "$10,100" },
        { label: "Illustrative Ending IRA Value", value: "$130,100" },
      ],
      statement: "This assumes a validly completed purchase, a legally resellable property, sufficient title and legal expenses, repairs completed within budget, no additional expenses or taxes, and a sale at the fictional price — none of which is guaranteed.",
    },
    {
      key: "unfavorable",
      label: "Sells for $62,000",
      status: "A buyer only offers $62,000",
      description:
        "Net proceeds after the same $6,500 of selling expenses return $55,500 to the IRA. The IRA successfully purchased the property, completed the repairs, and sold it — yet the investment still lost money. Winning an auction and making money are two completely different outcomes.",
      figures: [
        { label: "Sale Price", value: "$62,000" },
        { label: "Net Resale Proceeds", value: "$55,500" },
        { label: "Illustrative Investment Loss", value: "$19,900" },
        { label: "Illustrative Ending IRA Value", value: "$100,100" },
      ],
      statement: "The auction was completed successfully. The investment was not.",
    },
    {
      key: "unsold",
      label: "No Completed Resale",
      status: "A title concern delays resale, or the market is weak, or no acceptable offers arrive",
      description:
        "The IRA still owns real estate — the modeled repairs and other expenses have been paid, but there is no completed resale, no sale proceeds have arrived, and additional holding expenses may continue. Do not use the expected $92,000 sale price as though it is already cash, and do not assume the property is worth at least its acquisition and renovation cost.",
      figures: [
        { label: "Sale Price", value: "No Sale Completed" },
        { label: "Net Resale Proceeds", value: "$0" },
        { label: "Illustrative Investment Gain/Loss", value: "Not Calculated" },
        { label: "Illustrative Ending IRA Cash", value: "$44,600" },
      ],
      statement: "A property may be owned, repaired, and ready to market without becoming spendable retirement cash.",
    },
  ],
  tableColumns: [
    { label: "Net Resale Proceeds", index: 1 },
    { label: "Illustrative Ending IRA Value", index: 3 },
  ],
  comparisonNote: "Keep all assumptions identical except the stated resale result. The no-completed-resale scenario retains an owned property whose current realizable value is uncertain — it is not a completed loss calculation.",
  conclusion: "The opportunity is not simply buying real estate below an apparent market price. The investment depends on the entire legal and financial outcome.",
};

export const scheduleAndHomestead = {
  eyebrow: "What Else Could Change the Picture",
  heading: ["A Fixed Legal Budget, a Canceled Sale,", "and a Very Different Opening Bid."],
  goldLine: 1,
  paragraphs: [
    "Our fictional example assumes $3,000 for title and legal work, but a title dispute might demand additional attorney work, an insurance underwriter might require further documentation, a surviving lien could create additional obligations, or a property that cannot be readily sold could require substantially more time and money. Not every title problem can be resolved by spending a fixed amount — some problems may be expensive, uncertain, or difficult to resolve, and certain defects could materially reduce the investment's value.",
    "Tax deed sales are also legal proceedings governed by statutory requirements, and a scheduled property is not guaranteed to be sold. An eligible redemption may occur, or a court order, procedural issue, or other legally significant event may interrupt the process — Florida law permits redemption under specified conditions before the tax deed is issued, subject to important limitations tied to full payment of the tax deed purchase amount and required charges. A bidder should not assume that seeing a property on an auction calendar guarantees a completed purchase.",
    "Florida law also gives special treatment to certain homestead-assessed property: under Section 197.502, the statutory opening-bid calculation for homestead-assessed property includes an additional amount based on one-half of the latest assessed value, which can materially affect the opening bid. Two tax deed properties with similar unpaid taxes may have very different opening bids because the statutory calculations differ — Cypress House is assumed nonhomestead, so its $18,000 opening bid does not illustrate that formula.",
  ],
  note: "A scheduled auction is an opportunity to investigate, not a promise that the property will be available to buy.",
};

export const floridaVsTexas = {
  eyebrow: "Florida and Texas Are Different",
  heading: ["A Florida Tax Deed Auction Isn't", "a Texas Tax Foreclosure Sale."],
  leftLabel: "Florida Tax Deed Process",
  rightLabel: "Texas Tax Foreclosure Process",
  rows: [
    { left: "Generally follows a tax certificate system that can lead to a separate tax deed auction process.", right: "Governed by Texas Tax Code Chapter 34, addressing tax foreclosure sales involving real property." },
    { left: "The buyer receives a tax deed under Florida's statutory sale process.", right: "Texas recognizes statutory redemption rights after certain tax sales." },
    { left: "Surviving interests and possession follow Florida-specific statutes.", right: "Under Section 34.21, qualifying residence homestead, agricultural-use property, and mineral interests can generally involve a two-year redemption period; other qualifying property generally involves a 180-day period." },
  ],
  footnote: "Do not transfer Texas redemption deadlines or premiums into Florida's auction example, and do not imply a Florida tax deed purchaser automatically faces the same redemption rules as a Texas tax sale purchaser. The state, property type, and particular legal sale process determine what an investor may actually acquire.",
};

export const iraOwnershipRules = {
  eyebrow: "The IRA Ownership Rules",
  heading: ["The IRA May Own the House.", "That Doesn't Mean You Can Move In."],
  goldLine: 1,
  paragraphs: [
    "If Michael's Self-Directed IRA acquires qualifying investment real estate, the property belongs to the IRA arrangement — it is not Michael's personal house. He should not assume he can live in it, use it as a vacation home, let a disqualified family member use it, or otherwise personally receive benefits from the investment outside the applicable IRA rules. Investment ownership is separate from personal use.",
    "A buyer may also be tempted to save money by personally painting, repairing, or improving a tax deed property, but an IRA-owned asset is subject to different restrictions. Personal services, compensation, and transactions involving disqualified persons can create prohibited-transaction problems — working for free does not automatically make the activity permissible. For Cypress House, assume all paid repairs are performed by appropriately qualified, unrelated contractors, with the IRA paying legitimate expenses through its approved arrangement.",
    "A tax deed auction can also require funds quickly, which creates a particular concern for Self-Directed IRA investors: the legal purchaser needs to be identified correctly, the custodian must support the transaction, bidder registration and deposit arrangements must comply with the auction rules, and the title documents must reflect the correct ownership arrangement before bidding begins. The investor should not assume they can purchase the property personally and later transfer it into an IRA without consequences.",
  ],
  note: "The appeal of an auction is finding an opportunity. The account structure must already be capable of completing it.",
};

export const rentalPossibilityAndValueMyth = {
  eyebrow: "Two More Things Worth Knowing",
  heading: ["The Property Might Become a Rental.", "The Tax Assessment Isn't the Sale Price."],
  goldLine: 1,
  paragraphs: [
    "A successful tax deed purchaser may consider holding a qualifying property for investment rather than immediately reselling it — a properly owned and managed property might eventually produce rental income, if there are clear enough ownership rights for the intended use, lawful possession, acceptable condition, permits, insurance, and the financial capacity to operate the property. If an IRA owns the property, rent generally belongs to the IRA, and legitimate expenses must be paid through the proper account arrangement. Not every tax deed property can immediately become a rental.",
    "A tax deed auction listing may also contain assessed-value information, which can be useful, but it does not guarantee what a buyer would pay for the property. The assessment may not reflect the property's actual condition or current market circumstances. A tax assessment, an estimated market value, and an actual completed sale price are three different figures — not one guaranteed number.",
  ],
  note: "An assessment is information, not a promise of resale value.",
};

export const whyFascinating = {
  eyebrow: "Why This Investment Possibility Is Fascinating",
  heading: ["Your Retirement Account Might Buy Real Estate", "Through a Completely Different Market."],
  steps: [
    { number: "01", title: "A Different Acquisition Path", description: "Public tax deed auctions represent another path through which real estate may be acquired, governed by very different rules than an ordinary listing." },
    { number: "02", title: "A Physical, Tangible Asset", description: "The account may own actual real estate — a physical asset with potential uses, a piece of an existing neighborhood." },
    { number: "03", title: "A Different Kind of Risk", description: "The possibilities are real. So are the risks of title, condition, occupancy, and resale uncertainty." },
  ],
  note: "An unusual acquisition method may create an opportunity to explore. It does not make the resulting investment automatically attractive.",
};

export const biggestMistake = {
  eyebrow: "The Most Expensive Mistake at an Auction",
  heading: ["Don't Let the Winning Bid", "Become the Entire Investment Strategy."],
  goldLine: 1,
  paragraphs: [
    "Auctions can create urgency. Other people are bidding, the price keeps increasing, and the investor wants to win. But winning at any price can turn an interesting opportunity into a poor investment. The amount someone is willing to bid should be based on their own research, financial capacity, and understanding of the risks — not a reaction to competing bidders. What might the property realistically sell for? What repairs might be needed? What title issues could exist? What holding expenses are likely? What happens if the property cannot be sold quickly? How much money can the IRA afford to have tied up?",
  ],
  featured: "The goal is not to win the auction. The goal is to understand whether the investment deserves consideration at the price being paid.",
};

export const researchChecklist = {
  eyebrow: "The Tax Deed Investor's Research Sheet",
  heading: ["Before the Auction, Examine the Property", "as Carefully as the Numbers."],
  steps: [
    { number: "01", title: "Identify the Property & Sale", description: "Confirm the legal description and parcel identity rather than relying only on an address or photograph, and understand which county is conducting the sale under what current auction rules." },
    { number: "02", title: "Verify the Opening Bid", description: "Use the official calculation — do not assume the unpaid tax amount alone is the opening bid." },
    { number: "03", title: "Review Title & Surviving Interests", description: "Identify possible liens, easements, restrictions, claims, and legal defects, and consider qualified title and legal review." },
    { number: "04", title: "Investigate Condition & Occupancy", description: "Determine what information is actually available, treat inaccessible conditions as uncertainty, and find out whether someone is living in or using the property." },
    { number: "05", title: "Estimate the Entire Investment Cost", description: "Include acquisition, legal, repair, holding, and selling expenses — and evaluate what evidence supports the potential resale price." },
    { number: "06", title: "Verify the IRA Structure & the Downside", description: "Confirm the IRA can lawfully purchase, fund, and title the property correctly and on time, and ask what happens if title is complicated, repairs cost more, the property is occupied, or no buyer appears." },
  ],
  note: "The best auction research isn't about finding the most exciting opening bid. It's about understanding the property before retirement money is committed.",
};

export const taxTreatment = {
  eyebrow: "The Tax Treatment",
  heading: ["If the IRA Eventually Sells the Property,", "Where Does the Gain Go?"],
  goldLine: 1,
  paragraphs: [
    "If a qualifying investment property is owned by a Self-Directed IRA, the proceeds from a completed sale generally belong to the IRA — the account owner does not simply receive the profit personally. In a traditional IRA, investment earnings generally remain subject to the account's tax-deferred rules, and distributions of pretax amounts are generally taxable. A Self-Directed Roth IRA may also hold qualifying property through an appropriate custodial arrangement, and qualified Roth distributions may receive favorable federal income tax treatment under the applicable requirements.",
    "Not every property sale inside an IRA is automatically free from current tax. Repeated business-like property transactions can raise unrelated business income questions, and debt-financed investments can create additional tax considerations. The fictional Cypress House example assumes an all-cash purchase of one qualifying investment property — it does not model an active real estate resale business.",
  ],
  note: "The real estate transaction and the IRA's tax category are separate parts of the investment decision.",
};

export const conventionalVsAuction = {
  eyebrow: "A Different Kind of Purchase",
  heading: ["Both May Result in Property Ownership.", "The Buyer Experience Can Be Very Different."],
  leftLabel: "Conventional Property Purchase",
  rightLabel: "Florida Tax Deed Auction",
  rows: [
    { left: "A purchase agreement with negotiated inspection rights.", right: "Statutory auction procedures with a certified opening bid." },
    { left: "Title and closing procedures with seller representations.", right: "Competitive public bidding with a required immediate deposit and rapid payment obligations." },
    { left: "Financing contingencies and negotiated closing dates.", right: "A tax deed issued under the applicable statute, with potential surviving interests, limited inspection access, and possible possession issues." },
  ],
  footnote: "A lower-looking acquisition price can come with a very different level of uncertainty and responsibility.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["The Auction Was Only the Beginning.", "The Real Opportunity Was Understanding the Property."],
  goldLine: 1,
  paragraphs: [
    "Real estate investing can take many forms. Sometimes you buy vacant land. Sometimes you buy a rental property. And sometimes real estate is offered through a public tax deed auction. An appropriate Self-Directed IRA may be able to acquire qualifying property through that process, and if the investment eventually succeeds, the account may benefit from the financial outcome.",
    "But the opportunity requires more than winning a bid. You need to understand what the auction sells, what legal ownership follows, which interests may survive, what expenses could arise, and whether the property can realistically produce the result you hope for.",
  ],
  featured: "The world of retirement investing may be much bigger than you realized.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA buy property at a tax deed auction?", answer: "Potentially, yes. An appropriate Self-Directed IRA may be able to purchase qualifying real estate at an auction when the custodian, purchaser registration, funding arrangements, and transaction comply with applicable rules." },
  { question: "Can a Roth IRA buy tax deed property?", answer: "Potentially. An appropriately structured Self-Directed Roth IRA may hold qualifying investment real estate. Roth contribution, ownership, prohibited-transaction, and distribution rules still apply." },
  { question: "Is buying a tax deed the same as buying a tax lien certificate?", answer: "No. A tax lien certificate generally represents a lien-related financial interest under applicable law. A tax deed auction may involve acquisition of the real estate itself through a separate legal process." },
  { question: "Does the opening bid determine what I pay?", answer: "No. The opening bid is the starting amount under the applicable auction rules. Competitive bidding can raise the final purchase price." },
  { question: "Can I buy a Florida tax deed property for the amount of unpaid taxes alone?", answer: "Do not assume so. Florida's statutory opening bid may include certificate redemption amounts, other taxes, costs, interest, and additional amounts. Certain homestead-assessed properties have special opening-bid requirements." },
  { question: "What deposit is required at a Florida tax deed auction?", answer: "Under Florida Statutes Section 197.542, the winning high bidder generally must post the greater of 5% of the winning bid or $200, subject to the applicable auction procedures." },
  { question: "Is the deposit extra money beyond the winning bid?", answer: "The statutory deposit is applied to the winning bid amount. Required documentary stamp taxes, recording charges, and other applicable expenses may be additional." },
  { question: "How quickly must the winner pay in Florida?", answer: "Florida law generally requires full payment within 24 hours, excluding weekends and legal holidays, together with required documentary stamp tax and recording fees. County administrative cutoff times and approved payment methods must also be verified." },
  { question: "What happens if I don't pay after winning?", answer: "The sale can be canceled and readvertised, the deposit can be applied toward statutory costs, and future bidding rights may be affected." },
  { question: "Does a Florida tax deed guarantee clear title?", answer: "No. A tax deed does not automatically guarantee clear or insurable title. Certain interests may survive, and title defects or other legal issues may require additional review." },
  { question: "What liens can survive a Florida tax deed?", answer: "Florida law contains provisions involving certain governmental liens and other interests. Particular liens, federal claims, and priority issues require property-specific legal review." },
  { question: "Can easements survive a tax deed sale?", answer: "Yes. Florida law recognizes the survival of certain easements, including specified access, drainage, conservation, and utility-related interests." },
  { question: "Can deed restrictions survive a tax deed sale?", answer: "Certain restrictions and covenants can survive under Florida law. The actual recorded documents and applicable statutory requirements must be reviewed." },
  { question: "Can I get title insurance on property purchased through a tax deed?", answer: "Possibly, but it is not automatic. Insurability depends on the title, legal history, underwriting requirements, and any necessary curative work." },
  { question: "Is a quiet title lawsuit always required?", answer: "Not necessarily. Certain circumstances may justify a quiet title action or other curative work, but the requirement depends on the actual title concerns and insurer or legal review." },
  { question: "Can a tax deed property be occupied?", answer: "Yes. An auction property may still have occupants. Legal ownership does not automatically mean the property is vacant." },
  { question: "Can I change the locks after receiving a tax deed?", answer: "Do not assume so. Possession and removal of occupants must comply with applicable law and court procedures." },
  { question: "Can I inspect the property before a tax deed auction?", answer: "Inspection opportunities vary. A bidder must respect private property rights and auction rules. Do not assume interior access is available." },
  { question: "Can the former owner stop the sale by paying the taxes?", answer: "Redemption and other legal developments can affect the sale under Florida law. The precise rights and timing depend on the applicable statutory conditions." },
  { question: "Does Florida have special rules for homestead property?", answer: "Yes. Certain homestead-assessed property has additional statutory opening-bid requirements, including an amount based on one-half of the latest assessed value." },
  { question: "Is a Florida tax deed sale the same as a Texas tax sale?", answer: "No. Florida and Texas have different laws and procedures. Texas tax foreclosure sales can involve statutory post-sale redemption rights under Texas Tax Code Section 34.21." },
  { question: "Can my IRA purchase a tax deed property and renovate it?", answer: "Potentially, but the IRA must comply with property ownership, prohibited-transaction, service, expense, and other applicable rules. The IRA owner should not assume personal renovation labor is permitted." },
  { question: "Can I use an IRA-owned tax deed property personally?", answer: "No prohibited personal benefit is allowed. The owner should not assume they can live in, vacation at, or otherwise use the IRA-owned property personally." },
  { question: "Can I buy the property myself and later transfer it to my IRA?", answer: "Do not assume so. Selling or transferring personally acquired property to one's own IRA can create prohibited-transaction and contribution concerns. The correct ownership structure should be established before bidding." },
  { question: "Who pays repair costs for an IRA-owned property?", answer: "Legitimate investment expenses are handled through the appropriate IRA ownership arrangement using IRA funds." },
  { question: "Can I rent out an IRA-owned tax deed property?", answer: "Potentially, if the property is legally and practically suitable, the ownership and management arrangements comply with applicable rules, and the investment is supported by the custodian." },
  { question: "Can a tax deed property lose money?", answer: "Yes. The purchase price, title issues, repairs, occupancy, ongoing expenses, market conditions, and eventual sale price can create partial or substantial losses." },
  { question: "Does a tax deed property automatically increase in value?", answer: "No. Property values can increase, decrease, or remain stagnant. The acquisition method does not guarantee appreciation." },
  { question: "Are gains from tax deed property sales always tax-free inside an IRA?", answer: "No. Traditional and Roth IRA rules differ, and certain investment activities or financing arrangements can create additional tax questions." },
  { question: "Does the IRA custodian guarantee the property is a good investment?", answer: "No. A legitimate Self-Directed IRA custodian does not necessarily verify the property's condition, title, value, or potential profitability." },
  { question: "Is purchasing tax deed property better than buying ordinary listed real estate?", answer: "Not automatically. Tax deed purchases can involve unique acquisition opportunities and substantial legal, financial, inspection, and possession risks." },
];

export const references = [
  { title: "Florida Statutes Section 197.502", description: "Supports tax deed applications, statutory opening-bid calculations, and special homestead-assessed property provisions.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.502" },
  { title: "Florida Statutes Section 197.542", description: "Supports the 5% or $200 deposit rule, required final payment, canceled sales, and public auction procedures.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.542" },
  { title: "Florida Statutes Section 197.522", description: "Supports the explanation that tax deed procedures involve statutory notices.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.522" },
  { title: "Florida Statutes Section 197.472", description: "Supports the explanation that redemption can affect the completion of a tax deed sale.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.472" },
  { title: "Florida Statutes Section 197.552", description: "Supports the discussion of tax deeds and applicable surviving governmental liens.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.552" },
  { title: "Florida Statutes Section 197.572", description: "Supports the discussion of qualifying access, utility, drainage, conservation, and other easements.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.572" },
  { title: "Florida Statutes Section 197.573", description: "Supports the discussion of continuing property-use restrictions.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.573" },
  { title: "Florida Statutes Section 197.562", description: "Provides the statutory framework for possession and judicial writ of assistance procedures.", href: "https://www.flsenate.gov/Laws/Statutes/2026/197.562" },
  { title: "Florida Statutes Section 65.081", description: "Supports discussion of possible legal proceedings to address disputed title interests.", href: "https://www.flsenate.gov/Laws/Statutes/2026/65.081" },
  { title: "Brevard County Clerk: Tax Deed Sale FAQs", description: "Official county guidance explaining deposits, payment obligations, title warnings, and redemption.", href: "https://www.brevardclerk.us/services/clerk-services/property-sales/tax-deeds-auctions/tax-deed-sales-faqs/" },
  { title: "Lee County Clerk: Tax Deed Sales", description: "Official county explanation of tax deed auctions and payment requirements.", href: "https://www.leeclerk.org/i-want-to/ask/frequently-asked-questions/tax-deed-sales" },
  { title: "Duval County Clerk: Tax Deed Files", description: "Official county information emphasizing as-is conditions and the absence of guaranteed clear title.", href: "https://www.duvalclerk.gov/departments/county-services/tax-deed-files" },
  { title: "Texas Tax Code, Chapter 34", description: "Supports the distinction between Florida tax deed auctions and Texas tax foreclosure sales, including Section 34.21's post-sale redemption requirements.", href: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.34.htm" },
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the general possibility of IRA investment real estate and custodian-specific restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Prohibited Transactions", description: "Supports the rules concerning personal benefit, related parties, services, and improper IRA transactions.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS Publication 598", description: "Provides information about unrelated business income and debt-financed investment issues.", href: "https://www.irs.gov/publications/p598" },
  { title: "SEC Investor Alert: Self-Directed IRAs and the Risk of Fraud", description: "Supports discussion of self-directed custodian limitations, illiquid investments, valuation risks, fees, and potential fraud.", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14" },
];

export const finalConversion = {
  heading: ["The Auction Was Only the Beginning.", "The Real Opportunity Was Understanding the Property."],
  description:
    "An appropriate Self-Directed IRA may be able to acquire qualifying real estate through a tax deed auction, and if the investment eventually succeeds, the account may benefit. But the opportunity requires more than winning a bid — you need to understand what the auction sells, what legal ownership follows, which interests may survive, what expenses could arise, and whether the property can realistically produce the result you hope for.",
  signature: "Michael and the fictional Cypress House in this module are entirely fictional educational illustrations.",
};
