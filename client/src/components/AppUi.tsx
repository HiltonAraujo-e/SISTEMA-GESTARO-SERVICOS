import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Bell, CalendarDays, ChevronRight, CircleUserRound, LayoutDashboard, LogOut, Menu, Settings2, Sparkles, UsersRound, X } from "lucide-react";
import type { AppointmentStatus } from "@/services/mockData";
import { useApp } from "@/contexts/AppContext";
import { BrandMark, Eyebrow } from "@/components/Brand";

const statusLabels: Record<AppointmentStatus, string> = {
  "Pending Payment": "Pagamento pendente",
  "Payment Received": "Pagamento recebido",
  "Pending Approval": "Aguardando aprovação",
  Approved: "Aprovado",
  Rejected: "Rejeitado",
  Cancelled: "Cancelado",
  Completed: "Concluído",
};

export function StatusBadge({ status }: { status: AppointmentStatus }) {
  return <span className={`status-badge status-${status.toLowerCase().replaceAll(" ", "-")}`}><span />{statusLabels[status]}</span>;
}

export function SectionHeading({ eyebrow, title, body, action }: { eyebrow: string; title: React.ReactNode; body?: string; action?: React.ReactNode }) {
  return <div className="section-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{body && <p>{body}</p>}</div>{action}</div>;
}

export function AppShell({ children, admin = false }: { children: React.ReactNode; admin?: boolean }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { role, client, logout } = useApp();
  const adminItems = [
    ["Resumo", "/admin", LayoutDashboard],
    ["Agendamentos", "/admin/appointments", CalendarDays],
    ["Serviços", "/admin/services", Sparkles],
    ["Clientes", "/admin/clients", UsersRound],
  ] as const;
  const clientItems = [
    ["A minha conta", "/dashboard", LayoutDashboard],
    ["Agendamentos", "/dashboard#appointments", CalendarDays],
    ["Perfil", "/dashboard#profile", CircleUserRound],
  ] as const;
  const items = admin ? adminItems : clientItems;

  return <div className={`app-shell ${admin ? "app-shell--admin" : ""}`}>
    <aside className={`app-sidebar ${open ? "app-sidebar--open" : ""}`}>
      <div className="sidebar-top"><BrandMark compact /><button className="sidebar-close" onClick={() => setOpen(false)}><X size={18} /></button></div>
      <div className="sidebar-user"><div className="avatar">{admin ? "DS" : "MS"}</div><div><span>{admin ? "Duds Beauty Spa" : "Olá, Marta"}</span><small>{admin ? "Área administrativa" : "Área de cliente"}</small></div></div>
      <nav className="app-nav">{items.map(([label, href, Icon]) => <Link key={href} href={href} className={location === href || (href === "/admin" && location === "/admin") ? "is-current" : ""} onClick={() => setOpen(false)}><Icon size={17} />{label}</Link>)}</nav>
      <div className="sidebar-bottom"><div className="sidebar-note"><span className="note-dot" /><div><strong>{admin ? "Dia em curso" : "Próximo ritual"}</strong><small>{admin ? "26 Ago · 8 marcações" : "28 Ago · 10:30"}</small></div></div><Link href="/" className="sidebar-link"><ChevronRight size={15} />Visitar o site</Link><button className="sidebar-link sidebar-logout" onClick={logout}><LogOut size={15} />Terminar sessão</button></div>
    </aside>
    <main className="app-main"><div className="app-mobile-bar"><button onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu size={19} /></button><BrandMark compact /><div className="mobile-bar-icon"><Bell size={18} /></div></div>{children}</main>
  </div>;
}

export function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: React.ReactNode; description: string; action?: React.ReactNode }) {
  return <div className="page-intro"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}
