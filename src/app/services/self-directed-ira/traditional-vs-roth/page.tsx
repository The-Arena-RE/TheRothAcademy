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
  tradVsRothIraHero,
  tradVsRothIraRevelation,
  tradVsRothIraGallery,
  tradVsRothIraComparison,
  tradVsRothIraStory,
  tradVsRothIraTiming,
  tradVsRothIraFaq,
  tradVsRothIraReferences,
} from "@/data/deepdive/self-directed-ira-traditional-vs-roth-content";

export const metadata: Metadata = {
  title: "Traditional Vs. Roth Self-Directed IRA",
  description:
    "Compare Traditional and Roth self-directed IRAs — contribution deductibility, tax-free qualified distributions, RMDs, and the same extraordinary investment universe.",
};

export default function SelfDirectedIraTraditionalVsRothPage() {
  return (
    <>
      <ServiceHero
        eyebrow={tradVsRothIraHero.eyebrow}
        title={tradVsRothIraHero.title}
        goldLine={tradVsRothIraHero.goldLine}
        description={tradVsRothIraHero.description}
        whoItsFor={tradVsRothIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...tradVsRothIraRevelation} />

      <DeepDiveGallery {...tradVsRothIraGallery} columns={2} />

      <DeepDiveComparisonTable {...tradVsRothIraComparison} />

      <DeepDiveStoryList {...tradVsRothIraStory} />

      <DeepDiveGallery {...tradVsRothIraTiming} columns={2} />

      <ServiceFaq {...tradVsRothIraFaq} />

      <DeepDiveReferenceLibrary references={tradVsRothIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Two Tax Strategies. <span className="text-r-gold">One Extraordinary Investment Universe.</span></>}
        description="Discover the possibilities and explore which arrangement fits your circumstances."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
