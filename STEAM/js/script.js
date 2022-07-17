let body = document.body;
let page__content__overlay = document.querySelector("[page__content__overlay]");
let nav__bar__btn = document.querySelector("[nav__bar__btn]");
let nav__item__wrapper__mob = document.querySelector("[nav__item__wrapper__mob]");
let menu__down__btn = document.querySelectorAll("[menu__down__btn]");
let submenu__item__wrapper = document.querySelectorAll("[submenu__item__wrapper]");

nav__bar__btn.addEventListener("click", () => {
  nav__item__wrapper__mob.classList.add("active");
  page__content__overlay.classList.add("active");
  body.style.overflow = "hidden";
});

page__content__overlay.addEventListener("click", () => {
  nav__item__wrapper__mob.classList.remove("active");
  page__content__overlay.classList.remove("active");
  body.style.overflow = "auto";

  submenu__item__wrapper.forEach((submenu__item) => {
    submenu__item.classList.remove("active");
  });

  menu__down__btn.forEach((down__btn) => {
    down__btn.classList.remove("active");
  });
});

menu__down__btn.forEach((btn, i) => {
  btn.onclick = () => {
    submenu__item__wrapper.forEach((submenu__item) => {
      submenu__item.classList.remove("active");
    });

    menu__down__btn.forEach((down__btn) => {
      down__btn.classList.remove("active");
    });

    menu__down__btn[i].classList.add("active");
    submenu__item__wrapper[i].classList.add("active");
  };
});
