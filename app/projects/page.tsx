// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected full-stack builds and case studies.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projects | Johnny Hall",
        description: "Selected full-stack builds and case studies.",
        images: ["/og.png"], // or a page-specific OG image
    },
};

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-2xl p-8">
            <h1 className="text-3xl font-semibold">Projects</h1>
            <p className="mt-3 text-neutral-600 dark:text-red-400">
                Also server-rendered. Transition runs when you navigate here.
            </p>
            <Link href="/" className="mt-6 inline-block underline">
                ← Back home
            </Link>
        </main>
    );
}
