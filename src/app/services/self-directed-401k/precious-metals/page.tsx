import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  preciousMetals401kHero,
  preciousMetals401kRevelation,
  preciousMetals401kGallery,
  preciousMetals401kStories,
  preciousMetals401kComparison,
  preciousMetals401kFigures,
  preciousMetals401kFaq,
  preciousMetals401kReferences,
} from "@/data/deepdive/self-directed-401k-precious-metals-content";

export const metadata: Metadata = {
  title: "Precious Metals Investing With A Self-Directed 401(k)",
  description:
    "Discover how a self-directed 401(k) may hold qualifying gold, silver, platinum, and palladium. Explore coins, bullion, custody rules, and IRS guidance.",
};

export default function SelfDirected401kPreciousMetalsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={preciousMetals401kHero.eyebrow}
        title={preciousMetals401kHero.title}
        goldLine={preciousMetals401kHero.goldLine}
        description={preciousMetals401kHero.description}
        whoItsFor={preciousMetals401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...preciousMetals401kRevelation} />

      <DeepDiveGallery {...preciousMetals401kGallery} />

      <DeepDiveStoryList {...preciousMetals401kStories} />

      <DeepDiveComparisonTable {...preciousMetals401kComparison} />

      <DeepDiveFigurePanel {...preciousMetals401kFigures} />

      <ServiceFaq {...preciousMetals401kFaq} />

      <DeepDiveReferenceLibrary references={preciousMetals401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Your Retirement Plan May <span className="text-r-gold">Own Real Gold.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
