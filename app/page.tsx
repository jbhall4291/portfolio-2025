//root page.tsx
import Image from "next/image";
import Link from "next/link";
import OrbitGame from "@/components/home/OrbitGame";
import { Button } from "@/components/ui/button";
import HeroPhoto from "@/components/home/HeroPhoto";

// app/page.tsx
export const metadata = {
  title: "Johnny Hall – Software Engineer",
  description: "Full-stack, client-facing engineer using React/Next.js, Node.js, TypeScript and MongoDB.",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johnny Hall",
  url: "https://johnnyhall.dev",
  jobTitle: "Software Engineer",
  sameAs: ["https://github.com/jbhall4291/", "https://www.linkedin.com/in/johnny-hall-dev"]

};


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto w-full max-w-[120rem]  pt-10 select-none">
        <section className="relative mt-10 min-h-[85svh] flex justify-center items-center overflow-hidden xl:overflow-visible">

          <div className="relative flex flex-col h-full items-center justify-center text-center mt-6">
            <HeroPhoto
              seriousSrc="/images/hero_headshots/cropped_500px_no_bg.png" // default
              smileSrc="/images/hero_headshots/smile_cropped_500px_no_bg.png"     // the easter egg one              
              durationMs={3000}
            />
            <h1 className="text-[40px] lg:text-[60px]  font-bold leading-[50px] lg:leading-[72px] tracking-tight ">Johnny Hall</h1>
            <h2 className="text-[30px] lg:text-[44px] font-semibold leading-[36px]  lg:leading-[50px]  text-[#46464A] dark:text-neutral-300">Software Engineer</h2>
            <h2 className="text-[24px] lg:text-[36px] font-normal leading-[34px]  lg:leading-[40px]   text-[#6e6e73] dark:text-neutral-400">Full Stack · Client Facing</h2>

            <div className="mt-5 flex flex-wrap justify-between gap-x-3 md:gap-x-4 ">
              <Button asChild size="lg" variant="outline" className="z-20 rounded-full py-4 text-lg">
                <Link href="/projects" aria-label="Explore projects">
                  Explore projects
                </Link>
              </Button>

              <Button asChild size="lg" className="z-20 rounded-full py-4 text-lg">
                <Link href="/cv" aria-label="View CV">
                  View my CV
                </Link>
              </Button>
            </div>
          </div>

          {/* Only this block needs client runtime */}
          <div
            className="
              absolute inset-0 z-0
              pointer-events-none                
              overflow-hidden xl:overflow-visible
              xl:max-w-[1480px] mx-auto
              xl:w-[calc(100%+var(--gutter))] xl:right-[calc(-1*var(--gutter))]
              "
          >
            <OrbitGame />
          </div>
        </section>
      </main>
    </>
  );
}
