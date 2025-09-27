// app/cv/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CvButtons from "@/components/cv/CvButtons";

export const metadata = {
    title: "CV – Johnny Hall",
    description: "Johnny Hall full-stack, client-facing engineer CV",
};


export default function CvPage() {
    return (

        <main className="mx-auto max-w-4xl px-4 py-12 mt-12 md:mt-24">

            <div className="flex flex-col  mb-6  ">

                <h1 id="about-heading" className="mb-2 text-4xl md:text-7xl font-semibold  tracking-tight">
                    CV
                </h1>

                <p className="text-lg md:text-2xl mb-4 leading-relaxed max-w-prose ">
                    Download my CV to see how I combine full-stack engineering skills with client-facing experience, to deliver modern web, mobile, and cloud solutions.
                </p>

                <CvButtons />

                {/* <div className="flex flex-row flex-wrap gap-3 shrink-0 ">

                    <Button asChild variant="outline" size="lg" className="text-lg">
                        <a
                            href="/cv/Johnny_Hall_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink />
                            Open CV
                        </a>
                    </Button>

                    <Button asChild size="lg" className="text-lg">
                        <a
                            href="/cv/Johnny_Hall_CV.pdf"
                            download
                        >
                            <Download />
                            Download CV (PDF)
                        </a>
                    </Button>

                </div> */}

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
                    src="/cv/Johnny-Hall-CV.webp"
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
                href="/cv/Johnny_Hall_CV.pdf"
            />
        </main>
    );
}
