// Quiet Luxury Ritual reminder: trust is earned through verified voices, so this component never invents reviews or ratings.
import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/Brand";
import type { CustomerReview } from "@/services/mockData";

export default function ReviewsSection({ reviews }: { reviews: CustomerReview[] }) {
  const publishableReviews = reviews.filter((review) => review.consentToPublish && review.text.trim().length > 0);
  const [index, setIndex] = useState(0);
  const review = publishableReviews[index];

  return <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-title"><div className="reviews-header"><div><Eyebrow>Palavras de cuidado</Eyebrow><h2 id="reviews-title">A experiência<br /><em>fala por si.</em></h2></div><p>Partilhamos apenas opiniões autorizadas pelas nossas clientes, com respeito pelo seu tempo e privacidade.</p></div>{review ? <div className="reviews-stage"><MessageCircle size={30} className="reviews-quote" /><blockquote>“{review.text}”</blockquote><div className="review-meta"><strong>{review.displayName}</strong><span>{review.serviceName} · {review.publishedAt}</span></div><div className="reviews-controls"><span>{String(index + 1).padStart(2, "0")} <i>/</i> {String(publishableReviews.length).padStart(2, "0")}</span><div><button aria-label="Avaliação anterior" onClick={() => setIndex((index - 1 + publishableReviews.length) % publishableReviews.length)}><ArrowLeft size={16} /></button><button aria-label="Próxima avaliação" onClick={() => setIndex((index + 1) % publishableReviews.length)}><ArrowRight size={16} /></button></div></div></div> : <div className="reviews-empty"><div className="reviews-empty-mark"><Sparkles size={18} /></div><div><span>Em breve</span><h3>As primeiras opiniões<br /><em>serão partilhadas aqui.</em></h3><p>Esta área está pronta para receber avaliações reais e autorizadas das clientes Duds Beauty Spa.</p></div><div className="reviews-empty-line" /></div>}</section>;
}
