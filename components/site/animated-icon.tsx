"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type EllipticalOrbitProps = {
    children: React.ReactNode;
    /** Position the orbit center, e.g. "absolute left-12 top-10" */
    className?: string;
    /** Horizontal radius (px) */
    rx?: number;                // default 60
    /** Vertical radius (px) */
    ry?: number;                // default 24
    /** Seconds per revolution */
    duration?: number;          // default 12
    /** Start angle in degrees (0..360) */
    phase?: number;             // default 0
    /** Delay before start (s) */
    delay?: number;             // default 0
    /** Clockwise (true) or anticlockwise (false) */
    clockwise?: boolean;        // default true
    /** Rotate the ellipse path (deg) WITHOUT rotating the icon */
    tilt?: number;              // default 0
    /** Pause this orbit */
    paused?: boolean;
    /** Tap/click handler for the icon */
    onPointerDown?: React.PointerEventHandler<HTMLDivElement>;
};

export function EllipticalOrbit({
    children,
    className,
    rx = 60,
    ry = 24,
    duration = 12,
    phase = 0,
    delay = 0,
    clockwise = true,
    tilt = 0,
    paused = false,
    onPointerDown,
}: EllipticalOrbitProps) {
    const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const R = Math.max(rx, 0.0001);
    const scaleY = ry / R;
    const dir = clockwise ? 1 : -1;

    const style = {
        ["--rx" as any]: `${R}px`,
        ["--scaleY" as any]: String(scaleY),
        ["--tilt" as any]: `${tilt}deg`,
        ["--phase" as any]: `${phase}deg`,
        ["--dur" as any]: `${duration}s`,
        ["--delay" as any]: `${delay}s`,
        ["--dir" as any]: String(dir),
    } as React.CSSProperties;

    const playState = paused || prefersReduced ? "paused" : "running";

    return (
        <div className={cn("absolute pointer-events-none", className)} aria-hidden style={style}>
            {/* Ellipse geometry (tilt + scale) */}
            <div className="relative isolate will-change-transform [transform:rotate(var(--tilt)) scaleY(var(--scaleY))]">
                {/* Rotator drives the orbit */}
                <div
                    className="will-change-transform animate-[orbit_var(--dur)_linear_infinite_var(--delay)]"
                    style={{ animationPlayState: playState }}
                >
                    {/* Planet carrier: offset from center so it swings around */}
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform:translateX(var(--rx))] pointer-events-auto"
                        onPointerDown={onPointerDown}
                        style={prefersReduced ? { transform: `translateX(${R}px)` } : undefined}
                    >
                        {/* Counter-rotator keeps the child upright (no spin) */}
                        <div
                            className="will-change-transform animate-[orbitInverse_var(--dur)_linear_infinite_var(--delay)]"
                            style={{ animationPlayState: playState }}
                        >
                            <div className="w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-xl grid place-items-center">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Local keyframes: outer rotates +inner counter-rotates */}
            <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(calc(var(--phase))); }
          to   { transform: rotate(calc(var(--phase) + 360deg * var(--dir))); }
        }
        @keyframes orbitInverse {
          from { transform: rotate(calc(-1 * var(--phase))); }
          to   { transform: rotate(calc(-1 * (var(--phase) + 360deg * var(--dir)))); }
        }
      `}</style>
        </div>
    );
}
