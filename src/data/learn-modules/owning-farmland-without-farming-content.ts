export const hero = {
  eyebrow: "Owning Farmland Without Farming",
  title: ["What If Your IRA Could Own 40 Acres", "of Farmland Without You Ever Farming It?"],
  goldLine: 1,
  description:
    "Imagine forty acres of farmland — a farmer working the fields, crops growing through the summer, a harvest at the end of the season. But here's something you might not have considered: the person farming the land doesn't necessarily have to be the person who owns it. Farmers often lease agricultural property from landowners, and an appropriate Self-Directed IRA may be able to own qualifying farmland. The retirement account could potentially lease the property to an unrelated agricultural operator, who operates the farm, while the IRA receives rental payments. You wouldn't need to become a farmer — but you would need to understand the property, the lease, the tenant, the expenses, and the risks.",
  whoItsFor:
    "For people who have never worked on a farm, existing IRA owners, investors who appreciate tangible assets, and anyone curious about agricultural land without operating an agricultural business.",
  primaryCta: { label: "Start My Self-Directed IRA" },
};

export const revelation = {
  eyebrow: "The Revelation",
  heading: ["The Farmer Works the Land.", "The IRA May Receive the Rent."],
  leftLabel: "The Farmer",
  rightLabel: "The IRA Landowner",
  rows: [
    { left: "Operates the agricultural business.", right: "Owns the investment property." },
    { left: "Makes agricultural production decisions under the lease.", right: "Receives the agreed rent when paid." },
    { left: "Provides the labor, machinery, and crop inputs assumed in the example.", right: "Handles the landowner expenses assigned under the lease." },
    { left: "Bears crop production risks under the modeled fixed cash-rent arrangement.", right: "Bears land value, tenant, legal, environmental, and other ownership risks." },
  ],
  footnote: "The farmer and the landowner don't have to be the same person. The IRA owns the land. The independent farmer operates the farm.",
};

export const danielStory = {
  eyebrow: "Meet the Investor",
  heading: ["Daniel Has $350,000 in His IRA.", "He's Never Operated a Farm."],
  stories: [
    {
      label: "Illustrative First-Time Farmland Investor",
      headline: "Daniel has never owned a tractor, planted a commercial crop, or operated a farm — and he doesn't want to become a full-time farmer.",
      scenario:
        "Daniel is 49, an engineering manager with no agricultural experience and no farming business. He has $350,000 in a traditional IRA. For this illustration, assume Daniel completes an eligible trustee-to-trustee transfer to a Self-Directed IRA custodian that supports qualifying agricultural real estate. The account remains a traditional IRA; no Roth conversion is assumed.",
      realization: "How much could forty acres cost? How does farmland rent work? Who pays the property taxes? What happens during a bad harvest? And what if the land becomes more or less valuable?",
      risk: "Daniel is a fictional illustration, not a verified Roth Academy customer. Let's follow one fictional investment through a full agricultural year.",
    },
  ],
};

export const goldenFieldFarmProfile = {
  eyebrow: "Meet Golden Field Farm",
  heading: ["Forty Acres. One Farmer.", "A Different Kind of Retirement Investment."],
  intro:
    "Assume an independent review finds the land suitable for the intended agricultural use, the property has appropriate legal access, a valid agricultural lease can be entered into under applicable law, no prohibited relationship exists between the tenant and Daniel, and no undisclosed conservation restriction prevents the intended crop production. These are teaching assumptions, not verified facts about real property.",
  figures: [
    { label: "Property Name", value: "Golden Field Farm (Fictional)" },
    { label: "Land Type", value: "Non-Irrigated Cropland" },
    { label: "Size", value: "40 Acres" },
    { label: "Illustrative Crop", value: "Corn" },
    { label: "Financing", value: "None" },
    { label: "Farm Equipment & Inputs", value: "Provided by the Tenant" },
  ],
  disclaimer: "The investment is the land. The farming business belongs to the independent operator. Personal use by Daniel is not modeled at any point in this lesson.",
};

export const purchaseCost = {
  eyebrow: "The Purchase",
  heading: ["What Would It Cost for the IRA", "to Purchase Forty Acres?"],
  intro:
    "The price per acre is only part of an investment — a property may require title review, surveying, legal analysis, environmental investigation, and other research, and the IRA should also retain enough resources to meet legitimate obligations. The $6,000-per-acre figure is a hypothetical purchase price, not a USDA estimate, market quotation, or assertion about available farmland; actual farmland values vary substantially by location, soil, water, agricultural use, access, improvements, and market conditions.",
  figures: [
    { label: "Land Purchase Price (40 Acres × $6,000)", value: "$240,000" },
    { label: "Closing, Title & Legal Costs", value: "$4,000" },
    { label: "Survey & Boundary Research", value: "$1,500" },
    { label: "Other Preliminary Investigations", value: "$500" },
    { label: "Total Cash Expenditure", value: "$246,000" },
    { label: "Remaining IRA Cash", value: "$104,000" },
  ],
  disclaimer: "The IRA now owns the agricultural property through the appropriate legal arrangement. Daniel does not personally own it.",
};

