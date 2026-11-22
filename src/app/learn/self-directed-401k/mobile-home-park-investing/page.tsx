import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { CommunityLedger } from "@/components/learn-modules/CommunityLedger";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  ownershipDistinction,
  groundBeneathHomes,
  morganStory,
  propertyPurchase,
  lotRentAndBaseYear,
  operatingCosts,
  communityLedger,
  undergroundInvestment,
  waterMainEmergency,
  emptySiteParadox,
  vacancyFillingExample,
  homeClassificationAndRights,
  residentProtectionsAndRentRules,
  personalBenefitBoundaries,
  managementAndIncomeFlow,
  taxAndFinancing,
  riskValueAndSale,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/mobile-home-park-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Mobile Home Park Investing With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own the land beneath 32 manufactured homes without owning the homes themselves? Explore a fully reconciled example.",
  alternates: { canonical: "/learn/self-directed-401k/mobile-home-park-investing" },
};

export default function MobileHomeParkPage() {
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

      <DeepDiveSection {...ownershipDistinction} tone="dark" />

      <OwnershipAtrium
        eyebrow={groundBeneathHomes.eyebrow}
        heading={groundBeneathHomes.heading}
        intro={groundBeneathHomes.intro}
        layers={groundBeneathHomes.layers}
        dossier={groundBeneathHomes.dossier}
        conclusion={groundBeneathHomes.conclusion}
      />

      <DeepDiveStoryList eyebrow={morganStory.eyebrow} heading={morganStory.heading} stories={morganStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={propertyPurchase.eyebrow}
          heading={propertyPurchase.heading}
          intro={propertyPurchase.intro}
          figures={propertyPurchase.figures}
          disclaimer={propertyPurchase.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={lotRentAndBaseYear.eyebrow}
          heading={lotRentAndBaseYear.heading}
          intro={lotRentAndBaseYear.intro}
          figures={lotRentAndBaseYear.figures}
          disclaimer={lotRentAndBaseYear.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={operatingCosts.eyebrow}
          heading={operatingCosts.heading}
          intro={operatingCosts.intro}
          figures={operatingCosts.figures}
          disclaimer={operatingCosts.disclaimer}
        />
      </div>

      <CommunityLedger
        eyebrow={communityLedger.eyebrow}
        heading={communityLedger.heading}
        intro={communityLedger.intro}
        scenarios={communityLedger.scenarios}
        comparisonNote={communityLedger.comparisonNote}
        conclusion={communityLedger.conclusion}
      />

      <OwnershipAtrium
        eyebrow={undergroundInvestment.eyebrow}
        heading={undergroundInvestment.heading}
        intro={undergroundInvestment.intro}
        layers={undergroundInvestment.layers}
        dossier={undergroundInvestment.dossier}
        conclusion={undergroundInvestment.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={waterMainEmergency.eyebrow}
        heading={waterMainEmergency.heading}
        intro={waterMainEmergency.intro}
        figures={waterMainEmergency.figures}
        disclaimer={waterMainEmergency.disclaimer}
      />

      <ServiceProcess
        eyebrow={emptySiteParadox.eyebrow}
        heading={emptySiteParadox.heading}
        intro={emptySiteParadox.intro}
        steps={emptySiteParadox.steps}
        columns={3}
        note={emptySiteParadox.note}
      />

      <DeepDiveFigurePanel
        eyebrow={vacancyFillingExample.eyebrow}
        heading={vacancyFillingExample.heading}
        intro={vacancyFillingExample.intro}
        figures={vacancyFillingExample.figures}
        disclaimer={vacancyFillingExample.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...homeClassificationAndRights} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...residentProtectionsAndRentRules} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalBenefitBoundaries.eyebrow}
        heading={personalBenefitBoundaries.heading}
        steps={personalBenefitBoundaries.steps}
        variant="cards"
        note={personalBenefitBoundaries.note}
      />

      <DeepDiveSection {...managementAndIncomeFlow} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...taxAndFinancing} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...riskValueAndSale} tone="dark" />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Land Beneath The Neighborhood"
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
