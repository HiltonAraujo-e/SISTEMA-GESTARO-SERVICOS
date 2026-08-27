import { useState } from 'react';
import { Plus, ArrowUpRight, MessageCircle } from 'lucide-react';
import { faqs } from '@/services/mockData';
import { Eyebrow } from '../Eyebrow';

export const Faq = () => {
    const [open, setOpen] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpen(open === idx ? null : idx);
    };

    return (
        <section id="faq" className="py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-deep">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
                    {/* Coluna esquerda – cabeçalho */}
                    <div>
                        <Eyebrow light>Perguntas frequentes</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2 text-white">
                            Tudo o que precisa<br />
                            <span className="italic font-light text-blush">de saber.</span>
                        </h2>
                        <p className="max-w-[270px] mt-6 text-white/60 leading-relaxed">
                            Se ainda ficou alguma dúvida, estamos sempre disponíveis para ajudar.
                        </p>
                        <a
                            href="mailto:ola@dudsbeautyspa.pt"
                            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blush hover:text-blush/80 hover:gap-3 transition-all duration-200 group"
                        >
                            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                            Fale connosco
                            <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Coluna direita – accordion FAQ */}
                    <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = open === idx;
                            return (
                                <div
                                    key={faq.question}
                                    className={`bg-white/5 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden border border-white/10 hover:border-blush/30 ${isOpen ? 'shadow-soft border-blush/30 bg-white/10' : ''
                                        }`}
                                >
                                    <button
                                        className="w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left group"
                                        onClick={() => toggle(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        {/* Número com círculo */}
                                        <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-blush/20 text-blush text-xs font-bold flex items-center justify-center group-hover:bg-blush/40 transition-colors">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>

                                        {/* Pergunta */}
                                        <strong className={`flex-1 font-serif text-base md:text-lg lg:text-xl font-medium transition-colors ${isOpen ? 'text-blush' : 'text-white/90 group-hover:text-blush'
                                            }`}>
                                            {faq.question}
                                        </strong>

                                        {/* Ícone Plus */}
                                        <Plus
                                            size={20}
                                            className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-45 text-blush' : 'text-white/40 group-hover:text-blush'
                                                }`}
                                        />
                                    </button>

                                    {/* Resposta – com animação de altura */}
                                    <div
                                        className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};