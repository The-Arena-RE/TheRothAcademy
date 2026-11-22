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
  directAnswer,
  eligibilityVsCapital,
  morganStory,
  capitalAtlas,
  propertyBoundaryReveal,
  landPurchaseCosts,
  landExitTheater,
  landNeverSells,
  loanTermsAndAcquisition,
  collateralMirror,
  loanPaymentCorridor,
  loanOutcomes,
  lenderOwnershipAndPriority,
  twoAssetBreakdown,
  twoAssetOutcomes,
  allStrategiesCompared,
  cashReserveChamber,
  planOwnsInvestments,
  relatedPartyAndPersonalService,
  taxValuationAndLiquidity,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-with-25000-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Investing $25,000 With a Self-Directed 401(k) | Roth Academy",
  description:
    "Explore how a Self-Directed 401(k) may invest $25,000 in land, secured private loans, or multiple assets. See realistic costs, cash flows, and risks.",
  alternates: { canonical: "/learn/self-directed-401k/investing-with-25000" },
};

export default function InvestingWith25000Page() {
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

      <DeepDiveSection {...directAnswer} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...eligibilityVsCapital} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={morganStory.eyebrow} heading={morganStory.heading} stories={morganStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={capitalAtlas.eyebrow}
        heading={capitalAtlas.heading}
        intro={capitalAtlas.intro}
        scenarios={capitalAtlas.scenarios}
        tableColumns={capitalAtlas.tableColumns}
        comparisonNote={capitalAtlas.comparisonNote}
        conclusion={capitalAtlas.conclusion}
      />

      <OwnershipAtrium
        eyebrow={propertyBoundaryReveal.eyebrow}
        heading={propertyBoundaryReveal.heading}
        intro={propertyBoundaryReveal.intro}
        layers={propertyBoundaryReveal.layers}
        dossier={propertyBoundaryReveal.dossier}
        conclusion={propertyBoundaryReveal.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={landPurchaseCosts.eyebrow}
        heading={landPurchaseCosts.heading}
        intro={landPurchaseCosts.intro}
        figures={landPurchaseCosts.figures}
        disclaimer={landPurchaseCosts.disclaimer}
      />

      <HarvestScenarios
        eyebrow={landExitTheater.eyebrow}
        heading={landExitTheater.heading}
        intro={landExitTheater.intro}
        scenarios={landExitTheater.scenarios}
        tableColumns={landExitTheater.tableColumns}
        comparisonNote={landExitTheater.comparisonNote}
        conclusion={landExitTheater.conclusion}
      />

      <DeepDiveSection {...landNeverSells} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanTermsAndAcquisition.eyebrow}
          heading={loanTermsAndAcquisition.heading}
          intro={loanTermsAndAcquisition.intro}
          figures={loanTermsAndAcquisition.figures}
          disclaimer={loanTermsAndAcquisition.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={collateralMirror.eyebrow}
          heading={collateralMirror.heading}
          intro={collateralMirror.intro}
          figures={collateralMirror.figures}
          disclaimer={collateralMirror.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanPaymentCorridor.eyebrow}
          heading={loanPaymentCorridor.heading}
          intro={loanPaymentCorridor.intro}
          figures={loanPaymentCorridor.figures}
          disclaimer={loanPaymentCorridor.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanOutcomes.eyebrow}
          heading={loanOutcomes.heading}
          intro={loanOutcomes.intro}
          figures={loanOutcomes.figures}
          disclaimer={loanOutcomes.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...lenderOwnershipAndPriority} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={twoAssetBreakdown.eyebrow}
          heading={twoAssetBreakdown.heading}
          intro={twoAssetBreakdown.intro}
          figures={twoAssetBreakdown.figures}
          disclaimer={twoAssetBreakdown.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={twoAssetOutcomes.eyebrow}
        heading={twoAssetOutcomes.heading}
        intro={twoAssetOutcomes.intro}
        scenarios={twoAssetOutcomes.scenarios}
        tableColumns={twoAssetOutcomes.tableColumns}
        comparisonNote={twoAssetOutcomes.comparisonNote}
        conclusion={twoAssetOutcomes.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={allStrategiesCompared.eyebrow}
        heading={allStrategiesCompared.heading}
        intro={allStrategiesCompared.intro}
        figures={allStrategiesCompared.figures}
        disclaimer={allStrategiesCompared.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cashReserveChamber.eyebrow}
          heading={cashReserveChamber.heading}
          intro={cashReserveChamber.intro}
          figures={cashReserveChamber.figures}
          disclaimer={cashReserveChamber.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...planOwnsInvestments} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={relatedPartyAndPersonalService.eyebrow}
        heading={relatedPartyAndPersonalService.heading}
        steps={relatedPartyAndPersonalService.steps}
        variant="cards"
        note={relatedPartyAndPersonalService.note}
      />

      <DeepDiveSection {...taxValuationAndLiquidity} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="One Balance, Three Futures"
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
