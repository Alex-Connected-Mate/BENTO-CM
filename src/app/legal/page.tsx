"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

const sections = [
  {
    id: "mentions",
    title: "Mentions légales",
    short: "Mentions",
    content: [
      { subtitle: "Éditeur du site", text: "Le site Bento Connected Mate est édité par la société Connected Mate SAS, société par actions simplifiée au capital de 10 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris. Siège social : 42 rue de l\u2019Innovation, 75001 Paris, France. Directeur de la publication : Alexandre Martin, Président." },
      { subtitle: "Hébergement", text: "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Les données sont traitées conformément au RGPD avec des garanties appropriées pour les transferts internationaux de données." },
      { subtitle: "Propriété intellectuelle", text: "L\u2019ensemble des contenus présents sur le site (textes, images, logos, vidéos, graphismes) sont protégés par le droit d\u2019auteur et le droit des marques. Toute reproduction, représentation ou diffusion, totale ou partielle, est interdite sans autorisation préalable écrite de Connected Mate SAS." },
      { subtitle: "Contact", text: "Pour toute question relative au site, vous pouvez nous contacter à l\u2019adresse : legal@connectedmate.com ou par courrier à l\u2019adresse du siège social." },
    ],
  },
  {
    id: "cgu",
    title: "Conditions générales d\u2019utilisation",
    short: "CGU",
    content: [
      { subtitle: "Objet", text: "Les présentes Conditions Générales d\u2019Utilisation (CGU) ont pour objet de définir les modalités d\u2019accès et d\u2019utilisation du site Bento Connected Mate et de l\u2019ensemble des services proposés par Connected Mate SAS." },
      { subtitle: "Accès au site", text: "L\u2019accès au site est gratuit. L\u2019utilisateur est responsable de son équipement informatique et de son accès à Internet. Connected Mate SAS se réserve le droit de suspendre ou d\u2019interrompre l\u2019accès au site pour des raisons de maintenance ou de mise à jour, sans préavis ni indemnité." },
      { subtitle: "Utilisation des services", text: "L\u2019utilisateur s\u2019engage à utiliser le site et les services de manière conforme à la loi et aux présentes CGU. Il est interdit d\u2019utiliser le site à des fins illégales, de tenter d\u2019accéder de manière non autorisée aux systèmes informatiques, ou de perturber le fonctionnement normal du site." },
      { subtitle: "Comptes utilisateurs", text: "Certains services nécessitent la création d\u2019un compte. L\u2019utilisateur est responsable de la confidentialité de ses identifiants et de toutes les activités réalisées sous son compte. En cas d\u2019utilisation non autorisée, l\u2019utilisateur doit en informer Connected Mate immédiatement." },
      { subtitle: "Responsabilité", text: "Connected Mate SAS met tout en œuvre pour assurer la fiabilité des informations diffusées sur le site, mais ne saurait garantir l\u2019exactitude, la complétude ou l\u2019actualité de ces informations." },
      { subtitle: "Modification des CGU", text: "Connected Mate SAS se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site." },
    ],
  },
  {
    id: "privacy",
    title: "Politique de confidentialité",
    short: "Confidentialité",
    content: [
      { subtitle: "Données collectées", text: "Dans le cadre de l\u2019utilisation du site et de nos services, nous pouvons être amenés à collecter les données personnelles suivantes : nom, prénom, adresse email, numéro de téléphone, données de connexion (adresse IP, logs), données d\u2019utilisation des services." },
      { subtitle: "Finalités du traitement", text: "Vos données sont traitées pour les finalités suivantes : gestion de votre compte utilisateur, fourniture et amélioration de nos services, communication (newsletters, notifications), analyse statistique et amélioration du site, respect de nos obligations légales." },
      { subtitle: "Base légale", text: "Le traitement de vos données repose sur : votre consentement (newsletters, cookies), l\u2019exécution d\u2019un contrat (fourniture des services), notre intérêt légitime (amélioration des services, sécurité), le respect d\u2019obligations légales." },
      { subtitle: "Durée de conservation", text: "Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après le dernier contact pour les données de prospection, conformément aux recommandations de la CNIL." },
      { subtitle: "Vos droits", text: "Conformément au RGPD, vous disposez des droits suivants : droit d\u2019accès, de rectification, d\u2019effacement, de limitation du traitement, de portabilité des données, d\u2019opposition. Pour exercer ces droits, contactez-nous à : dpo@connectedmate.com." },
      { subtitle: "Cookies", text: "Le site utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur." },
      { subtitle: "Transferts de données", text: "Vos données peuvent être transférées vers des pays hors de l\u2019Union Européenne dans le cadre de l\u2019hébergement (Vercel). Ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne." },
    ],
  },
  {
    id: "cgv",
    title: "Conditions générales de vente",
    short: "CGV",
    content: [
      { subtitle: "Services proposés", text: "Connected Mate SAS propose des services de plateforme collaborative, d\u2019analytics, de synchronisation de fichiers, de gestion d\u2019événements et d\u2019assistance par intelligence artificielle, accessibles via abonnement mensuel ou annuel." },
      { subtitle: "Tarifs et paiement", text: "Les tarifs sont indiqués en euros TTC sur les pages de chaque service. Le paiement s\u2019effectue par carte bancaire via notre prestataire de paiement sécurisé Stripe. Les factures sont disponibles dans votre espace client." },
      { subtitle: "Droit de rétractation", text: "Conformément à l\u2019article L.221-18 du Code de la consommation, vous disposez d\u2019un délai de 14 jours à compter de la souscription pour exercer votre droit de rétractation, sans avoir à justifier de motifs." },
      { subtitle: "Résiliation", text: "L\u2019abonnement peut être résilié à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période de facturation en cours. Aucun remboursement au prorata n\u2019est effectué." },
      { subtitle: "Droit applicable", text: "Les présentes conditions sont soumises au droit français. En cas de litige, les parties s\u2019engagent à rechercher une solution amiable avant de saisir les tribunaux compétents de Paris." },
    ],
  },
];

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("mentions");

  const current = sections.find((s) => s.id === activeSection) ?? sections[0];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Informations légales"
        subtitle="Mentions légales, conditions d\u2019utilisation et politique de confidentialité"
      />

      {/* Tab navigation - horizontally scrollable on mobile */}
      <div className="-mx-4 mb-6 overflow-x-auto px-4 sm:mx-0 sm:mb-8 sm:px-0">
        <div className="flex gap-1.5 sm:gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
                activeSection === section.id
                  ? "bg-[var(--color-text)] text-white shadow-sm"
                  : "bg-white text-[var(--color-text-muted)] hover:bg-gray-50 hover:text-[var(--color-text)]"
              }`}
            >
              <span className="sm:hidden">{section.short}</span>
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="rounded-[var(--radius)] bg-white p-5 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-text)] sm:mb-6 sm:text-2xl">
          {current.title}
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {current.content.map((item, i) => (
            <div key={i}>
              <h3 className="mb-1.5 text-[15px] font-semibold text-[var(--color-text)] sm:mb-2 sm:text-base">
                {item.subtitle}
              </h3>
              <p className="text-[13px] leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-8 sm:pt-6">
          <p className="text-[11px] text-gray-400 sm:text-xs">
            Dernière mise à jour : février 2026 &middot; Connected Mate SAS &middot; Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}
