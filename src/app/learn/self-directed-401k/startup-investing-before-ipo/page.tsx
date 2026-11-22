import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  whatIsAStartup,
  tomorrowLab,
  alexStory,
  fundingRound,
  safeDoor,
  startupRunway,
  sixMonthsLater,
  first225Customers,
  proofWall,
  nextFinancingRound,
  earlyPriceAndFuturePath,
  riskOfLoss,
  securitiesLawEligibility,
  personalBenefitBoundaries,
  taxAndValuation,
  documentsAndMoneyFlow,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/startup-investing-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Startup Investing Before IPO With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) invest in a startup before it goes public? Explore a fully reconciled SAFE, runway, and customer-economics example.",
  alternates: { canonical: "/learn/self-directed-401k/startup-investing-before-ipo" },
};

export default function StartupInvestingPage() {
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

      <DeepDiveSection {...whatIsAStartup} tone="dark" />

      <OwnershipAtrium
        eyebrow={tomorrowLab.eyebrow}
        heading={tomorrowLab.heading}
        intro={tomorrowLab.intro}
        layers={tomorrowLab.layers}
        dossier={tomorrowLab.dossier}
        conclusion={tomorrowLab.conclusion}
      />

      <DeepDiveStoryList eyebrow={alexStory.eyebrow} heading={alexStory.heading} stories={alexStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fundingRound.eyebrow}
          heading={fundingRound.heading}
          intro={fundingRound.intro}
          figures={fundingRound.figures}
          disclaimer={fundingRound.disclaimer}
        />
      </div>

      <OwnershipAtrium
        eyebrow={safeDoor.eyebrow}
        heading={safeDoor.heading}
        intro={safeDoor.intro}
        layers={safeDoor.layers}
        dossier={safeDoor.dossier}
        conclusion={safeDoor.conclusion}
      />

      <HarvestScenarios
        eyebrow={startupRunway.eyebrow}
        heading={startupRunway.heading}
        intro={startupRunway.intro}
        scenarios={startupRunway.scenarios}
        tableColumns={startupRunway.tableColumns}
        comparisonNote={startupRunway.comparisonNote}
        conclusion={startupRunway.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={sixMonthsLater.eyebrow}
        heading={sixMonthsLater.heading}
        intro={sixMonthsLater.intro}
        figures={sixMonthsLater.figures}
        disclaimer={sixMonthsLater.disclaimer}
      />

      <HarvestScenarios
        eyebrow={first225Customers.eyebrow}
        heading={first225Customers.heading}
        intro={first225Customers.intro}
        scenarios={first225Customers.scenarios}
        tableColumns={first225Customers.tableColumns}
        comparisonNote={first225Customers.comparisonNote}
        conclusion={first225Customers.conclusion}
      />

      <DeepDiveComparisonTable
        eyebrow={proofWall.eyebrow}
        heading={proofWall.heading}
        leftLabel={proofWall.leftLabel}
        rightLabel={proofWall.rightLabel}
        rows={proofWall.rows}
        footnote={proofWall.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={nextFinancingRound.eyebrow}
          heading={nextFinancingRound.heading}
          intro={nextFinancingRound.intro}
          figures={nextFinancingRound.figures}
          disclaimer={nextFinancingRound.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...earlyPriceAndFuturePath} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...riskOfLoss} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...securitiesLawEligibility} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalBenefitBoundaries.eyebrow}
        heading={personalBenefitBoundaries.heading}
        steps={personalBenefitBoundaries.steps}
        variant="cards"
        note={personalBenefitBoundaries.note}
      />

      <DeepDiveSection {...taxAndValuation} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...documentsAndMoneyFlow} tone="dark" />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Before The Company Has A Name"
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
