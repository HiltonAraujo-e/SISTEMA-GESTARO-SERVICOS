// import { useState } from "react";
// import { ArrowDownRight, ArrowUpRight, Award, Clock3, Heart, Instagram, Leaf, MapPin, MessageCircle, Phone, Plus, Sparkles, Star, Users } from "lucide-react";
// import { Link } from "wouter";
// import { toast } from "sonner";
// import SiteHeader from "@/components/SiteHeader";
// import { BrandMark, Eyebrow } from "@/components/Brand";
// import { SectionHeading } from "@/components/AppUi";
// import ReviewsSection from "@/components/ReviewsSection";
// import { customerReviews, faqs, spaServices } from "@/services/mockData";

// const gallery = [
//   { image: "/img/trans2.jpg", label: "Spa time", className: "gallery-small" },
//   { image: "/img/app.jpg", label: "Trancas", className: "gallery-tall" },
//   { image: "/img/trans3.jpg", label: "Ritual corporal", className: "gallery-wide" },

//   { image: "/img/nasM.jpg", label: "Massagem", className: "gallery-wide" },
//   { image: "/img/pedras.jpg", label: "Pedicure", className: "gallery-tall" },
//   { image: "/img/sp.jpg", label: "Aplicacao protese", className: "gallery-small" },
//   { image: "/img/pedi.jpg", label: "Aplicacao protese", className: "gallery-small" },
//   { image: "/img/tin.jpg", label: "Aplicacao protese", className: "gallery-small" },
//   { image: "/img/beaut.jpg", label: "Spa time", className: "gallery-small" },
// ];

// export default function Home() {
//   const [openFaq, setOpenFaq] = useState(0);
//   const [activeCategory, setActiveCategory] = useState<"Todos" | "Massagens" | "Beleza">("Todos");
//   const visibleServices = spaServices.filter((service) => activeCategory === "Todos" || service.category === activeCategory).slice(0, 6);

//   const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   return <div className="public-site" id="inicio">
//     <SiteHeader />
//     <main>
//       <section className="hero-section">
//         <div className="hero-visual"><img src="/img/init.jpg" alt="Momento de relaxamento num ritual Duds Beauty Spa" /><div className="hero-overlay" /><div className="hero-image-note"><span>01</span><span>Um espaço para voltar a si</span></div></div>
//         <div className="hero-copy">
//           <Eyebrow light>Beauty · Body · Wellbeing</Eyebrow>
//           <h1>O seu momento<br /><em>de cuidado</em><br />começa aqui.</h1>
//           <p>Descubra uma experiência de beleza, relaxamento e bem-estar pensada para cuidar de si.</p>
//           <div className="hero-actions"><Link href="/book" className="button button--blush">Agendar serviço <ArrowUpRight size={16} /></Link><a href="#servicos" className="button button--ghost-light">Conhecer os serviços <ArrowDownRight size={16} /></a></div>
//           <div className="hero-trust"><span><i />Atendimento personalizado</span><span><i />Profissionais especializados</span><span><i />Agendamento fácil e seguro</span></div>
//         </div>
//         <div className="hero-rail"><span>Reboleira · Amadora · Lisboa</span><div className="vertical-line" /><span className="hero-rail-year">Est. 2026</span></div>
//       </section>

//       <section className="intro-section section-pad" id="sobre">
//         <div className="intro-body">
//           <Eyebrow>Sobre o Duds</Eyebrow>
//           <h2>Um espaço pensado<br /><em>para cuidar de si.</em></h2>

//           <p className="intro-lede">
//             Combinamos técnica, escuta e bem-estar para que cada visita seja um
//             verdadeiro momento de pausa, adaptado ao seu ritmo e às suas necessidades.
//           </p>

//           <blockquote className="intro-quote">
//             <span className="quote-mark">“</span>
//             O verdadeiro luxo é o tempo que dedica a si própria.
//           </blockquote>

//           <div className="intro-stats">
//             <div><strong>5+</strong><span>Anos de<br />experiência</span></div>
//             <div><strong>500+</strong><span>Clientes<br />satisfeitas</span></div>
//             <div><strong>12</strong><span>Rituais<br />exclusivos</span></div>
//           </div>

//           <div className="intro-meta">
//             <div>
//               <Heart size={19} />
//               <strong>Cuidado atento</strong>
//               <span>Escutamos antes de tratar, para que cada sessão responda ao que realmente precisa.</span>
//             </div>
//             <div>
//               <Leaf size={19} />
//               <strong>Ritmos individuais</strong>
//               <span>Cada pele e cada pessoa têm o seu tempo — respeitamo-lo em cada ritual.</span>
//             </div>
//             <div>
//               <Award size={19} />
//               <strong>Equipa especializada</strong>
//               <span>Profissionais com formação contínua nas técnicas mais reconhecidas.</span>
//             </div>
//           </div>

