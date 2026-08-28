import { Link } from 'wouter';
import { MapPin, Phone, Clock3, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';


const WA = (msg: string) =>
    `https://wa.me/351927979040?text=${encodeURIComponent(msg)}`;

export const Contact = () => {
    // Mensagem personalizada
    const whatsappMessage =
        'Olá! Gostaria de agendar um serviço ou saber mais informações sobre a Duds Beauty Spa.';

    return (
        <section
            id="contactos"
            className="relative overflow-hidden py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-ivory"
        >
            {/* Manchas orgânicas */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full bg-blush/35 blur-[100px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-28 -left-24 w-[340px] h-[340px] rounded-full bg-[#3d302f]/[0.05] blur-[100px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 mb-12 lg:mb-16 text-center lg:text-left">
                    <div>
                        <Eyebrow>Visite-nos</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            Reserve um{' '}
                            <span className="relative inline-block italic font-light text-rosewood">
                                momento para si
                                <svg
                                    aria-hidden
                                    viewBox="0 0 220 12"
                                    preserveAspectRatio="none"
                                    className="absolute -bottom-2 left-0 w-full h-3"
                                >
                                    <path
                                        d="M2,7 C40,2 80,10 110,6 C140,2 180,10 218,5"
                                        stroke="#eac4cf"
                                        strokeWidth="5"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-[380px] text-muted text-sm leading-relaxed mx-auto lg:mx-0">
                        Escolha o seu serviço, encontre o melhor horário e deixe o resto
                        connosco.
                    </p>
                </div>

                {/* Card do contacto + botão WhatsApp ao lado (desktop) */}
                <div className="relative">
                    {/* Card: mapa + info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300 bg-deep">
                        {/* Mapa */}
                        <div className="relative h-[260px] md:h-[320px] lg:h-auto min-h-[260px] bg-[#ccc] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.676146114176!2d-9.226456684297!3d38.748707879609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecb6a7c26b6b3%3A0x3f3f3f3f3f3f3f3f!2sReboleira%2C%20Amadora%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1690000000000"
                                className="w-full h-full border-0 grayscale-[15%] contrast-[1.05]"
                                allowFullScreen
                                loading="lazy"
                                title="Localização"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_20px_rgba(61,48,47,0.25)]"
                            />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-white/95 backdrop-blur px-4 py-2.5 rounded-full shadow-soft">
                                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rosewood opacity-60" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rosewood" />
                                </span>
                                <span className="text-xs font-semibold text-ink whitespace-nowrap">
                                    Duds Beauty Spa
                                </span>
                            </div>
                        </div>

                        {/* Informações */}
                        <div className="relative p-6 md:p-8 lg:p-10 xl:p-12 bg-deep text-white flex flex-col justify-center overflow-hidden">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blush/20 blur-[90px]"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
                                style={{
                                    backgroundImage:
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                                    backgroundSize: '160px 160px',
                                }}
                            />
                            <div className="relative">
                                <Eyebrow light>Estamos aqui</Eyebrow>
                                <h3 className="font-serif text-2xl md:text-3xl lg:text-[34px] font-medium leading-tight mt-1 mb-2">
                                    Venha conhecer <br className="hidden sm:inline" />
                                    <span className="italic font-light text-blush">o nosso espaço.</span>
                                </h3>
                                <p className="max-w-[300px] text-white/65 text-sm leading-relaxed mb-6">
                                    Estamos localizados na Reboleira, com fácil acesso e um ambiente
                                    acolhedor.
                                </p>

                                {/* Grid de informações */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pb-6 mb-6 border-b border-white/10">
                                    {[
                                        {
                                            icon: MapPin,
                                            label: 'Morada',
                                            value: 'Reboleira, Amadora\nLisboa, Portugal',
                                        },
                                        { icon: Phone, label: 'Telefone', value: '+351 912 345 678' },
                                        {
                                            icon: Clock3,
                                            label: 'Horário',
                                            value: 'Ter — Sáb · 09:00 – 19:00',
                                        },
                                        {
                                            icon: MessageCircle,
                                            label: 'Email',
                                            value: 'ola@dudsbeautyspa.pt',
                                        },
                                    ].map(({ icon: Icon, label, value }) => (
                                        <div key={label} className="flex items-start gap-3 group">
                                            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blush/20 group-hover:border-blush/40 group-hover:scale-105">
                                                <Icon className="text-blush" size={15} />
                                            </div>
                                            <div>
                                                <span className="block text-white/45 text-[9px] font-bold tracking-[0.14em] uppercase">
                                                    {label}
                                                </span>
                                                <strong className="font-serif text-base md:text-lg lg:text-[19px] font-medium leading-tight whitespace-pre-line">
                                                    {value}
                                                </strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA interno */}
                                <div className="flex items-center gap-5">
                                    <Link href="/book">
                                        <Button variant="blush" className="min-h-[44px] px-6">
                                            Agendar serviço <ArrowUpRight size={16} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botão WhatsApp – apenas ícone, absoluto em desktop, estático em mobile */}
                    <div className="mt-8 flex justify-end lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 z-10">
                        <a
                            href={WA(whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar pelo WhatsApp"
                            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};