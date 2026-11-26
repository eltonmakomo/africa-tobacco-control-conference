import heroImg from "@/assets/speaker-mic.jpg";
import newsImg from "@/assets/media-news.jpg";
import news2Img from "@/assets/cocktail-night.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHero, Section } from "@/components/site/Bits";
import { FieldSelect } from "@/components/site/FieldSelect";
import { Button } from "@/components/ui/button";
import { getMediaDocumentsSchema } from "@/lib/media-documents";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media · News, Press and Accreditation · ACTCD 2027" },
      { name: "description", content: "News, press releases, media accreditation and the ACTCD 2027 media kit." },
      { property: "og:title", content: "ACTCD 2027 Media Centre" },
      { property: "og:description", content: "News, press releases, accreditation and media kit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Media,
});

const NEWS_EN = [
  { type: "Press release", date: "12 November 2026", title: "Nairobi to host the 3rd Africa Conference on Tobacco Control and Development", excerpt: "ACBF and Kenya's Ministry of Health announce the third edition, bringing policymakers, researchers and youth leaders together on 21–23 April 2027.", img: newsImg },
  { type: "News", date: "5 November 2026", title: "Call for abstracts opens across five conference tracks", excerpt: "Researchers and practitioners are invited to share African evidence on governance, emerging products, surveillance, health systems and taxation.", img: news2Img },
  { type: "Press release", date: "28 October 2026", title: "Conveners reaffirm commitment to WHO FCTC Article 5.3", excerpt: "The Conference will accept no support from the tobacco industry or those acting to further its interests." },
  { type: "News", date: "20 October 2026", title: "Youth voices to take centre stage in Nairobi", excerpt: "A dedicated youth engagement stream will spotlight young leaders protecting Africa's future from tobacco and nicotine." },
];

const NEWS_FR = [
  { type: "Communiqué de presse", date: "12 novembre 2026", title: "Nairobi accueillera la 3e Conférence africaine sur la lutte antitabac et le développement", excerpt: "L'ACBF et le ministère de la Santé du Kenya annoncent la troisième édition, qui réunira décideurs, chercheurs et jeunes leaders les 21–23 avril 2027.", img: newsImg },
  { type: "Actualité", date: "5 novembre 2026", title: "Ouverture de l'appel à résumés sur cinq pistes", excerpt: "Chercheurs et praticiens sont invités à partager les données africaines sur la gouvernance, les nouveaux produits, la surveillance, les systèmes de santé et la fiscalité.", img: news2Img },
  { type: "Communiqué de presse", date: "28 octobre 2026", title: "Les organisateurs réaffirment leur engagement envers l'article 5.3 de la CCLAT", excerpt: "La Conférence n'acceptera aucun soutien de l'industrie du tabac ni de ceux qui agissent dans son intérêt." },
  { type: "Actualité", date: "20 octobre 2026", title: "Les voix des jeunes à l'honneur à Nairobi", excerpt: "Un volet dédié à l'engagement des jeunes mettra en lumière les jeunes leaders qui protègent l'avenir de l'Afrique face au tabac et à la nicotine." },
];

