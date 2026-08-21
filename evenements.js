// ============================================================
//  CLUB EFP — FICHIER DES ÉVÉNEMENTS
//  Pour ajouter un événement passé, une annonce, ou une
//  publication : copie un bloc dans la liste correspondante
//  et modifie-le. Même logique que ressources.js / stages.js.
// ============================================================

// ─────────────────────────────────────────
//  PROCHAIN ÉVÉNEMENT (annonce en haut de page)
//  Laisse UPCOMING = null s'il n'y a rien à annoncer pour
//  l'instant. Sinon, remplis l'objet comme dans l'exemple.
// ─────────────────────────────────────────
const UPCOMING = null;

/* Exemple à copier-coller pour annoncer un événement :
const UPCOMING = {
  nom: "Titre de l'événement",
  date: "15/05/2026",
  heure: "14h00",
  lieu: "Amphithéâtre, ISSHT",
  description: "Description courte de l'événement à venir, pour donner envie d'y participer.",
  lien: "contact.html"   // lien "en savoir plus" — vers contact.html, un formulaire, un post Instagram...
};
*/

// ─────────────────────────────────────────
//  ÉVÉNEMENTS PASSÉS — Année universitaire 2025-2026
// ─────────────────────────────────────────
const EVENTS = [
  {
    nom: "Journée de sensibilisation et dépistage : cancer du sein",
    date: "31/10/2025",
    duree: "3 heures",
    cible: "Étudiants du club",
    participants: 25,
    description: "Journée de sensibilisation autour du cancer du sein : facteurs de risque, importance du dépistage précoce et moyens de prévention, avec des séances de dépistage initial et orientation vers un suivi médical.",
    photos: ["evt-4.jpg", "evt-5.jpg", "evt-6.jpg"],
  },
  {
    nom: "Haine Fraternelle",
    date: "26/11/2025",
    duree: "3 heures",
    cible: "Étudiants en psychologie",
    participants: 65,
    description: "Conférence scientifique suivie d'un débat interactif sur la haine entre frères et sœurs : ses causes psychologiques, son impact sur les relations familiales et les moyens d'y faire face.",
    photos: ["evt-7.jpg", "evt-8.jpg", "evt-9.jpg"],
  },
  {
    nom: "L'adolescence et la consommation de contenus pornographiques : impact psychologique sur l'estime de soi et l'image corporelle",
    date: "01/04/2026",
    duree: "2 heures",
    cible: "Étudiants du club",
    participants: 38,
    description: "Rencontre sur l'impact de la consommation de contenus pornographiques à l'adolescence sur la santé mentale, l'estime de soi et l'image corporelle, suivie d'un temps d'échange avec les participants.",
    photos: ["evt-10.jpg", "evt-11.jpg", "evt-12.jpg"],
  },
  {
    nom: "Autisme au-delà des mythes",
    date: "04/04/2026",
    duree: "2 heures",
    cible: "Étudiants en psychologie",
    participants: 38,
    description: "Conférence sur le trouble du spectre de l'autisme visant à corriger les idées reçues, présenter les caractéristiques du trouble, et souligner l'importance du diagnostic et de l'intervention précoces.",
    photos: ["evt-13.jpg", "evt-14.jpg", "evt-15.jpg"],
  },
  {
    nom: "Mes pensées sous pression : faire face au stress étudiant",
    date: "15/04/2026",
    duree: "2 heures",
    cible: "Étudiants du club",
    participants: 40,
    description: "Atelier interactif sur les pressions de la vie universitaire, avec des techniques concrètes de gestion du stress, de renforcement de la santé mentale et de développement de stratégies d'adaptation.",
    photos: ["evt-16.jpg", "evt-17.jpg", "evt-18.jpg"],
  },
  {
    nom: "Journée d'information et d'orientation : choix du master en psychologie",
    date: "29/04/2026",
    duree: "4 heures",
    cible: "Étudiants en psychologie",
    participants: 55,
    description: "Rencontre destinée aux étudiants en psychologie pour présenter les différentes filières de master, les conditions d'admission et les perspectives académiques et professionnelles, en présence d'enseignants et de spécialistes.",
    photos: ["evt-19.jpg", "evt-20.jpg", "evt-21.jpg"],
  },
];

// ─────────────────────────────────────────
//  AUTRES CONTRIBUTIONS ET COLLABORATIONS
// ─────────────────────────────────────────
const CONTRIBUTIONS = [
  {
    titre: "Collaboration avec le club ZERO3 — Éco-anxiété",
    date: "18/02/2026",
    description: "La présidente et la vice-présidente du club ont participé à une rencontre scientifique sur l'éco-anxiété, en collaboration avec le club ZERO3, mettant en lumière le rôle de l'ISSHT dans les initiatives universitaires interdisciplinaires.",
    photos: ["evt-22.jpg", "evt-23.jpg", "evt-24.jpg"],
  },
  {
    titre: "Campagne de dons pour les enfants de Diar El Amel",
    date: "18/03/2026",
    description: "Participation à une initiative solidaire au profit des enfants de la fondation Diar El Amel, dans le cadre de l'engagement du club pour le bénévolat et la responsabilité sociale.",
    photos: ["evt-25.jpg", "evt-26.jpg", "evt-27.jpg"],
  },
  {
    titre: "L'addiction en milieu universitaire : enjeux, prévention et responsabilités",
    date: "08/04/2026",
    description: "La présidente du club a contribué à l'organisation de cette table ronde et présenté une intervention sur la musicothérapie et son rôle dans l'accompagnement thérapeutique.",
    photos: [],
  },
  {
    titre: "Couverture médiatique du colloque international sur les troubles du neurodéveloppement",
    date: "10/04/2026",
    description: "Documentation photo et vidéo du colloque organisé par le département de psychologie de l'ISSHT, avec production et diffusion du contenu sur les réseaux sociaux du club.",
    photos: ["evt-28.jpg", "evt-29.jpg", "evt-30.jpg"],
  },
  {
    titre: "Journées de sensibilisation à distance pour les bacheliers",
    date: "",
    description: "Campagne de sensibilisation en ligne à destination des nouveaux bacheliers, pour présenter l'ISSHT et la filière psychologie, le système d'études et répondre à leurs questions d'orientation.",
    photos: [],
  },
];

// ─────────────────────────────────────────
//  PUBLICATIONS — relais de posts réseaux sociaux
//  Laisse le tableau vide s'il n'y a rien à relayer pour
//  l'instant. Pour ajouter un post, copie ce modèle :
//
//  {
//    image: "nom-de-l-image.jpg",   // ajoute l'image dans le dossier events-photos/
//    legende: "Texte court qui accompagne le post",
//    plateforme: "instagram",        // instagram | facebook | tiktok | linkedin
//    lien: "https://www.instagram.com/p/XXXXXXXXX/",
//    date: "12/05/2026"
//  },
// ─────────────────────────────────────────
const POSTS = [];
