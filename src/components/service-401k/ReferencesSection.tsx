import { references401kContent } from "@/data/service-401k-v2-content";
import { SecondaryReading } from "@/components/editorial/SecondaryReading";

export function ReferencesSection() {
  return (
    <SecondaryReading id="references" tinted eyebrow={references401kContent.eyebrow} title={references401kContent.heading}>
      <ul className="references">
        {references401kContent.items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-link" target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
            <p>{item.description}</p>
            <p className="fine source-address">{item.href}</p>
          </li>
        ))}
      </ul>
      <p className="fine">{references401kContent.fine}</p>
    </SecondaryReading>
  );
}
