"use client";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">— {t.services.kicker}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16 max-w-3xl">
            {t.services.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {t.services.items.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative h-full bg-[var(--color-ink)] p-8 transition-colors duration-200 ease-out hover:bg-[rgba(200,255,62,0.06)]">
                <div className="flex items-start justify-between mb-12">
                  <span className="text-xs text-white/40 font-mono">0{i + 1}</span>
                  <span className="text-[var(--color-accent)] text-2xl inline-block transition-transform duration-200 ease-out group-hover:rotate-45">+</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 transition-colors duration-200 group-hover:text-[var(--color-accent)]">
                  {s.t}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
