import type { Metadata } from "next";
import { ProjectsBento } from "@/components/ProjectsBento";

export const metadata: Metadata = {
    title: "Projects — Johnny Hall • Software Engineer Portfolio",
    description:
        "A curated selection of projects by Johnny Hall: full-stack engineering with React/Next.js, Node.js, TypeScript, MongoDB, and more. From production client builds to playful experiments.",
    alternates: { canonical: "/projects" },
    openGraph: {
        type: "website",
        url: "https://johnnyhall.dev/projects",
        title: "Projects — Johnny Hall • Software Engineer Portfolio",
        description:
            "Selected projects from Johnny Hall’s portfolio: React/Next.js, Node.js, TypeScript, MongoDB, .NET, and beyond."
    }
};

const projectsLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects — Johnny Hall",
    url: "https://johnnyhall.dev/projects",
    description:
        "A curated selection of projects by Johnny Hall: full-stack engineering with React/Next.js, Node.js, TypeScript, MongoDB, and more.",
    hasPart: [
        {
            "@type": "SoftwareApplication",
            name: "Completed It Mate",
            applicationCategory: "WebApplication",
            description:
                "Full-stack video-game library tracker built with Node.js/Express, MongoDB, Mongoose, Jest, and CI/CD pipelines.",
            sameAs: [
                "https://github.com/jbhall4291/completed-it-mate-be",
                "https://completed-it-mate-fe.vercel.app/"
            ]
        },
        {
            "@type": "SoftwareApplication",
            name: "ConnectAir",
            applicationCategory: "MobileApplication",
            operatingSystem: "iOS",
            description:
                "HVAC configurator app published to the App Store, built with Flutter and .NET backend.",
            sameAs: [
                "https://apps.apple.com/us/app/connectair/id6446583166"
            ]
        },
        {
            "@type": "SoftwareApplication",
            name: "Lorem Alan",
            applicationCategory: "DeveloperApplication",
            description:
                "A VS Code extension available on the Visual Studio Marketplace, generating playful lorem ipsum text generation from Alan Partridge quotes.",
            sameAs: [
                "https://marketplace.visualstudio.com/items?itemName=JohnnyHall.lorem-alan"
            ]
        }
    ]
};



export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsLd) }}
            />
            <main>
                <div className="mx-auto flex flex-col max-w-4xl mb-4 mt-24 px-4 2xl:px-0 md:mt-36  dark:text-zinc-200  ">
                    <h1 className=" mb-2 text-4xl md:text-7xl font-semibold  tracking-tight">
                        Selected Projects
                    </h1>
                    <p className=" text-lg md:text-2xl font-normal leading-relaxed max-w-prose">
                        From production client builds to playful experiments - a curated selection of my work across web, mobile and IoT.
                    </p>
                </div>
                <div className="md:max-w-7xl 2xl:max-w-7xl  mx-auto px-3 2xl:px-0">
                    <ProjectsBento />
                </div>
            </main>
        </>
    );
}