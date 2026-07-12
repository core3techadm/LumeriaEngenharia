"use client";

import { motion } from "framer-motion";
import { HOME_PRACTICE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function PracticalScenarios() {
  return (
    <section id="pratica" className="relative py-20 md:py-32">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="text-2xl font-bold md:text-5xl">
            {HOME_PRACTICE.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-lumeria-gray md:mt-6 md:text-lg">
            {HOME_PRACTICE.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {HOME_PRACTICE.scenarios.map((scenario, index) => (
            <motion.article
              key={scenario.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl glass-panel p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-gradient-sage">
                {scenario.title}
              </h3>
              <p className="mt-4 leading-relaxed text-lumeria-gray">
                {scenario.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <Button href={HOME_PRACTICE.cta.href} variant="secondary" size="lg">
            {HOME_PRACTICE.cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
