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
  businessVsInvestor,
  ameliaStory,
  bluecrestProfile,
  preMoneyValuation,
  newCapitalVsSecondaryPurchase,
  ownershipSlice,
  tenPercentDoesNotMeanControl,
  ubitTaxSurprise,
  entityTypesAndK1,
  dilutionProtection,
  businessRisksAndCustomerConcentration,
  investorIsNotOperator,
  relatedPartyTrap,
  additionalCapitalAndCompanyCash,
  ownershipClassesAndPriorities,
  illiquidityAndNoSellButton,
  threeExitOutcomes,
  futureSaleNotGuaranteed,
  minorityControlAndSale,
  managementCompensationAndDebt,
  securitiesAndAccreditedInvestor,
  investmentDocuments,
  dueDiligenceAndFraudWarning,
  establishedVsStartup,
  researchSheet,
  fiveMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/buying-a-piece-of-a-private-business-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Can a Self-Directed IRA Own Part of a Private Business? | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may own part of a private business. Learn ownership, valuations, dilution, distributions, UBIT, and investment risks.",
  alternates: { canonical: "/learn/self-directed-ira/buying-a-piece-of-a-private-business" },
};

export default function BuyingAPieceOfAPrivateBusinessPage() {
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

      <DeepDiveSection {...businessVsInvestor} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={ameliaStory.eyebrow} heading={ameliaStory.heading} stories={ameliaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={bluecrestProfile.eyebrow}
          heading={bluecrestProfile.heading}
          intro={bluecrestProfile.intro}
          figures={bluecrestProfile.figures}
          disclaimer={bluecrestProfile.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={preMoneyValuation.eyebrow}
          heading={preMoneyValuation.heading}
          intro={preMoneyValuation.intro}
          figures={preMoneyValuation.figures}
          disclaimer={preMoneyValuation.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={newCapitalVsSecondaryPurchase.eyebrow}
          heading={newCapitalVsSecondaryPurchase.heading}
          leftLabel={newCapitalVsSecondaryPurchase.leftLabel}
          rightLabel={newCapitalVsSecondaryPurchase.rightLabel}
          rows={newCapitalVsSecondaryPurchase.rows}
          footnote={newCapitalVsSecondaryPurchase.footnote}
        />
      </div>

      <DecisionStudio
        eyebrow={ownershipSlice.eyebrow}
        heading={ownershipSlice.heading}
        intro={ownershipSlice.intro}
        decisions={ownershipSlice.decisions}
        note={ownershipSlice.note}
      />

      <DeepDiveSection {...tenPercentDoesNotMeanControl} tone="panel" />

      <DeepDiveSection {...ubitTaxSurprise} tone="dark" />

      <DeepDiveSection {...entityTypesAndK1} tone="panel" />

      <DeepDiveSection {...dilutionProtection} tone="dark" />

      <DeepDiveSection {...businessRisksAndCustomerConcentration} tone="panel" />

      <DeepDiveSection {...investorIsNotOperator} tone="dark" />

      <DeepDiveSection {...relatedPartyTrap} tone="panel" />

      <DeepDiveSection {...additionalCapitalAndCompanyCash} tone="dark" />

      <DeepDiveSection {...ownershipClassesAndPriorities} tone="panel" />

      <DeepDiveSection {...illiquidityAndNoSellButton} tone="dark" />

      <HarvestScenarios
        eyebrow={threeExitOutcomes.eyebrow}
        heading={threeExitOutcomes.heading}
        intro={threeExitOutcomes.intro}
        scenarios={threeExitOutcomes.scenarios}
        tableColumns={threeExitOutcomes.tableColumns}
        comparisonNote={threeExitOutcomes.comparisonNote}
        conclusion={threeExitOutcomes.conclusion}
      />

      <DeepDiveSection {...futureSaleNotGuaranteed} tone="panel" />

      <DeepDiveSection {...minorityControlAndSale} tone="dark" />

      <DeepDiveSection {...managementCompensationAndDebt} tone="panel" />

      <DeepDiveSection {...securitiesAndAccreditedInvestor} tone="dark" />

      <ServiceProcess
        eyebrow={investmentDocuments.eyebrow}
        heading={investmentDocuments.heading}
        steps={investmentDocuments.steps}
        variant="cards"
        note={investmentDocuments.note}
      />

      <DeepDiveSection {...dueDiligenceAndFraudWarning} tone="panel" />

      <DeepDiveSection {...establishedVsStartup} tone="dark" />

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
        eyebrow="The Private Business Investor's Self-Directed IRA"
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
