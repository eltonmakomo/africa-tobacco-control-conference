import heroImg from "@/assets/dialogue.jpg";
import themeImg from "@/assets/delegates-banner.jpg";
import objectivesImg from "@/assets/about-objectives.jpg";
import { CalendarDays, Globe, Languages, MapPin } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Bits";
import { CountUp } from "@/components/site/CountUp";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { ARTICLE_53, ARTICLE_53_FR, CROSS_CUTTING, CROSS_CUTTING_FR, EVENT, EVENT_FR, KEY_STATS, KEY_STATS_FR, OBJECTIVES, OBJECTIVES_FR, TRACKS, TRACKS_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ACTCD 2027 · Theme, Objectives and Structure" },
      { name: "description", content: "Why Africa needs decisive tobacco control: the theme, goal, objectives, structure of the Africa Conference on Tobacco Control and Development." },
      { property: "og:title", content: "About ACTCD 2027" },
      { property: "og:description", content: "Theme, rationale, objectives, and structure of ACTCD." },
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

  const ev = fr ? EVENT_FR : EVENT;
  const details = [
    { icon: CalendarDays, label: fr ? "Dates" : "Dates", value: ev.dates },
    { icon: MapPin, label: fr ? "Lieu" : "Location", value: ev.location },
    { icon: Globe, label: fr ? "Format" : "Format", value: fr ? "Hybride" : "Hybrid", note: fr ? "Participation en présentiel et virtuelle" : "In-person and virtual participation" },
    { icon: Languages, label: fr ? "Langues" : "Languages", value: fr ? "Anglais et français" : "English & French" },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={heroImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_85%]" />
        <div className="absolute inset-0 -z-10 bg-forest/80" />
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <span className="inline-block rounded-md bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            {fr ? "3e édition · 2027" : "3rd edition · 2027"}
          </span>
          <h1 className="mt-5 text-4xl font-bold md:text-5xl">{fr ? "À propos de la Conférence" : "About the conference"}</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-accent md:text-3xl">{ev.theme}</p>
        </div>
      </section>

      <Section id="about">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="border-l-4 border-accent pl-4 text-2xl font-bold text-forest md:text-3xl">{fr ? "Détails de l'événement" : "Event details"}</h2>
            <ul className="mt-8 divide-y divide-border">
              {details.map(({ icon: Icon, label, value, note }) => (
                <li key={label} className="flex gap-4 py-5">
                  <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="mt-1 font-semibold text-forest">{value}</p>
                    {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <figure className="relative mt-6 overflow-hidden rounded-2xl">
              <img src={themeImg} alt={fr ? "Délégués en plénière à la 2e ACTCD, Accra 2024" : "Delegates in plenary at the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent p-5 text-forest-foreground">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">ACTCD 2027</span>
                <p className="font-semibold">{ev.location}</p>
              </figcaption>
            </figure>
          </div>
          <div>
            <h2 className="border-l-4 border-accent pl-4 text-2xl font-bold text-forest md:text-3xl">{fr ? "À propos de l'ACTCD" : "About ACTCD"}</h2>
            <div className="mt-8 space-y-5 leading-relaxed text-foreground/80">
              {fr ? (
                <>
                  <p>Deux décennies après l'entrée en vigueur de la Convention-cadre de l'OMS pour la lutte antitabac, l'Afrique a réalisé de réels progrès : 44 des 47 pays de la Région africaine de l'OMS ont ratifié la Convention. L'environnement continue d'évoluer avec les nouveaux produits de la nicotine, l'ingérence de l'industrie, le commerce illicite et des financements limités.</p>
                  <p>L'Afrique compte la population la plus jeune du monde, avec plus de 60 % de ses habitants âgés de moins de 25 ans. L'urbanisation rapide, la mise en œuvre inégale des politiques et le marketing agressif de l'industrie créent les conditions d'une hausse du tabagisme en l'absence d'action décisive. The African Capacity Building Foundation convoque la Conférence en tant qu'agence spécialisée de l'Union africaine pour le développement des capacités, dans la continuité de la première édition de 2021 et de la deuxième à Accra, au Ghana, en 2024.</p>
                  <p>Le thème traduit la nécessité de consolider les acquis africains de la lutte antitabac tout en inscrivant celle-ci dans la volonté du continent d'affirmer sa souveraineté sanitaire. La souveraineté sanitaire signifie renforcer la capacité de l'Afrique à déterminer, financer et mettre en œuvre ses priorités de santé publique dans l'intérêt public, grâce à des institutions capables, à une élaboration des politiques protégée des intérêts commerciaux, à des données produites en Afrique et à un financement intérieur durable.</p>
                </>
              ) : (
                <>
                  <p>Two decades after the WHO Framework Convention on Tobacco Control entered into force, Africa has made real progress, with 44 of the 47 countries in the WHO African Region having ratified the Convention. The environment continues to shift through emerging nicotine products, industry interference, illicit trade and constrained financing.</p>
                  <p>Africa holds the world's youngest population, with more than 60% of its people under the age of 25. Rapid urbanization, uneven policy implementation and aggressive industry marketing create conditions for a rise in tobacco use without decisive action. The African Capacity Building Foundation convenes the Conference as the African Union's specialized agency for capacity development, building on the first edition in 2021 and the second in Accra, Ghana, in 2024.</p>
                  <p>The theme reflects the need to secure Africa's tobacco control gains while positioning tobacco control within the continent's drive for health sovereignty. Health sovereignty means strengthening Africa's capacity to determine, finance and implement its public health priorities in the public interest, through capable institutions, policymaking protected from commercial interests, African-generated evidence and sustainable domestic financing.</p>
                </>
              )}
            </div>
          </div>
        </div>
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <li key={t.n} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-card">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{fr ? `Piste ${t.n}` : `Track ${t.n}`}</span>
              <h3 className="mt-2 text-lg font-semibold text-forest">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.scope}</p>
            </li>
          ))}
          <li className="rounded-2xl border border-dashed border-accent bg-accent/10 p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{fr ? "Thèmes transversaux" : "Cross-cutting themes"}</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {crossCutting.map((c) => <span key={c} className="rounded-full bg-background px-3 py-1 text-sm font-medium">{c}</span>)}
            </div>
          </li>
        </ul>
      </Section>

      <Section id="highlights" title={fr ? "Chiffres clés" : "Key highlights"} className="border-t border-border/60">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ figure: f, label: l }) => (
            <li key={f} className="rounded-2xl bg-secondary/60 p-6">
              <div className="text-4xl font-bold text-primary"><CountUp value={f} /></div>
              <p className="mt-2 text-sm text-foreground/75">{l}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="objectives" className="border-t border-border/60" eyebrow={fr ? "Objectif général et objectifs" : "Goal and objectives"} title={fr ? "Renforcer le leadership, les données et les capacités durables de l'Afrique" : "Strengthen African leadership, evidence and sustainable capacity"}>
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
      </Section>
      <Section id="organizers" eyebrow={fr ? "Organisateurs et partenaires" : "Organizers and partners"} title={fr ? "Qui convoque l'ACTCD" : "Who convenes ACTCD"} className="border-t border-border/60">
        <PartnerLogos columns="sm:grid-cols-2 lg:grid-cols-3" height="h-14" />
        <p className="mt-8 max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 font-medium shadow-card transition hover:shadow-card-lg">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
      </Section>
    </>
  );
}
