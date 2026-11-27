import Image from "next/image";
import { plansHero } from "@/data/plans-content";

export function PlansHero() {
  return (
    <section className="plans-hero dark">
      <Image src="/plans/hero.webp" alt="" fill sizes="100vw" priority />
      <div className="plans-wrap">
        <p className="eyebrow">{plansHero.eyebrow}</p>
        <h1>
          {plansHero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="plans-lead">{plansHero.description}</p>
        <p className="hero-note">{plansHero.whoItsFor}</p>
        <div className="actions">
          <a href={plansHero.primaryCta.href} className="button">
            {plansHero.primaryCta.label}
          </a>
          <a href={plansHero.secondaryCta.href} className="button secondary">
            {plansHero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
