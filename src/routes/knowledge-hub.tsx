import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/knowledge-hub")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub · ACTCD Reports, Communiqués and Resources" },
      { name: "description", content: "Concept note, reports from the 2021 and 2024 editions, communiqués, the Knowledge Compendium, webinars and multimedia — in English and French." },
      { property: "og:title", content: "ACTCD Knowledge Hub" },
      { property: "og:description", content: "Official documents and knowledge products of the Conference." },
    ],
  }),
  component: Hub,
});

const AVAILABLE = [
  ["Concept Note", "3rd ACTCD · EN / FR"],
  ["Report — 1st ACTCD (2021)", "EN"],
  ["Report — 2nd ACTCD (2024)", "EN / FR"],
  ["Communiqués — 2024", "EN / FR"],
  ["Post-Assessment Report — 2024", "EN"],
];
const AFTER = ["Knowledge Compendium", "Continental Call to Action", "Conference Report", "Session recordings", "Webinars", "Multimedia"];

function Hub() {
  return (
    <>
      <PageHero eyebrow="Knowledge Hub" title="Evidence, outcomes and records" intro="The Knowledge Hub gathers the official documents and knowledge products of the Conference. Documents appear in English and French." />
      <Section eyebrow="Documents" title="Concept note, reports and communiqués">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {AVAILABLE.map(([t, l]) => (
            <div key={t} className="group flex gap-4 rounded-3xl border border-border bg-card p-6 transition hover:shadow-elegant">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary"><FileText /></span>
              <div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{l}</p><p className="mt-2 text-xs font-medium text-accent-foreground">Download link coming soon</p></div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="After the event" title="Coming after April 2027" className="bg-secondary/60">
        <div className="flex flex-wrap gap-3">{AFTER.map((a) => <span key={a} className="rounded-full bg-card px-5 py-3 font-medium shadow-sm">{a}</span>)}</div>
      </Section>
    </>
  );
}
