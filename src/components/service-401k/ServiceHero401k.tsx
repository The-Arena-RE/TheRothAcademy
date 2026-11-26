import Image from "next/image";
import { hero401k } from "@/data/service-401k-v2-content";

export function ServiceHero401k() {
  return (
    <section className="service-hero dark photo-hero">
      <Image src={hero401k.image} alt="" fill sizes="100vw" priority />
      <div className="wrap service-hero-inner">
        <div>
          <p className="eyebrow">{hero401k.eyebrow}</p>
          <h1>
            {hero401k.heading[0]} <span>{hero401k.heading[1]}</span>
          </h1>
          <p className="service-lead">{hero401k.lead}</p>
          <p className="fine">{hero401k.fine}</p>
          <div className="actions">
            <a href={hero401k.primaryCta.href} className="button">
              {hero401k.primaryCta.label}
            </a>
            <a href={hero401k.secondaryCta.href} className="button secondary">
              {hero401k.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
