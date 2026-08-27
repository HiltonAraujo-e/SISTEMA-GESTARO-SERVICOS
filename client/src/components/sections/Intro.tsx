import { Heart, Leaf, Award, ArrowUpRight } from 'lucide-react';

import { toast } from 'sonner';
import { Eyebrow } from '../Eyebrow';

export const Intro = () => {
    return (
        <section className="section-pad bg-paper grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[clamp(48px,6vw,90px)] items-center">
            {/* Texto */}
            <div>
                <Eyebrow>Sobre o Duds</Eyebrow>
                <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-medium leading-[0.9] tracking-[-0.05em] mt-2">
                    Um espaço pensado<br /><em className="not-italic">para cuidar de si.</em>
                </h2>
                <p className="max-w-[460px] mt-7 text-ink/80 text-[17px] font-medium leading-relaxed">
                    Combinamos técnica, escuta e bem-estar para que cada visita seja um verdadeiro momento de pausa, adaptado ao seu ritmo e às suas necessidades.
                </p>
                <blockquote className="relative max-w-[460px] mt-8 pl-7 border-l-[3px] border-blush font-serif text-[25px] font-semibold italic leading-snug text-[#3d302f]">
                    <span className="absolute -top-5 left-1 font-serif text-[48px] not-italic text-blush">“</span>
                    O verdadeiro luxo é o tempo que dedica a si própria.
                </blockquote>
                <div className="flex gap-8 mt-9 py-5 border-y border-line">
                    <div><strong className="font-serif text-[36px] font-bold text-[#3d302f]">5+</strong><span className="block text-muted text-[11.5px] font-bold">Anos de<br />experiência</span></div>
                    <div><strong className="font-serif text-[36px] font-bold text-[#3d302f]">500+</strong><span className="block text-muted text-[11.5px] font-bold">Clientes<br />satisfeitas</span></div>
                    <div><strong className="font-serif text-[36px] font-bold text-[#3d302f]">12</strong><span className="block text-muted text-[11.5px] font-bold">Rituais<br />exclusivos</span></div>
                </div>
                <div className="flex gap-7 mt-9">
                    {[
                        { icon: Heart, title: 'Cuidado atento', desc: 'Escutamos antes de tratar, para que cada sessão responda ao que realmente precisa.' },
                        { icon: Leaf, title: 'Ritmos individuais', desc: 'Cada pele e cada pessoa têm o seu tempo — respeitamo-lo em cada ritual.' },
                        { icon: Award, title: 'Equipa especializada', desc: 'Profissionais com formação contínua nas técnicas mais reconhecidas.' },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="max-w-[165px] flex flex-col gap-2">
                            <Icon className="text-rosewood" size={19} />
                            <strong className="font-serif text-[20px] font-bold text-[#3d302f]">{title}</strong>
                            <span className="text-muted text-[12.5px] font-medium leading-relaxed">{desc}</span>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => toast.info('A nossa história completa estará disponível em breve.')}
                    className="text-link mt-9 text-[13px]"
                >
                    Conheça-nos <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Visual – grid assimétrica */}
            <div className="grid grid-cols-[1fr_1.1fr] gap-5 h-full min-h-[620px]">
                <div className="flex flex-col gap-5 h-full">
                    <div className="flex-1 rounded-[130px_20px_20px_20px] overflow-hidden shadow-soft hover:scale-[1.035] transition-transform duration-500">
                        <img src="/img/welcome.jpg" alt="Interior" className="w-full h-full object-cover saturate-[0.85]" />
                    </div>
                    <div className="flex-1 rounded-[20px_20px_20px_100px] overflow-hidden shadow-soft hover:scale-[1.035] transition-transform duration-500">
                        <img src="/img/exp1.jpg" alt="Sala tratamentos" className="w-full h-full object-cover saturate-[0.85]" />
                    </div>
                </div>
                <div className="h-full rounded-[20px_100px_20px_20px] overflow-hidden shadow-soft hover:scale-[1.035] transition-transform duration-500">
                    <img src="/img/spaTime.jpg" alt="Detalhe ritual" className="w-full h-full object-cover saturate-[0.85]" />
                </div>
            </div>
        </section>
    );
};