import type { Metadata } from "next";
import "@/styles/learn-page.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { LearnHero } from "@/components/learn/LearnHero";
import { CollectionsSection } from "@/components/learn/CollectionsSection";
import { EditorialDiscoverySection } from "@/components/learn/EditorialDiscoverySection";
import { GuideDirectorySection } from "@/components/learn/GuideDirectorySection";
import { LearnSupportSection } from "@/components/learn/LearnSupportSection";
import { LearnCloseSection } from "@/components/learn/LearnCloseSection";

export const metadata: Metadata = {
  title: "Self-Directed IRA & Solo 401(k) Learning Library",
  description:
    "Explore free self-directed IRA and Solo 401(k) lessons, investment examples, real estate opportunities, private lending, and more. Simple explanations for every investor.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} learn-page`}>
      <LearnHero />
      <CollectionsSection />
      <EditorialDiscoverySection />
      <GuideDirectorySection />
      <LearnSupportSection />
      <LearnCloseSection />
    </div>
  );
}
