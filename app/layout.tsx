import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/src/content/business";
import { CallCTA } from "@/src/components/CallCTA";
import { Container } from "@/src/components/Container";
import { SITE_URL, buildSeoDescription, buildSeoTitle } from "@/src/lib/seo";
import { getLocalBusinessSchema } from "@/src/lib/schema";
import styles from "./layout.module.css";
import "./globals.css";

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
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Container>
            <div className={styles.headerRow}>
              <div className={styles.brandGroup}>
                <div className={styles.logoMark} aria-hidden="true">
                  45
                </div>
                <div className={styles.brandText}>
                  <p className={styles.eyebrow}>{business.businessNameLegal}</p>
                  <p className={styles.brand}>{business.publicName}</p>
                </div>
              </div>

              <nav aria-label="Primary" className={styles.nav}>
                <Link className={styles.navLink} href="/">
                  Home
                </Link>
                <Link className={styles.navLink} href="/services">
                  Services
                </Link>
                <Link className={styles.navLink} href="/contact">
                  Contact
                </Link>
              </nav>

              <CallCTA className={styles.callDesktop} label={`Call ${business.phone}`} />
            </div>
          </Container>
        </header>

        <main className={styles.main}>{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <footer className={styles.footer}>
          <Container>
            <div className={styles.footerGrid}>
              <div>
                <h2 className={styles.footerTitle}>{business.locationLabel} Electrician</h2>
                <p className={styles.footerMeta}>
                  Phone: {business.phone} · Email:{" "}
                  <a className={styles.inlineLink} href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </p>
                <ul className={styles.footerList}>
                  <li>Manhattan</li>
                  <li>Queens</li>
                  <li>Brooklyn</li>
                  <li>Staten Island + select Long Island areas</li>
                </ul>
              </div>
              <CallCTA label="Call for Service Today" />
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
