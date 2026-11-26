import acbfLogo from "@/assets/partners/acbf.png.asset.json";
import africacdcLogo from "@/assets/partners/africacdc.png.asset.json";
import aucLogo from "@/assets/partners/auc.png.asset.json";
import mohKenyaLogo from "@/assets/partners/mohkenya.png.asset.json";
import fctcLogo from "@/assets/partners/fctc.png.asset.json";
import whoafroLogo from "@/assets/partners/whoafro.png.asset.json";

export const EVENT = {
  edition: "3rd Africa Conference on Tobacco Control and Development",
  short: "ACTCD 2027",
  theme: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty",
  dates: "22–24 April 2027",
  location: "Nairobi, Kenya",
  format: "Hybrid · English and French",
  startISO: "2027-04-22T08:00:00+03:00",
};

export const TRACKS = [
  { n: 1, short: "Governance and Policy Sovereignty", title: "Governance, Leadership and Protection of Policy Sovereignty", scope: "WHO FCTC Article 5.3, industry interference, transparency and conflict of interest, multisectoral coordination and civil society engagement." },
  { n: 2, short: "Emerging Products", title: "Emerging Tobacco and Nicotine Products and Protecting Future Generations", scope: "E-cigarettes, heated tobacco, nicotine pouches and other products, with a focus on regulatory preparedness, youth uptake, flavors and digital marketing." },
  { n: 3, short: "Evidence and Surveillance", title: "African Knowledge, Evidence, Surveillance and Tobacco Industry Intelligence", scope: "Epidemiological and market surveillance, industry monitoring, illicit trade, implementation and economic research, data systems and evidence-to-policy." },
  { n: 4, short: "Health Systems and Development", title: "Tobacco Control, Health Systems and Sustainable Development", scope: "Cessation and dependence treatment, integration into primary healthcare and UHC, MPOWER interventions, inequalities, environment and livelihoods." },
  { n: 5, short: "Taxation and Financing", title: "Tobacco Taxation, Sustainable Financing and Domestic Resource Mobilization", scope: "Tax design and administration, taxation of emerging products, illicit trade and enforcement, and innovative financing for tobacco control and health." },
];

export const CROSS_CUTTING = ["Youth", "Gender", "Equity", "Tobacco industry interference", "Evidence-to-policy"];

export const NUMBERS = [
  { figure: "3rd", label: "edition", detail: "Building on 2021 and 2024" },
  { figure: "3", label: "days", detail: "22–24 April 2027" },
  { figure: "5", label: "tracks", detail: "Plus cross-cutting themes" },
  { figure: "~300", label: "on-site", detail: "Up to 500 including virtual" },
  { figure: "2", label: "languages", detail: "English and French" },
  { figure: "1", label: "host city", detail: "Nairobi, Kenya · in person with a virtual option" },
];

export const OBJECTIVES = [
  "Strengthen African leadership, governance and multisectoral commitment to accelerate WHO FCTC implementation and protect policymaking from industry interference.",
  "Generate, consolidate and disseminate African knowledge and evidence on tobacco control.",
  "Promote effective and sustainable responses that protect young people and integrate tobacco prevention within broader health and NCD responses.",
  "Advance sustainable financing through tobacco taxation, domestic resource mobilization and innovative financing approaches.",
];

export const CONVENERS = [
  "The African Capacity Building Foundation (ACBF)",
  "Ministry of Health, Kenya",
  "African Union Commission",
  "Africa CDC",
  "WHO AFRO",
  "WHO FCTC Secretariat",
];

export const PARTNERS = [
  { name: "The African Capacity Building Foundation (ACBF)", short: "ACBF", logo: acbfLogo.url },
  { name: "Ministry of Health, Kenya", short: "Ministry of Health, Kenya", logo: mohKenyaLogo.url },
  { name: "African Union Commission", short: "African Union Commission", logo: aucLogo.url },
  { name: "Africa CDC", short: "Africa CDC", logo: africacdcLogo.url },
  { name: "WHO Regional Office for Africa", short: "WHO AFRO", logo: whoafroLogo.url },
  { name: "WHO FCTC Secretariat", short: "WHO FCTC Secretariat", logo: fctcLogo.url },
];

export const KEY_DATES = [
  { milestone: "Call for abstracts opens", date: "October / November 2026" },
  { milestone: "Conference dates", date: "22–24 April 2027" },
];

