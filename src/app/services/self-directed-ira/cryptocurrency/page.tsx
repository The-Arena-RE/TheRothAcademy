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
  cryptoIraHero,
  cryptoIraRevelation,
  cryptoIraGallery,
  cryptoIraStory,
  cryptoIraComparison,
  cryptoIraCustody,
  cryptoIraRisks,
  cryptoIraFaq,
  cryptoIraReferences,
} from "@/data/deepdive/self-directed-ira-cryptocurrency-content";

export const metadata: Metadata = {
  title: "Cryptocurrency & Digital Assets With A Self-Directed IRA",
  description:
    "Discover how a self-directed IRA may invest in Bitcoin, ether, and other qualifying digital assets. Explore crypto IRA rules, custody, risks, and setup.",
};

export default function SelfDirectedIraCryptocurrencyPage() {
  return (
    <>
      <ServiceHero
        eyebrow={cryptoIraHero.eyebrow}
        title={cryptoIraHero.title}
        goldLine={cryptoIraHero.goldLine}
        description={cryptoIraHero.description}
        whoItsFor={cryptoIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...cryptoIraRevelation} />

      <DeepDiveGallery {...cryptoIraGallery} columns={2} />

      <DeepDiveStoryList {...cryptoIraStory} />

      <DeepDiveComparisonTable {...cryptoIraComparison} />

      <DeepDiveSection {...cryptoIraCustody} />

      <DeepDiveGallery {...cryptoIraRisks} columns={3} />

      <ServiceFaq {...cryptoIraFaq} />

      <DeepDiveReferenceLibrary references={cryptoIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>The Future Of Investing May Look Different. <span className="text-r-gold">Your IRA Has More Possibilities Than You Think.</span></>}
        description="Explore how an appropriately structured self-directed IRA may provide access to investment categories beyond a conventional brokerage menu."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
