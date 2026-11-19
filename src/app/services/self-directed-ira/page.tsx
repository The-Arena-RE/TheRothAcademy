import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceAssetGrid } from "@/components/services/ServiceAssetGrid";
import { ServicePricing } from "@/components/services/ServicePricing";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCrossLink } from "@/components/services/ServiceCrossLink";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { planDestinations } from "@/data/site-config";
import { assetClasses } from "@/data/home-content";
import {
  serviceIraHero,
  serviceIraFoundation,
  serviceIraOverview,
  serviceIraPricing,
  serviceIraProcess,
  serviceIraFaq,
  serviceIraCrossLink,
  serviceIraAssetHrefOverrides,
} from "@/data/self-directed-ira-content";

const serviceIraAssetItems = assetClasses.map((item) => ({
  ...item,
  href: serviceIraAssetHrefOverrides[item.label] ?? item.href,
}));

export const metadata: Metadata = {
  title: "Self-Directed IRA",
  description:
    "A self-directed IRA built for individual investors: Traditional, Roth, or SEP, with room for the assets you understand.",
};

export default function SelfDirectedIraPage() {
  return (
    <>
      <ServiceHero
        eyebrow={serviceIraHero.eyebrow}
        title={serviceIraHero.title}
        goldLine={serviceIraHero.goldLine}
        description={serviceIraHero.description}
        whoItsFor={serviceIraHero.whoItsFor}
        contactTopic="Self-Directed IRA"
        primaryCta={{ label: "Open My IRA", href: planDestinations.openIra }}
        secondaryCta={{ label: "Ask a Question", href: planDestinations.getHelp }}
        imageSrc="/services/ira/hero.webp"
        summary={serviceIraHero.summary}
      />

      <ServiceOverview
        eyebrow={serviceIraOverview.eyebrow}
        heading={serviceIraOverview.heading}
        paragraphs={serviceIraOverview.paragraphs}
        features={serviceIraOverview.features}
        image={serviceIraOverview.image}
        imageAlt="Self-directed IRA account documents"
        reverse
      />

      <ServiceProcess
        eyebrow={serviceIraFoundation.eyebrow}
        heading={serviceIraFoundation.heading}
        steps={serviceIraFoundation.steps}
        columns={3}
      />

      <ServiceAssetGrid
        eyebrow="Inside The Account"
        heading={["What Your IRA", "Can Hold."]}
        intro="Use your self-directed IRA to invest in opportunities you already understand."
        tagline={["Same Principles.", "New Possibilities."]}
        footnote="Investment availability depends on the account, provider, and applicable rules. The academy does not recommend or custody investments."
        items={serviceIraAssetItems}
      />

      <ServicePricing
        eyebrow={serviceIraPricing.eyebrow}
        heading={serviceIraPricing.heading}
        intro={serviceIraPricing.intro}
        included={serviceIraPricing.included}
        price={serviceIraPricing.price}
        note={serviceIraPricing.note}
      />

      <ServiceProcess
        eyebrow={serviceIraProcess.eyebrow}
        heading={serviceIraProcess.heading}
        intro={serviceIraProcess.intro}
        steps={serviceIraProcess.steps}
      />

      <ServiceFaq
        eyebrow={serviceIraFaq.eyebrow}
        heading={serviceIraFaq.heading}
        items={serviceIraFaq.items}
        sourceLink={serviceIraFaq.sourceLink}
      />

      <ServiceCrossLink
        label={serviceIraCrossLink.label}
        title={serviceIraCrossLink.title}
        href={serviceIraCrossLink.href}
      />

      <ClosingStatement primaryLabel="Open My IRA" primaryHref={planDestinations.openIra} />
    </>
  );
}
