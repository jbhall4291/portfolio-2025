// app/about/page.tsx
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About – Johnny Hall",
    description:
        "Learn more about Johnny Hall – Software Engineer · Full-Stack · Client-Facing. Background, experience, and what sets me apart.",
};

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12 mt-12 md:mt-24">

            <section
                aria-labelledby="about-heading"
                className="grid items-start gap-10 md:grid-cols-[minmax(0,56ch)_1fr]"
            >
                {/* Text column */}
                <div className=" max-w-prose leading-relaxed dark:text-zinc-200">

                    <h1 id="about-heading" className="!mb-4 text-4xl md:text-7xl font-semibold  tracking-tight">
                        About Me
                    </h1>
                    <div className="space-y-6  text-base md:text-lg">

                        <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6">
                            Former London black cab driver turned software engineer. I build modern full-stack apps with React/Next.js, Node/Express, TypeScript, and MongoDB.
                        </p>

                        <p>
                            I focus on building scalable, maintainable systems with clean architecture and automated testing. Experience includes client projects with custom Umbraco CMS solutions and integrations, as well as personal full-stack builds that showcase modern development practices.
                        </p>


                        <p>
                            I was also interviewed by Northcoders about my journey into tech.{" "}
                            <a
                                className="underline text-blue-600 hover:text-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.northcoders.com/blog/johnny-from-taxi-driver-to-software-developer/"
                            >
                                Read the interview and check out the video here
                                <ExternalLink
                                    className="ml-1 inline-block h-4 w-4 -mb-0.5 align-[0.05em] text-blue-600"
                                    aria-hidden="true"
                                />
                            </a>.
                        </p>

                        <p>
                            Outside of coding you’ll usually find me on a motorbike or under the
                            bonnet of a car - although these days I prefer to get lost in code
                            rather than south of the river.
                        </p>
                    </div>


                    <div className="mt-10 flex flex-wrap items-center justify-start gap-3">

                        <Button asChild size="lg" variant="outline">
                            <Link href="/projects" aria-label="Explore projects">
                                Explore projects
                            </Link>
                        </Button>

                        <Button asChild size="lg" >
                            <Link href="/contact" aria-label="Get in touch">
                                Let's connect
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
                            src="/images/hero_headshots/smile_cropped_500px_no_bg.png"
                            alt="Johnny Hall — Software Engineer"
                            fill
                            priority
                            sizes="(max-width: 768px) 60vw, 18rem"
                            className="object-cover"
                        />
                    </div>


                </div>
            </section>


        </main>
    );
}
