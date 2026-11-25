import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CollectionDirectory } from "@/components/learn/CollectionDirectory";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { curriculumIra } from "@/data/learn-curriculum";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed IRA Learning Library",
  description:
    "Explore free Self-Directed IRA lessons for every investor: real estate, private lending, precious metals, and more. No business required.",
  alternates: { canonical: "/learn/self-directed-ira" },
};

export default function SelfDirectedIraLibraryPage() {
  return (
    <>
      <ServiceHero
        eyebrow="The Individual Investor's Collection"
        title={["Extraordinary Investments", "Aren't Just", "For Wall Street."]}
        goldLine={2}
        description="Imagine owning investment land, collecting rental income, receiving interest from private loans, or investing in privately held companies through a qualifying self-directed IRA. You don't need to own a business to establish an IRA. Explore captivating examples, specific investment scenarios, and lessons that make complex financial ideas incredibly simple."
        imageSrc="/pathways/ira.webp"
        primaryCta={{ label: "Start My Self-Directed IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Not Sure Which Plan Fits?", href: "/plans" }}
      />

      <CollectionDirectory collection="ira" modules={curriculumIra} />

      <SupportBanner
        heading="Not Sure Which Plan Fits?"
        description="Compare the self-directed 401(k) and IRA side by side, or tell the team about your situation."
        cta="Compare Your Options"
        href="/plans"
      />
    </>
  );
}
