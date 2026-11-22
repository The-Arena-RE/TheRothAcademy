import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  eligibilityVsBalance,
  jamieStory,
  opportunityVault,
  dollarByDollarReveal,
  lotPurchase,
  lotSaleOutcomes,
  loanCommitment,
  loanOutcomes,
  unrelatedBorrowerAndSecuredLoans,
  ownershipLadder,
  publicSecuritiesAllocation,
  privateInvestmentSubscription,
  lockedDollar,
  keepCashAvailable,
  feesConcentrationAndLiquidity,
  ownershipRightsAndPlanOwnership,
  relatedPartyAndPersonalUse,
  realityTest,
  outOfReachAndOtherCategories,
  balanceChangesOverTimeAndRisk,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-with-5000-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Investing With $5,000 in a Self-Directed 401(k) | Roth Academy",
  description:
    "Explore what a Self-Directed 401(k) may invest in with $5,000, including small land parcels, private loans, real estate shares, costs, and risks.",
  alternates: { canonical: "/learn/self-directed-401k/investing-with-5000" },
};

export default function InvestingWith5000Page() {
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

      <DeepDiveSection {...directAnswer} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...eligibilityVsBalance} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={jamieStory.eyebrow} heading={jamieStory.heading} stories={jamieStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={opportunityVault.eyebrow}
        heading={opportunityVault.heading}
        intro={opportunityVault.intro}
        scenarios={opportunityVault.scenarios}
        tableColumns={opportunityVault.tableColumns}
        comparisonNote={opportunityVault.comparisonNote}
        conclusion={opportunityVault.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={dollarByDollarReveal.eyebrow}
        heading={dollarByDollarReveal.heading}
        intro={dollarByDollarReveal.intro}
        figures={dollarByDollarReveal.figures}
        disclaimer={dollarByDollarReveal.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={lotPurchase.eyebrow}
          heading={lotPurchase.heading}
          intro={lotPurchase.intro}
          figures={lotPurchase.figures}
          disclaimer={lotPurchase.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={lotSaleOutcomes.eyebrow}
        heading={lotSaleOutcomes.heading}
        intro={lotSaleOutcomes.intro}
        scenarios={lotSaleOutcomes.scenarios}
        tableColumns={lotSaleOutcomes.tableColumns}
        comparisonNote={lotSaleOutcomes.comparisonNote}
        conclusion={lotSaleOutcomes.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={loanCommitment.eyebrow}
        heading={loanCommitment.heading}
        intro={loanCommitment.intro}
        figures={loanCommitment.figures}
        disclaimer={loanCommitment.disclaimer}
      />

      <HarvestScenarios
        eyebrow={loanOutcomes.eyebrow}
        heading={loanOutcomes.heading}
        intro={loanOutcomes.intro}
        scenarios={loanOutcomes.scenarios}
        tableColumns={loanOutcomes.tableColumns}
        comparisonNote={loanOutcomes.comparisonNote}
        conclusion={loanOutcomes.conclusion}
      />

      <DeepDiveSection {...unrelatedBorrowerAndSecuredLoans} tone="dark" />

      <OwnershipAtrium
        eyebrow={ownershipLadder.eyebrow}
        heading={ownershipLadder.heading}
        intro={ownershipLadder.intro}
        layers={ownershipLadder.layers}
        dossier={ownershipLadder.dossier}
        conclusion={ownershipLadder.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={publicSecuritiesAllocation.eyebrow}
        heading={publicSecuritiesAllocation.heading}
        intro={publicSecuritiesAllocation.intro}
        figures={publicSecuritiesAllocation.figures}
        disclaimer={publicSecuritiesAllocation.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={privateInvestmentSubscription.eyebrow}
          heading={privateInvestmentSubscription.heading}
          intro={privateInvestmentSubscription.intro}
          figures={privateInvestmentSubscription.figures}
          disclaimer={privateInvestmentSubscription.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={lockedDollar.eyebrow}
          heading={lockedDollar.heading}
          intro={lockedDollar.intro}
          figures={lockedDollar.figures}
          disclaimer={lockedDollar.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...keepCashAvailable} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...feesConcentrationAndLiquidity} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...ownershipRightsAndPlanOwnership} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={relatedPartyAndPersonalUse.eyebrow}
        heading={relatedPartyAndPersonalUse.heading}
        steps={relatedPartyAndPersonalUse.steps}
        variant="cards"
        note={relatedPartyAndPersonalUse.note}
      />

      <ServiceProcess
        eyebrow={realityTest.eyebrow}
        heading={realityTest.heading}
        steps={realityTest.steps}
        variant="cards"
        note={realityTest.note}
      />

      <DeepDiveSection {...outOfReachAndOtherCategories} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...balanceChangesOverTimeAndRisk} tone="dark" />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Five Thousand Dollars"
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
