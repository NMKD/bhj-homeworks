
'use strict';
const slides = document.getElementsByClassName('slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliderArrows = document.querySelector('slider__arrows')
const arrSlides = Array.from(slides);


prev.addEventListener('click', function() {
   let indexForSlide = findIndex(arrSlides);
   arrSlides[indexForSlide].classList.remove('slider__item_active');
   prevMin(indexForSlide, arrSlides);
})

next.addEventListener('click', function() {
    let indexForSlide = findIndex(arrSlides);
    arrSlides[indexForSlide].classList.remove('slider__item_active');
    nextPlus(indexForSlide, arrSlides);
 })

function prevMin (ind, arr) {
   ind--
   arr[ind].classList.add('slider__item_active');
   ind < 0 ? ind = arr.length : '';
}

function nextPlus (ind, arr) {
    ind++
    arr[ind].classList.add('slider__item_active');
    ind > arr.length ? ind = 0 : '';
 }

function findIndex (arr) {
    let classIncludesOfArr = document.querySelector('.slider__item_active');
         // console.log(classIncludesOfArr)
    return arr.indexOf(classIncludesOfArr);
}
 
// console.log(findIndex(arrSlides))




//  renderWord(word) {
//     const html = [...word]
//       .map(
//         (s, i) =>
//           `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
//       )
//       .join('');
//     this.wordElement.innerHTML = html;
//     this.currentSymbol = this.wordElement.querySelector('.symbol_current');
//   }
// В this.currentSymbol записывается символ, который нужно ввести.
// Соответственно в обработчике событий, который Вам нужно написать, при срабатывании keyup нужно полученный символ с клавиатуры сравнить с this.currentSymbol

// / Check input Symbols
// checkSymbol(inputSymbolEN, inputSymbolRU, currentSymbol) {
//   if (inputSymbolEN === currentSymbol || inputSymbolRU === currentSymbol) {
//     ++this.winsSymbols;
//     ++this.wordIndex;
//     this.success();
//   } else {
//     ++this.lossSymbols;
//     this.fail();
//   };
// };
// // Trace KEYUP event
// registerEvents() {
//   document.addEventListener('keyup', event => {
//     try {
//       this.checkSymbol(this.keyCodeToChar[event.keyCode][0].toLowerCase(),
//                       this.keyCodeToChar[event.keyCode][1].toLowerCase(),
//                       this.wordArray[this.wordIndex].toLowerCase());
//     } catch (TypeError) {
//     };
//   });
// };