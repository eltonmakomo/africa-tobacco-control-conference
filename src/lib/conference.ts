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
  dates: "22–23 April 2027",
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
  { figure: "2", label: "days", detail: "22–23 April 2027" },
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
  { milestone: "Submission deadline", date: "To be confirmed" },
  { milestone: "Notification to authors", date: "To be confirmed" },
  { milestone: "Conference dates", date: "22–23 April 2027" },
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
  { year: "2027", title: "3rd edition · Nairobi, Kenya", dates: "22–23 April 2027", theme: "Protecting Africa's Future: Advancing Tobacco Control and Health Sovereignty", detail: "Convened by ACBF with Kenya's Ministry of Health, the African Union Commission, Africa CDC and partners." },
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
  { figure: "350+", label: "participants" },
  { figure: "30+", label: "countries represented" },
  { figure: "20+", label: "media houses" },
  { figure: "3rd", label: "edition" },
];
