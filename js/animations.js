export function fartOne() {
  const timeline = gsap.timeline();

  timeline
    .to('.artwork__svg', {
      y: -50,
      ease: 'bounce',
      delay: .2,
      duration: .25
    })
    .to('.artwork__svg', {
      y: -75,
      rotation: '15',
      ease: 'bounce',
      duration: .5
    })
    .to('.artwork__svg', {
      y: -75,
      rotation: '-15',
      ease: 'bounce',
      duration: .5
    })
    .to('.artwork__svg', {
      y: 0,
      rotation: 0,
      ease: 'sine',
      duration: .5
    });
}

export function fartTwo() {
  const timeline = gsap.timeline();

  timeline
    .to('.artwork__svg', {
      y: -100,
      ease: 'sine',
      delay: .2,
      duration: .25
    }, 0)
    .to('.artwork__svg', {
      x: 5,
      rotate: 5,
      yoyo: true,
      repeat: 10,
      duration: .05
    }, 0)
    .to('.artwork__svg', {
      x: -5,
      rotate: -5,
      yoyo: true,
      repeat: 10,
      duration: .05
    }, 0)
    .to('.artwork__svg', {
      y: 0,
      x: 0,
      rotate: 0,
      ease: 'bounce',
      duration: .25
    }, "+=.1")
}

export function fartThree() {
  const timeline = gsap.timeline();

  timeline
    .to('.artwork__svg', {
      y: -100,
      ease: 'sine',
      delay: .2,
      duration: .25
    }, 0)
    .to('.artwork__svg', {
      x: 5,
      rotate: 360,
      yoyo: false,
      repeat: 4,
      duration: .29
    }, 0)
    .to('.artwork__svg', {
      y: 0,
      x: 0,
      rotate: 0,
      ease: 'bounce',
      duration: .25
    }, "+=.1")
}
