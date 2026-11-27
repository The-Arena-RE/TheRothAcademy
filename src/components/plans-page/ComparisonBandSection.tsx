import { plansComparison } from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

export function ComparisonBandSection() {
  return (
    <section className="plans-band comparison-band" id="comparison">
      <div className="plans-wrap">
        <div className="plans-intro">
          <p className="eyebrow">{plansComparison.eyebrow}</p>
          <h2>
            {plansComparison.heading[0]} {plansComparison.heading[1]}
          </h2>
          <p className="plans-lead">{plansComparison.intro}</p>
        </div>
        <div className="comparison-frame">
          <table role="table" className="comparison-table">
            <caption className="plans-sr">
              Side-by-side comparison of the Self-Directed 401(k) and the Self-Directed IRA
            </caption>
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">
                  Start with the question
                </th>
                {plansComparison.columns.map((column) => (
                  <th scope="col" role="columnheader" key={column}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup">
              {plansComparison.rows.map((row) => (
                <tr role="row" key={row.question}>
                  <th scope="row" role="rowheader">
                    {row.question}
                  </th>
                  {row.answers.map((answer, index) => (
                    <td role="cell" key={index}>
                      {answer}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="actions comparison-actions">
          {plansComparison.columnCtas.map((cta, index) => (
            <a href={index === 0 ? planDestinations.open401k : planDestinations.openIra} className="button" key={cta.label}>
              {cta.label}
            </a>
          ))}
          <a href="/contact" className="text-link">
            Help Me Choose
          </a>
        </div>
        <p className="comparison-note">{plansComparison.note}</p>
        <div className="plan-links">
          {plansComparison.references.map((ref) => (
            <a href={ref.href} className="text-link" target="_blank" rel="noopener noreferrer" key={ref.href}>
              {ref.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
