import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function setLocalStorage(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

player.on('timeupdate', throttle(setLocalStorage, 2000));

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
}
