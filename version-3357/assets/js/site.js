(function () {
    var menuButton = document.querySelector('.mobile-menu-button');
    var mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function () {
            mobileNav.classList.toggle('is-open');
        });
    }

    var hero = document.querySelector('[data-hero]');

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        var current = 0;
        var timer = null;

        function showSlide(index) {
            if (!slides.length) {
                return;
            }

            current = (index + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === current);
            });

            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === current);
            });
        }

        function startTimer() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                showSlide(index);
                startTimer();
            });
        });

        if (prev) {
            prev.addEventListener('click', function () {
                showSlide(current - 1);
                startTimer();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                showSlide(current + 1);
                startTimer();
            });
        }

        startTimer();
    }

    var filterInput = document.querySelector('.movie-filter-input');

    if (filterInput) {
        var cards = Array.prototype.slice.call(document.querySelectorAll('.movie-card'));

        filterInput.addEventListener('input', function () {
            var query = filterInput.value.trim().toLowerCase();

            cards.forEach(function (card) {
                var text = (card.getAttribute('data-search') || '').toLowerCase();
                card.style.display = !query || text.indexOf(query) !== -1 ? '' : 'none';
            });
        });
    }

    var searchForm = document.querySelector('[data-search-form]');
    var resultBox = document.querySelector('[data-search-results]');

    if (searchForm && resultBox && window.movieSearchItems) {
        var params = new URLSearchParams(window.location.search);
        var qInput = searchForm.querySelector('input[name="q"]');
        var typeSelect = searchForm.querySelector('select[name="type"]');
        var yearSelect = searchForm.querySelector('select[name="year"]');

        qInput.value = params.get('q') || '';
        typeSelect.value = params.get('type') || '';
        yearSelect.value = params.get('year') || '';

        function itemHtml(item) {
            var tags = item.tags.slice(0, 3).map(function (tag) {
                return '<span>' + escapeHtml(tag) + '</span>';
            }).join('');

            return [
                '<article class="movie-card">',
                '<a class="poster-link" href="' + item.url + '" aria-label="' + escapeHtml(item.title) + '">',
                '<span class="poster-wrap">',
                '<img src="' + item.poster + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
                '<span class="poster-gradient"></span>',
                '<span class="year-badge">' + escapeHtml(item.year) + '</span>',
                '</span>',
                '</a>',
                '<div class="movie-card-body">',
                '<h3><a href="' + item.url + '">' + escapeHtml(item.title) + '</a></h3>',
                '<p>' + escapeHtml(item.oneLine) + '</p>',
                '<div class="movie-meta-row"><span>' + escapeHtml(item.region) + '</span><span>' + escapeHtml(item.type) + '</span></div>',
                '<div class="tag-row">' + tags + '</div>',
                '</div>',
                '</article>'
            ].join('');
        }

        function escapeHtml(value) {
            return String(value).replace(/[&<>"]/g, function (character) {
                return {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;'
                }[character];
            });
        }

        function renderSearch() {
            var query = qInput.value.trim().toLowerCase();
            var type = typeSelect.value;
            var year = yearSelect.value;

            var results = window.movieSearchItems.filter(function (item) {
                var text = [item.title, item.region, item.type, item.year, item.genre, item.oneLine, item.tags.join(' ')].join(' ').toLowerCase();
                var queryMatch = !query || text.indexOf(query) !== -1;
                var typeMatch = !type || item.type.indexOf(type) !== -1;
                var yearMatch = !year || item.year === year;
                return queryMatch && typeMatch && yearMatch;
            }).slice(0, 96);

            resultBox.innerHTML = results.length ? results.map(itemHtml).join('') : '<div class="search-empty">没有找到相关影片</div>';
        }

        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var nextParams = new URLSearchParams();

            if (qInput.value.trim()) {
                nextParams.set('q', qInput.value.trim());
            }

            if (typeSelect.value) {
                nextParams.set('type', typeSelect.value);
            }

            if (yearSelect.value) {
                nextParams.set('year', yearSelect.value);
            }

            var queryString = nextParams.toString();
            var nextUrl = window.location.pathname + (queryString ? '?' + queryString : '');
            window.history.replaceState({}, '', nextUrl);
            renderSearch();
        });

        [qInput, typeSelect, yearSelect].forEach(function (control) {
            control.addEventListener('input', renderSearch);
            control.addEventListener('change', renderSearch);
        });

        renderSearch();
    }
}());
