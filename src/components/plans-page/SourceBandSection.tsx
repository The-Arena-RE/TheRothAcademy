import { plansReferences } from "@/data/plans-content";

export function SourceBandSection() {
  return (
    <section className="plans-band source-band">
      <div className="plans-wrap">
        <div className="plans-intro">
          <p className="eyebrow">Official References</p>
          <h2>Explore The Rules Behind The Possibilities</h2>
        </div>
        <ul className="source-list">
          {plansReferences.map((ref) => (
            <li key={ref.href}>
              <a href={ref.href} className="text-link" target="_blank" rel="noreferrer">
                {ref.title}
              </a>
              <p>{ref.description}</p>
            </li>
          ))}
        </ul>
        <p className="investment-disclaimer">
          These references support the factual statements on this page. They are not an endorsement of Roth Academy
          by any government agency.
        </p>
      </div>
    </section>
  );
}
