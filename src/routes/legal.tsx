import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Pending, Section } from "@/components/site/Bits";
import { ARTICLE_53 } from "@/lib/conference";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Privacy, Legal Notice and Article 5.3 · ACTCD 2027" },
      { name: "description", content: "Privacy policy, legal notice and WHO FCTC Article 5.3 statement for the ACTCD 2027 microsite." },
      { property: "og:title", content: "ACTCD 2027 Legal" },
      { property: "og:description", content: "Privacy policy, legal notice and Article 5.3 statement." },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Policies and statements" />
      <Section id="article-5-3" eyebrow="WHO FCTC Article 5.3 statement" title="Protected from industry interference">
        <p className="max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 text-lg font-medium">{ARTICLE_53}</p>
      </Section>
      <Section id="privacy" eyebrow="Privacy policy" title="Privacy" className="bg-secondary/60"><Pending>Privacy policy text to be supplied by ACBF.</Pending></Section>
      <Section id="legal-notice" eyebrow="Legal notice" title="Legal notice"><Pending>Legal notice text to be supplied by ACBF.</Pending></Section>
    </>
  );
}
