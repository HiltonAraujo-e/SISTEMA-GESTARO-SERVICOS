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
        <section className="section-pad bg-ivory" id="servicos">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                <div>
                    <Eyebrow>Os nossos serviços</Eyebrow>
                    <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-medium leading-[0.9] tracking-[-0.05em]">
                        Rituais que deixam<br /><em className="not-italic">o corpo respirar.</em>
                    </h2>
                </div>
                <p className="max-w-[280px] text-muted leading-relaxed">
                    Escolha o cuidado que combina consigo. Da massagem à manicure, cada serviço é preparado ao detalhe.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-between mt-14 border-b border-line">
                <div className="flex gap-7">
                    {(['Todos', 'Massagens', 'Beleza'] as const).map((cat) => (
                        <button
                            key={cat}
                            className={`pb-4 text-[12px] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rosewood after:opacity-0 transition-opacity ${activeCategory === cat ? 'font-bold text-ink after:opacity-100' : 'text-muted'}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <Link href="/book" className="text-link">Ver todos <ArrowUpRight size={15} /></Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-6">
                {visibleServices.map((service, idx) => (
                    <article key={service.id} className="bg-paper shadow-card hover:-translate-y-1 hover:shadow-soft transition-all duration-300">
                        <div className="relative h-[220px] overflow-hidden">
                            <img src={service.image} alt={service.name} className="w-full h-full object-cover saturate-[0.78] transition-transform duration-500 group-hover:scale-105" />
                            <span className="absolute top-3.5 left-4 text-white text-[10px] tracking-wider">0{idx + 1}</span>
                        </div>
                        <div className="p-5">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="font-serif text-[25px] font-semibold leading-[0.95] tracking-tight">{service.name}</h3>
                                <span className="text-rosewood text-xs font-bold whitespace-nowrap">{service.price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                            <p className="min-h-[49px] my-4 text-muted text-xs leading-relaxed">{service.description}</p>
                            <div className="flex items-center justify-between border-t border-line pt-3.5 text-muted text-[10px]">
                                <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />{service.duration} min</span>
                                <Link href={`/book?service=${service.id}`} className="inline-flex items-center gap-1 font-bold hover:gap-2 hover:text-rosewood transition-all">Agendar <ArrowUpRight size={14} /></Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 mt-8 pt-6 border-t border-line">
                <span className="text-rosewood text-[10px] font-bold tracking-wider uppercase">Também disponível</span>
                <strong className="font-serif text-[22px] font-semibold mr-auto">Mais serviços de beleza e cuidados pessoais</strong>
                <Link href="/book" className="button button--outline">Explorar a carta <ArrowUpRight size={15} /></Link>
            </div>
        </section>
    );
};