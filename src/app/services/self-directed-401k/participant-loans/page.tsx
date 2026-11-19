import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStageFlow } from "@/components/services/deepdive/DeepDiveStageFlow";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  participantLoans401kHero,
  participantLoans401kRevelation,
  participantLoans401kFlow,
  participantLoans401kFigures,
  participantLoans401kStories,
  participantLoans401kComparison,
  participantLoans401kFaq,
  participantLoans401kReferences,
} from "@/data/deepdive/self-directed-401k-participant-loans-content";

export const metadata: Metadata = {
  title: "Participant Loans With A Self-Directed 401(k)",
  description:
    "Discover how a qualifying self-directed 401(k) may let you borrow from your own vested balance -- a feature an IRA doesn't offer. Explore limits, examples, and IRS rules.",
};

export default function SelfDirected401kParticipantLoansPage() {
  return (
    <>
      <ServiceHero
        eyebrow={participantLoans401kHero.eyebrow}
        title={participantLoans401kHero.title}
        goldLine={participantLoans401kHero.goldLine}
        description={participantLoans401kHero.description}
        whoItsFor={participantLoans401kHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Self-Directed 401(k) Overview", href: "/services/self-directed-401k" }}
        imageSrc="/services/401k/hero.webp"
      />

      <DeepDiveSection {...participantLoans401kRevelation} />

      <DeepDiveStageFlow {...participantLoans401kFlow} />

      <DeepDiveFigurePanel {...participantLoans401kFigures} />

      <DeepDiveStoryList {...participantLoans401kStories} />

      <DeepDiveComparisonTable {...participantLoans401kComparison} />

      <ServiceFaq {...participantLoans401kFaq} />

      <DeepDiveReferenceLibrary references={participantLoans401kReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed 401(k) Overview"
        href="/services/self-directed-401k"
      />

      <ClosingStatement
        heading={<>A Feature Your <span className="text-r-gold">IRA Doesn&apos;t Have.</span></>}
        description="Explore whether a self-directed 401(k) fits your business, then start the setup process."
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
      />
    </>
  );
}
