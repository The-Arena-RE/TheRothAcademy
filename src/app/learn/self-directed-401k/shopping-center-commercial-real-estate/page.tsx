import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { OwnershipAtrium } from "@/components/learn-modules/OwnershipAtrium";
import { ShoppingCenterVacancyScenarios } from "@/components/learn-modules/ShoppingCenterVacancyScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  storeVsStorefront,
  storefrontXRay,
  jordanStory,
  storefrontPurchase,
  rentStructure,
  reimbursableExpensesAndNNN,
  fullYearFinancials,
  vacancyScenarios,
  parkingLotSurprise,
  leaseDecoder,
  centerAndTenantRisk,
  associationAndFinancing,
  commercialRentTax,
  personalBenefitBoundaries,
  collectionValuationSale,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/shopping-center-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Owning A Shopping Center Storefront With A Self-Directed 401(k) | Roth Academy",
  description:
    "Could your Self-Directed 401(k) own one commercial storefront in a shopping center without owning the tenant's business? Explore a fully reconciled example.",
  alternates: { canonical: "/learn/self-directed-401k/shopping-center-commercial-real-estate" },
};

export default function ShoppingCenterPage() {
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

      <DeepDiveSection {...storeVsStorefront} tone="dark" />

      <OwnershipAtrium
        eyebrow={storefrontXRay.eyebrow}
        heading={storefrontXRay.heading}
        intro={storefrontXRay.intro}
        layers={storefrontXRay.layers}
        dossier={storefrontXRay.dossier}
        conclusion={storefrontXRay.conclusion}
      />

      <DeepDiveStoryList eyebrow={jordanStory.eyebrow} heading={jordanStory.heading} stories={jordanStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={storefrontPurchase.eyebrow}
          heading={storefrontPurchase.heading}
          intro={storefrontPurchase.intro}
          figures={storefrontPurchase.figures}
          disclaimer={storefrontPurchase.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rentStructure.eyebrow}
          heading={rentStructure.heading}
          intro={rentStructure.intro}
          figures={rentStructure.figures}
          disclaimer={rentStructure.disclaimer}
        />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...reimbursableExpensesAndNNN} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={fullYearFinancials.eyebrow}
          heading={fullYearFinancials.heading}
          intro={fullYearFinancials.intro}
          figures={fullYearFinancials.figures}
          disclaimer={fullYearFinancials.disclaimer}
        />
      </div>

      <ShoppingCenterVacancyScenarios
        eyebrow={vacancyScenarios.eyebrow}
        heading={vacancyScenarios.heading}
        intro={vacancyScenarios.intro}
        scenarios={vacancyScenarios.scenarios}
        comparisonNote={vacancyScenarios.comparisonNote}
        conclusion={vacancyScenarios.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={parkingLotSurprise.eyebrow}
        heading={parkingLotSurprise.heading}
        intro={parkingLotSurprise.intro}
        figures={parkingLotSurprise.figures}
        disclaimer={parkingLotSurprise.disclaimer}
      />

      <OwnershipAtrium
        eyebrow={leaseDecoder.eyebrow}
        heading={leaseDecoder.heading}
        intro={leaseDecoder.intro}
        layers={leaseDecoder.layers}
        dossier={leaseDecoder.dossier}
        conclusion={leaseDecoder.conclusion}
      />

      <DeepDiveSection {...centerAndTenantRisk} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveSection {...associationAndFinancing} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveSection {...commercialRentTax} tone="dark" />
      </div>

      <ServiceProcess
        eyebrow={personalBenefitBoundaries.eyebrow}
        heading={personalBenefitBoundaries.heading}
        steps={personalBenefitBoundaries.steps}
        variant="cards"
        note={personalBenefitBoundaries.note}
      />

      <DeepDiveSection {...collectionValuationSale} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Real Estate Behind The Storefront"
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
