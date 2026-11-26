import Link from "next/link";
import { fourOhOneKRouteContent } from "@/data/service-ira-content";

export function FourOhOneKRouteSection() {
  return (
    <section className="ira-route">
      <div className="wrap">
        <p className="eyebrow">{fourOhOneKRouteContent.eyebrow}</p>
        <Link href={fourOhOneKRouteContent.href}>{fourOhOneKRouteContent.label}</Link>
      </div>
    </section>
  );
}
