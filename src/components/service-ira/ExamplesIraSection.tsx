import Image from "next/image";
import { examplesIraContent } from "@/data/service-ira-content";
import { Reveal } from "@/components/editorial/Reveal";

export function ExamplesIraSection() {
  const { feature, loan } = examplesIraContent;

  return (
    <section className="service-section tinted examples ira-examples" id="investment-examples">
      <div className="wrap">
        <div className="service-intro">
          <p className="eyebrow">{examplesIraContent.eyebrow}</p>
          <h2>{examplesIraContent.heading}</h2>
        </div>
        <article className="example-feature">
          <figure>
            <Image src={feature.image} alt={feature.imageAlt} fill sizes="(min-width: 760px) 55vw, 100vw" />
            <figcaption>{feature.caption}</figcaption>
          </figure>
          <div className="example-copy">
            <p className="eyebrow">{feature.eyebrow}</p>
            <h3>{feature.heading}</h3>
            <p>{feature.paragraph}</p>
            <ol className="example-flow">
              {feature.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="fine">{feature.fine1}</p>
            <Reveal summary={feature.reveal.summary}>
              <p className="fine">{feature.reveal.paragraph}</p>
            </Reveal>
            <p className="fine">{feature.fine2}</p>
          </div>
        </article>
        <details className="ira-loan">
          <summary>{loan.summary}</summary>
          <div className="story-body">
            {loan.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="fine">{loan.fine}</p>
          </div>
        </details>
      </div>
    </section>
  );
}
