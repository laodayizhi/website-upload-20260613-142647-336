(function () {
  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
    });
  }

  var hero = document.querySelector('[data-hero]');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var previous = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var index = 0;
    var timer = null;

    function showSlide(value) {
      index = (value + slides.length) % slides.length;
      slides.forEach(function (slide, position) {
        slide.classList.toggle('is-active', position === index);
      });
      dots.forEach(function (dot, position) {
        dot.classList.toggle('is-active', position === index);
      });
    }

    function startHero() {
      stopHero();
      timer = window.setInterval(function () {
        showSlide(index + 1);
      }, 5600);
    }

    function stopHero() {
      if (timer) {
        window.clearInterval(timer);
      }
    }

    if (previous) {
      previous.addEventListener('click', function () {
        showSlide(index - 1);
        startHero();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        showSlide(index + 1);
        startHero();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
        startHero();
      });
    });

    hero.addEventListener('mouseenter', stopHero);
    hero.addEventListener('mouseleave', startHero);
    showSlide(0);
    startHero();
  }

  var forms = Array.prototype.slice.call(document.querySelectorAll('[data-local-search]'));

  forms.forEach(function (form) {
    var scopeSelector = form.getAttribute('data-local-search');
    var scope = document.querySelector(scopeSelector) || document;
    var input = form.querySelector('input[type="search"]');
    var cards = Array.prototype.slice.call(scope.querySelectorAll('[data-card]'));
    var chosen = {
      type: '',
      region: '',
      year: ''
    };

    function normalize(value) {
      return String(value || '').toLowerCase().replace(/\s+/g, '');
    }

    function applyFilters() {
      var keyword = normalize(input ? input.value : '');
      cards.forEach(function (card) {
        var haystack = normalize([
          card.getAttribute('data-title'),
          card.getAttribute('data-type'),
          card.getAttribute('data-region'),
          card.getAttribute('data-year'),
          card.getAttribute('data-genre'),
          card.getAttribute('data-tags')
        ].join(' '));
        var matchedKeyword = !keyword || haystack.indexOf(keyword) !== -1;
        var matchedType = !chosen.type || card.getAttribute('data-type') === chosen.type;
        var matchedRegion = !chosen.region || card.getAttribute('data-region') === chosen.region;
        var matchedYear = !chosen.year || card.getAttribute('data-year') === chosen.year;
        card.classList.toggle('is-hidden', !(matchedKeyword && matchedType && matchedRegion && matchedYear));
      });
    }

    if (input) {
      input.addEventListener('input', applyFilters);
    }

    form.addEventListener('click', function (event) {
      var button = event.target.closest('[data-filter]');
      if (!button) {
        return;
      }
      var key = button.getAttribute('data-filter');
      var value = button.getAttribute('data-value') || '';
      chosen[key] = value;
      Array.prototype.slice.call(form.querySelectorAll('[data-filter="' + key + '"]')).forEach(function (item) {
        item.classList.toggle('is-selected', item === button);
      });
      applyFilters();
    });
  });
})();
