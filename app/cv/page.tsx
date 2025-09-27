// app/cv/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import CvButtons from "@/components/cv/CvButtons";

export const metadata: Metadata = {
    title: "CV — Johnny Hall • Software Engineer Portfolio",
    description:
        "Download Johnny Hall’s CV. Full-stack, client-facing software engineer: React/Next.js, Node.js, TypeScript, SQL/MongoDB, CI/CD, and TDD.",
    alternates: {
        canonical: "/cv",
        types: {
            "application/pdf": "/cv/Johnny_Hall_CV.pdf"
        }
    },
    openGraph: {
        type: "website",
        url: "https://johnnyhall.dev/cv",
        title: "CV — Johnny Hall • Software Engineer Portfolio",
        description:
            "Johnny Hall’s software engineer CV — full-stack, client-facing delivery across React/Next.js, Node.js, TypeScript, SQL/MongoDB."
    }
};

const cvLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Johnny Hall - CV",
    url: "https://johnnyhall.dev/cv",
    about: {
        "@type": "Person",
        name: "Johnny Hall",
        sameAs: [
            "https://www.linkedin.com/in/johnny-hall-dev/",
            "https://github.com/jbhall4291/"
        ]
    },
    hasPart: {
        "@type": "DigitalDocument",
        name: "Johnny Hall — CV (PDF)",
        fileFormat: "application/pdf",
        contentUrl: "https://johnnyhall.dev/cv/Johnny_Hall_CV.pdf",
        thumbnailUrl: "https://johnnyhall.dev/cv/Johnny-Hall-CV.webp"
    }
};

export default function CvPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cvLd) }} />

            <main className="mx-auto max-w-4xl px-4 py-12 mt-12 md:mt-24">

                <div className="flex flex-col  mb-6  ">

                    <h1 className="mb-2 text-4xl md:text-7xl font-semibold  tracking-tight">
                        My CV
                    </h1>

                    <p className="text-lg md:text-2xl mb-4 leading-relaxed max-w-prose ">
                        Download my CV to see how I combine full-stack engineering skills with client-facing experience, to deliver modern web, mobile, and cloud solutions.
                    </p>

                    <CvButtons />

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
                        alt="Preview of Johnny Hall’s CV"
                        width={2550}
                        height={3300}
                        priority
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 960px"
                        quality={100}
                    />
                </div>

            </main>
        </>
    );
}
