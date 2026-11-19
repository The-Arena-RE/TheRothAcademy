import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  service401kHero,
  service401kPricing,
  service401kOverview,
  service401kProcess,
  service401kCrossLink,
  flagshipService401kRevelation,
  flagshipService401kStories,
  flagshipService401kGallery,
  flagshipService401kComparison,
  flagshipService401kAdvantages,
  flagshipService401kAudience,
  flagshipService401kCredibility,
  flagshipService401kFaq,
  flagshipService401kReferences,
} from "@/data/self-directed-401k-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) for Business Owners | Real Estate & More",
  description:
    "Discover how a self-directed 401(k) may let eligible business owners explore real estate, private loans and more. Learn the possibilities and start your plan.",
};

export default function SelfDirected401kPage() {
  return (
    <>
      <ServiceHero
        eyebrow={service401kHero.eyebrow}
        title={service401kHero.title}
        goldLine={service401kHero.goldLine}
        description={service401kHero.description}
        whoItsFor={service401kHero.whoItsFor}
        contactTopic="Self-Directed 401(k)"
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Ask a Question", href: planDestinations.getHelp }}
        imageSrc="/services/401k/hero.webp"
        summary={service401kHero.summary}
      />

      <DeepDiveSection {...flagshipService401kRevelation} />

      <DeepDiveStoryList {...flagshipService401kStories} />

      <DeepDiveGallery {...flagshipService401kGallery} columns={3} />

      <DeepDiveComparisonTable {...flagshipService401kComparison} />

      <DeepDiveGallery {...flagshipService401kAdvantages} columns={3} />

      <DeepDiveGallery {...flagshipService401kAudience} columns={2} />

      <DeepDiveGallery {...flagshipService401kCredibility} columns={3} />

      <ServicePricing
        eyebrow={service401kPricing.eyebrow}
        heading={service401kPricing.heading}
        intro={service401kPricing.intro}
        included={service401kPricing.included}
        price={service401kPricing.price}
        note={service401kPricing.note}
      />

      <ServiceOverview
        eyebrow={service401kOverview.eyebrow}
        heading={service401kOverview.heading}
        paragraphs={service401kOverview.paragraphs}
        features={service401kOverview.features}
        image={service401kOverview.image}
        imageAlt="Self-directed 401(k) plan documents"
      />

      <ServiceProcess
        eyebrow={service401kProcess.eyebrow}
        heading={service401kProcess.heading}
        intro={service401kProcess.intro}
        steps={service401kProcess.steps}
      />

      <ServiceFaq
        eyebrow={flagshipService401kFaq.eyebrow}
        heading={flagshipService401kFaq.heading}
        items={flagshipService401kFaq.items}
        sourceLink={flagshipService401kFaq.sourceLink}
      />

      <DeepDiveReferenceLibrary references={flagshipService401kReferences} />

      <ServiceCrossLink
        label={service401kCrossLink.label}
        title={service401kCrossLink.title}
        href={service401kCrossLink.href}
      />

      <ClosingStatement
        heading={<>Your Retirement Has More Possibilities <span className="text-r-gold">Than You May Realize.</span></>}
        description="You've spent years learning how to recognize opportunity. Now explore whether a self-directed 401(k) can bring more of those investment possibilities into your retirement strategy."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
