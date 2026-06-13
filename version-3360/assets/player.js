(function () {
  var video = document.querySelector('[data-player]');
  var overlay = document.querySelector('[data-play-overlay]');
  var data = document.getElementById('movie-stream');

  if (!video || !data) {
    return;
  }

  var payload = JSON.parse(data.textContent || '{}');
  var streamUrl = payload.url || '';
  var loaded = false;
  var hls = null;

  function loadVideo() {
    if (loaded || !streamUrl) {
      return;
    }

    loaded = true;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls({
        enableWorker: true
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      return;
    }

    video.src = streamUrl;
  }

  function start() {
    loadVideo();
    if (overlay) {
      overlay.classList.add('is-hidden');
    }
    var promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(function () {});
    }
  }

  if (overlay) {
    overlay.addEventListener('click', start);
  }

  video.addEventListener('click', function () {
    if (video.paused) {
      start();
    }
  });

  video.addEventListener('play', function () {
    if (overlay) {
      overlay.classList.add('is-hidden');
    }
  });
})();
