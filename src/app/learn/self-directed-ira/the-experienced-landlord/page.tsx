import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DecisionStudio } from "@/components/learn-modules/DecisionStudio";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  twoPropertyDeeds,
  robertStory,
  cannotTransfer,
  newDuplexInvestment,
  twoPortfolios,
  decisionStudio,
  twoFinancialPathways,
  repairLiquidity,
  experienceNotExemption,
  leverageAndTax,
  flippingAndFunds,
  illiquidityQuestion,
  rmdAndRothDistinction,
  landlordChecklist,
  fiveMistakes,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-experienced-landlord-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA Real Estate for Landlords | Roth Academy",
  description:
    "Already own rentals? Learn how a Self-Directed IRA may invest in real estate, why you can't sell your own property to it, and the rules and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-experienced-landlord" },
};

export default function TheExperiencedLandlordPage() {
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
        eyebrow={twoPropertyDeeds.eyebrow}
        heading={twoPropertyDeeds.heading}
        leftLabel={twoPropertyDeeds.leftLabel}
        rightLabel={twoPropertyDeeds.rightLabel}
        rows={twoPropertyDeeds.rows}
        footnote={twoPropertyDeeds.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={robertStory.eyebrow} heading={robertStory.heading} stories={robertStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...cannotTransfer} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={newDuplexInvestment.eyebrow}
          heading={newDuplexInvestment.heading}
          intro={newDuplexInvestment.intro}
          figures={newDuplexInvestment.figures}
          disclaimer={newDuplexInvestment.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={twoPortfolios.eyebrow}
          heading={twoPortfolios.heading}
          intro={twoPortfolios.intro}
          figures={twoPortfolios.figures}
          disclaimer={twoPortfolios.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={decisionStudio.eyebrow}
        heading={decisionStudio.heading}
        intro={decisionStudio.intro}
        decisions={decisionStudio.decisions}
        note={decisionStudio.note}
      />

      <DeepDiveSection {...twoFinancialPathways} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={repairLiquidity.eyebrow}
          heading={repairLiquidity.heading}
          intro={repairLiquidity.intro}
          figures={repairLiquidity.figures}
          disclaimer={repairLiquidity.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={experienceNotExemption.eyebrow}
          heading={experienceNotExemption.heading}
          leftLabel={experienceNotExemption.leftLabel}
          rightLabel={experienceNotExemption.rightLabel}
          rows={experienceNotExemption.rows}
          footnote={experienceNotExemption.footnote}
        />
      </div>

      <DeepDiveSection {...leverageAndTax} tone="panel" />

      <ServiceProcess
        eyebrow={flippingAndFunds.eyebrow}
        heading={flippingAndFunds.heading}
        intro={flippingAndFunds.intro}
        steps={flippingAndFunds.steps}
        variant="cards"
        note={flippingAndFunds.note}
      />

      <DeepDiveSection {...illiquidityQuestion} tone="dark" />

      <DeepDiveSection {...rmdAndRothDistinction} tone="panel" />

      <ServiceProcess
        eyebrow={landlordChecklist.eyebrow}
        heading={landlordChecklist.heading}
        steps={landlordChecklist.steps}
        variant="list"
        columns={4}
        note={landlordChecklist.note}
      />

      <ServiceProcess
        eyebrow={fiveMistakes.eyebrow}
        heading={fiveMistakes.heading}
        steps={fiveMistakes.steps}
        variant="cards"
        note={fiveMistakes.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Experienced Landlord's IRA"
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
