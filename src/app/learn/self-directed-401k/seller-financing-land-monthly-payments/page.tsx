import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { PaymentTimeline } from "@/components/learn-modules/PaymentTimeline";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  twoWaysToSell,
  alexStory,
  sellerFinancingMeaning,
  documentsThree,
  paymentTimeline,
  planOwnsNote,
  paymentTwoParts,
  whoReceivesMoney,
  noteOwnershipCost,
  fullEconomics,
  buyerDefaults,
  buyerMatters,
  sellerFinancingLaw,
  contractForDeed,
  financeToYourself,
  noteTracking,
  taxesOnSaleInterest,
  sellingOrBuyingNote,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/seller-financing-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Seller Financing Inside A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) sell land and receive monthly payments? Explore a fully reconciled seller-financing example, note risks, and tax questions.",
  alternates: { canonical: "/learn/self-directed-401k/seller-financing-land-monthly-payments" },
};

export default function SellerFinancingPage() {
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
        eyebrow={twoWaysToSell.eyebrow}
        heading={twoWaysToSell.heading}
        leftLabel={twoWaysToSell.leftLabel}
        rightLabel={twoWaysToSell.rightLabel}
        rows={twoWaysToSell.rows}
        footnote={twoWaysToSell.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={alexStory.eyebrow} heading={alexStory.heading} stories={alexStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...sellerFinancingMeaning} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={documentsThree.eyebrow}
        heading={documentsThree.heading}
        steps={documentsThree.items}
        variant="cards"
        note={documentsThree.note}
      />

      <PaymentTimeline
        eyebrow={paymentTimeline.eyebrow}
        heading={paymentTimeline.heading}
        intro={paymentTimeline.intro}
        summary={paymentTimeline.summary}
        checkpoints={paymentTimeline.checkpoints}
        totals={paymentTimeline.totals}
        totalsNote={paymentTimeline.totalsNote}
        scenarios={paymentTimeline.scenarios}
        conclusion={paymentTimeline.conclusion}
      />

      <DeepDiveSection {...planOwnsNote} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={paymentTwoParts.eyebrow}
          heading={paymentTwoParts.heading}
          intro={paymentTwoParts.intro}
          figures={paymentTwoParts.figures}
          disclaimer={paymentTwoParts.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={whoReceivesMoney.eyebrow}
        heading={whoReceivesMoney.heading}
        steps={whoReceivesMoney.items}
        variant="cards"
        note={whoReceivesMoney.note}
      />

      <DeepDiveFigurePanel
        eyebrow={noteOwnershipCost.eyebrow}
        heading={noteOwnershipCost.heading}
        intro={noteOwnershipCost.intro}
        figures={noteOwnershipCost.figures}
        disclaimer={noteOwnershipCost.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fullEconomics.eyebrow}
          heading={fullEconomics.heading}
          intro={fullEconomics.intro}
          figures={fullEconomics.figures}
          disclaimer={fullEconomics.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={buyerDefaults.eyebrow}
        heading={buyerDefaults.heading}
        intro={buyerDefaults.intro}
        steps={buyerDefaults.items}
        variant="cards"
        note={buyerDefaults.note}
      />

      <DeepDiveComparisonTable
        eyebrow={buyerMatters.eyebrow}
        heading={buyerMatters.heading}
        leftLabel={buyerMatters.leftLabel}
        rightLabel={buyerMatters.rightLabel}
        rows={buyerMatters.rows}
        footnote={buyerMatters.footnote}
      />

      <ServiceProcess
        eyebrow={sellerFinancingLaw.eyebrow}
        heading={sellerFinancingLaw.heading}
        intro={sellerFinancingLaw.intro}
        steps={sellerFinancingLaw.items}
        variant="cards"
        note={sellerFinancingLaw.note}
      />

      <DeepDiveComparisonTable
        eyebrow={contractForDeed.eyebrow}
        heading={contractForDeed.heading}
        leftLabel={contractForDeed.leftLabel}
        rightLabel={contractForDeed.rightLabel}
        rows={contractForDeed.rows}
        footnote={contractForDeed.footnote}
      />

      <ServiceProcess
        eyebrow={financeToYourself.eyebrow}
        heading={financeToYourself.heading}
        intro={financeToYourself.intro}
        steps={financeToYourself.items}
        variant="cards"
        note={financeToYourself.note}
        linkLabel={financeToYourself.linkLabel}
        linkHref={financeToYourself.linkHref}
      />

      <ServiceProcess
        eyebrow={noteTracking.eyebrow}
        heading={noteTracking.heading}
        intro={noteTracking.intro}
        steps={noteTracking.items}
        variant="cards"
        note={noteTracking.note}
      />

      <ServiceProcess
        eyebrow={taxesOnSaleInterest.eyebrow}
        heading={taxesOnSaleInterest.heading}
        intro={taxesOnSaleInterest.intro}
        steps={taxesOnSaleInterest.items}
        columns={3}
        note={taxesOnSaleInterest.note}
      />

      <ServiceProcess
        eyebrow={sellingOrBuyingNote.eyebrow}
        heading={sellingOrBuyingNote.heading}
        intro={sellingOrBuyingNote.intro}
        steps={sellingOrBuyingNote.items}
        columns={3}
        note={sellingOrBuyingNote.note}
        linkLabel={sellingOrBuyingNote.linkLabel}
        linkHref={sellingOrBuyingNote.linkHref}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Different Kind Of Real Estate Investment"
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
