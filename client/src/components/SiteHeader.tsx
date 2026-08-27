import { useState } from "react";
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
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/351912345678", label: "WhatsApp" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <>
      <header className="fixed top-0 z-30 w-full bg-[#fffdfb] border-b border-[#e7dfda] shadow-sm">
        <div className="w-full max-w-[1280px] mx-auto min-h-[64px] flex items-center justify-between gap-3 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center flex-none">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 grid place-items-center overflow-hidden relative">
                <BrandMark />
                <span className="absolute inset-0 rounded-full border border-current opacity-10 pointer-events-none" />
              </div>
              <div className="flex flex-col leading-tight">
                <strong className="font-serif text-xl font-semibold tracking-tight text-[#2d2524]">
                  Duds
                </strong>
                <small className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#847a75]">
                  Beauty Studio
                </small>
              </div>
            </div>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-6">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={isHome ? href : `/${href}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wide text-[#2d2524] opacity-70 hover:opacity-100 hover:text-[#a96872] transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-[#eac4cf] after:transition-all after:duration-200 hover:after:w-full"
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
                  className="w-7 h-7 grid place-items-center rounded-full text-[#847a75] hover:bg-[#fff0ee] hover:text-[#a96872] hover:scale-105 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <span className="hidden sm:inline-block w-px h-5 bg-[#e7dfda]" />

            <div className="flex items-center gap-1 text-[10px] font-semibold tracking-wide">
              <button className="text-[#2d2524] hover:text-[#2d2524] transition-colors">PT</button>
              <span className="text-[#e7dfda]">|</span>
              <button className="text-[#847a75] hover:text-[#2d2524] transition-colors">EN</button>
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
              className="hidden sm:inline-flex items-center gap-1.5 min-h-[34px] px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eac4cf] text-[#2d2524] shadow-[0_2px_10px_rgba(234,196,207,0.25)] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(234,196,207,0.35)] transition-all duration-200"
            >
              Agendar <ArrowUpRight size={12} />
            </Link>

            <button
              className="md:hidden w-8 h-8 grid place-items-center text-[#2d2524]"
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
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* Menu mobile (overlay) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[340px] bg-[#fffdfb] shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cabeçalho do menu com logo e botão X */}
        <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-[#e7dfda]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 grid place-items-center overflow-hidden relative">
              <BrandMark />
              <span className="absolute inset-0 rounded-full border border-current opacity-10 pointer-events-none" />
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="font-serif text-lg font-semibold tracking-tight text-[#2d2524]">
                Duds
              </strong>
              <small className="text-[5.5px] font-bold uppercase tracking-[0.18em] text-[#847a75]">
                Beauty Studio
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

        {/* Links de navegação */}
        <nav className="flex flex-col px-6 py-4 gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              onClick={() => setOpen(false)}
              className="text-xl font-serif font-medium py-3 border-b border-[#e7dfda] text-[#2d2524] hover:text-[#a96872] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Ações (Login + Agendar) */}
        <div className="px-6 flex flex-col gap-2.5 mt-2">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-[#847a75] hover:text-[#a96872] transition-colors text-center"
          >
            Login
          </Link>
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 rounded-full text-sm font-semibold bg-[#eac4cf] text-[#2d2524] shadow-[0_3px_12px_rgba(234,196,207,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(234,196,207,0.35)] transition-all duration-200"
          >
            Agendar <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Redes sociais */}
        <div className="px-6 mt-6 pt-4 border-t border-[#e7dfda] flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 grid place-items-center rounded-full border border-[#e7dfda] text-[#847a75] hover:border-[#a96872] hover:text-[#a96872] hover:bg-[#fff0ee] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}