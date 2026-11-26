import type { Metadata } from "next";
import "@/styles/contact-page.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { siteConfig } from "@/data/site-config";
import { ContactHero } from "@/components/contact-page/ContactHero";
import { RouteBandSection } from "@/components/contact-page/RouteBandSection";
import { QuestionBandSection } from "@/components/contact-page/QuestionBandSection";
import { PlanBandSection } from "@/components/contact-page/PlanBandSection";
import { ProfessionalBandSection } from "@/components/contact-page/ProfessionalBandSection";
import { ClientBandSection } from "@/components/contact-page/ClientBandSection";
import { StandardBandSection } from "@/components/contact-page/StandardBandSection";
import { ContactFaqSection } from "@/components/contact-page/ContactFaqSection";
import { FinalBandSection } from "@/components/contact-page/FinalBandSection";

export const metadata: Metadata = {
  title: "Contact Roth Academy | Plans, Education & Partnerships",
  description:
    "Contact Roth Academy about self-directed IRA and 401(k) plans, educational presentations, partnerships, and available customer resources.",
  alternates: { canonical: "/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Roth Academy",
  url: `${siteConfig.url}/contact`,
  about: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneTel,
      email: siteConfig.email,
      contactType: "customer service",
    },
  },
};

export default function ContactPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} contact-page`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ContactHero />
      <RouteBandSection />
      <QuestionBandSection />
      <PlanBandSection />
      <ProfessionalBandSection />
      <ClientBandSection />
      <StandardBandSection />
      <ContactFaqSection />
      <FinalBandSection />
    </div>
  );
}
