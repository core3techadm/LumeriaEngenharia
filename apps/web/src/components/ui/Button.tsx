import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-lumeria-sage text-lumeria-forest hover:bg-lumeria-mint shadow-lg shadow-lumeria-sage/20",
  secondary:
    "border border-lumeria-sage/30 text-lumeria-sage hover:bg-lumeria-sage/10",
  ghost: "text-lumeria-sage hover:bg-lumeria-sage/10",
};

const sizes = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "min-h-11 px-6 py-3 text-sm",
  lg: "min-h-12 px-8 py-4 text-base",
};

export function Button({
  className,
  href,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "touch-manipulation inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lumeria-sage/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
