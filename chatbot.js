// ============================================================
//  CLUB EFP — ASSISTANT CHATBOT
//  Assistant simple basé sur des mots-clés (pas un vrai LLM,
//  mais gratuit, instantané, et sans compte externe).
//
//  Pour ajouter une nouvelle question/réponse : copie un bloc
//  dans KB ci-dessous et adapte les mots-clés + la réponse.
//  Comme pour ressources.js, la réponse peut être une simple
//  chaîne en français, ou un objet { fr, en, ar } pour être
//  traduite dans les 3 langues.
// ============================================================

(function () {

  function tr(field) {
    return (window.efpTField && window.efpTField(field)) || (typeof field === 'string' ? field : field.fr);
  }
  function t(key) {
    return (window.efpT && window.efpT(key)) || key;
  }

  // ─── BASE DE CONNAISSANCES ───
  const KB = [
    {
      keywords: ["rejoindre", "join", "inscri", "adherer", "adhesion", "devenir membre", "membre"],
      answer: {
        fr: "Pour rejoindre le Club EFP, remplis le formulaire sur la page Contact — on te recontacte sous 48h !",
        en: "To join Club EFP, fill out the form on the Contact page — we'll get back to you within 48h!",
        ar: "للانضمام إلى نادي EFP، املأ الاستمارة في صفحة اتصل بنا — سنتواصل معك خلال 48 ساعة!",
      },
      link: { url: "contact.html", label: { fr: "Aller au formulaire", en: "Go to the form", ar: "الذهاب إلى الاستمارة" } },
    },
    {
      keywords: ["bibliotheque", "library", "livre", "book", "ressource", "pdf", "cours", "manuel"],
      answer: {
        fr: "La bibliothèque regroupe des ressources classées par spécialité : neuropsychologie, clinique, développement, travail, cognitive. Tu peux aussi y trouver les TER des étudiants.",
        en: "The library has resources organized by specialty: neuropsychology, clinical, developmental, work, cognitive. You'll also find student research papers there.",
        ar: "تضم المكتبة موارد مصنفة حسب الاختصاص: عصبي نفسي، عيادي، نمو، مهني، معرفي. ستجد فيها أيضاً أبحاث الطلبة.",
      },
      link: { url: "bibliotheque.html", label: { fr: "Voir la bibliothèque", en: "See the library", ar: "عرض المكتبة" } },
    },
    {
      keywords: ["stage", "internship", "tribas", "lieu de stage", "hopital", "placement"],
      answer: {
        fr: "La page « Lieux de stage » liste des structures partenaires filtrables par domaine (clinique, scolaire, travail, social). Tu peux aussi proposer un nouveau lieu via le formulaire de contact.",
        en: "The \"Internship placements\" page lists partner organizations filterable by field (clinical, school, work, social). You can also suggest a new placement via the contact form.",
        ar: "تعرض صفحة «أماكن التربص» مؤسسات شريكة قابلة للتصفية حسب المجال (عيادي، مدرسي، مهني، اجتماعي). يمكنك أيضاً اقتراح مكان جديد عبر استمارة الاتصال.",
      },
      link: { url: "stages.html", label: { fr: "Voir les stages", en: "See placements", ar: "عرض أماكن التربص" } },
    },
    {
      keywords: ["ter", "recherche", "memoire", "these", "soumettre"],
      answer: {
        fr: "Pour soumettre un TER, envoie ton travail à clubefp.issht@gmail.com avec l'objet « Soumission TER ». Après vérification, il sera publié dans la bibliothèque.",
        en: "To submit a research paper, send it to clubefp.issht@gmail.com with subject \"TER Submission\". After review, it'll be published in the library.",
        ar: "لتقديم بحث، أرسله إلى clubefp.issht@gmail.com مع كتابة «تقديم بحث» في الموضوع. بعد التحقق، سيُنشر في المكتبة.",
      },
      link: { url: "bibliotheque.html#ter", label: { fr: "Voir les TER", en: "See research papers", ar: "عرض الأبحاث" } },
    },
    {
      keywords: ["contact", "email", "mail", "adresse", "joindre", "appeler", "telephone"],
      answer: {
        fr: "Tu peux nous écrire à clubefp.issht@gmail.com, ou passer par le formulaire sur la page Contact. Nous sommes basés à l'ISSHT (Institut Supérieur des Sciences Humaines de Tunis).",
        en: "You can email us at clubefp.issht@gmail.com, or use the form on the Contact page. We're based at ISSHT (Institut Supérieur des Sciences Humaines de Tunis).",
        ar: "يمكنك مراسلتنا على clubefp.issht@gmail.com، أو استخدام الاستمارة في صفحة اتصل بنا. نحن في المعهد العالي للعلوم الإنسانية بتونس (ISSHT).",
      },
      link: { url: "contact.html", label: { fr: "Page Contact", en: "Contact page", ar: "صفحة الاتصال" } },
    },
    {
      keywords: ["qui", "club efp", "c'est quoi", "quest ce", "about", "mission", "objectif", "presentation"],
      answer: {
        fr: "Le Club EFP (Empreinte des Futurs Psychologues) est un club universitaire pour les étudiants en psychologie : conférences, bibliothèque numérique, aide aux stages et communauté étudiante.",
        en: "Club EFP (Empreinte des Futurs Psychologues) is a university club for psychology students: talks, digital library, internship support and student community.",
        ar: "نادي EFP (إمبرانت دي فوتور بسيكولوغ) هو نادٍ جامعي لطلبة علم النفس: محاضرات، مكتبة رقمية، مساعدة في التربص ومجتمع طلابي.",
      },
      link: { url: "a-propos.html", label: { fr: "En savoir plus", en: "Learn more", ar: "اعرف أكثر" } },
    },
    {
      keywords: ["evenement", "event", "conference", "formation", "atelier"],
      answer: {
        fr: "On organise régulièrement des conférences et formations. Suis nos réseaux sociaux (liens sur la page Contact) pour être informé en avant-première !",
        en: "We regularly organize talks and workshops. Follow our social media (links on the Contact page) to get early updates!",
        ar: "ننظم بانتظام محاضرات وتكوينات. تابع صفحاتنا على وسائل التواصل الاجتماعي (روابط في صفحة الاتصال) لتكون أول من يعلم!",
      },
      link: { url: "contact.html", label: { fr: "Réseaux sociaux", en: "Social media", ar: "وسائل التواصل" } },
    },
    {
      keywords: ["gratuit", "prix", "payant", "cout", "cotisation"],
      answer: {
        fr: "Toutes les ressources et activités du Club EFP sont gratuites pour les étudiants !",
        en: "All Club EFP resources and activities are free for students!",
        ar: "جميع موارد وأنشطة نادي EFP مجانية للطلبة!",
      },
    },
    {
      keywords: ["neuro", "cerveau", "brain"],
      answer: { fr: "La section Neuropsychologie de la bibliothèque couvre le cerveau, le comportement et les fonctions cognitives.", en: "The Neuropsychology section covers the brain, behavior and cognitive functions.", ar: "قسم علم النفس العصبي يغطي الدماغ، السلوك والوظائف المعرفية." },
      link: { url: "bibliotheque.html#neuro", label: { fr: "Voir la section", en: "See section", ar: "عرض القسم" } },
    },
    {
      keywords: ["merci", "thanks", "shukran"],
      answer: { fr: "Avec plaisir ! N'hésite pas si tu as d'autres questions 🙂", en: "You're welcome! Feel free to ask more questions 🙂", ar: "بكل سرور! لا تتردد إذا كان لديك أسئلة أخرى 🙂" },
    },
  ];

  function normalize(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function findAnswer(query) {
    const q = normalize(query);
    let best = null, bestScore = 0;
    KB.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(k => { if (q.includes(normalize(k))) score++; });
      if (score > bestScore) { bestScore = score; best = entry; }
    });
    return best;
  }

  // ─── CONSTRUCTION DU WIDGET ───
  function buildWidget() {
    const btn = document.createElement('button');
    btn.id = 'efp-chat-btn';
    btn.setAttribute('aria-label', t('chatbot.open'));
    btn.innerHTML = '<i class="ti ti-message-chatbot" aria-hidden="true"></i><i class="ti ti-x" aria-hidden="true"></i>';

    const panel = document.createElement('div');
    panel.id = 'efp-chat-panel';
    panel.innerHTML = `
      <div id="efp-chat-header">
        <div class="avatar"><i class="ti ti-robot-face" aria-hidden="true"></i></div>
        <div>
          <div class="title" data-i18n="chatbot.title">Assistant EFP</div>
          <div class="sub" data-i18n="chatbot.subtitle">Pose-moi une question</div>
        </div>
      </div>
      <div id="efp-chat-messages"></div>
      <div class="efp-quick" id="efp-chat-quick"></div>
      <form id="efp-chat-form">
        <input type="text" id="efp-chat-input" data-i18n-ph="chatbot.placeholder" placeholder="Pose ta question..." autocomplete="off" />
        <button type="submit" id="efp-chat-send" aria-label="Envoyer"><i class="ti ti-send" aria-hidden="true"></i></button>
      </form>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    const messages = panel.querySelector('#efp-chat-messages');
    const quick = panel.querySelector('#efp-chat-quick');
    const input = panel.querySelector('#efp-chat-input');
    const form = panel.querySelector('#efp-chat-form');

    function addMsg(text, who, link) {
      const div = document.createElement('div');
      div.className = 'efp-msg ' + who;
      div.textContent = text;
      if (link) {
        const wrap = document.createElement('div');
        wrap.className = 'efp-msg-links';
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = tr(link.label);
        wrap.appendChild(a);
        div.appendChild(wrap);
      }
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    function respond(query) {
      addMsg(query, 'user');
      const entry = findAnswer(query);
      setTimeout(() => {
        if (entry) {
          addMsg(tr(entry.answer), 'bot', entry.link);
        } else {
          addMsg(t('chatbot.fallback'), 'bot', { url: 'contact.html', label: { fr: 'Nous contacter', en: 'Contact us', ar: 'اتصل بنا' } });
        }
      }, 350);
    }

    function renderQuick() {
      quick.innerHTML = '';
      const suggestions = [
        { label: t('nav.bibliotheque').replace(' ▾', ''), q: 'bibliotheque' },
        { label: t('nav.stages'), q: 'stage' },
        { label: t('index.discover') || t('nav.accueil'), q: 'rejoindre' },
      ];
      suggestions.forEach(s => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = s.label;
        b.addEventListener('click', () => respond(s.q));
        quick.appendChild(b);
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      respond(val);
      input.value = '';
    });

    btn.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      if (isOpen && messages.children.length === 0) {
        addMsg(t('chatbot.welcome'), 'bot');
        renderQuick();
        input.focus();
      }
    });

    window.addEventListener('efp-lang-changed', () => {
      renderQuick();
    });
  }

  document.addEventListener('DOMContentLoaded', buildWidget);
})();
