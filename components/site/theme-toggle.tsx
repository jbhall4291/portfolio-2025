import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ThemeToggle({ initialTheme }: { initialTheme: "light" | "dark" }) {
    const { setTheme } = useTheme();
    const [isDark, setIsDark] = useState(initialTheme === "dark");

    const onChange = () => {
        const next = isDark ? "light" : "dark";
        setIsDark(!isDark);
        setTheme(next);
        document.cookie = `theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    };

    return (
        <Button
            className="md:bg-zinc-200 md:dark:bg-zinc-800 cursor-pointer"
            variant="ghost"
            size="icon"
            onClick={onChange}
            aria-label="Toggle theme"
        >
            {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </Button>
    );
}
