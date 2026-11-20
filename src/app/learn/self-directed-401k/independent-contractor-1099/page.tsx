import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ContractYearChart } from "@/components/learn-modules/ContractYearChart";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  retirementBenefit,
  alexStory,
  alexFigures,
  contractYearIntro,
  contractYearMonths,
  contractYearTakeaway,
  twoRoles,
  investmentEnvironments,
  ownershipExample,
  ownershipOutcomes,
  misconception,
  whoQualifies,
  boundaries,
  biggerPicture,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/independent-contractor-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For Independent Contractors | Roth Academy",
  description:
    "1099 income doesn't come with an employer retirement plan. See how a qualifying independent contractor may be able to establish a Self-Directed 401(k).",
  alternates: { canonical: "/learn/self-directed-401k/independent-contractor-1099" },
};

export default function IndependentContractorPage() {
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

      <ServiceProcess
        eyebrow={retirementBenefit.eyebrow}
        heading={retirementBenefit.heading}
        intro={retirementBenefit.intro}
        steps={retirementBenefit.items}
        variant="cards"
        note={retirementBenefit.note}
      />

      <DeepDiveStoryList eyebrow={alexStory.eyebrow} heading={alexStory.heading} stories={alexStory.stories} />
      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={alexFigures.eyebrow}
          heading={alexFigures.heading}
          figures={alexFigures.figures}
          disclaimer={alexFigures.disclaimer}
        />
      </div>

      <ContractYearChart
        eyebrow={contractYearIntro.eyebrow}
        heading={contractYearIntro.heading}
        intro={contractYearIntro.intro}
        months={contractYearMonths}
        takeaway={contractYearTakeaway}
      />

      <DeepDiveSection {...twoRoles} tone="dark" />

      <ServiceProcess
        eyebrow={investmentEnvironments.eyebrow}
        heading={investmentEnvironments.heading}
        intro={investmentEnvironments.intro}
        steps={investmentEnvironments.items}
        variant="cards"
        note={investmentEnvironments.note}
      />

      <DeepDiveFigurePanel
        eyebrow={ownershipExample.eyebrow}
        heading={ownershipExample.heading}
        figures={ownershipExample.figures}
        disclaimer={ownershipExample.disclaimer}
      />

      <ServiceProcess
        eyebrow={ownershipOutcomes.eyebrow}
        heading={ownershipOutcomes.heading}
        steps={ownershipOutcomes.items}
        variant="cards"
      />

      <ServiceProcess
        eyebrow={misconception.eyebrow}
        heading={misconception.heading}
        intro={misconception.intro}
        steps={misconception.items}
        columns={3}
        note={misconception.note}
      />

      <ServiceProcess
        eyebrow={whoQualifies.eyebrow}
        heading={whoQualifies.heading}
        intro={whoQualifies.intro}
        steps={whoQualifies.items}
        columns={3}
        note={whoQualifies.note}
      />

      <ServiceProcess
        eyebrow={boundaries.eyebrow}
        heading={boundaries.heading}
        intro={boundaries.intro}
        steps={boundaries.items}
        variant="cards"
        note={boundaries.note}
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
