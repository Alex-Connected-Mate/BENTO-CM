/* ═══════════════════════════════════════════════════════════
   CONNECTED MATE — ASCII Canvas Animation
   Shared background animation for all pages
   ═══════════════════════════════════════════════════════════ */

// Scratch Card (immediate, lightweight)
(function() {
  document.querySelectorAll('.scratch-canvas').forEach(function(canvas) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    var isDrawing = false;
    var totalPixels = w * h;

    // Draw overlay
    ctx.fillStyle = '#1a1a1c';
    ctx.fillRect(0, 0, w, h);

    // Diagonal stripes
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (var i = -h; i < w + h; i += 6) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - h, h);
      ctx.stroke();
    }

    // After drawing stripes, add metallic speckles
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    for (var sp = 0; sp < 80; sp++) {
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 0.5 + Math.random() * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Darker flecks
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    for (var df = 0; df < 40; df++) {
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 0.3 + Math.random() * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add grain texture
    var imageData = ctx.getImageData(0, 0, w, h);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var noise = (Math.random() - 0.5) * 15;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i+1] = Math.min(255, Math.max(0, data[i+1] + noise));
      data[i+2] = Math.min(255, Math.max(0, data[i+2] + noise));
    }
    ctx.putImageData(imageData, 0, 0);

    // Text
    ctx.font = '600 10px "IBM Plex Mono", monospace';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(canvas.closest('[lang="en"]') || document.documentElement.lang === 'en' ? 'Scratch here ;)' : 'Grattez ici ;)', w / 2, h / 2);

    ctx.globalCompositeOperation = 'destination-out';

    function getPos(e) {
      var rect = canvas.getBoundingClientRect();
      var x, y;
      if (e.touches) { x = e.touches[0].clientX - rect.left; y = e.touches[0].clientY - rect.top; }
      else { x = e.clientX - rect.left; y = e.clientY - rect.top; }
      return { x: x * (w / rect.width), y: y * (h / rect.height) };
    }

    function scratch(e) {
      if (!isDrawing) return;
      var p = getPos(e);
      ctx.globalCompositeOperation = 'destination-out';

      // Main scratch blob (irregular, multiple overlapping circles)
      for (var k = 0; k < 6; k++) {
        var offsetX = (Math.random() - 0.5) * 10;
        var offsetY = (Math.random() - 0.5) * 6;
        var radius = 6 + Math.random() * 6;
        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scratchy streaks
      ctx.lineCap = 'round';
      ctx.lineWidth = 2 + Math.random() * 3;
      for (var s = 0; s < 3; s++) {
        var angle = Math.random() * Math.PI * 2;
        var len = 4 + Math.random() * 8;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + Math.cos(angle) * len, p.y + Math.sin(angle) * len);
        ctx.stroke();
      }

      // Sparkle particles (source-over)
      ctx.globalCompositeOperation = 'source-over';
      for (var sp = 0; sp < 2; sp++) {
        ctx.fillStyle = 'rgba(255,255,255,' + (0.4 + Math.random() * 0.5) + ')';
        ctx.beginPath();
        ctx.arc(p.x + (Math.random()-0.5)*14, p.y + (Math.random()-0.5)*14, 0.8 + Math.random()*1.2, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'destination-out';

      // Haptic
      if (navigator.vibrate) navigator.vibrate(3);

      checkReveal();
    }

    function checkReveal() {
      var data = ctx.getImageData(0, 0, w, h).data;
      var cleared = 0;
      for (var i = 3; i < data.length; i += 16) { if (data[i] === 0) cleared++; }
      if (cleared / (totalPixels / 4) > 0.35) {
        canvas.style.transition = 'opacity 300ms cubic-bezier(0.05,0.7,0.1,1)';
        canvas.style.opacity = '0';
        canvas.style.pointerEvents = 'none';
        var reveal = canvas.parentElement.querySelector('.scratch-reveal');
        if (reveal) reveal.classList.add('revealed');
      }
    }

    canvas.addEventListener('mousedown', function(e) { isDrawing = true; scratch(e); });
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', function() { isDrawing = false; });
    canvas.addEventListener('mouseleave', function() { isDrawing = false; });
    canvas.addEventListener('touchstart', function(e) { e.preventDefault(); isDrawing = true; scratch(e); }, { passive: false });
    canvas.addEventListener('touchmove', function(e) { e.preventDefault(); scratch(e); }, { passive: false });
    canvas.addEventListener('touchend', function() { isDrawing = false; });
  });
})();

