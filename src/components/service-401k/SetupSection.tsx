import { setupContent } from "@/data/service-401k-v2-content";

export function SetupSection() {
  return (
    <section className="service-section setup-feature">
      <div className="wrap setup-layout">
        <div className="service-intro">
          <p className="eyebrow">{setupContent.eyebrow}</p>
          <h2>{setupContent.heading}</h2>
          <p>{setupContent.paragraph}</p>
        </div>
        <ol className="steps">
          {setupContent.steps.map((step) => (
            <li key={step.number}>
              <span className="number">{step.number}</span>
              <h3>{step.heading}</h3>
              <p>{step.paragraph}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
