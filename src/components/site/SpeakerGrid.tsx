import { ArrowRight } from "lucide-react";
import sp1 from "@/assets/speaker-1.jpg";
import sp2 from "@/assets/speaker-2.jpg";
import sp3 from "@/assets/speaker-3.jpg";
import sp4 from "@/assets/speaker-4.jpg";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLang } from "@/lib/i18n";

const SPEAKERS_EN = [
  { img: sp1, name: "Dr. Amina Wanjiru", role: "Public health leader", org: "Nairobi, Kenya", bio: "A public health physician with two decades of experience leading national tobacco control and NCD prevention programmes, with a focus on protecting young people from emerging nicotine products." },
  { img: sp2, name: "Prof. Kwame Mensah", role: "Health economist", org: "Accra, Ghana", bio: "An economist whose research on tobacco taxation and domestic resource mobilisation has informed excise reforms in several African countries." },
  { img: sp3, name: "Dr. Awa Diallo", role: "Tobacco control researcher", org: "Dakar, Senegal", bio: "A researcher working on surveillance of tobacco use and industry interference, and a champion of African-generated evidence for policy." },
  { img: sp4, name: "Hon. Joseph Otieno", role: "Policy and governance", org: "Nairobi, Kenya", bio: "A legislator and governance advocate who has championed WHO FCTC Article 5.3 safeguards and multisectoral coordination." },
];

const SPEAKERS_FR = [
  { img: sp1, name: "Dr. Amina Wanjiru", role: "Responsable de santé publique", org: "Nairobi, Kenya", bio: "Médecin de santé publique forte de deux décennies d'expérience à la tête de programmes nationaux de lutte antitabac et de prévention des MNT, avec un accent sur la protection des jeunes face aux nouveaux produits de la nicotine." },
  { img: sp2, name: "Prof. Kwame Mensah", role: "Économiste de la santé", org: "Accra, Ghana", bio: "Économiste dont les recherches sur la fiscalité du tabac et la mobilisation des ressources intérieures ont éclairé des réformes des accises dans plusieurs pays africains." },
  { img: sp3, name: "Dr. Awa Diallo", role: "Chercheuse en lutte antitabac", org: "Dakar, Sénégal", bio: "Chercheuse travaillant sur la surveillance du tabagisme et de l'ingérence de l'industrie, et défenseure des données produites en Afrique pour éclairer les politiques." },
  { img: sp4, name: "Hon. Joseph Otieno", role: "Politique et gouvernance", org: "Nairobi, Kenya", bio: "Législateur et défenseur de la bonne gouvernance qui a porté les garde-fous de l'article 5.3 de la CCLAT de l'OMS et la coordination multisectorielle." },
];

export function SpeakerGrid() {
  const { fr } = useLang();
  const speakers = fr ? SPEAKERS_FR : SPEAKERS_EN;
  return (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {speakers.map((s) => (
      <Dialog key={s.name}>
        <DialogTrigger asChild>
          <button type="button" className="group w-full overflow-hidden rounded-3xl bg-card text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <img src={s.img} alt={s.name} loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <div className="p-5">
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">{fr ? "Voir le profil" : "View profile"} <ArrowRight className="size-3.5" /></p>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl overflow-hidden p-0 sm:rounded-3xl">
          <div className="grid sm:grid-cols-[220px_1fr]">
            <img src={s.img} alt={s.name} className="h-64 w-full object-cover object-top sm:h-full" />
            <div className="p-7">
              <p className="eyebrow text-primary">{s.role}</p>
              <DialogTitle className="mt-2 text-2xl font-bold">{s.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{s.org}</p>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-brand" />
              <DialogDescription className="mt-4 text-base leading-relaxed text-foreground/80">{s.bio}</DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    ))}
  </div>
  );
}
