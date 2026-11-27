import Image from "next/image";
import Link from "next/link";
import { planDestinations } from "@/data/site-config";

export function Learn401kLibraryHero() {
  return (
    <section className="library-hero dark">
      <div className="library-wrap">
        <nav aria-label="Breadcrumb" className="library-breadcrumb">
          <Link href="/learn">Knowledge Library</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Self-Directed 401(k)</span>
        </nav>
        <div className="library-hero-grid">
          <div className="library-hero-copy">
            <p className="eyebrow">The Entrepreneur&apos;s Collection</p>
            <h1>
              You Built Something Of Your Own. <span>Discover What Else You Could Build.</span>
            </h1>
            <p className="library-hero-lead">
              Imagine investing in vacant land, rental houses, private loans, commercial properties, or private
              businesses through a qualifying self-directed 401(k). Explore fascinating investment examples, real
              numbers, and easy-to-understand lessons designed for eligible self-employed individuals and business
              owners.
            </p>
            <div className="actions">
              <a href="#lessons" className="button">
                Browse the lessons
              </a>
              <a href={planDestinations.open401k} className="button secondary">
                Start My Self-Directed 401(k)
              </a>
              <a href="/plans" className="text-link">
                Not Sure Which Plan Fits?
              </a>
            </div>
          </div>
          <div className="library-hero-photo">
            <Image
              alt="A crane lifts a prefabricated wall panel above a building under construction"
              src="/learn/401k-library-hero.webp"
              fill
              sizes="(max-width: 900px) 100vw, 549px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
