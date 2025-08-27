// src/components/site/animated-icons.tsx
"use client";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export function AnimatedIcons() {
    const reduce = useReducedMotion();
    const anim = reduce ? {} : { y: [0, -6, 0] };

    return (
        <LazyMotion features={domAnimation}>
            <div className="relative ">
                <m.div className="absolute left-8 top-6" animate={anim} transition={{ repeat: Infinity, duration: 4 }}>
                    {/* put an icon/svg here */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" /></svg>
                </m.div>
                {/* duplicate for a few icons with different positions/durations */}
            </div>
        </LazyMotion>
    );
}
