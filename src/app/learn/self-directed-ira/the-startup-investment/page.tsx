import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  ideaToBusiness,
  sophiaStory,
  clearPineProfile,
  problemAndCustomerQuestion,
  seedFundingRound,
  iraOwnershipCalc,
  runwayClockIntro,
  runwayClock,
  monthlySpendingBreakdown,
  productReadinessAndCompetition,
  productEconomics,
  ipAndFounderRisk,
  needForMoreMoney,
  secondFinancingRound,
  downRoundRisk,
  safeAndConvertibleNotes,
  exitPathsUncertain,
  threeInvestorOutcomes,
  preferredStockAndControl,
  relatedPartyAndFriendsStartup,
  securitiesAndAccreditedInvestor,
  investmentDocuments,
  taxStructureAndValuation,
  illiquidityFailureAndFraud,
  portfolioSizingConsideration,
  researchSheet,
  sixMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-startup-investment-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Self-Directed IRA Invest in Startups? | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may invest in startup shares. Explore funding rounds, cash runway, SAFEs, dilution, taxes, and total-loss risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-startup-investment" },
};

export default function TheStartupInvestmentPage() {
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

      <DeepDiveSection {...ideaToBusiness} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={sophiaStory.eyebrow} heading={sophiaStory.heading} stories={sophiaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={clearPineProfile.eyebrow}
          heading={clearPineProfile.heading}
          intro={clearPineProfile.intro}
          figures={clearPineProfile.figures}
          disclaimer={clearPineProfile.disclaimer}
        />
      </div>

      <DeepDiveSection {...problemAndCustomerQuestion} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={seedFundingRound.eyebrow}
        heading={seedFundingRound.heading}
        intro={seedFundingRound.intro}
        figures={seedFundingRound.figures}
        disclaimer={seedFundingRound.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={iraOwnershipCalc.eyebrow}
          heading={iraOwnershipCalc.heading}
          intro={iraOwnershipCalc.intro}
          figures={iraOwnershipCalc.figures}
          disclaimer={iraOwnershipCalc.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...runwayClockIntro} tone="dark" />
      </div>

      <HarvestScenarios
        eyebrow={runwayClock.eyebrow}
        heading={runwayClock.heading}
        intro={runwayClock.intro}
        scenarios={runwayClock.scenarios}
        tableColumns={runwayClock.tableColumns}
        comparisonNote={runwayClock.comparisonNote}
        conclusion={runwayClock.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={monthlySpendingBreakdown.eyebrow}
        heading={monthlySpendingBreakdown.heading}
        intro={monthlySpendingBreakdown.intro}
        figures={monthlySpendingBreakdown.figures}
        disclaimer={monthlySpendingBreakdown.disclaimer}
      />

      <DeepDiveSection {...productReadinessAndCompetition} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={productEconomics.eyebrow}
        heading={productEconomics.heading}
        intro={productEconomics.intro}
        figures={productEconomics.figures}
        disclaimer={productEconomics.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...ipAndFounderRisk} tone="dark" />
      </div>

      <DeepDiveSection {...needForMoreMoney} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={secondFinancingRound.eyebrow}
        heading={secondFinancingRound.heading}
        intro={secondFinancingRound.intro}
        figures={secondFinancingRound.figures}
        disclaimer={secondFinancingRound.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...downRoundRisk} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={safeAndConvertibleNotes.eyebrow}
          heading={safeAndConvertibleNotes.heading}
          leftLabel={safeAndConvertibleNotes.leftLabel}
          rightLabel={safeAndConvertibleNotes.rightLabel}
          rows={safeAndConvertibleNotes.rows}
          footnote={safeAndConvertibleNotes.footnote}
        />
      </div>

      <DeepDiveSection {...exitPathsUncertain} tone="panel" />

      <HarvestScenarios
        eyebrow={threeInvestorOutcomes.eyebrow}
        heading={threeInvestorOutcomes.heading}
        intro={threeInvestorOutcomes.intro}
        scenarios={threeInvestorOutcomes.scenarios}
        tableColumns={threeInvestorOutcomes.tableColumns}
        comparisonNote={threeInvestorOutcomes.comparisonNote}
        conclusion={threeInvestorOutcomes.conclusion}
      />

      <DeepDiveSection {...preferredStockAndControl} tone="dark" />

      <DeepDiveSection {...relatedPartyAndFriendsStartup} tone="panel" />

      <DeepDiveSection {...securitiesAndAccreditedInvestor} tone="dark" />

      <ServiceProcess
        eyebrow={investmentDocuments.eyebrow}
        heading={investmentDocuments.heading}
        steps={investmentDocuments.steps}
        variant="cards"
        note={investmentDocuments.note}
      />

      <DeepDiveSection {...taxStructureAndValuation} tone="panel" />

      <DeepDiveSection {...illiquidityFailureAndFraud} tone="dark" />

      <DeepDiveSection {...portfolioSizingConsideration} tone="panel" />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
      />

      <ServiceProcess
        eyebrow={sixMisconceptions.eyebrow}
        heading={sixMisconceptions.heading}
        steps={sixMisconceptions.steps}
        variant="cards"
        note={sixMisconceptions.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Startup Investor's Self-Directed IRA"
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
