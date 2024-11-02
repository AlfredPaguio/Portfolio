"use client";
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@@/src/utils/cn"

const badgeVariants = cva(
  "bg-secondary/40 inline-flex items-center border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent border-l-primary border-l-4 bg-primary/20 text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent border-l-secondary border-l-4 text-secondary-foreground hover:bg-secondary/80",
        accent:
          "border-transparent border-l-accent border-l-4 bg-accent/40 text-accent-foreground hover:bg-accent/80",
        destructive:
          "border-transparent border-l-destructive border-l-4 text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        ghost: "text-muted-foreground rounded-none border-0 border-transparent bg-transparent",
        icon: "rounded-full bg-background text-foreground hover:bg-background/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
