// Quiet Luxury Ritual reminder: mock domain data stays centralized so polished UI can later swap to API-backed services without changing components.

export type UserRole = "client" | "admin";
export type AppointmentStatus = "Pending Payment" | "Payment Received" | "Pending Approval" | "Approved" | "Rejected" | "Cancelled" | "Completed";

export type SpaService = {
  id: string;
  category: "Massagens" | "Beleza" | "Mais Serviços";
  name: string;
  description: string;
  duration: number;
  price: number;
  deposit: 10 | 20;
  image: string;
  featured?: boolean;
};

export type CustomerReview = {
  id: string;
  displayName: string;
  serviceName: string;
  text: string;
  rating?: number;
  publishedAt: string;
  consentToPublish: boolean;
};

export type Appointment = {
  id: string;
  clientId: string;
  clientName: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  professional: string;
  total: number;
  depositPercent: 10 | 20;
  depositPaid: number;
  remaining: number;
  paymentStatus: "Pago" | "Pendente";
  status: AppointmentStatus;
  createdAt: string;
  clientEmail?: string;
  clientPhone?: string;
};

export const spaServices: SpaService[] = [
  {
    id: "therapeutic-massage",
    category: "Massagens",
    name: "Massagem Terapêutica",
    description: "Alívio profundo para corpo e mente, com uma abordagem adaptada ao seu momento.",
    duration: 60,
    price: 65,
    deposit: 20,
    image: "/img/massagem_ter.jpg",
    featured: true,
  },
  {
    id: "lymphatic-drainage",
    category: "Massagens",
    name: "Drenagem Linfática",
    description: "Movimentos delicados que estimulam a circulação e devolvem leveza ao corpo.",
    duration: 60,
    price: 70,
    deposit: 20,
    image: "/img/massagem_linf.jpg",
    featured: true,
  },
  {
    id: "sculpting-massage",
    category: "Massagens",
    name: "Massagem Modeladora",
    description: "Uma experiência intensa e focada para despertar a sua melhor versão.",
    duration: 60,
    price: 75,
    deposit: 20,
    image: "/img/massagem_moel.jpg",
  },
  {
    id: "swedish-massage",
    category: "Massagens",
    name: "Swedish Massage",
    description: "Ritmo fluido, pressão equilibrada e uma sensação prolongada de serenidade.",
    duration: 75,
    price: 80,
    deposit: 10,
    image: "/img/swidish.jpg",
  },
  {
    id: "gel-nails",
    category: "Beleza",
    name: "Unhas de Gel",
    description: "Acabamento elegante, resistente e pensado ao detalhe para as suas mãos.",
    duration: 90,
    price: 42,
    deposit: 10,
    image: "/img/unhas_gel.jpg",
    featured: true,
  },
  {
    id: "manicure",
    category: "Beleza",
    name: "Manicure",
    description: "Cuidado completo para mãos cuidadas, bonitas e prontas para a semana.",
    duration: 45,
    price: 25,
    deposit: 10,
    image: "/img/manicure.jpg",
  },
  {
    id: "pedicure",
    category: "Beleza",
    name: "Pedicure Essencial",
    description: "Um gesto de cuidado que começa nos pés e se sente em todo o corpo.",
    duration: 60,
    price: 32,
    deposit: 10,
    image: "/img/pedicure.jpg",
  },
  {
    id: "acrylic-nails",
    category: "Beleza",
    name: "Unhas de Acrílico",
    description: "Estrutura, forma e acabamento com a precisão que o seu estilo merece.",
    duration: 105,
    price: 48,
    deposit: 20,
    image: "/img/unhas_acri.jpg",
  },
  {
    id: "protese",
    category: "Beleza",
    name: "Prótese",
    description: "Aplicação de prótese para todo tipo de evento",
    duration: 105,
    price: 48,
    deposit: 20,
    image: "/img/download.jpg",
  },
  {
    id: "trancas",
    category: "Beleza",
    name: "Tranças",
    description: "Tranças para todas ocasiões",
    duration: 105,
    price: 48,
    deposit: 20,
    image: "/img/tr.jpeg",
  },
];

export const professionals = [
  { id: "ines", name: "Inês Martins", role: "Terapias corporais" },
  { id: "sofia", name: "Sofia Costa", role: "Nails & beauty" },
];

