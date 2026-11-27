import heroImg from "@/assets/media-banner.jpg";
import featureImg from "@/assets/reception-duo.jpg";
import brand from "@/assets/docs/ACTD_Branded_Materials_v19_2nd_ACTD.pdf.asset.json";
import concept from "@/assets/docs/3rd_ACTD_Concept_Note_-_Abridged.docx.asset.json";
import rep24 from "@/assets/docs/ACTDC_Report_2024.pdf.asset.json";
import com24 from "@/assets/docs/Communique_Final_1330hrs_ACTD.docx.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Globe } from "lucide-react";
import { useState, type FormEvent, type InputHTMLAttributes, type SelectHTMLAttributes } from "react";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53, ARTICLE_53_FR, HOME_IMPACT, HOME_IMPACT_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media · ACTCD 2027" },
      { name: "description", content: "A press center for journalists and media partners covering ACTCD 2027: accreditation, feature requests, coverage submissions and a downloadable media kit." },
      { property: "og:title", content: "ACTCD 2027 — Media" },
      { property: "og:description", content: "Accreditation, feature requests, coverage submissions and press resources." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Media,
});

const COMMS = "comms@theacbf.org";
const SITE = "https://theacbf.org";

const ACC_TYPES = ["Print", "Online", "Broadcast TV", "Multiformat"];
const ACC_TYPES_FR = ["Presse écrite", "En ligne", "Télévision", "Multiformat"];

const KIT_EN = [
  { title: "Concept Note — 3rd ACTCD (abridged)", note: "Fact sheet · Word", url: concept.url },
  { title: "Branded materials — 2nd ACTCD", note: "Logos and approved visuals · PDF", url: brand.url },
  { title: "Report — 2nd ACTCD (2024, Accra)", note: "Key data and outcomes · PDF", url: rep24.url },
  { title: "Communiqué — 2nd ACTCD", note: "Press statement · Word", url: com24.url },
];

const KIT_FR = [
  { title: "Note conceptuelle — 3e ACTCD (abrégée)", note: "Fiche d'information · Word", url: concept.url },
  { title: "Supports de marque — 2e ACTCD", note: "Logos et visuels approuvés · PDF", url: brand.url },
  { title: "Rapport — 2e ACTCD (2024, Accra)", note: "Données clés et résultats · PDF", url: rep24.url },
  { title: "Communiqué — 2e ACTCD", note: "Communiqué de presse · Word", url: com24.url },
];

function Field({ label, ...rest }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
    </label>
  );
}

function Choice({ label, ...rest }: { label: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <select
        {...rest}
        className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
    </label>
  );
}

