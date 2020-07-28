const modalMain = document.getElementById('modal_main');
const modalSucces = document.getElementById('modal_success');
const modalClose = document.querySelector('.modal__close');
const showSuccess = document.querySelector('.show-success');


modalClose.onclick = function() {
    if (modalMain) {
        modalMain.classList.remove('modal_active');
    } else {
        modalSucces.classList.remove('modal_active');
    }
}

showSuccess.onclick = function(){
    modalSucces.classList.add('modal_active');
}

