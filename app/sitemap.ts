// Generates /sitemap.xml
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://johnnyhall.dev";
    return [
        { url: `${base}/`, lastModified: new Date() },
        { url: `${base}/projects` },
        { url: `${base}/about` },
        { url: `${base}/contact` },
    ];
}
