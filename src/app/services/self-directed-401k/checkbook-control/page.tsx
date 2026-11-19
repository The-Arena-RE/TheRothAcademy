import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  checkbookControl401kHero,
  checkbookControl401kRevelation,
  checkbookControl401kGallery,
  checkbookControl401kStories,
  checkbookControl401kComparison,
  checkbookControl401kFaq,
  checkbookControl401kReferences,
} from "@/data/deepdive/self-directed-401k-checkbook-control-content";

export const metadata: Metadata = {
  title: "Checkbook Control With A Self-Directed 401(k)",
  description:
    "Discover how an authorized trustee may direct permitted investments through a self-directed 401(k)'s own plan account, and where the real boundaries are.",
};

export default function SelfDirected401kCheckbookControlPage() {
  return (
    <>
      <ServiceHero
        eyebrow={checkbookControl401kHero.eyebrow}
        title={checkbookControl401kHero.title}
        goldLine={checkbookControl401kHero.goldLine}
        description={checkbookControl401kHero.description}
        whoItsFor={checkbookControl401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...checkbookControl401kRevelation} />

      <DeepDiveGallery {...checkbookControl401kGallery} />

      <DeepDiveStoryList {...checkbookControl401kStories} />

      <DeepDiveComparisonTable {...checkbookControl401kComparison} />

      <ServiceFaq {...checkbookControl401kFaq} />

      <DeepDiveReferenceLibrary references={checkbookControl401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Direct Your Plan&apos;s <span className="text-r-gold">Own Investments.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
