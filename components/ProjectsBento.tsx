import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
    {

        name: "Completed It Mate",
        description: "A full-stack web app for tracking video games - log completed, owned, or wishlisted titles, and connect with friends. Built with TDD, end-to-end tests, and production-grade CI/CD pipelines.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://infinigeek.com/assets/How-To-Waste-Money-Properly-%E2%80%93-A-Guide-To-Collecting-Video-Games.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        tech: [
            { label: "Next.js" },
            { label: "TypeScript" },
            { label: "MongoDB" },
            { label: "Jest" },
        ],
        actions: [
            { label: "Live", href: "https://example.com", variant: "default" },
            { label: "Repo", href: "https://github.com/you/repo" },
        ],
        className: "lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-3",
    },
    {

        name: "Enginair",
        description: "A web wizard for engineers to filter and compare HVAC options, simplifying complex product choices. Prototyped from Figma into a working front end, with planned rollout in 2026.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://www.cibsejournal.com/wp-content/uploads/2022/03/pp61-pic.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-4 ",
    },
    {

        name: "Tappi",
        description: "Raspberry Pi-controlled device created with my niece during her work experience to explore Python.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://media.wired.com/photos/5d5c33225006670008f3b6c4/master/w_2560%2Cc_limit/raspberry-pi-4-board-SOURCE-Raspberrypi_org.jpg"
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
                src="https://e3.365dm.com/21/05/768x432/skynews-coogan-partridge_5395856.jpg?20210526145149"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"

                alt=""
                aria-hidden
            />,
        tech: [

            { label: "TypeScript" },

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
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {

        name: "Connectair",
        description:
            "Flutter app to control residential HVAC devices, with integrated NFC functionality.",
        href: "/",
        cta: "Learn more",
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
        background:
            <img
                src="https://as1.ftcdn.net/v2/jpg/01/42/51/58/1000_F_142515887_xVLCVpdyWDU5ScHTi64iMCEZJioVHqU4.jpg"
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
