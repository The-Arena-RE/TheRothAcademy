import { iraCategoriesContent } from "@/data/service-ira-content";

export function IraCategoriesSection() {
  return (
    <section className="service-section dark">
      <div className="wrap">
        <div className="service-intro">
          <p className="eyebrow">{iraCategoriesContent.eyebrow}</p>
          <h2>{iraCategoriesContent.heading}</h2>
        </div>
        <div className="ira-categories">
          {iraCategoriesContent.categories.map((category) => (
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
