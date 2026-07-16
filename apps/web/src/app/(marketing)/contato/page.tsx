import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BRAND } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

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
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-2 block text-lumeria-white transition-colors hover:text-lumeria-sage"
            >
              {BRAND.email}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-lumeria-sage">
              WHATSAPP
            </h2>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lumeria-white transition-colors hover:text-lumeria-sage"
            >
              {BRAND.phone}
            </a>
            <p className="mt-1 text-sm text-lumeria-gray">
              Clique para iniciar uma conversa
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-lumeria-sage">
              LOCALIZAÇÃO
            </h2>
            <p className="mt-2 text-lumeria-white">{BRAND.city}</p>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
