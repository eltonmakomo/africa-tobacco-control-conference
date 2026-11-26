import heroImg from "@/assets/cocktail-group.jpg";
import exhibitImg from "@/assets/exhibit-presenter.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import nairobi from "@/assets/nairobi.jpg";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53, ARTICLE_53_FR, PARTNERSHIP_PACKAGES, PARTNERSHIP_PACKAGES_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/participate")({
  head: () => ({
    meta: [
      { title: "Participate · Register, Partner, Exhibit · ACTCD 2027" },
      { name: "description", content: "Register in person or virtually, become a partner or sponsor, exhibit, and plan travel to Nairobi for ACTCD 2027." },
      { property: "og:title", content: "Participate in ACTCD 2027" },
      { property: "og:description", content: "Registration, partnership, exhibition, travel and venue." },
    ],
  }),
  component: Participate,
});

type TierAccent = { line: string; chip: string; ring: string };

const BRONZE_ACCENT: TierAccent = { line: "bg-bronze", chip: "bg-bronze/12 text-bronze", ring: "" };

const TIER_ACCENT: Record<string, TierAccent> = {
  Bronze: BRONZE_ACCENT,
  Silver: { line: "bg-silver", chip: "bg-silver/15 text-silver", ring: "" },
  Gold: { line: "bg-gold", chip: "bg-gold/18 text-accent-foreground", ring: "ring-2 ring-gold" },
  Argent: { line: "bg-silver", chip: "bg-silver/15 text-silver", ring: "" },
  Or: { line: "bg-gold", chip: "bg-gold/18 text-accent-foreground", ring: "ring-2 ring-gold" },
};