export const clients = [
  { id: "client-1", name: "Marta Silva", email: "marta@email.pt", phone: "+351 912 345 678", registered: "12 Jan 2026", totalAppointments: 6 },
  { id: "client-2", name: "Joana Reis", email: "joana@email.pt", phone: "+351 913 222 014", registered: "04 Fev 2026", totalAppointments: 3 },
  { id: "client-3", name: "Ana Pereira", email: "ana@email.pt", phone: "+351 916 875 310", registered: "18 Mar 2026", totalAppointments: 2 },
];

export const initialAppointments: Appointment[] = [
  {
    id: "apt-1048",
    clientId: "client-1",
    clientName: "Marta Silva",
    serviceId: "therapeutic-massage",
    serviceName: "Massagem Terapêutica",
    date: "2026-08-28",
    time: "10:30",
    professional: "Inês Martins",
    total: 65,
    depositPercent: 20,
    depositPaid: 13,
    remaining: 52,
    paymentStatus: "Pago",
    status: "Approved",
    createdAt: "26 Ago 2026",
  },
  {
    id: "apt-1047",
    clientId: "client-2",
    clientName: "Joana Reis",
    serviceId: "gel-nails",
    serviceName: "Unhas de Gel",
    date: "2026-08-28",
    time: "14:00",
    professional: "Sofia Costa",
    total: 42,
    depositPercent: 10,
    depositPaid: 4.2,
    remaining: 37.8,
    paymentStatus: "Pago",
    status: "Pending Approval",
    createdAt: "26 Ago 2026",
  },
  {
    id: "apt-1046",
    clientId: "client-3",
    clientName: "Ana Pereira",
    serviceId: "lymphatic-drainage",
    serviceName: "Drenagem Linfática",
    date: "2026-08-29",
    time: "16:30",
    professional: "Inês Martins",
    total: 70,
    depositPercent: 20,
    depositPaid: 14,
    remaining: 56,
    paymentStatus: "Pago",
    status: "Pending Approval",
    createdAt: "25 Ago 2026",
  },
  {
    id: "apt-1045",
    clientId: "client-1",
    clientName: "Marta Silva",
    serviceId: "gel-nails",
    serviceName: "Unhas de Gel",
    date: "2026-08-22",
    time: "15:30",
    professional: "Sofia Costa",
    total: 42,
    depositPercent: 10,
    depositPaid: 4.2,
    remaining: 37.8,
    paymentStatus: "Pago",
    status: "Completed",
    createdAt: "19 Ago 2026",
  },
];

export const availableSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

export const dashboardStats = {
  todayAppointments: 8,
  pendingApproval: 3,
  todayRevenue: 482,
  servedClients: 6,
  cancellations: 1,
  popularService: "Massagem Terapêutica",
  busiestTime: "14:00 — 16:00",
  weeklyBookings: [5, 7, 6, 9, 8, 11, 8],
  weeklyRevenue: [290, 420, 360, 510, 482, 620, 482],
};

// Safe mock collection: real review records can be added later after customer consent.
// No fabricated review content, names, ratings, or testimonials are seeded here.
export const customerReviews: CustomerReview[] = [];

export const notifications = [
  { id: "n1", title: "Novo agendamento pago", detail: "Joana Reis · Unhas de Gel", time: "há 18 min", unread: true },
  { id: "n2", title: "Agendamento aprovado", detail: "Massagem Terapêutica · Marta Silva", time: "há 2 h", unread: false },
  { id: "n3", title: "Resumo diário pronto", detail: "O seu dia de 26 Ago está fechado.", time: "ontem", unread: false },
];

export const faqs = [
  { question: "Como faço um agendamento?", answer: "Escolha o serviço, selecione uma data e horário disponíveis e confirme o pedido com uma entrada de 10% ou 20%, conforme o serviço." },
  { question: "Preciso criar uma conta?", answer: "Para esta demonstração pode avançar com os dados de cliente apresentados. Numa versão real, a conta ficará associada ao seu histórico e pagamentos." },
  { question: "Quanto preciso pagar antecipadamente?", answer: "Cada serviço tem uma percentagem definida. Verá sempre o valor exato antes de confirmar o pedido." },
  { question: "O pagamento antecipado é reembolsável?", answer: "As condições de reembolso e alteração serão configuráveis pela administração na versão integrada." },
  { question: "Posso cancelar ou reagendar?", answer: "Sim. A área de cliente está preparada para solicitar alterações de acordo com as regras do negócio." },
];
