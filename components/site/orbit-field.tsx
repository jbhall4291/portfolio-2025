// src/components/site/orbit-field.tsx
"use client";

import { EllipticalOrbit } from "@/components/site/animated-icon";
import { useEffect, useMemo, useState, useCallback } from "react";

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
function shufflePairs<T>(arr: T[], seed: number) {
    const rnd = mulberry32(seed);
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export function OrbitField({
    positions,
    icons,
    shuffleIcons = true, // randomize icon order per page load
    iconIds,
    onIconTap,
    pauseMs = 2500,

}: {
    positions: OrbitPos[];
    icons: React.ReactNode[];
    shuffleIcons?: boolean;
    iconIds: string[];
    onIconTap?: (id: string) => void;
    pauseMs?: number;
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

    // Pair ids + nodes, shuffle together (if enabled)
    const pairs = useMemo(() => {
        const zipped = iconIds.map((id, i) => ({ id, node: icons[i] }));
        if (!shuffleIcons || seed == null) return zipped;
        return shufflePairs(zipped, seed);
    }, [icons, iconIds, shuffleIcons, seed]);

    const pick = (i: number) => pairs[i % pairs.length];

    // Per-icon pause bookkeeping
    const [pausedUntil, setPausedUntil] = useState<Record<string, number>>({});
    const now = () =>
        typeof performance !== "undefined" ? performance.now() : Date.now();

    const pauseIcon = useCallback((id: string) => {
        const until = now() + pauseMs;
        setPausedUntil((prev) => ({ ...prev, [id]: until }));
        window.setTimeout(() => {
            setPausedUntil((prev) => {
                if (!prev[id]) return prev;
                if (prev[id] <= until) {
                    const next = { ...prev };
                    delete next[id];
                    return next;
                }
                return prev; // a newer pause extended it
            });
        }, pauseMs + 5);
    }, [pauseMs]);


    return (
        <>
            {positions.map((p, i) => {
                const { id, node } = pick(i);
                const isPaused = !!pausedUntil[id] && pausedUntil[id] > now();

                return (
                    <EllipticalOrbit
                        key={id ?? i}
                        className={p.className}
                        rx={p.rx}
                        ry={p.ry}
                        duration={p.duration ?? 12}
                        phase={p.phase ?? 0}
                        tilt={p.tilt ?? 0}
                        clockwise={p.clockwise ?? true}
                        paused={isPaused}                              // NEW
                        onPointerDown={() => {                         // NEW
                            pauseIcon(id);
                            onIconTap?.(id);
                        }}
                    >
                        {node}
                    </EllipticalOrbit>
                );
            })}
        </>
    );
}
