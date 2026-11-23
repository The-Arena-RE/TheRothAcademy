import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { ExposureReveal } from "@/components/learn-modules/ExposureReveal";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  investmentUniverse,
  alexanderStory,
  privateMarketOpportunity,
  threeQuestions,
  exposureReveal,
  whyMattersWealthy,
  threeOpportunities,
  eligibilityVsAppropriate,
  familyInvestmentCompany,
  sizeValuationCustodian,
  taxLeverageCosts,
  diversificationAndExit,
  beneficiaryAndRMD,
  existingLargeIRA,
  dueDiligenceFramework,
  fiveMistakes,
  whatCanCannotPromise,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-multimillionaire-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA for High-Net-Worth Investors | Roth Academy",
  description:
    "Explore Self-Directed IRA opportunities for high-net-worth investors, including private real estate, lending, business interests, tax rules, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-multimillionaire" },
};

export default function TheMultimillionairePage() {
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
        eyebrow={investmentUniverse.eyebrow}
        heading={investmentUniverse.heading}
        leftLabel={investmentUniverse.leftLabel}
        rightLabel={investmentUniverse.rightLabel}
        rows={investmentUniverse.rows}
        footnote={investmentUniverse.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={alexanderStory.eyebrow} heading={alexanderStory.heading} stories={alexanderStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={privateMarketOpportunity.eyebrow}
          heading={privateMarketOpportunity.heading}
          intro={privateMarketOpportunity.intro}
          figures={privateMarketOpportunity.figures}
          disclaimer={privateMarketOpportunity.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={threeQuestions.eyebrow}
        heading={threeQuestions.heading}
        steps={threeQuestions.steps}
        variant="list"
        columns={3}
        note={threeQuestions.note}
      />

      <ExposureReveal
        eyebrow={exposureReveal.eyebrow}
        heading={exposureReveal.heading}
        intro={exposureReveal.intro}
        assets={exposureReveal.assets}
        sharedRiskNote={exposureReveal.sharedRiskNote}
        downturn={exposureReveal.downturn}
        unaffectedTotal={exposureReveal.unaffectedTotal}
        startingTotal={exposureReveal.startingTotal}
        endingTotal={exposureReveal.endingTotal}
        totalDecline={exposureReveal.totalDecline}
        disclaimer={exposureReveal.disclaimer}
      />

      <DeepDiveSection {...whyMattersWealthy} tone="dark" />

      <ServiceProcess
        eyebrow={threeOpportunities.eyebrow}
        heading={threeOpportunities.heading}
        steps={threeOpportunities.steps}
        variant="cards"
        note={threeOpportunities.note}
      />

      <DeepDiveSection {...eligibilityVsAppropriate} tone="panel" />

      <DeepDiveSection {...familyInvestmentCompany} tone="dark" />

      <DeepDiveSection {...sizeValuationCustodian} tone="panel" />

      <DeepDiveSection {...taxLeverageCosts} tone="dark" />

      <DeepDiveSection {...diversificationAndExit} tone="panel" />

      <DeepDiveSection {...beneficiaryAndRMD} tone="dark" />

      <ServiceProcess
        eyebrow={existingLargeIRA.eyebrow}
        heading={existingLargeIRA.heading}
        steps={existingLargeIRA.steps}
        variant="list"
        columns={3}
        note={existingLargeIRA.note}
      />

      <ServiceProcess
        eyebrow={dueDiligenceFramework.eyebrow}
        heading={dueDiligenceFramework.heading}
        steps={dueDiligenceFramework.steps}
        variant="cards"
        note={dueDiligenceFramework.note}
      />

      <ServiceProcess
        eyebrow={fiveMistakes.eyebrow}
        heading={fiveMistakes.heading}
        steps={fiveMistakes.steps}
        variant="cards"
        note={fiveMistakes.note}
      />

      <DeepDiveComparisonTable
        eyebrow={whatCanCannotPromise.eyebrow}
        heading={whatCanCannotPromise.heading}
        leftLabel={whatCanCannotPromise.leftLabel}
        rightLabel={whatCanCannotPromise.rightLabel}
        rows={whatCanCannotPromise.rows}
        footnote={whatCanCannotPromise.footnote}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The High-Net-Worth Investor's IRA"
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
