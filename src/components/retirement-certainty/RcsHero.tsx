import { ArrowUpRight } from "lucide-react";
import { rcsContent } from "@/data/retirement-certainty-session-content";

const HERO_RIGHT_STYLES = `
.hero-right-wrap {
  position: relative;
  max-width: 480px;
  margin: 0 auto;
}

.hero-photo-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 32px 80px rgba(0,0,0,0.2);
}

.hero-photo-card img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: top center;
}

.hero-photo-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(12,12,12,0.85));
  padding: 40px 28px 28px;
}

.hero-photo-name {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.hero-photo-title {
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hf-card-1 {
  position: absolute;
  top: 28px;
  right: -40px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  min-width: 150px;
  z-index: 10;
}

.hf-bar {
  height: 3px;
  width: 36px;
  background: #B89958;
  border-radius: 2px;
  margin-bottom: 10px;
}

.hf-num {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #0C0C0C;
  line-height: 1;
}

.hf-label {
  font-size: 11px;
  color: #8C959D;
  margin-top: 4px;
  line-height: 1.4;
}

.hf-card-2 {
  position: absolute;
  bottom: 140px;
  left: -20px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  min-width: 160px;
  z-index: 10;
}

.hero-cred-strip {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
  justify-content: center;
}

.hero-cred-pill {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(184,153,88,0.35);
  border-radius: 100px;
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
}

@media(max-width: 768px) {
  .hf-card-1 {
    right: -10px;
    top: 10px;
    padding: 10px 14px;
    min-width: 120px;
  }

  .hf-card-2 {
    left: -10px;
    bottom: 160px;
    padding: 8px 12px;
    min-width: 130px;
  }

  .hf-num {
    font-size: 20px;
  }

  .hf-label {
    font-size: 10px;
    line-height: 1.2;
  }

  .hf-bar {
    height: 2px;
    width: 24px;
    margin-bottom: 6px;
  }

  .hero-photo-overlay {
    padding: 60px 20px 20px;
    z-index: 20;
  }

  .hero-photo-name {
    font-size: 18px;
  }

  .hero-photo-title {
    font-size: 10px;
    line-height: 1.3;
  }
}
`;

export function RcsHero() {
  const { hero } = rcsContent;

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2">
      <style>{HERO_RIGHT_STYLES}</style>

      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/rcs-hero-background.mp4" type="video/mp4" />
      </video>

      {/* Scrim for text legibility over the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(12,12,12,0.93) 0%, rgba(12,12,12,0.86) 35%, rgba(12,12,12,0.55) 62%, rgba(12,12,12,0.72) 100%), linear-gradient(0deg, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.15) 30%, rgba(12,12,12,0.3) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-1/2 h-[140%] w-[65%] -translate-y-1/2 rounded-full opacity-30 mix-blend-screen md:-right-[5%] md:w-[50%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(50px)",
        }}
      />

      <div className="container-brand relative grid gap-14 pb-16 pt-20 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-24 md:pt-48">
        <div className="min-w-0">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1
            className="max-w-2xl"
            style={{
              marginTop: 24,
              fontSize: "clamp(40px, 6vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-playfair-display), 'Playfair Display', serif",
              textTransform: "none",
            }}
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-lg text-base text-r-muted font-body normal-case">{hero.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {hero.cta}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>
        </div>

        <div className="hero-right-wrap">
          <div className="hf-card-1">
            <div className="hf-bar" />
            <div className="hf-num">25+</div>
            <div className="hf-label">Years of Specialist Experience</div>
          </div>

          <div className="hero-photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/story/tim-berry.webp" alt="Self-Directed Retirement Plan Specialist" />
            <div className="hero-photo-overlay">
              <div className="hero-photo-name">TIM BERRY</div>
              <div className="hero-photo-title">Self-Directed Retirement Plan Specialist</div>
            </div>
          </div>

          <div className="hf-card-2">
            <div className="hf-bar" />
            <div className="hf-num">400%</div>
            <div className="hf-label">Value Guarantee or full refund</div>
          </div>

          <div className="hero-cred-strip">
            {hero.tags.map((tag) => (
              <div className="hero-cred-pill" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
