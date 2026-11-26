import { setupIraContent } from "@/data/service-ira-content";

export function SetupIraSection() {
  return (
    <section className="service-section setup-feature">
      <div className="wrap setup-layout">
        <div className="service-intro">
          <p className="eyebrow">{setupIraContent.eyebrow}</p>
          <h2>{setupIraContent.heading}</h2>
          <p>{setupIraContent.paragraph}</p>
        </div>
        <ol className="steps">
          {setupIraContent.steps.map((step) => (
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
