import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<"/" | "/services" | "/contact"> = [
    "/",
    "/services",
    "/contact",
  ];

  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
