let input = document.querySelector("[input]");
let text = document.querySelector("[text]");
let submit__btn = document.querySelector("[submit]");
let random__number = Math.floor(Math.random() * 20);
let counter = 0;

function reset() {
  random__number = Math.floor(Math.random() * 20);
  console.log(random__number);
  counter = 0;
  text.innerText = ``;
  input.value = "";
  input.removeAttribute("disabled");
  input.classList.remove("disabled");
  submit__btn.removeAttribute("disabled");
  submit__btn.classList.remove("disabled");
}

function submit() {
  let value = input.value;

  if (value.length <= 20 && value <= 20) {

    if (random__number == value) {
      text.innerText = `You Win number of attempts ( ${counter} )`;
      text.style.color = "#10ba01";
      input.setAttribute("disabled", "");
      submit__btn.setAttribute("disabled", "");
      submit__btn.classList.add("disabled");
      input.classList.add("disabled");
    } else {
      text.innerText = `Opps`;
      text.style.color = "#f00";
      input.removeAttribute("disabled");
      input.classList.remove("disabled");
      submit__btn.removeAttribute("disabled");
      submit__btn.classList.remove("disabled");

      setTimeout(() => {
        input.value = "";
        text.innerText = ``;
      }, 2000);
    }

    if (counter <= 2 && random__number == value) {
      text.innerText = `cool you win number of attempts ( ${counter} )`;
      text.style.color = "#10ba01";
    }


  } else {
    text.innerText = `cannot be more than 20`;
    text.style.color = "#fd0";

    setTimeout(() => {
      input.value = "";
      text.innerText = ``;
    }, 2000);
  }


  if (value.length == 0) {
    text.innerText = `input cannot be empty`;

    setTimeout(() => {
      input.value = "";
      text.innerText = ``;
    }, 2000);
  }

  counter++;
}

console.log(random__number);