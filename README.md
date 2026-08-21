# Site du Club EFP — Empreinte des Futurs Psychologues

Guide pour la personne (ou l'équipe) qui reprend le site après toi. Pas besoin d'être développeur — tout se fait en modifiant des fichiers texte simples.

---

## 1. Mettre le site en ligne avec GitHub Pages (gratuit)

Si ce n'est pas encore fait :

1. Crée un compte sur [github.com](https://github.com) (gratuit).
2. Clique sur **New repository**, donne-lui un nom (ex : `club-efp`), laisse-le **Public**, ne coche aucune case (pas de README auto).
3. Depuis ton ordinateur, dans le dossier du site, lance :
   ```bash
   git remote add origin https://github.com/TON-COMPTE/club-efp.git
   git branch -M main
   git push -u origin main
   ```
4. Sur GitHub, va dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`, clique **Save**.
5. Après 1-2 minutes, ton site est en ligne à l'adresse `https://TON-COMPTE.github.io/club-efp/`.

Toute modification poussée avec `git push` met le site à jour automatiquement en 1-2 minutes.

---

## 2. Faire la passation au président/à la présidente suivant(e)

C'est la partie importante : **pas besoin de renvoyer les fichiers par mail ou clé USB.** Tout reste sur GitHub, versionné, avec historique complet.

1. Va dans le repository sur GitHub → **Settings → Collaborators**.
2. Clique **Add people**, entre le nom d'utilisateur ou l'email GitHub de la personne suivante.
3. Elle accepte l'invitation → elle peut maintenant modifier le site directement.
4. Si tu veux lui transférer complètement la propriété du repository (recommandé en fin de mandat) : **Settings → tout en bas → Transfer ownership**.

La personne suivante peut alors :
- Modifier les fichiers directement sur GitHub.com (bouton crayon ✏️ sur chaque fichier, pas besoin d'installer quoi que ce soit), **ou**
- Cloner le repo sur son ordinateur avec `git clone` si elle est plus à l'aise techniquement.

---

## 3. Structure des fichiers

```
index.html          → page d'accueil
a-propos.html        → page "À propos"
bibliotheque.html     → page bibliothèque (livres, TER)
stages.html          → page lieux de stage
evenements.html       → page événements (photos, annonce, publications)
contact.html         → page contact

ressources.js         → LISTE DES LIVRES/RESSOURCES (à modifier souvent)
stages.js             → LISTE DES LIEUX DE STAGE (à modifier souvent)
evenements.js          → ÉVÉNEMENTS PASSÉS + ANNONCE + PUBLICATIONS (à modifier souvent)
events-photos/         → dossier des photos des événements

theme-lang.js         → moteur du thème clair/sombre + langues FR/EN/AR
theme.css             → styles du sélecteur de thème/langue
chatbot.js             → moteur de l'assistant (bulle de chat en bas à droite)
chatbot.css            → styles de l'assistant

logo.png               → logo version blanche (mode sombre)
logo-noir.png          → logo version noire (mode clair)
```

**Pour le contenu du quotidien (ajouter un livre, un stage), tu ne touches quasiment jamais aux fichiers `.html`.** Tout se passe dans `ressources.js` et `stages.js`.

---

## 4. Ajouter un livre / une ressource

Ouvre `ressources.js`, trouve la section correspondant à la spécialité (neuro, clinique, dev, travail, cognitive), et copie-colle un bloc en le modifiant :

```js
{
  specialite: "clinique",           // neuro | clinique | dev | travail | cognitive
  tag: "Manuel",                    // ce qui s'affiche en badge (Manuel, Référence, DSM-5...)
  titre: "Titre du livre",
  auteur: "Nom de l'auteur",
  description: "",
  lien: "https://lien-vers-le-pdf.com/fichier.pdf"
},
```

Pour un TER, même logique tout en bas du fichier dans la liste `TER` :

```js
{
  titre: "Titre du travail",
  auteur: "Nom, Prénom",
  annee: "2025",
  specialite: "Psychologie clinique",
  resume: "Résumé en 1-2 phrases.",
  fichier: "nom_du_fichier.pdf"   // laisse vide "" si pas encore de PDF
},
```

---

## 5. Ajouter un lieu de stage

Ouvre `stages.js`, copie un bloc existant et modifie-le :

```js
{
  nom: "Nom de la structure",
  type: "Type d'établissement",
  categorie: "clinique",   // clinique | scolaire | travail | social | recherche
  ville: "Ville",
  duree: "3 à 6 mois",
  niveau: "Master 1 & 2",
  contact: "Comment contacter",
  icon: "ti-building-hospital"   // voir tabler-icons.io pour d'autres icônes
},
```

---

## 6. Rendre un livre/stage disponible en anglais et en arabe (optionnel)

Par défaut, un texte simple (`titre: "Mon livre"`) reste en français quelle que soit la langue choisie sur le site — c'est normal et ça marche très bien.

Si tu veux qu'un élément précis soit traduit, remplace la chaîne simple par un objet :

```js
titre: { fr: "Mon livre", en: "My book", ar: "كتابي" },
```

Ça marche pour n'importe quel champ (`titre`, `auteur`, `description`, `nom`, `type`, `ville`...). Pas obligatoire — à faire seulement si tu as le temps/l'envie de traduire.

---

## 5bis. Gérer la page Événements

Ouvre `evenements.js`. Trois listes à modifier :

**Annoncer le prochain événement** — remplace `const UPCOMING = null;` par l'exemple fourni juste en dessous dans le fichier (copie-colle le bloc commenté et remplis-le). Remets `UPCOMING = null;` une fois l'événement passé.

**Ajouter un événement passé** — copie un bloc dans `EVENTS` :
```js
{
  nom: "Titre de l'événement",
  date: "12/05/2026",
  duree: "2 heures",
  cible: "Étudiants du club",
  participants: 30,
  description: "Description courte de l'événement.",
  photos: ["nom-photo1.jpg", "nom-photo2.jpg"],   // ajoute les images dans events-photos/
},
```

**Relayer un post Instagram/Facebook** — copie un bloc dans `POSTS` :
```js
{
  image: "capture-du-post.jpg",   // ajoute l'image dans events-photos/
  legende: "Texte qui accompagne le post",
  plateforme: "instagram",         // instagram | facebook | tiktok | linkedin
  lien: "https://www.instagram.com/p/XXXXXXXXX/",
  date: "12/05/2026"
},
```

Pour ajouter des photos : uploade-les dans le dossier `events-photos/` sur GitHub (même méthode que pour les autres fichiers), puis référence leur nom exact dans `evenements.js`.

---

## 6bis. Modifier l'assistant chatbot

Une petite bulle de chat apparaît en bas à droite du site. C'est un assistant simple à base de mots-clés (pas une vraie IA type ChatGPT — ça reste gratuit et fonctionne sans compte externe).

Pour ajouter une nouvelle question/réponse : ouvre `chatbot.js`, trouve le tableau `KB` en haut, copie un bloc et modifie-le :

```js
{
  keywords: ["mot1", "mot2", "synonyme"],   // mots qui déclenchent cette réponse
  answer: {
    fr: "Réponse en français",
    en: "Answer in English",
    ar: "الجواب بالعربية",
  },
  link: { url: "contact.html", label: { fr: "Nous contacter", en: "Contact us", ar: "اتصل بنا" } }  // optionnel
},
```

Si tu veux un jour un vrai chatbot IA (qui comprend n'importe quelle question comme ChatGPT), il faudra passer par un service externe payant/à quota (ex: ChatbotGen, Voiceflow) car GitHub Pages ne permet pas d'héberger une clé API en sécurité — demande à l'IA qui reprend ce projet de t'aider à le brancher le moment venu.

---

## 7. Modifier les textes fixes du site (menus, boutons, titres de pages)

Ces textes ne sont pas dans les `.html` mais centralisés dans **`theme-lang.js`**, en haut du fichier, dans un dictionnaire `I18N` avec 3 blocs : `fr`, `en`, `ar`. Cherche la clé (ex. `"nav.accueil"`) et change le texte en face pour chaque langue.

---

## 8. Tester en local avant de mettre en ligne

Double-clique simplement sur `index.html` — il s'ouvre dans le navigateur. Pour naviguer normalement entre les pages (recommandé), lance un petit serveur local depuis le dossier :

```bash
python3 -m http.server 8000
```
puis ouvre `http://localhost:8000` dans le navigateur.

---

## 9. Besoin d'aide ?

Toute IA (Claude, ChatGPT...) peut relire ce projet et t'aider si tu lui montres ce README + les fichiers du dossier. La structure a été pensée pour rester simple à reprendre sans compétences techniques poussées.
