
'use strict';
const slides = document.getElementsByClassName('slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const arrSlides = Array.from(slides);
let indexSlide = 0;

const cliker = function (prev, next) {
    //лево
    prev.addEventListener('click', function(){
      //индекс картинки
      const page = valueIndex(arrSlides);
      indexSlide += page;
      page.classList.add('slider__item_active');
      console.log(page.classList.add('slider__item_active'))
    });
    //право
    next.addEventListener('click', function(){
        //индекс картинки
        const page = valueIndex(arrSlides);
        indexSlide -= page;
        page.classList.add('slider__item_active');
        console.log(page.classList.add('slider__item_active'))
      });
    
}

const valueIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let slideIndex = arr[i];
        slideIndex.classList.remove('slider__item_active');

        if (i > 0) {
            arr[i] = 0;
        } else if (i < 0) {
            arr[i] = arr.length;
        }

        return slideIndex;
    }
    
}
 cliker(prev, next);


