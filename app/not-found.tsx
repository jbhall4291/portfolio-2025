"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";

function useIsDark() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const el = document.documentElement;
        const update = () => setIsDark(el.classList.contains("dark"));
        update();
        const obs = new MutationObserver(update);
        obs.observe(el, { attributes: true, attributeFilter: ["class"] });
        return () => obs.disconnect();
    }, []);

    return isDark;
}

export default function NotFound() {
    const isDark = useIsDark();

    return (
        <main className="h-screen relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
            {/* Remount when theme flips so color applies */}
            <Particles
                key={isDark ? "dark" : "light"}
                className="absolute inset-0 z-0"
                quantity={150}
                size={0.6}
                staticity={50}
                ease={80}
                color={isDark ? "#9ca3af" : "#1f2937"}
                vx={0.1}
                vy={0.1}
            />

            <h1 className="mb-2 text-4xl md:text-7xl font-semibold tracking-tight relative z-10">
                404
            </h1>
            <p className="text-lg md:text-2xl mb-4 leading-relaxed max-w-prose relative z-10">
                Looks like you’ve drifted out of orbit.
            </p>

            <div className="flex gap-4 flex-wrap justify-center relative z-10">
                <Button asChild size="lg">
                    <Link href="/">Back to Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/projects">Explore Projects</Link>
                </Button>
            </div>
        </main>
    );
}
