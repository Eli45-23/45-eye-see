import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/src/content/business";
import { SITE_URL, buildSeoDescription, buildSeoTitle } from "@/src/lib/seo";
import "./globals.css";

const phoneHref = `tel:+1${business.phone.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: buildSeoTitle("Home"),
  description: buildSeoDescription(
    "Serving homes and businesses in Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas."
  ),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: buildSeoTitle("Home"),
    description: buildSeoDescription(
      "NYC electrician for repairs, upgrades, and same-day service calls."
    ),
    url: SITE_URL,
    siteName: business.brandName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: buildSeoTitle("Home"),
    description: buildSeoDescription(
      "Call for licensed and insured electrical service across NYC."
    ),
  },
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
