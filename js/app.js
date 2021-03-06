import {
  animations
} from './animations.js';

import {soundEffects} from './sounds.js';

document.addEventListener('DOMContentLoaded', soundOnLoad());

function soundOnLoad() {
  var sound = new Howl({
    src: ['./audio/sfx-0.mp3','./audio/sfx-0.wav'],
    onplayerror: function() {
      sound.once('unlock', function() {
        sound.play();
      });
    }
  });

  sound.play();
}

const button = document.querySelector('.artwork');
const mobileButton = new Hammer(button);

let index = 0;

function playSound() {
  // console.log('INDEX:', index);

  if (index === soundEffects.length) {
    index = 0;
  }

  // Stop track and play next without overlap
  // if (soundEffects[index].sound.playing()) {
  //   soundEffects[index].sound.stop();
  // }

  let animationCounter = soundEffects[index].animation;
  animations[animationCounter].play(0);
  soundEffects[index].sound.play();

  ++index;

}

function setupSoundListeners() {

  if (document.documentElement.clienwidth <= 600) {
    mobileButton.on("press tap", function(event) {
      playSound();
    });
  } else {
    button.addEventListener('click', function(event) {
      playSound();
    });
  }
}

setupSoundListeners();

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
