import { business } from "@/src/content/business";
import { serviceBuckets } from "@/src/content/services";

const phoneHref = `tel:+1${business.phone.replace(/\D/g, "")}`;

export default function ServicesPage() {
  return (
    <div className="page wrap">
      <section className="panel">
        <h1>Electrical Services</h1>
        <p>
          {business.publicName} handles residential and commercial electrical work
          across {business.serviceAreas.join(", ")}.
        </p>
        <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
          Call for Same-Day Service
        </a>
      </section>

      <section className="service-grid">
        {serviceBuckets.map((service) => (
          <article className="panel" key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <ul>
              {service.commonJobs.map((job) => (
                <li key={job}>{job}</li>
              ))}
            </ul>
            <p>
              <strong>Related searches:</strong> {service.keywords.join(", ")}
            </p>
            <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
              {service.cta}
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
