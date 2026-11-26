import Link from "next/link";
import { learnFinalSection } from "@/data/learn-content";

export function LearnCloseSection() {
  return (
    <section className="learn-band learn-close dark">
      <div className="learn-wrap">
        <div>
          <p className="eyebrow">Keep Exploring</p>
          <h2>
            {learnFinalSection.heading[0]} <span>{learnFinalSection.heading[1]}</span>
          </h2>
        </div>
        <div>
          <p>{learnFinalSection.description}</p>
          <div className="actions">
            <Link href="/learn/self-directed-401k" className="button">
              Explore the 401(k) Library
            </Link>
            <Link href="/learn/self-directed-ira" className="button secondary">
              Explore the IRA Library
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
