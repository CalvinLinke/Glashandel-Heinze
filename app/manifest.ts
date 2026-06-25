import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hubert Heinze GmbH — Glasfachgroßhandel",
    short_name: "Heinze Glas",
    description:
      "Glasfachgroßhandel aus Frohburg — Glas am Bau & in der Industrie. Beratung, Fachplanung und Veredelung aus einer Hand.",
    start_url: "/",
    display: "standalone",
    background_color: "#001031",
    theme_color: "#001031",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
