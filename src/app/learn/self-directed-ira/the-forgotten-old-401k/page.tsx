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
  bigIdeaRevelations,
  laurenStory,
  accountNotFrozen,
  lostAndFoundDatabase,
  fourFuturesOverview,
  futureOneKeepIt,
  futureTwoNewPlan,
  futureThreeSDIRA,
  futureFourCashOut,
  fourFutureComparison,
  directRolloverReveal,
  rolloverDoesntMultiply,
  withholdingTrap,
  sixtyDayClock,
  partialRollover,
  cashOutTaxReveal,
  earlyDistributionExceptionAndAge55,
  pretaxVsRothQuestion,
  afterTaxAndEmployerStock,
  loanAndRMD,
  protectionsAndFees,
  beneficiaryQuestion,
  possibilityGallery,
  moneyDidntBecomePersonal,
  opportunityAllocation,
  landInvestment,
  privateLendingInvestment,
  conventionalFundsInvestment,
  favorableIllustration,
  gainBreakdown,
  unfavorableIllustration,
  twoFuturesComparison,
  prohibitedTransactionWarning,
  fraudAndCustodianWarning,
  discoveryChecklist,
  rolloverEducationalPath,
  curriculumConnection,
  sevenMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-forgotten-old-401k-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Forgotten Old 401(k)? Find It and Explore IRA Rollover Options | Roth Academy",
  description:
    "Have an old 401(k) from a former employer? Learn how to find it, compare rollover options, avoid withdrawal tax mistakes, and explore Self-Directed IRA investments.",
  alternates: { canonical: "/learn/self-directed-ira/the-forgotten-old-401k" },
};

export default function TheForgottenOld401kPage() {
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

      <DeepDiveSection {...bigIdeaRevelations} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={laurenStory.eyebrow} heading={laurenStory.heading} stories={laurenStory.stories} />
      </div>

      <DeepDiveSection {...accountNotFrozen} tone="panel" />

      <DeepDiveSection {...lostAndFoundDatabase} tone="dark" />

      <ServiceProcess
        eyebrow={fourFuturesOverview.eyebrow}
        heading={fourFuturesOverview.heading}
        steps={fourFuturesOverview.steps}
        variant="list"
        columns={4}
        note={fourFuturesOverview.note}
      />

      <DeepDiveSection {...futureOneKeepIt} tone="dark" />

      <DeepDiveSection {...futureTwoNewPlan} tone="panel" />

      <DeepDiveSection {...futureThreeSDIRA} tone="dark" />

      <DeepDiveSection {...futureFourCashOut} tone="panel" />

      <ServiceProcess
        eyebrow={fourFutureComparison.eyebrow}
        heading={fourFutureComparison.heading}
        steps={fourFutureComparison.steps}
        variant="list"
        columns={4}
        note={fourFutureComparison.note}
      />

      <DeepDiveFigurePanel
        eyebrow={directRolloverReveal.eyebrow}
        heading={directRolloverReveal.heading}
        intro={directRolloverReveal.intro}
        figures={directRolloverReveal.figures}
        disclaimer={directRolloverReveal.disclaimer}
      />

      <DeepDiveSection {...rolloverDoesntMultiply} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={withholdingTrap.eyebrow}
        heading={withholdingTrap.heading}
        intro={withholdingTrap.intro}
        figures={withholdingTrap.figures}
        disclaimer={withholdingTrap.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...sixtyDayClock} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={partialRollover.eyebrow}
          heading={partialRollover.heading}
          intro={partialRollover.intro}
          figures={partialRollover.figures}
          disclaimer={partialRollover.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cashOutTaxReveal.eyebrow}
          heading={cashOutTaxReveal.heading}
          intro={cashOutTaxReveal.intro}
          figures={cashOutTaxReveal.figures}
          disclaimer={cashOutTaxReveal.disclaimer}
        />
      </div>

      <DeepDiveSection {...earlyDistributionExceptionAndAge55} tone="panel" />

      <DeepDiveSection {...pretaxVsRothQuestion} tone="dark" />

      <DeepDiveSection {...afterTaxAndEmployerStock} tone="panel" />

      <DeepDiveSection {...loanAndRMD} tone="dark" />

      <DeepDiveSection {...protectionsAndFees} tone="panel" />

      <DeepDiveSection {...beneficiaryQuestion} tone="dark" />

      <ServiceProcess
        eyebrow={possibilityGallery.eyebrow}
        heading={possibilityGallery.heading}
        steps={possibilityGallery.steps}
        variant="list"
        columns={3}
        note={possibilityGallery.note}
      />

      <DeepDiveSection {...moneyDidntBecomePersonal} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={opportunityAllocation.eyebrow}
          heading={opportunityAllocation.heading}
          intro={opportunityAllocation.intro}
          figures={opportunityAllocation.figures}
          disclaimer={opportunityAllocation.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={landInvestment.eyebrow}
          heading={landInvestment.heading}
          intro={landInvestment.intro}
          figures={landInvestment.figures}
          disclaimer={landInvestment.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={privateLendingInvestment.eyebrow}
          heading={privateLendingInvestment.heading}
          intro={privateLendingInvestment.intro}
          figures={privateLendingInvestment.figures}
          disclaimer={privateLendingInvestment.disclaimer}
        />
      </div>

      <DeepDiveSection {...conventionalFundsInvestment} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={favorableIllustration.eyebrow}
        heading={favorableIllustration.heading}
        intro={favorableIllustration.intro}
        figures={favorableIllustration.figures}
        disclaimer={favorableIllustration.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={gainBreakdown.eyebrow}
          heading={gainBreakdown.heading}
          intro={gainBreakdown.intro}
          figures={gainBreakdown.figures}
          disclaimer={gainBreakdown.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={unfavorableIllustration.eyebrow}
          heading={unfavorableIllustration.heading}
          intro={unfavorableIllustration.intro}
          figures={unfavorableIllustration.figures}
          disclaimer={unfavorableIllustration.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={twoFuturesComparison.eyebrow}
        heading={twoFuturesComparison.heading}
        intro={twoFuturesComparison.intro}
        scenarios={twoFuturesComparison.scenarios}
        tableColumns={twoFuturesComparison.tableColumns}
        comparisonNote={twoFuturesComparison.comparisonNote}
        conclusion={twoFuturesComparison.conclusion}
      />

      <DeepDiveSection {...prohibitedTransactionWarning} tone="dark" />

      <DeepDiveSection {...fraudAndCustodianWarning} tone="panel" />

      <ServiceProcess
        eyebrow={discoveryChecklist.eyebrow}
        heading={discoveryChecklist.heading}
        steps={discoveryChecklist.steps}
        variant="list"
        columns={3}
        note={discoveryChecklist.note}
      />

      <ServiceProcess
        eyebrow={rolloverEducationalPath.eyebrow}
        heading={rolloverEducationalPath.heading}
        steps={rolloverEducationalPath.steps}
        variant="list"
        columns={4}
        note={rolloverEducationalPath.note}
      />

      <DeepDiveSection {...curriculumConnection} tone="dark" />

      <ServiceProcess
        eyebrow={sevenMisconceptions.eyebrow}
        heading={sevenMisconceptions.heading}
        steps={sevenMisconceptions.steps}
        variant="cards"
        note={sevenMisconceptions.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Forgotten Old 401(k)"
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
