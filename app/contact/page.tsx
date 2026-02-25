import { business } from "@/src/content/business";
import { faqs } from "@/src/content/faqs";
import { createPageMetadata } from "@/src/lib/seo";

const phoneHref = `tel:+1${business.phone.replace(/\D/g, "")}`;

export const metadata = createPageMetadata({
  page: "Contact",
  path: "/contact",
  focus:
    "Call now to request same-day availability, discuss your electrical issue, and schedule service in NYC and select Long Island areas.",
});

export default function ContactPage() {
  return (
    <div className="page wrap">
      <section className="panel">
        <h1>Contact {business.publicName}</h1>
        <p>
          Need electrical help in {business.mustMentionNeighborhoods[1]},{" "}
          {business.mustMentionNeighborhoods[2]}, {business.mustMentionNeighborhoods[0]},{" "}
          {business.serviceAreas[1]}, {business.serviceAreas[2]}, or{" "}
          {business.serviceAreas[3]}? Call now for availability.
        </p>
        <div className="cta-row">
          <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
            Call {business.phone}
          </a>
          <a className="alt-link" href={`mailto:${business.email}`}>
            {business.email}
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
          {business.businessNameLegal} is {business.differentiators[0].toLowerCase()}
          , with {business.differentiators[1].toLowerCase()}, and{" "}
          {business.differentiators[4].toLowerCase()}.
        </p>
        <a className="call-button" href={phoneHref} aria-label={`Call ${business.phone}`}>
          Call to Book Service
        </a>
      </section>

      <section className="panel">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <article key={faq.question}>
            <p>
              <strong>{faq.question}</strong>
            </p>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
