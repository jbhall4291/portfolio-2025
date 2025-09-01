// app/page.tsx
import Link from "next/link";
import Image from 'next/image'
import { Code, Cpu, Download, FileText, FolderKanban, Globe } from "lucide-react";
import { OrbitField } from "@/components/site/orbit-field";
import { Button } from "@/components/ui/button";


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
    { className: "left-[0%] top-[15%]", rx: 36, ry: 10, duration: 6, phase: 250 },
    { className: "left-[50%] top-[75%]", rx: 38, ry: 10, duration: 9, tilt: 14 },
    { className: "left-[85%] top-[20%]", rx: 60, ry: 18, duration: 6, tilt: 8 },
    { className: "left-[5%] top-[75%]", rx: 7, ry: 1, duration: 4, tilt: 3, phase: 2 },
    { className: "left-[85%] top-[70%]", rx: 50, ry: 14, duration: 5.5, clockwise: false, tilt: -10, phase: 160 },
    { className: "left-[30%] top-[85%]", rx: 44, ry: 12, duration: 11, clockwise: false, phase: 90 },
    { className: "left-[65%] top-[15%]", rx: 48, ry: 16, duration: 13, tilt: 18 },
    { className: "left-[15%] top-[45%]", rx: 52, ry: 16, duration: 15, clockwise: false },
    { className: "left-[100%] top-[85%]", rx: 40, ry: 12, duration: 12 },
    { className: "left-[40%] top-[25%]", rx: 58, ry: 18, duration: 14, tilt: -6 },
    { className: "left-[80%] top-[40%]", rx: 46, ry: 14, duration: 10, phase: 210 },
    { className: "left-[25%] top-[25%]", rx: 62, ry: 22, duration: 16, clockwise: false },
  ];

  const ReactLogo = () => (
    <svg viewBox="0 0 128 128">
      <path d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
    </svg>
  );
  const TsPng = () => <Cpu className="w-full h-full" aria-hidden />;
  const NodeImg = () => <Globe className="w-full h-full" aria-hidden />;

  // pass them as components
  <OrbitField
    positions={ORBIT_POSITIONS}
    icons={[<ReactLogo key="react" />, <TsPng key="ts" />, <NodeImg key="node" />]}
    shuffleIcons
  />


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-[72rem] px-4 sm:px-6 lg:px-8 py-10">

        {/* <Link href="/projects" className="mt-6 inline-block underline">
          Go to Projects →
        </Link> */}

        {/* Hero area – swap your old div for a section */}
        <section
          className="relative mt-10 min-h-[80svh] flex justify-center items-center 
               " // 👈 debug background here
        >
          <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">


            <Image
              src="/images/bg_removed.png"   // export as WebP with alpha if you can
              alt="Johnny Hall"
              width={200}
              height={200}
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



            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

              <Button asChild size="lg" className="px-6">
                <Link href="/projects" aria-label="View projects">
                  View projects
                </Link>
              </Button>



              <Button asChild variant="secondary" size="lg" className="px-6">
                <Link href="/contact" aria-label="Get in touch">
                  Get in touch
                </Link>
              </Button>

            </div>
          </div>


          {/* Orbiting layer (uses section as positioning context due to 'relative') */}
          <OrbitField
            positions={ORBIT_POSITIONS}             // ✅ use your positions
            icons={[
              <ReactLogo key="react" />,
              <Cpu key="ts" className="w-full h-full" aria-hidden />,
              <Globe key="node" className="w-full h-full" aria-hidden />,

              <ReactLogo key="react2" />,
              <Cpu key="ts2" className="w-full h-full" aria-hidden />,
              <Globe key="node2" className="w-full h-full" aria-hidden />,

              <ReactLogo key="react3" />,
              <Cpu key="ts3" className="w-full h-full" aria-hidden />,
              <Globe key="node3" className="w-full h-full" aria-hidden />,

              <ReactLogo key="react4" />,
              <Cpu key="ts4" className="w-full h-full" aria-hidden />,
              <Globe key="node4" className="w-full h-full" aria-hidden />,
            ]}
            shuffleIcons                             // optional
          />
        </section>
      </main>

    </>
  );
}
