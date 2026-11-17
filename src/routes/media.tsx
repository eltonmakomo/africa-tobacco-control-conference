import heroImg from "@/assets/speaker-mic.jpg";
import newsImg from "@/assets/media-news.jpg";
import news2Img from "@/assets/cocktail-night.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHero, Section } from "@/components/site/Bits";

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

const NEWS = [
  { type: "Press release", date: "12 November 2026", title: "Nairobi to host the 3rd Africa Conference on Tobacco Control and Development", excerpt: "ACBF and Kenya's Ministry of Health announce the third edition, bringing policymakers, researchers and youth leaders together on 22–23 April 2027.", img: newsImg },
  { type: "News", date: "5 November 2026", title: "Call for abstracts opens across five conference tracks", excerpt: "Researchers and practitioners are invited to share African evidence on governance, emerging products, surveillance, health systems and taxation.", img: news2Img },
  { type: "Press release", date: "28 October 2026", title: "Conveners reaffirm commitment to WHO FCTC Article 5.3", excerpt: "The Conference will accept no support from the tobacco industry or those acting to further its interests." },
  { type: "News", date: "20 October 2026", title: "Youth voices to take centre stage in Nairobi", excerpt: "A dedicated youth engagement stream will spotlight young leaders protecting Africa's future from tobacco and nicotine." },
];

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a phone number").max(30),
  nationality: z.string().trim().min(2, "Enter your nationality").max(60),
  outlet: z.string().trim().min(2, "Enter your media outlet").max(120),
  outletType: z.string().min(1, "Choose a media type"),
  role: z.string().min(1, "Choose your role"),
  country: z.string().trim().min(2, "Enter the outlet's country").max(60),
  website: z.string().trim().max(255).optional(),
  pressCard: z.string().trim().min(2, "Enter your press card or ID number").max(60),
  editorName: z.string().trim().min(2, "Enter your editor's name").max(100),
  editorEmail: z.string().trim().email("Enter a valid email").max(255),
  attendance: z.string().min(1, "Choose how you'll attend"),
  coverage: z.string().trim().max(1000).optional(),
  declaration: z.literal("on", { errorMap: () => ({ message: "Please confirm the declaration" }) }),
});

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

function AccreditationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] ??= i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-card">
        <p className="text-2xl font-bold text-primary">Thank you</p>
        <p className="mt-3 text-foreground/80">Your accreditation request has been received. The media team will review it and contact you by email.</p>
        <button onClick={() => setDone(false)} className="mt-6 rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Submit another request</button>
      </div>
    );
  }

  const h = "md:col-span-2 mt-4 border-b border-border pb-2 text-lg font-semibold text-primary";
  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-card md:grid-cols-2 md:p-10">
      <h3 className={`${h} mt-0`}>1. Personal details</h3>
      <F label="Full name *" name="fullName" errors={errors}><input name="fullName" className={field} /></F>
      <F label="Email address *" name="email" errors={errors}><input name="email" type="email" className={field} /></F>
      <F label="Phone (with country code) *" name="phone" errors={errors}><input name="phone" type="tel" className={field} /></F>
      <F label="Nationality *" name="nationality" errors={errors}><input name="nationality" className={field} /></F>

      <h3 className={h}>2. Media organisation</h3>
      <F label="Media outlet *" name="outlet" errors={errors}><input name="outlet" className={field} /></F>
      <F label="Type of media *" name="outletType" errors={errors}>
        <select name="outletType" defaultValue="" className={field}>
          <option value="" disabled>Select…</option>
          {["Print", "Online", "Television", "Radio", "News agency", "Freelance"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </F>
      <F label="Your role *" name="role" errors={errors}>
        <select name="role" defaultValue="" className={field}>
          <option value="" disabled>Select…</option>
          {["Reporter / Journalist", "Editor", "Photographer", "Camera operator", "Producer", "Blogger / Content creator"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </F>
      <F label="Country of the outlet *" name="country" errors={errors}><input name="country" className={field} /></F>
      <F label="Outlet website" name="website" errors={errors}><input name="website" type="url" placeholder="https://" className={field} /></F>
      <F label="Press card / ID number *" name="pressCard" errors={errors}><input name="pressCard" className={field} /></F>

      <h3 className={h}>3. Editor or assignment reference</h3>
      <F label="Editor's name *" name="editorName" errors={errors}><input name="editorName" className={field} /></F>
      <F label="Editor's email *" name="editorEmail" errors={errors}><input name="editorEmail" type="email" className={field} /></F>

      <h3 className={h}>4. Coverage</h3>
      <F label="How will you attend? *" name="attendance" errors={errors}>
        <select name="attendance" defaultValue="" className={field}>
          <option value="" disabled>Select…</option>
          <option>In person, Nairobi</option>
          <option>Virtually</option>
        </select>
      </F>
      <div className="md:col-span-2">
        <F label="Planned coverage (optional)" name="coverage" errors={errors}><textarea name="coverage" rows={4} maxLength={1000} className={field} placeholder="Sessions, interviews or stories you plan to cover" /></F>
      </div>

      <div className="md:col-span-2">
        <label className="flex items-start gap-3 text-sm text-foreground/80">
          <input type="checkbox" name="declaration" className="mt-1 size-4 accent-primary" />
          I confirm the information is accurate, that I am a working member of the media, and that I have no affiliation with the tobacco industry, in line with WHO FCTC Article 5.3.
        </label>
        {errors["declaration"] && <span className="mt-1 block text-xs text-destructive">{errors["declaration"]}</span>}
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">Submit accreditation request</button>
      </div>
    </form>
  );
}

function Media() {
  return (
    <>
      <PageHero image={heroImg} imgClassName="object-[center_15%]" eyebrow="Media" title="Media centre" intro="All media materials observe WHO FCTC Article 5.3 and give no platform to tobacco industry narratives." />
      <Section id="news" eyebrow="News & press releases" title="Latest">
        <p className="-mt-4 mb-8 text-xs text-muted-foreground">Sample stories shown for layout purposes.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {NEWS.slice(0, 2).map((n) => (
            <article key={n.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className="relative overflow-hidden">
                <img src={n.img} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover object-[center_25%] transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
              </div>
              <div className="p-6">
                <p className="eyebrow text-primary">{n.type} · <span className="text-muted-foreground">{n.date}</span></p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{n.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Read more →</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {NEWS.slice(2).map((n) => (
            <article key={n.title} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <p className="eyebrow text-primary">{n.type} · <span className="text-muted-foreground">{n.date}</span></p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{n.title}</h3>
              <p className="mt-3 text-sm text-foreground/75">{n.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">Read more →</span>
            </article>
          ))}
        </div>
      </Section>
      <Section id="accreditation" eyebrow="Media accreditation" title="Covering ACTCD 2027?" className="bg-secondary/60">
        <p className="mb-8 max-w-3xl text-foreground/80">Journalists, photographers and content creators can apply for accreditation below. Fields marked * are required.</p>
        <AccreditationForm />
      </Section>
      <Section id="media-kit" eyebrow="Media kit" title="Fact sheets, logos and approved visuals">
        <div className="grid gap-4 md:grid-cols-4">
          {["Fact sheets", "Logos & brand guidelines", "Key data", "Approved visuals"].map((x) => <div key={x} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold">{x}</p><p className="mt-2 text-xs text-muted-foreground">Download coming soon</p></div>)}
        </div>
      </Section>
    </>
  );
}
