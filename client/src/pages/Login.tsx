import { useState } from "react";
import { useLocation, Link } from "wouter";
import { Eye, EyeOff, Loader2, ArrowRight, Mail, Lock, Sparkles, ShieldCheck, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Arrow } from "@radix-ui/react-tooltip";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // try {
    //   await login(email, password);
    //   navigate("/dashboard");
    // } catch (err: any) {
    //   const msg = err?.response?.data?.message || err?.message || "Credenciais inválidas.";
    //   setError(msg);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex bg-ivory">
      {/* ── LADO ESQUERDO — imagem do spa + narrativa ── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d302f]/75 via-[#3d302f]/50 to-[#3d302f]/90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-rosewood/25 via-transparent to-transparent" />

        <div className="relative z-10 flex items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
            <Sparkles size={18} className="text-blush" />
          </span>
          <div>
            <p className="text-ivory text-sm font-bold tracking-widest uppercase">Duds Beauty Spa</p>
            <p className="text-ivory/60 text-[10px] font-medium tracking-wider">Painel de gestão</p>
          </div>
        </div>

        <div className="relative z-10 max-w-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush">
            Cuidado, todos os dias
          </span>
          <h1 className="font-serif text-5xl font-medium text-ivory leading-[1.1] mt-3">
            O seu momento<br />
            <span className="italic font-light text-blush">começa aqui.</span>
          </h1>
          <p className="text-ivory/70 text-sm leading-relaxed mt-4">
            Aceda à área reservada para gerir marcações, serviços e clientes
            com o mesmo cuidado que oferece em cada ritual.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-serif text-2xl font-semibold text-ivory">4.9</p>
              <p className="text-ivory/50 text-xs uppercase tracking-wider">Avaliação média</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold text-ivory">18</p>
              <p className="text-ivory/50 text-xs uppercase tracking-wider">Rituais</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold text-ivory">2</p>
              <p className="text-ivory/50 text-xs uppercase tracking-wider">Especialistas</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-ivory/40 text-[10px] tracking-widest">
          <ShieldCheck size={12} />
          Marcações simuladas para demonstração
        </div>
      </div>

      {/* ── LADO DIREITO — formulário ── */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-14 relative overflow-hidden">


        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blush/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blush/8 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-[420px] relative z-10">
          {/* Logo mobile */}
          <div className="lg:hidden flex items-center gap-3 mb-6">
            <span className="w-11 h-11 rounded-full bg-blush-soft flex items-center justify-center flex-none">
              <Sparkles size={18} className="text-rosewood" />
            </span>
            <div>
              <span className="block text-xs font-bold tracking-widest uppercase text-rosewood">
                Duds Beauty Spa
              </span>
              <span className="block text-[10px] text-muted">Painel de gestão</span>
            </div>
          </div>

          <div className="bg-paper rounded-[28px] shadow-soft border border-line overflow-visible relative">
            {/* Faixa de assinatura — gradiente rosewood > blush, ícone flutuando na borda */}
            <div className="relative rounded-t-[28px] bg-gradient-to-r from-rosewood to-[#c98fa0] px-8 pt-8 pb-12 text-center overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-6 w-28 h-28 bg-ink/10 rounded-full blur-2xl" />
              <span className="relative text-[10px] font-semibold uppercase tracking-[0.25em] text-white/85">
                Área reservada
              </span>
              <h2 className="relative font-serif text-3xl font-medium text-white leading-[1.1] mt-2">
                Bem-vinda <span className="italic font-light">de volta.</span>
              </h2>
            </div>

            {/* Avatar flutuando sobre a faixa */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[6.5rem] w-16 h-16 rounded-full bg-paper shadow-soft flex items-center justify-center border-4 border-paper">
              <span className="w-full h-full rounded-full bg-ink flex items-center justify-center">
                <Sparkles size={22} className="text-blush" />
              </span>
            </div>

            <div className="px-8 md:px-10 pt-12 pb-10">
              <p className="text-muted text-sm text-center mb-7">
                Insira as suas credenciais para continuar
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-[11px] font-semibold tracking-wide uppercase text-muted flex items-center gap-1.5"
                  >
                    <Mail size={12} /> Email
                  </label>
                  <div className="relative group">
                    <input
                      id="email"
                      type="email"
                      placeholder="exemplo@dudsbeauty.pt"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 pl-4 pr-4 rounded-xl border border-line bg-ivory text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition placeholder:text-muted/50"
                    />
                    <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 w-0 bg-rosewood rounded-full transition-all duration-300 group-focus-within:w-full" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="password"
                    className="text-[11px] font-semibold tracking-wide uppercase text-muted flex items-center gap-1.5"
                  >
                    <Lock size={12} /> Palavra-passe
                  </label>
                  <div className="relative group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full h-12 pl-4 pr-11 rounded-xl border border-line bg-ivory text-sm focus:border-rosewood focus:ring-2 focus:ring-rosewood/15 outline-none transition placeholder:text-muted/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Ocultar palavra-passe" : "Mostrar palavra-passe"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-rosewood transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 w-0 bg-rosewood rounded-full transition-all duration-300 group-focus-within:w-full" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-rosewood font-semibold hover:underline underline-offset-2"
                  >
                    Esqueceu a palavra-passe?
                  </Link>
                </div>

                {error && (
                  <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-none" />
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full h-12 rounded-full bg-ink text-white text-sm font-semibold flex items-center justify-center gap-2 overflow-hidden hover:bg-[#5a4544] transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> A entrar…
                    </>
                  ) : (
                    <>
                      Entrar no sistema <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center gap-4 my-7">
                <div className="flex-1 h-px bg-line" />
                <span className="text-[11px] text-muted/60 font-medium tracking-wider">OU</span>
                <div className="flex-1 h-px bg-line" />
              </div>

              <Link
                href="/register"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-line hover:border-rosewood hover:bg-blush-soft/40 transition-all text-sm font-semibold text-ink group"
              >
                Criar conta
                <ArrowRight size={14} className="text-muted transition-transform group-hover:translate-x-0.5" />
              </Link>

              <p className="text-center text-muted/50 text-[10px] font-medium tracking-wider mt-6 flex items-center justify-center gap-1">
                <ArrowLeft size={14} /><Link href="/">Voltar ao início</Link>
              </p>
            </div>
          </div>

          <p className="text-center text-muted/50 text-[10px] font-medium tracking-wider mt-6">
            © {new Date().getFullYear()} Duds Beauty Spa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}


