import type { Metadata } from "next";
import "@/styles/learn-401k-library.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { Learn401kLibraryHero } from "@/components/learn-401k-library/Learn401kLibraryHero";
import { Learn401kLibraryCatalog } from "@/components/learn-401k-library/Learn401kLibraryCatalog";
import { Learn401kLibraryHelp } from "@/components/learn-401k-library/Learn401kLibraryHelp";

export const metadata: Metadata = {
  title: "Self-Directed 401(k) Learning Library",
  description:
    "Explore free Self-Directed 401(k) lessons for business owners and entrepreneurs: real estate, private lending, private business investing, and more.",
  alternates: { canonical: "/learn/self-directed-401k" },
};

export default function SelfDirected401kLibraryPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} learn-401k-library-page`}>
      <Learn401kLibraryHero />
      <Learn401kLibraryCatalog />
      <Learn401kLibraryHelp />
    </div>
  );
}
