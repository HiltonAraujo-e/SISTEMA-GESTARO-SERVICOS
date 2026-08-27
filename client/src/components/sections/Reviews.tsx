import { useState } from 'react';
import { Star, User } from 'lucide-react';
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

export const Reviews = () => {
    return (
        <section id="depoimentos" className="py-12 md:py-20 lg:py-28 px-6 md:px-12 bg-oat">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho – padrão igual à galeria: Eyebrow à esquerda, título centralizado */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 text-center lg:text-left">
                    <div>
                        <Eyebrow>Depoimentos</Eyebrow>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] mt-2">
                            O que dizem <span></span>
                            <span className="italic font-light text-rosewood">quem nos visita.</span>
                        </h2>
                    </div>
                    {/* <p className="max-w-[350px] text-muted leading-relaxed mx-auto lg:mx-0">
                        Cada opinião é um reflexo do cuidado que colocamos em cada detalhe.
                    </p> */}

                </div>

                {/* Grade de depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-14">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="bg-paper rounded-2xl p-6 shadow-card hover:shadow-soft hover:-translate-y-2 transition-all duration-300 ease-out animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Avatar + Nome */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-blush-soft flex items-center justify-center text-rosewood shadow-sm flex-shrink-0">
                                    {review.avatar ? (
                                        <img src={review.avatar} alt={review.name} className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        <User size={20} />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <strong className="block text-sm font-semibold text-ink truncate">{review.name}</strong>
                                    <div className="flex items-center gap-0.5 text-rosewood">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} size={14} fill={i < review.rating ? '#a96872' : 'none'} strokeWidth={1.5} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Texto da citação */}
                            <blockquote className="text-sm text-ink/80 leading-relaxed italic">
                                “{review.text}”
                            </blockquote>

                            {/* Data */}
                            <span className="block text-xs text-muted mt-4">{review.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};