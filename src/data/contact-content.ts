import { Compass, HelpCircle, Mic, Handshake, UserCheck } from "lucide-react";

export const contactHero = {
  eyebrow: "Contact Roth Academy",
  title: ["The Right Conversation", "Starts Here."],
  goldLine: 1,
  description:
    "Whether you're ready to establish a self-directed retirement plan, have a question about your options, want to bring our specialists to an event, or are interested in working with Roth Academy, we're here to help you find the appropriate next step. You shouldn't need to navigate an organization just to figure out where your question belongs. Tell us what brings you here. We'll help direct you to the right place.",
};

export const contactPathways = {
  eyebrow: "What Brings You Here?",
  heading: ["Let's Make", "This Simple."],
  intro: "Choose what you're looking for, and we'll point you in the right direction.",
  items: [
    {
      number: "01",
      title: "Start a retirement plan",
      description: "For prospective customers interested in a self-directed IRA or 401(k).",
      href: "#establish-plan",
      icon: Compass,
    },
    {
      number: "02",
      title: "Ask a question",
      description: "For prospective customers or other visitors who need general information about Roth Academy's available services.",
      href: "#ask-question",
      icon: HelpCircle,
    },
    {
      number: "03",
      title: "Invite a specialist",
      description: "For classrooms, seminars, conferences, investor groups, and educational organizations.",
      href: "#specialist",
      icon: Mic,
    },
    {
      number: "04",
      title: "Explore a partnership",
      description: "For prospective referral partners, approved representatives, educators, and organizations interested in introducing Roth Academy services.",
      href: "#partnership",
      icon: Handshake,
    },
    {
      number: "05",
      title: "Get help as a customer",
      description: "For people looking for ongoing account resources, documentation, renewals, or existing service assistance.",
      href: "#existing-customer",
      icon: UserCheck,
    },
  ],
};

export const establishPlan = {
  eyebrow: "Start Your Retirement Journey",
  heading: ["You've Explored What's Possible.", "Now Choose Your Direction."],
  intro:
    "If you're ready to explore establishing a self-directed retirement plan, there's no need to submit a general contact request first. Choose the retirement arrangement that may fit your circumstances and begin the appropriate enrollment experience.",
  cards: [
    {
      number: "01",
      label: "SELF-DIRECTED 401(K)",
      tagline: "For Qualifying Business Owners and Self-Employed Individuals",
      description:
        "Explore a retirement plan that may combine qualifying alternative investment opportunities with valuable employer-sponsored retirement features.",
      primaryLabel: "Start My Self-Directed 401(k)",
      secondaryLabel: "Explore the Self-Directed 401(k)",
      href: "/services/self-directed-401k",
    },
    {
      number: "02",
      label: "SELF-DIRECTED IRA",
      tagline: "For Individual Retirement Investors",
      description:
        "Discover how an appropriately structured self-directed IRA may allow you to pursue a broader range of qualifying investments.",
      primaryLabel: "Start My Self-Directed IRA",
      secondaryLabel: "Explore the Self-Directed IRA",
      href: "/services/self-directed-ira",
    },
  ],
  supportingLabel: "Still Deciding? Compare Your Options",
  supportingHref: "/plans",
};

export const askQuestion = {
  eyebrow: "Ask Roth Academy",
  heading: ["Have a Question?", "Start Here."],
  description:
    "Not every question requires an appointment or a lengthy application. If you have a general question about Roth Academy, our services, or how to begin, send us a message. We'll direct it through the appropriate communication process.",
};

export const specialistPath = {
  eyebrow: "Educational Presentations",
  heading: ["Have the Room?", "Let's Explore Bringing the Education."],
  paragraphs: [
    "Maybe you're hosting a real estate investing class. Maybe you're organizing a business seminar. Maybe you have a group of entrepreneurs, investors, or professionals who would benefit from understanding the possibilities of self-directed retirement investing.",
    "Many people don't realize that qualifying IRAs and 401(k)s may invest in real estate, private lending, certain businesses, and other permitted assets. Roth Academy welcomes inquiries about specialist-led educational presentations. Subject to availability and an agreed arrangement, a specialist may present to your audience in person or virtually.",
  ],
  featured: "Give your audience something worth thinking about long after the presentation ends.",
  supportingLabel: "Learn More About Working With Roth Academy",
  supportingHref: "/work-with-us",
};

export const partnershipPath = {
  eyebrow: "Professional Opportunities",
  heading: ["Great Opportunities", "Are Worth Sharing."],
  paragraphs: [
    "Maybe you're an educator with an established audience. A real estate professional whose customers are interested in alternative retirement investments. A business consultant who regularly works with entrepreneurs. Or someone interested in representing Roth Academy's retirement-plan establishment services.",
    "We're interested in exploring appropriate relationships with professionals and organizations who believe in responsible retirement education and meaningful customer service. Some opportunities may involve education. Others may involve referrals. Some may involve approved sales representation through a separately agreed arrangement.",
  ],
  featured: "If you believe your audience could benefit from what Roth Academy offers, we'd like to understand your idea.",
  supportingLabel: "Learn More About Working With Roth Academy",
  supportingHref: "/work-with-us",
};

