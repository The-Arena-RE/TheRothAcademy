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
  lendingIraHero,
  lendingIraRevelation,
  lendingIraGallery,
  lendingIraStory,
  lendingIraComparison,
  lendingIraBoundaries,
  lendingIraFaq,
  lendingIraReferences,
} from "@/data/deepdive/self-directed-ira-private-lending-content";

export const metadata: Metadata = {
  title: "Private Lending With A Self-Directed IRA",
  description:
    "Discover how a self-directed IRA may invest in private loans, promissory notes, and real estate financing. Learn the rules and explore how to get started.",
};

export default function SelfDirectedIraPrivateLendingPage() {
  return (
    <>
      <ServiceHero
        eyebrow={lendingIraHero.eyebrow}
        title={lendingIraHero.title}
        goldLine={lendingIraHero.goldLine}
        description={lendingIraHero.description}
        whoItsFor={lendingIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...lendingIraRevelation} />

      <DeepDiveGallery {...lendingIraGallery} columns={2} />

      <DeepDiveStoryList {...lendingIraStory} />

      <DeepDiveComparisonTable {...lendingIraComparison} />

      <DeepDiveGallery {...lendingIraBoundaries} columns={2} />

      <ServiceFaq {...lendingIraFaq} />

      <DeepDiveReferenceLibrary references={lendingIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Your IRA Could Do More Than Own The Investment. <span className="text-r-gold">It Could Finance It.</span></>}
        description="Discover a world of retirement investment possibilities that extends beyond a conventional brokerage menu."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
