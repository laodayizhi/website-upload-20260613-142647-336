import { H as Hls } from './hls-vendor-dru42stk.js';

function setupMobileNavigation() {
  const button = document.querySelector('[data-menu-button]');
  const panel = document.querySelector('[data-mobile-panel]');

  if (!button || !panel) {
    return;
  }

  button.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
}

function setupHeroCarousel() {
  const carousel = document.querySelector('[data-hero-carousel]');

  if (!carousel) {
    return;
  }

  const slides = Array.from(carousel.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-hero-dot]'));
  let activeIndex = 0;

  function showSlide(nextIndex) {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === activeIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  if (slides.length > 1) {
    window.setInterval(() => showSlide(activeIndex + 1), 5500);
  }
}

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function setupFilters() {
  document.querySelectorAll('[data-filter-scope]').forEach((scope) => {
    const searchInput = scope.querySelector('[data-search-input]');
    const typeFilter = scope.querySelector('[data-type-filter]');
    const regionFilter = scope.querySelector('[data-region-filter]');
    const yearFilter = scope.querySelector('[data-year-filter]');
    const cards = Array.from(scope.querySelectorAll('[data-card]'));
    const noResults = scope.querySelector('[data-no-results]');

    if (!cards.length) {
      return;
    }

    function applyFilter() {
      const keyword = normalize(searchInput ? searchInput.value : '');
      const type = typeFilter ? typeFilter.value : 'all';
      const region = regionFilter ? regionFilter.value : 'all';
      const year = yearFilter ? yearFilter.value : 'all';
      let visibleCount = 0;

      cards.forEach((card) => {
        const haystack = normalize(card.dataset.searchText || '');
        const matchesKeyword = !keyword || haystack.includes(keyword);
        const matchesType = type === 'all' || card.dataset.type === type;
        const matchesRegion = region === 'all' || card.dataset.region === region;
        const matchesYear = year === 'all' || card.dataset.year === year;
        const visible = matchesKeyword && matchesType && matchesRegion && matchesYear;

        card.classList.toggle('hidden', !visible);

        if (visible) {
          visibleCount += 1;
        }
      });

      if (noResults) {
        noResults.classList.toggle('show', visibleCount === 0);
      }
    }

    [searchInput, typeFilter, regionFilter, yearFilter].forEach((control) => {
      if (control) {
        control.addEventListener('input', applyFilter);
        control.addEventListener('change', applyFilter);
      }
    });
  });
}

function setupPlayer(player) {
  const video = player.querySelector('video');
  const source = player.dataset.source;
  const loading = player.querySelector('[data-player-loading]');
  const videoBox = player.querySelector('.video-box');
  const bigPlayButton = player.querySelector('[data-play-button]');
  const playToggle = player.querySelector('[data-play-toggle]');
  const muteToggle = player.querySelector('[data-mute-toggle]');
  const fullscreenToggle = player.querySelector('[data-fullscreen-toggle]');
  const playNow = document.querySelector('[data-play-now]');

  if (!video || !source) {
    return;
  }

  function hideLoading() {
    if (loading) {
      loading.classList.add('hide');
    }
  }

  if (Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90,
    });

    hls.loadSource(source);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, hideLoading);
    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data && data.fatal) {
        hideLoading();
        video.controls = true;
      }
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
    video.addEventListener('loadedmetadata', hideLoading, { once: true });
  } else {
    hideLoading();
    video.controls = true;
  }

  async function togglePlay() {
    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      video.controls = true;
      console.warn('Playback requires user interaction or a valid HLS source.', error);
    }
  }

  function updatePlayState() {
    const isPlaying = !video.paused;
    if (videoBox) {
      videoBox.classList.toggle('is-playing', isPlaying);
    }
    if (playToggle) {
      playToggle.textContent = isPlaying ? '暂停' : '播放';
    }
  }

  [bigPlayButton, playToggle, playNow, video].forEach((element) => {
    if (element) {
      element.addEventListener('click', togglePlay);
    }
  });

  if (muteToggle) {
    muteToggle.addEventListener('click', () => {
      video.muted = !video.muted;
      muteToggle.textContent = video.muted ? '取消静音' : '静音';
    });
  }

  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', () => {
      const target = videoBox || video;
      if (target.requestFullscreen) {
        target.requestFullscreen();
      }
    });
  }

  video.addEventListener('play', updatePlayState);
  video.addEventListener('pause', updatePlayState);
  video.addEventListener('loadedmetadata', hideLoading);
  video.addEventListener('canplay', hideLoading);
  updatePlayState();
}

function setupPlayers() {
  document.querySelectorAll('[data-hls-player]').forEach(setupPlayer);
}

setupMobileNavigation();
setupHeroCarousel();
setupFilters();
setupPlayers();
