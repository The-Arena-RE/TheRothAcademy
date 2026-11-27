import type { Metadata } from "next";
import "@/styles/plans-page.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { PlansHero } from "@/components/plans-page/PlansHero";
import { ComparisonBandSection } from "@/components/plans-page/ComparisonBandSection";
import { FinderBandSection } from "@/components/plans-page/FinderBandSection";
import { ProfileBandSection } from "@/components/plans-page/ProfileBandSection";
import { InvestmentBandSection } from "@/components/plans-page/InvestmentBandSection";
import { ExampleBandSection } from "@/components/plans-page/ExampleBandSection";
import { SupportBandSection } from "@/components/plans-page/SupportBandSection";
import { RulesBandSection } from "@/components/plans-page/RulesBandSection";
import { StandardsBandSection } from "@/components/plans-page/StandardsBandSection";
import { PlansFaqSection } from "@/components/plans-page/PlansFaqSection";
import { SourceBandSection } from "@/components/plans-page/SourceBandSection";
import { PlansFinalSection } from "@/components/plans-page/PlansFinalSection";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) vs. IRA | Compare Plans | Roth Academy",
  description:
    "Compare a self-directed 401(k) and self-directed IRA. Discover eligibility, investment flexibility, contributions, loans, and which plan may fit your goals.",
  alternates: { canonical: "/plans" },
};

export default function PlansPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} plans-page`}>
      <PlansHero />
      <ComparisonBandSection />
      <FinderBandSection />
      <ProfileBandSection />
      <InvestmentBandSection />
      <ExampleBandSection />
      <SupportBandSection />
      <RulesBandSection />
      <StandardsBandSection />
      <PlansFaqSection />
      <SourceBandSection />
      <PlansFinalSection />
    </div>
  );
}
