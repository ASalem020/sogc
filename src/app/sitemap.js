import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://www.sogc-construction.com";

  // Static pages (always included)
  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Example: Add dynamic pages automatically
  // (if you later add blog posts, projects, etc.)
  // const projects = await fetch(`${baseUrl}/api/projects`).then((res) => res.json());
  // const dynamicRoutes = projects.map((p) => ({
  //   url: `${baseUrl}/projects/${p.slug}`,
  //   lastModified: new Date(p.updatedAt),
  //   changeFrequency: "weekly",
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...dynamicRoutes,
  ];
}