// ASCII canvas (deferred, heavy)
function initAsciiCanvas() {
  var c = document.getElementById('ascii-canvas');
  if (!c) return;
  var ctx = c.getContext('2d');
  if (!ctx) return;

  var chars = '0123456789ABCDEFabcdef@#$%&→←↑↓·:=+[]{}()ΣπΔ∞'.split('');
  var cellW = 18, cellH = 20;
  var cols = 0, rows = 0, pageHeight = 0;
  var charGrid = [];
  var waves = [];

  function resize() {
    c.width = window.innerWidth;
    pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );
    c.height = pageHeight;
    cols = Math.ceil(c.width / cellW) + 1;
    rows = Math.ceil(pageHeight / cellH) + 1;
    charGrid = [];
    for (var i = 0; i < cols * rows; i++) {
      charGrid.push(chars[Math.floor(Math.random() * chars.length)]);
    }
  }

  function spawnWave() {
    waves.push({
      angle: Math.random() * Math.PI * 2,
      offset: -120,
      speed: 1 + Math.random() * 2,
      width: 25 + Math.random() * 50,
      strength: 0.1 + Math.random() * 0.12
    });
  }

  // Seed initial waves
  for (var i = 0; i < 5; i++) {
    waves.push({
      angle: Math.random() * Math.PI * 2,
      offset: Math.random() * 300 - 100,
      speed: 1 + Math.random() * 2,
      width: 25 + Math.random() * 50,
      strength: 0.1 + Math.random() * 0.12
    });
  }

  var frame = 0;

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = '11px "IBM Plex Mono", ui-monospace, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    frame++;

    if (frame % 30 === 0) spawnWave();
    if (frame % 70 === 0) spawnWave();

    var maxDist = Math.sqrt(c.width * c.width + pageHeight * pageHeight);
    var alive = [];
    for (var w = 0; w < waves.length; w++) {
      waves[w].offset += waves[w].speed;
      if (waves[w].offset < maxDist + waves[w].width + 60) alive.push(waves[w]);
    }
    waves = alive;

    // Randomly swap characters for subtle motion
    if (frame % 2 === 0) {
      for (var n = 0; n < 12; n++) {
        var idx = Math.floor(Math.random() * charGrid.length);
        charGrid[idx] = chars[Math.floor(Math.random() * chars.length)];
      }
    }

    // Only render visible viewport rows for performance
    var scrollY = window.scrollY;
    var vpTop = scrollY - 100;
    var vpBottom = scrollY + window.innerHeight + 100;
    var rowStart = Math.max(0, Math.floor(vpTop / cellH));
    var rowEnd = Math.min(rows, Math.ceil(vpBottom / cellH));

    for (var row = rowStart; row < rowEnd; row++) {
      for (var col = 0; col < cols; col++) {
        var ci = row * cols + col;
        var px = col * cellW;
        var py = row * cellH;
        var totalOpacity = 0.018;

        for (var wi = 0; wi < waves.length; wi++) {
          var wv = waves[wi];
          var projected = px * Math.cos(wv.angle) + py * Math.sin(wv.angle);
          var dist = Math.abs(projected - wv.offset);
          if (dist < wv.width) {
            var t = dist / wv.width;
            var intensity = Math.cos(t * Math.PI * 0.5);
            totalOpacity += wv.strength * intensity * intensity;
          }
        }

        totalOpacity = Math.min(totalOpacity, 0.22);
        if (totalOpacity > 0.02) {
          ctx.fillStyle = 'rgba(10,10,11,' + totalOpacity + ')';
          ctx.fillText(charGrid[ci], px + cellW / 2, py + cellH / 2);
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
  if (window.ResizeObserver) {
    new ResizeObserver(resize).observe(document.body);
  }
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(initAsciiCanvas, { timeout: 500 });
} else {
  setTimeout(initAsciiCanvas, 100);
}

// Scroll-triggered blur-in animations
(function() {
  if (!('IntersectionObserver' in window)) return;

  // Add blur-in class to all major elements that don't have it yet
  var selectors = [
    '.section-header',
    '.cs-card',
    '.phase-card',
    '.feature-card',
    '.blog-card',
    '.contact-card',
    '.app-hero-inner',
    '.info-section',
    '.dark-widget',
    '.form-card',
    '.cta-panel',
    '.hero-copy',
    '.article-header',
    '.article-content'
  ];

  var elements = document.querySelectorAll(selectors.join(','));
  elements.forEach(function(el, i) {
    if (!el.classList.contains('blur-in') && !el.classList.contains('blur-in-scroll')) {
      el.classList.add('blur-in-scroll');
    }
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('blur-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.blur-in-scroll').forEach(function(el) {
    observer.observe(el);
  });
})();

// Cookie banner
(function() {
  try { if (localStorage.getItem('cm-cookie-consent')) return; } catch(e) { return; }
  var isEn = document.documentElement.lang === 'en';
  var legalHref = isEn ? 'legal.html' : 'legal.html';
  // Adjust relative path based on folder depth
  var path = window.location.pathname;
  var depth = (path.match(/\//g) || []).length;
  if (path.indexOf('/blog/') !== -1 || path.indexOf('/pock/') !== -1) {
    legalHref = '../legal.html';
  }
  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = isEn
    ? '<p>We use essential cookies only. No tracking, no analytics. <a href="' + legalHref + '">Privacy policy</a></p><button>Got it</button>'
    : '<p>Nous utilisons uniquement des cookies essentiels. Pas de tracking. <a href="' + legalHref + '">Politique de confidentialite</a></p><button>D\'accord</button>';
  document.body.appendChild(banner);
  setTimeout(function() { banner.classList.add('visible'); }, 1500);
  banner.querySelector('button').addEventListener('click', function() {
    try { localStorage.setItem('cm-cookie-consent', 'accepted'); } catch(e) {}
    banner.classList.remove('visible');
    setTimeout(function() { banner.remove(); }, 500);
  });
})();
