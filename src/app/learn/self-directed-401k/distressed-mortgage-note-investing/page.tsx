import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  paperVersusProperty,
  averyStory,
  fictionalLoan,
  discountIllusion,
  realPurchaseCost,
  hiddenLienXRay,
  borrowerRightsAndKeys,
  servicerAndNotices,
  fourPossibleFutures,
  recoveryReceipt,
  bankruptcyAndForeclosureTimeline,
  resolutionClock,
  workoutLicensingAndCollection,
  titleVault,
  secondLienAndResale,
  equityIncomeAndPropertyCosts,
  personalCollectionAndRelatedParty,
  financingAndTaxTreatment,
  noteValuation,
  cheapNoteRisk,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/distressed-mortgage-note-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Distressed Mortgage Note Investing With a Self-Directed 401(k) | Roth Academy",
  description:
    "Discover how a Self-Directed 401(k) may purchase distressed mortgage notes. Explore discounted debt, borrower rights, payoffs, foreclosure risks, and recovery scenarios.",
  alternates: { canonical: "/learn/self-directed-401k/distressed-mortgage-note-investing" },
};

export default function DistressedMortgageNotePage() {
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

      <OwnershipAtrium
        eyebrow={paperVersusProperty.eyebrow}
        heading={paperVersusProperty.heading}
        intro={paperVersusProperty.intro}
        layers={paperVersusProperty.layers}
        dossier={paperVersusProperty.dossier}
        conclusion={paperVersusProperty.conclusion}
      />

      <DeepDiveStoryList eyebrow={averyStory.eyebrow} heading={averyStory.heading} stories={averyStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fictionalLoan.eyebrow}
          heading={fictionalLoan.heading}
          intro={fictionalLoan.intro}
          figures={fictionalLoan.figures}
          disclaimer={fictionalLoan.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={discountIllusion.eyebrow}
          heading={discountIllusion.heading}
          intro={discountIllusion.intro}
          figures={discountIllusion.figures}
          disclaimer={discountIllusion.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={realPurchaseCost.eyebrow}
          heading={realPurchaseCost.heading}
          intro={realPurchaseCost.intro}
          figures={realPurchaseCost.figures}
          disclaimer={realPurchaseCost.disclaimer}
        />
      </div>

      <OwnershipAtrium
        eyebrow={hiddenLienXRay.eyebrow}
        heading={hiddenLienXRay.heading}
        intro={hiddenLienXRay.intro}
        layers={hiddenLienXRay.layers}
        dossier={hiddenLienXRay.dossier}
        conclusion={hiddenLienXRay.conclusion}
      />

      <DeepDiveSection {...borrowerRightsAndKeys} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...servicerAndNotices} tone="dark" />
      </div>

      <HarvestScenarios
        eyebrow={fourPossibleFutures.eyebrow}
        heading={fourPossibleFutures.heading}
        intro={fourPossibleFutures.intro}
        scenarios={fourPossibleFutures.scenarios}
        tableColumns={fourPossibleFutures.tableColumns}
        comparisonNote={fourPossibleFutures.comparisonNote}
        conclusion={fourPossibleFutures.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={recoveryReceipt.eyebrow}
        heading={recoveryReceipt.heading}
        intro={recoveryReceipt.intro}
        figures={recoveryReceipt.figures}
        disclaimer={recoveryReceipt.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...bankruptcyAndForeclosureTimeline} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={resolutionClock.eyebrow}
        heading={resolutionClock.heading}
        intro={resolutionClock.intro}
        steps={resolutionClock.steps}
        variant="list"
        columns={4}
        note={resolutionClock.note}
      />

      <DeepDiveSection {...workoutLicensingAndCollection} tone="dark" />

      <ServiceProcess
        eyebrow={titleVault.eyebrow}
        heading={titleVault.heading}
        intro={titleVault.intro}
        steps={titleVault.steps}
        variant="list"
        columns={4}
        note={titleVault.note}
      />

      <DeepDiveSection {...secondLienAndResale} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...equityIncomeAndPropertyCosts} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalCollectionAndRelatedParty.eyebrow}
        heading={personalCollectionAndRelatedParty.heading}
        steps={personalCollectionAndRelatedParty.steps}
        variant="cards"
        note={personalCollectionAndRelatedParty.note}
      />

      <DeepDiveSection {...financingAndTaxTreatment} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={noteValuation.eyebrow}
          heading={noteValuation.heading}
          intro={noteValuation.intro}
          figures={noteValuation.figures}
          disclaimer={noteValuation.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...cheapNoteRisk} tone="dark" />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Paper Versus Property"
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
