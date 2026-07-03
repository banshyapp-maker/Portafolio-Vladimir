import type { MetadataRoute } from "next";

// PLACEHOLDER: reemplaza por tu dominio real cuando lo tengas.
const BASE_URL = "https://tu-dominio.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
