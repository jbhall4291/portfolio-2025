// app/about/page.tsx
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact",
    description: "TO DO about.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact | Johnny Hall",
        description: "TODO about.",
        images: ["/og.png"], // or a page-specific OG image
    },
};

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-12  mt-12 md:mt-22">
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="mt-3 text-neutral-600 dark:text-red-400">
                Also server-rendered. Transition runs when you navigate here.
            </p>

        </main>
    );
}
