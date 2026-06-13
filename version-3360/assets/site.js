(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var panel = document.querySelector('[data-mobile-panel]');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
  var heroIndex = 0;

  function showHero(index) {
    if (!slides.length) {
      return;
    }

    heroIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, current) {
      slide.classList.toggle('is-active', current === heroIndex);
    });
    dots.forEach(function (dot, current) {
      dot.classList.toggle('is-active', current === heroIndex);
    });
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      showHero(index);
    });
  });

  if (slides.length > 1) {
    window.setInterval(function () {
      showHero(heroIndex + 1);
    }, 5200);
  }

  var params = new URLSearchParams(window.location.search);
  var queryText = params.get('q') || '';
  var forms = Array.prototype.slice.call(document.querySelectorAll('[data-filter-form]'));

  function applyFilter(form, forcedValue) {
    var input = form.querySelector('[data-filter-input]');
    var value = String(forcedValue != null ? forcedValue : (input ? input.value : '')).trim().toLowerCase();
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-card]'));
    var visible = 0;

    cards.forEach(function (card) {
      var haystack = ((card.getAttribute('data-title') || '') + ' ' + (card.getAttribute('data-meta') || '') + ' ' + card.textContent).toLowerCase();
      var matched = !value || haystack.indexOf(value) !== -1;
      card.style.display = matched ? '' : 'none';
      if (matched) {
        visible += 1;
      }
    });

    var empty = document.querySelector('[data-empty-state]');
    if (empty) {
      empty.classList.toggle('is-visible', visible === 0);
    }
  }

  forms.forEach(function (form) {
    var input = form.querySelector('[data-filter-input]');
    if (input && queryText) {
      input.value = queryText;
      applyFilter(form, queryText);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      applyFilter(form);
    });
  });

  Array.prototype.slice.call(document.querySelectorAll('[data-clear-filter]')).forEach(function (button) {
    button.addEventListener('click', function () {
      var form = button.closest('[data-filter-form]');
      if (!form) {
        return;
      }
      var input = form.querySelector('[data-filter-input]');
      if (input) {
        input.value = '';
      }
      applyFilter(form, '');
      history.replaceState(null, '', window.location.pathname);
    });
  });
})();
