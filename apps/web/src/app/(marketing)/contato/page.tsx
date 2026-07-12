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

        <ContactForm />
      </section>
    </>
  );
}
