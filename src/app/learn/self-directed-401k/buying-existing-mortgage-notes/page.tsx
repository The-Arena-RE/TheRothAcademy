import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { MortgageXRay } from "@/components/learn-modules/MortgageXRay";
import { ThreePossibleFutures } from "@/components/learn-modules/ThreePossibleFutures";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  mortgageSecondaryMarket,
  sophiaStory,
  mortgageDossier,
  whyDiscount,
  mortgageXRay,
  discountNotProfit,
  onePaymentBreakdown,
  threePossibleFutures,
  performingVsNonperforming,
  homeownerProtections,
  collateralRisk,
  noteNotHouse,
  relatedPartyNotes,
  sellerMotivationAndServicing,
  valuationTaxesAndSecurities,
  termAndDistinction,
  broaderPossibility,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/mortgage-note-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Mortgage Note Investing With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) buy an existing mortgage note? Explore a fully reconciled mortgage note investment example, discount risk, and default outcomes.",
  alternates: { canonical: "/learn/self-directed-401k/buying-existing-mortgage-notes" },
};

export default function MortgageNotePage() {
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

      <DeepDiveSection {...mortgageSecondaryMarket} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={sophiaStory.eyebrow} heading={sophiaStory.heading} stories={sophiaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={mortgageDossier.eyebrow}
          heading={mortgageDossier.heading}
          intro={mortgageDossier.intro}
          figures={mortgageDossier.figures}
          disclaimer={mortgageDossier.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={whyDiscount.eyebrow}
        heading={whyDiscount.heading}
        intro={whyDiscount.intro}
        steps={whyDiscount.items}
        columns={3}
        note={whyDiscount.note}
      />

      <MortgageXRay
        eyebrow={mortgageXRay.eyebrow}
        heading={mortgageXRay.heading}
        intro={mortgageXRay.intro}
        layers={mortgageXRay.layers}
        dossier={mortgageXRay.dossier}
        conclusion={mortgageXRay.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={discountNotProfit.eyebrow}
        heading={discountNotProfit.heading}
        intro={discountNotProfit.intro}
        figures={discountNotProfit.figures}
        disclaimer={discountNotProfit.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={onePaymentBreakdown.eyebrow}
          heading={onePaymentBreakdown.heading}
          intro={onePaymentBreakdown.intro}
          figures={onePaymentBreakdown.figures}
          disclaimer={onePaymentBreakdown.disclaimer}
        />
      </div>

      <ThreePossibleFutures
        eyebrow={threePossibleFutures.eyebrow}
        heading={threePossibleFutures.heading}
        intro={threePossibleFutures.intro}
        summary={threePossibleFutures.summary}
        outcomes={threePossibleFutures.outcomes}
        comparisonNote={threePossibleFutures.comparisonNote}
        conclusion={threePossibleFutures.conclusion}
      />

      <DeepDiveComparisonTable
        eyebrow={performingVsNonperforming.eyebrow}
        heading={performingVsNonperforming.heading}
        leftLabel={performingVsNonperforming.leftLabel}
        rightLabel={performingVsNonperforming.rightLabel}
        rows={performingVsNonperforming.rows}
        footnote={performingVsNonperforming.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...homeownerProtections} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={collateralRisk.eyebrow}
          heading={collateralRisk.heading}
          leftLabel={collateralRisk.leftLabel}
          rightLabel={collateralRisk.rightLabel}
          rows={collateralRisk.rows}
          footnote={collateralRisk.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={noteNotHouse.eyebrow}
        heading={noteNotHouse.heading}
        steps={noteNotHouse.items}
        variant="cards"
        note={noteNotHouse.note}
      />

      <ServiceProcess
        eyebrow={relatedPartyNotes.eyebrow}
        heading={relatedPartyNotes.heading}
        intro={relatedPartyNotes.intro}
        steps={relatedPartyNotes.items}
        variant="cards"
        note={relatedPartyNotes.note}
        linkLabel={relatedPartyNotes.linkLabel}
        linkHref={relatedPartyNotes.linkHref}
      />

      <ServiceProcess
        eyebrow={sellerMotivationAndServicing.eyebrow}
        heading={sellerMotivationAndServicing.heading}
        intro={sellerMotivationAndServicing.intro}
        steps={sellerMotivationAndServicing.items}
        columns={3}
        note={sellerMotivationAndServicing.note}
      />

      <DeepDiveSection {...valuationTaxesAndSecurities} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...termAndDistinction} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={broaderPossibility.eyebrow}
        heading={broaderPossibility.heading}
        intro={broaderPossibility.intro}
        steps={broaderPossibility.items}
        variant="cards"
        note={broaderPossibility.note}
        linkLabel={broaderPossibility.linkLabel}
        linkHref={broaderPossibility.linkHref}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Different Real Estate Asset"
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
