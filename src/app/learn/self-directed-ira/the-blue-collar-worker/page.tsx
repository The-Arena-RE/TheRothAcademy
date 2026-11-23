import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  marcusStory,
  threeOpportunities,
  investmentBlueprint,
  baselineVsAdverse,
  skillsBetterQuestions,
  notForYourIra,
  retirementAccountTypes,
  lookBeyondTheStory,
  investmentChecklist,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-blue-collar-worker-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA for Skilled Tradespeople | Roth Academy",
  description:
    "Can electricians, mechanics, and other tradespeople invest their IRA in private loans, real estate, and precious metals? Explore the rules and the risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-blue-collar-worker" },
};

export default function TheBlueCollarWorkerPage() {
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

      <DeepDiveSection {...directAnswer} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={marcusStory.eyebrow} heading={marcusStory.heading} stories={marcusStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={threeOpportunities.eyebrow}
        heading={threeOpportunities.heading}
        intro={threeOpportunities.intro}
        scenarios={threeOpportunities.scenarios}
        tableColumns={threeOpportunities.tableColumns}
        comparisonNote={threeOpportunities.comparisonNote}
        conclusion={threeOpportunities.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={investmentBlueprint.eyebrow}
        heading={investmentBlueprint.heading}
        intro={investmentBlueprint.intro}
        figures={investmentBlueprint.figures}
        disclaimer={investmentBlueprint.disclaimer}
      />

      <HarvestScenarios
        eyebrow={baselineVsAdverse.eyebrow}
        heading={baselineVsAdverse.heading}
        intro={baselineVsAdverse.intro}
        scenarios={baselineVsAdverse.scenarios}
        tableColumns={baselineVsAdverse.tableColumns}
        comparisonNote={baselineVsAdverse.comparisonNote}
        conclusion={baselineVsAdverse.conclusion}
      />

      <ServiceProcess
        eyebrow={skillsBetterQuestions.eyebrow}
        heading={skillsBetterQuestions.heading}
        steps={skillsBetterQuestions.steps}
        variant="cards"
        note={skillsBetterQuestions.note}
      />

      <DeepDiveSection {...notForYourIra} tone="dark" />

      <ServiceProcess
        eyebrow={retirementAccountTypes.eyebrow}
        heading={retirementAccountTypes.heading}
        steps={retirementAccountTypes.steps}
        variant="list"
        columns={4}
        note={retirementAccountTypes.note}
      />

      <ServiceProcess
        eyebrow={lookBeyondTheStory.eyebrow}
        heading={lookBeyondTheStory.heading}
        intro={lookBeyondTheStory.intro}
        steps={lookBeyondTheStory.steps}
        variant="list"
        columns={3}
        note={lookBeyondTheStory.note}
      />

      <ServiceProcess
        eyebrow={investmentChecklist.eyebrow}
        heading={investmentChecklist.heading}
        steps={investmentChecklist.steps}
        variant="cards"
        note={investmentChecklist.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Skilled Tradesperson's IRA"
        heading={
          <>
            {finalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{finalConversion.heading[1]}</span>
          </>
        }
        description={finalConversion.description}
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
        secondaryLabel="Explore The Self-Directed IRA"
        secondaryHref="/services/self-directed-ira"
        signature={finalConversion.signature}
      />
    </>
  );
}