export const cashRentAgreement = {
  eyebrow: "The Cash Rent Agreement",
  heading: ["The IRA Owns the Land.", "The Farmer Agrees to Pay $7,000 a Year."],
  intro:
    "The farmer promises to pay a specified amount for the right to use the land under the lease — an amount not automatically tied to the farmer's actual profit, which can make the contractual rent easier to understand. But it does not guarantee the tenant will actually pay; if the farmer experiences financial difficulties, collection risk remains. The IRA isn't buying the farmer's business — it is renting agricultural property to that business. These figures are hypothetical, not a recommended rent, verified local market rate, or guaranteed income.",
  figures: [
    { label: "Leased Land", value: "40 Acres of Cropland" },
    { label: "Annual Cash Rent", value: "$7,000" },
    { label: "Illustrative Cash Rent Per Acre", value: "$175" },
    { label: "Spring Installment", value: "$3,500" },
    { label: "Fall Installment", value: "$3,500" },
    { label: "Crop Ownership Under This Lease", value: "Belongs to the Tenant" },
  ],
  disclaimer: "Fixed cash rent is different from guaranteed investment income. A lease is a contractual agreement — it does not remove tenant credit risk.",
};

export const fourSeasonsOfOwnership = {
  eyebrow: "The Signature Interactive Experience",
  heading: ["The Four Seasons of Ownership"],
  intro:
    "The land changes through the seasons. The ownership stays the same. Follow one continuous view of Golden Field Farm — the farmer's activities change each season, while the IRA's financial position updates to reflect only the rent actually paid, never an amount merely owed. This is a fictional corn-growing illustration for a suitable location, not agricultural advice or a real planting calendar.",
  decisions: [
    {
      key: "spring",
      label: "Spring",
      status: "review" as const,
      statusLabel: "Rent Received",
      action: "The farmer begins. The IRA receives its first rent payment.",
      explanation: "Under the fictional lease, the farmer plans crop production, provides equipment, purchases seed and other crop inputs, prepares the field, and plants the crop. The IRA owns the land but does not own the farming equipment, purchase the seed, operate the tractor, or personally plant the crop through Daniel. The first lease installment of $3,500 is owed, and assuming it is paid on time, the IRA receives $3,500 — not Daniel personally.",
      takeaway: "The farmer is responsible for farming. The IRA receives the rent that is actually paid.",
    },
    {
      key: "summer",
      label: "Summer",
      status: "review" as const,
      statusLabel: "No Additional Rent",
      action: "The crops grow. Does the IRA get more money?",
      explanation: "The tenant manages the crop, and under the modeled lease the farmer is responsible for agricultural production decisions and the principal production inputs — weather and crop conditions affect the farmer's business. The IRA still owns the land, and the agreed annual cash rent remains $7,000 under the simplified fixed-rent lease. The IRA does not automatically receive additional money when crops grow faster, share in a higher crop price, or own the harvest merely because it owns the underlying land. A fixed rent is a contractual obligation, not a guaranteed cash receipt — the farmer must still make the required payments.",
      takeaway: "Owning the farmland doesn't automatically mean sharing in every dollar the farmer earns.",
    },
    {
      key: "fall",
      label: "Fall",
      status: "review" as const,
      statusLabel: "Rent Received",
      action: "The farmer harvests. The IRA receives its second rent payment.",
      explanation: "The tenant harvests the crop, and under the fictional arrangement the farmer receives the crop proceeds and pays the expenses of the farming business. The landowner has not operated the farm and has not planted the crop, but under the lease the farmer owes the final rent installment. Assuming the farmer pays on time, the IRA receives another $3,500, bringing the full-year gross cash rent collected to $7,000 ($3,500 spring + $3,500 fall).",
      takeaway: "The harvest belongs to the farmer under this lease. The rent belongs to the IRA when actually paid.",
    },
    {
      key: "winter",
      label: "Winter",
      status: "review" as const,
      statusLabel: "Annual Review",
      action: "The farm rests. The landowner reviews the numbers.",
      explanation: "The farmer completed the growing season and the IRA received its $7,000 in rent under the fictional assumptions — but the property also had expenses: property taxes ($1,800), landowner liability insurance ($600), boundary/access/drainage maintenance ($700), and independent property administration ($400), totaling $3,500. After those modeled expenses, the investment produced $3,500 in net annual cash, bringing ending available IRA cash to $107,500 ($104,000 remaining after acquisition + $3,500 net rental cash). The account still owns the land, and the investor still faces real estate market risk.",
      takeaway: "The IRA collected $7,000 in rent. The net cash was $3,500.",
    },
  ],
  note: "The most important financial statement: the investment may receive contractual rent without the IRA owner personally operating the farming business. The important financial warning: a contractual rent amount is not a guaranteed payment or a guaranteed return.",
};

