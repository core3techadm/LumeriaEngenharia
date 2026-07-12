import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { ServicesScroll } from "@/components/experience/ServicesScroll";
import { ValueProposition } from "@/components/home/ValueProposition";
import { PracticalScenarios } from "@/components/home/PracticalScenarios";
import { AudienceSection } from "@/components/home/AudienceSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <ServicesCarousel />
      <ValueProposition />
      <ServicesScroll />
      <PracticalScenarios />
      <AudienceSection />
      <MethodologySection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
