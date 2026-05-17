"use client";

export function Marquee() {
  const items = ["Booking", "Fintech", "E-commerce", "Reservations", "SaaS", "Mobile", "Web"];
  const row = [...items, ...items, ...items];
  return (
    <div className="border-y border-white/10 py-8 overflow-hidden">
      <div className="marquee-track">
        {row.map((s, i) => (
          <div key={i} className="flex items-center gap-16 text-3xl md:text-5xl font-semibold text-white/80">
            <span>{s}</span>
            <span className="text-[var(--color-accent)]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
