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
  directAnswer,
  eligibilityVsBalance,
  jordanStory,
  investmentConstellation,
  allocationBreakdown,
  fundOwnershipStructure,
  sponsorGlassOffice,
  fundOutcomes,
  creditClockTimeline,
  loanOutcomes,
  debtVsEquity,
  minorityOwnerRights,
  equityOutcomes,
  investmentAccessGate,
  liquidityHorizon,
  valueBehindGlass,
  stressTheater,
  diversificationAndCapitalCalls,
  capitalCommitmentAlarm,
  sponsorFeeMicroscope,
  sponsorRiskRadar,
  liquidityValuationAndTax,
  planOwnsAssetsAndRelatedParty,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-with-2000000-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "The $2 Million Solo 401(k): Private Market Investing | Roth Academy",
  description:
    "Discover how a Self-Directed 401(k) may invest in private real estate funds, secured business loans, and private company equity. Explore ownership, fees, and risks.",
  alternates: { canonical: "/learn/self-directed-401k/investing-with-2000000" },
};

export default function InvestingWith2000000Page() {
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
        <DeepDiveStoryList eyebrow={jordanStory.eyebrow} heading={jordanStory.heading} stories={jordanStory.stories} />
      </div>

      <HarvestScenarios
        eyebrow={investmentConstellation.eyebrow}
        heading={investmentConstellation.heading}
        intro={investmentConstellation.intro}
        scenarios={investmentConstellation.scenarios}
        tableColumns={investmentConstellation.tableColumns}
        comparisonNote={investmentConstellation.comparisonNote}
        conclusion={investmentConstellation.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={allocationBreakdown.eyebrow}
        heading={allocationBreakdown.heading}
        intro={allocationBreakdown.intro}
        figures={allocationBreakdown.figures}
        disclaimer={allocationBreakdown.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...fundOwnershipStructure} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={sponsorGlassOffice.eyebrow}
        heading={sponsorGlassOffice.heading}
        intro={sponsorGlassOffice.intro}
        steps={sponsorGlassOffice.steps}
        variant="list"
        columns={3}
        note={sponsorGlassOffice.note}
      />

      <HarvestScenarios
        eyebrow={fundOutcomes.eyebrow}
        heading={fundOutcomes.heading}
        intro={fundOutcomes.intro}
        scenarios={fundOutcomes.scenarios}
        tableColumns={fundOutcomes.tableColumns}
        comparisonNote={fundOutcomes.comparisonNote}
        conclusion={fundOutcomes.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={creditClockTimeline.eyebrow}
        heading={creditClockTimeline.heading}
        intro={creditClockTimeline.intro}
        figures={creditClockTimeline.figures}
        disclaimer={creditClockTimeline.disclaimer}
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

      <DeepDiveComparisonTable
        eyebrow={debtVsEquity.eyebrow}
        heading={debtVsEquity.heading}
        leftLabel={debtVsEquity.leftLabel}
        rightLabel={debtVsEquity.rightLabel}
        rows={debtVsEquity.rows}
        footnote={debtVsEquity.footnote}
      />

      <ServiceProcess
        eyebrow={minorityOwnerRights.eyebrow}
        heading={minorityOwnerRights.heading}
        intro={minorityOwnerRights.intro}
        steps={minorityOwnerRights.steps}
        variant="list"
        columns={3}
        note={minorityOwnerRights.note}
      />

      <HarvestScenarios
        eyebrow={equityOutcomes.eyebrow}
        heading={equityOutcomes.heading}
        intro={equityOutcomes.intro}
        scenarios={equityOutcomes.scenarios}
        tableColumns={equityOutcomes.tableColumns}
        comparisonNote={equityOutcomes.comparisonNote}
        conclusion={equityOutcomes.conclusion}
      />

      <DeepDiveComparisonTable
        eyebrow={investmentAccessGate.eyebrow}
        heading={investmentAccessGate.heading}
        leftLabel={investmentAccessGate.leftLabel}
        rightLabel={investmentAccessGate.rightLabel}
        rows={investmentAccessGate.rows}
        footnote={investmentAccessGate.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={liquidityHorizon.eyebrow}
          heading={liquidityHorizon.heading}
          intro={liquidityHorizon.intro}
          figures={liquidityHorizon.figures}
          disclaimer={liquidityHorizon.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={valueBehindGlass.eyebrow}
        heading={valueBehindGlass.heading}
        intro={valueBehindGlass.intro}
        steps={valueBehindGlass.steps}
        variant="list"
        columns={3}
        note={valueBehindGlass.note}
      />

      <HarvestScenarios
        eyebrow={stressTheater.eyebrow}
        heading={stressTheater.heading}
        intro={stressTheater.intro}
        scenarios={stressTheater.scenarios}
        tableColumns={stressTheater.tableColumns}
        comparisonNote={stressTheater.comparisonNote}
        conclusion={stressTheater.conclusion}
      />

      <DeepDiveSection {...diversificationAndCapitalCalls} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={capitalCommitmentAlarm.eyebrow}
          heading={capitalCommitmentAlarm.heading}
          intro={capitalCommitmentAlarm.intro}
          figures={capitalCommitmentAlarm.figures}
          disclaimer={capitalCommitmentAlarm.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={sponsorFeeMicroscope.eyebrow}
          heading={sponsorFeeMicroscope.heading}
          intro={sponsorFeeMicroscope.intro}
          figures={sponsorFeeMicroscope.figures}
          disclaimer={sponsorFeeMicroscope.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={sponsorRiskRadar.eyebrow}
        heading={sponsorRiskRadar.heading}
        intro={sponsorRiskRadar.intro}
        steps={sponsorRiskRadar.steps}
        variant="cards"
        note={sponsorRiskRadar.note}
      />

      <DeepDiveSection {...liquidityValuationAndTax} tone="dark" />

      <ServiceProcess
        eyebrow={planOwnsAssetsAndRelatedParty.eyebrow}
        heading={planOwnsAssetsAndRelatedParty.heading}
        steps={planOwnsAssetsAndRelatedParty.steps}
        variant="cards"
        note={planOwnsAssetsAndRelatedParty.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Three Investments, One Plan"
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
