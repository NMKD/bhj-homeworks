
'use strict';
const slides = document.getElementsByClassName('slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const arrSlides = Array.from(slides);


// использовала тенарный знак, без циклов и услови1, переключает только 1 слайдер
const cliker = function (prev, next) {
    //лево
    prev.addEventListener('click', function(){
        arrSlides.findIndex((item, index) => index == 'slider__item_active' ? item.classList.remove('slider__item_active') : item.classList.add('slider__item_active'));

  
    });
    //право
    next.addEventListener('click', function(){
        arrSlides.findIndex((item, index) => index === 'slider__item_active' ? item.classList.remove('slider__item_active') : item.classList.add('slider__item_active'));
            
    });
    
}

 cliker(prev, next);




