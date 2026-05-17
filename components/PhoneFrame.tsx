export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ aspectRatio: "9 / 19", maxWidth: 260 }}>
      <div className="absolute inset-0 rounded-[2.2rem] bg-[#111] border border-white/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]" />
      <div className="absolute inset-[6px] rounded-[1.9rem] overflow-hidden bg-black">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/90 border border-white/10 z-10" />
    </div>
  );
}
