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
  directAnswer,
  eligibilityVsBalance,
  alexStory,
  ownershipControlRoom,
  twoKeyPropertyPortfolio,
  rentToRealityBreakdown,
  rentalYearComparison,
  controlAndSaleAuthority,
  threeYearExitLens,
  fiveBuildingFund,
  fundDecisionsAndFees,
  sponsorFeeMicroscope,
  debtMagnifier,
  fundOutcomes,
  lockedExitAndCapitalCalls,
  ownershipVerdict,
  financialOutcomesRecap,
  expensesAndConcentrationCompared,
  planOwnsAssetsAndRelatedParty,
  taxAndValuationAndReporting,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-with-500000-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "$500,000 Self-Directed 401(k): Property vs. Private Funds | Roth Academy",
  description:
    "Explore how a Self-Directed 401(k) may invest $500,000 in rental properties or private real estate funds. Compare ownership, income, fees, leverage, and risks.",
  alternates: { canonical: "/learn/self-directed-401k/investing-with-500000" },
};

export default function InvestingWith500000Page() {
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

      <DeepDiveSection {...directAnswer} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...eligibilityVsBalance} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={alexStory.eyebrow} heading={alexStory.heading} stories={alexStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={ownershipControlRoom.eyebrow}
        heading={ownershipControlRoom.heading}
        intro={ownershipControlRoom.intro}
        scenarios={ownershipControlRoom.scenarios}
        tableColumns={ownershipControlRoom.tableColumns}
        comparisonNote={ownershipControlRoom.comparisonNote}
        conclusion={ownershipControlRoom.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={twoKeyPropertyPortfolio.eyebrow}
        heading={twoKeyPropertyPortfolio.heading}
        intro={twoKeyPropertyPortfolio.intro}
        figures={twoKeyPropertyPortfolio.figures}
        disclaimer={twoKeyPropertyPortfolio.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rentToRealityBreakdown.eyebrow}
          heading={rentToRealityBreakdown.heading}
          intro={rentToRealityBreakdown.intro}
          figures={rentToRealityBreakdown.figures}
          disclaimer={rentToRealityBreakdown.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={rentalYearComparison.eyebrow}
        heading={rentalYearComparison.heading}
        intro={rentalYearComparison.intro}
        scenarios={rentalYearComparison.scenarios}
        tableColumns={rentalYearComparison.tableColumns}
        comparisonNote={rentalYearComparison.comparisonNote}
        conclusion={rentalYearComparison.conclusion}
      />

      <DeepDiveSection {...controlAndSaleAuthority} tone="dark" />

      <HarvestScenarios
        eyebrow={threeYearExitLens.eyebrow}
        heading={threeYearExitLens.heading}
        intro={threeYearExitLens.intro}
        scenarios={threeYearExitLens.scenarios}
        tableColumns={threeYearExitLens.tableColumns}
        comparisonNote={threeYearExitLens.comparisonNote}
        conclusion={threeYearExitLens.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={fiveBuildingFund.eyebrow}
        heading={fiveBuildingFund.heading}
        intro={fiveBuildingFund.intro}
        figures={fiveBuildingFund.figures}
        disclaimer={fiveBuildingFund.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...fundDecisionsAndFees} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={sponsorFeeMicroscope.eyebrow}
          heading={sponsorFeeMicroscope.heading}
          intro={sponsorFeeMicroscope.intro}
          figures={sponsorFeeMicroscope.figures}
          disclaimer={sponsorFeeMicroscope.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={debtMagnifier.eyebrow}
          heading={debtMagnifier.heading}
          intro={debtMagnifier.intro}
          figures={debtMagnifier.figures}
          disclaimer={debtMagnifier.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={fundOutcomes.eyebrow}
        heading={fundOutcomes.heading}
        intro={fundOutcomes.intro}
        scenarios={fundOutcomes.scenarios}
        tableColumns={fundOutcomes.tableColumns}
        comparisonNote={fundOutcomes.comparisonNote}
        conclusion={fundOutcomes.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={lockedExitAndCapitalCalls.eyebrow}
        heading={lockedExitAndCapitalCalls.heading}
        intro={lockedExitAndCapitalCalls.intro}
        figures={lockedExitAndCapitalCalls.figures}
        disclaimer={lockedExitAndCapitalCalls.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={ownershipVerdict.eyebrow}
          heading={ownershipVerdict.heading}
          leftLabel={ownershipVerdict.leftLabel}
          rightLabel={ownershipVerdict.rightLabel}
          rows={ownershipVerdict.rows}
          footnote={ownershipVerdict.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={financialOutcomesRecap.eyebrow}
          heading={financialOutcomesRecap.heading}
          intro={financialOutcomesRecap.intro}
          figures={financialOutcomesRecap.figures}
          disclaimer={financialOutcomesRecap.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...expensesAndConcentrationCompared} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={planOwnsAssetsAndRelatedParty.eyebrow}
        heading={planOwnsAssetsAndRelatedParty.heading}
        steps={planOwnsAssetsAndRelatedParty.steps}
        variant="cards"
        note={planOwnsAssetsAndRelatedParty.note}
      />

      <DeepDiveSection {...taxAndValuationAndReporting} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Two Doors, One Balance"
        heading={
          <>
            {finalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{finalConversion.heading[1]}</span>
          </>
        }
        description={finalConversion.description}
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Explore The Self-Directed 401(k)"
        secondaryHref="/services/self-directed-401k"
        signature={finalConversion.signature}
      />
    </>
  );
}
