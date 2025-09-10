// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";

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

    return (
        <div className="fixed top-4 md:top-10 inset-x-0 z-50 will-change-transform">
            <div className="mx-auto max-w-[700px] px-4">
                <motion.div
                    initial={false}
                    animate={{}}
                    className="relative rounded-3xl overflow-hidden bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-sm  px-6 py-2 "
                >


                    {/* default always visible nav */}
                    <div className="relative z-10 h-12 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
                                JH
                            </span>
                            <span className="font-semibold">Johnny Hall</span>
                        </Link>



                        {/* Desktop links */}
                        <ul className="ml-auto hidden md:flex items-center gap-6">
                            {/* primary links... */}
                            <li><Link href="/projects" className="text-sm font-medium hover:opacity-70">Projects</Link></li>
                            <li><Link href="/about" className="text-sm font-medium hover:opacity-70">About</Link></li>
                            <li><Link href="/cv" className="text-sm font-medium hover:opacity-70">CV</Link></li>

                            {/* theme icon (utility) */}
                            <li className="-mr-2 ">
                                <div className="flex items-center h-9">
                                    <ThemeToggle />
                                </div>
                            </li>

                            {/* CTA at the far right */}
                            <li className="ml-2">
                                <Button asChild size="lg" className="rounded-full ">
                                    <Link href="/contact" aria-label="contact">
                                        Contact
                                    </Link>
                                </Button>
                            </li>
                        </ul>


                        <div className="ml-auto md:hidden flex items-center gap-1 h-9">
                            <ThemeToggle />




                            {/* Mobile toggle control aka burger */}
                            <button
                                onClick={() => setOpen((v) => !v)}
                                aria-label={open ? "Close menu" : "Open menu"}
                                aria-expanded={open}
                                aria-controls="navbar-mobile-content"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-2xl  relative z-10"
                            >
                                <motion.span
                                    initial={false}
                                    animate={open ? "open" : "closed"}
                                    className="relative block h-4 w-5"
                                >
                                    <motion.span
                                        variants={{ closed: { rotate: 0, y: -6 }, open: { rotate: 45, y: 0 } }}
                                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-black dark:bg-white"
                                    />
                                    <motion.span
                                        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-black dark:bg-white"
                                    />
                                    <motion.span
                                        variants={{ closed: { rotate: 0, y: 6 }, open: { rotate: -45, y: 0 } }}
                                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-black dark:bg-white"
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
                                                className="block w-full  py-3 text-xl font-semibold "
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}

                                    <li className="py-2">
                                        <Button asChild size="lg" className="rounded-full w-full">
                                            <Link href="/contact" aria-label="contact" onClick={() => setOpen(false)}>
                                                Contact
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
