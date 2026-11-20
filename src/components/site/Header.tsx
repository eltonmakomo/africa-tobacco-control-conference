import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";

const NAV_EN = [
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/call-for-abstracts", label: "Call for Abstracts" },
  { to: "/participate", label: "Participate" },
  { to: "/knowledge-hub", label: "Knowledge Hub" },
  { to: "/media", label: "Media" },
] as const;

const NAV_FR = [
  { to: "/about", label: "À propos" },
  { to: "/program", label: "Programme" },
  { to: "/call-for-abstracts", label: "Appel à résumés" },
  { to: "/participate", label: "Participer" },
  { to: "/knowledge-hub", label: "Connaissances" },
  { to: "/media", label: "Médias" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, fr } = useLang();
  const nav = fr ? NAV_FR : NAV_EN;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2.5">
        <Link to="/" aria-label="ACTCD 2027 home" className="shrink-0">
          <Logo className="h-12 md:h-14" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-border p-0.5 text-xs font-semibold sm:flex" aria-label="Language / Langue">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-2.5 py-1 transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`rounded-full px-2.5 py-1 transition ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
            >
              FR
            </button>
          </div>
          <Link to="/participate" hash="registration" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-gold transition hover:-translate-y-0.5 sm:inline-flex">
            {fr ? "S'inscrire" : "Register"}
          </Link>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary">
              {n.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-2 px-3" aria-label="Language / Langue">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${lang === "fr" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
            >
              FR
            </button>
          </div>
          <Link to="/participate" hash="registration" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-accent-foreground">
            {fr ? "S'inscrire" : "Register"}
          </Link>
        </nav>
      )}
    </header>
  );
}
