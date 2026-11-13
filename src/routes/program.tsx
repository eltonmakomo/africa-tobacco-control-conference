import heroImg from "@/assets/plenary.jpg";
import agendaImg from "@/assets/program-agenda.jpg";
import sideImg from "@/assets/program-side.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Pending, Section } from "@/components/site/Bits";
import { CROSS_CUTTING, TRACKS } from "@/lib/conference";

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

const DAYS = [
  { day: "Day 1", date: "22 April 2027", items: ["Registration", "Official opening", "Opening Plenary — framing the strategic priorities", "Keynote addresses", "Parallel sessions under the five tracks", "e-Poster sessions"] },
  { day: "Day 2", date: "23 April 2027", items: ["Daily plenary (panel of up to four speakers)", "Parallel sessions under the five tracks", "e-Poster sessions", "Closing Plenary", "Adoption of the Continental Call to Action", "Closing ceremony"] },
];

function Program() {
  const [active, setActive] = useState(0);
  return (
    <>
      <PageHero image={heroImg} eyebrow="Program" title="Two days. Five tracks. One Call to Action." intro="The Conference combines high-level political dialogue with a rigorous scientific program, closing with a Continental Call to Action on Tobacco Control and Health Sovereignty." />
      <Section id="agenda" eyebrow="Agenda at a glance" title="Structure of the two days">
        <div role="tablist" className="inline-flex rounded-full bg-secondary p-1">
          {DAYS.map((d, i) => (
            <button key={d.day} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${active === i ? "bg-primary text-primary-foreground shadow" : "text-foreground/70"}`}>
              {d.day} · {d.date}
            </button>
          ))}
        </div>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-5">
          <ol className="border-l-2 border-primary/20 pl-8 lg:col-span-3">
            {DAYS[active]?.items.map((it) => (
              <li key={it} className="relative mb-4 rounded-2xl border border-border bg-card p-5 shadow-card animate-rise transition hover:-translate-y-1 hover:shadow-card-lg">
                <span className="absolute -left-[2.6rem] top-6 size-4 rounded-full border-4 border-background bg-accent" />
                <span className="font-medium">{it}</span>
              </li>
            ))}
          </ol>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:col-span-2">
            <img src={agendaImg} alt="Delegates in discussion at the 2nd ACTCD, Accra 2024" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
        <div className="mt-8"><Pending>The agenda follows the structure of previous editions. The full detailed agenda, with times and speakers, will be published here once the Scientific Committee confirms it.</Pending></div>
      </Section>
      <Section eyebrow="Plenaries and high-level segments" title="Where commitments are made" className="bg-secondary/60">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><h3 className="text-2xl font-semibold text-forest-foreground">Opening Plenary</h3><p className="mt-3 text-forest-foreground/85">Brings together ministers, senior officials of the African Union Commission and the Africa CDC, WHO representatives and civil society leaders to frame the strategic priorities.</p></div>
          <div className="rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-elegant transition hover:-translate-y-1 hover:shadow-card-lg"><h3 className="text-2xl font-semibold">Closing Plenary</h3><p className="mt-3 text-primary-foreground/90">Consolidates the outcomes, adopts key recommendations and secures commitments through a Continental Call to Action.</p></div>
        </div>
      </Section>
      <Section eyebrow="Conference tracks" title="Simultaneous sessions, oral presentations and digital e-Posters">
        <div className="space-y-4">
          {TRACKS.map((t) => (
            <article id={`track-${t.n}`} key={t.n} className="scroll-mt-28 grid gap-4 rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg md:grid-cols-[6rem_1fr]">
              <span className="text-5xl font-bold text-gradient-brand">0{t.n}</span>
              <div><h3 className="text-xl font-semibold">{t.title}</h3><p className="mt-2 text-muted-foreground">{t.scope}</p></div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Cross-cutting themes: {CROSS_CUTTING.join(", ")}.</p>
      </Section>
      <Section id="side-events" eyebrow="Pre-conference, side events and exhibitions" title="Beyond the main program" className="bg-secondary/60">
        <div className="grid items-start gap-6 lg:grid-cols-4">
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:row-span-2">
            <img src={sideImg} alt="Delegates around a table at a 2nd ACTCD side session" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
          {["Pre-conference and side meetings", "Ministerial and high-level dialogues", "Invited symposia and special sessions", "Exhibition area: innovations, research findings and best practices"].map((x) => (
            <div key={x} className="rounded-2xl bg-card p-6 font-medium shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">{x}</div>
          ))}
        </div>
        <p className="mt-6 text-foreground/75">Organizers interested in a side event or an exhibition apply through the <a href="/participate#exhibit" className="font-semibold text-primary underline">Participate</a> section.</p>
      </Section>
    </>
  );
}
