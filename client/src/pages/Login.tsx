// Quiet Luxury Ritual reminder: authentication is presented as a calm doorway, with clear mock-state disclosure and no false external integration.
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, LockKeyhole, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import { BrandMark, Eyebrow } from "@/components/Brand";
import { useApp } from "@/contexts/AppContext";
import type { UserRole } from "@/services/mockData";

export default function Login() {
  const [, navigate] = useLocation();
  const { login } = useApp();
  const [role, setRole] = useState<UserRole>("client");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(role === "admin" ? "admin@dudsbeautyspa.pt" : "marta@email.pt");

  const handleRole = (nextRole: UserRole) => {
    setRole(nextRole);
    setEmail(nextRole === "admin" ? "admin@dudsbeautyspa.pt" : "marta@email.pt");
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    login(role);
    navigate(role === "admin" ? "/admin" : "/dashboard");
  };

  return <div className="auth-page"><SiteHeader /><main className="auth-main"><div className="auth-visual"><img src="/manus-storage/duds-studio_e0ab8004.png" alt="Interior do Duds Beauty Spa" /><div className="auth-visual-copy"><Eyebrow light>O seu espaço de cuidado</Eyebrow><h1>Volte sempre<br /><em>a si.</em></h1><span>“O cuidado começa quando decide reservar tempo para si.”</span></div></div><div className="auth-form-wrap"><Link href="/" className="back-link"><ArrowLeft size={15} />Voltar ao site</Link><div className="auth-form-head"><BrandMark compact /><Eyebrow>Área reservada</Eyebrow><h2>Bom ter<br /><em>cá.</em></h2><p>Entre na sua conta para acompanhar pedidos, pagamentos e próximos momentos.</p></div><div className="role-switch"><button className={role === "client" ? "is-active" : ""} onClick={() => handleRole("client")}>Cliente</button><button className={role === "admin" ? "is-active" : ""} onClick={() => handleRole("admin")}>Administradora</button></div><form onSubmit={submit} className="auth-form"><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Palavra-passe<div className="input-with-icon"><input type={showPassword ? "text" : "password"} defaultValue="duds2026" required /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label="Mostrar palavra-passe">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label><div className="auth-form-meta"><span><Check size={14} />Sessão segura</span><button type="button">Recuperar palavra-passe</button></div><button className="button button--dark button--full" type="submit">Entrar como {role === "admin" ? "administradora" : "cliente"} <ArrowRight size={16} /></button></form><div className="auth-demo-note"><Sparkles size={16} /><div><strong>Modo demonstração</strong><p>Este acesso é simulado no frontend. Pode entrar com os dados pré-preenchidos para explorar o produto.</p></div></div><div className="auth-signup">Ainda não tem conta? <button onClick={() => handleRole("client")}>Criar conta de cliente</button></div></div></main></div>;
}
