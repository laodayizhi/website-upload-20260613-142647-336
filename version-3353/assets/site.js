(function () {
  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsa(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getRootPrefix() {
    var path = window.location.pathname;
    var depth = path.split('/').filter(Boolean).length - 1;
    if (path.endsWith('/')) {
      depth = Math.max(0, depth);
    }
    return depth > 0 ? '../'.repeat(depth) : '';
  }

  function setupImages() {
    qsa('img').forEach(function (img) {
      img.addEventListener('error', function () {
        img.classList.add('image-missing');
        img.removeAttribute('src');
      });
    });
  }

  function setupMobileMenu() {
    var button = qs('[data-menu-toggle]');
    var menu = qs('[data-mobile-menu]');
    if (!button || !menu) {
      return;
    }
    button.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  function setupHero() {
    var carousel = qs('[data-hero-carousel]');
    if (!carousel) {
      return;
    }

    var slides = qsa('[data-hero-slide]', carousel);
    var dots = qsa('[data-hero-dot]', carousel);
    var prev = qs('[data-hero-prev]', carousel);
    var next = qs('[data-hero-next]', carousel);
    var active = 0;
    var timer = null;

    function show(index) {
      if (!slides.length) {
        return;
      }
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === active);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(active + 1);
      }, 5000);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-hero-dot')) || 0);
        start();
      });
    });

    if (prev) {
      prev.addEventListener('click', function () {
        show(active - 1);
        start();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(active + 1);
        start();
      });
    }

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function setupLocalFilter() {
    var input = qs('[data-local-filter]');
    if (!input) {
      return;
    }
    var cards = qsa('[data-filter-card]');
    input.addEventListener('input', function () {
      var keyword = input.value.trim().toLowerCase();
      cards.forEach(function (card) {
        var text = [
          card.getAttribute('data-title'),
          card.getAttribute('data-tags'),
          card.getAttribute('data-region'),
          card.getAttribute('data-year'),
          card.textContent
        ].join(' ').toLowerCase();
        card.style.display = !keyword || text.indexOf(keyword) !== -1 ? '' : 'none';
      });
    });
  }

  function renderSearchCard(movie, rootPrefix) {
    var href = rootPrefix + 'video/' + movie.id + '.html';
    var cover = rootPrefix + movie.cover;
    var tags = (movie.tags || []).slice(0, 2).map(escapeHtml).join('</span><span>');
    return '' +
      '<a class="movie-card movie-card--medium" href="' + href + '">' +
        '<span class="poster-wrap">' +
          '<img src="' + escapeHtml(cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
          '<span class="card-year">' + escapeHtml(movie.year) + '</span>' +
          '<span class="card-type">' + escapeHtml(movie.type) + '</span>' +
        '</span>' +
        '<span class="card-content">' +
          '<strong>' + escapeHtml(movie.title) + '</strong>' +
          '<em>' + escapeHtml(movie.oneLine || movie.summary || '') + '</em>' +
          '<span class="card-meta"><span>' + escapeHtml(movie.region) + '</span><span>' + tags + '</span></span>' +
        '</span>' +
      '</a>';
  }

  function setupSearchPage() {
    var results = qs('[data-search-results]');
    var input = qs('[data-search-input]');
    var title = qs('[data-search-title]');
    var count = qs('[data-search-count]');
    var data = window.MOVIE_SEARCH_DATA || [];
    if (!results || !input || !data.length) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get('q') || '';
    input.value = initialQuery;

    function search(query) {
      var keyword = query.trim().toLowerCase();
      if (!keyword) {
        if (title) {
          title.textContent = '推荐浏览';
        }
        if (count) {
          count.textContent = '';
        }
        return;
      }

      var matched = data.filter(function (movie) {
        var haystack = [
          movie.title,
          movie.region,
          movie.type,
          movie.year,
          movie.genre,
          movie.oneLine,
          movie.summary,
          (movie.tags || []).join(' ')
        ].join(' ').toLowerCase();
        return haystack.indexOf(keyword) !== -1;
      }).slice(0, 120);

      var rootPrefix = getRootPrefix();
      results.innerHTML = matched.length
        ? matched.map(function (movie) { return renderSearchCard(movie, rootPrefix); }).join('')
        : '<p class="empty-state">没有找到相关作品</p>';

      if (title) {
        title.textContent = '搜索结果：' + query;
      }
      if (count) {
        count.textContent = matched.length + ' 条结果';
      }
      setupImages();
    }

    if (initialQuery) {
      search(initialQuery);
    }

    input.addEventListener('input', function () {
      search(input.value);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupImages();
    setupMobileMenu();
    setupHero();
    setupLocalFilter();
    setupSearchPage();
  });
})();
