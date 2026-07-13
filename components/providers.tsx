"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </NextThemesProvider>
  );
}
