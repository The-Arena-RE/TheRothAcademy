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
  taylorStory,
  retirementFreedomBridge,
  whichChoiceIsBest,
  businessEligibility,
  businessRealityGate,
  twoTypesOfMoney,
  directRolloverRelay,
  the33600Detour,
  the60DayRuleAndContribution,
  rolloverPassport,
  rolloverComplicationsChecklist,
  possibilityWindow,
  investmentTransformationSetup,
  investmentOutcomes,
  mostImportantLimitation,
  personalMoneyBarrier,
  beforeYouMoveCompass,
  ongoingResponsibilities,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/old-401k-new-business-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Old 401(k) to Self-Directed 401(k) After Starting a Business | Roth Academy",
  description:
    "Starting a business with an old 401(k)? Explore Solo 401(k) eligibility, direct rollovers, pre-tax and Roth accounts, and new investment possibilities.",
  alternates: { canonical: "/learn/self-directed-401k/old-401k-new-business" },
};

export default function OldPlanNewBusinessPage() {
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
        <DeepDiveStoryList eyebrow={taylorStory.eyebrow} heading={taylorStory.heading} stories={taylorStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={retirementFreedomBridge.eyebrow}
        heading={retirementFreedomBridge.heading}
        intro={retirementFreedomBridge.intro}
        scenarios={retirementFreedomBridge.scenarios}
        tableColumns={retirementFreedomBridge.tableColumns}
        comparisonNote={retirementFreedomBridge.comparisonNote}
        conclusion={retirementFreedomBridge.conclusion}
      />

      <DeepDiveSection {...whichChoiceIsBest} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...businessEligibility} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={businessRealityGate.eyebrow}
        heading={businessRealityGate.heading}
        intro={businessRealityGate.intro}
        steps={businessRealityGate.steps}
        variant="list"
        columns={3}
        note={businessRealityGate.note}
      />

      <DeepDiveFigurePanel
        eyebrow={twoTypesOfMoney.eyebrow}
        heading={twoTypesOfMoney.heading}
        intro={twoTypesOfMoney.intro}
        figures={twoTypesOfMoney.figures}
        disclaimer={twoTypesOfMoney.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={directRolloverRelay.eyebrow}
          heading={directRolloverRelay.heading}
          intro={directRolloverRelay.intro}
          figures={directRolloverRelay.figures}
          disclaimer={directRolloverRelay.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={the33600Detour.eyebrow}
          heading={the33600Detour.heading}
          intro={the33600Detour.intro}
          figures={the33600Detour.figures}
          disclaimer={the33600Detour.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...the60DayRuleAndContribution} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={rolloverPassport.eyebrow}
        heading={rolloverPassport.heading}
        intro={rolloverPassport.intro}
        steps={rolloverPassport.steps}
        variant="list"
        columns={4}
        note={rolloverPassport.note}
      />

      <ServiceProcess
        eyebrow={rolloverComplicationsChecklist.eyebrow}
        heading={rolloverComplicationsChecklist.heading}
        intro={rolloverComplicationsChecklist.intro}
        steps={rolloverComplicationsChecklist.steps}
        variant="cards"
        note={rolloverComplicationsChecklist.note}
      />

      <ServiceProcess
        eyebrow={possibilityWindow.eyebrow}
        heading={possibilityWindow.heading}
        intro={possibilityWindow.intro}
        steps={possibilityWindow.steps}
        variant="cards"
        note={possibilityWindow.note}
      />

      <DeepDiveFigurePanel
        eyebrow={investmentTransformationSetup.eyebrow}
        heading={investmentTransformationSetup.heading}
        intro={investmentTransformationSetup.intro}
        figures={investmentTransformationSetup.figures}
        disclaimer={investmentTransformationSetup.disclaimer}
      />

      <HarvestScenarios
        eyebrow={investmentOutcomes.eyebrow}
        heading={investmentOutcomes.heading}
        intro={investmentOutcomes.intro}
        scenarios={investmentOutcomes.scenarios}
        tableColumns={investmentOutcomes.tableColumns}
        comparisonNote={investmentOutcomes.comparisonNote}
        conclusion={investmentOutcomes.conclusion}
      />

      <DeepDiveSection {...mostImportantLimitation} tone="dark" />

      <ServiceProcess
        eyebrow={personalMoneyBarrier.eyebrow}
        heading={personalMoneyBarrier.heading}
        intro={personalMoneyBarrier.intro}
        steps={personalMoneyBarrier.steps}
        variant="list"
        columns={3}
        note={personalMoneyBarrier.note}
      />

      <ServiceProcess
        eyebrow={beforeYouMoveCompass.eyebrow}
        heading={beforeYouMoveCompass.heading}
        intro={beforeYouMoveCompass.intro}
        steps={beforeYouMoveCompass.steps}
        variant="cards"
        note={beforeYouMoveCompass.note}
      />

      <DeepDiveSection {...ongoingResponsibilities} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="One Bridge, Many Destinations"
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
