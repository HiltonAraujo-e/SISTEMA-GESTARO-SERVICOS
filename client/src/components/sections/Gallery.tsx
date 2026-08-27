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

export const Gallery = () => {
    return (
        <section id="galeria" className="py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-ivory">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho – centralizado em mobile, side-by-side em desktop */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 text-center lg:text-left">
                    <div>
                        <Eyebrow>A experiência Duds</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            Um lugar para se <span></span>
                            <span className="italic font-light text-rosewood">reencontrar</span>
                        </h2>
                    </div>
                    {/* <p className="max-w-[350px] text-muted leading-relaxed mx-auto lg:mx-0">
                        Descubra os nossos espaços e momentos captados com a autenticidade que nos define.
                    </p> */}
                </div>
                {/* Grid da galeria – sem buracos, com auto-rows e row-span para imagens altas */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 lg:mt-14 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]">
                    {gallery.map((item, index) => {
                        const rowSpan = item.tall ? 'md:row-span-2' : '';
                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden group rounded-xl shadow-card hover:shadow-soft transition-all duration-300 ${rowSpan}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-full object-cover saturate-[0.75] group-hover:scale-[1.04] group-hover:saturate-100 transition-all duration-500"
                                />
                                {/* Gradiente inferior */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                                {/* Legenda */}
                                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white text-xs tracking-wider uppercase z-10">
                                    <span>{item.label}</span>
                                    <ArrowUpRight size={16} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};