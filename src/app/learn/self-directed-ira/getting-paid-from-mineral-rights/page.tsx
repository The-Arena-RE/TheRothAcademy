import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DecisionStudio } from "@/components/learn-modules/DecisionStudio";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  surfaceVsMineralOwnership,
  jamesStory,
  fiveInterestTypes,
  cedarBasinProfile,
  netMineralAcresAndUnit,
  royaltyDecimalCalc,
  royaltyJourney,
  royaltyStatementAndTiming,
  productionDeclineIntro,
  threeRoyaltyRealities,
  totalIraPositionAfterYearOne,
  newWellsAndLeaseBonus,
  leaseControlsRoyalty,
  titleProblemAndSellerChecks,
  priceAndPostProductionCosts,
  workingInterestExplainer,
  ubitTaxTreatment,
  rentFlowToIRA,
  suspensePayments,
  valuationQuestion,
  resaleAndOutcomesIntro,
  threeOwnershipOutcomes,
  operatorAndVerification,
  noProductionAndRegulatoryRisk,
  fraudWarning,
  relatedPartyProblem,
  securitiesQuestion,
  researchSheet,
  fiveMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/getting-paid-from-mineral-rights-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Mineral Rights and Oil Royalties in a Self-Directed IRA | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may own mineral rights and receive oil and gas royalties. Learn ownership, royalty calculations, taxes, production risks, and more.",
  alternates: { canonical: "/learn/self-directed-ira/getting-paid-from-mineral-rights" },
};

export default function GettingPaidFromMineralRightsPage() {
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

      <DeepDiveSection {...surfaceVsMineralOwnership} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={jamesStory.eyebrow} heading={jamesStory.heading} stories={jamesStory.stories} />
      </div>

      <ServiceProcess
        eyebrow={fiveInterestTypes.eyebrow}
        heading={fiveInterestTypes.heading}
        steps={fiveInterestTypes.steps}
        variant="cards"
        note={fiveInterestTypes.note}
      />

      <DeepDiveFigurePanel
        eyebrow={cedarBasinProfile.eyebrow}
        heading={cedarBasinProfile.heading}
        intro={cedarBasinProfile.intro}
        figures={cedarBasinProfile.figures}
        disclaimer={cedarBasinProfile.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={netMineralAcresAndUnit.eyebrow}
          heading={netMineralAcresAndUnit.heading}
          intro={netMineralAcresAndUnit.intro}
          figures={netMineralAcresAndUnit.figures}
          disclaimer={netMineralAcresAndUnit.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={royaltyDecimalCalc.eyebrow}
          heading={royaltyDecimalCalc.heading}
          intro={royaltyDecimalCalc.intro}
          figures={royaltyDecimalCalc.figures}
          disclaimer={royaltyDecimalCalc.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={royaltyJourney.eyebrow}
        heading={royaltyJourney.heading}
        intro={royaltyJourney.intro}
        decisions={royaltyJourney.decisions}
        note={royaltyJourney.note}
      />

      <DeepDiveSection {...royaltyStatementAndTiming} tone="dark" />

      <DeepDiveSection {...productionDeclineIntro} tone="panel" />

      <HarvestScenarios
        eyebrow={threeRoyaltyRealities.eyebrow}
        heading={threeRoyaltyRealities.heading}
        intro={threeRoyaltyRealities.intro}
        scenarios={threeRoyaltyRealities.scenarios}
        tableColumns={threeRoyaltyRealities.tableColumns}
        comparisonNote={threeRoyaltyRealities.comparisonNote}
        conclusion={threeRoyaltyRealities.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={totalIraPositionAfterYearOne.eyebrow}
        heading={totalIraPositionAfterYearOne.heading}
        intro={totalIraPositionAfterYearOne.intro}
        figures={totalIraPositionAfterYearOne.figures}
        disclaimer={totalIraPositionAfterYearOne.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...newWellsAndLeaseBonus} tone="dark" />
      </div>

      <DeepDiveSection {...leaseControlsRoyalty} tone="panel" />

      <DeepDiveSection {...titleProblemAndSellerChecks} tone="dark" />

      <DeepDiveSection {...priceAndPostProductionCosts} tone="panel" />

      <DeepDiveSection {...workingInterestExplainer} tone="dark" />

      <DeepDiveSection {...ubitTaxTreatment} tone="panel" />

      <DeepDiveSection {...rentFlowToIRA} tone="dark" />

      <DeepDiveSection {...suspensePayments} tone="panel" />

      <DeepDiveSection {...valuationQuestion} tone="dark" />

      <DeepDiveSection {...resaleAndOutcomesIntro} tone="panel" />

      <HarvestScenarios
        eyebrow={threeOwnershipOutcomes.eyebrow}
        heading={threeOwnershipOutcomes.heading}
        intro={threeOwnershipOutcomes.intro}
        scenarios={threeOwnershipOutcomes.scenarios}
        tableColumns={threeOwnershipOutcomes.tableColumns}
        comparisonNote={threeOwnershipOutcomes.comparisonNote}
        conclusion={threeOwnershipOutcomes.conclusion}
      />

      <DeepDiveSection {...operatorAndVerification} tone="dark" />

      <DeepDiveSection {...noProductionAndRegulatoryRisk} tone="panel" />

      <DeepDiveSection {...fraudWarning} tone="dark" />

      <DeepDiveSection {...relatedPartyProblem} tone="panel" />

      <DeepDiveSection {...securitiesQuestion} tone="dark" />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
      />

      <ServiceProcess
        eyebrow={fiveMisconceptions.eyebrow}
        heading={fiveMisconceptions.heading}
        steps={fiveMisconceptions.steps}
        variant="cards"
        note={fiveMisconceptions.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Mineral Rights Investor's Self-Directed IRA"
        heading={
          <>
            {finalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{finalConversion.heading[1]}</span>
          </>
        }
        description={finalConversion.description}
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
        secondaryLabel="Explore The Self-Directed IRA"
        secondaryHref="/services/self-directed-ira"
        signature={finalConversion.signature}
      />
    </>
  );
}
