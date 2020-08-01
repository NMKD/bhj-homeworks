
'use strict';
const slides = document.getElementsByClassName('slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const arrSlides = Array.from(slides);

arrSlides.forEach(function(item, i, arr) {
    i = 0;
    // console.log(i, item, arr)
    next.onclick = function(){
        if (item == true) {i++}
        else {item = arr.length}
        // console.log(i++)
    }
});
//я так понимаю нужно использовать метод Lisner чтобы можно было бы подключить два метода onclick?
// + как реализовать чтобы синхронно двигались картинки с индектом?

// prev.onclick = function(){
//     if (item == true) {i--}
//     else {item = arr.length}
//     console.log(i--)
// }