import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  businessVsBuildingOwnership,
  thomasStory,
  ironwoodProfile,
  buildingVsTenantAssets,
  acquisitionCost,
  commercialLeaseAndTripleNet,
  leaseTermsAndRentPerSqFt,
  warehouseSwitch,
  singleTenantConcentration,
  tenantQualityAndLeaseRisk,
  buildingAndEnvironmentalDueDiligence,
  zoningAccessAndClearHeight,
  leaseTypesComparison,
  rentFlexibilityAndTenantFailure,
  vacancyAndSecurityDeposit,
  roofRiskAndReserves,
  fiveYearStableTimeline,
  longTermOwnershipOutcomes,
  rentFlowToIRA,
  prohibitedRelatedPartyLease,
  servicesFinancingAndTax,
  valuationAndReporting,
  researchSheet,
  fiveMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-commercial-warehouse-investor-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Commercial Warehouse Investing With a Self-Directed IRA | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may own a commercial warehouse, collect rent, and handle triple-net leases, tenant defaults, vacancies, repairs, and taxes.",
  alternates: { canonical: "/learn/self-directed-ira/the-commercial-warehouse-investor" },
};

export default function TheCommercialWarehouseInvestorPage() {
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

      <DeepDiveSection {...businessVsBuildingOwnership} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={thomasStory.eyebrow} heading={thomasStory.heading} stories={thomasStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={ironwoodProfile.eyebrow}
          heading={ironwoodProfile.heading}
          intro={ironwoodProfile.intro}
          figures={ironwoodProfile.figures}
          disclaimer={ironwoodProfile.disclaimer}
        />
      </div>

      <DeepDiveSection {...buildingVsTenantAssets} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={acquisitionCost.eyebrow}
        heading={acquisitionCost.heading}
        intro={acquisitionCost.intro}
        figures={acquisitionCost.figures}
        disclaimer={acquisitionCost.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...commercialLeaseAndTripleNet} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={leaseTermsAndRentPerSqFt.eyebrow}
          heading={leaseTermsAndRentPerSqFt.heading}
          intro={leaseTermsAndRentPerSqFt.intro}
          figures={leaseTermsAndRentPerSqFt.figures}
          disclaimer={leaseTermsAndRentPerSqFt.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={warehouseSwitch.eyebrow}
        heading={warehouseSwitch.heading}
        intro={warehouseSwitch.intro}
        scenarios={warehouseSwitch.scenarios}
        tableColumns={warehouseSwitch.tableColumns}
        comparisonNote={warehouseSwitch.comparisonNote}
        conclusion={warehouseSwitch.conclusion}
      />

      <DeepDiveComparisonTable
        eyebrow={singleTenantConcentration.eyebrow}
        heading={singleTenantConcentration.heading}
        leftLabel={singleTenantConcentration.leftLabel}
        rightLabel={singleTenantConcentration.rightLabel}
        rows={singleTenantConcentration.rows}
        footnote={singleTenantConcentration.footnote}
      />

      <DeepDiveSection {...tenantQualityAndLeaseRisk} tone="panel" />

      <DeepDiveSection {...buildingAndEnvironmentalDueDiligence} tone="dark" />

      <ServiceProcess
        eyebrow={zoningAccessAndClearHeight.eyebrow}
        heading={zoningAccessAndClearHeight.heading}
        steps={zoningAccessAndClearHeight.steps}
        variant="cards"
        note={zoningAccessAndClearHeight.note}
      />

      <ServiceProcess
        eyebrow={leaseTypesComparison.eyebrow}
        heading={leaseTypesComparison.heading}
        steps={leaseTypesComparison.steps}
        variant="cards"
        note={leaseTypesComparison.note}
      />

      <DeepDiveSection {...rentFlexibilityAndTenantFailure} tone="panel" />

      <DeepDiveSection {...vacancyAndSecurityDeposit} tone="dark" />

      <DeepDiveSection {...roofRiskAndReserves} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={fiveYearStableTimeline.eyebrow}
        heading={fiveYearStableTimeline.heading}
        intro={fiveYearStableTimeline.intro}
        figures={fiveYearStableTimeline.figures}
        disclaimer={fiveYearStableTimeline.disclaimer}
      />

      <HarvestScenarios
        eyebrow={longTermOwnershipOutcomes.eyebrow}
        heading={longTermOwnershipOutcomes.heading}
        intro={longTermOwnershipOutcomes.intro}
        scenarios={longTermOwnershipOutcomes.scenarios}
        tableColumns={longTermOwnershipOutcomes.tableColumns}
        comparisonNote={longTermOwnershipOutcomes.comparisonNote}
        conclusion={longTermOwnershipOutcomes.conclusion}
      />

      <DeepDiveSection {...rentFlowToIRA} tone="dark" />

      <DeepDiveSection {...prohibitedRelatedPartyLease} tone="panel" />

      <DeepDiveSection {...servicesFinancingAndTax} tone="dark" />

      <DeepDiveSection {...valuationAndReporting} tone="panel" />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
      />

      <ServiceProcess
        eyebrow={fiveMisconceptions.eyebrow}
        heading={fiveMisconceptions.heading}
        steps={fiveMisconceptions.steps}
        variant="cards"
        note={fiveMisconceptions.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Commercial Warehouse Investor's Self-Directed IRA"
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
