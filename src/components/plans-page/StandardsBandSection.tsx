import { whyRothAcademyPlans } from "@/data/plans-content";

export function StandardsBandSection() {
  return (
    <section className="plans-band standards-band dark">
      <div className="plans-wrap">
        <div className="plans-intro">
          <p className="eyebrow">{whyRothAcademyPlans.eyebrow}</p>
          <h2>
            {whyRothAcademyPlans.heading[0]} {whyRothAcademyPlans.heading[1]}
          </h2>
          <p className="plans-lead">{whyRothAcademyPlans.intro}</p>
        </div>
        <ul className="standard-grid">
          {whyRothAcademyPlans.items.map((item) => (
            <li key={item.number}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        <p className="standards-quote">{whyRothAcademyPlans.note}</p>
        <a href={whyRothAcademyPlans.linkHref} className="text-link">
          {whyRothAcademyPlans.linkLabel}
        </a>
      </div>
    </section>
  );
}
