import { useState } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';

import { faqs } from '@/services/mockData';
import { Eyebrow } from '../Eyebrow';

export const Faq = () => {
    const [open, setOpen] = useState(0);

    return (
        <section className="section-pad bg-paper grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[100px]">
            <div>
                <Eyebrow>Perguntas frequentes</Eyebrow>
                <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-medium leading-[0.9] tracking-[-0.05em]">
                    Tudo o que precisa<br /><em className="not-italic">de saber.</em>
                </h2>
                <p className="max-w-[270px] my-7 text-muted leading-relaxed">Se ainda ficou alguma dúvida, estamos sempre disponíveis para ajudar.</p>
                <a href="mailto:ola@dudsbeautyspa.pt" className="text-link">Fale connosco <ArrowUpRight size={15} /></a>
            </div>

            <div className="border-t border-line">
                {faqs.map((faq, idx) => {
                    const isOpen = open === idx;
                    return (
                        <div key={faq.question} className="border-b border-line">
                            <button
                                className="w-full grid grid-cols-[42px_1fr_20px] items-center gap-3.5 py-5 text-left"
                                onClick={() => setOpen(isOpen ? -1 : idx)}
                            >
                                <span className="text-rosewood text-[10px] font-bold">0{idx + 1}</span>
                                <strong className="font-serif text-[24px] font-semibold">{faq.question}</strong>
                                <Plus size={18} className={`text-muted transition-transform duration-200 ${isOpen ? 'rotate-45 text-rosewood' : ''}`} />
                            </button>
                            <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <p className="overflow-hidden max-w-[570px] ml-14 text-muted text-[13px] leading-relaxed pb-5">{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};