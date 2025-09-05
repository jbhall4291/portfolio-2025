// components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        // Reserve exact footprint of the button so layout doesn’t shift
        return <span aria-hidden className="block w-9 h-9" />;
    }

    const isDark = resolvedTheme === "dark";

    const onToggle = () => {
        const next = isDark ? "light" : "dark";
        setTheme(next);

        // Persist user preference in a cookie (1 year)
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