export const badHarvestStress = {
  eyebrow: "The Farmer's Bad Year",
  heading: ["What If the Farmer Has", "a Terrible Harvest?"],
  intro:
    "Imagine a difficult growing season: the weather is unfavorable, the crop performs poorly, and the farmer's business has financial problems. Under a fixed cash-rent lease, the farmer generally agrees to pay the specified rent regardless of whether the crop performs well — but that doesn't mean the farmer will always have the money. As a separate stress illustration, assume the spring installment is received as usual but the farmer fails to pay the fall installment.",
  figures: [
    { label: "Spring Installment Received", value: "$3,500" },
    { label: "Fall Installment (Unpaid)", value: "$3,500 Owed, Not Received" },
    { label: "Cash Actually Received", value: "$3,500" },
    { label: "Annual Landowner Expenses", value: "$3,500" },
    { label: "Net Cash Received After Expenses", value: "$0" },
    { label: "Available IRA Cash", value: "$104,000 (Unchanged)" },
  ],
  disclaimer: "A missed rent payment does not necessarily eliminate the tenant's legal obligation, but the IRA cannot treat money owed as money collected — the unpaid $3,500 contractual claim is not available cash, and its recoverability is uncertain. The farmer may still owe the rent. That doesn't mean the IRA has received it.",
};

export const leaseIsNotGuarantee = {
  eyebrow: "The Lease Is Not a Guarantee",
  heading: ["A Fixed Rent Agreement Can Make", "the Amount Clear. It Cannot Guarantee Collection."],
  goldLine: 1,
  paragraphs: [
    "A written lease can establish the tenant's obligations, identify the property, specify payment amounts, define due dates, assign maintenance responsibilities, and provide remedies for certain defaults. But the tenant may still fail to perform — the farmer could have financial problems, the property could become damaged, the lease may end, or the owner may need to find a replacement tenant. Fixed rent is different from guaranteed investment income; a lease is a contractual agreement, and it does not remove tenant credit risk.",
  ],
  featured: "The lease tells you what the farmer owes. The tenant's performance determines what the IRA receives.",
};

export const leaseTypesComparison = {
  eyebrow: "Not Every Farm Lease Works the Same Way",
  heading: ["Cash Rent, Flexible Rent, and Crop Share", "Are Different Agreements."],
  steps: [
    { number: "01", title: "Fixed Cash Rent", description: "The tenant agrees to pay a fixed amount, generally operates the farm under the lease, and the landowner's payment is not automatically based on the farmer's profit. The tenant can still default." },
    { number: "02", title: "Flexible Cash Rent", description: "The lease may adjust the rental amount based on agreed variables such as crop prices, yields, or other economic measures. The calculation can be more complicated." },
    { number: "03", title: "Crop-Share Arrangement", description: "The landowner and farmer may share a specified portion of production, proceeds, costs, or other items — exposing the landowner to more agricultural performance risk and different operating responsibilities." },
  ],
  note: "Different lease terms can have different consequences for unrelated business income tax, agricultural program eligibility, and other legal questions. This module's main illustration uses one simple fixed cash-rent agreement to teach agricultural land ownership without introducing active farm operations.",
};

export const whoPaysForWhat = {
  eyebrow: "What Does the Farmer Pay For?",
  heading: ["Who Buys the Seed, Fuel,", "Fertilizer, and Equipment?"],
  leftLabel: "The Unrelated Farmer Provides",
  rightLabel: "The IRA Landowner Is Responsible For",
  rows: [
    { left: "Tractors, farm equipment, and fuel.", right: "The real estate ownership expenses assigned under the lease." },
    { left: "Seeds, fertilizer, and other crop inputs.", right: "Applicable property taxes and agreed landowner insurance." },
    { left: "Planting labor, crop management, and harvesting.", right: "Specified boundary and access obligations, plus certain independent administration expenses." },
  ],
  footnote: "Water systems, irrigation equipment, drainage facilities, buildings, fencing, farm roads, and conservation responsibilities can create additional expenses depending on the specific property and lease — the landowner is not always exempt from these obligations. An agricultural lease should explain who operates the farm and who pays for what.",
};

export const soilWaterAndAccess = {
  eyebrow: "The Soil, Water, and Access Matter",
  heading: ["Forty Acres of Land Isn't Automatically", "Forty Acres of Productive Farmland."],
  goldLine: 1,
  paragraphs: [
    "Farmland can look beautiful from an aerial photograph, but not every acre has the same agricultural value — soil characteristics, drainage, topography, flooding, and erosion all matter, and certain crops may be suitable for one type of land and unsuitable for another. Worth researching: what kinds of soils are present, how well the soil drains, whether the land has erosion concerns or compaction, contamination, or drainage issues, and what its documented production history indicates. The USDA Natural Resources Conservation Service Web Soil Survey is a useful research tool, though not a guarantee of future crop yields.",
    "Agricultural land may also depend on water availability, drainage, road access, equipment access, and legal rights — an attractive field may be difficult to use if the farmer cannot legally reach it. Golden Field Farm is assumed to be non-irrigated cropland, with no transferable irrigation rights assumed; the tenant's production depends in part on rainfall and local growing conditions. Water rights and regulations can differ substantially by state.",
  ],
  note: "A farm's practical value can depend on access, water, drainage, and legal rights that aren't visible in a photograph, and the value of farmland depends on much more than its size and appearance.",
};

