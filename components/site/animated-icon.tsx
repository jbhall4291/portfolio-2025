"use client";

import { LazyMotion, domAnimation, useAnimationFrame, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

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
}: EllipticalOrbitProps) {
    const reduce = useReducedMotion();
    const moverRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<number | null>(null);
    const dir = clockwise ? 1 : -1;

    useAnimationFrame((ts) => {
        if (!moverRef.current || reduce) return;

        // handle delay on first frame
        if (startRef.current === null) startRef.current = ts + delay * 1000;
        const t = Math.max(0, ts - startRef.current);

        const theta = ((t / 1000) / duration) * (2 * Math.PI) * dir + (phase * Math.PI) / 180;

        // base ellipse coordinates
        let x = rx * Math.cos(theta);
        let y = ry * Math.sin(theta);

        // rotate the path by 'tilt' degrees (icon remains unrotated)
        if (tilt) {
            const a = (tilt * Math.PI) / 180;
            const cx = x * Math.cos(a) - y * Math.sin(a);
            const cy = x * Math.sin(a) + y * Math.cos(a);
            x = cx; y = cy;
        }

        moverRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        moverRef.current.style.willChange = "transform";
    });

    // If user prefers reduced motion: park the icon at the rightmost point
    const reducedTransform = `translate3d(${rx}px, 0, 0)`;

    return (
        <LazyMotion features={domAnimation}>
            {/* Center of orbit */}
            <div className={cn("absolute pointer-events-none", className)} aria-hidden>
                {/* This wrapper's transform is driven by JS (translate3d(x,y,0)) */}
                <div ref={moverRef} style={reduce ? { transform: reducedTransform } : undefined}>
                    {/* This inner wrapper re-centers the child on the orbit point */}
                    <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        {/* Size: 56x56 on mobile, 80x80 on lg+ */}
                        <div className="w-14 h-14 lg:w-20 lg:h-20 overflow-hidden rounded-xl grid place-items-center">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </LazyMotion>
    );
}
