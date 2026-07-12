"use client";

import { motion } from "framer-motion";
import { HOME_AUDIENCE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function AudienceSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xl font-medium leading-relaxed text-lumeria-white md:text-3xl">
            {HOME_AUDIENCE.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 rounded-2xl glass-panel p-6 md:mt-16 md:p-12"
        >
          <p className="mb-6 text-sm font-semibold tracking-wider text-lumeria-sage">
            VOCÊ ACABA PRECISANDO:
          </p>
          <ul className="space-y-3">
            {HOME_AUDIENCE.painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-lumeria-gray"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lumeria-gold" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-lumeria-leaf/20 bg-lumeria-leaf/5 p-6 md:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-lumeria-sage">
              Faz sentido para quem:
            </h3>
            <ul className="space-y-3">
              {HOME_AUDIENCE.forYou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-lumeria-gray"
                >
                  <span className="text-lumeria-leaf">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-lumeria-sage/10 p-6 md:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-lumeria-gray">
              Normalmente não é prioridade para quem:
            </h3>
            <ul className="space-y-3">
              {HOME_AUDIENCE.notForYou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-lumeria-gray/70"
                >
                  <span className="text-lumeria-gray">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <Button href={HOME_AUDIENCE.cta.href} size="lg">
            {HOME_AUDIENCE.cta.label}
          </Button>
          <p className="mt-4 text-sm text-lumeria-gray">
            {HOME_AUDIENCE.cta.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
