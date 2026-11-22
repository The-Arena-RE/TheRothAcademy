import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { StressTest48Doors } from "@/components/learn-modules/StressTest48Doors";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  syndicationBasics,
  sophiaStory,
  sevenMillionProject,
  whereMoneyComesFrom,
  ownershipAtrium,
  rentRealityIntro,
  distributionWaterfall,
  stressTest,
  sponsorVsInvestor,
  waterfallAndCapitalCalls,
  exitScenarios,
  offeringDocuments,
  liquidityAndEligibility,
  distributionsAndTaxes,
  personalBenefitBoundaries,
  valuationAndRisk,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/apartment-syndication-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Apartment Syndication Investing With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own an interest in an apartment syndication? Explore a fully reconciled real estate partnership example, fees, and risks.",
  alternates: { canonical: "/learn/self-directed-401k/apartment-syndication-investing" },
};

export default function ApartmentSyndicationPage() {
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

      <DeepDiveSection {...syndicationBasics} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={sophiaStory.eyebrow} heading={sophiaStory.heading} stories={sophiaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={sevenMillionProject.eyebrow}
          heading={sevenMillionProject.heading}
          intro={sevenMillionProject.intro}
          figures={sevenMillionProject.figures}
          disclaimer={sevenMillionProject.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={whereMoneyComesFrom.eyebrow}
          heading={whereMoneyComesFrom.heading}
          intro={whereMoneyComesFrom.intro}
          figures={whereMoneyComesFrom.figures}
          disclaimer={whereMoneyComesFrom.disclaimer}
        />
      </div>

      <OwnershipAtrium
        eyebrow={ownershipAtrium.eyebrow}
        heading={ownershipAtrium.heading}
        intro={ownershipAtrium.intro}
        layers={ownershipAtrium.layers}
        dossier={ownershipAtrium.dossier}
        conclusion={ownershipAtrium.conclusion}
      />

      <DeepDiveSection {...rentRealityIntro} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={distributionWaterfall.eyebrow}
          heading={distributionWaterfall.heading}
          intro={distributionWaterfall.intro}
          figures={distributionWaterfall.figures}
          disclaimer={distributionWaterfall.disclaimer}
        />
      </div>

      <StressTest48Doors
        eyebrow={stressTest.eyebrow}
        heading={stressTest.heading}
        intro={stressTest.intro}
        scenarios={stressTest.scenarios}
        comparisonNote={stressTest.comparisonNote}
        conclusion={stressTest.conclusion}
      />

      <DeepDiveComparisonTable
        eyebrow={sponsorVsInvestor.eyebrow}
        heading={sponsorVsInvestor.heading}
        leftLabel={sponsorVsInvestor.leftLabel}
        rightLabel={sponsorVsInvestor.rightLabel}
        rows={sponsorVsInvestor.rows}
        footnote={sponsorVsInvestor.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...waterfallAndCapitalCalls} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={exitScenarios.eyebrow}
          heading={exitScenarios.heading}
          leftLabel={exitScenarios.leftLabel}
          rightLabel={exitScenarios.rightLabel}
          rows={exitScenarios.rows}
          footnote={exitScenarios.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={offeringDocuments.eyebrow}
        heading={offeringDocuments.heading}
        intro={offeringDocuments.intro}
        steps={offeringDocuments.items}
        variant="cards"
        note={offeringDocuments.note}
      />

      <DeepDiveSection {...liquidityAndEligibility} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...distributionsAndTaxes} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalBenefitBoundaries.eyebrow}
        heading={personalBenefitBoundaries.heading}
        intro={personalBenefitBoundaries.intro}
        steps={personalBenefitBoundaries.items}
        variant="cards"
        note={personalBenefitBoundaries.note}
      />

      <DeepDiveSection {...valuationAndRisk} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="A Different Scale Of Real Estate"
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
