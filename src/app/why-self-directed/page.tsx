import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { StoryTwoWays } from "@/components/about/StoryTwoWays";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { planDestinations } from "@/data/site-config";
import {
  whyHero,
  firstEnemy,
  secondEnemy,
  thirdEnemy,
  compensationCategories,
  fourthEnemy,
  theRevelation,
  theDream,
  honestDifference,
  feesQuestion,
  notForEveryone,
  sevenQuestions,
  rothAcademyDifference,
  twoWaysToTakeControl,
  whyFaqItems,
  whyReferences,
  whyFinalConversion,
} from "@/data/why-self-directed-content";

export const metadata: Metadata = {
  title: "Why Choose a Self-Directed IRA or 401(k)? | Roth Academy",
  description:
    "Tired of limited investment choices, fees, and financial red tape? Discover why investors explore self-directed IRAs and 401(k)s, including the benefits and risks.",
  alternates: { canonical: "/why-self-directed" },
};

export default function WhySelfDirectedPage() {
  return (
    <>
      <ServiceHero
        eyebrow={whyHero.eyebrow}
        title={whyHero.title}
        goldLine={whyHero.goldLine}
        description={whyHero.description}
        whoItsFor={whyHero.whoItsFor}
        primaryCta={whyHero.primaryCta}
      />

      <DeepDiveSection {...firstEnemy} tone="dark" />

      <DeepDiveSection {...secondEnemy} tone="panel" />

      <DeepDiveSection {...thirdEnemy} tone="dark" />

      <ServiceProcess
        eyebrow={compensationCategories.eyebrow}
        heading={compensationCategories.heading}
        intro={compensationCategories.intro}
        steps={compensationCategories.items}
        variant="list"
        columns={3}
        note={compensationCategories.note}
      />

      <DeepDiveSection {...fourthEnemy} tone="panel" />

      <div id="the-revelation">
        <DeepDiveSection {...theRevelation} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={theDream.eyebrow}
        heading={theDream.heading}
        intro={theDream.intro}
        steps={theDream.items}
        variant="cards"
        note={theDream.note}
        linkLabel={theDream.linkLabel}
        linkHref={theDream.linkHref}
      />

      <DeepDiveSection {...honestDifference} tone="panel" />

      <DeepDiveSection {...feesQuestion} tone="dark" />

      <DeepDiveSection {...notForEveryone} tone="panel" />

      <ServiceProcess
        eyebrow={sevenQuestions.eyebrow}
        heading={sevenQuestions.heading}
        intro={sevenQuestions.intro}
        steps={sevenQuestions.items}
        variant="list"
        columns={3}
        note={sevenQuestions.note}
      />

      <DeepDiveSection {...rothAcademyDifference} tone="panel" />

      <StoryTwoWays
        eyebrow={twoWaysToTakeControl.eyebrow}
        heading={twoWaysToTakeControl.heading}
        intro={twoWaysToTakeControl.intro}
        cards={twoWaysToTakeControl.cards}
        supportingLabel={twoWaysToTakeControl.supportingLabel}
        supportingHref={twoWaysToTakeControl.supportingHref}
      />

      <div className="border-t border-r-line">
        <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={whyFaqItems} />
      </div>

      <DeepDiveReferenceLibrary references={whyReferences} />

      <ClosingStatement
        eyebrow={whyFinalConversion.eyebrow}
        heading={
          <>
            {whyFinalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{whyFinalConversion.heading[1]}</span>
          </>
        }
        description={whyFinalConversion.description}
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Start My Self-Directed IRA"
        secondaryHref={planDestinations.openIra}
        secondaryStyle="button"
        signature={whyFinalConversion.signature}
      />
    </>
  );
}
