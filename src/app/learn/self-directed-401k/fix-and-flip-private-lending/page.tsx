import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { LendersSideFlip } from "@/components/learn-modules/LendersSideFlip";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  twoPerspectives,
  morganAlexStory,
  houseFlipEconomics,
  whatLenderReceives,
  lendersSideFlip,
  flipperVsLenderEconomics,
  securedMeaning,
  loanToCostValue,
  renovationRisk,
  exitStrategy,
  relatedPartyLending,
  verifyingPrivateLoan,
  planReceivesPayment,
  noteValuationAndTaxes,
  loanVsRental,
  beyondHouseFlip,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/fix-and-flip-lender-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Private Real Estate Loans With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) finance a house flip as the lender? Explore a fully reconciled private lending example, collateral risk, and default outcomes.",
  alternates: { canonical: "/learn/self-directed-401k/fix-and-flip-private-lending" },
};

export default function FixAndFlipLenderPage() {
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
        eyebrow={twoPerspectives.eyebrow}
        heading={twoPerspectives.heading}
        leftLabel={twoPerspectives.leftLabel}
        rightLabel={twoPerspectives.rightLabel}
        rows={twoPerspectives.rows}
        footnote={twoPerspectives.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={morganAlexStory.eyebrow} heading={morganAlexStory.heading} stories={morganAlexStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={houseFlipEconomics.eyebrow}
          heading={houseFlipEconomics.heading}
          intro={houseFlipEconomics.intro}
          figures={houseFlipEconomics.figures}
          disclaimer={houseFlipEconomics.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={whatLenderReceives.eyebrow}
          heading={whatLenderReceives.heading}
          intro={whatLenderReceives.intro}
          figures={whatLenderReceives.figures}
          disclaimer={whatLenderReceives.disclaimer}
        />
      </div>

      <LendersSideFlip
        eyebrow={lendersSideFlip.eyebrow}
        heading={lendersSideFlip.heading}
        intro={lendersSideFlip.intro}
        summary={lendersSideFlip.summary}
        outcomes={lendersSideFlip.outcomes}
        comparisonNote={lendersSideFlip.comparisonNote}
        conclusion={lendersSideFlip.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={flipperVsLenderEconomics.eyebrow}
        heading={flipperVsLenderEconomics.heading}
        intro={flipperVsLenderEconomics.intro}
        figures={flipperVsLenderEconomics.figures}
        disclaimer={flipperVsLenderEconomics.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...securedMeaning} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={loanToCostValue.eyebrow}
          heading={loanToCostValue.heading}
          intro={loanToCostValue.intro}
          figures={loanToCostValue.figures}
          disclaimer={loanToCostValue.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={renovationRisk.eyebrow}
        heading={renovationRisk.heading}
        intro={renovationRisk.intro}
        steps={renovationRisk.items}
        variant="cards"
        note={renovationRisk.note}
      />

      <DeepDiveSection {...exitStrategy} tone="dark" />

      <ServiceProcess
        eyebrow={relatedPartyLending.eyebrow}
        heading={relatedPartyLending.heading}
        intro={relatedPartyLending.intro}
        steps={relatedPartyLending.items}
        variant="cards"
        note={relatedPartyLending.note}
      />

      <ServiceProcess
        eyebrow={verifyingPrivateLoan.eyebrow}
        heading={verifyingPrivateLoan.heading}
        intro={verifyingPrivateLoan.intro}
        steps={verifyingPrivateLoan.items}
        columns={3}
        note={verifyingPrivateLoan.note}
      />

      <ServiceProcess
        eyebrow={planReceivesPayment.eyebrow}
        heading={planReceivesPayment.heading}
        steps={planReceivesPayment.items}
        variant="cards"
        note={planReceivesPayment.note}
      />

      <DeepDiveSection {...noteValuationAndTaxes} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={loanVsRental.eyebrow}
          heading={loanVsRental.heading}
          leftLabel={loanVsRental.leftLabel}
          rightLabel={loanVsRental.rightLabel}
          rows={loanVsRental.rows}
          footnote={loanVsRental.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={beyondHouseFlip.eyebrow}
        heading={beyondHouseFlip.heading}
        intro={beyondHouseFlip.intro}
        steps={beyondHouseFlip.items}
        variant="cards"
        note={beyondHouseFlip.note}
        linkLabel={beyondHouseFlip.linkLabel}
        linkHref={beyondHouseFlip.linkHref}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Different Role In Real Estate"
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
