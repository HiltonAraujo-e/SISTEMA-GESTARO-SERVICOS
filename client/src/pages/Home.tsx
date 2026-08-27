// Quiet Luxury Ritual reminder: public sections use editorial whitespace, soft structure, and specific invitations instead of generic conversion patterns.
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Phone, Plus, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import { BrandMark, Eyebrow } from "@/components/Brand";
import { SectionHeading } from "@/components/AppUi";
import ReviewsSection from "@/components/ReviewsSection";
import { customerReviews, faqs, spaServices } from "@/services/mockData";

const gallery = [
  { image: "/img/spaTime.jpg", label: "Detalhes", className: "gallery-small" },
  { image: "/img/exp1.jpg", label: "O espaço", className: "gallery-tall" },
  { image: "/img/girls.jpg", label: "Ritual corporal", className: "gallery-wide" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState<"Todos" | "Massagens" | "Beleza">("Todos");
  const visibleServices = spaServices.filter((service) => activeCategory === "Todos" || service.category === activeCategory).slice(0, 6);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return <div className="public-site" id="inicio">
    <SiteHeader />
    <main>
      <section className="hero-section">
        <div className="hero-visual"><img src="/img/init.jpg" alt="Momento de relaxamento num ritual Duds Beauty Spa" /><div className="hero-overlay" /><div className="hero-image-note"><span>01</span><span>Um espaço para voltar a si</span></div></div>
        <div className="hero-copy">
          <Eyebrow light>Beauty · Body · Wellbeing</Eyebrow>
          <h1>O seu momento<br /><em>de cuidado</em><br />começa aqui.</h1>
          <p>Descubra uma experiência de beleza, relaxamento e bem-estar pensada para cuidar de si.</p>
          <div className="hero-actions"><Link href="/book" className="button button--blush">Agendar serviço <ArrowUpRight size={16} /></Link><a href="#servicos" className="button button--ghost-light">Conhecer os serviços <ArrowDownRight size={16} /></a></div>
          <div className="hero-trust"><span><i />Atendimento personalizado</span><span><i />Profissionais especializados</span><span><i />Agendamento fácil e seguro</span></div>
        </div>
        <div className="hero-rail"><span>Reboleira · Amadora · Lisboa</span><div className="vertical-line" /><span className="hero-rail-year">Est. 2026</span></div>
      </section>

      <section className="intro-section section-pad" id="sobre">
        <div className="intro-aside"><span className="section-number">01</span><div className="ritual-line" /><span>O espaço</span></div>
        <div className="intro-body"><Eyebrow>Sobre o Duds</Eyebrow><h2>Um espaço pensado<br /><em>para cuidar de si.</em></h2><p className="intro-lede">No Duds Beauty Spa, cada visita é um convite para abrandar. Criámos um ambiente acolhedor onde técnica, escuta e bem-estar se encontram para que se sinta verdadeiramente acompanhada.</p><div className="intro-meta"><div><strong>01</strong><span>Cuidado atento</span></div><div><strong>02</strong><span>Ritmos individuais</span></div><div><strong>03</strong><span>Resultados que se sentem</span></div></div><button className="text-link text-link--large" onClick={() => toast.info("A nossa história completa estará disponível em breve.")}>Conheça-nos <ArrowUpRight size={16} /></button></div>
        <div className="intro-image"><img src="/img/welcome.jpg" alt="Interior luminoso do Duds Beauty Spa" /><div className="image-caption"><Sparkles size={14} /><span>Reboleira, Amadora</span></div></div>
      </section>

      <section className="services-section section-pad" id="servicos">
        <div className="services-top"><div><Eyebrow>Os nossos serviços</Eyebrow><h2>Rituais que deixam<br /><em>o corpo respirar.</em></h2></div><p>Escolha o cuidado que combina consigo. Da massagem à manicure, cada serviço é preparado ao detalhe.</p></div>
        <div className="service-tabs"><div>{(["Todos", "Massagens", "Beleza"] as const).map((category) => <button key={category} className={activeCategory === category ? "is-active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><Link href="/book" className="text-link">Ver todos <ArrowUpRight size={15} /></Link></div>
        <div className="service-grid">{visibleServices.map((service, index) => <article className="service-card" key={service.id}><div className="service-card-image"><img src={service.image} alt={service.name} /><span>0{index + 1}</span></div><div className="service-card-copy"><div className="service-card-heading"><h3>{service.name}</h3><span className="price">{service.price.toLocaleString("pt-PT", { style: "currency", currency: "EUR" })}</span></div><p>{service.description}</p><div className="service-card-foot"><span><Clock3 size={14} />{service.duration} min</span><Link href={`/book?service=${service.id}`} className="card-action">Agendar <ArrowUpRight size={14} /></Link></div></div></article>)}</div>
        <div className="services-bottom"><span>Também disponível</span><strong>Mais serviços de beleza e cuidados pessoais</strong><Link href="/book" className="button button--outline">Explorar a carta <ArrowUpRight size={15} /></Link></div>
      </section>

      <section className="ritual-section"><div className="ritual-inner"><div className="ritual-copy"><Eyebrow>Como funciona</Eyebrow><h2>Escolha o ritual.<br /><em>Nós cuidamos do resto.</em></h2><p>O seu tempo é precioso. Por isso, tornámos o agendamento simples, transparente e sem pressa.</p><Link href="/book" className="text-link text-link--light">Começar o meu agendamento <ArrowUpRight size={16} /></Link></div><div className="steps-list">{[["01", "Escolha o serviço", "Encontre o cuidado que procura."], ["02", "Escolha o horário", "Veja datas e horas disponíveis."], ["03", "Faça a entrada", "Reserve com 10% ou 20% do valor."], ["04", "Receba a confirmação", "A equipa analisa e confirma por email."]].map(([number, title, description]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>

      <section className="gallery-section section-pad" id="galeria">
        <SectionHeading eyebrow="A experiência Duds"
          title={<>Um lugar para<br /><em>se reencontrar.</em></>}
          body="Texturas suaves, luz natural e detalhes pensados para fazer do cuidado uma experiência completa."
          action={<button className="text-link" onClick={() => toast.info("A galeria completa será adicionada em breve.")}
          >Ver galeria <ArrowUpRight size={15} /></button>} />
        <div className="gallery-grid">
          {gallery.map((item) => <div className={`gallery-item ${item.className}`} key={item.label}>
            <img src={item.image} alt={item.label} />
            <div>
              <span>{item.label}</span>
              <ArrowUpRight size={16} />
            </div>
          </div>)}
        </div>
      </section>

      <ReviewsSection reviews={customerReviews} />

      <section className="faq-section section-pad"><div className="faq-intro"><Eyebrow>Perguntas frequentes</Eyebrow><h2>Tudo o que precisa<br /><em>de saber.</em></h2><p>Se ainda ficou alguma dúvida, estamos sempre disponíveis para ajudar.</p><a className="text-link" href="mailto:ola@dudsbeautyspa.pt">Fale connosco <ArrowUpRight size={15} /></a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>0{index + 1}</span><strong>{faq.question}</strong><Plus size={18} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div></section>

      <section className="contact-section section-pad" id="contactos"><div className="contact-card"><div className="contact-copy"><Eyebrow light>Visite-nos</Eyebrow><h2>Reserve um<br /><em>momento para si.</em></h2><p>Escolha o seu serviço, encontre o melhor horário e deixe o resto connosco.</p><Link href="/book" className="button button--blush">Agendar serviço <ArrowUpRight size={16} /></Link></div><div className="contact-details"><div className="contact-detail"><MapPin size={18} /><div><span>Morada</span><strong>Reboleira, Amadora<br />Lisboa, Portugal</strong></div></div><div className="contact-detail"><Phone size={18} /><div><span>Telefone</span><strong>+351 912 345 678</strong></div></div><div className="contact-detail"><Clock3 size={18} /><div><span>Horário</span><strong>Ter — Sáb · 09:00 — 19:00</strong></div></div><div className="contact-detail"><MessageCircle size={18} /><div><span>Email</span><strong>ola@dudsbeautyspa.pt</strong></div></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><BrandMark /><p>Beleza, relaxamento e cuidado<br />com intenção.</p><div className="footer-social"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a><a href="mailto:ola@dudsbeautyspa.pt" aria-label="Email"><MessageCircle size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 Duds Beauty Spa. Todos os direitos reservados.</span><div><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#contactos">Contactos</a><Link href="/login">Login</Link></div><span className="footer-languages">PT <i>|</i> EN</span></div></footer>
  </div>;
}