export const conservationAndPropertyTax = {
  eyebrow: "Conservation Restrictions and Property Taxes",
  heading: ["Rules About How the Land Can Be Used,", "and What the Tax Bill Actually Looks Like."],
  goldLine: 1,
  paragraphs: [
    "Some farmland is subject to recorded easements, conservation restrictions, or agricultural program obligations that can limit development, restrict certain farming practices, require conservation activities, or affect how the property may be leased and operated — some restrictions may continue to affect future owners. USDA programs such as the Conservation Reserve Program and Agricultural Conservation Easement Program involve specific eligibility conditions. A new IRA owner does not automatically qualify for government agricultural payments, and an existing contract does not automatically transfer with every benefit a previous owner received — the investment, owner, tenant, and particular program must be evaluated separately.",
    "Some states provide special property tax treatment for qualifying agricultural land, but eligibility may depend on actual agricultural use, acreage, production history, ownership, application deadlines, and continued qualifying activities — a property can lose favorable agricultural tax treatment if it no longer qualifies, and some jurisdictions impose rollback or recapture taxes when land changes use. Golden Field Farm's assumed $1,800 of annual property taxes is an educational budget figure, not a claim that the property qualifies for a particular agricultural appraisal or exemption. Agricultural property tax rules are separate from federal IRA tax treatment.",
  ],
  note: "Farmland ownership can include obligations that affect how the property may be used, leased, or sold. The word farmland doesn't automatically establish what the property tax bill will be.",
};

export const tenantRiskAndWrittenLease = {
  eyebrow: "The Tenant and the Lease",
  heading: ["A Beautiful Field Can Be Worth Less", "Without a Reliable Farmer — or a Strong Lease."],
  goldLine: 1,
  paragraphs: [
    "An agricultural lease is valuable only if the tenant is willing and able to perform. The farmer may have years of experience or be new to the operation; their finances may be strong or their business may be struggling. A landowner should want to understand whether the farmer has experience with this type of land, a solid payment history, the ability to afford the rent, and access to suitable equipment — and should not assume it can collect the same rent indefinitely, since tenant demand and agricultural economics can change.",
    "A serious farmland lease should clearly define the relationship between the landowner and the independent farmer: the identity of both parties, an accurate legal description of the land, the lease term, rent amount and payment dates, who supplies equipment and inputs, access and road maintenance, soil and conservation obligations, insurance, environmental compliance, default remedies, renewal rights, termination notices, and crop ownership. Some jurisdictions have specialized agricultural lease notice, termination, and renewal rules — an ordinary residential lease template is not automatically suitable for farmland.",
  ],
  note: "Owning farmland doesn't eliminate tenant risk — it changes the type of tenant and the nature of the investment. A strong lease helps define the investment; it does not guarantee rent collection or eliminate every dispute.",
};

export const prohibitedFamilyAndSelfFarming = {
  eyebrow: "Two Important Restrictions",
  heading: ["Your IRA Can't Lease to Family.", "And Daniel Can't Farm the Land Himself."],
  goldLine: 1,
  paragraphs: [
    "An IRA may be able to lease qualifying land to an appropriate unrelated tenant, but leases involving disqualified persons can create prohibited transactions — the IRS identifies leases and other dealings between retirement plans and disqualified persons as prohibited in applicable circumstances. Disqualified family members include a spouse, ancestors, lineal descendants, and spouses of lineal descendants, and entities they own or control may also create concerns. Do not assume the IRA may lease land to Daniel personally, his spouse, his child, a farming company he controls, or allow a disqualified person to use the land without paying rent. A lease to a genuinely unrelated farmer is different from leasing to a disqualified person, but the full transaction, relationships, and benefits must be evaluated.",
    "Daniel might be curious about farming, want to operate the tractor, or offer to help plant or repair a fence — but IRA-owned investment property is subject to restrictions involving personal services and prohibited benefits, and working without compensation does not automatically make every activity permissible. For Golden Field Farm, Daniel does not operate the farm; the independent tenant handles agricultural production, and any paid work assigned to the landowner is handled through an appropriate arrangement with independent professionals. Not every investment review, inspection, or ordinary direction of the IRA's investment is necessarily prohibited — the actual services and relationships matter.",
  ],
  note: "The IRA may own investment land. It cannot be used to provide prohibited benefits to its owner or related persons, and the legal separation between owning farmland and operating it is important.",
};

export const farmlandVsRentalHouseComparison = {
  eyebrow: "A Familiar Idea, a Different Asset",
  heading: ["Instead of Renting Bedrooms,", "the IRA Could Rent Acres."],
  leftLabel: "Residential Rental",
  rightLabel: "Agricultural Cash-Rent Lease",
  rows: [
    { left: "Property: house. Tenant use: residential occupancy.", right: "Property: agricultural land. Tenant use: farming operations." },
    { left: "Typical payment: monthly rent.", right: "Typical payment: seasonal or annual, according to the agricultural lease." },
    { left: "Important risks: vacancy, property condition, tenant payment, local landlord laws.", right: "Important risks: tenant payment, land productivity, soil and water conditions, agricultural markets, legal and conservation obligations." },
  ],
  footnote: "The fundamental idea of leasing is familiar. The asset and operating risks can be very different. Under a fixed cash-rent lease, the farmer's amount does not automatically increase because crop prices rise, or decrease because crop prices fall — though the farmer's ability to pay may still be affected by agricultural economic conditions. The farmer's business outcome and the IRA's contractual rent are connected, but they are not identical.",
};

