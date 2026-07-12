import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoIconProps = {
  size?: number;
  className?: string;
};

type LogoWordmarkProps = {
  className?: string;
  priority?: boolean;
};

const WORDMARK_WIDTH = 3508;
const WORDMARK_HEIGHT = 2481;

export function LogoIcon({ size = 40, className }: LogoIconProps) {
  return (
    <Image
      src="/logo/lumeria-icon.svg"
      alt="Lumeria"
      width={size}
      height={size}
      className={cn("rounded-lg", className)}
      priority
    />
  );
}

export function LogoWordmark({
  className,
  priority = true,
}: LogoWordmarkProps) {
  return (
    <Image
      src="/logo/lumeria-solucoes.png"
      alt={BRAND.name}
      width={WORDMARK_WIDTH}
      height={WORDMARK_HEIGHT}
      className={cn("h-9 w-auto object-contain sm:h-10 md:h-12", className)}
      priority={priority}
    />
  );
}
