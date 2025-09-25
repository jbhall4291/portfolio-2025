import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  ["inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium",
    "transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white aria-invalid:ring-destructive/20 dark:focus-visible:ring-offset-zinc-900",
    "dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",],
  {
    variants: {
      variant: {
        default: [
          "shadow-xs  bg-blue-600 text-white border border-2 border-blue-600 ",
          "hover:bg-blue-700 hover:border-blue-700 ",
          "dark:hover:border-blue-700 dark:border-blue-600",
        ],
        // " backdrop-blur-md  shadow-xs text-primary  bg-blue-600/60 text-white hover:bg-blue-700"
        destructive: [
          "bg-destructive text-white shadow-xs ",
          "hover:bg-destructive/90 ",
          "focus-visible:ring-destructive/20",
          "dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        ],
        outline: [
          "shadow-xs text-blue-600 border border-2 font-semibold border-blue-600  bg-white/30 backdrop-blur-md",
          "hover:bg-blue-700 hover:text-white hover:border-blue-700",
          "focus-visible:border-blue-600 focus-visible:hover:border-blue-700 dark:focus-visible:border-white",
          "",
          "dark:bg-white dark:border-white dark:hover:bg-blue-700",
        ],
        secondary:
          " text-white shadow-xs  hover:bg-zinc-700 text-white bg-zinc-600",


        ghost:
          [
            "hover:bg-red-300 hover:bg-zinc-200",
            "dark:hover:bg-accent/50",

          ],
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 ",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-full px-6 has-[>svg]:px-4",
        xl: "h-14 rounded-full px-6 has-[>svg]:px-4 text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
