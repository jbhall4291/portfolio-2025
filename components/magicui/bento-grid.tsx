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
  href?: string;   // optional, but not used yet
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

    bg-black/55                      
    xl:bg-transparent                
    xl:bg-gradient-to-t             
    xl:from-black/70 xl:via-black/35 xl:to-transparent
    xl:dark:from-black/70 xl:dark:via-black/45 xl:dark:to-transparent

    transition-[height] duration-300
    h-full xl:h-[160px]
    lg:group-hover:h-[260px] lg:group-focus-within:h-[260px]
  "
    />


    {/* Content */}
    <div className="hidden xl:block absolute inset-x-0 bottom-0 z-[2] px-4 pb-3 pt-3 " aria-hidden={false}>
      <div className="transition-transform duration-300 xl:group-hover:-translate-y-2 lg:group-focus-within:-translate-y-2">
        <div
          className="
            overflow-hidden max-h-none
            xl:transition-[max-height] xl:duration-300
            xl:max-h-[90px]
            xl:group-hover:max-h-[260px] xl:group-focus-within:max-h-[260px]
          "
        >
          <h3 className="text-2xl font-semibold text-white">
            {name}
          </h3>
          <p className="text-white/85 max-w-prose">
            {description}
          </p>

          {/* Tech pills (fade in on desktop) */}
          {tech?.length ? (
            <div
              className="
                mt-2 flex flex-wrap gap-1.5
                lg:opacity-0 lg:transition-opacity lg:duration-500
                lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
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
          ) : null}

          {/* Actions — smooth fade, only clickable when visible */}
          {actions?.length ? (
            <div
              className="
                mt-3 flex flex-wrap gap-2
                lg:opacity-0 lg:transition-opacity lg:duration-500
                lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                lg:pointer-events-none lg:group-hover:pointer-events-auto lg:group-focus-within:pointer-events-auto
              "
            >
              {actions.map((a, i) => (
                <Button key={i} asChild className="rounded-full ">
                  <a
                    href={a.href}
                    target={a.newTab ? "_blank" : undefined}
                    rel={a.newTab ? "noopener noreferrer" : undefined}
                    download={a.download}
                    tabIndex={-1}
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium",
                      a.variant === "default"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-zinc-700 text-white hover:bg-zinc-600"
                    )}
                  >
                    {a.label}
                  </a>
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>


    <div className=" block xl:hidden absolute inset-x-0 bottom-0 z-[2] px-4 pb-3 pt-3 text-white" aria-hidden={true}>


      <div className="">
        <div
          className="
            overflow-hidden max-h-none
            
          "
        >
          <h3 className="text-2xl font-semibold ">
            {name}
          </h3>
          <p className=" font-medium max-w-prose">
            {description}
          </p>

          {/* Tech pills (fade in on desktop) */}
          {tech?.length ? (
            <div
              className="
                mt-2 flex flex-wrap gap-1.5
                
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
          ) : null}

          {/* Actions — smooth fade, only clickable when visible */}
          {actions?.length ? (
            <div
              className="
                mt-3 flex flex-wrap gap-2
                lg:opacity-0 lg:transition-opacity lg:duration-500
                lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                lg:pointer-events-none lg:group-hover:pointer-events-auto lg:group-focus-within:pointer-events-auto
              "
            >
              {actions.map((a, i) => (

                <Button key={i} asChild className="rounded-full ">
                  <a

                    href={a.href}
                    target={a.newTab ? "_blank" : undefined}
                    rel={a.newTab ? "noopener noreferrer" : undefined}
                    download={a.download}
                    tabIndex={-1}
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium",
                      a.variant === "default"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-zinc-700 text-white hover:bg-zinc-600"
                    )}
                  >
                    {a.label}
                  </a>
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>





    </div>

    {/* Hover veil */}
    <div className="pointer-events-none absolute inset-0 z-[1] transition-colors duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 group-focus-within:bg-black/[.03] group-focus-within:dark:bg-neutral-800/10" />
  </div>
);
