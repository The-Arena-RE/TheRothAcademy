import { comparisonIraContent } from "@/data/service-ira-content";
import { SecondaryReading } from "@/components/editorial/SecondaryReading";

export function ComparisonIraSection() {
  return (
    <SecondaryReading id="plan-comparison" eyebrow={comparisonIraContent.eyebrow} title={comparisonIraContent.heading}>
      <table aria-label="Self-directed IRA and conventional brokerage IRA" className="comparison">
        <thead>
          <tr>
            {comparisonIraContent.columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonIraContent.rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fine table-note">{comparisonIraContent.note}</p>
    </SecondaryReading>
  );
}
