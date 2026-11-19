import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveStageFlow } from "@/components/services/deepdive/DeepDiveStageFlow";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  realEstate401kHero,
  realEstate401kRevelation,
  realEstate401kGallery,
  realEstate401kStories,
  realEstate401kOwnershipFlow,
  realEstate401kFinancing,
  realEstate401kComparison,
  realEstate401kFigures,
  realEstate401kFaq,
  realEstate401kReferences,
} from "@/data/deepdive/self-directed-401k-real-estate-content";

export const metadata: Metadata = {
  title: "Real Estate Investing With A Self-Directed 401(k)",
  description:
    "Discover how a self-directed 401(k) may let eligible business owners hold rental property, commercial real estate, or land as a retirement-plan investment.",
};

export default function SelfDirected401kRealEstatePage() {
  return (
    <>
      <ServiceHero
        eyebrow={realEstate401kHero.eyebrow}
        title={realEstate401kHero.title}
        goldLine={realEstate401kHero.goldLine}
        description={realEstate401kHero.description}
        whoItsFor={realEstate401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...realEstate401kRevelation} />

      <DeepDiveGallery {...realEstate401kGallery} />

      <DeepDiveStoryList {...realEstate401kStories} />

      <DeepDiveStageFlow {...realEstate401kOwnershipFlow} />

      <DeepDiveSection {...realEstate401kFinancing} tone="panel" />

      <DeepDiveComparisonTable {...realEstate401kComparison} />

      <DeepDiveFigurePanel {...realEstate401kFigures} />

      <ServiceFaq {...realEstate401kFaq} />

      <DeepDiveReferenceLibrary references={realEstate401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Your Retirement Plan May <span className="text-r-gold">Own More.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
