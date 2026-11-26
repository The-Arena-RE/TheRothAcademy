"use client";

import { standardStatementContent } from "@/data/homepage-v2-content";
import { useVideoBackground } from "./useVideoBackground";

export function StandardStatementSection() {
  const { videoRef, regionRef, label, showToggle, toggle } = useVideoBackground<HTMLDivElement>();

  return (
    <section className="section standard statement dark" id="roth-academy-standard">
      <div ref={regionRef} className="standard-stage">
        <video ref={videoRef} className="standard-video" poster="/homepage/standard-poster.webp" muted playsInline loop preload="none" aria-hidden="true">
          <source type="video/mp4" src="/homepage/standard-video.mp4" />
        </video>
        <div className="wrap standard-stage-inner">
          <div className="section-intro">
            <p className="eyebrow">{standardStatementContent.eyebrow}</p>
            <h2>{standardStatementContent.heading}</h2>
          </div>
          <p className="statement-quote">{standardStatementContent.quote}</p>
          <a href={standardStatementContent.ctaHref} className="button">
            {standardStatementContent.ctaLabel}
          </a>
        </div>
        <button type="button" className="motion-toggle" hidden={!showToggle} onClick={toggle}>
          {label}
        </button>
      </div>
      <div className="wrap statement-copy">
        {standardStatementContent.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
