import Image from "next/image";
import { investmentsContent } from "@/data/homepage-v2-content";

export function Investments2() {
  return (
    <section className="section dark investments-section" id="investments">
      <div className="investments-banner">
        <Image src={investmentsContent.banner} alt="" fill sizes="100vw" className="investments-photo" />
        <div className="wrap">
          <div className="section-intro">
            <p className="eyebrow">{investmentsContent.eyebrow}</p>
            <h2>{investmentsContent.heading}</h2>
          </div>
          <p>{investmentsContent.paragraph}</p>
        </div>
      </div>
      <div className="investments-layout">
        <div className="investment-grid">
          {investmentsContent.cards.map((card) => (
            <article className="investment-card" key={card.number}>
              <div className="card-media">
                <Image src={card.photo} alt={card.photoAlt} fill sizes="(min-width: 980px) 33vw, 100vw" loading="lazy" />
              </div>
              <span className="number">{card.number}</span>
              <div className="card-copy">
                <h3>{card.heading}</h3>
                <p>
                  <strong>{card.featured}</strong>
                </p>
                <details>
                  <summary>{card.summary}</summary>
                  <p>{card.detail}</p>
                </details>
                <a href={card.href} className="text-link">
                  {card.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="fine">{investmentsContent.fine}</p>
      </div>
    </section>
  );
}
