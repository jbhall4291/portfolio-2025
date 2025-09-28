// app/about/page.tsx
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Johnny Hall — Software Engineer Portfolio",
    description:
        "About Johnny Hall: full-stack, client-facing software engineer. React/Next.js, Node.js, TypeScript, SQL/MongoDB. TDD, automated testing, and CI/CD for reliable delivery.",
    alternates: { canonical: "/about" },
    openGraph: {
        type: "profile",
        url: "https://johnnyhall.dev/about",
        title: "About Johnny Hall — Software Engineer Portfolio",
        images: [
            {
                url: "https://johnnyhall.dev/og.png",
                width: 1200,
                height: 630,
                alt: "Johnny Hall – Software Engineer Portfolio",
            },
        ],
        description:
            "Background, skills, and what sets Johnny apart as a client-facing full-stack engineer."
    },
    other: {
        "og:profile:first_name": "Johnny",
        "og:profile:last_name": "Hall",
        "og:profile:username": "johnny-hall-dev"
    },

};


const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Johnny Hall",
    url: "https://johnnyhall.dev/about",
    description:
        "About Johnny Hall: full-stack, client-facing software engineer. React/Next.js, Node.js, TypeScript, SQL/MongoDB.",
    sameAs: [
        "https://www.linkedin.com/in/johnny-hall-dev",
        "https://github.com/jbhall4291/"
    ]
};


const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://johnnyhall.dev/" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://johnnyhall.dev/about" }
    ]
};


export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />


            <main className="mx-auto max-w-5xl px-4 py-12 mt-12 md:mt-24">

                <section
                    aria-labelledby="about-heading"
                    className="grid items-start gap-8 md:grid-cols-[minmax(0,56ch)_1fr]"
                >
                    {/* Text column */}
                    <div className=" max-w-prose leading-relaxed dark:text-zinc-200">

                        <h1 id="about-heading" className="mb-2 text-4xl md:text-7xl font-semibold  tracking-tight">
                            About Me
                        </h1>

                        <div className="space-y-4  text-base md:text-lg">
                            <p className="text-lg md:text-2xl leading-relaxed font-normal   ">
                                Former London black cab driver turned software engineer, I now build full-stack web and mobile applications that deliver real value for clients.
                            </p>

                            <p>
                                I focus on clean, maintainable code, using TDD, automated testing, and CI/CD pipelines to support reliable delivery. I have worked with modern technologies including React/Next.js, Node.js, TypeScript, and MongoDB, through to .NET, SQL Server, and Flutter.
                            </p>


                            <p>
                                I have been interviewed about my journey into tech -{" "}
                                <a
                                    className="underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.northcoders.com/blog/johnny-from-taxi-driver-to-software-developer/"
                                >
                                    watch my Northcoders interview here
                                    <ExternalLink
                                        className="ml-1 inline-block h-3.5 w-3.5 -mb-0.5 align-[0.05em] text-blue-700 group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-500"
                                        aria-hidden="true"
                                    />
                                </a>. Outside of coding you’ll usually find me on a motorbike or under the
                                bonnet of a car - although these days I prefer to get lost in code
                                rather than south of the river.
                            </p>
                        </div>


                        <div className="mt-6 flex flex-wrap items-center justify-start gap-3">

                            <Button asChild size="lg" variant="outline" className="text-lg">
                                <Link href="/projects" aria-label="Explore projects">
                                    Explore projects
                                </Link>
                            </Button>

                            <Button asChild size="lg" className="text-lg">
                                <Link href="/cv" aria-label="View my CV">
                                    View my CV
                                </Link>
                            </Button>

                        </div>



                    </div>

                    {/* Photo column (moves below on mobile) */}
                    <div className="md:justify-self-end">
                        <div
                            className="relative w-full h-96 md:h-96 md:w-96 
                        overflow-hidden rounded-3xl 
                        border border-zinc-300/40 dark:border-zinc-700/40
                        shadow-lg dark:shadow-none
                        [background:radial-gradient(circle_at_50%_35%,theme(colors.zinc.200)_0%,theme(colors.zinc.50)_70%)] 
                        dark:[background:radial-gradient(circle_at_50%_35%,theme(colors.zinc.700)_0%,theme(colors.zinc.800)_70%)]"
                        >
                            <Image
                                src="/images/hero_headshots/smile_cropped_500px_no_bg.webp"
                                alt="Portrait of Johnny Hall"
                                fill
                                priority
                                sizes="(max-width: 768px) 60vw, 18rem"
                                className="object-cover"
                            />
                        </div>


                    </div>
                </section>


            </main>
        </>
    );
}
