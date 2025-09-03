import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ========= Types ========= */

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

type TechPill = { label: string; icon?: ReactNode };

type ActionLink = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "ghost" | "outline";
  newTab?: boolean;
  download?: boolean;
};

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  description: string;
  href?: string;   // optional: if you want the whole card to link somewhere
  cta?: string;
  tech?: TechPill[];
  actions?: ActionLink[];
}

/* ========= Grid ========= */

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => (
  <div
    className={cn(
      "grid w-full gap-4",
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      "auto-rows-[18rem] lg:auto-rows-[22rem]",


      className
    )}
    {...props}
  >
    {children}
  </div>
);

/* ========= Card ========= */
export const BentoCard = ({
  name,
  className,
  background,
  description,
  tech,
  actions,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative isolate col-span-1 overflow-hidden rounded-xl bg-background",
      "min-h-[18rem] md:min-h-[14rem] 2xl:min-h-[16rem]",
      className
    )}
    {...props}
  >
    {/* Background image */}
    <div className="absolute inset-0 z-0">{background}</div>

    {/* Scrim — taller on mobile, expandable on desktop */}
    <div
      className="
        absolute inset-x-0 bottom-0 z-[1]
        bg-gradient-to-t from-white/85 via-white/40 to-transparent
        dark:from-black/70 dark:via-black/45 dark:to-transparent
        transition-[height] duration-300
        h-40 lg:h-[160px] lg:group-hover:h-[220px]
      "
    />

    {/* Content */}
    <div className="absolute inset-x-0 bottom-0 z-[2] px-4 pb-3 pt-3">
      <div className="transition-transform duration-300 lg:group-hover:-translate-y-2">
        <div
          className="
            overflow-hidden max-h-none
            lg:transition-[max-height] lg:duration-300
            lg:max-h-[90px] lg:group-hover:max-h-[220px]
          "
        >
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            {name}
          </h3>
          <p className="text-neutral-800/90 dark:text-neutral-200/90 max-w-prose">
            {description}
          </p>



          {/* Tech pills — always visible on mobile, fade in on desktop hover */}
          {tech && tech.length > 0 && (
            <div
              className="
                mt-2 flex flex-wrap gap-1.5
                lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100
              "
            >
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-lg bg-zinc-800 text-white dark:bg-zinc-700 px-2.5 py-1 text-xs"
                >
                  {t.icon}
                  {t.label}
                </span>
              ))}
            </div>
          )}

          {/* Actions — always visible on mobile, fade in on desktop hover */}
          {actions && actions.length > 0 && (
            <div
              className="
                mt-3 flex flex-wrap gap-2
                lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100
              "
            >
              {actions.map((a, i) => (
                <a
                  key={i}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={a.download}
                  className={cn(
                    "inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium",
                    a.variant === "default"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-zinc-700 text-white hover:bg-zinc-600"
                  )}
                >
                  {a.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Hover veil */}
    <div className="pointer-events-none absolute inset-0 z-[1] transition-colors duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);
