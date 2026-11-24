import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  bigIdeaRevelations,
  leahStory,
  threeDoorsOverview,
  financialRules,
  landIntro,
  landOwnership,
  landInitialCash,
  landNoIncomeFirstYear,
  landThreeYearHold,
  landOutcomes,
  loanIntro,
  loanInitialCash,
  loanInterestAndFirstYear,
  loanOutcomes,
  equityIntro,
  equityOwnership,
  equityInitialCash,
  equityDistributionsAndExpenses,
  equityOutcomes,
  threeDoorsOwnershipComparison,
  threeDoorsCashComparison,
  firstYearCashComparison,
  laterOutcomesComparison,
  cashRequirementQuestion,
  fiveQuestions,
  wholeRentalHouseQuestion,
  otherAlternatives,
  cashReserveValue,
  custodianQuestion,
  valuationAndIlliquidity,
  taxRulesComparison,
  prohibitedTransactionRule,
  fraudAndMinimums,
  researchSheet,
  sixMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-with-25000-ira-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Investing $25,000 With a Self-Directed IRA | Roth Academy",
  description:
    "Explore three $25,000 Self-Directed IRA investment scenarios: land, private loans, and real estate equity. Learn fees, income, liquidity, taxes, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/investing-with-25000" },
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

      <DeepDiveSection {...bigIdeaRevelations} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={leahStory.eyebrow} heading={leahStory.heading} stories={leahStory.stories} />
      </div>

      <ServiceProcess
        eyebrow={threeDoorsOverview.eyebrow}
        heading={threeDoorsOverview.heading}
        steps={threeDoorsOverview.steps}
        variant="list"
        columns={3}
        note={threeDoorsOverview.note}
      />

      <DeepDiveSection {...financialRules} tone="panel" />

      <DeepDiveSection {...landIntro} tone="dark" />

      <DeepDiveSection {...landOwnership} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={landInitialCash.eyebrow}
        heading={landInitialCash.heading}
        intro={landInitialCash.intro}
        figures={landInitialCash.figures}
        disclaimer={landInitialCash.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={landNoIncomeFirstYear.eyebrow}
          heading={landNoIncomeFirstYear.heading}
          intro={landNoIncomeFirstYear.intro}
          figures={landNoIncomeFirstYear.figures}
          disclaimer={landNoIncomeFirstYear.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={landThreeYearHold.eyebrow}
          heading={landThreeYearHold.heading}
          intro={landThreeYearHold.intro}
          figures={landThreeYearHold.figures}
          disclaimer={landThreeYearHold.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={landOutcomes.eyebrow}
        heading={landOutcomes.heading}
        intro={landOutcomes.intro}
        scenarios={landOutcomes.scenarios}
        tableColumns={landOutcomes.tableColumns}
        comparisonNote={landOutcomes.comparisonNote}
        conclusion={landOutcomes.conclusion}
      />

      <DeepDiveSection {...loanIntro} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanInitialCash.eyebrow}
          heading={loanInitialCash.heading}
          intro={loanInitialCash.intro}
          figures={loanInitialCash.figures}
          disclaimer={loanInitialCash.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanInterestAndFirstYear.eyebrow}
          heading={loanInterestAndFirstYear.heading}
          intro={loanInterestAndFirstYear.intro}
          figures={loanInterestAndFirstYear.figures}
          disclaimer={loanInterestAndFirstYear.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={loanOutcomes.eyebrow}
        heading={loanOutcomes.heading}
        intro={loanOutcomes.intro}
        scenarios={loanOutcomes.scenarios}
        tableColumns={loanOutcomes.tableColumns}
        comparisonNote={loanOutcomes.comparisonNote}
        conclusion={loanOutcomes.conclusion}
      />

      <DeepDiveSection {...equityIntro} tone="dark" />

      <DeepDiveSection {...equityOwnership} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={equityInitialCash.eyebrow}
        heading={equityInitialCash.heading}
        intro={equityInitialCash.intro}
        figures={equityInitialCash.figures}
        disclaimer={equityInitialCash.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={equityDistributionsAndExpenses.eyebrow}
          heading={equityDistributionsAndExpenses.heading}
          intro={equityDistributionsAndExpenses.intro}
          figures={equityDistributionsAndExpenses.figures}
          disclaimer={equityDistributionsAndExpenses.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={equityOutcomes.eyebrow}
        heading={equityOutcomes.heading}
        intro={equityOutcomes.intro}
        scenarios={equityOutcomes.scenarios}
        tableColumns={equityOutcomes.tableColumns}
        comparisonNote={equityOutcomes.comparisonNote}
        conclusion={equityOutcomes.conclusion}
      />

      <ServiceProcess
        eyebrow={threeDoorsOwnershipComparison.eyebrow}
        heading={threeDoorsOwnershipComparison.heading}
        steps={threeDoorsOwnershipComparison.steps}
        variant="list"
        columns={3}
        note={threeDoorsOwnershipComparison.note}
      />

      <DeepDiveFigurePanel
        eyebrow={threeDoorsCashComparison.eyebrow}
        heading={threeDoorsCashComparison.heading}
        intro={threeDoorsCashComparison.intro}
        figures={threeDoorsCashComparison.figures}
        disclaimer={threeDoorsCashComparison.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={firstYearCashComparison.eyebrow}
          heading={firstYearCashComparison.heading}
          intro={firstYearCashComparison.intro}
          figures={firstYearCashComparison.figures}
          disclaimer={firstYearCashComparison.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={laterOutcomesComparison.eyebrow}
          heading={laterOutcomesComparison.heading}
          intro={laterOutcomesComparison.intro}
          figures={laterOutcomesComparison.figures}
          disclaimer={laterOutcomesComparison.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cashRequirementQuestion.eyebrow}
          heading={cashRequirementQuestion.heading}
          intro={cashRequirementQuestion.intro}
          figures={cashRequirementQuestion.figures}
          disclaimer={cashRequirementQuestion.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={fiveQuestions.eyebrow}
        heading={fiveQuestions.heading}
        steps={fiveQuestions.steps}
        variant="cards"
        note={fiveQuestions.note}
      />

      <DeepDiveSection {...wholeRentalHouseQuestion} tone="dark" />

      <DeepDiveSection {...otherAlternatives} tone="panel" />

      <DeepDiveSection {...cashReserveValue} tone="dark" />

      <DeepDiveSection {...custodianQuestion} tone="panel" />

      <DeepDiveSection {...valuationAndIlliquidity} tone="dark" />

      <DeepDiveSection {...taxRulesComparison} tone="panel" />

      <DeepDiveSection {...prohibitedTransactionRule} tone="dark" />

      <DeepDiveSection {...fraudAndMinimums} tone="panel" />

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
        eyebrow="The $25,000 Self-Directed IRA"
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
