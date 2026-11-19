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
  privateLending401kHero,
  privateLending401kRevelation,
  privateLending401kGallery,
  privateLending401kStories,
  privateLending401kComparison,
  privateLending401kFigures,
  privateLending401kFaq,
  privateLending401kReferences,
} from "@/data/deepdive/self-directed-401k-private-lending-content";

export const metadata: Metadata = {
  title: "Private Lending With A Self-Directed 401(k)",
  description:
    "Discover how a self-directed 401(k) may hold private loans, promissory notes, and other qualifying debt investments. Explore examples, risks, and IRS rules.",
};

export default function SelfDirected401kPrivateLendingPage() {
  return (
    <>
      <ServiceHero
        eyebrow={privateLending401kHero.eyebrow}
        title={privateLending401kHero.title}
        goldLine={privateLending401kHero.goldLine}
        description={privateLending401kHero.description}
        whoItsFor={privateLending401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...privateLending401kRevelation} />

      <DeepDiveGallery {...privateLending401kGallery} />

      <DeepDiveStoryList {...privateLending401kStories} />

      <DeepDiveComparisonTable {...privateLending401kComparison} />

      <DeepDiveFigurePanel {...privateLending401kFigures} />

      <ServiceFaq {...privateLending401kFaq} />

      <DeepDiveReferenceLibrary references={privateLending401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Your Retirement Plan May <span className="text-r-gold">Be The Lender.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
