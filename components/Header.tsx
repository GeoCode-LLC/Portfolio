"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useLang } from "./LangProvider";

export function Header() {
  const { t, lang, setLang } = useLang();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const links = [
    { href: hrefFor("home"), label: t.nav.home },
    { href: hrefFor("services"), label: t.nav.services },
    { href: hrefFor("portfolio"), label: t.nav.portfolio },
    { href: hrefFor("about"), label: t.nav.about },
    { href: hrefFor("contact"), label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? 10 : 22,
          paddingBottom: scrolled ? 10 : 22,
          backgroundColor: scrolled ? "rgba(10,10,11,0.72)" : "rgba(10,10,11,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-white/0"
        style={{ borderColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent" }}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <motion.a
            href={onHome ? "#home" : "/"}
            className="flex items-center gap-3"
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Logo size={scrolled ? 34 : 44} />
            <motion.span
              animate={{ fontSize: scrolled ? "1rem" : "1.25rem" }}
              className="font-semibold tracking-tight"
            >
              Geo<span className="text-[var(--color-accent)]">Code</span>
            </motion.span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group text-sm text-white/70 hover:text-white transition relative"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ka" : "en")}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
              aria-label="Switch language"
            >
              {lang === "en" ? "ქარ" : "EN"}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <div className={`w-5 h-px bg-white mb-1 transition ${open ? "translate-y-1 rotate-45" : ""}`} />
              <div className={`w-5 h-px bg-white transition ${open ? "-translate-y-0 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[var(--color-ink)]/90"
          >
            <nav className="flex flex-col px-6 py-4 gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/80">
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
}
