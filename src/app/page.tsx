import "@/styles/homepage.css";
import { newsreader, dmSans } from "@/lib/editorial-fonts";
import { Hero2 } from "@/components/home2/Hero2";
import { ValuesBar } from "@/components/home2/ValuesBar";
import { Pathways2 } from "@/components/home2/Pathways2";
import { QuestionSection } from "@/components/home2/QuestionSection";
import { DistinctionSection } from "@/components/home2/DistinctionSection";
import { Investments2 } from "@/components/home2/Investments2";
import { ProfileSection } from "@/components/home2/ProfileSection";
import { StandardStatementSection } from "@/components/home2/StandardStatementSection";
import { RulesGuideSection } from "@/components/home2/RulesGuideSection";
import { RoutePickerSection } from "@/components/home2/RoutePickerSection";
import { HomeFaqSection } from "@/components/home2/HomeFaqSection";
import { ClosingSection2 } from "@/components/home2/ClosingSection2";

export default function Home() {
  return (
    <div className={`${newsreader.variable} ${dmSans.variable} homepage-page`}>
      <Hero2 />
      <ValuesBar />
      <Pathways2 />
      <QuestionSection />
      <DistinctionSection />
      <Investments2 />
      <ProfileSection />
      <StandardStatementSection />
      <RulesGuideSection />
      <RoutePickerSection />
      <HomeFaqSection />
      <ClosingSection2 />
    </div>
  );
}
