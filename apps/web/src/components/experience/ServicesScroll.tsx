"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { ServiceImagePanel } from "@/components/home/ServiceImagePanel";

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
          className="service-chapter relative py-20 md:min-h-screen md:py-32"
        >
          <div className="absolute inset-0 radial-glow opacity-50" />

          <div className="chapter-content relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
            <div
              className={cn(
                "order-2",
                index % 2 === 1 ? "md:order-2" : "md:order-1",
              )}
            >
              <h2
                className={cn(
                  "text-4xl font-bold md:text-5xl",
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
                "order-1",
                index % 2 === 1 ? "md:order-1" : "md:order-2",
              )}
            >
              {"videoId" in service && service.videoId ? (
                <YouTubeEmbed
                  videoId={service.videoId}
                  title={service.title}
                />
              ) : (
                <div className="aspect-square overflow-hidden rounded-3xl border border-lumeria-sage/15">
                  <ServiceImagePanel serviceId={service.id} />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 py-16 text-center sm:px-6 md:py-24">
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
