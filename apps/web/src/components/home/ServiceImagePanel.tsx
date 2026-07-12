"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type ServiceVisual = {
  src: string;
  alt: string;
  stat: string;
  statLabel: string;
  accentColor: string;
};

const VISUALS: Record<string, ServiceVisual> = {
  fotovoltaica: {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=90&auto=format&fit=crop",
    alt: "Casa de luxo com painéis solares no telhado",
    stat: "até 95%",
    statLabel: "de redução na conta de energia",
    accentColor: "#c8a96e",
  },
  automacao: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90&auto=format&fit=crop",
    alt: "Interior de mansão com automação residencial",
    stat: "1 toque",
    statLabel: "controla iluminação, clima e som",
    accentColor: "#b8d4b0",
  },
  sonorizacao: {
    src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1400&q=90&auto=format&fit=crop",
    alt: "Home theater de luxo com sistema de som",
    stat: "360°",
    statLabel: "experiência sonora imersiva",
    accentColor: "#719968",
  },
  luminotecnico: {
    src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1400&q=90&auto=format&fit=crop",
    alt: "Iluminação arquitetural em residência premium",
    stat: "∞",
    statLabel: "possibilidades de ambientação",
    accentColor: "#e8f1ef",
  },
  "projetos-eletricos": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90&auto=format&fit=crop",
    alt: "Mansão moderna com projeto elétrico de alto padrão",
    stat: "100%",
    statLabel: "segurança e conformidade técnica",
    accentColor: "#c8a96e",
  },
  "gestao-obras": {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90&auto=format&fit=crop",
    alt: "Mansão de luxo com piscina — projeto Lumeria",
    stat: "zero",
    statLabel: "surpresas na entrega",
    accentColor: "#b8d4b0",
  },
};

const FALLBACK: ServiceVisual = {
  src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90&auto=format&fit=crop",
  alt: "Residência premium Lumeria Soluções",
  stat: "alto padrão",
  statLabel: "em cada detalhe",
  accentColor: "#b8d4b0",
};

export function ServiceImagePanel({
  serviceId,
  priority = false,
}: {
  serviceId: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 55, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 22 });
  const imgX = useTransform(springX, [-0.5, 0.5], ["-2.5%", "2.5%"]);
  const imgY = useTransform(springY, [-0.5, 0.5], ["-2.5%", "2.5%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const visual = VISUALS[serviceId] ?? FALLBACK;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem com parallax */}
      <motion.div
        className="absolute inset-[-5%]"
        style={{ x: imgX, y: imgY }}
      >
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </motion.div>

      {/* Gradient cinematic: escurece bordas e base */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1f14] via-[#0f1f14]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f1f14]/40 via-transparent to-transparent" />

      {/* Accent glow lateral */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full blur-3xl opacity-30"
        style={{ background: visual.accentColor }}
      />

      {/* Stat badge */}
      <div className="absolute bottom-6 left-6 right-6">
        <p
          className="text-4xl font-bold leading-none"
          style={{ color: visual.accentColor }}
        >
          {visual.stat}
        </p>
        <p className="mt-1 text-sm text-lumeria-white/70">{visual.statLabel}</p>
        <div
          className="mt-3 h-px w-12 rounded-full"
          style={{ background: visual.accentColor }}
        />
      </div>

      {/* Watermark Lumeria */}
      <p className="absolute right-4 top-4 text-[10px] tracking-widest text-lumeria-white/25 select-none">
        LUMERIA SOLUÇÕES
      </p>
    </div>
  );
}
