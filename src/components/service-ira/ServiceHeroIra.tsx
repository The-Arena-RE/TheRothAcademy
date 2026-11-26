import Image from "next/image";
import { heroIra } from "@/data/service-ira-content";

export function ServiceHeroIra() {
  return (
    <section className="service-hero dark photo-hero ira-photo-hero">
      <Image src={heroIra.image} alt="" fill sizes="100vw" priority />
      <div className="wrap service-hero-inner">
        <div>
          <p className="eyebrow">{heroIra.eyebrow}</p>
          <h1>
            {heroIra.heading[0]} <span>{heroIra.heading[1]}</span>
          </h1>
          <p className="service-lead">{heroIra.lead}</p>
          <p className="fine">{heroIra.fine}</p>
          <div className="actions">
            <a href={heroIra.primaryCta.href} className="button">
              {heroIra.primaryCta.label}
            </a>
            <a href={heroIra.secondaryCta.href} className="button secondary">
              {heroIra.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
