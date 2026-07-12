"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
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

const AUTOPLAY_DELAY = 8000;
const SWIPE_THRESHOLD = 60;

export function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const pillsRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active],
  );

  const next = useCallback(() => {
    go((active + 1) % SERVICES.length);
  }, [active, go]);

  const prev = useCallback(() => {
    go((active - 1 + SERVICES.length) % SERVICES.length);
  }, [active, go]);

  // Pausa temporariamente o autoplay quando o usuário interage (toque/arraste/clique)
  const pauseAutoplay = useCallback(() => {
    pausedRef.current = true;
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, AUTOPLAY_DELAY);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) next();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    return () => clearTimeout(resumeTimeoutRef.current);
  }, []);

  // Mantém a pill ativa visível dentro da faixa de navegação rolável
  useEffect(() => {
    const container = pillsRef.current;
    const activePill = container?.children[active] as HTMLElement | undefined;
    activePill?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    pauseAutoplay();
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      next();
    } else if (info.offset.x >= SWIPE_THRESHOLD) {
      prev();
    }
  }

  const service = SERVICES[active];

  return (
    <section
      id="solucoes"
      className="relative pt-24 pb-16 md:pt-28 md:pb-24"
      aria-label="Carrossel de soluções"
    >
      <div className="absolute inset-0 radial-glow opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-12">
          <p className="text-sm tracking-widest text-lumeria-sage">SOLUÇÕES</p>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl">
            Tudo que seu projeto precisa
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-lumeria-gray md:mt-4 md:text-base">
            Da energia solar à gestão da obra — soluções integradas para
            ambientes de alto padrão.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-lumeria-sage/15 glass-panel md:rounded-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={service.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              drag="x"
              dragElastic={0.15}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="grid touch-pan-y select-none md:grid-cols-2"
            >
              <div
                className={cn(
                  "relative min-h-[260px] overflow-hidden border-b border-lumeria-sage/10 sm:min-h-[340px] md:min-h-[520px] md:border-b-0 md:border-r",
                  accentBorder[service.accent as keyof typeof accentBorder],
                )}
              >
                <ServiceImagePanel serviceId={service.id} priority={active === 0} />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                <h3 className="text-xl font-bold leading-tight text-lumeria-white sm:text-2xl md:text-3xl">
                  {service.title}
                </h3>
                <div
                  className="mt-3 h-px w-10 rounded-full"
                  style={{
                    background:
                      accentBorder[service.accent as keyof typeof accentBorder]
                        ?.replace("border-", "")
                        .replace("/30", "") ?? "#b8d4b0",
                  }}
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
                    {active + 1} de {SERVICES.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => {
              pauseAutoplay();
              prev();
            }}
            className="absolute left-2 top-[36%] z-10 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full glass-panel text-xl text-lumeria-sage transition active:scale-90 md:left-4 md:top-1/2 md:hover:bg-lumeria-sage/15"
            aria-label="Solução anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => {
              pauseAutoplay();
              next();
            }}
            className="absolute right-2 top-[36%] z-10 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full glass-panel text-xl text-lumeria-sage transition active:scale-90 md:right-4 md:top-1/2 md:hover:bg-lumeria-sage/15"
            aria-label="Próxima solução"
          >
            ›
          </button>
        </div>

        <div
          ref={pillsRef}
          className="scrollbar-hidden mt-6 flex items-center gap-2 overflow-x-auto px-1 py-1 md:mt-8 md:flex-wrap md:justify-center md:overflow-visible"
        >
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                pauseAutoplay();
                go(i);
              }}
              className={cn(
                "shrink-0 touch-manipulation whitespace-nowrap rounded-full px-4 py-2 text-xs transition-all active:scale-95",
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

        <p className="mt-6 text-center text-sm text-lumeria-gray md:mt-8">
          <Link href="/servicos" className="text-lumeria-sage hover:underline">
            Ver todas as soluções →
          </Link>
        </p>
      </div>
    </section>
  );
}
