"use client";
import { useLang } from "./LangProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between flex-wrap gap-4 text-sm text-white/50">
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <span>© {new Date().getFullYear()} GeoCode — {t.footer.rights}</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
