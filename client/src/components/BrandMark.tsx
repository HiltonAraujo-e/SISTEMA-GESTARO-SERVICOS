import { Link } from 'wouter';

interface BrandMarkProps {
    compact?: boolean;
    className?: string;
}

export const BrandMark = ({ compact = false, className = '' }: BrandMarkProps) => (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
        <div className={`relative grid place-items-center overflow-hidden ${compact ? 'w-9 h-9' : 'w-11 h-11'}`}>
            <img src="/logo.svg" alt="Duds Beauty Spa" className="w-full h-full object-contain" />
            <div className={`absolute rounded-full border border-current opacity-[0.12] ${compact ? 'w-8 h-8' : 'w-9 h-9'}`} />
        </div>
        <div className="flex flex-col leading-tight">
            <strong className={`font-serif font-semibold tracking-tight text-ink ${compact ? 'text-[20px]' : 'text-2xl'}`}>Duds</strong>
            <small className={`text-[6.5px] font-bold uppercase tracking-[0.18em] text-muted ${compact ? 'text-[5.5px]' : ''}`}>Beauty Spa</small>
        </div>
    </Link>
);