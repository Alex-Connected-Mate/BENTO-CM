/* Coding Mate — formations : sous-navigation active + confort d'ouverture des jours. */
(function () {
  'use strict';

  // Sous-navigation : se cale sous l'en-tête collant, puis surligne la section visible.
  var subnav = document.querySelector('.fm-subnav');
  var header = document.querySelector('.site-header');
  if (subnav && header) {
    var syncOffset = function () { subnav.style.setProperty('--fm-header-h', header.offsetHeight + 'px'); };
    syncOffset();
    window.addEventListener('resize', syncOffset);
  }
  if (subnav && 'IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(subnav.querySelectorAll('a[href^="#"]'));
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var setActive = function (id) {
      links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + id); });
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Lien profond vers un jour (#jour-2) : ouvre le bloc correspondant.
  var openFromHash = function () {
    var id = window.location.hash.replace('#', '');
    if (!id) return;
    var target = document.getElementById(id);
    if (target && target.tagName === 'DETAILS') target.open = true;
  };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
