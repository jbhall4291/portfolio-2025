// components/site/theme-toggle.tsx
"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {

    return (
        <div className="w-full bg-red-500 dark:bg-blue-500">navbar stuff <ThemeToggle /></div>
    );
}
