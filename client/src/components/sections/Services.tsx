import { useState } from 'react';
import { Link } from 'wouter';
import { Clock3, ArrowUpRight, Sparkles } from 'lucide-react';

import { spaServices } from '@/services/mockData';
import { Eyebrow } from '../Eyebrow';

const categories = ['Todos', 'Massagens', 'Beleza'] as const;

export const Services = () => {
    const [activeCategory, setActiveCategory] = useState<'Todos' | 'Massagens' | 'Beleza'>('Todos');
    const visibleServices = spaServices
        .filter((s) => activeCategory === 'Todos' || s.category === activeCategory)
        .slice(0, 6);

    return (
        <section id="servicos" className="relative overflow-hidden py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-ivory">
            {/* Manchas orgânicas — mesma linguagem do resto do site */}
            <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 w-[400px] h-[400px] rounded-full bg-blush/35 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-16 w-[340px] h-[340px] rounded-full bg-[#3d302f]/[0.05] blur-[100px]" />

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
                        <Eyebrow>Os nossos serviços</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            Rituais que deixam{' '}
                            <span className="relative inline-block italic font-light text-rosewood">
                                o corpo respirar
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
                    <p className="max-w-[300px] text-muted text-sm leading-relaxed mx-auto lg:mx-0">
                        Escolha o cuidado que combina consigo. Da massagem à manicure, cada serviço é preparado ao detalhe.
                    </p>
                </div>

                {/* Filtros — pílulas, em vez de sublinhado */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-[#3d302f] text-blush shadow-soft'
                                : 'bg-white/60 text-muted border border-line hover:border-blush hover:text-ink hover:bg-white'
                                }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid de serviços */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {visibleServices.map((service, idx) => (
                        <article
                            key={service.id}
                            className="group relative bg-paper rounded-[28px_28px_28px_10px] shadow-[0_8px_28px_rgba(62,44,38,0.06)] ring-1 ring-transparent hover:ring-blush hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(62,44,38,0.1)] transition-all duration-300 overflow-hidden animate-fade-in-up"
                            style={{ animationDelay: `${idx * 80}ms` }}
                        >
                            {/* Etiqueta "mais pedido" no primeiro serviço — sinal de destaque, não decoração aleatória */}
                            {idx === 0 && (
                                <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1 bg-blush text-[#3d302f] text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                                    <Sparkles size={11} /> Mais pedido
                                </span>
                            )}

                            <div className="relative h-[220px] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover saturate-[0.78] group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#3d302f]/60 to-transparent pointer-events-none" />

                                {/* Número — agora num selo circular, não texto solto */}
                                <span className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white text-[11px] font-bold">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-serif text-2xl font-semibold leading-[0.95] tracking-tight text-[#3d302f]">
                                        {service.name}
                                    </h3>
                                    <span className="flex-shrink-0 bg-blush/40 text-rosewood text-sm font-bold whitespace-nowrap px-2.5 py-1 rounded-full">
                                        {service.price.toLocaleString('pt-PT', {
                                            style: 'currency',
                                            currency: 'EUR',
                                        })}
                                    </span>
                                </div>
                                <p className="min-h-[49px] my-4 text-muted text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between border-t border-line pt-3.5 text-muted text-xs">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock3 size={14} /> {service.duration} min
                                    </span>
                                    <Link
                                        href={`/book?service=${service.id}`}
                                        className="inline-flex items-center gap-1.5 font-bold text-ink hover:gap-2.5 hover:text-rosewood transition-all"
                                    >
                                        Agendar
                                        <span className="w-6 h-6 rounded-full bg-blush/50 flex items-center justify-center group-hover:bg-blush transition-colors">
                                            <ArrowUpRight size={12} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};