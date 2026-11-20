import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveFigurePanel } from "@/components/services/deepdive/DeepDiveFigurePanel";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { DeepDiveComparisonTable } from "@/components/services/deepdive/DeepDiveComparisonTable";
import { TruckParkingInvestment } from "@/components/learn-modules/TruckParkingInvestment";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  theReality,
  morganStory,
  unexpectedOpportunity,
  truckParkingIntro,
  taxQuestion,
  investmentDestinations,
  twoRoutes,
  anotherTruck,
  whoQualifies,
  freightRevenue,
  rolloverExample,
  questionThatChanges,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/owner-operator-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) For Truck Drivers | Roth Academy",
  description:
    "Own a trucking business? Discover Self-Directed 401(k) opportunities for owner-operators, including real estate, private lending, eligibility, and key restrictions.",
  alternates: { canonical: "/learn/self-directed-401k/owner-operator-truck-drivers" },
};

export default function OwnerOperatorPage() {
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
        eyebrow={theReality.eyebrow}
        heading={theReality.heading}
        intro={theReality.intro}
        steps={theReality.items}
        variant="cards"
        note={theReality.note}
      />

      <DeepDiveStoryList eyebrow={morganStory.eyebrow} heading={morganStory.heading} stories={morganStory.stories} />

      <ServiceProcess
        eyebrow={unexpectedOpportunity.eyebrow}
        heading={unexpectedOpportunity.heading}
        intro={unexpectedOpportunity.intro}
        steps={unexpectedOpportunity.items}
        variant="cards"
        note={unexpectedOpportunity.note}
      />

      <TruckParkingInvestment
        eyebrow={truckParkingIntro.eyebrow}
        heading={truckParkingIntro.heading}
        intro={truckParkingIntro.intro}
        capital={truckParkingIntro.capital}
        occupancyOptions={truckParkingIntro.occupancyOptions}
        totalSpaces={truckParkingIntro.totalSpaces}
        monthlyRatePerSpace={truckParkingIntro.monthlyRatePerSpace}
        annualOperatingExpenses={truckParkingIntro.annualOperatingExpenses}
        lowOccupancyNote={truckParkingIntro.lowOccupancyNote}
        fullOccupancyNote={truckParkingIntro.fullOccupancyNote}
        takeaway={truckParkingIntro.takeaway}
        disclaimer={truckParkingIntro.disclaimer}
      />

      <DeepDiveComparisonTable
        eyebrow={taxQuestion.eyebrow}
        heading={taxQuestion.heading}
        leftLabel={taxQuestion.leftLabel}
        rightLabel={taxQuestion.rightLabel}
        rows={taxQuestion.rows}
        footnote={taxQuestion.footnote}
      />

      <ServiceProcess
        eyebrow={investmentDestinations.eyebrow}
        heading={investmentDestinations.heading}
        intro={investmentDestinations.intro}
        steps={investmentDestinations.items}
        variant="cards"
        note={investmentDestinations.note}
      />

      <DeepDiveSection {...twoRoutes} tone="dark" />

      <ServiceProcess
        eyebrow={anotherTruck.eyebrow}
        heading={anotherTruck.heading}
        intro={anotherTruck.intro}
        steps={anotherTruck.items}
        variant="cards"
        note={anotherTruck.note}
      />

      <ServiceProcess
        eyebrow={whoQualifies.eyebrow}
        heading={whoQualifies.heading}
        intro={whoQualifies.intro}
        steps={whoQualifies.items}
        columns={4}
        note={whoQualifies.note}
      />

      <DeepDiveSection {...freightRevenue} tone="dark" />

      <div className="border-t border-r-line">
        <DeepDiveFigurePanel
          eyebrow={rolloverExample.eyebrow}
          heading={rolloverExample.heading}
          intro={rolloverExample.intro}
          figures={rolloverExample.figures}
          disclaimer={rolloverExample.disclaimer}
        />
      </div>

      <DeepDiveSection {...questionThatChanges} tone="panel" />

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
