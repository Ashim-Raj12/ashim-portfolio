"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/lib/data";

export default function CaseStudyPage() {
  const params = useParams();
  const projectId = params.slug;

  // In a real app, you'd fetch the specific project data based on the slug.
  // We'll just use the first featured project as a fallback if not found.
  const project = featuredProjects.find((p) => p.id === projectId) || featuredProjects[0];

  return (
    <article className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 container mx-auto">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            {project.description}
          </p>
          
          <div className="flex items-center gap-4">
            <Link 
              href={project.liveUrl}
              target="_blank"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link 
              href={project.githubUrl}
              target="_blank"
              className="px-6 py-3 rounded-full glass hover:bg-white/5 font-medium transition-colors flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4" /> Source Code
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Main Image */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 mb-24"
      >
        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden glass-card relative">
           <Image 
             src={project.image} 
             alt={project.title} 
             fill 
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-primary/10" />
        </div>
      </motion.section>

      {/* Content */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Sidebar */}
        <div className="lg:col-span-4 order-2 lg:order-1">
          <div className="sticky top-32 glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Project Info</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Role</h4>
                <p className="font-medium">Lead Full Stack Engineer</p>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Timeline</h4>
                <p className="font-medium">8 Weeks</p>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Services</h4>
                <p className="font-medium">UI/UX Design, Development, API Integration</p>
              </div>
              <div className="pt-6 border-t border-border/50">
                <h4 className="text-sm text-muted-foreground mb-4">Core Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 order-1 lg:order-2 space-y-16 text-lg text-muted-foreground leading-relaxed">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">The Problem</h2>
            <p className="mb-4">
              The client was struggling with a legacy system that was slow, hard to maintain, and lacked the modern features required to stay competitive in their market. Their customer retention was dropping due to poor user experience.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
            <p className="mb-4">
              We architected a completely new platform from the ground up using Next.js and Tailwind CSS. We implemented a microservices architecture for the backend to ensure scalability and utilized edge caching to improve global response times.
            </p>
            <div className="w-full aspect-video rounded-2xl bg-secondary/30 my-8 flex items-center justify-center">
              Architecture Diagram Placeholder
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">300%</h4>
                <p className="text-sm font-medium">Performance Increase</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">45%</h4>
                <p className="text-sm font-medium">Higher Conversion</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">99.9%</h4>
                <p className="text-sm font-medium">Uptime Guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
