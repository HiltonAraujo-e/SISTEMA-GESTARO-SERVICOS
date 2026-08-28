import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';

export const Ritual = () => {
    const steps = [
        ['01', 'Escolha o serviço', 'Encontre o cuidado que procura.'],
        ['02', 'Escolha o horário', 'Veja datas e horas disponíveis.'],
        ['03', 'Faça a entrada', 'Reserve com 10% ou 20% do valor.'],
        ['04', 'Receba a confirmação', 'A equipa analisa e confirma por email.'],
    ];

    return (
        <section className="bg-deep text-white py-16 md:py-24 lg:py-28 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
                {/* Coluna esquerda – copy */}
                <div>
                    <Eyebrow light>Como funciona</Eyebrow>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                        Escolha o ritual e<br />
                        <span className="italic font-light text-blush">nós cuidamos do resto</span>
                    </h2>
                    <p className="max-w-xs md:max-w-sm mt-6 text-white/70 text-base leading-relaxed">
                        O seu tempo é precioso. Por isso, tornámos o agendamento simples, transparente e sem pressa.
                    </p>
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-2 mt-8 min-h-[44px] px-6 rounded-full text-sm font-semibold bg-blush text-ink shadow-[0_4px_14px_rgba(234,196,207,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(234,196,207,0.4)] transition-all duration-200"
                    >
                        Começar o meu agendamento <ArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Coluna direita – steps */}
                <div className="border-t border-white/20 pt-6 lg:pt-0 lg:border-t-0">
                    {steps.map(([number, title, desc]) => (
                        <div
                            key={number}
                            className="grid grid-cols-[55px_1fr] md:grid-cols-[65px_1fr] gap-4 md:gap-5 py-4 md:py-5 border-b border-white/10 last:border-0 items-start"
                        >
                            <span className="text-blush font-serif text-xl md:text-[22px] font-medium">
                                {number}
                            </span>
                            <div>
                                <h3 className="font-serif text-xl md:text-2xl lg:text-[27px] font-medium leading-tight">
                                    {title}
                                </h3>
                                <p className="text-white/50 text-xs md:text-sm leading-relaxed mt-1">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};