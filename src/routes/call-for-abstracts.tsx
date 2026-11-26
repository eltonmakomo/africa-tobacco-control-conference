import heroImg from "@/assets/africa-tobacco-21-of-56.jpg.asset.json";
import guidelinesImg from "@/assets/speaker-lectern.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { KEY_DATES, KEY_DATES_FR, TRACKS, TRACKS_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/call-for-abstracts")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
      { title: "Call for Abstracts · ACTCD 2027" },
      { name: "description", content: "Submit research, implementation experiences, policy analyses and innovations reflecting African-generated evidence to ACTCD 2027." },
      { property: "og:title", content: "ACTCD 2027 Call for Abstracts" },
      { property: "og:description", content: "Tracks, submission guidelines, key dates and e-Posters." },
    ],
  }),
  component: CFA,
});

function CFA() {
  const { fr } = useLang();
  const tracks = fr ? TRACKS_FR : TRACKS;
  const keyDates = fr ? KEY_DATES_FR : KEY_DATES;

  return (
    <>
      <PageHero
        image={heroImg.url}
        imgClassName="object-[center_16%]"
        title={fr ? "Appel à résumés" : "Call for Abstracts"}
      >
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button disabled className="cursor-not-allowed rounded-full bg-forest-foreground/80 px-7 py-4 font-semibold text-primary/70">
            {fr ? "Soumettre un résumé · ouverture oct./nov. 2026" : "Submit an abstract · opens Oct/Nov 2026"}
          </button>
        </div>
      </PageHero>
      <Section eyebrow={fr ? "Aperçu et pistes" : "Overview and tracks"} title={fr ? "Rattachez votre soumission à l'une des cinq pistes" : "Map your submission to one of five tracks"}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {tracks.map((t) => <div key={t.n} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><span className="eyebrow text-primary">{fr ? `Piste ${t.n}` : `Track ${t.n}`}</span><p className="mt-2 font-semibold">{t.short}</p></div>)}
        </div>
      </Section>
      <Section id="guidelines" eyebrow={fr ? "Directives de soumission" : "Submission guidelines"} title="Format" className="border-t border-border/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-foreground/80">
              {fr
                ? "Les soumissions se rattachent à l'une des cinq pistes et suivent le format structuré défini par le Comité scientifique. Les résumés acceptés sont présentés sous forme de présentations orales ou d'affiches électroniques."
                : "Submissions map to one of the five tracks and follow the structured format set by the Scientific Committee. Accepted abstracts appear as oral presentations or digital e-Posters."}
            </p>
          </div>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={guidelinesImg} alt={fr ? "Un intervenant à la 2e ACTCD, Accra 2024" : "A speaker presenting at the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
      <Section id="dates" eyebrow={fr ? "Dates clés" : "Key dates"} title={fr ? "Calendrier" : "Timeline"}>
        <ol className="grid gap-4 md:grid-cols-2">
          {keyDates.map((k, i) => (
            <li key={k.milestone} className={`rounded-3xl p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${i === keyDates.length - 1 ? "bg-forest text-forest-foreground" : "border border-border bg-card"}`}>
              <span className="text-sm opacity-70">0{i + 1}</span>
              <p className="mt-3 font-semibold">{k.milestone}</p>
              <div className="mt-3 text-lg font-bold"><span className={i === keyDates.length - 1 ? "text-forest-foreground" : "text-primary"}>{k.date}</span></div>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="e-posters" eyebrow="e-Posters" title={fr ? "Affiches électroniques" : "Digital e-Posters"} className="border-t border-border/60">
        <p className="max-w-3xl text-foreground/80">
          {fr
            ? "Les résumés acceptés peuvent être présentés sous forme d'affiches électroniques lors de sessions dédiées au sein de chaque piste."
            : "Accepted abstracts may be presented as digital e-Posters during dedicated e-Poster sessions within each track."}
        </p>
      </Section>
    </>
  );
}
