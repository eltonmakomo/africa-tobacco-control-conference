import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section } from "@/components/site/Bits";
import { ARTICLE_53 } from "@/lib/conference";

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

const QA: [string, string][] = [
  ["When and where is the Conference?", "22–23 April 2027 in Nairobi, Kenya, held in person with an option for virtual attendance."],
  ["Which languages are used?", "English and French, with simultaneous interpretation."],
  ["How do I register?", "Registration for in-person and virtual participation opens on the Participate page and is managed through Whova."],
  ["When does the call for abstracts open?", "October or November 2026. Submission deadline and notification dates are to be confirmed."],
  ["Who convenes the Conference?", "The African Capacity Building Foundation, with the Ministry of Health of Kenya, the African Union Commission, the Africa CDC, WHO AFRO, the FCTC Secretariat and other partners."],
  ["Does the Conference accept industry sponsorship?", ARTICLE_53],
];

function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently asked questions" />
      <Section>
        <Accordion type="single" collapsible className="max-w-3xl">
          {QA.map(([q, a]) => (
            <AccordionItem key={q} value={q}><AccordionTrigger className="text-left text-lg font-semibold">{q}</AccordionTrigger><AccordionContent className="text-base text-foreground/80">{a}</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
