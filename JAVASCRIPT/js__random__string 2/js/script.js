const input__word__length = document.querySelector("[input__word__length]");
const input__string__length = document.querySelector("[input__string__length]");
const title__word__length = document.querySelector("[title__word__length]");
const title__string__length = document.querySelector("[title__string__length]");
const words__container = document.querySelector("[words__container]");
const btn__print = document.querySelector("[btn__print]");

const characters = 'abcdefghijklmnopqrstuvwxyz';
const vowel = ["a", "e", "i", "o", "u"];
const consonat = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let vowel__count = 0;
let consonat__count = 0;

function print__random__string(word__length, string__length) {
  let characters__length = characters.length;

  for (var i = 0; i < word__length; i++) {
    let create__words = document.createElement('p');
    create__words.classList.add('word');
    create__words.setAttribute('word', '');
    words__container.appendChild(create__words);
  }

  for (let i = 0; i < string__length; i++) {
    let words = document.querySelectorAll('[word]');
    for (const word of words) {
      word.textContent += characters.charAt(Math.floor(Math.random() * characters__length));
    }
  }
}

function get__string() {
  let words = document.querySelectorAll('[word]');
  vowel__count = 0;
  consonat__count = 0;

  words.forEach((word) => {
    let words__textcontent = word.textContent;
    for (const text of words__textcontent) {

      if (vowel.includes(text)) {
        vowel__count++;
      }
      if (consonat.includes(text)) {
        consonat__count++;
      }
    }

    if (vowel__count < consonat__count) {
      word.classList.add('green');
    }
    if (vowel__count == consonat__count) {
      word.classList.add('orange');
    }
    if (vowel__count > consonat__count) {
      word.classList.add('red');
    }
  });
}

function print__word() {
  words__container.innerHTML = "";
  let input__word__length__value = input__word__length.value;
  let input__string_length__value = input__string__length.value;

  print__random__string(input__word__length__value, input__string_length__value);
  get__string();
}

function word__length() {
  let input__word__length__value = input__word__length.value;
  title__word__length.textContent = `Length of words: ${input__word__length__value}`;
}

function string__length() {
  let input__string_length__value = input__string__length.value;
  title__string__length.textContent = `Length of lettrs: ${input__string_length__value}`;
}

input__word__length.addEventListener("input", word__length);
input__string__length.addEventListener("input", string__length);
btn__print.addEventListener("click", print__word);

document.body.addEventListener("keypress", e => {
  if (e.key == "Enter" || e.code == "Space") {
    print__word();
  }
})