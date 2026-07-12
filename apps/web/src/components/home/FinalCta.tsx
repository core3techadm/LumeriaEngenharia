"use client";

import { motion } from "framer-motion";
import { HOME_FINAL_CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 radial-glow" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            {HOME_FINAL_CTA.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-lumeria-gray">
            {HOME_FINAL_CTA.subtitle}
          </p>
          <div className="mt-10">
            <Button href={HOME_FINAL_CTA.cta.href} size="lg">
              {HOME_FINAL_CTA.cta.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
