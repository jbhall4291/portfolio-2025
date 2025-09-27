// app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Contact Johnny Hall — Software Engineer Portfolio",
    description:
        "Get in touch with Johnny Hall — full-stack, client-facing software engineer. Connect on LinkedIn, send an email, or explore projects on GitHub.",
    alternates: { canonical: "/contact" },
    openGraph: {
        type: "website",
        url: "https://johnnyhall.dev/contact",
        title: "Contact Johnny Hall — Software Engineer Portfolio",
        description:
            "Connect with Johnny Hall, full-stack engineer. LinkedIn, email, and GitHub links available here."

    }
};

const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Johnny Hall",
    url: "https://johnnyhall.dev/contact",
    description:
        "Connect with Johnny Hall — full-stack, client-facing software engineer.",
    mainEntity: {
        "@type": "Person",
        name: "Johnny Hall",
        email: "mailto:hello@johnnyhall.dev",
        sameAs: [
            "https://www.linkedin.com/in/johnny-hall-dev/",
            "https://github.com/jbhall4291/"
        ]
    }
};


export default function ContactPage() {
    const email = "hello@johnnyhall.dev";
    const linkedin = "https://www.linkedin.com/in/johnny-hall-dev/";
    const github = "https://github.com/jbhall4291";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
            />
            <main className="mx-auto max-w-4xl px-4 py-12 mt-12 md:mt-24">
                <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight mb-2">
                    Get In Touch
                </h1>



                <p className="   text-lg md:text-2xl  leading-relaxed mb-4 max-w-prose ">
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
        </>
    );
}
