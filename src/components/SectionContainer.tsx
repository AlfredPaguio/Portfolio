import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const sectionContainerVariants = cva("mx-auto", {
  variants: {
    size: {
      none: "xl:max-w-full",
      sm: "xl:max-w-[50rem] px-9",
      md: "xl:max-w-[64rem] px-6",
      lg: "xl:max-w-[73rem] px-4",
      xl: "xl:max-w-[80rem] px-0",
      "2xl": "xl:max-w-[96rem]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionContainerVariants> {
  //   asChild?: boolean
}

export default function SectionContainer({
  children,
  size,
  className,
}: SectionContainerProps) {
  return (
    <section className={cn(sectionContainerVariants({ size }), className)}>
      {children}
    </section>
  );
}
