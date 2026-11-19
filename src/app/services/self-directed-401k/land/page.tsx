import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  land401kHero,
  land401kRevelation,
  land401kStories,
  land401kComparison,
  land401kFaq,
  land401kReferences,
} from "@/data/deepdive/self-directed-401k-land-content";

export const metadata: Metadata = {
  title: "Land Investing With A Self-Directed 401(k)",
  description:
    "Discover how a self-directed 401(k) may hold vacant land and agricultural property as a retirement-plan investment. Explore an example, risks, and IRS rules.",
};

export default function SelfDirected401kLandPage() {
  return (
    <>
      <ServiceHero
        eyebrow={land401kHero.eyebrow}
        title={land401kHero.title}
        goldLine={land401kHero.goldLine}
        description={land401kHero.description}
        whoItsFor={land401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...land401kRevelation} />

      <DeepDiveStoryList {...land401kStories} />

      <DeepDiveComparisonTable {...land401kComparison} />

      <ServiceFaq {...land401kFaq} />

      <DeepDiveReferenceLibrary references={land401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Your Retirement Plan May <span className="text-r-gold">Own The Land.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
