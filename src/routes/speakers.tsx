import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { SpeakerGrid } from "@/components/site/SpeakerGrid";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers · ACTCD 2027" },
      { name: "description", content: "Speakers at the 3rd Africa Conference on Tobacco Control and Development, 21–23 April 2027, Nairobi." },
      { property: "og:title", content: "Speakers · ACTCD 2027" },
      { property: "og:description", content: "Meet the speakers of ACTCD 2027 in Nairobi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Speakers,
});

function Speakers() {
  const { fr } = useLang();
  return (
    <>
      <PageHero title={fr ? "Intervenants" : "Speakers"} minH="min-h-[320px]" />
      <Section>
        <SpeakerGrid />
      </Section>
    </>
  );
}
