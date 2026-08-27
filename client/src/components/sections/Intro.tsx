import { Heart, Leaf, Award, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { Eyebrow } from '../Eyebrow';

export const Intro = () => {
    return (
        <section
            id="sobre"
            className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-paper"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                {/* Texto */}
                <div>
                    <Eyebrow>Sobre o Duds</Eyebrow>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                        Um espaço pensado<br />
                        <span className="italic font-light">para cuidar de si.</span>
                    </h2>
                    <p className="max-w-lg mt-6 text-ink/80 text-base md:text-lg font-medium leading-relaxed">
                        Combinamos técnica, escuta e bem-estar para que cada visita seja um verdadeiro momento de pausa, adaptado ao seu ritmo e às suas necessidades.
                    </p>
                    <blockquote className="relative max-w-lg mt-8 pl-7 border-l-[3px] border-blush font-serif text-xl md:text-2xl font-semibold italic leading-snug text-[#3d302f]">
                        <span className="absolute -top-5 left-1 font-serif text-5xl not-italic text-blush">“</span>
                        O verdadeiro luxo é o tempo que dedica a si própria.
                    </blockquote>
                    <div className="flex flex-wrap gap-6 md:gap-8 mt-8 py-5 border-y border-line">
                        <div>
                            <strong className="font-serif text-3xl md:text-4xl font-bold text-[#3d302f]">5+</strong>
                            <span className="block text-muted text-xs md:text-sm font-bold">Anos de experiência</span>
                        </div>
                        <div>
                            <strong className="font-serif text-3xl md:text-4xl font-bold text-[#3d302f]">500+</strong>
                            <span className="block text-muted text-xs md:text-sm font-bold">Clientes satisfeitas</span>
                        </div>
                        <div>
                            <strong className="font-serif text-3xl md:text-4xl font-bold text-[#3d302f]">12</strong>
                            <span className="block text-muted text-xs md:text-sm font-bold">Rituais exclusivos</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                        {[
                            { icon: Heart, title: 'Cuidado atento', desc: 'Escutamos antes de tratar, para que cada sessão responda ao que realmente precisa.' },
                            { icon: Leaf, title: 'Ritmos individuais', desc: 'Cada pele e cada pessoa têm o seu tempo — respeitamo-lo em cada ritual.' },
                            { icon: Award, title: 'Equipa especializada', desc: 'Profissionais com formação contínua nas técnicas mais reconhecidas.' },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex flex-col gap-1">
                                <Icon className="text-rosewood" size={20} />
                                <strong className="font-serif text-lg font-bold text-[#3d302f]">{title}</strong>
                                <span className="text-muted text-sm leading-relaxed">{desc}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Visual – grid assimétrica de imagens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto min-h-[300px] md:min-h-[500px] lg:min-h-[620px]">
                    {/* Coluna da esquerda (duas imagens empilhadas) */}
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 rounded-[60px_20px_20px_20px] overflow-hidden shadow-soft hover:scale-[1.02] transition-transform duration-500 bg-oat">
                            <img
                                src="/img/welcome.jpg"
                                alt="Interior acolhedor"
                                className="w-full h-full object-cover saturate-[0.9]"
                            />
                        </div>
                        <div className="flex-1 rounded-[20px_20px_20px_60px] overflow-hidden shadow-soft hover:scale-[1.02] transition-transform duration-500 bg-oat">
                            <img
                                src="/img/exp1.jpg"
                                alt="Sala de tratamentos"
                                className="w-full h-full object-cover saturate-[0.9]"
                            />
                        </div>
                    </div>
                    {/* Coluna da direita (imagem única, mais alta) */}
                    <div className="h-full rounded-[20px_60px_20px_20px] overflow-hidden shadow-soft hover:scale-[1.02] transition-transform duration-500 bg-oat">
                        <img
                            src="/img/spaTime.jpg"
                            alt="Detalhe de ritual"
                            className="w-full h-full object-cover saturate-[0.9]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};