"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border/50">
      <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors z-10">
        My Portfolio<span className="text-primary">.</span>
      </Link>
      
      {/* Absolute Centered Nav on Desktop */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
        <Link href="/#about" className="relative group text-muted-foreground hover:text-foreground transition-colors">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/#skills" className="relative group text-muted-foreground hover:text-foreground transition-colors">
          Skills
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/projects" className="relative group text-muted-foreground hover:text-foreground transition-colors">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/#experience" className="relative group text-muted-foreground hover:text-foreground transition-colors">
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/#contact" className="relative group text-muted-foreground hover:text-foreground transition-colors">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      
      {/* Right Side Icons */}
      <div className="flex items-center gap-2 sm:gap-4 z-10">
        <ThemeToggle />
        
        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] bg-background/95 backdrop-blur-xl border-border pt-16">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation menu links</SheetDescription>
              <nav className="flex flex-col gap-8 text-lg font-medium">
                <Link href="/#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link href="/#skills" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
                <Link href="/projects" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
                <Link href="/#experience" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
                <Link href="/#contact" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
