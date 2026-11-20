import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { PrivateDealRoom } from "@/components/learn-modules/PrivateDealRoom";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  worldBeyondStocks,
  elenaStory,
  retirementCapitalQuestion,
  threeOpportunities,
  privateDealRoom,
  familiarDealIntro,
  familiarDealExamples,
  wealthEligibility,
  privateOfferingAccess,
  notAutomaticallySafer,
  liquidityProblem,
  valuationQuestion,
  taxConsequences,
  coInvestingExamples,
  reportingResponsibility,
  doesPlanRequirePrivate,
  questionsMatter,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/wealthy-entrepreneur-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) Private Market Investing | Roth Academy",
  description:
    "Explore private company equity, private lending, and real estate fund opportunities through a Self-Directed 401(k), including eligibility, risks, and legal restrictions.",
  alternates: { canonical: "/learn/self-directed-401k/wealthy-entrepreneur-private-markets" },
};

export default function WealthyEntrepreneurPage() {
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
        eyebrow={worldBeyondStocks.eyebrow}
        heading={worldBeyondStocks.heading}
        leftLabel={worldBeyondStocks.leftLabel}
        rightLabel={worldBeyondStocks.rightLabel}
        rows={worldBeyondStocks.rows}
        footnote={worldBeyondStocks.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={elenaStory.eyebrow} heading={elenaStory.heading} stories={elenaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={retirementCapitalQuestion.eyebrow}
          heading={retirementCapitalQuestion.heading}
          intro={retirementCapitalQuestion.intro}
          figures={retirementCapitalQuestion.figures}
          disclaimer={retirementCapitalQuestion.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={threeOpportunities.eyebrow}
        heading={threeOpportunities.heading}
        intro={threeOpportunities.intro}
        steps={threeOpportunities.items}
        variant="cards"
        note={threeOpportunities.note}
        linkLabel={threeOpportunities.linkLabel}
        linkHref={threeOpportunities.linkHref}
      />

      <PrivateDealRoom
        eyebrow={privateDealRoom.eyebrow}
        heading={privateDealRoom.heading}
        intro={privateDealRoom.intro}
        dossiers={privateDealRoom.dossiers}
        allocation={privateDealRoom.allocation}
        conclusion={privateDealRoom.conclusion}
      />

      <DeepDiveSection {...familiarDealIntro} tone="dark" />

      <ServiceProcess
        eyebrow={familiarDealExamples.eyebrow}
        heading={familiarDealExamples.heading}
        steps={familiarDealExamples.items}
        variant="cards"
        note={familiarDealExamples.note}
        linkLabel={familiarDealExamples.linkLabel}
        linkHref={familiarDealExamples.linkHref}
      />

      <ServiceProcess
        eyebrow={wealthEligibility.eyebrow}
        heading={wealthEligibility.heading}
        intro={wealthEligibility.intro}
        steps={wealthEligibility.items}
        columns={3}
        note={wealthEligibility.note}
      />

      <DeepDiveSection {...privateOfferingAccess} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={notAutomaticallySafer.eyebrow}
          heading={notAutomaticallySafer.heading}
          leftLabel={notAutomaticallySafer.leftLabel}
          rightLabel={notAutomaticallySafer.rightLabel}
          rows={notAutomaticallySafer.rows}
          footnote={notAutomaticallySafer.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={liquidityProblem.eyebrow}
        heading={liquidityProblem.heading}
        intro={liquidityProblem.intro}
        steps={liquidityProblem.items}
        columns={3}
        note={liquidityProblem.note}
      />

      <DeepDiveSection {...valuationQuestion} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...taxConsequences} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={coInvestingExamples.eyebrow}
        heading={coInvestingExamples.heading}
        intro={coInvestingExamples.intro}
        steps={coInvestingExamples.items}
        variant="cards"
        note={coInvestingExamples.note}
      />

      <ServiceProcess
        eyebrow={reportingResponsibility.eyebrow}
        heading={reportingResponsibility.heading}
        intro={reportingResponsibility.intro}
        steps={reportingResponsibility.items}
        variant="cards"
        note={reportingResponsibility.note}
      />

      <ServiceProcess
        eyebrow={doesPlanRequirePrivate.eyebrow}
        heading={doesPlanRequirePrivate.heading}
        steps={doesPlanRequirePrivate.items}
        variant="cards"
        note={doesPlanRequirePrivate.note}
      />

      <ServiceProcess
        eyebrow={questionsMatter.eyebrow}
        heading={questionsMatter.heading}
        intro={questionsMatter.intro}
        steps={questionsMatter.items}
        columns={3}
        note={questionsMatter.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Your Next Chapter"
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
