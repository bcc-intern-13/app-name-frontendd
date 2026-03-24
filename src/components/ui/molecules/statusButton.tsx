import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const StatusButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm whitespace-nowrap overflow-hidden w-fit",
  {
    variants: {
      variant: {
        diproses: "bg-bl-01 rounded-xl border-2 border-secondary text-bl-07 body-bold text-sm text-center ",
        dipanggil:
          "bg-gr-03 rounded-xl border-2 border-gr-05 text-gr-05 body-bold text-sm text-center",
        ditolak:
          "bg-red-02 rounded-xl border-2 border-red-04 text-red-04 body-bold text-sm text-center",
      },
      size: {
        default: "h-12 px-4 py-2",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "diproses",
      size: "default",
    },
  }
)

function StatusButton({
  className,
  variant = "diproses",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof StatusButtonVariants> & {
    asChild?: boolean
  }) {
  const StatusButton = asChild ? Slot.Root : "button"

  return (
    <StatusButton
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(StatusButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { StatusButton, StatusButtonVariants }
