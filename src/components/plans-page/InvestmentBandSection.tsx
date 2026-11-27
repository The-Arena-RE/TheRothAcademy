import Image from "next/image";
import { investmentGallery } from "@/data/plans-content";
import { assetClasses } from "@/data/home-content";

export function InvestmentBandSection() {
  return (
    <section className="plans-band investment-band">
      <div className="plans-wrap">
        <div className="plans-intro">
          <p className="eyebrow">{investmentGallery.eyebrow}</p>
          <h2>
            {investmentGallery.heading[0]} {investmentGallery.heading[1]}
          </h2>
          <p className="plans-lead">{investmentGallery.intro}</p>
        </div>
        <p className="investment-quote">{investmentGallery.tagline.join(" ")}</p>
        <ul className="investment-gallery">
          {assetClasses.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <Image src={item.image} alt="" width={460} height={300} />
                <div className="investment-description">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="investment-disclaimer">{investmentGallery.footnote}</p>
      </div>
    </section>
  );
}
