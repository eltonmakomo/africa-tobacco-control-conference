import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/call-for-abstracts", label: "Call for Abstracts" },
  { to: "/participate", label: "Participate" },
  { to: "/knowledge-hub", label: "Knowledge Hub" },
  { to: "/media", label: "Media" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2.5">
        <Link to="/" aria-label="ACTCD 2027 home" className="shrink-0">
          <Logo className="h-12 md:h-14" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => (
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
          <div className="hidden items-center rounded-full border border-border p-0.5 text-xs font-semibold sm:flex" aria-label="Language">
            <span className="rounded-full bg-primary px-2.5 py-1 text-primary-foreground">EN</span>
            <span className="px-2.5 py-1 text-muted-foreground" title="Version française à venir">FR</span>
          </div>
          <Link to="/participate" hash="registration" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-gold transition hover:-translate-y-0.5 sm:inline-flex">
            Register
          </Link>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary">
              {n.label}
            </Link>
          ))}
          <Link to="/participate" hash="registration" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-accent-foreground">
            Register
          </Link>
        </nav>
      )}
    </header>
  );
}
