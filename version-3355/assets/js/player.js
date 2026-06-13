(function () {
    var video = document.querySelector("[data-player]");
    var button = document.querySelector("[data-play-button]");
    var hls = null;
    var isReady = false;

    if (!video) {
        return;
    }

    function setupPlayer() {
        if (isReady) {
            return;
        }

        var source = video.getAttribute("data-src");
        if (!source) {
            return;
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = source;
        } else if (window.Hls && window.Hls.isSupported()) {
            hls = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            hls.loadSource(source);
            hls.attachMedia(video);
        } else {
            video.src = source;
        }

        isReady = true;
    }

    function beginPlayback() {
        setupPlayer();
        if (button) {
            button.hidden = true;
        }
        var promise = video.play();
        if (promise && typeof promise.catch === "function") {
            promise.catch(function () {
                if (button) {
                    button.hidden = false;
                }
            });
        }
    }

    if (button) {
        button.addEventListener("click", beginPlayback);
    }

    video.addEventListener("click", function () {
        if (video.paused) {
            beginPlayback();
        }
    });

    video.addEventListener("play", function () {
        if (button) {
            button.hidden = true;
        }
    });

    video.addEventListener("ended", function () {
        if (button) {
            button.hidden = false;
        }
    });

    setupPlayer();
})();
