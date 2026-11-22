import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { StorageControlRoom } from "@/components/learn-modules/StorageControlRoom";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  storageVsResidential,
  averyStory,
  fullPotentialRent,
  acquisition,
  controlRoom,
  operatingCosts,
  gateGoesDark,
  ownershipStructures,
  taxDistinction,
  ubtiAndFinancing,
  personalBenefitBoundaries,
  customerAndLegalRisk,
  operationsAndMarket,
  diligenceOperationsEmployees,
  valuationAndExit,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/self-storage-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Storage & Mini-Warehouse Investing With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own an interest in a 64-unit self-storage facility? Explore a fully reconciled example, operating costs, and the UBTI tax distinction.",
  alternates: { canonical: "/learn/self-directed-401k/self-storage-mini-warehouse-investing" },
};

export default function SelfStoragePage() {
  return (
    <>
      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        goldLine={hero.goldLine}
        description={hero.description}
        whoItsFor={hero.whoItsFor}
        primaryCta={hero.primaryCta}
        titleScale="compact"
      />

      <DeepDiveSection {...storageVsResidential} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={averyStory.eyebrow} heading={averyStory.heading} stories={averyStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fullPotentialRent.eyebrow}
          heading={fullPotentialRent.heading}
          intro={fullPotentialRent.intro}
          figures={fullPotentialRent.figures}
          disclaimer={fullPotentialRent.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={acquisition.eyebrow}
          heading={acquisition.heading}
          intro={acquisition.intro}
          figures={acquisition.figures}
          disclaimer={acquisition.disclaimer}
        />
      </div>

      <StorageControlRoom
        eyebrow={controlRoom.eyebrow}
        heading={controlRoom.heading}
        intro={controlRoom.intro}
        scenarios={controlRoom.scenarios}
        comparisonNote={controlRoom.comparisonNote}
        conclusion={controlRoom.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={operatingCosts.eyebrow}
        heading={operatingCosts.heading}
        intro={operatingCosts.intro}
        figures={operatingCosts.figures}
        disclaimer={operatingCosts.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={gateGoesDark.eyebrow}
          heading={gateGoesDark.heading}
          intro={gateGoesDark.intro}
          figures={gateGoesDark.figures}
          disclaimer={gateGoesDark.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={ownershipStructures.eyebrow}
        heading={ownershipStructures.heading}
        intro={ownershipStructures.intro}
        steps={ownershipStructures.steps}
        variant="cards"
        note={ownershipStructures.note}
      />

      <DeepDiveSection {...taxDistinction} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...ubtiAndFinancing} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalBenefitBoundaries.eyebrow}
        heading={personalBenefitBoundaries.heading}
        steps={personalBenefitBoundaries.steps}
        variant="cards"
        note={personalBenefitBoundaries.note}
      />

      <DeepDiveSection {...customerAndLegalRisk} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...operationsAndMarket} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...diligenceOperationsEmployees} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...valuationAndExit} tone="dark" />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Business Behind The Doors"
        heading={
          <>
            {finalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{finalConversion.heading[1]}</span>
          </>
        }
        description={finalConversion.description}
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Explore The Self-Directed 401(k)"
        secondaryHref="/services/self-directed-401k"
        signature={finalConversion.signature}
      />
    </>
  );
}
