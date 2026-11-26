import { comparisonContent } from "@/data/service-401k-v2-content";
import { SecondaryReading } from "@/components/editorial/SecondaryReading";

export function ComparisonSection() {
  return (
    <SecondaryReading id="plan-comparison" eyebrow={comparisonContent.eyebrow} title={comparisonContent.heading}>
      <table aria-label="Self-directed and conventional 401(k) investment menus" className="comparison">
        <thead>
          <tr>
            {comparisonContent.columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonContent.rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fine table-note">{comparisonContent.note}</p>
    </SecondaryReading>
  );
}
