import { useState } from 'react';
import { Link } from 'wouter';
import { Clock3, ArrowUpRight } from 'lucide-react';

import { spaServices } from '@/services/mockData';
import { Eyebrow } from '../Eyebrow';

export const Services = () => {
    const [activeCategory, setActiveCategory] = useState<'Todos' | 'Massagens' | 'Beleza'>('Todos');
    const visibleServices = spaServices
        .filter((s) => activeCategory === 'Todos' || s.category === activeCategory)
        .slice(0, 6);

    return (
        <section id="servicos" className="py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-ivory">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho – centralizado em mobile, side‑by‑side em desktop */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 text-center lg:text-left">
                    <div>
                        <Eyebrow>Os nossos serviços</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            Rituais que deixam <span></span>
                            <span className="italic font-light text-rosewood">o corpo respirar.</span>
                        </h2>
                    </div>
                    {/* <p className="max-w-[280px] text-muted leading-relaxed mx-auto lg:mx-0">
                        Escolha o cuidado que combina consigo. Da massagem à manicure, cada serviço é preparado ao detalhe.
                    </p> */}
                </div>

                {/* Filtros – centralizados em mobile, alinhados à esquerda em desktop */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 border-b border-line pb-4">
                    {(['Todos', 'Massagens', 'Beleza'] as const).map((cat) => (
                        <button
                            key={cat}
                            className={`text-sm font-medium relative pb-2 transition-colors ${activeCategory === cat
                                ? 'text-ink font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rosewood'
                                : 'text-muted hover:text-ink'
                                }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid de serviços */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                    {visibleServices.map((service, idx) => (
                        <article
                            key={service.id}
                            className="group bg-paper rounded-xl shadow-[0_8px_28px_rgba(62,44,38,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(62,44,38,0.08)] transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative h-[220px] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover saturate-[0.78] group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 text-white text-[10px] tracking-wider opacity-70">
                                    0{idx + 1}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-serif text-2xl font-semibold leading-[0.95] tracking-tight">
                                        {service.name}
                                    </h3>
                                    <span className="text-rosewood text-sm font-bold whitespace-nowrap">
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
                                        className="inline-flex items-center gap-1 font-bold hover:gap-2 hover:text-rosewood transition-all"
                                    >
                                        Agendar <ArrowUpRight size={14} />
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