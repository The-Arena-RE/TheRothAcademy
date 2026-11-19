import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStageFlow } from "@/components/services/deepdive/DeepDiveStageFlow";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  rollovers401kHero,
  rollovers401kRevelation,
  rollovers401kGallery,
  rollovers401kStageFlow,
  rollovers401kFigures,
  rollovers401kStories,
  rollovers401kFaq,
  rollovers401kReferences,
} from "@/data/deepdive/self-directed-401k-rollovers-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) Rollovers",
  description:
    "Discover which retirement accounts may be eligible to roll into a self-directed 401(k), the difference between direct and indirect rollovers, and IRS rules.",
};

export default function SelfDirected401kRolloversPage() {
  return (
    <>
      <ServiceHero
        eyebrow={rollovers401kHero.eyebrow}
        title={rollovers401kHero.title}
        goldLine={rollovers401kHero.goldLine}
        description={rollovers401kHero.description}
        whoItsFor={rollovers401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...rollovers401kRevelation} />

      <DeepDiveGallery {...rollovers401kGallery} columns={3} />

      <DeepDiveStageFlow {...rollovers401kStageFlow} />

      <DeepDiveFigurePanel {...rollovers401kFigures} />

      <DeepDiveStoryList {...rollovers401kStories} />

      <ServiceFaq {...rollovers401kFaq} />

      <DeepDiveReferenceLibrary references={rollovers401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>More Investment Choices <span className="text-r-gold">For What You&apos;ve Built.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