//           <button
//             className="text-link text-link--large"
//             onClick={() => toast.info("A nossa história completa estará disponível em breve.")}
//           >
//             Conheça-nos <ArrowUpRight size={16} />
//           </button>
//         </div>

//         <div className="intro-visual">
//           <div className="intro-col">
//             <div className="intro-image intro-image--top">
//               <img src="/img/welcome.jpg" alt="Interior luminoso do Duds Beauty Spa" />
//             </div>
//             <div className="intro-image intro-image--bottom">
//               <img src="/img/exp1.jpg" alt="Sala de tratamentos do Duds Beauty Spa" />
//             </div>
//           </div>
//           <div className="intro-image intro-image--tall">
//             <img src="/img/spaTime.jpg" alt="Detalhe de um ritual no Duds Beauty Spa" />
//           </div>
//         </div>
//       </section>

//       <section className="services-section section-pad" id="servicos">
//         <div className="services-top"><div><Eyebrow>Os nossos serviços</Eyebrow><h2>Rituais que deixam<br /><em>o corpo respirar.</em></h2></div><p>Escolha o cuidado que combina consigo. Da massagem à manicure, cada serviço é preparado ao detalhe.</p></div>
//         <div className="service-tabs"><div>{(["Todos", "Massagens", "Beleza"] as const).map((category) => <button key={category} className={activeCategory === category ? "is-active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><Link href="/book" className="text-link">Ver todos <ArrowUpRight size={15} /></Link></div>
//         <div className="service-grid">{visibleServices.map((service, index) => <article className="service-card" key={service.id}><div className="service-card-image"><img src={service.image} alt={service.name} /><span>0{index + 1}</span></div><div className="service-card-copy"><div className="service-card-heading"><h3>{service.name}</h3><span className="price">{service.price.toLocaleString("pt-PT", { style: "currency", currency: "EUR" })}</span></div><p>{service.description}</p><div className="service-card-foot"><span><Clock3 size={14} />{service.duration} min</span><Link href={`/book?service=${service.id}`} className="card-action">Agendar <ArrowUpRight size={14} /></Link></div></div></article>)}</div>
//         <div className="services-bottom"><span>Também disponível</span><strong>Mais serviços de beleza e cuidados pessoais</strong><Link href="/book" className="button button--outline">Explorar a carta <ArrowUpRight size={15} /></Link></div>
//       </section>

//       <section className="ritual-section"><div className="ritual-inner"><div className="ritual-copy"><Eyebrow>Como funciona</Eyebrow><h2>Escolha o ritual.<br /><em>Nós cuidamos do resto.</em></h2><p>O seu tempo é precioso. Por isso, tornámos o agendamento simples, transparente e sem pressa.</p><Link href="/book" className="text-link text-link--light">Começar o meu agendamento <ArrowUpRight size={16} /></Link></div><div className="steps-list">{[["01", "Escolha o serviço", "Encontre o cuidado que procura."], ["02", "Escolha o horário", "Veja datas e horas disponíveis."], ["03", "Faça a entrada", "Reserve com 10% ou 20% do valor."], ["04", "Receba a confirmação", "A equipa analisa e confirma por email."]].map(([number, title, description]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>

//       <section className="gallery-section section-pad" id="galeria">
//         <SectionHeading eyebrow="A experiência Duds"

//           title={<>Um lugar para se reencontrar</>}
//         />
//         <div className="gallery-grid">
//           {gallery.map((item) => <div className={`gallery-item ${item.className}`} key={item.label}>
//             <img src={item.image} alt={item.label} />
//             <div>
//               <span>{item.label}</span>
//               <ArrowUpRight size={16} />
//             </div>
//           </div>)}
//         </div>
//       </section>

//       <ReviewsSection reviews={customerReviews} />

//       <section className="faq-section section-pad"><div className="faq-intro"><Eyebrow>Perguntas frequentes</Eyebrow><h2>Tudo o que precisa<br /><em>de saber.</em></h2><p>Se ainda ficou alguma dúvida, estamos sempre disponíveis para ajudar.</p><a className="text-link" href="mailto:ola@dudsbeautyspa.pt">Fale connosco <ArrowUpRight size={15} /></a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>0{index + 1}</span><strong>{faq.question}</strong><Plus size={18} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div></section>

//       <section className="contact-section" id="contactos">
//         {/* Cabeçalho da secção */}
//         <div className="contact-header">
//           <Eyebrow>Visite-nos</Eyebrow>
//           <h2>Reserve um<br /><em>momento para si.</em></h2>
//           <p>Escolha o seu serviço, encontre o melhor horário e deixe o resto connosco.</p>
//         </div>

