const arrRotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
arrRotatorCase.forEach( (element) => {
    setInterval( () => {
       if (element.classList.contains('rotator__case_active'))  {
          element.classList.remove('rotator__case_active');
          
        } else {
          element.classList.add('rotator__case_active');
        } 
        element.style.color = element.dataset.color;
    },element.dataset.speed);    
});


// почему то сохраняет значение textContent и прибавляет классы к старым значениям