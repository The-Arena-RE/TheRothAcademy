import Image from "next/image";
import { closingContent } from "@/data/homepage-v2-content";

export function ClosingSection2() {
  return (
    <section className="section closing dark">
      <Image className="closing-photo" src={closingContent.photo} alt="" fill sizes="100vw" />
      <div className="wrap editorial">
        <div className="section-intro">
          <p className="eyebrow">{closingContent.eyebrow}</p>
          <h2>{closingContent.heading}</h2>
        </div>
        <div className="closing-copy">
          <p>{closingContent.paragraph}</p>
          <div className="actions">
            <a href={closingContent.primaryCta.href} className="button">
              {closingContent.primaryCta.label}
            </a>
            <a href={closingContent.secondaryCta.href} className="button secondary">
              {closingContent.secondaryCta.label}
            </a>
          </div>
          <p className="motto">{closingContent.motto}</p>
          <ul className="dedication">
            {closingContent.dedication.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
