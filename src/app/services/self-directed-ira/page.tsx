import type { Metadata } from "next";
import "@/styles/service-ira.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { ServiceHeroIra } from "@/components/service-ira/ServiceHeroIra";
import { OverviewSection } from "@/components/service-ira/OverviewSection";
import { ExamplesIraSection } from "@/components/service-ira/ExamplesIraSection";
import { IraCategoriesSection } from "@/components/service-ira/IraCategoriesSection";
import { FundingSection } from "@/components/service-ira/FundingSection";
import { ComparisonIraSection } from "@/components/service-ira/ComparisonIraSection";
import { EligibilityIraSection } from "@/components/service-ira/EligibilityIraSection";
import { RulesIraSection } from "@/components/service-ira/RulesIraSection";
import { PackageIraSection } from "@/components/service-ira/PackageIraSection";
import { SetupIraSection } from "@/components/service-ira/SetupIraSection";
import { FaqIraSection } from "@/components/service-ira/FaqIraSection";
import { ReferencesIraSection } from "@/components/service-ira/ReferencesIraSection";
import { FourOhOneKRouteSection } from "@/components/service-ira/FourOhOneKRouteSection";
import { CloseIraSection } from "@/components/service-ira/CloseIraSection";

export const metadata: Metadata = {
  title: "Self-Directed IRA | Real Estate, Private Lending & More",
  description:
    "Explore how a self-directed IRA may invest in real estate, private lending, private businesses, metals, and more. Discover your options and get started.",
};

export default function SelfDirectedIraPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} service-ira-page`}>
      <ServiceHeroIra />
      <OverviewSection />
      <ExamplesIraSection />
      <IraCategoriesSection />
      <FundingSection />
      <ComparisonIraSection />
      <EligibilityIraSection />
      <RulesIraSection />
      <PackageIraSection />
      <SetupIraSection />
      <FaqIraSection />
      <ReferencesIraSection />
      <FourOhOneKRouteSection />
      <CloseIraSection />
    </div>
  );
}
