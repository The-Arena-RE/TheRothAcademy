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
  cameronStory,
  investmentObservatory,
  rentalPurchaseCosts,
  rentalOperatingBreakdown,
  rentalYearComparison,
  rentalPersonalUseAndManagement,
  fourNotePortfolio,
  defaultDomino,
  loanDiversificationAndCollateral,
  ownershipElevator,
  fundInvestmentAmount,
  fundDebtAndIncome,
  distributionMirage,
  fundOutcomes,
  exitDoorThatIsntOpen,
  fundEligibilityAndDocuments,
  taxTreatmentDifferences,
  planOwnsAssetsAndRelatedParty,
  liquidityAndValuation,
  capitalRealityBoard,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-with-100000-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Investing $100,000 With a Self-Directed 401(k) | Roth Academy",
  description:
    "Explore three ways a Self-Directed 401(k) may invest $100,000: rental property, private loans, or private real estate funds. Understand costs, cash flow, and risks.",
  alternates: { canonical: "/learn/self-directed-401k/investing-with-100000" },
};

export default function InvestingWith100000Page() {
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
        <DeepDiveStoryList eyebrow={cameronStory.eyebrow} heading={cameronStory.heading} stories={cameronStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={investmentObservatory.eyebrow}
        heading={investmentObservatory.heading}
        intro={investmentObservatory.intro}
        scenarios={investmentObservatory.scenarios}
        tableColumns={investmentObservatory.tableColumns}
        comparisonNote={investmentObservatory.comparisonNote}
        conclusion={investmentObservatory.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={rentalPurchaseCosts.eyebrow}
        heading={rentalPurchaseCosts.heading}
        intro={rentalPurchaseCosts.intro}
        figures={rentalPurchaseCosts.figures}
        disclaimer={rentalPurchaseCosts.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rentalOperatingBreakdown.eyebrow}
          heading={rentalOperatingBreakdown.heading}
          intro={rentalOperatingBreakdown.intro}
          figures={rentalOperatingBreakdown.figures}
          disclaimer={rentalOperatingBreakdown.disclaimer}
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

      <DeepDiveSection {...rentalPersonalUseAndManagement} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fourNotePortfolio.eyebrow}
          heading={fourNotePortfolio.heading}
          intro={fourNotePortfolio.intro}
          figures={fourNotePortfolio.figures}
          disclaimer={fourNotePortfolio.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={defaultDomino.eyebrow}
        heading={defaultDomino.heading}
        intro={defaultDomino.intro}
        scenarios={defaultDomino.scenarios}
        tableColumns={defaultDomino.tableColumns}
        comparisonNote={defaultDomino.comparisonNote}
        conclusion={defaultDomino.conclusion}
      />

      <DeepDiveSection {...loanDiversificationAndCollateral} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={ownershipElevator.eyebrow}
          heading={ownershipElevator.heading}
          leftLabel={ownershipElevator.leftLabel}
          rightLabel={ownershipElevator.rightLabel}
          rows={ownershipElevator.rows}
          footnote={ownershipElevator.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fundInvestmentAmount.eyebrow}
          heading={fundInvestmentAmount.heading}
          intro={fundInvestmentAmount.intro}
          figures={fundInvestmentAmount.figures}
          disclaimer={fundInvestmentAmount.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...fundDebtAndIncome} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={distributionMirage.eyebrow}
          heading={distributionMirage.heading}
          intro={distributionMirage.intro}
          figures={distributionMirage.figures}
          disclaimer={distributionMirage.disclaimer}
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
        eyebrow={exitDoorThatIsntOpen.eyebrow}
        heading={exitDoorThatIsntOpen.heading}
        intro={exitDoorThatIsntOpen.intro}
        figures={exitDoorThatIsntOpen.figures}
        disclaimer={exitDoorThatIsntOpen.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...fundEligibilityAndDocuments} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...taxTreatmentDifferences} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={planOwnsAssetsAndRelatedParty.eyebrow}
        heading={planOwnsAssetsAndRelatedParty.heading}
        steps={planOwnsAssetsAndRelatedParty.steps}
        variant="cards"
        note={planOwnsAssetsAndRelatedParty.note}
      />

      <DeepDiveSection {...liquidityAndValuation} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalRealityBoard.eyebrow}
          heading={capitalRealityBoard.heading}
          intro={capitalRealityBoard.intro}
          figures={capitalRealityBoard.figures}
          disclaimer={capitalRealityBoard.disclaimer}
        />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Three Investment Worlds"
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
