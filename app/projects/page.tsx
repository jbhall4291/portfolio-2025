import type { Metadata } from "next";
import { ProjectsBento } from "@/components/ProjectsBento";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected projects across web, mobile, tooling, and IoT.",
};

export default function ProjectsPage() {
    return (

        <div className="">
            <div className="mx-auto md:max-w-7xl px-4 2xl:max-w-7xl mb-8 mt-24  md:mt-36  dark:text-zinc-200 text-left md:text-center">

                <h1 id="about-heading" className=" mb-2 text-4xl md:text-7xl font-semibold  tracking-tight">
                    My Projects
                </h1>



                <p className=" text-lg md:text-2xl font-medium leading-relaxed ">
                    From client work to personal builds - a broad selection of my work.
                </p>


            </div>



            <div className="md:max-w-7xl 2xl:max-w-7xl  mx-auto px-3 md:px-0">
                <ProjectsBento />

            </div>
        </div>
    );
}







