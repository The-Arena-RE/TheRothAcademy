import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { DeepDiveStoryList } from "@/components/services/deepdive/DeepDiveStoryList";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { TwoKeysOnePlan } from "@/components/learn-modules/TwoKeysOnePlan";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  hero,
  bigSurprise,
  mayaGabrielStory,
  individualLimits,
  twoKeysIntro,
  separateBenefits,
  ownershipLedger,
  investmentOpportunities,
  familyBusinessBoundary,
  businessStructures,
  qualifiedJointVenture,
  otherEmployerPlan,
  vacationProperty,
  propertyComparison,
  investmentPreferences,
  businessChanges,
  closingReflection,
  faqItems,
  references,
  finalConversion,
} from "@/data/learn-modules/husband-wife-business-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Solo 401(k) For Husband & Wife Business Owners | Roth Academy",
  description:
    "Can a husband and wife share a Solo 401(k)? Learn how working spouses may contribute, maintain separate retirement benefits, and explore alternative investments.",
  alternates: { canonical: "/learn/self-directed-401k/husband-wife-business" },
};

export default function HusbandWifeBusinessPage() {
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
        eyebrow={bigSurprise.eyebrow}
        heading={bigSurprise.heading}
        intro={bigSurprise.intro}
        steps={bigSurprise.items}
        variant="cards"
        note={bigSurprise.note}
      />

      <DeepDiveStoryList eyebrow={mayaGabrielStory.eyebrow} heading={mayaGabrielStory.heading} stories={mayaGabrielStory.stories} />
      <div className="border-t border-r-line">
        <ServiceProcess
          eyebrow={individualLimits.eyebrow}
          heading={individualLimits.heading}
          intro={individualLimits.intro}
          steps={individualLimits.items}
          variant="cards"
          note={individualLimits.note}
        />
      </div>

      <TwoKeysOnePlan
        eyebrow={twoKeysIntro.eyebrow}
        heading={twoKeysIntro.heading}
        intro={twoKeysIntro.intro}
        modes={twoKeysIntro.modes}
        revelation={twoKeysIntro.revelation}
        conclusion={twoKeysIntro.conclusion}
      />

      <DeepDiveSection {...separateBenefits} tone="dark" />

      <ServiceProcess
        eyebrow={ownershipLedger.eyebrow}
        heading={ownershipLedger.heading}
        intro={ownershipLedger.intro}
        steps={ownershipLedger.items}
        variant="cards"
        note={ownershipLedger.note}
      />

      <ServiceProcess
        eyebrow={investmentOpportunities.eyebrow}
        heading={investmentOpportunities.heading}
        intro={investmentOpportunities.intro}
        steps={investmentOpportunities.items}
        variant="cards"
        note={investmentOpportunities.note}
      />

      <DeepDiveSection {...familyBusinessBoundary} tone="dark" />

      <ServiceProcess
        eyebrow={businessStructures.eyebrow}
        heading={businessStructures.heading}
        intro={businessStructures.intro}
        steps={businessStructures.items}
        variant="cards"
        note={businessStructures.note}
      />

      <DeepDiveSection {...qualifiedJointVenture} tone="dark" />

      <ServiceProcess
        eyebrow={otherEmployerPlan.eyebrow}
        heading={otherEmployerPlan.heading}
        intro={otherEmployerPlan.intro}
        steps={otherEmployerPlan.items}
        variant="cards"
        note={otherEmployerPlan.note}
        linkLabel={otherEmployerPlan.linkLabel}
        linkHref={otherEmployerPlan.linkHref}
      />

      <DeepDiveSection {...vacationProperty} tone="dark" />

      <ServiceProcess
        eyebrow={propertyComparison.eyebrow}
        heading={propertyComparison.heading}
        steps={propertyComparison.items}
        variant="cards"
      />

      <ServiceProcess
        eyebrow={investmentPreferences.eyebrow}
        heading={investmentPreferences.heading}
        intro={investmentPreferences.intro}
        steps={investmentPreferences.items}
        variant="cards"
        note={investmentPreferences.note}
      />

      <DeepDiveSection {...businessChanges} tone="dark" />

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
