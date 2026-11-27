import { planFinder } from "@/data/plans-content";
import { EditorialPlanFinder } from "@/components/plans-page/EditorialPlanFinder";

export function FinderBandSection() {
  return (
    <section className="plans-band finder-band dark" id="plan-finder">
      <div className="plans-wrap">
        <div className="finder-copy">
          <p className="eyebrow">{planFinder.eyebrow}</p>
          <h2>
            {planFinder.heading[0]} {planFinder.heading[1]}
          </h2>
          <p className="plans-lead">{planFinder.intro}</p>
          <p className="finder-disclosure">{planFinder.disclaimer}</p>
        </div>
        <EditorialPlanFinder />
      </div>
    </section>
  );
}
