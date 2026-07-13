"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import { siteMetadata } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-background/50 border-border focus-visible:ring-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border focus-visible:ring-primary h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                  <Input id="subject" placeholder="Project Inquiry" className="bg-background/50 border-border focus-visible:ring-primary h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="bg-background/50 border-border focus-visible:ring-primary min-h-[150px] resize-none" />
                </div>
                <Button size="lg" className="w-full h-12 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold">Other ways to connect</h3>
              <p className="text-muted-foreground">I typically respond within 24 hours.</p>
            </div>

            <div className="flex flex-col gap-6">
              <Link href={`mailto:${siteMetadata.email}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <p className="text-lg font-semibold group-hover:text-primary transition-colors">{siteMetadata.email}</p>
                </div>
              </Link>

              <Link href={siteMetadata.socials.whatsapp} target="_blank" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">WhatsApp</p>
                  <p className="text-lg font-semibold group-hover:text-primary transition-colors">Message Me</p>
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="lg" nativeButton={false} className="rounded-full glass hover:bg-accent border-border" render={<Link href="https://cal.com" target="_blank" />}>
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Book a Discovery Call
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
