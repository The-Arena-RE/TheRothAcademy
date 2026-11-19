import { HeroSection } from "@/components/home/HeroSection";
import { DeepDiveSection } from "@/components/services/deepdive/DeepDiveSection";
import { AssetClassSection } from "@/components/home/AssetClassSection";
import { PathwaysSection } from "@/components/home/PathwaysSection";
import { StandardSection } from "@/components/home/StandardSection";
import { CompanyCredibilitySection } from "@/components/home/CompanyCredibilitySection";
import { ObjectionBreakerSection } from "@/components/home/ObjectionBreakerSection";
import { PathwayTableSection } from "@/components/home/PathwayTableSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { controversyContent, qualificationContent, finalConversionContent } from "@/data/home-content";
import { planDestinations } from "@/data/site-config";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DeepDiveSection {...controversyContent} tone="dark" />
      <DeepDiveSection {...qualificationContent} tone="panel" />
      <AssetClassSection />
      <PathwaysSection />
      <CompanyCredibilitySection />
      <StandardSection />
      <ObjectionBreakerSection />
      <PathwayTableSection />
      <FaqSection />
      <ClosingStatement
        eyebrow="Your Next Move"
        heading={finalConversionContent.heading.map((line, index) => (
          <span key={line} className={index === finalConversionContent.heading.length - 1 ? "text-r-gold" : undefined}>
            {line}
            <br />
          </span>
        ))}
        description={finalConversionContent.description}
        primaryLabel="Explore the Self-Directed 401(k)"
        primaryHref={planDestinations.open401k}
        secondaryLabel="Explore the Self-Directed IRA"
        secondaryHref={planDestinations.openIra}
        secondaryStyle="button"
        signature={finalConversionContent.signature}
      />
    </>
  );
}
