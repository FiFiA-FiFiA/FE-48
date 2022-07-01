let sign__up__btn = document.querySelector('[sign__up]');
let close__btn = document.querySelector('[close__btn]');
let sign__up__form = document.querySelector('[sign__up__form]');

sign__up__btn.addEventListener('click', () => {
  sign__up__form.classList.add('show');
  
  close__btn.addEventListener('click', () => {
    sign__up__form.classList.remove('show');
  });
});

