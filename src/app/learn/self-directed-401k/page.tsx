import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { CollectionDirectory } from "@/components/learn/CollectionDirectory";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { curriculum401k } from "@/data/learn-curriculum";
import { planDestinations } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) Learning Library",
  description:
    "Explore free Self-Directed 401(k) lessons for business owners and entrepreneurs: real estate, private lending, private business investing, and more.",
  alternates: { canonical: "/learn/self-directed-401k" },
};

export default function SelfDirected401kLibraryPage() {
  return (
    <>
      <ServiceHero
        eyebrow="The Entrepreneur's Collection"
        title={["You Built Something", "Of Your Own.", "Discover What Else", "You Could Build."]}
        goldLine={2}
        description="Imagine investing in vacant land, rental houses, private loans, commercial properties, or private businesses through a qualifying self-directed 401(k). Explore fascinating investment examples, real numbers, and easy-to-understand lessons designed for eligible self-employed individuals and business owners."
        imageSrc="/pathways/401k.webp"
        primaryCta={{ label: "Start My Self-Directed 401(k)", href: planDestinations.open401k }}
        secondaryCta={{ label: "Not Sure Which Plan Fits?", href: "/plans" }}
      />

      <CollectionDirectory collection="401k" modules={curriculum401k} />

      <SupportBanner
        heading="Not Sure Which Plan Fits?"
        description="Compare the self-directed 401(k) and IRA side by side, or tell the team about your situation."
        cta="Compare Your Options"
        href="/plans"
      />
    </>
  );
}
