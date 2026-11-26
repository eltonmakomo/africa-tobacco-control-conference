import heroImg from "@/assets/panel-speaker.jpg";
import kitImg from "@/assets/speaker-mic.jpg";
import concept from "@/assets/docs/3rd_ACTD_Concept_Note_-_Abridged.docx.asset.json";
import brand from "@/assets/docs/ACTD_Branded_Materials_v19_2nd_ACTD.pdf.asset.json";
import rep24 from "@/assets/docs/ACTDC_Report_2024.pdf.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, FileText } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53, ARTICLE_53_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media · ACTCD 2027" },
      { name: "description", content: "Media accreditation, press materials and a downloadable media kit for the 3rd Africa Conference on Tobacco Control and Development." },
      { property: "og:title", content: "ACTCD 2027 — Media" },
      { property: "og:description", content: "Accreditation, press releases and a media kit of fact sheets, logos, key data and approved visuals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Media,
});

const KIT_EN = [
  { title: "Concept Note — 3rd ACTCD (abridged)", note: "Fact sheet · Word", url: concept.url },
  { title: "Branded materials — 2nd ACTCD", note: "Logos and approved visuals · PDF", url: brand.url },
  { title: "Report — 2nd ACTCD (2024, Accra)", note: "Key data and outcomes · PDF", url: rep24.url },
];

const KIT_FR = [
  { title: "Note conceptuelle — 3e ACTCD (abrégée)", note: "Fiche d'information · Word", url: concept.url },
  { title: "Supports de marque — 2e ACTCD", note: "Logos et visuels approuvés · PDF", url: brand.url },
  { title: "Rapport — 2e ACTCD (2024, Accra)", note: "Données clés et résultats · PDF", url: rep24.url },
];

function Media() {
  const { fr } = useLang();
  const kit = fr ? KIT_FR : KIT_EN;

  return (
    <>
      <PageHero image={heroImg} imgClassName="object-[center_20%]" title={fr ? "Médias" : "Media"} />

      <Section eyebrow={fr ? "Kit média" : "Media kit"} title={fr ? "Fiches, logos, données clés et visuels" : "Fact sheets, logos, key data and visuals"}>
        <div className="grid gap-4 md:grid-cols-3">
          {kit.map((d) => (
            <div key={d.title} className="group flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary"><FileText /></span>
              <div>
                <p className="font-semibold">{d.title}</p>
                <p className="text-sm text-muted-foreground">{d.note}</p>
                <a href={d.url} download className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90">
                  <Download className="size-3" />{fr ? "Télécharger" : "Download"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={fr ? "Accréditation" : "Accreditation"} title={fr ? "Accréditation des médias" : "Media accreditation"} className="border-t border-border/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-foreground/80">
              {fr
                ? "Les journalistes souhaitant couvrir la Conférence demandent leur accréditation auprès de l'Unité de communication de l'ACBF. Les demandes précisent le média, le nom du journaliste et le type de couverture prévue."
                : "Journalists who wish to cover the Conference request accreditation through the ACBF Communications Unit. Requests set out the media house, the journalist's name and the coverage planned."}
            </p>
            <a
              href="https://www.acbf-pact.org"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {fr ? "Contacter l'Unité de communication" : "Contact the Communications Unit"}
              <ArrowRight className="size-4" />
            </a>
          </div>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img
              src={kitImg}
              alt={fr ? "Un intervenant au micro pendant une séance de la Conférence" : "A speaker at the microphone during a Conference session"}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>

      <Section eyebrow={fr ? "Communiqués" : "Press releases"} title={fr ? "Communiqués de presse" : "Press releases"} className="border-t border-border/60">
        <p className="max-w-3xl text-foreground/80">
          {fr
            ? "Les communiqués de la Conférence sont publiés dans le Centre de connaissances, en anglais et en français."
            : "Conference press releases are published in the Knowledge Hub, in English and French."}
        </p>
        <div className="mt-8">
          <Link to="/knowledge-hub" className="inline-flex items-center gap-2 font-semibold text-primary">
            {fr ? "Ouvrir le Centre de connaissances" : "Open the Knowledge Hub"}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section className="border-t border-border/60">
        <p className="max-w-3xl text-sm text-muted-foreground">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
      </Section>
    </>
  );
}
