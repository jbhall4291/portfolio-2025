// components/home/HeroPhoto.tsx
"use client";

import Image from "next/image";
import * as React from "react";

type Props = {
    seriousSrc: string; // e.g. "/images/hero-serious.png"
    smileSrc: string;   // e.g. "/images/hero-smile.png"
    size?: number;      // default 180
    durationMs?: number; // how long the smile stays, default 6000
};

export default function HeroPhoto({
    seriousSrc,
    smileSrc,
    size = 180,
    durationMs = 6000,
}: Props) {
    const [smiling, setSmiling] = React.useState(false);

    // Preload the smile image so the swap is instant
    React.useEffect(() => {
        const preload = new window.Image(); // explicitly browser Image
        preload.src = smileSrc;
    }, [smileSrc]);

    // Listen for the easter-egg win
    React.useEffect(() => {
        const onWin = () => {
            setSmiling(true);
            const to = setTimeout(() => setSmiling(false), durationMs);
            return () => clearTimeout(to);
        };

        window.addEventListener("easter-egg-win", onWin);
        return () => window.removeEventListener("easter-egg-win", onWin);
    }, [durationMs]);

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* serious (default) */}
            <Image
                id="hero-photo"
                src={seriousSrc}
                alt="Johnny Hall"
                fill
                priority
                className={`rounded-full border border-primary/20 bg-white/50 backdrop-blur-md dark:border-none dark:bg-black/50 select-none object-cover transition-opacity duration-500 ${smiling ? "opacity-0" : "opacity-100"}`}
                style={{ filter: "drop-shadow(0 6px 24px rgba(0,0,0,.15))" }}
            />
            {/* smiling (revealed on win) */}
            <Image
                src={smileSrc}
                alt="Johnny Hall smiling"
                fill
                className={`rounded-full border border-primary/20 bg-white/50 backdrop-blur-md dark:border-none dark:bg-black/50 select-none object-cover transition-opacity duration-500 ${smiling ? "opacity-100" : "opacity-0"}`}
                aria-hidden
            />
        </div>
    );
}