function mailto(subject: string, lines: [string, string][]) {
  const body = lines.filter(([, v]) => v.trim()).map(([k, v]) => `${k}: ${v}`).join("\n");
  window.location.href = `mailto:${COMMS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const EMPTY_ACC = { name: "", outlet: "", country: "", beat: "", type: "", email: "", phone: "", link: "" };
const EMPTY_COV = { name: "", pub: "", url: "", note: "" };

function Media() {
  const { fr } = useLang();
  const impact = (fr ? HOME_IMPACT_FR : HOME_IMPACT).filter((i) => i.figure !== "3rd" && i.figure !== "3e");
  const kit = fr ? KIT_FR : KIT_EN;
  const types = fr ? ACC_TYPES_FR : ACC_TYPES;

  const [acc, setAcc] = useState(EMPTY_ACC);
  const [cov, setCov] = useState(EMPTY_COV);

  const set = (k: string) => (e: { target: { value: string } }) => setAcc((a) => ({ ...a, [k]: e.target.value }));
  const setC = (k: string) => (e: { target: { value: string } }) => setCov((c) => ({ ...c, [k]: e.target.value }));

  const sendAcc = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mailto(fr ? "Demande d'accréditation — ACTCD 2027" : "Accreditation request — ACTCD 2027", [
      ["Name", acc.name], ["Media outlet", acc.outlet], ["Country", acc.country],
      ["Coverage area", acc.beat], ["Accreditation type", acc.type], ["Email", acc.email],
      ["Phone", acc.phone], ["Website or social link", acc.link],
    ]);
  };

  const sendCov = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mailto(fr ? "Soumission de couverture — ACTCD 2027" : "Coverage submission — ACTCD 2027", [
      ["Name", cov.name], ["Publication or platform", cov.pub], ["Link", cov.url], ["Description", cov.note],
    ]);
  };

  return (
    <>
      <PageHero
        image={heroImg}
        imgClassName="object-center"
        minH="min-h-[780px]"
        title={fr ? "Médias" : "Media"}
      >
        <div className="mt-8 w-full sm:max-w-[40%] lg:max-w-[600px]">
          <dl className="grid gap-3 lg:grid-cols-3">
            {impact.map((i) => (
              <div key={i.label} className="glass-forest rounded-2xl p-4">
                <dd className="text-2xl font-bold text-accent">{i.figure}</dd>
                <dt className="mt-1 text-xs text-forest-foreground/85">{i.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:justify-start">
            <a href="#accreditation" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
              {fr ? "Demander une accréditation" : "Apply for accreditation"}
            </a>
            <a href="#feature" className="rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold text-forest-foreground transition hover:bg-accent/10">
              {fr ? "Demander un reportage" : "Request a feature"}
            </a>
            <a href="#submit-coverage" className="rounded-full border border-forest-foreground/25 px-6 py-3 text-sm font-semibold text-forest-foreground transition hover:bg-forest-foreground/10">
              {fr ? "Soumettre votre couverture" : "Submit your coverage"}
            </a>
          </div>
        </div>
      </PageHero>

      <Section id="accreditation" eyebrow={fr ? "Accréditation" : "Accreditation"} title={fr ? "Accréditation des médias" : "Media accreditation"}>
        <p className="max-w-3xl text-foreground/80">
          {fr
            ? "Demandez un accès officiel à la 3e ACTCD. Remplissez le formulaire ci-dessous pour demander une accréditation."
            : "Apply for official press access to the 3rd ACTCD. Complete the form below to request media accreditation."}
        </p>

        <form onSubmit={sendAcc} className="mt-10 rounded-3xl bg-primary/15 p-6 shadow-card md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label={fr ? "Nom complet *" : "Full name *"} required value={acc.name} onChange={set("name")} placeholder={fr ? "Votre nom complet" : "Enter your full name"} />
            <Field label={fr ? "Média *" : "Media outlet *"} required value={acc.outlet} onChange={set("outlet")} placeholder={fr ? "Votre média" : "Your media organization"} />
            <Field label={fr ? "Pays *" : "Country *"} required value={acc.country} onChange={set("country")} placeholder={fr ? "Votre pays" : "Your country"} />
            <Field label={fr ? "Domaine de couverture *" : "Coverage area / beat *"} required value={acc.beat} onChange={set("beat")} placeholder={fr ? "Ex. politique, santé, développement" : "e.g. policy, health, development"} />
            <Choice label={fr ? "Type d'accréditation *" : "Accreditation type *"} required value={acc.type} onChange={set("type")}>
              <option value="">{fr ? "Choisir un type d'accréditation" : "Select accreditation type"}</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </Choice>
            <Field label="Email *" type="email" required value={acc.email} onChange={set("email")} placeholder="your.email@outlet.com" />
            <Field label={fr ? "Téléphone *" : "Phone number *"} required value={acc.phone} onChange={set("phone")} placeholder="+254 ..." />
            <Field label={fr ? "Site web ou lien social" : "Website or social link"} value={acc.link} onChange={set("link")} placeholder="https://" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {fr
              ? "Toutes les demandes d'accréditation sont examinées par l'Unité de communication de l'ACBF avant approbation."
              : "All accreditation requests are reviewed by the ACBF Communications Unit before approval."}
          </p>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
            {fr ? "Demander l'accréditation" : "Apply for accreditation"}
            <ArrowRight className="size-4" />
          </button>
        </form>
      </Section>

      <Section id="feature" eyebrow={fr ? "Reportage" : "Features"} title={fr ? "Demander un reportage" : "Request a feature"} className="border-t border-border/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-foreground/80">
              {fr
                ? "Les journalistes peuvent demander des reportages exclusifs, des interviews, une participation aux panels et des commentaires d'experts auprès des intervenants de la Conférence."
                : "Journalists can request exclusive features, interviews, panel participation and expert commentary from Conference speakers and thought leaders."}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {(fr
                ? ["Entretiens individuels avec les intervenants", "Participation aux panels", "Commentaires d'experts et tribunes", "Accès aux séances et keynotes"]
                : ["One-on-one interviews with speakers", "Panel participation opportunities", "Expert commentary and op-ed features", "Access to sessions and keynotes"]
              ).map((b) => (
                <li key={b} className="rounded-2xl border border-border bg-card p-4 text-sm font-medium shadow-card">{b}</li>
              ))}
            </ul>
            <a
              href={`mailto:${COMMS}?subject=${encodeURIComponent(fr ? "Demande de reportage — ACTCD 2027" : "Feature request — ACTCD 2027")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {fr ? "Demander un reportage" : "Request a feature"}
              <ArrowRight className="size-4" />
            </a>
          </div>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <img
              src={featureImg}
              alt={fr ? "Deux invités à la réception de clôture de la 2e ACTCD" : "Two guests at the closing reception of the 2nd ACTCD"}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>

      <Section id="submit-coverage" eyebrow={fr ? "Vos contenus" : "Your coverage"} title={fr ? "Soumettre votre couverture" : "Submit your coverage"} className="border-t border-border/60">
        <form onSubmit={sendCov} className="rounded-3xl bg-primary/15 p-6 shadow-card md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label={fr ? "Nom complet *" : "Full name *"} required value={cov.name} onChange={setC("name")} placeholder={fr ? "Votre nom complet" : "Enter your full name"} />
            <Field label={fr ? "Publication / plateforme *" : "Publication / platform *"} required value={cov.pub} onChange={setC("pub")} placeholder={fr ? "Votre média" : "Your publication or platform"} />
            <Field label={fr ? "Lien de la publication *" : "URL link *"} required type="url" value={cov.url} onChange={setC("url")} placeholder="https://" />
            <Field label={fr ? "Description *" : "Description *"} required value={cov.note} onChange={setC("note")} placeholder={fr ? "Résumez votre contenu" : "Summarise your coverage"} />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
            {fr ? "Soumettre la couverture" : "Submit coverage"}
            <ArrowRight className="size-4" />
          </button>
        </form>
      </Section>

      <Section id="press-kit" eyebrow={fr ? "Kit média" : "Media kit"} title={fr ? "Ressources presse" : "Press resources"} className="border-t border-border/60">
        <ul className="grid gap-4 md:grid-cols-2">
          {kit.map((d) => (
            <li key={d.title} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary"><Download /></span>
              <div className="min-w-0">
                <p className="font-semibold">{d.title}</p>
                <p className="text-sm text-muted-foreground">{d.note}</p>
                <a href={d.url} download className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90">
                  <Download className="size-3" />{fr ? "Télécharger" : "Download"}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="comms" eyebrow={fr ? "Contact" : "Contact"} title={fr ? "Équipe de communication" : "Communications team"} className="border-t border-border/60">
        <p className="max-w-3xl text-foreground/80">
          {fr
            ? "Pour les demandes presse, les demandes d'interview, les questions d'accréditation et les partenariats médiatiques."
            : "For press inquiries, interview requests, accreditation questions and media partnerships."}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:max-w-3xl">
          <a href={`mailto:${COMMS}`} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Mail className="size-4" /></span>
            <span className="min-w-0">
              <span className="eyebrow block text-primary">{fr ? "E-mail" : "Email"}</span>
              <span className="block truncate font-semibold">{COMMS}</span>
            </span>
          </a>
          <a href={SITE} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Globe className="size-4" /></span>
            <span className="min-w-0">
              <span className="eyebrow block text-primary">{fr ? "Site web" : "Website"}</span>
              <span className="block truncate font-semibold">theacbf.org</span>
            </span>
          </a>
        </div>
      </Section>

      <Section className="border-t border-border/60">
        <p className="max-w-3xl text-sm text-muted-foreground">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
      </Section>
    </>
  );
}
