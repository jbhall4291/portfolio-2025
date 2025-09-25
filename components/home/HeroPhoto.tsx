// components/home/HeroPhoto.tsx
"use client";

import Image from "next/image";
import * as React from "react";

type Props = {
    seriousSrc: string; // e.g. "/images/hero-serious.png"
    smileSrc: string;   // e.g. "/images/hero-smile.png"
    durationMs?: number; // how long the smile stays visible
};

export default function HeroPhoto({
    seriousSrc,
    smileSrc,
    durationMs = 3000,
}: Props) {
    const [smiling, setSmiling] = React.useState(false);

    // Preload smile image
    React.useEffect(() => {
        const preload = new window.Image();
        preload.src = smileSrc;
    }, [smileSrc]);

    // Listen for easter egg win
    React.useEffect(() => {
        const onWin = () => {
            setSmiling(true);
            const to = window.setTimeout(() => setSmiling(false), durationMs);
            return () => window.clearTimeout(to);
        };
        window.addEventListener("easter-egg-win", onWin);
        return () => window.removeEventListener("easter-egg-win", onWin);
    }, [durationMs]);

    return (
        <div
            className="
        relative w-40 h-40 md:w-56 md:h-56
        rounded-full overflow-hidden
        border-2 border-primary/20 dark:border-white/20
        bg-white/90 dark:bg-black/20
        backdrop-blur-md
        [filter:drop-shadow(0_6px_24px_rgba(0,0,0,.15))]
      "
            aria-label="Portrait of Johnny Hall"
        >
            {/* serious (default) */}
            <Image
                id="hero-photo"
                src={seriousSrc}
                alt="Johnny Hall"
                fill
                priority
                draggable={false}
                className="object-cover select-none pointer-events-none transition-opacity duration-500 dark:[filter:none]"
            />

            {/* smiling (overlay) */}
            <Image
                src={smileSrc}
                alt="Johnny Hall smiling"
                fill
                priority
                draggable={false}
                aria-hidden
                className={`object-cover select-none pointer-events-none transition-opacity duration-500 ${smiling ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
}
