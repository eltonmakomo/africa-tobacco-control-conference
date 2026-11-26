import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, MapPin } from "lucide-react";
import { Countdown } from "@/components/site/Countdown";
import hero from "@/assets/home-banner.jpg";
import plenary from "@/assets/plenary.jpg";
import numbersBg from "@/assets/numbers-nairobi.jpg";
import sp1 from "@/assets/speaker-1.jpg";
import sp2 from "@/assets/speaker-2.jpg";
import sp3 from "@/assets/speaker-3.jpg";
import sp4 from "@/assets/speaker-4.jpg";
import conceptNote from "@/assets/docs/3rd_ACTD_Concept_Note_-_Abridged.docx.asset.json";
import gokLogo from "@/assets/partners/government-of-kenya.png.asset.json";
import acbfLogo from "@/assets/partners/acbf.png.asset.json";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Section } from "@/components/site/Bits";
import { CountUp } from "@/components/site/CountUp";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { EVENT, EVENT_FR, HOME_IMPACT, HOME_IMPACT_FR, PAST_EDITIONS, PAST_EDITIONS_FR, TRACKS, TRACKS_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

const SPEAKERS_EN = [
  { img: sp1, name: "Dr. Amina Wanjiru", role: "Public health leader", org: "Nairobi, Kenya", bio: "A public health physician with two decades of experience leading national tobacco control and NCD prevention programmes, with a focus on protecting young people from emerging nicotine products." },
  { img: sp2, name: "Prof. Kwame Mensah", role: "Health economist", org: "Accra, Ghana", bio: "An economist whose research on tobacco taxation and domestic resource mobilisation has informed excise reforms in several African countries." },
  { img: sp3, name: "Dr. Awa Diallo", role: "Tobacco control researcher", org: "Dakar, Senegal", bio: "A researcher working on surveillance of tobacco use and industry interference, and a champion of African-generated evidence for policy." },
  { img: sp4, name: "Hon. Joseph Otieno", role: "Policy and governance", org: "Nairobi, Kenya", bio: "A legislator and governance advocate who has championed WHO FCTC Article 5.3 safeguards and multisectoral coordination." },
];

const SPEAKERS_FR = [
  { img: sp1, name: "Dr. Amina Wanjiru", role: "Responsable de santé publique", org: "Nairobi, Kenya", bio: "Médecin de santé publique forte de deux décennies d'expérience à la tête de programmes nationaux de lutte antitabac et de prévention des MNT, avec un accent sur la protection des jeunes face aux nouveaux produits de la nicotine." },
  { img: sp2, name: "Prof. Kwame Mensah", role: "Économiste de la santé", org: "Accra, Ghana", bio: "Économiste dont les recherches sur la fiscalité du tabac et la mobilisation des ressources intérieures ont éclairé des réformes des accises dans plusieurs pays africains." },
  { img: sp3, name: "Dr. Awa Diallo", role: "Chercheuse en lutte antitabac", org: "Dakar, Sénégal", bio: "Chercheuse travaillant sur la surveillance du tabagisme et de l'ingérence de l'industrie, et défenseure des données produites en Afrique pour éclairer les politiques." },
  { img: sp4, name: "Hon. Joseph Otieno", role: "Politique et gouvernance", org: "Nairobi, Kenya", bio: "Législateur et défenseur de la bonne gouvernance qui a porté les garde-fous de l'article 5.3 de la CCLAT de l'OMS et la coordination multisectorielle." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTCD 2027 · Africa Conference on Tobacco Control and Development" },
      { name: "description", content: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty. 21–23 April 2027, Nairobi, Kenya — hybrid, English and French." },
      { property: "og:title", content: "ACTCD 2027 · Nairobi, 21–23 April 2027" },
      { property: "og:description", content: "The 3rd Africa Conference on Tobacco Control and Development. Submit an abstract or download the concept note." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { fr } = useLang();
  const ev = fr ? EVENT_FR : EVENT;
  const tracks = fr ? TRACKS_FR : TRACKS;
  const impact = fr ? HOME_IMPACT_FR : HOME_IMPACT;
  const editions = fr ? PAST_EDITIONS_FR : PAST_EDITIONS;
  const speakers = fr ? SPEAKERS_FR : SPEAKERS_EN;

  const agenda = fr
    ? [
        {
          day: "Jour 1",
          date: "Mercredi 21 avril 2027",
          items: [
            { time: "Matin", label: "Inscription et ouverture officielle" },
            { time: "Midi", label: "Plénière d'ouverture : définition des priorités stratégiques" },
            { time: "Après-midi", label: "Discours liminaires" },
          ],
        },
        {
          day: "Jour 2",
          date: "Jeudi 22 avril 2027",
          items: [
            { time: "Matin", label: "Plénière quotidienne : panel de jusqu'à quatre intervenants" },
            { time: "Midi", label: "Sessions parallèles selon les cinq pistes" },
            { time: "Après-midi", label: "Sessions d'affiches électroniques" },
          ],
        },
        {
          day: "Jour 3",
          date: "Vendredi 23 avril 2027",
          items: [
            { time: "Matin", label: "Sessions parallèles selon les cinq pistes" },
            { time: "Midi", label: "Plénière de clôture : adoption de l'Appel à l'action continental" },
            { time: "Clôture", label: "Cérémonie de clôture" },
          ],
        },
      ]
    : [
        {
          day: "Day 1",
          date: "Wednesday 21 April 2027",
          items: [
            { time: "Morning", label: "Registration and official opening" },
            { time: "Midday", label: "Opening Plenary: framing the strategic priorities" },
            { time: "Afternoon", label: "Keynote addresses" },
          ],
        },
        {
          day: "Day 2",
          date: "Thursday 22 April 2027",
          items: [
            { time: "Morning", label: "Daily plenary: panel of up to four speakers" },
            { time: "Midday", label: "Parallel sessions under the five tracks" },
            { time: "Afternoon", label: "e-Poster sessions" },
          ],
        },
        {
          day: "Day 3",
          date: "Friday 23 April 2027",
          items: [
            { time: "Morning", label: "Parallel sessions under the five tracks" },
            { time: "Midday", label: "Closing Plenary: adoption of the Continental Call to Action" },
            { time: "Close", label: "Closing ceremony" },
          ],
        },
      ];

  return (
    <>
      {/* Hero — clean, theme-led */}
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt={fr ? "Participants à la 2e ACTCD à Accra" : "Participants at the 2nd ACTCD in Accra"} width={1920} height={1088} className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/90 via-forest/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-forest/30 md:hidden" />
        <div className="mx-auto flex min-h-[min(82vh,760px)] max-w-7xl flex-col justify-center px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-forest-foreground/85 animate-rise">{ev.edition}</p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] md:text-5xl animate-rise">{fr ? "Protéger l'avenir de l'Afrique : faire progresser la lutte antitabac et la souveraineté sanitaire" : "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty"}</h1>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-foreground/85">
              <span className="flex items-center gap-2"><CalendarDays className="size-4" />{ev.dates}</span>
              <span className="flex items-center gap-2"><MapPin className="size-4" />{ev.location} · {fr ? "Hybride" : "Hybrid"}</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/call-for-abstracts" className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/70 px-6 py-3.5 font-semibold transition hover:bg-forest-foreground/15">
                {fr ? "Soumettre un résumé" : "Submit Abstract"}
              </Link>
              <a href={conceptNote.url} download className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/70 px-6 py-3.5 font-semibold transition hover:bg-forest-foreground/15">
                <Download className="size-4" /> {fr ? "Télécharger la note conceptuelle" : "Download Concept Note"}
              </a>
            </div>
            <div className="mt-10 max-w-lg">
              <Countdown compact />
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-gradient-brand" />
      </section>

      {/* Host logos */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-10 md:flex-row md:gap-16 md:px-10">
          <p className="eyebrow text-muted-foreground md:mr-4">{fr ? "Organisée par" : "Hosted by"}</p>
          <img src={gokLogo.url} alt={fr ? "Gouvernement du Kenya" : "Government of Kenya"} className="h-14 w-auto max-w-full object-contain" />
          <img src={acbfLogo.url} alt="The African Capacity Building Foundation (ACBF)" className="h-14 w-auto max-w-full object-contain" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-10 lg:gap-20">
          <div>
            <p className="eyebrow text-primary">{fr ? "À propos de la Conférence" : "About the Conference"}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
              {fr ? <>Une plateforme continentale pour <span className="text-primary">l'action collective</span></> : <>A continental platform for <span className="text-primary">collective action</span></>}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              {fr
                ? "La 3e Conférence africaine sur la lutte antitabac et le développement réunit décideurs, chercheurs, responsables de santé publique, société civile, jeunes et partenaires de développement pour accélérer la lutte antitabac à travers le continent."
                : "The 3rd Africa Conference on Tobacco Control and Development brings together policymakers, researchers, public health leaders, civil society, youth and development partners to accelerate tobacco control across the continent."}
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">{fr ? "Lire la suite" : "Read more"} <ArrowRight className="size-4" /></Link>
          </div>
          <figure className="overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={plenary} alt={fr ? "La salle plénière de la 2e ACTCD" : "The plenary room at the 2nd ACTCD"} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </figure>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="relative isolate overflow-hidden bg-forest py-24 text-forest-foreground md:py-32">
        <img src={numbersBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-foreground/35" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="eyebrow inline-block rounded-full glass px-4 py-2">{fr ? "L'ACTCD en chiffres" : "ACTCD in numbers"}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((n) => (
              <div key={n.label} className="glass rounded-2xl p-8 text-on-photo shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <div className="text-5xl font-bold"><CountUp value={n.figure} /></div>
                <p className="mt-2 text-lg font-semibold">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <Section title={fr ? "Intervenants vedettes" : "Featured Speakers"}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s) => (
            <Dialog key={s.name}>
              <DialogTrigger asChild>
                <button type="button" className="group w-full overflow-hidden rounded-3xl bg-card text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <img src={s.img} alt={s.name} loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                  <div className="p-5">
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.role}</p>
                    <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">{fr ? "Voir le profil" : "View profile"} <ArrowRight className="size-3.5" /></p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl overflow-hidden p-0 sm:rounded-3xl">
                <div className="grid sm:grid-cols-[220px_1fr]">
                  <img src={s.img} alt={s.name} className="h-64 w-full object-cover object-top sm:h-full" />
                  <div className="p-7">
                    <p className="eyebrow text-primary">{s.role}</p>
                    <DialogTitle className="mt-2 text-2xl font-bold">{s.name}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{s.org}</p>
                    <div className="mt-4 h-1 w-12 rounded-full bg-gradient-brand" />
                    <DialogDescription className="mt-4 text-base leading-relaxed text-foreground/80">{s.bio}</DialogDescription>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </Section>

      {/* Agenda */}
      <Section title={fr ? "Ordre du jour de la Conférence" : "Agenda of the conference"} className="border-t border-border/60">
        <div className="grid gap-5 lg:grid-cols-3">
          {agenda.map((d) => (
            <div key={d.day} className="rounded-3xl bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-2xl font-bold text-gradient-brand">{d.day}</h3>
                <p className="text-xs text-muted-foreground lg:text-sm">{d.date}</p>
              </div>
              <ul className="mt-5 divide-y divide-border">
                {d.items.map((it) => (
                  <li key={it.time} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-4">
                    <span className="w-24 shrink-0 text-sm font-semibold text-primary">{it.time}</span>
                    <span className="text-sm leading-relaxed text-foreground/85">{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link to="/program" className="inline-flex items-center gap-2 font-semibold text-primary">{fr ? "Programme complet" : "Full program"} <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* Past editions */}
      <Section title={fr ? "Éditions passées" : "Past editions"}>
        <div className="grid gap-5 md:grid-cols-3">
          {editions.map((e) => (
            <div key={e.year} className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
              <span className="text-5xl font-bold text-gradient-brand">{e.year}</span>
              <h3 className="mt-3 font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.dates}</p>
              <p className="mt-4 text-sm italic text-foreground/80">“{e.theme}”</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link to="/past-editions" className="inline-flex items-center gap-2 font-semibold text-primary">{fr ? "Voir les éditions passées" : "View past editions"} <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* Join us */}
      <section className="px-5 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest p-10 text-forest-foreground shadow-elegant md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-swirl opacity-40 animate-spin-slow" />
          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-forest-foreground/85">{ev.dates} · {ev.location}</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">{fr ? "Rejoignez-nous à l'ACTCD" : "Join us for the ACTCD"}</h2>
              <p className="mx-auto mt-4 max-w-md text-forest-foreground/85">{fr ? "En présentiel à Nairobi, avec possibilité de participation virtuelle, en anglais et en français." : "In person in Nairobi, with an option for virtual attendance, in English and French."}</p>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href={`mailto:comms@theacbf.org?subject=${encodeURIComponent(fr ? "Inscription — ACTCD 2027" : "Registration — ACTCD 2027")}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                {fr ? "S'inscrire ici" : "Register Here"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Section eyebrow={fr ? "Nos partenaires" : "Our partners"} title={fr ? "Convoquée ensemble" : "Convened together"}>
        <PartnerLogos />
      </Section>
    </>
  );
}
