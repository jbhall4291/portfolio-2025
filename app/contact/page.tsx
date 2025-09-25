// app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Contact – Johnny Hall",
    description: "Let’s connect.",
};

export default function ContactPage() {
    const email = "hello@johnnyhall.dev";
    const linkedin = "https://www.linkedin.com/in/johnny-hall-dev/";
    const github = "https://github.com/jbhall4291";

    return (
        <main className="mx-auto max-w-4xl px-6 py-12 mt-12 md:mt-24">
            <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight">
                Let's Connect
            </h1>



            <p className="mt-3   text-lg md:text-2xl  leading-relaxed mb-6 max-w-prose ">
                Always happy to connect - LinkedIn is usually best, though email works too. My projects are showcased here on my site, with code available on GitHub.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3">
                <Button asChild size="lg" className="text-lg">
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

                <Button asChild variant="outline" size="lg" className="text-lg">
                    <a href={`mailto:${email}`} aria-label="Email Johnny">
                        <Mail className=" h-4 w-4" />
                        Email
                    </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="text-lg">
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
            </div>
        </main>
    );
}
