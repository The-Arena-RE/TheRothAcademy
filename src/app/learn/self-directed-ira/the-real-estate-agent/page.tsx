import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  marketIntelligenceLayer,
  elenaStory,
  listingDossier,
  financialReality,
  favorableVsUnfavorable,
  commissionRestriction,
  clientDutyVsInvestment,
  marketKnowledgeLimits,
  renovationTrap,
  activeDealingTax,
  biggerThanOneHouse,
  marketNotAlwaysRight,
  oldRetirementAccounts,
  fiveQuestions,
  fiveRules,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-real-estate-agent-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA for Real Estate Agents | Roth Academy",
  description:
    "Can real estate agents invest in property through a Self-Directed IRA? Explore a real estate example, commission restrictions, taxes, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-real-estate-agent" },
};

export default function TheRealEstateAgentPage() {
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
        eyebrow={marketIntelligenceLayer.eyebrow}
        heading={marketIntelligenceLayer.heading}
        intro={marketIntelligenceLayer.intro}
        steps={marketIntelligenceLayer.steps}
        variant="list"
        columns={4}
        note={marketIntelligenceLayer.note}
      />

      <DeepDiveStoryList eyebrow={elenaStory.eyebrow} heading={elenaStory.heading} stories={elenaStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={listingDossier.eyebrow}
          heading={listingDossier.heading}
          intro={listingDossier.intro}
          figures={listingDossier.figures}
          disclaimer={listingDossier.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={financialReality.eyebrow}
          heading={financialReality.heading}
          intro={financialReality.intro}
          figures={financialReality.figures}
          disclaimer={financialReality.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={favorableVsUnfavorable.eyebrow}
        heading={favorableVsUnfavorable.heading}
        intro={favorableVsUnfavorable.intro}
        scenarios={favorableVsUnfavorable.scenarios}
        tableColumns={favorableVsUnfavorable.tableColumns}
        comparisonNote={favorableVsUnfavorable.comparisonNote}
        conclusion={favorableVsUnfavorable.conclusion}
      />

      <DeepDiveSection {...commissionRestriction} tone="dark" />

      <ServiceProcess
        eyebrow={clientDutyVsInvestment.eyebrow}
        heading={clientDutyVsInvestment.heading}
        steps={clientDutyVsInvestment.steps}
        variant="cards"
        note={clientDutyVsInvestment.note}
      />

      <DeepDiveComparisonTable
        eyebrow={marketKnowledgeLimits.eyebrow}
        heading={marketKnowledgeLimits.heading}
        leftLabel={marketKnowledgeLimits.leftLabel}
        rightLabel={marketKnowledgeLimits.rightLabel}
        rows={marketKnowledgeLimits.rows}
        footnote={marketKnowledgeLimits.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...renovationTrap} tone="dark" />
      </div>

      <DeepDiveSection {...activeDealingTax} tone="panel" />

      <ServiceProcess
        eyebrow={biggerThanOneHouse.eyebrow}
        heading={biggerThanOneHouse.heading}
        steps={biggerThanOneHouse.steps}
        variant="cards"
        note={biggerThanOneHouse.note}
      />

      <ServiceProcess
        eyebrow={marketNotAlwaysRight.eyebrow}
        heading={marketNotAlwaysRight.heading}
        steps={marketNotAlwaysRight.steps}
        variant="list"
        columns={3}
        note={marketNotAlwaysRight.note}
      />

      <ServiceProcess
        eyebrow={oldRetirementAccounts.eyebrow}
        heading={oldRetirementAccounts.heading}
        steps={oldRetirementAccounts.steps}
        variant="list"
        columns={3}
        note={oldRetirementAccounts.note}
      />

      <ServiceProcess
        eyebrow={fiveQuestions.eyebrow}
        heading={fiveQuestions.heading}
        steps={fiveQuestions.steps}
        variant="list"
        columns={3}
        note={fiveQuestions.note}
      />

      <ServiceProcess
        eyebrow={fiveRules.eyebrow}
        heading={fiveRules.heading}
        steps={fiveRules.steps}
        variant="cards"
        note={fiveRules.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Real Estate Professional's IRA"
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
