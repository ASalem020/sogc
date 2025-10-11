import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.sogc-construction.com/sitemap.xml",
    host: "https://www.sogc-construction.com",
  };
}
