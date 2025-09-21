// components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        const t = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(t);
    }, []);

    const isDark = resolvedTheme === "dark";

    const onToggle = () => {
        const next = isDark ? "light" : "dark";
        setTheme(next);
        document.cookie = `theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    };

    return (

        <Button
            className={`w-11 h-11 cursor-pointer ${mounted ? "opacity-100" : "opacity-0"
                }`}
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label="Toggle theme"
        >
            {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>

    );
}
