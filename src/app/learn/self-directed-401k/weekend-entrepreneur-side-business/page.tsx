import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { PathwaysSelector } from "@/components/learn-modules/PathwaysSelector";
import { ContributionMeter } from "@/components/learn-modules/ContributionMeter";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  revelation,
  jordanStory,
  jordanFigures,
  pathwaysIntro,
  pathways,
  pathwaysTakeaway,
  investmentGallery,
  contributionCheck,
  eligibility,
  protections,
  whatsNext,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/weekend-entrepreneur-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) for Side Businesses | Roth Academy",
  description:
    "Have a job and a side business? Discover when a Self-Directed 401(k) may be available, how contribution limits work, and what investments it might hold.",
  alternates: { canonical: "/learn/self-directed-401k/weekend-entrepreneur-side-business" },
};

export default function WeekendEntrepreneurPage() {
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
        eyebrow={revelation.eyebrow}
        heading={revelation.heading}
        intro={revelation.intro}
        steps={revelation.panels}
        variant="cards"
        note={revelation.note}
      />

      <DeepDiveStoryList eyebrow={jordanStory.eyebrow} heading={jordanStory.heading} stories={jordanStory.stories} />
      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={jordanFigures.eyebrow}
          heading={jordanFigures.heading}
          figures={jordanFigures.figures}
          disclaimer={jordanFigures.disclaimer}
        />
      </div>

      <PathwaysSelector
        eyebrow={pathwaysIntro.eyebrow}
        heading={pathwaysIntro.heading}
        intro={pathwaysIntro.intro}
        pathways={pathways}
        takeaway={pathwaysTakeaway}
      />

      <ServiceProcess
        eyebrow={investmentGallery.eyebrow}
        heading={investmentGallery.heading}
        intro={investmentGallery.intro}
        steps={investmentGallery.items}
        variant="cards"
        note={investmentGallery.note}
      />

      <ContributionMeter
        eyebrow={contributionCheck.eyebrow}
        heading={contributionCheck.heading}
        intro={contributionCheck.intro}
        limit={contributionCheck.limit}
        taxYear={contributionCheck.taxYear}
        presets={contributionCheck.presets}
        note={contributionCheck.note}
      />

      <ServiceProcess
        eyebrow={eligibility.eyebrow}
        heading={eligibility.heading}
        intro={eligibility.intro}
        steps={eligibility.items}
        columns={3}
        note={eligibility.note}
      />

      <ServiceProcess
        eyebrow={protections.eyebrow}
        heading={protections.heading}
        intro={protections.intro}
        steps={protections.items}
        variant="cards"
        note={protections.note}
      />

      <DeepDiveSection {...whatsNext} tone="panel" />

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
