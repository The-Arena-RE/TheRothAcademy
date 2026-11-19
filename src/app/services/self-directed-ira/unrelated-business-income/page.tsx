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
  ubtiIraHero,
  ubtiIraRevelation,
  ubtiIraTerms,
  ubtiIraIncomeTable,
  ubtiIraStory,
  ubtiIraDebtFinancing,
  ubtiIraBusinessInvestments,
  ubtiIraFaq,
  ubtiIraReferences,
} from "@/data/deepdive/self-directed-ira-unrelated-business-income-content";

export const metadata: Metadata = {
  title: "Unrelated Business Income Tax (UBTI) With A Self-Directed IRA",
  description:
    "Understand UBTI, UBIT, and UDFI — how certain business investments, partnerships, and debt-financed assets can generate taxable income inside a self-directed IRA.",
};

export default function SelfDirectedIraUnrelatedBusinessIncomePage() {
  return (
    <>
      <ServiceHero
        eyebrow={ubtiIraHero.eyebrow}
        title={ubtiIraHero.title}
        goldLine={ubtiIraHero.goldLine}
        description={ubtiIraHero.description}
        whoItsFor={ubtiIraHero.whoItsFor}
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Self-Directed IRA Overview", href: "/services/self-directed-ira" }}
        imageSrc="/services/ira/hero.webp"
      />

      <DeepDiveSection {...ubtiIraRevelation} />

      <DeepDiveGallery {...ubtiIraTerms} columns={3} />

      <DeepDiveComparisonTable {...ubtiIraIncomeTable} />

      <DeepDiveStoryList {...ubtiIraStory} />

      <DeepDiveSection {...ubtiIraDebtFinancing} />

      <DeepDiveGallery {...ubtiIraBusinessInvestments} columns={3} />

      <ServiceFaq {...ubtiIraFaq} />

      <DeepDiveReferenceLibrary references={ubtiIraReferences} />

      <ServiceCrossLink
        label="Keep Exploring"
        title="Self-Directed IRA Overview"
        href="/services/self-directed-ira"
      />

      <ClosingStatement
        heading={<>Extraordinary Investments. <span className="text-r-gold">Different Tax Considerations Worth Understanding.</span></>}
        description="Explore your account options and begin the appropriate self-directed IRA setup pathway."
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
      />
    </>
  );
}
