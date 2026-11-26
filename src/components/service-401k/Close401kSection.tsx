import { close401kContent } from "@/data/service-401k-v2-content";

export function Close401kSection() {
  return (
    <section className="service-section dark service-close">
      <div className="wrap service-split">
        <div className="service-intro">
          <p className="eyebrow">{close401kContent.eyebrow}</p>
          <h2>{close401kContent.heading}</h2>
        </div>
        <div>
          <p>{close401kContent.paragraph}</p>
          <div className="actions">
            <a href={close401kContent.primaryCta.href} className="button">
              {close401kContent.primaryCta.label}
            </a>
            <a href={close401kContent.secondaryCta.href} className="button secondary">
              {close401kContent.secondaryCta.label}
            </a>
          </div>
          <ul className="dedication">
            {close401kContent.dedication.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
