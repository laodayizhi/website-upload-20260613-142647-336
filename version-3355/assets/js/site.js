(function () {
    var mobileToggle = document.querySelector("[data-mobile-toggle]");
    var mobileMenu = document.querySelector("[data-mobile-menu]");

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("is-open");
            document.body.classList.toggle("is-menu-open", mobileMenu.classList.contains("is-open"));
        });
    }

    document.querySelectorAll("[data-global-search]").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var input = form.querySelector("input[name='q']");
            var value = input ? input.value.trim() : "";
            var target = "./search.html";
            if (value) {
                target += "?q=" + encodeURIComponent(value);
            }
            window.location.href = target;
        });
    });

    var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    var prev = document.querySelector("[data-hero-prev]");
    var next = document.querySelector("[data-hero-next]");
    var index = 0;
    var timer = null;

    function showSlide(nextIndex) {
        if (!slides.length) {
            return;
        }
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle("is-active", slideIndex === index);
        });
        dots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("is-active", dotIndex === index);
        });
    }

    function restartHero() {
        if (timer) {
            window.clearInterval(timer);
        }
        if (slides.length > 1) {
            timer = window.setInterval(function () {
                showSlide(index + 1);
            }, 5600);
        }
    }

    if (slides.length) {
        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener("click", function () {
                showSlide(dotIndex);
                restartHero();
            });
        });
        if (prev) {
            prev.addEventListener("click", function () {
                showSlide(index - 1);
                restartHero();
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                showSlide(index + 1);
                restartHero();
            });
        }
        restartHero();
    }

    function normalize(value) {
        return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
    }

    document.querySelectorAll("[data-filter-form]").forEach(function (form) {
        var scope = form.parentElement || document;
        var grid = scope.querySelector("[data-filter-grid]");
        var cards = grid ? Array.prototype.slice.call(grid.querySelectorAll("[data-movie-card]")) : [];
        var input = form.querySelector("[data-filter-input]");
        var yearSelect = form.querySelector("[data-filter-year]");
        var typeSelect = form.querySelector("[data-filter-type]");
        var regionSelect = form.querySelector("[data-filter-region]");
        var status = form.querySelector("[data-filter-status]");
        var empty = scope.querySelector("[data-empty-state]");
        var params = new URLSearchParams(window.location.search);
        var query = params.get("q") || "";

        if (input && query) {
            input.value = query;
        }

        function applyFilter() {
            var keyword = normalize(input ? input.value : "");
            var year = yearSelect ? yearSelect.value : "";
            var type = normalize(typeSelect ? typeSelect.value : "");
            var region = normalize(regionSelect ? regionSelect.value : "");
            var visible = 0;

            cards.forEach(function (card) {
                var search = normalize(card.getAttribute("data-search"));
                var cardYear = card.getAttribute("data-year") || "";
                var cardType = normalize(card.getAttribute("data-type"));
                var cardRegion = normalize(card.getAttribute("data-region"));
                var matched = true;

                if (keyword && search.indexOf(keyword) === -1) {
                    matched = false;
                }
                if (year && cardYear !== year) {
                    matched = false;
                }
                if (type && cardType.indexOf(type) === -1) {
                    matched = false;
                }
                if (region && cardRegion.indexOf(region) === -1) {
                    matched = false;
                }

                card.hidden = !matched;
                if (matched) {
                    visible += 1;
                }
            });

            if (status) {
                status.textContent = visible ? "筛选结果已更新，可直接点击影片进入详情页。" : "当前条件下暂无匹配影片。";
            }
            if (empty) {
                empty.classList.toggle("is-visible", visible === 0);
            }
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            applyFilter();
        });

        form.addEventListener("reset", function () {
            window.setTimeout(applyFilter, 0);
        });

        [input, yearSelect, typeSelect, regionSelect].forEach(function (control) {
            if (control) {
                control.addEventListener("input", applyFilter);
                control.addEventListener("change", applyFilter);
            }
        });

        applyFilter();
    });
})();
