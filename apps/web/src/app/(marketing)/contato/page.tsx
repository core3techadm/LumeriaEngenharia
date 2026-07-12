import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Lumeria.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Contato"
        subtitle="Vamos conversar sobre seu próximo projeto."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-lumeria-sage">
              E-MAIL
            </h2>
            <p className="mt-2 text-lumeria-white">{BRAND.email}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-lumeria-sage">
              TELEFONE
            </h2>
            <p className="mt-2 text-lumeria-white">{BRAND.phone}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-lumeria-sage">
              LOCALIZAÇÃO
            </h2>
            <p className="mt-2 text-lumeria-white">{BRAND.city}</p>
          </div>
        </div>

        <form className="space-y-6 rounded-2xl glass-panel p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-lumeria-sage">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-lumeria-sage">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-lumeria-sage">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full resize-none rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none"
              placeholder="Conte-nos sobre seu projeto..."
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Enviar mensagem
          </Button>
        </form>
      </section>
    </>
  );
}
