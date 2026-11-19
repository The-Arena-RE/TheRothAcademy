import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  vsIra401kHero,
  vsIra401kRevelation,
  vsIra401kComparison,
  vsIra401kBigDifferences,
  vsIra401kContributionFigures,
  vsIra401kStories,
  vsIra401kFinancing,
  vsIra401kInvestmentGallery,
  vsIra401kBothSection,
  vsIra401kFaq,
  vsIra401kReferences,
} from "@/data/deepdive/self-directed-401k-vs-self-directed-ira-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) vs. Self-Directed IRA",
  description:
    "Compare a self-directed 401(k) and a self-directed IRA — business eligibility, contribution limits, participant loans, transaction control, real estate financing, and reporting.",
};

export default function SelfDirected401kVsSelfDirectedIraPage() {
  return (
    <>
      <ServiceHero
        eyebrow={vsIra401kHero.eyebrow}
        title={vsIra401kHero.title}
        goldLine={vsIra401kHero.goldLine}
        description={vsIra401kHero.description}
        whoItsFor={vsIra401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...vsIra401kRevelation} />

      <DeepDiveComparisonTable {...vsIra401kComparison} />

      <DeepDiveGallery {...vsIra401kBigDifferences} columns={2} />

      <DeepDiveFigurePanel {...vsIra401kContributionFigures} />

      <DeepDiveStoryList {...vsIra401kStories} />

      <DeepDiveSection {...vsIra401kFinancing} />

      <DeepDiveGallery {...vsIra401kInvestmentGallery} columns={3} />

      <DeepDiveSection {...vsIra401kBothSection} />

      <ServiceFaq {...vsIra401kFaq} />

      <DeepDiveReferenceLibrary references={vsIra401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Two Structures. <span className="text-r-gold">One Right Choice For You.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
