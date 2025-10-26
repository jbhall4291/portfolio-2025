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

    // global freeze + synchronized resume controls from OrbitGame
    freezeUntil = null,
    resumeEpoch = 0,
}: {
    positions: ReadonlyArray<OrbitPos>;
    icons: React.ReactNode[];
    shuffleIcons?: boolean;
    iconIds: string[];
    onIconTap?: (id: string) => void;
    pauseMs?: number;

    freezeUntil?: number | null;
    resumeEpoch?: number;
}) {
    // seed only needed if shuffling
    const [seed] = useState<number | null>(() => {
        if (!shuffleIcons) return null;
        try {
            const a = new Uint32Array(1);
            globalThis.crypto?.getRandomValues(a);
            return a[0]!;
        } catch {
            return Math.floor(Math.random() * 0xffffffff);
        }
    });

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

    const pauseIcon = useCallback(
        (id: string) => {
            const until = now() + pauseMs;
            setPausedUntil((prev) => ({ ...prev, [id]: until }));
            // safety: clear this pause after it elapses (in case no other event touches it)
            window.setTimeout(() => {
                setPausedUntil((prev) => {
                    const current = prev[id];
                    if (!current) return prev;
                    if (current <= until) {
                        const next = { ...prev };
                        delete next[id];
                        return next;
                    }
                    return prev; // a newer pause extended it
                });
            }, pauseMs + 5);
        },
        [pauseMs]
    );

    // whenever OrbitGame bumps resumeEpoch (after win beat or timeout),
    // clear ALL per-icon timers so nothing waits out its own 15s.
    useEffect(() => {
        setPausedUntil({});
    }, [resumeEpoch]);

    return (
        <>
            {positions.map((p, i) => {
                const { id, node } = pick(i);

                // global freeze OR individual paused-until
                const isGloballyFrozen = freezeUntil != null && now() < freezeUntil;
                const isIndividuallyPaused = !!pausedUntil[id] && pausedUntil[id] > now();
                const isPaused = isGloballyFrozen || isIndividuallyPaused;

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
                        paused={isPaused} // EllipticalOrbit should honor this with animation-play-state or rAF guard
                        onPointerDown={() => {
                            pauseIcon(id);   // per-icon 15s window
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
