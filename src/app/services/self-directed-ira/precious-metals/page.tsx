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
  metalsIraHero,
  metalsIraRevelation,
  metalsIraGallery,
  metalsIraStory,
  metalsIraComparison,
  metalsIraPossession,
  metalsIraCoinsVsBullion,
  metalsIraRisks,
  metalsIraFaq,
  metalsIraReferences,
} from "@/data/deepdive/self-directed-ira-precious-metals-content";

export const metadata: Metadata = {
  title: "Gold & Precious Metals With A Self-Directed IRA",
  description:
    "Can your IRA own physical gold? Explore qualifying bullion, silver, platinum, palladium, IRS rules, storage requirements, and how to get started.",
};

export default function SelfDirectedIraPreciousMetalsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={metalsIraHero.eyebrow}
        title={metalsIraHero.title}
        goldLine={metalsIraHero.goldLine}
        description={metalsIraHero.description}
        whoItsFor={metalsIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...metalsIraRevelation} />

      <DeepDiveGallery {...metalsIraGallery} columns={2} />

      <DeepDiveStoryList {...metalsIraStory} />

      <DeepDiveComparisonTable {...metalsIraComparison} />

      <DeepDiveSection {...metalsIraPossession} />

      <DeepDiveGallery {...metalsIraCoinsVsBullion} columns={3} />

      <DeepDiveGallery {...metalsIraRisks} columns={3} />

      <ServiceFaq {...metalsIraFaq} />

      <DeepDiveReferenceLibrary references={metalsIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Real Gold. Your Retirement Account. <span className="text-r-gold">More Possibilities Than You Imagined.</span></>}
        description="Discover how qualifying precious metals may become part of an appropriately structured retirement investment arrangement."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
