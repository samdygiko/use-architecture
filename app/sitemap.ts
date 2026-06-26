import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const SITE = "https://use-architecture.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = ["", "/work", "/rest", "/play", "/library", "/about", "/contact"].map(
    (path) => ({
      url: `${SITE}${path}`,
      lastModified: new Date(),
    }),
  );
  const projectUrls = projects.map((p) => ({
    url: `${SITE}/${p.category}/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...staticUrls, ...projectUrls];
}
