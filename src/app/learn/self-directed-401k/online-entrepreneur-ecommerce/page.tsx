import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { SecondDashboard } from "@/components/learn-modules/SecondDashboard";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  businessComponents,
  taylorStory,
  businessSnapshot,
  secondDashboardIntro,
  twoWorlds,
  platformRisk,
  loanExample,
  taxTreatment,
  threeDistinctions,
  employeeProfiles,
  marketplaceDistinction,
  rolloverExample,
  neverConfuse,
  biggerOpportunity,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/online-entrepreneur-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For E-Commerce Owners | Roth Academy",
  description:
    "Own a Shopify, Amazon, or other online store? Discover Self-Directed 401(k) eligibility, alternative investment possibilities, and essential rules.",
  alternates: { canonical: "/learn/self-directed-401k/online-entrepreneur-ecommerce" },
};

export default function OnlineEntrepreneurPage() {
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
        eyebrow={businessComponents.eyebrow}
        heading={businessComponents.heading}
        intro={businessComponents.intro}
        steps={businessComponents.items}
        columns={4}
        note={businessComponents.note}
      />

      <DeepDiveStoryList eyebrow={taylorStory.eyebrow} heading={taylorStory.heading} stories={taylorStory.stories} />
      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={businessSnapshot.eyebrow}
          heading={businessSnapshot.heading}
          figures={businessSnapshot.figures}
          disclaimer={businessSnapshot.disclaimer}
        />
      </div>

      <SecondDashboard
        eyebrow={secondDashboardIntro.eyebrow}
        heading={secondDashboardIntro.heading}
        intro={secondDashboardIntro.intro}
        envA={secondDashboardIntro.envA}
        envB={secondDashboardIntro.envB}
        decisions={secondDashboardIntro.decisions}
        revelation={secondDashboardIntro.revelation}
        conclusion={secondDashboardIntro.conclusion}
      />

      <ServiceProcess
        eyebrow={twoWorlds.eyebrow}
        heading={twoWorlds.heading}
        steps={twoWorlds.items}
        variant="cards"
        note={twoWorlds.note}
      />

      <ServiceProcess
        eyebrow={platformRisk.eyebrow}
        heading={platformRisk.heading}
        steps={platformRisk.items}
        variant="cards"
        note={platformRisk.note}
      />

      <DeepDiveFigurePanel
        eyebrow={loanExample.eyebrow}
        heading={loanExample.heading}
        intro={loanExample.intro}
        figures={loanExample.figures}
        disclaimer={loanExample.disclaimer}
      />

      <ServiceProcess
        eyebrow={taxTreatment.eyebrow}
        heading={taxTreatment.heading}
        intro={taxTreatment.intro}
        steps={taxTreatment.items}
        variant="cards"
        note={taxTreatment.note}
      />

      <ServiceProcess
        eyebrow={threeDistinctions.eyebrow}
        heading={threeDistinctions.heading}
        intro={threeDistinctions.intro}
        steps={threeDistinctions.items}
        columns={3}
        note={threeDistinctions.note}
        linkLabel={threeDistinctions.linkLabel}
        linkHref={threeDistinctions.linkHref}
      />

      <ServiceProcess
        eyebrow={employeeProfiles.eyebrow}
        heading={employeeProfiles.heading}
        intro={employeeProfiles.intro}
        steps={employeeProfiles.items}
        columns={4}
        note={employeeProfiles.note}
      />

      <ServiceProcess
        eyebrow={marketplaceDistinction.eyebrow}
        heading={marketplaceDistinction.heading}
        steps={marketplaceDistinction.items}
        variant="cards"
        note={marketplaceDistinction.note}
      />

      <DeepDiveFigurePanel
        eyebrow={rolloverExample.eyebrow}
        heading={rolloverExample.heading}
        intro={rolloverExample.intro}
        figures={rolloverExample.figures}
        disclaimer={rolloverExample.disclaimer}
      />

      <ServiceProcess
        eyebrow={neverConfuse.eyebrow}
        heading={neverConfuse.heading}
        intro={neverConfuse.intro}
        steps={neverConfuse.items}
        variant="cards"
        note={neverConfuse.note}
      />

      <DeepDiveSection {...biggerOpportunity} tone="panel" />

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
