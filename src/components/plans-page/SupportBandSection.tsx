import { existingPlanBanner } from "@/data/plans-content";

export function SupportBandSection() {
  return (
    <section className="plans-band support-band">
      <div className="plans-wrap">
        <div>
          <h2>{existingPlanBanner.heading}</h2>
          <p>{existingPlanBanner.description}</p>
        </div>
        <a href={existingPlanBanner.href} className="button">
          {existingPlanBanner.cta}
        </a>
      </div>
    </section>
  );
}
