import { rulesIraContent } from "@/data/service-ira-content";

export function RulesIraSection() {
  return (
    <section className="service-section dark rules-section">
      <div className="wrap">
        <div className="service-intro">
          <p className="eyebrow">{rulesIraContent.eyebrow}</p>
          <h2>{rulesIraContent.heading}</h2>
        </div>
        <div className="rules-grid">
          {rulesIraContent.items.map((item) => (
            <article key={item.heading}>
              <h3>{item.heading}</h3>
              <p>{item.paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
