import { referencesIraContent } from "@/data/service-ira-content";
import { SecondaryReading } from "@/components/editorial/SecondaryReading";

export function ReferencesIraSection() {
  return (
    <SecondaryReading id="references" tinted eyebrow={referencesIraContent.eyebrow} title={referencesIraContent.heading}>
      <ul className="references">
        {referencesIraContent.items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-link" target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
            <p>{item.description}</p>
            <p className="fine source-address">{item.href}</p>
          </li>
        ))}
      </ul>
      <p className="fine">{referencesIraContent.fine}</p>
    </SecondaryReading>
  );
}
