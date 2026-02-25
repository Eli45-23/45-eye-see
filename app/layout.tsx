import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const phoneDisplay = "(646) 710-0134";
const phoneHref = "tel:+16467100134";

export const metadata: Metadata = {
  title: "45 EYE Electrical Solutions LLC | Eli the Electrician",
  description:
    "Licensed and insured NYC-based electrical contractor serving Manhattan, Queens, Brooklyn, Staten Island, and parts of Long Island.",
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
              <p className="eyebrow">45 EYE Electrical Solutions LLC</p>
              <p className="brand">Eli the Electrician</p>
            </div>
            <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
              Call {phoneDisplay}
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
              NYC-based service across Lower and Midtown Manhattan, Williamsburg,
              Queens, Brooklyn, Staten Island, and select Long Island towns.
            </p>
            <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
              Call Now: {phoneDisplay}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
