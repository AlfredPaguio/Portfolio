import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface MobileLinkHelperProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function MobileLinkHelper({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkHelperProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
