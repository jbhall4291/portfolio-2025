import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ========= Types ========= */

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;      // e.g. "lg:col-span-2" or ""
  background: ReactNode;  // <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" .../>
  description: string;
  href: string;
  cta: string;
  tech?: any[];
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

    {/* Scrim = now a separate div so it can animate height */}
    <div
      className="
        absolute inset-x-0 bottom-0 z-[1]
        bg-gradient-to-t from-white/85 via-white/40 to-transparent
        dark:from-black/70 dark:via-black/45 dark:to-transparent
        transition-[height] duration-300
        h-28 lg:h-[160px] lg:group-hover:h-[220px]
      "
    />

    {/* Content block on top of scrim */}
    <div className="absolute inset-x-0 bottom-0 z-[2] px-4 pb-3 pt-3">
      <div className="transition-transform duration-300 lg:group-hover:-translate-y-2">
        {/* Content that expands upward */}
        <div className="overflow-hidden max-h-none lg:transition-[max-height] lg:duration-300 lg:max-h-[90px] lg:group-hover:max-h-[220px]">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            {name}
          </h3>
          <p className="text-neutral-800/90 dark:text-neutral-200/90 max-w-prose">
            {description}
          </p>

          {/* Extras (reveal on hover desktop, always visible on mobile if you want) */}
          <div className="hidden lg:block">



            {tech && (
              <div className="hidden lg:block">
                {/* Tech pills */}
                {tech.length > 0 && (
                  <div className="mb-3 flex flex-row flex-wrap gap-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {tech.map(({ label, icon }, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1 rounded-lg  bg-zinc-700 px-2.5 py-1 text-sm text-white"
                      >
                        {icon}
                        {label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}


            <div className="flex flex-row gap-x-2.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <button className="cursor-pointer rounded-lg  bg-blue-600 px-2.5 py-1 text-base text-white">
                View Repo
              </button>
              <button className="cursor-pointer rounded-lg  bg-blue-600 px-3 py-1.5 text-base text-white">
                Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Hover veil (optional subtle highlight over image) */}
    <div className="pointer-events-none absolute inset-0 z-[1] transition-colors duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);
