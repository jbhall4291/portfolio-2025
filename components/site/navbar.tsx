// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";


const nav = [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/cv" },
    { label: "Contact", href: "/contact", cta: true },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        const onHash = () => setOpen(false);
        window.addEventListener("keydown", onKey);
        window.addEventListener("hashchange", onHash);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("hashchange", onHash);
        };
    }, []);

    const pathname = usePathname();

    function isActive(pathname: string, href: string) {
        if (href === "/") return pathname === "/";
        // highlight parent on subroutes, ignore query
        return pathname === href || pathname.startsWith(href + "/");
    }


    return (
        <div className="fixed top-4 md:top-10 inset-x-0 z-50 will-change-transform">
            <div className="mx-auto max-w-[700px] px-4">
                <motion.div
                    initial={false}
                    animate={{}}
                    className="relative rounded-3xl overflow-hidden bg-zinc-200/50 dark:bg-zinc-700/50 backdrop-blur-sm pl-5 pr-3 md:pl-6 md:pr-6   py-2 "
                >


                    {/* default always visible nav */}
                    <div className="relative z-10 h-12 flex items-center font-semibold ">


                        <Link href="/" onClick={() => setOpen(false)} className="inline-flex items-center gap-1.5   hover:opacity-70 text-lg font-bold md:text-lg md:font-bold  ">

                            <span
                                className={clsx(
                                    " ",
                                    // reserve space + style always
                                    "border-b-2 border-b-transparent border-solid",
                                    // only show on desktop if you want that behavior:
                                    pathname === "/" && "md:border-b-foreground"
                                    // or show on all sizes: pathname === "/" && "border-b-black"
                                )}
                            >
                                Johnny Hall
                            </span>
                        </Link>



                        {/* Desktop links */}
                        <ul className="ml-auto hidden md:flex items-center gap-6">
                            {/* primary links... */}
                            {nav.slice(0, 3).map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "inline-block leading-tight text-base font-normal hover:opacity-70",
                                            // reserve space, solid border so it renders even if preflight is off
                                            "pb-[2px] border-b-2 border-solid",
                                            isActive(pathname, item.href)
                                                ? "border-b-foreground"
                                                : "border-b-transparent"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>

                            ))}


                            {/* theme icon (utility) */}
                            <li className="-mr-2 ">
                                <div className="flex items-center h-9 mb-0.5">
                                    <AnimatedThemeToggler aria-label="Toggle theme" />
                                </div>
                            </li>

                            {/* CTA at the far right */}
                            <li className="ml-2">
                                <Button asChild size="lg" className="rounded-full ">
                                    <Link href="/contact" aria-label="Let's connect">
                                        <div className="text-base">Let's connect</div>
                                    </Link>
                                </Button>
                            </li>
                        </ul>


                        <div className="ml-auto md:hidden flex items-center gap-1 h-9">
                            <AnimatedThemeToggler aria-label="Toggle theme" />

                            {/* Mobile toggle control aka burger */}
                            <button
                                onClick={() => setOpen((v) => !v)}
                                aria-label={open ? "Close menu" : "Open menu"}
                                aria-expanded={open}
                                aria-controls="navbar-mobile-content"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl  relative z-10 cursor-pointer"
                            >
                                <motion.span
                                    initial={false}
                                    animate={open ? "open" : "closed"}
                                    className="relative block h-4 w-5"
                                >
                                    <motion.span
                                        variants={{ closed: { rotate: 0, y: -6 }, open: { rotate: 45, y: 0 } }}
                                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-foreground"
                                    />
                                    <motion.span
                                        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-foreground"
                                    />
                                    <motion.span
                                        variants={{ closed: { rotate: 0, y: 6 }, open: { rotate: -45, y: 0 } }}
                                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-foreground"
                                    />
                                </motion.span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile expanding content (still inside the pill; will push content of navbar, not page) */}
                    <AnimatePresence initial={false}>
                        {open && (
                            <motion.div
                                id="navbar-mobile-content"
                                key="mobile-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 280, damping: 30 }}
                                className="md:hidden relative z-10 "
                            >

                                <ul className="">
                                    {nav.slice(0, 3).map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="block  w-fit pr-10 py-3 text-lg font-semibold "
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}

                                    <li className="py-2">
                                        <Button asChild size="lg" className="rounded-full w-full py-6">
                                            <Link href="/contact" aria-label="Let's connect" onClick={() => setOpen(false)}>
                                                <div className="text-lg font-semibold ">Let's connect</div>
                                            </Link>
                                        </Button>
                                    </li>
                                </ul>



                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div >
        </div >
    );
}
