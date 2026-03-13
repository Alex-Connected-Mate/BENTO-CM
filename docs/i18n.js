// Auto-translate to French if browser language is French
(function() {
  var fr = {
    // Nav
    nav_apps: "Apps",
    nav_podcast: "Podcast",
    nav_about: "\u00C0 propos",
    nav_contact: "Contact",

    // Homepage
    hero_sub_main: "Nous cr\u00e9ons des outils IA gratuits et priv\u00e9s, et d\u00e9cryptons la technologie pour tous. Intelligence embarqu\u00e9e, z\u00e9ro collecte de donn\u00e9es, transparence totale.",
    mission_privacy_title: "Vie priv\u00e9e d'abord",
    mission_privacy_desc: "Toutes nos apps traitent les donn\u00e9es sur votre appareil. Pas de cloud, pas de serveur, pas de tracking. Vos donn\u00e9es restent les v\u00f4tres.",
    mission_ai_title: "IA embarqu\u00e9e",
    mission_ai_desc: "Propuls\u00e9 par Apple Intelligence et Whisper AI. De l'IA de pointe qui tourne en local, sans internet.",
    mission_open_title: "Gratuit & ouvert",
    mission_open_desc: "Des apps 100% gratuites sans co\u00fbts cach\u00e9s. Approche transparente, communication ouverte, d\u00e9veloppement collaboratif.",
    home_apps_title: "Nos applications",
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

    // Footer
    footer_rights: "Tous droits r\u00e9serv\u00e9s."
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
