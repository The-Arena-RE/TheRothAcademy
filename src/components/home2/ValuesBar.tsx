import { valuesBar } from "@/data/homepage-v2-content";

export function ValuesBar() {
  return (
    <div className="values">
      <ul className="wrap">
        {valuesBar.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
