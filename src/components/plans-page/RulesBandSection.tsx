import { commonGround, questionAboutControl } from "@/data/plans-content";

const rules = [commonGround, questionAboutControl];

export function RulesBandSection() {
  return (
    <section className="plans-band rules-band">
      <div className="plans-wrap">
        {rules.map((rule) => (
          <details className="plans-disclosure rule-disclosure" key={rule.eyebrow}>
            <summary>
              <span>
                <span className="eyebrow">{rule.eyebrow}</span>
                <span className="rule-title">
                  {rule.heading[0]} {rule.heading[1]}
                </span>
              </span>
              <span aria-hidden="true" className="mark">
                +
              </span>
            </summary>
            <div className="rule-content">
              {rule.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{rule.featured}</p>
              <div className="plan-links">
                {rule.links.map((link) => (
                  <a href={link.href} className="text-link" key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
