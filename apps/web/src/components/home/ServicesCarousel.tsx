"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ServiceImagePanel } from "@/components/home/ServiceImagePanel";

const accentBorder = {
  gold: "border-lumeria-gold/30",
  sage: "border-lumeria-sage/30",
  mint: "border-lumeria-mint/30",
  leaf: "border-lumeria-leaf/30",
  slate: "border-lumeria-slate/30",
};

export function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const next = useCallback(() => {
    go((active + 1) % SERVICES.length);
  }, [active, go]);

  const prev = useCallback(() => {
    go((active - 1 + SERVICES.length) % SERVICES.length);
  }, [active, go]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const service = SERVICES[active];

  return (
    <section id="solucoes" className="relative pt-28 pb-24" aria-label="Carrossel de soluções">
      <div className="absolute inset-0 radial-glow opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest text-lumeria-sage">SOLUÇÕES</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Tudo que seu projeto precisa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lumeria-gray">
            Da energia solar à gestão da obra — soluções integradas para
            ambientes de alto padrão.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-lumeria-sage/15 glass-panel">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={service.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid md:grid-cols-2"
            >
              <div
                className={cn(
                  "relative min-h-[340px] overflow-hidden border-b border-lumeria-sage/10 md:min-h-[520px] md:border-b-0 md:border-r",
                  accentBorder[service.accent as keyof typeof accentBorder],
                )}
              >
                <ServiceImagePanel serviceId={service.id} priority={active === 0} />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="text-2xl font-bold leading-tight text-lumeria-white md:text-3xl">
                  {service.title}
                </h3>
                <div
                  className="mt-3 h-px w-10 rounded-full"
                  style={{ background: accentBorder[service.accent as keyof typeof accentBorder]?.replace("border-", "").replace("/30", "") ?? "#b8d4b0" }}
                />
                <p className="mt-4 text-sm leading-relaxed text-lumeria-gray md:text-base">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-lumeria-sage/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lumeria-leaf" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-4">
                  <Button href={service.href} variant="secondary">
                    Ver solução completa
                  </Button>
                  <span className="text-xs text-lumeria-gray">
                    {SERVICES.findIndex((s) => s.id === service.id) + 1} de {SERVICES.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-[40%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass-panel text-xl text-lumeria-sage transition hover:bg-lumeria-sage/15 md:top-1/2"
            aria-label="Solução anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-[40%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass-panel text-xl text-lumeria-sage transition hover:bg-lumeria-sage/15 md:top-1/2"
            aria-label="Próxima solução"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              className={cn(
                "rounded-full px-4 py-2 text-xs transition-all",
                i === active
                  ? "bg-lumeria-sage text-lumeria-forest"
                  : "text-lumeria-gray hover:text-lumeria-sage",
              )}
              aria-label={s.title}
              aria-current={i === active ? "true" : undefined}
            >
              {s.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-lumeria-gray">
          <Link href="/servicos" className="text-lumeria-sage hover:underline">
            Ver todas as soluções →
          </Link>
        </p>
      </div>
    </section>
  );
}
