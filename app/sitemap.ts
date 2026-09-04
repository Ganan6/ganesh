import type { MetadataRoute } from "next";
import ganapathiData from "../data/32ganapathy.json";

const { deities } = ganapathiData;

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kalpaganesh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/templeDeities`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/donate`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];

  // One entry per pre-rendered deity page — kept in sync with generateStaticParams.
  const deityPages: MetadataRoute.Sitemap = deities.map((deity) => ({
    url: `${baseUrl}/templeDeities/${deity.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...deityPages];
}
