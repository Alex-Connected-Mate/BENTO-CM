"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

const sections = [
  {
    id: "mentions",
    title: "Mentions légales",
    short: "Mentions",
    content: [
      { subtitle: "Éditeur du site", text: "Le site Connected Mate est édité par la société CONNECTED MATE, société par actions simplifiée (SAS) au capital de 100 €, immatriculée au Registre National des Entreprises. SIREN : 937 888 717 — SIRET : 937 888 717 00017. Siège social : 74 avenue du Général Leclerc, 75014 Paris, France. Activité : Conseil pour les affaires et autres conseils de gestion (NAF 70.22Z). Date de création : 26 novembre 2024." },
      { subtitle: "Hébergement", text: "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Les données sont traitées conformément au RGPD avec des garanties appropriées pour les transferts internationaux de données." },
      { subtitle: "Propriété intellectuelle", text: "L'ensemble des contenus présents sur le site (textes, images, logos, vidéos, graphismes) sont protégés par le droit d'auteur et le droit des marques. Toute reproduction, représentation ou diffusion, totale ou partielle, est interdite sans autorisation préalable écrite de Connected Mate SAS." },
      { subtitle: "Contact", text: "Pour toute question relative au site, vous pouvez nous contacter à l'adresse : legal@connectedmate.com ou par courrier au siège social : 74 avenue du Général Leclerc, 75014 Paris." },
    ],
  },
  {
    id: "cgu",
    title: "Conditions générales d'utilisation",
    short: "CGU",
    content: [
      { subtitle: "Objet", text: "Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation du site Bento Connected Mate et de l'ensemble des services proposés par Connected Mate SAS." },
      { subtitle: "Accès au site", text: "L'accès au site est gratuit. L'utilisateur est responsable de son équipement informatique et de son accès à Internet. Connected Mate SAS se réserve le droit de suspendre ou d'interrompre l'accès au site pour des raisons de maintenance ou de mise à jour, sans préavis ni indemnité." },
      { subtitle: "Utilisation des services", text: "L'utilisateur s'engage à utiliser le site et les services de manière conforme à la loi et aux présentes CGU. Il est interdit d'utiliser le site à des fins illégales, de tenter d'accéder de manière non autorisée aux systèmes informatiques, ou de perturber le fonctionnement normal du site." },
      { subtitle: "Comptes utilisateurs", text: "Certains services nécessitent la création d'un compte. L'utilisateur est responsable de la confidentialité de ses identifiants et de toutes les activités réalisées sous son compte. En cas d'utilisation non autorisée, l'utilisateur doit en informer Connected Mate immédiatement." },
      { subtitle: "Responsabilité", text: "Connected Mate SAS met tout en œuvre pour assurer la fiabilité des informations diffusées sur le site, mais ne saurait garantir l'exactitude, la complétude ou l'actualité de ces informations." },
      { subtitle: "Modification des CGU", text: "Connected Mate SAS se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site." },
    ],
  },
  {
    id: "privacy",
    title: "Politique de confidentialité",
    short: "Confidentialité",
    content: [
      { subtitle: "Données collectées", text: "Dans le cadre de l'utilisation du site et de nos services, nous pouvons être amenés à collecter les données personnelles suivantes : nom, prénom, adresse email, numéro de téléphone, données de connexion (adresse IP, logs), données d'utilisation des services." },
      { subtitle: "Finalités du traitement", text: "Vos données sont traitées pour les finalités suivantes : gestion de votre compte utilisateur, fourniture et amélioration de nos services, communication (newsletters, notifications), analyse statistique et amélioration du site, respect de nos obligations légales." },
      { subtitle: "Base légale", text: "Le traitement de vos données repose sur : votre consentement (newsletters, cookies), l'exécution d'un contrat (fourniture des services), notre intérêt légitime (amélioration des services, sécurité), le respect d'obligations légales." },
      { subtitle: "Durée de conservation", text: "Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après le dernier contact pour les données de prospection, conformément aux recommandations de la CNIL." },
      { subtitle: "Vos droits", text: "Conformément au RGPD, vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité des données, d'opposition. Pour exercer ces droits, contactez-nous à : dpo@connectedmate.com." },
      { subtitle: "Cookies", text: "Le site utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur." },
      { subtitle: "Transferts de données", text: "Vos données peuvent être transférées vers des pays hors de l'Union Européenne dans le cadre de l'hébergement (Vercel). Ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne." },
    ],
  },
  {
    id: "cgv",
    title: "Conditions générales de vente",
    short: "CGV",
    content: [
      { subtitle: "Services proposés", text: "Connected Mate SAS propose des services de plateforme collaborative, d'analytics, de synchronisation de fichiers, de gestion d'événements et d'assistance par intelligence artificielle, accessibles via abonnement mensuel ou annuel." },
      { subtitle: "Tarifs et paiement", text: "Les tarifs sont indiqués en euros TTC sur les pages de chaque service. Le paiement s'effectue par carte bancaire via notre prestataire de paiement sécurisé Stripe. Les factures sont disponibles dans votre espace client." },
      { subtitle: "Droit de rétractation", text: "Conformément à l'article L.221-18 du Code de la consommation, vous disposez d'un délai de 14 jours à compter de la souscription pour exercer votre droit de rétractation, sans avoir à justifier de motifs." },
      { subtitle: "Résiliation", text: "L'abonnement peut être résilié à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période de facturation en cours. Aucun remboursement au prorata n'est effectué." },
      { subtitle: "Droit applicable", text: "Les présentes conditions sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant de saisir les tribunaux compétents de Paris." },
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
        subtitle="Mentions légales, conditions d'utilisation et politique de confidentialité"
      />

      {/* Tab navigation */}
      <div className="-mx-3 mb-5 overflow-x-auto px-3 sm:mx-0 sm:mb-8 sm:px-0">
        <div className="flex gap-1.5 sm:gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`shrink-0 text-[13px] font-medium sm:text-sm ${
                activeSection === section.id ? "nav-link--active" : ""
              }`}
              style={{
                borderRadius: 9999,
                padding: "8px 12px",
                transition: "background-color 0.15s, color 0.15s",
                backgroundColor: activeSection === section.id
                  ? "var(--color-accent)"
                  : "var(--color-card)",
                color: activeSection === section.id
                  ? "white"
                  : "var(--color-text-muted)",
              }}
            >
              <span className="sm:hidden">{section.short}</span>
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className="p-4 sm:p-8"
        style={{
          borderRadius: "var(--radius)",
          backgroundColor: "var(--color-card)",
          boxShadow: "0 1px 2px rgba(45, 27, 6, 0.04), 0 4px 12px rgba(45, 27, 6, 0.06)",
          border: "1px solid rgba(45, 27, 6, 0.06)",
        }}
      >
        <h2
          className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl"
          style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
        >
          {current.title}
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {current.content.map((item, i) => (
            <div key={i}>
              <h3
                className="mb-1.5 text-[15px] font-semibold sm:mb-2 sm:text-base"
                style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
              >
                {item.subtitle}
              </h3>
              <p className="text-[13px] leading-relaxed sm:text-sm" style={{ color: "var(--color-text-muted)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 sm:mt-8 sm:pt-6" style={{ borderTop: "1px solid rgba(232, 96, 10, 0.10)" }}>
          <p className="text-[11px] sm:text-xs" style={{ color: "var(--color-text-muted)", opacity: 0.6 }}>
            Dernière mise à jour : février 2026 &middot; Connected Mate SAS &middot; Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}