function Participate() {
  const [enquiry, setEnquiry] = useState<string | null>(null);
  const { fr } = useLang();
  const packages = fr ? PARTNERSHIP_PACKAGES_FR : PARTNERSHIP_PACKAGES;
  const travelCards = fr
    ? ["Lieu", "Conditions de visa pour le Kenya", "Hébergement et hôtels partenaires", "Transferts aéroport", "Déplacements locaux"]
    : ["Venue", "Visa requirements for Kenya", "Accommodation & preferred hotels", "Airport transfers", "Local travel"];

  return (
    <>
      <PageHero image={heroImg} eyebrow={fr ? "Participer" : "Participate"} title={fr ? "Rejoignez la communauté africaine de la lutte antitabac à Nairobi" : "Join Africa's tobacco control community in Nairobi"} />
      <Section id="registration" eyebrow={fr ? "Inscription" : "Registration"} title={fr ? "En personne ou en ligne" : "In person or virtual"}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg text-foreground/80">
            {fr ? (
              <>
                <p>L'inscription ouvre sur cette page pour une participation en personne ou en ligne. La Conférence accueille environ 300 participants sur place, et jusqu'à 500 en comptant les participants virtuels : décideurs, chercheurs, société civile, universitaires, médias, jeunes et partenaires de développement.</p>
                <p>L'interprétation simultanée en anglais et en français permet une participation pleine et entière.</p>
              </>
            ) : (
              <>
                <p>Registration opens on this page for in-person and virtual participation. The Conference welcomes about 300 participants on site, and up to 500 including virtual, including policymakers, researchers, civil society, academia, media, youth and development partners.</p>
                <p>Simultaneous interpretation in English and French supports full participation.</p>
              </>
            )}
          </div>
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground shadow-elegant transition hover:-translate-y-1 hover:shadow-card-lg">
            <div className="grid grid-cols-2 gap-4">
              {(fr ? [["En personne", "Nairobi, Kenya"], ["En ligne", "Participez en ligne"]] : [["In person", "Nairobi, Kenya"], ["Virtual", "Join online"]]).map(([a, b]) => <div key={a} className="glass rounded-2xl p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold text-forest-foreground">{a}</p><p className="text-sm text-forest-foreground/75">{b}</p></div>)}
            </div>
            <button disabled className="mt-6 w-full cursor-not-allowed rounded-full bg-forest-foreground/85 py-4 font-semibold text-primary/70">{fr ? "S'inscrire sur Whova · ouverture prochaine" : "Register on Whova · opening soon"}</button>
            <p className="mt-3 text-center text-xs text-forest-foreground/60">{fr ? "L'inscription est gérée via Whova." : "Registration is managed through Whova."}</p>
          </div>
        </div>
      </Section>
      <Section eyebrow={fr ? "Appel à résumés" : "Call for Abstracts"} title={fr ? "Présentez vos travaux" : "Present your work"} className="border-t border-border/60">
        <Link to="/call-for-abstracts" className="inline-flex rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground">{fr ? "Voir l'appel à résumés" : "See the Call for Abstracts"}</Link>
      </Section>
      <Section id="packages" eyebrow={fr ? "Devenez partenaire ou sponsor" : "Become a partner or sponsor"} title={fr ? "Formules de partenariat par niveau" : "Tiered partnership packages"}>
        <p className="max-w-3xl text-foreground/80">
          {fr
            ? "La Conférence propose des opportunités de partenariat et de parrainage à travers des formules par niveau, ainsi que des options d'exposition, coordonnées par le Comité de financement du parrainage et de l'exposition. Les partenaires potentiels joignent le Comité via les coordonnées indiquées sur cette page."
            : "The Conference offers partnership and sponsorship opportunities through tiered packages, alongside exhibition options, coordinated by the Sponsorship and Exhibition Financing Committee. Prospective partners reach the Committee through the contact details on this page."}
        </p>
        <p className="mt-6 max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 font-medium shadow-card transition hover:shadow-card-lg">
          {fr ? <>Tous les partenariats respectent les garde-fous contre les conflits d'intérêts et l'article 5.3 de la CCLAT de l'OMS. {ARTICLE_53_FR}</> : <>All partnerships follow the conflict-of-interest safeguards and WHO FCTC Article 5.3. {ARTICLE_53}</>}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((p) => {
            const accent = TIER_ACCENT[p.tier] ?? BRONZE_ACCENT;
            return (
              <div key={p.tier} className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${accent.ring}`}>
                <div className={`absolute inset-x-0 top-0 h-1.5 ${accent.line}`} />
                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${accent.chip}`}>{p.tier}</span>
                  {p.featured && <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{fr ? "Le plus demandé" : "Most requested"}</span>}
                </div>
                <p className="mt-5 text-3xl font-bold">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {p.includes.map((x) => (
                    <li key={x} className="flex gap-2.5"><span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary" />{x}</li>
                  ))}
                </ul>
                <button onClick={() => setEnquiry(p.tier)} className="mt-7 w-full rounded-full bg-primary py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-card-lg">{fr ? "Réserver" : "Book now"}</button>
              </div>
            );
          })}
        </div>
        {enquiry && (
          <div className="mt-6 max-w-3xl rounded-2xl border-l-4 border-primary bg-secondary/70 p-5 text-sm shadow-card">
            <p className="font-semibold">{fr ? `Formule ${enquiry} — demande notée sur cette page` : `${enquiry} package — enquiry noted on this page`}</p>
            <p className="mt-1 text-foreground/75">{fr ? "Rien n'a encore été envoyé. Les demandes de réservation ouvriront une fois les coordonnées du Comité confirmées." : "Nothing has been sent yet. Booking requests open once the Committee contact details are confirmed."}</p>
          </div>
        )}
      </Section>
      <Section id="exhibit" eyebrow={fr ? "Exposez avec nous" : "Exhibit with us"} title={fr ? "Présentez vos innovations" : "Showcase your innovations"} className="border-t border-border/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-foreground/80">
              {fr
                ? "Les exposants présentent leurs innovations, leurs recherches et leurs bonnes pratiques dans l'espace d'exposition. Les organisateurs d'événements parallèles et d'expositions font leur demande via cette section."
                : "Exhibitors showcase innovations, research and best practices in the exhibition area. Organizers of side events and exhibitions apply through this section."}
            </p>
            <Link to="/participate" hash="packages" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">{fr ? "Réserver" : "Book now"} <span aria-hidden>→</span></Link>
          </div>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={exhibitImg} alt={fr ? "Un présentateur lors d'une session de la 2e ACTCD, Accra 2024" : "A presenter at a 2nd ACTCD session, Accra 2024"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
      <section id="travel" className="relative scroll-mt-24 overflow-hidden text-forest-foreground">
        <img src={nairobi} alt={fr ? "La silhouette de Nairobi au coucher du soleil" : "Nairobi skyline at sunset"} loading="lazy" width={1600} height={1008} className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-5 py-24">
          <p className="eyebrow text-forest-foreground/90">{fr ? "Voyage et lieu" : "Travel and venue"}</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">{fr ? "Bienvenue à Nairobi" : "Welcome to Nairobi"}</h2>
          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {travelCards.map((x) => (
              <div key={x} className="glass rounded-2xl p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold">{x}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
