import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Energia solar, automação residencial, sonorização, iluminação, projetos elétricos e gestão de obras.",
};

const accentStyles = {
  gold: "border-lumeria-gold/30 hover:border-lumeria-gold/60",
  sage: "border-lumeria-sage/30 hover:border-lumeria-sage/60",
  mint: "border-lumeria-mint/30 hover:border-lumeria-mint/60",
  leaf: "border-lumeria-leaf/30 hover:border-lumeria-leaf/60",
  slate: "border-lumeria-slate/30 hover:border-lumeria-slate/60",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Nossas Soluções"
        subtitle="Soluções integradas para ambientes inteligentes, seguros e sustentáveis."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className={cn(
              "group rounded-2xl border p-8 transition-all duration-300 glass-panel",
              accentStyles[service.accent as keyof typeof accentStyles],
            )}
          >
            <span className="text-2xl">{service.icon}</span>
            <h2 className="mt-4 text-xl font-bold text-lumeria-white group-hover:text-lumeria-sage">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-lumeria-sage">{service.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-lumeria-gray">
              {service.description}
            </p>
            <span className="mt-6 inline-block text-sm text-lumeria-leaf">
              Saiba mais →
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
