import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LeadProps = {
  children: ReactNode;
} & ComponentProps<"h1">;

export default function Lead({ children, className, ...props }: LeadProps) {
  return (
    <h1
      {...props}
      className={twMerge(
        "relative grid grid-cols-3 items-center justify-center gap-2 whitespace-normal py-3 text-center text-5xl font-bold tracking-wider text-white before:h-1 before:w-full before:bg-gradient-to-r before:via-white before:content-[''] after:h-1 after:w-full  after:bg-gradient-to-l after:via-white after:content-['']",
        className,
      )}
    >
      {children}
    </h1>
  );
}
