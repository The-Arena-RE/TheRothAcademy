import { packageIraContent } from "@/data/service-ira-content";

export function PackageIraSection() {
  return (
    <section className="service-section tinted package-section" id="package-inclusions">
      <div className="wrap service-split">
        <div>
          <div className="service-intro">
            <p className="eyebrow">{packageIraContent.eyebrow}</p>
            <h2>{packageIraContent.heading}</h2>
            <p>{packageIraContent.paragraph}</p>
          </div>
          <ul className="checklist">
            {packageIraContent.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside aria-label="Pricing" className="price-panel">
          <p className="eyebrow">{packageIraContent.price.eyebrow}</p>
          <p className="package-label">{packageIraContent.price.label}</p>
          <p className="amount">{packageIraContent.price.amount}</p>
          <p className="price-copy">{packageIraContent.price.copy}</p>
        </aside>
      </div>
    </section>
  );
}
