import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a ${BRAND.shortName} — ${BRAND.tagline}`,
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre a Lumeria"
        subtitle={BRAND.tagline}
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-lumeria-gray leading-relaxed">
          <p>{BRAND.description}</p>
          <p>
            Atuamos em seis frentes complementares: energia solar fotovoltaica,
            automação residencial, sonorização de alta performance, projetos
            luminotécnicos, projetos elétricos e gestão de obras. Cada projeto
            é desenvolvido com visão de longo prazo — pensando não apenas na
            instalação, mas na evolução tecnológica do ambiente.
          </p>
          <p>
            Nossa missão é transformar espaços em ambientes inteligentes,
            sustentáveis e memoráveis — onde tecnologia e design trabalham juntos
            para criar experiências significativas.
          </p>
        </div>
      </section>
    </>
  );
}
