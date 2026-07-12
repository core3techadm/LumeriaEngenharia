"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const HeroScene = dynamic(
  () =>
    import("@/components/experience/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 radial-glow animate-pulse" />
    ),
  },
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="pointer-events-none absolute inset-0 radial-glow" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          <span className="text-gradient-sage">{BRAND.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 text-sm tracking-wide text-lumeria-sage md:text-lg"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-lumeria-gray md:text-xl"
        >
          {BRAND.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/servicos" size="lg">
            Conheça nossas soluções
          </Button>
          <Button href="/contato" variant="secondary" size="lg">
            Solicitar orçamento
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-lumeria-sage/50">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="h-8 w-px animate-pulse bg-lumeria-sage/30" />
        </div>
      </motion.div>
    </section>
  );
}
