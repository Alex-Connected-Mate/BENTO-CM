/* Smart App Banner — custom install banner for non-Safari browsers.
   Safari on iPhone/iPad already shows the native Smart App Banner
   (apple-itunes-app meta), so this script renders nothing there.
   Config via data attributes on the <script> tag:
     data-app-id   App Store numeric id (required)
     data-app-name Display name (required)
     data-icon     Path to the app icon (required)
     data-lang     "fr" or "en" (default "fr")
     data-mt       Optional media type query param (e.g. "12" for Mac App Store)
   Dismissal is stored in localStorage for 14 days, per app id. */
(function () {
  'use strict';

  var script = document.currentScript ||
    document.querySelector('script[src*="smart-banner.js"]');
  if (!script) return;

  var appId = script.getAttribute('data-app-id');
  var appName = script.getAttribute('data-app-name');
  var icon = script.getAttribute('data-icon');
  if (!appId || !appName || !icon) return;

  var lang = script.getAttribute('data-lang') === 'en' ? 'en' : 'fr';
  var mt = script.getAttribute('data-mt');

  // Safari on iOS/iPadOS: the native Smart App Banner handles it.
  var ua = navigator.userAgent;
  var isIOSDevice = /iPhone|iPad|iPod/.test(navigator.platform || '') ||
    /iPhone|iPad|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1); // iPadOS desktop UA
  var isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS|EdgiOS|OPiOS|Chromium/.test(ua);
  if (isIOSDevice && isSafari) return;

  // Dismissed less than 14 days ago → stay hidden.
  var storageKey = 'cm-smart-banner-dismissed-' + appId;
  var TTL = 14 * 24 * 60 * 60 * 1000;
  try {
    var dismissedAt = parseInt(localStorage.getItem(storageKey), 10);
    if (dismissedAt && Date.now() - dismissedAt < TTL) return;
  } catch (e) { /* storage unavailable → always show */ }

  var labels = lang === 'en'
    ? { cta: 'Get', store: 'On the App Store', open: 'Open in the App Store', close: 'Dismiss' }
    : { cta: 'Obtenir', store: 'Sur l’App Store', open: 'Ouvrir dans l’App Store', close: 'Fermer' };

  var storeUrl = 'https://apps.apple.com/' + lang + '/app/id' + appId + (mt ? '?mt=' + mt : '');

  function render() {
    var banner = document.createElement('div');
    banner.className = 'cm-smart-banner';
    banner.setAttribute('role', 'banner');

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'cm-smart-banner__close';
    close.setAttribute('aria-label', labels.close);
    close.innerHTML = '&#10005;';
    close.addEventListener('click', function () {
      try { localStorage.setItem(storageKey, String(Date.now())); } catch (e) {}
      banner.remove();
    });

    var img = document.createElement('img');
    img.className = 'cm-smart-banner__icon';
    img.src = icon;
    img.alt = '';
    img.width = 48;
    img.height = 48;

    var text = document.createElement('div');
    text.className = 'cm-smart-banner__text';
    var name = document.createElement('span');
    name.className = 'cm-smart-banner__name';
    name.textContent = appName;
    var store = document.createElement('span');
    store.className = 'cm-smart-banner__store';
    store.textContent = labels.store;
    text.appendChild(name);
    text.appendChild(store);

    var cta = document.createElement('a');
    cta.className = 'cm-smart-banner__cta';
    cta.href = storeUrl;
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.textContent = labels.cta;
    cta.setAttribute('aria-label', labels.open);

    banner.appendChild(close);
    banner.appendChild(img);
    banner.appendChild(text);
    banner.appendChild(cta);
    document.body.insertBefore(banner, document.body.firstChild);
  }

  if (document.body) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render);
  }
})();
