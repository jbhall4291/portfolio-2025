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



            <p className="mt-3   text-lg md:text-2xl font-medium leading-relaxed mb-10 ">
                Always happy to connect. Email or LinkedIn work best, and you can find my projects on GitHub.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">




                <Button asChild variant="secondary" className="justify-center">
                    <a href={`mailto:${email}`} aria-label="Email Johnny">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                    </a>
                </Button>

                <Button asChild variant="secondary" className="justify-center">
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect on LinkedIn"
                    >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                    </a>
                </Button>

                <Button asChild variant="secondary" className="justify-center">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </a>
                </Button>
            </div>
        </main>
    );
}
