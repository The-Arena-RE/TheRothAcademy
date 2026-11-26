import Link from "next/link";
import { routePickerContent } from "@/data/homepage-v2-content";

export function RoutePickerSection() {
  return (
    <section className="section route-picker">
      <div className="wrap">
        <div className="section-intro">
          <p className="eyebrow">{routePickerContent.eyebrow}</p>
          <h2>{routePickerContent.heading}</h2>
        </div>
        <ul className="route-featured">
          {routePickerContent.featured.map((route) => (
            <li key={route.href}>
              <Link href={route.href}>
                <span className="route-description">{route.description}</span>
                <strong>{route.label}</strong>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="route-secondary">
          {routePickerContent.secondary.map((route) => (
            <li key={route.href}>
              <Link href={route.href}>
                <span className="route-description">{route.description}</span>
                <strong>{route.label}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
