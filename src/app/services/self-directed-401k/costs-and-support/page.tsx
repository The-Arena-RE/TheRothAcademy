import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import { service401kPricing } from "@/data/self-directed-401k-content";
import {
  costsSupport401kHero,
  costsSupport401kRevelation,
  costsSupport401kDeliverables,
  costsSupport401kCategories,
  costsSupport401kComparison,
  costsSupport401kFaq,
  costsSupport401kReferences,
} from "@/data/deepdive/self-directed-401k-costs-support-content";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) Costs & Support",
  description:
    "Understand what a self-directed 401(k) establishment service includes, how the fee works, and what ongoing support and third-party costs to expect.",
};

export default function SelfDirected401kCostsSupportPage() {
  return (
    <>
      <ServiceHero
        eyebrow={costsSupport401kHero.eyebrow}
        title={costsSupport401kHero.title}
        goldLine={costsSupport401kHero.goldLine}
        description={costsSupport401kHero.description}
        whoItsFor={costsSupport401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...costsSupport401kRevelation} />

      <DeepDiveGallery {...costsSupport401kDeliverables} />

      <ServicePricing
        eyebrow={service401kPricing.eyebrow}
        heading={service401kPricing.heading}
        intro={service401kPricing.intro}
        included={service401kPricing.included}
        price={service401kPricing.price}
        note={service401kPricing.note}
      />

      <DeepDiveGallery {...costsSupport401kCategories} />

      <DeepDiveComparisonTable {...costsSupport401kComparison} />

      <ServiceFaq {...costsSupport401kFaq} />

      <DeepDiveReferenceLibrary references={costsSupport401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>The Foundation For <span className="text-r-gold">What&apos;s Possible.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
