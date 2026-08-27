// Quiet Luxury Ritual reminder: booking is a guided ritual—one clear decision at a time, with transparent mock payment states.
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, CreditCard, Info, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import { BrandMark, Eyebrow } from "@/components/Brand";
import { useApp } from "@/contexts/AppContext";

export default function Book() {
  const { services, client, getAvailableSlots, addAppointment } = useApp();
  const queryService = new URLSearchParams(window.location.search).get("service");
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(queryService && services.some((service) => service.id === queryService) ? queryService : services[0].id);
  const [date, setDate] = useState("2026-08-28");
  const [time, setTime] = useState("09:00");
  const [depositPercent, setDepositPercent] = useState<10 | 20>(20);
  const [paid, setPaid] = useState(false);
  const selectedService = services.find((service) => service.id === serviceId) ?? services[0];
  const slots = useMemo(() => getAvailableSlots(date, serviceId), [date, serviceId, getAvailableSlots]);
  const deposit = selectedService.price * (depositPercent / 100);

  const next = () => setStep((current) => Math.min(current + 1, 3));
  const createBooking = () => {
    setPaid(true);
    addAppointment({
      id: `apt-${Date.now()}`,
      clientId: client.id,
      clientName: client.name,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      date,
      time,
      professional: selectedService.category === "Beleza" ? "Sofia Costa" : "Inês Martins",
      total: selectedService.price,
      depositPercent,
      depositPaid: deposit,
      remaining: selectedService.price - deposit,
      paymentStatus: "Pago",
      status: "Pending Approval",
      createdAt: "26 Ago 2026",
    });
    next();
  };

  if (paid && step === 3) return <div className="booking-page"><SiteHeader /><main className="booking-confirmation"><div className="confirmation-mark"><Check size={27} /></div><Eyebrow>Pedido recebido</Eyebrow><h1>O seu momento<br /><em>está quase marcado.</em></h1><p>Recebemos o pagamento de entrada. A nossa equipa irá analisar o pedido e enviar a confirmação para <strong>{client.email}</strong>.</p><div className="confirmation-card"><div><span>Serviço</span><strong>{selectedService.name}</strong></div><div><span>Data e hora</span><strong>{new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", { day: "numeric", month: "long" })} · {time}</strong></div><div><span>Estado</span><strong className="rose-text">Aguardando aprovação</strong></div></div><div className="confirmation-actions"><Link href="/dashboard" className="button button--dark">Ver a minha conta <ArrowRight size={16} /></Link><Link href="/" className="text-link">Voltar ao início <ArrowRight size={15} /></Link></div></main><footer className="minimal-footer"><BrandMark compact /><span>© 2026 Duds Beauty Spa</span></footer></div>;

  return <div className="booking-page"><SiteHeader /><main className="booking-main"><div className="booking-header"><Link href="/" className="back-link"><ArrowLeft size={15} />Voltar ao site</Link><div><Eyebrow>Agendar serviço</Eyebrow><h1>Reserve o seu<br /><em>momento de cuidado.</em></h1></div><span className="mock-label"><Sparkles size={13} />Demonstração frontend</span></div><div className="booking-layout"><aside className="booking-steps"><div className={`booking-step ${step >= 1 ? "is-active" : ""}`}><span>01</span><div><strong>Escolha o serviço</strong><small>O cuidado certo para si</small></div></div><div className={`booking-step ${step >= 2 ? "is-active" : ""}`}><span>02</span><div><strong>Confirme os detalhes</strong><small>Data, hora e entrada</small></div></div><div className={`booking-step ${step >= 3 ? "is-active" : ""}`}><span>03</span><div><strong>Pedido enviado</strong><small>Aguarde a confirmação</small></div></div><div className="booking-note"><Info size={15} /><p>Os dados e pagamentos nesta página são simulados para demonstração.</p></div></aside><section className="booking-panel">
    {step === 1 && <><div className="panel-heading"><div><Eyebrow>Passo 01</Eyebrow><h2>O que gostaria<br /><em>de oferecer a si?</em></h2></div><span className="panel-count">01 / 02</span></div><div className="booking-form"><label>Escolha um serviço<select value={serviceId} onChange={(event) => { setServiceId(event.target.value); setTime(""); }}>{services.map((service) => <option key={service.id} value={service.id}>{service.name} · {service.price}€</option>)}</select></label><div className="booking-form-grid"><label>Data<input type="date" min="2026-08-26" value={date} onChange={(event) => setDate(event.target.value)} /></label><label>Profissional<select defaultValue={selectedService.category === "Beleza" ? "Sofia Costa" : "Inês Martins"}><option>Inês Martins</option><option>Sofia Costa</option></select></label></div><div className="slot-field"><span>Horário disponível</span><div className="slot-grid">{slots.map((slot) => <button className={time === slot ? "is-selected" : ""} key={slot} onClick={() => setTime(slot)}><Clock3 size={14} />{slot}</button>)}</div></div><div className="selected-service-preview"><img src={selectedService.image} alt="" /><div><span>O seu ritual</span><strong>{selectedService.name}</strong><small>{selectedService.duration} min · entrada {selectedService.deposit}%</small></div><strong>{selectedService.price}€</strong></div></div><div className="panel-actions"><span>{time ? "Horário selecionado" : "Selecione um horário"}</span><button className="button button--dark" disabled={!time} onClick={next}>Continuar <ArrowRight size={16} /></button></div></>}
    {step === 2 && <><div className="panel-heading"><div><Eyebrow>Passo 02</Eyebrow><h2>Quase lá.<br /><em>Revise os detalhes.</em></h2></div><span className="panel-count">02 / 02</span></div><div className="review-grid"><div className="review-card review-card--service"><img src={selectedService.image} alt="" /><div><span>Serviço escolhido</span><h3>{selectedService.name}</h3><p><Clock3 size={14} />{selectedService.duration} min · {selectedService.category}</p></div></div><div className="review-details"><div><CalendarDays size={17} /><span>Data e hora<strong>{new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", { weekday: "long", day: "numeric", month: "long" })}<br />{time} · {selectedService.category === "Beleza" ? "Sofia Costa" : "Inês Martins"}</strong></span></div><div><CreditCard size={17} /><span>Pagamento de entrada<strong>Escolha 10% ou 20% para garantir o pedido.</strong></span></div></div></div><div className="payment-box"><div className="payment-box-heading"><div><Eyebrow>Pagamento simulado</Eyebrow><h3>Escolha a sua entrada</h3></div><LockKeyhole size={17} /></div><div className="deposit-options"><button className={depositPercent === 10 ? "is-selected" : ""} onClick={() => setDepositPercent(10)}><strong>10%</strong><span>{(selectedService.price * .1).toFixed(2)}€ agora</span></button><button className={depositPercent === 20 ? "is-selected" : ""} onClick={() => setDepositPercent(20)}><strong>20%</strong><span>{(selectedService.price * .2).toFixed(2)}€ agora</span><i>Recomendado</i></button></div><div className="payment-total"><span>Valor total <strong>{selectedService.price.toFixed(2)}€</strong></span><span>Entrada {depositPercent}% <strong className="rose-text">{deposit.toFixed(2)}€</strong></span><span>Restante no dia <strong>{(selectedService.price - deposit).toFixed(2)}€</strong></span></div></div><div className="panel-actions"><button className="text-link" onClick={() => setStep(1)}><ArrowLeft size={15} />Alterar detalhes</button><button className="button button--blush" onClick={createBooking}>Simular pagamento <CreditCard size={16} /></button></div></>}
  </section></div></main></div>;
}
