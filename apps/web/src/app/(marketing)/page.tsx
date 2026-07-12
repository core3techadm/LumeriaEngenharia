import { HeroSection } from "@/components/experience/HeroSection";
import { ServicesScroll } from "@/components/experience/ServicesScroll";
import { SpatialAudioDemo } from "@/components/experience/SpatialAudioDemo";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesScroll />
      <SpatialAudioDemo />

      <section className="relative py-32">
        <div className="absolute inset-0 radial-glow" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Pronto para transformar seu{" "}
            <span className="text-gradient-sage">ambiente</span>?
          </h2>
          <p className="mt-6 text-lg text-lumeria-gray">
            Da energia solar à gestão de obras — desenvolvemos soluções
            integradas que evoluem com você.
          </p>
          <div className="mt-10">
            <Button href="/contato" size="lg">
              Iniciar projeto
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
