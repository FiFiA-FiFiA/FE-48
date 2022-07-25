AOS.init();

const sticky__header = document.querySelector("[sticky__header]");
const header__navigation = document.querySelector("[header__navigation]");
const navbar__btn = document.querySelector("[navbar__btn]");
const dorne__search__btn = document.querySelector("[dorne__search__btn]");
const dorne__search__form = document.querySelector("[dorne__search__form]");
const search__close__btn = document.querySelector("[search__close__btn]");

const scroll__top__btn = document.querySelector("[scroll__top__btn]");

const hero__search__tab__btn = document.querySelectorAll("[hero__search__tab__btn]");
const hero__search__tab__content = document.querySelectorAll("[hero__search__tab__content]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    sticky__header.classList.add("active");
  } else {
    sticky__header.classList.remove("active");
  }

  if (window.scrollY > 300) { 
    scroll__top__btn.classList.add("active");
  } else {
    scroll__top__btn.classList.remove("active");
  }
});

navbar__btn.onclick = () => {
  header__navigation.classList.toggle("active");
};

dorne__search__btn.onclick = () => {
  dorne__search__form.classList.add("active");
  search__close__btn.onclick = () => {
    dorne__search__form.classList.remove("active");
  };
};


hero__search__tab__btn.forEach((tab__btn, i) => {
  tab__btn.addEventListener('click', () => {
    hero__search__tab__btn.forEach((btn) =>{
      btn.classList.remove('active');
    })

    hero__search__tab__content.forEach((tab__content) =>{
      tab__content.classList.remove('active');
    })

    hero__search__tab__btn[i].classList.add('active');
    hero__search__tab__content[i].classList.add('active');
  });
});

let feature__destination__slider = new Swiper(".feature__destination__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

let features__restaurants__slider = new Swiper(".features__restaurants__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
