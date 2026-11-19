import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  privateBusiness401kHero,
  privateBusiness401kRevelation,
  privateBusiness401kGallery,
  privateBusiness401kStories,
  privateBusiness401kComparison,
  privateBusiness401kFaq,
  privateBusiness401kReferences,
} from "@/data/deepdive/self-directed-401k-private-business-content";

export const metadata: Metadata = {
  title: "Private Equity & Business Investments With A Self-Directed 401(k)",
  description:
    "Discover how an eligible self-directed 401(k) may invest in private businesses, startups, and private equity funds. Explore examples, risks, and IRS rules.",
};

export default function SelfDirected401kPrivateBusinessPage() {
  return (
    <>
      <ServiceHero
        eyebrow={privateBusiness401kHero.eyebrow}
        title={privateBusiness401kHero.title}
        goldLine={privateBusiness401kHero.goldLine}
        description={privateBusiness401kHero.description}
        whoItsFor={privateBusiness401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...privateBusiness401kRevelation} />

      <DeepDiveGallery {...privateBusiness401kGallery} />

      <DeepDiveStoryList {...privateBusiness401kStories} />

      <DeepDiveComparisonTable {...privateBusiness401kComparison} />

      <ServiceFaq {...privateBusiness401kFaq} />

      <DeepDiveReferenceLibrary references={privateBusiness401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Your Retirement Plan May <span className="text-r-gold">Own The Business.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
