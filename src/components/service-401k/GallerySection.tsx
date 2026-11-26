import Image from "next/image";
import { galleryContent } from "@/data/service-401k-v2-content";

export function GallerySection() {
  return (
    <section className="service-section dark investment-gallery">
      <div className="gallery-stage">
        <Image src={galleryContent.image} alt="" fill sizes="100vw" />
        <div className="wrap">
          <div className="service-intro">
            <p className="eyebrow">{galleryContent.eyebrow}</p>
            <h2>{galleryContent.heading}</h2>
            <p>{galleryContent.paragraph}</p>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="category-strip">
          {galleryContent.categories.map((category) => (
            <article key={category.heading}>
              <h3>{category.heading}</h3>
              <p>{category.paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
