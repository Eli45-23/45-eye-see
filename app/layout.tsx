import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/src/content/business";
import "./globals.css";

const phoneHref = `tel:+1${business.phone.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: `${business.businessNameLegal} | ${business.publicName}`,
  description:
    `Licensed and insured ${business.locationLabel} electrical contractor serving ${business.serviceAreas.join(", ")}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap header-inner">
            <div>
              <p className="eyebrow">{business.businessNameLegal}</p>
              <p className="brand">{business.publicName}</p>
            </div>
            <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
              Call {business.phone}
            </a>
          </div>
          <nav className="wrap site-nav" aria-label="Main">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="wrap footer-inner">
            <p>
              {business.locationLabel} service across {business.mustMentionNeighborhoods[1]}
              , {business.mustMentionNeighborhoods[2]}, {business.mustMentionNeighborhoods[0]}
              , {business.serviceAreas[1]}, {business.serviceAreas[2]}, {business.serviceAreas[3]}
              , and select Long Island towns.
            </p>
            <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
              Call Now: {business.phone}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
