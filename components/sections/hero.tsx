"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData, siteMetadata } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function HeroSection() {
  const roles = ["Full Stack Developer", "AI Developer", "Backend Developer", "SEO Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] bg-primary/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 border border-border"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-medium tracking-wide text-muted-foreground uppercase">Available for work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 sm:mb-6 leading-[1.1]"
        >
          {heroData.greeting} <br className="sm:hidden" />
          <span className="text-gradient block sm:inline mt-2 sm:mt-0">{heroData.name}</span>
        </motion.h1>

        <div className="h-10 sm:h-12 md:h-16 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-muted-foreground px-4"
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground mb-10 sm:mb-12 leading-relaxed px-2"
        >
          {heroData.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all" render={<Link href="#projects" />}>
            <span className="flex items-center gap-2 justify-center w-full">
              View Work <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
          
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 glass hover:bg-accent hover:scale-105 transition-all" render={<Link href="/resume.pdf" target="_blank" />}>
            <span className="flex items-center gap-2 justify-center w-full">
              <Download className="w-4 h-4" /> Resume
            </span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12 sm:mt-16 text-muted-foreground"
        >
          <Link href={siteMetadata.socials.github} target="_blank" className="hover:text-foreground transition-colors hover:-translate-y-1 duration-300">
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href={siteMetadata.socials.linkedin} target="_blank" className="hover:text-foreground transition-colors hover:-translate-y-1 duration-300">
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href={siteMetadata.socials.whatsapp} target="_blank" className="hover:text-foreground transition-colors hover:-translate-y-1 duration-300">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
