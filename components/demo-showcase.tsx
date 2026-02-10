"use client";

import { EffectScene } from "./effect-scene";

function AnnotationDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
    </span>
  );
}

export function DemoShowcase() {
  return (
    <section className="w-full px-6 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-accent mb-3 tracking-wider uppercase">
            Live Demo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            Two sections. One hero block.
          </h2>
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed">
            The boilerplate ships a ready-to-use hero with a content area on the
            left and an interactive 3D canvas on the right. Customize both to
            match your brand.
          </p>
        </div>

        {/* Demo block */}
        <div className="rounded-xl border border-border-bright overflow-hidden bg-card">
          {/* Simulated browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <span className="font-mono text-[11px] text-muted-foreground px-4 py-1 rounded-md bg-background/50">
                yoursite.com
              </span>
            </div>
          </div>

          {/* Hero simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            {/* Left -- Content section */}
            <div className="relative flex flex-col justify-center px-8 md:px-12 py-12 lg:py-0">
              {/* Annotation label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <AnnotationDot />
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                  Content Section
                </span>
              </div>

              <div className="mt-8 lg:mt-0">
                <p className="font-mono text-xs text-accent mb-4 tracking-wider uppercase">
                  Your tagline here
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-5">
                  Your headline
                  <br />
                  <span className="text-accent">goes right here</span>
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-8 max-w-md">
                  This section is fully customizable. Add your product
                  description, value proposition, sign-up forms, CTAs, social
                  proof -- anything that tells your story.
                </p>

                {/* Placeholder CTA buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-6 py-3 rounded-lg bg-accent/20 border border-accent/30 text-accent text-sm font-medium">
                    Primary CTA
                  </div>
                  <div className="px-6 py-3 rounded-lg border border-border-bright text-muted text-sm font-medium">
                    Secondary CTA
                  </div>
                </div>
              </div>


            </div>

            {/* Right -- 3D Canvas section */}
            <div className="relative border-t lg:border-t-0 lg:border-l border-border min-h-[400px]">
              {/* Annotation label */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <AnnotationDot />
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                  3D Canvas
                </span>
              </div>

              <EffectScene className="h-full w-full" enableZoom={true} />

              {/* Canvas capability hints */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Any .glb model",
                    "Drag to rotate",
                    "Hover to zoom",
                    "ASCII shader",
                    "CRT effects",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-border text-[11px] text-muted font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
