const tabs = Array.from(document.querySelectorAll('.tab'));
// console.log(tabs);
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
// console.log(tabsContent);
function clickTab () {
   for (let activeTab of tabs) {
        activeTab.addEventListener('click', () => {
          if (!activeTab.classList.contains('tab_active')) {
              activeTab.classList.add('tab_active');
              console.log(activeTab);
           } if (activeTab.classList.contains('tab_active')) {
              for (let tabContent of tabsContent) {
                 tabContent.classList.add('tab__content_active');
                 console.log(tabContent);
               }
            }  
        });
   }

   
}


clickTab ();

//не могу понять как реализовать удаление предыдущего класса/если использовать previousElementSibling то он удаляет вкладки..((()))