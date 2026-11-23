import type { Metadata } from "next";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  retirementLibrary,
  alvarezStory,
  propertyAcquisition,
  twoPossibleEndings,
  notLandlord,
  whoGetsIncome,
  fiveQuestionsTeachers,
  pensionVsIra,
  rulesMatter,
  noOldAccount,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-teacher-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA for Teachers: Beyond the 403(b) | Roth Academy",
  description:
    "Discover Self-Directed IRA opportunities for teachers, including real estate and private lending. Learn how pensions and 403(b)s differ, plus the risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-teacher" },
};

export default function TheTeacherPage() {
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

      <DeepDiveSection {...directAnswer} tone="dark" />

      <ServiceProcess
        eyebrow={retirementLibrary.eyebrow}
        heading={retirementLibrary.heading}
        intro={retirementLibrary.intro}
        steps={retirementLibrary.steps}
        variant="cards"
        note={retirementLibrary.note}
      />

      <DeepDiveStoryList eyebrow={alvarezStory.eyebrow} heading={alvarezStory.heading} stories={alvarezStory.stories} />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={propertyAcquisition.eyebrow}
          heading={propertyAcquisition.heading}
          intro={propertyAcquisition.intro}
          figures={propertyAcquisition.figures}
          disclaimer={propertyAcquisition.disclaimer}
        />
      </div>

      <HarvestScenarios
        eyebrow={twoPossibleEndings.eyebrow}
        heading={twoPossibleEndings.heading}
        intro={twoPossibleEndings.intro}
        scenarios={twoPossibleEndings.scenarios}
        tableColumns={twoPossibleEndings.tableColumns}
        comparisonNote={twoPossibleEndings.comparisonNote}
        conclusion={twoPossibleEndings.conclusion}
      />

      <ServiceProcess
        eyebrow={notLandlord.eyebrow}
        heading={notLandlord.heading}
        intro={notLandlord.intro}
        steps={notLandlord.steps}
        variant="cards"
        note={notLandlord.note}
      />

      <DeepDiveSection {...whoGetsIncome} tone="dark" />

      <ServiceProcess
        eyebrow={fiveQuestionsTeachers.eyebrow}
        heading={fiveQuestionsTeachers.heading}
        steps={fiveQuestionsTeachers.steps}
        variant="list"
        columns={3}
      />

      <DeepDiveComparisonTable
        eyebrow={pensionVsIra.eyebrow}
        heading={pensionVsIra.heading}
        leftLabel={pensionVsIra.leftLabel}
        rightLabel={pensionVsIra.rightLabel}
        rows={pensionVsIra.rows}
        footnote={pensionVsIra.footnote}
      />

      <ServiceProcess
        eyebrow={rulesMatter.eyebrow}
        heading={rulesMatter.heading}
        steps={rulesMatter.steps}
        variant="cards"
        note={rulesMatter.note}
      />

      <ServiceProcess
        eyebrow={noOldAccount.eyebrow}
        heading={noOldAccount.heading}
        steps={noOldAccount.steps}
        variant="list"
        columns={3}
        note={noOldAccount.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="Beyond The Classroom"
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
