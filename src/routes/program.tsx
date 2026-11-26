import heroImg from "@/assets/session-room.jpg";
import agendaImg from "@/assets/program-agenda.jpg";
import sideImg from "@/assets/program-side.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Bits";
import { CROSS_CUTTING, CROSS_CUTTING_FR, TRACKS, TRACKS_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program · ACTCD 2027 Nairobi" },
      { name: "description", content: "Two days of plenaries, five tracks of parallel sessions, e-Posters, side events and exhibitions at ACTCD 2027." },
      { property: "og:title", content: "ACTCD 2027 Program" },
      { property: "og:description", content: "Plenaries, five conference tracks, side events and exhibitions." },
    ],
  }),
  component: Program,
});

const DAYS_EN = [
  { day: "Day 1", date: "22 April 2027", items: ["Registration", "Official opening", "Opening Plenary — framing the strategic priorities", "Keynote addresses", "Parallel sessions under the five tracks", "e-Poster sessions"] },
  { day: "Day 2", date: "23 April 2027", items: ["Daily plenary (panel of up to four speakers)", "Parallel sessions under the five tracks", "e-Poster sessions", "Closing Plenary", "Adoption of the Continental Call to Action", "Closing ceremony"] },
];

const DAYS_FR = [
  { day: "Jour 1", date: "22 avril 2027", items: ["Inscription", "Ouverture officielle", "Plénière d'ouverture — définition des priorités stratégiques", "Discours liminaires", "Sessions parallèles selon les cinq pistes", "Sessions d'affiches électroniques"] },
  { day: "Jour 2", date: "23 avril 2027", items: ["Plénière quotidienne (panel de jusqu'à quatre intervenants)", "Sessions parallèles selon les cinq pistes", "Sessions d'affiches électroniques", "Plénière de clôture", "Adoption de l'Appel à l'action continental", "Cérémonie de clôture"] },
];

function Program() {
  const [active, setActive] = useState(0);
  const { fr } = useLang();
  const days = fr ? DAYS_FR : DAYS_EN;
  const tracks = fr ? TRACKS_FR : TRACKS;
  const crossCutting = fr ? CROSS_CUTTING_FR : CROSS_CUTTING;
  const sideEvents = fr
    ? ["Réunions pré-conférence et événements parallèles", "Dialogues ministériels et de haut niveau", "Symposiums sur invitation et sessions spéciales", "Espace d'exposition : innovations, résultats de recherche et bonnes pratiques"]
    : ["Pre-conference and side meetings", "Ministerial and high-level dialogues", "Invited symposia and special sessions", "Exhibition area: innovations, research findings and best practices"];

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow={fr ? "Programme" : "Program"}
        title={fr ? "Protéger l'avenir de l'Afrique : faire progresser la lutte antitabac et la souveraineté sanitaire" : "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty"}
      />
      <Section id="agenda" eyebrow={fr ? "Aperçu du programme" : "Agenda at a glance"} title={fr ? "Structure des deux journées" : "Structure of the two days"}>
        <div role="tablist" className="inline-flex rounded-full bg-secondary p-1">
          {days.map((d, i) => (
            <button key={d.day} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${active === i ? "bg-primary text-primary-foreground shadow" : "text-foreground/70"}`}>
              {d.day} · {d.date}
            </button>
          ))}
        </div>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-5">
          <ol className="border-l-2 border-primary/20 pl-8 lg:col-span-3">
            {days[active]?.items.map((it) => (
              <li key={it} className="relative mb-4 rounded-2xl border border-border bg-card p-5 shadow-card animate-rise transition hover:-translate-y-1 hover:shadow-card-lg">
                <span className="absolute -left-[2.6rem] top-6 size-4 rounded-full border-4 border-background bg-accent" />
                <span className="font-medium">{it}</span>
              </li>
            ))}
          </ol>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:col-span-2">
            <img src={agendaImg} alt={fr ? "Délégués en discussion à la 2e ACTCD, Accra 2024" : "Delegates in discussion at the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
      <Section eyebrow={fr ? "Plénières et segments de haut niveau" : "Plenaries and high-level segments"} title={fr ? "Là où les engagements se prennent" : "Where commitments are made"} className="bg-secondary/60">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <h3 className="text-2xl font-semibold text-forest-foreground">{fr ? "Plénière d'ouverture" : "Opening Plenary"}</h3>
            <p className="mt-3 text-forest-foreground/85">{fr ? "Réunit des ministres, de hauts responsables de la Commission de l'Union africaine et d'Africa CDC, des représentants de l'OMS et des leaders de la société civile pour définir les priorités stratégiques." : "Brings together ministers, senior officials of the African Union Commission and the Africa CDC, WHO representatives and civil society leaders to frame the strategic priorities."}</p>
          </div>
          <div className="rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-elegant transition hover:-translate-y-1 hover:shadow-card-lg">
            <h3 className="text-2xl font-semibold">{fr ? "Plénière de clôture" : "Closing Plenary"}</h3>
            <p className="mt-3 text-primary-foreground/90">{fr ? "Consolide les résultats, adopte les recommandations clés et scelle les engagements à travers un Appel à l'action continental." : "Consolidates the outcomes, adopts key recommendations and secures commitments through a Continental Call to Action."}</p>
          </div>
        </div>
      </Section>
      <Section eyebrow={fr ? "Pistes de la Conférence" : "Conference tracks"} title={fr ? "Sessions simultanées, présentations orales et affiches électroniques" : "Simultaneous sessions, oral presentations and digital e-Posters"}>
        <div className="space-y-4">
          {tracks.map((t) => (
            <article id={`track-${t.n}`} key={t.n} className="scroll-mt-28 grid gap-4 rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg md:grid-cols-[6rem_1fr]">
              <span className="text-5xl font-bold text-gradient-brand">0{t.n}</span>
              <div><h3 className="text-xl font-semibold">{t.title}</h3><p className="mt-2 text-muted-foreground">{t.scope}</p></div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{fr ? "Thèmes transversaux : " : "Cross-cutting themes: "}{crossCutting.join(", ")}.</p>
      </Section>
      <Section id="side-events" eyebrow={fr ? "Pré-conférence, événements parallèles et expositions" : "Pre-conference, side events and exhibitions"} title={fr ? "Au-delà du programme principal" : "Beyond the main program"} className="bg-secondary/60">
        <div className="grid items-start gap-6 lg:grid-cols-4">
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:row-span-2">
            <img src={sideImg} alt={fr ? "Délégués autour d'une table lors d'une session parallèle de la 2e ACTCD" : "Delegates around a table at a 2nd ACTCD side session"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
          {sideEvents.map((x) => (
            <div key={x} className="rounded-2xl bg-card p-6 font-medium shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">{x}</div>
          ))}
        </div>
        <p className="mt-6 text-foreground/75">
          {fr ? <>Les organisateurs intéressés par un événement parallèle ou une exposition font leur demande via la section <a href="/participate#exhibit" className="font-semibold text-primary underline">Participer</a>.</> : <>Organizers interested in a side event or an exhibition apply through the <a href="/participate#exhibit" className="font-semibold text-primary underline">Participate</a> section.</>}
        </p>
      </Section>
    </>
  );
}
