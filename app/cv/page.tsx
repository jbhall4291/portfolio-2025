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

        <main className="mx-auto max-w-4xl px-6 py-12 mt-12 md:mt-24">

            <div className="flex flex-col  mb-6 gap-4 ">

                <h1 id="about-heading" className=" text-4xl md:text-7xl font-semibold  tracking-tight">
                    CV
                </h1>

                <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-prose ">
                    Download my CV to see details of my full-stack experience with React, Next.js, Node.js, and .NET.
                </p>


                <div className="flex gap-3 shrink-0 ">
                    <Button asChild size="lg">
                        <a
                            href="/cv/Johnny-Hall-CV.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-white font-medium hover:opacity-90"
                        >
                            <Download className="h-5 w-5" />
                            Download CV (.pdf)
                        </a>
                    </Button>

                    <Button asChild variant="outline" size="lg">

                        <a
                            href="/cv/Johnny-Hall-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        >
                            <ExternalLink className="h-5 w-5" />
                            Open CV
                        </a>
                    </Button>


                </div>

                <div className=" flex flex-wrap items-center justify-center gap-3">
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
