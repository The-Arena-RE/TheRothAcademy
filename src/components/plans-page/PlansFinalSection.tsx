import { plansFinalConversion } from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

export function PlansFinalSection() {
  return (
    <section className="plans-band plans-final dark">
      <div className="plans-wrap">
        <p className="eyebrow">The Right Plan For The Future You Want</p>
        <h2>
          {plansFinalConversion.heading[0]} {plansFinalConversion.heading[1]} {plansFinalConversion.heading[2]}
        </h2>
        <p className="plans-lead">{plansFinalConversion.description}</p>
        <div className="actions">
          <a href={planDestinations.open401k} className="button">
            Start My Self-Directed 401(k)
          </a>
          <a href={planDestinations.openIra} className="button">
            Start My Self-Directed IRA
          </a>
        </div>
        <p className="final-note">{plansFinalConversion.signature}</p>
      </div>
    </section>
  );
}
