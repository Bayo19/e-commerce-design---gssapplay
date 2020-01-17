TweenMax.from(".pic-2", 1, {
    delay: 0.8,
    x: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".pic-1", 1, {
    delay: 0.8,
    x: -10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".pic1title", 0.95, {
    delay: 1.1,
    y: 7,
    x: 6,
    opacity: 0,
    ease: Expo.easeIn
})
TweenMax.from(".pic2title", 0.95, {
    delay: 1.1,
    y: 7,
    x: 6,
    opacity: 0,
    ease: Expo.easeIn
})



new WOW().init();