import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, MapPin } from "lucide-react";
import { Countdown } from "@/components/site/Countdown";
import hero from "@/assets/hero-future.jpg";
import plenary from "@/assets/plenary.jpg";
import numbersBg from "@/assets/numbers-nairobi.jpg";
import conceptNote from "@/assets/docs/3rd_ACTD_Concept_Note_-_Abridged.docx.asset.json";
import gokLogo from "@/assets/partners/government-of-kenya.png.asset.json";
import acbfLogo from "@/assets/partners/acbf.png.asset.json";
import { Section } from "@/components/site/Bits";
import { CountUp } from "@/components/site/CountUp";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { EVENT, EVENT_FR, HOME_IMPACT, HOME_IMPACT_FR, PAST_EDITIONS, PAST_EDITIONS_FR, TRACKS, TRACKS_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTCD 2027 · Africa Conference on Tobacco Control and Development" },
      { name: "description", content: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty. 21–23 April 2027, Nairobi, Kenya — hybrid, English and French." },
      { property: "og:title", content: "ACTCD 2027 · Nairobi, 21–23 April 2027" },
      { property: "og:description", content: "The 3rd Africa Conference on Tobacco Control and Development. Submit an abstract or download the concept note." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { fr } = useLang();
  const ev = fr ? EVENT_FR : EVENT;
  const tracks = fr ? TRACKS_FR : TRACKS;
  const impact = fr ? HOME_IMPACT_FR : HOME_IMPACT;
  const editions = fr ? PAST_EDITIONS_FR : PAST_EDITIONS;

  const agenda = fr
    ? [
        { day: "Plénière d'ouverture", text: "Cadre les priorités stratégiques de la Conférence." },
        { day: "Sessions par piste", text: "Plénière quotidienne avec un panel de quatre intervenants au maximum, sessions simultanées orales et affiches électroniques sous les cinq pistes." },
        { day: "Plénière de clôture", text: "Adoption d'un Appel à l'action continental sur la lutte antitabac et la souveraineté sanitaire." },
      ]
    : [
        { day: "Opening Plenary", text: "Frames the Conference's strategic priorities." },
        { day: "Track sessions", text: "A daily plenary with a panel of up to four speakers, plus simultaneous oral and digital e-Poster sessions under the five tracks." },
        { day: "Closing Plenary", text: "Adopts a Continental Call to Action on Tobacco Control and Health Sovereignty." },
      ];

  return (
    <>
      {/* Hero — clean, theme-led */}
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt={fr ? "De jeunes Africains courent dans un champ au-dessus de Nairobi au coucher du soleil" : "Young Africans running through an open field above Nairobi at sunset"} width={1920} height={1088} className="absolute inset-0 -z-20 size-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/90 via-forest/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-forest/30 md:hidden" />
        <div className="mx-auto flex min-h-[min(82vh,760px)] max-w-7xl flex-col justify-center px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-forest-foreground/85 animate-rise">{ev.edition}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl animate-rise">{fr ? "Protéger l'avenir de l'Afrique" : "Protecting Africa's Future"}</h1>
            <p className="mt-4 text-xl font-medium text-forest-foreground/90 md:text-2xl animate-rise">{fr ? "Faire progresser la lutte antitabac et la souveraineté sanitaire" : "Advancing Tobacco Control and Health Sovereignty"}</p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-foreground/85">
              <span className="flex items-center gap-2"><CalendarDays className="size-4" />{ev.dates}</span>
              <span className="flex items-center gap-2"><MapPin className="size-4" />{ev.location} · {fr ? "Hybride" : "Hybrid"}</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/call-for-abstracts" className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/70 px-6 py-3.5 font-semibold transition hover:bg-forest-foreground/15">
                {fr ? "Soumettre un résumé" : "Submit Abstract"}
              </Link>
              <a href={conceptNote.url} download className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/70 px-6 py-3.5 font-semibold transition hover:bg-forest-foreground/15">
                <Download className="size-4" /> {fr ? "Télécharger la note conceptuelle" : "Download Concept Note"}
              </a>
            </div>
            <div className="mt-10 max-w-lg">
              <Countdown compact />
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-gradient-brand" />
      </section>

      {/* Host logos */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-10 md:flex-row md:gap-16 md:px-10">
          <p className="eyebrow text-muted-foreground md:mr-4">{fr ? "Organisée par" : "Hosted by"}</p>
          <img src={gokLogo.url} alt={fr ? "Gouvernement du Kenya" : "Government of Kenya"} className="h-14 w-auto max-w-full object-contain" />
          <img src={acbfLogo.url} alt="The African Capacity Building Foundation (ACBF)" className="h-14 w-auto max-w-full object-contain" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-10 lg:gap-20">
          <div>
            <p className="eyebrow text-primary">{fr ? "À propos de la Conférence" : "About the Conference"}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
              {fr ? <>Une plateforme continentale pour <span className="text-primary">l'action collective</span></> : <>A continental platform for <span className="text-primary">collective action</span></>}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              {fr
                ? "La 3e Conférence africaine sur la lutte antitabac et le développement réunit décideurs, chercheurs, responsables de santé publique, société civile, jeunes et partenaires de développement pour accélérer la lutte antitabac à travers le continent."
                : "The 3rd Africa Conference on Tobacco Control and Development brings together policymakers, researchers, public health leaders, civil society, youth and development partners to accelerate tobacco control across the continent."}
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">{fr ? "Lire la suite" : "Read more"} <ArrowRight className="size-4" /></Link>
          </div>
          <figure className="overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={plenary} alt={fr ? "La salle plénière de la 2e ACTCD" : "The plenary room at the 2nd ACTCD"} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </figure>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="relative isolate overflow-hidden bg-forest py-24 text-forest-foreground md:py-32">
        <img src={numbersBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-foreground/35" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="eyebrow inline-block rounded-full glass px-4 py-2">{fr ? "L'ACTCD en chiffres" : "ACTCD in numbers"}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((n) => (
              <div key={n.label} className="glass rounded-2xl p-8 text-on-photo shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <div className="text-5xl font-bold"><CountUp value={n.figure} /></div>
                <p className="mt-2 text-lg font-semibold">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <Section title={fr ? "Ordre du jour de la Conférence" : "Agenda of the conference"} className="border-t border-border/60">
        <div className="grid gap-5 md:grid-cols-3">
          {agenda.map((d) => (
            <div key={d.day} className="rounded-3xl bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg sm:p-6 lg:p-7">
              <h3 className="text-xl font-bold text-primary lg:text-2xl">{d.day}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85 lg:text-base">{d.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link to="/program" className="inline-flex items-center gap-2 font-semibold text-primary">{fr ? "Voir le programme" : "View the program"} <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* Past editions */}
      <Section title={fr ? "Éditions passées" : "Past editions"}>
        <div className="grid gap-5 md:grid-cols-3">
          {editions.map((e) => (
            <div key={e.year} className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
              <span className="text-5xl font-bold text-gradient-brand">{e.year}</span>
              <h3 className="mt-3 font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.dates}</p>
              <p className="mt-4 text-sm italic text-foreground/80">“{e.theme}”</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link to="/past-editions" className="inline-flex items-center gap-2 font-semibold text-primary">{fr ? "Voir les éditions passées" : "View past editions"} <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* Join us */}
      <section className="px-5 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest p-10 text-forest-foreground shadow-elegant md:p-16">
          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-forest-foreground/85">{ev.dates} · {ev.location}</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">{fr ? "Rejoignez-nous à l'ACTCD" : "Join us for the ACTCD"}</h2>
              <p className="mt-4 max-w-md text-forest-foreground/85">{fr ? "En présentiel à Nairobi, avec possibilité de participation virtuelle, en anglais et en français." : "In person in Nairobi, with an option for virtual attendance, in English and French."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Section eyebrow={fr ? "Nos partenaires" : "Our partners"} title={fr ? "Convoquée ensemble" : "Convened together"}>
        <PartnerLogos />
      </Section>
    </>
  );
}
