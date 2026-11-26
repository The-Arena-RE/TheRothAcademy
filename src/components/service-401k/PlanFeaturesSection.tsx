import { planFeaturesContent } from "@/data/service-401k-v2-content";

export function PlanFeaturesSection() {
  return (
    <section className="service-section dark plan-feature-section">
      <div className="wrap feature-layout">
        <div className="service-intro">
          <p className="eyebrow">{planFeaturesContent.eyebrow}</p>
          <h2>{planFeaturesContent.heading}</h2>
        </div>
        <div className="feature-list feature-board">
          {planFeaturesContent.features.map((feature) => (
            <article key={feature.heading}>
              <h3>{feature.heading}</h3>
              <p>{feature.paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
