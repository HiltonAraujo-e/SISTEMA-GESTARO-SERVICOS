import { Link } from 'wouter';
import { MapPin, Phone, Clock3, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';


export const Contact = () => {
    return (
        <section className="section-pad bg-ivory" id="contactos">
            <div className="mb-14">
                <Eyebrow>Visite-nos</Eyebrow>
                <h2 className="font-serif text-[clamp(49px,5.4vw,72px)] font-medium leading-[0.9] tracking-[-0.05em] mt-3">
                    Reserve um<br /><em className="not-italic">momento para si.</em>
                </h2>
                <p className="max-w-[450px] text-muted text-sm leading-relaxed mt-4">Escolha o seu serviço, encontre o melhor horário e deixe o resto connosco.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden min-h-[420px] bg-deep">
                {/* Mapa */}
                <div className="h-[260px] lg:h-auto min-h-[260px] bg-[#ccc]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.676146114176!2d-9.226456684297!3d38.748707879609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecb6a7c26b6b3%3A0x3f3f3f3f3f3f3f3f!2sReboleira%2C%20Amadora%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1690000000000"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        title="Localização"
                    />
                </div>

                {/* Informações */}
                <div className="p-[50px_45px] lg:p-12 bg-deep text-white flex flex-col justify-center">
                    <Eyebrow light>Estamos aqui</Eyebrow>
                    <h3 className="font-serif text-[34px] font-medium leading-tight mt-2 mb-3">Venha conhecer<br />o nosso espaço.</h3>
                    <p className="max-w-[300px] text-white/65 text-sm leading-relaxed mb-7">Estamos localizados na Reboleira, com fácil acesso e um ambiente acolhedor.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { icon: MapPin, label: 'Morada', value: 'Reboleira, Amadora\nLisboa, Portugal' },
                            { icon: Phone, label: 'Telefone', value: '+351 912 345 678' },
                            { icon: Clock3, label: 'Horário', value: 'Ter — Sáb · 09:00 – 19:00' },
                            { icon: MessageCircle, label: 'Email', value: 'ola@dudsbeautyspa.pt' },
                        ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-3">
                                <Icon className="text-blush mt-0.5 flex-none" size={18} />
                                <div>
                                    <span className="block text-white/50 text-[9px] font-bold tracking-[0.14em] uppercase">{label}</span>
                                    <strong className="font-serif text-[19px] font-medium leading-tight whitespace-pre-line">{value}</strong>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/book" className="mt-8 self-start">
                        <Button variant="blush">Agendar serviço <ArrowUpRight size={16} /></Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};