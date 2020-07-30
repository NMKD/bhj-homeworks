const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelector('.menu_sub');
const arrMenuLinks = Array.from(menuLink);
for (i = 0; i < arrMenuLinks.length; i++) {
    const arrMenuLink = arrMenuLinks[i];
    arrMenuLink.onclick = () => {
       event.preventDefault();
       //добавляем класс
       const nextElements = arrMenuLink.nextElementSibling;
       console.log(nextElements);
       //как сказать чтобы переключал классы между собой? а не по клику на ссулку 
       nextElements.classList.toggle('menu_active');
    } 
}