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
  prohibitedIraHero,
  prohibitedIraRevelation,
  prohibitedIraCategories,
  prohibitedIraDisqualified,
  prohibitedIraScenarios,
  prohibitedIraCases,
  prohibitedIraFaq,
  prohibitedIraReferences,
} from "@/data/deepdive/self-directed-ira-prohibited-transactions-content";

export const metadata: Metadata = {
  title: "Self-Directed IRA Rules & Prohibited Transactions",
  description:
    "Understand the prohibited-transaction rules that apply to self-directed IRAs: disqualified persons, personal use, self-dealing, and the real legal consequences.",
};

export default function SelfDirectedIraProhibitedTransactionsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={prohibitedIraHero.eyebrow}
        title={prohibitedIraHero.title}
        goldLine={prohibitedIraHero.goldLine}
        description={prohibitedIraHero.description}
        whoItsFor={prohibitedIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...prohibitedIraRevelation} />

      <DeepDiveGallery {...prohibitedIraCategories} columns={3} />

      <DeepDiveSection {...prohibitedIraDisqualified} />

      <DeepDiveGallery {...prohibitedIraScenarios} columns={2} />

      <DeepDiveGallery {...prohibitedIraCases} columns={3} />

      <ServiceFaq {...prohibitedIraFaq} />

      <DeepDiveReferenceLibrary references={prohibitedIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Your IRA May Invest Beyond The Ordinary Menu. <span className="text-r-gold">Its Assets Must Remain Separate From Your Personal Interests.</span></>}
        description="Explore your account options and begin the appropriate self-directed IRA setup process."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
