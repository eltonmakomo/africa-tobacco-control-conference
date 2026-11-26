import heroImg from "@/assets/session-speaker.jpg";
import sideImg from "@/assets/evening-guest.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53, ARTICLE_53_FR } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs · ACTCD 2027" },
      { name: "description", content: "Answers to common questions about dates, format, languages, abstracts and partnerships at ACTCD 2027." },
      { property: "og:title", content: "ACTCD 2027 FAQs" },
      { property: "og:description", content: "Frequently asked questions about the Conference." },
    ],
  }),
  component: FAQ,
});

const QA_EN: [string, string][] = [
  ["When and where is the Conference?", "21–23 April 2027 in Nairobi, Kenya, held in person with an option for virtual attendance."],
  ["Which languages are used?", "English and French, with simultaneous interpretation."],
  ["How do I register?", "Registration for in-person and virtual participation opens on the Participate page and is managed through Whova."],
  ["When does the call for abstracts open?", "October or November 2026."],
  ["Who convenes the Conference?", "The African Capacity Building Foundation, with the Ministry of Health of Kenya, the African Union Commission, the Africa CDC, WHO AFRO, the FCTC Secretariat and other partners."],
  ["Does the Conference accept industry sponsorship?", ARTICLE_53],
];

const QA_FR: [string, string][] = [
  ["Quand et où se tient la Conférence ?", "Les 21–23 avril 2027 à Nairobi, au Kenya, en présentiel avec une option de participation en ligne."],
  ["Quelles langues sont utilisées ?", "L'anglais et le français, avec interprétation simultanée."],
  ["Comment m'inscrire ?", "L'inscription pour une participation en personne ou en ligne ouvre sur la page Participer et est gérée via Whova."],
  ["Quand l'appel à résumés ouvre-t-il ?", "En octobre ou novembre 2026."],
  ["Qui convoque la Conférence ?", "The African Capacity Building Foundation, avec le ministère de la Santé du Kenya, la Commission de l'Union africaine, Africa CDC, l'OMS AFRO, le Secrétariat de la CCLAT et d'autres partenaires."],
  ["La Conférence accepte-t-elle des parrainages de l'industrie ?", ARTICLE_53_FR],
];

function FAQ() {
  const { fr } = useLang();
  const qa = fr ? QA_FR : QA_EN;

  return (
    <>
      <PageHero image={heroImg} imgClassName="object-[center_12%]" eyebrow={fr ? "FAQ" : "FAQs"} title={fr ? "Questions fréquentes" : "Frequently asked questions"} />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <Accordion type="single" collapsible className="lg:col-span-3">
            {qa.map(([q, a]) => (
              <AccordionItem key={q} value={q}><AccordionTrigger className="text-left text-lg font-semibold">{q}</AccordionTrigger><AccordionContent className="text-base text-foreground/80">{a}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
          <figure className="group relative overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1 hover:shadow-card-lg lg:col-span-2">
            <img src={sideImg} alt={fr ? "Un invité à la réception de clôture de la 2e ACTCD, Accra 2024" : "A guest at the closing reception of the 2nd ACTCD, Accra 2024"} loading="lazy" className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
          </figure>
        </div>
      </Section>
    </>
  );
}
