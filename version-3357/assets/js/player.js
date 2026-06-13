(function () {
    var video = document.getElementById('movie-video');
    var cover = document.getElementById('player-cover');
    var dataNode = document.getElementById('movie-player-data');

    if (!video || !cover || !dataNode) {
        return;
    }

    var payload = {};

    try {
        payload = JSON.parse(dataNode.textContent || '{}');
    } catch (error) {
        payload = {};
    }

    var source = payload.src || '';
    var hls = null;
    var ready = false;

    function prepareVideo() {
        if (ready || !source) {
            return;
        }

        ready = true;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = source;
        } else if (window.Hls && window.Hls.isSupported()) {
            hls = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hls.loadSource(source);
            hls.attachMedia(video);
        } else {
            video.src = source;
        }
    }

    function playVideo() {
        prepareVideo();
        cover.classList.add('is-hidden');
        var playPromise = video.play();

        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {
                cover.classList.remove('is-hidden');
            });
        }
    }

    cover.addEventListener('click', playVideo);

    video.addEventListener('click', function () {
        if (!ready) {
            playVideo();
        }
    });

    video.addEventListener('play', function () {
        cover.classList.add('is-hidden');
    });

    window.addEventListener('pagehide', function () {
        if (hls && typeof hls.destroy === 'function') {
            hls.destroy();
        }
    });
}());
