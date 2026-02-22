"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

const sections = [
  {
    id: "mentions",
    title: "Mentions l\u00e9gales",
    short: "Mentions",
    content: [
      { subtitle: "\u00c9diteur du site", text: "Le site Bento Connected Mate est \u00e9dit\u00e9 par la soci\u00e9t\u00e9 Connected Mate SAS, soci\u00e9t\u00e9 par actions simplifi\u00e9e au capital de 10 000 \u20ac, immatricul\u00e9e au Registre du Commerce et des Soci\u00e9t\u00e9s de Paris. Si\u00e8ge social : 42 rue de l\u2019Innovation, 75001 Paris, France. Directeur de la publication : Alexandre Martin, Pr\u00e9sident." },
      { subtitle: "H\u00e9bergement", text: "Le site est h\u00e9berg\u00e9 par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, \u00c9tats-Unis. Les donn\u00e9es sont trait\u00e9es conform\u00e9ment au RGPD avec des garanties appropri\u00e9es pour les transferts internationaux de donn\u00e9es." },
      { subtitle: "Propri\u00e9t\u00e9 intellectuelle", text: "L\u2019ensemble des contenus pr\u00e9sents sur le site (textes, images, logos, vid\u00e9os, graphismes) sont prot\u00e9g\u00e9s par le droit d\u2019auteur et le droit des marques. Toute reproduction, repr\u00e9sentation ou diffusion, totale ou partielle, est interdite sans autorisation pr\u00e9alable \u00e9crite de Connected Mate SAS." },
      { subtitle: "Contact", text: "Pour toute question relative au site, vous pouvez nous contacter \u00e0 l\u2019adresse : legal@connectedmate.com ou par courrier \u00e0 l\u2019adresse du si\u00e8ge social." },
    ],
  },
  {
    id: "cgu",
    title: "Conditions g\u00e9n\u00e9rales d\u2019utilisation",
    short: "CGU",
    content: [
      { subtitle: "Objet", text: "Les pr\u00e9sentes Conditions G\u00e9n\u00e9rales d\u2019Utilisation (CGU) ont pour objet de d\u00e9finir les modalit\u00e9s d\u2019acc\u00e8s et d\u2019utilisation du site Bento Connected Mate et de l\u2019ensemble des services propos\u00e9s par Connected Mate SAS." },
      { subtitle: "Acc\u00e8s au site", text: "L\u2019acc\u00e8s au site est gratuit. L\u2019utilisateur est responsable de son \u00e9quipement informatique et de son acc\u00e8s \u00e0 Internet. Connected Mate SAS se r\u00e9serve le droit de suspendre ou d\u2019interrompre l\u2019acc\u00e8s au site pour des raisons de maintenance ou de mise \u00e0 jour, sans pr\u00e9avis ni indemnit\u00e9." },
      { subtitle: "Utilisation des services", text: "L\u2019utilisateur s\u2019engage \u00e0 utiliser le site et les services de mani\u00e8re conforme \u00e0 la loi et aux pr\u00e9sentes CGU. Il est interdit d\u2019utiliser le site \u00e0 des fins ill\u00e9gales, de tenter d\u2019acc\u00e9der de mani\u00e8re non autoris\u00e9e aux syst\u00e8mes informatiques, ou de perturber le fonctionnement normal du site." },
      { subtitle: "Comptes utilisateurs", text: "Certains services n\u00e9cessitent la cr\u00e9ation d\u2019un compte. L\u2019utilisateur est responsable de la confidentialit\u00e9 de ses identifiants et de toutes les activit\u00e9s r\u00e9alis\u00e9es sous son compte. En cas d\u2019utilisation non autoris\u00e9e, l\u2019utilisateur doit en informer Connected Mate imm\u00e9diatement." },
      { subtitle: "Responsabilit\u00e9", text: "Connected Mate SAS met tout en \u0153uvre pour assurer la fiabilit\u00e9 des informations diffus\u00e9es sur le site, mais ne saurait garantir l\u2019exactitude, la compl\u00e9tude ou l\u2019actualit\u00e9 de ces informations." },
      { subtitle: "Modification des CGU", text: "Connected Mate SAS se r\u00e9serve le droit de modifier les pr\u00e9sentes CGU \u00e0 tout moment. Les modifications prennent effet d\u00e8s leur publication sur le site." },
    ],
  },
  {
    id: "privacy",
    title: "Politique de confidentialit\u00e9",
    short: "Confidentialit\u00e9",
    content: [
      { subtitle: "Donn\u00e9es collect\u00e9es", text: "Dans le cadre de l\u2019utilisation du site et de nos services, nous pouvons \u00eatre amen\u00e9s \u00e0 collecter les donn\u00e9es personnelles suivantes : nom, pr\u00e9nom, adresse email, num\u00e9ro de t\u00e9l\u00e9phone, donn\u00e9es de connexion (adresse IP, logs), donn\u00e9es d\u2019utilisation des services." },
      { subtitle: "Finalit\u00e9s du traitement", text: "Vos donn\u00e9es sont trait\u00e9es pour les finalit\u00e9s suivantes : gestion de votre compte utilisateur, fourniture et am\u00e9lioration de nos services, communication (newsletters, notifications), analyse statistique et am\u00e9lioration du site, respect de nos obligations l\u00e9gales." },
      { subtitle: "Base l\u00e9gale", text: "Le traitement de vos donn\u00e9es repose sur : votre consentement (newsletters, cookies), l\u2019ex\u00e9cution d\u2019un contrat (fourniture des services), notre int\u00e9r\u00eat l\u00e9gitime (am\u00e9lioration des services, s\u00e9curit\u00e9), le respect d\u2019obligations l\u00e9gales." },
      { subtitle: "Dur\u00e9e de conservation", text: "Vos donn\u00e9es sont conserv\u00e9es pendant la dur\u00e9e n\u00e9cessaire \u00e0 la r\u00e9alisation des finalit\u00e9s pour lesquelles elles ont \u00e9t\u00e9 collect\u00e9es, et au maximum 3 ans apr\u00e8s le dernier contact pour les donn\u00e9es de prospection, conform\u00e9ment aux recommandations de la CNIL." },
      { subtitle: "Vos droits", text: "Conform\u00e9ment au RGPD, vous disposez des droits suivants : droit d\u2019acc\u00e8s, de rectification, d\u2019effacement, de limitation du traitement, de portabilit\u00e9 des donn\u00e9es, d\u2019opposition. Pour exercer ces droits, contactez-nous \u00e0 : dpo@connectedmate.com." },
      { subtitle: "Cookies", text: "Le site utilise des cookies techniques n\u00e9cessaires \u00e0 son fonctionnement et des cookies analytiques pour am\u00e9liorer votre exp\u00e9rience. Vous pouvez g\u00e9rer vos pr\u00e9f\u00e9rences de cookies \u00e0 tout moment via les param\u00e8tres de votre navigateur." },
      { subtitle: "Transferts de donn\u00e9es", text: "Vos donn\u00e9es peuvent \u00eatre transf\u00e9r\u00e9es vers des pays hors de l\u2019Union Europ\u00e9enne dans le cadre de l\u2019h\u00e9bergement (Vercel). Ces transferts sont encadr\u00e9s par des clauses contractuelles types approuv\u00e9es par la Commission europ\u00e9enne." },
    ],
  },
  {
    id: "cgv",
    title: "Conditions g\u00e9n\u00e9rales de vente",
    short: "CGV",
    content: [
      { subtitle: "Services propos\u00e9s", text: "Connected Mate SAS propose des services de plateforme collaborative, d\u2019analytics, de synchronisation de fichiers, de gestion d\u2019\u00e9v\u00e9nements et d\u2019assistance par intelligence artificielle, accessibles via abonnement mensuel ou annuel." },
      { subtitle: "Tarifs et paiement", text: "Les tarifs sont indiqu\u00e9s en euros TTC sur les pages de chaque service. Le paiement s\u2019effectue par carte bancaire via notre prestataire de paiement s\u00e9curis\u00e9 Stripe. Les factures sont disponibles dans votre espace client." },
      { subtitle: "Droit de r\u00e9tractation", text: "Conform\u00e9ment \u00e0 l\u2019article L.221-18 du Code de la consommation, vous disposez d\u2019un d\u00e9lai de 14 jours \u00e0 compter de la souscription pour exercer votre droit de r\u00e9tractation, sans avoir \u00e0 justifier de motifs." },
      { subtitle: "R\u00e9siliation", text: "L\u2019abonnement peut \u00eatre r\u00e9sili\u00e9 \u00e0 tout moment depuis votre espace client. La r\u00e9siliation prend effet \u00e0 la fin de la p\u00e9riode de facturation en cours. Aucun remboursement au prorata n\u2019est effectu\u00e9." },
      { subtitle: "Droit applicable", text: "Les pr\u00e9sentes conditions sont soumises au droit fran\u00e7ais. En cas de litige, les parties s\u2019engagent \u00e0 rechercher une solution amiable avant de saisir les tribunaux comp\u00e9tents de Paris." },
    ],
  },
];

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("mentions");

  const current = sections.find((s) => s.id === activeSection) ?? sections[0];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Informations l\u00e9gales"
        subtitle="Mentions l\u00e9gales, conditions d\u2019utilisation et politique de confidentialit\u00e9"
      />

      {/* Tab navigation - horizontally scrollable on mobile */}
      <div className="-mx-3 mb-5 overflow-x-auto px-3 sm:-mx-4 sm:mb-8 sm:mx-0 sm:px-0">
        <div className="flex gap-1.5 sm:gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`shrink-0 rounded-full px-3 py-2 text-[13px] font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
                activeSection === section.id
                  ? "bg-[var(--color-accent)] text-white shadow-sm"
                  : "bg-[var(--color-card)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
              }`}
            >
              <span className="sm:hidden">{section.short}</span>
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="rounded-[var(--radius)] bg-[var(--color-card)] p-4 sm:p-8">
        <h2 className="mb-4 font-[Space_Grotesk] text-xl font-bold text-[var(--color-text)] sm:mb-6 sm:text-2xl">
          {current.title}
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {current.content.map((item, i) => (
            <div key={i}>
              <h3 className="mb-1.5 font-[Space_Grotesk] text-[15px] font-semibold text-[var(--color-text)] sm:mb-2 sm:text-base">
                {item.subtitle}
              </h3>
              <p className="text-[13px] leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-[var(--color-accent)]/10 pt-4 sm:mt-8 sm:pt-6">
          <p className="text-[11px] text-[var(--color-text-muted)]/60 sm:text-xs">
            Derni\u00e8re mise \u00e0 jour : f\u00e9vrier 2026 &middot; Connected Mate SAS &middot; Tous droits r\u00e9serv\u00e9s
          </p>
        </div>
      </div>
    </div>
  );
}
