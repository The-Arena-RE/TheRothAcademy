import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { PropertyXRay } from "@/components/learn-modules/PropertyXRay";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  comparison,
  rileyStory,
  propertyXRayIntro,
  ownershipBoundary,
  invisibleLine,
  threeInvestments,
  dueDiligence,
  whoQualifies,
  businessIncome,
  commonMistake,
  biggerPicture,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/blue-collar-investor-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For Contractors | Roth Academy",
  description:
    "Own an electrical, plumbing, or contracting business? Explore Self-Directed 401(k) investment possibilities, eligibility, and crucial property rules.",
  alternates: { canonical: "/learn/self-directed-401k/blue-collar-investor" },
};

export default function BlueCollarInvestorPage() {
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
        eyebrow={comparison.eyebrow}
        heading={comparison.heading}
        leftLabel={comparison.leftLabel}
        rightLabel={comparison.rightLabel}
        rows={comparison.rows}
        footnote={comparison.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={rileyStory.eyebrow} heading={rileyStory.heading} stories={rileyStory.stories} />
      </div>

      <PropertyXRay
        eyebrow={propertyXRayIntro.eyebrow}
        heading={propertyXRayIntro.heading}
        intro={propertyXRayIntro.intro}
        purchasePrice={propertyXRayIntro.purchasePrice}
        zones={propertyXRayIntro.zones}
        takeaway={propertyXRayIntro.takeaway}
        disclaimer={propertyXRayIntro.disclaimer}
      />

      <DeepDiveSection {...ownershipBoundary} tone="dark" />

      <ServiceProcess
        eyebrow={invisibleLine.eyebrow}
        heading={invisibleLine.heading}
        intro={invisibleLine.intro}
        steps={invisibleLine.items}
        columns={4}
        note={invisibleLine.note}
      />

      <ServiceProcess
        eyebrow={threeInvestments.eyebrow}
        heading={threeInvestments.heading}
        intro={threeInvestments.intro}
        steps={threeInvestments.items}
        variant="cards"
        note={threeInvestments.note}
      />

      <ServiceProcess
        eyebrow={dueDiligence.eyebrow}
        heading={dueDiligence.heading}
        intro={dueDiligence.intro}
        steps={dueDiligence.items}
        columns={4}
        note={dueDiligence.note}
      />

      <ServiceProcess
        eyebrow={whoQualifies.eyebrow}
        heading={whoQualifies.heading}
        intro={whoQualifies.intro}
        steps={whoQualifies.items}
        columns={3}
        note={whoQualifies.note}
      />

      <DeepDiveSection {...businessIncome} tone="dark" />

      <ServiceProcess
        eyebrow={commonMistake.eyebrow}
        heading={commonMistake.heading}
        intro={commonMistake.intro}
        steps={commonMistake.items}
        variant="cards"
        note={commonMistake.note}
      />

      <DeepDiveSection {...biggerPicture} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Your Next Chapter"
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
