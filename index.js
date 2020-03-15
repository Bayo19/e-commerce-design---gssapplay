TweenMax.from(".pic-2", 1, {
    delay: 0.8,
    x: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".pic-1", 1, {
    delay: 0.,
    x: -10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".pic1title", 0.95, {
    delay: 0.99,
    y: 7,
    x: 6,
    opacity: 0,
    ease: Expo.easeIn
})
TweenMax.from(".pic2title", 0.95, {
    delay: 1.01,
    y: 7,
    x: 6,
    opacity: 0,
    ease: Expo.easeIn
})

let dynamic = document.querySelector('.dynamic-info-p');
let twitter = document.querySelector('.fa-twitter-square');
let facebook = document.querySelector('.fa-facebook-square');
let youtube = document.querySelector('.fa-youtube-square');
let insta = document.querySelector('.fa-instagram');

twitter.addEventListener('mouseover', function() {
    dynamic.innerHTML = '<a href="#">Yoshi Twitter</a>';
});

facebook.addEventListener('mouseover', function() {
    dynamic.innerHTML = '<a href="#">Yoshi Facebook</a>';
});
youtube.addEventListener('mouseover', function() {
    dynamic.innerHTML = '<a href="#">Yoshi Youtube</a>';
});

insta.addEventListener('mouseover', function() {
    dynamic.innerHTML = '<a href="#">Yoshi Instagram</a>';
});




new WOW().init();