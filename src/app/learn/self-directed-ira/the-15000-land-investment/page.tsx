import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DecisionStudio } from "@/components/learn-modules/DecisionStudio";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  jordanStory,
  lotProfile,
  parcelXRay,
  xrayReveal,
  realCostOfLot,
  threeEndings,
  whyLandDesirable,
  ownershipAndPersonalUse,
  taxTreatment,
  inspectionSheet,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-15000-land-investment-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "The $15,000 Land Investment | Self-Directed IRA | Roth Academy",
  description:
    "Explore how a Self-Directed IRA may purchase qualifying vacant land, the real costs behind a low asking price, three possible outcomes, and the ownership rules that apply.",
  alternates: { canonical: "/learn/self-directed-ira/the-15000-land-investment" },
};

export default function The15000LandInvestmentPage() {
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

      <DeepDiveStoryList eyebrow={jordanStory.eyebrow} heading={jordanStory.heading} stories={jordanStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={lotProfile.eyebrow}
          heading={lotProfile.heading}
          intro={lotProfile.intro}
          figures={lotProfile.figures}
          disclaimer={lotProfile.disclaimer}
        />
      </div>

      <DecisionStudio
        eyebrow={parcelXRay.eyebrow}
        heading={parcelXRay.heading}
        intro={parcelXRay.intro}
        decisions={parcelXRay.decisions}
        note={parcelXRay.note}
      />

      <DeepDiveSection {...xrayReveal} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={realCostOfLot.eyebrow}
          heading={realCostOfLot.heading}
          intro={realCostOfLot.intro}
          figures={realCostOfLot.figures}
          disclaimer={realCostOfLot.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={threeEndings.eyebrow}
        heading={threeEndings.heading}
        intro={threeEndings.intro}
        scenarios={threeEndings.scenarios}
        tableColumns={threeEndings.tableColumns}
        comparisonNote={threeEndings.comparisonNote}
        conclusion={threeEndings.conclusion}
      />

      <ServiceProcess
        eyebrow={whyLandDesirable.eyebrow}
        heading={whyLandDesirable.heading}
        steps={whyLandDesirable.steps}
        variant="cards"
        note={whyLandDesirable.note}
      />

      <DeepDiveSection {...ownershipAndPersonalUse} tone="dark" />

      <DeepDiveSection {...taxTreatment} tone="panel" />

      <ServiceProcess
        eyebrow={inspectionSheet.eyebrow}
        heading={inspectionSheet.heading}
        steps={inspectionSheet.steps}
        variant="list"
        columns={3}
        note={inspectionSheet.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Vacant Land Investor's Self-Directed IRA"
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
