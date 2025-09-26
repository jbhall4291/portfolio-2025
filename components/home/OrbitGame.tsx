"use client";

import * as React from "react";
import { ORBIT_POSITIONS, ICONS } from "./constants";
import { OrbitField } from "@/components/site/orbit-field";
import IconTile from "@/components/IconTile";
import { DelayMount } from "./DelayMount";

const totalWindow = 1200; // ms spread across all icons

export default function OrbitGame() {
    const PAUSE_MS = 10_000;
    const EPSILON_MS = 25;

    const [firstTapAt, setFirstTapAt] = React.useState<number | null>(null);
    const [tapTimes, setTapTimes] = React.useState<Map<string, number>>(new Map());

    const iconIds = React.useMemo(() => ICONS.map(x => x.key), []);
    const allCount = iconIds.length;

    // Respect reduced motion: if the user requests it, kill per-icon delays
    const prefersReduced = React.useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    }, []);

    const now = () => performance.now();

    React.useEffect(() => {
        if (firstTapAt == null) return;
        const endAt = firstTapAt + PAUSE_MS + EPSILON_MS;
        const ms = Math.max(0, endAt - now());
        const to = setTimeout(() => {
            setFirstTapAt(null);
            setTapTimes(new Map());
        }, ms);
        return () => clearTimeout(to);
    }, [firstTapAt]);

    const triggerWin = React.useCallback(() => {
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
            confetti({ particleCount: 60, spread: 360, startVelocity: 32, ticks: 110, scalar: 0.8, origin, colors: ["#77c042", "#333333"] });
            setTimeout(() => {
                confetti({ particleCount: 20, spread: 60, startVelocity: 25, ticks: 90, scalar: 0.7, origin, colors: ["#6b7280"] });
            }, 120);
            window.dispatchEvent(new CustomEvent("easter-egg-win"));
        });
    }, []);

    const onIconTap = React.useCallback((id: string) => {
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
            if (next.size >= allCount && t <= (firstTapAt! + PAUSE_MS + EPSILON_MS)) {
                triggerWin();
                setTimeout(() => {
                    setFirstTapAt(null);
                    setTapTimes(new Map());
                }, 250);
            }
            return next;
        });
    }, [firstTapAt, allCount, triggerWin]);

    return (
        <DelayMount delayMs={700}>
            <OrbitField
                positions={ORBIT_POSITIONS}
                icons={ICONS.map(({ key, ...props }, i) => {
                    const step = totalWindow / ICONS.length;
                    const delay = i * step;
                    return (
                        <IconTile
                            key={key}
                            {...props}
                            mount="pop"
                            delayMs={prefersReduced ? 0 : delay}
                        />
                    );
                })}
                iconIds={iconIds}
                onIconTap={onIconTap}
                pauseMs={PAUSE_MS}
                shuffleIcons
            />
        </DelayMount>

    );
}
