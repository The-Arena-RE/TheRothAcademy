import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { TwoDoorsOneDeed } from "@/components/learn-modules/TwoDoorsOneDeed";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  whatIsADuplex,
  cameronStory,
  propertyPurchase,
  twoRentsNotDoubleProfit,
  twoDoorsOneDeed,
  roofSurpriseIntro,
  roofSurpriseComparison,
  whoReceivesMoney,
  personalUseAndFamily,
  managementOversight,
  leasesAndDeposits,
  fairHousing,
  cashReserveMatters,
  additionalConsiderations,
  sellingTheDuplex,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/rental-duplex-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can A Self-Directed 401(k) Own A Rental Duplex? | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own a rental duplex with two tenants? Explore a fully reconciled rental-property example, vacancy risk, and repair costs.",
  alternates: { canonical: "/learn/self-directed-401k/rental-duplex-investment" },
};

export default function RentalDuplexPage() {
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

      <DeepDiveSection {...whatIsADuplex} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={cameronStory.eyebrow} heading={cameronStory.heading} stories={cameronStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={propertyPurchase.eyebrow}
          heading={propertyPurchase.heading}
          intro={propertyPurchase.intro}
          figures={propertyPurchase.figures}
          disclaimer={propertyPurchase.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={twoRentsNotDoubleProfit.eyebrow}
          heading={twoRentsNotDoubleProfit.heading}
          intro={twoRentsNotDoubleProfit.intro}
          figures={twoRentsNotDoubleProfit.figures}
          disclaimer={twoRentsNotDoubleProfit.disclaimer}
        />
      </div>

      <TwoDoorsOneDeed
        eyebrow={twoDoorsOneDeed.eyebrow}
        heading={twoDoorsOneDeed.heading}
        intro={twoDoorsOneDeed.intro}
        modelNote={twoDoorsOneDeed.modelNote}
        scenarios={twoDoorsOneDeed.scenarios}
        assumptionsNote={twoDoorsOneDeed.assumptionsNote}
        comparisonNote={twoDoorsOneDeed.comparisonNote}
      />

      <DeepDiveSection {...roofSurpriseIntro} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={roofSurpriseComparison.eyebrow}
          heading={roofSurpriseComparison.heading}
          leftLabel={roofSurpriseComparison.leftLabel}
          rightLabel={roofSurpriseComparison.rightLabel}
          rows={roofSurpriseComparison.rows}
          footnote={roofSurpriseComparison.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={whoReceivesMoney.eyebrow}
        heading={whoReceivesMoney.heading}
        steps={whoReceivesMoney.items}
        variant="cards"
        note={whoReceivesMoney.note}
      />

      <DeepDiveSection {...personalUseAndFamily} tone="dark" />

      <ServiceProcess
        eyebrow={managementOversight.eyebrow}
        heading={managementOversight.heading}
        intro={managementOversight.intro}
        steps={managementOversight.items}
        variant="cards"
        note={managementOversight.note}
      />

      <ServiceProcess
        eyebrow={leasesAndDeposits.eyebrow}
        heading={leasesAndDeposits.heading}
        steps={leasesAndDeposits.items}
        columns={3}
        note={leasesAndDeposits.note}
      />

      <DeepDiveSection {...fairHousing} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...cashReserveMatters} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={additionalConsiderations.eyebrow}
        heading={additionalConsiderations.heading}
        steps={additionalConsiderations.items}
        variant="cards"
        note={additionalConsiderations.note}
      />

      <DeepDiveSection {...sellingTheDuplex} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Different Kind Of Retirement Asset"
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
