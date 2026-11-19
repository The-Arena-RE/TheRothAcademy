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
  serviceIraHero,
  serviceIraFoundation,
  serviceIraOverview,
  serviceIraPricing,
  serviceIraProcess,
  serviceIraCrossLink,
  flagshipIraRevelation,
  flagshipIraGallery,
  flagshipIraStories,
  flagshipIraComparison,
  flagshipIraFunding,
  flagshipIraRole,
  flagshipIraCredibility,
  flagshipIraFaq,
  flagshipIraReferences,
} from "@/data/self-directed-ira-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA | Real Estate, Private Lending & More",
  description:
    "Explore how a self-directed IRA may invest in real estate, private lending, private businesses, metals, and more. Discover your options and get started.",
};

export default function SelfDirectedIraPage() {
  return (
    <>
      <ServiceHero
        eyebrow={serviceIraHero.eyebrow}
        title={serviceIraHero.title}
        goldLine={serviceIraHero.goldLine}
        description={serviceIraHero.description}
        whoItsFor={serviceIraHero.whoItsFor}
        contactTopic="Self-Directed IRA"
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Ask a Question", href: planDestinations.getHelp }}
        imageSrc="/services/ira/hero.webp"
        summary={serviceIraHero.summary}
      />

      <DeepDiveSection {...flagshipIraRevelation} />

      <DeepDiveGallery {...flagshipIraGallery} columns={3} />

      <DeepDiveStoryList {...flagshipIraStories} />

      <DeepDiveComparisonTable {...flagshipIraComparison} />

      <ServiceProcess
        eyebrow={serviceIraFoundation.eyebrow}
        heading={serviceIraFoundation.heading}
        steps={serviceIraFoundation.steps}
        columns={3}
      />

      <DeepDiveSection {...flagshipIraFunding} />

      <ServicePricing
        eyebrow={serviceIraPricing.eyebrow}
        heading={serviceIraPricing.heading}
        intro={serviceIraPricing.intro}
        included={serviceIraPricing.included}
        price={serviceIraPricing.price}
        note={serviceIraPricing.note}
      />

      <ServiceOverview
        eyebrow={serviceIraOverview.eyebrow}
        heading={serviceIraOverview.heading}
        paragraphs={serviceIraOverview.paragraphs}
        features={serviceIraOverview.features}
        image={serviceIraOverview.image}
        imageAlt="Self-directed IRA account documents"
        reverse
      />

      <ServiceProcess
        eyebrow={serviceIraProcess.eyebrow}
        heading={serviceIraProcess.heading}
        intro={serviceIraProcess.intro}
        steps={serviceIraProcess.steps}
      />

      <DeepDiveGallery {...flagshipIraRole} columns={2} />

      <DeepDiveSection {...flagshipIraCredibility} />

      <ServiceFaq
        eyebrow={flagshipIraFaq.eyebrow}
        heading={flagshipIraFaq.heading}
        items={flagshipIraFaq.items}
        sourceLink={flagshipIraFaq.sourceLink}
      />

      <DeepDiveReferenceLibrary references={flagshipIraReferences} />

      <ServiceCrossLink
        label={serviceIraCrossLink.label}
        title={serviceIraCrossLink.title}
        href={serviceIraCrossLink.href}
      />

      <ClosingStatement
        heading={<>Your Retirement Account Has More Possibilities <span className="text-r-gold">Than You Think.</span></>}
        description="Real estate. Private lending. Private investments. If you are ready to explore a self-directed IRA, our team can help you take the first step."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
