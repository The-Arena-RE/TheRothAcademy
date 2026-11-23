import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { HarvestScenarios } from "@/components/learn-modules/HarvestScenarios";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  directAnswer,
  mariaStory,
  propertyAcquisition,
  followTheRent,
  rentalPropertyMonitor,
  propertyManagementAndLabor,
  valueVsProfitAndDebt,
  alternativeRealEstateExposure,
  oldHospitalAccount,
  fiveRealEstateQuestions,
  importantRules,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/the-healthcare-professional-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA Real Estate for Nurses | Roth Academy",
  description:
    "Can nurses invest in rental real estate through an IRA? Explore property income, expenses, management, rollover rules, and important investment risks.",
  alternates: { canonical: "/learn/self-directed-ira/the-healthcare-professional" },
};

export default function TheHealthcareProfessionalPage() {
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

      <div className="border-t border-r-line">
        <DeepDiveStoryList eyebrow={mariaStory.eyebrow} heading={mariaStory.heading} stories={mariaStory.stories} />
      </div>

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={propertyAcquisition.eyebrow}
          heading={propertyAcquisition.heading}
          intro={propertyAcquisition.intro}
          figures={propertyAcquisition.figures}
          disclaimer={propertyAcquisition.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={followTheRent.eyebrow}
        heading={followTheRent.heading}
        steps={followTheRent.steps}
        variant="list"
        columns={3}
        note={followTheRent.note}
      />

      <HarvestScenarios
        eyebrow={rentalPropertyMonitor.eyebrow}
        heading={rentalPropertyMonitor.heading}
        intro={rentalPropertyMonitor.intro}
        scenarios={rentalPropertyMonitor.scenarios}
        tableColumns={rentalPropertyMonitor.tableColumns}
        comparisonNote={rentalPropertyMonitor.comparisonNote}
        conclusion={rentalPropertyMonitor.conclusion}
      />

      <DeepDiveSection {...propertyManagementAndLabor} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={valueVsProfitAndDebt.eyebrow}
          heading={valueVsProfitAndDebt.heading}
          intro={valueVsProfitAndDebt.intro}
          figures={valueVsProfitAndDebt.figures}
          disclaimer={valueVsProfitAndDebt.disclaimer}
        />
      </div>

      <ServiceProcess
        eyebrow={alternativeRealEstateExposure.eyebrow}
        heading={alternativeRealEstateExposure.heading}
        steps={alternativeRealEstateExposure.steps}
        variant="cards"
        note={alternativeRealEstateExposure.note}
      />

      <ServiceProcess
        eyebrow={oldHospitalAccount.eyebrow}
        heading={oldHospitalAccount.heading}
        steps={oldHospitalAccount.steps}
        variant="list"
        columns={3}
        note={oldHospitalAccount.note}
      />

      <ServiceProcess
        eyebrow={fiveRealEstateQuestions.eyebrow}
        heading={fiveRealEstateQuestions.heading}
        steps={fiveRealEstateQuestions.steps}
        variant="list"
        columns={3}
        note={fiveRealEstateQuestions.note}
      />

      <ServiceProcess
        eyebrow={importantRules.eyebrow}
        heading={importantRules.heading}
        steps={importantRules.steps}
        variant="cards"
        note={importantRules.note}
      />

      <DeepDiveSection {...closingReflection} tone="panel" />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={faqItems} />

      <DeepDiveReferenceLibrary references={references} />

      <ClosingStatement
        eyebrow="The Off-Shift Investor"
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
