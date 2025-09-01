// components/site/theme-toggle.tsx
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

type Props = { initialTheme: "light" | "dark" };

export function ThemeToggle({ initialTheme }: Props) {
    const { setTheme } = useTheme();
    // seed from server-provided initialTheme so SSR == CSR
    const [isDark, setIsDark] = useState(initialTheme === "dark");

    // keep cookie in sync whenever user toggles
    const onChange = (v: boolean) => {
        const next = v ? "dark" : "light";
        setIsDark(v);
        setTheme(next);
        document.cookie = `theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm">Dark</span>
            <Switch checked={isDark} onCheckedChange={onChange} />
        </div>
    );
}
