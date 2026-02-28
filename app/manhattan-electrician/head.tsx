import { business } from "@/src/content/business";
import { SITE_URL } from "@/src/lib/seo";

export default function Head() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    name: business.brandName,
    url: `${SITE_URL}/manhattan-electrician`,
    telephone: "+1-646-710-0134",
    email: business.email,
    areaServed: ["Manhattan", "Brooklyn", "Queens", "Staten Island", "Select Long Island areas"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
