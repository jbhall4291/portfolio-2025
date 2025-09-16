import Image from "next/image";
import Link from "next/link";
import OrbitGame from "@/components/home/OrbitGame";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Johnny Hall – Software Engineer",
  description:
    "Full-stack apps with React/Next.js, Node/Express, TypeScript and MongoDB.",
  openGraph: { images: ["/og/hero.jpg"] },
};



const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johnny Hall",
  url: "https://johnnyhall.dev",
  jobTitle: "Software Developer",
  sameAs: ["https://github.com/jbhall4291/", "https://www.linkedin.com/in/johnny-hall-dev"]

};


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

          {/* Only this block needs client runtime */}
          <div
            className="
      absolute inset-0 z-0
      overflow-hidden xl:overflow-visible
      xl:w-[calc(100%+var(--gutter))]
      xl:right-[calc(-1*var(--gutter))]
      will-change-transform
    "
          >
            <OrbitGame />
          </div>
        </section>
      </main>
    </>
  );
}