//         {/* Mapa + Informações lado a lado */}
//         <div className="contact-grid">
//           <div className="contact-map">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.676146114176!2d-9.226456684297!3d38.748707879609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecb6a7c26b6b3%3A0x3f3f3f3f3f3f3f3f!2sReboleira%2C%20Amadora%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1690000000000"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Localização Duds Beauty Spa"
//             />
//           </div>
//           <div className="contact-info">
//             <Eyebrow light>Estamos aqui</Eyebrow>
//             <h3>Venha conhecer<br />o nosso espaço.</h3>
//             <p>Estamos localizados na Reboleira, com fácil acesso e um ambiente acolhedor.</p>

//             <div className="contact-details-list">
//               <div className="contact-detail">
//                 <MapPin size={18} />
//                 <div>
//                   <span>Morada</span>
//                   <strong>Reboleira, Amadora<br />Lisboa, Portugal</strong>
//                 </div>
//               </div>
//               <div className="contact-detail">
//                 <Phone size={18} />
//                 <div>
//                   <span>Telefone</span>
//                   <strong>+351 912 345 678</strong>
//                 </div>
//               </div>
//               <div className="contact-detail">
//                 <Clock3 size={18} />
//                 <div>
//                   <span>Horário</span>
//                   <strong>Ter — Sáb · 09:00 – 19:00</strong>
//                 </div>
//               </div>
//               <div className="contact-detail">
//                 <MessageCircle size={18} />
//                 <div>
//                   <span>Email</span>
//                   <strong>ola@dudsbeautyspa.pt</strong>
//                 </div>
//               </div>
//             </div>

//             <Link href="/book" className="button button--blush">
//               Agendar serviço <ArrowUpRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>


//     <footer className="site-footer">
//       <div className="footer-grid">
//         {/* Coluna 1 – Marca + descrição + redes */}
//         <div className="footer-col footer-col--brand">
//           <BrandMark />
//           <p className="footer-tagline">
//             Beleza, relaxamento e cuidado<br />com intenção.
//           </p>
//           <div className="footer-social">
//             <a href="https://instagram.com" aria-label="Instagram" className="social-link">
//               <Instagram size={17} />
//             </a>
//             <a href="mailto:ola@dudsbeautyspa.pt" aria-label="Email" className="social-link">
//               <MessageCircle size={17} />
//             </a>
//             <a href="#" aria-label="Facebook" className="social-link">
//               <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
//             </a>
//             <a href="#" aria-label="YouTube" className="social-link">
//               <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
//             </a>
//           </div>
//         </div>

//         {/* Coluna 2 – Links rápidos */}
//         <div className="footer-col">
//           <h4 className="footer-heading">Navegue</h4>
//           <ul className="footer-links">
//             <li><a href="#inicio">Início</a></li>
//             <li><a href="#sobre">Sobre</a></li>
//             <li><a href="#servicos">Serviços</a></li>
//             <li><a href="#galeria">Galeria</a></li>
//             <li><a href="#contactos">Contactos</a></li>
//           </ul>
//         </div>

//         {/* Coluna 3 – Contacto e horário */}
//         <div className="footer-col">
//           <h4 className="footer-heading">Contacto</h4>
//           <ul className="footer-contact">
//             <li>
//               <MapPin size={16} />
//               <span>Reboleira, Amadora · Lisboa</span>
//             </li>
//             <li>
//               <Phone size={16} />
//               <span>+351 912 345 678</span>
//             </li>
//             <li>
//               <MessageCircle size={16} />
//               <span>ola@dudsbeautyspa.pt</span>
//             </li>
//             <li className="footer-hours">
//               <Clock3 size={16} />
//               <span>Ter — Sáb · 09:00 – 19:00</span>
//             </li>
//           </ul>
//         </div>

//         {/* Coluna 4 – Newsletter (apelo visual) */}
//         <div className="footer-col footer-col--newsletter">
//           <h4 className="footer-heading">Fique a par</h4>
//           <p className="footer-newsletter-text">
//             Receba novidades e ofertas especiais.
//           </p>
//           <form className="footer-newsletter-form" onSubmit={(e) => { e.preventDefault(); toast.info("Obrigado por subscrever! Em breve receberá novidades."); }}>
//             <input type="email" placeholder="O seu email" required aria-label="Endereço de email" />
//             <button type="submit" className="button button--blush">Subscrever</button>
//           </form>
//           <p className="footer-newsletter-note">Sem spam. Pode cancelar quando quiser.</p>
//         </div>
//       </div>

//       {/* Linha divisória e informação legal */}
//       <div className="footer-bottom">
//         <span>© 2026 Duds Beauty Spa. Todos os direitos reservados.</span>
//         <div>
//           <Link href="/politica-privacidade">Política de Privacidade</Link>
//           <Link href="/termos">Termos de Uso</Link>
//           <Link href="/login">Login</Link>
//         </div>
//         <span className="footer-languages">PT <i>|</i> EN</span>
//       </div>
//     </footer>
//   </div>;
// }


import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Services } from '@/components/sections/Services';
import { Ritual } from '@/components/sections/Ritual';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  return (
    <div className="public-site" id="inicio">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Ritual />
        <Gallery />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
