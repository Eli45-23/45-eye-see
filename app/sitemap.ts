import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<
    "/" | "/services" | "/contact" | "/service-areas" | "/projects" | `/projects/${string}` | "/manhattan-electrician" | "/brooklyn-electrician" | "/queens-electrician" | "/staten-island-electrician"
  > = [
    "/",
    "/services",
    "/contact",
    "/service-areas",
    "/manhattan-electrician",
    "/brooklyn-electrician",
    "/queens-electrician",
    "/staten-island-electrician",
    "/projects",
    "/projects/brooklyn-brownstone-200-amp-upgrade",
    "/projects/manhattan-office-partial-power-troubleshooting",
    "/projects/queens-garage-ev-charger-installation",
  ];

  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
