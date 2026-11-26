import Link from "next/link";
import Image from "next/image";
import { pathwaysContent } from "@/data/homepage-v2-content";

export function Pathways2() {
  return (
    <section className="section" id="pathways">
      <div className="wrap">
        <div className="section-intro">
          <p className="eyebrow">{pathwaysContent.eyebrow}</p>
          <h2>{pathwaysContent.heading}</h2>
        </div>
        <p>{pathwaysContent.paragraph}</p>
        <ul className="plan-grid">
          {pathwaysContent.cards.map((card) => (
            <li key={card.number}>
              <Link className="plan-card" href={card.href}>
                <div className="plan-media">
                  <Image
                    className="plan-photo"
                    src={card.photo}
                    alt={card.photoAlt}
                    fill
                    sizes="(min-width: 930px) 40vw, 100vw"
                  />
                </div>
                <div className="plan-body">
                  <span className="number">{card.number}</span>
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3>{card.heading}</h3>
                  <p>{card.paragraph}</p>
                  <span className="text-link">{card.linkLabel}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
