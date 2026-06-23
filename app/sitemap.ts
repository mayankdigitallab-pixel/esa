import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { nearbyAreas } from "@/data/areas";

const base = "https://www.theesa.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: today, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/programs`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faculty`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/results`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/gallery`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/materials`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/faq`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const areaRoutes: MetadataRoute.Sitemap = nearbyAreas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...areaRoutes];
}
