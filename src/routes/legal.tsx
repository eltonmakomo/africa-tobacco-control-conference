import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
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
        <p className="max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 text-lg font-medium shadow-card transition hover:shadow-card-lg">{ARTICLE_53}</p>
      </Section>
      <Section id="privacy" eyebrow="Privacy policy" title="Privacy" className="bg-secondary/60">
        <div className="max-w-3xl space-y-4 text-lg text-foreground/80">
          <p>This microsite is provided by the African Capacity Building Foundation on behalf of the ACTCD conveners. It collects only the information you choose to provide, such as registration or media accreditation details.</p>
          <p>That information is used solely to plan, run and report on the Conference, and is shared only with the conveners and the service providers that support them. It is not sold, and it is not used for commercial marketing.</p>
          <p>You may ask the ACBF Communications Unit to correct or remove your details at any time.</p>
        </div>
      </Section>
      <Section id="legal-notice" eyebrow="Legal notice" title="Legal notice">
        <div className="max-w-3xl space-y-4 text-lg text-foreground/80">
          <p>© 2027 The African Capacity Building Foundation. The ACTCD name, logo, programme content and conference materials belong to ACBF and the conveners, and may be reproduced for conference reporting and public-health advocacy with acknowledgement.</p>
          <p>Views expressed by speakers, partners and contributors are their own and do not necessarily represent those of the conveners.</p>
          <p>{ARTICLE_53}</p>
        </div>
      </Section>
    </>
  );
}
