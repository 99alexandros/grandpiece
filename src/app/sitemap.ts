import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/meniu", "/oferte", "/rezervari", "/despre-noi", "/galerie", "/contact"];
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: p === "/meniu" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
