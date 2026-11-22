import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  surfaceVsMinerals,
  worldBeneathSurface,
  taylorStory,
  mineralPurchase,
  ownershipLens,
  royaltyReceipt,
  priceAndProductionTheater,
  royaltyVariabilityAndSilence,
  declineAndNewWells,
  threeOwnershipDoors,
  leaseBonusAndDivisionOrder,
  paymentTimingAndStatements,
  titleTrail,
  gasRoyaltiesAndPriceRisk,
  environmentalAndTaxTreatment,
  valueAndResale,
  personalBenefitBoundaries,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/oil-gas-royalty-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Oil & Gas Mineral And Royalty Investing With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own a mineral or royalty interest in oil and gas production? Explore a fully reconciled acreage, royalty, and price example.",
  alternates: { canonical: "/learn/self-directed-401k/oil-gas-mineral-royalty-investing" },
};

export default function OilGasRoyaltyPage() {
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

      <DeepDiveSection {...surfaceVsMinerals} tone="dark" />

      <OwnershipAtrium
        eyebrow={worldBeneathSurface.eyebrow}
        heading={worldBeneathSurface.heading}
        intro={worldBeneathSurface.intro}
        layers={worldBeneathSurface.layers}
        dossier={worldBeneathSurface.dossier}
        conclusion={worldBeneathSurface.conclusion}
      />

      <DeepDiveStoryList eyebrow={taylorStory.eyebrow} heading={taylorStory.heading} stories={taylorStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={mineralPurchase.eyebrow}
          heading={mineralPurchase.heading}
          intro={mineralPurchase.intro}
          figures={mineralPurchase.figures}
          disclaimer={mineralPurchase.disclaimer}
        />
      </div>

      <OwnershipAtrium
        eyebrow={ownershipLens.eyebrow}
        heading={ownershipLens.heading}
        intro={ownershipLens.intro}
        layers={ownershipLens.layers}
        dossier={ownershipLens.dossier}
        conclusion={ownershipLens.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={royaltyReceipt.eyebrow}
        heading={royaltyReceipt.heading}
        intro={royaltyReceipt.intro}
        figures={royaltyReceipt.figures}
        disclaimer={royaltyReceipt.disclaimer}
      />

      <HarvestScenarios
        eyebrow={priceAndProductionTheater.eyebrow}
        heading={priceAndProductionTheater.heading}
        intro={priceAndProductionTheater.intro}
        scenarios={priceAndProductionTheater.scenarios}
        tableColumns={priceAndProductionTheater.tableColumns}
        comparisonNote={priceAndProductionTheater.comparisonNote}
        conclusion={priceAndProductionTheater.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={royaltyVariabilityAndSilence.eyebrow}
        heading={royaltyVariabilityAndSilence.heading}
        intro={royaltyVariabilityAndSilence.intro}
        figures={royaltyVariabilityAndSilence.figures}
        disclaimer={royaltyVariabilityAndSilence.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...declineAndNewWells} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={threeOwnershipDoors.eyebrow}
        heading={threeOwnershipDoors.heading}
        steps={threeOwnershipDoors.steps}
        variant="cards"
        note={threeOwnershipDoors.note}
      />

      <DeepDiveSection {...leaseBonusAndDivisionOrder} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...paymentTimingAndStatements} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={titleTrail.eyebrow}
        heading={titleTrail.heading}
        intro={titleTrail.intro}
        steps={titleTrail.steps}
        variant="list"
        columns={4}
        note={titleTrail.note}
      />

      <DeepDiveSection {...gasRoyaltiesAndPriceRisk} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...environmentalAndTaxTreatment} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...valueAndResale} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalBenefitBoundaries.eyebrow}
        heading={personalBenefitBoundaries.heading}
        steps={personalBenefitBoundaries.steps}
        variant="cards"
        note={personalBenefitBoundaries.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Beneath Every Ranch"
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
