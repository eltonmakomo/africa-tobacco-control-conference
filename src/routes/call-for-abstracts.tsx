import heroImg from "@/assets/eposter.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Pending, Section, TBC } from "@/components/site/Bits";
import { KEY_DATES, TRACKS } from "@/lib/conference";

export const Route = createFileRoute("/call-for-abstracts")({
  head: () => ({
    meta: [
      { title: "Call for Abstracts · ACTCD 2027" },
      { name: "description", content: "Submit research, implementation experiences, policy analyses and innovations reflecting African-generated evidence to ACTCD 2027." },
      { property: "og:title", content: "ACTCD 2027 Call for Abstracts" },
      { property: "og:description", content: "Tracks, submission guidelines, key dates and e-Posters." },
    ],
  }),
  component: CFA,
});

function CFA() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Call for Abstracts" title="African evidence, at the centre of policy" intro="The call invites research papers, implementation experiences, policy analyses and innovations that reflect African-generated evidence.">
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button disabled className="cursor-not-allowed rounded-full bg-forest-foreground/80 px-7 py-4 font-semibold text-primary/70">Submit an abstract · opens Oct/Nov 2026</button>
        </div>
      </PageHero>
      <Section eyebrow="Overview and tracks" title="Map your submission to one of five tracks">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {TRACKS.map((t) => <div key={t.n} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><span className="eyebrow text-primary">Track {t.n}</span><p className="mt-2 font-semibold">{t.short}</p></div>)}
        </div>
      </Section>
      <Section id="guidelines" eyebrow="Submission guidelines" title="Format" className="bg-secondary/60">
        <p className="max-w-3xl text-foreground/80">Submissions map to one of the five tracks and follow the structured format set by the Scientific Committee. Accepted abstracts appear as oral presentations or digital e-Posters.</p>
        <div className="mt-6"><Pending>Detailed guidelines from the Scientific Committee will be published here.</Pending></div>
      </Section>
      <Section id="dates" eyebrow="Key dates" title="Timeline">
        <ol className="grid gap-4 md:grid-cols-4">
          {KEY_DATES.map((k, i) => (
            <li key={k.milestone} className={`rounded-3xl p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${i === 3 ? "bg-forest text-forest-foreground" : "border border-border bg-card"}`}>
              <span className="text-sm opacity-70">0{i + 1}</span>
              <p className="mt-3 font-semibold">{k.milestone}</p>
              <div className="mt-3 text-lg font-bold">{k.date === "To be confirmed" ? <TBC /> : <span className={i === 3 ? "text-forest-foreground" : "text-primary"}>{k.date}</span>}</div>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="e-posters" eyebrow="e-Posters" title="Digital e-Posters" className="bg-secondary/60">
        <p className="max-w-3xl text-foreground/80">Accepted abstracts may be presented as digital e-Posters during dedicated e-Poster sessions within each track.</p>
      </Section>
    </>
  );
}
