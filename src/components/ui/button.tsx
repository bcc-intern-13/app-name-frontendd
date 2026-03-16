import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        nav: "bg-secondary border border-secondary text-white font-inter hover:bg-white hover:text-secondary cursor-pointer",
        default:
          "bg-secondary border border-secondary text-white font-medium hover:bg-white hover:text-secondary cursor-pointer",
        back:
          "bg-white border border-secondary text-secondary font-inter hover:bg-secondary hover:text-white cursor-pointer",
        black:
          "bg-white border-2 border-black text-black font-medium hover:bg-black hover:text-white cursor-pointer",
      },
      size: {
        default: "h-10 rounded-full px-4 py-2",
        // xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        // sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        // lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        // icon: "size-9",
        // "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        // "icon-sm": "size-8",
        // "icon-lg": "size-10",
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
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Button = asChild ? Slot.Root : "button"

  return (
    <Button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
