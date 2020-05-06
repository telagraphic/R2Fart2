import {
  fartOne,
  fartTwo,
  fartThree
} from './animations.js';
const button = document.querySelector('.artwork');
const mobileButton = new Hammer(button);

function playSound() {
  const audio = document.querySelector('audio');
  if (!audio) return;
  audio.volume = 1;
  audio.currentTime = 0;
  audio.play();
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


button.addEventListener('click', function() {
  fartOne();
})

setupSoundListeners();

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
