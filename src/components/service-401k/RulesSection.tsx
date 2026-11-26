import { rulesContent } from "@/data/service-401k-v2-content";

export function RulesSection() {
  return (
    <section className="service-section dark rules-section">
      <div className="wrap">
        <div className="service-intro">
          <p className="eyebrow">{rulesContent.eyebrow}</p>
          <h2>{rulesContent.heading}</h2>
          <p>{rulesContent.paragraph}</p>
        </div>
        <div className="rules-grid">
          {rulesContent.items.map((item) => (
            <article key={item.number}>
              <span className="number">{item.number}</span>
              <h3>{item.heading}</h3>
              <p>{item.paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
