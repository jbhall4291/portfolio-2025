//root page.tsx
import Image from "next/image";
import Link from "next/link";
import OrbitGame from "@/components/home/OrbitGame";
import { Button } from "@/components/ui/button";
import HeroPhoto from "@/components/home/HeroPhoto";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Johnny Hall – Software Engineer Portfolio",
  description:
    "Portfolio of Johnny Hall, a full-stack, client-facing engineer using React/Next.js, Node.js, TypeScript and MongoDB.",
  alternates: { canonical: "/" },
  openGraph: { url: "https://johnnyhall.dev/" }
};


const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johnny Hall",
  url: "https://johnnyhall.dev",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/jbhall4291/",
    "https://www.linkedin.com/in/johnny-hall-dev"
    
  ]
};

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Johnny Hall Portfolio",
  url: "https://johnnyhall.dev",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://johnnyhall.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};


export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }} />

      <main className="mx-auto w-full max-w-[120rem]  pt-10 select-none">
        <section className="relative mt-10 min-h-[85svh] flex justify-center items-center overflow-hidden xl:overflow-visible">

          <div className="relative flex flex-col h-full items-center justify-center text-center mt-6">
            <HeroPhoto
              seriousSrc="/images/hero_headshots/cropped_500px_no_bg.webp" // default
              smileSrc="/images/hero_headshots/smile_cropped_500px_no_bg.webp"     // the easter egg one              
              durationMs={3000}
            />
            <h1 className="text-[40px] lg:text-[60px]  font-bold leading-[50px] lg:leading-[72px] tracking-tight ">Johnny Hall</h1>
            <h2 className="text-[30px] lg:text-[44px] font-semibold leading-[36px]  lg:leading-[50px]  text-[#46464A] dark:text-neutral-300">Software Engineer</h2>
            <h2 className="text-[26px] lg:text-[36px] font-normal leading-[34px]  lg:leading-[40px] mt-0.5  text-[#6e6e73] dark:text-neutral-400">Full Stack · Client Facing</h2>

            <div className="mt-3 md:mt-4 flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-3  ">
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
