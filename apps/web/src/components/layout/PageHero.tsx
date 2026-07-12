import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[45vh] items-end pb-12 pt-28 md:min-h-[50vh] md:pb-16 md:pt-32",
        className,
      )}
    >
      <div className="absolute inset-0 radial-glow" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-lumeria-gray">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
