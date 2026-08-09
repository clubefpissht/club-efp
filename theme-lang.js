// ============================================================
//  CLUB EFP — MOTEUR THÈME (clair/sombre) + LANGUE (FR/EN/AR)
//  Fichier partagé par toutes les pages.
//
//  Pour que du CONTENU AJOUTÉ PLUS TARD suive automatiquement
//  le thème : utilise toujours les couleurs via les variables
//  CSS existantes (var(--bg), var(--text), var(--r-light), ...)
//  au lieu de couleurs fixes (#fff, #000...).
//
//  Pour que du TEXTE AJOUTÉ PLUS TARD suive automatiquement la
//  langue : ajoute l'attribut data-i18n="cle" sur l'élément et
//  ajoute la même "cle" dans le dictionnaire I18N ci-dessous
//  (une entrée par langue : fr / en / ar).
// ============================================================

(function () {

  // ─────────────────────────────────────────
  //  DICTIONNAIRE DE TRADUCTION
  //  Ajoute simplement de nouvelles clés ici pour traduire
  //  du nouveau contenu. data-i18n="nav.accueil" ↔ I18N.fr["nav.accueil"]
  // ─────────────────────────────────────────
  const I18N = {

    fr: {
      "nav.accueil": "Accueil",
      "nav.apropos": "À propos",
      "nav.bibliotheque": "Bibliothèque ▾",
      "nav.neuro": "Neuropsychologie",
      "nav.clinique": "Psychologie clinique",
      "nav.cliniquefull": "Psychologie clinique et psychopathologie",
      "nav.dev": "Psychologie du développement",
      "nav.travail": "Psychologie du travail",
      "nav.cognitive": "Psychologie cognitive",
      "nav.ter": "TER Étudiants",
      "nav.stages": "Lieux de stage",
      "nav.contact": "Contact",
      "search.placeholder": "Rechercher...",
      "search.noresults": "Aucun résultat",
      "theme.toggle": "Changer de thème",
      "footer.copy": "© 2025 Club EFP · Empreinte des Futurs Psychologues · Tous droits réservés",
      "footer.copyshort": "© 2025 Club EFP · Empreinte des Futurs Psychologues",
      "footer.bibliotheque": "Bibliothèque",

      // ── INDEX ──
      "index.eyebrow": "Club universitaire · Psychologie",
      "index.heroTitleHtml": "Bienvenue au<br><em>Club EFP</em>",
      "index.heroSub": "Empreinte des Futurs Psychologues — un espace d'apprentissage, d'échange et de développement pour les étudiants en psychologie.",
      "index.discover": "Découvrir le club",
      "index.library": "Bibliothèque",
      "index.scroll": "Défiler",
      "index.stat1": "Spécialités",
      "index.stat2": "Ressources",
      "index.stat3": "Gratuit",
      "index.stat4": "Communauté",
      "index.offerLabel": "Ce que nous offrons",
      "index.offerTitleHtml": "Tout ce dont tu as <span>besoin</span>",
      "index.offerSub": "Des ressources, des événements et un réseau pour te préparer à une carrière en psychologie.",
      "index.f1t": "Bibliothèque numérique",
      "index.f1d": "Accès à des ressources pédagogiques classées par spécialité pour approfondir tes connaissances.",
      "index.f2t": "Conférences & formations",
      "index.f2d": "Des événements réguliers avec des intervenants spécialisés pour enrichir ton parcours académique.",
      "index.f3t": "Lieux de stage",
      "index.f3d": "Un répertoire de structures d'accueil pour trouver ton stage et lancer ta carrière professionnelle.",
      "index.f4t": "Communauté étudiante",
      "index.f4d": "Un réseau d'étudiants passionnés pour échanger, collaborer et s'entraider tout au long du cursus.",
      "index.specLabel": "Nos spécialités",
      "index.specTitleHtml": "Explorer la <span>bibliothèque</span>",
      "index.specSub": "5 domaines de la psychologie couverts avec des ressources sélectionnées pour les étudiants.",
      "index.ctaTitle": "Rejoins la communauté EFP",
      "index.ctaSub": "Fais partie d'une communauté dynamique d'étudiants en psychologie. Ensemble, construisons les psychologues de demain.",
      "index.ctaJoin": "Rejoindre le club",
      "index.ctaMore": "En savoir plus",

      // ── À PROPOS ──
      "apropos.eyebrow": "Club universitaire · Psychologie",
      "apropos.titleHtml": "Empreinte des<br><em>Futurs Psychologues</em>",
      "apropos.sub": "Un espace d'apprentissage, d'échange et de développement académique et professionnel dédié aux étudiants en psychologie.",
      "apropos.badge": "Communauté étudiante active",
      "apropos.quiTitleHtml": "Qui <span>sommes-nous ?</span>",
      "apropos.quiText": "Le club « Empreinte des futurs psychologues » est un club universitaire dédié aux étudiants en psychologie. Il a été créé dans le but de favoriser l'apprentissage, l'échange et le développement des compétences académiques et professionnelles dans le domaine de la psychologie. Nous formons une communauté dynamique d'étudiants passionnés par la compréhension du comportement humain et des problématiques sociales contemporaines.",
      "apropos.missionTitleHtml": "Notre <span>mission</span>",
      "apropos.missionText": "Notre mission principale est de promouvoir la psychologie au sein de l'institut et en dehors, à travers des activités scientifiques, éducatives et culturelles. Nous visons à renforcer les connaissances, favoriser l'esprit de recherche et de curiosité scientifique, et créer un espace d'échange et de débat sur les sujets psychologiques et sociaux.",
      "apropos.faisonsTitleHtml": "Ce que nous <span>faisons</span>",
      "apropos.c1t": "Conférences & débats",
      "apropos.c1d": "Des événements sur l'actualité sociale et psychologique pour renforcer vos compétences académiques.",
      "apropos.c2t": "Bibliothèque numérique",
      "apropos.c2d": "Ressources pédagogiques classées par spécialité : clinique, cognitive, neuropsychologie et plus.",
      "apropos.c3t": "Lieux de stage",
      "apropos.c3d": "Aide à trouver des opportunités professionnelles et des lieux de stage adaptés.",
      "apropos.c4t": "Entraide étudiante",
      "apropos.c4d": "Un espace de partage, de débat et de collaboration entre étudiants passionnés.",
      "apropos.objTitleHtml": "Nos <span>objectifs</span>",
      "apropos.obj1": "Organiser des conférences et débats sur l'actualité sociale et psychologique",
      "apropos.obj2": "Mettre en place des formations pour améliorer les compétences des étudiants",
      "apropos.obj3": "Proposer des rencontres et activités culturelles favorisant l'échange",
      "apropos.obj4": "Créer une bibliothèque numérique de ressources pédagogiques",
      "apropos.obj5": "Aider les étudiants à trouver des lieux de stage et opportunités professionnelles",
      "apropos.visionTitleHtml": "Notre <span>vision</span>",
      "apropos.v1": "Solidarité",
      "apropos.v2": "Ouverture d'esprit",
      "apropos.v3": "Partage du savoir",
      "apropos.v4": "Engagement étudiant",
      "apropos.valeursTitleHtml": "Nos <span>valeurs</span>",
      "apropos.p1": "Respect",
      "apropos.p2": "Éthique",
      "apropos.p3": "Collaboration",
      "apropos.p4": "Engagement",
      "apropos.p5": "Excellence académique",
      "apropos.p6": "Solidarité",
      "apropos.p7": "Ouverture d'esprit",
      "apropos.engTitleHtml": "Notre <span>engagement</span>",
      "apropos.engText": "Nous nous engageons à offrir aux étudiants un espace sérieux, motivant et enrichissant, leur permettant de développer leurs compétences et de se préparer au monde professionnel de la psychologie.",

      // ── BIBLIOTHÈQUE ──
      "biblio.eyebrow": "Ressources pédagogiques",
      "biblio.titleHtml": "Notre <em>Bibliothèque</em>",
      "biblio.sub": "Des ressources sélectionnées pour les étudiants en psychologie, classées par spécialité.",
      "biblio.countSuffix": "ressources disponibles",
      "biblio.sidebarTitle": "Spécialités",
      "biblio.sNeuro": "Neuropsychologie",
      "biblio.sClinique": "Clinique",
      "biblio.sDev": "Développement",
      "biblio.sTravail": "Travail",
      "biblio.sCognitive": "Cognitive",
      "biblio.sTer": "TER",
      "biblio.secNeuroSous": "Cerveau, comportement et fonctions cognitives",
      "biblio.secCliniqueTitre": "Psychologie clinique",
      "biblio.secCliniqueSous": "Santé mentale, thérapies et pathologies",
      "biblio.secDevSous": "Enfance, adolescence et cycles de vie",
      "biblio.secTravailSous": "Organisation, RH et bien-être professionnel",
      "biblio.secCognitiveSous": "Mémoire, attention, raisonnement et perception",
      "biblio.ouvrir": "Ouvrir",
      "biblio.emptySection": "Aucune ressource pour l'instant — revenez bientôt !",
      "biblio.ressource": "ressource",
      "biblio.ressources": "ressources",
      "biblio.terTitle": "TER — Travaux d'Études et de Recherche",
      "biblio.terSub": "Travaux rédigés par les étudiants du Club EFP",
      "biblio.terEmpty": "Aucun TER pour l'instant — les premiers travaux arrivent bientôt !",
      "biblio.telecharger": "Télécharger PDF",
      "biblio.pdfBientot": "PDF bientôt disponible",
      "biblio.travail": "travail",
      "biblio.travaux": "travaux",

      // ── STAGES ──
      "stages.eyebrow": "Opportunités professionnelles",
      "stages.titleHtml": "Lieux de <em>stage</em>",
      "stages.sub": "Découvrez les structures partenaires pour effectuer votre stage en psychologie.",
      "stages.countSuffix": "lieux disponibles",
      "stages.filterTitleHtml": "Filtrer par <span>domaine</span>",
      "stages.fTous": "Tous",
      "stages.fClinique": "Clinique",
      "stages.fScolaire": "Scolaire",
      "stages.fTravail": "Travail & RH",
      "stages.fSocial": "Social",
      "stages.fRecherche": "Recherche",
      "stages.resultat": "résultat",
      "stages.resultats": "résultats",
      "stages.empty": "Aucun lieu de stage pour ce domaine.",
      "stages.proposeTitle": "Vous connaissez un lieu de stage ?",
      "stages.proposeSub": "Si vous avez effectué un stage ou connaissez une structure qui accueille des étudiants en psychologie, partagez-le avec la communauté EFP.",
      "stages.proposeBtn": "Proposer un lieu",

      // ── CONTACT ──
      "contact.eyebrow": "Rejoindre le club",
      "contact.titleHtml": "Nous <em>contacter</em>",
      "contact.sub": "Une question, une suggestion ou vous souhaitez rejoindre l'aventure EFP ? Écrivez-nous !",
      "contact.coordTitleHtml": "Nos <span>coordonnées</span>",
      "contact.email": "Email",
      "contact.adresse": "Adresse",
      "contact.adresseVal": "Institut Supérieur des Sciences Humaines de Tunis (ISSHT)",
      "contact.suivez": "Suivez-nous",
      "contact.faqTitleHtml": "Questions <span>fréquentes</span>",
      "contact.faqQ1": "Comment rejoindre le club ?",
      "contact.faqA1": "Remplissez le formulaire ci-contre ou contactez-nous par email. Nous vous recontacterons sous 48h pour vous accueillir dans la communauté EFP.",
      "contact.faqQ2": "Comment proposer un lieu de stage ?",
      "contact.faqA2": "Utilisez le formulaire en sélectionnant \"Proposer un lieu de stage\" dans le menu objet. Notre équipe vérifiera les informations avant publication.",
      "contact.faqQ3": "Comment participer aux événements ?",
      "contact.faqA3": "Suivez nos pages sur les réseaux sociaux pour être informé en avant-première de tous nos événements, conférences et formations.",
      "contact.faqQ4": "Comment soumettre un TER ?",
      "contact.faqA4": "Envoyez votre travail par email à clubefp.issht@gmail.com avec l'objet \"Soumission TER\". Après vérification, il sera publié dans la bibliothèque.",
      "contact.formTitle": "Envoyer un message",
      "contact.prenom": "Prénom",
      "contact.prenomPh": "Votre prénom",
      "contact.nom": "Nom",
      "contact.nomPh": "Votre nom",
      "contact.emailLabel": "Adresse email",
      "contact.niveau": "Niveau d'études",
      "contact.niveauPh": "Sélectionner votre niveau",
      "contact.objet": "Objet",
      "contact.objetPh": "Choisissez un objet",
      "contact.objRejoindre": "Rejoindre le club",
      "contact.objBiblio": "Question sur la bibliothèque",
      "contact.objStage": "Proposer un lieu de stage",
      "contact.objTer": "Soumettre un TER",
      "contact.objEvenement": "Proposer un événement",
      "contact.objPartenariat": "Partenariat",
      "contact.objAutre": "Autre",
      "contact.message": "Message",
      "contact.messagePh": "Écrivez votre message ici...",
      "contact.submit": "Envoyer le message",
      "contact.success": "Message envoyé ! Nous vous répondrons dans les 48h.",
      "contact.alertMissing": "Veuillez remplir au minimum le prénom, l'email et le message.",
    },

    en: {
      "nav.accueil": "Home",
      "nav.apropos": "About",
      "nav.bibliotheque": "Library ▾",
      "nav.neuro": "Neuropsychology",
      "nav.clinique": "Clinical psychology",
      "nav.cliniquefull": "Clinical psychology & psychopathology",
      "nav.dev": "Developmental psychology",
      "nav.travail": "Work psychology",
      "nav.cognitive": "Cognitive psychology",
      "nav.ter": "Student research papers",
      "nav.stages": "Internship placements",
      "nav.contact": "Contact",
      "search.placeholder": "Search...",
      "search.noresults": "No results",
      "theme.toggle": "Toggle theme",
      "footer.copy": "© 2025 Club EFP · Empreinte des Futurs Psychologues · All rights reserved",
      "footer.copyshort": "© 2025 Club EFP · Empreinte des Futurs Psychologues",
      "footer.bibliotheque": "Library",

      "index.eyebrow": "University club · Psychology",
      "index.heroTitleHtml": "Welcome to<br><em>Club EFP</em>",
      "index.heroSub": "Empreinte des Futurs Psychologues — a space for learning, exchange and growth for psychology students.",
      "index.discover": "Discover the club",
      "index.library": "Library",
      "index.scroll": "Scroll",
      "index.stat1": "Specialties",
      "index.stat2": "Resources",
      "index.stat3": "Free",
      "index.stat4": "Community",
      "index.offerLabel": "What we offer",
      "index.offerTitleHtml": "Everything you <span>need</span>",
      "index.offerSub": "Resources, events and a network to prepare you for a career in psychology.",
      "index.f1t": "Digital library",
      "index.f1d": "Access to teaching resources organized by specialty to deepen your knowledge.",
      "index.f2t": "Talks & workshops",
      "index.f2d": "Regular events with expert speakers to enrich your academic path.",
      "index.f3t": "Internship placements",
      "index.f3d": "A directory of host organizations to find your internship and launch your career.",
      "index.f4t": "Student community",
      "index.f4d": "A network of passionate students to exchange, collaborate and support each other.",
      "index.specLabel": "Our specialties",
      "index.specTitleHtml": "Explore the <span>library</span>",
      "index.specSub": "5 fields of psychology covered with resources curated for students.",
      "index.ctaTitle": "Join the EFP community",
      "index.ctaSub": "Be part of a dynamic community of psychology students. Together, let's build tomorrow's psychologists.",
      "index.ctaJoin": "Join the club",
      "index.ctaMore": "Learn more",

      "apropos.eyebrow": "University club · Psychology",
      "apropos.titleHtml": "Empreinte des<br><em>Futurs Psychologues</em>",
      "apropos.sub": "A space for academic and professional learning, exchange and growth dedicated to psychology students.",
      "apropos.badge": "Active student community",
      "apropos.quiTitleHtml": "Who <span>we are</span>",
      "apropos.quiText": "The \"Empreinte des futurs psychologues\" club is a university club dedicated to psychology students. It was created to foster learning, exchange and the development of academic and professional skills in psychology. We form a dynamic community of students passionate about understanding human behavior and contemporary social issues.",
      "apropos.missionTitleHtml": "Our <span>mission</span>",
      "apropos.missionText": "Our main mission is to promote psychology within the institute and beyond, through scientific, educational and cultural activities. We aim to strengthen knowledge, foster a spirit of research and scientific curiosity, and create a space for exchange and debate on psychological and social topics.",
      "apropos.faisonsTitleHtml": "What we <span>do</span>",
      "apropos.c1t": "Talks & debates",
      "apropos.c1d": "Events on social and psychological current affairs to strengthen your academic skills.",
      "apropos.c2t": "Digital library",
      "apropos.c2d": "Teaching resources organized by specialty: clinical, cognitive, neuropsychology and more.",
      "apropos.c3t": "Internship placements",
      "apropos.c3d": "Help finding professional opportunities and suitable internship placements.",
      "apropos.c4t": "Peer support",
      "apropos.c4d": "A space for sharing, debate and collaboration between passionate students.",
      "apropos.objTitleHtml": "Our <span>goals</span>",
      "apropos.obj1": "Organize talks and debates on social and psychological current affairs",
      "apropos.obj2": "Set up training sessions to improve students' skills",
      "apropos.obj3": "Offer gatherings and cultural activities that foster exchange",
      "apropos.obj4": "Build a digital library of teaching resources",
      "apropos.obj5": "Help students find internship placements and professional opportunities",
      "apropos.visionTitleHtml": "Our <span>vision</span>",
      "apropos.v1": "Solidarity",
      "apropos.v2": "Open-mindedness",
      "apropos.v3": "Sharing knowledge",
      "apropos.v4": "Student commitment",
      "apropos.valeursTitleHtml": "Our <span>values</span>",
      "apropos.p1": "Respect",
      "apropos.p2": "Ethics",
      "apropos.p3": "Collaboration",
      "apropos.p4": "Commitment",
      "apropos.p5": "Academic excellence",
      "apropos.p6": "Solidarity",
      "apropos.p7": "Open-mindedness",
      "apropos.engTitleHtml": "Our <span>commitment</span>",
      "apropos.engText": "We are committed to offering students a serious, motivating and enriching space, allowing them to develop their skills and prepare for the professional world of psychology.",

      "biblio.eyebrow": "Teaching resources",
      "biblio.titleHtml": "Our <em>Library</em>",
      "biblio.sub": "Resources curated for psychology students, organized by specialty.",
      "biblio.countSuffix": "resources available",
      "biblio.sidebarTitle": "Specialties",
      "biblio.sNeuro": "Neuropsychology",
      "biblio.sClinique": "Clinical",
      "biblio.sDev": "Developmental",
      "biblio.sTravail": "Work",
      "biblio.sCognitive": "Cognitive",
      "biblio.sTer": "Research papers",
      "biblio.secNeuroSous": "Brain, behavior and cognitive functions",
      "biblio.secCliniqueTitre": "Clinical psychology",
      "biblio.secCliniqueSous": "Mental health, therapies and pathologies",
      "biblio.secDevSous": "Childhood, adolescence and life stages",
      "biblio.secTravailSous": "Organization, HR and workplace well-being",
      "biblio.secCognitiveSous": "Memory, attention, reasoning and perception",
      "biblio.ouvrir": "Open",
      "biblio.emptySection": "No resources yet — check back soon!",
      "biblio.ressource": "resource",
      "biblio.ressources": "resources",
      "biblio.terTitle": "Student Research Papers",
      "biblio.terSub": "Papers written by Club EFP students",
      "biblio.terEmpty": "No papers yet — the first ones are coming soon!",
      "biblio.telecharger": "Download PDF",
      "biblio.pdfBientot": "PDF coming soon",
      "biblio.travail": "paper",
      "biblio.travaux": "papers",

      "stages.eyebrow": "Professional opportunities",
      "stages.titleHtml": "Internship <em>placements</em>",
      "stages.sub": "Discover partner organizations to do your internship in psychology.",
      "stages.countSuffix": "placements available",
      "stages.filterTitleHtml": "Filter by <span>field</span>",
      "stages.fTous": "All",
      "stages.fClinique": "Clinical",
      "stages.fScolaire": "School",
      "stages.fTravail": "Work & HR",
      "stages.fSocial": "Social",
      "stages.fRecherche": "Research",
      "stages.resultat": "result",
      "stages.resultats": "results",
      "stages.empty": "No internship placement in this field.",
      "stages.proposeTitle": "Know a great internship spot?",
      "stages.proposeSub": "If you've completed an internship or know of an organization that welcomes psychology students, share it with the EFP community.",
      "stages.proposeBtn": "Suggest a placement",

      "contact.eyebrow": "Join the club",
      "contact.titleHtml": "Contact <em>us</em>",
      "contact.sub": "A question, a suggestion, or you'd like to join the EFP adventure? Write to us!",
      "contact.coordTitleHtml": "Our <span>contact details</span>",
      "contact.email": "Email",
      "contact.adresse": "Address",
      "contact.adresseVal": "Institut Supérieur des Sciences Humaines de Tunis (ISSHT)",
      "contact.suivez": "Follow us",
      "contact.faqTitleHtml": "Frequently asked <span>questions</span>",
      "contact.faqQ1": "How do I join the club?",
      "contact.faqA1": "Fill out the form on the right or contact us by email. We'll get back to you within 48h to welcome you into the EFP community.",
      "contact.faqQ2": "How do I suggest an internship placement?",
      "contact.faqA2": "Use the form and select \"Suggest a placement\" in the subject menu. Our team will verify the details before publishing.",
      "contact.faqQ3": "How do I take part in events?",
      "contact.faqA3": "Follow our social media pages to get early updates on all our events, talks and workshops.",
      "contact.faqQ4": "How do I submit a research paper?",
      "contact.faqA4": "Send your paper by email to clubefp.issht@gmail.com with the subject \"TER Submission\". After review, it will be published in the library.",
      "contact.formTitle": "Send a message",
      "contact.prenom": "First name",
      "contact.prenomPh": "Your first name",
      "contact.nom": "Last name",
      "contact.nomPh": "Your last name",
      "contact.emailLabel": "Email address",
      "contact.niveau": "Level of study",
      "contact.niveauPh": "Select your level",
      "contact.objet": "Subject",
      "contact.objetPh": "Choose a subject",
      "contact.objRejoindre": "Join the club",
      "contact.objBiblio": "Question about the library",
      "contact.objStage": "Suggest an internship placement",
      "contact.objTer": "Submit a research paper",
      "contact.objEvenement": "Suggest an event",
      "contact.objPartenariat": "Partnership",
      "contact.objAutre": "Other",
      "contact.message": "Message",
      "contact.messagePh": "Write your message here...",
      "contact.submit": "Send message",
      "contact.success": "Message sent! We'll reply within 48h.",
      "contact.alertMissing": "Please fill in at least your first name, email and message.",
    },

    ar: {
      "nav.accueil": "الرئيسية",
      "nav.apropos": "من نحن",
      "nav.bibliotheque": "المكتبة ▾",
      "nav.neuro": "علم النفس العصبي",
      "nav.clinique": "علم النفس العيادي",
      "nav.cliniquefull": "علم النفس العيادي والأمراض النفسية",
      "nav.dev": "علم نفس النمو",
      "nav.travail": "علم النفس المهني",
      "nav.cognitive": "علم النفس المعرفي",
      "nav.ter": "أبحاث الطلبة",
      "nav.stages": "أماكن التربص",
      "nav.contact": "اتصل بنا",
      "search.placeholder": "ابحث...",
      "search.noresults": "لا توجد نتائج",
      "theme.toggle": "تغيير المظهر",
      "footer.copy": "© 2025 نادي EFP · إمبرانت دي فوتور بسيكولوغ · جميع الحقوق محفوظة",
      "footer.copyshort": "© 2025 نادي EFP · إمبرانت دي فوتور بسيكولوغ",
      "footer.bibliotheque": "المكتبة",

      "index.eyebrow": "نادٍ جامعي · علم النفس",
      "index.heroTitleHtml": "مرحبًا بكم في<br><em>نادي EFP</em>",
      "index.heroSub": "إمبرانت دي فوتور بسيكولوغ — فضاء للتعلّم والتبادل والتطور لفائدة طلبة علم النفس.",
      "index.discover": "اكتشف النادي",
      "index.library": "المكتبة",
      "index.scroll": "مرر للأسفل",
      "index.stat1": "اختصاصات",
      "index.stat2": "موارد",
      "index.stat3": "مجانًا",
      "index.stat4": "مجتمع",
      "index.offerLabel": "ما نقدمه",
      "index.offerTitleHtml": "كل ما <span>تحتاجه</span>",
      "index.offerSub": "موارد وفعاليات وشبكة علاقات لتحضيرك لمسيرة مهنية في علم النفس.",
      "index.f1t": "مكتبة رقمية",
      "index.f1d": "الوصول إلى موارد تعليمية مصنّفة حسب الاختصاص لتعميق معارفك.",
      "index.f2t": "محاضرات وتكوينات",
      "index.f2d": "فعاليات دورية مع متدخلين مختصين لإثراء مسارك الأكاديمي.",
      "index.f3t": "أماكن التربص",
      "index.f3d": "دليل بمؤسسات الاستقبال لإيجاد تربصك وانطلاق مسيرتك المهنية.",
      "index.f4t": "مجتمع طلابي",
      "index.f4d": "شبكة من الطلبة المتحمسين للتبادل والتعاون والمساعدة المتبادلة طوال المسار.",
      "index.specLabel": "اختصاصاتنا",
      "index.specTitleHtml": "استكشف <span>المكتبة</span>",
      "index.specSub": "5 مجالات في علم النفس مع موارد منتقاة للطلبة.",
      "index.ctaTitle": "انضم إلى مجتمع EFP",
      "index.ctaSub": "كن جزءًا من مجتمع نشيط لطلبة علم النفس. معًا نبني نفسانيي الغد.",
      "index.ctaJoin": "انضم إلى النادي",
      "index.ctaMore": "اعرف أكثر",

      "apropos.eyebrow": "نادٍ جامعي · علم النفس",
      "apropos.titleHtml": "إمبرانت دي<br><em>فوتور بسيكولوغ</em>",
      "apropos.sub": "فضاء للتعلّم والتبادل والتطور الأكاديمي والمهني مخصص لطلبة علم النفس.",
      "apropos.badge": "مجتمع طلابي نشيط",
      "apropos.quiTitleHtml": "من <span>نحن؟</span>",
      "apropos.quiText": "نادي «إمبرانت دي فوتور بسيكولوغ» هو نادٍ جامعي مخصص لطلبة علم النفس. أُنشئ بهدف تعزيز التعلّم والتبادل وتطوير الكفاءات الأكاديمية والمهنية في مجال علم النفس. نشكّل مجتمعًا نشيطًا من الطلبة الشغوفين بفهم السلوك الإنساني والقضايا الاجتماعية المعاصرة.",
      "apropos.missionTitleHtml": "<span>مهمتنا</span>",
      "apropos.missionText": "مهمتنا الأساسية هي الترويج لعلم النفس داخل المعهد وخارجه، من خلال أنشطة علمية وتربوية وثقافية. نسعى إلى تعزيز المعارف وتشجيع روح البحث والفضول العلمي، وخلق فضاء للتبادل والنقاش حول المواضيع النفسية والاجتماعية.",
      "apropos.faisonsTitleHtml": "ما الذي <span>نقوم به</span>",
      "apropos.c1t": "محاضرات ونقاشات",
      "apropos.c1d": "فعاليات حول الشأن الاجتماعي والنفسي الراهن لتعزيز كفاءاتكم الأكاديمية.",
      "apropos.c2t": "مكتبة رقمية",
      "apropos.c2d": "موارد تعليمية مصنّفة حسب الاختصاص: عيادي، معرفي، عصبي نفسي وغيرها.",
      "apropos.c3t": "أماكن التربص",
      "apropos.c3d": "مساعدة في إيجاد فرص مهنية وأماكن تربص ملائمة.",
      "apropos.c4t": "تعاضد طلابي",
      "apropos.c4d": "فضاء للمشاركة والنقاش والتعاون بين الطلبة الشغوفين.",
      "apropos.objTitleHtml": "<span>أهدافنا</span>",
      "apropos.obj1": "تنظيم محاضرات ونقاشات حول الشأن الاجتماعي والنفسي الراهن",
      "apropos.obj2": "وضع تكوينات لتحسين كفاءات الطلبة",
      "apropos.obj3": "اقتراح لقاءات وأنشطة ثقافية تعزز التبادل",
      "apropos.obj4": "إنشاء مكتبة رقمية للموارد التعليمية",
      "apropos.obj5": "مساعدة الطلبة على إيجاد أماكن تربص وفرص مهنية",
      "apropos.visionTitleHtml": "<span>رؤيتنا</span>",
      "apropos.v1": "التضامن",
      "apropos.v2": "الانفتاح الفكري",
      "apropos.v3": "تبادل المعرفة",
      "apropos.v4": "الالتزام الطلابي",
      "apropos.valeursTitleHtml": "<span>قيمنا</span>",
      "apropos.p1": "الاحترام",
      "apropos.p2": "الأخلاقيات",
      "apropos.p3": "التعاون",
      "apropos.p4": "الالتزام",
      "apropos.p5": "التميز الأكاديمي",
      "apropos.p6": "التضامن",
      "apropos.p7": "الانفتاح الفكري",
      "apropos.engTitleHtml": "<span>التزامنا</span>",
      "apropos.engText": "نلتزم بتوفير فضاء جدي ومحفّز وغني للطلبة، يسمح لهم بتطوير كفاءاتهم والاستعداد للعالم المهني في علم النفس.",

      "biblio.eyebrow": "موارد تعليمية",
      "biblio.titleHtml": "<em>مكتبتنا</em>",
      "biblio.sub": "موارد منتقاة لطلبة علم النفس، مصنّفة حسب الاختصاص.",
      "biblio.countSuffix": "موارد متاحة",
      "biblio.sidebarTitle": "الاختصاصات",
      "biblio.sNeuro": "علم النفس العصبي",
      "biblio.sClinique": "عيادي",
      "biblio.sDev": "النمو",
      "biblio.sTravail": "مهني",
      "biblio.sCognitive": "معرفي",
      "biblio.sTer": "أبحاث الطلبة",
      "biblio.secNeuroSous": "الدماغ، السلوك والوظائف المعرفية",
      "biblio.secCliniqueTitre": "علم النفس العيادي",
      "biblio.secCliniqueSous": "الصحة النفسية، العلاجات والأمراض",
      "biblio.secDevSous": "الطفولة، المراهقة ودورات الحياة",
      "biblio.secTravailSous": "التنظيم، الموارد البشرية والرفاه المهني",
      "biblio.secCognitiveSous": "الذاكرة، الانتباه، التفكير والإدراك",
      "biblio.ouvrir": "فتح",
      "biblio.emptySection": "لا توجد موارد بعد — عودوا قريبًا!",
      "biblio.ressource": "مورد",
      "biblio.ressources": "موارد",
      "biblio.terTitle": "أبحاث الطلبة",
      "biblio.terSub": "أبحاث كتبها طلبة نادي EFP",
      "biblio.terEmpty": "لا توجد أبحاث بعد — الأولى قادمة قريبًا!",
      "biblio.telecharger": "تحميل PDF",
      "biblio.pdfBientot": "PDF قريبًا",
      "biblio.travail": "بحث",
      "biblio.travaux": "أبحاث",

      "stages.eyebrow": "فرص مهنية",
      "stages.titleHtml": "أماكن <em>التربص</em>",
      "stages.sub": "اكتشف المؤسسات الشريكة لإجراء تربصك في علم النفس.",
      "stages.countSuffix": "أماكن متاحة",
      "stages.filterTitleHtml": "التصفية حسب <span>المجال</span>",
      "stages.fTous": "الكل",
      "stages.fClinique": "عيادي",
      "stages.fScolaire": "مدرسي",
      "stages.fTravail": "مهني وموارد بشرية",
      "stages.fSocial": "اجتماعي",
      "stages.fRecherche": "بحث",
      "stages.resultat": "نتيجة",
      "stages.resultats": "نتائج",
      "stages.empty": "لا يوجد مكان تربص لهذا المجال.",
      "stages.proposeTitle": "هل تعرف مكان تربص؟",
      "stages.proposeSub": "إذا أجريت تربصًا أو تعرف مؤسسة تستقبل طلبة علم النفس، شاركه مع مجتمع EFP.",
      "stages.proposeBtn": "اقترح مكانًا",

      "contact.eyebrow": "انضم إلى النادي",
      "contact.titleHtml": "<em>اتصل بنا</em>",
      "contact.sub": "سؤال أو اقتراح أو ترغب في الانضمام إلى مغامرة EFP؟ راسلنا!",
      "contact.coordTitleHtml": "<span>معلومات الاتصال</span>",
      "contact.email": "البريد الإلكتروني",
      "contact.adresse": "العنوان",
      "contact.adresseVal": "المعهد العالي للعلوم الإنسانية بتونس (ISSHT)",
      "contact.suivez": "تابعنا",
      "contact.faqTitleHtml": "الأسئلة <span>الشائعة</span>",
      "contact.faqQ1": "كيف أنضم إلى النادي؟",
      "contact.faqA1": "املأ الاستمارة المجاورة أو راسلنا عبر البريد الإلكتروني. سنعاود الاتصال بك خلال 48 ساعة للترحيب بك في مجتمع EFP.",
      "contact.faqQ2": "كيف أقترح مكان تربص؟",
      "contact.faqA2": "استخدم الاستمارة واختر \"اقتراح مكان تربص\" في قائمة الموضوع. سيتحقق فريقنا من المعلومات قبل النشر.",
      "contact.faqQ3": "كيف أشارك في الفعاليات؟",
      "contact.faqA3": "تابع صفحاتنا على وسائل التواصل الاجتماعي لتكون أول من يعلم بجميع فعالياتنا ومحاضراتنا وتكويناتنا.",
      "contact.faqQ4": "كيف أقدّم بحثًا؟",
      "contact.faqA4": "أرسل بحثك عبر البريد الإلكتروني إلى clubefp.issht@gmail.com مع كتابة \"تقديم بحث\" في الموضوع. بعد التحقق، سيُنشر في المكتبة.",
      "contact.formTitle": "أرسل رسالة",
      "contact.prenom": "الاسم",
      "contact.prenomPh": "اسمك",
      "contact.nom": "اللقب",
      "contact.nomPh": "لقبك",
      "contact.emailLabel": "البريد الإلكتروني",
      "contact.niveau": "المستوى الدراسي",
      "contact.niveauPh": "اختر مستواك",
      "contact.objet": "الموضوع",
      "contact.objetPh": "اختر موضوعًا",
      "contact.objRejoindre": "الانضمام إلى النادي",
      "contact.objBiblio": "سؤال حول المكتبة",
      "contact.objStage": "اقتراح مكان تربص",
      "contact.objTer": "تقديم بحث",
      "contact.objEvenement": "اقتراح فعالية",
      "contact.objPartenariat": "شراكة",
      "contact.objAutre": "أخرى",
      "contact.message": "الرسالة",
      "contact.messagePh": "اكتب رسالتك هنا...",
      "contact.submit": "إرسال الرسالة",
      "contact.success": "تم إرسال الرسالة! سنرد عليك خلال 48 ساعة.",
      "contact.alertMissing": "يرجى تعبئة الاسم والبريد الإلكتروني والرسالة على الأقل.",
    },
  };

  window.EFP_I18N = I18N;

  // ─────────────────────────────────────────
  //  ÉTAT : lecture depuis localStorage
  // ─────────────────────────────────────────
  function getTheme() {
    try { return localStorage.getItem('efp-theme') || 'dark'; } catch (e) { return 'dark'; }
  }
  function getLang() {
    try { return localStorage.getItem('efp-lang') || 'fr'; } catch (e) { return 'fr'; }
  }
  function setTheme(t) {
    try { localStorage.setItem('efp-theme', t); } catch (e) {}
    document.documentElement.setAttribute('data-theme', t);
  }
  function setLang(l) {
    try { localStorage.setItem('efp-lang', l); } catch (e) {}
    document.documentElement.setAttribute('lang', l);
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
  }

  // Traduction d'une clé pour la langue courante (avec repli sur le français)
  function t(key) {
    const lang = getLang();
    const dict = I18N[lang] || I18N.fr;
    return dict[key] !== undefined ? dict[key] : (I18N.fr[key] !== undefined ? I18N.fr[key] : key);
  }
  window.efpT = t;

  // Traduit un champ de données qui peut être :
  //   - une simple chaîne (toujours en français, ex: contenu existant)
  //   - un objet { fr: "...", en: "...", ar: "..." } pour du contenu multilingue
  // Permet aux futures ressources/stages ajoutés par l'utilisateur de choisir
  // d'être traduits (objet) ou de rester en français simple (chaîne).
  function tField(field) {
    if (field === null || field === undefined) return '';
    if (typeof field === 'string') return field;
    const lang = getLang();
    if (typeof field === 'object') {
      return field[lang] || field.fr || field.en || field.ar || '';
    }
    return String(field);
  }
  window.efpTField = tField;

  // ─────────────────────────────────────────
  //  APPLICATION DES TRADUCTIONS AU DOM
  // ─────────────────────────────────────────
  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
      el.setAttribute('title', t(el.getAttribute('data-i18n-aria')));
    });
    // Options de <select>
    document.querySelectorAll('option[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    // Bouton de langue actif
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('on', btn.getAttribute('data-lang') === getLang());
    });

    // Icône du bouton de thème
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'ti ' + (getTheme() === 'light' ? 'ti-moon' : 'ti-sun');
    }

    // Permet aux pages qui construisent du contenu dynamique (bibliothèque,
    // stages...) de se reconstruire dans la nouvelle langue.
    window.dispatchEvent(new CustomEvent('efp-lang-changed', { detail: { lang: getLang() } }));
  }
  window.efpApplyI18n = applyI18n;

  // ─────────────────────────────────────────
  //  INITIALISATION DES CONTRÔLES (widget nav)
  // ─────────────────────────────────────────
  function initControls() {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = getTheme() === 'light' ? 'dark' : 'light';
        setTheme(next);
        applyI18n();
      });
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setLang(btn.getAttribute('data-lang'));
        applyI18n();
      });
    });
  }

  // Applique immédiatement le thème/langue stockés (le <head> le fait déjà
  // en amont pour éviter le flash, mais on s'assure ici que les attributs
  // sont bien posés même si le script inline du head a été omis).
  setTheme(getTheme());
  setLang(getLang());

  document.addEventListener('DOMContentLoaded', () => {
    initControls();
    applyI18n();
  });

})();
