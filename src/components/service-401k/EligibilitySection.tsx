import Image from "next/image";
import { eligibilityContent } from "@/data/service-401k-v2-content";

export function EligibilitySection() {
  return (
    <section className="service-section fit-section eligibility-feature">
      <div className="eligibility-layout">
        <figure className="eligibility-photo">
          <Image src={eligibilityContent.image} alt={eligibilityContent.imageAlt} fill sizes="(min-width: 760px) 45vw, 100vw" />
        </figure>
        <div className="eligibility-panel">
          <div className="service-intro">
            <p className="eyebrow">{eligibilityContent.eyebrow}</p>
            <h2>{eligibilityContent.heading}</h2>
            <p>{eligibilityContent.paragraph}</p>
          </div>
          <ul className="fit-list">
            {eligibilityContent.fitList.map((item) => (
              <li key={item.heading}>
                <strong>{item.heading}</strong>
                <p>{item.paragraph}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
