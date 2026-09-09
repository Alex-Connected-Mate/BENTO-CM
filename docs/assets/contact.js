/* Contact — pré-remplit WhatsApp, e-mail et formulaire selon l'objet de la demande (?intent=). */
(function () {
  'use strict';
  var english = document.documentElement.lang === 'en';
  var content = english ? {
    formation: {
      title: 'Let’s talk about your training.',
      description: 'Your experience, your goals, your working environment: we will shape the right Vibe Designing session together.',
      subject: 'Coding Mate — Vibe Designing training',
      message: 'Hello Alexandre, I am interested in the Vibe Designing training (Coding Mate). Here is my context: '
    },
    partenaire: {
      title: 'Bring Vibe Designing to your clients.',
      description: 'Training provider, agency or consultancy? Let’s discuss a programme tailored to your clients and the terms of our partnership.',
      subject: 'Coding Mate — Training partnership',
      message: 'Hello Alexandre, I would like to offer the Vibe Designing training to my clients. Can we discuss a partnership?'
    },
    general: {
      title: 'A conversation starts here.',
      description: 'Training, a keynote, a project or a question about our apps? Write to Alexandre directly.',
      subject: 'Contact — Connected Mate',
      message: 'Hello Alexandre, I am contacting you through Connected Mate.'
    }
  } : {
    formation: {
      title: 'Parlons de votre formation.',
      description: 'Votre expérience, vos objectifs, votre environnement de travail : construisons ensemble la bonne session de Vibe Designing.',
      subject: 'Coding Mate — Formation Vibe Designing',
      message: 'Bonjour Alexandre, je souhaite échanger sur la formation Vibe Designing (Coding Mate). Voici mon contexte : '
    },
    partenaire: {
      title: 'Proposez Vibe Designing à vos clients.',
      description: 'Organisme de formation, agence ou cabinet de conseil ? Échangeons sur un programme adapté à vos clients et les modalités de notre partenariat.',
      subject: 'Coding Mate — Partenariat formation',
      message: 'Bonjour Alexandre, je souhaite proposer la formation Vibe Designing à mes clients. Pouvons-nous échanger sur un partenariat ?'
    },
    general: {
      title: 'Tout commence par un échange.',
      description: 'Une formation, une conférence, un projet ou une question sur nos applications ? Écrivez directement à Alexandre.',
      subject: 'Contact — Connected Mate',
      message: 'Bonjour Alexandre, je vous contacte via Connected Mate.'
    }
  };

  var requested = new URLSearchParams(window.location.search).get('intent');
  var intent = Object.prototype.hasOwnProperty.call(content, requested) ? requested : 'general';
  var selected = content[intent];
  var byId = function (id) { return document.getElementById(id); };

  var title = byId('contact-title');
  var description = byId('contact-description');
  if (title) title.textContent = selected.title;
  if (description) description.textContent = selected.description;

  document.querySelectorAll('[data-contact-intent]').forEach(function (link) {
    if (link.getAttribute('data-contact-intent') === intent) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  var whatsappURL = 'https://wa.me/alexandre.cormeraie?text=' + encodeURIComponent(selected.message);
  var emailURL = 'mailto:alex.connectedmate@gmail.com?subject=' + encodeURIComponent(selected.subject) + '&body=' + encodeURIComponent(selected.message + '\n\n');

  var whatsapp = byId('contact-whatsapp');
  var email = byId('contact-email');
  if (whatsapp) whatsapp.href = whatsappURL;
  if (email) email.href = emailURL;

  var subjectField = byId('subject');
  if (subjectField && !subjectField.value) subjectField.value = selected.subject;

  var switchLanguage = byId('contact-language');
  if (switchLanguage && intent !== 'general') switchLanguage.href += '?intent=' + encodeURIComponent(intent);
})();
