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
  margaretStory,
  accountAllocation,
  propertyIntro,
  tenantRent,
  operatingExpenses,
  privateLoanIntro,
  loanInterest,
  publicInvestments,
  cashReserve,
  threeFinancialRealities,
  normalYear,
  accessIntro,
  margaretRMD,
  cashDistribution,
  whatRemainsAndRmdVsBudget,
  multipleIRAsAndRoth,
  difficultYearIntro,
  tenantsLeave,
  borrowerDefaults,
  publicFundsDecline,
  rmdStillExists,
  majorRepair,
  sellingFunds,
  biggestReveal,
  concentrationAndMaturity,
  valuationQuestions,
  inKindAndKeepingProperty,
  incomeVsPersonal,
  taxRisksAndProhibited,
  passOnIntro,
  inheritedIRAClock,
  illiquidInheritedAssets,
  taxesAtDeathAndMisconception,
  legacyDocuments,
  fiveQuestions,
  sevenMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-2-million-ira-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "What Can a $2 Million Self-Directed IRA Invest In? | Roth Academy",
  description:
    "Explore what a $2 million Self-Directed IRA might own, including commercial property and private loans. Understand income, RMDs, liquidity, and inheritance.",
  alternates: { canonical: "/learn/self-directed-ira/the-2-million-ira" },
};

export default function The2MillionIraPage() {
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
        <DeepDiveStoryList eyebrow={margaretStory.eyebrow} heading={margaretStory.heading} stories={margaretStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={accountAllocation.eyebrow}
          heading={accountAllocation.heading}
          intro={accountAllocation.intro}
          figures={accountAllocation.figures}
          disclaimer={accountAllocation.disclaimer}
        />
      </div>

      <DeepDiveSection {...propertyIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={tenantRent.eyebrow}
        heading={tenantRent.heading}
        intro={tenantRent.intro}
        figures={tenantRent.figures}
        disclaimer={tenantRent.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={operatingExpenses.eyebrow}
          heading={operatingExpenses.heading}
          intro={operatingExpenses.intro}
          figures={operatingExpenses.figures}
          disclaimer={operatingExpenses.disclaimer}
        />
      </div>

      <DeepDiveSection {...privateLoanIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={loanInterest.eyebrow}
        heading={loanInterest.heading}
        intro={loanInterest.intro}
        figures={loanInterest.figures}
        disclaimer={loanInterest.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...publicInvestments} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cashReserve.eyebrow}
          heading={cashReserve.heading}
          intro={cashReserve.intro}
          figures={cashReserve.figures}
          disclaimer={cashReserve.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={threeFinancialRealities.eyebrow}
        heading={threeFinancialRealities.heading}
        steps={threeFinancialRealities.steps}
        variant="list"
        columns={3}
        note={threeFinancialRealities.note}
      />

      <DeepDiveFigurePanel
        eyebrow={normalYear.eyebrow}
        heading={normalYear.heading}
        intro={normalYear.intro}
        figures={normalYear.figures}
        disclaimer={normalYear.disclaimer}
      />

      <DeepDiveSection {...accessIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={margaretRMD.eyebrow}
        heading={margaretRMD.heading}
        intro={margaretRMD.intro}
        figures={margaretRMD.figures}
        disclaimer={margaretRMD.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cashDistribution.eyebrow}
          heading={cashDistribution.heading}
          intro={cashDistribution.intro}
          figures={cashDistribution.figures}
          disclaimer={cashDistribution.disclaimer}
        />
      </div>

      <DeepDiveSection {...whatRemainsAndRmdVsBudget} tone="panel" />

      <DeepDiveSection {...multipleIRAsAndRoth} tone="dark" />

      <DeepDiveSection {...difficultYearIntro} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={tenantsLeave.eyebrow}
        heading={tenantsLeave.heading}
        intro={tenantsLeave.intro}
        figures={tenantsLeave.figures}
        disclaimer={tenantsLeave.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={borrowerDefaults.eyebrow}
          heading={borrowerDefaults.heading}
          intro={borrowerDefaults.intro}
          figures={borrowerDefaults.figures}
          disclaimer={borrowerDefaults.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={publicFundsDecline.eyebrow}
          heading={publicFundsDecline.heading}
          intro={publicFundsDecline.intro}
          figures={publicFundsDecline.figures}
          disclaimer={publicFundsDecline.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rmdStillExists.eyebrow}
          heading={rmdStillExists.heading}
          intro={rmdStillExists.intro}
          figures={rmdStillExists.figures}
          disclaimer={rmdStillExists.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={majorRepair.eyebrow}
          heading={majorRepair.heading}
          intro={majorRepair.intro}
          figures={majorRepair.figures}
          disclaimer={majorRepair.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={sellingFunds.eyebrow}
          heading={sellingFunds.heading}
          intro={sellingFunds.intro}
          figures={sellingFunds.figures}
          disclaimer={sellingFunds.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={biggestReveal.eyebrow}
        heading={biggestReveal.heading}
        intro={biggestReveal.intro}
        scenarios={biggestReveal.scenarios}
        tableColumns={biggestReveal.tableColumns}
        comparisonNote={biggestReveal.comparisonNote}
        conclusion={biggestReveal.conclusion}
      />

      <DeepDiveSection {...concentrationAndMaturity} tone="dark" />

      <DeepDiveSection {...valuationQuestions} tone="panel" />

      <DeepDiveSection {...inKindAndKeepingProperty} tone="dark" />

      <DeepDiveSection {...incomeVsPersonal} tone="panel" />

      <DeepDiveSection {...taxRisksAndProhibited} tone="dark" />

      <DeepDiveSection {...passOnIntro} tone="panel" />

      <DeepDiveSection {...inheritedIRAClock} tone="dark" />

      <DeepDiveSection {...illiquidInheritedAssets} tone="panel" />

      <DeepDiveSection {...taxesAtDeathAndMisconception} tone="dark" />

      <ServiceProcess
        eyebrow={legacyDocuments.eyebrow}
        heading={legacyDocuments.heading}
        steps={legacyDocuments.steps}
        variant="list"
        columns={4}
        note={legacyDocuments.note}
      />

      <ServiceProcess
        eyebrow={fiveQuestions.eyebrow}
        heading={fiveQuestions.heading}
        steps={fiveQuestions.steps}
        variant="list"
        columns={3}
        note={fiveQuestions.note}
      />

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
        eyebrow="The $2 Million IRA"
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
