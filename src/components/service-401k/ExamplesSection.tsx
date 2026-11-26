import Image from "next/image";
import { examplesContent } from "@/data/service-401k-v2-content";
import { Reveal } from "@/components/editorial/Reveal";

export function ExamplesSection() {
  const { feature, stories } = examplesContent;

  return (
    <section className="service-section tinted examples" id="investment-examples">
      <div className="wrap examples-lead">
        <div className="service-intro">
          <p className="eyebrow">{examplesContent.eyebrow}</p>
          <h2>{examplesContent.heading}</h2>
        </div>
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
      <div className="wrap">
        <div className="story-stack">
          {stories.map((story) => (
            <details name="investment-example" key={story.heading}>
              <summary>
                <span className="eyebrow">{story.eyebrow}</span>
                <strong>{story.heading}</strong>
              </summary>
              <div className="story-body">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="case-flow">{story.caseFlow}</p>
                <p>{story.closingParagraph}</p>
                <p className="fine">{story.fine}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
