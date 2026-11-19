import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveStageFlow } from "@/components/services/deepdive/DeepDiveStageFlow";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  howItWorks401kHero,
  howItWorks401kRevelation,
  howItWorks401kStageFlow,
  howItWorks401kInvestmentGallery,
  howItWorks401kStories,
  howItWorks401kCashFlow,
  howItWorks401kRestrictions,
  howItWorks401kStructureNotes,
  howItWorks401kRightFit,
  howItWorks401kAlternative,
  howItWorks401kFaq,
  howItWorks401kReferences,
} from "@/data/deepdive/self-directed-401k-how-it-works-content";

export const metadata: Metadata = {
  title: "How A Self-Directed 401(k) Works",
  description:
    "Understand how a self-directed 401(k) actually works — business eligibility, plan establishment, funding, qualifying investments, ownership rules, and ongoing responsibilities.",
};

export default function SelfDirected401kHowItWorksPage() {
  return (
    <>
      <ServiceHero
        eyebrow={howItWorks401kHero.eyebrow}
        title={howItWorks401kHero.title}
        goldLine={howItWorks401kHero.goldLine}
        description={howItWorks401kHero.description}
        whoItsFor={howItWorks401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...howItWorks401kRevelation} />

      <DeepDiveStageFlow {...howItWorks401kStageFlow} />

      <DeepDiveGallery {...howItWorks401kInvestmentGallery} columns={3} />

      <DeepDiveStoryList {...howItWorks401kStories} />

      <DeepDiveGallery {...howItWorks401kCashFlow} columns={2} />

      <DeepDiveGallery {...howItWorks401kRestrictions} columns={3} />

      <DeepDiveGallery {...howItWorks401kStructureNotes} columns={3} />

      <DeepDiveSection {...howItWorks401kRightFit} />

      <DeepDiveSection {...howItWorks401kAlternative} />

      <ServiceFaq {...howItWorks401kFaq} />

      <DeepDiveReferenceLibrary references={howItWorks401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>The First Step Is Clear. <span className="text-r-gold">The Possibilities Come Next.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
