import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { ParcelReveal } from "@/components/learn-modules/ParcelReveal";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  ownershipComparison,
  jordanStory,
  parcelReveal,
  retirementPlanBuys,
  acquisitionStatement,
  threeYearHold,
  saleScenarios,
  completeStory,
  whatMakesInteresting,
  doesPlanNeedLoan,
  personalVsRetirementLand,
  personalUseExamples,
  buyFromFamily,
  personalInvolvement,
  landFlippingTax,
  rothVsTraditional,
  tenYearLiquidity,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/vacant-lot-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Self-Directed 401(k) Buy Vacant Land? $12K Example | Roth Academy",
  description:
    "Could your Self-Directed 401(k) buy a $12,000 vacant lot? Explore a realistic land investment example, ownership rules, costs, risks, and possible outcomes.",
  alternates: { canonical: "/learn/self-directed-401k/12000-vacant-lot" },
};

export default function VacantLotPage() {
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
        eyebrow={ownershipComparison.eyebrow}
        heading={ownershipComparison.heading}
        leftLabel={ownershipComparison.leftLabel}
        rightLabel={ownershipComparison.rightLabel}
        rows={ownershipComparison.rows}
        footnote={ownershipComparison.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={jordanStory.eyebrow} heading={jordanStory.heading} stories={jordanStory.stories} />
      </div>

      <ParcelReveal
        eyebrow={parcelReveal.eyebrow}
        heading={parcelReveal.heading}
        intro={parcelReveal.intro}
        layers={parcelReveal.layers}
        dossier={parcelReveal.dossier}
        conclusion={parcelReveal.conclusion}
      />

      <DeepDiveSection {...retirementPlanBuys} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={acquisitionStatement.eyebrow}
          heading={acquisitionStatement.heading}
          intro={acquisitionStatement.intro}
          figures={acquisitionStatement.figures}
          disclaimer={acquisitionStatement.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={threeYearHold.eyebrow}
        heading={threeYearHold.heading}
        intro={threeYearHold.intro}
        steps={threeYearHold.items}
        variant="cards"
        note={threeYearHold.note}
      />

      <DeepDiveSection {...saleScenarios} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={completeStory.eyebrow}
          heading={completeStory.heading}
          leftLabel={completeStory.leftLabel}
          rightLabel={completeStory.rightLabel}
          rows={completeStory.rows}
          footnote={completeStory.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={whatMakesInteresting.eyebrow}
        heading={whatMakesInteresting.heading}
        intro={whatMakesInteresting.intro}
        steps={whatMakesInteresting.items}
        columns={4}
        note={whatMakesInteresting.note}
      />

      <DeepDiveSection {...doesPlanNeedLoan} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...personalVsRetirementLand} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalUseExamples.eyebrow}
        heading={personalUseExamples.heading}
        steps={personalUseExamples.items}
        variant="cards"
        note={personalUseExamples.note}
      />

      <ServiceProcess
        eyebrow={buyFromFamily.eyebrow}
        heading={buyFromFamily.heading}
        intro={buyFromFamily.intro}
        steps={buyFromFamily.items}
        variant="cards"
        note={buyFromFamily.note}
        linkLabel={buyFromFamily.linkLabel}
        linkHref={buyFromFamily.linkHref}
      />

      <DeepDiveSection {...personalInvolvement} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={landFlippingTax.eyebrow}
          heading={landFlippingTax.heading}
          leftLabel={landFlippingTax.leftLabel}
          rightLabel={landFlippingTax.rightLabel}
          rows={landFlippingTax.rows}
          footnote={landFlippingTax.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...rothVsTraditional} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={tenYearLiquidity.eyebrow}
        heading={tenYearLiquidity.heading}
        intro={tenYearLiquidity.intro}
        steps={tenYearLiquidity.items}
        columns={3}
        note={tenYearLiquidity.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Different Way To Think About Retirement"
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
