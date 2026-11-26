import Image from "next/image";
import { distinctionContent } from "@/data/homepage-v2-content";
import { Reveal } from "./Reveal";

export function DistinctionSection() {
  return (
    <section className="section distinction">
      <div className="distinction-layout">
        <div className="bleed-media">
          <Image className="bleed-photo" src={distinctionContent.photo} alt="" fill sizes="(min-width: 760px) 50vw, 100vw" />
        </div>
        <div className="distinction-copy">
          <div className="section-intro">
            <p className="eyebrow">{distinctionContent.eyebrow}</p>
            <h2>{distinctionContent.heading}</h2>
          </div>
          <div className="rich-text">
            <p className="callout">{distinctionContent.callout}</p>
            <Reveal summary={distinctionContent.reveal.summary}>
              {distinctionContent.reveal.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
            <p className="fine">{distinctionContent.fine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