function buildSchema(fr: boolean) {
  const m = (en: string, f: string) => (fr ? f : en);
  return z.object({
    fullName: z.string().trim().min(2, m("Enter your full name", "Saisissez votre nom complet")).max(100),
    email: z.string().trim().email(m("Enter a valid email", "Saisissez une adresse e-mail valide")).max(255),
    phone: z.string().trim().min(6, m("Enter a phone number", "Saisissez un numéro de téléphone")).max(30),
    nationality: z.string().trim().min(2, m("Enter your nationality", "Saisissez votre nationalité")).max(60),
    outlet: z.string().trim().min(2, m("Enter your media outlet", "Saisissez votre organe de presse")).max(120),
    outletType: z.string().min(1, m("Choose a media type", "Choisissez un type de média")),
    role: z.string().min(1, m("Choose your role", "Choisissez votre fonction")),
    country: z.string().trim().min(2, m("Enter the outlet's country", "Saisissez le pays de l'organe de presse")).max(60),
    website: z.string().trim().max(255).optional(),
    pressCard: z.string().trim().min(2, m("Enter your press card or ID number", "Saisissez votre numéro de carte de presse ou d'identité")).max(60),
    editorName: z.string().trim().min(2, m("Enter your editor's name", "Saisissez le nom de votre rédacteur")).max(100),
    editorEmail: z.string().trim().email(m("Enter a valid email", "Saisissez une adresse e-mail valide")).max(255),
    attendance: z.string().min(1, m("Choose how you'll attend", "Choisissez votre mode de participation")),
    coverage: z.string().trim().max(1000).optional(),
    declaration: z.literal("on", { errorMap: () => ({ message: m("Please confirm the declaration", "Veuillez confirmer la déclaration") }) }),
  }).merge(getMediaDocumentsSchema(fr ? "fr" : "en"));
}

const field = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function F({ label, name, errors, children }: { label: string; name: string; errors: Record<string, string>; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      {children}
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </label>
  );
}

/** Same look as F, but the label sits outside the control so the custom dropdown stays clickable. */
function FS({ label, name, errors, children }: { label: string; name: string; errors: Record<string, string>; children: React.ReactNode }) {
  return (
    <div className="block text-sm font-medium">
      <label htmlFor={`${name}-select`}>{label}</label>
      {children}
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </div>
  );
}

const STEPS_EN = [
  { title: "Personal details", fields: ["fullName", "email", "phone", "nationality"] },
  { title: "Media organisation", fields: ["outlet", "outletType", "role", "country", "website", "pressCard"] },
  { title: "Editor or assignment reference", fields: ["editorName", "editorEmail"] },
  { title: "Coverage", fields: ["attendance", "coverage"] },
  { title: "Supporting documents", fields: ["photoId", "pressBadge", "assignmentLetter", "portrait", "workSamples", "portfolio", "declaration"] },
] as const;

const STEPS_FR = [
  { title: "Informations personnelles", fields: ["fullName", "email", "phone", "nationality"] },
  { title: "Organe de presse", fields: ["outlet", "outletType", "role", "country", "website", "pressCard"] },
  { title: "Référence du rédacteur ou de la mission", fields: ["editorName", "editorEmail"] },
  { title: "Couverture", fields: ["attendance", "coverage"] },
  { title: "Pièces justificatives", fields: ["photoId", "pressBadge", "assignmentLetter", "portrait", "workSamples", "portfolio", "declaration"] },
] as const;

