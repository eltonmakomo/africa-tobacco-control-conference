import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-future.jpg";
import plenary from "@/assets/session-room.jpg";
import numbersBg from "@/assets/numbers-nairobi.jpg";
import sp1 from "@/assets/speaker-1.jpg";
import sp2 from "@/assets/speaker-2.jpg";
import sp3 from "@/assets/speaker-3.jpg";
import sp4 from "@/assets/speaker-4.jpg";
import conceptNote from "@/assets/docs/3rd_ACTD_Concept_Note_-_Abridged.docx.asset.json";
import mohLogo from "@/assets/partners/mohkenya.png.asset.json";
import treasuryLogo from "@/assets/partners/treasury-kenya.png.asset.json";
import acbfLogo from "@/assets/partners/acbf.png.asset.json";
import { Section } from "@/components/site/Bits";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { EVENT, HOME_IMPACT, PAST_EDITIONS, TRACKS } from "@/lib/conference";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTCD 2027 · Africa Conference on Tobacco Control and Development" },
      { name: "description", content: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty. 22–23 April 2027, Nairobi, Kenya — hybrid, English and French." },
      { property: "og:title", content: "ACTCD 2027 · Nairobi, 22–23 April 2027" },
      { property: "og:description", content: "The 3rd Africa Conference on Tobacco Control and Development. Register, submit an abstract or download the concept note." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

// Illustrative profiles only — replace with confirmed speakers.
const SPEAKERS = [
  { img: sp1, name: "Dr. Amina Wanjiru", role: "Public health leader", tag: "Sample profile" },
  { img: sp2, name: "Prof. Kwame Mensah", role: "Health economist", tag: "Sample profile" },
  { img: sp3, name: "Dr. Fatou Ndiaye", role: "Tobacco control researcher", tag: "Sample profile" },
  { img: sp4, name: "Hon. Joseph Otieno", role: "Policy and governance", tag: "Sample profile" },
];

// Draft outline built from the five tracks — times and sessions to be confirmed.
const AGENDA = [
  { day: "Day 1", date: "Thursday 22 April 2027", items: [["Morning", "Opening ceremony and high-level plenary"], ["Midday", `Track 1 · ${TRACKS[0]!.short}`], ["Afternoon", `Track 2 · ${TRACKS[1]!.short}`], ["Afternoon", `Track 3 · ${TRACKS[2]!.short}`], ["Evening", "Networking cocktail"]] },
  { day: "Day 2", date: "Friday 23 April 2027", items: [["Morning", `Track 4 · ${TRACKS[3]!.short}`], ["Midday", `Track 5 · ${TRACKS[4]!.short}`], ["Afternoon", "Youth and partner dialogues"], ["Afternoon", "Communiqué and Continental Call to Action"], ["Close", "Closing ceremony"]] },
];

function Countdown() {
  const ref = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1600);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  const diff = now === null ? 0 : Math.max(0, new Date(EVENT.startISO).getTime() - now);
  const units: [number, string][] = [
    [Math.floor(diff / 864e5), "Days"],
    [Math.floor((diff % 864e5) / 36e5), "Hours"],
    [Math.floor((diff % 36e5) / 6e4), "Minutes"],
    [Math.floor((diff % 6e4) / 1e3), "Seconds"],
  ];
  return (
    <div ref={ref} className="grid grid-cols-4 gap-3 text-center">
      {units.map(([v, l]) => (
        <div key={l} className="glass rounded-2xl px-3 py-4">
          <div className="text-3xl font-bold tabular-nums md:text-4xl">{now === null ? "—" : Math.floor(v * progress)}</div>
          <div className="eyebrow mt-1 text-[0.65rem] text-forest-foreground/75">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero — clean, theme-led */}
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt="Young Africans running through an open field above Nairobi at sunset" width={1920} height={1088} className="absolute inset-0 -z-20 size-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/90 via-forest/55 to-transparent" />
        <div className="mx-auto flex min-h-[min(82vh,760px)] max-w-7xl flex-col justify-center px-5 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-forest-foreground/85 animate-rise">3rd Africa Conference on Tobacco Control and Development</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl animate-rise">Protecting Africa's Future</h1>
            <p className="mt-4 text-xl font-medium text-forest-foreground/90 md:text-2xl animate-rise">Advancing Tobacco Control and Health Sovereignty</p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-foreground/85">
              <span className="flex items-center gap-2"><CalendarDays className="size-4" />{EVENT.dates}</span>
              <span className="flex items-center gap-2"><MapPin className="size-4" />{EVENT.location} · Hybrid</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/participate" hash="registration" className="inline-flex items-center gap-2 rounded-full bg-forest-foreground px-6 py-3.5 font-semibold text-primary shadow-elegant transition hover:-translate-y-0.5">
                Register Here <ArrowRight className="size-4" />
              </Link>
              <Link to="/call-for-abstracts" className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/70 px-6 py-3.5 font-semibold transition hover:bg-forest-foreground/15">
                Submit Abstract
              </Link>
              <a href={conceptNote.url} download className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/70 px-6 py-3.5 font-semibold transition hover:bg-forest-foreground/15">
                <Download className="size-4" /> Download Concept Note
              </a>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-gradient-brand" />
      </section>

      {/* Host logos */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-8 md:flex-row md:justify-center md:gap-16">
          <p className="eyebrow text-muted-foreground md:mr-4">Hosted by</p>
          <img src={mohLogo.url} alt="Ministry of Health, Kenya" className="h-14 w-auto object-contain" />
          <img src={treasuryLogo.url} alt="The National Treasury and Economic Planning, Kenya" className="h-14 w-auto object-contain" />
          <img src={acbfLogo.url} alt="The African Capacity Building Foundation (ACBF)" className="h-14 w-auto object-contain" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-primary">About the Conference</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">A continental platform for <span className="text-gradient-brand">collective action</span></h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              The 3rd Africa Conference on Tobacco Control and Development brings together policymakers, researchers, public health leaders, civil society, youth and development partners to accelerate tobacco control across the continent.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">Read more <ArrowRight className="size-4" /></Link>
          </div>
          <figure className="overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img src={plenary} alt="The plenary room at the 2nd ACTCD" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </figure>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="relative isolate overflow-hidden bg-forest py-24 text-forest-foreground">
        <img src={numbersBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-foreground/35" />
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow inline-block rounded-full glass px-4 py-2">ACTCD in numbers</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_IMPACT.map((n) => (
              <div key={n.label} className="glass rounded-2xl p-8 text-on-photo shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                <div className="text-5xl font-bold">{n.figure}</div>
                <p className="mt-2 text-lg font-semibold">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <Section eyebrow="Featured speakers" title="Voices leading Africa's response">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="group overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <img src={s.img} alt={s.name} loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
              <div className="p-5">
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm text-muted-foreground">{s.role}</p>
                <span className="mt-3 inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Agenda */}
      <Section eyebrow="Agenda at a glance" title="Two days in Nairobi" className="bg-secondary/60">
        <div className="grid gap-6 lg:grid-cols-2">
          {AGENDA.map((d) => (
            <div key={d.day} className="rounded-3xl bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold text-gradient-brand">{d.day}</h3>
                <p className="text-sm text-muted-foreground">{d.date}</p>
              </div>
              <ul className="mt-6 divide-y divide-border">
                {d.items.map(([time, label], i) => (
                  <li key={i} className="flex gap-5 py-3">
                    <span className="w-24 shrink-0 text-sm font-semibold text-primary">{time}</span>
                    <span className="text-foreground/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Draft outline — session times to be confirmed.</p>
          <Link to="/program" className="inline-flex items-center gap-2 font-semibold text-primary">Full program <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* Past editions */}
      <Section eyebrow="Past editions" title="Building on six years of momentum">
        <div className="grid gap-5 md:grid-cols-3">
          {PAST_EDITIONS.map((e) => (
            <div key={e.year} className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
              <span className="text-5xl font-bold text-gradient-brand">{e.year}</span>
              <h3 className="mt-3 font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.dates}</p>
              <p className="mt-4 text-sm italic text-foreground/80">“{e.theme}”</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Join us */}
      <section className="px-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest p-10 text-forest-foreground shadow-elegant md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-swirl opacity-40 animate-spin-slow" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-forest-foreground/85">{EVENT.dates} · {EVENT.location}</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Join us for the ACTCD</h2>
              <p className="mt-4 max-w-md text-forest-foreground/85">Be part of the continental conversation on tobacco control and health sovereignty — in person or online.</p>
              <Link to="/participate" hash="registration" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-foreground px-7 py-4 font-semibold text-primary transition hover:-translate-y-0.5">
                Register Here <ArrowRight className="size-4" />
              </Link>
            </div>
            <Countdown />
          </div>
        </div>
      </section>

      {/* Partners */}
      <Section eyebrow="Our partners" title="Convened together">
        <PartnerLogos />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Other partners and sponsors will be listed as they are confirmed.</p>
          <Link to="/participate" hash="partner" className="inline-flex items-center gap-2 font-semibold text-primary">Become a partner <ArrowRight className="size-4" /></Link>
        </div>
      </Section>
    </>
  );
}
