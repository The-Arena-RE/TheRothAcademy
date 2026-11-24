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
  biggestMisconceptionAndFundTypes,
  noraStory,
  willowCourtProfile,
  projectBudgetAndInvestment,
  eightyDoorsExperience,
  distributionDefinitionAndPreferredReturn,
  sponsorFeesAndManager,
  leverageAndTaxSurprise,
  k1AndSecuritiesEligibility,
  investmentDocuments,
  capitalCallLiquidityAndValue,
  fiveYearThreeOutcomes,
  exitRiskAndSponsorRisk,
  iraOwnershipAndRelatedParty,
  planAssetsFundDiversityAndFinancing,
  fiveMisconceptions,
  researchSheet,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/a-small-piece-of-a-big-apartment-deal-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Apartment Syndications in a Self-Directed IRA | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may invest in apartment syndications and private multifamily funds. Learn ownership, distributions, fees, debt, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/a-small-piece-of-a-big-apartment-deal" },
};

export default function ASmallPieceOfABigApartmentDealPage() {
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

      <DeepDiveSection {...biggestMisconceptionAndFundTypes} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={noraStory.eyebrow} heading={noraStory.heading} stories={noraStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={willowCourtProfile.eyebrow}
          heading={willowCourtProfile.heading}
          intro={willowCourtProfile.intro}
          figures={willowCourtProfile.figures}
          disclaimer={willowCourtProfile.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={projectBudgetAndInvestment.eyebrow}
          heading={projectBudgetAndInvestment.heading}
          intro={projectBudgetAndInvestment.intro}
          figures={projectBudgetAndInvestment.figures}
          disclaimer={projectBudgetAndInvestment.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={eightyDoorsExperience.eyebrow}
        heading={eightyDoorsExperience.heading}
        intro={eightyDoorsExperience.intro}
        decisions={eightyDoorsExperience.decisions}
        note={eightyDoorsExperience.note}
      />

      <DeepDiveSection {...distributionDefinitionAndPreferredReturn} tone="panel" />

      <DeepDiveSection {...sponsorFeesAndManager} tone="dark" />

      <DeepDiveSection {...leverageAndTaxSurprise} tone="panel" />

      <DeepDiveSection {...k1AndSecuritiesEligibility} tone="dark" />

      <ServiceProcess
        eyebrow={investmentDocuments.eyebrow}
        heading={investmentDocuments.heading}
        steps={investmentDocuments.steps}
        variant="cards"
        note={investmentDocuments.note}
      />

      <DeepDiveSection {...capitalCallLiquidityAndValue} tone="panel" />

      <HarvestScenarios
        eyebrow={fiveYearThreeOutcomes.eyebrow}
        heading={fiveYearThreeOutcomes.heading}
        intro={fiveYearThreeOutcomes.intro}
        scenarios={fiveYearThreeOutcomes.scenarios}
        tableColumns={fiveYearThreeOutcomes.tableColumns}
        comparisonNote={fiveYearThreeOutcomes.comparisonNote}
        conclusion={fiveYearThreeOutcomes.conclusion}
      />

      <DeepDiveSection {...exitRiskAndSponsorRisk} tone="dark" />

      <DeepDiveSection {...iraOwnershipAndRelatedParty} tone="panel" />

      <DeepDiveSection {...planAssetsFundDiversityAndFinancing} tone="dark" />

      <ServiceProcess
        eyebrow={fiveMisconceptions.eyebrow}
        heading={fiveMisconceptions.heading}
        steps={fiveMisconceptions.steps}
        variant="cards"
        note={fiveMisconceptions.note}
      />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Multifamily Fund Investor's Self-Directed IRA"
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
