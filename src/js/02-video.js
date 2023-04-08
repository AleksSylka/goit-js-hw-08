import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe')
const player = new Player(iframe);

/* console.log(+localStorage.getItem("videoplayer-current-time")); */

player.setCurrentTime(+localStorage.getItem("videoplayer-current-time"));

const onPlay = function ({ seconds }) {
    console.log(seconds);
    localStorage.setItem("videoplayer-current-time", seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));




