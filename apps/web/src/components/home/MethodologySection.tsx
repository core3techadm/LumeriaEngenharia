"use client";

import { motion } from "framer-motion";
import { HOME_METHODOLOGY } from "@/lib/constants";

export function MethodologySection() {
  return (
    <section id="metodologia" className="relative py-32">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-lumeria-sage">
            {HOME_METHODOLOGY.subtitle}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {HOME_METHODOLOGY.title}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOME_METHODOLOGY.steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl glass-panel p-8"
            >
              <span className="font-mono text-3xl font-bold text-lumeria-gold/60">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-lumeria-sage">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-lumeria-gray">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
