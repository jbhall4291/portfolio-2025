// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
// import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import { saans } from "./fonts";
import Footer from "@/components/site/footer";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const cookieStore = await cookies(); // <-- await
  // const themeCookie =
  //   (cookieStore.get("theme")?.value as "light" | "dark" | undefined) ?? "light";

  return (
    // 👇 key line: prevents hydration error when next-themes updates class/style
    // TO DO: top padding on body to accomodate floating navbar
    <html lang="en" suppressHydrationWarning className="h-full [scrollbar-gutter:stable_both-edges]">
      <body className={`${saans.variable} font-sans antialiased min-h-dvh flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          enableSystem
          disableTransitionOnChange
        >

          <Navbar/>

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
