import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/Brand";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Galeria", "#galeria"],
  ["Contactos", "#contactos"],
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/dudsbeautyspa", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/351927979040", label: "WhatsApp" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full transition-all duration-300 ${scrolled
          ? "bg-[#fffdfb]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(61,48,47,0.08)] border-b border-[#eac4cf]/50"
          : "bg-[#fffdfb] border-b border-[#e7dfda]"
          }`}
      >
        <div className="w-full max-w-[1280px] mx-auto min-h-[64px] flex items-center justify-between gap-3 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-none group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 grid place-items-center overflow-hidden relative rounded-full ring-1 ring-[#eac4cf] transition-transform duration-300 group-hover:scale-105">
                <BrandMark />
              </div>
              <div className="flex flex-col leading-tight">
                <strong className="font-serif text-xl font-semibold tracking-tight text-[#3d302f]">
                  Duds
                </strong>
                <small className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#847a75]">
                  Beauty Spa
                </small>
              </div>
            </div>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-6">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={isHome ? href : `/${href}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wide text-[#3d302f] opacity-70 hover:opacity-100 hover:text-[#a96872] transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-[#eac4cf] after:transition-all after:duration-200 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Ações desktop */}
          <div className="flex items-center gap-2 flex-none">
            <div className="hidden sm:flex items-center gap-0.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 grid place-items-center rounded-full text-[#847a75] hover:bg-[#eac4cf] hover:text-[#3d302f] hover:scale-105 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <span className="hidden sm:inline-block w-px h-5 bg-[#e7dfda]" />

            <div className="flex items-center gap-1 text-[10px] font-semibold tracking-wide">
              <button className="text-[#3d302f] hover:text-[#3d302f] transition-colors">PT</button>
              <span className="text-[#e7dfda]">|</span>
              <button className="text-[#847a75] hover:text-[#3d302f] transition-colors">EN</button>
            </div>

            <span className="hidden md:inline-block w-px h-5 bg-[#e7dfda]" />

            <Link
              href="/login"
              className="hidden md:inline-flex text-xs font-semibold text-[#847a75] hover:text-[#a96872] transition-colors"
            >
              Login
            </Link>

            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-1.5 min-h-[34px] px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eac4cf] text-[#3d302f] shadow-[0_2px_10px_rgba(234,196,207,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(234,196,207,0.5)] transition-all duration-200"
            >
              Agendar <ArrowUpRight size={12} />
            </Link>

            <button
              className="md:hidden w-9 h-9 grid place-items-center rounded-full text-[#3d302f] hover:bg-[#fff0ee] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#eac4cf]"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay escuro (backdrop) */}
      <div
        className={`fixed inset-0 bg-[#3d302f]/25 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* ─── MENU MOBILE REFINADO ─── */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[340px] bg-[#fffdfb] shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Brilho decorativo no topo da gaveta */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#eac4cf] opacity-30 blur-3xl"
        />

        {/* Cabeçalho do menu com logo e botão X */}
        <div className="relative flex items-center justify-between px-6 pt-8 pb-4 border-b border-[#e7dfda]">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 grid place-items-center overflow-hidden relative rounded-full ring-1 ring-[#eac4cf]">
              <BrandMark />
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="font-serif text-lg font-semibold tracking-tight text-[#3d302f]">
                Duds
              </strong>
              <small className="text-[5.5px] font-bold uppercase tracking-[0.18em] text-[#847a75]">
                Beauty Spa
              </small>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 grid place-items-center rounded-full hover:bg-[#fff0ee] text-[#847a75] hover:text-[#a96872] transition-colors"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links de navegação — agora com mais requinte */}
        <nav className="relative flex flex-col px-6 py-6 gap-0.5">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-[#e7dfda]/60 text-xl font-serif font-medium text-[#3d302f] hover:text-[#a96872] transition-colors duration-200"
            >
              {label}
              <ArrowUpRight
                size={16}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#a96872]"
              />
            </a>
          ))}
        </nav>

        {/* Separador elegante */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#eac4cf] to-transparent" />

        {/* Botões de acção — Login e Agendar */}
        <div className="px-6 py-6 flex flex-col gap-3">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full h-12 rounded-full border border-[#e7dfda] text-sm font-medium text-[#847a75] hover:border-[#a96872] hover:bg-[#fff0ee] hover:text-[#a96872] transition-all duration-200"
          >
            Login
          </Link>
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full h-12 rounded-full text-sm font-semibold bg-[#eac4cf] text-[#3d302f] shadow-[0_3px_12px_rgba(234,196,207,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,196,207,0.5)] transition-all duration-200"
          >
            Agendar <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Separador suave */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#e7dfda] to-transparent" />

        {/* Redes sociais — agora com fundo suave e efeito elevado */}
        <div className="px-6 py-6 flex justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 grid place-items-center rounded-full bg-[#f8f4f2] text-[#847a75] border border-[#e7dfda] hover:border-[#a96872] hover:bg-[#eac4cf] hover:text-[#3d302f] hover:shadow-[0_3px_12px_rgba(234,196,207,0.4)] transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Rodapé minimalista */}
        <div className="relative px-6 pb-8 text-center text-[10px] text-[#847a75]/40 tracking-wider">
          © {new Date().getFullYear()} Duds Beauty Spa
        </div>
      </div>
    </>
  );
}
