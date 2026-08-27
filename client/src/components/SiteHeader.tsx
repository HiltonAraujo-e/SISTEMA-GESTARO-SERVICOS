// import { useState } from "react";
// import { Link, useLocation } from "wouter";
// import { ArrowUpRight, Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
// import { BrandMark } from "@/components/Brand";

// const links = [
//   ["Início", "#inicio"],
//   ["Sobre", "#sobre"],
//   ["Serviços", "#servicos"],
//   ["Galeria", "#galeria"],
//   ["Contactos", "#contactos"],
// ];

// const socials = [
//   { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
//   { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
//   { icon: MessageCircle, href: "https://wa.me/351912345678", label: "WhatsApp" },
// ];

// export default function SiteHeader() {
//   const [open, setOpen] = useState(false);
//   const [location] = useLocation();
//   const isHome = location === "/";

//   return (
//     <header className="site-header">
//       <div className="nav-shell">
//         {/* Logo + nome */}
//         <BrandMark />

//         {/* Navegação principal (desktop) */}
//         <nav className="main-nav" aria-label="Navegação principal">
//           {links.map(([label, href]) => (
//             <a
//               key={href}
//               href={isHome ? href : `/${href}`}
//               onClick={() => setOpen(false)}
//             >
//               {label}
//             </a>
//           ))}
//         </nav>

//         {/* Barra direita: redes sociais, idioma, login, agendar */}
//         <div className="header-actions">
//           {/* Redes sociais */}
//           <div className="social-links" aria-label="Redes sociais">
//             {socials.map(({ icon: Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="social-link"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>

//           {/* Seletor de idioma */}
//           <div className="language-switch" aria-label="Idioma">
//             <button className="is-active">PT</button>
//             <span>|</span>
//             <button>EN</button>
//           </div>

//           {/* Login e Agendar (desktop) */}
//           <Link href="/login" className="text-link header-login">
//             Login <ArrowUpRight size={14} />
//           </Link>
//           <Link href="/book" className="button button--blush header-cta">
//             Agendar <ArrowUpRight size={15} />
//           </Link>

//           {/* Botão menu mobile */}
//           <button
//             className="menu-toggle"
//             onClick={() => setOpen((v) => !v)}
//             aria-label={open ? "Fechar menu" : "Abrir menu"}
//             aria-expanded={open}
//           >
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Menu mobile (overlay) */}
//         <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
//           <div className="mobile-menu-inner">
//             {links.map(([label, href]) => (
//               <a
//                 key={href}
//                 href={isHome ? href : `/${href}`}
//                 onClick={() => setOpen(false)}
//                 className="mobile-link"
//               >
//                 {label}
//               </a>
//             ))}
//             <div className="mobile-actions">
//               <Link href="/login" className="text-link" onClick={() => setOpen(false)}>
//                 Login <ArrowUpRight size={14} />
//               </Link>
//               <Link href="/book" className="button button--blush" onClick={() => setOpen(false)}>
//                 Agendar <ArrowUpRight size={15} />
//               </Link>
//             </div>
//             <div className="mobile-social">
//               {socials.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="social-link"
//                 >
//                   <Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// components/SiteHeader.tsx
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
    <header className="site-header">
      <div className="nav-shell">
        {/* Bloco 1: Logo + nome */}
        <div className="header-brand">
          <BrandMark />
        </div>

        {/* Bloco 2: Navegação principal (desktop) */}
        <nav className="main-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Bloco 3: Ações (redes sociais, idioma, login, agendar) */}
        <div className="header-actions">
          {/* Redes sociais */}
          <div className="social-links" aria-label="Redes sociais">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Separador */}
          <span className="action-divider" />

          {/* Idioma */}
          <div className="language-switch" aria-label="Idioma">
            <button className="is-active">PT</button>
            <span>|</span>
            <button>EN</button>
          </div>

          {/* Separador */}
          <span className="action-divider" />

          {/* Login */}
          <Link href="/login" className="text-link header-login">
            Login
          </Link>

          {/* Agendar (botão destacado) */}
          <Link href="/book" className="button button--blush header-cta">
            Agendar <ArrowUpRight size={14} />
          </Link>

          {/* Botão menu mobile */}
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile (overlay) */}
        <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
          <div className="mobile-menu-inner">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={isHome ? href : `/${href}`}
                onClick={() => setOpen(false)}
                className="mobile-link"
              >
                {label}
              </a>
            ))}
            <div className="mobile-actions">
              <Link href="/login" className="text-link" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link href="/book" className="button button--blush" onClick={() => setOpen(false)}>
                Agendar <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="mobile-social">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}