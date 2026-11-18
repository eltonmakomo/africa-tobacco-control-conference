import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ARTICLE_53 } from "@/lib/conference";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-forest-foreground">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-swirl opacity-30 animate-spin-slow" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="inline-block rounded-2xl bg-primary px-4 py-3"><Logo variant="reverse" className="h-16" /></div>
          <p className="mt-6 max-w-sm text-sm text-forest-foreground/75">
            Convened by The African Capacity Building Foundation, the African Union's specialized agency for capacity development.
          </p>
        </div>
        <div className="md:col-span-3">
          <h3 className="eyebrow text-forest-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {([["/about","About"],["/program","Program"],["/call-for-abstracts","Call for Abstracts"],["/participate","Participate"],["/knowledge-hub","Knowledge Hub"],["/media","Media"]] as const).map(([to,l]) => (
              <li key={to}><Link to={to} className="text-forest-foreground/80 hover:text-forest-foreground">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="eyebrow text-forest-foreground">Information</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/faq" className="text-forest-foreground/80 hover:text-forest-foreground">FAQs</Link></li>
            <li><Link to="/media" hash="media-kit" className="text-forest-foreground/80 hover:text-forest-foreground">Brand guidelines</Link></li>
            <li><Link to="/legal" hash="privacy" className="text-forest-foreground/80 hover:text-forest-foreground">Privacy policy</Link></li>
            <li><Link to="/legal" hash="legal-notice" className="text-forest-foreground/80 hover:text-forest-foreground">Legal notice</Link></li>
            <li><Link to="/legal" hash="article-5-3" className="text-forest-foreground/80 hover:text-forest-foreground">Article 5.3 statement</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="eyebrow text-forest-foreground">Contact</h3>
          <p className="mt-4 text-sm text-forest-foreground/80">ACBF Communications Unit</p>
          <a href="https://www.acbf-pact.org" target="_blank" rel="noreferrer" className="mt-1 block text-sm text-forest-foreground underline hover:opacity-80">acbf-pact.org</a>
        </div>
      </div>
      <div className="relative border-t border-forest-foreground/15">
        <div className="mx-auto max-w-7xl px-5 py-6">
          <p className="text-xs font-medium text-forest-foreground/80">{ARTICLE_53}</p>
          <p className="mt-3 text-xs text-forest-foreground/50">© 2027 The African Capacity Building Foundation</p>
        </div>
      </div>
    </footer>
  );
}
