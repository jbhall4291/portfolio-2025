// app/cv/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "CV",
    description: "Curriculum Vitae of Johnny Hall, Software Developer.",
    alternates: { canonical: "/cv" },
    openGraph: {
        title: "CV | Johnny Hall",
        description: "Curriculum Vitae of Johnny Hall, Software Developer.",
        images: ["/og.png"],
    },
};

export default function CvPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12 mt-12 md:mt-24">

            <div className="flex flex-col lg:flex-row lg:items-end md:justify-between mb-6 gap-4 ">
                <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight">
                    Curriculum Vitae
                </h1>

                <div className="flex gap-3 shrink-0 ">
                    <Button asChild variant="secondary" size="lg">

                        <a
                            href="/cv/Johnny-Hall-CV-(web).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        >
                            <ExternalLink className="h-5 w-5" />
                            Open PDF
                        </a>
                    </Button>
                    <Button asChild size="lg">

                        <a
                            href="/cv/Johnny-Hall-CV-(web).pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-white font-medium hover:opacity-90"
                        >
                            <Download className="h-5 w-5" />
                            Download PDF
                        </a>
                    </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                </div>
            </div>

            {/* Visual CV preview */}
            <div
                className="
    overflow-hidden 
    border 
    bg-white 
    dark:bg-zinc-900 
    shadow-md 
    dark:shadow-sm dark:shadow-zinc-800/50
  "
            >
                <Image
                    src="/cv/Johnny-Hall-CV-(web).png"
                    alt="Johnny Hall – CV"
                    width={2550}
                    height={3300}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 960px"
                    quality={100}
                />
            </div>

            {/* SEO hint */}
            <link
                rel="alternate"
                type="application/pdf"
                href="/cv/Johnny-Hall-CV-(web).pdf"
            />
        </main>
    );
}
