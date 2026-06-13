(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function normalize(text) {
    return String(text || '').toLowerCase().trim();
  }

  function initImages() {
    document.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function () {
        img.classList.add('img-missing');
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector('[data-mobile-toggle]');
    var nav = document.querySelector('[data-mobile-nav]');
    if (!toggle || !nav) {
      return;
    }
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  function initHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    if (!slides.length) {
      return;
    }
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }

    function play() {
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      play();
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(current - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(current + 1);
        restart();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-hero-dot')) || 0);
        restart();
      });
    });

    show(0);
    play();
  }

  function initSearchForms() {
    document.querySelectorAll('[data-search-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        var input = form.querySelector('input[name="q"]');
        if (!input || !input.value.trim()) {
          event.preventDefault();
          window.location.href = './search.html';
        }
      });
    });
  }

  function initFilters() {
    document.querySelectorAll('[data-filter-scope]').forEach(function (bar) {
      var input = bar.querySelector('.filter-input');
      var select = bar.querySelector('.filter-select');
      var grid = bar.nextElementSibling;
      if (!grid) {
        return;
      }
      var cards = Array.prototype.slice.call(grid.querySelectorAll('.movie-card'));

      function apply() {
        var query = normalize(input && input.value);
        var type = normalize(select && select.value);
        cards.forEach(function (card) {
          var haystack = normalize(card.getAttribute('data-search'));
          var cardType = normalize(card.getAttribute('data-type'));
          var matchQuery = !query || haystack.indexOf(query) !== -1;
          var matchType = !type || cardType.indexOf(type) !== -1 || haystack.indexOf(type) !== -1;
          card.hidden = !(matchQuery && matchType);
        });
      }

      if (input) {
        input.addEventListener('input', apply);
      }
      if (select) {
        select.addEventListener('change', apply);
      }
    });
  }

  function escapeHtml(text) {
    return String(text || '').replace(/[&<>"']/g, function (char) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char];
    });
  }

  function initSearchPage() {
    var results = document.querySelector('[data-search-results]');
    if (!results || !window.SEARCH_INDEX) {
      return;
    }
    var params = new URLSearchParams(window.location.search);
    var q = normalize(params.get('q'));
    var title = document.querySelector('[data-search-title]');
    var pageInput = document.querySelector('.search-page-form input[name="q"]');
    if (pageInput) {
      pageInput.value = params.get('q') || '';
    }
    if (title) {
      title.textContent = q ? '搜索结果' : '推荐内容';
    }
    var list = window.SEARCH_INDEX.filter(function (item) {
      if (!q) {
        return item.hot;
      }
      return normalize([item.t, item.m, item.g, item.d].join(' ')).indexOf(q) !== -1;
    }).slice(0, q ? 96 : 48);
    results.innerHTML = list.map(function (item) {
      return '<article class="movie-card">' +
        '<a href="./' + escapeHtml(item.u) + '" class="movie-card-link">' +
        '<div class="poster-wrap"><img src="' + escapeHtml(item.c) + '" alt="' + escapeHtml(item.t) + '" loading="lazy"><span class="play-corner">▶</span></div>' +
        '<div class="movie-card-body"><div class="card-meta"><span>' + escapeHtml(item.m) + '</span></div>' +
        '<h2>' + escapeHtml(item.t) + '</h2><p>' + escapeHtml(item.d) + '</p><div class="card-info"><span>' + escapeHtml(item.g) + '</span></div></div>' +
        '</a></article>';
    }).join('');
    initImages();
  }

  ready(function () {
    initImages();
    initMobileNav();
    initHero();
    initSearchForms();
    initFilters();
    initSearchPage();
  });
})();
