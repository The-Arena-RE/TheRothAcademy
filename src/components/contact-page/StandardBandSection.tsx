import { rothAcademyStandard } from "@/data/contact-content";

export function StandardBandSection() {
  return (
    <section className="contact-band contact-standard dark">
      <div className="contact-wrap">
        <div className="standard-intro">
          <p className="eyebrow">{rothAcademyStandard.eyebrow}</p>
          <h2>
            {rothAcademyStandard.heading[0]} {rothAcademyStandard.heading[1]}
          </h2>
        </div>
        <div className="standard-body">
          {rothAcademyStandard.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="standard-emphasis">{rothAcademyStandard.featured}</p>
          <p>{rothAcademyStandard.note}</p>
        </div>
      </div>
    </section>
  );
}
