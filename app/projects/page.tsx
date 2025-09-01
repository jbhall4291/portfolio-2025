import type { Metadata } from "next";
import { ProjectsBento } from "@/components/ProjectsBento";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected projects across web, mobile, tooling, and IoT.",
};

export default function ProjectsPage() {
    return (

        <div className="">
            <div className="mx-auto max-w-4xl px-6 py-12  mt-12 md:mt-22  dark:text-zinc-200">

                <h1 id="about-heading" className="mb-4 text-4xl md:text-7xl font-semibold  tracking-tight">
                    My Projects
                </h1>

                <p>some text, probably</p>


            </div>



            <div className="md:max-w-7xl 2xl:max-w-7xl px-4  mx-auto">
                <ProjectsBento />

            </div>
        </div>
    );
}
