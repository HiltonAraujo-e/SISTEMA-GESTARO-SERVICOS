import { Link } from 'wouter';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';

export const Hero = () => {
    return (
        <section className="relative min-h-[640px] max-h-[760px] bg-deep text-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            {/* Coluna da imagem (sempre ocupa 100% em mobile, ou segunda coluna em desktop) */}
            <div className="relative col-span-1 lg:col-start-2 h-full min-h-[640px] overflow-hidden">
                <img
                    src="/img/init.jpg"
                    alt="Momento de relaxamento"
                    className="w-full h-full object-cover object-[center_30%] saturate-[0.88]"
                />
                {/* Gradiente sobre a imagem (mais forte em mobile) */}
                <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/30 to-transparent lg:via-deep/6" />

                {/* Nota inferior da imagem (escondida em mobile) */}
                <div className="absolute bottom-8 left-8 right-8 hidden lg:flex items-center gap-3 text-white/70 text-[10px] tracking-wider z-10">
                    <span className="text-blush">01</span>
                    <span className="flex-1 border-t border-white/35 pt-2">Um espaço para voltar a si</span>
                </div>
            </div>

            {/* Copy – sobreposto à imagem, responsivo */}
            <div className="absolute inset-0 lg:left-[13%] lg:top-[20%] lg:w-[46vw] lg:max-w-[560px] lg:-translate-x-1/2 lg:-translate-y-[45%] flex flex-col justify-center px-6 md:px-10 lg:px-0 z-20 animate-rise-in text-left max-w-[min(90%,500px)] mx-auto lg:mx-0 lg:max-w-none">
                <Eyebrow light>Beauty · Body · Wellbeing</Eyebrow>
                <h1 className="font-serif text-[clamp(46px,12vw,86px)] lg:text-[clamp(54px,6vw,86px)] font-medium leading-[0.83] tracking-[-0.055em]">
                    O seu momento<br /><em className="not-italic">de cuidado</em><br />começa aqui.
                </h1>
                <p className="max-w-[370px] mt-6 md:mt-10 text-white/80 lg:text-white/75 text-sm md:text-base leading-relaxed">
                    Descubra uma experiência de beleza, relaxamento e bem-estar pensada para cuidar de si.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 mt-6">
                    <Link href="/book" className="w-full sm:w-auto">
                        <Button variant="blush" className="w-full sm:w-auto justify-center">
                            Agendar serviço <ArrowUpRight size={16} />
                        </Button>
                    </Link>
                    <a
                        href="#servicos"
                        className="inline-flex items-center justify-center gap-2 border border-white/35 text-white bg-white/3 px-5 min-h-[42px] rounded-full text-[11px] font-semibold hover:bg-white/11 hover:border-white transition w-full sm:w-auto"
                    >
                        Conhecer os serviços <ArrowDownRight size={16} />
                    </a>
                </div>
                <div className="flex flex-wrap gap-2.5 mt-6 text-white/70 lg:text-white/65 text-[10px]">
                    <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush" />Atendimento personalizado
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush" />Profissionais especializados
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush" />Agendamento fácil e seguro
                    </span>
                </div>
            </div>

            {/* Rail lateral direito (apenas desktop) */}
            <div className="absolute right-8 top-[120px] bottom-9 hidden lg:flex flex-col items-center justify-between text-white/55 text-[9px] tracking-[0.14em] uppercase writing-mode-vertical-rl z-10">
                <span>Reboleira · Amadora · Lisboa</span>
                <div className="w-px h-24 bg-white/35" />
                <span className="text-[9px]">Est. 2026</span>
            </div>
        </section>
    );
};