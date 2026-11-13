import heroImg from "@/assets/dialogue.jpg";
import themeImg from "@/assets/plenary.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { ARTICLE_53, CROSS_CUTTING, EVENT, EXPECTED_OUTCOMES, KEY_STATS, OBJECTIVES, OUTPUTS, PAST_EDITIONS, RESOLUTIONS_2024, TRACKS } from "@/lib/conference";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ACTCD 2027 · Theme, Objectives and Structure" },
      { name: "description", content: "Why Africa needs decisive tobacco control: the theme, goal, objectives, structure and past editions of the Africa Conference on Tobacco Control and Development." },
      { property: "og:title", content: "About ACTCD 2027" },
      { property: "og:description", content: "Theme, rationale, objectives, structure and past editions of ACTCD." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="About" title="Securing Africa's tobacco control gains" intro={EVENT.theme} />
      <Section id="about" eyebrow="About ACTCD" title="Progress is real. So is the risk.">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 lg:col-span-2">
            <p>Two decades after the WHO Framework Convention on Tobacco Control entered into force, Africa has made real progress, with 44 of the 47 countries in the WHO African Region having ratified the Convention. The environment continues to shift through emerging nicotine products, industry interference, illicit trade and constrained financing.</p>
            <p>Africa holds the world's youngest population, with more than 60% of its people under the age of 25. Rapid urbanization, uneven policy implementation and aggressive industry marketing create conditions for a rise in tobacco use without decisive action. The African Capacity Building Foundation convenes the Conference as the African Union's specialized agency for capacity development, building on the first edition in 2021 and the second in Accra, Ghana, in 2024.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {KEY_STATS.map(({ figure: f, label: l }) => (
              <div key={f} className="group relative overflow-hidden rounded-3xl bg-forest p-6 text-forest-foreground shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-gold/25 blur-2xl transition group-hover:bg-gold/35" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
                <div className="relative text-3xl font-bold md:text-4xl">{f}</div>
                <p className="relative mt-2 text-sm leading-snug text-forest-foreground/80">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="theme" eyebrow="Theme and rationale" title="Health sovereignty" className="bg-secondary/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-foreground/80">The theme reflects the need to secure Africa's tobacco control gains while positioning tobacco control within the continent's drive for health sovereignty. Health sovereignty means strengthening Africa's capacity to determine, finance and implement its public health priorities in the public interest, through capable institutions, policymaking protected from commercial interests, African-generated evidence and sustainable domestic financing.</p>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={themeImg} alt="Delegates in plenary at the 2nd ACTCD, Accra 2024" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
      <Section id="objectives" eyebrow="Goal and objectives" title="Strengthen African leadership, evidence and sustainable capacity">
        <p className="max-w-3xl text-foreground/75">The overall goal is to strengthen African leadership, evidence and sustainable capacity for tobacco control as a contribution to protecting Africa's future and advancing health sovereignty.</p>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {OBJECTIVES.map((o, i) => (
            <li key={i} className="flex gap-5 rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-bold text-primary-foreground">{i + 1}</span>
              <p className="text-foreground/85">{o}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-14 text-2xl font-semibold">Expected outcomes</h3>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">{EXPECTED_OUTCOMES.map((o) => <li key={o} className="flex gap-3 text-foreground/80"><span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />{o}</li>)}</ul>
        <h3 className="mt-12 text-2xl font-semibold">Key outputs</h3>
        <div className="mt-5 flex flex-wrap gap-3">{OUTPUTS.map((o) => <span key={o} className="rounded-full bg-secondary px-5 py-2.5 font-medium shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">{o}</span>)}</div>
      </Section>
      <Section id="structure" eyebrow="Conference structure" title="High-level dialogue meets rigorous science" className="bg-secondary/60">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:shadow-card-lg">
          {TRACKS.map((t) => (
            <div key={t.n} className="grid gap-2 border-b border-border p-6 last:border-0 md:grid-cols-[10rem_1fr]">
              <span className="font-semibold text-primary">Track {t.n}</span><span className="font-medium">{t.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm text-muted-foreground">Cross-cutting themes:</span>
          {CROSS_CUTTING.map((c) => <span key={c} className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium">{c}</span>)}
        </div>
      </Section>
      <Section id="past" eyebrow="Past editions" title="Building on 2021 and 2024">
        <div className="relative grid gap-6 md:grid-cols-3">
          {PAST_EDITIONS.map((e, i) => (
            <div key={e.year} className={`rounded-3xl p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${i === 2 ? "bg-gradient-brand text-primary-foreground" : "border border-border bg-card"}`}>
              <div className="text-5xl font-bold">{e.year}</div><p className="mt-3 font-semibold">{e.title}</p>
              <p className={`text-sm ${i === 2 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{e.dates}</p>
              <p className="mt-4 font-medium italic">"{e.theme}"</p>
              <p className={`mt-3 text-sm ${i === 2 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{e.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Reports and communiqués from both editions are available in the <a href="/knowledge-hub" className="font-semibold text-primary underline">Knowledge Hub</a>.</p>
        <div className="mt-12 rounded-3xl bg-forest p-8 text-forest-foreground shadow-card transition hover:shadow-card-lg md:p-10">
          <p className="eyebrow text-forest-foreground/90">2024 Accra Communiqué</p>
          <h3 className="mt-3 text-2xl font-semibold">What participants resolved in 2024</h3>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">{RESOLUTIONS_2024.map((r) => <li key={r} className="flex gap-3 text-forest-foreground/85"><span className="mt-2 size-2 shrink-0 rounded-full bg-forest-foreground" />{r}</li>)}</ul>
        </div>
      </Section>
      <Section id="organizers" eyebrow="Organizers and partners" title="Who convenes ACTCD" className="bg-secondary/60">
        <PartnerLogos columns="sm:grid-cols-2 lg:grid-cols-3" height="h-14" />
        <p className="mt-8 max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 font-medium shadow-card transition hover:shadow-card-lg">{ARTICLE_53}</p>
      </Section>
    </>
  );
}