export const fiveYearProjection = {
  eyebrow: "The Five-Year Possibility",
  heading: ["What If the Farm Produces Rent", "for Five Years?"],
  intro:
    "Assume the same farmer continues leasing the property for five years: $7,000 of rent actually received each year, $3,500 of annual landowner expenses, no financing, no personal distributions, and no changes to the fictional assumptions.",
  figures: [
    { label: "Five-Year Gross Rent (5 × $7,000)", value: "$35,000" },
    { label: "Five-Year Expenses (5 × $3,500)", value: "$17,500" },
    { label: "Five-Year Net Cash", value: "$17,500" },
    { label: "Cash Remaining After Initial Acquisition", value: "$104,000" },
    { label: "Available IRA Cash After Five Years", value: "$121,500" },
  ],
  disclaimer: "The IRA still owns the farmland. Its market value is not established by this cash-flow calculation. Rental income is one part of the investment — the land's eventual value is another.",
};

export const threeOwnershipOutcomes = {
  eyebrow: "The Three Ownership Outcomes",
  heading: ["What If the Farm Sells for $295,000?", "What If It Only Sells for $220,000?", "What If It Isn't Sold at All?"],
  intro:
    "All three outcomes share the same $246,000 initial acquisition expenditure and the same five-year net rental cash of $17,500. Only the resale result changes.",
  scenarios: [
    {
      key: "favorable",
      label: "Sells for $295,000",
      status: "An unrelated buyer eventually pays $295,000",
      description:
        "Net sale proceeds after $12,000 of selling and closing expenses return $283,000 to the IRA — a sale-related cash gain of $37,000 over the $246,000 initial investment. Combined with $17,500 of five-year net rental cash, the total illustrative gain is $54,500. The land sold for $55,000 more than its original purchase price, but the sale-related cash gain was only $37,000 after modeled expenses.",
      figures: [
        { label: "Five-Year Net Rental Cash", value: "$17,500" },
        { label: "Net Property Sale Proceeds", value: "$283,000" },
        { label: "Overall Realized Cash Gain", value: "$54,500" },
        { label: "Illustrative Ending IRA Value", value: "$404,500" },
      ],
      statement: "A successful farmland investment may involve both collected rent and a future sale, but neither result is guaranteed.",
    },
    {
      key: "unfavorable",
      label: "Sells for $220,000",
      status: "The land sells for less than the IRA paid",
      description:
        "Net sale proceeds after $12,000 of selling expenses return only $208,000 — a sale-related cash loss of $38,000 against the $246,000 initial investment. The farmer paid rent for five years and the IRA received positive annual rental cash throughout, but the property sold for substantially less than the initial investment, and the total investment still lost money.",
      figures: [
        { label: "Five-Year Net Rental Cash", value: "$17,500" },
        { label: "Net Property Sale Proceeds", value: "$208,000" },
        { label: "Overall Realized Cash Loss", value: "$20,500" },
        { label: "Illustrative Ending IRA Value", value: "$329,500" },
      ],
      statement: "Five years of rent doesn't guarantee the land will sell for a profit.",
    },
    {
      key: "unsold",
      label: "Property Remains Owned",
      status: "The IRA decides not to sell",
      description:
        "The land remains in the retirement account, the farmer may continue leasing it, and the property may have an estimated market value — but farmland is not the same as publicly traded stock. Selling it may take time, the buyer pool can be limited, and soil conditions, location, existing leases, agricultural economics, and local market demand can all affect resale. No completed-sale gain or loss is calculated because no sale has occurred.",
      figures: [
        { label: "Five-Year Net Rental Cash", value: "$17,500" },
        { label: "Net Property Sale Proceeds", value: "No Sale Completed" },
        { label: "Overall Realized Cash Gain/Loss", value: "Not Calculated" },
        { label: "Illustrative Ending IRA Cash", value: "$121,500 Plus Land Asset (Value Uncertain)" },
      ],
      statement: "A retirement account can own valuable property that may be difficult to sell quickly.",
    },
  ],
  tableColumns: [
    { label: "Net Property Sale Proceeds", index: 1 },
    { label: "Illustrative Ending IRA Value", index: 3 },
  ],
  comparisonNote: "The scenarios are independent alternatives. All use the same fictional five-year rental assumptions. The missed-payment stress scenario shown earlier is excluded from these full five-year examples.",
  conclusion: "Farmland may create income through leasing and potential value through ownership. Both involve risks, expenses, and uncertainty.",
};