export const ARTICLE_53 =
  "The Conference observes WHO FCTC Article 5.3 and accepts no financial or in-kind support from the tobacco industry or organizations acting to further its interests.";

export const EXPECTED_OUTCOMES = [
  "Stronger continental leadership and commitment to accelerated WHO FCTC implementation and protection of public health policy from tobacco industry interference",
  "Increased generation, sharing and use of African-generated knowledge and evidence",
  "Enhanced regulatory and health-system preparedness to prevent tobacco and nicotine uptake, particularly among young people, and improved access to tobacco dependence treatment",
  "Increased recognition of tobacco taxation and domestic resource mobilisation as part of sustainable tobacco control and health financing",
  "Stronger collaboration and networks among tobacco control actors in Africa",
  "Clearer positioning of tobacco control within Africa's health sovereignty and sustainable development agendas",
];

export const OUTPUTS = ["Knowledge Compendium", "Conference Communiqué", "Continental Call to Action", "Conference Report", "Follow-up and Accountability Framework"];

export const KEY_STATS = [
  { figure: "44 / 47", label: "WHO African Region countries have ratified the WHO FCTC" },
  { figure: "7M+", label: "deaths a year globally from tobacco use" },
  { figure: "~9.5%", label: "adult tobacco use in the WHO African Region" },
  { figure: "60%+", label: "of Africa's people are under the age of 25" },
];

