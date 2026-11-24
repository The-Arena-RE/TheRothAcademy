import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DecisionStudio } from "@/components/learn-modules/DecisionStudio";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  revelation,
  danielStory,
  goldenFieldFarmProfile,
  purchaseCost,
  cashRentAgreement,
  fourSeasonsOfOwnership,
  badHarvestStress,
  leaseIsNotGuarantee,
  leaseTypesComparison,
  whoPaysForWhat,
  soilWaterAndAccess,
  conservationAndPropertyTax,
  tenantRiskAndWrittenLease,
  prohibitedFamilyAndSelfFarming,
  farmlandVsRentalHouseComparison,
  fiveYearProjection,
  threeOwnershipOutcomes,
  appreciationAndTaxTreatment,
  usdaPaymentsAndRentFlow,
  researchSheet,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/owning-farmland-without-farming-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Self-Directed IRA Own Farmland? | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may own farmland leased to a farmer. Explore cash rent, land costs, agricultural rules, taxes, and investment risks.",
  alternates: { canonical: "/learn/self-directed-ira/owning-farmland-without-farming" },
};

export default function OwningFarmlandWithoutFarmingPage() {
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
        eyebrow={revelation.eyebrow}
        heading={revelation.heading}
        leftLabel={revelation.leftLabel}
        rightLabel={revelation.rightLabel}
        rows={revelation.rows}
        footnote={revelation.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={danielStory.eyebrow} heading={danielStory.heading} stories={danielStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={goldenFieldFarmProfile.eyebrow}
          heading={goldenFieldFarmProfile.heading}
          intro={goldenFieldFarmProfile.intro}
          figures={goldenFieldFarmProfile.figures}
          disclaimer={goldenFieldFarmProfile.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={purchaseCost.eyebrow}
          heading={purchaseCost.heading}
          intro={purchaseCost.intro}
          figures={purchaseCost.figures}
          disclaimer={purchaseCost.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cashRentAgreement.eyebrow}
          heading={cashRentAgreement.heading}
          intro={cashRentAgreement.intro}
          figures={cashRentAgreement.figures}
          disclaimer={cashRentAgreement.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={fourSeasonsOfOwnership.eyebrow}
        heading={fourSeasonsOfOwnership.heading}
        intro={fourSeasonsOfOwnership.intro}
        decisions={fourSeasonsOfOwnership.decisions}
        note={fourSeasonsOfOwnership.note}
      />

      <DeepDiveFigurePanel
        eyebrow={badHarvestStress.eyebrow}
        heading={badHarvestStress.heading}
        intro={badHarvestStress.intro}
        figures={badHarvestStress.figures}
        disclaimer={badHarvestStress.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...leaseIsNotGuarantee} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={leaseTypesComparison.eyebrow}
        heading={leaseTypesComparison.heading}
        steps={leaseTypesComparison.steps}
        variant="cards"
        note={leaseTypesComparison.note}
      />

      <DeepDiveComparisonTable
        eyebrow={whoPaysForWhat.eyebrow}
        heading={whoPaysForWhat.heading}
        leftLabel={whoPaysForWhat.leftLabel}
        rightLabel={whoPaysForWhat.rightLabel}
        rows={whoPaysForWhat.rows}
        footnote={whoPaysForWhat.footnote}
      />

      <DeepDiveSection {...soilWaterAndAccess} tone="panel" />

      <DeepDiveSection {...conservationAndPropertyTax} tone="dark" />

      <DeepDiveSection {...tenantRiskAndWrittenLease} tone="panel" />

      <DeepDiveSection {...prohibitedFamilyAndSelfFarming} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={farmlandVsRentalHouseComparison.eyebrow}
          heading={farmlandVsRentalHouseComparison.heading}
          leftLabel={farmlandVsRentalHouseComparison.leftLabel}
          rightLabel={farmlandVsRentalHouseComparison.rightLabel}
          rows={farmlandVsRentalHouseComparison.rows}
          footnote={farmlandVsRentalHouseComparison.footnote}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fiveYearProjection.eyebrow}
          heading={fiveYearProjection.heading}
          intro={fiveYearProjection.intro}
          figures={fiveYearProjection.figures}
          disclaimer={fiveYearProjection.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={threeOwnershipOutcomes.eyebrow}
        heading={threeOwnershipOutcomes.heading}
        intro={threeOwnershipOutcomes.intro}
        scenarios={threeOwnershipOutcomes.scenarios}
        tableColumns={threeOwnershipOutcomes.tableColumns}
        comparisonNote={threeOwnershipOutcomes.comparisonNote}
        conclusion={threeOwnershipOutcomes.conclusion}
      />

      <DeepDiveSection {...appreciationAndTaxTreatment} tone="panel" />

      <DeepDiveSection {...usdaPaymentsAndRentFlow} tone="dark" />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Farmland Investor's Self-Directed IRA"
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