function AccreditationForm() {
  const { fr } = useLang();
  const STEPS = fr ? STEPS_FR : STEPS_EN;
  const schema = buildSchema(fr);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deliveryNotice, setDeliveryNotice] = useState(false);

  /** Validate the whole form, then keep only the errors for the given step. */
  function validateStep(form: HTMLFormElement, stepIndex: number): Record<string, string> {
    const data = Object.fromEntries(new FormData(form));
    const r = schema.safeParse(data);
    if (r.success) return {};
    const stepFields = new Set<string>(STEPS[stepIndex]?.fields ?? []);
    const errs: Record<string, string> = {};
    r.error.issues.forEach((i) => {
      const key = String(i.path[0]);
      if (stepFields.has(key)) errs[key] ??= i.message;
    });
    return errs;
  }

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const errs = validateStep(form, step);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDeliveryNotice(false);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] ??= i.message; });
      setErrors(errs);
      // Jump back to the first step that has a problem so the user sees it.
      const firstBad = STEPS.findIndex((s) => s.fields.some((f) => errs[f]));
      if (firstBad >= 0) setStep(firstBad);
      return;
    }
    setErrors({});
    setDeliveryNotice(true);
  }

  const h = "border-b border-border pb-2 text-lg font-semibold text-primary";
  const stepCls = (i: number) => (i === step ? "grid gap-5 md:grid-cols-2" : "hidden");
  const fileCls = `${field} file:mr-3 file:rounded-lg file:border-0 file:bg-secondary file:px-3 file:py-2 file:font-medium file:text-primary`;

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
      {/* Progress */}
      <ol className="mb-8 flex flex-wrap items-center gap-2" aria-label={fr ? "Progression du formulaire" : "Form progress"}>
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => i < step && setStep(i)}
              aria-current={i === step ? "step" : undefined}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                i === step
                  ? "bg-primary text-primary-foreground shadow-card"
                  : i < step
                    ? "bg-secondary text-primary hover:bg-secondary/70"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              <span className={`flex size-5 items-center justify-center rounded-full text-[10px] ${i === step ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"}`}>{i + 1}</span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
            {i < STEPS.length - 1 && <span className="h-px w-3 bg-border" aria-hidden />}
          </li>
        ))}
      </ol>

      {/* Step 1 — Personal details */}
      <fieldset className={stepCls(0)}>
        <legend className={`${h} mb-1 w-full md:col-span-2`}>1. {fr ? "Informations personnelles" : "Personal details"}</legend>
        <F label={fr ? "Nom complet *" : "Full name *"} name="fullName" errors={errors}><input name="fullName" className={field} /></F>
        <F label={fr ? "Adresse e-mail *" : "Email address *"} name="email" errors={errors}><input name="email" type="email" className={field} /></F>
        <F label={fr ? "Téléphone (avec indicatif pays) *" : "Phone (with country code) *"} name="phone" errors={errors}><input name="phone" type="tel" className={field} /></F>
        <F label={fr ? "Nationalité *" : "Nationality *"} name="nationality" errors={errors}><input name="nationality" className={field} /></F>
      </fieldset>

      {/* Step 2 — Media organisation */}
      <fieldset className={stepCls(1)}>
        <legend className={`${h} mb-1 w-full md:col-span-2`}>2. {fr ? "Organe de presse" : "Media organisation"}</legend>
        <F label={fr ? "Organe de presse *" : "Media outlet *"} name="outlet" errors={errors}><input name="outlet" className={field} /></F>
        <FS label={fr ? "Type de média *" : "Type of media *"} name="outletType" errors={errors}>
          <FieldSelect name="outletType" options={fr ? ["Presse écrite", "En ligne", "Télévision", "Radio", "Agence de presse", "Indépendant"] : ["Print", "Online", "Television", "Radio", "News agency", "Freelance"]} placeholder={fr ? "Sélectionner…" : "Select…"} />
        </FS>
        <FS label={fr ? "Votre fonction *" : "Your role *"} name="role" errors={errors}>
          <FieldSelect
            name="role"
            options={fr ? ["Reporter / Journaliste", "Rédacteur", "Photographe", "Cadreur", "Producteur", "Blogueur / Créateur de contenu"] : ["Reporter / Journalist", "Editor", "Photographer", "Camera operator", "Producer", "Blogger / Content creator"]}
            placeholder={fr ? "Sélectionner…" : "Select…"}
          />
        </FS>
        <F label={fr ? "Pays de l'organe de presse *" : "Country of the outlet *"} name="country" errors={errors}><input name="country" className={field} /></F>
        <F label={fr ? "Site web de l'organe" : "Outlet website"} name="website" errors={errors}><input name="website" type="url" placeholder="https://" className={field} /></F>
        <F label={fr ? "Numéro de carte de presse / d'identité *" : "Press card / ID number *"} name="pressCard" errors={errors}><input name="pressCard" className={field} /></F>
      </fieldset>

      {/* Step 3 — Editor or assignment reference */}
      <fieldset className={stepCls(2)}>
        <legend className={`${h} mb-1 w-full md:col-span-2`}>3. {fr ? "Référence du rédacteur ou de la mission" : "Editor or assignment reference"}</legend>
        <F label={fr ? "Nom du rédacteur *" : "Editor's name *"} name="editorName" errors={errors}><input name="editorName" className={field} /></F>
        <F label={fr ? "E-mail du rédacteur *" : "Editor's email *"} name="editorEmail" errors={errors}><input name="editorEmail" type="email" className={field} /></F>
      </fieldset>

      {/* Step 4 — Coverage */}
      <fieldset className={stepCls(3)}>
        <legend className={`${h} mb-1 w-full md:col-span-2`}>4. {fr ? "Couverture" : "Coverage"}</legend>
        <FS label={fr ? "Comment participerez-vous ? *" : "How will you attend? *"} name="attendance" errors={errors}>
          <FieldSelect name="attendance" options={fr ? ["En personne, Nairobi", "En ligne"] : ["In person, Nairobi", "Virtually"]} placeholder={fr ? "Sélectionner…" : "Select…"} />
        </FS>
        <div className="md:col-span-2">
          <F label={fr ? "Couverture prévue (facultatif)" : "Planned coverage (optional)"} name="coverage" errors={errors}><textarea name="coverage" rows={4} maxLength={1000} className={field} placeholder={fr ? "Sessions, interviews ou sujets que vous prévoyez de couvrir" : "Sessions, interviews or stories you plan to cover"} /></F>
        </div>
      </fieldset>

      {/* Step 5 — Supporting documents */}
      <fieldset className={stepCls(4)}>
        <legend className={`${h} mb-1 w-full md:col-span-2`}>5. {fr ? "Pièces justificatives" : "Supporting documents"}</legend>
        <F label={fr ? "Pièce d'identité avec photo ou copie du passeport *" : "Valid photo ID or passport copy *"} name="photoId" errors={errors}>
          <input name="photoId" type="file" accept=".pdf,.jpg,.jpeg,.png" className={fileCls} />
        </F>
        <F label={fr ? "Carte de presse ou badge d'organe de presse valide *" : "Valid press card or media organisation badge *"} name="pressBadge" errors={errors}>
          <input name="pressBadge" type="file" accept=".pdf,.jpg,.jpeg,.png" className={fileCls} />
        </F>
        <div className="md:col-span-2">
          <F label={fr ? "Lettre du rédacteur ou de mission sur papier à en-tête *" : "Editor’s or assignment letter on official letterhead *"} name="assignmentLetter" errors={errors}>
            <input name="assignmentLetter" type="file" accept=".pdf,.jpg,.jpeg,.png" className={fileCls} />
          </F>
          <p className="mt-2 text-xs text-muted-foreground">{fr ? "Délivrée par votre maison de presse, confirmant votre emploi ou vous mandatant pour couvrir l'événement." : "From your media house, confirming your employment or commissioning you to cover the event."}</p>
        </div>
        <F label={fr ? "Photo d'identité *" : "Passport-sized photograph *"} name="portrait" errors={errors}>
          <input name="portrait" type="file" accept=".jpg,.jpeg,.png" className={fileCls} />
        </F>
        <F label={fr ? "Exemples de travaux passés (facultatif)" : "Past work samples (optional)"} name="workSamples" errors={errors}>
          <input name="workSamples" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className={fileCls} />
        </F>
        <div className="md:col-span-2">
          <F label={fr ? "Portfolio ou liens vers des publications (facultatif)" : "Portfolio or published work links (optional)"} name="portfolio" errors={errors}>
            <textarea name="portfolio" rows={3} className={field} placeholder="https://" />
          </F>
        </div>
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm text-foreground/80">
            <input type="checkbox" name="declaration" className="mt-1 size-4 accent-primary" />
            {fr
              ? "Je confirme que les informations sont exactes, que je suis un membre actif des médias et que je n'ai aucune affiliation avec l'industrie du tabac, conformément à l'article 5.3 de la CCLAT de l'OMS."
              : "I confirm the information is accurate, that I am a working member of the media, and that I have no affiliation with the tobacco industry, in line with WHO FCTC Article 5.3."}
          </label>
          {errors["declaration"] && <span className="mt-1 block text-xs text-destructive">{errors["declaration"]}</span>}
        </div>
      </fieldset>

      {/* Navigation */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() => { setErrors({}); setStep((s) => Math.max(s - 1, 0)); }}
          disabled={step === 0}
          className="h-auto rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          ← {fr ? "Retour" : "Back"}
        </Button>
        <p className="text-xs text-muted-foreground">{fr ? `Étape ${step + 1} sur ${STEPS.length}` : `Step ${step + 1} of ${STEPS.length}`}</p>
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next} className="h-auto rounded-full px-8 py-3 text-sm font-semibold shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">
            {fr ? "Continuer →" : "Continue →"}
          </Button>
        ) : (
          <Button type="submit" className="h-auto whitespace-normal rounded-full px-8 py-3 text-sm font-semibold shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">
            {fr ? "Soumettre la demande d'accréditation" : "Submit accreditation request"}
          </Button>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{fr ? "Les demandes d'accréditation ne sont pas encore ouvertes. Les documents sélectionnés ne sont ni enregistrés ni envoyés." : "Accreditation submissions are not open yet. Selected documents are not saved or sent."}</p>
        {deliveryNotice && <p role="status" className="mt-3 text-sm text-foreground">{fr ? "Vos informations ont passé les vérifications, mais votre demande n'a pas été soumise. Les demandes d'accréditation ne sont pas encore ouvertes." : "Your details passed the checks, but your request has not been submitted. Accreditation submissions are not open yet."}</p>}
      </div>
    </form>
  );
}

