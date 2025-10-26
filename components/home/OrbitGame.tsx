"use client";

import * as React from "react";
import { ORBIT_POSITIONS, ICONS } from "./constants";
import { OrbitField } from "@/components/site/orbit-field";
import IconTile from "@/components/IconTile";
import { DelayMount } from "./DelayMount";
import clarity from "@microsoft/clarity";
import { trackGoat } from "@/lib/metrics";

const totalWindow = 1500; // ms spread across all icons

export default function OrbitGame() {
    const PAUSE_MS = 15_000;
    const EPSILON_MS = 25;

    const [firstTapAt, setFirstTapAt] = React.useState<number | null>(null);
    const [tapTimes, setTapTimes] = React.useState<Map<string, number>>(new Map());

    // Globally freeze all motion until this timestamp (ms, performance.now()).
    const [freezeAllUntil, setFreezeAllUntil] = React.useState<number | null>(null);

    // Bump to tell children “synchronize/resume now” (no remount/pop).
    const [resumeEpoch, setResumeEpoch] = React.useState(0);

    const iconIds = React.useMemo(() => ICONS.map(x => x.key), []);
    const allCount = iconIds.length;

    const prefersReduced = React.useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    }, []);

    const now = () => performance.now();

    // Centralized reset that resumes everything together (no remount).
    const synchronizedResume = React.useCallback(() => {
        setFirstTapAt(null);
        setTapTimes(new Map());
        setFreezeAllUntil(null);      // lift global freeze (if any)
        setResumeEpoch(e => e + 1);   // children clear per-icon pauses & rebaseline time origin
    }, []);

    // Auto-resume when the attempt window elapses (no win).
    React.useEffect(() => {
        if (firstTapAt == null) return;
        const endAt = firstTapAt + PAUSE_MS + EPSILON_MS;
        const ms = Math.max(0, endAt - now());
        const to = window.setTimeout(synchronizedResume, ms);
        return () => window.clearTimeout(to);
    }, [firstTapAt, PAUSE_MS, EPSILON_MS, synchronizedResume]);

    // Fire confetti + metrics, freeze for a beat, then resume together.
    const triggerWin = React.useCallback((durationMs: number) => {
        const beatMs = 3200; // 2.2s stillness for reveal

        // Freeze immediately so all icons hold perfectly still.
        setFreezeAllUntil(now() + beatMs);

        // CONFETTI (kept from your version; origin finds the hero image center)
        import("canvas-confetti").then(({ default: confetti }) => {
            const img = document.getElementById("hero-photo");
            let origin = { x: 0.5, y: 0.4 };
            if (img) {
                const r = img.getBoundingClientRect();
                const cx = r.left + r.width / 2;
                const cy = r.top + r.height / 2;
                const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 1);
                const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 1);
                origin = { x: cx / vw, y: cy / vh };
            }

            confetti({
                particleCount: 72,
                spread: 290,
                startVelocity: 36,
                decay: 0.94,
                gravity: 0.9,
                scalar: 0.9,
                origin,
                colors: ["#333333", "#4358fb", "#e4e4e7"],
                shapes: ["square", "circle"],
            });
            setTimeout(() => {
                confetti({
                    particleCount: 40,
                    spread: 200,
                    startVelocity: 20,
                    decay: 0.9,
                    gravity: 0.75,
                    scalar: 0.75,
                    origin,
                    colors: ["#4358fb", "#e4e4e7"],
                    shapes: ["square", "circle"],
                });
            }, 140);
        });

        // Smile reveal listeners etc.
        setTimeout(() => {
            window.dispatchEvent(new CustomEvent("easter-egg-win", { detail: { durationMs } }));
        }, 0);


        // Metrics
        (clarity as any).event("egg_win", {
            duration_ms: Math.round(durationMs),
            device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
        });
        trackGoat("egg_win", { d: Math.round(durationMs) });

        // After the beat, resume everything in sync.
        window.setTimeout(synchronizedResume, beatMs);
    }, [synchronizedResume]);

    const onIconTap = React.useCallback(
        (id: string) => {
            const t = now();
            const windowActive = firstTapAt != null && t <= firstTapAt + PAUSE_MS + EPSILON_MS;

            if (!windowActive) {
                setFirstTapAt(t);
                setTapTimes(new Map([[id, t]]));
                return;
            }

            setTapTimes(prev => {
                const next = new Map(prev);
                next.set(id, t);

                // All icons touched within the window → win.
                if (next.size >= allCount && t <= (firstTapAt! + PAUSE_MS + EPSILON_MS)) {
                    const duration = t - (firstTapAt ?? t);
                    triggerWin(duration);
                }
                return next;
            });
        },
        [firstTapAt, allCount, PAUSE_MS, EPSILON_MS, triggerWin]
    );

    return (
        <DelayMount delayMs={500}>
            <OrbitField
                positions={ORBIT_POSITIONS}
                iconIds={iconIds}
                onIconTap={onIconTap}
                pauseMs={PAUSE_MS}
                shuffleIcons
                // NEW sync controls:
                freezeUntil={freezeAllUntil}  // children pause while performance.now() < freezeUntil
                resumeEpoch={resumeEpoch}     // when this ticks, clear per-icon pauses & rebaseline the phase clock
                icons={ICONS.map(({ key, ...props }, i) => {
                    const step = totalWindow / ICONS.length;
                    const delay = i * step;
                    return (
                        <IconTile
                            key={key}
                            {...props}
                            mount="pop"
                            delayMs={prefersReduced ? 0 : delay}
                        // optional UX cue:
                        // locked={tapTimes.has(key)}
                        />
                    );
                })}
            />
        </DelayMount>
    );
}
