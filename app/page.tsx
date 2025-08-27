// app/page.tsx
import { AnimatedIcons } from "@/components/site/animated-icons";
import Link from "next/link";
import Image from 'next/image'


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnny Hall",
    url: "https://johnnyhall.dev",
    jobTitle: "Software Developer",
    sameAs: ["https://github.com/jbhall4291/", "https://www.linkedin.com/in/johnny-hall-dev"]

  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto max-w-2xl p-8">
        <h1 className="text-3xl font-semibold">Home</h1>
        <p className="mt-3 text-neutral-600">
          This is server-rendered HTML. Only the small transition wrapper hydrates.
        </p>
        <Link href="/projects" className="mt-6 inline-block underline">
          Go to Projects →
        </Link>
        <AnimatedIcons />
        <Image
          src="/og.png"
          width={500}
          height={500}
          alt="Pic"
        />
      </main>
    </>
  );
}
