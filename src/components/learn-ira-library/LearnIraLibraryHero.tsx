import Image from "next/image";
import Link from "next/link";
import { planDestinations } from "@/data/site-config";

export function LearnIraLibraryHero() {
  return (
    <section className="library-hero dark">
      <div className="library-wrap">
        <nav aria-label="Breadcrumb" className="library-breadcrumb">
          <Link href="/learn">Knowledge Library</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Self-Directed IRA</span>
        </nav>
        <div className="library-hero-grid">
          <div className="library-hero-copy">
            <p className="eyebrow">The Individual Investor&apos;s Collection</p>
            <h1>
              Extraordinary Investments <span>Aren&apos;t Just For Wall Street.</span>
            </h1>
            <p className="library-hero-lead">
              Imagine owning investment land, collecting rental income, receiving interest from private loans, or
              investing in privately held companies through a qualifying self-directed IRA. You don&apos;t need to own
              a business to establish an IRA. Explore captivating examples, specific investment scenarios, and
              lessons that make complex financial ideas incredibly simple.
            </p>
            <div className="actions">
              <a href="#lessons" className="button">
                Browse the lessons
              </a>
              <a href={planDestinations.openIra} className="button secondary">
                Start My Self-Directed IRA
              </a>
              <a href="/plans" className="text-link">
                Not Sure Which Plan Fits?
              </a>
            </div>
          </div>
          <div className="library-hero-photo">
            <Image
              alt="Sunlight through tree branches across a row of New York brownstones"
              src="/learn/ira-library-hero.webp"
              fill
              sizes="(max-width: 900px) 100vw, 630px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
