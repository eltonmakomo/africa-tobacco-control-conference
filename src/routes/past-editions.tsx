import heroImg from "@/assets/edition-2024.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";
import { PAST_EDITIONS, PAST_EDITIONS_FR, RESOLUTIONS_2024, RESOLUTIONS_2024_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/past-editions")({
  head: () => ({
    meta: [
      { title: "Past Editions · ACTCD 2021 and 2024" },
      { name: "description", content: "The 1st ACTCD (virtual, 2021) and the 2nd ACTCD (Accra, Ghana, 2024): themes, participation and the 2024 Accra Communiqué." },
      { property: "og:title", content: "ACTCD Past Editions" },
      { property: "og:description", content: "Themes, participation and resolutions from the 2021 and 2024 editions of ACTCD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PastEditions,
});

function PastEditions() {
  const { fr } = useLang();
  const editions = (fr ? PAST_EDITIONS_FR : PAST_EDITIONS).filter((e) => e.year !== "2027");
  const resolutions = fr ? RESOLUTIONS_2024_FR : RESOLUTIONS_2024;

  return (
    <>
      <PageHero image={heroImg} imgClassName="object-top" title={fr ? "Éditions passées" : "Past editions"} />
      <Section title={fr ? "2021 et 2024" : "2021 and 2024"}>
        <div className="grid gap-6 md:grid-cols-2">
          {editions.map((e) => (
            <div key={e.year} className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
              <div className="text-5xl font-bold text-gradient-brand">{e.year}</div>
              <p className="mt-3 font-semibold">{e.title}</p>
              <p className="text-sm text-muted-foreground">{e.dates}</p>
              <p className="mt-4 font-medium italic">“{e.theme}”</p>
              <p className="mt-3 text-sm text-foreground/80">{e.detail}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title={fr ? "Communiqué d'Accra 2024" : "2024 Accra Communiqué"} className="border-t border-border/60">
        <ul className="grid gap-3 md:grid-cols-2">
          {resolutions.map((r) => (
            <li key={r} className="flex gap-3 rounded-2xl bg-card p-5 text-foreground/85 shadow-card"><span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />{r}</li>
          ))}
        </ul>
        <div className="mt-8 flex justify-end">
          <Link to="/knowledge-hub" className="inline-flex items-center gap-2 font-semibold text-primary">{fr ? "Rapports et communiqués" : "Reports and communiqués"} <ArrowRight className="size-4" /></Link>
        </div>
      </Section>
    </>
  );
}