export const appreciationAndTaxTreatment = {
  eyebrow: "Appreciation Risk and Tax Treatment",
  heading: ["Land Prices Can Rise. They Can Also Fall.", "And the Rent's Tax Treatment Has Conditions."],
  goldLine: 1,
  paragraphs: [
    "Agricultural real estate values can be influenced by local farm profitability, interest rates, crop prices, land quality, water availability, investor demand, conservation restrictions, financing availability, and broader economic conditions. A farm that has increased in value in the past may not keep increasing; some properties may decline in value or remain difficult to sell for years. The USDA National Agricultural Statistics Service publishes land value and cash rent research that can help investors understand broad market conditions, but national or state averages cannot establish the value of one specific parcel.",
    "Under federal law, ordinary rent from real property is generally excluded from unrelated business taxable income, and this principle can be relevant to a properly structured agricultural cash-rent lease — Golden Field Farm is purchased entirely with IRA cash, leased to an independent unrelated farmer for a fixed cash amount, and presented as an ordinary real property lease rather than an actively operated farm business. But the details matter: debt-financed property can create unrelated debt-financed income, rent calculated based on the tenant's net profits may fail the ordinary rent exclusion, providing substantial services or actively operating a business creates a different analysis, and related-party arrangements can introduce additional issues. Do not assume every agricultural lease is automatically excluded from unrelated business taxable income, and do not assume every crop-share arrangement automatically creates it — the actual lease and operation require professional review.",
  ],
  note: "Farmland is a tangible investment, not a guarantee of appreciation. Ordinary farmland rent can receive favorable IRA-level treatment, but the lease terms and investment structure determine the applicable rules.",
};

export const usdaPaymentsAndRentFlow = {
  eyebrow: "Government Payments and Who Gets Paid",
  heading: ["The IRA Doesn't Automatically Get USDA Payments.", "And the Farmer Pays the Account, Not Daniel."],
  goldLine: 1,
  paragraphs: [
    "Certain agricultural programs provide benefits to qualifying producers or landowners, but eligibility depends on the particular program and legal requirements — some programs consider whether a person or entity is actively engaged in farming, and others have specialized tenant, conservation, or payment rules. A cash-rent landowner should not assume that all government benefits connected to the land belong to the owner; Golden Field Farm's financial model does not include government payments and assumes only contractual cash rent from the unrelated farmer. There is also a difference between leasing farmland to an unrelated operator and conducting farming operations directly — an active agricultural business involves purchasing seed, hiring workers, operating machinery, and managing business expenses, which can create different tax, legal, and prohibited-transaction concerns than passive farmland leasing.",
    "If the farm belongs to the Self-Directed IRA, legitimate rental receipts belong to the IRA — the tenant's payment arrangements must reflect the correct legal ownership, and the account owner should not simply collect the rent personally or direct payments into a personal checking account. A later personal distribution from the IRA is a separate retirement-account transaction with its own tax treatment.",
  ],
  note: "A farmland investment should not count on government program payments unless the actual entitlement has been verified. The IRA owns the land. The IRA receives the investment rent.",
};

export const researchSheet = {
  eyebrow: "The Farm Investor's Research Sheet",
  heading: ["Before Your IRA Buys Farmland,", "Ask These Questions."],
  steps: [
    { number: "01", title: "Ownership & Legal Description", description: "Who legally owns the property, can the seller convey it, and are the boundaries and acreage accurate?" },
    { number: "02", title: "Soil, Water & Access", description: "What soil characteristics affect the intended use, is the property irrigated or rain-fed, and can the farmer legally and physically access it with equipment?" },
    { number: "03", title: "Current Use & Existing Leases", description: "What is the property currently used for, is a tenant already in possession, and can the buyer lawfully change the arrangement?" },
    { number: "04", title: "Rent, Tenant & Expenses", description: "What evidence supports the proposed rent per acre, is the farmer independent, financially capable, and experienced, and what property taxes, insurance, and maintenance apply?" },
    { number: "05", title: "Conservation & Environmental Conditions", description: "Are there conservation easements, program contracts, or restrictions, and are there concerns involving contamination, wetlands, drainage, or erosion?" },
    { number: "06", title: "IRA Ownership & Downside", description: "Does the custodian support direct agricultural real estate, does the lease qualify for favorable tax treatment, how easily could the property be sold, and what happens if the tenant defaults or the land declines in value?" },
  ],
  note: "The beauty of farmland may attract an investor. A sound investment evaluation requires understanding its actual agricultural and financial characteristics.",
};

export const closingReflection = {
  eyebrow: "The Final Reflection",
  heading: ["Forty Acres. Four Seasons.", "One Retirement Account That Could Own the Land."],
  goldLine: 1,
  paragraphs: [
    "Most people picture a farmer when they imagine owning farmland — tractors, planting, long days, harvesting, and the work of operating an agricultural business. But there is another possibility: a landowner may lease agricultural property to an independent farmer, who operates the land and pays rent according to the agreement. An appropriate Self-Directed IRA may be able to own qualifying farmland, creating a fascinating way to think about retirement investing — a tangible piece of real estate, a property with agricultural use, an independent tenant, and the potential for rental income and future property value.",
    "But the results are not guaranteed. The land may decline in value, the farmer may fail to pay, the lease may end, and the ownership arrangement must comply with applicable laws.",
  ],
  featured: "The opportunity isn't becoming a farmer. It's discovering that your retirement account may be able to own the land that a farmer uses.",
};

