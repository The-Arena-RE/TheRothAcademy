import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HeadStartTimeline } from "@/components/learn-modules/HeadStartTimeline";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  headStartComparison,
  averyStory,
  investmentMenuComparison,
  opportunityLens,
  feeReality,
  rothAdvantage,
  twoRothClocks,
  contributionLimits,
  readinessQuestions,
  fiveMistakes,
  lifeMilestones,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-young-investor-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed Roth IRA for Young Investors | Roth Academy",
  description:
    "Discover how young investors can start small with a self-directed Roth IRA, explore investment possibilities, and understand the tax rules and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-young-investor" },
};

export default function TheYoungInvestorPage() {
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

      <HeadStartTimeline
        eyebrow={headStartComparison.eyebrow}
        heading={headStartComparison.heading}
        intro={headStartComparison.intro}
        monthlyContribution={headStartComparison.monthlyContribution}
        contributionYears={headStartComparison.contributionYears}
        scenarios={headStartComparison.scenarios}
        rateOptions={headStartComparison.rateOptions}
        defaultRate={headStartComparison.defaultRate}
        disclaimer={headStartComparison.disclaimer}
        takeaway={headStartComparison.takeaway}
      />

      <DeepDiveStoryList eyebrow={averyStory.eyebrow} heading={averyStory.heading} stories={averyStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={investmentMenuComparison.eyebrow}
          heading={investmentMenuComparison.heading}
          leftLabel={investmentMenuComparison.leftLabel}
          rightLabel={investmentMenuComparison.rightLabel}
          rows={investmentMenuComparison.rows}
          footnote={investmentMenuComparison.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={opportunityLens.eyebrow}
          heading={opportunityLens.heading}
          intro={opportunityLens.intro}
          figures={opportunityLens.figures}
          disclaimer={opportunityLens.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={feeReality.eyebrow}
          heading={feeReality.heading}
          intro={feeReality.intro}
          figures={feeReality.figures}
          disclaimer={feeReality.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...rothAdvantage} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={twoRothClocks.eyebrow}
        heading={twoRothClocks.heading}
        steps={twoRothClocks.steps}
        variant="list"
        columns={3}
        note={twoRothClocks.note}
      />

      <DeepDiveFigurePanel
        eyebrow={contributionLimits.eyebrow}
        heading={contributionLimits.heading}
        intro={contributionLimits.intro}
        figures={contributionLimits.figures}
        disclaimer={contributionLimits.disclaimer}
      />

      <ServiceProcess
        eyebrow={readinessQuestions.eyebrow}
        heading={readinessQuestions.heading}
        steps={readinessQuestions.steps}
        variant="list"
        columns={4}
        note={readinessQuestions.note}
      />

      <ServiceProcess
        eyebrow={fiveMistakes.eyebrow}
        heading={fiveMistakes.heading}
        steps={fiveMistakes.steps}
        variant="cards"
        note={fiveMistakes.note}
      />

      <ServiceProcess
        eyebrow={lifeMilestones.eyebrow}
        heading={lifeMilestones.heading}
        steps={lifeMilestones.steps}
        variant="list"
        columns={3}
        note={lifeMilestones.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Head Start"
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
