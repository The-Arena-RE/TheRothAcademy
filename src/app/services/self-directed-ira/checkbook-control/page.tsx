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
  checkbookIraHero,
  checkbookIraRevelation,
  checkbookIraMeaning,
  checkbookIraStory,
  checkbookIraComparison,
  checkbookIraBoundaries,
  checkbookIraFaq,
  checkbookIraReferences,
} from "@/data/deepdive/self-directed-ira-checkbook-control-content";

export const metadata: Metadata = {
  title: "Checkbook Control With A Self-Directed IRA",
  description:
    "Understand how an IRA-owned LLC structure works, what checkbook control actually means, and the prohibited-transaction rules that continue to apply.",
};

export default function SelfDirectedIraCheckbookControlPage() {
  return (
    <>
      <ServiceHero
        eyebrow={checkbookIraHero.eyebrow}
        title={checkbookIraHero.title}
        goldLine={checkbookIraHero.goldLine}
        description={checkbookIraHero.description}
        whoItsFor={checkbookIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...checkbookIraRevelation} />

      <DeepDiveSection {...checkbookIraMeaning} />

      <DeepDiveStoryList {...checkbookIraStory} />

      <DeepDiveComparisonTable {...checkbookIraComparison} />

      <DeepDiveGallery {...checkbookIraBoundaries} columns={3} />

      <ServiceFaq {...checkbookIraFaq} />

      <DeepDiveReferenceLibrary references={checkbookIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>A Retirement Account. An Investment Company. <span className="text-r-gold">A Different Way To Direct Investments.</span></>}
        description="Explore the appropriate IRA setup pathway and learn what additional structures may be available."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
