import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WorkPathsSection } from "@/components/work/WorkPathsSection";
import { WorkProcessSteps } from "@/components/work/WorkProcessSteps";
import { WorkFinalConversion } from "@/components/work/WorkFinalConversion";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { StoryTwoWays } from "@/components/about/StoryTwoWays";
import { StoryIntro } from "@/components/about/StoryIntro";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { InviteSpecialistCta, PartnerCta } from "@/components/work/InlineModalCta";
import {
  workHero,
  workPaths,
  establishPlan,
  workSteps,
  workStepsNote,
  productChoice,
  experienceBehindCompany,
  foundationMatters,
  foundationPrinciples,
  afterSetup,
  educateAudience,
  classroomExperience,
  buildWithUs,
  whyPartner,
  whoShouldPartner,
  everyRelationshipStandard,
  workFaqItems,
  workFinalConversion,
} from "@/data/work-with-us-content";

export const metadata: Metadata = {
  title: "How Roth Academy Works | Self-Directed IRA & 401(k) Setup",
  description:
    "Discover how Roth Academy helps establish self-directed IRAs and 401(k)s, offers educational presentations, and explores professional partnerships.",
  alternates: { canonical: "/work-with-us" },
};

export default function WorkWithUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={workHero.eyebrow}
        title={workHero.title}
        goldLine={workHero.goldLine}
        description={workHero.description}
        whoItsFor={workHero.whoItsFor}
        primaryCta={workHero.primaryCta}
      />

      <WorkPathsSection eyebrow={workPaths.eyebrow} heading={workPaths.heading} items={workPaths.items} />

      <div id="establish" className="scroll-mt-24">
        <DeepDiveSection {...establishPlan} tone="panel" />
      </div>

      <WorkProcessSteps
        eyebrow="The Simple Customer Experience"
        heading={["A Clear Path.", "Not A Legal Process Chart."]}
        steps={workSteps}
        note={workStepsNote}
      />

      <StoryTwoWays
        eyebrow={productChoice.eyebrow}
        heading={productChoice.heading}
        intro={productChoice.intro}
        cards={productChoice.cards}
        supportingLabel={productChoice.supportingLabel}
        supportingHref={productChoice.supportingHref}
      />

      <StoryIntro
        byline={experienceBehindCompany.byline}
        portraitCaption={experienceBehindCompany.portraitCaption}
        portraitSrc="/story/tim-berry.webp"
        portraitAlt="Tim Berry"
        sectionId="experience"
        watermark=""
        kicker={experienceBehindCompany.kicker}
        heading={experienceBehindCompany.heading}
        lead={experienceBehindCompany.lead}
        pullQuote={experienceBehindCompany.pullQuote}
        paragraphs={experienceBehindCompany.paragraphs}
        sourceLink={experienceBehindCompany.sourceLink}
      />

      <DeepDiveSection {...foundationMatters} tone="dark" />

      <ServiceProcess
        eyebrow={foundationPrinciples.eyebrow}
        heading={foundationPrinciples.heading}
        steps={foundationPrinciples.items}
        variant="cards"
      />

      <ServiceProcess
        eyebrow={afterSetup.eyebrow}
        heading={afterSetup.heading}
        intro={afterSetup.intro}
        steps={afterSetup.items}
        columns={3}
      />

      <div id="educate" className="scroll-mt-24">
        <DeepDiveSection {...educateAudience} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={classroomExperience.eyebrow}
        heading={classroomExperience.heading}
        intro={classroomExperience.intro}
        steps={classroomExperience.audiences}
        variant="cards"
      />
      <div className="border-b border-r-line bg-r-stripe-2 pb-16 md:pb-20">
        <div className="container-brand">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">What A Session Might Include</p>
          <ul className="mt-5 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
            {classroomExperience.sessionIncludes.map((item) => (
              <li key={item} className="text-sm text-r-muted font-body normal-case">
                — {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-r-muted/60 font-body normal-case">
            {classroomExperience.note}
          </p>
          <InviteSpecialistCta label={classroomExperience.ctaLabel} topic={classroomExperience.contactTopic} />
        </div>
      </div>

      <div id="partner" className="scroll-mt-24">
        <DeepDiveSection {...buildWithUs} tone="dark" />
      </div>

      <ServiceProcess eyebrow={whyPartner.eyebrow} heading={whyPartner.heading} intro={whyPartner.intro} steps={whyPartner.principles} note={whyPartner.note} />

      <ServiceProcess eyebrow={whoShouldPartner.eyebrow} heading={whoShouldPartner.heading} steps={whoShouldPartner.items} variant="cards" />
      <div className="border-b border-r-line bg-r-stripe-2 pb-16 md:pb-20">
        <div className="container-brand">
          <p className="max-w-3xl text-xs leading-relaxed text-r-muted/60 font-body normal-case">{whoShouldPartner.note}</p>
          <PartnerCta label={whoShouldPartner.ctaLabel} topic={whoShouldPartner.contactTopic} />
        </div>
      </div>

      <ServiceProcess
        eyebrow={everyRelationshipStandard.eyebrow}
        heading={everyRelationshipStandard.heading}
        steps={everyRelationshipStandard.items}
        columns={3}
        note={everyRelationshipStandard.note}
      />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={workFaqItems} />

      <WorkFinalConversion
        eyebrow={workFinalConversion.eyebrow}
        heading={workFinalConversion.heading}
        description={workFinalConversion.description}
        signature={workFinalConversion.signature}
      />
    </>
  );
}
