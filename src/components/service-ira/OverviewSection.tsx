import { overviewIraContent } from "@/data/service-ira-content";

export function OverviewSection() {
  return (
    <section className="service-section overview-ira">
      <div className="wrap service-split">
        <div className="service-intro">
          <p className="eyebrow">{overviewIraContent.eyebrow}</p>
          <h2>{overviewIraContent.heading}</h2>
          <p>{overviewIraContent.paragraph}</p>
        </div>
        <div className="ira-overview-support">
          <p>{overviewIraContent.supportParagraph}</p>
          <ul className="checklist">
            {overviewIraContent.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
