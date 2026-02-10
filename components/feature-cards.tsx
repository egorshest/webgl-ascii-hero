"use client";

const features = [
  {
    title: "Any 3D Model",
    description:
      "Drop in any .glb file and watch it come alive in ASCII. Your hero section becomes a living piece of art -- no design skills required.",
    icon: "cube",
  },
  {
    title: "Real-Time ASCII Shader",
    description:
      "A custom GLSL shader converts your 3D scene to ASCII characters on the GPU. Every frame is rendered at full speed with zero layout jank.",
    icon: "code",
  },
  {
    title: "Interactive Controls",
    description:
      "Users can drag to rotate, hover to zoom, and watch reactive glow effects follow their cursor. Engagement out of the box.",
    icon: "pointer",
  },
  {
    title: "CRT Post-Processing",
    description:
      "Scanlines, vignette, chromatic aberration, and glow -- layered post-processing effects that make the ASCII art feel retro and alive.",
    icon: "layers",
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    cube: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    code: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    pointer: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 14a8 8 0 0 1-8 8" />
        <path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" />
        <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
    layers: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  };

  return (
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
      {iconMap[icon]}
    </div>
  );
}

export function FeatureCards() {
  return (
    <section id="features" className="w-full px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-accent mb-3 tracking-wider uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Everything you need for a stunning hero
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-8 md:p-10 group hover:bg-surface transition-colors duration-300"
            >
              <FeatureIcon icon={feature.icon} />
              <h3 className="text-lg font-semibold text-card-foreground mt-5 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
