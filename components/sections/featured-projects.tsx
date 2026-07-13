"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { featuredProjects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";

export function FeaturedProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              A selection of my recent projects demonstrating my technical capabilities and problem-solving approach.
            </p>
          </div>
          <Link 
            href="/projects"
            className="group flex items-center gap-2 text-primary font-medium hover:text-foreground transition-colors"
          >
            View all projects
            <span className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden aspect-[4/3] glass-card">
        {/* Placeholder for image */}
        <div className="absolute inset-0 bg-muted/30 flex items-center justify-center text-muted-foreground text-sm">
          {project.title} Image Placeholder
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
      </div>

      {/* Project Info */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </p>
        
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          {project.features.slice(0, 3).map((feature: string) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-4">
          <Link 
            href={`/projects/${project.id}`}
            className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
          >
            Case Study
          </Link>
          <Link 
            href={project.liveUrl}
            target="_blank"
            className="p-3 rounded-full glass hover:bg-white/5 transition-colors"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link 
            href={project.githubUrl}
            target="_blank"
            className="p-3 rounded-full glass hover:bg-white/5 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
