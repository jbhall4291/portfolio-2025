"use client";

import * as React from "react";
import { ORBIT_POSITIONS, ICONS } from "./constants";
import { OrbitField } from "@/components/site/orbit-field";
import IconTile from "@/components/IconTile";

export default function OrbitGame() {
    const PAUSE_MS = 7_000;     // icon freeze + game length
    const EPSILON_MS = 250;     // small grace window

    const [firstTapAt, setFirstTapAt] = React.useState<number | null>(null);
    const [tapTimes, setTapTimes] = React.useState<Map<string, number>>(new Map());
    const iconIds = React.useMemo(() => ICONS.map(x => x.key), []);
    const allCount = iconIds.length;

    const resetGame = React.useCallback(() => {
        setFirstTapAt(null);
        setTapTimes(new Map());
    }, []);

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

            confetti({
                particleCount: 60,
                spread: 360,
                startVelocity: 32,
                ticks: 110,
                scalar: 0.8,
                origin,
                colors: ["#77c042", "#333333"],
            });
            setTimeout(() => {
                confetti({
                    particleCount: 20,
                    spread: 60,
                    startVelocity: 25,
                    ticks: 90,
                    scalar: 0.7,
                    origin,
                    colors: ["#6b7280"],
                });
            }, 120);

            // tell the photo to swap (and auto-revert)
            window.dispatchEvent(new CustomEvent("easter-egg-win"));
        });
    }, []);

    const now = () => performance.now();

    // On first tap, arm a single timeout to end the run when the freeze window lapses
    React.useEffect(() => {
        if (firstTapAt == null) return;
        const endAt = firstTapAt + PAUSE_MS + EPSILON_MS;
        const ms = Math.max(0, endAt - now());
        const to = setTimeout(() => resetGame(), ms);
        return () => clearTimeout(to);
    }, [firstTapAt, resetGame]);

    const onIconTap = React.useCallback(
        (id: string) => {
            const t = now();

            // If no run or previous window expired, start a new run on this tap
            const windowActive =
                firstTapAt != null && t <= firstTapAt + PAUSE_MS + EPSILON_MS;

            if (!windowActive) {
                setFirstTapAt(t);
                setTapTimes(new Map([[id, t]]));
                return;
            }

            // Record this tap
            setTapTimes(prev => {
                const next = new Map(prev);
                next.set(id, t);

                // Win only if all icons tapped before the freeze window elapses
                if (next.size >= allCount && t <= (firstTapAt! + PAUSE_MS + EPSILON_MS)) {
                    triggerWin();
                    setTimeout(resetGame, 250);
                }

                return next;
            });
        },
        [firstTapAt, allCount, triggerWin, resetGame]
    );

    return (
        <OrbitField
            positions={ORBIT_POSITIONS}
            icons={ICONS.map(({ key, ...props }) => <IconTile key={key} {...props} />)}
            iconIds={iconIds}
            onIconTap={onIconTap}
            pauseMs={PAUSE_MS}  // keep visuals aligned with game window
            shuffleIcons
        />
    );
}
