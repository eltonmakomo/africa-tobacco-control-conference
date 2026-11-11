import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Globe2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-delegates.jpg";
import plenary from "@/assets/plenary.jpg";
import eposter from "@/assets/eposter.jpg";
import youth from "@/assets/youth.jpg";
import dialogue from "@/assets/dialogue.jpg";
import nairobi from "@/assets/nairobi.jpg";
import emblem from "@/assets/actcd-emblem.png";
import { Pending, Section } from "@/components/site/Bits";
import { CONVENERS, EVENT, NUMBERS, TRACKS } from "@/lib/conference";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTCD 2027 · Africa Conference on Tobacco Control and Development" },
      { name: "description", content: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty. 22–23 April 2027, Nairobi, Kenya — hybrid, English and French." },
      { property: "og:title", content: "ACTCD 2027 · Nairobi, 22–23 April 2027" },
      { property: "og:description", content: "The 3rd Africa Conference on Tobacco Control and Development. Register or submit an abstract." },
    ],
  }),
  component: Home,
});

function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(t);
  }, []);
  const diff = now === null ? 0 : Math.max(0, new Date(EVENT.startISO).getTime() - now);
  const d = Math.floor(diff / 864e5), h = Math.floor((diff % 864e5) / 36e5), m = Math.floor((diff % 36e5) / 6e4);
  return (
    <div className="glass grid grid-cols-3 gap-4 rounded-3xl p-5 text-center">
      {[[d, "Days"], [h, "Hours"], [m, "Minutes"]].map(([v, l]) => (
        <div key={l}>
          <div className="text-3xl font-bold tabular-nums md:text-4xl">{now === null ? "—" : v}</div>
          <div className="eyebrow mt-1 text-[0.65rem] text-forest-foreground/70">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt="Delegates in discussion at an African health conference" width={1920} height={1088} className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <img src={emblem} alt="" aria-hidden className="pointer-events-none absolute -right-24 top-10 -z-10 hidden w-[36rem] opacity-25 animate-spin-slow lg:block" />
        <div className="mx-auto grid min-h-[min(86vh,820px)] max-w-7xl items-end gap-10 px-5 pb-16 pt-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-gold animate-rise">3rd Africa Conference on Tobacco Control and Development</p>
            <h1 className="mt-5 text-5xl font-bold leading-[0.98] md:text-7xl animate-rise">
              Protecting <span className="text-gold">Africa's Future</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium text-forest-foreground/90 md:text-2xl animate-rise">
              Advancing Tobacco Control and Health Sovereignty
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-foreground/85">
              <span className="flex items-center gap-2"><CalendarDays className="size-4 text-gold" />{EVENT.dates}</span>
              <span className="flex items-center gap-2"><MapPin className="size-4 text-gold" />{EVENT.location}</span>
              <span className="flex items-center gap-2"><Globe2 className="size-4 text-gold" />In person + virtual · English & French</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/participate" hash="registration" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground shadow-gold transition hover:-translate-y-0.5">
                Register <ArrowRight className="size-4" />
              </Link>
              <Link to="/call-for-abstracts" className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:bg-forest-foreground/20">
                Submit an Abstract
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3 text-forest-foreground/70">Countdown to Nairobi</p>
            <Countdown />
          </div>
        </div>
        <div className="h-1.5 bg-gradient-brand" />
      </section>

      {/* About — sticky scroll: the heading column pins while the cards and photos scroll past */}
      <section id="about" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 md:flex-row md:gap-10 lg:gap-14">
          <div className="md:sticky md:top-24 md:w-[40%] md:self-start lg:top-28 lg:w-[38%]">
            <p className="eyebrow text-primary">About the Conference</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">A continental platform for <span className="text-gradient-brand">collective action</span></h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              The 3rd Africa Conference on Tobacco Control and Development brings together policymakers, researchers, public health leaders, civil society, youth and development partners to accelerate tobacco control across the continent. The African Capacity Building Foundation convenes the Conference with the Ministry of Health of Kenya, the African Union Commission and the Africa Centres for Disease Control and Prevention.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">Read more <ArrowRight className="size-4" /></Link>
          </div>

          <div className="w-full space-y-4 md:w-[60%] lg:w-[62%]">
            <div className="overflow-hidden rounded-3xl bg-secondary">
              <img src={dialogue} alt="Policymakers in dialogue" loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-8">
                <p className="eyebrow text-primary">Theme & objectives</p>
                <p className="mt-3 text-xl font-semibold leading-snug">{EVENT.theme}</p>
                <p className="mt-4 text-foreground/75">
                  The theme positions tobacco control within Africa's broader movement towards health sovereignty. The Conference strengthens African leadership, evidence and sustainable capacity for tobacco control as a contribution to protecting Africa's future.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [plenary, "High-level plenaries", "sm:col-span-2 aspect-[16/9]"],
                [youth, "Youth at the centre", "aspect-[4/3]"],
                [eposter, "African evidence", "aspect-[4/3]"],
                [nairobi, "Nairobi, the host city", "sm:col-span-2 aspect-[16/9]"],
              ].map(([src, label, cls]) => (
                <figure key={label} className={`group relative overflow-hidden rounded-3xl ${cls}`}>
                  <img src={src} alt={label} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/10 to-transparent" />
                  <figcaption className="absolute bottom-5 left-5 font-semibold text-forest-foreground">{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative isolate overflow-hidden bg-forest py-20 text-forest-foreground">
        <img src={nairobi} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 size-full object-cover opacity-20" />
        <div className="pointer-events-none absolute -left-40 top-1/2 size-[40rem] -translate-y-1/2 rounded-full bg-swirl opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p className="eyebrow text-gold">ACTCD in numbers</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-forest-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {NUMBERS.map((n) => (
              <div key={n.label} className="bg-forest/85 p-8 transition hover:bg-forest-foreground/5">
                <div className="flex items-baseline gap-2"><span className="text-5xl font-bold text-gold">{n.figure}</span><span className="text-lg font-semibold">{n.label}</span></div>
                <p className="mt-2 text-sm text-forest-foreground/70">{n.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <Section eyebrow="Conference tracks" title="Five tracks. One continental agenda.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {TRACKS.map((t) => (
            <Link key={t.n} to="/program" hash={`track-${t.n}`} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-0 transition group-hover:opacity-100" />
              <span className="text-5xl font-bold text-primary/15">0{t.n}</span>
              <h3 className="mt-4 font-semibold leading-snug">{t.short}</h3>
              <p className="mt-3 line-clamp-4 text-sm text-muted-foreground">{t.scope}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Abstracts CTA */}
      <section className="px-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-primary-foreground md:p-16">
          <img src={emblem} alt="" aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 w-96 opacity-20 mix-blend-screen" />
          <p className="eyebrow">Call for abstracts</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-5xl">Share African evidence that shapes policy.</h2>
          <p className="mt-4 max-w-xl text-primary-foreground/90">The call opens in October or November 2026. The Scientific Committee provides detailed guidelines on this website.</p>
          <Link to="/call-for-abstracts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 font-semibold text-primary transition hover:-translate-y-0.5">
            View guidelines & key dates <ArrowRight className="size-4" />
          </Link>
          <img src={eposter} alt="Researcher presenting a digital e-poster" loading="lazy" className="absolute right-10 top-1/2 hidden h-[115%] w-80 -translate-y-1/2 rotate-3 rounded-3xl object-cover shadow-elegant lg:block" />
        </div>
      </section>

      {/* Speakers */}
      <Section eyebrow="Featured speakers" title="Voices leading Africa's response">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] rounded-3xl border border-dashed border-border bg-muted p-6 flex flex-col justify-end">
              <div className="mb-auto size-16 rounded-full bg-gradient-brand opacity-30" />
              <p className="font-semibold text-foreground/60">Speaker to be announced</p>
            </div>
          ))}
        </div>
        <div className="mt-6"><Pending>Speaker profiles will appear here as speakers are confirmed.</Pending></div>
      </Section>

      {/* Partners */}
      <Section eyebrow="Conveners and partners" title="Convened together" className="bg-secondary/60">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONVENERS.map((c) => (
            <div key={c} className="flex min-h-28 items-center justify-center rounded-2xl bg-card p-6 text-center font-semibold text-foreground/80 shadow-sm">{c}</div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Partner logos will be added once supplied.</p>
          <Link to="/participate" hash="partner" className="inline-flex items-center gap-2 font-semibold text-primary">Become a partner <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* News */}
      <Section eyebrow="News & updates" title="Stay informed">
        <div className="grid gap-6 lg:grid-cols-2">
          <Pending>The latest news and press releases will be published in the Media section as updates are confirmed.</Pending>
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-forest-foreground/75">Newsletter signup will connect to the ACBF mailing list shortly.</p>
            <Link to="/media" className="mt-5 inline-flex items-center gap-2 font-semibold text-gold">Go to Media <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </Section>
    </>
  );
}
