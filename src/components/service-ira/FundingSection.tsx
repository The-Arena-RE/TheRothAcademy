import { fundingContent } from "@/data/service-ira-content";

export function FundingSection() {
  return (
    <section className="service-section ira-funding" id="funding">
      <div className="wrap service-split">
        <div className="service-intro">
          <p className="eyebrow">{fundingContent.eyebrow}</p>
          <h2>{fundingContent.heading}</h2>
          <p>{fundingContent.paragraph}</p>
        </div>
        <aside className="ira-funding-note">
          <h3>{fundingContent.note.heading}</h3>
          <p>{fundingContent.note.paragraph}</p>
          <p className="fine">{fundingContent.note.fine}</p>
        </aside>
      </div>
    </section>
  );
}
