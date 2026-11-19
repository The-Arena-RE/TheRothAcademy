import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { ExplorerNav } from "@/components/goals/ExplorerNav";
import { InvestmentPossibilities } from "@/components/goals/InvestmentPossibilities";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { StoryTwoWays } from "@/components/about/StoryTwoWays";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  goalsHero,
  elephantInTheRoom,
  explorerNav,
  investmentPossibilities,
  investmentPossibilitiesFootnote,
  experienceMatters,
  fiveRules,
  chooseVehicle,
  whyRothAcademyGoals,
  goalsFaqItems,
  goalsFinalConversion,
} from "@/data/goals-content";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "What Can a Self-Directed IRA or 401(k) Invest In? | Roth Academy",
  description:
    "Discover what self-directed IRAs and 401(k)s may invest in, including real estate, private lending, business interests, gold, and other qualifying assets.",
  alternates: { canonical: "/goals" },
};

export default function GoalsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={goalsHero.eyebrow}
        title={goalsHero.title}
        goldLine={goalsHero.goldLine}
        description={goalsHero.description}
        whoItsFor={goalsHero.whoItsFor}
        primaryCta={goalsHero.primaryCta}
        secondaryCta={goalsHero.secondaryCta}
      />

      <DeepDiveSection {...elephantInTheRoom} tone="dark" />

      <ExplorerNav
        eyebrow={explorerNav.eyebrow}
        heading={explorerNav.heading}
        intro={explorerNav.intro}
        items={investmentPossibilities}
      />

      <InvestmentPossibilities items={investmentPossibilities} footnote={investmentPossibilitiesFootnote} />

      <DeepDiveSection {...experienceMatters} tone="dark" />

      <ServiceProcess
        eyebrow={fiveRules.eyebrow}
        heading={fiveRules.heading}
        intro={fiveRules.intro}
        steps={fiveRules.items}
        columns={3}
        note={fiveRules.note}
      />
      <div className="-mt-10 border-b border-r-line bg-r-stripe-2 pb-16 md:-mt-14 md:pb-20">
        <div className="container-brand">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {fiveRules.links.map((link) => (
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

      <StoryTwoWays
        eyebrow={chooseVehicle.eyebrow}
        heading={chooseVehicle.heading}
        intro={chooseVehicle.intro}
        cards={chooseVehicle.cards}
        supportingLabel={chooseVehicle.supportingLabel}
        supportingHref={chooseVehicle.supportingHref}
      />

      <div className="bg-r-stripe-2">
        <DeepDiveSection {...whyRothAcademyGoals} tone="panel" />
        <div className="container-brand -mt-10 pb-16 md:-mt-14 md:pb-20">
          <Link
            href={whyRothAcademyGoals.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {whyRothAcademyGoals.ctaLabel}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>

      <ServiceFaq eyebrow="Frequently Asked Questions" heading={["Good Questions.", "Clear Answers."]} items={goalsFaqItems} />

      <ClosingStatement
        eyebrow="Imagine What's Possible"
        heading={
          <>
            {goalsFinalConversion.heading[0]}
            <br />
            <span className="text-r-gold">{goalsFinalConversion.heading[1]}</span>
          </>
        }
        description={goalsFinalConversion.description}
        primaryLabel="Start My Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Start My Self-Directed IRA"
        secondaryHref={planDestinations.openIra}
        secondaryStyle="button"
        signature={goalsFinalConversion.signature}
      />
    </>
  );
}
