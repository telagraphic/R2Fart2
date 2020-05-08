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
      src: ['./audio/sfx-1.mp3','./audio/sfx-1.wav'],
      volume: 1,
      onend: function() {
        console.log('1');
      }
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-2.mp3','./audio/sfx-2.wav'],
      volume: 1,
      onend: function() {
        console.log('2');
      }
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-3.mp3','./audio/sfx-3.wav'],
      volume: 1,
      onend: function() {
        console.log('3');
      }
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-4.mp3','./audio/sfx-4.wav'],
      volume: 1,
      onend: function() {
        console.log('4');
      }
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-5.mp3','./audio/sfx-5.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-6.mp3','./audio/sfx-6.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-7.mp3','./audio/sfx-7.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-8.mp3', './audio/sfx-8.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-9.mp3', './audio/sfx-9.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-10.mp3', './audio/sfx-10.wav'],
      volume: 1
    })
  },
  {
    sound: new Howl({
      src: ['./audio/sfx-11.mp3', './audio/sfx-11.wav'],
      volume: 1,
      onend: function() {
        console.log('11');
      }
    })
  }
]

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
