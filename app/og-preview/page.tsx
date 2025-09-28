// app/og-preview/page.tsx
import IconTile from "@/components/IconTile";
import Image from "next/image";

export const ICONS = [
    { key: "react", src: "/tech_stack_icons/react.svg", alt: "React", bg: "#272930", pad: 8, padLg: 10 },
    { key: "next", src: "/tech_stack_icons/next.svg", alt: "Next.js", bg: "#272930", pad: 4, padLg: 6, },
    { key: "ts", src: "/tech_stack_icons/typescript.svg", alt: "TypeScript", bg: "#3178C6", pad: 6, padLg: 8 },
    { key: "node", src: "/tech_stack_icons/node.svg", alt: "Node", bg: "#83CD29", pad: 7, padLg: 10, },
    { key: "mongoDB", src: "/tech_stack_icons/mongo.svg", alt: "MongoDB", bg: "#00ED64", pad: 10, padLg: 14 },


] as const;

export default function OgPreview() {


    return (
        <div className="ml-10 mt-40 w-[1200px] h-[630px] flex items-center justify-between px-[100px] py-[65px] dark:bg-[#1e1e20] outline outline-2 outline-purple-500">
            {/* Left: your headshot */}

            <div
                className="
                
                  relative w-[360px] h-[360px]
                  rounded-full overflow-hidden
                  border-2 border-primary/20 dark:border-white/20
                  backdrop-blur-md
                  [filter:drop-shadow(0_6px_24px_rgba(0,0,0,.15))] dark:[filter:none]
            
                  
                  [mask-image:radial-gradient(circle,black_99%,transparent_100%)]
                  [-webkit-mask-image:radial-gradient(circle,black_99%,transparent_100%)]
            
                  [background:radial-gradient(circle_at_50%_35%,theme(colors.zinc.200)_0%,theme(colors.zinc.50)_70%)]
                  dark:[background:radial-gradient(circle_at_50%_35%,theme(colors.zinc.700)_0%,theme(colors.zinc.800)_70%)]
                "
                aria-label="Portrait of Johnny Hall"
            >

                <Image
                    id="hero-photo"
                    src="/images/hero_headshots/cropped_500px_no_bg.webp"
                    alt="Johnny Hall"
                    fill
                    priority
                    draggable={false}
                    className="
                    object-cover select-none pointer-events-none transition-opacity duration-500 dark:[filter:none]
                    /* optional belt-and-braces per-image clip */
                    [clip-path:circle(50%)]
                  "
                />

            </div>

            {/* Right: name, tagline, icons, site */}
            <div className="flex flex-col   w-[550px]">
                <h1 className="text-[70px] font-bold -mb-5 ">Johnny Hall</h1>
                <h2 className="text-[56px] font-normal opacity-90 mb-6 ">
                    Software Engineer
                </h2>
                <h3 className="text-[50px] font-bold mb-8 ">Full Stack · Client Facing</h3>


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
