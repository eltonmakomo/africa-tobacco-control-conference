import concept from "@/assets/docs/3rd_ACTD_Concept_Note_-_Abridged.docx.asset.json";
import agendaEn from "@/assets/docs/ACTD_Agenda_English_Final_9_Nov_2024.docx.asset.json";
import agendaFr from "@/assets/docs/ACTD_Agenda_13-14_Nov_2024-27_FRENCH.docx.asset.json";
import brand from "@/assets/docs/ACTD_Branded_Materials_v19_2nd_ACTD.pdf.asset.json";
import rep24 from "@/assets/docs/ACTDC_Report_2024.pdf.asset.json";
import rep24fr from "@/assets/docs/ACTDC_Report_French.pdf.asset.json";
import comEn from "@/assets/docs/Communique_Final_1330hrs_ACTD.docx.asset.json";
import comFr from "@/assets/docs/Communique_Final_1330hrs_ACTD_french.docx.asset.json";
import rep21 from "@/assets/docs/Conference_Report_Final_Version_14_Feb_2022_1st_ACTD_ONLINE.docx.asset.json";
import post from "@/assets/docs/2nd_ACTD_Post-Assessment_Report_rev1.docx.asset.json";
import heroImg from "@/assets/africa-tobacco-46-of-56.jpg.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/knowledge-hub")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Knowledge Hub · ACTCD Reports, Communiqués and Resources" },
      { name: "description", content: "The 2027 concept note, reports from the 2021 and 2024 editions, the 2024 communiqué and agenda, and the post-assessment report — in English and French." },
      { property: "og:title", content: "ACTCD Knowledge Hub" },
      { property: "og:description", content: "Official documents and knowledge products of the Conference." },
    ],
  }),
  component: Hub,
});

type Doc = { title: string; note: string; files: { label: string; url: string }[] };

const AVAILABLE_EN: Doc[] = [
  { title: "Concept Note — 3rd ACTCD (abridged)", note: "2027 · Word", files: [{ label: "EN", url: concept.url }] },
  { title: "Report — 2nd ACTCD (2024, Accra)", note: "PDF", files: [{ label: "EN", url: rep24.url }, { label: "FR", url: rep24fr.url }] },
  { title: "Communiqué — 2nd ACTCD (2024)", note: "Word", files: [{ label: "EN", url: comEn.url }, { label: "FR", url: comFr.url }] },
  { title: "Agenda — 2nd ACTCD, 13–14 Nov 2024", note: "Word", files: [{ label: "EN", url: agendaEn.url }, { label: "FR", url: agendaFr.url }] },
  { title: "Post-Assessment Report — 2nd ACTCD", note: "Word", files: [{ label: "EN", url: post.url }] },
  { title: "Branded materials — 2nd ACTCD", note: "PDF", files: [{ label: "View", url: brand.url }] },
  { title: "Report — 1st ACTCD (2021, virtual)", note: "Word", files: [{ label: "EN", url: rep21.url }] },
];

const AVAILABLE_FR: Doc[] = [
  { title: "Note conceptuelle — 3e ACTCD (abrégée)", note: "2027 · Word", files: [{ label: "EN", url: concept.url }] },
  { title: "Rapport — 2e ACTCD (2024, Accra)", note: "PDF", files: [{ label: "EN", url: rep24.url }, { label: "FR", url: rep24fr.url }] },
  { title: "Communiqué — 2e ACTCD (2024)", note: "Word", files: [{ label: "EN", url: comEn.url }, { label: "FR", url: comFr.url }] },
  { title: "Ordre du jour — 2e ACTCD, 13–14 nov. 2024", note: "Word", files: [{ label: "EN", url: agendaEn.url }, { label: "FR", url: agendaFr.url }] },
  { title: "Rapport d'évaluation — 2e ACTCD", note: "Word", files: [{ label: "EN", url: post.url }] },
  { title: "Supports de marque — 2e ACTCD", note: "PDF", files: [{ label: "Voir", url: brand.url }] },
  { title: "Rapport — 1re ACTCD (2021, virtuelle)", note: "Word", files: [{ label: "EN", url: rep21.url }] },
];

function Hub() {
  const { fr } = useLang();
  const docs = fr ? AVAILABLE_FR : AVAILABLE_EN;

  return (
    <>
      <PageHero
        image={heroImg.url}
        imgClassName="object-[center_0%]"
        title={fr ? "Centre de connaissances" : "Knowledge Hub"}
      />
      <Section eyebrow="Documents" title={fr ? "Note conceptuelle, rapports et communiqués" : "Concept note, reports and communiqués"}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((d) => (
            <div key={d.title} className="group flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary"><FileText /></span>
              <div><p className="font-semibold">{d.title}</p><p className="text-sm text-muted-foreground">{d.note}</p>
                <div className="mt-3 flex gap-2">{d.files.map((f) => <a key={f.label} href={f.url} download className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90"><Download className="size-3" />{f.label}</a>)}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
