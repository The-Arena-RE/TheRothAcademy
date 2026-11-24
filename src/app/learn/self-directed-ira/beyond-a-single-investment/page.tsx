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
  bigRevelation,
  noraStory,
  sixAllocationsOverview,
  opportunityAtlas,
  sixAllocationsAtAGlance,
  diversificationAndConcentration,
  sharedRiskMap,
  theMoneyTrail,
  threeImportantNumbers,
  liquidityRepairScenario,
  liquidityComparisonByAsset,
  cashReserveTradeoffs,
  moreInvestmentsMoreWork,
  valuationChallenge,
  taxRulesDontDisappear,
  prohibitedTransactionRule,
  custodianLimitations,
  longTermPlanAndRMDs,
  moreIsntBetter,
  fiveMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/beyond-a-single-investment-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Self-Directed IRA Hold Multiple Investments? | Roth Academy",
  description:
    "Discover how an appropriate Self-Directed IRA may hold several qualifying investments at once — real estate, private loans, public markets, precious metals, and private businesses.",
  alternates: { canonical: "/learn/self-directed-ira/beyond-a-single-investment" },
};

export default function BeyondASingleInvestmentPage() {
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

      <DeepDiveSection {...bigRevelation} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={noraStory.eyebrow} heading={noraStory.heading} stories={noraStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={sixAllocationsOverview.eyebrow}
          heading={sixAllocationsOverview.heading}
          intro={sixAllocationsOverview.intro}
          figures={sixAllocationsOverview.figures}
          disclaimer={sixAllocationsOverview.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={opportunityAtlas.eyebrow}
        heading={opportunityAtlas.heading}
        intro={opportunityAtlas.intro}
        decisions={opportunityAtlas.decisions}
        note={opportunityAtlas.note}
      />

      <ServiceProcess
        eyebrow={sixAllocationsAtAGlance.eyebrow}
        heading={sixAllocationsAtAGlance.heading}
        steps={sixAllocationsAtAGlance.steps}
        variant="list"
        columns={3}
        note={sixAllocationsAtAGlance.note}
      />

      <DeepDiveSection {...diversificationAndConcentration} tone="dark" />

      <DeepDiveSection {...sharedRiskMap} tone="panel" />

      <HarvestScenarios
        eyebrow={theMoneyTrail.eyebrow}
        heading={theMoneyTrail.heading}
        intro={theMoneyTrail.intro}
        scenarios={theMoneyTrail.scenarios}
        tableColumns={theMoneyTrail.tableColumns}
        comparisonNote={theMoneyTrail.comparisonNote}
        conclusion={theMoneyTrail.conclusion}
      />

      <DeepDiveSection {...threeImportantNumbers} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={liquidityRepairScenario.eyebrow}
        heading={liquidityRepairScenario.heading}
        intro={liquidityRepairScenario.intro}
        figures={liquidityRepairScenario.figures}
        disclaimer={liquidityRepairScenario.disclaimer}
      />

      <ServiceProcess
        eyebrow={liquidityComparisonByAsset.eyebrow}
        heading={liquidityComparisonByAsset.heading}
        steps={liquidityComparisonByAsset.steps}
        variant="list"
        columns={3}
        note={liquidityComparisonByAsset.note}
      />

      <DeepDiveSection {...cashReserveTradeoffs} tone="dark" />

      <DeepDiveSection {...moreInvestmentsMoreWork} tone="panel" />

      <DeepDiveSection {...valuationChallenge} tone="dark" />

      <DeepDiveSection {...taxRulesDontDisappear} tone="panel" />

      <DeepDiveSection {...prohibitedTransactionRule} tone="dark" />

      <DeepDiveSection {...custodianLimitations} tone="panel" />

      <DeepDiveSection {...longTermPlanAndRMDs} tone="dark" />

      <DeepDiveSection {...moreIsntBetter} tone="panel" />

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
        eyebrow="The Multi-Investment Self-Directed IRA"
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
