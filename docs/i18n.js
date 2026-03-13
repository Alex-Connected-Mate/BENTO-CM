// Auto-translate to French if browser language is French
(function() {
  var fr = {
    // Nav
    nav_apps: "Apps",
    nav_podcast: "Podcast",
    nav_about: "\u00C0 propos",
    nav_contact: "Contact",

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
    podcast_about_title: "\u00C0 propos du podcast",
    podcast_about_desc: "Connected Mate d\u00e9crypte la tech, le digital, la data et l'IA \u2014 en toute simplicit\u00e9. Chaque \u00e9pisode vous aide \u00e0 comprendre la technologie, la transformation num\u00e9rique, ses enjeux, ses codes et ses opportunit\u00e9s. Anim\u00e9 par PPC, auteur de \u00ab R\u00e9inventez votre entreprise \u00e0 l'\u00e8re de l'IA \u00bb.",
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
    about_alex_role: "Fondateur & D\u00e9veloppeur",
    about_alex_bio: "Fondateur de Connected Mate. D\u00e9veloppe des applications IA gratuites et priv\u00e9es pour iPhone et Mac \u2014 dont Get Calls (premier enregistreur d'appels IA local) et Better Dictate (dict\u00e9e vocale hors ligne). Passionn\u00e9 par la technologie respectueuse de la vie priv\u00e9e et l'IA embarqu\u00e9e.",
    about_ppc_role: "Animateur du podcast & Auteur",
    about_ppc_bio: "Animateur du podcast Connected Mate (1 100+ \u00e9pisodes, 8 saisons). Auteur de \u00ab R\u00e9inventez votre entreprise \u00e0 l'\u00e8re de l'IA \u00bb. D\u00e9crypte la tech, le digital, la data et l'IA \u2014 en toute simplicit\u00e9.",
    about_company_title: "L'entreprise",
    about_company_info: "Informations",
    about_legal_name: "Raison sociale :",
    about_status: "Statut :",
    about_active: "Active",
    about_see_registry: "Voir le registre complet \u2192",
    about_what_we_do: "Ce que nous faisons",
    about_do_apps: "Apps IA gratuites et priv\u00e9es (iOS & macOS)",
    about_do_podcast: "Podcast tech & IA (1 100+ \u00e9pisodes)",
    about_do_privacy: "Solutions IA embarqu\u00e9es, respect de la vie priv\u00e9e",
    about_do_open: "Approche ouverte et transparente",

    // Index hero
    hero_title: "Applications",
    hero_sub: "Des outils IA intelligents et prives, conçus pour votre productivite. Aucune donnee collectee. Jamais.",

    // Get Calls card
    gc_tagline: "Enregistreur d'appels IA & Transcription",
    gc_desc: "Le premier enregistreur d'appels IA local pour iPhone. Enregistrez, transcrivez et analysez vos appels — 100% sur votre appareil. Vos conversations restent les votres.",
    gc_hero_tagline: "Le premier enregistreur d'appels IA local pour iPhone.",
    gc_hero_promo: "Enregistrez, transcrivez et analysez vos appels et reunions — 100% sur votre appareil. Propulse par Apple Intelligence. Vos conversations restent privees, toujours. Enfin un enregistreur qui respecte votre vie privee.",

    // Better Dictate card
    bd_tagline: "Dictee vocale IA hors ligne",
    bd_desc: "Dictee vocale 100% hors ligne pour Mac. Parlez, le texte s'ecrit. Propulse par Whisper AI, votre voix ne quitte jamais votre ordinateur.",
    bd_hero_tagline: "IA vocale hors ligne pour Mac.",
    bd_hero_promo: "Parlez naturellement, le texte s'ecrit instantanement. Dictee 100% hors ligne propulsee par Whisper AI. Traduisez a la volee — votre voix ne quitte jamais votre Mac.",

    // Badges & CTAs
    badge_free: "Gratuit",
    cta_learn: "En savoir plus \u2192",
    btn_whatsapp: "Contacter sur WhatsApp",
    btn_write: "Nous ecrire",

    // Community / Beta
    community_badge: "Programme Beta",
    community_title: "Rejoignez la communaut\u00e9",
    community_desc: "Rejoignez notre groupe WhatsApp pour tester les versions b\u00eata, partager vos retours, proposer des id\u00e9es et fa\u00e7onner l'avenir de nos apps — directement avec le d\u00e9veloppeur.",
    community_btn: "Rejoindre le groupe Beta",
    community_btn_gc: "Beta Get Calls",
    community_btn_bd: "Beta Better Dictate",

    // Teaser
    teaser_title: "Une question ? Un projet ?",
    teaser_sub: "Contactez-nous par WhatsApp ou par email.",

    // Doc nav
    doc_nav_title: "Sur cette page",
    nav_features: "Fonctionnalites",
    nav_security: "Securite & Vie privee",
    nav_compat: "Compatibilite",
    nav_languages: "Langues",
    nav_privacy: "Politique de confidentialite",
    nav_modes: "Modes",
    nav_requirements: "Configuration requise",

    // Get Calls features
    gc_features_title: "Fonctionnalites principales",
    gc_f1_title: "Enregistrement intelligent",
    gc_f1_desc: "Enregistrez en un tap depuis l'iPhone ou l'Apple Watch. Dynamic Island avec forme d'onde animee en temps reel. Detection automatique d'appels avec notification post-appel.",
    gc_f2_title: "Transcription automatique",
    gc_f2_desc: "Haute precision propulsee par le moteur Apple Speech. Support multilingue : francais, anglais, espagnol, allemand et plus. Fonctionne 100% hors ligne.",
    gc_f3_title: "Analyse IA embarquee",
    gc_f3_desc: "Resume automatique, extraction des sujets cles, prochaines etapes identifiees. Propulse par Apple Intelligence — tout reste sur votre appareil.",
    gc_f4_title: "Chat IA",
    gc_f4_desc: "Posez des questions sur vos enregistrements. \"Quels etaient les points d'action ?\" \"Qu'a-t-on dit sur le budget ?\" L'IA repond en se basant sur le contenu.",
    gc_f5_title: "Apple Watch",
    gc_f5_desc: "Controlez l'enregistrement depuis votre poignet. Pendant un appel sur haut-parleur, la Watch enregistre via son micro. Transfert automatique vers l'iPhone.",
    gc_f6_title: "Organisation & productivite",
    gc_f6_desc: "Ajoutez les actions dans vos Rappels Apple. Integrez votre calendrier. Filtrez par favoris, recherchez par titre ou contenu. Widget d'acces rapide.",

    // Get Calls security
    gc_security_title: "Securite & vie privee",
    gc_s1: "Verrouillage par Face ID et code a 4 chiffres",
    gc_s2: "Aucune donnee envoyee a un serveur",
    gc_s3: "Tout est traite sur l'appareil",
    gc_s4: "Vos enregistrements restent dans le stockage local",
    gc_s5: "Aucun tracking, aucune analytique tierce",
    gc_s6: "Label App Store : \"No Data Collected\"",

    // Get Calls compatibility
    gc_compat_title: "Compatibilite",
    gc_c1: "Necessite Apple Intelligence active",
    gc_c2: "Categorie : Productivite",
    gc_c3: "Age : 4+",
    gc_c4: "Prix : Gratuit",

    // Get Calls languages
    gc_lang_title: "Langues supportees",

    // Get Calls CTA
    gc_cta_title: "Interesse par Get Calls ?",
    gc_cta_sub: "Contactez-nous pour en savoir plus.",

    // Get Calls Privacy Policy
    gc_pp_title: "Politique de confidentialite",
    pp_updated: "Derniere mise a jour :",
    pp_overview: "Presentation",
    gc_pp1: "Get Calls est developpe par Connected Mate (Alexandre Cormeraie). Nous nous engageons a proteger votre vie privee. Cette politique explique comment l'application gere vos donnees.",
    pp_data: "Collecte de donnees",
    gc_pp2: "Get Calls ne collecte, ne transmet et ne partage aucune donnee personnelle avec des serveurs externes. Tout le traitement se fait localement sur votre appareil.",
    pp_no_account: "Aucune creation de compte requise",
    pp_no_cloud: "Aucun service cloud utilise",
    pp_no_analytics: "Aucun SDK d'analytique ou de tracking",
    pp_no_cookies: "Aucun cookie",
    pp_no_telemetry: "Aucune telemetrie",
    gc_pp3_title: "Enregistrements et transcriptions",
    gc_pp3: "Tous les enregistrements audio et transcriptions sont stockes exclusivement sur votre appareil dans le stockage local. Ils ne sont jamais uploades, synchronises ou partages avec un serveur ou tiers. Vous avez un controle total sur vos donnees et pouvez supprimer les enregistrements a tout moment.",
    gc_pp4_title: "Analyse IA",
    gc_pp4: "Les fonctionnalites d'IA (resumes, extraction de sujets, chat) sont traitees entierement sur l'appareil via Apple Intelligence. Aucun audio, texte ou resultat d'analyse n'est envoye a des serveurs externes.",
    gc_pp5_title: "Acces au microphone",
    gc_pp5: "Get Calls necessite l'acces au microphone pour enregistrer l'audio. Cette permission est demandee via le systeme de permissions standard iOS. Le microphone n'est actif que lorsque vous demarrez explicitement un enregistrement.",
    pp_third_party: "Services tiers",
    gc_pp6: "Get Calls n'integre aucun service tiers, framework publicitaire ou plateforme d'analytique. Le label de confidentialite App Store indique : \"Aucune donnee collectee\".",
    pp_gdpr: "Conformite RGPD & CCPA",
    gc_pp7: "Puisque Get Calls ne collecte ni ne transmet aucune donnee personnelle, l'application est conforme au RGPD et au CCPA par conception.",
    pp_children: "Vie privee des enfants",
    gc_pp8: "Get Calls ne collecte aucune donnee de quiconque, y compris les enfants de moins de 13 ans. L'application est classee 4+ et est sure pour tous les ages.",
    pp_changes: "Modifications de cette politique",
    pp_changes_text: "Nous pouvons mettre a jour cette politique de confidentialite de temps en temps. Les modifications seront refletees sur cette page avec une date mise a jour.",
    pp_contact_text: "Si vous avez des questions sur cette politique de confidentialite, contactez-nous :",

    // Better Dictate features
    bd_modes_title: "Trois modes puissants",
    bd_m1_title: "Push-to-Talk",
    bd_m1_desc: "Maintenez votre raccourci, parlez, relachez. Le texte s'ecrit instantanement a l'endroit de votre curseur. Ideal pour les messages courts, emails et notes rapides.",
    bd_m2_title: "Dictee vers le presse-papiers",
    bd_m2_desc: "Mode mains libres. Appuyez une fois pour demarrer, parlez librement, appuyez pour arreter. Le texte est copie dans le presse-papiers, pret a coller.",
    bd_m3_title: "Traduction en direct",
    bd_m3_desc: "La fonctionnalite magique. Selectionnez une langue cible et parlez dans votre langue maternelle — Better Dictate ecrit automatiquement dans la langue cible.",
    bd_features_title: "Fonctionnalites",
    bd_f1_title: "100% Hors ligne",
    bd_f1_desc: "Tout le traitement se fait sur votre Mac. Aucune donnee n'est envoyee a un serveur. Votre voix ne quitte jamais votre ordinateur. Conforme RGPD et CCPA par design.",
    bd_f2_title: "Apple Silicon optimise",
    bd_f2_desc: "Optimise pour les puces M1, M2, M3 et M4 avec acceleration Metal GPU. Transcription ultra-rapide avec un impact minimal sur la batterie.",
    bd_f3_title: "Dictionnaire personnalise",
    bd_f3_desc: "Ajoutez des mots specialises, noms propres et auto-corrections. Filtre de vulgarite integre. Generation assistee par IA.",
    bd_f4_title: "Technologie d'assistance",
    bd_f4_desc: "Conçu pour les personnes avec handicap moteur, troubles de la parole ou difficultes cognitives. Remplacez entierement la saisie clavier par la voix.",
    bd_f5_title: "Modeles Whisper au choix",
    bd_f5_desc: "Tiny (~75 Mo), Small (~500 Mo, recommande), Medium (~1.5 Go) ou Large (~3 Go). Choisissez l'equilibre entre vitesse et precision.",
    bd_f6_title: "Menu bar discret",
    bd_f6_desc: "L'app se place dans la barre de menu. Toujours prete, discrete. Lancez au demarrage, baissez le volume automatiquement pendant la dictee.",
    bd_lang_title: "Langues supportees",
    bd_req_title: "Configuration requise",
    bd_r1: "Mac avec Apple Silicon (M1, M2, M3, M4)",
    bd_r2: "macOS 13.0 (Ventura) minimum",
    bd_r3: "Micro integre ou externe",
    bd_r4: "1 a 3 Go d'espace disque",
    bd_r5: "Aucune connexion internet requise (sauf telechargement initial du modele)",
    bd_cta_title: "Interesse par Better Dictate ?",
    bd_cta_sub: "Contactez-nous pour en savoir plus.",
    bd_pp_title: "Politique de confidentialite",
    bd_pp1: "Better Dictate est developpe par Connected Mate (Alexandre Cormeraie). Nous nous engageons a proteger votre vie privee. Cette politique explique comment l'application gere vos donnees.",
    bd_pp2: "Better Dictate ne collecte, ne stocke, ne transmet et ne partage aucune donnee personnelle. L'application fonctionne 100% hors ligne sur votre Mac.",
    bd_pp3_title: "Donnees vocales et audio",
    bd_pp3: "Votre voix est traitee entierement sur votre appareil via le modele Whisper AI. L'audio est traite en temps reel en memoire et n'est jamais enregistre, sauvegarde ou transmis. Une fois la transcription terminee, les donnees audio sont immediatement supprimees.",
    bd_pp4_title: "Acces internet",
    bd_pp4: "Le seul moment ou Better Dictate se connecte a internet est pour telecharger le modele Whisper AI au premier lancement. Apres cela, l'application fonctionne entierement hors ligne.",
    bd_pp5: "Better Dictate n'integre aucun service tiers, framework publicitaire ou plateforme d'analytique.",
    bd_pp6: "Puisque Better Dictate ne collecte aucune donnee personnelle, l'application est conforme au RGPD et au CCPA par conception.",
    bd_pp7: "Better Dictate ne collecte aucune donnee de quiconque, y compris les enfants de moins de 13 ans. L'application est sure pour tous les ages.",

    // Contact page
    contact_title: "Contactez-nous",
    contact_sub: "Une question, un retour, un projet ? On est la.",
    contact_wa_desc: "Reponse rapide. Ecrivez-nous directement sur WhatsApp pour toute question sur nos applications.",
    contact_wa_btn: "Ouvrir WhatsApp",
    contact_email_desc: "Pour les demandes detaillees, partenariats ou questions techniques.",
    contact_email_btn: "Envoyer un email",
    contact_form_title: "Formulaire de contact",
    contact_form_sub: "Remplissez le formulaire ci-dessous. En cliquant sur \"Envoyer\", votre application de messagerie s'ouvrira avec le message pre-rempli.",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_email_ph: "votre@email.com",
    form_subject: "Sujet",
    form_subject_ph: "A propos de...",
    form_message_ph: "Votre message...",
    form_send: "Envoyer",

    // Footer
    footer_rights: "Tous droits reserves."
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
