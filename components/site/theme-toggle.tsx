// components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure we don’t render an incorrect icon before hydration
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <Button
                aria-label="Toggle theme"
                variant="ghost"
                size="icon"
                className="md:bg-zinc-200 md:dark:bg-zinc-800 opacity-0 pointer-events-none"
            />
        );
    }

    const isDark = resolvedTheme === "dark";

    const onToggle = () => {
        const next = isDark ? "light" : "dark";
        setTheme(next);
        // Optional: persist choice in a cookie
        document.cookie = `theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    };

    return (
        <Button
            className="md:bg-zinc-200 md:dark:bg-zinc-800 cursor-pointer"
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label="Toggle theme"
        >
            {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>
    );
}
