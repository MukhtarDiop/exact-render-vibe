export type Flashcard = {
  number: string;
  category: "business" | "famille";
  title: string;
  body: string;
  change: string;
  tools?: string;
  warning?: string;
};

export const flashcards: Flashcard[] = [
  {
    number: "01",
    category: "business",
    title: "Ta mémoire d'entreprise, enfin externalisée",
    body: "Tu as dit quoi, à qui, quand ? Tu fouilles dans tes e-mails depuis 20 minutes pour retrouver ce que tu avais promis à cette cliente en janvier. C'est de l'énergie cognitive pure — et gaspillée.\n\nEn connectant l'IA à tes outils de communication (Gmail, Outlook, Slack, Telegram…), tu peux lui demander en langage naturel : « Qu'est-ce que j'avais convenu avec Sophie en janvier 2026 ? » ou « Laquelle de mes clientes m'avait demandé une collaboration ? ». Elle retrouve, cite, résume. Elle peut aussi t'alerter sur des fils de discussion sans réponse, identifier des clients que tu n'as pas relancés, ou regrouper toutes les demandes similaires sur une période.",
    change: "Tu arrêtes de garder tout en tête, et tu retrouves facilement des informations qui te prenaient énormément de temps. L'IA devient ton cerveau externe.",
    tools: "Claude connecté à Gmail via Make ou Zapier",
  },
  {
    number: "02",
    category: "business",
    title: "Tes contrats, générés et envoyés en toute autonomie",
    body: "Créer un contrat personnalisé pour chaque nouvelle cliente cumule tout ce qu'on n'aime pas : paperasse, concentration, précision et répétition. Résultat ? On repousse, on bâcle, ou on fait mauvaise impression dès l'onboarding.\n\nConstruis un workflow où il te suffit de renseigner quelques informations clés — nom, prénom, adresse, durée du contrat, montant, clauses à inclure ou exclure — et l'IA génère le contrat complet, prérempli. Il est ensuite envoyé automatiquement pour signature électronique, puis classé dans le bon dossier. Le workflow peut aussi intégrer une relance automatique si le contrat n'est pas signé sous 48h.",
    change: "Tu récupères 30 à 45 minutes par nouveau contrat, et tu élimines cette frustration que réveille chaque nouvel accueil d'une cliente.",
    tools: "Make + Claude + DocuSign + Notion",
  },
  {
    number: "03",
    category: "business",
    title: "Prendre des décisions business avec des chiffres, sans être comptable",
    body: "Tu dois décider si tu augmentes tes prix, si tu lances une nouvelle offre, si tu embauches. Tu as des données éparpillées, mais les analyser te demande un effort mental que tu n'as plus. Alors tu décides à l'instinct.\n\nL'IA peut ingérer tes données brutes (CA mensuel, nombre de clientes, taux de rétention, coûts fixes…) et répondre à tes questions : « Quel est mon seuil de rentabilité si j'augmente mes prix de 20% ? », « Quelle offre me génère le plus de revenus par heure travaillée ? », « Si je perds 2 clientes par mois, combien de temps avant d'être dans le rouge ? »",
    change: "Tu passes de « je décide au feeling » à « je décide avec clarté » — sans passer des heures dans des tableaux Excel.",
    warning: "Pour tes finances personnelles complexes ou tes décisions fiscales, consulte toujours ton comptable. L'IA est un outil d'aide à la réflexion, pas un conseiller financier agréé.",
  },
  {
    number: "04",
    category: "business",
    title: "Une FAQ qui répond à ta place",
    body: "Tu réponds pour la 77ème fois à la même question. Et pire encore, chaque réponse est rédigée différemment, te prend du temps, et alourdit ta charge cognitive.\n\nDemande à l'IA d'analyser tes dernières semaines de discussion pour extraire les questions récurrentes. Elle peut ensuite t'indiquer ce que cette récurrence révèle (un manque de clarté sur ton offre ? une incompréhension sur ton processus ?) et rédiger une FAQ structurée, avec ton ton. Tu pourras l'intégrer à ton site, tes e-mails de bienvenue ou tes devis. En bonus : elle rédige des réponses types que tu n'as plus qu'à copier-coller.",
    change: "Tu arrêtes de répéter. Tu clarifies ta communication. Tu récupères du temps sur chaque échange. Et cerise sur le gâteau, tu as un processus clair que tu pourras facilement déléguer.",
  },
  {
    number: "05",
    category: "business",
    title: "L'audit de tes abonnements que tu n'as jamais fait",
    body: "Tu es abonnée à Calendly, Zoom, Canva Pro, Notion, Kajabi, Acuity, Mailerlite, Loom, Slack, Dropbox… La liste est longue et la facture aussi. Mais comparer et rationaliser tout ça te demande un temps et une énergie que tu n'as jamais.\n\nListe à l'IA tous tes abonnements avec leur coût mensuel, leur fréquence d'utilisation et ce que tu en fais concrètement. Demande-lui d'identifier les doublons de fonctionnalités, de suggérer des alternatives moins chères ou des outils qui combinent plusieurs fonctionnalités, et de prioriser ce que tu pourrais supprimer sans impact. Elle peut aussi te proposer un ordre de migration progressif pour ne pas tout changer d'un coup.",
    change: "Certaines entrepreneures réduisent leur stack technologique de 20 à 50% — en argent ET en charge cognitive liée à la navigation entre les outils.",
  },
  {
    number: "06",
    category: "business",
    title: "Tes procédures internes, créées rapidement",
    body: "Tu sais exactement comment tu fais les choses. Mais le traduire en procédure écrite pour pouvoir déléguer ? Bonjour la page blanche paralysante.\n\nNe rédige pas. Parle ou filme ton écran. Dans l'enregistrement, décris à voix haute et sans filtre chaque étape de ce que tu fais — comme si tu expliquais à quelqu'un qui te regarde faire. Sois naturelle et répète-toi au besoin. Envoie ensuite l'enregistrement transcrit à l'IA et demande-lui d'en faire une SOP (Standard Operating Procedure) claire, structurée, avec des étapes numérotées et des points de contrôle.",
    change: "En moins de 30 minutes, tu génères une procédure qui aurait pris plus de 2 heures à écrire — prête à être donnée à une assistante ou une prestataire.",
    tools: "Loom, Otter.ai, Whisper, ou transcription directe dans Claude",
  },
  {
    number: "07",
    category: "business",
    title: "Tes recherches résumées, sans te noyer",
    body: "Pour être à jour dans ton domaine, tu dois lire 10 articles, regarder 3 vidéos YouTube d'une heure, écouter 2 podcasts et lire un rapport PDF de 70 pages. Tu ne sais jamais par quoi commencer, alors tu ne lis rien — ou tu t'épuises.\n\nNotebookLM (de Google) te permet d'importer tous ces contenus et d'interagir avec eux comme avec un assistant qui les a tous lus à ta place. Demande-lui : le résumé de chaque source en 5 points, les informations qui reviennent dans plusieurs sources, les contradictions entre elles, ou une synthèse finale sous forme de mini-guide. Il peut aussi générer un podcast audio synthétique sur le sujet, des fiches mémo ou un quizz pour ancrer l'apprentissage.",
    change: "Tu absorbes l'essentiel d'une semaine de lecture et de visionnement en 20 minutes. Sans sacrifier la qualité de l'information.",
    tools: "NotebookLM (gratuit, de Google)",
  },
  {
    number: "08",
    category: "business",
    title: "Une boîte mail qui sort du chaos",
    body: "Des newsletters auxquelles tu ne te souviens même plus t'être abonnée, des offres promotionnelles, des notifications en tout genre… et perdues là-dedans, les vraies informations importantes.\n\nClaude in Chrome (l'extension navigateur de Claude) peut scanner ta boîte mail, identifier les e-mails promotionnels et marketing, les regrouper par expéditeur ou catégorie, et te proposer une liste de ce qui peut être supprimé en masse. Tu gardes le contrôle sur la décision finale, mais sans avoir à ouvrir chaque e-mail un par un. Une fois fait, tu peux aussi lui demander de créer des règles de filtrage pour que ta boîte reste organisée automatiquement à l'avenir.",
    change: "Ce que tu repousses depuis des mois (voire des années) peut être fait en moins d'une heure. Et retrouver une boîte mail ordonnée, c'est un soulagement mental immédiat et concret.",
    tools: "Claude in Chrome (extension navigateur)",
  },
  {
    number: "09",
    category: "famille",
    title: "« On mange quoi ? » — La question enfin réglée",
    body: "Cette question, à 17h30, après une journée chargée, a un pouvoir de nuisance mental sous-estimé. Tu ouvres le frigo, tu regardes ce qu'il y a, et ton cerveau déjà saturé se retrouve face à une décision de plus.\n\nPrends en photo le contenu de ton réfrigérateur et de tes placards, ou liste rapidement les ingrédients disponibles. Ajoute tes contraintes : temps de préparation maximum, nombre de personnes, préférences ou allergies. En quelques secondes, tu as plusieurs propositions faisables avec ce que tu as. Tu peux même demander à l'IA de planifier les repas de toute la semaine en optimisant les ingrédients, et d'en déduire automatiquement ta liste de courses.",
    change: "Une micro-décision quotidienne qui pèse plus lourd qu'on ne le croit — éliminée.",
  },
  {
    number: "10",
    category: "famille",
    title: "Aider ton enfant avec ses devoirs, même quand tu ne te rappelles plus tes cours de maths",
    body: "Les maths, la conjugaison au subjonctif, les fameuses règles de chimie… Tu as l'impression d'avoir tout oublié et tu ne veux pas lui donner de mauvaises explications.\n\nPhotographie l'exercice avec ton téléphone et envoie-le à l'IA. Demande-lui non pas seulement la réponse, mais la démarche complète, expliquée étape par étape, dans un langage adapté au niveau de ton enfant. Tu peux même lui demander de t'expliquer d'abord à toi, pour que tu puisses ensuite guider ton enfant plutôt que de simplement lui lire la solution.",
    change: "Un moment potentiellement stressant devient un moment de pure connexion avec ton enfant.",
  },
];

export const principles = [
  {
    n: "01",
    title: "Partage avec intention",
    body: "Sois consciente de ce que tu confies à l'IA. Une fois cette clarté posée, ton imagination devient ta seule limite sur tout ce qu'elle peut faire pour toi.",
  },
  {
    n: "02",
    title: "Ne crée pas l'effet inverse",
    body: "Tu utilises l'IA pour gagner du temps, augmenter ta créativité et élargir le champ des possibles. Malheureusement, elle peut vite devenir une nouvelle source de distraction : recherche infinie d'outils, de nouveautés, de possibilités. Le temps récupéré, mets-le là où ça compte vraiment pour toi.",
  },
  {
    n: "03",
    title: "Qualité IN, qualité OUT",
    body: "L'IA est aussi pertinente que ce que tu lui donnes. Plus tu lui fournis des informations précises, plus tu définis clairement son rôle et ce que tu attends d'elle — meilleur sera le résultat.",
  },
  {
    n: "04",
    title: "Tu restes maîtresse de tes données",
    body: "C'est toi qui décides ce que tu partages, les dossiers auxquels tu donnes accès, ce que tu gardes privé. L'IA travaille avec ce que tu lui confies — pas plus.",
  },
];
