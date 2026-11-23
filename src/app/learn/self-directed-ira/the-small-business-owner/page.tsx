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
  operatorVsInvestor,
  concentrationRisk,
  sofiaStory,
  secondEnterprise,
  whatOwningGetsYou,
  threePossibleFutures,
  ownBusinessDifferent,
  salaryProblem,
  entityTypes,
  taxAdvantageNotUnlimited,
  investmentYouCantSell,
  lookBeyondThePitch,
  warningSigns,
  whatIRAOwns,
  oldAccountOptions,
  entrepreneurChecklist,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-small-business-owner-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA for Small Business Owners | Roth Academy",
  description:
    "Can your IRA invest in a private company? Learn opportunities for business owners, ownership examples, self-dealing rules, dilution, and investment risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-small-business-owner" },
};

export default function TheSmallBusinessOwnerPage() {
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
        eyebrow={operatorVsInvestor.eyebrow}
        heading={operatorVsInvestor.heading}
        leftLabel={operatorVsInvestor.leftLabel}
        rightLabel={operatorVsInvestor.rightLabel}
        rows={operatorVsInvestor.rows}
        footnote={operatorVsInvestor.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...concentrationRisk} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={sofiaStory.eyebrow} heading={sofiaStory.heading} stories={sofiaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={secondEnterprise.eyebrow}
          heading={secondEnterprise.heading}
          intro={secondEnterprise.intro}
          figures={secondEnterprise.figures}
          disclaimer={secondEnterprise.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={whatOwningGetsYou.eyebrow}
        heading={whatOwningGetsYou.heading}
        steps={whatOwningGetsYou.steps}
        variant="list"
        columns={3}
        note={whatOwningGetsYou.note}
      />

      <HarvestScenarios
        eyebrow={threePossibleFutures.eyebrow}
        heading={threePossibleFutures.heading}
        intro={threePossibleFutures.intro}
        scenarios={threePossibleFutures.scenarios}
        tableColumns={threePossibleFutures.tableColumns}
        comparisonNote={threePossibleFutures.comparisonNote}
        conclusion={threePossibleFutures.conclusion}
      />

      <DeepDiveSection {...ownBusinessDifferent} tone="dark" />

      <DeepDiveSection {...salaryProblem} tone="panel" />

      <ServiceProcess
        eyebrow={entityTypes.eyebrow}
        heading={entityTypes.heading}
        steps={entityTypes.steps}
        variant="cards"
        note={entityTypes.note}
      />

      <DeepDiveSection {...taxAdvantageNotUnlimited} tone="dark" />

      <DeepDiveSection {...investmentYouCantSell} tone="panel" />

      <ServiceProcess
        eyebrow={lookBeyondThePitch.eyebrow}
        heading={lookBeyondThePitch.heading}
        intro={lookBeyondThePitch.intro}
        steps={lookBeyondThePitch.steps}
        variant="list"
        columns={3}
        note={lookBeyondThePitch.note}
      />

      <ServiceProcess
        eyebrow={warningSigns.eyebrow}
        heading={warningSigns.heading}
        steps={warningSigns.steps}
        variant="cards"
        note={warningSigns.note}
      />

      <DeepDiveComparisonTable
        eyebrow={whatIRAOwns.eyebrow}
        heading={whatIRAOwns.heading}
        leftLabel={whatIRAOwns.leftLabel}
        rightLabel={whatIRAOwns.rightLabel}
        rows={whatIRAOwns.rows}
        footnote={whatIRAOwns.footnote}
      />

      <ServiceProcess
        eyebrow={oldAccountOptions.eyebrow}
        heading={oldAccountOptions.heading}
        steps={oldAccountOptions.steps}
        variant="list"
        columns={3}
        note={oldAccountOptions.note}
      />

      <ServiceProcess
        eyebrow={entrepreneurChecklist.eyebrow}
        heading={entrepreneurChecklist.heading}
        steps={entrepreneurChecklist.steps}
        variant="cards"
        note={entrepreneurChecklist.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Small Business Owner's IRA"
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
