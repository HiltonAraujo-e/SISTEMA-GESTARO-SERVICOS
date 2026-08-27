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
        <section className="bg-deep text-white py-[110px] px-[max(32px,calc((100vw-1180px)/2))]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[100px]">
                <div className="ritual-copy">
                    <Eyebrow light>Como funciona</Eyebrow>
                    <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-medium leading-[0.9] tracking-[-0.05em]">
                        Escolha o ritual.<br /><em className="not-italic">Nós cuidamos do resto.</em>
                    </h2>
                    <p className="max-w-[310px] my-8 text-white/65 leading-relaxed">
                        O seu tempo é precioso. Por isso, tornámos o agendamento simples, transparente e sem pressa.
                    </p>
                    <Link href="/book" className="text-link--light">Começar o meu agendamento <ArrowUpRight size={16} /></Link>
                </div>

                <div className="border-t border-white/20">
                    {steps.map(([number, title, desc]) => (
                        <div key={number} className="grid grid-cols-[65px_1fr] gap-5 py-5 border-b border-white/20 items-start">
                            <span className="text-blush font-serif text-[22px]">{number}</span>
                            <div>
                                <h3 className="font-serif text-[27px] font-medium leading-tight mt-0.5 mb-1.5">{title}</h3>
                                <p className="text-white/55 text-xs">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};