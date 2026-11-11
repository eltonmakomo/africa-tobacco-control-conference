import heroImg from "@/assets/dialogue.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53, CONVENERS, CROSS_CUTTING, EVENT, OBJECTIVES, TRACKS } from "@/lib/conference";

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
          <div className="space-y-4">
            {[["44 / 47", "WHO African Region countries have ratified the WHO FCTC"], ["60%+", "of Africa's people are under the age of 25"]].map(([f, l]) => (
              <div key={f} className="rounded-3xl bg-forest p-7 text-forest-foreground"><div className="text-4xl font-bold text-gold">{f}</div><p className="mt-2 text-sm text-forest-foreground/80">{l}</p></div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="theme" eyebrow="Theme and rationale" title="Health sovereignty" className="bg-secondary/60">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">The theme reflects the need to secure Africa's tobacco control gains while positioning tobacco control within the continent's drive for health sovereignty. Health sovereignty means strengthening Africa's capacity to determine, finance and implement its public health priorities in the public interest, through capable institutions, policymaking protected from commercial interests, African-generated evidence and sustainable domestic financing.</p>
      </Section>
      <Section id="objectives" eyebrow="Goal and objectives" title="Strengthen African leadership, evidence and sustainable capacity">
        <p className="max-w-3xl text-foreground/75">The overall goal is to strengthen African leadership, evidence and sustainable capacity for tobacco control as a contribution to protecting Africa's future and advancing health sovereignty.</p>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {OBJECTIVES.map((o, i) => (
            <li key={i} className="flex gap-5 rounded-3xl border border-border bg-card p-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-bold text-primary-foreground">{i + 1}</span>
              <p className="text-foreground/85">{o}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="structure" eyebrow="Conference structure" title="High-level dialogue meets rigorous science" className="bg-secondary/60">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
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
          {[
            ["2021", "1st edition · Virtual", "Galvanized collective action through research, knowledge exchange and strategic partnerships."],
            ["2024", "2nd edition · Accra, Ghana", "Strengthened the foundation through policy dialogue, institutional capacity, youth and gender engagement, and the environmental and development dimensions of tobacco control."],
            ["2027", "3rd edition · Nairobi, Kenya", "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty."],
          ].map(([y, t, d], i) => (
            <div key={y} className={`rounded-3xl p-8 ${i === 2 ? "bg-gradient-brand text-primary-foreground" : "border border-border bg-card"}`}>
              <div className="text-5xl font-bold">{y}</div><p className="mt-3 font-semibold">{t}</p><p className={`mt-3 text-sm ${i === 2 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Reports and communiqués from both editions appear in the Knowledge Hub.</p>
      </Section>
      <Section id="organizers" eyebrow="Organizers and partners" title="Who convenes ACTCD" className="bg-secondary/60">
        <div className="flex flex-wrap gap-3">{CONVENERS.map((c) => <span key={c} className="rounded-full bg-card px-5 py-3 font-medium shadow-sm">{c}</span>)}<span className="rounded-full bg-card px-5 py-3 font-medium text-muted-foreground shadow-sm">and other partners</span></div>
        <p className="mt-8 max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 font-medium">{ARTICLE_53}</p>
      </Section>
    </>
  );
}
