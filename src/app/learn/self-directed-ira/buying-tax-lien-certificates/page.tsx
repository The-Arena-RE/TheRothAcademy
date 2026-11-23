import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  twoThings,
  whyCountySells,
  danielStory,
  certificateReveal,
  reverseAuction,
  eightPercentMeaning,
  redemptionClock,
  zeroPercentSurprise,
  propertyValueMyth,
  redemptionAndTaxDeedRealities,
  contactRestrictions,
  floridaVsTexas,
  whyFascinating,
  feesAndOwnership,
  investmentChecklist,
  taxTreatmentAndLiquidity,
  certificateVsPrivateLoan,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/buying-tax-lien-certificates-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Tax Lien Certificates in a Self-Directed IRA | Roth Academy",
  description:
    "Learn how a Self-Directed IRA may buy tax lien certificates, how Florida interest and redemption rules work, and what risks investors need to understand.",
  alternates: { canonical: "/learn/self-directed-ira/buying-tax-lien-certificates" },
};

export default function BuyingTaxLienCertificatesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        goldLine={hero.goldLine}
        description={hero.description}
        whoItsFor={hero.whoItsFor}
        primaryCta={hero.primaryCta}
        titleScale="compact"
      />

      <DeepDiveComparisonTable
        eyebrow={twoThings.eyebrow}
        heading={twoThings.heading}
        leftLabel={twoThings.leftLabel}
        rightLabel={twoThings.rightLabel}
        rows={twoThings.rows}
        footnote={twoThings.footnote}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...whyCountySells} tone="dark" />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={danielStory.eyebrow} heading={danielStory.heading} stories={danielStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={certificateReveal.eyebrow}
          heading={certificateReveal.heading}
          intro={certificateReveal.intro}
          figures={certificateReveal.figures}
          disclaimer={certificateReveal.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={reverseAuction.eyebrow}
        heading={reverseAuction.heading}
        steps={reverseAuction.steps}
        variant="cards"
        note={reverseAuction.note}
      />

      <DeepDiveSection {...eightPercentMeaning} tone="panel" />

      <HarvestScenarios
        eyebrow={redemptionClock.eyebrow}
        heading={redemptionClock.heading}
        intro={redemptionClock.intro}
        scenarios={redemptionClock.scenarios}
        tableColumns={redemptionClock.tableColumns}
        comparisonNote={redemptionClock.comparisonNote}
        conclusion={redemptionClock.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={zeroPercentSurprise.eyebrow}
        heading={zeroPercentSurprise.heading}
        intro={zeroPercentSurprise.intro}
        figures={zeroPercentSurprise.figures}
        disclaimer={zeroPercentSurprise.disclaimer}
      />

      <div className="border-t border-r-line">
        <DeepDiveSection {...propertyValueMyth} tone="dark" />
      </div>

      <DeepDiveSection {...redemptionAndTaxDeedRealities} tone="panel" />

      <DeepDiveSection {...contactRestrictions} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={floridaVsTexas.eyebrow}
          heading={floridaVsTexas.heading}
          leftLabel={floridaVsTexas.leftLabel}
          rightLabel={floridaVsTexas.rightLabel}
          rows={floridaVsTexas.rows}
          footnote={floridaVsTexas.footnote}
        />
      </div>

      <ServiceProcess
        eyebrow={whyFascinating.eyebrow}
        heading={whyFascinating.heading}
        steps={whyFascinating.steps}
        variant="cards"
        note={whyFascinating.note}
      />

      <DeepDiveSection {...feesAndOwnership} tone="dark" />

      <ServiceProcess
        eyebrow={investmentChecklist.eyebrow}
        heading={investmentChecklist.heading}
        steps={investmentChecklist.steps}
        variant="list"
        columns={3}
        note={investmentChecklist.note}
      />

      <DeepDiveSection {...taxTreatmentAndLiquidity} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveComparisonTable
          eyebrow={certificateVsPrivateLoan.eyebrow}
          heading={certificateVsPrivateLoan.heading}
          leftLabel={certificateVsPrivateLoan.leftLabel}
          rightLabel={certificateVsPrivateLoan.rightLabel}
          rows={certificateVsPrivateLoan.rows}
          footnote={certificateVsPrivateLoan.footnote}
        />
      </div>

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Tax Lien Certificate Investor's Self-Directed IRA"
        heading={
          <>
            {finalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{finalConversion.heading[1]}</span>
          </>
        }
        description={finalConversion.description}
        primaryLabel="Start My Self-Directed IRA"
        primaryHref={planDestinations.openIra}
        secondaryLabel="Explore The Self-Directed IRA"
        secondaryHref="/services/self-directed-ira"
        signature={finalConversion.signature}
      />
    </>
  );
}
