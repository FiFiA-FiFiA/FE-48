const balls = document.querySelectorAll("[ball]");
const ball__resoult = document.querySelectorAll("[ball__resoult]");
const your__rasult = document.querySelectorAll("[your__rasult]");
const preview_input = document.querySelectorAll("[preview_input]");
const page__overlay = document.querySelector("[page__overlay]");
const start__btn = document.querySelector("[start__btn]");
const submit__btn = document.querySelector("[submit__btn]");
const try__again__btn = document.querySelector("[try__again__btn]");
const inner__text = document.querySelector("[inner__text]");
const input = document.querySelector("[input]");

let clicked__count = 0;
let matched__counter = 0;

function starting__board() {
  clicked__count++;
  if (clicked__count == 1) {
    start__btn.classList.remove('active');
    setTimeout(() => {
      show__page__overlay();
      results(combination);
    }, 2000)
  }

  let combination = [];

  while (combination.length != 6) {
    let random__number = Math.floor(Math.random() * 36);
    if (random__number > 1) {
      if (combination.indexOf(random__number) == -1) {
        combination.push(random__number)
      }
    }
  }

  combination.forEach((comb, index) => {
    balls[index].innerText = comb;
    ball__resoult[index].innerText = comb;
  });

}

let input__arr = [];

function check__number() {
  if (input.value <= 36 && input.value != "" && input.value > 0) {
    if (input__arr.indexOf(input.value) == -1) {
      input__arr.push(input.value);
    }
  } else {
    input.value = "";
    input.focus();
  }
}

function submit__number() {
  if (input.value != "") {
    input__arr.forEach((arr, index) => {
      preview_input[index].innerText = arr;
      your__rasult[index].textContent = arr;
    })
    input.value = "";
    input.focus();
  }
  if (input__arr.length == 6) {
    document.querySelector(".form").classList.add("disabled");
    input.value = "";
    start__btn__active();
  }
}

function show__page__overlay() {
  page__overlay.classList.add('active');
}

function start__btn__active() {
  start__btn.classList.add('active');
}

function results(combination) {
  combination.forEach((com, index) => {
    if (com == input__arr[index]) {

      matched__counter++;
      console.log("matched", matched__counter);
      if (matched__counter == 1) {
        inner__text.innerText = `Result: Matched 1 digit`;
      } else if (matched__counter == 2) {
        inner__text.innerText = `Result: Matched 2 digit`;
      } else if (matched__counter == 3) {
        inner__text.innerText = `Result: Matched 3 digit`;
      } else if (matched__counter == 4) {
        inner__text.innerText = `Result: Matched 4 digit`;
      } else if (matched__counter == 5) {
        inner__text.innerText = `Result: Matched 5 digit`;
      } else if (matched__counter == 6) {
        inner__text.innerText = `Wtf: Matched 6 digit`;
      }

    } else {
      if (!matched__counter > 0) {
        inner__text.innerText = `Result: Not matched`;
        console.log("not matched");
      }
      your__rasult[index].classList.add('matched')
    }
  })

}

function try__again() {
  clicked__count = 0;
  input__arr = [];
  combination = [];
  matched__counter = 0;

  balls.forEach((ball, index) => {
    ball.innerText = '';
    preview_input[index].innerText = "";
    ball__resoult[index].innerText = "";
    your__rasult[index].innerText = "";
    your__rasult[index].classList.remove('matched');
  });

  input.value = "";

  document.querySelector(".form").classList.remove("disabled");
  page__overlay.classList.remove('active');
}

input.addEventListener('change', check__number);
start__btn.addEventListener('click', starting__board);
submit__btn.addEventListener('click', submit__number);
try__again__btn.addEventListener('click', try__again);