import heroImg from "@/assets/dialogue.jpg";
import themeImg from "@/assets/delegates-banner.jpg";
import objectivesImg from "@/assets/about-objectives.jpg";
import structureImg from "@/assets/about-structure.jpg";
import edition2024Img from "@/assets/edition-2024.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { CountUp } from "@/components/site/CountUp";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { ARTICLE_53, ARTICLE_53_FR, CROSS_CUTTING, CROSS_CUTTING_FR, EVENT, EVENT_FR, EXPECTED_OUTCOMES, EXPECTED_OUTCOMES_FR, KEY_STATS, KEY_STATS_FR, OBJECTIVES, OBJECTIVES_FR, OUTPUTS, OUTPUTS_FR, PAST_EDITIONS, PAST_EDITIONS_FR, RESOLUTIONS_2024, RESOLUTIONS_2024_FR, TRACKS, TRACKS_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

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
  const { fr } = useLang();
  const stats = fr ? KEY_STATS_FR : KEY_STATS;
  const tracks = fr ? TRACKS_FR : TRACKS;
  const crossCutting = fr ? CROSS_CUTTING_FR : CROSS_CUTTING;
  const objectives = fr ? OBJECTIVES_FR : OBJECTIVES;
  const outcomes = fr ? EXPECTED_OUTCOMES_FR : EXPECTED_OUTCOMES;
  const outputs = fr ? OUTPUTS_FR : OUTPUTS;
  const editions = fr ? PAST_EDITIONS_FR : PAST_EDITIONS;
  const resolutions = fr ? RESOLUTIONS_2024_FR : RESOLUTIONS_2024;

  return (
    <>
      <PageHero image={heroImg} imgClassName="object-[center_30%]" eyebrow={fr ? "À propos" : "About"} title={fr ? "Consolider les acquis africains de la lutte antitabac" : "Securing Africa's tobacco control gains"} intro={fr ? EVENT_FR.theme : EVENT.theme} />
      <Section id="about" eyebrow={fr ? "À propos de l'ACTCD" : "About ACTCD"} title={fr ? "Les progrès sont réels. Le risque aussi." : "Progress is real. So is the risk."}>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 lg:col-span-2">
            {fr ? (
              <>
                <p>Deux décennies après l'entrée en vigueur de la Convention-cadre de l'OMS pour la lutte antitabac, l'Afrique a réalisé de réels progrès : 44 des 47 pays de la Région africaine de l'OMS ont ratifié la Convention. L'environnement continue d'évoluer avec les nouveaux produits de la nicotine, l'ingérence de l'industrie, le commerce illicite et des financements limités.</p>
                <p>L'Afrique compte la population la plus jeune du monde, avec plus de 60 % de ses habitants âgés de moins de 25 ans. L'urbanisation rapide, la mise en œuvre inégale des politiques et le marketing agressif de l'industrie créent les conditions d'une hausse du tabagisme en l'absence d'action décisive. The African Capacity Building Foundation convoque la Conférence en tant qu'agence spécialisée de l'Union africaine pour le développement des capacités, dans la continuité de la première édition de 2021 et de la deuxième à Accra, au Ghana, en 2024.</p>
              </>
            ) : (
              <>
                <p>Two decades after the WHO Framework Convention on Tobacco Control entered into force, Africa has made real progress, with 44 of the 47 countries in the WHO African Region having ratified the Convention. The environment continues to shift through emerging nicotine products, industry interference, illicit trade and constrained financing.</p>
                <p>Africa holds the world's youngest population, with more than 60% of its people under the age of 25. Rapid urbanization, uneven policy implementation and aggressive industry marketing create conditions for a rise in tobacco use without decisive action. The African Capacity Building Foundation convenes the Conference as the African Union's specialized agency for capacity development, building on the first edition in 2021 and the second in Accra, Ghana, in 2024.</p>
              </>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ figure: f, label: l }) => (
              <div key={f} className="group relative overflow-hidden rounded-3xl bg-forest p-6 text-forest-foreground shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-gold/25 blur-2xl transition group-hover:bg-gold/35" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
                <div className="relative text-3xl font-bold md:text-4xl"><CountUp value={f} /></div>
                <p className="relative mt-2 text-sm leading-snug text-forest-foreground/80">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="theme" eyebrow={fr ? "Thème et justification" : "Theme and rationale"} title={fr ? "La souveraineté sanitaire" : "Health sovereignty"} className="bg-secondary/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-foreground/80">
            {fr
              ? "Le thème traduit la nécessité de consolider les acquis africains de la lutte antitabac tout en inscrivant celle-ci dans la volonté du continent d'affirmer sa souveraineté sanitaire. La souveraineté sanitaire signifie renforcer la capacité de l'Afrique à déterminer, financer et mettre en œuvre ses priorités de santé publique dans l'intérêt public, grâce à des institutions capables, à une élaboration des politiques protégée des intérêts commerciaux, à des données produites en Afrique et à un financement intérieur durable."
              : "The theme reflects the need to secure Africa's tobacco control gains while positioning tobacco control within the continent's drive for health sovereignty. Health sovereignty means strengthening Africa's capacity to determine, finance and implement its public health priorities in the public interest, through capable institutions, policymaking protected from commercial interests, African-generated evidence and sustainable domestic financing."}
          </p>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={themeImg} alt={fr ? "Délégués en plénière à la 2e ACTCD, Accra 2024" : "Delegates in plenary at the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
      <Section id="objectives" eyebrow={fr ? "Objectif général et objectifs" : "Goal and objectives"} title={fr ? "Renforcer le leadership, les données et les capacités durables de l'Afrique" : "Strengthen African leadership, evidence and sustainable capacity"}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <p className="text-foreground/75">
            {fr
              ? "L'objectif général est de renforcer le leadership, les données et les capacités durables de l'Afrique en matière de lutte antitabac, comme contribution à la protection de l'avenir de l'Afrique et à l'avancement de la souveraineté sanitaire."
              : "The overall goal is to strengthen African leadership, evidence and sustainable capacity for tobacco control as a contribution to protecting Africa's future and advancing health sovereignty."}
          </p>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={objectivesImg} alt={fr ? "Un délégué devant la toile de fond de la 2e ACTCD, Accra 2024" : "A delegate at the 2nd ACTCD backdrop, Accra 2024"} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {objectives.map((o, i) => (
            <li key={i} className="flex gap-5 rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-bold text-primary-foreground">{i + 1}</span>
              <p className="text-foreground/85">{o}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-14 text-2xl font-semibold">{fr ? "Résultats attendus" : "Expected outcomes"}</h3>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">{outcomes.map((o) => <li key={o} className="flex gap-3 text-foreground/80"><span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />{o}</li>)}</ul>
        <h3 className="mt-12 text-2xl font-semibold">{fr ? "Produits clés" : "Key outputs"}</h3>
        <div className="mt-5 flex flex-wrap gap-3">{outputs.map((o) => <span key={o} className="rounded-full bg-secondary px-5 py-2.5 font-medium shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">{o}</span>)}</div>
      </Section>
      <Section id="structure" eyebrow={fr ? "Structure de la Conférence" : "Conference structure"} title={fr ? "Le dialogue de haut niveau rencontre la rigueur scientifique" : "High-level dialogue meets rigorous science"} className="bg-secondary/60">
        <div className="grid items-start gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:shadow-card-lg lg:col-span-3">
            {tracks.map((t) => (
              <div key={t.n} className="grid gap-2 border-b border-border p-6 last:border-0 md:grid-cols-[10rem_1fr]">
                <span className="font-semibold text-primary">{fr ? `Piste ${t.n}` : `Track ${t.n}`}</span><span className="font-medium">{t.title}</span>
              </div>
            ))}
          </div>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:col-span-2">
            <img src={structureImg} alt={fr ? "Une salle de session parallèle à la 2e ACTCD, Accra 2024" : "A parallel session room at the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm text-muted-foreground">{fr ? "Thèmes transversaux :" : "Cross-cutting themes:"}</span>
          {crossCutting.map((c) => <span key={c} className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium">{c}</span>)}
        </div>
      </Section>
      <Section id="past" eyebrow={fr ? "Éditions passées" : "Past editions"} title={fr ? "Dans la continuité de 2021 et 2024" : "Building on 2021 and 2024"}>
        <div className="relative grid gap-6 md:grid-cols-3">
          {editions.map((e, i) => (
            <div key={e.year} className={`overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${i === 2 ? "bg-gradient-brand text-primary-foreground" : "border border-border bg-card"}`}>
              {i === 1 && <img src={edition2024Img} alt={fr ? "Délégués à la 2e ACTCD, Accra 2024" : "Delegates at the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[16/9] w-full object-cover" />}
              <div className="p-8">
              <div className="text-5xl font-bold">{e.year}</div><p className="mt-3 font-semibold">{e.title}</p>
              <p className={`text-sm ${i === 2 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{e.dates}</p>
              <p className="mt-4 font-medium italic">"{e.theme}"</p>
              <p className={`mt-3 text-sm ${i === 2 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          {fr ? <>Les rapports et communiqués des deux éditions sont disponibles dans le <a href="/knowledge-hub" className="font-semibold text-primary underline">Centre de connaissances</a>.</> : <>Reports and communiqués from both editions are available in the <a href="/knowledge-hub" className="font-semibold text-primary underline">Knowledge Hub</a>.</>}
        </p>
        <div className="mt-12 rounded-3xl bg-forest p-8 text-forest-foreground shadow-card transition hover:shadow-card-lg md:p-10">
          <p className="eyebrow text-forest-foreground/90">{fr ? "Communiqué d'Accra 2024" : "2024 Accra Communiqué"}</p>
          <h3 className="mt-3 text-2xl font-semibold">{fr ? "Ce que les participants ont résolu en 2024" : "What participants resolved in 2024"}</h3>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">{resolutions.map((r) => <li key={r} className="flex gap-3 text-forest-foreground/85"><span className="mt-2 size-2 shrink-0 rounded-full bg-forest-foreground" />{r}</li>)}</ul>
        </div>
      </Section>
      <Section id="organizers" eyebrow={fr ? "Organisateurs et partenaires" : "Organizers and partners"} title={fr ? "Qui convoque l'ACTCD" : "Who convenes ACTCD"} className="bg-secondary/60">
        <PartnerLogos columns="sm:grid-cols-2 lg:grid-cols-3" height="h-14" />
        <p className="mt-8 max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 font-medium shadow-card transition hover:shadow-card-lg">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
      </Section>
    </>
  );
}
