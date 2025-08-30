import type { Metadata } from "next";
import { ProjectsBento } from "@/components/ProjectsBento";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected projects across web, mobile, tooling, and IoT.",
};

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-12  mt-12 md:mt-22">
            <h1 className="mb-8 text-3xl font-bold ">Projects</h1>
            <ProjectsBento />


        </main>
    );
}
