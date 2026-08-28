import { Heart, Leaf, Award } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';

export const Intro = () => {
    return (
        <section
            id="sobre"
            className="relative overflow-hidden py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-gradient-to-br from-[#f8efe9] via-[#f9f1ee] to-[#f3e2e6]"
        >
            {/* Manchas orgânicas de cor — tiram o "branco chapado" */}
            <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 w-[460px] h-[460px] rounded-full bg-blush/50 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 w-[380px] h-[380px] rounded-full bg-[#3d302f]/[0.07] blur-[100px]" />

            {/* Textura fina de grão — dá "vida" à superfície */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: '160px 160px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                {/* Texto */}
                <div>
                    <Eyebrow>Sobre o Duds</Eyebrow>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2 text-[#3d302f]">
                        Um espaço pensado<br />
                        <span className="relative inline-block italic font-light">
                            para cuidar de si.
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

                    <p className="max-w-lg mt-6 text-ink/80 text-base md:text-lg font-medium leading-relaxed">
                        Combinamos técnica, escuta e bem-estar para que cada visita seja um verdadeiro momento de pausa, adaptado ao seu ritmo e às suas necessidades.
                    </p>

                    <blockquote className="relative max-w-lg mt-8 -rotate-1 rounded-[28px] border-l-[3px] border-blush bg-blush/25 px-8 py-7 shadow-soft">
                        <span className="absolute -top-7 left-5 font-serif text-7xl text-blush select-none">“</span>
                        <p className="relative font-serif text-xl md:text-2xl font-semibold italic leading-snug text-[#3d302f]">
                            O verdadeiro luxo é o tempo que dedica a si própria.
                        </p>
                    </blockquote>

                    <div className="flex flex-wrap gap-8 md:gap-10 mt-8 py-5 border-y border-line">
                        <div>
                            <strong className="font-serif text-3xl md:text-4xl font-bold text-[#3d302f]">500+</strong>
                            <span className="block text-muted text-xs md:text-sm font-bold">Clientes satisfeitas</span>
                        </div>
                        <span aria-hidden className="self-center text-blush text-xl">✦</span>
                        <div>
                            <strong className="font-serif text-3xl md:text-4xl font-bold text-[#3d302f]">12</strong>
                            <span className="block text-muted text-xs md:text-sm font-bold">Rituais exclusivos</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
                        {[
                            { icon: Heart, title: 'Cuidado atento', desc: 'Escutamos antes de tratar, para que cada sessão responda ao que realmente precisa.' },
                            { icon: Leaf, title: 'Ritmos individuais', desc: 'Cada pele e cada pessoa têm o seu tempo — respeitamo-lo em cada ritual.' },
                            { icon: Award, title: 'Equipa especializada', desc: 'Profissionais com formação contínua nas técnicas mais reconhecidas.' },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="group flex flex-col gap-3 rounded-2xl border border-blush/40 bg-white/50 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blush hover:bg-white/80 hover:shadow-soft"
                            >
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blush/70 text-[#3d302f] transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={18} strokeWidth={1.75} />
                                </span>
                                <strong className="font-serif text-lg font-bold text-[#3d302f]">{title}</strong>
                                <span className="text-muted text-sm leading-relaxed">{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual – grid assimétrica de imagens + selo decorativo */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto min-h-[300px] md:min-h-[500px] lg:min-h-[620px]">
                    {/* Selo "5+ anos" — elemento-assinatura */}
                    <div className="absolute -top-5 -left-5 z-20 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-[#3d302f] text-blush rotate-[-10deg] shadow-soft border border-dashed border-blush/60">
                        <span className="font-serif text-3xl font-bold leading-none">5+</span>
                        <span className="mt-1 text-[9px] font-bold tracking-[0.2em] uppercase text-center leading-tight px-2">
                            Anos de<br />cuidado
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 rounded-[60px_20px_20px_20px] overflow-hidden shadow-soft ring-1 ring-blush/30 hover:scale-[1.02] transition-transform duration-500 bg-oat">
                            <img
                                src="/img/welcome.jpg"
                                alt="Interior acolhedor"
                                className="w-full h-full object-cover saturate-[0.9]"
                            />
                        </div>
                        <div className="flex-1 rounded-[20px_20px_20px_60px] overflow-hidden shadow-soft ring-1 ring-blush/30 hover:scale-[1.02] transition-transform duration-500 bg-oat">
                            <img
                                src="/img/exp1.jpg"
                                alt="Sala de tratamentos"
                                className="w-full h-full object-cover saturate-[0.9]"
                            />
                        </div>
                    </div>

                    <div className="h-full rounded-[20px_60px_20px_20px] overflow-hidden shadow-soft ring-1 ring-blush/30 hover:scale-[1.02] transition-transform duration-500 bg-oat">
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