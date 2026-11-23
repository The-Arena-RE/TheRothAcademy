import type { Metadata } from "next";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceHero } from "@/components/services/ServiceHero";
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
  twoRoles,
  elenaStory,
  bluebirdBungalowProfile,
  actualAcquisitionCost,
  bookingCalendarIllusion,
  turnoverComparison,
  fixedExpensesAndPlatformFee,
  managerAndTaxSurprise,
  hospitalityServiceSpectrum,
  ubitAndLocalRegulation,
  cancellationsSeasonalityAndRepairStress,
  personalUseAndHostingBoundary,
  hostIdentityAndFinancing,
  traditionalVsRoth,
  longTermVsShortTerm,
  reserveQuestion,
  fiveMisconceptions,
  researchSheet,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-airbnb-investment-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Self-Directed IRA Own an Airbnb? | Roth Academy",
  description:
    "Explore how a Self-Directed IRA may own short-term rental property. See booking income, occupancy costs, Airbnb fees, IRA tax rules, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-airbnb-investment" },
};

export default function TheAirbnbInvestmentPage() {
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
        eyebrow={twoRoles.eyebrow}
        heading={twoRoles.heading}
        leftLabel={twoRoles.leftLabel}
        rightLabel={twoRoles.rightLabel}
        rows={twoRoles.rows}
        footnote={twoRoles.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={elenaStory.eyebrow} heading={elenaStory.heading} stories={elenaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={bluebirdBungalowProfile.eyebrow}
          heading={bluebirdBungalowProfile.heading}
          intro={bluebirdBungalowProfile.intro}
          figures={bluebirdBungalowProfile.figures}
          disclaimer={bluebirdBungalowProfile.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={actualAcquisitionCost.eyebrow}
          heading={actualAcquisitionCost.heading}
          intro={actualAcquisitionCost.intro}
          figures={actualAcquisitionCost.figures}
          disclaimer={actualAcquisitionCost.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={bookingCalendarIllusion.eyebrow}
        heading={bookingCalendarIllusion.heading}
        intro={bookingCalendarIllusion.intro}
        scenarios={bookingCalendarIllusion.scenarios}
        tableColumns={bookingCalendarIllusion.tableColumns}
        comparisonNote={bookingCalendarIllusion.comparisonNote}
        conclusion={bookingCalendarIllusion.conclusion}
      />

      <DeepDiveComparisonTable
        eyebrow={turnoverComparison.eyebrow}
        heading={turnoverComparison.heading}
        leftLabel={turnoverComparison.leftLabel}
        rightLabel={turnoverComparison.rightLabel}
        rows={turnoverComparison.rows}
        footnote={turnoverComparison.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fixedExpensesAndPlatformFee.eyebrow}
          heading={fixedExpensesAndPlatformFee.heading}
          intro={fixedExpensesAndPlatformFee.intro}
          figures={fixedExpensesAndPlatformFee.figures}
          disclaimer={fixedExpensesAndPlatformFee.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...managerAndTaxSurprise} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={hospitalityServiceSpectrum.eyebrow}
        heading={hospitalityServiceSpectrum.heading}
        steps={hospitalityServiceSpectrum.steps}
        variant="cards"
        note={hospitalityServiceSpectrum.note}
      />

      <DeepDiveSection {...ubitAndLocalRegulation} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={cancellationsSeasonalityAndRepairStress.eyebrow}
        heading={cancellationsSeasonalityAndRepairStress.heading}
        intro={cancellationsSeasonalityAndRepairStress.intro}
        figures={cancellationsSeasonalityAndRepairStress.figures}
        disclaimer={cancellationsSeasonalityAndRepairStress.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...personalUseAndHostingBoundary} tone="dark" />
      </div>

      <DeepDiveSection {...hostIdentityAndFinancing} tone="panel" />

      <DeepDiveComparisonTable
        eyebrow={traditionalVsRoth.eyebrow}
        heading={traditionalVsRoth.heading}
        leftLabel={traditionalVsRoth.leftLabel}
        rightLabel={traditionalVsRoth.rightLabel}
        rows={traditionalVsRoth.rows}
        footnote={traditionalVsRoth.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={longTermVsShortTerm.eyebrow}
          heading={longTermVsShortTerm.heading}
          leftLabel={longTermVsShortTerm.leftLabel}
          rightLabel={longTermVsShortTerm.rightLabel}
          rows={longTermVsShortTerm.rows}
          footnote={longTermVsShortTerm.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...reserveQuestion} tone="dark" />
      </div>

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
        eyebrow="The Short-Term Rental Investor's Self-Directed IRA"
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
