import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  prohibitedTransactions401kHero,
  prohibitedTransactions401kRevelation,
  prohibitedTransactions401kGallery,
  prohibitedTransactions401kStories,
  prohibitedTransactions401kComparison,
  prohibitedTransactions401kFigures,
  prohibitedTransactions401kFaq,
  prohibitedTransactions401kReferences,
} from "@/data/deepdive/self-directed-401k-prohibited-transactions-content";

export const metadata: Metadata = {
  title: "Prohibited Transactions With A Self-Directed 401(k)",
  description:
    "Understand who counts as a disqualified person, which transactions IRC Section 4975 restricts, and the consequences of a prohibited transaction in a self-directed 401(k).",
};

export default function SelfDirected401kProhibitedTransactionsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={prohibitedTransactions401kHero.eyebrow}
        title={prohibitedTransactions401kHero.title}
        goldLine={prohibitedTransactions401kHero.goldLine}
        description={prohibitedTransactions401kHero.description}
        whoItsFor={prohibitedTransactions401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...prohibitedTransactions401kRevelation} />

      <DeepDiveGallery {...prohibitedTransactions401kGallery} columns={3} />

      <DeepDiveStoryList {...prohibitedTransactions401kStories} />

      <DeepDiveComparisonTable {...prohibitedTransactions401kComparison} />

      <DeepDiveFigurePanel {...prohibitedTransactions401kFigures} />

      <ServiceFaq {...prohibitedTransactions401kFaq} />

      <DeepDiveReferenceLibrary references={prohibitedTransactions401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Invest With <span className="text-r-gold">Informed Confidence.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
