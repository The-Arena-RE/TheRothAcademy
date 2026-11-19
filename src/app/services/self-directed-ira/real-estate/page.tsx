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
  realEstateIraHero,
  realEstateIraRevelation,
  realEstateIraGallery,
  realEstateIraStory,
  realEstateIraComparison,
  realEstateIraCashFlow,
  realEstateIraBoundaries,
  realEstateIraFaq,
  realEstateIraReferences,
} from "@/data/deepdive/self-directed-ira-real-estate-content";

export const metadata: Metadata = {
  title: "Real Estate Investing With A Self-Directed IRA",
  description:
    "Can your IRA buy real estate? Explore rental properties, vacant land, commercial buildings, investment rules, and how to start a self-directed IRA.",
};

export default function SelfDirectedIraRealEstatePage() {
  return (
    <>
      <ServiceHero
        eyebrow={realEstateIraHero.eyebrow}
        title={realEstateIraHero.title}
        goldLine={realEstateIraHero.goldLine}
        description={realEstateIraHero.description}
        whoItsFor={realEstateIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...realEstateIraRevelation} />

      <DeepDiveGallery {...realEstateIraGallery} columns={2} />

      <DeepDiveStoryList {...realEstateIraStory} />

      <DeepDiveComparisonTable {...realEstateIraComparison} />

      <DeepDiveSection {...realEstateIraCashFlow} />

      <DeepDiveGallery {...realEstateIraBoundaries} columns={2} />

      <ServiceFaq {...realEstateIraFaq} />

      <DeepDiveReferenceLibrary references={realEstateIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>The Next Property You Discover <span className="text-r-gold">Could Change How You Think About Your IRA.</span></>}
        description="Explore whether a self-directed IRA is an appropriate starting point for your retirement investment interests."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
