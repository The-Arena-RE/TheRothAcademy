import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  crypto401kHero,
  crypto401kRevelation,
  crypto401kGallery,
  crypto401kComparison,
  crypto401kFaq,
  crypto401kReferences,
} from "@/data/deepdive/self-directed-401k-cryptocurrency-content";

export const metadata: Metadata = {
  title: "Cryptocurrency & Digital Assets With A Self-Directed 401(k)",
  description:
    "Explore how a self-directed 401(k) may permit certain digital-asset investments, the custody and security considerations involved, and the risks to understand first.",
};

export default function SelfDirected401kCryptocurrencyPage() {
  return (
    <>
      <ServiceHero
        eyebrow={crypto401kHero.eyebrow}
        title={crypto401kHero.title}
        goldLine={crypto401kHero.goldLine}
        description={crypto401kHero.description}
        whoItsFor={crypto401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...crypto401kRevelation} />

      <DeepDiveGallery {...crypto401kGallery} />

      <DeepDiveComparisonTable {...crypto401kComparison} />

      <ServiceFaq {...crypto401kFaq} />

      <DeepDiveReferenceLibrary references={crypto401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>Explore <span className="text-r-gold">Digital Assets</span> Responsibly.</>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
