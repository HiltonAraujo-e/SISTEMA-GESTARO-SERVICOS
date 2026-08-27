import { Link } from 'wouter';
import { Instagram, MessageCircle, MapPin, Phone, Clock3 } from 'lucide-react';

import { toast } from 'sonner';
import { BrandMark } from '../BrandMark';

export const Footer = () => {
    return (
        <footer className="bg-oat border-t border-line pt-14 pb-6 px-[max(32px,calc((100vw-1180px)/2))]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_0.8fr_1.2fr_1.2fr] gap-10 pb-12 border-b border-line">
                {/* Marca */}
                <div className="md:col-span-2 lg:col-span-1">
                    <BrandMark />
                    <p className="text-ink/75 text-sm leading-relaxed mt-4 mb-5">
                        Beleza, relaxamento e cuidado<br />com intenção.
                    </p>
                    <div className="flex gap-1.5">
                        {[
                            { icon: Instagram, href: 'https://instagram.com' },
                            { icon: MessageCircle, href: 'mailto:ola@dudsbeautyspa.pt' },
                            { icon: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>, href: '#' },
                            { icon: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>, href: '#' },
                        ].map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="w-8 h-8 grid place-items-center rounded-full border border-line text-muted hover:border-rosewood hover:text-rosewood hover:bg-blush-soft transition-colors"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navegue */}
                <div>
                    <h4 className="font-serif text-[22px] font-semibold text-rosewood mb-4">Navegue</h4>
                    <ul className="space-y-3">
                        {['Início', 'Sobre', 'Serviços', 'Galeria', 'Contactos'].map((item) => (
                            <li key={item}>
                                <a href={`#${item === 'Início' ? 'inicio' : item.toLowerCase()}`} className="text-ink/70 hover:text-rosewood transition-colors text-sm">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="font-serif text-[22px] font-semibold text-rosewood mb-4">Contacto</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-ink/80 text-sm"><MapPin size={16} className="text-rosewood flex-none" />Reboleira, Amadora · Lisboa</li>
                        <li className="flex items-center gap-3 text-ink/80 text-sm"><Phone size={16} className="text-rosewood flex-none" />+351 912 345 678</li>
                        <li className="flex items-center gap-3 text-ink/80 text-sm"><MessageCircle size={16} className="text-rosewood flex-none" />ola@dudsbeautyspa.pt</li>
                        <li className="flex items-center gap-3 text-ink/80 text-sm"><Clock3 size={16} className="text-rosewood flex-none" />Ter — Sáb · 09:00 – 19:00</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-serif text-[22px] font-semibold text-rosewood mb-4">Fique a par</h4>
                    <p className="text-ink/75 text-sm mb-4">Receba novidades e ofertas especiais.</p>
                    <form
                        onSubmit={(e) => { e.preventDefault(); toast.info('Obrigado por subscrever! Em breve receberá novidades.'); }}
                        className="flex flex-col sm:flex-row gap-2.5"
                    >
                        <input
                            type="email"
                            placeholder="O seu email"
                            className="flex-1 min-w-[150px] h-[42px] px-3.5 rounded-full border border-line bg-paper text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                            required
                        />
                        <button type="submit" className="h-[42px] px-5 rounded-full bg-blush text-ink font-semibold text-[11px] shadow-[0_4px_14px_rgba(234,196,207,0.3)] hover:bg-[#dbb2be] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,196,207,0.45)] transition-all">
                            Subscrever
                        </button>
                    </form>
                    <p className="text-muted/60 text-[10px] mt-3">Sem spam. Pode cancelar quando quiser.</p>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="flex flex-wrap items-center justify-between gap-5 pt-5 border-t border-line text-muted text-[11px]">
                <span>© 2026 Duds Beauty Spa. Todos os direitos reservados.</span>
                <div className="flex gap-6">
                    <Link href="/politica-privacidade" className="hover:text-rosewood transition-colors">Política de Privacidade</Link>
                    <Link href="/termos" className="hover:text-rosewood transition-colors">Termos de Uso</Link>
                    <Link href="/login" className="hover:text-rosewood transition-colors">Login</Link>
                </div>
                <span className="text-rosewood tracking-widest">PT <i className="not-italic text-line px-1.5">|</i> EN</span>
            </div>
        </footer>
    );
};