export const existingCustomer = {
  eyebrow: "Already Part of Roth Academy?",
  heading: ["Already Part of the", "Roth Academy Experience?"],
  description:
    "If you've already established a retirement plan or are managing an existing service, you may be looking for something different — documents, renewals, updates, ongoing educational resources, or help with an active establishment request. We want those needs to reach the appropriate destination.",
  pathways: [
    {
      title: "Ongoing Plan Resources",
      description:
        "Access documents, learning, and support through the Tax Academy Client Portal. The portal is being finalized — in the meantime, reach the team directly below.",
      linkLabel: "Reach the Team",
      linkHref: `mailto:access@therothacademy.com?subject=${encodeURIComponent("Ongoing Plan Resources")}`,
    },
    {
      title: "Active Roth Academy Setup",
      description: "If you're in the middle of an active establishment engagement, reach your setup contact directly.",
      linkLabel: "Contact Your Setup Team",
      linkHref: `mailto:access@therothacademy.com?subject=${encodeURIComponent("Active Setup Inquiry")}`,
    },
    {
      title: "Advanced Retirement Strategies",
      description: "Explore further education on advanced self-directed strategies through the Knowledge Library.",
      linkLabel: "Visit the Knowledge Library",
      linkHref: "/learn",
    },
  ],
};

export const contactInfo = {
  heading: "Prefer to Reach Us Directly?",
  description: "Reach the team using the verified contact details below.",
};

export const rothAcademyStandard = {
  eyebrow: "The Roth Academy Standard",
  heading: ["Your Retirement Is Important.", "The Way We Communicate Should Reflect That."],
  paragraphs: [
    "One of the frustrations of dealing with financial institutions can be the feeling that nobody knows where your question belongs. You explain the situation. Someone transfers you. You repeat yourself. Another person asks you to start over.",
    "At Roth Academy, we believe clear communication and organized responsibilities should be part of a professional customer experience. That means helping people understand the appropriate starting point, making service expectations clear, providing access to useful educational resources, and identifying the correct pathway for questions that require specialized attention.",
    "A serious retirement-plan company should take communication seriously.",
  ],
  featured: "Less Confusion. Clearer Direction. A More Professional Experience.",
  note: "This is a statement of service philosophy, not a guarantee of immediate responses or perfect outcomes. The actual communication process must support the expectations established on this page.",
};

export const contactFinalActions = {
  eyebrow: "An Approachable Final Invitation",
  heading: ["You Don't Need Every Answer", "Before Asking Your First Question."],
  description:
    "Maybe you're still trying to decide between a self-directed IRA and a 401(k). Maybe you're exploring your first alternative retirement investment. Maybe you want to introduce these possibilities to an entire room of people. Or maybe you're interested in establishing a professional relationship with Roth Academy. Wherever you're beginning, the next step should be clear.",
  signature: "ROTH ACADEMY — YOUR RETIREMENT. YOUR DECISIONS. MORE POSSIBILITIES.",
};

export const contactFaqItems = [
  {
    question: "How do I contact Roth Academy?",
    answer: "Use the general inquiry form or any verified business contact method published on this page.",
  },
  {
    question: "How do I start a self-directed 401(k)?",
    answer:
      "Select the \"Start My Self-Directed 401(k)\" enrollment option. Eligibility depends on the business and applicable retirement-plan requirements.",
  },
  {
    question: "How do I start a self-directed IRA?",
    answer: "Select \"Start My Self-Directed IRA\" to begin the appropriate enrollment pathway.",
  },
  {
    question: "What if I don't know which retirement plan is right for me?",
    answer: "Explore the plan comparison page to understand the differences.",
  },
  {
    question: "Can someone from Roth Academy speak at my event?",
    answer:
      "Roth Academy welcomes inquiries about educational presentations. Availability, location, content, and terms are determined before confirming an engagement.",
  },
  {
    question: "Can I become a referral or sales partner?",
    answer:
      "Prospective partners can submit an inquiry. Any representation or compensation arrangements require appropriate approval and written terms.",
  },
  {
    question: "I'm already a customer. Where do I go?",
    answer:
      "Use the appropriate Tax Academy customer resources for ongoing documentation, renewals, and support, or the designated channel for an active Roth Academy establishment engagement.",
  },
  {
    question: "Can I send sensitive financial documents through the contact form?",
    answer:
      "No. General contact forms should not be used for Social Security numbers, account credentials, or sensitive financial records. Customers should use an approved secure document process when necessary.",
  },
  {
    question: "Will submitting a question create an attorney-client relationship?",
    answer:
      "No. A general inquiry does not automatically establish an attorney-client relationship or constitute individualized legal, tax, or investment advice.",
  },
];
