import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveGallery } from "@/components/services/deepdive/DeepDiveGallery";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { planDestinations } from "@/data/site-config";
import {
  custodiansIraHero,
  custodiansIraRevelation,
  custodiansIraRoles,
  custodiansIraVsAdviser,
  custodiansIraStory,
  custodiansIraVerify,
  custodiansIraCapabilities,
  custodiansIraVerification,
  custodiansIraFaq,
  custodiansIraReferences,
} from "@/data/deepdive/self-directed-ira-custodians-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA Custodians",
  description:
    "Understand what an IRA custodian actually does, how to verify one, and why the investments you want to explore need an IRA arrangement built to hold them.",
};

export default function SelfDirectedIraCustodiansPage() {
  return (
    <>
      <ServiceHero
        eyebrow={custodiansIraHero.eyebrow}
        title={custodiansIraHero.title}
        goldLine={custodiansIraHero.goldLine}
        description={custodiansIraHero.description}
        whoItsFor={custodiansIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...custodiansIraRevelation} />

      <DeepDiveGallery {...custodiansIraRoles} columns={3} />

      <DeepDiveComparisonTable {...custodiansIraVsAdviser} />

      <DeepDiveStoryList {...custodiansIraStory} />

      <DeepDiveGallery {...custodiansIraVerify} columns={2} />

      <DeepDiveGallery {...custodiansIraCapabilities} columns={3} />

      <DeepDiveSection {...custodiansIraVerification} />

      <ServiceFaq {...custodiansIraFaq} />

      <DeepDiveReferenceLibrary references={custodiansIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>The Investments You Imagine <span className="text-r-gold">Need An IRA Built To Hold Them.</span></>}
        description="Explore your retirement-account options and the setup pathway available to you."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
