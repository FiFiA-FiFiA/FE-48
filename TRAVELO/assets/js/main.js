let body = document.body;
let page__content__overlay = document.querySelector("[page__content__overlay]");
let nav__open__btn = document.querySelector("[nav__open__btn]");
let nav__close__btn = document.querySelector("[nav__close__btn]");
let navigation__mobile__container = document.querySelector(
  "[navigation__mobile__container]"
);
let header = document.querySelector("[header]");
let search__overlay__container = document.querySelector(
  "[search__overlay__container]"
);
let header__search__btn = document.querySelector("[header__search__btn]");
let header__search__shadow = document.querySelector(
  ".search__overlay__container .search__shadow"
);
let slider__prew__btn = document.querySelector("[slider__prew__btn]");
let slider__next__btn = document.querySelector("[slider__next__btn]");
let slider__wrapper = document.querySelector("[slider__wrapper]");

let travel__type__wrapper = document.querySelector("[travel__type__wrapper]");
let select__wrapper = document.querySelector("[select__wrapper]");

let nav__item = document.querySelectorAll("[nav__item]");
let submenu__item__wrapper = document.querySelectorAll(
  "[submenu__item__wrapper]"
);

nav__open__btn.addEventListener("click", () => {
  navigation__mobile__container.classList.add("active");
  page__content__overlay.classList.add("active");
  body.style.overflow = "hidden";
});

header__search__btn.addEventListener("click", () => {
  search__overlay__container.classList.add("active");
  body.style.overflow = "hidden";
});

header__search__shadow.addEventListener("click", () => {
  search__overlay__container.classList.remove("active");
  body.style.overflow = "auto";
});

page__content__overlay.addEventListener("click", () => {
  navigation__mobile__container.classList.remove("active");
  page__content__overlay.classList.remove("active");
  body.style.overflow = "auto";

  submenu__item__wrapper.forEach((submenu__item) => {
    submenu__item.classList.remove("active");
  });

  nav__item.forEach((down__btn) => {
    down__btn.classList.remove("active");
  });
});

nav__close__btn.addEventListener("click", () => {
  navigation__mobile__container.classList.remove("active");
  page__content__overlay.classList.remove("active");
  body.style.overflow = "auto";

  submenu__item__wrapper.forEach((submenu__item) => {
    submenu__item.classList.remove("active");
  });

  nav__item.forEach((down__btn) => {
    down__btn.classList.remove("active");
  });
});

slider__next__btn.addEventListener("click", slider__next);

slider__prew__btn.addEventListener("click", slider__prev);

function slider__next() {
  slider__wrapper.scrollBy(1, 0);
}

function slider__prev() {
  slider__wrapper.scrollBy(-1, 0);
}

setInterval(() => {
  slider__wrapper.scrollBy(1, 0);
  let sum = slider__wrapper.scrollLeft + slider__wrapper.clientWidth;
  if (slider__wrapper.scrollWidth == sum) {
    slider__prev();
    setTimeout(() => {
      slider__prev();
      setTimeout(() => {
        slider__prev();
      }, 400);
    }, 100);
  } else if (slider__wrapper.scrollLeft == 0) {
    slider__next();
  }
}, 4000);

travel__type__wrapper.addEventListener("click", () => {
  select__wrapper.classList.toggle("active");
});

nav__item.forEach((btn, i) => {
  btn.onclick = () => {
    nav__item[i].classList.toggle("active");

    if (nav__item[i].classList.contains("active")) {
      submenu__item__wrapper[i].classList.add("active");
    } else {
      submenu__item__wrapper[i].classList.remove("active");
    }
  };
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

let testimonial__slider__wrapper = document.querySelector(
  "[testimonial__slider__wrapper]"
);
let testimonial__slide = document.querySelectorAll("[testimonial__slide]");
let pagination__btn = document.querySelectorAll("[pagination__btn]");

testimonial__slider__wrapper.addEventListener("scroll", () => {
  let curent = "";

  testimonial__slide.forEach((slide) => {
    let offset__Left = slide.offsetLeft;
    let slide__Width = slide.offsetWidth;
    if (
      testimonial__slider__wrapper.scrollLeft >=
      offset__Left - slide__Width / 2
    ) {
      curent = slide.getAttribute("id");
    }
  });

  pagination__btn.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.classList.contains(curent)) {
      btn.classList.add("active");
    }
  });
});
