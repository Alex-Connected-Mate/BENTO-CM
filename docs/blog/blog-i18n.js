// Blog i18n — French is default, English translations via data-en attributes
// Also handles nav/footer translation using the main site's data-i18n system
(function () {
  var lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  var isFr = lang.startsWith('fr');

  // Nav & footer translations (English → French, same as main site)
  var fr = {
    nav_apps: "Apps",
    nav_podcast: "Podcast",
    nav_about: "\u00C0 propos",
    nav_contact: "Contact",
    footer_rights: "Tous droits r\u00e9serv\u00e9s.",
    footer_opensource: "Open source sur GitHub",
    blog_hero_title: "Blog Connected Mate",
    blog_hero_sub: "IA locale, vie priv\u00e9e, productivit\u00e9, transformation digitale et Gen Z dans la tech. Nos analyses et convictions.",
    blog_related: "Articles connexes",
    blog_filter_all: "Tous",
    blog_filter_portrait: "Portrait",
    blog_filter_leadership: "Leadership",
    blog_filter_iatech: "IA & Tech",
    blog_filter_apps: "Apps",
    blog_filter_vision: "Vision",
    blog_filter_strategy: "Strat\u00e9gie",
    blog_filter_career: "Carri\u00e8re",
    blog_filter_events: "\u00c9v\u00e9nements",
    blog_filter_podcast: "Podcast",
    blog_by: "Par",
    blog_at: "Connected Mate"
  };

  function translate() {
    if (isFr) {
      // French browser → translate nav/footer to French, content stays as-is (already French)
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (fr[key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.placeholder) el.placeholder = fr[key];
          } else {
            el.innerHTML = fr[key];
          }
        }
      });
      document.documentElement.lang = 'fr';
    } else {
      // Non-French browser → swap French content with English via data-en attributes
      document.querySelectorAll('[data-en]').forEach(function (el) {
        var en = el.getAttribute('data-en');
        if (en) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.placeholder) el.placeholder = en;
          } else {
            el.innerHTML = en;
          }
        }
      });
      document.documentElement.lang = 'en';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translate);
  } else {
    translate();
  }
})();
