// app/og-preview/page.tsx
import IconTile from "@/components/IconTile";
import Image from "next/image";

const ICONS = [
    { key: "react", src: "/tech_stack_icons/react.svg", alt: "React", bg: "#272930", pad: 8, padLg: 10 },
    { key: "next", src: "/tech_stack_icons/next.svg", alt: "Next.js", bg: "#272930", pad: 4, padLg: 6, },
    { key: "ts", src: "/tech_stack_icons/typescript.svg", alt: "TypeScript", bg: "#3178C6", pad: 6, padLg: 8 },
    { key: "node", src: "/tech_stack_icons/node.svg", alt: "Node", bg: "#83CD29", pad: 7, padLg: 10, },
    { key: "mongoDB", src: "/tech_stack_icons/mongo.svg", alt: "MongoDB", bg: "#00ED64", pad: 10, padLg: 14 },
    { key: "azure", src: "/tech_stack_icons/azure.svg", alt: "Azure", bg: "white", pad: 8, padLg: 10, hasBorder: true },


] as const;

export default function OgPreview() {


    return (
        <div className="ml-10 mt-40 w-[1584px] h-[396px] flex items-center justify-between px-[140px] pl-[600px] py-[88px] dark:bg-[#1e1e20] outline-2 outline-purple-500">
            {/* Left: your headshot */}



            {/* Right: name, tagline, icons, site */}
            <div className="flex flex-col   w-full">
                <h1 className="text-[60px] font-bold -mb-2 ">Software Engineer</h1>
                <h2 className="text-[64px] font-normal opacity-95 mb-6 ">
                    Full Stack · Client Facing
                </h2>



                <div className="flex flex-row justify-between">
                    {ICONS.map(({ key, ...props }, i) => {
                        const step = 1 / ICONS.length;
                        const delay = i * step;
                        return (
                            <IconTile
                                key={key}
                                {...props}
                                mount="pop"
                                delayMs={0}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
