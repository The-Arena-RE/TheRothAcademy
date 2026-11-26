import { learnSupportBanner } from "@/data/learn-content";

export function LearnSupportSection() {
  return (
    <section className="learn-support">
      <div className="learn-wrap">
        <div>
          <h2>{learnSupportBanner.heading}</h2>
          <p>{learnSupportBanner.description}</p>
        </div>
        <a href="/contact" className="button">
          {learnSupportBanner.cta}
        </a>
      </div>
    </section>
  );
}
