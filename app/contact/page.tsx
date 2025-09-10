// app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact | Johnny Hall",
    description:
        "Get in touch with Johnny Hall — full-stack developer who understands code and business. Email, LinkedIn, and GitHub.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact | Johnny Hall",
        description:
            "Reach Johnny via email or LinkedIn, or explore projects on GitHub.",
        images: ["/og.png"],
        url: "https://johnnyhall.dev/contact",
        type: "website",
    },
};

export default function ContactPage() {
    const email = "jbhall4291@gmail.com";
    const linkedin = "https://www.linkedin.com/in/johnny-hall-dev/";
    const github = "https://github.com/jbhall4291";

    return (
        <main className="mx-auto max-w-4xl px-6 py-12 mt-12 md:mt-20">
            <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight">
                Get in touch
            </h1>



            <p className="mt-3   text-lg md:text-2xl font-medium leading-relaxed mb-10 max-w-prose">
                Always happy to connect - LinkedIn is usually best, though email works too. My projects are showcased here on my site, with code available on GitHub.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-start gap-3">

                <Button asChild variant="secondary" size="lg">
                    <a href={`mailto:${email}`} aria-label="Email Johnny">
                        <Mail className=" h-4 w-4" />
                        Email
                    </a>
                </Button>

                <Button asChild size="lg" variant="secondary" >
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub"
                    >
                        <Github className=" h-4 w-4" />
                        GitHub
                    </a>
                </Button>

                <Button asChild size="lg">
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect on LinkedIn"
                    >
                        <Linkedin className=" h-4 w-4" />
                        LinkedIn
                    </a>
                </Button>
            </div>
        </main>
    );
}
