import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { RetirementPaycheckTest } from "@/components/learn-modules/RetirementPaycheckTest";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  bigShift,
  threeWaysIncome,
  deniseStory,
  the600kIRA,
  withdrawalPlan,
  retirementPaycheckTest,
  threeFinancialClocks,
  threeIncomeRisks,
  liquiditySpectrum,
  rmdReality,
  traditionalVsRothRetirement,
  costsAndTaxes,
  fiveQuestionsBeforeRelying,
  consistentIncomeMyth,
  decisionFramework,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-investor-approaching-retirement-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Income-Producing Self-Directed IRA Investments | Roth Academy",
  description:
    "Explore income-producing Self-Directed IRA investments before retirement. Learn about rental income, private lending, cash flow, RMDs, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-investor-approaching-retirement" },
};

export default function TheInvestorApproachingRetirementPage() {
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

      <DeepDiveComparisonTable
        eyebrow={bigShift.eyebrow}
        heading={bigShift.heading}
        leftLabel={bigShift.leftLabel}
        rightLabel={bigShift.rightLabel}
        rows={bigShift.rows}
        footnote={bigShift.footnote}
      />

      <ServiceProcess
        eyebrow={threeWaysIncome.eyebrow}
        heading={threeWaysIncome.heading}
        steps={threeWaysIncome.steps}
        variant="cards"
        note={threeWaysIncome.note}
      />

      <DeepDiveStoryList eyebrow={deniseStory.eyebrow} heading={deniseStory.heading} stories={deniseStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={the600kIRA.eyebrow}
          heading={the600kIRA.heading}
          intro={the600kIRA.intro}
          figures={the600kIRA.figures}
          disclaimer={the600kIRA.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={withdrawalPlan.eyebrow}
          heading={withdrawalPlan.heading}
          intro={withdrawalPlan.intro}
          figures={withdrawalPlan.figures}
          disclaimer={withdrawalPlan.disclaimer}
        />
      </div>

      <RetirementPaycheckTest
        eyebrow={retirementPaycheckTest.eyebrow}
        heading={retirementPaycheckTest.heading}
        intro={retirementPaycheckTest.intro}
        portfolioSummary={retirementPaycheckTest.portfolioSummary}
        monthlyDistribution={retirementPaycheckTest.monthlyDistribution}
        scenarios={retirementPaycheckTest.scenarios}
        disclaimer={retirementPaycheckTest.disclaimer}
      />

      <ServiceProcess
        eyebrow={threeFinancialClocks.eyebrow}
        heading={threeFinancialClocks.heading}
        steps={threeFinancialClocks.steps}
        variant="list"
        columns={3}
        note={threeFinancialClocks.note}
      />

      <ServiceProcess
        eyebrow={threeIncomeRisks.eyebrow}
        heading={threeIncomeRisks.heading}
        steps={threeIncomeRisks.steps}
        variant="cards"
        note={threeIncomeRisks.note}
      />

      <ServiceProcess
        eyebrow={liquiditySpectrum.eyebrow}
        heading={liquiditySpectrum.heading}
        intro={liquiditySpectrum.intro}
        steps={liquiditySpectrum.steps}
        variant="list"
        columns={3}
        note={liquiditySpectrum.note}
      />

      <DeepDiveSection {...rmdReality} tone="panel" />

      <DeepDiveComparisonTable
        eyebrow={traditionalVsRothRetirement.eyebrow}
        heading={traditionalVsRothRetirement.heading}
        leftLabel={traditionalVsRothRetirement.leftLabel}
        rightLabel={traditionalVsRothRetirement.rightLabel}
        rows={traditionalVsRothRetirement.rows}
        footnote={traditionalVsRothRetirement.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...costsAndTaxes} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={fiveQuestionsBeforeRelying.eyebrow}
        heading={fiveQuestionsBeforeRelying.heading}
        intro={fiveQuestionsBeforeRelying.intro}
        steps={fiveQuestionsBeforeRelying.steps}
        variant="list"
        columns={3}
        note={fiveQuestionsBeforeRelying.note}
      />

      <DeepDiveSection {...consistentIncomeMyth} tone="panel" />

      <ServiceProcess
        eyebrow={decisionFramework.eyebrow}
        heading={decisionFramework.heading}
        steps={decisionFramework.steps}
        variant="list"
        columns={4}
        note={decisionFramework.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Retirement-Ready IRA"
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
