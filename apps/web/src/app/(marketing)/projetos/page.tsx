import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os projetos realizados pela Lumeria.",
};

const PROJECTS = [
  {
    title: "Residência Solar Premium",
    category: "Fotovoltaica + Automação",
    description:
      "Sistema fotovoltaico de 12 kWp integrado com automação residencial completa.",
  },
  {
    title: "Escritório Corporativo",
    category: "Sonorização + Automação",
    description:
      "Projeto luminotécnico com áudio multi-zona para ambiente de trabalho.",
  },
  {
    title: "Casa Inteligente",
    category: "Automação Completa",
    description:
      "Automação de iluminação, climatização, som e segurança em residência de alto padrão.",
  },
];

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        title="Projetos"
        subtitle="Cada projeto é uma experiência única — tecnologia a serviço do conforto."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl glass-panel p-8 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="text-xs tracking-wider text-lumeria-leaf">
              {project.category}
            </span>
            <h2 className="mt-3 text-xl font-bold">{project.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-lumeria-gray">
              {project.description}
            </p>
          </article>
        ))}
      </section>

      <section className="pb-24 text-center">
        <p className="text-lumeria-gray">
          Tem um projeto em mente?
        </p>
        <div className="mt-6">
          <Button href="/contato">Vamos conversar</Button>
        </div>
      </section>
    </>
  );
}
