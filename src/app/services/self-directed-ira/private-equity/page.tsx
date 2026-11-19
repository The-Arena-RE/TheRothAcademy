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
  equityIraHero,
  equityIraRevelation,
  equityIraGallery,
  equityIraStory,
  equityIraComparison,
  equityIraEntities,
  equityIraRisks,
  equityIraFaq,
  equityIraReferences,
} from "@/data/deepdive/self-directed-ira-private-equity-content";

export const metadata: Metadata = {
  title: "Private Equity & Business Investments With A Self-Directed IRA",
  description:
    "Discover how a self-directed IRA may hold private-company shares, private equity funds, and eligible business interests. Explore the rules and get started.",
};

export default function SelfDirectedIraPrivateEquityPage() {
  return (
    <>
      <ServiceHero
        eyebrow={equityIraHero.eyebrow}
        title={equityIraHero.title}
        goldLine={equityIraHero.goldLine}
        description={equityIraHero.description}
        whoItsFor={equityIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...equityIraRevelation} />

      <DeepDiveGallery {...equityIraGallery} columns={2} />

      <DeepDiveStoryList {...equityIraStory} />

      <DeepDiveComparisonTable {...equityIraComparison} />

      <DeepDiveGallery {...equityIraEntities} columns={3} />

      <DeepDiveGallery {...equityIraRisks} columns={3} />

      <ServiceFaq {...equityIraFaq} />

      <DeepDiveReferenceLibrary references={equityIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>The Stock Exchange Was Never <span className="text-r-gold">The Whole Investment Universe.</span></>}
        description="A self-directed IRA may open the door to qualifying investment possibilities beyond conventional publicly traded securities."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
