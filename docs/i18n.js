// Auto-translate to French if browser language is French
(function() {
  var fr = {
    // Nav
    nav_apps: "Apps",
    nav_podcast: "Podcast",
    nav_about: "\u00C0 propos",
    nav_contact: "Contact",
    nav_blog: "Blog",

    // Homepage
    hero_sub_main: "Apps IA, podcast tech et communaut\u00e9 \u2014 tout est gratuit, tout est priv\u00e9.",
    home_beta_title: "Beta Testing",
    home_beta_desc: "Rejoignez nos groupes WhatsApp beta. Testez les nouvelles fonctionnalit\u00e9s avant tout le monde.",
    home_community_short: "Testez les b\u00eatas, partagez vos retours, fa\u00e7onnez nos apps.",
    beta_modal_title: "Choisissez votre b\u00eata",
    beta_modal_desc: "Quelle application voulez-vous tester ?",
    beta_modal_gc: "iPhone \u00b7 Apple Watch",
    beta_modal_bd: "macOS \u00b7 Offline",
    home_contact_short: "WhatsApp ou email \u2014 on r\u00e9pond vite.",
    home_gc_short: "Enregistrez, transcrivez et analysez vos appels \u2014 100% sur l'appareil.",
    home_bd_short: "Dict\u00e9e vocale hors ligne pour Mac. Propuls\u00e9 par Whisper AI.",
    mission_privacy_title: "Vie priv\u00e9e d'abord",
    mission_privacy_desc: "Toutes nos apps traitent les donn\u00e9es sur votre appareil. Pas de cloud, pas de serveur, pas de tracking. Vos donn\u00e9es restent les v\u00f4tres.",
    mission_ai_title: "IA embarqu\u00e9e",
    mission_ai_desc: "Propuls\u00e9 par Apple Intelligence et Whisper AI. De l'IA de pointe qui tourne en local, sans internet.",
    mission_open_title: "Gratuit & ouvert",
    mission_open_desc: "Des apps 100% gratuites sans co\u00fbts cach\u00e9s. Approche transparente, communication ouverte, d\u00e9veloppement collaboratif.",
    home_apps_title: "Nos applications",
    home_label: "Apps \u00b7 Podcast \u00b7 Communaut\u00e9",
    home_podcast_desc_short: "Tech, digital, data & IA \u2014 d\u00e9crypt\u00e9s simplement. 8 saisons, 5+ plateformes.",
    home_podcast_badge: "Podcast",
    home_podcast_title: "Podcast Connected Mate",
    home_podcast_desc: "Plus de 1 100 \u00e9pisodes pour d\u00e9crypter la tech, le digital, la data & l'IA \u2014 en toute simplicit\u00e9. Anim\u00e9 par PPC.",
    home_podcast_cta: "D\u00e9couvrir le podcast \u2192",

    // Podcast page
    podcast_title: "Podcast Connected Mate",
    podcast_sub: "Tech, digital, data & IA \u2014 expliqu\u00e9s simplement. Plus de 1 100 \u00e9pisodes sur 8 saisons pour d\u00e9crypter la technologie, ses enjeux, ses codes et ses opportunit\u00e9s.",
    podcast_listen: "\u00c9couter",
    podcast_watch: "Regarder les \u00e9pisodes",
    podcast_all_platforms: "Toutes les plateformes",
    podcast_find: "Trouvez votre app",
    podcast_stat_episodes: "\u00c9pisodes",
    podcast_stat_seasons: "Saisons",
    podcast_stat_platforms: "Plateformes",
    podcast_hosted_by: "Anim\u00e9 par",
    podcast_host_bio: "Auteur de \u00ab R\u00e9inventez votre entreprise \u00e0 l'\u00e8re de l'IA \u00bb. PPC d\u00e9crypte la tech, le digital, la data et l'IA \u2014 en toute simplicit\u00e9. Chaque \u00e9pisode vous aide \u00e0 comprendre la technologie, la transformation num\u00e9rique, ses enjeux, ses codes et ses opportunit\u00e9s.",
    podcast_about_title: "Les th\u00e8mes du podcast",
    podcast_listen_on: "\u00c9couter sur",
    podcast_topic_ai: "Intelligence Artificielle",
    podcast_topic_data: "Data",
    podcast_topic_digital: "Digital",
    podcast_topic_tech: "Tech",
    podcast_topic_business: "Business",
    podcast_topic_transform: "Transformation",
    podcast_latest_badge: "Dernier \u00e9pisode",
    podcast_latest_title: "IA et Politique",
    podcast_latest_desc: "Le dernier \u00e9pisode explore l'intersection entre intelligence artificielle et politique.",
    podcast_latest_listen: "\u00c9couter maintenant",

    // About page
    about_title: "\u00C0 propos de Connected Mate",
    about_sub: "Cr\u00e9er des outils IA priv\u00e9s et d\u00e9crypter la technologie \u2014 pour tous.",
    about_mission_title: "Notre mission",
    about_mission_desc: "Nous croyons que l'IA doit \u00eatre priv\u00e9e, accessible et gratuite. Connected Mate d\u00e9veloppe des outils IA embarqu\u00e9s qui respectent votre vie priv\u00e9e, et produit du contenu qui rend la technologie compr\u00e9hensible pour tous.",
    about_what_we_do: "Ce que nous faisons",
    about_activity_apps_title: "Applications IA",
    about_activity_apps_desc: "Apps IA gratuites et priv\u00e9es pour iPhone et Mac. NoteTaker AI (enregistreur d'appels & transcription) et Better Dictate (dict\u00e9e vocale hors ligne). 100% embarqu\u00e9, z\u00e9ro collecte de donn\u00e9es.",
    about_activity_podcast_title: "Podcast Tech",
    about_activity_podcast_desc: "Plus de 1 100 \u00e9pisodes sur 8 saisons. D\u00e9crypter la tech, le digital, la data et l'IA en toute simplicit\u00e9. Disponible sur Spotify, Apple Podcasts, YouTube et plus.",
    about_activity_community_title: "Communaut\u00e9",
    about_activity_community_desc: "Une communaut\u00e9 b\u00eata active sur WhatsApp. Retours directs avec le d\u00e9veloppeur, acc\u00e8s anticip\u00e9 aux nouvelles fonctionnalit\u00e9s, et d\u00e9veloppement collaboratif.",
    about_team_title: "L'\u00e9quipe",
    about_alex_role: "Fondateur & D\u00e9veloppeur",
    about_alex_bio: "Fondateur de Connected Mate. D\u00e9veloppe des applications IA gratuites et priv\u00e9es pour iPhone et Mac \u2014 dont NoteTaker AI (premier enregistreur d'appels IA local) et Better Dictate (dict\u00e9e vocale hors ligne). Passionn\u00e9 par la technologie respectueuse de la vie priv\u00e9e et l'IA embarqu\u00e9e.",
    about_ppc_role: "Animateur du podcast & Auteur",
    about_ppc_bio: "Animateur du podcast Connected Mate (1 100+ \u00e9pisodes, 8 saisons). Auteur de \u00ab R\u00e9inventez votre entreprise \u00e0 l'\u00e8re de l'IA \u00bb. D\u00e9crypte la tech, le digital, la data et l'IA \u2014 en toute simplicit\u00e9.",
    about_company_title: "L'entreprise",
    about_company_info: "Informations",
    about_legal_name: "Raison sociale :",
    about_status: "Statut :",
    about_active: "Active",
    about_see_registry: "Voir le registre complet \u2192",
    about_our_values: "Nos valeurs",
    about_value_privacy: "Vie priv\u00e9e par conception \u2014 sans exception",
    about_value_free: "Acc\u00e8s gratuit aux outils IA pour tous",
    about_value_transparency: "Transparence totale dans tout ce que nous faisons",
    about_value_community: "D\u00e9veloppement pilot\u00e9 par la communaut\u00e9",

    // Index hero (legacy)
    hero_title: "Applications",
    hero_sub: "Des outils IA intelligents et priv\u00e9s, con\u00e7us pour votre productivit\u00e9. Aucune donn\u00e9e collect\u00e9e. Jamais.",

    // NoteTaker AI card
    gc_tagline: "Enregistreur d'appels IA & Transcription",
    gc_desc: "Le premier enregistreur d'appels IA local pour iPhone. Enregistrez, transcrivez et analysez vos appels \u2014 100% sur votre appareil. Vos conversations restent les v\u00f4tres.",
    gc_hero_tagline: "Le premier enregistreur d'appels IA local pour iPhone.",
    gc_hero_promo: "Enregistrez, transcrivez et analysez vos appels et r\u00e9unions \u2014 100% sur votre appareil. Propuls\u00e9 par Apple Intelligence. Vos conversations restent priv\u00e9es, toujours. Enfin un enregistreur qui respecte votre vie priv\u00e9e.",

    // Better Dictate card
    bd_tagline: "Dict\u00e9e vocale IA hors ligne",
    bd_desc: "Dict\u00e9e vocale 100% hors ligne pour Mac. Parlez, le texte s'\u00e9crit. Propuls\u00e9 par Whisper AI, votre voix ne quitte jamais votre ordinateur.",
    bd_hero_tagline: "IA vocale hors ligne pour Mac.",
    bd_hero_promo: "Parlez naturellement, le texte s'\u00e9crit instantan\u00e9ment. Dict\u00e9e 100% hors ligne propuls\u00e9e par Whisper AI. Traduisez \u00e0 la vol\u00e9e \u2014 votre voix ne quitte jamais votre Mac.",

    // Badges & CTAs
    badge_free: "Gratuit",
    cta_learn: "En savoir plus \u2192",
    btn_whatsapp: "Contacter sur WhatsApp",
    btn_write: "Nous \u00e9crire",

    // Community / Beta
    community_badge: "Programme B\u00eata",
    community_title: "Rejoignez la communaut\u00e9",
    community_desc: "Rejoignez notre groupe WhatsApp pour tester les versions b\u00eata, partager vos retours, proposer des id\u00e9es et fa\u00e7onner l'avenir de nos apps \u2014 directement avec le d\u00e9veloppeur.",
    community_btn: "Rejoindre le groupe B\u00eata",
    community_btn_gc: "B\u00eata NoteTaker AI",
    community_btn_bd: "B\u00eata Better Dictate",

    // Teaser
    teaser_title: "Une question ? Un projet ?",
    teaser_sub: "Contactez-nous par WhatsApp ou par email.",

    // Doc nav
    doc_nav_title: "Sur cette page",
    nav_features: "Fonctionnalit\u00e9s",
    nav_security: "S\u00e9curit\u00e9 & Vie priv\u00e9e",
    nav_compat: "Compatibilit\u00e9",
    nav_languages: "Langues",
    nav_privacy: "Politique de confidentialit\u00e9",
    nav_modes: "Modes",
    nav_requirements: "Configuration requise",

    // NoteTaker AI features
    gc_features_title: "Fonctionnalit\u00e9s principales",
    gc_f1_title: "Enregistrement intelligent",
    gc_f1_desc: "Enregistrez en un tap depuis l'iPhone ou l'Apple Watch. Dynamic Island avec forme d'onde anim\u00e9e en temps r\u00e9el. D\u00e9tection automatique d'appels avec notification post-appel.",
    gc_f2_title: "Transcription automatique",
    gc_f2_desc: "Haute pr\u00e9cision propuls\u00e9e par le moteur Apple Speech. Support multilingue : fran\u00e7ais, anglais, espagnol, allemand et plus. Fonctionne 100% hors ligne.",
    gc_f3_title: "Analyse IA embarqu\u00e9e",
    gc_f3_desc: "R\u00e9sum\u00e9 automatique, extraction des sujets cl\u00e9s, prochaines \u00e9tapes identifi\u00e9es. Propuls\u00e9 par Apple Intelligence \u2014 tout reste sur votre appareil.",
    gc_f4_title: "Chat IA",
    gc_f4_desc: "Posez des questions sur vos enregistrements. \"Quels \u00e9taient les points d'action ?\" \"Qu'a-t-on dit sur le budget ?\" L'IA r\u00e9pond en se basant sur le contenu.",
    gc_f5_title: "Apple Watch",
    gc_f5_desc: "Contr\u00f4lez l'enregistrement depuis votre poignet. Pendant un appel sur haut-parleur, la Watch enregistre via son micro. Transfert automatique vers l'iPhone.",
    gc_f6_title: "Organisation & productivit\u00e9",
    gc_f6_desc: "Ajoutez les actions dans vos Rappels Apple. Int\u00e9grez votre calendrier. Filtrez par favoris, recherchez par titre ou contenu. Widget d'acc\u00e8s rapide.",

    // NoteTaker AI security
    gc_security_title: "S\u00e9curit\u00e9 & vie priv\u00e9e",
    gc_s1: "Verrouillage par Face ID et code \u00e0 4 chiffres",
    gc_s2: "Aucune donn\u00e9e envoy\u00e9e \u00e0 un serveur",
    gc_s3: "Tout est trait\u00e9 sur l'appareil",
    gc_s4: "Vos enregistrements restent dans le stockage local",
    gc_s5: "Aucun tracking, aucune analytique tierce",
    gc_s6: "Label App Store : \"No Data Collected\"",

    // NoteTaker AI compatibility
    gc_compat_title: "Compatibilit\u00e9",
    gc_c1: "N\u00e9cessite Apple Intelligence active",
    gc_c2: "Cat\u00e9gorie : Productivit\u00e9",
    gc_c3: "\u00c2ge : 4+",
    gc_c4: "Prix : Gratuit",

    // NoteTaker AI languages
    gc_lang_title: "Langues support\u00e9es",

    // NoteTaker AI CTA
    gc_cta_title: "Int\u00e9ress\u00e9 par NoteTaker AI ?",
    gc_cta_sub: "Contactez-nous pour en savoir plus.",

    // NoteTaker AI Privacy Policy
    gc_pp_title: "Politique de confidentialit\u00e9",
    pp_updated: "Derni\u00e8re mise \u00e0 jour :",
    pp_overview: "Pr\u00e9sentation",
    gc_pp1: "NoteTaker AI est d\u00e9velopp\u00e9 par Connected Mate (Alexandre Cormeraie). Nous nous engageons \u00e0 prot\u00e9ger votre vie priv\u00e9e. Cette politique explique comment l'application g\u00e8re vos donn\u00e9es.",
    pp_data: "Collecte de donn\u00e9es",
    gc_pp2: "NoteTaker AI ne collecte, ne transmet et ne partage aucune donn\u00e9e personnelle avec des serveurs externes. Tout le traitement se fait localement sur votre appareil.",
    pp_no_account: "Aucune cr\u00e9ation de compte requise",
    pp_no_cloud: "Aucun service cloud utilis\u00e9",
    pp_no_analytics: "Aucun SDK d'analytique ou de tracking",
    pp_no_cookies: "Aucun cookie",
    pp_no_telemetry: "Aucune t\u00e9l\u00e9m\u00e9trie",
    gc_pp3_title: "Enregistrements et transcriptions",
    gc_pp3: "Tous les enregistrements audio et transcriptions sont stock\u00e9s exclusivement sur votre appareil dans le stockage local. Ils ne sont jamais upload\u00e9s, synchronis\u00e9s ou partag\u00e9s avec un serveur ou tiers. Vous avez un contr\u00f4le total sur vos donn\u00e9es et pouvez supprimer les enregistrements \u00e0 tout moment.",
    gc_pp4_title: "Analyse IA",
    gc_pp4: "Les fonctionnalit\u00e9s d'IA (r\u00e9sum\u00e9s, extraction de sujets, chat) sont trait\u00e9es enti\u00e8rement sur l'appareil via Apple Intelligence. Aucun audio, texte ou r\u00e9sultat d'analyse n'est envoy\u00e9 \u00e0 des serveurs externes.",
    gc_pp5_title: "Acc\u00e8s au microphone",
    gc_pp5: "NoteTaker AI n\u00e9cessite l'acc\u00e8s au microphone pour enregistrer l'audio. Cette permission est demand\u00e9e via le syst\u00e8me de permissions standard iOS. Le microphone n'est actif que lorsque vous d\u00e9marrez explicitement un enregistrement.",
    pp_third_party: "Services tiers",
    gc_pp6: "NoteTaker AI n'int\u00e8gre aucun service tiers, framework publicitaire ou plateforme d'analytique. Le label de confidentialit\u00e9 App Store indique : \"Aucune donn\u00e9e collect\u00e9e\".",
    pp_gdpr: "Conformit\u00e9 RGPD & CCPA",
    gc_pp7: "Puisque NoteTaker AI ne collecte ni ne transmet aucune donn\u00e9e personnelle, l'application est conforme au RGPD et au CCPA par conception.",
    pp_children: "Vie priv\u00e9e des enfants",
    gc_pp8: "NoteTaker AI ne collecte aucune donn\u00e9e de quiconque, y compris les enfants de moins de 13 ans. L'application est class\u00e9e 4+ et est s\u00fbre pour tous les \u00e2ges.",
    pp_changes: "Modifications de cette politique",
    pp_changes_text: "Nous pouvons mettre \u00e0 jour cette politique de confidentialit\u00e9 de temps en temps. Les modifications seront refl\u00e9t\u00e9es sur cette page avec une date mise \u00e0 jour.",
    pp_contact_text: "Si vous avez des questions sur cette politique de confidentialit\u00e9, contactez-nous :",

    // Better Dictate features
    bd_modes_title: "Trois modes puissants",
    bd_m1_title: "Push-to-Talk",
    bd_m1_desc: "Maintenez votre raccourci, parlez, rel\u00e2chez. Le texte s'\u00e9crit instantan\u00e9ment \u00e0 l'endroit de votre curseur. Id\u00e9al pour les messages courts, emails et notes rapides.",
    bd_m2_title: "Dict\u00e9e vers le presse-papiers",
    bd_m2_desc: "Mode mains libres. Appuyez une fois pour d\u00e9marrer, parlez librement, appuyez pour arr\u00eater. Le texte est copi\u00e9 dans le presse-papiers, pr\u00eat \u00e0 coller.",
    bd_m3_title: "Traduction en direct",
    bd_m3_desc: "La fonctionnalit\u00e9 magique. S\u00e9lectionnez une langue cible et parlez dans votre langue maternelle \u2014 Better Dictate \u00e9crit automatiquement dans la langue cible.",
    bd_features_title: "Fonctionnalit\u00e9s",
    bd_f1_title: "100% Hors ligne",
    bd_f1_desc: "Tout le traitement se fait sur votre Mac. Aucune donn\u00e9e n'est envoy\u00e9e \u00e0 un serveur. Votre voix ne quitte jamais votre ordinateur. Conforme RGPD et CCPA par design.",
    bd_f2_title: "Apple Silicon optimis\u00e9",
    bd_f2_desc: "Optimis\u00e9 pour les puces M1, M2, M3 et M4 avec acc\u00e9l\u00e9ration Metal GPU. Transcription ultra-rapide avec un impact minimal sur la batterie.",
    bd_f3_title: "Dictionnaire personnalis\u00e9",
    bd_f3_desc: "Ajoutez des mots sp\u00e9cialis\u00e9s, noms propres et auto-corrections. Filtre de vulgarit\u00e9 int\u00e9gr\u00e9. G\u00e9n\u00e9ration assist\u00e9e par IA.",
    bd_f4_title: "Technologie d'assistance",
    bd_f4_desc: "Con\u00e7u pour les personnes avec handicap moteur, troubles de la parole ou difficult\u00e9s cognitives. Remplacez enti\u00e8rement la saisie clavier par la voix.",
    bd_f5_title: "Mod\u00e8les Whisper au choix",
    bd_f5_desc: "Tiny (~75 Mo), Small (~500 Mo, recommand\u00e9), Medium (~1.5 Go) ou Large (~3 Go). Choisissez l'\u00e9quilibre entre vitesse et pr\u00e9cision.",
    bd_f6_title: "Menu bar discret",
    bd_f6_desc: "L'app se place dans la barre de menu. Toujours pr\u00eate, discr\u00e8te. Lancez au d\u00e9marrage, baissez le volume automatiquement pendant la dict\u00e9e.",
    bd_lang_title: "Langues support\u00e9es",
    bd_req_title: "Configuration requise",
    bd_r1: "Mac avec Apple Silicon (M1, M2, M3, M4)",
    bd_r2: "macOS 13.0 (Ventura) minimum",
    bd_r3: "Micro int\u00e9gr\u00e9 ou externe",
    bd_r4: "1 \u00e0 3 Go d'espace disque",
    bd_r5: "Aucune connexion internet requise (sauf t\u00e9l\u00e9chargement initial du mod\u00e8le)",
    bd_cta_title: "Int\u00e9ress\u00e9 par Better Dictate ?",
    bd_cta_sub: "Contactez-nous pour en savoir plus.",
    bd_pp_title: "Politique de confidentialit\u00e9",
    bd_pp1: "Better Dictate est d\u00e9velopp\u00e9 par Connected Mate (Alexandre Cormeraie). Nous nous engageons \u00e0 prot\u00e9ger votre vie priv\u00e9e. Cette politique explique comment l'application g\u00e8re vos donn\u00e9es.",
    bd_pp2: "Better Dictate ne collecte, ne stocke, ne transmet et ne partage aucune donn\u00e9e personnelle. L'application fonctionne 100% hors ligne sur votre Mac.",
    bd_pp3_title: "Donn\u00e9es vocales et audio",
    bd_pp3: "Votre voix est trait\u00e9e enti\u00e8rement sur votre appareil via le mod\u00e8le Whisper AI. L'audio est trait\u00e9 en temps r\u00e9el en m\u00e9moire et n'est jamais enregistr\u00e9, sauvegard\u00e9 ou transmis. Une fois la transcription termin\u00e9e, les donn\u00e9es audio sont imm\u00e9diatement supprim\u00e9es.",
    bd_pp4_title: "Acc\u00e8s internet",
    bd_pp4: "Le seul moment o\u00f9 Better Dictate se connecte \u00e0 internet est pour t\u00e9l\u00e9charger le mod\u00e8le Whisper AI au premier lancement. Apr\u00e8s cela, l'application fonctionne enti\u00e8rement hors ligne.",
    bd_pp5: "Better Dictate n'int\u00e8gre aucun service tiers, framework publicitaire ou plateforme d'analytique.",
    bd_pp6: "Puisque Better Dictate ne collecte aucune donn\u00e9e personnelle, l'application est conforme au RGPD et au CCPA par conception.",
    bd_pp7: "Better Dictate ne collecte aucune donn\u00e9e de quiconque, y compris les enfants de moins de 13 ans. L'application est s\u00fbre pour tous les \u00e2ges.",

    // Contact page
    contact_title: "Contactez-nous",
    contact_sub: "Une question, un retour, un projet ? On est l\u00e0.",
    contact_wa_desc: "R\u00e9ponse rapide. \u00c9crivez-nous directement sur WhatsApp pour toute question sur nos applications.",
    contact_wa_btn: "Ouvrir WhatsApp",
    contact_email_desc: "Pour les demandes d\u00e9taill\u00e9es, partenariats ou questions techniques.",
    contact_email_btn: "Envoyer un email",
    contact_form_title: "Formulaire de contact",
    contact_form_sub: "Remplissez le formulaire ci-dessous. En cliquant sur \"Envoyer\", votre application de messagerie s'ouvrira avec le message pr\u00e9-rempli.",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_email_ph: "votre@email.com",
    form_subject: "Sujet",
    form_subject_ph: "\u00c0 propos de...",
    form_message_ph: "Votre message...",
    form_send: "Envoyer",

    // Sticky install bar
    sticky_free_iphone: "Gratuit \u00b7 iPhone \u00b7 Apple Watch",
    sticky_free_mac: "Gratuit \u00b7 macOS \u00b7 Apple Silicon",
    sticky_install: "T\u00e9l\u00e9charger sur l'App Store",
    sticky_install_mac: "T\u00e9l\u00e9charger sur le Mac App Store",

    // Footer
    footer_rights: "Tous droits r\u00e9serv\u00e9s.",
    footer_opensource: "Open source sur GitHub",

    // About page — simplified cards
    about_alex_short: "Responsable IA & Innovation chez SNCF Voyageurs. 1er GenZ Digital Evangelist. Cr\u00e9ateur de NoteTaker AI et Better Dictate \u2014 des apps IA 100 % priv\u00e9es et gratuites. Conf\u00e9rencier (Laval Virtual, Sorbonne).",
    about_ppc_short: "Chief Digital Evangelist chez Groupe BPCE. Animateur du podcast Connected Mate (1 100+ \u00e9pisodes). Auteur de 3 livres. Conf\u00e9rencier & MC. Newsletter #UpToDate \u2014 4 400+ abonn\u00e9s.",
    about_see_profile: "Voir le profil complet \u2192",

    // Alex page
    alex_hero_sub: "Co-fondateur & D\u00e9veloppeur \u2014 Connected Mate",
    alex_bio: "Responsable IA & Innovation pour TGV Europe chez SNCF Voyageurs, Alexandre est le 1er GenZ Digital Evangelist de la SNCF. Il fa\u00e7onne le parcours digital \u00e0 bord du TGV Inou\u00ef, porte l'IA, l'agilit\u00e9, la r\u00e9alit\u00e9 augment\u00e9e et les concepts next-gen aupr\u00e8s du top management et des comit\u00e9s ex\u00e9cutifs, en cr\u00e9ant des ponts entre g\u00e9n\u00e9rations.",
    alex_sncf_title: "Projets SNCF Voyageurs",
    alex_sncf_desc: "Cr\u00e9ateur de l'app TGV INOUI Experience sur Apple Vision Pro \u2014 une des premi\u00e8res applications AR d'un op\u00e9rateur ferroviaire europ\u00e9en, permettant de d\u00e9couvrir le futur TGV-M en immersion. Il travaille sur les interfaces agentiques (Agentic UI) o\u00f9 les voyageurs interagiront avec les services digitaux via l'IA g\u00e9n\u00e9rative, et exp\u00e9rimente les casques VR/AR \u00e0 bord des trains \u00e0 320 km/h.",
    alex_apps_title: "D\u00e9veloppeur d'apps IA",
    alex_app_notetaker: "Premier enregistreur d'appels IA 100 % local pour iPhone. Transcription, analyse IA, r\u00e9sum\u00e9 automatique \u2014 tout sur l'appareil. Gratuit, priv\u00e9, sans collecte de donn\u00e9es.",
    alex_app_dictate: "Dict\u00e9e vocale hors ligne pour Mac, propuls\u00e9e par Whisper AI. Votre voix ne quitte jamais votre ordinateur. Gratuit et open source.",
    alex_speaker_title: "Conf\u00e9rencier",
    alex_speaker_desc: "Intervenant r\u00e9gulier sur les sujets d'innovation, d'IA et de transformation digitale. Il a pris la parole \u00e0 Laval Virtual (innovation prospective TGV Inou\u00ef), Talents for the Planet (\u00ab Quels impacts de l'IA sur l'avenir du travail ? \u00bb, 6 000+ visiteurs) et \u00e0 la Sorbonne (d\u00e9bat sur l'IA et l'\u00e9ducation, f\u00e9vrier 2026).",
    alex_background_title: "Parcours",
    alex_education_title: "Formation",
    alex_edu_1: "Master \u2014 Web School Factory (2018\u20132023)",
    alex_edu_2: "Semestre international \u2014 RMIT University, Melbourne",
    alex_other_title: "Engagement",
    alex_other_1: "Caporal-chef & Sapeur-Pompier volontaire \u2014 SDIS 77",
    alex_other_2: "Vision : \u00ab Un jour, nous aurons le meilleur \u00e9cosyst\u00e8me tech de France. \u00bb",
    alex_links_title: "Retrouvez Alexandre",

    // PPC page
    ppc_hero_sub: "Co-fondateur \u2014 Connected Mate | Chief Digital Evangelist \u2014 Groupe BPCE",
    ppc_bio: "Chief Digital Evangelist chez Groupe BPCE (2e groupe bancaire fran\u00e7ais), PPC accompagne la transformation digitale et data du groupe depuis plus de 20 ans. Sa devise : \u00ab Je rends simple ce qui est complexe. \u00bb",
    ppc_career_title: "Parcours",
    ppc_career_early: "Publicit\u00e9 & Marketing",
    ppc_career_brands: "Clients : American Express, BMW, SNCF, Virgin Megastore, IBM Europe",
    ppc_career_banking: "Banque & Digital",
    ppc_career_bpce_1: "Head of Digital Marketing \u2014 Caisse d'\u00c9pargne",
    ppc_career_bpce_2: "Directeur de l'Innovation \u2014 Groupe BPCE",
    ppc_career_bpce_3: "Chief Digital Evangelist \u2014 Groupe BPCE (depuis 2017)",
    ppc_career_opendata: "Pilote de l'initiative Open Data \u2014 1er groupe bancaire fran\u00e7ais",
    ppc_podcast_title: "Podcast Connected Mate",
    ppc_podcast_desc: "Plus de 1 100 \u00e9pisodes sur 8 saisons depuis 2018. Chaque \u00e9pisode d\u00e9crypte un sujet tech, digital, data ou IA avec une simplicit\u00e9 remarquable. Disponible sur Spotify, Apple Podcasts, Deezer, Amazon Music et toutes les plateformes majeures.",
    ppc_podcast_other: "PPC anime \u00e9galement \u00ab Le Web3 Caf\u00e9 \u00bb et \u00ab Le digital pour tous \u00bb.",
    ppc_author_title: "Auteur",
    ppc_book_latest: "Dernier livre (oct. 2025)",
    ppc_book_latest_desc: "\u00ab R\u00e9inventez votre entreprise \u00e0 l'\u00e8re de l'IA \u00bb \u2014 Pr\u00e9fac\u00e9 par Serge Papin (ancien PDG de Syst\u00e8me U). Approche manag\u00e9riale et culturelle : l'IA comme catalyseur de transformation, pas comme simple outil technique. \u00c9ditions Kawa.",
    ppc_book_golive: "Go Live",
    ppc_book_golive_desc: "\u00ab Go Live : Periscope et Facebook Live mode d'emploi \u00bb \u2014 Co-\u00e9crit avec Beno\u00eet Descary et Damien Douani, pr\u00e9face de David Abiker. \u00c9ditions Kawa.",
    ppc_speaker_title: "Conf\u00e9rencier & MC",
    ppc_speaker_desc: "Conf\u00e9rencier et Master of Ceremonies reconnu, PPC intervient dans des \u00e9v\u00e9nements majeurs : Intelligence Marketing Day, #GEN (Grand Est Num\u00e9rique), WebCampDay, Paris Radio Show, Inbound Marketing France, Les Sommets du Digital.",
    ppc_speaker_quote: "\u00ab Un subtil m\u00e9lange de provocation, d'intelligence et de prospective \u2014 un activateur de curiosit\u00e9 et d'innovation. \u00bb",
    ppc_newsletter_title: "Newsletter #UpToDate / 100% IA",
    ppc_newsletter_desc: "Sa newsletter Substack rassemble plus de 4 400 abonn\u00e9s actifs et compte plus de 354 \u00e9ditions. Chaque num\u00e9ro couvre environ 5 sujets IA, une revue de presse et un AMA. Lanc\u00e9e en juin 2020, elle est devenue une r\u00e9f\u00e9rence dans la veille IA francophone.",
    ppc_media_title: "M\u00e9dias & Vid\u00e9o",
    ppc_media_video: "Production vid\u00e9o",
    ppc_media_pdv: "\u00ab Pour De Vrai \u00bb \u2014 s\u00e9rie vid\u00e9o avec J\u00e9r\u00f4me Bonaldi",
    ppc_media_succes: "\u00ab Les Vid\u00e9os du Succ\u00e8s \u00bb \u2014 15 millions+ de vues sur YouTube",
    ppc_media_periscope: "Pionnier du live streaming \u2014 40 000+ abonn\u00e9s sur Periscope",
    ppc_media_other_title: "Autres",
    ppc_media_coach: "Coach de dirigeants et personnalit\u00e9s sur les r\u00e9seaux sociaux",
    ppc_media_patent: "D\u00e9tenteur d'un brevet sur la technologie des cartes \u00e0 puce",
    ppc_education_title: "Formation",
    ppc_edu_1: "Master Marketing \u2014 OMNES Education (1985\u20131988)",
    ppc_edu_2: "Bachelor of Science \u2014 UCLA (1987) \u2014 Communication, Marketing, Nouvelles Technologies",
    ppc_edu_3: "Certified Scrum Product Owner (CSPO) \u2014 Scrum Alliance (2016)",
    ppc_edu_4: "Executive Short Certificate Data for Managers \u2014 HEC Paris (2021)",
    ppc_expertise_title: "Domaines d'expertise",
    ppc_exp_ai: "IA g\u00e9n\u00e9rative & Strat\u00e9gie IA",
    ppc_exp_digital: "Transformation digitale",
    ppc_exp_data: "Data Strategy & Open Data",
    ppc_links_title: "Retrouvez PPC",

    // Section scrollbar
    scroll_speaker: "Conf\u00e9rences",
    scroll_background: "Parcours",
    scroll_career: "Carri\u00e8re",
    scroll_author: "Auteur",
    scroll_media: "M\u00e9dias",
    scroll_education: "Formation",
    scroll_expertise: "Expertise",

    // Podcast Ausha button
    podcast_all_episodes: "Tous les \u00e9pisodes"
  };

  function translate() {
    var lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (!lang.startsWith('fr')) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (fr[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.placeholder) el.placeholder = fr[key];
        } else {
          el.innerHTML = fr[key];
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = 'fr';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translate);
  } else {
    translate();
  }
})();
