import Link from "next/link";
import Image from "next/image";
import { profileContent } from "@/data/homepage-v2-content";
import { Reveal } from "@/components/editorial/Reveal";

export function ProfileSection() {
  return (
    <section className="section tinted">
      <div className="wrap profile-layout">
        <div className="profile-visual">
          <figure className="profile-figure">
            <div className="portrait">
              <Image src={profileContent.photo} alt={profileContent.name} width={960} height={960} />
            </div>
            <figcaption>
              <strong>{profileContent.name}</strong> <span>{profileContent.title}</span>
            </figcaption>
          </figure>
          <div className="profile-note">
            <p>{profileContent.note}</p>
            <Link href={profileContent.noteHref} className="text-link">
              {profileContent.noteLinkLabel}
            </Link>
          </div>
        </div>
        <div>
          <div className="section-intro">
            <p className="eyebrow">{profileContent.eyebrow}</p>
            <h2>{profileContent.heading}</h2>
          </div>
          <div className="rich-text">
            <Reveal summary={profileContent.reveal.summary}>
              {profileContent.reveal.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
          <div className="principles">
            {profileContent.principles.map((principle) => (
              <div key={principle.heading}>
                <h3>{principle.heading}</h3>
                <p>{principle.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
