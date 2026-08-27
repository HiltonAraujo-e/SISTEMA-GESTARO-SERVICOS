import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';


const gallery = [
    { image: '/img/trans2.jpg', label: 'Spa time', className: 'gallery-small' },
    { image: '/img/app.jpg', label: 'Trancas', className: 'gallery-tall' },
    { image: '/img/trans3.jpg', label: 'Ritual corporal', className: 'gallery-wide' },
    { image: '/img/nasM.jpg', label: 'Massagem', className: 'gallery-wide' },
    { image: '/img/pedras.jpg', label: 'Pedicure', className: 'gallery-tall' },
    { image: '/img/sp.jpg', label: 'Aplicação prótese', className: 'gallery-small' },
    { image: '/img/pedi.jpg', label: 'Aplicação prótese', className: 'gallery-small' },
    { image: '/img/tin.jpg', label: 'Aplicação prótese', className: 'gallery-small' },
    { image: '/img/beaut.jpg', label: 'Spa time', className: 'gallery-small' },
];

export const Gallery = () => {
    return (
        <section className="section-pad" id="galeria">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div>
                    <Eyebrow>A experiência Duds</Eyebrow>
                    <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-medium leading-[0.9] tracking-[-0.05em]">
                        Um lugar para se <br /><em className="not-italic">reencontrar</em>
                    </h2>
                </div>
                <p className="max-w-[350px] text-muted leading-relaxed">Descubra os nossos espaços e momentos captados com a autenticidade que nos define.</p>
            </div>

            <div className="grid grid-cols-[1.15fr_0.68fr_1fr] gap-4 mt-14">
                {gallery.map((item) => (
                    <div
                        key={item.label}
                        className={`relative overflow-hidden group ${item.className === 'gallery-tall' ? 'row-span-2 h-[480px]' :
                                item.className === 'gallery-wide' ? 'h-[500px]' :
                                    'h-[500px]'
                            }`}
                    >
                        <img src={item.image} alt={item.label} className="w-full h-full object-cover saturate-[0.75] group-hover:scale-[1.035] group-hover:saturate-100 transition-all duration-500" />
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white text-[10px] tracking-wider uppercase">
                            <span>{item.label}</span>
                            <ArrowUpRight size={16} />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 to-transparent" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};