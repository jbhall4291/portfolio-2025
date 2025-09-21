import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

/* ========= Types ========= */

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export type TechPill = { label: string; icon?: ReactNode };

export type ActionLink = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "ghost" | "outline";
  newTab?: boolean;
  download?: boolean;
};

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  description: string;
  href?: string;   // optional, not used yet
  cta?: string;
  tech?: TechPill[];
  actions?: ActionLink[];
}

/* ========= Grid ========= */

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => (
  <div
    className={cn(
      "grid w-full gap-3 md:gap-4",
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      "auto-rows-auto sm:auto-rows-[21rem] lg:auto-rows-[22rem]",
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
      "group relative isolate overflow-hidden rounded-2xl bg-background",
      "min-h-[20rem] md:min-h-[16rem] 2xl:min-h-[18rem]",
      // light: subtle border/shadow; dark: hairline/no shadow
      "border border-neutral-200 shadow-sm dark:border-white/10 dark:shadow-none",
      className
    )}
    {...props}
  >
    {/* Background image */}
    <div className="absolute inset-0 z-0">{background}</div>

    {/* Single, consistent scrim (readable in both themes) */}
    <div
      className="
        absolute inset-x-0 bottom-0 z-[1] pointer-events-none
        h-[100%] xl:h-[58%]
        bg-gradient-to-t from-black/95 via-black/75 xl:via-black/35 to-transparent
        transition-[height] duration-300
        xl:group-hover:h-[72%] xl:group-focus-within:h-[72%]
      "
    />

    {/* Content (single block; expands on xl hover/focus) */}
    <div className="absolute inset-x-0 bottom-0 z-[2] px-4 pb-3 pt-3">
      <div className="transition-transform duration-300 xl:group-hover:-translate-y-2 xl:group-focus-within:-translate-y-2">
        <div
          className="
            overflow-hidden
            xl:max-h-[96px] xl:transition-[max-height] xl:duration-300
            xl:group-hover:max-h-[260px] xl:group-focus-within:max-h-[260px]
          "
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white drop-shadow  leading-tight">
            {name}
          </h3>

          <p className="font-semibold md:font-medium mt-0.5 text-[15px] leading-snug text-white/90 drop-shadow-sm line-clamp-none sm:line-clamp-3 lg:line-clamp-2 xl:line-clamp-none">
            {description}
          </p>


          {/* Tech pills */}
          {!!tech?.length && (
            // wrapper clips the chips until hover
            <div
              className="
      mt-2.5 xl:overflow-hidden
      xl:max-h-0 xl:transition-[max-height] xl:duration-300
      xl:group-hover:max-h-24 xl:group-focus-within:max-h-24
      xl:pointer-events-none xl:group-hover:pointer-events-auto xl:group-focus-within:pointer-events-auto
    "
            >
              <div className="flex flex-wrap gap-1.5 transform-gpu will-change-transform">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="
            inline-flex items-center gap-1 px-2 h-6 md:px-2.5 md:h-6 text-xs rounded md:rounded-lg
            border border-white/25 bg-white/20 text-white backdrop-blur-[5px]
          "
                  >
                    {t.icon}
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          )}


          {/* Actions */}
          {!!actions?.length && (
            <div
              className="
                mt-3.5 flex flex-wrap gap-2
                xl:opacity-0 xl:transition-opacity xl:duration-500
                xl:group-hover:opacity-100 xl:group-focus-within:opacity-100
                xl:pointer-events-none xl:group-hover:pointer-events-auto xl:group-focus-within:pointer-events-auto
              "
            >
              {actions.map((a, i) => (
                <Button
                  key={i}
                  asChild
                  variant={a.variant ?? "secondary"}
                  className="
                  relative h-9 px-3 rounded-full text-sm whitespace-nowrap   
                  after:pointer-events-none after:absolute after:rounded-[inherit]
                  after:content-[''] after:-inset-2          
                  md:after:hidden                                  
                  "
                >
                  <a
                    href={a.href}
                    target={a.newTab ? "_blank" : undefined}
                    rel={a.newTab ? "noopener noreferrer" : undefined}
                    download={!!a.download}
                  >
                    {a.label}
                  </a>
                </Button>

              ))}
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Hover veil */}
    <div
      className="
        pointer-events-none absolute inset-0 z-[1]
        transition-colors duration-300
        group-hover:bg-black/[.03] dark:group-hover:bg-white/[.03]
        group-focus-within:bg-black/[.03] dark:group-focus-within:bg-white/[.03]
      "
    />
  </div>
);
