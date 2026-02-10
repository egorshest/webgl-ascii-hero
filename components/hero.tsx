"use client";

import { EffectScene } from "./effect-scene";
import { Header } from "./header";
import { FeatureCards } from "./feature-cards";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <EffectScene className="h-full w-full" enableZoom={false} />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border-bright bg-surface/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-muted tracking-wide">
                Next.js + React Three Fiber + GLSL
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance mb-6">
              <span className="text-foreground">3D models,</span>
              <br />
              <span className="text-accent">rendered in ASCII</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
              A Next.js boilerplate with a hero page featuring a 3D GLTF model
              post-processed into animated ASCII art using custom GLSL shaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://github.com/egorshest/webgl-ascii-hero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-lg shadow-foreground/5"
              >
                <GithubIcon />
                Deploy in 2 Clicks
                <ArrowIcon />
              </a>

              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-bright text-foreground font-medium text-sm hover:border-accent/50 hover:text-accent transition-all duration-200 bg-background/50 backdrop-blur-sm"
              >
                Read Step-by-Step Guide
                <ArrowIcon />
              </a>
            </div>

            {/* Buy me a coffee */}
            <div className="mt-6">
              <a
                href="https://www.buymeacoffee.com/egorbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-muted hover:text-[#FFDD00] border border-transparent hover:border-[#FFDD00]/20 transition-all duration-200"
              >
                <CoffeeIcon />
                Buy me a coffee
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="font-mono text-[10px] tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureCards />

      {/* Footer */}
      <footer className="w-full border-t border-border px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            Built by{" "}
            <a
              href="https://github.com/egorshest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              @egorshest
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/egorshest/webgl-ascii-hero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.buymeacoffee.com/egorbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#FFDD00] transition-colors"
              aria-label="Buy me a coffee"
            >
              <CoffeeIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
