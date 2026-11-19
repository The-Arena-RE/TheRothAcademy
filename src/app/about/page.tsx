import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StoryHero } from "@/components/about/StoryHero";
import { StoryChapters } from "@/components/about/StoryChapters";
import { StoryIntro } from "@/components/about/StoryIntro";
import { StoryStatementBand } from "@/components/about/StoryStatementBand";
import { StoryTeamSection } from "@/components/about/StoryTeamSection";
import { StoryScenarios } from "@/components/about/StoryScenarios";
import { StoryTwoWays } from "@/components/about/StoryTwoWays";
import { StoryClosingSection } from "@/components/about/StoryClosingSection";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  storyHero,
  storyChapters,
  storyIntro,
  storyStatement,
  birthOfAcademy,
  standardPrinciples,
  storyTeam,
  whyExperienceMatters,
  educationAccessible,
  workingWithUs,
  twoWaysToBegin,
  longTermVision,
  storyClosing,
  aboutFaqItems,
} from "@/data/about-content";
import { finalConversionContent } from "@/data/home-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Roth Academy | Our Story, Team & Retirement Expertise",
  description:
    "Meet Roth Academy, discover the Berry family story, and learn how specialized retirement-plan experience, education, and professional standards guide our work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <StoryHero
        eyebrow={storyHero.eyebrow}
        title={storyHero.title}
        goldLine={storyHero.goldLine}
        lead={storyHero.lead}
        scrollCtaLabel={storyHero.scrollCtaLabel}
        scrollCtaHref={storyHero.scrollCtaHref}
        imageSrc="/about/hero-tim-kevin.webp"
        metadata={storyHero.metadata}
      />

      <div id="the-story">
        <StoryChapters chapters={storyChapters} />
      </div>

      <StoryIntro
        byline={storyIntro.byline}
        portraitCaption={storyIntro.portraitCaption}
        kicker={storyIntro.kicker}
        heading={storyIntro.heading}
        lead={storyIntro.lead}
        pullQuote={storyIntro.pullQuote}
        paragraphs={storyIntro.paragraphs}
      />

      <StoryStatementBand
        kicker={storyStatement.kicker}
        heading={storyStatement.heading}
        paragraph={storyStatement.paragraph}
      />

      <DeepDiveSection {...birthOfAcademy} tone="dark" />

      <ServiceProcess
        eyebrow={standardPrinciples.eyebrow}
        heading={standardPrinciples.heading}
        intro={standardPrinciples.intro}
        steps={standardPrinciples.items}
        variant="cards"
        note={standardPrinciples.note}
      />

      <StoryTeamSection
        kicker={storyTeam.kicker}
        heading={storyTeam.heading}
        paragraphs={storyTeam.paragraphs}
        roles={storyTeam.roles}
        sourceLink={storyTeam.sourceLink}
      />

      <StoryScenarios
        eyebrow={whyExperienceMatters.eyebrow}
        heading={whyExperienceMatters.heading}
        intro={whyExperienceMatters.intro}
        items={whyExperienceMatters.items}
        note={whyExperienceMatters.note}
      />

      <div className="bg-r-bg">
        <DeepDiveSection {...educationAccessible} tone="dark" />
        <div className="container-brand pb-16 md:pb-20">
          <Link
            href={educationAccessible.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {educationAccessible.ctaLabel}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>

      <ServiceProcess
        eyebrow={workingWithUs.eyebrow}
        heading={workingWithUs.heading}
        intro={workingWithUs.intro}
        steps={workingWithUs.items}
        variant="cards"
        linkLabel={workingWithUs.linkLabel}
        linkHref={workingWithUs.linkHref}
      />

      <StoryTwoWays
        eyebrow={twoWaysToBegin.eyebrow}
        heading={twoWaysToBegin.heading}
        intro={twoWaysToBegin.intro}
        cards={twoWaysToBegin.cards}
        supportingLabel={twoWaysToBegin.supportingLabel}
        supportingHref={twoWaysToBegin.supportingHref}
      />

      <DeepDiveSection {...longTermVision} tone="panel" />

      <StoryClosingSection
        kicker={storyClosing.kicker}
        heading={storyClosing.heading}
        paragraphs={storyClosing.paragraphs}
        signatureName={storyClosing.signatureName}
        signatureRole={storyClosing.signatureRole}
      />

      <section className="bg-r-bg py-20">
        <div className="container-brand max-w-3xl">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Good Questions.
            <br />
            <span className="text-r-gold">Clear Answers.</span>
          </h2>
          <FaqAccordion items={aboutFaqItems} />
        </div>
      </section>

      <ClosingStatement
        eyebrow="The Next Chapter Is Yours"
        heading={
          <>
            Your Retirement Matters.
            <br />
            <span className="text-r-gold">So Does Who You Trust.</span>
          </>
        }
        description="If you are ready to explore a broader investment universe, you deserve a clear understanding of your choices and a responsible starting point."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Start My Self-Directed IRA"
        secondaryHref={planDestinations.openIra}
        secondaryStyle="button"
        signature={finalConversionContent.signature}
      />
    </>
  );
}
