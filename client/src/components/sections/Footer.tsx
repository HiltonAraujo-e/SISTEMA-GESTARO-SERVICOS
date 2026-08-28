import { Link } from 'wouter';
import { Instagram, MessageCircle, MapPin, Phone, Clock3, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { BrandMark } from '../Brand';


export const Footer = () => {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        toast.info('Obrigado por subscrever! Em breve receberá novidades.');
    };

    return (
        <footer className="bg-oat border-t border-line pt-14 pb-6 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Grid principal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.9fr_1.3fr_1.3fr] gap-10 pb-12 border-b border-line">
                    {/* Coluna 1: Marca */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 grid place-items-center overflow-hidden relative">
                                <BrandMark />
                                <span className="absolute inset-0 rounded-full border border-current opacity-10 pointer-events-none" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <strong className="font-serif text-lg font-semibold tracking-tight text-[#2d2524]">
                                    Duds
                                </strong>
                                <small className="text-[5.5px] font-bold uppercase tracking-[0.18em] text-[#847a75]">
                                    Beauty Spa
                                </small>
                            </div>
                        </div>
                        <p className="text-ink/75 text-sm leading-relaxed mt-4 mb-5 max-w-xs">
                            Beleza, relaxamento e cuidado<br />com intenção.
                        </p>
                        <div className="flex gap-2">
                            {[
                                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                                { icon: MessageCircle, href: 'mailto:ola@dudsbeautyspa.pt', label: 'WhatsApp' },
                                {
                                    icon: () => (
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    ),
                                    href: '#',
                                    label: 'Facebook',
                                },
                                {
                                    icon: () => (
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                                    className="w-9 h-9 grid place-items-center rounded-full border border-line text-muted hover:border-rosewood hover:text-rosewood hover:bg-blush-soft transition-all duration-200 hover:scale-105"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coluna 2: Navegue */}
                    <div>
                        <h4 className="font-serif text-xl md:text-2xl font-semibold text-rosewood mb-4">Navegue</h4>
                        <ul className="space-y-3">
                            {['Início', 'Sobre', 'Serviços', 'Galeria', 'Contactos'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item === 'Início' ? 'inicio' : item.toLowerCase()}`}
                                        className="text-ink/70 hover:text-rosewood transition-colors text-sm font-medium"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Contacto */}
                    <div>
                        <h4 className="font-serif text-xl md:text-2xl font-semibold text-rosewood mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-ink/80 text-sm">
                                <MapPin size={16} className="text-rosewood flex-none mt-0.5" />
                                <span>Reboleira, Amadora · Lisboa</span>
                            </li>
                            <li className="flex items-center gap-3 text-ink/80 text-sm">
                                <Phone size={16} className="text-rosewood flex-none" />
                                <span>+351 912 345 678</span>
                            </li>
                            <li className="flex items-center gap-3 text-ink/80 text-sm">
                                <MessageCircle size={16} className="text-rosewood flex-none" />
                                <span>ola@dudsbeautyspa.pt</span>
                            </li>
                            <li className="flex items-center gap-3 text-ink/80 text-sm">
                                <Clock3 size={16} className="text-rosewood flex-none" />
                                <span>Ter — Sáb · 09:00 – 19:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl md:text-2xl font-semibold text-rosewood mb-4">Fique a par</h4>
                        <p className="text-ink/75 text-sm mb-4 max-w-xs">
                            Receba novidades e ofertas especiais.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="O seu email"
                                className="flex-1 min-w-[140px] h-11 px-4 rounded-full border border-line bg-paper text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition placeholder:text-muted/60"
                                required
                            />
                            <button
                                type="submit"
                                className="h-11 px-5 rounded-full bg-blush text-ink font-semibold text-xs shadow-[0_4px_14px_rgba(234,196,207,0.3)] hover:bg-[#dbb2be] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,196,207,0.45)] transition-all duration-200 whitespace-nowrap"
                            >
                                Subscrever
                            </button>
                        </form>
                        <p className="text-muted/60 text-[10px] mt-3">Sem spam. Pode cancelar quando quiser.</p>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line text-muted text-xs">
                    <span className="text-ink/60">© 2026 Duds Beauty Spa. Todos os direitos reservados.</span>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/politica-privacidade" className="hover:text-rosewood transition-colors">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos" className="hover:text-rosewood transition-colors">
                            Termos de Uso
                        </Link>
                        <Link href="/ficha-tecnica" className="hover:text-rosewood transition-colors">
                            Ficha Técnica
                        </Link>
                        <Link href="/login" className="hover:text-rosewood transition-colors">
                            Login
                        </Link>
                    </div>
                    <span className="text-rosewood tracking-widest text-xs">
                        PT <span className="text-line px-1">|</span> EN
                    </span>
                </div>
            </div>
        </footer>
    );
};