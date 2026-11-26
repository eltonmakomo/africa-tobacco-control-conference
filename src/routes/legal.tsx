import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53, ARTICLE_53_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Privacy, Legal Notice and Article 5.3 · ACTCD 2027" },
      { name: "description", content: "Privacy policy, legal notice and WHO FCTC Article 5.3 statement for the ACTCD 2027 microsite." },
      { property: "og:title", content: "ACTCD 2027 Legal" },
      { property: "og:description", content: "Privacy policy, legal notice and Article 5.3 statement." },
    ],
  }),
  component: Legal,
});

function Legal() {
  const { fr } = useLang();

  return (
    <>
      <PageHero eyebrow={fr ? "Mentions légales" : "Legal"} title={fr ? "Politiques et déclarations" : "Policies and statements"} />
      <Section id="article-5-3" eyebrow={fr ? "Déclaration Article 5.3 de la CCLAT de l'OMS" : "WHO FCTC Article 5.3 statement"} title={fr ? "Protégée de l'ingérence de l'industrie" : "Protected from industry interference"}>
        <p className="max-w-3xl rounded-2xl border-l-4 border-accent bg-card p-6 text-lg font-medium shadow-card transition hover:shadow-card-lg">{fr ? ARTICLE_53_FR : ARTICLE_53}</p>
      </Section>
      <Section id="privacy" eyebrow={fr ? "Politique de confidentialité" : "Privacy policy"} title={fr ? "Confidentialité" : "Privacy"} className="border-t border-border/60">
        <div className="max-w-3xl space-y-4 text-lg text-foreground/80">
          {fr ? (
            <>
              <p>Ce microsite est fourni par The African Capacity Building Foundation au nom des organisateurs de l'ACTCD. Il ne collecte que les informations que vous choisissez de fournir, telles que les données d'inscription ou d'accréditation des médias.</p>
              <p>Ces informations sont utilisées uniquement pour planifier, organiser et rendre compte de la Conférence, et ne sont partagées qu'avec les organisateurs et les prestataires qui les assistent. Elles ne sont ni vendues ni utilisées à des fins de marketing commercial.</p>
              <p>Vous pouvez demander à tout moment à l'Unité de communication de l'ACBF de corriger ou de supprimer vos données.</p>
            </>
          ) : (
            <>
              <p>This microsite is provided by the African Capacity Building Foundation on behalf of the ACTCD conveners. It collects only the information you choose to provide, such as registration or media accreditation details.</p>
              <p>That information is used solely to plan, run and report on the Conference, and is shared only with the conveners and the service providers that support them. It is not sold, and it is not used for commercial marketing.</p>
              <p>You may ask the ACBF Communications Unit to correct or remove your details at any time.</p>
            </>
          )}
        </div>
      </Section>
      <Section id="legal-notice" eyebrow={fr ? "Mentions légales" : "Legal notice"} title={fr ? "Mentions légales" : "Legal notice"}>
        <div className="max-w-3xl space-y-4 text-lg text-foreground/80">
          {fr ? (
            <>
              <p>© 2027 The African Capacity Building Foundation. Le nom, le logo, le contenu du programme et les supports de la Conférence ACTCD appartiennent à l'ACBF et aux organisateurs, et peuvent être reproduits pour le compte rendu de la Conférence et le plaidoyer en santé publique avec mention de la source.</p>
              <p>Les opinions exprimées par les intervenants, partenaires et contributeurs leur sont propres et ne représentent pas nécessairement celles des organisateurs.</p>
              <p>{ARTICLE_53_FR}</p>
            </>
          ) : (
            <>
              <p>© 2027 The African Capacity Building Foundation. The ACTCD name, logo, programme content and conference materials belong to ACBF and the conveners, and may be reproduced for conference reporting and public-health advocacy with acknowledgement.</p>
              <p>Views expressed by speakers, partners and contributors are their own and do not necessarily represent those of the conveners.</p>
              <p>{ARTICLE_53}</p>
            </>
          )}
        </div>
      </Section>
    </>
  );
}
