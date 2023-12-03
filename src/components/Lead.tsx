export default function Lead({ title, subtitle }: LeadProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-foreground before:via-foreground after:via-foreground flex w-full shrink-0 items-center justify-center gap-2 self-center py-3 text-center text-5xl font-bold tracking-wider before:hidden before:h-1 before:w-full before:flex-1 before:bg-gradient-to-r before:from-transparent before:content-[''] after:hidden after:h-1 after:w-full after:flex-1 after:bg-gradient-to-l after:from-transparent  after:content-[''] md:before:block md:after:block">
        {title}
      </h1>
      {subtitle && (
        <p className="text-center text-lg font-normal text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

type LeadProps = {
  title: string;
  subtitle?: string;
};
