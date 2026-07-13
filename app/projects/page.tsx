"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/data";
import { ArrowUpRight, Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const categories = ["All", "React", "Next.js", "MERN", "AI", "Full Stack"];

// Duplicating projects to make a larger list for the projects page
const allProjects = [
  ...featuredProjects,
  {
    id: "project-4",
    title: "Real-time Chat App",
    description: "A fast, scalable chat application using WebSockets and Redis.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    techStack: ["MERN", "Socket.io", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Real-time messaging", "Typing indicators", "Read receipts"]
  },
  {
    id: "project-5",
    title: "AI Image Generator",
    description: "A web interface for generating images using custom stable diffusion models.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Next.js", "AI", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Text to image", "Image variations", "Prompt history"]
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.techStack.includes(activeCategory) || 
      (activeCategory === "Full Stack" && project.techStack.includes("Next.js") && project.techStack.includes("Supabase")); // simple logic for demo
    
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          My <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A comprehensive collection of my work, ranging from small experiments to full-scale enterprise applications.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-transparent hover:border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            type="text" 
            placeholder="Search projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/50 border-white/10 focus-visible:ring-primary rounded-full h-11"
          />
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/20">
                Image Placeholder
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="text-xs font-semibold text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                <Link 
                  href={`/projects/${project.id}`}
                  className="text-sm font-semibold hover:text-primary transition-colors flex-grow"
                >
                  View Case Study
                </Link>
                <Link href={project.githubUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link href={project.liveUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <h3 className="text-2xl font-bold text-muted-foreground">No projects found.</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
