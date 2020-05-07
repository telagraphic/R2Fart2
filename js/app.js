import {
  fartOne,
  fartTwo,
  fartThree
} from './animations.js';
const button = document.querySelector('.artwork');
const mobileButton = new Hammer(button);

const soundEffects = [
  {
    sound: new Howl({
      src: ['./audio/sfx-1.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-2.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-3.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-4.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-5.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-6.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-7.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-8.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-9.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-10.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-11.wav'],
      volume: 1
    })
  }
]

let index = 0;

function playSound() {

  // TODO: How to start at currentTime on the file and not batch play all at same time
  if (index === soundEffects.length) {
    index = 0;
  }

  if (soundEffects[index].sound !== null) {
    soundEffects[index].sound.stop();
  }

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
