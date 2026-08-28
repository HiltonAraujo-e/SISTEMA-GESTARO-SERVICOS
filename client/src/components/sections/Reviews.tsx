import { Star } from 'lucide-react';
import { Eyebrow } from '../Eyebrow';

const reviews = [
    {
        id: '1',
        name: 'Marta Silva',
        avatar: null,
        text: 'Uma experiência transformadora. A massagem terapêutica aliviou tensões que eu carregava há meses.',
        rating: 5,
        date: '12 Jun 2026',
    },
    {
        id: '2',
        name: 'Joana Reis',
        avatar: null,
        text: 'As minhas unhas de gel ficaram perfeitas! A Sofia é uma artista. Recomendo a todas.',
        rating: 5,
        date: '04 Jul 2026',
    },
    {
        id: '3',
        name: 'Ana Pereira',
        avatar: null,
        text: 'A drenagem linfática fez uma diferença enorme no meu bem-estar. Saí de lá leve e renovada.',
        rating: 4,
        date: '18 Ago 2026',
    },
    {
        id: '4',
        name: 'Rita Mendes',
        avatar: null,
        text: 'O ambiente é sereno e a equipa muito atenta. Cada detalhe foi pensado para nos sentir especiais.',
        rating: 5,
        date: '22 Ago 2026',
    },
];

// Pequenas variações — cada cartão "colado" de um jeito ligeiramente diferente
const CARD_STYLE = [
    { rotate: -2.2, tape: -6, lift: 'lg:mt-0' },
    { rotate: 1.6, tape: 5, lift: 'lg:mt-10' },
    { rotate: -1.4, tape: -4, lift: 'lg:mt-3' },
    { rotate: 2, tape: 6, lift: 'lg:mt-12' },
];

const initials = (name: any) =>
    name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w: any) => w[0])
        .join('')
        .toUpperCase();

const average = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
).toFixed(1);

export const Reviews = () => {
    return (
        <section id="depoimentos" className="relative overflow-hidden py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-oat">
            {/* Manchas orgânicas — mesma linguagem da secção Sobre, espelhada */}
            <div aria-hidden className="pointer-events-none absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full bg-blush/40 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-16 w-[360px] h-[360px] rounded-full bg-[#3d302f]/[0.06] blur-[100px]" />

            {/* Textura fina de grão */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: '160px 160px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 text-center lg:text-left">
                    <div>
                        <Eyebrow>Depoimentos</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            O que dizem{' '}
                            <span className="relative inline-block italic font-light text-rosewood">
                                sobre nós
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
                    </div>

                    {/* Selo de média — ecoa o selo "5+ anos" da secção Sobre */}
                    <div className="mx-auto lg:mx-0 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#3d302f] text-blush rotate-[8deg] shadow-soft border border-dashed border-blush/60 flex-shrink-0">
                        <span className="font-serif text-2xl font-bold leading-none">{average}</span>
                        <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={9} fill="#eac4cf" stroke="none" />
                            ))}
                        </div>
                        <span className="mt-1 text-[8px] font-bold tracking-[0.15em] uppercase text-center leading-tight px-2">
                            Média das clientes
                        </span>
                    </div>
                </div>

                {/* Grade de depoimentos — "mural" com cartões colados */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-16 lg:mt-20">
                    {reviews.map((review, index) => {
                        const style = CARD_STYLE[index % CARD_STYLE.length];
                        return (
                            <div
                                key={review.id}
                                className={`relative ${style.lift} animate-fade-in-up`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Fita adesiva */}
                                <span
                                    aria-hidden
                                    className="absolute -top-3 left-1/2 z-10 w-16 h-6 bg-blush/80 shadow-sm"
                                    style={{
                                        transform: `translateX(-50%) rotate(${style.tape}deg)`,
                                        clipPath:
                                            'polygon(4% 0, 96% 0, 100% 100%, 0% 100%)',
                                    }}
                                />

                                <div
                                    className="group relative bg-paper rounded-2xl p-6 pt-8 shadow-card hover:shadow-soft transition-all duration-300 ease-out"
                                    style={{ transform: `rotate(${style.rotate}deg)` }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${style.rotate}deg)`)}
                                >
                                    {/* Aspas decorativas */}
                                    <span className="absolute top-2 right-4 font-serif text-6xl text-blush/70 select-none leading-none">
                                        “
                                    </span>

                                    {/* Avatar + Nome */}
                                    <div className="relative flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-full bg-blush-soft flex items-center justify-center text-rosewood font-serif font-bold text-sm shadow-sm flex-shrink-0">
                                            {review.avatar ? (
                                                <img src={review.avatar} alt={review.name} className="w-full h-full rounded-full object-cover" />
                                            ) : (
                                                initials(review.name)
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <strong className="block text-sm font-semibold text-ink truncate">{review.name}</strong>
                                            <div className="flex items-center gap-0.5 text-rosewood">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} size={13} fill={i < review.rating ? '#a96872' : 'none'} strokeWidth={1.5} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Texto da citação */}
                                    <blockquote className="relative text-sm text-ink/80 leading-relaxed italic">
                                        {review.text}
                                    </blockquote>

                                    {/* Data */}
                                    <span className="relative block text-xs text-muted mt-4 pt-3 border-t border-line">
                                        {review.date}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};