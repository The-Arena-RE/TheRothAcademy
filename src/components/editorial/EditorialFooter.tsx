import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerNav, legalNav } from "@/data/site-config";

export function EditorialFooter() {
  return (
    <footer className="footer dark">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <Image src="/roth-logo.png" alt={siteConfig.name} width={163} height={180} />
            </Link>
            <p>
              Self-directed retirement.
              <br />
              Advanced thinking.
              <br />
              A team behind your next move.
            </p>
          </div>

          <div>
            <h3>{footerNav.startHere.title}</h3>
            <ul>
              {footerNav.startHere.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{footerNav.academy.title}</h3>
            <ul>
              {footerNav.academy.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{footerNav.nextStep.title}</h3>
            <ul>
              {footerNav.nextStep.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="footer-contact">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
            </div>
          </div>
        </div>

        <div className="legal fine">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div>
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="disclaimer fine">{siteConfig.disclaimer}</p>
      </div>
    </footer>
  );
}
