import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  contributions401kHero,
  contributions401kRevelation,
  contributions401kFigures,
  contributions401kGallery,
  contributions401kStories,
  contributions401kFaq,
  contributions401kReferences,
} from "@/data/deepdive/self-directed-401k-contributions-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) Contribution Rules",
  description:
    "Discover how eligible business owners may contribute as both employee and employer through a Solo 401(k). Explore 2026 limits, examples, and IRS rules.",
};

export default function SelfDirected401kContributionsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={contributions401kHero.eyebrow}
        title={contributions401kHero.title}
        goldLine={contributions401kHero.goldLine}
        description={contributions401kHero.description}
        whoItsFor={contributions401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...contributions401kRevelation} />

      <DeepDiveFigurePanel {...contributions401kFigures} />

      <DeepDiveGallery {...contributions401kGallery} />

      <DeepDiveStoryList {...contributions401kStories} />

      <ServiceFaq {...contributions401kFaq} />

      <DeepDiveReferenceLibrary references={contributions401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Two Roles. <span className="text-r-gold">One Retirement Plan.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
