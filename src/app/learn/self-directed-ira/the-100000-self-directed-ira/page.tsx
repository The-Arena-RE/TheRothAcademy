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
  danielStory,
  firstLookAllocation,
  rentalHomeIntro,
  rentalFinancials,
  privateLoanIntro,
  loanMonthlyPayment,
  privateCompanyIntro,
  threeAssetsComparison,
  financialClocks,
  capitalRelayYearZero,
  capitalRelayYearOne,
  capitalRelayYearTwo,
  principalVsProfitReveal,
  nextOpportunity,
  notCompoundInterest,
  capitalRelayYearThree,
  rentalPropertyGainBreakdown,
  capitalRelayYearFour,
  gainBreakdown,
  cashTimeline,
  otherSideIntro,
  twoRelaysComparison,
  threeDimensionalAccountView,
  timingAndLateRepayment,
  assetSpecificRisks,
  eligibilityAndFraud,
  taxAndPersonalDistinction,
  prohibitedTransactionRule,
  custodianAndFees,
  valuationAndLiquidity,
  concentrationQuestion,
  fourDecisions,
  researchSheet,
  sevenMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-100000-self-directed-ira-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "What Can a $100,000 Self-Directed IRA Invest In? | Roth Academy",
  description:
    "Explore how a $100,000 Self-Directed IRA might own rental property, private notes, and company shares. Learn cash flow, repayments, taxes, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-100000-self-directed-ira" },
};

export default function The100000SelfDirectedIraPage() {
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
        <DeepDiveStoryList eyebrow={danielStory.eyebrow} heading={danielStory.heading} stories={danielStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={firstLookAllocation.eyebrow}
          heading={firstLookAllocation.heading}
          intro={firstLookAllocation.intro}
          figures={firstLookAllocation.figures}
          disclaimer={firstLookAllocation.disclaimer}
        />
      </div>

      <DeepDiveSection {...rentalHomeIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={rentalFinancials.eyebrow}
        heading={rentalFinancials.heading}
        intro={rentalFinancials.intro}
        figures={rentalFinancials.figures}
        disclaimer={rentalFinancials.disclaimer}
      />

      <DeepDiveSection {...privateLoanIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={loanMonthlyPayment.eyebrow}
        heading={loanMonthlyPayment.heading}
        intro={loanMonthlyPayment.intro}
        figures={loanMonthlyPayment.figures}
        disclaimer={loanMonthlyPayment.disclaimer}
      />

      <DeepDiveSection {...privateCompanyIntro} tone="panel" />

      <ServiceProcess
        eyebrow={threeAssetsComparison.eyebrow}
        heading={threeAssetsComparison.heading}
        steps={threeAssetsComparison.steps}
        variant="list"
        columns={3}
        note={threeAssetsComparison.note}
      />

      <DeepDiveSection {...financialClocks} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalRelayYearZero.eyebrow}
          heading={capitalRelayYearZero.heading}
          intro={capitalRelayYearZero.intro}
          figures={capitalRelayYearZero.figures}
          disclaimer={capitalRelayYearZero.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalRelayYearOne.eyebrow}
          heading={capitalRelayYearOne.heading}
          intro={capitalRelayYearOne.intro}
          figures={capitalRelayYearOne.figures}
          disclaimer={capitalRelayYearOne.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalRelayYearTwo.eyebrow}
          heading={capitalRelayYearTwo.heading}
          intro={capitalRelayYearTwo.intro}
          figures={capitalRelayYearTwo.figures}
          disclaimer={capitalRelayYearTwo.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={principalVsProfitReveal.eyebrow}
          heading={principalVsProfitReveal.heading}
          intro={principalVsProfitReveal.intro}
          figures={principalVsProfitReveal.figures}
          disclaimer={principalVsProfitReveal.disclaimer}
        />
      </div>

      <DeepDiveSection {...nextOpportunity} tone="panel" />

      <DeepDiveSection {...notCompoundInterest} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalRelayYearThree.eyebrow}
          heading={capitalRelayYearThree.heading}
          intro={capitalRelayYearThree.intro}
          figures={capitalRelayYearThree.figures}
          disclaimer={capitalRelayYearThree.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rentalPropertyGainBreakdown.eyebrow}
          heading={rentalPropertyGainBreakdown.heading}
          intro={rentalPropertyGainBreakdown.intro}
          figures={rentalPropertyGainBreakdown.figures}
          disclaimer={rentalPropertyGainBreakdown.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalRelayYearFour.eyebrow}
          heading={capitalRelayYearFour.heading}
          intro={capitalRelayYearFour.intro}
          figures={capitalRelayYearFour.figures}
          disclaimer={capitalRelayYearFour.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={gainBreakdown.eyebrow}
          heading={gainBreakdown.heading}
          intro={gainBreakdown.intro}
          figures={gainBreakdown.figures}
          disclaimer={gainBreakdown.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={cashTimeline.eyebrow}
        heading={cashTimeline.heading}
        steps={cashTimeline.steps}
        variant="list"
        columns={3}
        note={cashTimeline.note}
      />

      <DeepDiveSection {...otherSideIntro} tone="dark" />

      <HarvestScenarios
        eyebrow={twoRelaysComparison.eyebrow}
        heading={twoRelaysComparison.heading}
        intro={twoRelaysComparison.intro}
        scenarios={twoRelaysComparison.scenarios}
        tableColumns={twoRelaysComparison.tableColumns}
        comparisonNote={twoRelaysComparison.comparisonNote}
        conclusion={twoRelaysComparison.conclusion}
      />

      <DeepDiveSection {...threeDimensionalAccountView} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={timingAndLateRepayment.eyebrow}
        heading={timingAndLateRepayment.heading}
        intro={timingAndLateRepayment.intro}
        figures={timingAndLateRepayment.figures}
        disclaimer={timingAndLateRepayment.disclaimer}
      />

      <DeepDiveSection {...assetSpecificRisks} tone="panel" />

      <DeepDiveSection {...eligibilityAndFraud} tone="dark" />

      <DeepDiveSection {...taxAndPersonalDistinction} tone="panel" />

      <DeepDiveSection {...prohibitedTransactionRule} tone="dark" />

      <DeepDiveSection {...custodianAndFees} tone="panel" />

      <DeepDiveSection {...valuationAndLiquidity} tone="dark" />

      <DeepDiveSection {...concentrationQuestion} tone="panel" />

      <ServiceProcess
        eyebrow={fourDecisions.eyebrow}
        heading={fourDecisions.heading}
        steps={fourDecisions.steps}
        variant="cards"
        note={fourDecisions.note}
      />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
      />

      <ServiceProcess
        eyebrow={sevenMisconceptions.eyebrow}
        heading={sevenMisconceptions.heading}
        steps={sevenMisconceptions.steps}
        variant="cards"
        note={sevenMisconceptions.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The $100,000 Self-Directed IRA"
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
