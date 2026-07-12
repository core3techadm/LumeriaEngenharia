import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) notFound();

  return (
    <>
      <PageHero title={service.title} subtitle={service.subtitle} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-lg leading-relaxed text-lumeria-gray">
          {service.description}
        </p>

        <ul className="mt-10 space-y-4">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 rounded-xl glass-panel p-4 text-lumeria-sage"
            >
              <span className="h-2 w-2 rounded-full bg-lumeria-leaf" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Button href="/contato" size="lg">
            Solicitar orçamento
          </Button>
        </div>
      </section>
    </>
  );
}