export const faqItems = [
  { question: "Can a Self-Directed IRA buy farmland?", answer: "Potentially, yes. An appropriate Self-Directed IRA may purchase qualifying agricultural real estate if the custodian supports the investment and the transaction complies with applicable rules." },
  { question: "Can a Roth IRA own agricultural land?", answer: "Potentially. A Self-Directed Roth IRA may also hold qualifying farmland through an appropriate arrangement. Roth tax and prohibited-transaction rules continue to apply." },
  { question: "Do I have to be a farmer to invest in farmland through my IRA?", answer: "No. An appropriate IRA may potentially own agricultural land leased to an independent farmer without the account owner personally operating a farm." },
  { question: "Can my IRA lease farmland to a farmer?", answer: "Potentially, yes. A qualifying lease to an unrelated agricultural operator may be permissible, subject to custodial, tax, legal, and prohibited-transaction requirements." },
  { question: "What is cash rent for farmland?", answer: "A cash-rent lease generally requires the farmer to pay a specified amount for the use of land under the agreement." },
  { question: "How is farmland rent calculated?", answer: "Some leases use a rental amount per acre. Others use a total property amount or more complicated formulas. The actual terms must be negotiated and supported by market and property information." },
  { question: "Does the farmer pay rent even if the crop fails?", answer: "Under a fixed cash-rent lease, the contractual obligation generally remains as specified, subject to the agreement and applicable law. The farmer may still fail to pay or seek renegotiation." },
  { question: "Is farmland rent guaranteed?", answer: "No. Tenant default, vacancy, legal disputes, and other circumstances can affect whether rent is collected." },
  { question: "Does the IRA owner have to buy tractors?", answer: "Not under every lease. In the fictional example, the independent farmer provides equipment and crop production inputs. Actual responsibilities depend on the agreement." },
  { question: "Does the IRA own the crops?", answer: "Not automatically. Under the fictional fixed cash-rent agreement, the farmer owns the crop under the lease terms. Other lease arrangements may differ." },
  { question: "Can I personally plant crops on IRA-owned farmland?", answer: "Do not assume so. Owner-provided services and personal use can create prohibited-transaction concerns." },
  { question: "Can my son or daughter farm land owned by my IRA?", answer: "A lease involving a lineal descendant can create a prohibited transaction. The specific arrangement requires qualified review." },
  { question: "Can my spouse lease farmland from my IRA?", answer: "Leasing property to a disqualified spouse can constitute a prohibited transaction." },
  { question: "Can my IRA lease farmland to a friend?", answer: "Potentially, if the friend is not a disqualified person and the arrangement does not involve improper indirect benefits. The actual relationships and transaction must be reviewed." },
  { question: "Can my IRA buy farmland I personally own?", answer: "A sale between an IRA and its owner generally is a prohibited transaction." },
  { question: "Can my IRA buy farmland from my parents?", answer: "Transactions involving an ancestor can create prohibited-transaction issues." },
  { question: "What is the difference between cash rent and crop share?", answer: "Cash rent generally involves a specified rental payment. Crop-share arrangements can involve sharing crop production, proceeds, or expenses under the agreement. Tax and operating consequences can differ." },
  { question: "Is crop-share income inside an IRA automatically taxable?", answer: "No universal answer applies. The exact lease, services, business activity, payment formula, and other facts determine whether unrelated business income tax issues arise." },
  { question: "Is cash rent from farmland automatically tax-free inside an IRA?", answer: "Ordinary qualifying real property rent is generally excluded from unrelated business taxable income, but exceptions can apply. The lease, financing, and operating arrangement matter." },
  { question: "Can an IRA operate a farming business directly?", answer: "Active agricultural business activities can involve different tax, legal, operational, and prohibited-transaction concerns. Do not assume they are treated the same as passive farmland leasing." },
  { question: "What if the IRA buys farmland with a mortgage?", answer: "Debt-financed real estate can create unrelated debt-financed income and prohibited-transaction concerns involving personal guarantees or other extensions of credit." },
  { question: "Who pays the property taxes?", answer: "The obligations depend on the property and lease. Legitimate expenses assigned to an IRA-owned investment must be handled through the appropriate retirement-account arrangement." },
  { question: "Does farmland qualify for special property tax treatment?", answer: "Some jurisdictions offer agricultural-use valuation or other special treatment. Eligibility depends on local law and the property's actual circumstances." },
  { question: "Can farmland lose agricultural tax status?", answer: "Yes. Changes in use or failure to satisfy applicable requirements can affect eligibility and may create additional tax consequences in some jurisdictions." },
  { question: "Does the IRA automatically get USDA program payments?", answer: "No. Program eligibility depends on the specific government program, property, applicant, lease, and legal requirements." },
  { question: "Can farmland be subject to conservation easements?", answer: "Yes. Conservation easements and related restrictions can limit how property may be used and may continue to affect later owners." },
  { question: "Does the soil affect farmland value?", answer: "Yes. Soil characteristics, drainage, agricultural suitability, and other property factors can materially affect productivity and value." },
  { question: "Can the farmer use land without legal road access?", answer: "Access problems can make agricultural operations difficult or impossible. Legal access should be verified before purchase." },
  { question: "Can farmland values decline?", answer: "Yes. Farmland is real estate and can lose value." },
  { question: "Is farmland easy to sell?", answer: "Not necessarily. Farmland can be illiquid, and its buyer pool may be limited by location, price, use, and other characteristics." },
  { question: "Can an IRA sell farmland for a profit?", answer: "Potentially. A completed sale may produce an investment gain, but the financial result depends on actual proceeds and total costs." },
  { question: "Does the profit from selling IRA farmland go into my personal account?", answer: "No. Legitimate investment sale proceeds generally belong to the IRA arrangement. Personal withdrawals follow separate distribution rules." },
  { question: "Can my IRA own several farms?", answer: "Potentially, subject to custodial support, legal requirements, investment eligibility, and financial capacity." },
  { question: "Does the IRA custodian guarantee a farmland investment?", answer: "No. A legitimate Self-Directed IRA custodian does not necessarily evaluate soil quality, tenant payment ability, property value, or investment profitability." },
  { question: "Is farmland better than stocks or ordinary rental property?", answer: "Not automatically. Each investment has different risks, liquidity, income patterns, costs, and potential outcomes." },
];

