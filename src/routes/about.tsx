import heroImg from "@/assets/about-evening.jpg";
import themeImg from "@/assets/panel-session.jpg";
import objectivesImg from "@/assets/delegate-notes.jpg";
import s1 from "@/assets/speaker-1.jpg";
import s2 from "@/assets/speaker-2.jpg";
import s3 from "@/assets/speaker-3.jpg";
import s4 from "@/assets/speaker-4.jpg";
import { ArrowRight, CalendarDays, Globe, Languages, MapPin, ShieldCheck, X } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Bits";
import { Countdown } from "@/components/site/Countdown";
import { CountUp } from "@/components/site/CountUp";
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

type Speaker = { name: string; role: string; city: string; bio: string; img: string };

const SPEAKERS: Speaker[] = [
  { name: "Dr. Awa Diallo", role: "Public health physician", city: "Dakar, Senegal", bio: "Leads national tobacco control programming and works with health ministries on cessation services, treatment access and public awareness.", img: s1 },
  { name: "Kwame Mensah", role: "Health economics researcher", city: "Accra, Ghana", bio: "Studies the fiscal and economic impact of tobacco use and the revenue potential of tobacco excise reform in African budgets.", img: s2 },
  { name: "Zainab Bello", role: "Civil society programme lead", city: "Abuja, Nigeria", bio: "Coordinates community coalitions working on illicit trade, advertising restrictions and protecting public policy from commercial influence.", img: s3 },
  { name: "Thabo Nkosi", role: "Youth advocate", city: "Johannesburg, South Africa", bio: "Organises youth-led campaigns on vaping prevention and smoke-free environments across southern Africa.", img: s4 },
];

const SPEAKERS_FR: Speaker[] = [
  { name: "Dr Awa Diallo", role: "Médecin de santé publique", city: "Dakar, Sénégal", bio: "Dirige les programmes nationaux de lutte antitabac et travaille avec les ministères de la santé sur les services de sevrage, l'accès aux traitements et la sensibilisation du public.", img: s1 },
  { name: "Kwame Mensah", role: "Chercheur en économie de la santé", city: "Accra, Ghana", bio: "Étudie l'impact fiscal et économique du tabagisme et le potentiel de recettes d'une réforme des accises sur le tabac dans les budgets africains.", img: s2 },
  { name: "Zainab Bello", role: "Responsable de programme société civile", city: "Abuja, Nigeria", bio: "Coordonne des coalitions communautaires travaillant sur le commerce illicite, les restrictions publicitaires et la protection des politiques publiques contre les influences commerciales.", img: s3 },
  { name: "Thabo Nkosi", role: "Militant jeunesse", city: "Johannesburg, Afrique du Sud", bio: "Organise des campagnes menées par les jeunes sur la prévention du vapotage et les environnements sans tabac en Afrique australe.", img: s4 },
];

function About() {
  const { fr } = useLang();
  const stats = fr ? KEY_STATS_FR : KEY_STATS;
  const tracks = fr ? TRACKS_FR : TRACKS;
  const crossCutting = fr ? CROSS_CUTTING_FR : CROSS_CUTTING;
  const objectives = fr ? OBJECTIVES_FR : OBJECTIVES;
  const speakers = fr ? SPEAKERS_FR : SPEAKERS;
  const [open, setOpen] = useState<Speaker | null>(null);

  const ev = fr ? EVENT_FR : EVENT;
  const details = [
    { icon: CalendarDays, label: fr ? "Dates" : "Dates", value: ev.dates },
    { icon: MapPin, label: fr ? "Lieu" : "Location", value: ev.location },
    { icon: Globe, label: fr ? "Format" : "Format", value: fr ? "Hybride" : "Hybrid", note: fr ? "Participation en présentiel et virtuelle" : "In-person and virtual participation" },
    { icon: Languages, label: fr ? "Langues" : "Languages", value: fr ? "Anglais et français" : "English & French" },
  ];

  return (
    <>
      <PageHero title={fr ? "À propos de la Conférence" : "About the conference"} image={heroImg} imgClassName="object-[center_30%]" />

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
              <img src={themeImg} alt={fr ? "Panélistes lors d'une session de la 2e ACTCD, Accra 2024" : "Panellists at a session of the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[16/10] w-full object-cover" />
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

      <Section id="speakers" title={fr ? "Intervenants vedettes" : "Featured Speakers"} className="border-t border-border/60">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s) => (
            <li key={s.name}>
              <button onClick={() => setOpen(s)} className="group w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <img src={s.img} alt={s.name} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <p className="font-semibold text-forest">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.role}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">{s.city}</p>
                </div>
              </button>
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
            <img src={objectivesImg} alt={fr ? "Un délégué prenant des notes pendant une session de la 2e ACTCD, Accra 2024" : "A delegate taking notes during a session of the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
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
      <section className="px-5 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest p-10 text-forest-foreground shadow-elegant md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-swirl opacity-40 animate-spin-slow" />
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-forest-foreground/85">{ev.dates} · {ev.location}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{fr ? "Rejoignez-nous à l'ACTCD" : "Join us for the ACTCD"}</h2>
            <p className="mx-auto mt-4 max-w-md text-forest-foreground/85">{fr ? "En présentiel à Nairobi, avec possibilité de participation virtuelle, en anglais et en français." : "In person in Nairobi, with an option for virtual attendance, in English and French."}</p>
          </div>
          <div className="mx-auto mt-8 max-w-md"><Countdown /></div>
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:comms@theacbf.org?subject=${encodeURIComponent(fr ? "Demande d'inscription — ACTCD 2027" : "Registration enquiry — ACTCD 2027")}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              {fr ? "Exprimer mon intérêt" : "Register your interest"}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <Section id="organizers" center eyebrow={fr ? "Organisateurs et partenaires" : "Organizers and partners"} title={fr ? "Qui convoque l'ACTCD" : "Who convenes ACTCD"} className="border-t border-border/60 bg-cream/40">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
          <div className="h-1.5 bg-gradient-brand" />
          <div className="px-8 py-12 text-center md:px-14 md:py-16">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-primary">
              <ShieldCheck className="size-7" />
            </span>
            <p className="mt-7 text-xl leading-relaxed font-medium text-foreground/85 md:text-2xl">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
            <div className="mt-9 border-t border-border pt-7">
              <Link to="/legal" hash="article-5-3" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
                {fr ? "Lire la déclaration Article 5.3" : "Read the Article 5.3 statement"}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest/60 p-5" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-elegant" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={open.img} alt={open.name} className="aspect-[4/3] w-full object-cover object-top" />
              <button onClick={() => setOpen(null)} aria-label={fr ? "Fermer" : "Close"} className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground transition hover:bg-background"><X className="size-4" /></button>
            </div>
            <div className="p-7">
              <p className="text-xl font-bold text-forest">{open.name}</p>
              <p className="text-sm font-semibold text-primary">{open.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{open.city}</p>
              <p className="mt-4 leading-relaxed text-foreground/80">{open.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
