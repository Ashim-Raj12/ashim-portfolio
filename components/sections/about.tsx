"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {aboutData.introduction}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutData.focus}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-foreground">
                {stat.value}
              </h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
