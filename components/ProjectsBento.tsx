import { BentoCard, BentoGrid, BentoCardProps } from "@/components/magicui/bento-grid";
import Image from "next/image";

const features: BentoCardProps[] = [
    {
        name: "Completed It Mate",
        description:
            "In-development Web app for tracking video games: log completed, owned, or wishlisted titles, and connect with friends.",
        href: "/",
        cta: "Learn more",
        background: (
            <Image
                src="/images/project_cards/completed-it-mate.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw" // spans 2 cols on lg
                className="absolute inset-0 h-full w-full object-cover object-right-bottom pointer-events-none"
                aria-hidden="true"
            />
        ),
        tech: [
            { label: "React" }, { label: "Next.js" }, { label: "TypeScript" }, { label: "Node.js" },
            { label: "Express" }, { label: "MongoDB" }, { label: "Jest + Supertest" }, { label: "Playwright" },
        ],
        actions: [
            { label: "Visit site", href: "https://completed-it-mate-fe.vercel.app/", variant: "default", newTab: true },
            { label: "Frontend Repo", href: "https://github.com/jbhall4291/completed-it-mate-fe", newTab: true, },
            { label: "Backend repo", href: "https://github.com/jbhall4291/completed-it-mate-be", variant: "secondary", newTab: true },

        ],
        className: "lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-3",
    },
    {
        name: "Enginair",
        description:
            "A web wizard for engineers to filter and compare residential HVAC options, simplifying complex product choices. Planned rollout 2026.",
        href: "/",
        cta: "Learn more",
        tech: [
            { label: "React" }, { label: "Next.js" }, { label: "TypeScript" }, { label: ".NET" },
            { label: "C#" }, { label: "SQL Server" }, { label: "Tailwind" },
        ],
        actions: [

            { label: "About the client", href: "https://www.solerpalau.com/en-en/", variant: "secondary", newTab: true },
        ],
        background: (
            <Image
                src="/images/project_cards/enginair.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover object-left-bottom pointer-events-none"
                aria-hidden="true"
            />
        ),
        className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-4",
    },
    {
        name: "TapPi",
        description: "Raspberry Pi-controlled device created with my niece during her work experience to explore Python and GPIO.",
        href: "/",
        cta: "Learn more",
        tech: [{ label: "Python" }, { label: "Flask" }, { label: "Raspberry Pi" }, { label: "GPIO" }],
        actions: [
            { label: "Watch demo", href: "https://www.youtube.com/watch?v=zqcNg0sHBC4", variant: "default", newTab: true },
            { label: "View repo", href: "https://github.com/jbhall4291/tapPi", variant: "secondary", newTab: true },
        ],
        background: (
            <Image
                src="/images/project_cards/tappi.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                aria-hidden="true"
            />
        ),
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        name: "Lorem Alan",
        description: "Lightweight VS Code extension that generates placeholder text, powered by Alan Partridge quotes.",
        href: "/",
        cta: "Learn more",
        background: (
            <Image
                src="/images/project_cards/lorem-alan.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                aria-hidden="true"
            />
        ),
        tech: [{ label: "JavaScript" }, { label: "VS Code API" }],
        actions: [
            { label: "Install (VS Code Marketplace)", href: "https://marketplace.visualstudio.com/items?itemName=JohnnyHall.lorem-alan", variant: "default", newTab: true },
            { label: "View repo", href: "https://github.com/jbhall4291/lorem-alan-vscode-extension", variant: "secondary", newTab: true },
        ],
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        name: "Connectair",
        description: "Flutter app to control residential HVAC devices, with integrated NFC functionality.",
        href: "/",
        cta: "Learn more",
        tech: [
            { label: "Flutter" }, { label: "Dart" }, { label: "Firebase" },
            { label: ".NET" }, { label: "SQL Server" },
        ],
        actions: [
            { label: "App Store", href: "https://apps.apple.com/us/app/connectair/id6446583166", variant: "default", newTab: true },
            { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.solerpalau.connectair", variant: "default", newTab: true },
            { label: "Landing page", href: "https://www.connectairapp.com/", variant: "secondary", newTab: true },
        ],
        background: (
            <Image
                src="/images/project_cards/connectair.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                aria-hidden="true"
            />
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        name: "Fan Finder",
        description: "React Native app for discovering local live gigs and connecting with fans.",
        href: "/",
        cta: "Learn more",
        tech: [
            { label: "React Native" }, { label: "Node.js" }, { label: "Express" },
            { label: "Socket.IO" }, { label: "Google Maps API" }, { label: "MongoDB" }, { label: "Jest + Supertest" },
        ],
        actions: [
            { label: "Watch demo", href: "https://www.youtube.com/watch?v=kQ7weiOZzHM", variant: "default", newTab: true },
            { label: "Frontend repo", href: "https://github.com/jbhall4291/fan-finder", variant: "secondary", newTab: true },
            { label: "Backend repo", href: "https://github.com/jbhall4291/fan-finder-backend", variant: "secondary", newTab: true },
        ],
        background: (
            <Image
                src="/images/project_cards/fanfinder.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none brightness-200 md:brightness-125"
                aria-hidden="true"
            />
        ),
        className: "lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-4",
    },
];

export function ProjectsBento() {
    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
