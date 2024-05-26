import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@@/src/utils/cn";

const inputVariants = cva(
  "flex h-9 w-full border-input bg-transparent py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "px-3 rounded-md border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        outline:
          "border-b focus:border-b-2 focus:border-accent focus:outline-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
