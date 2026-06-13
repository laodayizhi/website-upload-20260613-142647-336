(function () {
  var players = Array.prototype.slice.call(document.querySelectorAll('[data-player]'));

  players.forEach(function (player) {
    var video = player.querySelector('video');
    var layer = player.querySelector('.play-layer');
    var stream = video ? video.getAttribute('data-stream') : '';
    var hls = null;

    function loadVideo() {
      if (!video || !stream || video.getAttribute('data-ready') === 'true') {
        return;
      }

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = stream;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
      } else {
        video.src = stream;
      }

      video.setAttribute('data-ready', 'true');
    }

    function playVideo() {
      loadVideo();
      if (layer) {
        layer.classList.add('is-hidden');
      }
      if (video) {
        video.controls = true;
        var playAction = video.play();
        if (playAction && typeof playAction.catch === 'function') {
          playAction.catch(function () {});
        }
      }
    }

    if (layer) {
      layer.addEventListener('click', playVideo);
    }

    if (video) {
      video.addEventListener('click', function () {
        if (video.getAttribute('data-ready') !== 'true') {
          playVideo();
        }
      });
      video.addEventListener('play', function () {
        if (layer) {
          layer.classList.add('is-hidden');
        }
      });
    }

    window.addEventListener('beforeunload', function () {
      if (hls && typeof hls.destroy === 'function') {
        hls.destroy();
      }
    });
  });
})();
