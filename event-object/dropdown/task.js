'use srtict';
const menuActive = document.querySelector('.dropdown__value');
const linkMenu = document.querySelectorAll('.dropdown__link');
const listMenu = document.querySelector('.dropdown__list');
const arrLinks = Array.from(linkMenu);

function clickOnDropdown () {
    listMenu.classList.add('dropdown__list_active');
};

function changeText (event) {
    event.preventDefault();
    for (let i = 0; i < arrLinks.length; i++) {
        // console.log(i)
        let valueLink = arrLinks[i];
        // console.log(valueLink)
        menuActive.textContent = valueLink.closest('.dropdown__item');
        console.log(valueLink.closest('.dropdown__item'))
    }
};

menuActive.addEventListener("click", clickOnDropdown);
listMenu.addEventListener("click", changeText);

//почему то возвращает весь массив или он должен подставить ссылку 
