import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { InvestmentGrandRounds } from "@/components/learn-modules/InvestmentGrandRounds";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  twoPlans,
  shahStory,
  businessSnapshot,
  contributionDistinction,
  evidenceDiscipline,
  grandRoundsIntro,
  officeBuildingExample,
  rentScenarios,
  notYourTenant,
  healthcareConflict,
  threeQuestions,
  otherInvestments,
  whoQualifies,
  consultingIncome,
  relatedBusinesses,
  rolloverExample,
  taxQuestion,
  patientsNotOpportunities,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/doctor-side-business-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For Doctors With Side Businesses | Roth Academy",
  description:
    "Physician with consulting or other side-business income? Explore Self-Directed 401(k) eligibility, alternative investments, and important contribution rules.",
  alternates: { canonical: "/learn/self-directed-401k/doctor-side-business" },
};

export default function DoctorSideBusinessPage() {
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
        eyebrow={twoPlans.eyebrow}
        heading={twoPlans.heading}
        intro={twoPlans.intro}
        steps={twoPlans.items}
        variant="cards"
        note={twoPlans.note}
      />

      <DeepDiveStoryList eyebrow={shahStory.eyebrow} heading={shahStory.heading} stories={shahStory.stories} />
      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={businessSnapshot.eyebrow}
          heading={businessSnapshot.heading}
          figures={businessSnapshot.figures}
          disclaimer={businessSnapshot.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={contributionDistinction.eyebrow}
        heading={contributionDistinction.heading}
        steps={contributionDistinction.items}
        variant="cards"
        note={contributionDistinction.note}
      />

      <DeepDiveSection {...evidenceDiscipline} tone="dark" />

      <InvestmentGrandRounds
        eyebrow={grandRoundsIntro.eyebrow}
        heading={grandRoundsIntro.heading}
        intro={grandRoundsIntro.intro}
        cases={grandRoundsIntro.cases}
        summaryRows={grandRoundsIntro.summaryRows}
        conclusion={grandRoundsIntro.conclusion}
      />

      <DeepDiveFigurePanel
        eyebrow={officeBuildingExample.eyebrow}
        heading={officeBuildingExample.heading}
        intro={officeBuildingExample.intro}
        figures={officeBuildingExample.figures}
        disclaimer={officeBuildingExample.disclaimer}
      />

      <ServiceProcess
        eyebrow={rentScenarios.eyebrow}
        heading={rentScenarios.heading}
        steps={rentScenarios.items}
        variant="cards"
        note={rentScenarios.note}
      />

      <DeepDiveSection {...notYourTenant} tone="dark" />

      <div className="border-b border-r-line">
        <DeepDiveSection {...healthcareConflict} tone="panel" />
      </div>

      <ServiceProcess
        eyebrow={threeQuestions.eyebrow}
        heading={threeQuestions.heading}
        steps={threeQuestions.items}
        columns={3}
      />

      <ServiceProcess
        eyebrow={otherInvestments.eyebrow}
        heading={otherInvestments.heading}
        intro={otherInvestments.intro}
        steps={otherInvestments.items}
        variant="cards"
        note={otherInvestments.note}
      />

      <ServiceProcess
        eyebrow={whoQualifies.eyebrow}
        heading={whoQualifies.heading}
        intro={whoQualifies.intro}
        steps={whoQualifies.items}
        columns={4}
        note={whoQualifies.note}
      />

      <ServiceProcess
        eyebrow={consultingIncome.eyebrow}
        heading={consultingIncome.heading}
        intro={consultingIncome.intro}
        steps={consultingIncome.items}
        columns={3}
        note={consultingIncome.note}
      />

      <DeepDiveSection {...relatedBusinesses} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rolloverExample.eyebrow}
          heading={rolloverExample.heading}
          intro={rolloverExample.intro}
          figures={rolloverExample.figures}
          disclaimer={rolloverExample.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={taxQuestion.eyebrow}
        heading={taxQuestion.heading}
        intro={taxQuestion.intro}
        steps={taxQuestion.items}
        columns={3}
        note={taxQuestion.note}
      />

      <DeepDiveSection {...patientsNotOpportunities} tone="dark" />

      <DeepDiveSection {...closingReflection} tone="panel" />

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
