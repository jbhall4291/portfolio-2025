"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const reduce = useReducedMotion();

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={pathname}
                initial={reduce ? false : { opacity: 0 }} // no SSR translateX
                animate={{ opacity: 1 }}
                exit={{ opacity: reduce ? 1 : 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}

            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
