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
  rolloversIraHero,
  rolloversIraRevelation,
  rolloversIraPathways,
  rolloversIraStory,
  rolloversIraComparison,
  rolloversIraDistinctions,
  rolloversIraFaq,
  rolloversIraReferences,
} from "@/data/deepdive/self-directed-ira-rollovers-transfers-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA Transfers & Rollovers",
  description:
    "Discover how eligible IRA and retirement-plan assets may transfer or roll over into a self-directed IRA. Explore transfers, direct rollovers, the 60-day rule, and Roth conversions.",
};

export default function SelfDirectedIraRolloversTransfersPage() {
  return (
    <>
      <ServiceHero
        eyebrow={rolloversIraHero.eyebrow}
        title={rolloversIraHero.title}
        goldLine={rolloversIraHero.goldLine}
        description={rolloversIraHero.description}
        whoItsFor={rolloversIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...rolloversIraRevelation} />

      <DeepDiveGallery {...rolloversIraPathways} columns={2} />

      <DeepDiveStoryList {...rolloversIraStory} />

      <DeepDiveComparisonTable {...rolloversIraComparison} />

      <DeepDiveGallery {...rolloversIraDistinctions} columns={2} />

      <ServiceFaq {...rolloversIraFaq} />

      <DeepDiveReferenceLibrary references={rolloversIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>You&apos;ve Already Built The Savings. <span className="text-r-gold">Discover What They Could Own.</span></>}
        description="Explore your existing retirement-account situation and begin the appropriate self-directed IRA setup pathway."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
