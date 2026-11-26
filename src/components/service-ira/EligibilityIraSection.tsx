import Image from "next/image";
import { eligibilityIraContent } from "@/data/service-ira-content";

export function EligibilityIraSection() {
  return (
    <section className="service-section fit-section eligibility-feature">
      <div className="eligibility-layout">
        <figure className="eligibility-photo">
          <Image src={eligibilityIraContent.image} alt={eligibilityIraContent.imageAlt} fill sizes="(min-width: 760px) 45vw, 100vw" />
        </figure>
        <div className="eligibility-panel">
          <div className="service-intro">
            <p className="eyebrow">{eligibilityIraContent.eyebrow}</p>
            <h2>{eligibilityIraContent.heading}</h2>
          </div>
          <ul className="fit-list">
            {eligibilityIraContent.fitList.map((item) => (
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