function Media() {
  const { fr } = useLang();
  const news = fr ? NEWS_FR : NEWS_EN;
  const kitCards = fr ? ["Fiches d'information", "Logos et charte graphique", "Données clés", "Visuels approuvés"] : ["Fact sheets", "Logos & brand guidelines", "Key data", "Approved visuals"];

  return (
    <>
      <PageHero
        image={heroImg}
        imgClassName="object-[center_15%]"
        eyebrow={fr ? "Médias" : "Media"}
        title={fr ? "Espace médias" : "Media centre"}
      />
      <Section id="news" eyebrow={fr ? "Actualités et communiqués de presse" : "News & press releases"} title={fr ? "À la une" : "Latest"}>
        <div className="grid gap-6 md:grid-cols-2">
          {news.slice(0, 2).map((n) => (
            <article key={n.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className="relative overflow-hidden">
                <img src={n.img} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover object-[center_25%] transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
              </div>
              <div className="p-6">
                <p className="eyebrow text-primary">{n.type} · <span className="text-muted-foreground">{n.date}</span></p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{n.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">{fr ? "Lire la suite →" : "Read more →"}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {news.slice(2).map((n) => (
            <article key={n.title} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <p className="eyebrow text-primary">{n.type} · <span className="text-muted-foreground">{n.date}</span></p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{n.title}</h3>
              <p className="mt-3 text-sm text-foreground/75">{n.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">{fr ? "Lire la suite →" : "Read more →"}</span>
            </article>
          ))}
        </div>
      </Section>
      <Section id="accreditation" eyebrow={fr ? "Accréditation des médias" : "Media accreditation"} title={fr ? "Vous couvrez l'ACTCD 2027 ?" : "Covering ACTCD 2027?"} className="border-t border-border/60">
        <p className="mb-8 max-w-3xl text-foreground/80">{fr ? "Journalistes, photographes et créateurs de contenu peuvent demander une accréditation ci-dessous. Les champs marqués d'un * sont obligatoires." : "Journalists, photographers and content creators can apply for accreditation below. Fields marked * are required."}</p>
        <AccreditationForm />
      </Section>
      <Section id="media-kit" eyebrow={fr ? "Kit média" : "Media kit"} title={fr ? "Fiches d'information, logos et visuels approuvés" : "Fact sheets, logos and approved visuals"}>
        <div className="grid gap-4 md:grid-cols-4">
          {kitCards.map((x) => <div key={x} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold">{x}</p></div>)}
        </div>
      </Section>
    </>
  );
}
