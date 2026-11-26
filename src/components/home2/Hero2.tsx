"use client";

import { heroContent } from "@/data/homepage-v2-content";
import { Reveal } from "@/components/editorial/Reveal";
import { useVideoBackground } from "./useVideoBackground";

export function Hero2() {
  const { videoRef, regionRef, label, showToggle, toggle } = useVideoBackground<HTMLElement>();

  return (
    <section ref={regionRef} className="hero dark">
      <video ref={videoRef} className="hero-stage" poster="/homepage/hero-poster.webp" muted playsInline loop preload="none" aria-hidden="true">
        <source src="/homepage/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <h1>
            {heroContent.heading[0]}
            <br />
            <span className="strike">{heroContent.heading[1]}</span> <span>{heroContent.heading[2]}</span>
          </h1>
          <p className="hero-note">{heroContent.note}</p>
          <div className="actions">
            <a href={heroContent.primaryCta.href} className="button">
              {heroContent.primaryCta.label}
            </a>
            <a href={heroContent.secondaryCta.href} className="button secondary">
              {heroContent.secondaryCta.label}
            </a>
          </div>
          <Reveal summary={heroContent.reveal.summary}>
            <p>{heroContent.reveal.paragraph}</p>
          </Reveal>
        </div>
      </div>
      <button type="button" className="motion-toggle" hidden={!showToggle} onClick={toggle}>
        {label}
      </button>
    </section>
  );
}
