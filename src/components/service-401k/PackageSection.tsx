import { packageContent } from "@/data/service-401k-v2-content";

export function PackageSection() {
  return (
    <section className="service-section tinted package-section" id="package-inclusions">
      <div className="wrap service-split">
        <div>
          <div className="service-intro">
            <p className="eyebrow">{packageContent.eyebrow}</p>
            <h2>{packageContent.heading}</h2>
            <p>{packageContent.paragraph}</p>
          </div>
          <ul className="checklist">
            {packageContent.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside aria-label="Pricing" className="price-panel">
          <p className="eyebrow">{packageContent.price.eyebrow}</p>
          <p className="package-label">{packageContent.price.label}</p>
          <p className="amount">{packageContent.price.amount}</p>
          <p className="price-copy">{packageContent.price.copy}</p>
        </aside>
      </div>
    </section>
  );
}
