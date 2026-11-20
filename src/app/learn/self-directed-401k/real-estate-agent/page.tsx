import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ClosingTable } from "@/components/learn-modules/ClosingTable";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  sellingVsOwning,
  averyStory,
  commissionExample,
  closingTableIntro,
  investmentLens,
  commissionConflict,
  sellToPlan,
  investmentOpportunities,
  notEveryDeal,
  financialOpportunity,
  whoQualifies,
  contributions,
  rolloverExample,
  rulesForAgents,
  futureOutlook,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/real-estate-agent-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For Real Estate Agents | Roth Academy",
  description:
    "Real estate agent or broker? Learn how a Self-Directed 401(k) may allow qualifying property investments, who can qualify, and which transactions are restricted.",
  alternates: { canonical: "/learn/self-directed-401k/real-estate-agent" },
};

export default function RealEstateAgentPage() {
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

      <ServiceProcess
        eyebrow={sellingVsOwning.eyebrow}
        heading={sellingVsOwning.heading}
        intro={sellingVsOwning.intro}
        steps={sellingVsOwning.items}
        variant="cards"
        note={sellingVsOwning.note}
      />

      <DeepDiveStoryList eyebrow={averyStory.eyebrow} heading={averyStory.heading} stories={averyStory.stories} />
      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={commissionExample.eyebrow}
          heading={commissionExample.heading}
          intro={commissionExample.intro}
          figures={commissionExample.figures}
          disclaimer={commissionExample.disclaimer}
        />
      </div>

      <ClosingTable
        eyebrow={closingTableIntro.eyebrow}
        heading={closingTableIntro.heading}
        intro={closingTableIntro.intro}
        propertyPrice={closingTableIntro.propertyPrice}
        modes={closingTableIntro.modes}
        comparisonRows={closingTableIntro.comparisonRows}
        finalStatement={closingTableIntro.finalStatement}
      />

      <ServiceProcess
        eyebrow={investmentLens.eyebrow}
        heading={investmentLens.heading}
        intro={investmentLens.intro}
        steps={investmentLens.items}
        columns={4}
        note={investmentLens.note}
      />

      <ServiceProcess
        eyebrow={commissionConflict.eyebrow}
        heading={commissionConflict.heading}
        intro={commissionConflict.intro}
        steps={commissionConflict.items}
        variant="cards"
        note={commissionConflict.note}
      />

      <DeepDiveSection {...sellToPlan} tone="dark" />

      <ServiceProcess
        eyebrow={investmentOpportunities.eyebrow}
        heading={investmentOpportunities.heading}
        intro={investmentOpportunities.intro}
        steps={investmentOpportunities.items}
        variant="cards"
        note={investmentOpportunities.note}
      />

      <DeepDiveSection {...notEveryDeal} tone="dark" />

      <div className="border-b border-r-line">
        <DeepDiveSection {...financialOpportunity} tone="panel" />
      </div>

      <ServiceProcess
        eyebrow={whoQualifies.eyebrow}
        heading={whoQualifies.heading}
        intro={whoQualifies.intro}
        steps={whoQualifies.items}
        columns={4}
        note={whoQualifies.note}
      />

      <ServiceProcess
        eyebrow={contributions.eyebrow}
        heading={contributions.heading}
        intro={contributions.intro}
        steps={contributions.items}
        columns={4}
        note={contributions.note}
        linkLabel={contributions.linkLabel}
        linkHref={contributions.linkHref}
      />

      <DeepDiveFigurePanel
        eyebrow={rolloverExample.eyebrow}
        heading={rolloverExample.heading}
        intro={rolloverExample.intro}
        figures={rolloverExample.figures}
        disclaimer={rolloverExample.disclaimer}
      />

      <ServiceProcess
        eyebrow={rulesForAgents.eyebrow}
        heading={rulesForAgents.heading}
        intro={rulesForAgents.intro}
        steps={rulesForAgents.items}
        variant="cards"
        note={rulesForAgents.note}
      />

      <DeepDiveSection {...futureOutlook} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Your Next Chapter"
        heading={
          <>
            {finalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{finalConversion.heading[1]}</span>
          </>
        }
        description={finalConversion.description}
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Explore The Self-Directed 401(k)"
        secondaryHref="/services/self-directed-401k"
        signature={finalConversion.signature}
      />
    </>
  );
}
