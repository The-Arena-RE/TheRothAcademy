import Link from "next/link";
import { iraRouteContent } from "@/data/service-401k-v2-content";

export function IraRouteSection() {
  return (
    <section className="ira-route">
      <div className="wrap">
        <p className="eyebrow">{iraRouteContent.eyebrow}</p>
        <Link href={iraRouteContent.href}>{iraRouteContent.label}</Link>
      </div>
    </section>
  );
}
