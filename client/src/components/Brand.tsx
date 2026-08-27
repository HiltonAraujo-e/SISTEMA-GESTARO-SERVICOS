// Quiet Luxury Ritual reminder: brand assets are editorial, tactile, and never default-system in appearance.
import { Link } from "wouter";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} aria-label="Duds Beauty Spa — início">
      <span className="brand-mark"><img src="/img/logo-duds.png" alt="" /></span>
      <span className="brand-wordmark"><strong>Duds</strong><small>BEAUTY SPA</small></span>
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}><span />{children}</p>;
}
