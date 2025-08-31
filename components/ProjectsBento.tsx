import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
    {
        Icon: FileTextIcon,
        name: "Completed It Mate",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://infinigeek.com/assets/How-To-Waste-Money-Properly-%E2%80%93-A-Guide-To-Collecting-Video-Games.jpg"
                className="absolute  opacity-60"
            />,
        className: "lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Enginair",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://www.cibsejournal.com/wp-content/uploads/2022/03/pp61-pic.jpg"
                className="absolute  opacity-60"
            />,
        className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-4 ",
    },
    {
        Icon: GlobeIcon,
        name: "Tappi",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://camo.githubusercontent.com/4989482f696f661f95ede10c95694484e945956087df95ea3ef430e02014f830/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f7a71634e673073484243342f302e6a7067"
                className="absolute  opacity-60"
            />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: CalendarIcon,
        name: "Lorem Alan",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://e3.365dm.com/21/05/768x432/skynews-coogan-partridge_5395856.jpg?20210526145149"
                className="absolute opacity-60"
            />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BellIcon,
        name: "Connectair",
        description:
            "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://www.achrnews.com/ext/resources/2024/04/11/Soler-Palau-Ventilation-Group.webp?t=1712862719&width=696"
                className="absolute  opacity-60"
            />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: BellIcon,
        name: "Fan Finder",
        description:
            "Team-built iOS app that matched fans to local gigs; solid repo structure and CI. .Swift · UIKit · Firebase",
        href: "/",
        cta: "Learn more",
        background:
            <img
                src="https://as1.ftcdn.net/v2/jpg/01/42/51/58/1000_F_142515887_xVLCVpdyWDU5ScHTi64iMCEZJioVHqU4.jpg"
                className="absolute  opacity-60"
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
