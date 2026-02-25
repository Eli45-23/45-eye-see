const phoneDisplay = "(646) 710-0134";
const phoneHref = "tel:+16467100134";

export default function HomePage() {
  return (
    <div className="page wrap">
      <section className="panel">
        <h1>Fast, Reliable Electrical Service Across NYC</h1>
        <p>
          45 EYE Electrical Solutions LLC is led by Eli the Electrician, delivering
          same-day electrical service for homes and businesses.
        </p>
        <p>
          We are licensed and insured with 10+ years of hands-on experience.
          Service areas include Lower and Midtown Manhattan, Williamsburg,
          Queens, Brooklyn, Staten Island, and select Long Island locations.
        </p>
        <div className="cta-row">
          <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
            Call Eli: {phoneDisplay}
          </a>
          <a className="alt-link" href="mailto:eli.the.electrician@gmail.com">
            eli.the.electrician@gmail.com
          </a>
        </div>
      </section>

      <section className="panel">
        <h2>Why Property Owners Choose Eli</h2>
        <ul>
          <li>Licensed and insured electrical contractor</li>
          <li>10+ years of field experience</li>
          <li>Same-day service when available</li>
          <li>Competitive pricing</li>
          <li>All payment types accepted</li>
        </ul>
        <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
          Speak With Eli Now
        </a>
      </section>
    </div>
  );
}
