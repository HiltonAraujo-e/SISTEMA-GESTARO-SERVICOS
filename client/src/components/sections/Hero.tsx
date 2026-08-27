import { Link } from 'wouter';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';


export const Hero = () => {
    return (
        <section className="relative min-h-[640px] max-h-[760px] bg-deep text-white grid grid-cols-1 lg:grid-cols-2 overflow-visible">
            {/* Imagem de fundo (lado direito) */}
            <div className="relative col-start-2 h-full min-h-[640px] overflow-hidden">
                <img src="/img/init.jpg" alt="Momento de relaxamento" className="w-full h-full object-cover object-center-[30%] saturate-[0.88]" />
                <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/6 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3 text-white/70 text-[10px] tracking-wider">
                    <span className="text-blush">01</span>
                    <span className="flex-1 border-t border-white/35 pt-2">Um espaço para voltar a si</span>
                </div>
            </div>

            {/* Copy – posicionado sobre a imagem (lado esquerdo) */}
            <div className="absolute left-[13%] top-[20%] w-[46vw] max-w-[560px] translate-x-[-50%] translate-y-[-45%] animate-rise-in text-left z-10">
                <Eyebrow light>Beauty · Body · Wellbeing</Eyebrow>
                <h1 className="font-serif text-[clamp(54px,6vw,86px)] font-medium leading-[0.83] tracking-[-0.055em]">
                    O seu momento<br /><em className="not-italic">de cuidado</em><br />começa aqui.
                </h1>
                <p className="max-w-[370px] mt-10 text-white/75 text-sm leading-relaxed">
                    Descubra uma experiência de beleza, relaxamento e bem-estar pensada para cuidar de si.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                    <Link href="/book"><Button variant="blush">Agendar serviço <ArrowUpRight size={16} /></Button></Link>
                    <a href="#servicos" className="inline-flex items-center gap-2 border border-white/35 text-white bg-white/3 px-5 min-h-[42px] rounded-full text-[11px] font-semibold hover:bg-white/11 hover:border-white transition">
                        Conhecer os serviços <ArrowDownRight size={16} />
                    </a>
                </div>
                <div className="flex flex-wrap gap-2.5 mt-6 text-white/65 text-[10px]">
                    <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blush" />Atendimento personalizado</span>
                    <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blush" />Profissionais especializados</span>
                    <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blush" />Agendamento fácil e seguro</span>
                </div>
            </div>

            {/* Rail lateral direito */}
            <div className="absolute right-8 top-[120px] bottom-9 flex flex-col items-center justify-between text-white/55 text-[9px] tracking-[0.14em] uppercase writing-mode-vertical-rl z-10">
                <span>Reboleira · Amadora · Lisboa</span>
                <div className="w-px h-24 bg-white/35" />
                <span className="text-[9px]">Est. 2026</span>
            </div>
        </section>
    );
};