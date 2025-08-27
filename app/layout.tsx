// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://johnnyhall.dev"),
  title: { default: "Johnny Hall — Software Developer", template: "%s | Johnny Hall" },
  description: "Selected projects, background, and contact.",
  alternates: { canonical: "/" },                    // ← canonical
  openGraph: {
    type: "website",
    url: "https://johnnyhall.dev",
    siteName: "Johnny Hall",                         // ← og:site_name
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 👇 key line: prevents hydration error when next-themes updates class/style
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // optional: avoids CSS transitions flashing during theme change
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
