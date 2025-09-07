import { BentoCard, BentoGrid, BentoCardProps, ActionLink } from "@/components/magicui/bento-grid";

const features: BentoCardProps[] = [
    {

        name: "Completed It Mate",
        description: "A full-stack web app for tracking video games - log completed, owned, or wishlisted titles, and connect with friends.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="images/project_cards/completed-it-mate.webp"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        tech: [
            { label: "Next.js (React)" },
            { label: "TypeScript" },
            { label: "Node + Express" },
            { label: "MongoDB" },
            { label: "Jest + Supertest" },
            { label: "Playwright" },




        ],
        actions: [
            { label: "Visit Site", href: "https://example.com", variant: "default", newTab: true, },
            { label: "Repo Frontend", href: "https://github.com/you/repo", newTab: true, },
            { label: "Repo Backend", href: "https://github.com/you/repo", newTab: true, },
        ],
        className: "lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-3",
    },
    {

        name: "Enginair",
        description: "A web wizard for engineers to filter and compare residential HVAC options, simplifying complex product choices. Planned rollout 2026.",
        href: "/",
        cta: "Learn more",
        tech: [
            { label: "Next.js" },
            { label: "TypeScript" },
            { label: ".NET" },
            { label: "Microsoft SQL" },
            { label: "Tailwind + Shadcn" },
            { label: "Redis" },

        ],

        background:
            <img
                src="/images/project_cards/enginair.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-4 ",
    },
    {

        name: "TapPi",
        description: "Raspberry Pi-controlled device created with my niece during her work experience to explore Python.",
        href: "/",
        cta: "Learn more",
        tech: [
            { label: "Python" },
            { label: "Flask" },
            { label: "Raspberry Pi" },
            { label: "GPIO" },

        ],
        actions: [
            { label: "View Repo", href: "https://example.com", variant: "default", newTab: true, },

        ],
        background:
            <img
                src="images/project_cards/tappi.webp"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                alt=""
                aria-hidden
            />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {

        name: "Lorem Alan",
        description: "A lightweight VS Code extension that generates placeholder text, powered by Alan Partridge quotes.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="images/project_cards/lorem-alan.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        tech: [

            { label: "TypeScript" },
            { label: "VS Code API" },

        ],
        actions: [
            {
                label: "Install (VS Code Marketplace)",
                href: "https://marketplace.visualstudio.com/items?itemName=JohnnyHall.lorem-alan",
                variant: "default",
                newTab: true,
            },
            {
                label: "View Repo",
                href: "https://github.com/jbhall4291/lorem-alan-vscode-extension",
                variant: "secondary", // matches your shadcn/ui button variants
                newTab: true,
            },
        ],
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {

        name: "Connectair",
        description:
            "Flutter app to control residential HVAC devices, with integrated NFC functionality.",
        href: "/",
        cta: "Learn more",

        tech: [

            { label: "Flutter (Dart)" },
            { label: "Firebase" },
            { label: ".NET" },
            { label: "SQL Server" },

            { label: "NFC" },

        ],
        actions: [

            {
                label: "App Store",
                href: "https://apps.apple.com/us/app/connectair/id6446583166",
                variant: "default",
                newTab: true,
            },


            {
                label: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.solerpalau.connectair",
                variant: "default",
                newTab: true,
            },

            {
                label: "Landing Page",
                href: "https://info.solerpalau.com/en/connectair",
                variant: "secondary",
                newTab: true,
            },

        ],


        background:
            <img
                src="https://www.solerpalau.com/blog/es-es/wp-content/uploads/sites/3/2025/06/Smart-Ventilation-SP.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {

        name: "Fan Finder",
        description:
            "A cross-platform mobile app built with React Native for discovering gigs and connecting with fans.",
        href: "/",
        cta: "Learn more",


        tech: [

            { label: "React Native + Expo" },
            { label: "Node.js + Express" },
            { label: "Socket.IO" },
            { label: "Google Maps API" },
            { label: "MongoDB" },
            { label: "Jest/Supertest" },


        ],
        actions: [
            {
                label: "View Repo",
                href: "https://github.com/you/completed-it-mate",
                variant: "default", // matches your shadcn/ui button variants
                newTab: true,
            },
            {
                label: "Live Site",
                href: "https://completed-it-mate.vercel.app",
                variant: "secondary",
                newTab: true,
            },
        ],


        background:
            <img
                src="images/project_cards/fanfinder.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
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
