'use strict';
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelector('.tab__contents');
const tabNavigator = document.querySelector('.tab__navigation');
// console.log(tabs);
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
// console.log(tabsContent);
function removeClassOfTabs (arr, tabsActive) {
   arr.forEach(element => {
       if (tabsActive === element.closest('div.tab__navigation')) {
          element.classList.remove('tab_active');
       }
   });
}

//не получается изменить класс текста, как это сделать...

function changeClassOfContent (arr, tabsActive) {
   arr.forEach(element => {
       if (tabsActive === element.closest('tab__content')) {
           element.classList.remove('tab__content_active');
       } else if (!element.classList.contains('tab__content_active')) {
           element.classList.add('tab__content_active');
       }
   });
}


tabs.forEach(function(element) {
   element.addEventListener('click', function () {
      if (element.classList.contains('tab_active')) {
         removeClassOfTabs(tabs, element.closest('div.tab__navigation'));
         changeClassOfContent(tabsContent, element.closest('tab__content'));
      } else  {
         removeClassOfTabs(tabs, element.closest('div.tab__navigation'));
         changeClassOfContent(tabsContent, element.closest('tab__content'));
         element.classList.add('tab_active');
      }
   });
});



// function addClassOfTabs (arr) {
//    arr.forEach(element => {
//        if (!element.classList.contains('tab_active')) {
//           element.classList.add('tab_active');
//        }
//    });
// }

//function removeClassOfTabs (arr, tabsActive) {
//    arr.forEach(element => {
//       if (tabsActive === element.closest('div.tab__navigation') && tabsActive === element.closest('div.tab__contents"')) {
//          element.classList.remove('tab_active') && element.classList.remove('tab__content_active');
//       }
//   });
  
// }

// tabs.forEach(function(elem, ind) {
//   elem.previousElementSibling.onclick = function () {
//      if (elem.classList.contains('tab_active') && tabsContent[ind].classList.contains('tab__content_active')) {
//         removeClassOfTabs(tabs, elem.closest('div.tab__navigation')) && removeClassOfTabs(tabsContent, elem.closest('div.tab__contents'));
//         return;
//      } else {

//      }
//   }
// });


// function closeAllMenus(array, mainMenu) {
//    array.forEach(function (menu) {
//        (mainMenu === menu.closest('ul.menu_main')) ? menu.classList.remove('menu_active') : '';
//        });
// };
// subMenu.forEach(function (menu) {
//    menu.previousElementSibling.onclick = function () {
//        if (menu.classList.contains('menu_active')) {
//            closeAllMenus(subMenu, menu.closest('ul.menu_main'));
//            return false;
//        } else {
//            closeAllMenus(subMenu, menu.closest('ul.menu_main'));
//            menu.classList.add('menu_active');
//            return false;
//        };
//    };

