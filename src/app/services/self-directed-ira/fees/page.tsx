import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import { serviceIraPricing } from "@/data/self-directed-ira-content";
import {
  feesIraHero,
  feesIraRevelation,
  feesIraCategories,
  feesIraService,
  feesIraCustodialFees,
  feesIraStory,
  feesIraRealEstateExpenses,
  feesIraFaq,
  feesIraReferences,
} from "@/data/deepdive/self-directed-ira-fees-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA Fees & Expenses",
  description:
    "Understand what a self-directed IRA costs — setup fees, custodial administration, and investment-specific expenses, explained clearly with no hidden categories.",
};

export default function SelfDirectedIraFeesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={feesIraHero.eyebrow}
        title={feesIraHero.title}
        goldLine={feesIraHero.goldLine}
        description={feesIraHero.description}
        whoItsFor={feesIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...feesIraRevelation} />

      <DeepDiveGallery {...feesIraCategories} columns={3} />

      <DeepDiveGallery {...feesIraService} columns={3} />

      <ServicePricing
        eyebrow={serviceIraPricing.eyebrow}
        heading={serviceIraPricing.heading}
        intro={serviceIraPricing.intro}
        included={serviceIraPricing.included}
        price={serviceIraPricing.price}
        note={serviceIraPricing.note}
      />

      <DeepDiveGallery {...feesIraCustodialFees} columns={3} />

      <DeepDiveStoryList {...feesIraStory} />

      <DeepDiveGallery {...feesIraRealEstateExpenses} columns={2} />

      <ServiceFaq {...feesIraFaq} />

      <DeepDiveReferenceLibrary references={feesIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Extraordinary Investment Possibilities. <span className="text-r-gold">Costs You Can Understand.</span></>}
        description="Explore the account setup process and review the applicable service terms before purchase."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
