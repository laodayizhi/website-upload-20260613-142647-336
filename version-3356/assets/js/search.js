document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("site-search-form");
  const input = document.getElementById("site-search-input");
  const typeSelect = document.getElementById("site-type-filter");
  const regionSelect = document.getElementById("site-region-filter");
  const results = document.getElementById("search-results");
  const params = new URLSearchParams(window.location.search);

  if (input) {
    input.value = params.get("q") || "";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function card(movie) {
    return [
      '<article class="movie-card">',
      '  <a href="' + escapeHtml(movie.url) + '" aria-label="观看 ' + escapeHtml(movie.title) + '">',
      '    <div class="poster-frame">',
      '      <img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '      <span class="year-badge">' + escapeHtml(movie.year) + '</span>',
      '      <span class="type-badge">' + escapeHtml(movie.type) + '</span>',
      '    </div>',
      '    <div class="card-content">',
      '      <h3>' + escapeHtml(movie.title) + '</h3>',
      '      <p>' + escapeHtml(movie.oneLine) + '</p>',
      '      <div class="card-meta">',
      '        <span>' + escapeHtml(movie.region) + '</span>',
      '        <span>' + escapeHtml(movie.genre || movie.type) + '</span>',
      '      </div>',
      '    </div>',
      '  </a>',
      '</article>'
    ].join("");
  }

  function render() {
    if (!results) {
      return;
    }

    const keyword = (input && input.value || "").trim().toLowerCase();
    const typeValue = typeSelect && typeSelect.value || "";
    const regionValue = regionSelect && regionSelect.value || "";
    const items = MOVIES.filter(function(movie) {
      const text = [
        movie.title,
        movie.year,
        movie.region,
        movie.type,
        movie.genre,
        movie.oneLine,
        (movie.tags || []).join(" ")
      ].join(" ").toLowerCase();
      const keywordMatch = !keyword || text.indexOf(keyword) !== -1;
      const typeMatch = !typeValue || movie.typeGroup === typeValue;
      const regionMatch = !regionValue || movie.regionGroup === regionValue;
      return keywordMatch && typeMatch && regionMatch;
    }).slice(0, 120);

    if (!items.length) {
      results.innerHTML = '<p class="empty-message">没有找到相关作品</p>';
      return;
    }

    results.innerHTML = items.map(card).join("");
  }

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const params = new URLSearchParams();

      if (input && input.value.trim()) {
        params.set("q", input.value.trim());
      }

      const nextUrl = params.toString() ? "./search.html?" + params.toString() : "./search.html";
      window.history.replaceState(null, "", nextUrl);
      render();
    });
  }

  [input, typeSelect, regionSelect].forEach(function(element) {
    if (element) {
      element.addEventListener("input", render);
      element.addEventListener("change", render);
    }
  });

  render();
});
