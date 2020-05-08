import {
  fartOne,
  fartTwo,
  fartThree
} from './animations.js';

import {soundEffects} from './sounds.js';

const button = document.querySelector('.artwork');
const mobileButton = new Hammer(button);

let index = 0;

function playSound() {
  console.log('INDEX:', index);

  // if (soundEffects[index].sound.playing()) {
  //   soundEffects[index].sound.stop();
  // }
  //
  // ++index;
  //
  if (index === soundEffects.length) {
    index = 0;
  }
  // soundEffects[index].sound.play();

  soundEffects[index].sound.play();
  ++index;

}

function setupSoundListeners() {

  if (document.documentElement.clienwidth <= 600) {
    mobileButton.on("press tap", function(event) {
      console.log(event);
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
