import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.odiscom.com";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/clients`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/services/fiber`, lastModified: new Date() },
    { url: `${base}/services/wireless`, lastModified: new Date() },
    { url: `${base}/services/construction`, lastModified: new Date() },
  ];
}