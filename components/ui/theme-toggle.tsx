"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-zinc-600 hover:text-black transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
