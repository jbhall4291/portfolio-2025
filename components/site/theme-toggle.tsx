// components/site/theme-toggle.tsx
"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null; // prevents SSR/CSR mismatch

    const isDark = theme === "dark";
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm">Dark</span>
            <Switch checked={isDark} onCheckedChange={() => setTheme(isDark ? "light" : "dark")} />
        </div>
    );
}