export const PAST_EDITIONS = [
  { year: "2021", title: "1st edition · Virtual", dates: "26–28 October 2021", theme: "A Tobacco Free Africa. An Urgent Call for Joint Action.", detail: "Held on the WHOVA platform with 586 registered participants and about 280 attending each day, across plenaries and parallel workshops on sustainability, local evidence, multisectoral support and partnerships." },
  { year: "2024", title: "2nd edition · Accra, Ghana", dates: "13–14 November 2024 · Labadi Beach Hotel", theme: "Breaking Barriers, Building Futures: Advancing the Tobacco Control Ecosystem in Africa", detail: "Convened by ACBF with the Centre for Tobacco Control in Africa and Youth in Action, hosted by Ghana's Ministry of Health. 96% of surveyed participants, from 23 countries, rated the theme relevant to Africa's development challenges." },
  { year: "2027", title: "3rd edition · Nairobi, Kenya", dates: "22–24 April 2027", theme: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty", detail: "Convened by ACBF with Kenya's Ministry of Health, the African Union Commission, Africa CDC and partners." },
];

export const RESOLUTIONS_2024 = [
  "Strengthen and enforce tobacco control policies in line with the WHO FCTC, and amend laws to ban emerging products",
  "Establish and scale accessible smoking cessation programs, particularly for high-risk populations",
  "Engage young people intentionally in tobacco control across the continent",
  "Dedicate resources to tobacco control, including through tobacco taxes, with African governments owning the financing",
  "Develop targeted interventions for women and young people",
  "Invest in research on local dynamics of tobacco use and emerging products",
  "Integrate environmental health and alternative livelihoods for tobacco farmers",
  "Build robust monitoring, evaluation and accountability frameworks",
];

// Sample tiers for layout only — pricing and entitlements to be confirmed by the
// Sponsorship and Exhibition Financing Committee before publication.
export const PARTNERSHIP_PACKAGES = [
  {
    tier: "Bronze",
    price: "USD 5,000",
    featured: false,
    includes: [
      "2 conference registrations",
      "Logo on the ACTCD 2027 website partner wall",
      "Organisation listing in the conference programme",
      "Invitations for two to the networking cocktail",
    ],
  },
  {
    tier: "Silver",
    price: "USD 15,000",
    featured: false,
    includes: [
      "6 conference registrations",
      "Exhibition stand in the main exhibition hall",
      "Logo on website, programme and stage backdrop",
      "One 15-minute partner session slot",
      "Recognition across conference social media",
    ],
  },
  {
    tier: "Gold",
    price: "USD 35,000",
    featured: true,
    includes: [
      "12 conference registrations",
      "Premium exhibition stand with meeting space",
      "Naming rights for one track or side event",
      "Speaking slot in a plenary session",
      "Branding on conference materials and signage",
      "Recognition in the communiqué and conference report",
    ],
  },
];

// Home page impact figures, as supplied by the organisers.
export const HOME_IMPACT = [
  { figure: "3rd", label: "edition" },
  { figure: "+250", label: "participants" },
  { figure: "+30", label: "countries represented" },
  { figure: "+20", label: "media houses" },
];

// ============ French versions of the shared content above ============

export const EVENT_FR = {
  edition: "3e Conférence africaine sur la lutte antitabac et le développement",
  theme: "Protéger l'avenir de l'Afrique : faire progresser la lutte antitabac et la souveraineté sanitaire",
  dates: "22–24 avril 2027",
  location: "Nairobi, Kenya",
  format: "Hybride · Anglais et français",
};

export const TRACKS_FR = [
  { n: 1, short: "Gouvernance et souveraineté des politiques", title: "Gouvernance, leadership et protection de la souveraineté des politiques", scope: "Article 5.3 de la CCLAT de l'OMS, ingérence de l'industrie, transparence et conflits d'intérêts, coordination multisectorielle et engagement de la société civile." },
  { n: 2, short: "Nouveaux produits", title: "Nouveaux produits du tabac et de la nicotine et protection des générations futures", scope: "Cigarettes électroniques, tabac chauffé, sachets de nicotine et autres produits, avec un accent sur la préparation réglementaire, l'usage par les jeunes, les arômes et le marketing numérique." },
  { n: 3, short: "Données et surveillance", title: "Connaissances, données et surveillance africaines et veille sur l'industrie du tabac", scope: "Surveillance épidémiologique et du marché, veille sur l'industrie, commerce illicite, recherche sur la mise en œuvre et l'économie, systèmes de données et de la donnée à la décision." },
  { n: 4, short: "Systèmes de santé et développement", title: "Lutte antitabac, systèmes de santé et développement durable", scope: "Sevrage et traitement de la dépendance, intégration aux soins de santé primaires et à la couverture sanitaire universelle, interventions MPOWER, inégalités, environnement et moyens de subsistance." },
  { n: 5, short: "Fiscalité et financement", title: "Fiscalité du tabac, financement durable et mobilisation des ressources intérieures", scope: "Conception et administration fiscales, taxation des nouveaux produits, commerce illicite et application des lois, et financement innovant de la lutte antitabac et de la santé." },
];

export const CROSS_CUTTING_FR = ["Jeunesse", "Genre", "Équité", "Ingérence de l'industrie du tabac", "De la donnée à la décision"];

export const OBJECTIVES_FR = [
  "Renforcer le leadership africain, la gouvernance et l'engagement multisectoriel pour accélérer la mise en œuvre de la CCLAT de l'OMS et protéger l'élaboration des politiques de l'ingérence de l'industrie.",
  "Produire, consolider et diffuser les connaissances et les données africaines sur la lutte antitabac.",
  "Promouvoir des réponses efficaces et durables qui protègent les jeunes et intègrent la prévention du tabagisme dans les réponses plus larges en matière de santé et de maladies non transmissibles.",
  "Faire progresser le financement durable grâce à la fiscalité du tabac, à la mobilisation des ressources intérieures et à des approches de financement innovantes.",
];

export const EXPECTED_OUTCOMES_FR = [
  "Un leadership et un engagement continentaux renforcés en faveur d'une mise en œuvre accélérée de la CCLAT de l'OMS et de la protection des politiques de santé publique contre l'ingérence de l'industrie du tabac",
  "Une production, un partage et une utilisation accrus des connaissances et des données produites en Afrique",
  "Une meilleure préparation réglementaire et des systèmes de santé pour prévenir l'usage du tabac et de la nicotine, en particulier chez les jeunes, et un meilleur accès au traitement de la dépendance tabagique",
  "Une reconnaissance accrue de la fiscalité du tabac et de la mobilisation des ressources intérieures comme éléments du financement durable de la lutte antitabac et de la santé",
  "Une collaboration et des réseaux renforcés entre les acteurs de la lutte antitabac en Afrique",
  "Un positionnement plus clair de la lutte antitabac dans les agendas africains de souveraineté sanitaire et de développement durable",
];

export const OUTPUTS_FR = ["Recueil de connaissances", "Communiqué de la Conférence", "Appel à l'action continental", "Rapport de la Conférence", "Cadre de suivi et de redevabilité"];

export const KEY_STATS_FR = [
  { figure: "44 / 47", label: "pays de la Région africaine de l'OMS ont ratifié la CCLAT" },
  { figure: "7M+", label: "décès par an dans le monde dus au tabagisme" },
  { figure: "~9.5%", label: "de prévalence du tabagisme chez les adultes dans la Région africaine de l'OMS" },
  { figure: "60%+", label: "de la population africaine a moins de 25 ans" },
];

export const PAST_EDITIONS_FR = [
  { year: "2021", title: "1re édition · Virtuelle", dates: "26–28 octobre 2021", theme: "Une Afrique sans tabac. Un appel urgent à l'action conjointe.", detail: "Organisée sur la plateforme WHOVA avec 586 participants inscrits et environ 280 présents chaque jour, entre plénières et ateliers parallèles sur la durabilité, les données locales, le soutien multisectoriel et les partenariats." },
  { year: "2024", title: "2e édition · Accra, Ghana", dates: "13–14 novembre 2024 · Labadi Beach Hotel", theme: "Briser les barrières, bâtir l'avenir : faire progresser l'écosystème de la lutte antitabac en Afrique", detail: "Convoquée par l'ACBF avec le Centre for Tobacco Control in Africa et Youth in Action, accueillie par le ministère de la Santé du Ghana. 96 % des participants sondés, issus de 23 pays, ont jugé le thème pertinent pour les défis de développement de l'Afrique." },
  { year: "2027", title: "3e édition · Nairobi, Kenya", dates: "22–24 avril 2027", theme: "Protéger l'avenir de l'Afrique : faire progresser la lutte antitabac et la souveraineté sanitaire", detail: "Convoquée par l'ACBF avec le ministère de la Santé du Kenya, la Commission de l'Union africaine, Africa CDC et des partenaires." },
];

export const RESOLUTIONS_2024_FR = [
  "Renforcer et appliquer les politiques de lutte antitabac conformément à la CCLAT de l'OMS, et modifier les lois pour interdire les nouveaux produits",
  "Mettre en place et étendre des programmes accessibles de sevrage tabagique, en particulier pour les populations à haut risque",
  "Impliquer intentionnellement les jeunes dans la lutte antitabac à travers le continent",
  "Consacrer des ressources à la lutte antitabac, notamment grâce aux taxes sur le tabac, les gouvernements africains prenant en charge le financement",
  "Développer des interventions ciblées pour les femmes et les jeunes",
  "Investir dans la recherche sur les dynamiques locales du tabagisme et des nouveaux produits",
  "Intégrer la santé environnementale et les moyens de subsistance alternatifs pour les producteurs de tabac",
  "Mettre en place des cadres solides de suivi, d'évaluation et de redevabilité",
];

export const KEY_DATES_FR = [
  { milestone: "Ouverture de l'appel à résumés", date: "Octobre / novembre 2026" },
  { milestone: "Dates de la Conférence", date: "22–24 avril 2027" },
];

export const ARTICLE_53_FR =
  "La Conférence respecte l'article 5.3 de la CCLAT de l'OMS et n'accepte aucun soutien financier ou en nature de l'industrie du tabac ni des organisations agissant dans son intérêt.";

export const PARTNERSHIP_PACKAGES_FR = [
  {
    tier: "Bronze",
    price: "USD 5 000",
    featured: false,
    includes: [
      "2 inscriptions à la Conférence",
      "Logo sur le mur des partenaires du site ACTCD 2027",
      "Présence de l'organisation dans le programme de la Conférence",
      "Invitations pour deux personnes au cocktail de réseautage",
    ],
  },
  {
    tier: "Argent",
    price: "USD 15 000",
    featured: false,
    includes: [
      "6 inscriptions à la Conférence",
      "Stand d'exposition dans le hall principal",
      "Logo sur le site, le programme et la toile de fond de la scène",
      "Un créneau de session partenaire de 15 minutes",
      "Reconnaissance sur les réseaux sociaux de la Conférence",
    ],
  },
  {
    tier: "Or",
    price: "USD 35 000",
    featured: true,
    includes: [
      "12 inscriptions à la Conférence",
      "Stand d'exposition premium avec espace de réunion",
      "Droit de nommer une piste ou un événement parallèle",
      "Intervention dans une séance plénière",
      "Image de marque sur les supports et la signalétique de la Conférence",
      "Reconnaissance dans le communiqué et le rapport de la Conférence",
    ],
  },
];

export const HOME_IMPACT_FR = [
  { figure: "3e", label: "édition" },
  { figure: "+250", label: "participants" },
  { figure: "+30", label: "pays représentés" },
  { figure: "+20", label: "maisons de presse" },
];
