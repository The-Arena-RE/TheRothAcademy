import type { Metadata } from "next";
import "@/styles/service-401k.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { ServiceHero401k } from "@/components/service-401k/ServiceHero401k";
import { ExamplesSection } from "@/components/service-401k/ExamplesSection";
import { ExplainerSection } from "@/components/service-401k/ExplainerSection";
import { GallerySection } from "@/components/service-401k/GallerySection";
import { ComparisonSection } from "@/components/service-401k/ComparisonSection";
import { PlanFeaturesSection } from "@/components/service-401k/PlanFeaturesSection";
import { EligibilitySection } from "@/components/service-401k/EligibilitySection";
import { RulesSection } from "@/components/service-401k/RulesSection";
import { PackageSection } from "@/components/service-401k/PackageSection";
import { SetupSection } from "@/components/service-401k/SetupSection";
import { Faq401kSection } from "@/components/service-401k/Faq401kSection";
import { ReferencesSection } from "@/components/service-401k/ReferencesSection";
import { IraRouteSection } from "@/components/service-401k/IraRouteSection";
import { Close401kSection } from "@/components/service-401k/Close401kSection";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) for Business Owners | Real Estate & More",
  description:
    "Discover how a self-directed 401(k) may let eligible business owners explore real estate, private loans and more. Learn the possibilities and start your plan.",
};

export default function SelfDirected401kPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} service-401k-page`}>
      <ServiceHero401k />
      <ExamplesSection />
      <ExplainerSection />
      <GallerySection />
      <ComparisonSection />
      <PlanFeaturesSection />
      <EligibilitySection />
      <RulesSection />
      <PackageSection />
      <SetupSection />
      <Faq401kSection />
      <ReferencesSection />
      <IraRouteSection />
      <Close401kSection />
    </div>
  );
}
