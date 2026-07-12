"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const accentStyles = {
  gold: "text-gradient-gold",
  sage: "text-gradient-sage",
  mint: "text-lumeria-mint",
  leaf: "text-lumeria-leaf",
  slate: "text-lumeria-slate",
};

export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const sections = containerRef.current.querySelectorAll(".service-chapter");

    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelector(".chapter-content"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="service-chapter relative min-h-screen py-32"
        >
          <div className="absolute inset-0 radial-glow opacity-50" />

          <div className="chapter-content relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <span className="font-mono text-sm text-lumeria-gray">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2
                className={cn(
                  "mt-2 text-4xl font-bold md:text-5xl",
                  accentStyles[service.accent as keyof typeof accentStyles],
                )}
              >
                {service.title}
              </h2>
              <p className="mt-2 text-lg text-lumeria-sage">
                {service.subtitle}
              </p>
              <p className="mt-6 leading-relaxed text-lumeria-gray">
                {service.description}
              </p>

              <ul className="mt-8 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-lumeria-sage/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lumeria-leaf" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href={service.href} variant="secondary">
                  Saiba mais
                </Button>
              </div>
            </div>

            <div
              className={cn(
                "flex aspect-square items-center justify-center rounded-3xl glass-panel",
                index % 2 === 1 ? "md:order-1" : "",
              )}
            >
              <div className="text-center">
                <div
                  className={cn(
                    "mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-lumeria-sage/20",
                    service.accent === "gold" && "bg-lumeria-gold/10",
                    service.accent === "sage" && "bg-lumeria-sage/10",
                    service.accent === "mint" && "bg-lumeria-mint/10",
                    service.accent === "leaf" && "bg-lumeria-leaf/10",
                    service.accent === "slate" && "bg-lumeria-slate/10",
                  )}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <p className="text-sm text-lumeria-gray">
                  Experiência imersiva em breve
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 text-center">
        <p className="text-lumeria-gray">
          Quer ver todas as soluções?{" "}
          <Link href="/servicos" className="text-lumeria-sage hover:underline">
            Acesse a página completa
          </Link>
        </p>
      </section>
    </div>
  );
}
