// Generates /robots.txt
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const isPreview = process.env.VERCEL_ENV === "preview";
    return isPreview
        ? {
            // Block preview deployments from indexing
            rules: [{ userAgent: "*", disallow: "/" }],
        }
        : {
            rules: [{ userAgent: "*", allow: "/" }],
            sitemap: "https://johnnyhall.dev/sitemap.xml",
        };
}
