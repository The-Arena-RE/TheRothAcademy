import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DecisionStudio } from "@/components/learn-modules/DecisionStudio";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  whatIsRealEstateCrowdfunding,
  emmaStory,
  juniperRowProfile,
  ownershipChain,
  fivePlayers,
  offeringTypeExplainer,
  fundingMosaicIntro,
  fundingMosaic,
  shortfallScenario,
  whatIraActuallyBuys,
  firstYearPropertyCash,
  emmaDistribution,
  distributionVsProfit,
  threeOperatingYears,
  platformVsSponsor,
  feesAndPreferredReturn,
  equityVsDebtVsFund,
  securitiesFrameworksComparison,
  accreditedInvestorNote,
  fullyFundedNotSafe,
  tenantLossAndDebtRisk,
  ubitAndK1,
  capitalCallsAndLiquidity,
  platformShutdownAndDiversification,
  exitTimingIntro,
  threeFiveYearOutcomes,
  unsoldAndValuation,
  reportsAndFraudWarning,
  researchSheet,
  sevenMisconceptions,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/investing-alongside-other-investors-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Real Estate Crowdfunding With a Self-Directed IRA | Roth Academy",
  description:
    "Discover how a Self-Directed IRA may invest through real estate crowdfunding platforms. Learn ownership, fees, investor eligibility, distributions, taxes, and risks.",
  alternates: { canonical: "/learn/self-directed-ira/investing-alongside-other-investors" },
};

export default function InvestingAlongsideOtherInvestorsPage() {
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

      <DeepDiveSection {...whatIsRealEstateCrowdfunding} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={emmaStory.eyebrow} heading={emmaStory.heading} stories={emmaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={juniperRowProfile.eyebrow}
          heading={juniperRowProfile.heading}
          intro={juniperRowProfile.intro}
          figures={juniperRowProfile.figures}
          disclaimer={juniperRowProfile.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...ownershipChain} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={fivePlayers.eyebrow}
        heading={fivePlayers.heading}
        steps={fivePlayers.steps}
        variant="cards"
        note={fivePlayers.note}
      />

      <DeepDiveSection {...offeringTypeExplainer} tone="panel" />

      <DeepDiveFigurePanel
        eyebrow={fundingMosaicIntro.eyebrow}
        heading={fundingMosaicIntro.heading}
        intro={fundingMosaicIntro.intro}
        figures={fundingMosaicIntro.figures}
        disclaimer={fundingMosaicIntro.disclaimer}
      />

      <DecisionStudio
        eyebrow={fundingMosaic.eyebrow}
        heading={fundingMosaic.heading}
        intro={fundingMosaic.intro}
        decisions={fundingMosaic.decisions}
        note={fundingMosaic.note}
      />

      <DeepDiveSection {...shortfallScenario} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={whatIraActuallyBuys.eyebrow}
          heading={whatIraActuallyBuys.heading}
          intro={whatIraActuallyBuys.intro}
          figures={whatIraActuallyBuys.figures}
          disclaimer={whatIraActuallyBuys.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={firstYearPropertyCash.eyebrow}
          heading={firstYearPropertyCash.heading}
          intro={firstYearPropertyCash.intro}
          figures={firstYearPropertyCash.figures}
          disclaimer={firstYearPropertyCash.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={emmaDistribution.eyebrow}
          heading={emmaDistribution.heading}
          figures={emmaDistribution.figures}
          disclaimer={emmaDistribution.disclaimer}
        />
      </div>

      <DeepDiveSection {...distributionVsProfit} tone="panel" />

      <HarvestScenarios
        eyebrow={threeOperatingYears.eyebrow}
        heading={threeOperatingYears.heading}
        intro={threeOperatingYears.intro}
        scenarios={threeOperatingYears.scenarios}
        tableColumns={threeOperatingYears.tableColumns}
        comparisonNote={threeOperatingYears.comparisonNote}
        conclusion={threeOperatingYears.conclusion}
      />

      <DeepDiveSection {...platformVsSponsor} tone="dark" />

      <DeepDiveSection {...feesAndPreferredReturn} tone="panel" />

      <ServiceProcess
        eyebrow={equityVsDebtVsFund.eyebrow}
        heading={equityVsDebtVsFund.heading}
        steps={equityVsDebtVsFund.steps}
        variant="cards"
        note={equityVsDebtVsFund.note}
      />

      <ServiceProcess
        eyebrow={securitiesFrameworksComparison.eyebrow}
        heading={securitiesFrameworksComparison.heading}
        steps={securitiesFrameworksComparison.steps}
        variant="cards"
        note={securitiesFrameworksComparison.note}
      />

      <DeepDiveSection {...accreditedInvestorNote} tone="dark" />

      <DeepDiveSection {...fullyFundedNotSafe} tone="panel" />

      <DeepDiveSection {...tenantLossAndDebtRisk} tone="dark" />

      <DeepDiveSection {...ubitAndK1} tone="panel" />

      <DeepDiveSection {...capitalCallsAndLiquidity} tone="dark" />

      <DeepDiveSection {...platformShutdownAndDiversification} tone="panel" />

      <DeepDiveSection {...exitTimingIntro} tone="dark" />

      <HarvestScenarios
        eyebrow={threeFiveYearOutcomes.eyebrow}
        heading={threeFiveYearOutcomes.heading}
        intro={threeFiveYearOutcomes.intro}
        scenarios={threeFiveYearOutcomes.scenarios}
        tableColumns={threeFiveYearOutcomes.tableColumns}
        comparisonNote={threeFiveYearOutcomes.comparisonNote}
        conclusion={threeFiveYearOutcomes.conclusion}
      />

      <DeepDiveSection {...unsoldAndValuation} tone="panel" />

      <DeepDiveSection {...reportsAndFraudWarning} tone="dark" />

      <ServiceProcess
        eyebrow={researchSheet.eyebrow}
        heading={researchSheet.heading}
        steps={researchSheet.steps}
        variant="list"
        columns={3}
        note={researchSheet.note}
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
        eyebrow="The Real Estate Crowdfunding Investor's Self-Directed IRA"
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
