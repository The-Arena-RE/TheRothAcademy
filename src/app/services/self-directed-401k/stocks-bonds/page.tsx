import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  stocksBonds401kHero,
  stocksBonds401kRevelation,
  stocksBonds401kGallery,
  stocksBonds401kFaq,
  stocksBonds401kReferences,
} from "@/data/deepdive/self-directed-401k-stocks-bonds-content";

export const metadata: Metadata = {
  title: "Stocks, Bonds & Traditional Investments With A Self-Directed 401(k)",
  description:
    "Self-direction doesn't mean giving up traditional investing. See how stocks, bonds, and funds can coexist with alternative investments in a self-directed 401(k).",
};

export default function SelfDirected401kStocksBondsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={stocksBonds401kHero.eyebrow}
        title={stocksBonds401kHero.title}
        goldLine={stocksBonds401kHero.goldLine}
        description={stocksBonds401kHero.description}
        whoItsFor={stocksBonds401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...stocksBonds401kRevelation} />

      <DeepDiveGallery {...stocksBonds401kGallery} />

      <ServiceFaq {...stocksBonds401kFaq} />

      <DeepDiveReferenceLibrary references={stocksBonds401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>More Choices.<span className="text-r-gold"> Not Fewer.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
