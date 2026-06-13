document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function() {
      mobileNav.classList.toggle("is-open");
    });
  }

  document.querySelectorAll("[data-hero-slider]").forEach(function(slider) {
    const slides = Array.from(slider.querySelectorAll("[data-hero-slide]"));
    const dots = Array.from(slider.querySelectorAll("[data-hero-dot]"));
    const prev = slider.querySelector("[data-hero-prev]");
    const next = slider.querySelector("[data-hero-next]");
    let index = 0;
    let timer = null;

    function show(nextIndex) {
      if (!slides.length) {
        return;
      }

      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function(slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });

      dots.forEach(function(dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    }

    function start() {
      stop();
      timer = setInterval(function() {
        show(index + 1);
      }, 5000);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    if (prev) {
      prev.addEventListener("click", function() {
        show(index - 1);
        start();
      });
    }

    if (next) {
      next.addEventListener("click", function() {
        show(index + 1);
        start();
      });
    }

    dots.forEach(function(dot, dotIndex) {
      dot.addEventListener("click", function() {
        show(dotIndex);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    show(0);
    start();
  });

  document.querySelectorAll(".card-filter-form").forEach(function(form) {
    const searchInput = form.querySelector("[data-card-search]");
    const typeSelect = form.querySelector("[data-card-type]");
    const regionSelect = form.querySelector("[data-card-region]");
    const grid = form.nextElementSibling;

    if (!grid) {
      return;
    }

    const cards = Array.from(grid.querySelectorAll(".movie-card"));
    const empty = document.createElement("p");
    empty.className = "empty-message";
    empty.textContent = "没有找到相关作品";

    function applyFilter() {
      const keyword = (searchInput && searchInput.value || "").trim().toLowerCase();
      const typeValue = typeSelect && typeSelect.value || "";
      const regionValue = regionSelect && regionSelect.value || "";
      let visibleCount = 0;

      cards.forEach(function(card) {
        const content = [
          card.dataset.title || "",
          card.dataset.tags || "",
          card.textContent || ""
        ].join(" ").toLowerCase();
        const typeMatch = !typeValue || card.dataset.type === typeValue;
        const regionMatch = !regionValue || card.dataset.region === regionValue;
        const keywordMatch = !keyword || content.indexOf(keyword) !== -1;
        const visible = typeMatch && regionMatch && keywordMatch;

        card.classList.toggle("is-card-hidden", !visible);

        if (visible) {
          visibleCount += 1;
        }
      });

      if (visibleCount === 0) {
        if (!empty.parentNode) {
          grid.appendChild(empty);
        }
      } else if (empty.parentNode) {
        empty.parentNode.removeChild(empty);
      }
    }

    form.addEventListener("input", applyFilter);
    form.addEventListener("change", applyFilter);
  });
});
