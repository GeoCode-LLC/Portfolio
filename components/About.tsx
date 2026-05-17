"use client";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative pt-12 pb-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">— {t.about.kicker}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              {t.about.title}
            </h2>
          </Reveal>
        </div>
        <div className="space-y-12">
          <Reveal delay={0.2}>
            <p className="text-lg text-white/65 leading-relaxed">{t.about.body}</p>
          </Reveal>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {t.about.stats.map((s, i) => (
              <Reveal key={i} delay={0.3 + i * 0.1}>
                <div>
                  <div className="text-4xl font-semibold text-[var(--color-accent)]">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mt-2">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
