import Image from "next/image";
import Link from "next/link";
import { learnCollections } from "@/data/learn-content";
import { curriculum401k, curriculumIra } from "@/data/learn-curriculum";

const moduleCounts = [curriculum401k.length, curriculumIra.length];

export function CollectionsSection() {
  return (
    <section className="learn-band collections" id="investments">
      <div className="learn-wrap">
        {learnCollections.map((collection, index) => (
          <Link key={collection.href} href={collection.href} className="collection-card">
            <div className="cover">
              <Image src={collection.image} alt="" fill sizes="(min-width: 990px) 30vw, 100vw" />
            </div>
            <div className="collection-copy">
              <p className="eyebrow">{collection.eyebrow}</p>
              <h3>{collection.heading}</h3>
              <p>{collection.description}</p>
              <div className="collection-meta">
                <span className="fine">{moduleCounts[index]} published lessons</span>
                <span className="text-link">{collection.ctaLabel}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
