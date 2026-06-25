import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/ueber-uns", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/referenzen", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/kontakt", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
