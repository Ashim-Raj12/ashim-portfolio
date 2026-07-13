import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContactWidget } from "@/components/ui/floating-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashim Raj | Full Stack AI Engineer",
  description: "Portfolio of Ashim Raj, Full Stack AI Engineer. Building world-class web applications with Next.js, React, and Node.",
  openGraph: {
    title: "Ashim Raj | Full Stack AI Engineer",
    description: "Premium portfolio showcasing my work as a Full Stack AI Engineer.",
    url: "https://ashimraj.dev",
    siteName: "Ashim Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Providers>
          <div className="fixed inset-0 z-[-1] bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="fixed inset-0 z-[-1] bg-background/90 backdrop-blur-[100px]" />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingContactWidget />
        </Providers>
      </body>
    </html>
  );
}
