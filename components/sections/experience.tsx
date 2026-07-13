"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My career path and the experience I've gathered along the way.
          </p>
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-4">
                <div className="md:col-span-1 md:text-right md:pr-12 pt-1 text-sm font-semibold text-primary mb-2 md:mb-0">
                  {exp.period}
                </div>
                
                <div className="md:col-span-4 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  
                  <div className="glass p-6 rounded-2xl group hover:-translate-y-1 transition-transform">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-muted-foreground mb-4 font-medium">
                      {exp.company}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
