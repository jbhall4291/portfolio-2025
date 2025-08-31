// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About",
    description:
        "Former London black cab driver turned software developer. I build modern full-stack apps with React/Next.js, Node/Express, TypeScript and MongoDB.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About | Johnny Hall",
        description:
            "Full-stack developer focused on clean architecture, TDD and CI/CD.",
        images: ["/og.png"],
    },
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
                            Former London black cab driver turned software developer –
                            building modern full-stack apps with React/Next.js, Node/Express, TypeScript, and MongoDB.
                        </p>

                        <p>
                            I focus on scalable, maintainable systems with clean architecture and automated testing. Experience includes client projects with custom Umbraco CMS solutions and integrations, as well as personal full-stack builds that showcase modern development practices.
                        </p>

                        <p>
                            Outside of coding you’ll usually find me on a motorbike or under the
                            bonnet of a car - although these days I prefer to get lost in code
                            rather than south of the river.
                        </p>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <a href="/projects" className="rounded-full bg-primary px-4 py-2 text-white dark:text-black shadow hover:opacity-90 transition-all duration-300">
                            View projects
                        </a>
                        <a href="/contact" className="rounded-full border border-primary px-4 py-2 hover:bg-primary hover:text-white dark:hover:text-black transition-all duration-300">
                            Get in touch
                        </a>
                    </div>
                </div>

                {/* Photo column (moves below on mobile) */}
                <div className="md:justify-self-end">
                    <div className="relative w-full h-96  md:h-96 md:w-96  overflow-hidden rounded-3xl  bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src="/images/hq_nobg.png"
                            alt="Johnny Hall — software developer"
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
