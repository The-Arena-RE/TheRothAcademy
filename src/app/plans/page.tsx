import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceAssetGrid } from "@/components/services/ServiceAssetGrid";
import { PlanProductReveal } from "@/components/plans/PlanProductReveal";
import { PlansComparison } from "@/components/plans/PlansComparison";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { PlanFinder } from "@/components/plans/PlanFinder";
import { PlansScenarios } from "@/components/plans/PlansScenarios";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { DeepDiveReferenceLibrary } from "@/components/services/deepdive/DeepDiveReferenceLibrary";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  plansHero,
  investmentGallery,
  product401k,
  productIra,
  existingPlanBanner,
  plansScenarios,
  commonGround,
  questionAboutControl,
  whyRothAcademyPlans,
  plansFaqItems,
  plansReferences,
  plansFinalConversion,
} from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) vs. IRA | Compare Plans | Roth Academy",
  description:
    "Compare a self-directed 401(k) and self-directed IRA. Discover eligibility, investment flexibility, contributions, loans, and which plan may fit your goals.",
  alternates: { canonical: "/plans" },
};

export default function PlansPage() {
  return (
    <>
      <ServiceHero
        eyebrow={plansHero.eyebrow}
        title={plansHero.title}
        goldLine={plansHero.goldLine}
        description={plansHero.description}
        whoItsFor={plansHero.whoItsFor}
        primaryCta={plansHero.primaryCta}
        secondaryCta={plansHero.secondaryCta}
      />

      <ServiceAssetGrid
        eyebrow={investmentGallery.eyebrow}
        heading={investmentGallery.heading}
        intro={investmentGallery.intro}
        tagline={investmentGallery.tagline}
        footnote={investmentGallery.footnote}
      />

      <PlanProductReveal
        eyebrow={product401k.eyebrow}
        heading={product401k.heading}
        goldLine={product401k.goldLine}
        paragraphs={product401k.paragraphs}
        features={product401k.features}
        aspiration={product401k.aspiration}
        qualification={product401k.qualification}
        primaryLabel={product401k.primaryLabel}
        primaryHref={planDestinations.open401k}
        secondaryLabel={product401k.secondaryLabel}
        secondaryHref={product401k.secondaryHref}
        tone="dark"
      />

      <PlanProductReveal
        eyebrow={productIra.eyebrow}
        heading={productIra.heading}
        goldLine={productIra.goldLine}
        paragraphs={productIra.paragraphs}
        features={productIra.features}
        aspiration={productIra.aspiration}
        qualification={productIra.qualification}
        primaryLabel={productIra.primaryLabel}
        primaryHref={planDestinations.openIra}
        secondaryLabel={productIra.secondaryLabel}
        secondaryHref={productIra.secondaryHref}
        tone="panel"
      />

      <PlansComparison />

      <SupportBanner
        heading={existingPlanBanner.heading}
        description={existingPlanBanner.description}
        cta={existingPlanBanner.cta}
        href={existingPlanBanner.href}
      />

      <PlanFinder />

      <PlansScenarios eyebrow={plansScenarios.eyebrow} heading={plansScenarios.heading} items={plansScenarios.items} />

      <div className="bg-r-stripe-2">
        <DeepDiveSection {...commonGround} tone="panel" />
        <div className="container-brand -mt-10 pb-16 md:-mt-14 md:pb-20">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {commonGround.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
                >
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-r-bg">
        <DeepDiveSection {...questionAboutControl} tone="dark" />
        <div className="container-brand -mt-10 pb-16 md:-mt-14 md:pb-20">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {questionAboutControl.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
                >
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ServiceProcess
        eyebrow={whyRothAcademyPlans.eyebrow}
        heading={whyRothAcademyPlans.heading}
        intro={whyRothAcademyPlans.intro}
        steps={whyRothAcademyPlans.items}
        columns={3}
        note={whyRothAcademyPlans.note}
        linkLabel={whyRothAcademyPlans.linkLabel}
        linkHref={whyRothAcademyPlans.linkHref}
      />

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={plansFaqItems} />

      <DeepDiveReferenceLibrary references={plansReferences} />

      <ClosingStatement
        eyebrow="The Right Plan For The Future You Want"
        heading={
          <>
            {plansFinalConversion.heading[0]}
            <br />
            {plansFinalConversion.heading[1]}
            <br />
            <span className="text-r-gold">{plansFinalConversion.heading[2]}</span>
          </>
        }
        description={plansFinalConversion.description}
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Start My Self-Directed IRA"
        secondaryHref={planDestinations.openIra}
        secondaryStyle="button"
        signature={plansFinalConversion.signature}
      />
    </>
  );
}
