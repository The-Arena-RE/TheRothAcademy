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
  victoriaStory,
  propertyIntro,
  propertyRent,
  propertyExpenses,
  twoPurchasingOptions,
  allCashPurchase,
  financedPurchase,
  firstLeverageMirrorReveal,
  loanSourceAndNonrecourse,
  loanTerms,
  loanBalanceSchedule,
  sameIncomeDifferentLoan,
  lenderReceiptBreakdown,
  fiveYearCashBeforeSale,
  favorableSaleIntro,
  allCashFavorableExit,
  financedFavorableExit,
  secondLeverageMirrorReveal,
  extraCashQuestion,
  unexpectedRoofRepair,
  vacantTenantScenario,
  debtCoverageRatio,
  difficultOperatingYear,
  fiveYearStressIntro,
  stressAllCash,
  stressFinanced,
  thirdLeverageMirrorReveal,
  equityDisappearingAct,
  personalGuaranteeWarning,
  taxQuestions,
  iraVsIndividualAnd401k,
  loanMaturityProblem,
  reserveTenantPropertyRisk,
  custodianAndExpertise,
  prohibitedTransactionRule,
  dueDiligenceResearchSheet,
  threeMisleadingAssumptions,
  otherInvestments,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-500000-self-directed-ira-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "What Can a $500,000 Self-Directed IRA Invest In? | Roth Academy",
  description:
    "Explore how a $500,000 Self-Directed IRA might purchase commercial real estate with cash or financing. Learn income, debt, taxes, and risk.",
  alternates: { canonical: "/learn/self-directed-ira/the-500000-self-directed-ira" },
};

