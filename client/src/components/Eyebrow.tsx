interface EyebrowProps {
    children: React.ReactNode;
    light?: boolean;
    className?: string;
}

export const Eyebrow = ({ children, light, className = '' }: EyebrowProps) => (
    <div className={`flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] uppercase ${light ? 'text-white/80' : 'text-rosewood'} ${className}`}>
        <span className="block w-1.5 h-1.5 rounded-full bg-blush" />
        {children}
    </div>
);