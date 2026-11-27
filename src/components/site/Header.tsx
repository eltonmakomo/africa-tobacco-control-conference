import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export const NAV_EN = [
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/speakers", label: "Speakers" },
  { to: "/knowledge-hub", label: "Knowledge Hub" },
  { to: "/media", label: "Media" },
  { to: "/past-editions", label: "Past Editions" },
] as const;

export const NAV_FR = [
  { to: "/about", label: "À propos" },
  { to: "/program", label: "Programme" },
  { to: "/speakers", label: "Intervenants" },
  { to: "/knowledge-hub", label: "Connaissances" },
  { to: "/media", label: "Médias" },
  { to: "/past-editions", label: "Éditions passées" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, fr } = useLang();
  const nav = fr ? NAV_FR : NAV_EN;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-10">
        <Link to="/" aria-label="ACTCD 2027 home" className="shrink-0">
          <Logo className="h-12 md:h-14" />
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
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
          <Button asChild className="rounded-full bg-accent px-5 font-semibold text-accent-foreground shadow-none hover:bg-accent/90">
            <a href={`mailto:comms@theacbf.org?subject=${encodeURIComponent(fr ? "Inscription — ACTCD 2027" : "Registration — ACTCD 2027")}`}>
              {fr ? "S’inscrire" : "Register"}
            </a>
          </Button>
          <button className="rounded-full p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 xl:hidden" aria-label="Mobile">
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
        </nav>
      )}
    </header>
  );
}
