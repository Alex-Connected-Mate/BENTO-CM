export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tag: string;
  gradient: string;
}

export const articles: Article[] = [
  {
    slug: "ia-generative-entreprise",
    title: "L'IA générative en entreprise : par où commencer ?",
    excerpt:
      "Guide pratique pour intégrer l'IA générative dans vos processus métier sans se perdre dans le hype.",
    content: `L'intelligence artificielle générative a bouleversé le monde de l'entreprise en quelques mois. ChatGPT, Midjourney, Claude... les outils se multiplient et les promesses sont immenses. Mais concrètement, par où commencer ?

## Identifier les cas d'usage à fort impact

Avant de se lancer, il est essentiel d'identifier les tâches qui bénéficieraient le plus de l'IA générative. Cherchez les processus répétitifs, à forte volumétrie, où la création de contenu est centrale : rédaction d'emails, synthèse de documents, génération de rapports.

## Commencer petit, itérer vite

Ne tentez pas de transformer toute votre organisation d'un coup. Choisissez un projet pilote avec une équipe motivée. Mesurez les résultats. Ajustez. Puis élargissez progressivement.

## Former vos équipes

L'outil ne fait pas tout. Le prompt engineering, la vérification des résultats, l'intégration dans les workflows existants... tout cela nécessite de la formation. Investissez dans la montée en compétences de vos collaborateurs.

## Cadrer l'usage

Définissez une charte d'utilisation claire : quelles données peuvent être envoyées à l'IA ? Quels sont les cas d'usage autorisés ? Comment vérifier les outputs ? La gouvernance est clé pour un déploiement réussi et responsable.

## Mesurer le ROI

Mettez en place des indicateurs dès le départ : temps gagné, qualité des outputs, satisfaction des utilisateurs. Ces métriques vous permettront de justifier l'investissement et d'identifier les prochaines opportunités.

L'IA générative n'est pas une baguette magique, mais un outil puissant qui, bien utilisé, peut transformer significativement la productivité et la créativité de vos équipes.`,
    author: "Alexandre Martin",
    date: "2026-02-15",
    readTime: "5 min",
    tag: "Intelligence Artificielle",
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    slug: "travail-hybride-2026",
    title: "Travail hybride en 2026 : les leçons apprises",
    excerpt:
      "Retour d'expérience sur 4 ans de travail hybride et les meilleures pratiques qui ont émergé.",
    content: `Quatre ans après la généralisation du travail hybride, les organisations ont accumulé suffisamment de recul pour tirer des conclusions solides. Voici les enseignements majeurs.

## La flexibilité n'est plus négociable

Les entreprises qui ont tenté un retour au bureau à 100% ont fait face à une fuite des talents. La flexibilité est devenue un critère aussi important que le salaire pour les candidats. Le modèle 2-3 jours bureau / 2-3 jours remote s'est imposé comme le standard.

## L'asynchrone d'abord

Les organisations les plus performantes en hybride ont adopté une culture "async-first". Les réunions sont réservées aux discussions qui nécessitent vraiment du temps réel. Le reste passe par des outils de communication asynchrone : documents partagés, vidéos courtes, messages structurés.

## Les bureaux ont changé de rôle

Le bureau n'est plus l'endroit où l'on vient "travailler". C'est un lieu de collaboration, de socialisation et de créativité. Les open spaces ont cédé la place à des espaces modulables : salles de brainstorming, zones de détente, espaces de co-working.

## La confiance comme fondation

Les managers qui surveillent le temps de connexion de leurs équipes obtiennent de moins bons résultats que ceux qui se concentrent sur les objectifs atteints. La confiance est le ciment du travail hybride.

## Les défis persistants

Tout n'est pas rose. L'isolement des travailleurs 100% remote, la difficulté à onboarder les nouveaux arrivants, le maintien de la culture d'entreprise... ces défis restent réels et nécessitent une attention constante.

Le travail hybride n'est pas une mode passagère. C'est une transformation profonde de notre rapport au travail qui continue d'évoluer.`,
    author: "Sophie Durand",
    date: "2026-02-10",
    readTime: "6 min",
    tag: "Futur du travail",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    slug: "green-it-guide-pratique",
    title: "Green IT : réduire l'empreinte carbone de votre SI",
    excerpt:
      "Actions concrètes pour rendre votre infrastructure numérique plus responsable et durable.",
    content: `Le numérique représente aujourd'hui 4% des émissions mondiales de gaz à effet de serre, et ce chiffre ne cesse de croître. En tant que professionnels du numérique, nous avons une responsabilité. Voici comment agir.

## Allonger la durée de vie du matériel

80% de l'empreinte carbone d'un appareil est liée à sa fabrication. Prolonger la durée de vie de vos équipements de 3 à 5 ans réduit considérablement votre impact. Privilégiez le reconditionné, la réparation et le recyclage.

## Optimiser le code

Un code plus efficace consomme moins de ressources serveur. Révisez vos requêtes SQL, optimisez vos assets web, supprimez le code mort. Chaque milliseconde de temps de calcul économisée compte.

## Rationaliser le cloud

Auditez vos instances cloud : combien tournent à vide ? Combien sont surdimensionnées ? Le rightsizing et l'auto-scaling peuvent réduire votre consommation de 30 à 50%.

## Éco-concevoir les services numériques

Adoptez une approche sobre dès la conception : pages légères, fonctionnalités essentielles, design minimaliste. Le référentiel RGESN fournit un cadre de référence pour l'éco-conception web.

## Mesurer pour progresser

Utilisez des outils comme GreenIT Analysis, Website Carbon ou Scaphandre pour mesurer l'empreinte de vos services. Ce qui se mesure s'améliore.

La sobriété numérique n'est pas un frein à l'innovation. C'est une contrainte créative qui pousse à concevoir des solutions plus intelligentes, plus efficaces et plus durables.`,
    author: "Claire Morel",
    date: "2026-02-05",
    readTime: "4 min",
    tag: "Green IT",
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    slug: "cybersecurite-pme",
    title: "Cybersécurité pour les PME : l'essentiel à mettre en place",
    excerpt:
      "Les mesures de sécurité indispensables pour protéger votre entreprise sans budget démesuré.",
    content: `Les PME sont devenues la cible privilégiée des cyberattaques. Plus vulnérables que les grandes entreprises mais disposant de données tout aussi précieuses, elles doivent se protéger efficacement. Voici l'essentiel.

## L'authentification multi-facteurs (MFA)

C'est la mesure numéro un. Activez le MFA sur tous vos comptes critiques : email, cloud, outils métier. Cette seule action bloque 99% des attaques par compromission de compte.

## Les sauvegardes 3-2-1

Trois copies de vos données, sur deux supports différents, dont une hors site. Testez régulièrement la restauration. En cas de ransomware, c'est votre filet de sécurité.

## La sensibilisation des équipes

90% des cyberattaques commencent par un email de phishing. Formez vos équipes à reconnaître les tentatives d'hameçonnage. Des simulations régulières sont le meilleur moyen de maintenir la vigilance.

## Les mises à jour

Automatisez les mises à jour de sécurité de vos systèmes et logiciels. Les vulnérabilités non patchées sont la porte d'entrée favorite des attaquants.

## Un plan de réponse aux incidents

Que faire si une attaque réussit ? Qui contacter ? Comment isoler les systèmes touchés ? Préparez un plan avant d'en avoir besoin. L'ANSSI propose des guides gratuits pour vous accompagner.

La cybersécurité n'est pas qu'une affaire de technologie. C'est une culture à intégrer dans le quotidien de chaque collaborateur.`,
    author: "Karim Benali",
    date: "2026-01-28",
    readTime: "5 min",
    tag: "Cybersécurité",
    gradient: "bg-gradient-to-br from-slate-500 to-zinc-600",
  },
  {
    slug: "product-management-ia",
    title: "Comment l'IA transforme le Product Management",
    excerpt:
      "L'IA ne remplace pas les Product Managers, elle les augmente. Découvrez comment.",
    content: `Le Product Management est en pleine mutation sous l'impulsion de l'intelligence artificielle. Loin de rendre les PMs obsolètes, l'IA redéfinit leur rôle et leurs outils.

## L'analyse des retours utilisateurs

Fini les heures passées à trier manuellement les tickets support et les avis. L'IA analyse des milliers de feedbacks en quelques secondes, identifie les thèmes récurrents et détecte les signaux faibles. Le PM peut se concentrer sur la priorisation et la stratégie.

## La génération de specs et PRDs

Les assistants IA aident à structurer les documents produit : user stories, critères d'acceptation, PRDs. Le PM garde le contrôle éditorial mais gagne un temps précieux sur la rédaction.

## La personnalisation à l'échelle

L'IA permet de segmenter les utilisateurs avec une finesse inédite et d'adapter l'expérience produit à chaque segment. A/B testing automatisé, recommandations personnalisées, parcours adaptatifs.

## Les prédictions de churn

Les modèles prédictifs identifient les utilisateurs à risque de churn avant qu'ils ne partent. Le PM peut alors intervenir proactivement avec des actions ciblées.

## Le nouveau rôle du PM

Le PM de demain est un chef d'orchestre qui coordonne humains et IA. Sa valeur ajoutée réside dans la vision produit, l'empathie utilisateur et la capacité à poser les bonnes questions — pas dans l'exécution de tâches répétitives.

L'IA est le meilleur copilote qu'un Product Manager puisse avoir. À condition de savoir le piloter.`,
    author: "Marc Lefèvre",
    date: "2026-01-20",
    readTime: "5 min",
    tag: "Product",
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
  {
    slug: "api-design-bonnes-pratiques",
    title: "API Design : les bonnes pratiques en 2026",
    excerpt:
      "REST, GraphQL, gRPC... comment concevoir des APIs robustes, maintenables et performantes.",
    content: `Concevoir une bonne API est un art qui s'affine avec les années. En 2026, les bonnes pratiques se sont stabilisées autour de principes clairs.

## Choisir le bon paradigme

REST reste le choix par défaut pour la majorité des cas d'usage. GraphQL excelle quand les clients ont des besoins de données très variés. gRPC est idéal pour la communication inter-services à haute performance. Ne choisissez pas par effet de mode.

## La cohérence avant tout

Nommez vos endpoints de manière cohérente. Utilisez les mêmes conventions partout : nommage, pagination, gestion des erreurs. Une API prévisible est une API facile à utiliser.

## Le versioning

Versionnez vos APIs dès le premier jour. Le préfixe URL (/v1/, /v2/) reste l'approche la plus claire. Maintenez les anciennes versions pendant une période de migration raisonnable.

## La documentation comme produit

Votre documentation est l'interface utilisateur de votre API. Investissez dans des docs interactives (OpenAPI/Swagger), des exemples de code dans plusieurs langages et des guides de démarrage rapide.

## La sécurité par design

OAuth 2.0 + PKCE pour l'authentification. Rate limiting pour la protection. Validation stricte des inputs. Chiffrement en transit. Ces pratiques ne sont pas optionnelles.

## L'observabilité

Loggez chaque requête avec un correlation ID. Mesurez les latences, les taux d'erreur, les patterns d'utilisation. Ces données sont essentielles pour maintenir et améliorer votre API.

Une bonne API est invisible : elle fait exactement ce que le développeur attend, sans surprise ni frustration.`,
    author: "Thomas Petit",
    date: "2026-01-12",
    readTime: "6 min",
    tag: "Développement",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
