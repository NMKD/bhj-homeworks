
'use strict';
const slides = document.getElementsByClassName('slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const arrSlides = Array.from(slides);
let currentIndex = 0;

prev.addEventListener('click', function() {
    arrSlides.findIndex( function (currentValue, index) {
        //    console.log(index)
        //    console.log(currentValue)
        //    console.log(arr)
           if (currentValue.classList.contains('slider__item_active')) {
               currentValue.classList.remove('slider__item_active');
               finndCurrentIndex (index, arrSlides);
               console.log( finndCurrentIndex (index, arrSlides));
           } else {
               currentValue.classList.add('slider__item_active');
               finndCurrentIndex (index, arrSlides);
           }
        })


        
})

function finndCurrentIndex (index, arr) {

    if (index == 0) {
        index++
    } else if (index > arr.length) {
        index = 0
    } else {
        index = arr.length
    }
}
 


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