import { plansScenarios } from "@/data/plans-content";

export function ExampleBandSection() {
  return (
    <section className="plans-band example-band">
      <div className="plans-wrap">
        <div className="plans-intro">
          <p className="eyebrow">{plansScenarios.eyebrow}</p>
          <h2>
            {plansScenarios.heading[0]} {plansScenarios.heading[1]}
          </h2>
        </div>
        <ul className="scenario-list">
          {plansScenarios.items.map((item) => (
            <li key={item.number}>
              <h3>{item.title}</h3>
              <div>
                <p>{item.description}</p>
                <a href={item.href} className="text-link">
                  {item.pathLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
