import type { Metadata } from "next";
import { ProjectsBento } from "@/components/ProjectsBento";

export const metadata = {
    title: "Projects – Johnny Hall",
    description: "Selected full-stack projects with React/Next.js, Node.js, TypeScript and MongoDB.",
};

export default function ProjectsPage() {
    return (
        <main>
            <div className="mx-auto flex flex-col max-w-4xl mb-8 mt-24 px-6 md:mt-36  dark:text-zinc-200  ">
                <h1 id="about-heading" className=" mb-2 text-4xl md:text-7xl font-semibold  tracking-tight">
                    My Projects
                </h1>
                <p className=" text-lg md:text-2xl font-medium leading-relaxed max-w-prose">
                    From production client builds to playful experiments - a curated selection of my work across web, mobile and IoT.
                </p>
            </div>
            <div className="md:max-w-7xl 2xl:max-w-7xl  mx-auto px-3 2xl:px-0">
                <ProjectsBento />
            </div>
        </main>
    );
}