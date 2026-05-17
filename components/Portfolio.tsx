"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { projects } from "@/lib/projects";
import { PhoneFrame } from "./PhoneFrame";

function Card({ p, lang, view }: { p: (typeof projects)[number]; lang: "en" | "ka"; view: string }) {
  const meta = p[lang];
  const isMobile = p.kind === "mobile";
  const isFramedWeb = p.kind === "web" && p.framed;
  const isFloating = isMobile || isFramedWeb;
  return (
    <motion.div whileHover="hover" initial="rest" animate="rest" className="h-full">
      <Link
        href={`/projects/${p.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 h-full"
      >
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={isFloating && p.accent ? { background: `radial-gradient(circle at 50% 40%, ${p.accent}33, transparent 70%), #0f1010` } : undefined}
        >
          {isFloating ? (
            <>
              <img
                src={p.backdrop ?? p.cover}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1 w-full h-full flex items-center justify-center">
                  {isMobile ? (
                    <PhoneFrame src={p.cover} alt={meta.title} className="h-full" />
                  ) : (
                    <div className="w-full max-w-[90%] rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] border border-white/15 bg-white">
                      <img src={p.cover} alt={meta.title} className="w-full block" />
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <motion.img
              src={p.cover}
              alt={meta.title}
              variants={{
                rest: { scale: 1, filter: "grayscale(0.6) brightness(0.7)" },
                hover: { scale: 1.08, filter: "grayscale(0) brightness(1)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover"
            />
          )}
          {!isFloating && (
            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/40 to-transparent"
            />
          )}
          <motion.div
            variants={{ rest: { y: 30, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none z-10"
          >
            <span className="text-sm text-white/90 drop-shadow">{view}</span>
            <motion.span
              variants={{ rest: { x: -10 }, hover: { x: 0 } }}
              className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] flex items-center justify-center text-xl shadow-lg"
            >→</motion.span>
          </motion.div>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="min-w-0">
            <div className="text-xl font-semibold truncate">{meta.title}</div>
            <div className="text-sm text-white/50 truncate">{meta.category}</div>
          </div>
          <span className="text-xs font-mono text-white/40 shrink-0 ml-3">{p.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export function Portfolio() {
  const { t, lang } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const slide = el.clientWidth;
      if (!slide) return;
      const i = Math.round(el.scrollLeft / slide);
      setActive(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="relative pt-12 pb-4 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10 md:mb-16 flex-wrap gap-6">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">— {t.portfolio.kicker}</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">
                {t.portfolio.title}
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Desktop / tablet grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Card p={p} lang={lang} view={t.portfolio.view} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden -mx-6">
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((p) => (
              <div key={p.slug} className="snap-center shrink-0 w-full px-6">
                <Card p={p} lang={lang} view={t.portfolio.view} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.slug}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === active ? 28 : 8,
                    backgroundColor: i === active ? "var(--color-accent)" : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous"
                onClick={() => goTo(Math.max(0, active - 1))}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 disabled:opacity-30"
                disabled={active === 0}
              >←</button>
              <button
                aria-label="Next"
                onClick={() => goTo(Math.min(projects.length - 1, active + 1))}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 disabled:opacity-30"
                disabled={active === projects.length - 1}
              >→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
