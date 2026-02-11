"use client";

import { EffectScene } from "./effect-scene";
import { AnnotationDot } from "./annotation-dot";

export function Hero() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* H1 Section */}
      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            This is your hero section component
          </h1>
        </div>
      </section>

      {/* Hero Demo Section */}
      <section className="w-full px-6 py-12 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Hero simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            {/* Left -- Content section */}
            <div className="relative flex flex-col justify-center px-8 md:px-12 py-12 lg:py-0">
              {/* Annotation label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/20">
                <AnnotationDot />
                <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest">
                  Content Section
                </span>
              </div>

              <div className="mt-8 lg:mt-0">
                <p className="font-mono text-xs text-purple-400 mb-4 tracking-wider uppercase">
                  Your tagline here
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight text-balance mb-5">
                  Your headline
                  <br />
                  <span className="text-purple-400">goes right here</span>
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md">
                  This section is fully customizable. Add your product
                  description, value proposition, sign-up forms, CTAs, social
                  proof -- anything that tells your story.
                </p>

                {/* Placeholder CTA buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-6 py-3 rounded-lg bg-purple-400/20 border border-purple-400/30 text-purple-400 text-sm font-medium">
                    Primary CTA
                  </div>
                  <div className="px-6 py-3 rounded-lg border border-white/30 text-white/60 text-sm font-medium">
                    Secondary CTA
                  </div>
                </div>
              </div>
            </div>

            {/* Right -- 3D Canvas section */}
            <div className="relative min-h-[400px]">
              {/* Annotation label */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/20">
                <AnnotationDot />
                <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest">
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
                      className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/20 text-[11px] text-white/60 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Functionality Description */}
      <section className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900/95 backdrop-blur-md border-2 border-white/30 rounded-xl p-6 md:p-8 space-y-6 shadow-2xl">
            <p className="text-base md:text-lg leading-relaxed text-white/95 font-light">
              A 3D GLTF model rendered with React Three Fiber,
              post-processed into ASCII art using custom GLSL shaders.
            </p>
            
            <div className="space-y-4 pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Interact:</h2>
              <ul className="space-y-3 text-base md:text-lg text-white/90 list-disc list-inside ml-2">
                <li>Hover to increase rotation speed</li>
                <li>Click and drag to rotate manually</li>
                <li>Move mouse for reactive glow effects</li>
              </ul>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Customize:</h2>
              <ul className="space-y-3 text-base md:text-lg">
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">Add your own 3d model</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">Replace public/models/user-model.glb</span>
                </li>
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">Model path & material</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">components/effect-scene.tsx</span>{" "}
                  <span className="text-white/60 text-sm">(line 12, 17)</span>
                </li>
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">ASCII shader settings</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">components/ascii-effect.tsx</span>{" "}
                  <span className="text-white/60 text-sm">(line 188-202)</span>
                </li>
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">Colors, cell size, effects</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">components/ascii-effect.tsx</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/60 mb-3">
                  If you liked using this,{" "}
                  <a
                    href="https://buymeacoffee.com/egorbuilds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline font-medium"
                  >
                    buy me a coffee
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

