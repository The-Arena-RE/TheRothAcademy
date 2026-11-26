import { establishPlan } from "@/data/contact-content";
import { planDestinations } from "@/data/site-config";

// establishPlan.cards[].label is all-caps for the site's default (uppercased)
// heading style; this page turns that transform off, so display it in
// title case here instead of changing the shared data field.
const DISPLAY_LABEL: Record<string, string> = {
  "SELF-DIRECTED 401(K)": "Self-Directed 401(k)",
  "SELF-DIRECTED IRA": "Self-Directed IRA",
};

export function PlanBandSection() {
  return (
    <section className="contact-band plan-band" id="establish-plan">
      <div className="contact-wrap">
        <div className="contact-intro">
          <p className="eyebrow">{establishPlan.eyebrow}</p>
          <h2>
            {establishPlan.heading[0]} {establishPlan.heading[1]}
          </h2>
          <p className="contact-lead">{establishPlan.intro}</p>
        </div>
        <div className="contact-plan-grid">
          {establishPlan.cards.map((card) => (
            <article key={card.label} className="contact-plan-card">
              <p className="eyebrow">{card.tagline}</p>
              <h3>{DISPLAY_LABEL[card.label] ?? card.label}</h3>
              <p>{card.description}</p>
              <div className="actions">
                <a href={planDestinations.openPlan} className="button">
                  {card.primaryLabel}
                </a>
                <a href={card.href} className="text-link">
                  {card.secondaryLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <a href={establishPlan.supportingHref} className="text-link compare-link">
          {establishPlan.supportingLabel}
        </a>
      </div>
    </section>
  );
}
