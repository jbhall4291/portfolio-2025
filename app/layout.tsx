// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { saans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnnyhall.dev"),
  title: { default: "Johnny Hall — Software Developer", template: "%s | Johnny Hall" },
  description: "Selected projects, background, and contact.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://johnnyhall.dev",
    siteName: "Johnny Hall",
    title: "Johnny Hall — Software Developer",
    description: "Selected projects, background, and contact.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Johnny Hall — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny Hall — Software Developer",
    description: "Selected projects, background, and contact.",
    images: ["/og.png"],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // In your Next version, cookies() is async — await it.
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("theme")?.value as "light" | "dark" | "system" | undefined;
  const isCookieDark = cookieTheme === "dark";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full ${isCookieDark ? "dark" : ""}`}
    >
      <head>
        {/* Preflight: if no cookie or cookie === "system", respect system dark on first paint */}
        <Script id="theme-preflight" strategy="beforeInteractive">{`
(function () {
  try {
    var m = document.cookie.match(/(?:^|; )theme=([^;]+)/);
    var c = m && m[1];
    if (!c || c === 'system') {
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      if (mql.matches) document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
        `}</Script>
      </head>
      <body className={`${saans.variable} font-sans antialiased min-h-dvh flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={cookieTheme ?? "system"}
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
