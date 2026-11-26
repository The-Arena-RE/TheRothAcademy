import Image from "next/image";
import { learnHero } from "@/data/learn-content";

export function LearnHero() {
  return (
    <section className="learn-hero dark">
      <Image src="/learn/hero.webp" alt="" fill sizes="100vw" priority />
      <div className="learn-wrap">
        <p className="eyebrow">{learnHero.eyebrow}</p>
        <h1>
          {learnHero.title[0]} <span>{learnHero.title[1]}</span>
        </h1>
        <p className="learn-hero-copy">{learnHero.description}</p>
        <div className="actions">
          <a href="#discover-lessons" className="button">
            Explore lessons
          </a>
          <a href="#plan-guides" className="button secondary">
            Find an administration guide
          </a>
        </div>
      </div>
    </section>
  );
}
