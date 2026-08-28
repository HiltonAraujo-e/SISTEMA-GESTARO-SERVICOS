import { Link } from 'wouter';
import { MapPin, Phone, Clock3, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';

export const Contact = () => {
    return (
        <section id="contactos" className="py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-ivory">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho – centralizado em mobile, lado a lado em desktop */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 mb-12 lg:mb-16 text-center lg:text-left">
                    <div>
                        <Eyebrow>Visite-nos</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            Reserve um <span></span>
                            <span className="italic font-light text-rosewood">momento para si.</span>
                        </h2>
                    </div>
                    {/* <p className="max-w-[450px] text-muted text-sm leading-relaxed mx-auto lg:mx-0">
                        Escolha o seu serviço, encontre o melhor horário e deixe o resto connosco.
                    </p> */}
                </div>

                {/* Card do contacto – mapa + info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300 bg-deep">
                    {/* Mapa – com altura fixa em mobile, auto em desktop */}
                    <div className="h-[260px] md:h-[320px] lg:h-auto min-h-[260px] bg-[#ccc] relative overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.676146114176!2d-9.226456684297!3d38.748707879609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecb6a7c26b6b3%3A0x3f3f3f3f3f3f3f3f!2sReboleira%2C%20Amadora%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1690000000000"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            title="Localização"
                        />
                    </div>

                    {/* Informações – com padding responsivo */}
                    <div className="p-6 md:p-8 lg:p-10 xl:p-12 bg-deep text-white flex flex-col justify-center">
                        <Eyebrow light>Estamos aqui</Eyebrow>
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-[34px] font-medium leading-tight mt-1 mb-2">
                            Venha conhecer <br className="hidden sm:inline" />
                            <span className="italic font-light text-blush">o nosso espaço.</span>
                        </h3>
                        <p className="max-w-[300px] text-white/65 text-sm leading-relaxed mb-6">
                            Estamos localizados na Reboleira, com fácil acesso e um ambiente acolhedor.
                        </p>

                        {/* Grid de informações – 2 colunas em tablet, 1 em mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                            {[
                                { icon: MapPin, label: 'Morada', value: 'Reboleira, Amadora\nLisboa, Portugal' },
                                { icon: Phone, label: 'Telefone', value: '+351 912 345 678' },
                                { icon: Clock3, label: 'Horário', value: 'Ter — Sáb · 09:00 – 19:00' },
                                { icon: MessageCircle, label: 'Email', value: 'ola@dudsbeautyspa.pt' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-start gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blush/20 transition-colors">
                                        <Icon className="text-blush" size={16} />
                                    </div>
                                    <div>
                                        <span className="block text-white/50 text-[9px] font-bold tracking-[0.14em] uppercase">
                                            {label}
                                        </span>
                                        <strong className="font-serif text-base md:text-lg lg:text-[19px] font-medium leading-tight whitespace-pre-line">
                                            {value}
                                        </strong>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/book" className="mt-6 md:mt-8 self-start">
                            <Button variant="blush" className="min-h-[44px] px-6">
                                Agendar serviço <ArrowUpRight size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};