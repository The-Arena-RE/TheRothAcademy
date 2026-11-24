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
  firstRevelation,
  mayaStory,
  fiveBlocksIntro,
  theDoors,
  doorwaySummary,
  costFilterIntro,
  threeExpenseLevels,
  lowMinimumTrap,
  loanSetup,
  interestAndCostReveal,
  twoLoanOutcomes,
  simplerPathIntro,
  conventionalAllocation,
  favorableMarketYear,
  unfavorableMarketYear,
  fourFinancialExperiences,
  lowMinimumNotSafe,
  entireIraOneInvestment,
  reserveQuestion,
  iraLlcQuestion,
  whyCustodianMatters,
  transferVsContribution,
  contributionLimits2026,
  longViewIntro,
  accountAfterOneYear,
  accountAfterThreeYears,
  accountAfterFiveYears,
  fiveYearContributionStory,
  waitingQuestion,
  opportunityCostOfFees,
  illiquidityProblem,
  wrongKindOfControl,
  promotersPitch,
  dueDiligenceQuestions,
  fiveQuestionFramework,
  threeMostImportantLessons,
  fiveMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/starting-with-5000-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can You Start a Self-Directed IRA With $5,000? | Roth Academy",
  description:
    "Explore what a $5,000 Self-Directed IRA might access, including smaller investments, private notes, minimums, fees, risks, and future contributions.",
  alternates: { canonical: "/learn/self-directed-ira/starting-with-5000" },
};

export default function StartingWith5000Page() {
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

      <DeepDiveSection {...firstRevelation} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={mayaStory.eyebrow} heading={mayaStory.heading} stories={mayaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fiveBlocksIntro.eyebrow}
          heading={fiveBlocksIntro.heading}
          intro={fiveBlocksIntro.intro}
          figures={fiveBlocksIntro.figures}
          disclaimer={fiveBlocksIntro.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={theDoors.eyebrow}
        heading={theDoors.heading}
        intro={theDoors.intro}
        decisions={theDoors.decisions}
        note={theDoors.note}
      />

      <ServiceProcess
        eyebrow={doorwaySummary.eyebrow}
        heading={doorwaySummary.heading}
        steps={doorwaySummary.steps}
        variant="list"
        columns={3}
        note={doorwaySummary.note}
      />

      <DeepDiveSection {...costFilterIntro} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={threeExpenseLevels.eyebrow}
          heading={threeExpenseLevels.heading}
          intro={threeExpenseLevels.intro}
          figures={threeExpenseLevels.figures}
          disclaimer={threeExpenseLevels.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={lowMinimumTrap.eyebrow}
          heading={lowMinimumTrap.heading}
          intro={lowMinimumTrap.intro}
          figures={lowMinimumTrap.figures}
          disclaimer={lowMinimumTrap.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanSetup.eyebrow}
          heading={loanSetup.heading}
          intro={loanSetup.intro}
          figures={loanSetup.figures}
          disclaimer={loanSetup.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={interestAndCostReveal.eyebrow}
          heading={interestAndCostReveal.heading}
          intro={interestAndCostReveal.intro}
          figures={interestAndCostReveal.figures}
          disclaimer={interestAndCostReveal.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={twoLoanOutcomes.eyebrow}
        heading={twoLoanOutcomes.heading}
        intro={twoLoanOutcomes.intro}
        scenarios={twoLoanOutcomes.scenarios}
        tableColumns={twoLoanOutcomes.tableColumns}
        comparisonNote={twoLoanOutcomes.comparisonNote}
        conclusion={twoLoanOutcomes.conclusion}
      />

      <DeepDiveSection {...simplerPathIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={conventionalAllocation.eyebrow}
        heading={conventionalAllocation.heading}
        figures={conventionalAllocation.figures}
        disclaimer={conventionalAllocation.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={favorableMarketYear.eyebrow}
          heading={favorableMarketYear.heading}
          intro={favorableMarketYear.intro}
          figures={favorableMarketYear.figures}
          disclaimer={favorableMarketYear.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={unfavorableMarketYear.eyebrow}
          heading={unfavorableMarketYear.heading}
          intro={unfavorableMarketYear.intro}
          figures={unfavorableMarketYear.figures}
          disclaimer={unfavorableMarketYear.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={fourFinancialExperiences.eyebrow}
        heading={fourFinancialExperiences.heading}
        intro={fourFinancialExperiences.intro}
        scenarios={fourFinancialExperiences.scenarios}
        tableColumns={fourFinancialExperiences.tableColumns}
        comparisonNote={fourFinancialExperiences.comparisonNote}
        conclusion={fourFinancialExperiences.conclusion}
      />

      <DeepDiveSection {...lowMinimumNotSafe} tone="dark" />

      <DeepDiveSection {...entireIraOneInvestment} tone="panel" />

      <DeepDiveSection {...reserveQuestion} tone="dark" />

      <DeepDiveSection {...iraLlcQuestion} tone="panel" />

      <DeepDiveSection {...whyCustodianMatters} tone="dark" />

      <DeepDiveSection {...transferVsContribution} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={contributionLimits2026.eyebrow}
        heading={contributionLimits2026.heading}
        intro={contributionLimits2026.intro}
        figures={contributionLimits2026.figures}
        disclaimer={contributionLimits2026.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...longViewIntro} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={accountAfterOneYear.eyebrow}
          heading={accountAfterOneYear.heading}
          figures={accountAfterOneYear.figures}
          disclaimer={accountAfterOneYear.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={accountAfterThreeYears.eyebrow}
          heading={accountAfterThreeYears.heading}
          figures={accountAfterThreeYears.figures}
          disclaimer={accountAfterThreeYears.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={accountAfterFiveYears.eyebrow}
          heading={accountAfterFiveYears.heading}
          figures={accountAfterFiveYears.figures}
          disclaimer={accountAfterFiveYears.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={fiveYearContributionStory.eyebrow}
        heading={fiveYearContributionStory.heading}
        steps={fiveYearContributionStory.steps}
        variant="list"
        columns={3}
        note={fiveYearContributionStory.note}
      />

      <DeepDiveSection {...waitingQuestion} tone="panel" />

      <DeepDiveSection {...opportunityCostOfFees} tone="dark" />

      <DeepDiveSection {...illiquidityProblem} tone="panel" />

      <DeepDiveSection {...wrongKindOfControl} tone="dark" />

      <DeepDiveSection {...promotersPitch} tone="panel" />

      <DeepDiveSection {...dueDiligenceQuestions} tone="dark" />

      <ServiceProcess
        eyebrow={fiveQuestionFramework.eyebrow}
        heading={fiveQuestionFramework.heading}
        steps={fiveQuestionFramework.steps}
        variant="cards"
        note={fiveQuestionFramework.note}
      />

      <ServiceProcess
        eyebrow={threeMostImportantLessons.eyebrow}
        heading={threeMostImportantLessons.heading}
        steps={threeMostImportantLessons.steps}
        variant="cards"
        note={threeMostImportantLessons.note}
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
        eyebrow="The $5,000 Self-Directed IRA"
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
