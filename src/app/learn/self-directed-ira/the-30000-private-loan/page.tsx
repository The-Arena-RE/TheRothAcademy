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
  borrowerVsLender,
  emilyStory,
  harborYardBorrower,
  loanAgreementTerms,
  balloonPaymentRevelation,
  promiseToPaymentLedger,
  collateralAndForeclosureReality,
  lienPriorityAndBorrowerQuality,
  loanVsEquity,
  whoReceivesPayments,
  loanYouCannotMake,
  lendingRealitiesMisc,
  documentsAndNoteValue,
  unsecuredAndRefinancingRisk,
  servicingAndTax,
  warningSigns,
  investmentReviewSheet,
  iraStructureDiversificationAndBeyond,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-30000-private-loan-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "$30,000 Private Loan With a Self-Directed IRA | Roth Academy",
  description:
    "See how a Self-Directed IRA may make a $30,000 private loan, collect interest, and face late payments or default. Explore the rules and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-30000-private-loan" },
};

export default function The30000PrivateLoanPage() {
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
        eyebrow={borrowerVsLender.eyebrow}
        heading={borrowerVsLender.heading}
        leftLabel={borrowerVsLender.leftLabel}
        rightLabel={borrowerVsLender.rightLabel}
        rows={borrowerVsLender.rows}
        footnote={borrowerVsLender.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={emilyStory.eyebrow} heading={emilyStory.heading} stories={emilyStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={harborYardBorrower.eyebrow}
          heading={harborYardBorrower.heading}
          intro={harborYardBorrower.intro}
          figures={harborYardBorrower.figures}
          disclaimer={harborYardBorrower.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanAgreementTerms.eyebrow}
          heading={loanAgreementTerms.heading}
          intro={loanAgreementTerms.intro}
          figures={loanAgreementTerms.figures}
          disclaimer={loanAgreementTerms.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...balloonPaymentRevelation} tone="dark" />
      </div>

      <HarvestScenarios
        eyebrow={promiseToPaymentLedger.eyebrow}
        heading={promiseToPaymentLedger.heading}
        intro={promiseToPaymentLedger.intro}
        scenarios={promiseToPaymentLedger.scenarios}
        tableColumns={promiseToPaymentLedger.tableColumns}
        comparisonNote={promiseToPaymentLedger.comparisonNote}
        conclusion={promiseToPaymentLedger.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={collateralAndForeclosureReality.eyebrow}
        heading={collateralAndForeclosureReality.heading}
        intro={collateralAndForeclosureReality.intro}
        figures={collateralAndForeclosureReality.figures}
        disclaimer={collateralAndForeclosureReality.disclaimer}
      />

      <DeepDiveSection {...lienPriorityAndBorrowerQuality} tone="panel" />

      <DeepDiveComparisonTable
        eyebrow={loanVsEquity.eyebrow}
        heading={loanVsEquity.heading}
        leftLabel={loanVsEquity.leftLabel}
        rightLabel={loanVsEquity.rightLabel}
        rows={loanVsEquity.rows}
        footnote={loanVsEquity.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...whoReceivesPayments} tone="dark" />
      </div>

      <DeepDiveSection {...loanYouCannotMake} tone="panel" />

      <DeepDiveSection {...lendingRealitiesMisc} tone="dark" />

      <DeepDiveSection {...documentsAndNoteValue} tone="panel" />

      <DeepDiveSection {...unsecuredAndRefinancingRisk} tone="dark" />

      <DeepDiveSection {...servicingAndTax} tone="panel" />

      <ServiceProcess
        eyebrow={warningSigns.eyebrow}
        heading={warningSigns.heading}
        steps={warningSigns.steps}
        variant="cards"
        note={warningSigns.note}
      />

      <ServiceProcess
        eyebrow={investmentReviewSheet.eyebrow}
        heading={investmentReviewSheet.heading}
        steps={investmentReviewSheet.steps}
        variant="list"
        columns={3}
        note={investmentReviewSheet.note}
      />

      <DeepDiveSection {...iraStructureDiversificationAndBeyond} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Private Lender's Self-Directed IRA"
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
