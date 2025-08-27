// src/components/site/orbit-field.tsx
"use client";

import { EllipticalOrbit } from "@/components/site/animated-icon";
import { useEffect, useMemo, useState } from "react";

type OrbitPos = {
    className: string;  // e.g. "left-16 top-10"
    rx: number; ry: number;
    duration?: number; phase?: number; tilt?: number; clockwise?: boolean;
};

// --- utils (only for optional shuffle) ---
function mulberry32(seed: number) {
    return () => {
        let t = (seed += 0x6D2B79F5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function shuffle<T>(arr: T[], seed: number) {
    const rnd = mulberry32(seed);
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// function IconWrapper({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-auto select-none">
//             <div className="w-14 h-14 lg:w-20 lg:h-20 overflow-hidden rounded-xl grid place-items-center">
//                 {/* keep inner icon a bit smaller for breathing room */}
//                 <div className="w-8 h-8 lg:w-12 lg:h-12">{children}</div>
//             </div>
//         </div>
//     );
// }

export function OrbitField({
    positions,
    icons,
    shuffleIcons = false, // randomize icon order per page load
}: {
    positions: OrbitPos[];
    icons: React.ReactNode[];
    shuffleIcons?: boolean;
}) {
    // seed only needed if shuffling
    const [seed, setSeed] = useState<number | null>(null);
    useEffect(() => {
        if (!shuffleIcons) return;
        const s =
            typeof window !== "undefined" && window.crypto?.getRandomValues
                ? window.crypto.getRandomValues(new Uint32Array(1))[0]!
                : Math.floor(Math.random() * 0xffffffff);
        setSeed(s);
    }, [shuffleIcons]);

    const iconOrder = useMemo(() => {
        if (!shuffleIcons || seed == null) return icons;
        return shuffle(icons, seed);
    }, [icons, shuffleIcons, seed]);

    const pickIcon = (i: number) => iconOrder[i % iconOrder.length];

    return (
        <>
            {positions.map((p, i) => (
                <EllipticalOrbit
                    key={i}
                    className={p.className}     // EllipticalOrbit adds "absolute"
                    rx={p.rx}
                    ry={p.ry}
                    duration={p.duration ?? 12}
                    phase={p.phase ?? 0}
                    tilt={p.tilt ?? 0}
                    clockwise={p.clockwise ?? true}
                >
                    {pickIcon(i)}
                </EllipticalOrbit>
            ))}
        </>
    );
}
