import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  " inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent  text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent  text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent  text-destructive-foreground  bg-red-600	text-white ",
          notjst:
          "border-transparent  text-destructive-foreground  bg-red-600	text-white ",
          outline: "text-foreground",
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
  console.log(badgeVariants({ variant }));
  
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