export default function The500000SelfDirectedIraPage() {
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
        <DeepDiveStoryList eyebrow={victoriaStory.eyebrow} heading={victoriaStory.heading} stories={victoriaStory.stories} />
      </div>

      <DeepDiveSection {...propertyIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={propertyRent.eyebrow}
        heading={propertyRent.heading}
        intro={propertyRent.intro}
        figures={propertyRent.figures}
        disclaimer={propertyRent.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={propertyExpenses.eyebrow}
          heading={propertyExpenses.heading}
          intro={propertyExpenses.intro}
          figures={propertyExpenses.figures}
          disclaimer={propertyExpenses.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={twoPurchasingOptions.eyebrow}
        heading={twoPurchasingOptions.heading}
        steps={twoPurchasingOptions.steps}
        variant="list"
        columns={3}
        note={twoPurchasingOptions.note}
      />

      <DeepDiveFigurePanel
        eyebrow={allCashPurchase.eyebrow}
        heading={allCashPurchase.heading}
        intro={allCashPurchase.intro}
        figures={allCashPurchase.figures}
        disclaimer={allCashPurchase.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={financedPurchase.eyebrow}
          heading={financedPurchase.heading}
          intro={financedPurchase.intro}
          figures={financedPurchase.figures}
          disclaimer={financedPurchase.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={firstLeverageMirrorReveal.eyebrow}
        heading={firstLeverageMirrorReveal.heading}
        intro={firstLeverageMirrorReveal.intro}
        scenarios={firstLeverageMirrorReveal.scenarios}
        tableColumns={firstLeverageMirrorReveal.tableColumns}
        comparisonNote={firstLeverageMirrorReveal.comparisonNote}
        conclusion={firstLeverageMirrorReveal.conclusion}
      />

      <DeepDiveSection {...loanSourceAndNonrecourse} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanTerms.eyebrow}
          heading={loanTerms.heading}
          intro={loanTerms.intro}
          figures={loanTerms.figures}
          disclaimer={loanTerms.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={loanBalanceSchedule.eyebrow}
        heading={loanBalanceSchedule.heading}
        steps={loanBalanceSchedule.steps}
        variant="list"
        columns={3}
        note={loanBalanceSchedule.note}
      />

      <DeepDiveFigurePanel
        eyebrow={sameIncomeDifferentLoan.eyebrow}
        heading={sameIncomeDifferentLoan.heading}
        intro={sameIncomeDifferentLoan.intro}
        figures={sameIncomeDifferentLoan.figures}
        disclaimer={sameIncomeDifferentLoan.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={lenderReceiptBreakdown.eyebrow}
          heading={lenderReceiptBreakdown.heading}
          intro={lenderReceiptBreakdown.intro}
          figures={lenderReceiptBreakdown.figures}
          disclaimer={lenderReceiptBreakdown.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fiveYearCashBeforeSale.eyebrow}
          heading={fiveYearCashBeforeSale.heading}
          intro={fiveYearCashBeforeSale.intro}
          figures={fiveYearCashBeforeSale.figures}
          disclaimer={fiveYearCashBeforeSale.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={favorableSaleIntro.eyebrow}
          heading={favorableSaleIntro.heading}
          intro={favorableSaleIntro.intro}
          figures={favorableSaleIntro.figures}
          disclaimer={favorableSaleIntro.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={allCashFavorableExit.eyebrow}
          heading={allCashFavorableExit.heading}
          intro={allCashFavorableExit.intro}
          figures={allCashFavorableExit.figures}
          disclaimer={allCashFavorableExit.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={financedFavorableExit.eyebrow}
          heading={financedFavorableExit.heading}
          intro={financedFavorableExit.intro}
          figures={financedFavorableExit.figures}
          disclaimer={financedFavorableExit.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={secondLeverageMirrorReveal.eyebrow}
        heading={secondLeverageMirrorReveal.heading}
        intro={secondLeverageMirrorReveal.intro}
        scenarios={secondLeverageMirrorReveal.scenarios}
        tableColumns={secondLeverageMirrorReveal.tableColumns}
        comparisonNote={secondLeverageMirrorReveal.comparisonNote}
        conclusion={secondLeverageMirrorReveal.conclusion}
      />

      <DeepDiveSection {...extraCashQuestion} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={unexpectedRoofRepair.eyebrow}
        heading={unexpectedRoofRepair.heading}
        intro={unexpectedRoofRepair.intro}
        figures={unexpectedRoofRepair.figures}
        disclaimer={unexpectedRoofRepair.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={vacantTenantScenario.eyebrow}
          heading={vacantTenantScenario.heading}
          intro={vacantTenantScenario.intro}
          figures={vacantTenantScenario.figures}
          disclaimer={vacantTenantScenario.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={debtCoverageRatio.eyebrow}
          heading={debtCoverageRatio.heading}
          intro={debtCoverageRatio.intro}
          figures={debtCoverageRatio.figures}
          disclaimer={debtCoverageRatio.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={difficultOperatingYear.eyebrow}
          heading={difficultOperatingYear.heading}
          intro={difficultOperatingYear.intro}
          figures={difficultOperatingYear.figures}
          disclaimer={difficultOperatingYear.disclaimer}
        />
      </div>

      <DeepDiveSection {...fiveYearStressIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={stressAllCash.eyebrow}
        heading={stressAllCash.heading}
        intro={stressAllCash.intro}
        figures={stressAllCash.figures}
        disclaimer={stressAllCash.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={stressFinanced.eyebrow}
          heading={stressFinanced.heading}
          intro={stressFinanced.intro}
          figures={stressFinanced.figures}
          disclaimer={stressFinanced.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={thirdLeverageMirrorReveal.eyebrow}
        heading={thirdLeverageMirrorReveal.heading}
        intro={thirdLeverageMirrorReveal.intro}
        scenarios={thirdLeverageMirrorReveal.scenarios}
        tableColumns={thirdLeverageMirrorReveal.tableColumns}
        comparisonNote={thirdLeverageMirrorReveal.comparisonNote}
        conclusion={thirdLeverageMirrorReveal.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={equityDisappearingAct.eyebrow}
        heading={equityDisappearingAct.heading}
        intro={equityDisappearingAct.intro}
        figures={equityDisappearingAct.figures}
        disclaimer={equityDisappearingAct.disclaimer}
      />

      <DeepDiveSection {...personalGuaranteeWarning} tone="panel" />

      <DeepDiveSection {...taxQuestions} tone="dark" />

      <DeepDiveSection {...iraVsIndividualAnd401k} tone="panel" />

      <DeepDiveSection {...loanMaturityProblem} tone="dark" />

      <DeepDiveSection {...reserveTenantPropertyRisk} tone="panel" />

      <DeepDiveSection {...custodianAndExpertise} tone="dark" />

      <DeepDiveSection {...prohibitedTransactionRule} tone="panel" />

      <ServiceProcess
        eyebrow={dueDiligenceResearchSheet.eyebrow}
        heading={dueDiligenceResearchSheet.heading}
        steps={dueDiligenceResearchSheet.steps}
        variant="list"
        columns={3}
        note={dueDiligenceResearchSheet.note}
      />

      <ServiceProcess
        eyebrow={threeMisleadingAssumptions.eyebrow}
        heading={threeMisleadingAssumptions.heading}
        steps={threeMisleadingAssumptions.steps}
        variant="cards"
        note={threeMisleadingAssumptions.note}
      />

      <DeepDiveSection {...otherInvestments} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The $500,000 Self-Directed IRA"
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
