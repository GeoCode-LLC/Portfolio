"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setAnimate(!sessionStorage.getItem("geocode_hero_played"));
    sessionStorage.setItem("geocode_hero_played", "1");
  }, []);

  const word = (text: string, delay = 0) => (
    <span className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: "0.15em" }}>
      <motion.span
        className="inline-block"
        initial={animate ? { y: "110%", opacity: 0 } : false}
        animate={animate ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated bg blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,255,62,0.25), transparent 60%)" }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(122,240,196,0.18), transparent 60%)" }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={animate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 mb-8"
        >
          <span className="w-8 h-px bg-[var(--color-accent)]" />
          {t.hero.eyebrow}
        </motion.div>

        <h1 className="font-display font-semibold leading-[1.1] tracking-tight text-[clamp(2.25rem,7vw,6.5rem)]">
          <div className="py-1">{word(t.hero.title1, 0.2)}</div>
          <div className="py-1 text-[var(--color-accent)]">{word(t.hero.title2, 0.4)}</div>
          <div className="py-1">{word(t.hero.title3, 0.6)}</div>
        </h1>

        <motion.p
          initial={animate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 max-w-2xl text-base md:text-lg text-white/65"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={animate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-[var(--color-accent)] text-[var(--color-ink)] px-7 py-4 rounded-full font-semibold text-sm overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >→</motion.span>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 rounded-full font-semibold text-sm hover:border-white/40 transition"
          >
            {t.hero.ctaAlt}
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={animate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-2 left-6 text-[10px] tracking-[0.4em] uppercase text-white/40 flex items-center gap-3"
        >
          <span>scroll</span>
          <motion.span
            className="block w-px h-10 bg-white/30 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
