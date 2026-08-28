import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';

const gallery = [
    { image: '/img/trans2.jpg', label: 'Spa time', tall: false },
    { image: '/img/app.jpg', label: 'Trancas', tall: true },
    { image: '/img/trans3.jpg', label: 'Ritual corporal', tall: false },
    { image: '/img/nasM.jpg', label: 'Massagem', tall: false },
    { image: '/img/pedras.jpg', label: 'Pedicure', tall: true },
    { image: '/img/sp.jpg', label: 'Aplicação prótese', tall: false },
    { image: '/img/pedi.jpg', label: 'Aplicação prótese', tall: false },
    { image: '/img/tin.jpg', label: 'Aplicação prótese', tall: false },
    { image: '/img/beaut.jpg', label: 'Spa time', tall: false },
    { image: '/img/unhas_gel.jpg', label: 'Spa time', tall: false },
];

// Cantos assimétricos alternados — a mesma ideia das imagens da secção Sobre
const RADII = [
    'rounded-2xl',
    'rounded-[36px_14px_36px_14px]',
    'rounded-[14px_36px_14px_36px]',
    'rounded-3xl',
];

export const Gallery = () => {
    return (
        <section id="galeria" className="relative overflow-hidden py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-ivory">
            {/* Manchas orgânicas — mesma linguagem do resto do site */}
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 w-[400px] h-[400px] rounded-full bg-blush/35 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 w-[340px] h-[340px] rounded-full bg-[#3d302f]/[0.05] blur-[100px]" />

            {/* Grão fino */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: '160px 160px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 text-center lg:text-left">
                    <div>
                        <Eyebrow>A experiência Duds</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            Um lugar para se{' '}
                            <span className="relative inline-block italic font-light text-rosewood">
                                reencontrar
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
                    <p className="max-w-[320px] text-muted text-sm leading-relaxed mx-auto lg:mx-0">
                        Momentos reais, captados nos nossos espaços
                    </p>
                </div>

                {/* Grid da galeria */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 lg:mt-14 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]">
                    {gallery.map((item, index) => {
                        const rowSpan = item.tall ? 'md:row-span-2' : '';
                        const radius = RADII[index % RADII.length];
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden bg-oat shadow-card transition-all duration-500 hover:shadow-soft animate-fade-in-up ${rowSpan} ${radius}`}
                                style={{ animationDelay: `${index * 60}ms` }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-full object-cover saturate-[0.75] group-hover:scale-[1.06] group-hover:saturate-100 transition-all duration-500 ease-out"
                                />

                                {/* Gradiente inferior, na tonalidade da marca em vez de preto puro */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#3d302f]/75 via-[#3d302f]/20 to-transparent pointer-events-none" />

                                {/* Contorno que acende em blush no hover */}
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 group-hover:ring-blush/80 transition-all duration-500 pointer-events-none" />

                                {/* Cantos de "viewfinder" — aparecem como se estivesse a enquadrar a foto */}
                                <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-blush opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 pointer-events-none" />
                                <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-blush opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 delay-75 pointer-events-none" />
                                <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-blush opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 delay-100 pointer-events-none" />
                                <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-blush opacity-0 translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 delay-150 pointer-events-none" />

                                {/* Legenda */}
                                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between z-10">
                                    <span className="text-white text-[11px] font-semibold tracking-[0.12em] uppercase translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        {item.label}
                                    </span>
                                    <span className="w-8 h-8 rounded-full bg-blush flex items-center justify-center text-[#3d302f] scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 flex-shrink-0">
                                        <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};