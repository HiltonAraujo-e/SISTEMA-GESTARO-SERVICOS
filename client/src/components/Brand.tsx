import { Link } from "wouter";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${compact ? "scale-90" : ""}`}
      aria-label="Duds Beauty Spa — início"
    >

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d302f] text-[#eac4cf] shadow-sm transition-colors hover:bg-[#eac4cf] hover:text-[#3d302f]">
        <span className="font-serif text-xl font-bold tracking-tight">D</span>
      </span>
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-rosewood"
        } flex items-center gap-2`}
    >
      <span className="block h-px w-6 bg-current opacity-40" />
      {children}
    </p>
  );
}