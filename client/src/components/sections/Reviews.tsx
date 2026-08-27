import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import { customerReviews } from '@/services/mockData';
import { Eyebrow } from '../Eyebrow';

export const Reviews = () => {
    const [index, setIndex] = useState(0);
    const review = customerReviews[index];

    return (
        <section className="section-pad bg-oat">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                <div>
                    <Eyebrow>Depoimentos</Eyebrow>
                    <h2 className="font-serif text-[clamp(49px,5.4vw,72px)] font-medium leading-[0.9] tracking-[-0.05em]">
                        O que dizem<br /><em className="not-italic">quem nos visita.</em>
                    </h2>
                </div>
                <p className="max-w-[330px] text-muted text-sm leading-relaxed mb-1">
                    Cada opinião é um reflexo do cuidado que colocamos em cada detalhe.
                </p>
            </div>

            <div className="relative min-h-[275px] flex flex-col lg:flex-row items-center gap-7 mt-14 p-[45px_50px] bg-paper shadow-card">
                <div className="flex-1">
                    <div className="flex items-center gap-1 text-rosewood mb-4">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill={i < (review?.rating || 0) ? '#a96872' : 'none'} />)}
                    </div>
                    <blockquote className="font-serif text-[clamp(31px,4vw,49px)] font-medium italic leading-[0.98]">
                        “{review?.text}”
                    </blockquote>
                    <div className="mt-4">
                        <strong className="text-[11px]">{review?.name}</strong>
                        <span className="block text-muted text-[10px]">{review?.date}</span>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-4 self-stretch justify-between">
                    <span className="text-muted text-[10px]">{index + 1} / {customerReviews.length}</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setIndex((i) => (i === 0 ? customerReviews.length - 1 : i - 1))}
                            className="w-8 h-8 grid place-items-center border border-line hover:border-rosewood hover:text-rosewood transition-colors"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => setIndex((i) => (i === customerReviews.length - 1 ? 0 : i + 1))}
                            className="w-8 h-8 grid place-items-center border border-line hover:border-rosewood hover:text-rosewood transition-colors"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};