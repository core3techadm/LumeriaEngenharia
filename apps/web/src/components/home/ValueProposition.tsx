"use client";

import { motion } from "framer-motion";
import { HOME_VALUE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function ValueProposition() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Seu projeto funcionando{" "}
            <span className="text-gradient-sage">do jeito que deveria</span>
          </h2>
          <p className="mt-6 text-lg text-lumeria-sage md:text-xl">
            {HOME_VALUE.subtitle}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 space-y-4 text-left md:mx-auto md:max-w-2xl"
        >
          {HOME_VALUE.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-4 rounded-xl glass-panel p-4 text-lumeria-sage/90"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lumeria-leaf" />
              <span>{benefit}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Button href={HOME_VALUE.cta.href} size="lg">
            {HOME_VALUE.cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
