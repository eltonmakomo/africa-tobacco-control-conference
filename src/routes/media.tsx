import heroImg from "@/assets/speaker-mic.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Pending, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media · News, Press and Accreditation · ACTCD 2027" },
      { name: "description", content: "News, press releases, media accreditation and the ACTCD 2027 media kit." },
      { property: "og:title", content: "ACTCD 2027 Media Centre" },
      { property: "og:description", content: "News, press releases, accreditation and media kit." },
    ],
  }),
  component: Media,
});

function Media() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Media" title="Media centre" intro="All media materials observe WHO FCTC Article 5.3 and give no platform to tobacco industry narratives." />
      <Section id="news" eyebrow="News & press releases" title="Latest">
        <Pending>News, press releases and events will be published here.</Pending>
      </Section>
      <Section id="accreditation" eyebrow="Media accreditation" title="Covering ACTCD 2027?" className="bg-secondary/60">
        <p className="max-w-3xl text-foreground/80">Journalists can apply for accreditation through the media accreditation form.</p>
        <div className="mt-6"><Pending>The accreditation form will open closer to the Conference.</Pending></div>
      </Section>
      <Section id="media-kit" eyebrow="Media kit" title="Fact sheets, logos and approved visuals">
        <div className="grid gap-4 md:grid-cols-4">
          {["Fact sheets", "Logos & brand guidelines", "Key data", "Approved visuals"].map((x) => <div key={x} className="rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"><p className="font-semibold">{x}</p><p className="mt-2 text-xs text-muted-foreground">Download coming soon</p></div>)}
        </div>
      </Section>
    </>
  );
}
