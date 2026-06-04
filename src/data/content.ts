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
    title: "L'IA, ton deuxième cerveau",
    body: "Tu fouilles depuis 20 minutes dans tes e-mails pour retrouver ce que tu avais dit à une de tes clientes, il y a quelques mois de cela. C'est de l'énergie cognitive purement gaspillée.\n\nEn connectant l'IA à tes outils de communication (Gmail, Outlook, Slack, Telegram…), tu peux lui demander : \n« Qu'est-ce que j'avais convenu avec Sophie en janvier 2026 ? »\nou \n« Laquelle de mes clientes m'avait demandé une collaboration ? ». \nElle va chercher l'information pour toi et te faire un résumé. \nEt cela est valable pour toutes autres informations que tu cherches dans ton entreprise (mots de passe, contrat, processus, ...)\n",
    change: "Tu arrêtes de garder tout en tête, et tu as accès plus rapidement et plus facilement à toutes les informations de ton business. L'IA devient ton cerveau externe.",
    tools: "Claude connecté à Gmail, Make, Zapier ou N8N",
  },
  {
    number: "02",
    category: "business",
    title: "Tes contrats, générés et envoyés automatiquement",
    body: "On aime avoir des clients, mais presque personne n'aime remplir le contrat.\nRésultat ? On repousse, on bâcle et on finit par faire mauvaise impression dès l'onboarding.\n\nAvec l'IA, tu peux créer un workflow où il te suffit de renseigner quelques informations clés — nom, prénom, adresse, durée du contrat, montant, clauses à inclure ou exclure — et l'IA génère le contrat complet, pré-rempli. \n\nIl est ensuite envoyé automatiquement pour signature électronique, puis classé dans le bon dossier (pendant que tu sirotes ta tisane préférée).\n\nCerise sur le gâteau, l'automatisation peut aussi intégrer une relance automatique si le contrat n'est pas signé sous 48h.\n",
    change: "Tu récupères 30 à 45 minutes par nouveau contrat, et tu élimines cette frustration que réveille chaque nouvel accueil d'une cliente.",
    tools: "Make + Claude + DocuSign + Notion",
  },
  {
    number: "03",
    category: "business",
    title: "Prendre des décisions business comme une vraie CEO",
    body: "Tu dois décider si tu augmentes tes prix, si tu lances une nouvelle offre, si tu as la capacité financière d\"embaucher plusieurs personnes. \nTes données sont éparpillées, et les analyser te demande un effort mental que tu n'as plus. Alors tu décides souvent sans réelle stratégie derrière.\n\nL'IA peut ingérer tes données brutes (CA mensuel, nombre de clientes, taux de rétention, coûts fixes…) et répondre à tes questions : \n« Quel est mon seuil de rentabilité si j'augmente mes prix de 20% ? »\n« Quelle offre me génère le plus de revenus par heure travaillée ? »\n« Si je perds 2 clientes par mois, combien de temps avant d'être dans le rouge ? »\n...\n",
    change: "Tu passes de « je décide au feeling » à « je décide avec clarté » — sans passer des heures dans des tableaux Excel.",
    warning: "Pour tes finances personnelles complexes ou tes décisions fiscales, consulte toujours ton comptable. L'IA est un outil d'aide à la réflexion, pas un conseiller financier agréé.",
  },
  {
    number: "04",
    category: "business",
    title: "Une FAQ qui répond à toutes les questions de tes clientes, à ta place",
    body: "Tu réponds pour la 1777ème fois à la même question. Et pire encore, chaque réponse est rédigée différemment, te prend du temps, et alourdit ta charge mentale.\n\nDemande à l'IA :\n     - d'analyser tes dernières semaines de discussion pour extraire les questions récurrentes. \n     - de t'indiquer ce que cette récurrence révèle (un manque de clarté sur ton offre ? une absence de systèmes et de processus ? ) \n     - de rédiger une FAQ structurée, avec ton ton. \n\nTu pourras l'intégrer à ton site, tes e-mails de bienvenue, tes devis, ton WhatsApp, .... \n",
    change: "- Tu arrêtes de répondre 1777 fois à la même question. \n- Tu clarifies ta communication. \n- Tu récupères du temps sur chaque discussion. \n- Et cerise sur le gâteau, tu as un processus clair que tu pourras facilement déléguer.\n",
  },
  {
    number: "05",
    category: "business",
    title: "Optimisation de tes abonnements",
    body: "Tu es abonnée à Calendly, Zoom, Canva Pro, Notion, Kajabi, Mailerlite, Loom, Claude, Dropbox… \nLa liste est longue et la facture aussi. Mais comparer et rationaliser tout ça te demande un temps et une énergie énorme. Donc, tu laisses comme et tu continues à payer cher tous les mois.\n\nCe que tu peux faire : \n- lister à l'IA tous tes abonnements avec leur coût mensuel, leur fréquence d'utilisation et ce que tu en fais concrètement. \n- lui demander d'identifier les doublons de fonctionnalités, de suggérer des alternatives moins chères ou des outils qui combinent plusieurs fonctionnalités\n- prioriser ce que tu pourrais supprimer sans impact sur ton business. \n",
    change: "Certaines entrepreneures réduisent leur stack technologique de 20 à 50% — en argent ET en charge cognitive liée à la navigation entre plusieurs outils.",
  },
  {
    number: "06",
    category: "business",
    title: "Tes procédures internes, créées rapidement",
    body: "Tu sais exactement comment tu réalises tes tâches. Mais pour les traduire en procédure écrite et pouvoir déléguer ? Bonjour le syndrome de la page blanche.\n\nNe t'inquiètes pas : tu n'as pas besoin de rédiger tes processus. \nFais un enregistrement audio ou filme ton écran pendant que tu décris, sans filtre, chaque étape de ce que tu fais (comme si tu expliquais à ton assistante). Sois naturelle et répète-toi au besoin. \n\nEnvoie ensuite l'enregistrement transcrit à l'IA et demande-lui d'en faire une SOP (Standard Operating Procedure) claire, structurée, avec des étapes numérotées. Ensuite, tu passes dessus pour faire les dernières corrections, et le tour est joué !\n\nTu peux lui demander aussi de te créer un visuel bien clair de ton processus si tu es plus visuel.\n",
    change: "En moins de 45 minutes, tu génères une procédure qui aurait pris plus de 3 heures à réaliser — prête à être donnée à ton assistante ou ton prestataire.",
    tools: "Loom, Otter.ai, Whisper, ou transcription directe dans Claude",
  },
  {
    number: "07",
    category: "business",
    title: "Trop de contenus à lire et à écouter ?",
    body: "NotebookLM sera ton meilleur allié à partir de maintenant. C'est un peu comme une assistante qui aurait tout lu, tout écouté à ta place et à qui tu peux poser n'importe quelle question. \n\nTu lui partages toutes tes sources, et ensuite tu lui demandes ce que tu veux. Par exemple :\n- le résumé de chaque source en 5 points\n- les informations qui reviennent dans plusieurs sources\n- les contradictions entre elles\n- une synthèse finale sous forme de mini-guide. \n\nIl peut même te créer un podcast ou une carte visuelle si t'as pas envie de lire du tout.\nBref, tu vas plus vite dans ta veille et ton apprentissage. Et elle te donne toutes les sources, la page exacte pour vérifier l'information au besoin.",
    change: "Tu restes informée, tu prends de meilleures décisions, mais sans y passer un temps interminable.",
    tools: "NotebookLM (de Google)",
  },
  {
    number: "08",
    category: "famille",
    title: "« On mange quoi ce soir ? » — La question enfin réglée",
    body: "Pfff! Cette question, à 17h30, après une longue journée... \n \nAlors, tu ouvres le réfrigérateur, tu regardes ce qu'il y a, et ton cerveau déjà saturé se retrouve face à une décision de plus. \n\nPour trouver l'inspiration, tu peux : \n- prendre en photo le contenu de ton réfrigérateur et de tes placards, ou faire une liste rapide des ingrédients disponibles\n- préciser tes contraintes à l'IA : temps de préparation maximale, nombre de personnes, préférences ou allergies. \nEt en quelques secondes, tu as plusieurs propositions de recettes réalisables avec ce que tu as. \n\nTu peux même demander à l'IA de planifier les repas de toute la semaine en optimisant les ingrédients, et d'en déduire automatiquement ta liste de courses.\n",
    change: "Une micro-décision quotidienne qui pèse lourd en charge mentale - complètement éliminée.",
  },
  {
    number: "09",
    category: "famille",
    title: "Aider ton enfant avec ses devoirs, même quand tu ne te rappelles plus tes cours de maths",
    body: "Les maths, la conjugaison au subjonctif, les fameuses règles de chimie… Tu as tout oublié et ton enfant compte sur toi pour l'aider avec ses devoirs.\n\nAvec l'IA, tu prends en photo l'exercice.\nTu lui demandes, non pas seulement la réponse, mais la démarche complète, expliquée étape par étape, dans un langage adapté au niveau de ton enfant. \n\nTu peux même lui demander de t'expliquer d'abord à toi, pour que tu puisses ensuite guider ton enfant plutôt que de simplement lui lire la solution.\n",
    change: "Un moment potentiellement stressant devient un moment de pure connexion avec ton enfant.",
  },
];

