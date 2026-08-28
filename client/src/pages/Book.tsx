import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  CreditCard,
  Info,
  LockKeyhole,
  Sparkles,
  User,
} from "lucide-react";
import { Link } from "wouter";
import { useApp } from "@/contexts/AppContext";
import { Eyebrow } from "@/components/Eyebrow";
import { BrandMark } from "@/components/Brand";

function PageHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#6b5450] border-b border-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-16 md:h-[4.5rem] flex items-center gap-3 md:gap-4">
        <button
          onClick={() => window.history.back()}
          aria-label="Voltar à página anterior"
          className="group inline-flex items-center justify-center text-blush hover:bg-blush hover:text-[#6b5450] hover:border-blush transition-all flex-none"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <div className="flex-1 flex items-center gap-3 min-w-0">
          <span className="hidden sm:flex w-9 h-9 rounded-full bg-white/10 items-center justify-center flex-none">
            <BrandMark />
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blush">
              Duds Beauty Spa
            </div>
            <p className="text-ivory/85 text-sm truncate">Está a marcar o seu momento de cuidado</p>
          </div>
        </div>

        <span className="hidden md:inline text-[11px] font-semibold uppercase tracking-[0.2em] text-blush/60">
          Marcação simulada
        </span>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="bg-[#6b5450]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-ivory/55">© 2026 Duds Beauty Spa. Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/politica-privacidade" className="text-ivory/75 hover:text-blush transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-ivory/75 hover:text-blush transition-colors">
              Termos de Uso
            </Link>
            <Link href="/ficha-tecnica" className="text-ivory/75 hover:text-blush transition-colors">
              Ficha Técnica
            </Link>
            <Link href="/login" className="text-ivory/75 hover:text-blush transition-colors">
              Login
            </Link>
          </div>
          <span className="text-blush tracking-widest text-xs font-semibold">
            PT <span className="text-ivory/25 px-1">|</span> EN
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Book() {
  const { services, client, getAvailableSlots, addAppointment } = useApp();
  const queryService = new URLSearchParams(window.location.search).get("service");

  const [step, setStep] = useState(1);

  // Dados do utilizador – preenchidos com os valores do contexto (se existirem)
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(
    queryService && services.some((s) => s.id === queryService) ? [queryService] : []
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [professional, setProfessional] = useState("");
  const [depositPercent, setDepositPercent] = useState<10 | 20 | null>(null);
  const [paid, setPaid] = useState(false);

  const selectedServices = useMemo(
    () => services.filter((s) => selectedServiceIds.includes(s.id)),
    [services, selectedServiceIds]
  );

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0);
  const deposit = depositPercent ? totalPrice * (depositPercent / 100) : 0;

  const slots = useMemo(() => {
    if (!date || selectedServiceIds.length === 0) return [];
    const slotSets = selectedServiceIds.map((id) => getAvailableSlots(date, id));
    return slotSets.reduce((acc, curr) => acc.filter((slot) => curr.includes(slot)));
  }, [date, selectedServiceIds, getAvailableSlots]);

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    setTime("");
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));

  const canContinueStep1 = selectedServiceIds.length > 0 && !!date && !!time;
  const canSubmitStep2 =
    !!professional &&
    !!depositPercent &&
    userName.trim().length > 0 &&
    userEmail.trim().length > 0 &&
    userPhone.trim().length > 0;

  const createBooking = () => {
    if (!depositPercent) return;
    setPaid(true);
    addAppointment({
      id: `apt-${Date.now()}`,
      clientId: client.id,
      clientName: userName,
      clientEmail: userEmail,
      clientPhone: userPhone,
      serviceId: selectedServices.map((s) => s.id).join(","),
      serviceName: selectedServices.map((s) => s.name).join(" + "),
      date,
      time,
      professional,
      total: totalPrice,
      depositPercent,
      depositPaid: deposit,
      remaining: totalPrice - deposit,
      paymentStatus: "Pago",
      status: "Pending Approval",
      createdAt: "26 Ago 2026",
    });
    next();
  };

  /* ------------------------- Tela de confirmação ------------------------- */
  if (paid && step === 3) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col">
        <PageHeader />

        <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
          <div className="max-w-2xl w-full bg-paper rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-[#6b5450] px-8 md:px-12 py-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blush flex items-center justify-center text-[#6b5450] mb-6">
                <Check size={32} strokeWidth={2} />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blush">
                Pedido recebido
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] mt-3 text-ivory">
                O seu momento<br />
                <span className="italic font-light text-blush">está quase marcado.</span>
              </h1>
            </div>

            {/* Fundo branco para a mensagem de confirmação */}
            <div className="p-8 md:p-12 text-center bg-white">
              <p className="text-muted text-sm leading-relaxed max-w-md mx-auto">
                Recebemos o pagamento de entrada. A nossa equipa irá analisar o pedido e enviar a
                confirmação para <strong className="text-ink">{userEmail}</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 p-6 bg-ivory rounded-xl text-left">
                <div className="sm:col-span-2">
                  <span className="text-muted text-xs uppercase tracking-wider">
                    {selectedServices.length > 1 ? "Serviços" : "Serviço"}
                  </span>
                  <div className="mt-1 space-y-1">
                    {selectedServices.map((s) => (
                      <strong key={s.id} className="block font-serif text-lg font-semibold">
                        {s.name}
                      </strong>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-muted text-xs uppercase tracking-wider">Data e hora</span>
                  <strong className="block font-serif text-xl font-semibold mt-1">
                    {new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", {
                      day: "numeric",
                      month: "long",
                    })}{" "}
                    · {time}
                  </strong>
                </div>
                <div>
                  <span className="text-muted text-xs uppercase tracking-wider">Total</span>
                  <strong className="block font-serif text-xl font-semibold mt-1">{totalPrice.toFixed(2)}€</strong>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-muted text-xs uppercase tracking-wider">Estado</span>
                  <strong className="block font-serif text-xl font-semibold mt-1 text-rosewood">
                    Aguardando aprovação
                  </strong>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-8 text-muted hover:text-rosewood transition-colors text-sm font-semibold"
              >
                Voltar ao início <ArrowLeft size={15} />
              </Link>
            </div>
          </div>
        </main>

        <PageFooter />
      </div>
    );
  }

  /* ------------------------------ Fluxo de reserva ------------------------------ */
  const steps = [
    { step: 1, label: "Escolha o serviço", desc: "O cuidado certo para si" },
    { step: 2, label: "Confirme os detalhes", desc: "Data, hora e entrada" },
    { step: 3, label: "Pedido enviado", desc: "Aguarde a confirmação" },
  ];

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <PageHeader />

      {selectedServiceIds.length > 0 && (
        <div className="lg:hidden sticky top-16 z-30 bg-paper/95 backdrop-blur border-b border-line px-4 py-3 flex items-center justify-between gap-3">
          <span className="text-xs text-muted truncate">
            {selectedServiceIds.length} serviço{selectedServiceIds.length > 1 ? "s" : ""} selecionado
            {selectedServiceIds.length > 1 ? "s" : ""}
            {time ? ` · ${time}` : ""}
          </span>
          <strong className="text-sm font-bold text-rosewood flex-none">{totalPrice.toFixed(2)}€</strong>
        </div>
      )}

      <main className="flex-1 px-4 sm:px-6 md:px-12 pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-10">
            {/* Painel lateral — narrativa + resumo ao vivo */}
            <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              <div className="bg-paper rounded-2xl overflow-hidden shadow-soft">
                <div className="bg-[#6b5450] px-8 pt-8 pb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blush">
                    Reserva de ritual
                  </span>
                  <h1 className="font-serif text-3xl font-medium leading-[1.12] text-ivory mt-2">
                    Reserve o seu<br />
                    <span className="italic font-light text-blush">momento de cuidado.</span>
                  </h1>
                </div>

                <div className="px-3 pt-4">
                  {steps.map((item) => (
                    <div
                      key={item.step}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${step === item.step ? "bg-blush-soft" : step > item.step ? "opacity-60" : "opacity-40"
                        }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-none transition-colors ${step >= item.step ? "bg-rosewood text-white" : "bg-line text-muted"
                          }`}
                      >
                        {step > item.step ? <Check size={13} strokeWidth={3} /> : item.step}
                      </span>
                      <div className="min-w-0">
                        <strong className="block text-sm font-semibold text-ink truncate">{item.label}</strong>
                        <span className="text-xs text-muted">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-line mx-6 my-5" />

                <div className="px-8 pb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rosewood">
                    O seu ritual
                  </span>

                  {selectedServices.length === 0 ? (
                    <p className="text-muted text-sm mt-3">Ainda não escolheu nenhum serviço.</p>
                  ) : (
                    <div className="mt-3 space-y-3">
                      {selectedServices.map((s) => (
                        <div key={s.id} className="flex items-center gap-3">
                          <img src={s.image} alt="" className="w-10 h-10 rounded-lg object-cover flex-none" />
                          <div className="flex-1 min-w-0">
                            <strong className="block text-sm font-semibold text-ink truncate">{s.name}</strong>
                            <span className="text-xs text-muted">{s.duration} min</span>
                          </div>
                          <strong className="text-sm font-bold text-rosewood flex-none">{s.price}€</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  {time && (
                    <div className="flex items-center gap-2 mt-4 text-muted text-xs">
                      <CalendarDays size={13} className="text-rosewood" />
                      {new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", { day: "numeric", month: "long" })} ·{" "}
                      {time}
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-line mt-5 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Total {totalDuration > 0 ? `· ${totalDuration} min` : ""}
                    </span>
                    <strong className="font-serif text-2xl font-semibold text-rosewood">
                      {totalPrice.toFixed(2)}€
                    </strong>
                  </div>
                </div>
              </div>

            </aside>

            {/* Painel principal */}
            <section className="bg-paper rounded-2xl shadow-soft p-6 md:p-8 lg:p-10">
              {step === 1 && (
                <>
                  <div className="border-b border-line pb-6">
                    <Eyebrow>Passo 01 de 02</Eyebrow>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.1] mt-1">
                      Que serviço gostaria <span className="italic font-light text-rosewood">de agendar?</span>
                    </h2>
                  </div>

                  <div className="space-y-6 mt-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-ink/70 text-xs font-semibold uppercase tracking-wider">
                          Escolha um ou mais serviços
                        </label>
                        {selectedServiceIds.length > 0 && (
                          <span className="text-[11px] font-semibold text-rosewood">
                            {selectedServiceIds.length} selecionado{selectedServiceIds.length > 1 ? "s" : ""}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map((s) => {
                          const active = selectedServiceIds.includes(s.id);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => toggleService(s.id)}
                              aria-pressed={active}
                              className={`relative flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all ${active
                                ? "border-rosewood bg-blush-soft shadow-sm"
                                : "border-line hover:border-rosewood/50 hover:bg-blush-soft/20"
                                }`}
                            >
                              <img src={s.image} alt="" className="w-12 h-12 rounded-lg object-cover flex-none" />
                              <div className="flex-1 min-w-0">
                                <strong className="block text-sm font-semibold truncate">{s.name}</strong>
                                <span className="text-muted text-xs">
                                  {s.duration} min · {s.price}€
                                </span>
                              </div>
                              <span
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-none transition-all ${active ? "bg-rosewood border-rosewood text-white" : "border-line text-transparent"
                                  }`}
                              >
                                <Check size={12} strokeWidth={3} />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-ink/70 text-xs font-semibold uppercase tracking-wider mb-2">
                          Data
                        </label>
                        <input
                          type="date"
                          min="2026-08-26"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                            setTime("");
                          }}
                          className="w-full h-12 px-4 rounded-xl border border-line bg-ivory text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-ink/70 text-xs font-semibold uppercase tracking-wider mb-2">
                          <User size={13} /> Profissional
                        </label>
                        <select
                          value={professional}
                          onChange={(e) => setProfessional(e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border border-line bg-ivory text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                        >
                          <option value="">Escolha o profissional</option>
                          <option>Inês Martins</option>
                          <option>Sofia Costa</option>
                        </select>
                        <p className="text-[11px] text-muted mt-1">Pode confirmar isto no passo seguinte.</p>
                      </div>
                    </div>

                    <div>
                      <span className="block text-ink/70 text-xs font-semibold uppercase tracking-wider mb-3">
                        Horário disponível
                      </span>
                      {!date || selectedServiceIds.length === 0 ? (
                        <p className="text-muted text-sm bg-ivory rounded-xl p-4">
                          Escolha um serviço e uma data para ver os horários disponíveis.
                        </p>
                      ) : slots.length === 0 ? (
                        <p className="text-muted text-sm bg-ivory rounded-xl p-4">
                          Sem horários em comum para os serviços escolhidos nesta data. Tente outra data.
                        </p>
                      ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {slots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setTime(slot)}
                              className={`flex items-center justify-center gap-2 h-10 px-3 rounded-xl border text-sm font-medium transition-all ${time === slot
                                ? "border-rosewood bg-blush-soft text-ink shadow-sm"
                                : "border-line text-muted hover:border-rosewood hover:bg-blush-soft/30"
                                }`}
                            >
                              <Clock3 size={14} /> {slot}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-line pt-6 mt-6">
                    <span className="text-muted text-sm">
                      {selectedServiceIds.length === 0
                        ? "Selecione pelo menos um serviço"
                        : !date
                          ? "Selecione uma data"
                          : !time
                            ? "Selecione um horário"
                            : ""}
                    </span>
                    <button
                      disabled={!canContinueStep1}
                      onClick={next}
                      className="inline-flex items-center gap-2 min-h-[44px] px-6 rounded-full bg-[#6b5450] text-white text-sm font-semibold hover:bg-[#5a4544] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continuar <ArrowRight size={16} />
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="border-b border-line pb-6">
                    <Eyebrow>Passo 02 de 02</Eyebrow>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.1] mt-1">
                      Quase lá. <span className="italic font-light text-rosewood">Revise os detalhes.</span>
                    </h2>
                  </div>

                  <div className="space-y-6 mt-6">
                    <div className="p-4 bg-ivory rounded-xl space-y-3">
                      <span className="text-ink/70 text-[10px] uppercase tracking-wider">
                        {selectedServices.length > 1 ? "Serviços escolhidos" : "Serviço escolhido"}
                      </span>
                      {selectedServices.map((s) => (
                        <div key={s.id} className="flex items-center gap-4">
                          <img src={s.image} alt="" className="w-14 h-14 rounded-lg object-cover flex-none" />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif text-lg font-semibold truncate">{s.name}</h3>
                            <p className="text-muted text-sm flex items-center gap-1">
                              <Clock3 size={14} /> {s.duration} min · {s.category}
                            </p>
                          </div>
                          <strong className="text-sm font-bold text-rosewood flex-none">{s.price}€</strong>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-ivory rounded-xl">
                        <CalendarDays size={18} className="text-rosewood flex-none mt-1" />
                        <div>
                          <span className="text-ink/70 text-[10px] uppercase tracking-wider">Data e hora</span>
                          <strong className="block font-serif text-lg font-semibold">
                            {new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                            })}
                            <br />
                            {time}
                          </strong>
                        </div>
                      </div>
                      <div className="p-4 bg-ivory rounded-xl">
                        <label className="flex items-center gap-1.5 text-ink/70 text-[10px] uppercase tracking-wider mb-2">
                          <User size={13} className="text-rosewood" /> Profissional
                        </label>
                        <select
                          value={professional}
                          onChange={(e) => setProfessional(e.target.value)}
                          className="w-full h-11 px-3 rounded-lg border border-line bg-paper text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                        >
                          <option value="">Escolha o profissional</option>
                          <option>Inês Martins</option>
                          <option>Sofia Costa</option>
                        </select>
                      </div>
                    </div>

                    {/* NOVOS CAMPOS: Nome, Email e Contacto — com labels mais escuras */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-ivory rounded-xl">
                      <div>
                        <label className="block text-ink/70 text-[10px] uppercase tracking-wider mb-1">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Seu nome"
                          className="w-full h-11 px-3 rounded-lg border border-line bg-paper text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-ink/70 text-[10px] uppercase tracking-wider mb-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="seu@email.com"
                          className="w-full h-11 px-3 rounded-lg border border-line bg-paper text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-ink/70 text-[10px] uppercase tracking-wider mb-1">
                          Contacto
                        </label>
                        <input
                          type="tel"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          placeholder="912 345 678"
                          className="w-full h-11 px-3 rounded-lg border border-line bg-paper text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-ivory rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <Eyebrow>Pagamento simulado</Eyebrow>
                        <LockKeyhole size={17} className="text-rosewood" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          onClick={() => setDepositPercent(10)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${depositPercent === 10 ? "border-rosewood bg-blush-soft" : "border-line hover:border-rosewood/50"
                            }`}
                        >
                          <strong className="font-serif text-2xl font-semibold">10%</strong>
                          <span className="block text-muted text-sm">{(totalPrice * 0.1).toFixed(2)}€ agora</span>
                        </button>
                        <button
                          onClick={() => setDepositPercent(20)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${depositPercent === 20 ? "border-rosewood bg-blush-soft" : "border-line hover:border-rosewood/50"
                            }`}
                        >
                          <strong className="font-serif text-2xl font-semibold">20%</strong>
                          <span className="block text-muted text-sm">{(totalPrice * 0.2).toFixed(2)}€ agora</span>
                          <span className="inline-block mt-1 text-[10px] font-bold text-rosewood uppercase tracking-wider">
                            Recomendado
                          </span>
                        </button>
                      </div>

                      {depositPercent && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 p-4 bg-paper rounded-xl">
                          <div>
                            <span className="text-muted text-xs uppercase tracking-wider">Valor total</span>
                            <strong className="block font-serif text-xl font-semibold">{totalPrice.toFixed(2)}€</strong>
                          </div>
                          <div>
                            <span className="text-muted text-xs uppercase tracking-wider">Entrada {depositPercent}%</span>
                            <strong className="block font-serif text-xl font-semibold text-rosewood">
                              {deposit.toFixed(2)}€
                            </strong>
                          </div>
                          <div>
                            <span className="text-muted text-xs uppercase tracking-wider">Restante no dia</span>
                            <strong className="block font-serif text-xl font-semibold">
                              {(totalPrice - deposit).toFixed(2)}€
                            </strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-6 mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-muted hover:text-rosewood transition-colors text-sm font-semibold"
                    >
                      <ArrowLeft size={15} /> Alterar detalhes
                    </button>
                    <button
                      disabled={!canSubmitStep2}
                      onClick={createBooking}
                      className="inline-flex items-center gap-2 min-h-[44px] px-6 rounded-full bg-blush text-ink text-sm font-semibold shadow-[0_4px_14px_rgba(234,196,207,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(234,196,207,0.5)] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      Simular pagamento <CreditCard size={16} />
                    </button>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}