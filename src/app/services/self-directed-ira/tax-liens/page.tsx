import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  taxLienIraHero,
  taxLienIraRevelation,
  taxLienIraGallery,
  taxLienIraStory,
  taxLienIraComparison,
  taxLienIraStates,
  taxLienIraOutcomes,
  taxLienIraFaq,
  taxLienIraReferences,
} from "@/data/deepdive/self-directed-ira-tax-liens-content";

export const metadata: Metadata = {
  title: "Tax Lien Investing With A Self-Directed IRA",
  description:
    "Explore how a self-directed IRA may invest in tax lien certificates. Understand redemption, tax deeds, state rules, investment risks, and how to get started.",
};

export default function SelfDirectedIraTaxLiensPage() {
  return (
    <>
      <ServiceHero
        eyebrow={taxLienIraHero.eyebrow}
        title={taxLienIraHero.title}
        goldLine={taxLienIraHero.goldLine}
        description={taxLienIraHero.description}
        whoItsFor={taxLienIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...taxLienIraRevelation} />

      <DeepDiveGallery {...taxLienIraGallery} columns={3} />

      <DeepDiveStoryList {...taxLienIraStory} />

      <DeepDiveComparisonTable {...taxLienIraComparison} />

      <DeepDiveGallery {...taxLienIraStates} columns={3} />

      <DeepDiveGallery {...taxLienIraOutcomes} columns={3} />

      <ServiceFaq {...taxLienIraFaq} />

      <DeepDiveReferenceLibrary references={taxLienIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Real Estate Has More Investment Possibilities <span className="text-r-gold">Than You Imagine.</span></>}
        description="A self-directed IRA may provide access to qualifying investments beyond a conventional brokerage menu."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
