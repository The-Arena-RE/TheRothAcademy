import { closeIraContent } from "@/data/service-ira-content";

export function CloseIraSection() {
  return (
    <section className="service-section dark service-close">
      <div className="wrap service-split">
        <div className="service-intro">
          <p className="eyebrow">{closeIraContent.eyebrow}</p>
          <h2>{closeIraContent.heading}</h2>
        </div>
        <div>
          <p>{closeIraContent.paragraph}</p>
          <div className="actions">
            <a href={closeIraContent.primaryCta.href} className="button">
              {closeIraContent.primaryCta.label}
            </a>
            <a href={closeIraContent.secondaryCta.href} className="button secondary">
              {closeIraContent.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
