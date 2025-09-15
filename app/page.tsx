// app/page.tsx
import Link from "next/link";
import Image from 'next/image'
import { OrbitField } from "@/components/site/orbit-field";
import { Button } from "@/components/ui/button";
import IconTile from "@/components/IconTile";


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnny Hall",
    url: "https://johnnyhall.dev",
    jobTitle: "Software Developer",
    sameAs: ["https://github.com/jbhall4291/", "https://www.linkedin.com/in/johnny-hall-dev"]

  };

  const ORBIT_POSITIONS = [
    { className: "left-[12%] top-[10%]", rx: 15, ry: 13, duration: 16, phase: 250 },
    { className: "left-[40%] top-[10%]", rx: 15, ry: 15, duration: 14, tilt: -6 },
    { className: "left-[65%] top-[12%]", rx: 12, ry: 11, duration: 12, tilt: 18 },
    { className: "left-[82%] top-[12%]", rx: 15, ry: 13, duration: 15.5, clockwise: false, tilt: -10, phase: 160 },
    { className: "left-[75%] top-[22%]", rx: 18, ry: 15, duration: 16, tilt: 8 },
    { className: "left-[20%] top-[25%]", rx: 18, ry: 12, duration: 16, clockwise: false },
    { className: "left-[85%] top-[40%]", rx: 12, ry: 14, duration: 10, phase: 210 },
    { className: "left-[13%] top-[45%]", rx: 15, ry: 16, duration: 15, clockwise: false },
    { className: "left-[70%] top-[85%]", rx: 9, ry: 13, duration: 19, tilt: 14 },
    { className: "left-[10%] top-[87%]", rx: 18, ry: 12, duration: 14, tilt: 3, phase: 2 },
    { className: "left-[87%] top-[90%]", rx: 12, ry: 11, duration: 12 },
    { className: "left-[35%] top-[91%]", rx: 12, ry: 10, duration: 11, clockwise: false, phase: 90 },
    { className: "left-[20%] top-[35%]", rx: 12, ry: 10, duration: 11, clockwise: false, phase: 90 },
  ];


  const ICONS = [
    {
      key: "ts",
      src: "/tech_stack_icons/typescript.svg",
      alt: "TypeScript",
      bg: "#3178C6",
      pad: 6,       // per-icon inset on mobile
      padLg: 4,     // per-icon inset on desktop
    },
    {
      key: "jest",
      src: "/tech_stack_icons/jest.svg",
      alt: "Jest",
      bg: "#99425B",
      pad: 8,
      padLg: 10,
    },
    {
      key: "js",
      src: "/tech_stack_icons/javascript.svg",
      alt: "JavaScript",
      bg: "#efe125",
      pad: 6,
      padLg: 4,
    },
    {
      key: "react",
      src: "/tech_stack_icons/react.svg",
      alt: "React",
      bg: "#272930",
      pad: 6,
      padLg: 10,
    },
    {
      key: "azure",
      src: "/tech_stack_icons/azure.svg",
      alt: "Azure",
      bg: "white",
      pad: 10,
      padLg: 10,
      hasBorder: true,
    },
    {
      key: "next",
      src: "/tech_stack_icons/next.svg",
      alt: "Next.js",
      bg: "#212121",
      pad: 2,
      padLg: 0,

    },
    {
      key: "mongoDB",
      src: "/tech_stack_icons/mongo.svg",
      alt: "MongoDB",
      bg: "#00ED64",
      pad: 10,
      padLg: 12,
    },
    {
      key: "c#",
      src: "/tech_stack_icons/csharp.svg",
      alt: "C#",
      bg: "#7b43a4",
      pad: 0,
      padLg: 0,
    },
    {
      key: "flutter",
      src: "/tech_stack_icons/flutter.svg",
      alt: "Flutter",
      bg: "white",
      pad: 10,
      padLg: 10,
      hasBorder: true,

    },
    {
      key: "sql",
      src: "/tech_stack_icons/sql.svg",
      alt: "Sql",
      bg: "#c73e48",
      pad: 6,
      padLg: 10,
    },

    {
      key: "tailwind",
      src: "/tech_stack_icons/tailwind.svg",
      alt: "TailwindCSS",
      bg: "#38bdf8",
      pad: 10,
      padLg: 10,


    },

    {
      key: ".net",
      src: "/tech_stack_icons/net.svg",
      alt: ".net",
      bg: "#5a3591",
      pad: 6,
      padLg: 8,
    },

    {
      key: "firebase",
      src: "/tech_stack_icons/firebase.svg",
      alt: "Firebase",
      bg: "white",
      pad: 10,
      padLg: 6,
      hasBorder: true,

    },


  ];





  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto w-full max-w-[120rem]  pt-10 ">
        <section className="relative mt-10 min-h-[85svh] flex justify-center items-center overflow-hidden xl:overflow-visible">

          <div className="relative z-10 flex flex-col h-full items-center justify-center text-center mt-10">


            <Image
              src="/images/bg_removed.png"   // export as WebP with alpha if you can
              alt="Johnny Hall"
              width={180}
              height={180}
              priority
              className="select-none bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-primary/20 dark:border-none "
              style={{
                // soft separation so it doesn’t look pasted on
                filter: "drop-shadow(0 6px 24px rgba(0,0,0,.15))",
              }}
            />
            <h1 className="text-4xl lg:text-[80px] font-semibold leading-none tracking-tight">
              Johnny Hall
            </h1>
            <h2 className="mt-2 text-4xl lg:text-[80px] font-medium  leading-none text-[#6e6e73] ">Software Engineer</h2>



            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">

              <Button asChild size="xl">
                <Link href="/projects" aria-label="Explore projects">
                  Explore projects
                </Link>
              </Button>

              <Button asChild size="xl" variant="outline">
                <Link href="/contact" aria-label="Get in touch">
                  Let's connect
                </Link>
              </Button>

            </div>
          </div>


          <div
            className="
      absolute inset-0 z-0
      overflow-hidden xl:overflow-visible
      xl:w-[calc(100%+var(--gutter))]
      xl:right-[calc(-1*var(--gutter))]
      will-change-transform
    "
          >
            <OrbitField
              positions={ORBIT_POSITIONS}
              icons={ICONS.map(({ key: id, ...props }) => (
                <IconTile key={id} {...props} />
              ))}
            />

          </div>


        </section>
      </main>

    </>
  );
}
