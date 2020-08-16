const arrRotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
arrRotatorCase.forEach( (element) => {
    setInterval( () => {
       if (element.classList.contains('rotator__case_active'))  {
          element.classList.toggle('rotator__case_active');
          
        } else {
          element.classList.add('rotator__case_active');
        } 
        element.style.color = element.dataset.color;
    },element.dataset.speed);    
});


// как реализовать/чтобы textContent менялася, сейчас происходит конкатенация строк? 