document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".mobile-menu-button");
    var mobilePanel = document.querySelector(".mobile-panel");

    if (menuButton && mobilePanel) {
        menuButton.addEventListener("click", function () {
            var opened = mobilePanel.classList.toggle("is-open");
            menuButton.setAttribute("aria-expanded", opened ? "true" : "false");
        });
    }

    var hero = document.querySelector(".hero-slider");
    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(hero.querySelectorAll(".hero-dot"));
        var prev = hero.querySelector(".hero-control.prev");
        var next = hero.querySelector(".hero-control.next");
        var index = 0;
        var timer = null;

        function showSlide(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("active", slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("active", dotIndex === index);
            });
        }

        function startTimer() {
            timer = window.setInterval(function () {
                showSlide(index + 1);
            }, 5200);
        }

        function restartTimer() {
            if (timer) {
                window.clearInterval(timer);
            }
            startTimer();
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                showSlide(Number(dot.getAttribute("data-slide")) || 0);
                restartTimer();
            });
        });

        if (prev) {
            prev.addEventListener("click", function () {
                showSlide(index - 1);
                restartTimer();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                showSlide(index + 1);
                restartTimer();
            });
        }

        showSlide(0);
        startTimer();
    }

    var categorySearch = document.querySelector(".category-search");
    var categorySort = document.querySelector(".category-sort");
    var categoryGrid = document.querySelector(".category-movie-grid");

    function filterCategoryCards() {
        if (!categoryGrid) {
            return;
        }
        var keyword = categorySearch ? categorySearch.value.trim().toLowerCase() : "";
        var cards = Array.prototype.slice.call(categoryGrid.querySelectorAll(".movie-card"));
        cards.forEach(function (card) {
            var text = card.getAttribute("data-search") || "";
            card.hidden = keyword && text.indexOf(keyword) === -1;
        });
    }

    function sortCategoryCards() {
        if (!categoryGrid || !categorySort) {
            return;
        }
        var value = categorySort.value;
        var cards = Array.prototype.slice.call(categoryGrid.querySelectorAll(".movie-card"));
        cards.sort(function (a, b) {
            if (value === "year-desc") {
                return (Number(b.getAttribute("data-year")) || 0) - (Number(a.getAttribute("data-year")) || 0);
            }
            if (value === "title-asc") {
                return (a.getAttribute("data-title") || "").localeCompare(b.getAttribute("data-title") || "", "zh-Hans-CN");
            }
            return 0;
        });
        cards.forEach(function (card) {
            categoryGrid.appendChild(card);
        });
        filterCategoryCards();
    }

    if (categorySearch) {
        categorySearch.addEventListener("input", filterCategoryCards);
    }

    if (categorySort) {
        categorySort.addEventListener("change", sortCategoryCards);
    }

    var searchInput = document.getElementById("search-page-input");
    var searchResults = document.getElementById("search-results");

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function cardTemplate(item) {
        var tags = (item.tags || []).slice(0, 3).map(function (tag) {
            return "<span>" + escapeHtml(tag) + "</span>";
        }).join("");
        return "<article class=\"movie-card\">" +
            "<a class=\"poster-link\" href=\"" + escapeHtml(item.file) + "\" aria-label=\"观看" + escapeHtml(item.title) + "\">" +
            "<img src=\"" + escapeHtml(item.cover) + "\" alt=\"" + escapeHtml(item.title) + "\" loading=\"lazy\">" +
            "<span class=\"play-badge\">播放</span>" +
            "</a>" +
            "<div class=\"card-body\">" +
            "<p class=\"card-meta\">" + escapeHtml(item.year) + " · " + escapeHtml(item.region) + " · " + escapeHtml(item.type) + "</p>" +
            "<h3><a href=\"" + escapeHtml(item.file) + "\">" + escapeHtml(item.title) + "</a></h3>" +
            "<p class=\"card-desc\">" + escapeHtml(item.oneLine) + "</p>" +
            "<div class=\"card-tags\">" + tags + "</div>" +
            "</div>" +
            "</article>";
    }

    function renderSearch() {
        if (!searchInput || !searchResults || !window.SEARCH_DATA) {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var query = params.get("q") || searchInput.value || "";
        searchInput.value = query;
        var normalized = query.trim().toLowerCase();
        var pool = window.SEARCH_DATA;
        var results = normalized ? pool.filter(function (item) {
            return item.search.indexOf(normalized) !== -1;
        }).slice(0, 80) : pool.slice(0, 24);
        searchResults.innerHTML = results.map(cardTemplate).join("");
    }

    if (searchInput && searchResults) {
        renderSearch();
        searchInput.addEventListener("input", renderSearch);
    }
});
