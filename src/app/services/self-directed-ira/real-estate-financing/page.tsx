import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
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
  financingIraHero,
  financingIraRevelation,
  financingIraStructures,
  financingIraStory,
  financingIraNonrecourse,
  financingIraComparison,
  financingIraTax,
  financingIraFaq,
  financingIraReferences,
} from "@/data/deepdive/self-directed-ira-real-estate-financing-content";

export const metadata: Metadata = {
  title: "Real Estate Financing With A Self-Directed IRA",
  description:
    "Can your IRA buy real estate with a mortgage? Explore nonrecourse financing, personal guarantees, UDFI, and the rules behind financed IRA real estate.",
};

export default function SelfDirectedIraRealEstateFinancingPage() {
  return (
    <>
      <ServiceHero
        eyebrow={financingIraHero.eyebrow}
        title={financingIraHero.title}
        goldLine={financingIraHero.goldLine}
        description={financingIraHero.description}
        whoItsFor={financingIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...financingIraRevelation} />

      <DeepDiveGallery {...financingIraStructures} columns={3} />

      <DeepDiveStoryList {...financingIraStory} />

      <DeepDiveSection {...financingIraNonrecourse} />

      <DeepDiveComparisonTable {...financingIraComparison} />

      <DeepDiveGallery {...financingIraTax} columns={3} />

      <ServiceFaq {...financingIraFaq} />

      <DeepDiveReferenceLibrary references={financingIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>A Different Way To Structure <span className="text-r-gold">A Real Estate Investment.</span></>}
        description="Explore the appropriate account setup pathway before evaluating a specific financed property transaction."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
