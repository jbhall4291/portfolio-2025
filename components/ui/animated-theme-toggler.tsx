"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = { className?: string };

export const AnimatedThemeToggler = ({ className }: props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    const el = document.documentElement;
    // initial sync (handles resize from desktop→mobile etc.)
    setIsDarkMode(el.classList.contains("dark"));

    const obs = new MutationObserver(() => {
      setIsDarkMode(el.classList.contains("dark"));
    });
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const run = () => {
      const el = document.documentElement;
      const dark = el.classList.toggle("dark");
      setIsDarkMode(dark); // immediate update; observer will keep others in sync
    };

    // View Transitions (fallback-safe)

    if ((document as any).startViewTransition) {

      await (document as any).startViewTransition(() => flushSync(run)).ready;
    } else {
      flushSync(run);
    }


    // ripple animation
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      { duration: 700, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn("hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full flex md:mb-0.5 h-11 w-11 md:h-10 md:w-10 items-center justify-center transition-all duration-300", className)}
      aria-pressed={isDarkMode}
      aria-label="Toggle theme"
      type="button"
    >
      {isDarkMode ? (
        <SunDim className="h-6 w-6 md:h-6 md:w-6  dark:text-white text-foreground " />
      ) : (
        <Moon className="h-5 w-5 md:h-5 md:w-5  text-foreground dark:text-white" />
      )}
    </button>
  );
};
