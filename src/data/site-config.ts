export const siteConfig = {
  name: "Roth Academy",
  headline: "Own Your Next Move",
  description:
    "Self-directed 401(k)s, self-directed IRAs, and advanced planning. Bring your ambition. Build the right foundation.",
  url: "https://therothacademy.com",
  email: "access@therothacademy.com",
  phone: "(888) 988-8509",
  phoneTel: "+18889888509",
  addressLine1: "3515 Longmire Dr, Ste B",
  addressCity: "College Station",
  addressState: "TX",
  addressZip: "77845",
  stateFull: "Texas",
  disclaimer:
    "Roth Academy provides education, onboarding, administrative support, and implementation coordination. It is not a law firm, investment adviser, or custodian. Individual professional advice and legal work require the appropriate separate engagement. No investment, tax treatment, or financial result is guaranteed.",
};

export const mainNav = [
  { label: "Self-Directed 401(k)", href: "/services/self-directed-401k" },
  { label: "Self-Directed IRA", href: "/services/self-directed-ira" },
  { label: "Learn", href: "/learn" },
  { label: "Get Help", href: "/contact" },
];

export const planDestinations = {
  openPlan: "/apply",
  open401k: "/start?plan=401k",
  openIra: "/start?plan=ira",
  comparePlans: "/plans",
  getHelp: "/contact",
};

export const footerNav = {
  startHere: {
    title: "Start Here",
    links: [
      { label: "Self-Directed 401(k)", href: "/services/self-directed-401k" },
      { label: "Self-Directed IRA", href: "/services/self-directed-ira" },
      { label: "Compare Plans", href: "/plans" },
      { label: "What Would You Invest In?", href: "/goals" },
    ],
  },
  academy: {
    title: "The Academy",
    links: [
      { label: "About Roth Academy", href: "/about" },
      { label: "How It Works", href: "/work-with-us" },
      { label: "Knowledge Library", href: "/learn" },
    ],
  },
  nextStep: {
    title: "Your Next Step",
    links: [
      { label: "Open a Plan", href: "/start" },
      { label: "Get Help", href: "/contact" },
    ],
  },
};

// Features referenced in navigation but not yet built. Rendered as
// disabled, non-interactive items with a "Coming soon" badge rather
// than a dead or placeholder link.
export const comingSoon = [
  { label: "Client login" },
  { label: "Tax Academy" },
];

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
];
