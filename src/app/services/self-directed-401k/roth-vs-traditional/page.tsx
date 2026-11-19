import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  rothVsTraditional401kHero,
  rothVsTraditional401kRevelation,
  rothVsTraditional401kComparison,
  rothVsTraditional401kStories,
  rothVsTraditional401kFigures,
  rothVsTraditional401kFaq,
  rothVsTraditional401kReferences,
} from "@/data/deepdive/self-directed-401k-roth-vs-traditional-content";

export const metadata: Metadata = {
  title: "Roth Vs. Traditional Self-Directed 401(k)",
  description:
    "Compare Traditional and designated Roth tax treatment within a self-directed 401(k). Explore the timing differences, examples, and IRS rules for each approach.",
};

export default function SelfDirected401kRothVsTraditionalPage() {
  return (
    <>
      <ServiceHero
        eyebrow={rothVsTraditional401kHero.eyebrow}
        title={rothVsTraditional401kHero.title}
        goldLine={rothVsTraditional401kHero.goldLine}
        description={rothVsTraditional401kHero.description}
        whoItsFor={rothVsTraditional401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...rothVsTraditional401kRevelation} />

      <DeepDiveComparisonTable {...rothVsTraditional401kComparison} />

      <DeepDiveStoryList {...rothVsTraditional401kStories} />

      <DeepDiveFigurePanel {...rothVsTraditional401kFigures} />

      <ServiceFaq {...rothVsTraditional401kFaq} />

      <DeepDiveReferenceLibrary references={rothVsTraditional401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Two Tax Paths. <span className="text-r-gold">One Retirement Plan.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
