import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CollectionShowcase } from "@/components/learn/CollectionShowcase";
import { DiscoverySection } from "@/components/learn/DiscoverySection";
import { LearnDirectory } from "@/components/learn/LearnDirectory";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { curriculum401k, curriculumIra } from "@/data/learn-curriculum";
import {
  learnHero,
  learnCollections,
  learnFinalSection,
  learnSupportBanner,
} from "@/data/learn-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA & Solo 401(k) Learning Library",
  description:
    "Explore free self-directed IRA and Solo 401(k) lessons, investment examples, real estate opportunities, private lending, and more. Simple explanations for every investor.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  const collections = [
    { ...learnCollections[0], moduleCount: curriculum401k.length },
    { ...learnCollections[1], moduleCount: curriculumIra.length },
  ];

  return (
    <>
      <ServiceHero
        eyebrow={learnHero.eyebrow}
        title={learnHero.title}
        goldLine={learnHero.goldLine}
        description={learnHero.description}
        imageSrc="/learn/hero.webp"
      />

      <CollectionShowcase collections={collections} />

      <DiscoverySection />

      <LearnDirectory />

      <SupportBanner
        heading={learnSupportBanner.heading}
        description={learnSupportBanner.description}
        cta={learnSupportBanner.cta}
      />

      <ClosingStatement
        eyebrow="Keep Exploring"
        heading={
          <>
            {learnFinalSection.heading[0]}
            <br />
            <span className="text-r-gold">{learnFinalSection.heading[1]}</span>
          </>
        }
        description={learnFinalSection.description}
        primaryLabel="Explore the 401(k) Library"
        primaryHref="/learn/self-directed-401k"
        secondaryLabel="Explore the IRA Library"
        secondaryHref="/learn/self-directed-ira"
        secondaryStyle="button"
      />
    </>
  );
}
