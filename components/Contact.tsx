"use client";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { motion } from "framer-motion";

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="relative py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">— {t.contact.kicker}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-white/65 max-w-md">{t.contact.body}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 space-y-2 text-sm">
              <a href="mailto:hello@geocode.studio" className="block text-white/80 hover:text-[var(--color-accent)] transition">
                hello@geocode.studio
              </a>
              <div className="text-white/50">Tbilisi · Remote worldwide</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}
            className="space-y-5"
          >
            {[
              { id: "name", label: t.contact.name, type: "text" },
              { id: "email", label: t.contact.email, type: "email" },
            ].map((f) => (
              <div key={f.id} className="relative">
                <input
                  required
                  type={f.type}
                  id={f.id}
                  placeholder={f.label}
                  className="peer w-full bg-transparent border-b border-white/15 py-4 text-base placeholder:text-white/40 focus:outline-none focus:border-[var(--color-accent)] transition"
                />
              </div>
            ))}
            <textarea
              required
              rows={5}
              placeholder={t.contact.message}
              className="w-full bg-transparent border-b border-white/15 py-4 text-base placeholder:text-white/40 focus:outline-none focus:border-[var(--color-accent)] transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 inline-flex items-center gap-3 bg-[var(--color-accent)] text-[var(--color-ink)] px-7 py-4 rounded-full font-semibold text-sm"
            >
              {t.contact.send} →
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
