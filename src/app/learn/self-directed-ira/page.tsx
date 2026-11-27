import type { Metadata } from "next";
import "@/styles/learn-ira-library.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { LearnIraLibraryHero } from "@/components/learn-ira-library/LearnIraLibraryHero";
import { LearnIraLibraryCatalog } from "@/components/learn-ira-library/LearnIraLibraryCatalog";
import { LearnIraLibraryHelp } from "@/components/learn-ira-library/LearnIraLibraryHelp";

export const metadata: Metadata = {
  title: "Self-Directed IRA Learning Library",
  description:
    "Explore free Self-Directed IRA lessons for every investor: real estate, private lending, precious metals, and more. No business required.",
  alternates: { canonical: "/learn/self-directed-ira" },
};

export default function SelfDirectedIraLibraryPage() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} learn-ira-library-page`}>
      <LearnIraLibraryHero />
      <LearnIraLibraryCatalog />
      <LearnIraLibraryHelp />
    </div>
  );
}
