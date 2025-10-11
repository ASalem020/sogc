import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://www.sogc-construction.com";

  const routes = ["", "/about", "/services", "/contact"];

  const locales = ["en", "ar"];

  const pages = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1.0 : 0.8,
    }))
  );

  return pages;
}
