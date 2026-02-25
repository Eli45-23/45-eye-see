const phoneDisplay = "(646) 710-0134";
const phoneHref = "tel:+16467100134";
const email = "eli.the.electrician@gmail.com";

export default function ContactPage() {
  return (
    <div className="page wrap">
      <section className="panel">
        <h1>Contact Eli the Electrician</h1>
        <p>
          Need electrical help in Manhattan, Queens, Brooklyn, Staten Island,
          Williamsburg, or select Long Island neighborhoods? Call now for
          availability.
        </p>
        <div className="cta-row">
          <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
            Call {phoneDisplay}
          </a>
          <a className="alt-link" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </section>

      <section className="panel">
        <h2>What to Share When You Call</h2>
        <ul>
          <li>Your neighborhood and building type</li>
          <li>The electrical issue you are seeing</li>
          <li>How urgent the service is</li>
          <li>Your preferred callback window</li>
        </ul>
        <p>
          45 EYE Electrical Solutions LLC is licensed and insured, with 10+ years
          of experience and all payment types accepted.
        </p>
        <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
          Call to Book Service
        </a>
      </section>
    </div>
  );
}
