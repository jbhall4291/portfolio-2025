// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { saans } from "./fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnnyhall.dev"),
  title: { default: "Johnny Hall — Software Engineer", template: "%s | Johnny Hall" },
  description:
    "Full-stack software engineer · React/Next.js, Node.js, TypeScript, SQL, MongoDB · client-facing and solution-driven.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" }
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" }
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://johnnyhall.dev",
    siteName: "Johnny Hall",
    title: "Johnny Hall — Software Engineer",
    description:
      "Full-stack software engineer building scalable apps with React/Next.js, Node.js, TypeScript, SQL, and MongoDB. Experienced in client-facing consultancy.",
    images: [{ url: "https://johnnyhall.dev/og.png", width: 2400, height: 1260, alt: "Johnny Hall – Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny Hall — Software Engineer",
    description:
      "Full-stack software engineer building scalable apps with React/Next.js, Node.js, TypeScript, SQL, and MongoDB. Client-facing and solution-driven.",
    images: ["https://johnnyhall.dev/og.png"],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("theme")?.value as "light" | "dark" | "system" | undefined;
  const isCookieDark = cookieTheme === "dark";

  return (
    <html lang="en" suppressHydrationWarning className={`h-full ${isCookieDark ? "dark" : ""}`}>
      <body className={`${saans.variable} font-sans antialiased min-h-dvh flex flex-col`}>
        {/* Preflight: respect system dark before hydration - if no preference or an error, then default to dark */}
        <Script id="theme-preflight" strategy="beforeInteractive">{`
          try {
            var m = document.cookie.match(/(?:^|; )theme=([^;]+)/);
            var c = m && m[1];
            if (!c || c === 'system') {
              var mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
              // If we can't detect, default to dark. If we can, follow dark.
              if (!mql || typeof mql.matches !== 'boolean' || mql.matches) {
                document.documentElement.classList.add('dark');
              }
            }
          } catch (_) {
            // On any error, default to dark for neutrals
            document.documentElement.classList.add('dark');
          }
        `}</Script>


        <ThemeProvider attribute="class" defaultTheme={cookieTheme ?? "system"} enableSystem enableColorScheme disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
