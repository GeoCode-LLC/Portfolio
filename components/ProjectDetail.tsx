"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Project, projects } from "@/lib/projects";
import { useLang } from "./LangProvider";
import { Reveal } from "./Reveal";
import { PhoneFrame } from "./PhoneFrame";

export function ProjectDetail({ project }: { project: Project }) {
  const { lang, t } = useLang();
  const meta = project[lang];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="pt-36 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[var(--color-accent)] transition mb-12"
        >
          ← {t.nav.portfolio}
        </Link>

        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            {meta.category} — {project.year}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {meta.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-white/65">{meta.summary}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 overflow-hidden rounded-2xl border border-white/10 relative"
            style={
              (project.kind === "mobile" || project.framed) && project.accent
                ? { background: `radial-gradient(circle at 50% 30%, ${project.accent}33, transparent 70%), #0f1010` }
                : undefined
            }
          >
            {project.kind === "mobile" ? (
              <div className="flex items-center justify-center gap-6 md:gap-10 py-12 md:py-20 aspect-[16/9]">
                {project.gallery.slice(0, 3).map((src, i) => (
                  <div
                    key={src}
                    className="h-full"
                    style={{
                      transform: `translateY(${i === 1 ? "-12px" : i === 0 ? "8px" : "8px"}) rotate(${i === 0 ? -4 : i === 2 ? 4 : 0}deg)`,
                    }}
                  >
                    <PhoneFrame src={src} alt={`${meta.title} ${i + 1}`} className="h-full" />
                  </div>
                ))}
              </div>
            ) : project.framed ? (
              <div className="relative aspect-[16/9]">
                {project.backdrop && (
                  <img src={project.backdrop} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                  <div className="w-full max-w-[1100px] rounded-xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] border border-white/15 bg-white">
                    <img src={project.cover} alt={meta.title} className="w-full block" />
                  </div>
                </div>
              </div>
            ) : (
              <img src={project.cover} alt={meta.title} className="w-full aspect-[16/9] object-cover" />
            )}
          </motion.div>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-3 gap-16">
          <Reveal>
            <div className="space-y-8 text-sm">
              <div>
                <div className="text-white/40 uppercase tracking-wider text-xs mb-2">Client</div>
                <div className="text-white/90">{project.client}</div>
              </div>
              <div>
                <div className="text-white/40 uppercase tracking-wider text-xs mb-2">Role</div>
                <div className="text-white/90">{project.role}</div>
              </div>
              <div>
                <div className="text-white/40 uppercase tracking-wider text-xs mb-2">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full border border-white/15 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                >
                  Visit live site →
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:col-span-2 space-y-6 text-lg text-white/75 leading-relaxed">
              {meta.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {project.kind === "mobile" ? (
          <div
            className="mt-24 rounded-2xl border border-white/10 p-8 md:p-16"
            style={
              project.accent
                ? { background: `radial-gradient(circle at 50% 30%, ${project.accent}22, transparent 70%), #0f1010` }
                : undefined
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {project.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 0.08}>
                  <PhoneFrame src={src} alt={`${meta.title} ${i + 1}`} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : project.framed ? (
          <div
            className="mt-24 rounded-2xl border border-white/10 p-8 md:p-16 relative overflow-hidden"
            style={
              project.accent
                ? { background: `radial-gradient(circle at 50% 30%, ${project.accent}22, transparent 70%), #0f1010` }
                : undefined
            }
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
              {project.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] border border-white/15 bg-white"
                  >
                    <img src={src} alt={`${meta.title} ${i + 1}`} className="w-full block" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-24 grid md:grid-cols-2 gap-6">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-2xl border border-white/10"
                >
                  <img src={src} alt={`${meta.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-32 border-t border-white/10 pt-16">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-8">— Next projects</div>
          <div className="grid md:grid-cols-2 gap-8">
            {others.map((p) => {
              const m = p[lang];
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex items-center justify-between gap-6 p-6 rounded-2xl border border-white/10 hover:border-[var(--color-accent)]/60 transition"
                >
                  <div>
                    <div className="text-xl font-semibold group-hover:text-[var(--color-accent)] transition">{m.title}</div>
                    <div className="text-sm text-white/50">{m.category}</div>
                  </div>
                  <span className="text-2xl transition group-hover:translate-x-1">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
