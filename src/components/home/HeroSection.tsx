import { ArrowUpRight, Landmark, Layers, BookOpen, Compass } from "lucide-react";
import { heroCapabilities, heroContent } from "@/data/home-content";

const icons = { landmark: Landmark, layers: Layers, "book-open": BookOpen, compass: Compass };

export function HeroSection() {
  return (
    <>
      <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden border-b border-r-line">
        {/* City-at-dusk background video — sets a financial-district tone behind the gold brand palette */}
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Scrim for text legibility over the video */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(9,10,11,0.96) 0%, rgba(9,10,11,0.88) 32%, rgba(9,10,11,0.55) 60%, rgba(9,10,11,0.75) 100%), linear-gradient(0deg, rgba(9,10,11,0.9) 0%, rgba(9,10,11,0.2) 35%, rgba(9,10,11,0.35) 100%)",
          }}
        />

        {/* Abstract gold arc — original graphic, not a stock/borrowed asset */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] top-1/2 h-[140%] w-[70%] -translate-y-1/2 rounded-full opacity-40 mix-blend-screen md:-right-[5%] md:w-[55%]"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
            filter: "blur(40px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[15%] top-1/2 h-[90%] w-[45%] -translate-y-1/2 rounded-full border border-r-gold/30 md:-right-[8%]"
        />

        <div className="container-brand relative w-full pb-20 pt-32 md:pb-28 md:pt-40">
          <p
            className="flex items-center gap-3 font-semibold uppercase text-r-gold"
            style={{ fontSize: 11, letterSpacing: "0.14em" }}
          >
            <span className="h-px w-8 bg-r-gold" aria-hidden />
            {heroContent.eyebrow}
          </p>

          <h1
            className="max-w-5xl text-r-white"
            style={{
              marginTop: 35,
              fontSize: "clamp(38px, 6.2vw, 84px)",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block md:inline">{heroContent.title[0]}</span>{" "}
            <span className="block text-r-muted/50 line-through decoration-r-gold/30 md:inline">
              {heroContent.title[1]}
            </span>
            <em className="block not-italic text-r-gold">{heroContent.title[2]}</em>
          </h1>

          <p className="mt-6 max-w-lg text-base text-r-muted font-body normal-case">
            {heroContent.description}
          </p>

          <p className="mt-5 max-w-xl border-l-2 border-r-gold pl-4 text-lg text-r-white">
            {heroContent.featured}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroContent.primaryHref}
              className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {heroContent.primaryLabel}
              <ArrowUpRight size={18} aria-hidden />
            </a>
            <a
              href={heroContent.secondaryHref}
              className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-line/60 bg-r-bg/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-white backdrop-blur-sm transition-colors hover:border-r-gold hover:text-r-gold"
            >
              {heroContent.secondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-r-line bg-r-bg">
        <div className="container-brand grid gap-6 divide-r-line py-6 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {heroCapabilities.map((item) => {
            const Icon = icons[item.icon];
            return (
              <span
                key={item.label}
                className="flex items-center gap-2 px-0 text-sm text-r-muted font-body normal-case sm:px-6 sm:first:pl-0"
              >
                <Icon size={18} className="shrink-0 text-r-gold" aria-hidden />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
