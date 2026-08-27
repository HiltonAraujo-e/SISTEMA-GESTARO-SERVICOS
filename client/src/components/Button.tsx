import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'blush' | 'dark' | 'light' | 'outline' | 'ghost-light';
    className?: string;
    [key: string]: any;
}

export const Button = ({ children, variant = 'blush', className = '', ...props }: ButtonProps) => {
    const base = 'inline-flex items-center justify-center gap-2 min-h-[42px] px-5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer';
    const variants = {
        blush: 'bg-blush text-ink shadow-[0_5px_18px_rgba(234,196,207,0.25)] hover:bg-[#e5b7c5] hover:shadow-[0_8px_22px_rgba(234,196,207,0.4)]',
        dark: 'bg-deep text-white hover:bg-[#5a4544]',
        light: 'bg-white/90 text-deep hover:bg-white',
        outline: 'border border-line text-ink hover:border-rosewood hover:text-rosewood bg-transparent',
        'ghost-light': 'border border-white/35 text-white bg-white/3 hover:bg-white/11 hover:border-white',
    };
    return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};