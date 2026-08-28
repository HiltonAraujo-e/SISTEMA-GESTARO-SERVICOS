import { Link } from 'wouter';
import { Instagram, MessageCircle, MapPin, Phone, Clock3 } from 'lucide-react';
import { toast } from 'sonner';
import { BrandMark } from '../Brand';


const PRIMARY = '#3d302f';
const ACCENT = '#eac4cf';

export const Footer = () => {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        toast.info('Obrigado por subscrever! Em breve receberá novidades.');
    };

    return (
        <footer className="relative bg-oat border-t border-line pt-12 sm:pt-16 pb-6 px-5 sm:px-8 md:px-12 overflow-hidden">
            {/* Brilho decorativo — elemento de assinatura, discreto e único */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full blur-3xl opacity-40"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Linha divisória com gradiente na cor de detalhe */}
                <div
                    className="h-px w-full mb-10 sm:mb-14"
                    style={{
                        background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
                    }}
                />

                {/* Grid principal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.9fr_1.3fr_1.3fr] gap-y-10 gap-x-8 sm:gap-x-10 pb-10 sm:pb-12 border-b border-line">
                    {/* Coluna 1: Marca */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5">
                            <div className="w-11 h-11 grid place-items-center overflow-hidden relative rounded-full ring-1 ring-[color:var(--accent)]" style={{ ['--accent' as any]: ACCENT }}>
                                <BrandMark />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <strong
                                    className="font-serif text-lg sm:text-xl font-semibold tracking-tight"
                                    style={{ color: PRIMARY }}
                                >
                                    Duds
                                </strong>
                                <small className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#847a75]">
                                    Beauty Spa
                                </small>
                            </div>
                        </div>
                        <p className="text-ink/75 text-sm leading-relaxed mt-4 mb-5 max-w-xs">
                            Beleza, relaxamento e cuidado<br className="hidden sm:block" /> com intenção.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {[
                                { icon: Instagram, href: 'https://www.instagram.com/dudsbeautyspa', label: 'Instagram' },
                                { icon: MessageCircle, href: 'mailto:silhuetajovial@gmail.com', label: 'WhatsApp' },
                                {
                                    icon: () => (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    ),
                                    href: '#',
                                    label: 'Facebook',
                                },
                                {
                                    icon: () => (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                        </svg>
                                    ),
                                    href: '#',
                                    label: 'YouTube',
                                },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="group w-10 h-10 grid place-items-center rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ borderColor: 'var(--line, #e5ded9)', color: PRIMARY }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = ACCENT;
                                        e.currentTarget.style.borderColor = ACCENT;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = '';
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coluna 2: Navegue */}
                    <div>
                        <h4
                            className="font-serif text-lg sm:text-xl font-semibold mb-4"
                            style={{ color: PRIMARY }}
                        >
                            Navegue
                        </h4>
                        <ul className="space-y-3">
                            {['Início', 'Sobre', 'Serviços', 'Galeria', 'Contactos'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item === 'Início' ? 'inicio' : item.toLowerCase()}`}
                                        className="text-ink/70 hover:text-[--hover] transition-colors text-sm font-medium"
                                        style={{ ['--hover' as any]: PRIMARY }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Contacto */}
                    <div>
                        <h4
                            className="font-serif text-lg sm:text-xl font-semibold mb-4"
                            style={{ color: PRIMARY }}
                        >
                            Contacto
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-ink/80 text-sm">
                                <MapPin size={16} className="flex-none mt-0.5" style={{ color: PRIMARY }} />
                                <span>Reboleira, Amadora · Lisboa</span>
                            </li>
                            <li className="flex items-center gap-3 text-ink/80 text-sm">
                                <Phone size={16} className="flex-none" style={{ color: PRIMARY }} />
                                <span>+351 912 345 678</span>
                            </li>
                            <li className="flex items-center gap-3 text-ink/80 text-sm">
                                <MessageCircle size={16} className="flex-none" style={{ color: PRIMARY }} />
                                <span>ola@dudsbeautyspa.pt</span>
                            </li>
                            <li className="flex items-center gap-3 text-ink/80 text-sm">
                                <Clock3 size={16} className="flex-none" style={{ color: PRIMARY }} />
                                <span>Ter — Sáb · 09:00 – 19:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Newsletter */}
                    <div>
                        <h4
                            className="font-serif text-lg sm:text-xl font-semibold mb-4"
                            style={{ color: PRIMARY }}
                        >
                            Fique a par
                        </h4>
                        <p className="text-ink/75 text-sm mb-4 max-w-xs">
                            Receba novidades e ofertas especiais.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                            <input
                                type="email"
                                placeholder="O seu email"
                                required
                                className="box-border appearance-none flex-1 w-full min-w-0 h-12 sm:h-11 px-4 rounded-full border bg-paper text-sm leading-normal outline-none transition placeholder:text-muted/60 focus:ring-2"
                                style={{
                                    height: '48px',
                                    borderColor: '#e5ded9',
                                    ['--tw-ring-color' as any]: `${ACCENT}55`,
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                                onBlur={(e) => (e.currentTarget.style.borderColor = '#e5ded9')}
                            />
                            <button
                                type="submit"
                                className="h-12 sm:h-11 px-5 rounded-full font-semibold text-xs shadow-md transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                                style={{
                                    height: '48px',
                                    backgroundColor: PRIMARY,
                                    color: ACCENT,
                                    boxShadow: `0 6px 18px ${PRIMARY}33`,
                                }}
                            >
                                Subscrever
                            </button>
                        </form>
                        <p className="text-muted/60 text-[10px] mt-3">Sem spam. Pode cancelar quando quiser.</p>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 pt-6 border-t border-line text-muted text-xs text-center sm:text-left">
                    <span className="text-ink/60 order-3 sm:order-1 w-full sm:w-auto">
                        © 2026 Duds Beauty Spa. Todos os direitos reservados.
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 order-2">
                        <Link href="/politica-privacidade" className="hover:text-[--hover] transition-colors" style={{ ['--hover' as any]: PRIMARY }}>
                            Política de Privacidade
                        </Link>
                        <Link href="/termos" className="hover:text-[--hover] transition-colors" style={{ ['--hover' as any]: PRIMARY }}>
                            Termos de Uso
                        </Link>
                        <Link href="/ficha-tecnica" className="hover:text-[--hover] transition-colors" style={{ ['--hover' as any]: PRIMARY }}>
                            Ficha Técnica
                        </Link>
                        <Link href="/login" className="hover:text-[--hover] transition-colors" style={{ ['--hover' as any]: PRIMARY }}>
                            Login
                        </Link>
                    </div>
                    <span className="tracking-widest text-xs order-1 sm:order-3" style={{ color: PRIMARY }}>
                        PT <span className="text-line px-1">|</span> EN
                    </span>
                </div>
            </div>
        </footer>
    );
};