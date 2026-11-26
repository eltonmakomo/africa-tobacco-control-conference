import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ARTICLE_53, ARTICLE_53_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { fr } = useLang();
  const explore: [string, string][] = fr
    ? [["/about", "À propos"], ["/program", "Programme"], ["/call-for-abstracts", "Appel à résumés"], ["/past-editions", "Éditions passées"], ["/knowledge-hub", "Connaissances"]]
    : [["/about", "About"], ["/program", "Program"], ["/call-for-abstracts", "Call for Abstracts"], ["/past-editions", "Past Editions"], ["/knowledge-hub", "Knowledge Hub"]];

  return (
    <footer className="relative overflow-hidden bg-forest text-forest-foreground">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <div className="inline-block rounded-2xl bg-primary px-4 py-3"><Logo variant="reverse" className="h-16" /></div>
          <p className="mt-6 max-w-sm text-sm text-forest-foreground/75">
            {fr
              ? "Convoquée par The African Capacity Building Foundation, l'agence spécialisée de l'Union africaine pour le développement des capacités."
              : "Convened by The African Capacity Building Foundation, the African Union's specialized agency for capacity development."}
          </p>
        </div>
        <div className="md:col-span-3">
          <h3 className="eyebrow text-forest-foreground">{fr ? "Explorer" : "Explore"}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {explore.map(([to, l]) => (
              <li key={to}><Link to={to} className="text-forest-foreground/80 hover:text-forest-foreground">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <h3 className="eyebrow text-forest-foreground">Contact</h3>
          <p className="mt-4 text-sm text-forest-foreground/80">{fr ? "Unité de communication de l'ACBF" : "ACBF Communications Unit"}</p>
          <a href="https://www.acbf-pact.org" target="_blank" rel="noreferrer" className="mt-1 block text-sm text-forest-foreground underline hover:opacity-80">acbf-pact.org</a>
        </div>
      </div>
      <div className="relative border-t border-forest-foreground/15">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-10">
          <p className="text-xs font-medium text-forest-foreground/80">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
          <p className="mt-3 text-xs text-forest-foreground/50">© 2027 The African Capacity Building Foundation</p>
        </div>
      </div>
    </footer>
  );
}
