import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ContactPathways } from "@/components/contact/ContactPathways";
import { StoryTwoWays } from "@/components/about/StoryTwoWays";
import { ContactForm } from "@/components/contact/ContactForm";
import { SpecialistInquiryForm } from "@/components/contact/SpecialistInquiryForm";
import { PartnershipInquiryForm } from "@/components/contact/PartnershipInquiryForm";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ContactFinalActions } from "@/components/contact/ContactFinalActions";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";
import {
  contactHero,
  contactPathways,
  establishPlan,
  askQuestion,
  specialistPath,
  partnershipPath,
  existingCustomer,
  contactInfo,
  rothAcademyStandard,
  contactFinalActions,
  contactFaqItems,
} from "@/data/contact-content";

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        goldLine={contactHero.goldLine}
        description={contactHero.description}
        imageSrc="/contact/hero.webp"
        primaryCta={{ label: "Find My Next Step", href: "#pathways" }}
      />

      <div id="pathways" className="scroll-mt-24">
        <ContactPathways
          eyebrow={contactPathways.eyebrow}
          heading={contactPathways.heading}
          intro={contactPathways.intro}
          items={contactPathways.items}
        />
      </div>

      <div id="establish-plan" className="scroll-mt-24">
        <StoryTwoWays
          eyebrow={establishPlan.eyebrow}
          heading={establishPlan.heading}
          intro={establishPlan.intro}
          cards={establishPlan.cards}
          supportingLabel={establishPlan.supportingLabel}
          supportingHref={establishPlan.supportingHref}
        />
      </div>

      <section id="ask-question" className="scroll-mt-24 border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
        <div className="container-brand grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>{askQuestion.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {askQuestion.heading.map((line, index) => (
                <span key={line} className={index === askQuestion.heading.length - 1 ? "block text-r-gold" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-md text-base text-r-muted font-body normal-case">{askQuestion.description}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section id="specialist" className="scroll-mt-24 border-b border-r-line bg-r-bg py-16 md:py-24">
        <div className="container-brand grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>{specialistPath.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {specialistPath.heading.map((line, index) => (
                <span key={line} className={index === specialistPath.heading.length - 1 ? "block text-r-gold" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-5 space-y-4">
              {specialistPath.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-r-gold pl-5 text-lg text-r-white">{specialistPath.featured}</p>
            <Link
              href={specialistPath.supportingHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              {specialistPath.supportingLabel}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
          <SpecialistInquiryForm />
        </div>
      </section>

      <section id="partnership" className="scroll-mt-24 border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
        <div className="container-brand grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>{partnershipPath.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {partnershipPath.heading.map((line, index) => (
                <span key={line} className={index === partnershipPath.heading.length - 1 ? "block text-r-gold" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-5 space-y-4">
              {partnershipPath.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-r-gold pl-5 text-lg text-r-white">{partnershipPath.featured}</p>
            <Link
              href={partnershipPath.supportingHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              {partnershipPath.supportingLabel}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
          <PartnershipInquiryForm />
        </div>
      </section>

      <section id="existing-customer" className="scroll-mt-24 border-b border-r-line bg-r-bg py-16 md:py-24">
        <div className="container-brand">
          <Eyebrow>{existingCustomer.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
            {existingCustomer.heading.map((line, index) => (
              <span key={line} className={index === existingCustomer.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-2xl text-base text-r-muted font-body normal-case">{existingCustomer.description}</p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {existingCustomer.pathways.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7">
                <h3 className="text-xl text-r-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-r-muted font-body normal-case">{item.description}</p>
                <a
                  href={item.linkHref}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-r-gold"
                >
                  {item.linkLabel}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
        <div className="container-brand max-w-2xl">
          <h2 className="text-2xl md:text-3xl">{contactInfo.heading}</h2>
          <p className="mt-2 text-sm text-r-muted font-body normal-case">{contactInfo.description}</p>
          <div className="mt-6 space-y-2 text-sm font-body normal-case">
            <a href={`mailto:${siteConfig.email}`} className="block text-r-gold hover:text-r-gold-light transition-colors">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneTel}`} className="block text-r-gold hover:text-r-gold-light transition-colors">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <DeepDiveSection
        eyebrow={rothAcademyStandard.eyebrow}
        heading={rothAcademyStandard.heading}
        goldLine={1}
        paragraphs={rothAcademyStandard.paragraphs}
        featured={rothAcademyStandard.featured}
        note={rothAcademyStandard.note}
        tone="dark"
      />

      <ContactFinalActions
        eyebrow={contactFinalActions.eyebrow}
        heading={contactFinalActions.heading}
        description={contactFinalActions.description}
        signature={contactFinalActions.signature}
      />

      <div className="border-t border-r-line">
        <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={contactFaqItems} />
      </div>
    </>
  );
}
