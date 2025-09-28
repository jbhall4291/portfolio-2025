// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { saans } from "./fonts";
import { Analytics } from "@vercel/analytics/next";
import ClarityInit from "@/components/ClarityInit";
import { SpeedInsights } from '@vercel/speed-insights/next';



export const metadata: Metadata = {
  metadataBase: new URL("https://johnnyhall.dev"),
  title: {
    default: "Johnny Hall — Software Engineer Portfolio",
    template: "%s | Johnny Hall Portfolio"
  },
  description:
    "Full-stack software engineer portfolio · React/Next.js, Node.js, TypeScript, SQL, MongoDB · client-facing and solution-driven.",
  keywords: [
    "Johnny Hall", "Software Engineer", "Full-Stack", "React", "Next.js",
    "Node.js", "TypeScript", "MongoDB", "SQL", "consultancy",
    "client-facing", "portfolio", "software engineer portfolio"
  ],
  applicationName: "Johnny Hall Portfolio",
  authors: [{ name: "Johnny Hall", url: "https://johnnyhall.dev" }],
  creator: "Johnny Hall",
  publisher: "Johnny Hall",
  category: "technology",

  alternates: {
    canonical: "/",
    languages: { "en-GB": "/", "en-US": "/" }
  },
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
    url: "https://johnnyhall.dev/",
    siteName: "Johnny Hall Portfolio",
    title: "Johnny Hall — Software Engineer Portfolio",
    description:
      "Full-stack, client-facing portfolio: React/Next.js, Node.js, TypeScript, SQL, MongoDB.",
    images: [
      {
        url: "https://johnnyhall.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Johnny Hall – Software Engineer Portfolio",
      },
    ],
    locale: "en_GB",
  },


  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  appleWebApp: {
    capable: true,
    title: "Johnny Hall",
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e20" }
  ]
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

        <ClarityInit />
        <SpeedInsights />
        <Script
          src="https://gc.zgo.at/count.js"
          data-goatcounter="https://portfolio-2025.goatcounter.com/count"
          strategy="afterInteractive"
        />


      </body>
    </html>
  );
}
