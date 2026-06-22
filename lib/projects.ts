export type Category = "work" | "rest" | "play";

export type Project = {
  slug: string;
  category: Category;
  title: string;
  subtitle?: string;
  meta?: string[];
  description?: string;
  cover: string;
  images: string[];
};

const work3 = "/images/work/mentmore-3/";
const work5 = "/images/work/mentmore-5/";
const workSF = "/images/work/sunshine-farm/";
const restCR = "/images/rest/cassland-road/";
const restER = "/images/rest/evering-road/";
const restGL = "/images/rest/golden-lane/";
const restLCR = "/images/rest/lower-clapton-road/";
const restBR = "/images/rest/bisley-road/";
const restLFE = "/images/rest/london-fields-estate/";
const restOS = "/images/rest/old-street/";

export const projects: Project[] = [
  // ── WORK ───────────────────────────────────────────────
  {
    slug: "mentmore-3",
    category: "work",
    title: "3 Mentmore Terrace — The White House",
    subtitle: "London Fields, London",
    meta: [
      "Client: USE Architecture",
      "RIBA Stages 01 — 06",
      "Completion October 2015",
      "Contract: JCT Minor Works",
    ],
    description:
      "On a tight, taut, urban site previously inhabited by enigmatic travelling folk, USE defined the burgeoning bohemia of the London Fields estate with a cool, calm, statement of intent. The first UK structure to utilise Du-Pont Corian as an innovative rain-screen system, the façade is informed by Ray Bradbury's seminal opus on authoritarianism, defined and delineated by a 5:4:1 ratio of composition, commenting on the literary nature of its former Publishing House clients. Eschewing any decorative sensibility, saving said economically informed ratio, a robust exposed RC concrete frame is countered by a lightweight floating façade, discretely responding to light and meteorological variation with a variance from luminosity to sumo-like gravitas. 7 apartments and 2 studios articulate the post-Olympic urban renaissance of London Fields by providing spaces both robustly industrial and unashamedly metropolitan.",
    cover: work3 + "02 main.jpg",
    images: [
      "02 main.jpg",
      "01.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg",
      "09.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "20.jpg",
    ].map((n) => work3 + n),
  },
  {
    slug: "mentmore-5",
    category: "work",
    title: "5 Mentmore Terrace",
    subtitle: "London Fields, London",
    meta: [
      "Client: USE Architecture",
      "RIBA Stages 01 — 06",
      "Completion March 2021",
      "Contract: JCT Minor Works",
    ],
    description:
      "USE acquired a site opposite their former White House site, an enigmatically dilapidated four-storey warehouse housing City Seals — Chartered Sealmakers to the Crown. At the onset of the Covid-19 lockdown we embarked on a build to provide two studios and two apartments, recalling the former glories of the Gap House with a significantly decreased diminutive width of 3.1 metres. A comprehensive steel substructure was inserted to brace the deflective masonry super-structure which, combined with a 1-metre deep basement underpin and a steel penthouse roof extension, enabled spaces and a narrative language which echoed the building's vigorous Victorian industrial history.",
    cover: work5 + "01.jpg",
    images: [
      "01.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "05.5.jpg",
      "06.jpg",
      "07.jpeg",
      "08.jpeg",
      "09.jpeg",
      "09.5.jpeg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
    ].map((n) => work5 + n),
  },
  {
    slug: "sunshine-farm",
    category: "work",
    title: "Sunshine Farm",
    subtitle: "Cape Coast Road, Ghana",
    meta: [
      "Client: USE Architecture",
      "RIBA Stages 01 — 04",
      "Feasibility study, 2013",
    ],
    description:
      "Black Earth acquired an option on 150 acres of prime agricultural land on the Southern Atlantic seaboard in 2012 — located on the Cape Coast Road between Elmina and Takoradi. Close to the fishing village of Ayenso Do, the area is suffused with potent history focused on the Slave Trade museum at Elmina Fort, ominously sited above the enigmatic sprawl of Elmina town — an intact and edgy Portuguese/Dutch colonial town, still bustling to the seams with local fishwives. The land was leased to Sunshine Farms, who cleared, conditioned, and cultivated the soil to organic certification standards, utilising and training local workers and management from Ayenso Do and Elmina — growing people as well as crops. The 'common good' was to think global and act local — to initiate a ground-up movement to return Ghana to its pre-colonial agricultural self-sufficiency model. In 2013 SOF engaged DE to produce a feasibility study for Elmina Fine Trading.",
    cover: workSF + "01.jpg",
    images: [
      "00.jpg",
      "000.jpg",
      "01.jpg",
      "02.jpg",
      "02.5.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
    ].map((n) => workSF + n),
  },

  // ── REST · PRIVATE LIVES ───────────────────────────────
  {
    slug: "cassland-road",
    category: "rest",
    title: "25 Cassland Road",
    subtitle: "Private Lives · Hackney",
    meta: [
      "Client: Neil Arthur & Helen Kincaid",
      "RIBA Stages 01 — 06",
      "Start May 2015 · Completion Feb 2016",
      "Contract: JCT Minor Works",
      "Project Cost: £156,289",
    ],
    description:
      "Neil and Helen escaped to Stroud in June 2007 to relieve the febrile intensity of London, seeking a more gentle and engaged way of life. Their refuge was a charming Victorian redbrick terrace on a steeply sloping street with an undulating, vertiginous garden to the rear. We sought to extend the inherently insular nature of the Victorian house by extending the ground floor as a communal living space, spilling out from the formality of the front room, through the vibrancy of the open-plan kitchen and dining areas and into a sheltered rustic terrace, rising up via a series of curated terraces into the episodic garden. A simple and elegant timber structure was clad in cedar shingles and crowned by a lush green roof, responding and reflecting to the terraces.",
    cover: restCR + "CR 01.jpg",
    images: [
      "CR 01.jpg",
      "CR-02-rear garden mid view.jpg",
      "CR-03-rear garden close view.jpg",
      "CR-04-rear garden low view.jpg",
      "CR-06-reception view 02.jpg",
      "CR-07-kitchen view 01.jpg",
      "CR-08-kitchen view 02.jpg",
      "CR-09-rear bedroom view 01.jpg",
      "CR-10-rear bedroom view 02.jpg",
      "CR-11-rear bedroom view 03.jpg",
      "CR-12-bathroom view 04.jpg",
      "CR-13-collage 01.jpg",
      "CR-13-collage 02.jpg",
      "CR-13-collage 03.jpg",
    ].map((n) => restCR + n),
  },
  {
    slug: "evering-road",
    category: "rest",
    title: "240 Evering Road",
    subtitle: "Private Lives · North London",
    meta: [
      "Client: John & Naylor Armstrong",
      "RIBA Stages 01 — 06",
      "Start May 2013 · Completion Sep 2013",
      "Contract: JCT Minor Works",
      "Project Cost: £141,502",
    ],
    description:
      "Evering Road is an iconic, grand North London street lined with sumptuous, spacious semi-detached Victorian villas. John and Naylor moved from the burgeoning Bohemia in Lower Clapton to gain more space, raise their loved Lilly and pursue their love of gardening and cooking. We extended the cramped and claustrophobic kitchen to provide an inspirationally Californian ground floor garden extension, engaged on all sides with the mature, verdant garden abandoned by the previous inhabitants. With two walls of sliding, folding, full-height fully glazed doors meeting at a breathtakingly bold cantilevered corner, the space sequentially provides preparation, dining and relaxation in one enigmatic and engaged space, opening up to draw the garden in and spill their intimate joyous family life out. The rear structural wall is anchored by a solid masonry wall of dense blockwork with a minimally engaged steel roof structure supporting and delicately accentuating the sheer glass walls.",
    cover: restER + "ER-01-rear view 01.jpg",
    images: [
      "ER-01-rear view 01.jpg",
      "ER-02-cantilever view 01.JPG",
      "ER-03-interior view to garden 01.jpg",
      "ER-04-side view 01.jpg",
      "ER-05-interior long view 01.jpg",
      "ER-06-collage.jpg",
      "ER-07-interior reception view 01.jpg",
      "ER-08-interior detail 01.jpg",
    ].map((n) => restER + n),
  },
  {
    slug: "golden-lane",
    category: "rest",
    title: "125 Golden Lane — The Gap",
    subtitle: "Private Lives · Clerkenwell",
    meta: [
      "Client: USE Architecture",
      "Date: Sep 1998",
      "Budget: £480,000",
      "Award: RIBA Future Homes 2004",
    ],
    description:
      "Stumbled upon during the late-90s recession, the Gap House site was a literal dilapidated 'hole in the ground'. Purchased on credit card finance and financed during a precarious financial climate, this faux corporate mini-tower utilised an off-the-shelf industrial steel frame combined with a cutting-edge glazing panel system to produce an elegant 6-storey pied-à-terre delineated by a vertical hierarchy of privacy and intimacy.",
    cover: restGL + "GL125-01-front01.jpg",
    images: [
      "GL125-01-front01.jpg",
      "GL125-02-front.jpg",
      "GL125-03-front01.jpg",
      "GL125-04-front.jpg",
      "GL125-4.5-front.jpg",
      "GL125-05-front01.jpg",
      "GL125-06-front.jpg",
      "GL125-06.5-front.jpg",
      "GL125-07-front.jpg",
      "GL125-08-front.jpg",
      "GL125-08.5-front.jpg",
      "GL125-09-front.jpg",
      "GL125-10-1st Flr.jpg",
      "GL125-11-3rd Flr.jpg",
      "GL125-12-4th Flr.jpg",
      "GL125-13-5th Flr.jpg",
    ].map((n) => restGL + n),
  },
  {
    slug: "lower-clapton-road",
    category: "rest",
    title: "10 Lower Clapton Road",
    subtitle: "Private Lives · Hackney",
    meta: [
      "Client: USE Architecture",
      "RIBA Stages 01 — 06",
      "Start March 2001 · Completion Dec 2001",
      "Contract: JCT Minor Works",
      "Project Cost: £186,950",
    ],
    description:
      "Formerly a doctors' surgery and home for associated nurses, this dilapidated listed Georgian villa was on the verges of implosion when USE gained consent for its conversion into two elegant family duplexes. Informed by its rich cultural history as the home of the Bramwell Booth family, founders of the Salvation Army, we narrated the spaces with a palette of apposite materials, heightening the elements of its inherent style. The Pompeian language of its cavernous basement bathroom provided counterpoint to the grandeur of upper reception rooms with light-lit French doors leading onto a sumptuous balcony with Adams heart railings.",
    cover: restLCR + "LCR-01.jpg",
    images: [
      "LCR-01.jpg",
      "LCR-02.jpg",
      "LCR-03.jpg",
      "LCR-04.jpg",
      "LCR-05.jpg",
      "LCR-06.jpg",
      "LCR-07.jpg",
      "LCR-08.jpg",
      "LCR-09.jpg",
      "LCR-10.jpg",
      "LCR-11.jpg",
    ].map((n) => restLCR + n),
  },
  {
    slug: "bisley-road",
    category: "rest",
    title: "Bisley Road",
    subtitle: "Private Lives · Stroud",
    meta: ["RIBA Stages 01 — 06", "Contract: JCT Minor Works"],
    description: "[PROJECT DESCRIPTION TO BE ADDED]",
    cover: restBR + "BR-01-rear view.jpg",
    images: [
      "BR-01-rear view.jpg",
      "BR-02-rooflight view.jpg",
      "BR-03-rear interior view.jpg",
      "BR-04-rear inetrior view.jpg",
      "BR-05-detail view.jpg",
      "BR-06-rear roof view.jpg",
      "BR-07-exploded axo view.jpg",
      "BR-08-rear perspective view.jpg",
      "BR-09-rear yard view.jpg",
    ].map((n) => restBR + n),
  },

  // ── REST · PUBLIC HOUSES ───────────────────────────────
  {
    slug: "london-fields-estate",
    category: "rest",
    title: "The London Fields Estate",
    subtitle: "Public Houses · Hackney",
    meta: [
      "Client: USE Architecture",
      "RIBA Stages 01 — 06",
      "Inception Feb 2010 · Completion Aug 2017",
      "Contract: JCT Minor Works",
      "Project Cost: £2,345,000",
    ],
    description:
      "In June 2010 the artisanal inhabitants of the Live-Work London Fields Estate sought to expand their individual spaces with a limited competition for proposals for expansion of creative spaces via rooftop extension. Originally built as an urban oasis for Hackney's creative community, the estate occupied a much-loved Victorian terrace which fell into disrepair following removal of internal structure by nomadic inhabitants. Having organically grown from artistic individuals to associated familial groups, the only way was up. USE won the contest with a proposal fuelled by the prefabricated technology of their Cloud 9 Eco-home developments. With a Roof Off / Roof On turnaround of four weeks, USE project-managed the intense Design/Build programme, sequentially constructing 16 units over 20 months. The austere and understated nature of the black cedar-clad constructions masks a fertile and vibrant inner communal life, providing calm, reflective spaces for this enigmatic urban village.",
    cover: restLFE + "mentmore-01.jpg",
    images: [
      "mentmore-01.jpg",
      "mentmore-02.jpg",
      "mentmore-03.jpg",
      "mentmore-04.jpg",
      "mentmore-05.jpg",
      "mentmore-06.jpg",
      "mentmore-07.jpg",
      "mentmore-08.jpg",
      "mentmore-09.jpg",
      "mentmore-10.jpg",
      "mentmore-11.jpg",
      "mentmore-12.jpg",
      "mentmore-13.jpg",
      "mentmore-14.jpg",
      "gransden-01.jpg",
      "gransden-02.jpg",
      "gransden-03.jpg",
      "gransden-04.jpg",
      "london-lane-01.jpg",
      "london-lane-02.jpg",
    ].map((n) => restLFE + n),
  },
  {
    slug: "old-street",
    category: "rest",
    title: "54—56 Old Street",
    subtitle: "Public Houses · Clerkenwell",
    meta: [
      "RIBA Stages 01 — 06",
      "Inception Feb 2011 · Completion May 2012",
      "Contract: JCT Minor Works",
      "Project Cost: £849,000",
    ],
    description:
      "First-time developer and associate Richard Burger approached USE to develop two former offices adjacent to our Gap House project into a mixed-use scheme. We combined the two banal, disparate buildings, again utilising the Golden Section as an ordering device to synchronise them as a bi-partite Renaissance villa with fenestration orchestrated by degrees of privacy, articulated as bar-code — the wide-screen roof-top terrace view, now panorama.",
    cover: restOS + "01.jpg",
    images: [
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg",
      "09.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
    ].map((n) => restOS + n),
  },
];

export const projectsByCategory = (cat: Category) =>
  projects.filter((p) => p.category === cat);

export const projectBySlug = (cat: string, slug: string) =>
  projects.find((p) => p.category === cat && p.slug === slug);
