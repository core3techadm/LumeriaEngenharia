import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoIconProps = {
  size?: number;
  className?: string;
};

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
