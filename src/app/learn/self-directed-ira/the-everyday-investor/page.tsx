import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { PathwaysSelector } from "@/components/learn-modules/PathwaysSelector";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  misconceptions,
  threeInvestmentDoors,
  twoPocketsInteraction,
  jordanStory,
  traditionalVsRoth,
  fiveThings,
  whatThisMeansForYou,
  evaluationFramework,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-everyday-investor-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA Without a Business: Beginner Guide | Roth Academy",
  description:
    "You don't need a business to explore a self-directed IRA. Discover simple examples of real estate, private loans, the rules, and the risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-everyday-investor" },
};

export default function TheEverydayInvestorPage() {
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

      <ServiceProcess
        eyebrow={misconceptions.eyebrow}
        heading={misconceptions.heading}
        intro={misconceptions.intro}
        steps={misconceptions.steps}
        variant="list"
        columns={3}
        note={misconceptions.note}
      />

      <HarvestScenarios
        eyebrow={threeInvestmentDoors.eyebrow}
        heading={threeInvestmentDoors.heading}
        intro={threeInvestmentDoors.intro}
        scenarios={threeInvestmentDoors.scenarios}
        tableColumns={threeInvestmentDoors.tableColumns}
        comparisonNote={threeInvestmentDoors.comparisonNote}
        conclusion={threeInvestmentDoors.conclusion}
      />

      <PathwaysSelector
        eyebrow={twoPocketsInteraction.eyebrow}
        heading={twoPocketsInteraction.heading}
        intro={twoPocketsInteraction.intro}
        pathways={twoPocketsInteraction.pathways}
        takeaway={twoPocketsInteraction.takeaway}
      />

      <DeepDiveStoryList eyebrow={jordanStory.eyebrow} heading={jordanStory.heading} stories={jordanStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={traditionalVsRoth.eyebrow}
          heading={traditionalVsRoth.heading}
          leftLabel={traditionalVsRoth.leftLabel}
          rightLabel={traditionalVsRoth.rightLabel}
          rows={traditionalVsRoth.rows}
          footnote={traditionalVsRoth.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={fiveThings.eyebrow}
        heading={fiveThings.heading}
        steps={fiveThings.steps}
        variant="cards"
        note={fiveThings.note}
      />

      <ServiceProcess
        eyebrow={whatThisMeansForYou.eyebrow}
        heading={whatThisMeansForYou.heading}
        steps={whatThisMeansForYou.steps}
        variant="list"
        columns={4}
        note={whatThisMeansForYou.note}
      />

      <ServiceProcess
        eyebrow={evaluationFramework.eyebrow}
        heading={evaluationFramework.heading}
        steps={evaluationFramework.steps}
        variant="list"
        columns={3}
        note={evaluationFramework.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Bigger World Of Investing"
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
