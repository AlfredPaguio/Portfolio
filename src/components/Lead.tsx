export default function Lead({
  title,
  subtitle,
  left = true,
  right = true,
}: LeadProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <h1
        className={`flex w-full shrink-0 items-center justify-center gap-2 self-center py-3 text-center text-5xl font-bold tracking-wider text-foreground 
  ${
    left
      ? "before:hidden before:h-1 before:w-full before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-foreground before:content-[''] md:before:block"
      : ""
  } 
  ${
    right
      ? "after:hidden after:h-1 after:w-full after:flex-1 after:bg-gradient-to-l after:from-transparent after:via-foreground after:content-[''] md:after:block"
      : ""
  }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-center text-lg font-normal text-muted">{subtitle}</p>
      )}
    </div>
  );
}

type LeadProps = {
  title: string;
  subtitle?: string;
  left?: boolean;
  right?: boolean;
};
