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
  certificateVsDeed,
  michaelStory,
  cypressHouseProfile,
  auctionRoom,
  auctionBegins,
  winningBidBreakdown,
  deedAndTitleRealities,
  insuranceAndPossession,
  conditionMystery,
  realCostOfPurchase,
  threeOutcomes,
  scheduleAndHomestead,
  floridaVsTexas,
  iraOwnershipRules,
  rentalPossibilityAndValueMyth,
  whyFascinating,
  biggestMistake,
  researchChecklist,
  taxTreatment,
  conventionalVsAuction,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-tax-deed-auction-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Tax Deed Auctions With a Self-Directed IRA | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may buy real estate at tax deed auctions. Learn Florida auction rules, title risks, total costs, and investment outcomes.",
  alternates: { canonical: "/learn/self-directed-ira/the-tax-deed-auction" },
};

export default function TheTaxDeedAuctionPage() {
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
        eyebrow={certificateVsDeed.eyebrow}
        heading={certificateVsDeed.heading}
        leftLabel={certificateVsDeed.leftLabel}
        rightLabel={certificateVsDeed.rightLabel}
        rows={certificateVsDeed.rows}
        footnote={certificateVsDeed.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={michaelStory.eyebrow} heading={michaelStory.heading} stories={michaelStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={cypressHouseProfile.eyebrow}
          heading={cypressHouseProfile.heading}
          intro={cypressHouseProfile.intro}
          figures={cypressHouseProfile.figures}
          disclaimer={cypressHouseProfile.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={auctionRoom.eyebrow}
        heading={auctionRoom.heading}
        intro={auctionRoom.intro}
        decisions={auctionRoom.decisions}
        note={auctionRoom.note}
      />

      <ServiceProcess
        eyebrow={auctionBegins.eyebrow}
        heading={auctionBegins.heading}
        steps={auctionBegins.steps}
        variant="cards"
        note={auctionBegins.note}
      />

      <DeepDiveFigurePanel
        eyebrow={winningBidBreakdown.eyebrow}
        heading={winningBidBreakdown.heading}
        intro={winningBidBreakdown.intro}
        figures={winningBidBreakdown.figures}
        disclaimer={winningBidBreakdown.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...deedAndTitleRealities} tone="dark" />
      </div>

      <DeepDiveSection {...insuranceAndPossession} tone="panel" />

      <DeepDiveSection {...conditionMystery} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={realCostOfPurchase.eyebrow}
          heading={realCostOfPurchase.heading}
          intro={realCostOfPurchase.intro}
          figures={realCostOfPurchase.figures}
          disclaimer={realCostOfPurchase.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={threeOutcomes.eyebrow}
        heading={threeOutcomes.heading}
        intro={threeOutcomes.intro}
        scenarios={threeOutcomes.scenarios}
        tableColumns={threeOutcomes.tableColumns}
        comparisonNote={threeOutcomes.comparisonNote}
        conclusion={threeOutcomes.conclusion}
      />

      <DeepDiveSection {...scheduleAndHomestead} tone="panel" />

      <DeepDiveComparisonTable
        eyebrow={floridaVsTexas.eyebrow}
        heading={floridaVsTexas.heading}
        leftLabel={floridaVsTexas.leftLabel}
        rightLabel={floridaVsTexas.rightLabel}
        rows={floridaVsTexas.rows}
        footnote={floridaVsTexas.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...iraOwnershipRules} tone="dark" />
      </div>

      <DeepDiveSection {...rentalPossibilityAndValueMyth} tone="panel" />

      <ServiceProcess
        eyebrow={whyFascinating.eyebrow}
        heading={whyFascinating.heading}
        steps={whyFascinating.steps}
        variant="cards"
        note={whyFascinating.note}
      />

      <DeepDiveSection {...biggestMistake} tone="dark" />

      <ServiceProcess
        eyebrow={researchChecklist.eyebrow}
        heading={researchChecklist.heading}
        steps={researchChecklist.steps}
        variant="list"
        columns={3}
        note={researchChecklist.note}
      />

      <DeepDiveSection {...taxTreatment} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={conventionalVsAuction.eyebrow}
          heading={conventionalVsAuction.heading}
          leftLabel={conventionalVsAuction.leftLabel}
          rightLabel={conventionalVsAuction.rightLabel}
          rows={conventionalVsAuction.rows}
          footnote={conventionalVsAuction.footnote}
        />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Tax Deed Auction Investor's Self-Directed IRA"
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
