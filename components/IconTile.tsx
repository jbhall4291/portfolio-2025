"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
    src: string;
    alt?: string;
    bg: string;
    pad?: number;
    padLg?: number;
    hasBorder?: boolean;
    mount?: "none" | "pop";
    delayMs?: number;
};

export default function IconTile({
    src,
    alt = "",
    bg,
    pad = 2,
    padLg,
    hasBorder,
    mount = "none",
    delayMs = 0,
}: Props) {
    const prefersReduced = useReducedMotion();

    const baseClass =
        "pointer-events-auto rounded-xl w-[52px] h-[52px] lg:w-[80px] lg:h-[80px] " +
        "transition-colors duration-300 origin-center " +
        "will-change-transform transform-gpu backface-hidden isolate [contain:paint]" +
        (hasBorder ? " border-2 border-foreground/5 dark:border-white" : "");

    const style: React.CSSProperties = {
        background: bg,
        ["--pad" as any]: `${pad}px`,
        ["--pad-lg" as any]: `${padLg ?? pad}px`,
    };

    const imgClass =
        "block w-full h-full pointer-events-none select-none will-change-auto p-[var(--pad)] lg:p-[var(--pad-lg)]";

    if (mount === "pop" && !prefersReduced) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    mass: 1,
                    delay: (delayMs ?? 0) / 1000,
                }}
                className={baseClass}
                style={style}
            >
                <img
                    src={src}
                    alt={alt}
                    draggable="false"
                    decoding="async"
                    loading="eager"
                    className={imgClass}
                />
            </motion.div>
        );
    }

    return (
        <div className={baseClass} style={style}>
            <img src={src} alt={alt} className={imgClass} />
        </div>
    );
}
