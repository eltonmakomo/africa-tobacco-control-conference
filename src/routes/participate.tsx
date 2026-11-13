import heroImg from "@/assets/cocktail-group.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import nairobi from "@/assets/nairobi.jpg";
import { PageHero, Pending, Section } from "@/components/site/Bits";
import { ARTICLE_53 } from "@/lib/conference";

export const Route = createFileRoute("/participate")({
  head: () => ({
    meta: [
      { title: "Participate · Register, Partner, Exhibit · ACTCD 2027" },
      { name: "description", content: "Register in person or virtually, become a partner or sponsor, exhibit, and plan travel to Nairobi for ACTCD 2027." },
      { property: "og:title", content: "Participate in ACTCD 2027" },
      { property: "og:description", content: "Registration, partnership, exhibition, travel and venue." },
    ],
  }),
  component: Participate,
});

function Participate() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Participate" title="Join Africa's tobacco control community in Nairobi" />
      <Section id="registration" eyebrow="Registration" title="In person or virtual">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg text-foreground/80">
            <p>Registration opens on this page for in-person and virtual participation. The Conference welcomes about 300 participants on site, and up to 500 including virtual, including policymakers, researchers, civil society, academia, media, youth and development partners.</p>
            <p>Simultaneous interpretation in English and French supports full participation.</p>
          </div>
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground shadow-elegant transition hover:-translate-y-1 hover:shadow-card-lg">
            <div className="grid grid-cols-2 gap-4">
              {[["In person", "Nairobi, Kenya"], ["Virtual", "Join online"]].map(([a, b]) => <div key={a} className="glass rounded-2xl p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold text-forest-foreground">{a}</p><p className="text-sm text-forest-foreground/75">{b}</p></div>)}
            </div>
            <button disabled className="mt-6 w-full cursor-not-allowed rounded-full bg-forest-foreground/85 py-4 font-semibold text-primary/70">Register on Whova · opening soon</button>
            <p className="mt-3 text-center text-xs text-forest-foreground/60">Registration is managed through Whova.</p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Call for Abstracts" title="Present your work" className="bg-secondary/60">
        <Link to="/call-for-abstracts" className="inline-flex rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground">See the Call for Abstracts</Link>
      </Section>
      <Section id="partner" eyebrow="Become a partner or sponsor" title="Tiered partnership packages">
        <p className="max-w-3xl text-foreground/80">The Conference offers partnership and sponsorship opportunities through tiered packages, alongside exhibition options, coordinated by the Sponsorship and Exhibition Financing Committee. Prospective partners reach the Committee through the contact details on this page.</p>
        <p className="mt-6 max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 font-medium shadow-card transition hover:shadow-card-lg">All partnerships follow the conflict-of-interest safeguards and WHO FCTC Article 5.3. {ARTICLE_53}</p>
        <div className="mt-6"><Pending>Package details and Committee contact details to be confirmed.</Pending></div>
      </Section>
      <Section id="exhibit" eyebrow="Exhibit" title="Showcase innovation" className="bg-secondary/60">
        <p className="max-w-3xl text-foreground/80">Exhibitors showcase innovations, research and best practices in the exhibition area. Organizers of side events and exhibitions apply through this section.</p>
      </Section>
      <section id="travel" className="relative scroll-mt-24 overflow-hidden text-forest-foreground">
        <img src={nairobi} alt="Nairobi skyline at sunset" loading="lazy" width={1600} height={1008} className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-5 py-24">
          <p className="eyebrow text-forest-foreground/90">Travel and venue</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Welcome to Nairobi</h2>
          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Venue", "Visa requirements for Kenya", "Accommodation & preferred hotels", "Airport transfers", "Local travel"].map((x) => (
              <div key={x} className="glass rounded-2xl p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold">{x}</p><p className="mt-1 text-xs text-forest-foreground/70">Details to follow as arrangements are finalized</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
