import Image from "next/image";
import { explainerContent } from "@/data/service-401k-v2-content";

export function ExplainerSection() {
  return (
    <section className="service-section service-explainer">
      <div className="wrap service-split">
        <article>
          <div className="service-intro">
            <p className="eyebrow">{explainerContent.eyebrow}</p>
            <h2>{explainerContent.heading}</h2>
          </div>
          {explainerContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <Image
          src={explainerContent.image}
          alt={explainerContent.imageAlt}
          width={1025}
          height={1280}
          sizes="(min-width: 760px) 45vw, 100vw"
          className="service-figure"
        />
      </div>
    </section>
  );
}
