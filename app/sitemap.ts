import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/data/projects";

// PLACEHOLDER: reemplaza por tu dominio real cuando lo tengas.
const BASE_URL = "https://tu-dominio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/work", "/about", "/contact"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
  }));
  const projectRoutes = getProjectSlugs().map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...projectRoutes];
}
