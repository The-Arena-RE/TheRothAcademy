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
  revelationComparisonTable,
  mayaStory,
  juniperHouseProfile,
  actualPurchaseCost,
  houseWithTwoFinancialWorlds,
  rentNotPersonalIncome,
  managementAndPersonalUseBoundary,
  cannotSellOwnHouseToIRA,
  rothQualificationPath,
  threeEndings,
  whyFascinating,
  whyNotBuyPersonally,
  mortgageAndDebtFinancedTax,
  propertyObligationsAndTenantRisk,
  resaleAndPersonalUseLater,
  rmdAndValuation,
  fiveNeverAssumeRules,
  rothConversionMisunderstanding,
  researchSheet,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-roth-ira-rental-house-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Roth IRA Own a Rental Property? | Roth Academy",
  description:
    "Discover how a Self-Directed Roth IRA may buy a rental house, collect rent, handle expenses, and benefit from a sale. Learn the tax rules and risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-roth-ira-rental-house" },
};

export default function TheRothIraRentalHousePage() {
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
        eyebrow={revelationComparisonTable.eyebrow}
        heading={revelationComparisonTable.heading}
        leftLabel={revelationComparisonTable.leftLabel}
        rightLabel={revelationComparisonTable.rightLabel}
        rows={revelationComparisonTable.rows}
        footnote={revelationComparisonTable.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={mayaStory.eyebrow} heading={mayaStory.heading} stories={mayaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={juniperHouseProfile.eyebrow}
          heading={juniperHouseProfile.heading}
          intro={juniperHouseProfile.intro}
          figures={juniperHouseProfile.figures}
          disclaimer={juniperHouseProfile.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={actualPurchaseCost.eyebrow}
          heading={actualPurchaseCost.heading}
          intro={actualPurchaseCost.intro}
          figures={actualPurchaseCost.figures}
          disclaimer={actualPurchaseCost.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={houseWithTwoFinancialWorlds.eyebrow}
        heading={houseWithTwoFinancialWorlds.heading}
        intro={houseWithTwoFinancialWorlds.intro}
        decisions={houseWithTwoFinancialWorlds.decisions}
        note={houseWithTwoFinancialWorlds.note}
      />

      <DeepDiveSection {...rentNotPersonalIncome} tone="dark" />

      <DeepDiveSection {...managementAndPersonalUseBoundary} tone="panel" />

      <DeepDiveSection {...cannotSellOwnHouseToIRA} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rothQualificationPath.eyebrow}
          heading={rothQualificationPath.heading}
          intro={rothQualificationPath.intro}
          figures={rothQualificationPath.figures}
          disclaimer={rothQualificationPath.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={threeEndings.eyebrow}
        heading={threeEndings.heading}
        intro={threeEndings.intro}
        scenarios={threeEndings.scenarios}
        tableColumns={threeEndings.tableColumns}
        comparisonNote={threeEndings.comparisonNote}
        conclusion={threeEndings.conclusion}
      />

      <DeepDiveSection {...whyFascinating} tone="panel" />

      <DeepDiveComparisonTable
        eyebrow={whyNotBuyPersonally.eyebrow}
        heading={whyNotBuyPersonally.heading}
        leftLabel={whyNotBuyPersonally.leftLabel}
        rightLabel={whyNotBuyPersonally.rightLabel}
        rows={whyNotBuyPersonally.rows}
        footnote={whyNotBuyPersonally.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...mortgageAndDebtFinancedTax} tone="dark" />
      </div>

      <DeepDiveSection {...propertyObligationsAndTenantRisk} tone="panel" />

      <DeepDiveSection {...resaleAndPersonalUseLater} tone="dark" />

      <DeepDiveSection {...rmdAndValuation} tone="panel" />

      <ServiceProcess
        eyebrow={fiveNeverAssumeRules.eyebrow}
        heading={fiveNeverAssumeRules.heading}
        steps={fiveNeverAssumeRules.steps}
        variant="cards"
        note={fiveNeverAssumeRules.note}
      />

      <DeepDiveSection {...rothConversionMisunderstanding} tone="dark" />

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
        eyebrow="The Roth IRA Rental Investor's Self-Directed IRA"
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