export const principles = [
  {
    n: "01",
    title: "Utilise l'IA avec intention",
    body: "Sois consciente de ce que tu confies à l'IA. Une fois cette clarté posée, ton imagination devient ta seule limite sur tout ce qu'elle peut faire pour toi.",
  },
  {
    n: "02",
    title: "Ne crée pas l'effet inverse",
    body: "Normalement, tu utilises l'IA pour gagner du temps, augmenter ta créativité et élargir le champ des possibles. Malheureusement, elle peut vite devenir une nouvelle source de distraction : recherche infinie d'outils, de nouveautés, de possibilités. \nAlors, le temps récupéré, mets-le là où ça compte vraiment pour toi.\n",
  },
  {
    n: "03",
    title: "Qualité IN, qualité OUT",
    body: "L'IA est aussi pertinente que la qualité que tu lui fournis. Plus tu lui fournis des informations précises, plus tu définis clairement son rôle et ce que tu attends d'elle — meilleur sera le résultat.",
  },
  {
    n: "04",
    title: "Tu restes maîtresse de tes données",
    body: "C'est toi qui décides ce que tu partages à l'IA, les dossiers auxquels tu lui donnes accès et ce que tu gardes privé. L'IA travaille avec ce que tu lui confies — pas plus.",
  },
];