import { product401k, productIra } from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

const profiles = [
  { name: "Self-Directed 401(k)", content: product401k, primaryHref: planDestinations.open401k },
  { name: "Self-Directed IRA", content: productIra, primaryHref: planDestinations.openIra },
];

export function ProfileBandSection() {
  return (
    <section className="plans-band profile-band">
      <div className="plans-wrap">
        <h2>Explore Each Plan</h2>
        <div className="profile-grid">
          {profiles.map(({ name, content, primaryHref }) => (
            <article className="plan-profile" key={name}>
              <p className="eyebrow">{content.eyebrow}</p>
              <h3>{name}</h3>
              <p className="profile-subtitle">
                {content.heading[0]} {content.heading[1]}
              </p>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <details className="plans-disclosure">
                <summary>
                  Features and eligibility
                  <span aria-hidden="true" className="mark">
                    +
                  </span>
                </summary>
                <div className="profile-details">
                  <dl>
                    {content.features.map((feature) => (
                      <div key={feature.title}>
                        <dt>{feature.title}</dt>
                        <dd>{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="profile-note">{content.qualification}</p>
                </div>
              </details>
              <p className="profile-quote">{content.aspiration}</p>
              <div className="actions">
                <a href={primaryHref} className="button">
                  {content.primaryLabel}
                </a>
                <a href={content.secondaryHref} className="text-link">
                  {content.secondaryLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
