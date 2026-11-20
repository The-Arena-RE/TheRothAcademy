import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { Fenceline } from "@/components/learn-modules/Fenceline";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  workingVsOwning,
  samStory,
  fencelineIntro,
  eightyAcres,
  vacancyScenarios,
  leaseTypes,
  landBeneathLand,
  separateBusiness,
  separateExamples,
  incomeCategories,
  employeeProfiles,
  investCategories,
  mineralRights,
  rolloverExample,
  risks,
  retirementTransition,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/farmer-rancher-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For Farmers & Ranchers | Roth Academy",
  description:
    "Own a farm or ranch? Discover Self-Directed 401(k) investment possibilities, including farmland, rental income, eligibility, and important legal restrictions.",
  alternates: { canonical: "/learn/self-directed-401k/farmer-rancher" },
};

export default function FarmerRancherPage() {
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
        eyebrow={workingVsOwning.eyebrow}
        heading={workingVsOwning.heading}
        intro={workingVsOwning.intro}
        steps={workingVsOwning.items}
        variant="cards"
        note={workingVsOwning.note}
      />

      <DeepDiveStoryList eyebrow={samStory.eyebrow} heading={samStory.heading} stories={samStory.stories} />

      <Fenceline
        eyebrow={fencelineIntro.eyebrow}
        heading={fencelineIntro.heading}
        intro={fencelineIntro.intro}
        parcelA={fencelineIntro.parcelA}
        parcelB={fencelineIntro.parcelB}
        scenarios={fencelineIntro.scenarios}
        summaryRows={fencelineIntro.summaryRows}
        conclusion={fencelineIntro.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={eightyAcres.eyebrow}
        heading={eightyAcres.heading}
        intro={eightyAcres.intro}
        figures={eightyAcres.figures}
        disclaimer={eightyAcres.disclaimer}
      />

      <ServiceProcess
        eyebrow={vacancyScenarios.eyebrow}
        heading={vacancyScenarios.heading}
        steps={vacancyScenarios.items}
        variant="cards"
        note={vacancyScenarios.note}
      />

      <ServiceProcess
        eyebrow={leaseTypes.eyebrow}
        heading={leaseTypes.heading}
        intro={leaseTypes.intro}
        steps={leaseTypes.items}
        variant="cards"
        note={leaseTypes.note}
      />

      <ServiceProcess
        eyebrow={landBeneathLand.eyebrow}
        heading={landBeneathLand.heading}
        intro={landBeneathLand.intro}
        steps={landBeneathLand.items}
        columns={4}
        note={landBeneathLand.note}
      />

      <DeepDiveSection {...separateBusiness} tone="dark" />

      <ServiceProcess
        eyebrow={separateExamples.eyebrow}
        heading={separateExamples.heading}
        steps={separateExamples.items}
        variant="cards"
        note={separateExamples.note}
      />

      <ServiceProcess
        eyebrow={incomeCategories.eyebrow}
        heading={incomeCategories.heading}
        intro={incomeCategories.intro}
        steps={incomeCategories.items}
        columns={3}
        note={incomeCategories.note}
        linkLabel={incomeCategories.linkLabel}
        linkHref={incomeCategories.linkHref}
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
        eyebrow={investCategories.eyebrow}
        heading={investCategories.heading}
        intro={investCategories.intro}
        steps={investCategories.items}
        variant="cards"
        note={investCategories.note}
      />

      <ServiceProcess
        eyebrow={mineralRights.eyebrow}
        heading={mineralRights.heading}
        intro={mineralRights.intro}
        steps={mineralRights.items}
        columns={3}
        note={mineralRights.note}
      />

      <DeepDiveFigurePanel
        eyebrow={rolloverExample.eyebrow}
        heading={rolloverExample.heading}
        intro={rolloverExample.intro}
        figures={rolloverExample.figures}
        disclaimer={rolloverExample.disclaimer}
      />

      <ServiceProcess
        eyebrow={risks.eyebrow}
        heading={risks.heading}
        intro={risks.intro}
        steps={risks.items}
        columns={4}
        note={risks.note}
      />

      <DeepDiveSection {...retirementTransition} tone="panel" />

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
