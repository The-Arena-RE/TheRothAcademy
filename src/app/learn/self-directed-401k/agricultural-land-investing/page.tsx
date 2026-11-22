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
  morganStory,
  farmIntro,
  acreReveal,
  landPurchase,
  farmerAndLandowner,
  landBeneathLandscape,
  yearOneResult,
  harvestToRentJourney,
  dryYear,
  twoContracts,
  cropShareSetup,
  harvestWeatherTheater,
  farmingBusinessBoundary,
  taxAndFinancing,
  equipmentProgramsAndStewardship,
  agAppraisalIllusion,
  threeYearHold,
  farmlandHorizon,
  ongoingResponsibilitiesAndValue,
  prohibitedTransactionsBoundaries,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/farmland-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Agricultural Land Investing With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own farmland leased to an independent farmer? Explore a fully reconciled 84-acre example, cash rent vs. crop share, and the risks.",
  alternates: { canonical: "/learn/self-directed-401k/agricultural-land-investing" },
};

export default function AgriculturalLandPage() {
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

      <DeepDiveStoryList eyebrow={morganStory.eyebrow} heading={morganStory.heading} stories={morganStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveSection {...farmIntro} tone="dark" />
      </div>

      <OwnershipAtrium
        eyebrow={acreReveal.eyebrow}
        heading={acreReveal.heading}
        intro={acreReveal.intro}
        layers={acreReveal.layers}
        dossier={acreReveal.dossier}
        conclusion={acreReveal.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={landPurchase.eyebrow}
        heading={landPurchase.heading}
        intro={landPurchase.intro}
        figures={landPurchase.figures}
        disclaimer={landPurchase.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={farmerAndLandowner.eyebrow}
          heading={farmerAndLandowner.heading}
          leftLabel={farmerAndLandowner.leftLabel}
          rightLabel={farmerAndLandowner.rightLabel}
          rows={farmerAndLandowner.rows}
          footnote={farmerAndLandowner.footnote}
        />
      </div>

      <OwnershipAtrium
        eyebrow={landBeneathLandscape.eyebrow}
        heading={landBeneathLandscape.heading}
        intro={landBeneathLandscape.intro}
        layers={landBeneathLandscape.layers}
        dossier={landBeneathLandscape.dossier}
        conclusion={landBeneathLandscape.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={yearOneResult.eyebrow}
        heading={yearOneResult.heading}
        intro={yearOneResult.intro}
        figures={yearOneResult.figures}
        disclaimer={yearOneResult.disclaimer}
      />

      <ServiceProcess
        eyebrow={harvestToRentJourney.eyebrow}
        heading={harvestToRentJourney.heading}
        intro={harvestToRentJourney.intro}
        steps={harvestToRentJourney.steps}
        columns={3}
        note={harvestToRentJourney.note}
      />

      <DeepDiveFigurePanel
        eyebrow={dryYear.eyebrow}
        heading={dryYear.heading}
        intro={dryYear.intro}
        figures={dryYear.figures}
        disclaimer={dryYear.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={twoContracts.eyebrow}
          heading={twoContracts.heading}
          leftLabel={twoContracts.leftLabel}
          rightLabel={twoContracts.rightLabel}
          rows={twoContracts.rows}
          footnote={twoContracts.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cropShareSetup.eyebrow}
          heading={cropShareSetup.heading}
          intro={cropShareSetup.intro}
          figures={cropShareSetup.figures}
          disclaimer={cropShareSetup.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={harvestWeatherTheater.eyebrow}
        heading={harvestWeatherTheater.heading}
        intro={harvestWeatherTheater.intro}
        scenarios={harvestWeatherTheater.scenarios}
        tableColumns={harvestWeatherTheater.tableColumns}
        comparisonNote={harvestWeatherTheater.comparisonNote}
        conclusion={harvestWeatherTheater.conclusion}
      />

      <ServiceProcess
        eyebrow={farmingBusinessBoundary.eyebrow}
        heading={farmingBusinessBoundary.heading}
        steps={farmingBusinessBoundary.steps}
        variant="cards"
        note={farmingBusinessBoundary.note}
      />

      <DeepDiveSection {...taxAndFinancing} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...equipmentProgramsAndStewardship} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={agAppraisalIllusion.eyebrow}
        heading={agAppraisalIllusion.heading}
        intro={agAppraisalIllusion.intro}
        steps={agAppraisalIllusion.steps}
        columns={3}
        note={agAppraisalIllusion.note}
      />

      <DeepDiveFigurePanel
        eyebrow={threeYearHold.eyebrow}
        heading={threeYearHold.heading}
        intro={threeYearHold.intro}
        figures={threeYearHold.figures}
        disclaimer={threeYearHold.disclaimer}
      />

      <HarvestScenarios
        eyebrow={farmlandHorizon.eyebrow}
        heading={farmlandHorizon.heading}
        intro={farmlandHorizon.intro}
        scenarios={farmlandHorizon.scenarios}
        tableColumns={farmlandHorizon.tableColumns}
        comparisonNote={farmlandHorizon.comparisonNote}
        conclusion={farmlandHorizon.conclusion}
      />

      <DeepDiveSection {...ongoingResponsibilitiesAndValue} tone="dark" />

      <ServiceProcess
        eyebrow={prohibitedTransactionsBoundaries.eyebrow}
        heading={prohibitedTransactionsBoundaries.heading}
        steps={prohibitedTransactionsBoundaries.steps}
        variant="cards"
        note={prohibitedTransactionsBoundaries.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Own The Ground Beneath The Harvest"
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
