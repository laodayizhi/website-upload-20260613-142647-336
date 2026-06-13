import { H as Hls } from './hls-vendor-dru42stk.js';

function showMessage(element, text) {
  if (!element) {
    return;
  }
  element.textContent = text;
  element.classList.add('is-visible');
}

function hideMessage(element) {
  if (!element) {
    return;
  }
  element.textContent = '';
  element.classList.remove('is-visible');
}

function initPlayer() {
  const video = document.getElementById('video-player');
  const startButton = document.querySelector('[data-player-start]');
  const message = document.querySelector('[data-player-message]');

  if (!video) {
    return;
  }

  const source = video.getAttribute('data-hls');

  if (!source) {
    showMessage(message, '当前影片暂未绑定播放源。');
    return;
  }

  if (Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90
    });

    hls.loadSource(source);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      hideMessage(message);
    });

    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data && data.fatal) {
        showMessage(message, '视频加载遇到问题，请刷新页面或稍后重试。');
      }
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
  } else {
    showMessage(message, '当前浏览器不支持 HLS 播放，请使用新版 Chrome、Edge、Safari 或 Firefox。');
  }

  if (startButton) {
    startButton.addEventListener('click', function () {
      video.play().then(function () {
        startButton.classList.add('is-hidden');
      }).catch(function () {
        showMessage(message, '点击浏览器播放器按钮也可以开始播放。');
      });
    });
  }

  video.addEventListener('play', function () {
    if (startButton) {
      startButton.classList.add('is-hidden');
    }
  });

  video.addEventListener('pause', function () {
    if (startButton && !video.ended) {
      startButton.classList.remove('is-hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', initPlayer);
