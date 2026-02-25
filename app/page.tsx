import { business } from "@/src/content/business";

const phoneHref = `tel:+1${business.phone.replace(/\D/g, "")}`;

export default function HomePage() {
  return (
    <div className="page wrap">
      <section className="panel">
        <h1>Fast, Reliable Electrical Service Across NYC</h1>
        <p>
          {business.businessNameLegal} is led by {business.publicName}, delivering
          same-day electrical service for homes and businesses.
        </p>
        <p>
          We are {business.differentiators[0].toLowerCase()} with{" "}
          {business.differentiators[1].toLowerCase()}.
          Service areas include {business.mustMentionNeighborhoods[1]},{" "}
          {business.mustMentionNeighborhoods[2]}, {business.mustMentionNeighborhoods[0]},{" "}
          {business.serviceAreas[1]}, {business.serviceAreas[2]}, {business.serviceAreas[3]},
          and select Long Island locations.
        </p>
        <div className="cta-row">
          <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
            Call {business.publicName}: {business.phone}
          </a>
          <a className="alt-link" href={`mailto:${business.email}`}>
            {business.email}
          </a>
        </div>
      </section>

      <section className="panel">
        <h2>Why Property Owners Choose {business.publicName}</h2>
        <ul>
          {business.differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
          Speak With {business.publicName} Now
        </a>
      </section>
    </div>
  );
}
