"use client";

import * as React from "react";
import { motion } from "framer-motion";

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
    const baseClass =
        `pointer-events-auto rounded-xl w-[52px] h-[52px] lg:w-[80px] lg:h-[80px] ` +
        `transition-colors will-change-transform transform-gpu duration-300 p-[var(--pad)] lg:p-[var(--pad-lg)] origin-center ` +
        (hasBorder ? "border-2 border-foreground/5 dark:border-white" : "");

    const style: React.CSSProperties = {
        background: bg,
        ["--pad" as any]: `${pad}px`,
        ["--pad-lg" as any]: `${padLg}px`,
    };


    // pop
    if (mount === "pop") {
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
                    className="block w-full h-full" />
            </motion.div>
        );
    }


    // none
    return (
        <div className={baseClass} style={style}>
            <img src={src} alt={alt} className="block w-full h-full" />
        </div>
    );
}