export const references = [
  { title: "IRS: Retirement Plans FAQs Regarding IRAs", description: "Supports the general availability of real estate as an IRA investment and the possibility of custodian-specific restrictions.", href: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  { title: "IRS: Retirement Plan Investments FAQs", description: "Supports restrictions involving prohibited IRA transactions and disqualified persons.", href: "https://www.irs.gov/retirement-plans/retirement-plan-investments-faqs" },
  { title: "IRS: Prohibited Transactions", description: "Supports restrictions on leases, sales, services, extensions of credit, and transactions involving disqualified persons.", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
  { title: "IRS: Exclusion of Rent From Real Property From UBTI", description: "Supports the general treatment of qualifying real property rent and important exceptions.", href: "https://www.irs.gov/charities-non-profits/exclusion-of-rent-from-real-property-from-unrelated-business-taxable-income" },
  { title: "IRS Publication 598", description: "Provides additional guidance concerning rents from real property, leases based on net profits, mixed leases, services, and debt-financed income.", href: "https://www.irs.gov/publications/p598" },
  { title: "U.S. Internal Revenue Code, Section 512", description: "Provides the statutory framework for unrelated business taxable income and relevant real property rent exclusions.", href: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section512" },
  { title: "IRS: Unrelated Business Income From Debt-Financed Property", description: "Supports debt-financed property tax considerations.", href: "https://www.irs.gov/charities-non-profits/unrelated-business-income-from-debt-financed-property-under-irc-section-514" },
  { title: "IRS Publication 590-A", description: "Provides IRA contribution, transfer, and account information.", href: "https://www.irs.gov/publications/p590a" },
  { title: "IRS Publication 590-B", description: "Provides information concerning IRA distributions and prohibited-transaction consequences.", href: "https://www.irs.gov/publications/p590b" },
  { title: "USDA Economic Research Service: Crop Acreage Managed Under Owner and Lease Arrangements", description: "Provides evidence that agricultural land is operated through both owner farming and cash-rent or share-rent arrangements.", href: "https://www.ers.usda.gov/data-products/charts-of-note/109018" },
  { title: "USDA Farm Service Agency: Cash-Rent Tenant", description: "Explains cash-rent tenant classification for applicable USDA programs.", href: "https://www.fsa.usda.gov/tools/informational/payment-eligibility/cash-rent-tenant" },
  { title: "USDA National Agricultural Statistics Service: Cash Rents", description: "Provides official agricultural cash rental rate research. The data are useful benchmarks, not guaranteed rates for a particular farm.", href: "https://data.nass.usda.gov/Surveys/Guide_to_NASS_Surveys/Cash_Rents_by_County/" },
  { title: "USDA Natural Resources Conservation Service: Web Soil Survey", description: "Provides official soil information relevant to land evaluation.", href: "https://www.nrcs.usda.gov/resources/data-and-reports/web-soil-survey" },
  { title: "USDA Farm Service Agency: Conservation Reserve Program", description: "Provides information about conservation program payments and land-use obligations.", href: "https://www.fsa.usda.gov/resources/conservation/conservation-reserve-program" },
  { title: "USDA NRCS: Agricultural Conservation Easement Program", description: "Explains conservation easements and restrictions that may affect agricultural property.", href: "https://www.nrcs.usda.gov/agricultural-conservation-easement-program" },
];

export const finalConversion = {
  heading: ["Forty Acres. Four Seasons.", "One Retirement Account That Could Own the Land."],
  description:
    "An appropriate Self-Directed IRA may be able to own qualifying farmland leased to an independent farmer, collecting rent and paying legitimate landowner expenses through the account. But fixed rent isn't guaranteed income, and farmland isn't a guaranteed appreciating asset.",
  signature: "Daniel and the fictional Golden Field Farm in this module are entirely fictional educational illustrations.",
};
