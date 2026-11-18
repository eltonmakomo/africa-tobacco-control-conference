import heroImg from "@/assets/delegates-phone.jpg";
import guidelinesImg from "@/assets/cfa-guidelines.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
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
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-foreground/80">Submissions map to one of the five tracks and follow the structured format set by the Scientific Committee. Accepted abstracts appear as oral presentations or digital e-Posters.</p>
          </div>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={guidelinesImg} alt="A speaker presenting at the 2nd ACTCD, Accra 2024" loading="lazy" className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
      <Section id="dates" eyebrow="Key dates" title="Timeline">
        <ol className="grid gap-4 md:grid-cols-2">
          {KEY_DATES.map((k, i) => (
            <li key={k.milestone} className={`rounded-3xl p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${i === KEY_DATES.length - 1 ? "bg-forest text-forest-foreground" : "border border-border bg-card"}`}>
              <span className="text-sm opacity-70">0{i + 1}</span>
              <p className="mt-3 font-semibold">{k.milestone}</p>
              <div className="mt-3 text-lg font-bold"><span className={i === KEY_DATES.length - 1 ? "text-forest-foreground" : "text-primary"}>{k.date}</span></div>
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
