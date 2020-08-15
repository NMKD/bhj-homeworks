const arrReveal = Array.from(document.getElementsByClassName('reveal'));
const reveal = document.querySelector('.reveal') 
window.addEventListener('scroll', function() {
    // //  console.log(document.getElementsByClassName('reveal'));
    // console.log(window.pageYOffset)

    console.log(reveal.getBoundingClientRect().y)
    arrReveal.forEach(element => {
        if (element.getBoundingClientRect().y < 370) {
            element.classList.add('reveal_active')
        } 
    });
  });

