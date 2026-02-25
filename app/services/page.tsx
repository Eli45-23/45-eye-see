const phoneDisplay = "(646) 710-0134";
const phoneHref = "tel:+16467100134";

export default function ServicesPage() {
  return (
    <div className="page wrap">
      <section className="panel">
        <h1>Electrical Services</h1>
        <p>
          Eli the Electrician handles residential and commercial electrical work
          across Manhattan, Queens, Brooklyn, Staten Island, Williamsburg, and
          nearby Long Island communities.
        </p>
        <a className="call-button" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
          Call for Same-Day Service
        </a>
      </section>

      <section className="service-grid">
        <article className="panel">
          <h2>Troubleshooting and Repairs</h2>
          <p>
            Fast diagnosis and repair for outages, flickering lights, tripped
            breakers, and other power issues.
          </p>
        </article>

        <article className="panel">
          <h2>Panel and Circuit Upgrades</h2>
          <p>
            Safe panel improvements, dedicated lines, and circuit planning to
            support modern appliances and equipment.
          </p>
        </article>

        <article className="panel">
          <h2>Lighting and Fixture Installation</h2>
          <p>
            Interior and exterior lighting, recessed lights, and fixture swaps
            with clean, code-aware installation.
          </p>
        </article>

        <article className="panel">
          <h2>Outlet, Switch, and Safety Updates</h2>
          <p>
            New outlets, switch replacements, GFCI updates, and electrical safety
            improvements for older properties.
          </p>
        </article>
      </section>
    </div>
  );
}
